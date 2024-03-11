function Dashboard() {
  return (
    <>
      <main className="flex-1 p-10">
        <div className="admin-dashboard">
          <h1 className="text-3xl mb-6">Welcome to the Admin Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl mb-4">Analytics</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl mb-4">Recent Activity</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl mb-4">Settings</h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
