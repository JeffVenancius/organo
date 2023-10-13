import "../InputField.css";

interface TextFieldProps {
  label: string;
  value: string;
  changeValue: (newValue: string[]) => void;
  required?: boolean;
  placeholder: string;
}

const TextField = ({
  label,
  value,
  changeValue,
  required = false,
  placeholder,
}: TextFieldProps) => {
  return (
    <div className="input_field">
      <label>{label}</label>
      <input
        id={label}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          changeValue([e.target.id, e.target.value])
        }
        required={required}
        className="input_field_item"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
