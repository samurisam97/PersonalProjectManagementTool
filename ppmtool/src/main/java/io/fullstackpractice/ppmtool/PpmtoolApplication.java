package io.fullstackpractice.ppmtool;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class PpmtoolApplication {

    @RequestMapping("/")
    public String hello(){
        return "Hello!";
    }

    public static void main(String[] args) {
        SpringApplication.run(PpmtoolApplication.class, args);
    }

}
