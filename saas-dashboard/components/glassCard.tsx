import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  borderRadius?: string;
}

export default function GlassCard({
  children,
  className = "",
  borderRadius = "20px",
}: GlassCardProps) {
  return (
    <div className={`relative p-6 ${className}`} style={{ borderRadius }}>
      <div
        className="absolute inset-0 z-[-1] backdrop-blur-xl bg-white/10"
        style={{ borderRadius }}
      />
      {children}
    </div>
  );
}
