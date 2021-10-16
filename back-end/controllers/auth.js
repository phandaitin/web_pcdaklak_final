

const register = (req,res,next) => {
    res.json('controller Register')
}

const login = (req,res,next) => {
    res.json('controller Login')
}


module.exports= {
    register,
    login
}
