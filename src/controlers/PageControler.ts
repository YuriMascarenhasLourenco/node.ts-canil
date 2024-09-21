import { Response, Request } from "express"


export const home=(req:Request,res:Response)=>{
   res.render('pages/page',{
    menu:{
        all:true,
        dogs:false,
        cats:false,
        fishes:false,
    },
    banner:{
        title:'Todos os animais',
        background:'allanimals.jpg'
    }
   })
}
export const dogs = (req:Request,res:Response)=>{
    res.render('pages/page',{
        menu:{
            all:false,
            dogs:true,
            cats:false,
            fishes:false,
        },
        banner:{
            title:'Cachorros',
            background:'banner_dog.jpg'
        }
    })

}
export const cats = (req:Request,res:Response)=>{
    res.render('pages/page',{
        menu:{
            all:false,
            dogs:false,
            cats:true,
            fishes:false,
        },
        banner:{
            title:'gatos',
            background:'banner_cat.jpg'
        }
    })

}
export const fishes=(req:Request,res:Response)=>{
    res.render('pages/page',{
        menu:{
            all:false,
            dogs:false,
            cats:false,
            fishes:true,
        },

        banner:{
            title:'peixes',
            background:'banner_fish.jpg'
        }
    })


}