export default function AppointmentSlip({
  className = "",
  animate = false,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative rotate-[-3deg] rounded-sm border border-hairline/70 bg-panel p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
        {/* perforation edge */}
        <div className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-ink" />
        <div className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-ink" />

        <div className="flex items-center justify-between border-b border-dashed border-hairline pb-3">
          <span className="eyebrow">Appointment Slip</span>
          <span className="font-mono text-[11px] text-slate">#VHN-2291</span>
        </div>

        <dl className="mt-4 space-y-3 font-mono text-[13px]">
          <div className="flex justify-between gap-6">
            <dt className="text-slate">Lead</dt>
            <dd className="text-cream">R. Alvarez</dd>
          </div>
          <div className="flex justify-between gap-6">
            <dt className="text-slate">Service</dt>
            <dd className="text-cream">Roof Inspection</dd>
          </div>
          <div className="flex justify-between gap-6">
            <dt className="text-slate">Source</dt>
            <dd className="text-cream">FB Lead Ad</dd>
          </div>
          <div className="flex justify-between gap-6">
            <dt className="text-slate">Called</dt>
            <dd className="text-confirm">42 sec after submit</dd>
          </div>
          <div className="flex justify-between gap-6 border-t border-dashed border-hairline pt-3">
            <dt className="text-slate">Slot</dt>
            <dd className="text-cream">Thu · 2:30 PM</dd>
          </div>
        </dl>

        <div
          className={`pointer-events-none absolute -right-4 -top-4 flex h-20 w-20 rotate-[-8deg] items-center justify-center rounded-full border-[3px] border-gold/80 font-mono text-[11px] font-semibold uppercase tracking-widest text-gold ${
            animate ? "animate-stamp-in" : ""
          }`}
          style={{
            boxShadow: "0 0 0 3px rgba(200,155,60,0.15)",
          }}
        >
          Booked
        </div>
      </div>
    </div>
  );
}
