"use client";

import { JobProvider } from "./JobContext";

export default function Providers({ children }) {
  return <JobProvider>{children}</JobProvider>;
}
