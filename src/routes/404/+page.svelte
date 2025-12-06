<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>404 — Page Not Found | Line-by-Line Regex Substitution Tool</title>
  <meta name="description" content="The page you're looking for doesn't exist. Return to the regex tool or explore the blog." />
  <meta property="og:title" content="404 — Page Not Found" />
  <meta property="og:description" content="Oops! This page doesn't exist. Head back to the Line-by-Line Regex Substitution Tool." />
  <meta property="og:url" content="{base}{$page.url.pathname}" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="container post-layout text-center">
  <article class="prose">
    <h1>404 — Page Not Found</h1>
    <p class="post-meta">You’ve ventured off the beaten path</p>

    <p class="lead">The page you’re looking for has been moved, deleted, or never existed in the first place. Don’t worry — the regex tool is still here and ready to help.</p>

    <div class="my-5 p-4 bg-light rounded">
      <p class="mb-0"><strong>Requested URL:</strong><br><code class="text-muted">{$page.url.pathname}</code></p>
    </div>

    <h2>Where to go from here</h2>
    <ul class="list-unstyled">
      <li class="mb-3"><a href="{base}/" class="btn btn-primary btn-lg">Back to Regex Tool</a></li>
      <li class="mb-2"><a href="{base}/blog">Read the Technical Blog</a></li>
      <li class="mb-2"><a href="{base}/privacy">Privacy Policy</a></li>
      <li class="mb-2"><a href="{base}/terms">Terms & Conditions</a></li>
    </ul>

    <h2 class="mt-5">Still lost?</h2>
    <p>Try one of the links above, or simply refresh the page. If you followed a broken link from elsewhere, feel free to open an issue on our GitHub repository — we’ll fix it quickly.</p>

    <p class="italic-note mt-5">
      <strong>Keep calm and regex on.</strong><br>
      The tool works. The 404 is just a detour.
    </p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding: 4rem 1rem;
    margin: 0 auto;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: #6c757d;
    font-size: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 1rem;
  }

  .prose h1 {
    font-size: 4.5rem;
    font-weight: 900;
    color: #dc3545;
    margin-bottom: 0.5rem;
  }

  .lead {
    font-size: 1.25rem;
    color: #495057;
  }

  .prose a {
    color: #0d6efd;
    text-decoration: none;
  }

  .prose a:hover {
    text-decoration: underline;
  }

  .prose code {
    background: #f1f3f5;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9em;
  }

  .prose .italic-note {
    font-style: italic;
    color: #6c757d;
    font-size: 1.1rem;
    margin-top: 4rem;
  }

  .btn-lg {
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
  }
</style>