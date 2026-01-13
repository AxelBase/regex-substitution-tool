<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import '../app.css'; // Salmon/Bubbly theme
  import 'bootstrap/dist/css/bootstrap.min.css';

  const currentYear = new Date().getFullYear();
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  // Click Outside Action
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<div class="d-flex flex-column min-vh-100">

  <header class="sticky-top">
    <nav class="navbar-custom">
      <div class="container d-flex align-items-center justify-content-between">

        <div class="d-flex align-items-center gap-3">
          <a href="{base}/" aria-label="Home">
            <img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" class="navbar-brand-logo" />
          </a>

          <a class="navbar-brand-text me-3" href="{base}/">AxelBase</a>

          <div class="position-relative bmac-container" use:clickOutside on:click_outside={closeDropdown}>
            <button
              class="bmac-button d-flex align-items-center gap-2 shadow-sm"
              on:click={toggleDropdown}
              aria-label="Support options"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
              </svg>
              <span class="d-none d-sm-inline fw-semibold">Buy me a Coffee</span>
            </button>

            {#if isDropdownOpen}
              <div
                class="bmac-dropdown mt-2"
                transition:fly={{ y: -10, duration: 250 }}
              >
                <a
                  href="https://buymeacoffee.com/axelbase"
                  target="_blank"
                  rel="noopener"
                  on:click={closeDropdown}
                >
                  <span class="amount">$3</span> One Coffee
                </a>
                <a
                  href="https://buymeacoffee.com/axelbase"
                  target="_blank"
                  rel="noopener"
                  on:click={closeDropdown}
                >
                  <span class="amount">$5</span> Two Coffees
                </a>
                <a
                  href="https://buymeacoffee.com/axelbase"
                  target="_blank"
                  rel="noopener"
                  on:click={closeDropdown}
                >
                  <span class="amount">$10</span> Three Coffees
                </a>

                <a
                  href="https://buymeacoffee.com/axelbase"
                  target="_blank"
                  rel="noopener"
                  on:click={closeDropdown}
                  class="custom-amount"
                >
                  Custom Amount
                </a>

                <a
                  href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
                  target="_blank"
                  rel="noopener"
                  on:click={closeDropdown}
                  class="custom-amount bitcoin-option"
                >
                  Buy via Crypto (Bitcoin)
                </a>
              </div>
            {/if}
          </div>
        </div>

        <ul class="d-flex list-unstyled m-0 gap-2 align-items-center d-none d-lg-flex">
          <li><a class="nav-link-custom" href="{base}/">Home</a></li>
          <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
          <li><a class="nav-link-custom" href="{base}/#how-to-use">How to use</a></li>
          <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
          <li><a class="nav-link-custom" href="{base}/blog">Blog</a></li>
        </ul>

        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobileNav"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" style="filter: invert(1);"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse container" id="mobileNav">
        <ul class="navbar-nav ms-auto mt-2 d-lg-none">
          <li class="nav-item"><a class="nav-link-custom d-block" href="{base}/">Home</a></li>
          <li class="nav-item"><a class="nav-link-custom d-block" href="{base}/#about">About</a></li>
          <li class="nav-item"><a class="nav-link-custom d-block" href="{base}/#how-to-use">How to use</a></li>
          <li class="nav-item"><a class="nav-link-custom d-block" href="{base}/#faq">FAQ</a></li>
          <li class="nav-item"><a class="nav-link-custom d-block" href="{base}/blog">Blog</a></li>
        </ul>
      </div>
    </nav>
  </header>

  <main class="flex-grow-1">
    <div class="container fade-in-up">
      <slot />
    </div>
  </main>

  <footer class="footer-custom text-center">
    <div class="container">
      <p class="mb-2">© {currentYear} AxelBase Regex Substitution</p>
      <div>
        <a href="{base}/privacy" class="footer-link">Privacy Policy</a>
        <span class="text-white-50">|</span>
        <a href="{base}/terms" class="footer-link">Terms of Service</a>
      </div>
    </div>
  </footer>

</div>

<style>
  /* Keeping most of the original File 2 app.css styles */
  /* Only overriding/enhancing BMAC related parts */

  .bmac-button {
    background: white;
    color: var(--theme-primary);
    border: none;
    padding: 0.6rem 1.3rem;
    border-radius: 50px;
    font-weight: 700;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.12);
  }

  .bmac-button:hover {
    background: #fff8f5;
    color: var(--theme-primary-dark);
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(229,81,55,0.25);
  }

  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(229, 81, 55, 0.18);
    overflow: hidden;
    border: 1px solid rgba(229, 81, 55, 0.12);
    z-index: 1000;
    padding: 0.5rem 0;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: #333;
    text-decoration: none;
    font-size: 0.98rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: var(--off-white);
    color: var(--theme-primary);
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: var(--theme-primary);
    font-size: 1.1rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    color: var(--theme-primary);
    border-top: 1px solid #eee;
    justify-content: center !important;
    padding: 14px 20px;
  }

  .bitcoin-option {
    color: #f7931a !important;
    font-weight: 700 !important;
  }

  .bitcoin-option:hover {
    background: #fff5e6 !important;
    color: #e67e22 !important;
  }
</style>