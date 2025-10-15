import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {
  const [activeSection, setActiveSection] = useState('generate');
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (activeSection === 'view') {
      fetchReports();
    }
  }, [activeSection]);

  const fetchReports = async () => {
    setLoading(true);
    try {
      const API = import.meta.env.VITE_BACKEND_URL;
      const response = await fetch(`${API}/api/reports`);
      if (response.ok) {
        const data = await response.json();
        setReports(data);
        setSelectedReport(null);
      }
    } catch (error) {
      console.error('Error fetching reports:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUploadSuccess = async (id) => {
    await fetchReports();
    setActiveSection('view');
    const API = import.meta.env.VITE_BACKEND_URL;
    const updatedReports = await fetch(`${API}/api/reports`).then(res => res.json());
    const newReport = updatedReports.find(r => r._id === id);
    if (newReport) {
      setSelectedReport(newReport);
    }
  };

  const handleReportSelect = (report) => {
    setSelectedReport(report);
  };

  return (
    <div className="flex h-screen bg-gray-950">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <MainContent
        activeSection={activeSection}
        reports={reports}
        selectedReport={selectedReport}
        loading={loading}
        onUploadSuccess={handleUploadSuccess}
        onReportSelect={handleReportSelect}
        onFetchReports={fetchReports}
      />
    </div>
  );
};

export default App;