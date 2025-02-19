import { Printer, Clock, Lock, FileText } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-800">Printer Dashboard</h1>
        <p className="text-gray-600">Monitor and control your printing tasks</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Jobs</p>
              <p className="text-2xl font-semibold text-gray-800">3</p>
            </div>
            <Printer className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Scheduled</p>
              <p className="text-2xl font-semibold text-gray-800">5</p>
            </div>
            <Clock className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Confidential</p>
              <p className="text-2xl font-semibold text-gray-800">2</p>
            </div>
            <Lock className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Frequent Docs</p>
              <p className="text-2xl font-semibold text-gray-800">8</p>
            </div>
            <FileText className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Print Jobs</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((job) => (
            <div key={job} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Document_{job}.pdf</p>
                <p className="text-sm text-gray-600">Printed 2 hours ago</p>
              </div>
              <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
                Completed
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;