import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Trash2, Lock } from 'lucide-react';
import toast from 'react-hot-toast';

const PrintQueue = () => {
  const [queue, setQueue] = useState([
    { id: 1, name: 'Report.pdf', pages: 5, confidential: true, status: 'pending' },
    { id: 2, name: 'Invoice.pdf', pages: 2, confidential: false, status: 'printing' },
  ]);

  const onDrop = (acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      id: Date.now(),
      name: file.name,
      pages: Math.floor(Math.random() * 10) + 1,
      confidential: false,
      status: 'pending',
    }));
    setQueue([...queue, ...newFiles]);
    toast.success('Files added to queue');
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-800">Print Queue</h1>
        <p className="text-gray-600">Manage your printing tasks</p>
      </header>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag and drop files here, or click to select files
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Current Queue</h2>
          <div className="space-y-4">
            {queue.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  {item.confidential && <Lock className="w-5 h-5 text-purple-500" />}
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.pages} pages</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      item.status === 'printing'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {item.status}
                  </span>
                  <button
                    onClick={() => {
                      setQueue(queue.filter((q) => q.id !== item.id));
                      toast.success('Item removed from queue');
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintQueue;