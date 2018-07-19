// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//1. Create an array of JavaScript objects to hold the data for your quotes.
//2. Each quote object in the quotes array should have the following properties:
//   quote, source, optional citation, and optional year.
//Extra Credit 1. Add more properties to the quote object.
// an array of quotes.
var quotes =
[
    {quote: "Cheese is good", source: "A guy that loves cheese"},
    {quote: "Cake is amazing", source: "A girl that loves cake"},
    {quote: "There is nothing like a citation", source: "A dude that loves ciations", citation: "citation magazine"},
    {quote: "It's best to have everything, so steal it", source: "A cleptomaniac chick", citation: "South Carolina Encyclopedia of Violent Crimes", year: "2018", tags: "crime"}
];

//3. Create a function named getRandomQuote.

// returns a random number from zero to (parameter - 1)
function getRandomNumber(top)
{
  return Math.floor(Math.random() * top);
}

// returns a random quote object from the quotes array.
function getRandomQuote()
{
  var randomIndex = getRandomNumber(quotes.length);
  return quotes[randomIndex];
}

//Extra Credit 2. Random background color.
// changes background color to a randomly selected color
function randomBackgroundColor()
{
  var color = 'rgb(';
  color += getRandomNumber(256) + ',';
  color += getRandomNumber(256) + ',';
  color += getRandomNumber(256) + ')';
  document.body.style.backgroundColor = color;
}

//4. Create a function named printQuote.
// constructs a string containing the different properties of the quote object.
// displays the final HTML string to the page.
function printQuote()
{
  // creates string
  var quoteObject = getRandomQuote();
  var html = '<p class="quote">' + quoteObject.quote + '</p>';
  html += '<p class="source">' + quoteObject.source;

  if(quoteObject.citation)
  {
    html += '<span class="citation">' + quoteObject.citation + '</span>';
  }

  if(quoteObject.year)
  {
    html += '<span class="year">' + quoteObject.year + '</span>';
  }

  if(quoteObject.tags)
  {
    html += '<span class="tags">' + quoteObject.tags + '</span>';
  }

  html += "</p>";
  // sends text to quote-box element in index.html file
  document.getElementById('quote-box').innerHTML = html;
  randomBackgroundColor(); // changes background color
}

//5. Add good code comments to your JavaScript code.

//6. If you're having trouble with this project,
//make sure you take a look at this great study guide: Random Quote Generator Study Guide

//7. Before you submit your project for review,
//make sure you can check off all of the items on the Student Project Submission Checklist.

//Extra Credit 3. Auto-refresh the quote.
