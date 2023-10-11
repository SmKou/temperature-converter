const FahrenheitToCelsius = f => (f - 32) * (5 / 9)
const CelsiusToFahrenheit = c => c * (9 / 5) + 32

const KelvinToCelsius = k => k - 273.15
const CelsiusToKelvin = c => c + 273.15

const FahrenheitToKelvin = f => CelsiusToKelvin(FahrenheitToCelsius(f))
const KelvinToFahrenheit = k => CelsiusToFahrenheit(KelvinToCelsius(k))

export const convert = {
    FahrenheitToCelsius,
    CelsiusToFahrenheit,
    KelvinToCelsius,
    CelsiusToKelvin,
    FahrenheitToKelvin,
    KelvinToFahrenheit
}