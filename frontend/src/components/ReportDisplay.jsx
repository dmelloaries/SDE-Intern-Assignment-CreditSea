import React from "react";
import {
  FaUser,
  FaCreditCard,
  FaChartBar,
  FaBuilding,
  FaRupeeSign,
  FaCalendarAlt,
} from "react-icons/fa";

const ReportDisplay = ({ report }) => {
  if (!report || !report.reportSummary) return null;

  const getScoreColor = (score) => {
    if (score >= 750)
      return "text-green-400 bg-green-500/10 border-green-500/30";
    if (score >= 650)
      return "text-yellow-400 bg-yellow-500/10 border-yellow-500/30";
    return "text-red-400 bg-red-500/10 border-red-500/30";
  };

  const getScoreLabel = (score) => {
    if (score >= 750) return "Excellent";
    if (score >= 650) return "Good";
    return "Poor";
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950 overflow-hidden">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-gray-900/95 backdrop-blur border-b border-gray-800 p-6 z-10">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <FaCreditCard className="text-blue-400" />
          Report Details
        </h3>
        <p className="text-sm text-gray-400 mt-1">
          Comprehensive credit analysis
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Credit Score Card */}
        <div className="bg-gray-800/40 border border-gray-700 rounded-lg p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Credit Score
          </p>
          <div className="flex items-end justify-between">
            <div>
              <div
                className={`inline-flex items-center px-4 py-2 rounded-lg text-2xl font-bold border ${getScoreColor(
                  report.creditScore
                )}`}
              >
                {report.creditScore}
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {getScoreLabel(report.creditScore)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">Generated</p>
              <p className="text-sm font-medium text-gray-300">
                {new Date(report.uploadedAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Personal Information
          </p>
          <div className="space-y-2">
            <div className="bg-gray-800/40 border border-gray-700 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1 flex items-center gap-2">
                <FaUser className="text-gray-600 text-xs" />
                Full Name
              </p>
              <p className="text-sm font-medium text-white">
                {report.name || "N/A"}
              </p>
            </div>
            <div className="bg-gray-800/40 border border-gray-700 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1 flex items-center gap-2">
                <FaChartBar className="text-gray-600 text-xs" />
                Mobile Phone
              </p>
              <p className="text-sm font-medium text-white">
                {report.mobilePhone || "N/A"}
              </p>
            </div>
            <div className="bg-gray-800/40 border border-gray-700 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1 flex items-center gap-2">
                <FaChartBar className="text-gray-600 text-xs" />
                PAN
              </p>
              <p className="text-sm font-medium text-white font-mono">
                {report.pan || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Account Summary */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Account Summary
          </p>
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-gray-800/40 border border-gray-700 rounded-lg p-3 hover:border-gray-600 transition-colors">
              <div className="flex items-center gap-2">
                <FaCreditCard className="text-blue-400 text-sm" />
                <span className="text-sm text-gray-400">Total Accounts</span>
              </div>
              <span className="font-semibold text-white text-lg">
                {report.reportSummary.totalAccounts}
              </span>
            </div>
            <div className="flex items-center justify-between bg-gray-800/40 border border-gray-700 rounded-lg p-3 hover:border-gray-600 transition-colors">
              <div className="flex items-center gap-2">
                <FaBuilding className="text-green-400 text-sm" />
                <span className="text-sm text-gray-400">Active Accounts</span>
              </div>
              <span className="font-semibold text-white text-lg">
                {report.reportSummary.activeAccounts}
              </span>
            </div>
            <div className="flex items-center justify-between bg-gray-800/40 border border-gray-700 rounded-lg p-3 hover:border-gray-600 transition-colors">
              <div className="flex items-center gap-2">
                <FaCreditCard className="text-red-400 text-sm" />
                <span className="text-sm text-gray-400">Closed Accounts</span>
              </div>
              <span className="font-semibold text-white text-lg">
                {report.reportSummary.closedAccounts}
              </span>
            </div>
          </div>
        </div>

        {/* Financial Overview */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Financial Overview
          </p>
          <div className="space-y-2">
            <div className="bg-gray-800/40 border border-gray-700 rounded-lg p-3 hover:border-gray-600 transition-colors">
              <p className="text-xs text-gray-500 mb-1 flex items-center gap-2">
                <FaRupeeSign className="text-purple-400 text-xs" />
                Current Balance
              </p>
              <p className="text-lg font-bold text-purple-400">
                ₹{report.reportSummary.currentBalance.toLocaleString("en-IN")}
              </p>
            </div>
            <div className="bg-gray-800/40 border border-gray-700 rounded-lg p-3 hover:border-gray-600 transition-colors">
              <p className="text-xs text-gray-500 mb-1 flex items-center gap-2">
                <FaRupeeSign className="text-indigo-400 text-xs" />
                Secured Amount
              </p>
              <p className="text-lg font-bold text-indigo-400">
                ₹
                {report.reportSummary.securedAccountsAmount.toLocaleString(
                  "en-IN"
                )}
              </p>
            </div>
            <div className="bg-gray-800/40 border border-gray-700 rounded-lg p-3 hover:border-gray-600 transition-colors">
              <p className="text-xs text-gray-500 mb-1 flex items-center gap-2">
                <FaRupeeSign className="text-orange-400 text-xs" />
                Unsecured Amount
              </p>
              <p className="text-lg font-bold text-orange-400">
                ₹
                {report.reportSummary.unsecuredAccountsAmount.toLocaleString(
                  "en-IN"
                )}
              </p>
            </div>
            <div className="bg-gray-800/40 border border-gray-700 rounded-lg p-3 hover:border-gray-600 transition-colors">
              <p className="text-xs text-gray-500 mb-1 flex items-center gap-2">
                <FaChartBar className="text-teal-400 text-xs" />
                Last 7 Days Enquiries
              </p>
              <p className="text-lg font-bold text-teal-400">
                {report.reportSummary.last7DaysEnquiries}
              </p>
            </div>
          </div>
        </div>

        {/* Credit Accounts */}
        {report.creditAccounts && report.creditAccounts.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Credit Accounts ({report.creditAccounts.length})
            </p>
            <div className="space-y-2">
              {report.creditAccounts.map((account, index) => (
                <div
                  key={index}
                  className="bg-gray-800/40 border border-gray-700 rounded-lg p-3 hover:border-gray-600 transition-colors"
                >
                  {/* Account Header */}
                  <div className="mb-2">
                    <p className="text-sm font-semibold text-white">
                      {account.creditCard || "Credit Account"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {account.bank || "N/A"}
                    </p>
                  </div>

                  {/* Account Number */}
                  <div className="mb-2 pb-2 border-b border-gray-700">
                    <p className="text-xs text-gray-600">
                      Account: {account.accountNumber || "N/A"}
                    </p>
                    <p className="text-xs text-gray-600 truncate">
                      Address: {account.address || "N/A"}
                    </p>
                  </div>

                  {/* Amount Details */}
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="text-gray-500 mb-0.5">Overdue</p>
                      <p className="font-semibold text-red-400">
                        ₹{account.amountOverdue.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 mb-0.5">Balance</p>
                      <p className="font-semibold text-green-400">
                        ₹{account.currentBalance.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State for Accounts */}
        {(!report.creditAccounts || report.creditAccounts.length === 0) && (
          <div className="bg-gray-800/40 border border-gray-700 rounded-lg p-4 text-center">
            <FaCreditCard className="mx-auto text-gray-600 text-3xl mb-2" />
            <p className="text-sm text-gray-400">No credit accounts found</p>
          </div>
        )}

        {/* Bottom Padding for Scrolling */}
        <div className="h-4"></div>
      </div>
    </div>
  );
};

export default ReportDisplay;
