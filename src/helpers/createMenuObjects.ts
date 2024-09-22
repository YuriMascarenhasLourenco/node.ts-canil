type menuType = 'all'|'dogs'|"cats"|'fishes'|''

export const createMenuObject= (item:menuType)=>{
   let menu={
        all:false,
        dogs:false,
        cats:false,
        fishes:false,
    }
    if(item !== ''){
        menu[item]= true
    }
    return menu
}