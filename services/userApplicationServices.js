import {
  post_application_by_jobId_query,
  put_edit_application_by_id_query,
  get_applications_by_user_query,
  delete_application_by_id_query,
} from "../data/userApplicationQueries.js";

export const post_application_by_jobId_service = async (req, res) => {
  const user = req.user.id;
  try {
    const { dob, phone, skills } = req.body;

    await post_application_by_jobId_query(user, dob, phone, skills);
    res.status(200).json({ message: "successfully added" });
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};

export const get_applications_by_user_service = async (req, res) => {
  try {
    const user = req.user.id;
    const result = await get_applications_by_user_query(user);

    res.status(200).json({ result });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
};

export const put_edit_application_by_id_service = async (req, res) => {
  try {
    const { applicationId } = req.params;

    const user = req.user.id;
    const { dob, phone, skills } = req.body;
    const result = await put_edit_application_by_id_query(
      applicationId,
      user,
      dob,
      phone,
      skills
    );
    res.json({ result });
  } catch (error) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};

export const delete_application_by_id_service = async (req, res) => {
  try {
    const { applicationId } = req.params;

    const user = req.user.id;

    await delete_application_by_id_query(applicationId, user);
    res.json({ message: "successfully deleted" });
  } catch (error) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};
