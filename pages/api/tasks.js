// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import dbconnect from "../../models/dbconnection";
import Task from "../../models/TaskModel"

dbconnect();

const App = async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const tasks = await Task.find({});
        res.status(200).json({ success: true, data: tasks });

      } catch (err) {
        res.status(400).json({ success: false, message: err.message });
      }
      break;
    case 'POST':
      console.log(req.body);
      try {
        const task = await Task.create(req.body);
        res.status(201).json({ success: true, data: task });

      } catch (err) {
        res.status(400).json({ success: false, message: err.message });
      }
      break;
    default:
      res.status(400).json({ success: false, message: err.message });
  }
}
export default App;