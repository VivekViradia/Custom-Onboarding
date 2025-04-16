
interface Props {
    value: string;
    onChange: (val: string) => void;
  }
  
  export default function BirthdateForm({ value, onChange }: Props) {
    return (
      <div className="mb-4">
        <label className="block font-semibold mb-1">Birthdate</label>
        <input
          className="w-full border p-2 rounded"
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }
  