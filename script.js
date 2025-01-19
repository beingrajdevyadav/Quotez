import QuotesList from "./quotes.js";
        // selection html tags
        const quoteTag = document.querySelector("#quoteLine");
        const authorTag = document.querySelector("#quoteAuthor");
        const changeBtn = document.querySelector("#changeBtn");
        let index = 0;

        // change quote function
        function changeQuote() {
            // testing everything in console.log()
            // console.log(QuotesList[index]);
            // console.log(QuotesList.length);

            quoteTag.textContent = `"${QuotesList[index].quote}" `;
            authorTag.textContent = `- ${QuotesList[index].author}`;

            // as we know, we have 50 quotes. it means array length is 50. so we are writing conditions, if index value is 49+ then set it index = 0;

            if (index >= QuotesList.length - 1) {
                i = 0;
            } else {
                index++;

            }

        }

        // on changeBtn click
        changeBtn.addEventListener("click", changeQuote);

        // once call changeQuote() function so that when page loads it get called itself.
        changeQuote();