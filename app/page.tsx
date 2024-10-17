import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";

export default function IndexPage() {
  return <LandingPage />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
