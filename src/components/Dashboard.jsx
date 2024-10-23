import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Sample data for charts
const leadsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Leads',
      data: [10, 30, 20, 40, 50, 70],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: [20, 25, 35, 50, 55, 65],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const performanceData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Performance',
      data: [15, 25, 35, 45, 55, 65],
      borderColor: 'rgb(255, 206, 86)',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
    },
  ],
};

// Chart components
const LeadsChart = () => <Line data={leadsData} options={{ responsive: true }} />;
const SalesChart = () => <Line data={salesData} options={{ responsive: true }} />;
const PerformanceMetricsChart = () => <Line data={performanceData} options={{ responsive: true }} />;

const availableWidgetsList = [
  { id: 1, name: 'Leads Chart', component: <LeadsChart /> },
  { id: 2, name: 'Sales Chart', component: <SalesChart /> },
  { id: 3, name: 'Performance Metrics', component: <PerformanceMetricsChart /> },
];

const Dashboard = () => {
  const [widgets, setWidgets] = useState([availableWidgetsList[0]]); // Default widget
  const [availableWidgets, setAvailableWidgets] = useState(availableWidgetsList); // Widgets to add
  const [selectedWidget, setSelectedWidget] = useState(null); // Track selected widget for adding

  const removeWidget = (id) => {
    const updatedWidgets = widgets.filter(widget => widget.id !== id);
    setWidgets(updatedWidgets);
    // When removing a widget, add it back to the available widgets
    const removedWidget = availableWidgetsList.find(widget => widget.id === id);
    if (removedWidget) {
      setAvailableWidgets([...availableWidgets, removedWidget]);
    }
  };

  const addWidget = () => {
    if (selectedWidget) {
      const widgetToAdd = availableWidgetsList.find(widget => widget.id === selectedWidget);
      if (widgetToAdd) {
        setWidgets([...widgets, widgetToAdd]);
        setAvailableWidgets(availableWidgets.filter(w => w.id !== selectedWidget));
        setSelectedWidget(null); // Reset selection after adding
      }
    }
  };

  return (
    <div className="text-white p-4">
      <h1 className="text-2xl md:text-3xl mb-4">Dashboard</h1>

      {/* Add Widget Section */}
      <div className="mb-4">
  <select
    value={selectedWidget || ''}
    onChange={(e) => setSelectedWidget(Number(e.target.value))}
    className="bg-[#17163B] text-gray-300 rounded p-2 outline-none appearance-none"
    style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }}
  >
    <option
      className="bg-[#17163B] hover:bg-[#41177d] active:bg-[#41177d] text-white"
      value=""
      disabled
    >
      Select a chart to add
    </option>
    {availableWidgets.map((widget) => (
      <option
        key={widget.id}
        value={widget.id}
        className="bg-[#17163B] text-white focus:bg-none hover:bg-[#41177d] active:bg-[#41177d] cursor-pointer"
        style={{ backgroundColor: '#17163B', color: '#FFF' }}
      >
        {widget.name}
      </option>
    ))}
  </select>
  <button
    className="bg-[#41177d] mt-2 md:ml-3 shadow-md text-center text-[12px] rounded-full text-white px-4 py-2 mb-2 sm:mb-0"
    onClick={addWidget}
    disabled={!selectedWidget}
  >
    Add Chart
  </button>
</div>


      {/* Display Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {widgets.map((widget) => (
          <div key={widget.id} className="bg-[#17163B] p-4 rounded shadow-lg">
            <h2 className="text-lg md:text-xl font-bold">{widget.name}</h2>
            {widget.component}
            <button
              className="bg-red-500 rounded-full text-xs md:text-sm hover:bg-red-500/55 text-white px-2 py-1 mt-2"
              onClick={() => removeWidget(widget.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
