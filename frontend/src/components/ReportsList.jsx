import React from 'react';
import { FaSpinner, FaFileAlt, FaCreditCard, FaBuilding, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const ReportsList = ({ reports, selectedReport, loading, onReportSelect, onFetchReports }) => {
  React.useEffect(() => {
    onFetchReports();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <FaSpinner className="mx-auto h-12 w-12 text-blue-500 animate-spin mb-4" />
          <p className="text-gray-400 font-medium">Loading reports...</p>
        </div>
      </div>
    );
  }

  if (reports.length === 0) {
    return (
      <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-12 text-center">
        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaFileAlt className="text-gray-600 text-2xl" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">No Reports Yet</h3>
        <p className="text-gray-400">Upload your first credit report to get started</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {reports.map((report) => {
        const isSelected = selectedReport && selectedReport._id === report._id;
        const creditScore = report.creditScore;
        let scoreColor = 'text-gray-400';
        let scoreBgColor = 'bg-gray-800/50';

        if (creditScore >= 750) {
          scoreColor = 'text-green-400';
          scoreBgColor = 'bg-green-500/10';
        } else if (creditScore >= 650) {
          scoreColor = 'text-yellow-400';
          scoreBgColor = 'bg-yellow-500/10';
        } else {
          scoreColor = 'text-red-400';
          scoreBgColor = 'bg-red-500/10';
        }

        return (
          <button
            key={report._id}
            onClick={() => onReportSelect(report)}
            className={`text-left p-6 rounded-xl border transition-all duration-300 group cursor-pointer ${
              isSelected
                ? 'bg-gray-800 border-blue-500 ring-2 ring-blue-500/30 shadow-lg shadow-blue-500/20'
                : 'bg-gray-800/40 border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/60'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {report.name || 'Unknown User'}
                </h3>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${scoreBgColor} ${scoreColor} border-gray-700`}>
                  <span>{creditScore}</span>
                </div>
              </div>
              {isSelected && (
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
              )}
            </div>

            <div className="space-y-2 mb-4 text-sm">
              <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                <FaCreditCard className="text-gray-500" />
                <span>{report.reportSummary?.totalAccounts || 0} Accounts</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                <FaBuilding className="text-gray-500" />
                <span>{report.reportSummary?.activeAccounts || 0} Active</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                <FaCalendarAlt className="text-gray-500" />
                <span>
                  {new Date(report.uploadedAt).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>

            {isSelected && (
              <div className="pt-4 border-t border-gray-700 flex items-center gap-2 text-blue-400 text-sm font-medium">
                <span>Viewing</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ReportsList;