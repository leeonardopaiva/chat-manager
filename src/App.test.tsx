import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('should add a task and display it in the list', () => {
  // Renderiza o componente principal
  render(<App />);

  // Verifica se o input de adicionar tarefa está presente
  const input = screen.getByPlaceholderText('Adicionar Tarefa');
  expect(input).toBeInTheDocument();

  // Digita uma nova tarefa no input
  fireEvent.change(input, { target: { value: 'Nova Tarefa' } });

  // Clica no botão "Add"
  const addButton = screen.getByText('Adicionar');
  fireEvent.click(addButton);

  // Verifica se a nova tarefa aparece na lista
  expect(screen.getByText('Nova Tarefa')).toBeInTheDocument();
});