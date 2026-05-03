"use client";

import { useState, type ReactNode } from "react";
import SplashScreen from "./SplashScreen";

export default function SplashGate({ children }: { children: ReactNode }) {
  const [done, setDone] = useState(false);

  return (
    <>
      {!done && <SplashScreen duration={3000} onFinish={() => setDone(true)} />}
      {children}
    </>
  );
}
