import { useState } from 'react'
import { convert } from './convert'
import './App.css'

function App() {
    const [tempInFahrenheit, setTempInFahrenheit] = useState(32.0)
    const [tempInCelsius, setTempInCelsius] = useState(0.0)
    const [tempInKelvin, setTempInKelvin] = useState(273.15)

    const getInput = (val, delta) => {
        if (!val)
            return;

        let n = 0
        try { n = parseFloat(val) } 
        catch {
            if (delta === 'fahrenheit')
                n = 32.0
            else if (delta === 'kelvin')
                n = 273.15
        }

        const temps = convert(n, delta)
        setTempInFahrenheit(temps.fahrenheit)
        setTempInCelsius(temps.celsius)
        setTempInKelvin(temps.kelvin)
    }

    return (
        <>
            <h1>Temperature Converter</h1>
            <hr />
            <div className="ipt-set">
                <label>
                    Fahrenheit:
                    <input 
                        type="text" 
                        value={tempInFahrenheit} 
                        onFocus={() => setTempInFahrenheit('')}
                        onChange={e => getInput(e.target.value, 'fahrenheit')}
                    />
                 </label>
                 <label>
                    Celsius:
                    <input 
                        type="text" 
                        value={tempInCelsius}
                        onFocus={() => setTempInCelsius('')}
                        onChange={e => getInput(e.target.value, 'celsius')}
                    />
                 </label>
                 <label>
                    Kelvin:
                    <input 
                        type="text"
                        value={tempInKelvin}
                        onFocus={() => setTempInKelvin('')}
                        onChange={e => getInput(e.target.value, 'kelvin')}
                    />
                 </label>
            </div>
        </>
    )
}

export default App
