import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Leads = () => {
  const [selectedLead, setSelectedLead] = useState(null);
  const dummyLeads = [
    { id: 1, name: 'rahul', email: 'rahul@example.com', status: 'Interested' },
    { id: 2, name: 'anurag panday', email: 'anurag@example.com', status: 'Follow Up' },
    { id: 3, name: 'Michael jackson', email: 'michael@example.com', status: 'Closed' },
  ];

  const openLeadDetails = (lead) => {
    setSelectedLead(lead);
  };

  const closeLeadDetails = () => {
    setSelectedLead(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl text-gray-100 font-bold">Leads</h1>

      {/* Responsive Table */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-[#17163B] text-gray-200 shadow rounded-lg">
          <thead>
            <tr className="hidden md:table-row">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyLeads.map((lead) => (
              <tr
                key={lead.id}
                className="border-b md:table-row flex flex-col md:flex-row md:items-center md:justify-between cursor-pointer hover:bg-gray-700"
                onClick={() => openLeadDetails(lead)}
              >
                {/* Table Row in Mobile View */}
                <td className="px-4 py-2 md:table-cell">
                  <span className="block md:hidden font-semibold">ID:</span>
                  {lead.id}
                </td>
                <td className="px-4 py-2 md:table-cell">
                  <span className="block md:hidden font-semibold">Name:</span>
                  {lead.name}
                </td>
                <td className="px-4 py-2 md:table-cell">
                  <span className="block md:hidden font-semibold">Email:</span>
                  {lead.email}
                </td>
                <td className="px-4 py-2 md:table-cell">
                  <span className="block md:hidden font-semibold">Status:</span>
                  {lead.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Lead Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-[#17163B] text-gray-300 p-6 rounded-lg w-full md:w-1/2 lg:w-1/3 relative">
            <h2 className="text-xl font-semibold mb-4">Lead Details</h2>
            <p><strong>ID:</strong> {selectedLead.id}</p>
            <p><strong>Name:</strong> {selectedLead.name}</p>
            <p><strong>Email:</strong> {selectedLead.email}</p>
            <p><strong>Status:</strong> {selectedLead.status}</p>

            {/* Close Icon */}
            <button
              className="absolute top-2 right-2 text-gray-300 hover:text-gray-400 focus:outline-none"
              onClick={closeLeadDetails}
            >
              <AiOutlineClose className="text-2xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leads;
