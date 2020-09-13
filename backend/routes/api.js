const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const Detail = require("../models/Detail");
const dateFormat = require("dateformat");
const now = new Date();

router.post("/Task", async function (req, res) {
  const task = req.body;
  if (task.name.length <= 2){
  return res.status(404).send("Give the Task a name or description")};
  const newTask = new Task(task);
  await newTask.save();
  res.send(newTask);
});

router.get("/Data", async function (req, res) {
  const tasks = await Task.find();
  const details = await Detail.find();
  if (tasks.length === 0){
  return  res.status(404).send("You have no open Tasks");
  }
  res.send({ tasks, details });
});

router.delete("/Task/:id", async function (req, res) {
  const task = await Task.findById({ _id: req.params.id });
  if (!task) res.status(404).send("The task with the given ID was not found");
  const taskDetails = await Detail.find({ taskId: task._id });
  const taskDetailsId = taskDetails.map((d) => d._id);
  if (taskDetailsId.length > 0) {
    await Detail.find().deleteMany({ _id: { $in: taskDetailsId } });
    await task.remove();
    const tasks = await Task.find();
    const detail = await Detail.find();
  } else {
    await task.remove();
  }

  const tasks = await Task.find();
  const detail = await Detail.find();

  res.send({ tasks, detail });
});

router.post("/Detail", async function (req, res) {
  const detail = req.body;
  if (detail.name.length <= 2)
    res.status(404).send("Give the Detail a name or description");
  const newDetail = new Detail(detail);
  await newDetail.save();
  res.send(newDetail);
});

router.put("/Detail/:id", async function (req, res) {
  const detail = await Detail.findById({ _id: req.params.id });
  if (!detail) res.status(404).send("The given ID was not found");
  const task = await Task.findById({ _id: detail.taskId });
  const lastUpDate = dateFormat(now, "UTC:yyyy-mm-dd'T'00:00:00'Z'");
  task.lastUpdate = lastUpDate;
  detail.isDone = !detail.isDone;
  await task.save();
  await detail.save();
  res.send({ detail, task });
});

router.delete("/Detail/:id", async function (req, res) {
  const detail = await Detail.findById({ _id: req.params.id });
  if (!detail) res.status(404).send("The given ID was not found");
  await detail.remove();
  res.send(detail._id);
});

module.exports = router;

