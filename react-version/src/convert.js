const fahrenheitToCelsius = f => (f - 32) * (5 / 9)

const kelvinToCelsius = k => k - 273.15

const celsiusToFahrenheit = c => c * (9 / 5) + 32

const celsiusToKelvin = c => c + 273.15

export function convert(n, delta) {
    switch (delta) {
        case 'fahrenheit':
            return {
                fahrenheit: n,
                celsius: fahrenheitToCelsius(n),
                kelvin: celsiusToKelvin(fahrenheitToCelsius(n))
            }
        case 'kelvin':
            return {
                kelvin: n,
                celsius: kelvinToCelsius(n),
                fahrenheit: celsiusToFahrenheit(kelvinToCelsius(n))
            }
        default:
            return {
                celsius: n,
                fahrenheit: celsiusToFahrenheit(n),
                kelvin: celsiusToKelvin(n)
            }
    }
}