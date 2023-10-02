import "../InputField.css"

const TextField = ({label, value, changeValue, required, placeholder}) => {
	return (
		<div className="input_field">
			<label>{label}</label>
			<input
				id={label}
				value={value}
				onChange={e => changeValue([e.target.id, e.target.value])} 
				required={required} 
				className="input_field_item" 
				placeholder={placeholder}
			/>
		</div>
	)
}

export default TextField;
