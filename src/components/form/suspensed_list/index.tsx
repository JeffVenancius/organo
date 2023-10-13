import "../InputField.css";
import "./suspensed_list.css";

interface SuspensedListProps {
  label: string;
  value: string;
  changeValue: (newValue: string[]) => void;
  teamsNames: string[];
}

const SuspensedList = ({
  label,
  value,
  changeValue,
  teamsNames,
}: SuspensedListProps) => {
  return (
    <div className="input_field">
      <label>{label}</label>
      <select
        id={label}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          changeValue([e.target.id, e.target.value])
        }
        className="input_field_item"
      >
        {teamsNames.map((teamName) => (
          <option key={teamName + "suspensedList"}>{teamName}</option>
        ))}
      </select>
    </div>
  );
};

export default SuspensedList;
