package com.vikas.chat;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Objects;

@SpringBootApplication
public class ChatAppBackendApplication {
	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.load();
		System.setProperty("DATASOURCE_URL", Objects.requireNonNull(dotenv.get("DATASOURCE_URL")));
		SpringApplication.run(ChatAppBackendApplication.class, args);
	}
}
