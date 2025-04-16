"use client";

import { getAllUsers } from "@/service/user.service";
import { IUserData } from "@/types/type";
import { useEffect, useState } from "react";

export default function DataPage() {
  const [users, setUsers] = useState<IUserData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllUsers();
      setUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <div className="p-4">Loading user data...</div>;

  return (
    <main className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Submitted Users</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="overflow-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">About Me</th>
                <th className="border px-4 py-2">Address</th>
                <th className="border px-4 py-2">Birthdate</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.aboutMe || "-"}</td>
                  <td className="border px-4 py-2">
                    {user.address
                      ? `${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.zip}`
                      : "-"}
                  </td>
                  <td className="border px-4 py-2">{user.birthdate || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
