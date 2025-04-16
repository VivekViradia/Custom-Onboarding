import { IAdminConfig } from "@/types/type";

export const getConfig = async () => {
    const res = await fetch("/api/config");
    return res.json();
  };
  
  export const saveConfig = async (config: IAdminConfig) => {
    const res = await fetch("/api/config/saveConfig", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    });
    return res.json();
  };
  