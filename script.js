document.addEventListener("DOMContentLoaded", function() {
            const titleText = "Made by not_random_. on discord || Sigma";
            let index = 0;

            function scrollTitle() {
                document.title = titleText.slice(index) + " " + titleText.slice(0, index);
                index = (index + 1) % titleText.length;
            }

            setInterval(scrollTitle, 200);
        });
