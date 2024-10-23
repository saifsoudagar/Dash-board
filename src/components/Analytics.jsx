import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { jsPDF } from 'jspdf';
import Papa from 'papaparse';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Analytics = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Leads',
        data: [10, 30, 20, 40, 50, 70],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Sales',
        data: [20, 25, 35, 50, 55, 65],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Analytics Report', 10, 10);
    doc.text('Leads: Jan to Jun', 10, 20);
    doc.save('report.pdf');
  };

  const exportCSV = () => {
    const csvData = [
      { Month: 'Jan', Leads: 10, Sales: 20 },
      { Month: 'Feb', Leads: 30, Sales: 25 },
      { Month: 'Mar', Leads: 20, Sales: 35 },
      { Month: 'Apr', Leads: 40, Sales: 50 },
      { Month: 'May', Leads: 50, Sales: 55 },
      { Month: 'Jun', Leads: 70, Sales: 65 },
    ];

    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.setAttribute('download', 'lead-report.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-2">
      <h1 className="text-2xl text-gray-100 font-bold mb-4">Analytics</h1>

      {/* Responsive Chart Container */}
      <div className="bg-[#17163B] p-4 shadow rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
        <Line data={data} />
      </div>

      {/* Buttons for Generating Reports */}
      <div className="mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
        <button
          className="bg-[#31115f] shadow-md rounded-full text-white px-4 py-2 mb-2 sm:mb-0"
          onClick={generatePDF}
        >
          Generate PDF Report
        </button>
        <button
          className="bg-[#41177d] shadow-md text-center rounded-full text-white px-4 py-2 mb-2 sm:mb-0"
          onClick={exportCSV}
        >
          Export CSV
        </button>
      </div>
    </div>
  );
};

export default Analytics;
