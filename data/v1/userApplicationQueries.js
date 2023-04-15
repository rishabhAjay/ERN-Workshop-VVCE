import Application from "../../models/applicationModel.js";

export const post_application_by_jobId_query = async (
  user,
  dob,
  phone,
  skills
) => {
  const finalResult = new Application({
    user,
    basicDetails: {
      dob,
      phone,
    },
    skills: [...skills],
  });

  return await finalResult.save();
};

export const get_applications_by_user_query = async (user) => {
  const result = await Application.find({
    user,
  });
  return result;
};

export const put_edit_application_by_id_query = async (
  applicationId,
  user,
  dob,
  phone,
  skills
) => {
  const result = await Application.findOneAndUpdate(
    { _id: applicationId, user },
    {
      $set: {
        dob,
        phone,
        skills,
      },
    },
    { new: true }
  );
  return result;
};
