export default function Footer() {
  return (
    <footer className="border-green/10 bg-cream w-full border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-green font-sans text-sm">Brooklyn, NY · Available for hybrid roles</p>
          <p className="text-green/50 mt-1 font-sans text-xs">© 2026 Alexa Dupin</p>
          <p className="text-green/30 mt-1 font-sans text-xs">
            Built with Next.js, Tailwind, and Claude Code.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/alexa-dupin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green hover:text-mustard font-sans text-sm transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/AlexaDupin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green hover:text-mustard font-sans text-sm transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
