Dashboard and Reports Interface
This is React.js based project: dashboard and report generation interface, where widgets can be formatted and set of performance charts. Users can add-remove reports as well as download them in CSV or PDF. It is written with Tailwind CSS and actual visualization using Chart.js.
Customizable Dashboard Widgets
Add or remove many widgets on to the dashboard.
Widgets:
Leads Chart
Sales Chart
Performance Metrics
Each widget is powered by Chart.js and every single data point is backed up with interactive, animated line charts.
2. Reporting
Lead Reports: All of the leads name and email on one page that can also be exported.
Performance Metrics: This page displays and can be exported a month's worth of information involving leads and sales.
Export Options:
Data as CSV file.
Lead and Performance PDF report using jsPDF.
3. Sidebar Navigation
Responsive sidebar which navigates with ease - offers desktop and mobile viewpoints.
Menu
Show/Hide Dashboard, Leads, Performance, Reports
Toggle sidebar with smooth animation on mobile
Technology Stack
React.js : JavaScript library for building user interfaces
Chart.js: data visualization of line and data mainly
jsPDF: to generate pdf reports
React CSV: to export the leads data in CSV format
Tailwind CSS: styling the application
React Icons: icon for the sidebar
Installation
Prerequisites
Node.js and npm must be installed on your machine .
Setup
Run one of the following commands in your terminal to clone the repository:
bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
Enter the project directory:
bash
Copy
cd your-repo-name
Install dependencies:
bash
Copy
npm install
Running the App
Start the development server:
bash
Copy
npm start
Open http://localhost:3000 to view it in the browser.
File Structure
bash
Copy
.
├── src
│ ├── components
│ │ ├── Dashboard.js # Main Dashboard component with widget logic
│ │ ├── Reports.js # Reports component for PDF and CSV generation
Let me rewrite that with proper human language.
│ │ ├── Sidebar.js # Sidebar component with navigation links
│ ├── App.js # Main app routing and layout
│ ├── index.js # Entry point for the React app
│ └── .
├── public
│ ├── index.html
├── package.json
├── tailwind.config.js # Tailwind CSS configuration
└── .
Usage
Dashboard
Add Widgets: Using the dropdown menu you will add several forms of chart widget additions which will include Leads, Sales, Performance Metrics.
Remove Widgets: On every widget a remove button is provided to remove it from the dashboard.
Reports
View Reports: In the Report section, you can view both the Lead and performance data in a tabular form.
Download CSV: Click the download CSV button to download the lead data in CSV format.
Download PDF: Click the download PDF button to generate a PDF report with lead information and performance metrics.
Future Updates
Maximize Chart Editing: Users can modify chart colors, data points, and other characteristics.
Integration of APIs to Fetch Real Time Data: To fetch real-time data of leads and performance metrics, the applications should be integrated with APIs.
Drag and Drop Widgets: This allows adding drag and drop functionality such that one can easily reposition the widgets on the dashboard.
