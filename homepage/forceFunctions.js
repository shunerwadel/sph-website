// Round to 3 decimal places and assign to html element
function roundAssign(toValue)
{
    // Round to 3 decimal places
    toValue = toValue.toFixed(3);

    // Assign value to html element
    document.getElementById('forceToValue').value = toValue;
}

// Unit conversion for force function
function convertForce()
{
    // Clear html element
    document.getElementById('forceToValue').value = '';

    // Declare html elements as JS variables
    let fromUnit = document.querySelector('#forceFromUnit').value;
    let toUnit = document.querySelector('#forceToUnit').value;
    let fromValue = document.querySelector('#forceFromValue').value;
    let toValue = 0;

    // Check for non-number value
    if(isNaN(fromValue)===true || !fromValue)
    {
        alert('Please enter a valid number for conversion.')
    }

    // Check for same unit to/from
    else if(fromUnit === toUnit)
    {
        alert('You are converting to and from the same unit.')
    }

    // Perform conversion
    else
    {   
        // N to kgf
        if(fromUnit === 'newtons' && toUnit === 'kilogram-force')
        {
            // Perform conversion
            toValue = fromValue / 9.807;

            // Round value and assign in html
            roundAssign(toValue);
        }

        // N to lbf
        else if(fromUnit === 'newtons' && toUnit === 'pound-force')
        {
            // Perform conversion
            toValue = fromValue / 4.448;

            // Round value and assign in html
            roundAssign(toValue);
        }

        // N to pdl
        else if(fromUnit === 'newtons' && toUnit === 'poundal')
        {
            // Perform conversion
            toValue = fromValue * 7.233;

            // Round value and assign in html
            roundAssign(toValue);
        }

        // kgf to N
        else if(fromUnit === 'kilogram-force' && toUnit === 'newtons')
        {
            // Perform conversion
            toValue = fromValue * 9.807;

            // Round value and assign in html
            roundAssign(toValue);
        }
        
        // kgf to lbf
        else if(fromUnit === 'kilogram-force' && toUnit === 'pound-force')
        {
            // Perform conversion
            toValue = fromValue * 2.205;

            // Round value and assign in html
            roundAssign(toValue);
        }

        // kgf to pdl
        else if(fromUnit === 'kilogram-force' && toUnit === 'poundal')
        {
            // Perform conversion
            toValue = fromValue * 70.932;

            // Round value and assign in html
            roundAssign(toValue);
        }

        // lbf to N
        else if(fromUnit === 'pound-force' && toUnit === 'newtons')
        {
            // Perform conversion
            toValue = fromValue * 4.448;

            // Round value and assign in html
            roundAssign(toValue);
        }

        // lbf to kgf
        else if(fromUnit === 'pound-force' && toUnit === 'kilogram-force')
        {
            // Perform conversion
            toValue = fromValue / 2.205;

            // Round value and assign in html
            roundAssign(toValue);
        }

        // lbf to pdl
        else if(fromUnit === 'pound-force' && toUnit === 'poundal')
        {
            // Perform conversion
            toValue = fromValue * 32.174;

            // Round value and assign in html
            roundAssign(toValue);
        }

        // pdl to N
        else if(fromUnit === 'poundal' && toUnit === 'newtons')
        {
            // Perform conversion
            toValue = fromValue / 7.233;

            // Round value and assign in html
            roundAssign(toValue);
        }

        // pdl to kgf
        else if(fromUnit === 'poundal' && toUnit === 'kilogram-force')
        {
            // Perform conversion
            toValue = fromValue / 70.932;

            // Round value and assign in html
            roundAssign(toValue);
        }

        // pdl to lbf
        else if(fromUnit === 'poundal' && toUnit === 'pound-force')
        {
            // Perform conversion
            toValue = fromValue / 32.174;

            // Round value and assign in html
            roundAssign(toValue);
        }

        else
        {
            alert('Something did not work correctly. Please send us an email by clicking the link and the bottom of the page.')
        }
    }       
    
}