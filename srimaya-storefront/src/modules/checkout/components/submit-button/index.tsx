// "use client"

// import { Button } from "@medusajs/ui"
// import React from "react"
// import { useFormStatus } from "react-dom"

// export function SubmitButton({
//   children,
//   variant = "primary",
//   className,
//   "data-testid": dataTestId,
// }: {
//   children: React.ReactNode
//   variant?: "primary" | "secondary" | "transparent" | "danger" | null
//   className?: string
//   "data-testid"?: string
// }) {
//   const { pending } = useFormStatus()

//   return (
//     <Button
//       size="large"
//       className={className}
//       type="submit"
//       isLoading={pending}
//       variant={variant || "primary"}
//       data-testid={dataTestId}
//     >
//       {children}
//     </Button>
//   )
// }


"use client";

import React from "react";
import { Button } from "@medusajs/ui";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "transparent" | "danger" | null;
  className?: string;
  "data-testid"?: string;
};

export function SubmitButton({
  children,
  variant = null,
  className = "",
  "data-testid": dataTestId,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="large"
      style={{ backgroundColor: "#052715", borderColor: "green" }}
      className={className}
      isLoading={pending}
      variant={variant}
      data-testid={dataTestId}
    >
      {children}
    </Button>
  );
}
