
interface Props {
    data: { email: string; password: string };
    onChange: (key: "email" | "password", value: string) => void;
    onNext: () => void;
  }
  
  export default function EmailPasswordForm({ data, onChange, onNext }: Props) {
    return (
      <div className="space-y-4">
        <input
          className="w-full border p-2"
          placeholder="Email"
          type="email"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
        />
        <input
          className="w-full border p-2"
          placeholder="Password"
          type="password"
          value={data.password}
          onChange={(e) => onChange("password", e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2" onClick={onNext}>
          Next
        </button>
      </div>
    );
  }
  