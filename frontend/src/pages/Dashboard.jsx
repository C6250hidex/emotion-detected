import React from "react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-slate-800">
        Welcome, {user?.name}!
      </h1>
      <p className="text-slate-500">
        This is your emotion detection dashboard.
      </p>
    </div>
  );
};

export default Dashboard;
