import { Provider } from "react-redux";
import MarcherApp from "../MarcherApp";
import StorMarcher from "./MarcherStor";

export default function MarcherAppStor() {
    return <>
    <Provider store={StorMarcher}>
        <MarcherApp/>
    </Provider>
    </>
}