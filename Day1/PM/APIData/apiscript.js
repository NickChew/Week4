// function is running asynchronously so will wait until certain tasks have finished before moving on
const getRandomQuote = async () => {
    // try/catch block will 'try' running a bit of code if an error occurs it will be caught in the catch statement
    try {
        // the fetch method will get data from any API and store it in the variable
        // the await keyword means it will wait until it's recieved something back before moving on to the next line
        const response = await fetch('https://api.quotable.io/random');
        // if the fetch request was not ok and failed then throw an error that will run the catch statement
        if(!response.ok){
            // throw an error for the catch statement to catch
            throw new Error()
        }
        // convert the response variable from JSON into normal JavaScript
        const data = await response.json();
        // console.log data from the api. In this case a randomly generated quote
        console.log(data.content);
    } catch (err) {
        // catch statement handles any errors that occur. In this case console logging the error
        console.log(err)
    }

}

// run the function to get a random quote
getRandomQuote()