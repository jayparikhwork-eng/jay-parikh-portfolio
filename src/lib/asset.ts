/**
 * Resolve a path in /public against the deploy base URL so images load whether
 * the site is served from a domain root or a GitHub Pages project subpath.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL; // "/" or "./" depending on config
  return `${base}${path}`.replace(/([^:]\/)\/+/g, "$1");
}
