const API_URL = 'http://localhost:3000/users'
// src/services/authTwo.js
//TODO: funciones userRegister() y userLoging(), son async, reciben userEmail y password, y deben return:
//^ El usuario registrado o loggeado 
//! throw new Error('que paso?')


export async function userRegister(userEmail, password) {

    try {
        const res = await fetch(`${API_URL}?userEmail=${userEmail}`)
        if(!res.ok) throw new Error('Error al verificar el Email de usuario en API desde UserRegister')
        const resJson = await res.json()
    //Exsite ya este correo
    if(resJson.length > 0) throw new Error('Email ya esta registrado en sistema')
        const newUser = {
        id: crypto.randomUUID(),
        userEmail:userEmail,
        password:password,
        cart: []
    } 

    const resPost = await fetch(API_URL, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newUser)

    })

    if(!resPost.ok) throw new Error('Error al hacer POST del registro de usuario en API')
        const resPostJson = await resPost.json()

    return resPostJson 

    } catch (error) {
        console.error('🚫Error al Registrar el usuario🚫', error.message);
        throw error //Para propagar el error en el componente que llame esta func.
        
    }
    
}


export async function userLoging(userEmail, password) {

    try {
        const res = await fetch(`${API_URL}?userEmail=${userEmail}`)
        if(!res.ok) throw new Error('Error al verificar el Email de usuario en API desde UserLogin')
        const resJson = await res.json()
    //Exsite ya este correo
    if(resJson.length === 0) throw new Error('Email NO esta registrado en sistema, no peude hacer login, registrese antes')
       
        const userLogged = resJson.find(u => u.password === password) 
        if(userLogged === undefined) throw new Error('Email o contrasena son incorrecto')
            return userLogged

    } catch (error) {
        console.error('🚫Error al Login el usuario🚫', error.message);
        throw error //Para propagar el error en el componente que llame esta func.
    }
    
}

