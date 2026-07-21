export default function Logo({ className = "" }: { className?: string }) {
  // No logo.png was supplied with the brief — this wordmark stands in for it.
  // Drop a real file at /public/logo.png and swap the markup below for
  // an <img src="/logo.png" .../> whenever the asset is ready.
  return (
    <img src="/logo.png" alt="VHN Media" className="h-8 w-auto" />
  );
}
