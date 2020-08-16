// Submitted function called with feedback form is submitted
function submitted()
{
    // 'name' then assigning it's value to a JS variable called 'name'
    let name = document.querySelector('#name').value;

    // Checking if the 'name' variable is blank, and setting variable value if so
    if(name === '')
    {
        name = 'my friend';
    }

    // Display an window alert to the user
    alert('Thanks for your submisssion' + ', ' + name + '.');

    //Get email from form
    let email = document.querySelector('#email').value;

    //Next step is to store feedback or send to my email
}