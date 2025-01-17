const data = [
    {
        "arline-code": "AA",
        "airline-name": "American Airlines",
        "head": {
            "kwartier": {
                "locatie": "Fort Worth",
                "staat": "Texas"
            },
            "main-hub": "DFW",
            "staat": "Texas"
        },
        "extra": {
            "opgericht": "1930"
        }
    },
    {
        "arline-code": "AS",
        "airline-name": "Alaska Airlines",
        "head": {
            "kwartier": {
                "locatie": "Seattle",
                "staat": "Washington"
            },
            "main-hub": "SEA",
            "staat": "Washington"
        },
        "extra": {
            "opgericht": "1932"
        }
    },
    {
        "arline-code": "B6",
        "airline-name": "Jetblue Airways",
        "head": {
            "kwartier": {
                "locatie": "New York City",
                "staat": "New York"
            },
            "main-hub": "JFK",
            "staat": "New York"
        },
        "extra": {
            "opgericht": "1998"
        }
    },
    {
        "arline-code": "CO",
        "airline-name": "Continental Airlines",
        "head": {
            "kwartier": {
                "locatie": "Houston",
                "staat": "Texas"
            },
            "main-hub": "IAH",
            "staat": "Texas"
        },
        "extra": {
            "opgericht": "1934",
            "gestopt": "2012"
        }
    },
    {
        "arline-code": "DL",
        "airline-name": "Delta Air Lines",
        "head": {
            "kwartier": {
                "locatie": "Atlanta",
                "staat": "Georgia"
            },
            "main-hub": "ATL",
            "staat": "Georgia"
        },
        "extra": {
            "opgericht": "1924"
        }
    },
    {
        "arline-code": "EV",
        "airline-name": "ExpressJet Airlines",
        "head": {
            "kwartier": {
                "locatie": "Atlanta",
                "staat": "Georgia"
            },
            "main-hub": "IAH",
            "staat": "Texas"
        },
        "extra": {
            "opgericht": "1986",
            "kind": "regional",
            "gestopt": "2014"
        }
    },
    {
        "arline-code": "F9",
        "airline-name": "Frontier Airlines",
        "head": {
            "kwartier": {
                "locatie": "Denver",
                "staat": "Colorado"
            },
            "main-hub": "DEN",
            "staat": "Colorado"
        },
        "extra": {
            "opgericht": "1994"
        }
    },
    {
        "arline-code": "FL",
        "airline-name": "AirTran Airways",
        "head": {
            "kwartier": {
                "locatie": "Orlando",
                "staat": "Florida"
            },
            "main-hub": "ATL",
            "staat": "Florida"
        },
        "extra": {
            "opgericht": "1992",
            "gestopt": "2014"
        }
    },
    {
        "arline-code": "HA",
        "airline-name": "Hawaiian Airlines",
        "head": {
            "kwartier": {
                "locatie": "Honolulu",
                "staat": "Hawaii"
            },
            "main-hub": "HNL",
            "staat": "Hawaii"
        },
        "extra": {
            "opgericht": "1929"
        }
    },
    {
        "arline-code": "MQ",
        "airline-name": "Envoy Air",
        "head": {
            "kwartier": {
                "locatie": "Irving",
                "staat": "Texas"
            },
            "main-hub": "DFW",
            "staat": "Texas"
        },
        "extra": {
            "opgericht": "1984",
            "kind": "regional"
        }
    },
    {
        "arline-code": "OO",
        "airline-name": "SkyWest Airlines",
        "head": {
            "kwartier": {
                "locatie": "St. George",
                "staat": "Utah"
            },
            "main-hub": "LA",
            "staat": "California"
        },
        "extra": {
            "opgericht": "1972",
            "kind": "regional"
        }
    },
    {
        "arline-code": "UA",
        "airline-name": "United Airlines",
        "head": {
            "kwartier": {
                "locatie": "Chicago",
                "staat": "Illinois"
            },
            "main-hub": "ORD",
            "staat": "Illinois"
        },
        "extra": {
            "opgericht": "1926"
        }
    },
    {
        "arline-code": "US",
        "airline-name": "US Airways",
        "head": {
            "kwartier": {
                "locatie": "Temp",
                "staat": "Arizona"
            },
            "main-hub": "PHL",
            "staat": "Pennsylvania"
        },
        "extra": {
            "opgericht": "1937",
            "gestopt": "2013"
        }
    },
    {
        "arline-code": "VX",
        "airline-name": "Virgin America",
        "head": {
            "kwartier": {
                "locatie": "Burlingame",
                "staat": "California"
            },
            "main-hub": "SFO",
            "staat": "California"
        },
        "extra": {
            "opgericht": "2004",
            "gestopt": "2018"
        }
    },
    {
        "arline-code": "WN",
        "airline-name": "Southwest Airlines",
        "head": {
            "kwartier": {
                "locatie": "Dallas",
                "staat": "Texas"
            },
            "main-hub": "MDW",
            "staat": "Illinois"
        },
        "extra": {
            "opgericht": "1967"
        }
    },
    {
        "arline-code": "XE",
        "airline-name": "JetSuite",
        "head": {
            "kwartier": {
                "locatie": "Irvine",
                "staat": "California"
            },
            "main-hub": "IAH",
            "staat": "Texas"
        },
        "extra": {
            "opgericht": "2006",
            "kind": "private jet airline"
        }
    },
    {
        "arline-code": "YV",
        "airline-name": "Mesa Airlines",
        "head": {
            "kwartier": {
                "locatie": "Phoenix",
                "staat": "Arizona"
            },
            "main-hub": "PHX",
            "staat": "Arizona"
        },
        "extra": {
            "opgericht": "1980",
            "kind": "regional"
        }
    }
];


function generateHTML(airline) {
    console.log(airline)
    let $resultaatString =  `
      <h1>${airline["airline-name"]}  (${airline["arline-code"]}).</h1>
      <p>${airline["airline-name"]} is opgericht in ${airline.extra.opgericht}.</p>  
      <p>Het hoofdkwartier is gelegen in ${airline.head.kwartier.locatie} in de staat ${airline.head.kwartier.staat}.</p>
      <p>De main-hub is ${airline.head["main-hub"]} en deze is ligt in de staat ${airline.head.staat}.</p>
`   
    if (airline.extra.hasOwnProperty('kind')){
        $resultaatString += `${airline["airline-name"]} is echter een ${airline.extra.kind} maatschappij wilt dus zeggen dat ze in de naam van een grote speler vluchten uitvoeren.`
    }
    if (airline.extra.hasOwnProperty('gestopt')){
        $resultaatString += `${airline["airline-name"]} is echter in ${airline.extra.gestopt} gestopt en bestaat niet meer.`
    }
return $resultaatString

}

function itterate() {
    document.body.innerHTML = (data.map(function (el) {
        return generateHTML(el)
    }));
}

itterate();