'use server';

export async function handleSubmitAction(formData: FormData) {
  const data = Object.fromEntries(formData);
  const { name, email, phoneNumber, reason } = data;

  try {
    await fetch("https://hook.eu2.make.com/yeuaw0tkm8ihohpnm9iq5fzgdjeeubg8", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phoneNumber, reason }),
    });
  } catch (err) {
    console.error("Failed to send webhook:", err);
  }
}
