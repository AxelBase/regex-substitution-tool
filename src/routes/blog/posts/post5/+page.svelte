<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>When NOT to Use the Global (g) Flag | Regex Tool Blog</title>
  <meta name="description" content="Discover real-world scenarios where omitting the global flag produces safer, more predictable results in line-by-line substitution." />
  <meta property="og:title" content="When NOT to Use the Global (g) Flag" />
  <meta property="og:description" content="Sometimes removing /g is the smartest choice — here’s exactly when and why." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>When NOT to Use the Global (g) Flag</p>
  </div>

  <article class="prose">
    <h1>When NOT to Use the Global (g) Flag</h1>
    <p class="post-meta">Published: December 06, 2025</p>

    <p class="lead">The global flag is often added by habit, but in many testing scenarios, leaving it off produces cleaner, safer, and more intentional results — especially with line-by-line processing.</p>

    <h2>First Match Per Line Is Often Enough</h2>
    <p>In log files, timestamps usually appear only once per line, session IDs appear at the start, and error codes are unique. Replacing only the first occurrence per line is not a limitation — it’s a feature that prevents over-matching and accidental data loss.</p>

    <h2>Protecting Structured Data</h2>
    <p>When cleaning JSON Lines or CSV data, you often want to replace a specific field once per record. Using global replacement risks touching quoted values elsewhere in the same line. Omitting the g flag ensures only the intended match is transformed.</p>

    <h2>Avoiding Greedy Surprises</h2>
    <p>Patterns using dot-star or plus can become unexpectedly greedy across a line. Without the global flag, only the first — and usually the correct — section is replaced, giving you precise control.</p>

    <h2>Real Tester Example: Masking Passwords</h2>
    <p>When redacting credentials from test logs, you want exactly one replacement per line where the password appears. A global pattern might replace harmless strings that happen to match the same pattern later in the line. No global flag equals no risk.</p>

    <h2>Intentional Design Wins</h2>
    <p>Experienced testers treat the absence of the global flag as a deliberate choice, not a mistake. It signals: replace only what I meant to replace, nothing more. This mindset produces more maintainable and reviewable transformations.</p>

    <p>Next time you reach for the g flag out of habit — pause and ask whether first-match-per-line is actually the safer default. In most testing workflows, it is.</p>

    <p class="italic-note">Next: How this tool processes massive inputs instantly — all in your browser.</p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 2rem 1rem; margin: 0 auto; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: #666; }
  .breadcrumbs a { color: #0066cc; text-decoration: none; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose { line-height: 1.8; }
  .prose .post-meta { color: #666; font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: #222; }
  .prose h2 { margin-top: 2.5rem; font-size: 1.6rem; color: #0066cc; border-bottom: 1px solid #eee; padding-bottom: 0.5rem; }
  .prose p { margin-bottom: 1.3rem; color: #333; }
  .prose .lead { font-size: 1.2rem; font-weight: 500; }
  .prose .italic-note { font-style: italic; color: #666; text-align: center; margin-top: 3rem; }
</style>