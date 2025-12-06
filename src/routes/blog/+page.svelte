<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Why Line-by-Line Regex Substitution Matters',
      description: 'Discover why standard text editors fall short and how true per-line processing prevents dangerous cross-line matches.'
    },
    {
      href: '/blog/posts/post2',
      title: 'Understanding JavaScript RegExp Behavior Per Line',
      description: 'Deep dive into how String.replace() works when applied line-by-line vs globally — and why it’s safer for logs and data.'
    },
    {
      href: '/blog/posts/post3',
      title: 'Mastering Start (^) and End ($) Anchors in Multi-line Text',
      description: 'Learn why ^ and $ behave differently when each line is processed independently — a must-know for accurate replacements.'
    },
    {
      href: '/blog/posts/post4',
      title: 'Capturing Groups and Backreferences Across Lines',
      description: 'How $1, $2, and named groups work perfectly on every line without interference from previous matches.'
    },
    {
      href: '/blog/posts/post5',
      title: 'When NOT to Use the Global (g) Flag',
      description: 'Real-world examples where omitting /g is actually safer and more predictable in line-by-line workflows.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Performance: Processing 100,000 Lines in Under 300ms',
      description: 'How pure client-side JavaScript achieves near-instant results even with massive inputs — no server needed.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Best Practices for Testers Using This Tool Daily',
      description: 'Pro tips: keyboard shortcuts, common patterns for logs, CSV cleaning, JSON formatting, and more.'
    }
  ];
</script>

<svelte:head>
  <title>Blog | Regex Substitution Tool Insights</title>
  <meta name="description" content="Technical deep dives, best practices, and advanced usage of the Line-by-Line Regex Substitution Tool." />
</svelte:head>

<div class="container py-5 blog-index">
  <header class="text-center mb-5">
    <h1>Regex Substitution Tool — Technical Blog</h1>
    <p class="lead text-muted">
      In-depth articles on regex behavior, performance, edge cases, and real-world testing workflows.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card h-100 text-decoration-none border-0 shadow-sm">
        <div class="card-body d-flex flex-column">
          <h2 class="h5 fw-bold text-primary mb-3">{post.title}</h2>
          <p class="text-muted flex-grow-1 small">{post.description}</p>
          <span class="read-more mt-3 text-primary fw-semibold">Read Article →</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    min-height: 80vh;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
  }

  .post-card {
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .post-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
  }

  .read-more {
    opacity: 0.8;
  }

  .post-card:hover .read-more {
    opacity: 1;
    transform: translateX(4px);
    transition: all 0.2s ease;
  }
</style>