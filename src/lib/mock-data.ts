export type Appointment = {
  id: string; doctor: string; specialty: string; date: string; time: string;
  mode: "In-person" | "Video"; status: "Upcoming" | "Completed" | "Cancelled";
};

export const appointments: Appointment[] = [
  { id: "a1", doctor: "Dr. Amelia Hart", specialty: "Cardiology", date: "Jun 5, 2026", time: "10:30 AM", mode: "Video", status: "Upcoming" },
  { id: "a2", doctor: "Dr. Rohan Mehta", specialty: "Dermatology", date: "Jun 12, 2026", time: "3:00 PM", mode: "In-person", status: "Upcoming" },
  { id: "a3", doctor: "Dr. Lucia Romero", specialty: "Endocrinology", date: "May 22, 2026", time: "9:00 AM", mode: "Video", status: "Completed" },
  { id: "a4", doctor: "Dr. Kenji Tanaka", specialty: "Orthopedics", date: "May 14, 2026", time: "1:15 PM", mode: "In-person", status: "Completed" },
];

export type Doctor = {
  id: string; name: string; specialty: string; rating: number; reviews: number;
  city: string; nextAvailable: string; bio: string;
};

export const doctors: Doctor[] = [
  { id: "d1", name: "Dr. Amelia Hart", specialty: "Cardiology", rating: 4.9, reviews: 312, city: "Boston, MA", nextAvailable: "Tomorrow, 9:30 AM", bio: "Preventive cardiology and heart failure management with 15 years of clinical experience." },
  { id: "d2", name: "Dr. Rohan Mehta", specialty: "Dermatology", rating: 4.8, reviews: 211, city: "Austin, TX", nextAvailable: "Thu, 2:00 PM", bio: "Medical and surgical dermatology, focus on skin cancer screening and acne." },
  { id: "d3", name: "Dr. Lucia Romero", specialty: "Endocrinology", rating: 4.9, reviews: 178, city: "Miami, FL", nextAvailable: "Mon, 11:00 AM", bio: "Diabetes, thyroid disorders, and metabolic health." },
  { id: "d4", name: "Dr. Kenji Tanaka", specialty: "Orthopedics", rating: 4.7, reviews: 264, city: "Seattle, WA", nextAvailable: "Fri, 8:15 AM", bio: "Sports medicine and joint preservation surgery." },
  { id: "d5", name: "Dr. Priya Shah", specialty: "Pediatrics", rating: 5.0, reviews: 402, city: "Chicago, IL", nextAvailable: "Today, 4:45 PM", bio: "General pediatrics, developmental milestones, and adolescent care." },
  { id: "d6", name: "Dr. Marcus Bell", specialty: "Neurology", rating: 4.8, reviews: 154, city: "Denver, CO", nextAvailable: "Wed, 10:00 AM", bio: "Headache, epilepsy, and cognitive disorders." },
];

export type Prescription = {
  id: string; name: string; dosage: string; frequency: string; refillsLeft: number; prescriber: string;
};

export const prescriptions: Prescription[] = [
  { id: "p1", name: "Atorvastatin", dosage: "20 mg", frequency: "1 tablet nightly", refillsLeft: 3, prescriber: "Dr. Amelia Hart" },
  { id: "p2", name: "Metformin", dosage: "500 mg", frequency: "1 tablet with meals (2x daily)", refillsLeft: 5, prescriber: "Dr. Lucia Romero" },
  { id: "p3", name: "Vitamin D3", dosage: "2000 IU", frequency: "1 capsule daily", refillsLeft: 11, prescriber: "Dr. Priya Shah" },
];

export type Record = {
  id: string; type: string; date: string; provider: string; summary: string;
};

export const records: Record[] = [
  { id: "r1", type: "Lab Result", date: "May 28, 2026", provider: "Quest Diagnostics", summary: "Comprehensive metabolic panel — within normal range." },
  { id: "r2", type: "Imaging", date: "Apr 14, 2026", provider: "Boston Radiology", summary: "Chest X-ray — no acute cardiopulmonary findings." },
  { id: "r3", type: "Visit Note", date: "Apr 02, 2026", provider: "Dr. Amelia Hart", summary: "Annual cardiovascular check-up. Continue current regimen." },
  { id: "r4", type: "Vaccination", date: "Mar 10, 2026", provider: "Meridian Clinic", summary: "Seasonal influenza vaccine administered." },
];

export type Message = {
  id: string; from: string; subject: string; preview: string; time: string; unread: boolean;
};

export const messages: Message[] = [
  { id: "m1", from: "Dr. Amelia Hart", subject: "Your lab results", preview: "Everything came back great. Let's keep your current plan...", time: "2h ago", unread: true },
  { id: "m2", from: "Pharmacy", subject: "Refill ready for pickup", preview: "Your Atorvastatin refill is ready at the Cambridge location.", time: "1d ago", unread: true },
  { id: "m3", from: "Dr. Priya Shah", subject: "Follow-up scheduled", preview: "Confirming next month's check-up appointment.", time: "3d ago", unread: false },
  { id: "m4", from: "Billing", subject: "Statement available", preview: "Your May statement is now available in your account.", time: "1w ago", unread: false },
];

export const vitals = [
  { label: "Heart rate", value: "72", unit: "bpm", trend: "Stable" },
  { label: "Blood pressure", value: "118/76", unit: "mmHg", trend: "Optimal" },
  { label: "Steps today", value: "8,420", unit: "steps", trend: "+12%" },
  { label: "Sleep", value: "7h 24m", unit: "last night", trend: "Good" },
];

export const heartRateSeries = [68, 71, 70, 74, 78, 76, 73, 72, 70, 71, 75, 79, 82, 80, 77, 74, 72, 70, 69, 71, 72];
