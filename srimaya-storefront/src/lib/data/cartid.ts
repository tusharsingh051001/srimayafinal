export const getCartIdFromLocalStorage = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("cart_id"); // Or "_medusa_cart_id" if that’s what you use
};