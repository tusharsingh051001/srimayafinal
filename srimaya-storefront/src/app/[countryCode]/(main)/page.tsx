import { Metadata } from "next"

import Hero from "@modules/home/components/hero"

export const metadata: Metadata = {
  title: "Srimaya",
  description:
    "Srimaya Online Store",
  icons: {
      icon: '/favicon.ico'
    },
}

export default async function Home() {
  return (
    <>
      <Hero />
    </>
  )
}
