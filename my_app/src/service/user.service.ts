export async function getAllUsers() {
    const res = await fetch("/api/users/getAllUsers", { cache: "no-store" });
    return res.json();
  }