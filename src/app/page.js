import { redirect } from "next/navigation";

/**
 * Root Route Handler
 * Automatically redirects visitors from "/" to canonical "/home" route
 * to satisfy the required multi-route architecture.
 */
export default function RootPage() {
  redirect("/home");
}
