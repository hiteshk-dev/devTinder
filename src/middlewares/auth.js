const adminAuth = (req,res,next)=>{
    console.log("Auth Middleware called!")
    const token = 'xyz'
    const isAdminAuthenticated = token == 'xyz'
    if(!isAdminAuthenticated) {
        res.status(401).send("Not Authorized")
    }
    else {
         next()
    }
}

const userAuth = (req,res,next)=>{
    console.log("User Middleware called!")
    const token = 'xyz'
    const isAdminAuthenticated = token == 'xyz'
    if(!isAdminAuthenticated) {
        res.status(401).send("Not Authorized")
    }
    else {
         next()
    }
}

module.exports = {adminAuth,userAuth}