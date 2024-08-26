const { createSocialMediaPost, listSocialMediaPosts, getSocialMediaPost, updateSocialMediaPost, deleteSocialMediaPost } = require("../services/socialMediaPost.services");

const createSocialMediaPostController = async (req, res, next) => {
  try {
    const requestBody = req.body;
    const socialMediaPost = await createSocialMediaPost(requestBody);
    res.send({
      message: "ok",
      socialMediaPost,
    });
  } catch (error) {
    console.error(error);
    res.send(500, "something went wrong");
  }
};

const listSocialMediaPostController = async (req, res, next) => {
  try {
    const listOfSocialMediaPost = await listSocialMediaPosts();
    res.send({
      message: "ok",
      data: listOfSocialMediaPost,
    });
  } catch (error) {
    console.error(error);
    res.send(500, "Something went wrong");
  }
};

const getSocialMediaPostById = async (req, res, next) => {
  try {
    const socialMediaPostId = req.params.socialMediaPostId;
    const socialMediaPost = await getSocialMediaPost(socialMediaPostId);

    res.send({
      message: "OK",
      socialMediaPost,
    });
  } catch (error) {}
};

const updateSocialMediaPostController = async (req, res, next) => {
  try {
    const socialMediaPostId = req.params.socialMediaPostId;
    const updatedFields = req.body
    const updatedSocialMediaPost = await updateSocialMediaPost(socialMediaPostId,updatedFields)
    res.send({
      message: "ok",
      updatedSocialMediaPost
    })
  } catch (error) {}
};

const deleteSocialMediaPostController = async (req,res,next)=>{
  try {
    const socialMediaPostId = req.params.socialMediaPostId
    const deletedSocialMediaPost = deleteSocialMediaPost(socialMediaPostId)
    res.send({
      message:'ok',
      deletedSocialMediaPost
    })
  } catch (error) {
    
  }
}

module.exports = {
  createSocialMediaPostController,
  listSocialMediaPostController,
  getSocialMediaPostById,
  updateSocialMediaPostController,
  deleteSocialMediaPostController
};
