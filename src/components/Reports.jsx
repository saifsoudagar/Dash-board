import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';

const Reports = () => {
  const [leadData, setLeadData] = useState([
    { id: 1, name: 'anurag panday', email: 'anurag@example.com' },
    { id: 2, name: 'aman butt', email: 'aman@example.com' },
  ]);

  const [performanceData, setPerformanceData] = useState([
    { month: 'Jan', leads: 10, sales: 20 },
    { month: 'Feb', leads: 30, sales: 25 },
    { month: 'Mar', leads: 20, sales: 35 },
    { month: 'Apr', leads: 40, sales: 50 },
    { month: 'May', leads: 50, sales: 55 },
    { month: 'Jun', leads: 70, sales: 65 },
  ]);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Lead Reports', 10, 10);

    // Adding Lead Table Headers
    doc.text('ID', 10, 20);
    doc.text('Name', 30, 20);
    doc.text('Email', 90, 20);
    doc.line(10, 22, 200, 22); // Horizontal line

    // Adding Lead Data to PDF
    leadData.forEach((row, index) => {
      const y = 30 + index * 10; // Increment y position for each row
      doc.text(String(row.id), 10, y);
      doc.text(row.name, 30, y);
      doc.text(row.email, 90, y);
    });

    // Adding Performance Table Headers
    const performanceStartY = 30 + leadData.length * 10 + 10;
    doc.text('Performance Metrics', 10, performanceStartY);
    doc.text('Month', 10, performanceStartY + 10);
    doc.text('Leads', 50, performanceStartY + 10);
    doc.text('Sales', 100, performanceStartY + 10);
    doc.line(10, performanceStartY + 12, 200, performanceStartY + 12); // Horizontal line

    // Adding Performance Data to PDF
    performanceData.forEach((row, index) => {
      const y = performanceStartY + 20 + index * 10; // Increment y position for each row
      doc.text(row.month, 10, y);
      doc.text(String(row.leads), 50, y);
      doc.text(String(row.sales), 100, y);
    });

    doc.save('report.pdf');
  };

  return (
    <div className="p-2">
      <h1 className="text-2xl text-gray-100 font-bold mb-4">Reports</h1>

      {/* Lead Report Table */}
      <div className="overflow-x-auto">
        <h2 className="text-xl text-gray-100 font-bold mb-2">Lead Report</h2>
        <table className="min-w-full bg-[#17163B] text-gray-300 border border-[#222058]">
          <thead>
            <tr>
              <th className="py-2 px-2 border-b">ID</th>
              <th className="py-2 px-2 border-b">Name</th>
              <th className="py-2 px-2 border-b">Email</th>
            </tr>
          </thead>
          <tbody>
            {leadData.map((row) => (
              <tr key={row.id}>
                <td className="py-2 px-4 border-b">{row.id}</td>
                <td className="py-2 px-4 border-b">{row.name}</td>
                <td className="py-2 px-4 border-b">{row.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Performance Report Table */}
      <div className="mt-6 overflow-x-auto">
        <h2 className="text-xl text-gray-100 font-bold mb-2">Performance Metrics</h2>
        <table className="min-w-full bg-[#17163B] text-gray-300 border border-[#222058] rounded">
          <thead>
            <tr>
              <th className="py-2 px-2 border-b">Month</th>
              <th className="py-2 px-2 border-b">Leads</th>
              <th className="py-2 px-2 border-b">Sales</th>
            </tr>
          </thead>
          <tbody>
            {performanceData.map((row, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{row.month}</td>
                <td className="py-2 px-4 border-b">{row.leads}</td>
                <td className="py-2 px-4 border-b">{row.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 mt-6">
        <button
          onClick={generatePDF}
          className="bg-[#31115f] shadow-md rounded-full text-white px-4 py-2 mb-2 sm:mb-0"
        >
          Download PDF
        </button>
        <CSVLink
          data={leadData}
          filename="lead-report.csv"
          className="bg-[#41177d] shadow-md text-center rounded-full text-white px-4 py-2 mb-2 sm:mb-0"
        >
          Download CSV
        </CSVLink>
      </div>
    </div>
  );
};

export default Reports;
