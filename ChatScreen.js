import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const Message = ({ sender, text }) => {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.sender}>{sender}</Text>
      <Text style={styles.messageText}>{text}</Text>
    </View>
  );
};

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Type a message"
        style={styles.input}
      />
      <Button title="Send" onPress={() => { onSend(text); setText(''); }} />
    </View>
  );
};

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (text) => {
    setMessages(prevMessages => [...prevMessages, { sender: 'Me', text }]);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
      </ScrollView>
      <MessageInput onSend={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 16,
  },
  messageContainer: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    padding: 16,
  },
  sender: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 16,
    paddingLeft: 8,
    paddingRight: 8,
  },
});

export default ChatScreen;