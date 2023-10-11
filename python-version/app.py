fahrenheit_celsius = lambda f : (f - 32) * (5 - 9)
celsius_fahrenheit = lambda c : c * (9 / 5) + 32
kelvin_celsius = lambda k : k - 273.15
celsius_kelvin = lambda c : c + 273.15
fahrenheit_kelvin = lambda f : celsius_kelvin(fahrenheit_celsius(f))
kelvin_fahrenheit = lambda k : celsius_fahrenheit(kelvin_celsius(k))

def convert(temperature, fromMetric, toMetric):
    func = {
        "fahrenheit_celsius": fahrenheit_celsius,
        "celsius_fahrenheit": celsius_fahrenheit,
        "kelvin_celsius": kelvin_celsius,
        "celsius_kelvin": celsius_kelvin,
        "fahrenheit_kelvin": fahrenheit_kelvin,
        "kelvin_fahrenheit": kelvin_fahrenheit
    }
    return func[fromMetric + '_' + toMetric](temperature)

def isfloat(n):
    try:
        float(n)
        return True
    except ValueError:
        return False

def divider():
    print('---------------------------------------------')

metrics = { 'f': 'fahrenheit', 'c': 'celsius', 'k': 'kelvin' }

def main():
    init = True
    while (init):
        divider()
        print('Key: fahrenheit (f), celsius (c), kelvin (k)')
        print('Enter n at any time to stop.')
        response = input('Enter a temperature, its metric and the metric to convert to: ')
        ipt = response.split(' ')
        if (len(ipt) != 3 and ipt[0] == 'n'):
            init = False
            break

        # Validate temperature
        if (len(ipt) != 3):
            divider()
            print('--> Invalid input.')
            continue
        if (not isfloat(ipt[0])):
            divider()
            print('--> Temperature should be an integer or float.')
            continue
        temperature = float(ipt[0])

        # Validate from and to metrics
        fromMetric = ''
        toMetric = ''
        if (not ipt[1] in metrics.keys() 
        and not ipt[1] in metrics.values()):
            divider()
            print('--> Enter a valid metric to convert from.')
            continue
        else:
            if (ipt[1] in metrics.keys()):
                fromMetric = metrics[ipt[1]]
            else:
                fromMetric = ipt[1]
        if (not ipt[2] in metrics.keys() 
        and not ipt[2] in metrics.values()):
            divider()
            print('--> Enter a valid metric to convert to.')
            continue
        else:
            if (ipt[2] in metrics.keys()):
                toMetric = metrics[ipt[2]]
            else:
                toMetric = ipt[2]
        if (fromMetric == toMetric):
            divider()
            print('--> Cannot convert from and to the same metric')
            continue
        
        # Validate mininum temperature according to metric
        if (fromMetric == metrics['f'] 
        and temperature < -459.67):
            divider()
            print('--> Fahrenheit cannot be less than -459.67 degrees.')
            continue
        elif (fromMetric == metrics['c'] 
        and temperature < -273.15):
            divider()
            print('--> Celsius cannot be less than -273.15 degrees.')
            continue
        elif (fromMetric == metrics['k'] 
        and temperature < 0):
            divider()
            print('--> Kelvin cannot be less than 0 degrees.')
            continue

        # Convert temperature
        converted = convert(temperature, fromMetric, toMetric)
        print("%f %s is equal to %f %s." % (temperature, fromMetric, converted, toMetric))

        # Ask user to repeat or exit
        response = input('Would you like to convert another temperature: y or n? ')
        if (response == 'y'):
            continue
        else:
            init = False
    print('Signing off...Goodbye!')
        
main()