import React from 'react';
import { Save, Printer, Lock, Bell, UserCheck } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600">Configure your printing preferences</p>
      </header>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Printer Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Default Printer</label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md">
                  <option>Main Office Printer</option>
                  <option>Secondary Printer</option>
                  <option>Color Printer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Default Paper Size</label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md">
                  <option>A4</option>
                  <option>Letter</option>
                  <option>Legal</option>
                </select>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">RFID Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Thapar ID</label>
                <input
                  type="text"
                  placeholder="Enter your Thapar ID"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rfid-auth"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="rfid-auth" className="ml-2 text-sm text-gray-600">
                  Require RFID authentication for all prints
                </label>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Security Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="confidential-default"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="confidential-default" className="ml-2 text-sm text-gray-600">
                  Enable confidential printing by default
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="compress-default"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="compress-default" className="ml-2 text-sm text-gray-600">
                  Compress PDFs automatically
                </label>
              </div>
            </div>
          </section>

          <div className="pt-4">
            <button className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <Save className="w-4 h-4 mr-2" />
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;