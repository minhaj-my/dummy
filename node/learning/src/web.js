// ==================== main.js ====================
// Single file full web app using Bun

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Bun App</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

        :root {
            --bg: #0f0f12;
            --card: #1a1a1f;
            --accent: #00ff9d;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Inter', sans-serif;
            background: var(--bg);
            color: #e0e0e0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .container {
            background: var(--card);
            padding: 2.5rem;
            border-radius: 16px;
            width: 100%;
            max-width: 460px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }

        h1 {
            text-align: center;
            margin-bottom: 2rem;
            color: var(--accent);
            font-size: 2.2rem;
        }

        input {
            width: 100%;
            padding: 14px 16px;
            background: #25252b;
            border: none;
            border-radius: 10px;
            color: white;
            font-size: 1.1rem;
            margin-bottom: 1rem;
        }

        button {
            width: 100%;
            padding: 14px;
            background: var(--accent);
            color: black;
            border: none;
            border-radius: 10px;
            font-weight: 600;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.2s;
        }

        button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0, 255, 157, 0.4);
        }

        #result {
            margin-top: 1.5rem;
            padding: 1.2rem;
            background: #25252b;
            border-radius: 10px;
            min-height: 80px;
            white-space: pre-wrap;
            font-family: monospace;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Bun Single File App</h1>
        
        <input type="text" id="input" placeholder="Type anything...">
        <button onclick="process()">Process</button>
        
        <div id="result"></div>
    </div>

    <script>
        function process() {
            const input = document.getElementById('input').value.trim();
            const result = document.getElementById('result');

            if (!input) {
                result.innerHTML = "⚠️ Please type something!";
                return;
            }

            result.innerHTML = \`
                <strong>Input:</strong> \${input}<br><br>
                <strong>Length:</strong> \${input.length}<br>
                <strong>Upper:</strong> \${input.toUpperCase()}<br>
                <strong>Lower:</strong> \${input.toLowerCase()}<br>
                <strong>Reversed:</strong> \${input.split('').reverse().join('')}
            \`;
        }

        // Allow pressing Enter
        document.getElementById('input').addEventListener('keypress', e => {
            if (e.key === 'Enter') process();
        });
    </script>
</body>
</html>
`;

console.log("🌐 Starting Bun web server...");

Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return new Response(html, {
        headers: { "Content-Type": "text/html" },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log("✅ Server running at → http://localhost:3000");
console.log("Press Ctrl+C to stop");
