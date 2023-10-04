"use client";

import { ThemeProvider } from "next-themes";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Providers(props: Props) {
  return <ThemeProvider>{props.children}</ThemeProvider>;
}
