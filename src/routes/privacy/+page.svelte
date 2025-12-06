<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Line-by-Line Regex Substitution Tool</title>
  <meta name="description" content="This tool runs 100% in your browser. We do not collect, store, or transmit any of your text — ever." />
  <meta property="og:title" content="Privacy Policy | Line-by-Line Regex Substitution Tool" />
  <meta property="og:description" content="Your data never leaves your device. Full privacy by design." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: December 06, 2025</p>

    <p><strong>We collect nothing. We store nothing. Your text never leaves your browser.</strong></p>

    <p>This Line-by-Line Regex Substitution Tool is a completely <strong>client-side web application</strong>. Every character you paste, every pattern you write, and every result you generate is processed <em>exclusively on your device</em> using JavaScript. No data — not even anonymized usage statistics — is ever sent to any server, including ours.</p>

    <h2>What We Do Not Collect</h2>
    <p>We intentionally avoid collecting any form of data, including:</p>
    <ul>
      <li><strong>Input text</strong> — your logs, test outputs, or sensitive data</li>
      <li><strong>Regex patterns or replacement strings</strong></li>
      <li><strong>IP addresses, browser fingerprints, or device information</strong></li>
      <li><strong>Cookies, localStorage persistence, or session tracking</strong></li>
      <li><strong>Analytics, error reporting, or telemetry of any kind</strong></li>
    </ul>

    <h2>How Your Data Stays Private</h2>
    <p>All regex substitution happens instantly in your browser’s memory. When you close or refresh the page, everything is gone. There is no backend, no database, no logging, and no third-party services that could access your content.</p>

    <h2>No Third-Party Scripts</h2>
    <p>This site uses only Bootstrap from a trusted CDN for styling and layout. That CDN delivers static files only — it does not track visitors or execute tracking code. No analytics providers, no advertising networks, and no social media widgets are loaded.</p>

    <h2>Security Is Built In</h2>
    <p>Because your data never travels over the internet, it cannot be intercepted, logged, or exposed in a breach. This makes the tool ideal for working with production logs, PII-containing test data, security reports, or any confidential text.</p>

    <h2>Children’s Privacy</h2>
    <p>The tool is safe for all ages and complies with COPPA and GDPR-K by default through its zero-collection architecture.</p>

    <h2>Changes to This Policy</h2>
    <p>Any future changes will appear on this page. Given our commitment to zero data collection, material changes that affect privacy are extremely unlikely.</p>

    <h2>Contact</h2>
    <p>Questions? Open an issue on our GitHub repository — we’re happy to help.</p>

    <p class="italic-note"><strong>Your privacy is not a feature — it’s the foundation.</strong> Thank you for trusting this tool with your most sensitive text.</p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 3rem 1rem; margin: 0 auto; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 2rem; font-size: 0.95rem; color: #555; }
  .breadcrumbs a { color: #0066cc; text-decoration: none; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose { line-height: 1.8; }
  .prose .post-meta { color: #666; font-size: 0.9rem; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid #eee; }
  .prose h1 { font-size: 2.6rem; margin-bottom: 0.5rem; color: #222; }
  .prose h2 { margin-top: 2.8rem; font-size: 1.7rem; color: #0066cc; border-bottom: 1px solid #eee; padding-bottom: 0.5rem; }
  .prose p { margin-bottom: 1.4rem; color: #333; }
  .prose ul { padding-left: 1.5rem; margin: 1.2rem 0; }
  .prose ul li { margin-bottom: 0.6rem; }
  .prose strong { color: #111; }
  .prose .italic-note { font-style: italic; color: #444; text-align: center; margin-top: 3.5rem; font-size: 1.1rem; }
</style>