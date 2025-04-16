export async function getAllUsers() {
    const res = await fetch("/api/users", { cache: "no-store" });
    return res.json();
  }