interface Props {
    value: string;
    onChange: (val: string) => void;
  }
  
  export default function AboutMeForm({ value, onChange }: Props) {
    return (
      <div className="mb-4">
        <label className="block font-semibold mb-1">About Me</label>
        <textarea
          className="w-full p-2 border rounded"
          rows={4}
          placeholder="Tell us something about yourself..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }
  