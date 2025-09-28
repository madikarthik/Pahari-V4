import { CONTACT } from '../config/contact';

export function waLink(productName: string) {
  const text = `Hi! I'm interested in "${productName}" from Pahari Goodness. Please share details on price, availability, and shipping.`;
  return `https://wa.me/${CONTACT.whatsappPhone}?text=${encodeURIComponent(text)}`;
}

export function mailLink(productName: string) {
  const subject = `Enquiry: ${productName} — Pahari Goodness`;
  const body = `Hello,\n\nI'm interested in "${productName}". Could you please share details on price, pack size, and delivery timeline?\n\nThanks,\n`;
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
