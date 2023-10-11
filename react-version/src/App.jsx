import { useState } from 'react'
import { convert } from './convert'
import './App.css'

function App() {
    const [temperature, setTemperature] = useState(0.0)
    
    const metrics = ['Fahrenheit', 'Celsius', 'Kelvin']
    const [fromMetric, setFromMetric] = useState(metrics[0])
    const [toMetric, setToMetric] = useState(metrics[1])

    const [message, setMessage] = useState('Press submit to convert a temperature.')

    const handleSubmit = e => {
        e.preventDefault()
        if (fromMetric === toMetric) {
            setMessage('You are converting to the same metric.')
            return false
        }

        switch (fromMetric) {
            case metrics[0]:
                if (temperature < -459.67) {
                    setMessage('Fahrenheit cannot be less than -459.67 degrees.')
                    return false
                }
                break
            case metrics[1]:
                if (temperature < -273.15) {
                    setMessage('Celsius cannot be less than -273.15 degrees.')
                    return false
                }
                break
            case metrics[2]:
                if (temperature < 0) {
                    setMessage('Kelvin cannot be less than 0.')
                    return false
                }
                break  
        }

        const converted = convert[fromMetric + 'To' + toMetric](temperature).toFixed(3)
        setMessage(`${temperature} ${fromMetric} is equal to ${converted} ${toMetric}`)
    }

    return (
        <>
            <h1>Temperature Converter</h1>
            <hr />
            <form method="post" onSubmit={handleSubmit}>
                <label>
                    Enter a temperature:
                    <input defaultValue={temperature} onChange={e => {
                        const val = e.target.value
                        if (!val)
                            setTemperature(0)

                        try {
                            const n = parseFloat(val)
                            setTemperature(n)
                        } catch { setMessage('Please enter a valid number.') }
                    }} />
                </label>
                <label>
                    From:
                    <select name="from-metric" 
                        defaultValue={metrics[0]} 
                        onChange={e => setFromMetric(e.target.value)}
                    >
                        {metrics.map(metric => <option key={metric} value={metric}>{metric}</option>)}
                    </select>
                </label>
                <label>
                    To:
                    <select name="to-metric" 
                        defaultValue={metrics[1]} 
                        onChange={e => setToMetric(e.target.value)}
                    >
                        {metrics.map(metric => <option key={metric} value={metric}>{metric}</option>)}
                    </select>
                </label>
                <input type="submit" />
            </form>
            <hr />
            <div className="message-display">{message}</div>
        </>
    )
}

export default App
