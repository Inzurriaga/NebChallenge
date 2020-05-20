import React, {  useEffect, useState } from 'react';
import './App.css';

function App() {
  let [apiData, setApiData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let promise = await fetch("https://api.nebullam.com/challengeData");
    let fetchData = await promise.json();
    setApiData(fetchData);
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <td>servo ID</td>
            <td>position</td>
            <td>calibrated</td>
          </tr>
        </thead>
        <tbody>
          {
            apiData.data && apiData.data.map(x =>
              (
                <tr key={x.servoID}>
                  <td>{x.servoID}</td>
                  <td>{x.position}</td>
                  <td>{x.isCalibrated + ""}</td>
                </tr>
              )
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
