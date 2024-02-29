function Dashboard() {
  return (
    <>
      <main className="flex-1 p-10">
        <div className="admin-dashboard">
          <h1 className="text-3xl mb-6">Welcome to the Admin Dashboard</h1>
          {/* Your dashboard content goes here */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example widgets or sections */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl mb-4">Analytics</h2>
              {/* Analytics charts or data display */}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl mb-4">Recent Activity</h2>
              {/* Recent activity logs or updates */}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl mb-4">Settings</h2>
              {/* Admin settings or configuration options */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
