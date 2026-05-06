import ProjectCard from "@/components/ui/ProjectCard";

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex items-center gap-4">
        <div className="bg-mustard h-0.5 w-12" />
        <span className="text-green font-sans text-xs tracking-widest uppercase">PORTFOLIO</span>
      </div>

      <h1 className="text-green mt-8 font-serif text-6xl leading-none md:text-8xl">Work.</h1>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <ProjectCard
          status={{ label: "LIVE", variant: "darkFilled" }}
          title="WeSwapCards."
          body="A production platform where collectors of WeWard cards find swap partners and trade. Built and operated solo. Live since February 2025."
          stack={["React", "Node", "PostgreSQL", "Clerk"]}
          href="/work/weswapcards"
          screenshot={{ src: "/screenshots/wsc-home.jpg", alt: "WeSwapCards homepage" }}
        />
        <ProjectCard
          status={{ label: "IN PROGRESS", variant: "filled" }}
          title="WeSwapCards Mobile."
          body="A React Native rewrite in TypeScript with stricter type checking and a state-machine auth model. Same backend, new client."
          stack={["React Native", "TypeScript", "Expo Router"]}
          href="/work/weswapcards-mobile"
          screenshot={{
            src: "/screenshots/native-find.png",
            alt: "WeSwapCards Mobile find screen",
            orientation: "portrait",
          }}
        />
        <ProjectCard
          status={{ label: "PORTFOLIO", variant: "outlined" }}
          title="Actiively."
          body="A full-stack web app built as a portfolio piece during my development training. Frontend, backend, database, and JWT auth."
          stack={["React", "Node", "PostgreSQL", "JWT"]}
          footerLabel="Case study coming soon"
          href="/work/actiively"
          screenshot={{ src: "/screenshots/actiively-results.jpg", alt: "Actiively results page" }}
        />
      </div>
    </main>
  );
}
