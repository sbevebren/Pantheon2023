import StarsCanvas from '@/components/Stars'
import Scorecard from '@/components/scorecard'
import React, { useEffect } from 'react'

var data = [
    {
        name: "data wizards",
        score: "230"
    },
    {
        name: "maverick",
        score: "250"
    },
    {
        name: "supreme",
        score: "120"
    },
    {
        name: "compact",
        score: "300"
    },
    {
        name: "baigan",
        score: "100"
    },
    {
        name: "atulyo",
        score: "120"
    },
    {
        name: "azrael",
        score: "80"
    },
    {
        name: "kasukabe defence group",
        score: "120"
    },
    {
        name: "octaGlitch",
        score: "1170"
    },
    {
        name: "Dhoom Dhadaka",
        score: "300"
    },
    {
        name: "3.0",
        score: "1290"
    },
    {
        name: "Mahesh",
        score: "200"
    },
    {
        name: "Rom Rom Bhaiyon",
        score: "630"
    },
    {
        name: "Hekrr",
        score: "150"
    },
    {
        name: "Hexagon",
        score: "120"
    },
    {
        name: "VAAS",
        score: "120"
    },
    {
        name: "VRQTZ",
        score: "400"
    },
    {
        name: "Oni Chan",
        score: "1320"
    },
    {
        name: "Lavender",
        score: "200"
    },
    {
        name: "369",
        score: "360"
    },
    {
        name: "NODDY",
        score: "129"
    },
    {
        name: "Hey Baby",
        score: "70"
    },
    
    {
        name: "Name 404",
        score: "70"
    },
    {
        name: "Pahaan",
        score: "50"
    },
    {
        name: "Team Z",
        score: "50"
    },
    {
        name: "Black Widow",
        score: "200"
    },
    {
        name: "Hydra X",
        score: "40"
    },
    {
        name: "Anantam",
        score: "40"
    },
    {
        name: "OtoChan",
        score: "60"
    },
    
    {
        name: "Proxima",
        score: "30"
    },
    
    {
        name: "cout << \"The Boys\";",
        score: "130"
    },
    
    
    {
        name: "Black",
        score: "30"
    },
    
    {
        name: "Galactio",
        score: "130"
    },
    {
        name: "Chalo",
        score: "80"
    },
    {
        name: "Veritasium",
        score: "200"
    },
    
    
]



function sortByScoreDescending(arr) {
    arr.sort(function (a, b) {
        var scoreA = parseInt(a.score);
        var scoreB = parseInt(b.score);

        if (scoreA < scoreB) {
            return 1;
        } else if (scoreA > scoreB) {
            return -1;
        } else {
            return 0;
        }
    });
}



sortByScoreDescending(data);


var topdata=data.slice(0,10);

const Leaderboard = () => {
    data = data.sort(
        (p1, p2) => 
        (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0)

  return (
    <div className="bg-black z-0 relative">
        <div className="flex flex-col justify-center items-center pt-[50px] pb-[50px] gap-8 ">

            <h1 className="font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
            LEADERBOARD
            </h1>
            {
                topdata.map((item, ind)=>(
                    <Scorecard 
                        key={ind}
                        name={item.name}
                        rank={ind}
                        score={item.score}
                    />
                ))
            }
        </div>
            <StarsCanvas />
    </div>
  )
}

export default Leaderboard
