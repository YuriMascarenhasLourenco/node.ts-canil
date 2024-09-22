import { Response, Request } from "express"
import { createMenuObject } from "../helpers/createMenuObjects"
import { Pet } from "../Models/pet"


export const home=(req:Request,res:Response)=>{
    let list = Pet.getAll()
   res.render('pages/page',{
    menu:createMenuObject('all'),
    banner:{
        title:'Todos os animais',
        background:'allanimals.jpg'
    },
    list
   })
}
export const dogs = (req:Request,res:Response)=>{
    let list = Pet.getOneType('dog')
    res.render('pages/page',{
        menu:createMenuObject('dogs'),
        banner:{
            title:'Cachorros',
            background:'banner_dog.jpg'
        },
        list
    })

}
export const cats = (req:Request,res:Response)=>{
    let list= Pet.getOneType('cat')
    res.render('pages/page',{
        menu:createMenuObject('cats'),
        banner:{
            title:'gatos',
            background:'banner_cat.jpg'
        },
        list
    })

}
export const fishes=(req:Request,res:Response)=>{
    let list = Pet.getOneType('fish')
    res.render('pages/page',{
        menu: createMenuObject('fishes'),

        banner:{
            title:'peixes',
            background:'banner_fish.jpg'
        },
        list
    })


}