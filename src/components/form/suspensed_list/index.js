import "../InputField.css"
import "./suspensed_list.css"

const SuspensedList = ({label, value, changeValue, teamsNames}) => {
	return (
		<div className="input_field">
			<label>{label}</label>
			<select 
				id={label} 
				value={value} 
				onChange={e => changeValue([e.target.id, e.target.value])}
				className="input_field_item"
			>
				{teamsNames.map(teamName => <option key={teamName + "suspensedList"}>{teamName}</option>)}
			</select>
		</div>
	)
}

export default SuspensedList
