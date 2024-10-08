/**
 * create a socialMediaPost service
 *
 * 1. create an async function createSocialMediaPost
 * 2. Pass the socialMediaPost details as parameter to the function
 * 3. use SocialMediaPost database model to create a socialMediaPost document in mongodb
 * 4. return the new socialMediaPost created to the function
 */

const { default: mongoose } = require("mongoose");
const SocialMediaPost = require("../models/socialMediaPost.model");

const createSocialMediaPost = async (socialMediaPost) => {
  const newSocialMediaPost = new SocialMediaPost(socialMediaPost);
  return await newSocialMediaPost.save();
};

const listSocialMediaPosts = async ({ page, limit, sortByField, keyword }) => {
  if (page < 1) {
    return [];
  }

  const skip = (page - 1) * limit;
  // const socialMediaPosts = await SocialMediaPost.find().limit(limit).skip(skip).sort(sortByField).sort('_id');
  const socialMediaPosts = await SocialMediaPost.aggregate([
    {
      $match: {
        title: {
          $regex: keyword,
          $options: "i",
        },
      },
    },
    {
      $project: {
        _id: 0,
        __v: 0,
        title: 0
      }
    },
    {
      $sort: {
        [sortByField]: -1,
      },
    },
    {
      $skip: skip,
    },
    {
      $limit: +limit,
    },
  ]);

  return socialMediaPosts;
};

const getSocialMediaPost = async (socialMediaPostId) => {
  const socialMediaPost = await SocialMediaPost.findById(socialMediaPostId);
  return socialMediaPost;
};

const updateSocialMediaPost = async (socialMediaPostId, fieldsToUpdate) => {
  const filterCriteria = {
    _id: mongoose.Types.ObjectId.createFromHexString(socialMediaPostId),
  };
  const updatedSocialMediaPost = await SocialMediaPost.updateOne(
    filterCriteria,
    fieldsToUpdate
  );

  return updatedSocialMediaPost;
};

const deleteSocialMediaPost = async (socialMediaPostId) => {
  const filterCriteria = {
    _id: mongoose.Types.ObjectId.createFromHexString(socialMediaPostId),
  };
  return await SocialMediaPost.deleteOne(filterCriteria);
};

module.exports = {
  createSocialMediaPost,
  listSocialMediaPosts,
  getSocialMediaPost,
  updateSocialMediaPost,
  deleteSocialMediaPost,
};
