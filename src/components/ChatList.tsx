import React from 'react';
import { Task } from '../types/chat';
import styled from 'styled-components';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onDeleteCompletedTasks: () => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask, onDeleteTask, onDeleteCompletedTasks }) => {
  return (
    <div className='chatList'>
      <StyledTaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id} isCompleted={task.completed}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleTask(task.id)}
              />
              {task.title}
            </label>
            <button onClick={() => onDeleteTask(task.id)} disabled={tasks.every((id) => !task.completed)}><svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                >
                <path d="M5 20a2 2 0 002 2h10a2 2 0 002-2V8h2V6h-4V4a2 2 0 00-2-2H9a2 2 0 00-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z" />
                <path d="M9 10h2v8H9zm4 0h2v8h-2z" />
                </svg>
            </button>
          </TaskItem>
        ))}
      </StyledTaskList>
      <div>
        <button className='btnRemover' onClick={onDeleteCompletedTasks} disabled={tasks.every((task) => !task.completed)}>
          Remover Selecionados
        </button>
      </div>
    </div>
  );
};

export default TaskList;

const StyledTaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li<{ isCompleted: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: ${({ isCompleted }) => (isCompleted ? '#f0f0f0' : 'transparent')};
  padding:25px 8px;
  border-radius: 2px;
  border:1px solid #ddd;
  border-left: 4px solid #c7c7c7;
`;
