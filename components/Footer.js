export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 text-center" style={{ height: '8vh', textAlign: 'center', lineHeight: '8vh', position: 'fixed', bottom: 0, width: '100vw' }}>
      ReCeipt &copy; {new Date().getFullYear()}
    </footer>
  );
}
