
export default function TheMes() {
  return (
    <section
      id="mes"
      className="min-h-screen overflow-hidden bg-[#0b0b0b] px-6 py-24 text-white md:px-10 md:py-28 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section label */}
        <div className="mb-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
            Our Flagship Initiative
          </p>
        </div>

        {/* Hero: headline on the left, description on the right */}
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-14 lg:gap-20">
          {/* Headline */}
          <div className="min-w-0">
            <h2 className="text-[clamp(3.5rem,8.2vw,8.5rem)] font-black uppercase leading-[0.79] tracking-[-0.075em]">
              <span className="block">MES</span>
              <span className="block">THE</span>
              <span className="block">EXPERIENCE</span>
              <span className="mt-1 block text-white/30">THAT</span>
              <span className="block text-white/30">
                DEFINES US.
              </span>
            </h2>
          </div>

          {/* Supporting content */}
          <div className="min-w-0 pt-2 md:pt-16 lg:pt-20">
            <p className="mb-8 max-w-lg text-2xl font-medium leading-snug tracking-tight text-white/90 md:text-3xl lg:text-4xl">
  A platform for entrepreneurial{" "}
  <span className="font-serif italic text-white/65">
    thinking, collaboration, and ideas that move forward.
  </span>
</p>

            <div className="max-w-xl space-y-5 text-sm leading-7 text-white/50 md:text-base md:leading-8">
              <p>
                The Manipal Entrepreneurship Summit (MES) is the flagship
                event of MAHE, organised by E-Cell, MIT Manipal. It aims to
                foster an entrepreneurial mindset on campus, empowering
                students to look beyond conventional career paths and
                become job creators.
              </p>

              <p>
                Bringing together students, accomplished alumni, and
                industry leaders, MES creates opportunities for meaningful
                dialogue, networking, and the exchange of ideas. It
                connects emerging ambition with the experience and
                perspectives needed to move ideas forward.
              </p>

              <p>
                At its core, MES reflects a larger vision: building a
                culture where innovation is encouraged, initiative is
                valued, and students are equipped to shape what comes next.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-20 border-t border-white/15 pt-6 md:mt-28">
          <div className="flex flex-col gap-3 text-[10px] uppercase tracking-[0.25em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <span>Manipal Entrepreneurship Summit</span>
            <span>E-Cell, MIT Manipal · MAHE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

