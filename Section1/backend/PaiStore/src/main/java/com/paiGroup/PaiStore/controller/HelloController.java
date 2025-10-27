package com.paiGroup.PaiStore.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/helloPath")
    public String sayHelloFunc() {
        return "Hello World!";
    }
}
