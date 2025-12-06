<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import '../app.css'; // Imports the new Salmon/Bubbly theme
  import 'bootstrap/dist/css/bootstrap.min.css';

  const paypalUsername = 'AxelLab427'; // UPDATE THIS LATER
  const donationAmounts = [1, 3, 5, 10];
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

  const currentYear = new Date().getFullYear();
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

          <div class="bmac-container" use:clickOutside on:click_outside={closeDropdown}>
            <button class="bmac-button" on:click={toggleDropdown}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z"/>
              </svg>
              Buy me a coffee
            </button>

            {#if isDropdownOpen}
              <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
                {#each donationAmounts as amount}
                  <a 
                    href="https://paypal.me/{paypalUsername}/{amount}" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    on:click={closeDropdown}
                  >
                    ${amount}
                  </a>
                {/each}
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

        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#mobileNav" aria-label="Toggle navigation">
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
      <p class="mb-2">&copy; {currentYear} AxelBase Regex Substitution</p>
      <div>
        <a href="{base}/privacy" class="footer-link">Privacy Policy</a>
        <span class="text-white-50">|</span>
        <a href="{base}/terms" class="footer-link">Terms of Service</a>
      </div>
    </div>
  </footer>

</div>

<style>
  /* Simple animation for page load */
  .fade-in-up {
    animation: fadeInUp 0.5s ease-out;
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>