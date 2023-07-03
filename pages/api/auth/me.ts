import { NextApiRequest, NextApiResponse } from "next";
import * as jose from "jose";
import jwt from "jsonwebtoken";


export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse
) {
    const bearerToken = req.headers["authorization"] as string;

    if(!bearerToken){
        res.status(401).json({
            errorMessage: "Unauthorized request",
        });
    }

    const token = bearerToken.split(" ")[1]

    if (!token) {
        res.status(401).json({
            errorMessage: "Unauthorized Request",
        });
    }
 
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)

    try {
        await jose.jwtVerify(token, secret)
    } catch (error) {
        res.status(401).json({
            errorMessage: "Unauthorized Request!!",
        });
    }

    const payload = jwt.decode(token);

    return res.json({
        me: payload
    })
} 