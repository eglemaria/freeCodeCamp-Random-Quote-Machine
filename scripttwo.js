
// second option;
// use arrays;


$(document).ready(function() {
    getQuote();

    function getQuote() {

        var quotes = ["Don’t Let Yesterday Take Up Too Much Of Today",
            "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough",
            "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character",
            "We May Encounter Many Defeats But We Must Not Be Defeated",
            "Do What You Can With All You Have, Wherever You Are"
        ];
        var authors = ["-Will Rogers", "- Og Mandino", "- Unknown", "- Maya Angelou", "- Theodore Roosevelt"];


        var randomNumber = Math.floor(Math.random() * (quotes.length));
        var randomQuote = quotes[randomNumber];
        var randomAuthor = authors[randomNumber];

        $(".quote").text(randomQuote);
        $(".author").text(randomAuthor);
    }

    $("#newQuote").on("click", function() {
        getQuote();
    });
});