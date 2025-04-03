import { Metadata } from "next"

import Hero from "@modules/home/components/hero"

export const metadata: Metadata = {
  title: "Srimaya Template",
  description:
    "Srimaya Online Store",
}

export default async function Home() {
  return (
    <>
      <Hero />
    </>
  )
}
