
interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
  }
  
  interface Props {
    value: Address;
    onChange: (val: Address) => void;
  }
  
  export default function AddressForm({ value, onChange }: Props) {
    const update = (field: keyof Address, val: string) => {
      onChange({ ...value, [field]: val });
    };
  
    return (
      <div className="mb-4 space-y-3">
        <label className="block font-semibold mb-1">Address</label>
        <input
          className="w-full border p-2 rounded"
          placeholder="Street Address"
          value={value.street}
          onChange={(e) => update("street", e.target.value)}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="City"
          value={value.city}
          onChange={(e) => update("city", e.target.value)}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="State"
          value={value.state}
          onChange={(e) => update("state", e.target.value)}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Zip Code"
          value={value.zip}
          onChange={(e) => update("zip", e.target.value)}
        />
      </div>
    );
  }
  