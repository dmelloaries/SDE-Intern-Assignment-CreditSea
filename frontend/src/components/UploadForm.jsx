import React, { useState } from 'react';
import { FaCloudUploadAlt, FaFileAlt, FaCheckCircle, FaExclamationTriangle, FaFile } from 'react-icons/fa';

const UploadForm = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'text/xml') {
      setFile(selectedFile);
      setError('');
    } else {
      setError('Please select a valid XML file');
      setFile(null);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const droppedFile = files[0];
      if (droppedFile.type === 'text/xml' || droppedFile.name.endsWith('.xml')) {
        setFile(droppedFile);
        setError('');
      } else {
        setError('Please drop a valid XML file');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('xmlFile', file);
    try {
      const API = import.meta.env.VITE_BACKEND_URL;
      const response = await fetch(`${API}/api/upload`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        onUploadSuccess(data.id);
        setFile(null);
        e.target.reset();
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Upload failed');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Drag and Drop Area */}
        <div
          className={`relative border-2 border-dashed rounded-xl p-12 transition-all duration-300 cursor-pointer ${
            dragActive
              ? 'border-blue-500 bg-blue-500/10'
              : file
              ? 'border-green-500/50 bg-green-500/5'
              : 'border-gray-700 bg-gray-800/30 hover:border-blue-500/50 hover:bg-gray-800/50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept=".xml"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            id="file-upload"
          />

          <div className="text-center">
            {file ? (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <FaFileAlt className="text-green-400 text-3xl" />
                </div>
                <p className="text-lg font-semibold text-white mb-2">{file.name}</p>
                <p className="text-sm text-gray-400">
                  {(file.size / 1024).toFixed(2)} KB • Ready to upload
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                  <FaCloudUploadAlt className="text-blue-400 text-3xl" />
                </div>
                <p className="text-lg font-semibold text-white mb-2">Drag & drop your XML file</p>
                <p className="text-gray-400 mb-4">or click to browse</p>
                <div className="inline-flex items-center gap-2 bg-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium border border-gray-700">
                  <FaFile className="text-gray-400" />
                  XML files only
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center gap-3">
            <FaExclamationTriangle className="text-red-400 flex-shrink-0" />
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}

        {/* Upload Button */}
        <button
          type="submit"
          disabled={uploading || !file}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
            uploading
              ? 'bg-gray-700 cursor-not-allowed text-gray-400'
              : file
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transform hover:-translate-y-0.5'
              : 'bg-gray-800 cursor-not-allowed text-gray-500 border border-gray-700'
          }`}
        >
          {uploading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-400 border-t-white"></div>
              Processing...
            </>
          ) : file ? (
            <>
              <FaCheckCircle />
              Upload & Analyze
            </>
          ) : (
            'Select File to Upload'
          )}
        </button>
      </form>

      {/* Instructions */}
      <div className="mt-8 bg-gray-800/50 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">Upload Guidelines</h3>
        <ul className="text-gray-400 space-y-2 text-sm">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-0.5">•</span>
            <span>Experian XML credit report format</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-0.5">•</span>
            <span>Maximum file size: 10MB</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-0.5">•</span>
            <span>.xml format only</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-0.5">•</span>
            <span>Processing takes a few seconds</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UploadForm;