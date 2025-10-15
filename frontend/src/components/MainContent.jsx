import React from "react";
import UploadForm from "./UploadForm";
import ReportsList from "./ReportsList";
import ReportDisplay from "./ReportDisplay";

const MainContent = ({
  activeSection,
  reports,
  selectedReport,
  loading,
  onUploadSuccess,
  onReportSelect,
  onFetchReports,
}) => {
  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Left Section */}
      <div className="flex-1 overflow-auto">
        <div className="min-h-screen bg-gray-950 p-8">
          {activeSection === "generate" && (
            <div>
              <div className="justify-center mb-4">
                <h2 className="text-4xl font-bold text-white mb-2 text-center justify-center">
                  Generate Report
                </h2>
                <p className="text-gray-400 text-center">
                  Upload your Experian XML credit report
                </p>
              </div>
              <UploadForm onUploadSuccess={onUploadSuccess} />
            </div>
          )}

          {activeSection === "view" && (
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-2">
                  All Reports
                </h2>
                <p className="text-gray-400">Select a report to view details</p>
              </div>
              <ReportsList
                reports={reports}
                selectedReport={selectedReport}
                loading={loading}
                onReportSelect={onReportSelect}
                onFetchReports={onFetchReports}
              />
            </div>
          )}
        </div>
      </div>

      {/* Right Section - Report Details */}
      {activeSection === "view" && selectedReport && (
        <div className="w-96 bg-gray-900 border-l border-gray-800 overflow-auto">
          <ReportDisplay report={selectedReport} />
        </div>
      )}
    </div>
  );
};

export default MainContent;
