import './app.scss'
import bottomLogo from './icons/btmLogo.png'

import Logo from "./Logo/Logo";
import { MainPage, SecondPage, FinalPage } from './components';


function App() {
	return (
		<div className="container">
			<Logo/>
				
			
			<FinalPage/>

			<img src={bottomLogo} alt="bottomLogo" className="bottom_logo" />
		</div>
	);
}

export default App;
