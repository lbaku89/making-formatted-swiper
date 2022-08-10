import { GoodsSlider } from "./component/GoodsSlider";
import { Reset } from "styled-reset";
import "./css/main.min.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
function App() {
	return (
		<>
			<Reset />
			<Provider store={store}>
				<GoodsSlider />
			</Provider>
		</>
	);
}

export default App;
