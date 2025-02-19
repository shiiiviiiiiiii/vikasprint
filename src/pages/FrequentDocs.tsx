import React from 'react';
import { File, Printer, Star, MoreVertical } from 'lucide-react';

const FrequentDocs = () => {
  const documents = [
    { id: 1, name: 'Weekly Report Template', lastPrinted: '2 days ago', prints: 15 },
    { id: 2, name: 'Meeting Minutes Form', lastPrinted: '1 week ago', prints: 12 },
    { id: 3, name: 'Expense Report', lastPrinted: '3 days ago', prints: 10 },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-800">Frequent Documents</h1>
        <p className="text-gray-600">Quick access to your most printed documents</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <div key={doc.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <File className="w-8 h-8 text-blue-500" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{doc.name}</h3>
                  <p className="text-sm text-gray-600">Last printed {doc.lastPrinted}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-600">{doc.prints} prints</span>
              </div>
              <button className="flex items-center space-x-2 px-3 py-1 text-sm text-blue-600 hover:text-blue-700 border border-blue-600 rounded-md">
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentDocs;