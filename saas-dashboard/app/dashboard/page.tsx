"use client";
import React, { useState } from "react";
import {
  revenueData,
  trafficData,
  stats,
  recentActivity,
} from "../data/dashboardData";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <div className=" text-black flex h-screen bg-gray-50">hi how are you</div>
  );
}
