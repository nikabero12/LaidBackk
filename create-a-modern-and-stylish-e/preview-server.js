const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT || 5177);
const root = process.cwd();
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

http
  .createServer((request, response) => {
    const requestPath = decodeURIComponent(request.url.split("?")[0]);
    const filePath = path.resolve(root, requestPath === "/" ? "index.html" : `.${requestPath}`);

    if (!filePath.startsWith(root)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.end("Not found");
        return;
      }

      response.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "text/plain" });
      response.end(data);
    });
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`LaidBlack preview running at http://127.0.0.1:${port}`);
  });
