<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms & Conditions | Line-by-Line Regex Substitution Tool</title>
  <meta name="description" content="Terms of use for the free, open-source Line-by-Line Regex Substitution Tool." />
  <meta property="og:title" content="Terms & Conditions | Line-by-Line Regex Substitution Tool" />
  <meta property="og:description" content="Simple, fair terms for a completely free and private tool." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms & Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms & Conditions</h1>
    <p class="post-meta">Effective Date: December 06, 2025</p>

    <p>By using the <strong>Line-by-Line Regex Substitution Tool</strong> (“the Tool”), you agree to these simple, fair terms.</p>

    <h2>1. Free Forever</h2>
    <p>The Tool is and will always remain <strong>completely free</strong> for personal and commercial use. No sign-up, no limits, no premium tiers.</p>

    <h2>2. No Warranty</h2>
    <p>The Tool is provided <strong>“as is”</strong> without any warranties, expressed or implied. While we strive for accuracy, we do not guarantee that results will always be correct or suitable for your purpose.</p>

    <h2>3. Use at Your Own Risk</h2>
    <p>You are solely responsible for the text you input and the transformations you perform. <em>Always verify critical outputs before using them in production or sharing sensitive data.</em></p>

    <h2>4. No Liability</h2>
    <p>In no event shall the author or contributors be liable for any damages, including data loss, corruption, or missed issues arising from use of the Tool.</p>

    <h2>5. Acceptable Use</h2>
    <p>You agree not to use the Tool for unlawful purposes or to process illegal content. Do not attempt to overload, attack, or interfere with the Tool’s availability.</p>

    <h2>6. Open Source</h2>
    <p>The Tool is open source and licensed under the MIT License. You are welcome to fork, modify, and redistribute it under the same license.</p>

    <h2>7. Changes to the Tool</h2>
    <p>We may update or modify the Tool at any time without notice. Features may be added, removed, or changed to improve functionality and reliability.</p>

    <h2>8. Governing Law</h2>
    <p>These terms are governed by the laws of common sense and good faith.</p>

    <h2>9. Contact</h2>
    <p>Questions or feedback? Open an issue on our public GitHub repository.</p>

    <p class="italic-note"><strong>Thank you for using a tool built for testers, by people who test.</strong> We hope it saves you time and prevents mistakes — every single day.</p>
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
  .prose strong { color: #111; }
  .prose .italic-note { font-style: italic; color: #444; text-align: center; margin-top: 3.5rem; font-size: 1.1rem; }
</style>