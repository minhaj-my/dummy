"use client";
import GlassCard from "../components/glassCard";
import LineChart from "../components/LineChart";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl p-4 md:p-8">
        <GlassCard borderRadius="24px">
          <LineChart />
        </GlassCard>
      </div>
    </div>
  );
}
