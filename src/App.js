import { useState } from 'react'
import Banner from "./components/banner"
import Form from "./components/form"
import Teams from "./components/teams"
import Footer from "./components/footer"

const App = () => {

	const teams = [
		{
			name: "Programação",
			fg_color: "#57c278",
			bg_color: "#d9f7e9",
		},
		{
			name: "Front-End",
			fg_color: "#82cffa",
			bg_color: "#e8f8ff",
		},
		{
			name: "Data Science",
			fg_color: "#a6d157",
			bg_color: "#f0f8e2",
		},
		{
			name: "Devops",
			fg_color: "#e06b69",
			bg_color: "#fde7e8",
		},
		{
			name: "UX e Design",
			fg_color: "#d86ebf",
			bg_color: "#fae5f5",
		},
		{
			name: "Mobile",
			fg_color: "#feba05",
			bg_color: "#fff5d9",
		},
		{
			name: "Inovação e Gestão",
			fg_color: "#ff8a29",
			bg_color: "#ffeedf",
		}
	]

	const [users, setUsers] = useState([])
	const addUser = (newUser) => {
		for (let id = 0; id < users.length; id++) { // makes it unique.
			let a = JSON.stringify({...users[id], "Imagem":""})  
			let b = JSON.stringify({...newUser,   "Imagem":""})  
			if (a === b) { return }
		}
		setUsers([...users, newUser])
	}

  return (
				<div className="App">
					<Banner />
					<Form 
						updateUsers={addUser} 
						teams={teams}
					/>
					<Teams
						teams={teams}
						dataBase={users}
					/>
				<Footer 
						facebook="facebook.com"
						twitter="twitter.com"
						instagram="instagram.com"
					/>
				</div>
  );
}

export default App;
