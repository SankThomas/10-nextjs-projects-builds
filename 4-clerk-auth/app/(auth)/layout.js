export default function AuthLayout({ children }) {
  return (
    <div className="flex h-screen items-center justify-center px-4 py-10 lg:py-0">
      {children}
    </div>
  );
}
