import Navbar from "@/components/navbar";

export default function ProfileLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
