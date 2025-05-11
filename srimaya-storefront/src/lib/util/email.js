import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

export async function sendOrderNotification(order) {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   })
const transporter = nodemailer.createTransport({
    host: "smtp.secureserver.net",
    port: 465,
    secure: true,
    auth: {
      user: "contact@srimaya.in", // your full email
      pass: "Srimaya@0350!", // your password or app password
    },
  })
  

  const orderId = order.id
  const customerEmail = order.email
  const total = (order.total / 100).toFixed(2)
  const currency = order.currency_code?.toUpperCase()

  const mailOptions = {
    from: `"Srimaya" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `🛒 New Order Received}`,
    text: `A new order was placed!\n\nThank you for shopping at Srimaya\n\n`, ////Order ID: ${orderId}\nCustomer: ${customerEmail}\nTotal: ${total} ${currency}
   }

  await transporter.sendMail(mailOptions)
    console.log(`✅ Email sent for Order`)
//   console.log(`✅ Email sent for Order ${orderId}`)
}
