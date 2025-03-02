package com.vikas.chat.entities;


import lombok.AllArgsConstructor;
import java.time.LocalDateTime;

@AllArgsConstructor
public class Message {

    private String sender;
    private String content;
    private LocalDateTime timestamp;

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public Message(){

    }

    public Message(String sender, String content){
        this.sender = sender;
        this.content = content;
        this.timestamp = LocalDateTime.now();
    }
}
