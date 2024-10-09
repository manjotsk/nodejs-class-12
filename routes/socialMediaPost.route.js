const express = require('express');
const { createSocialMediaPostController, listSocialMediaPostController, getSocialMediaPostById, updateSocialMediaPostController, deleteSocialMediaPostController } = require('../controller/socialMediaPost.controller');
const { validationMiddleware } = require('../middlewares/validation.middleware');
const { createSocialMediaPostBodySchema } = require('../validation-schemas/socialMediaPost.validation-schema');
const { verifyMiddleware } = require('../controller/auth.controller');

const socialMediaPostRouter = express.Router();

socialMediaPostRouter.post('/',validationMiddleware(createSocialMediaPostBodySchema) ,createSocialMediaPostController) // create socialMediaPost

socialMediaPostRouter.get('/', verifyMiddleware, listSocialMediaPostController)
// get single socialMediaPost
socialMediaPostRouter.get('/:socialMediaPostId', getSocialMediaPostById)
socialMediaPostRouter.put('/:socialMediaPostId', updateSocialMediaPostController)

socialMediaPostRouter.delete('/:socialMediaPostId', deleteSocialMediaPostController)

module.exports = socialMediaPostRouter;