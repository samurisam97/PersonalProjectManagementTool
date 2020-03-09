package com.example.demo.SimpleWebApp;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SimpleWebApp {

    @RequestMapping("/")
    public String index() {
        return "Hey!";
    }
}
