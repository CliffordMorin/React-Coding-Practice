import Game from './Game';
import Random from './Random';

function App() {
	return (
		<div className="App">
			<Game name="Clifford" />
			<Random maxNum="999" color="#0000FF" />
		</div>
	);
}

export default App;
