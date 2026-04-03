# 🖥️ Mini OS Terminal Simulator

## 📌 Overview
The **Mini OS Terminal Simulator** is a browser-based application that mimics the behavior of a command-line interface found in modern operating systems.

It allows users to interact with a simulated file system, execute commands, and experience basic OS-level operations directly in the browser.

This project demonstrates core concepts of operating systems such as command execution, file navigation, and process handling in a simplified and interactive way.

---

## 🚀 Features

### 🔹 Command Line Interface
- Interactive terminal UI
- Real-time command execution
- Clean and minimal design

### 🔹 Supported Commands
- `help` → Displays all available commands  
- `date` → Shows current system date & time  
- `clear` → Clears terminal screen  
- `echo [text]` → Prints custom text  
- `about` → Project description  

---

### 📁 File System Simulation
- `ls` → List files and directories  
- `cd [folder]` → Navigate directories  
- `cd ..` → Go back to root  
- `pwd` → Show current directory  

---

### 📄 File Handling
- `cat [filename]` → Display file content  

---

### ⚙️ Process Simulation
- `ps` → Display running processes (simulated)  

---

### ⚡ Advanced Features
- ⬆️ Command history navigation (Arrow keys)
- ⚡ Tab-based command autocomplete
- 📂 Dynamic path display
- 🧠 Simulated file system structure

---

## 🧠 System Design

The application is built using a simulated architecture:

- A predefined **virtual file system** is stored as JavaScript objects  
- Commands are parsed and executed using a **switch-case command handler**  
- State management is handled using **React Hooks**  
- UI updates dynamically based on command execution  

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Language:** JavaScript
- **Styling:** CSS (Terminal-inspired UI)

---

## 📂 Project Structure

cmd-simulator/
│── src/
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
│── package.json
│── README.md


---

## 🎮 Sample Commands

Try these in the terminal:

- help
- ls
- cd home
- ls
- cat user.txt
- pwd
- cd ..
- ps
- date


---

## 🎥 Demo

A demo video is included showing:
- Command execution
- File navigation
- Autocomplete and history features

---

## 🎯 Hackathon Context

This project was built as part of the **"Rebuilding the OS: Core System Utilities Hackathon"**.

The goal was to simulate core operating system utilities such as:
- Command-line interface
- File system navigation
- Process monitoring

---

## 💡 Future Improvements

- Real file upload system  
- Persistent storage  
- More advanced commands (`mkdir`, `rm`)  
- Backend integration  
- Real system metrics  

---

## 👨‍💻 Author

**Bumika Jeena**

---

## 📜 License
This project is open-source and available under the MIT License.