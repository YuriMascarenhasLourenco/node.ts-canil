import { Response, Request } from "express"
import { Pet } from "../Models/pet"
import { createMenuObject } from "../helpers/createMenuObjects"

export const search=(req:Request,res:Response)=>{
    const query:string = req.query.q as string
    let list = Pet.getfromName(query)
    res.render('pages/page',{
        menu:createMenuObject(''),
        list
    })
}