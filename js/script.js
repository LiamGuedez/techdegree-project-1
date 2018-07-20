// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// displays a new quote every 7 seconds
// the "myTimer" variable is used inside the "printQuote" function
var myTimer = window.setInterval(printQuote, 7000);

// an array of quotes
var quotes =
[
    {quote: "Intelligence plus character—that is the goal of true education", source: "Dr. Martin Luther King, Jr.", citation: "'The Purpose of Education' from Morehouse College student newspaper", year: "1947", tags: "Inspirational"},
    {quote: "If you want to live a happy life, tie it to a goal, not to people or things", source: "Albert Einstein", tags: "Goal Setting"},
    {quote: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world", source: "Harriet Tubman", tags: "Inspirational"},
    {quote: "The three great essentials to achieve anything worthwhile are, first, hard work; second, stick-to-itiveness; third, common sense", source: "Thomas A. Edison", tags: "Grit"},
    {quote: "A friend is a second self", source: "Aristotle", tags: "Philosophy"},
    {quote: "A man is rich in proportion to the number of things he can afford to let alone", source: "Henry David Thoreau", citation: "QuotationsPage.com", tags: "Wisdom"},
    {quote: "I detest that man who hides one thing in the depths of his heart, and speaks for another", source: "Homer", tags: "Philosophy"},
    {quote: "Never to suffer would never to have been blessed", source: "Edgar Allan Poe", citation: "QuotationsPage.com", tags: "Wisdom"},
    {quote: "Determine to live life with flair and laughter", source: "Maya Angelou", tags: "Wisdom"},
    {quote: "Sometimes you can't see yourself clearly until you see yourself through the eyes of others", source: "Ellen DeGeneres", tags: "Wisdom"}
];

// returns a random number from zero to (top - 1)
function getRandomNumber(top)
{
  return Math.floor(Math.random() * top);
}

// changes background color to a randomly selected color
function randomBackgroundColor()
{
  var color = 'rgb(';
  color += getRandomNumber(256) + ',';
  color += getRandomNumber(256) + ',';
  color += getRandomNumber(256) + ')';
  document.body.style.backgroundColor = color;
}

// returns a random quote object from the quotes array
function getRandomQuote()
{
  var randomIndex = getRandomNumber(quotes.length);
  return quotes[randomIndex];
}

// constructs a string containing the different properties of the quote object
// displays the final HTML string to the page
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
  // sends string to the "quote-box" element in the "index.html" file
  document.getElementById('quote-box').innerHTML = html;
  // changes background color
  randomBackgroundColor();
  // resets the timer. This keeps the timer and the button pushes from interfering with each other
  clearInterval(myTimer);
  myTimer = window.setInterval(printQuote, 7000);
}
