import readline from "readline";

function parse_URL(url) {
  const a = new URL(url);
  return {
    source: url,
    protocol: a.protocol.replace(":", ""),
    host: a.hostname,
    port: a.port,
    query: a.search,
    params: Object.fromEntries(a.searchParams),
    file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1],
    hash: a.hash.replace("#", ""),
    path: a.pathname,
    relative: a.pathname + a.search + a.hash,
    segments: a.pathname.replace(/^\//, "").split("/"),
  };
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter URL: ", (url) => {
  console.log(parse_URL(url));
  rl.close();
});
