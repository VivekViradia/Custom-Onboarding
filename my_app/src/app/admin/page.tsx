"use client";

import { useEffect, useState } from "react";
import { IAdminConfig } from "@/types/type";
import { getConfig, saveConfig } from "@/service/config.service";
import AdminConfigForm from "@/components/AdminConfigForm";

export default function AdminPage() {
  const [config, setConfig] = useState<IAdminConfig | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const res = await getConfig();
      setConfig(res);
      setLoading(false);
    };
    fetch();
  }, []);

  const handleSave = async (updated: IAdminConfig) => {
    setSaving(true);
    await saveConfig(updated);
    setSaving(false);
    setConfig(updated);
  };

  if (loading || !config) return <div className="p-4">Loading admin config...</div>;

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Component Config</h1>
      <AdminConfigForm config={config} onSave={handleSave} saving={saving} />
    </main>
  );
}
