// Görevleri tuttuğumuz dizi (veritabanı yerine)
let tasks = [
  {
    id: 1,
    title: 'Örnek görev',
    description: 'Bu bir örnek görevdir',
    status: 'pending',
    priority: 'medium',
    assignee: 'musa'
  }
];
let nextId = 2;

// 1) LİSTELE
const getAllTasks = (req, res) => {
  res.json(tasks);
};

// 2) DETAY
const getTaskById = (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));
  if (!task) {
    return res.status(404).json({ message: 'Görev bulunamadı' });
  }
  res.json(task);
};

// 3) EKLE
const createTask = (req, res) => {
  const { title, description, status, priority, assignee } = req.body;
  const newTask = {
    id: nextId++,
    title,
    description,
    status: status || 'pending',
    priority: priority || 'medium',
    assignee
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// 4) GÜNCELLE
const updateTask = (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));
  if (!task) {
    return res.status(404).json({ message: 'Görev bulunamadı' });
  }
  const { title, description, status, priority, assignee } = req.body;
  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (status !== undefined) task.status = status;
  if (priority !== undefined) task.priority = priority;
  if (assignee !== undefined) task.assignee = assignee;
  res.json(task);
};

// 5) SİL
const deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'Görev bulunamadı' });
  }
  tasks.splice(index, 1);
  res.json({ message: 'Görev silindi' });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};