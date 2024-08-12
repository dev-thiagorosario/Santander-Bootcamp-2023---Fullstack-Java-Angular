package com.example.todolist;

import com.example.todolist.controller.AuthController;
import com.example.todolist.model.User;
import com.example.todolist.service.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@SpringBootTest
public class AuthControllerTest {

    @Mock
    private UserService userService;

    @InjectMocks
    private AuthController authController;

    @Test
    public void registerTest() {
        User user = new User();
        user.setUsername("test");
        user.setPassword("password");

        when(userService.register(user)).thenReturn(user);
        authController.register(user);
        verify(userService).register(user);
    }

    @Test
    public void loginTest() {
        User user = new User();
        user.setUsername("test");
        user.setPassword("password");

        when(userService.login(user)).thenReturn("Login successful");
        authController.login(user);
        verify(userService).login(user);
    }
}
