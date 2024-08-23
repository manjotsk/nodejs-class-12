const validationMiddleware = (schemaToValidate) =>{
    return async (req,res,next)=>{ // controller function
        const bookBody = req.body
        try {
            await schemaToValidate.validateAsync(bookBody)
    
            next()
        } catch (error) {
            res.status(400).send(error)
            return
        }
    }
}
module.exports = {validationMiddleware}