package com.example.todolist;

import com.example.todolist.controller.TaskController;
import com.example.todolist.model.Task;
import com.example.todolist.service.TaskService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Collections;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@SpringBootTest
public class TaskControllerTest {

    @Mock
    private TaskService taskService;

    @InjectMocks
    private TaskController taskController;

    @Test
    public void getAllTasksTest() {
        when(taskService.getAllTasks()).thenReturn(Collections.emptyList());
        taskController.getAllTasks();
        verify(taskService).getAllTasks();
    }

    @Test
    public void getTaskByIdTest() {
        Task task = new Task();
        task.setId(1L);

        when(taskService.getTaskById(1L)).thenReturn(task);
        taskController.getTaskById(1L);
        verify(taskService).getTaskById(1L);
    }

    @Test
    public void createTaskTest() {
        Task task = new Task();
        task.setDescription("Test Task");

        when(taskService.createTask(task)).thenReturn(task);
        taskController.createTask(task);
        verify(taskService).createTask(task);
    }

    @Test
    public void updateTaskTest() {
        Task task = new Task();
        task.setId(1L);
        task.setDescription("Updated Task");

        when(taskService.updateTask(1L, task)).thenReturn(task);
        taskController.updateTask(1L, task);
        verify(taskService).updateTask(1L, task);
    }

    @Test
    public void deleteTaskTest() {
        taskController.deleteTask(1L);
        verify(taskService).deleteTask(1L);
    }
}
