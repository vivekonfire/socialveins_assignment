import "./App.css";
import React from "react";
import useStore from "./store";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
    const loading = useStore((state) => state.loading);
    const setLoading = useStore((state) => state.setLoading);

    const LoadingButton = () => {
        setLoading();
    };

    return (
        <div className="App">
            {loading && (
                <ClipLoader color="#5E9CBE" loading={loading} size={150} />
            )}
            {loading && (
                <button className="btn" type="button" onClick={LoadingButton}>
                    Button
                </button>
            )}
        </div>
    );
}

export default App;
