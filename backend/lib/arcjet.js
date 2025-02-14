import arcjet,{tokenBucket,shield,detectBot} from "@arcjet/node";

import "dotenv/config.js"

//initialize arcjet

export const aj = arcjet({
    key:process.env.ARCJET_KEY,
    characteristics:["ip.src"],
    rules:[
        //shield protects your app from common atteacks e.g SQL injection, XSS, CSRF attack
        shield({mode:"LIVE"}),
        detectBot({
            mode:"LIVE",
            //block all bots except search enginee
            allow:[
                "CATEGORY:SEARCH_ENGINE"

            ]
        }),
        //rate limiting
        tokenBucket({
            mode:"LIVE",
            refillRate:5,
            interval:10,
            capacity:10,
        })
    ]
})
