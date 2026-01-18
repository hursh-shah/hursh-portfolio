export interface Env {
  ASSETS: Fetcher;
}

function isProbablyAssetPath(pathname: string): boolean {
  // crude but effective: if the last segment has a dot, treat it like a file request
  const last = pathname.split("/").pop() || "";
  return last.includes(".");
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // First try serving the requested path from static assets
    let res = await env.ASSETS.fetch(request);

    // If it's a 404 and it's NOT an obvious asset file, fall back to SPA index.html
    // This fixes React Router / client-side routing refreshes.
    if (res.status === 404 && !isProbablyAssetPath(url.pathname)) {
      const indexUrl = new URL(request.url);
      indexUrl.pathname = "/index.html";
      res = await env.ASSETS.fetch(new Request(indexUrl.toString(), request));
    }

    return res;
  },
};
