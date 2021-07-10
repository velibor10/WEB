
/*Variebles*/
const url_allFilms = "http://api.tvmaze.com/shows";
const movie_url = "https://www.tvmaze.com/shows";
const movieRow = $(".movieRow");
const movieInput = $("#movieInputID");
const mainTitle = $("#mainTitle");
const logo = $(".logo");
const movieInfo = $(".movieInfo");
const dropDownDiv = $("#dropDownDiv");


//FUNCTIONS AND EVENTS FOR CREATING DINAMIC ONE PAGE APP

/*Function for fill main page*/
$(window).on("load", () => {
    /*Ajax and jQuery request*/
    const fillFilmsCards = $.ajax({
        url: url_allFilms,
        method: "GET",
    });
    /*Event if request is successful*/
    fillFilmsCards.done(objects => {

        for(let i = 0; i < 50; i++){
            let movieImg = objects[i].image.original;
            let movieID = objects[i].id;
            let movieName = objects[i].name; 

            /*Create HTML string for appending*/
            let cards =
                `<div class="cardBorder col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
                <div class="cardelements">
                    <div class="veza pictures" id="${movieID}" style="background-image: url(${movieImg})"></div>
                    <div class="title">
                       <p class="veza" id="${movieID}">${movieName}</p>
                    </div>
                </div>
            </div>`;

            movieRow.append(cards);
            mainTitle.text("TV SHOWS");
        }
    });
    /*Event if request isn't successful*/
    fillFilmsCards.fail(errorObject => {
        console.log(errorObject);
    });
});



/*Function for search movie*/
movieInput.keypress(function (e) {

    if (e.originalEvent.keyCode === 13) {
        /*Ajax and jQuery request*/
        const searchFilm = $.ajax({
            url: url_allFilms,
            method: "GET",
        });
        /*Event if request is successful*/
        searchFilm.done(objects => {
            let counter = 0;
            $(objects).each((index, element) => {
                if (element.name === movieInput.val()) {
                    /*Clear card section HTML*/
                    movieRow.empty();

                    let movieImg = element.image.original;
                    let movieName = element.name;
                    let movieID = element.id;
                    /*Create HTML string for appending*/
                    let cards =
                        `<div class="cardBorder col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
                        <div class="cardelements">
                            <div class="veza pictures" id="${movieID}" style="background-image: url(${movieImg})"></div>
                            <div class="title">
                                <p class="veza" id="${movieID}">${movieName}</p>
                            </div>
                        </div>
                    </div>`;

                    movieRow.append(cards);
                    movieInput.val("");
                    mainTitle.text("TV SHOWS");
                    counter++;
                }
            });
            /*Set main title text content*/
            if (counter === 0) {
                mainTitle.text("Movie not found");
                movieRow.empty();
            }
        });
        /*Event if request isn't successful*/
        searchFilm.fail(errorObject => {
            console.log(errorObject);
        });
    }
});


/*Function when click on LOGO (when user click on LOGO to refresh main page)*/
logo.on("click", () => {
    /*Ajax and jQuery request*/
    const fillFilmsCards = $.ajax({
        url: url_allFilms,
        method: "GET",
    });

    /*Event if request is successful*/
    fillFilmsCards.done(objects => {

        movieRow.empty();

        $(objects).each((index, element) => {
            let movieImg = element.image.original;
            let movieName = element.name;
            let movieID = element.id;
            /*Create HTML string for appending*/
            let cards =
                `<div class="cardBorder col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
                <div class="cardelements">
                    <div class="veza pictures" id="${movieID}" style="background-image: url(${movieImg})"></div>
                    <div class="title">
                       <p class="veza" id="${movieID}">${movieName}</p>
                    </div>
                </div>
            </div>`;

            movieRow.append(cards);
            mainTitle.text("TV SHOWS");

        });
    });
    /*Event if request isn't successful*/
    fillFilmsCards.fail(errorObject => {
        console.log(errorObject);
    });
});


/*Function for set movie detail*/
movieRow.on("click", (e) => {

    if (e.target.attributes[0].nodeValue === "veza" || e.target.attributes[0].nodeValue === "veza pictures") {
        movieRow.empty();
        let movieID = e.target.id;
        let movieImageDescriptionAndNameURL = `${url_allFilms}/${movieID}`;
        let movieSesasonsURL = `${movieImageDescriptionAndNameURL}/seasons`;
        let movieCastsURL = `${movieImageDescriptionAndNameURL}/cast`;
        let movieCrewURL = `${movieImageDescriptionAndNameURL}/crew`;

        /*Request for get info about movie name, description and image*/
        const pictureDescriptionAndName = $.ajax({
            url: movieImageDescriptionAndNameURL,
            method: "GET",
        });

        pictureDescriptionAndName.done(objects => {
            let movieName = objects.name;
            let movieDescription = objects.summary;
            let movieImage = objects.image.original;

            /*Request for get info about movie seasons data*/
            const movieSeasons = $.ajax({
                url: movieSesasonsURL,
                method: "GET",
            });

            movieSeasons.done(objects => {
                let numberOfSeasons = objects.length;
                let seasonsParagraps = "";
                objects.forEach(element => {
                    let premiereDate = `${element.premiereDate.split("-")[2]}.${element.premiereDate.split("-")[1]}.${element.premiereDate.split("-")[0]}`;
                    let endDate = `${element.endDate.split("-")[2]}.${element.endDate.split("-")[1]}.${element.endDate.split("-")[0]}`;
                    seasonsParagraps += `<p class="p-0 m-0">${premiereDate} - ${endDate}</p>`;
                });

                /*Request for get info about movie cast detail*/
                const movieCasts = $.ajax({
                    url: movieCastsURL,
                    method: "GET",
                });

                movieCasts.done(objects => {
                    let castParagraps = "";
                    for (let i = 0; i < 5; i++) {
                        castParagraps += `<p class="p-0 m-0">${objects[i].person.name}</p>`;
                    }

                    /*Request for get info about movie crew detail*/
                    const proba = $.ajax({
                        url: `${movieImageDescriptionAndNameURL}/crew`,
                        method: "GET",
                    });
                    
                    proba.done(objects => {
                        let crewInfo = [];
                        let crewParagraphs = "";
                        for(let i = 0; i <= 1; i++){
                            crewInfo.push({profesion: objects[i].type, name: objects[i].person.name});
                        }
                      
                        crewParagraphs = 
                        `<p class="p-0 m-0">${crewInfo[0].profesion}: ${crewInfo[0].name}</p>
                        <p class="p-0 m-0">${crewInfo[1].profesion}: ${crewInfo[1].name}</p>`
                        
                        /*Create HTML string for append to Info page*/
                        let movieInfoHTML =
                                    `<div class="row movieInfoRow pt-4">
                                    <div class="infoPicture col-12 col-md-7 col-lg-4">
                                        <img src="${movieImage}" alt="img...">
                                    </div>
                                    <div class="infoData col-12 col-sm-5 col-lg-8">
                                        <div class="seasons ps-5 mt-1 mb-3" >
                                            <h4>Seasons(${numberOfSeasons})</h4>
                                            ${seasonsParagraps}
                                        </div>
                                        <div class="cast ps-5 mt-1 mb-3">
                                        <h4>Cast</h4>
                                        ${castParagraps}
                                        </div>
                                        <div class="crew ps-5">
                                        <h4>Crew</h4>
                                        ${crewParagraphs}
                                        </div>
                                    </div>
                
                                </div>
                                <div class="row descriptionRow">
                                    <h4 class="ps-0 mt-4 mb-1">Description</h4>
                                    ${movieDescription}
                                </div>`;
            
                                movieRow.append(movieInfoHTML);
                                mainTitle.text(movieName);
                    });
                    /*Event if request for crew info isn't successful*/
                    proba.fail(errorObject =>{
                        console.log(errorObject);
                    });
            

                    
                });
                /*Event if request for cast info isn't successful*/
                movieCasts.fail(errorObject => {
                    console.log(errorObject);
                });

            });
            /*Event if request for sesaon info isn't successful*/
            movieSeasons.fail(errorObject => {
                console.log(errorObject);
            });

        });
        /*Event if request for film name, picture and description isn't successful*/
        pictureDescriptionAndName.fail(errorObject => {
            console.log(errorObject);
        });
    }
});







