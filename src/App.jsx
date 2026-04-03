import { useState, useEffect, useRef } from "react";

// 🔥 Fake File System
const fileSystem = {
  "/": ["home", "about.txt", "projects"],
  "/home": ["user.txt", "notes.txt"],
  "/projects": ["os-sim.js", "readme.md"],
};

// 🔥 File Contents
const fileContents = {
  "about.txt": "This is a mini OS terminal simulator built in React.",
  "user.txt": "Name: Bhumika\nRole: Student",
  "notes.txt": "Hackathon submission project.",
  "os-sim.js": "// core logic of OS simulator",
  "readme.md": "# Mini OS Simulator",
};

function App() {
  const [history, setHistory] = useState([
    "Mini OS Terminal v1.0",
    "Type 'help' to begin",
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentPath, setCurrentPath] = useState("/");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleCommand = (cmd) => {
    let output = "";
    const args = cmd.split(" ");
    const command = args[0];

    switch (command) {
      case "help":
        output = `
Commands:
help, date, clear, echo, about
ls, cd, pwd, cat, ps
        `;
        break;

      case "date":
        output = new Date().toString();
        break;

      case "clear":
        setHistory([]);
        return;

      case "echo":
        output = args.slice(1).join(" ");
        break;

      case "about":
        output = "Browser-based OS terminal simulator.";
        break;

      // 📁 FILE SYSTEM COMMANDS
      case "ls":
        output = fileSystem[currentPath]?.join("  ") || "No files";
        break;

      case "pwd":
        output = currentPath;
        break;

      case "cd": {
        const newPath =
          args[1] === ".."
            ? "/"
            : currentPath === "/"
              ? `/${args[1]}`
              : `${currentPath}/${args[1]}`;

        if (fileSystem[newPath]) {
          setCurrentPath(newPath);
          return;
        } else {
          output = "Directory not found";
        }
        break;
      }

      // 📄 FILE READ
      case "cat": {
        const fileName = args[1];
        if (fileContents[fileName]) {
          output = fileContents[fileName];
        } else {
          output = "File not found";
        }
        break;
      }

      // ⚙️ PROCESS LIST (FAKE)
      case "ps":
        output = `
PID   NAME
1     chrome
2     vscode
3     terminal
        `;
        break;

      default:
        output = `Command not found: ${command}`;
    }

    setHistory((prev) => [...prev, `> ${cmd}`, output]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    handleCommand(input.trim());

    setCmdHistory((prev) => [...prev, input]);
    setHistoryIndex(-1);
    setInput("");
  };

  // 🔥 KEYBOARD HANDLING (History + Autocomplete)
  const handleKeyDown = (e) => {
    // ⬆️ Previous command
    if (e.key === "ArrowUp") {
      if (cmdHistory.length === 0) return;

      const newIndex =
        historyIndex === -1
          ? cmdHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(newIndex);
      setInput(cmdHistory[newIndex]);
    }

    // ⬇️ Next command
    if (e.key === "ArrowDown") {
      if (historyIndex === -1) return;

      const newIndex =
        historyIndex === cmdHistory.length - 1 ? -1 : historyIndex + 1;

      setHistoryIndex(newIndex);
      setInput(newIndex === -1 ? "" : cmdHistory[newIndex]);
    }

    // ⚡ TAB AUTOCOMPLETE
    if (e.key === "Tab") {
      e.preventDefault();

      const commands = [
        "help",
        "date",
        "clear",
        "echo",
        "about",
        "ls",
        "cd",
        "pwd",
        "cat",
        "ps",
      ];

      const match = commands.find((cmd) => cmd.startsWith(input));
      if (match) {
        setInput(match);
      }
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 🔥 HEADER */}
      <div
        style={{
          textAlign: "center",
          padding: "10px",
          fontSize: "20px",
          fontWeight: "bold",
          borderBottom: "1px solid #00ff9f",
        }}
      >
        🖥️ Mini OS Terminal Simulator
      </div>

      {/* 🔥 TERMINAL */}
      <div
        style={{
          padding: "20px",
          flex: 1,
          overflowY: "auto",
        }}
        onClick={() => inputRef.current.focus()}
      >
        {history.map((line, index) => (
          <div key={index} style={{ whiteSpace: "pre-wrap" }}>
            {line}
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <span>{currentPath} &gt; </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#00ff9f",
              fontFamily: "monospace",
              width: "80%",
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
