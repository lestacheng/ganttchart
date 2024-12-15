'use client';

import { Task, Gantt, ViewMode } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import { useState } from 'react';

let tasks: Task[] = [
  {
    start: new Date(2024, 0, 1),
    end: new Date(2024, 0, 15),
    name: "Project Initiation",
    id: "1",
    progress: 45,
    type: "task",
    styles: { progressColor: '#34d399', progressSelectedColor: '#34d399' }
  },
  {
    start: new Date(2024, 0, 10),
    end: new Date(2024, 1, 10),
    name: "Development Phase",
    id: "2",
    progress: 25,
    type: "task",
    dependencies: ["1"],
    styles: { progressColor: '#60a5fa', progressSelectedColor: '#60a5fa' }
  },
  {
    start: new Date(2024, 1, 1),
    end: new Date(2024, 1, 20),
    name: "Testing Phase",
    id: "3",
    progress: 10,
    type: "task",
    dependencies: ["2"],
    styles: { progressColor: '#f472b6', progressSelectedColor: '#f472b6' }
  }
];

export default function GanttChart() {
  const [view, setView] = useState<ViewMode>(ViewMode.Month);
  const [currentTasks, setTasks] = useState<Task[]>(tasks);

  return (
    <div className="rounded-lg bg-white shadow ring-1 ring-black ring-opacity-5">
      <div className="p-4">
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setView(ViewMode.Day)}
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              view === ViewMode.Day
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Day
          </button>
          <button
            onClick={() => setView(ViewMode.Week)}
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              view === ViewMode.Week
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setView(ViewMode.Month)}
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              view === ViewMode.Month
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Month
          </button>
        </div>
        
        <Gantt
          tasks={currentTasks}
          viewMode={view}
          onDateChange={(task: Task) => {
            const newTasks = currentTasks.map(t => (t.id === task.id ? task : t));
            setTasks(newTasks);
          }}
          onProgressChange={(task: Task) => {
            const newTasks = currentTasks.map(t => (t.id === task.id ? task : t));
            setTasks(newTasks);
          }}
          onDoubleClick={task => {
            console.log("Task clicked:", task);
          }}
          listCellWidth=""
          columnWidth={60}
          barCornerRadius={4}
          handleWidth={8}
          todayColor="rgba(252, 165, 165, 0.2)"
          projectProgressColor="#10b981"
          progressColor="#60a5fa"
          baselineColor="#6366f1"
        />
      </div>
    </div>
  );
} 