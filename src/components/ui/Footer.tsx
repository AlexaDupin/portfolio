export default function Footer() {
  return (
    <footer className="w-full border-t border-green/10 bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-sans text-sm text-green">
            Brooklyn, NY · Available for hybrid roles
          </p>
          <p className="font-sans text-xs text-green/50 mt-1">
            © 2026 Alexa Dupin
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/alexa-dupin"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-green hover:text-mustard transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/AlexaDupin"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-green hover:text-mustard transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
