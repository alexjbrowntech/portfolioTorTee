import * as topics from "../models/topicsModel.js";

export async function getTopic(req, res) {
  const id = req.params.id;
  const questions = await topics.getQuestionsById(id);
  if (!questions) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Question not found" } });
  }
  res.status(200).json({ status: "Success", data: questions });
}
