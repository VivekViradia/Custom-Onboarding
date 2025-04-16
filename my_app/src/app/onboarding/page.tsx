"use client";

import { useEffect, useState } from "react";
import Wizard from "@/components/Wizard";
import { IAdminConfig } from "@/types/type";
import { getConfig } from "@/service/config.service";

export default function OnboardingPage() {
  const [config, setConfig] = useState<IAdminConfig | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      const data = await getConfig();
      setConfig(data);
    };
    fetchConfig();
  }, []);

  if (!config) return <div className="p-4">Loading configuration...</div>;

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Onboarding</h1>
      <Wizard config={config} />
    </main>
  );
}
