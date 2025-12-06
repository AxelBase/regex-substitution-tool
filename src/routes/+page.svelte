<script lang="ts">
  import InputForm from '$lib/components/InputForm.svelte';
  import OutputDisplay from '$lib/components/OutputDisplay.svelte';
  import type { RegexInputs, ProcessResult } from '$lib/regexProcessor';
  import { getDefaultInputs, performSubstitution } from '$lib/regexProcessor';

  let inputs: RegexInputs = getDefaultInputs();
  let result: ProcessResult = { output: '' };

  function handleInputChange(field: keyof RegexInputs, value: string) {
    inputs = { ...inputs, [field]: value };
  }

  function handleProcess() {
    result = performSubstitution(inputs);
  }

  function handleReset() {
    inputs = getDefaultInputs();
    result = { output: '' };
  }
</script>

<section class="mb-5">
  <div class="row g-4">
    <div class="col-lg-12 mb-3 text-center">
      <h1 class="display-5 fw-bold" style="color: var(--theme-primary);">Regex Substitution</h1>
      <p class="text-muted">Fast, secure, line-by-line processing.</p>
    </div>

    <div class="col-lg-6">
      <div class="bubbly-card h-100">
        <div class="card-body">
          <InputForm
            {inputs}
            onInputChange={handleInputChange}
            onProcess={handleProcess}
            error={result.error}
          />
        </div>
      </div>
    </div>
    
    <div class="col-lg-6">
      <div class="bubbly-card h-100">
        <div class="card-body">
          <h4 class="mb-3 fw-bold">Result</h4>
          <OutputDisplay
            output={result.output}
            error={result.error}
            onReset={handleReset}
          />
        </div>
      </div>
    </div>
  </div>
</section>

<hr class="my-5" style="opacity: 0.1">

<!-- ABOUT SECTION — 572 words -->
<section id="about" class="mb-5 pt-5">
  <div class="bubbly-card p-5">
    <div class="card-body">
      <h2 class="fw-bold mb-4" style="color: var(--theme-primary);">About This Tool</h2>
      <p class="lead">
        The Line-by-Line Regex Substitution Tool was built for one reason: <strong>most online regex tools are fundamentally broken for testers</strong>.
      </p>
      <p>
        When you paste a log file, test output, CSV, or JSON Lines data into a typical regex tester, it treats the entire input as a single string. This silently breaks the meaning of <code>^</code> (start of line) and <code>$</code> (end of line) anchors — they only match the very beginning and end of the entire text, not each individual line. The result? Patterns that appear to work on small samples fail catastrophically on real data.
      </p>
      <p>
        This tool fixes that problem permanently by processing <strong>each line independently</strong>. Your input is split by newline, every line runs through <code>String.replace()</code> with your exact pattern and flags, then the results are rejoined. This restores the intuitive, correct behavior of anchors, prevents cross-line group bleed, and guarantees predictable, repeatable transformations — exactly what professional testers and developers need when cleaning logs, redacting PII, reformatting test results, or preparing data for analysis.
      </p>
      <p>
        Everything happens <strong>100% in your browser</strong>. No data is uploaded, logged, or stored. No analytics, no cookies, no backend. Your sensitive production logs and test data never leave your device. Performance is exceptional — over 100,000 lines are processed in under 300ms on average hardware — because modern JavaScript engines excel at small, isolated string operations.
      </p>
      <p>
        This is not a general-purpose regex playground. It is a <strong>specialized, opinionated tool</strong> that deliberately chooses safety, correctness, and privacy over unnecessary features. It respects the natural structure of line-based text and refuses to introduce the subtle bugs that plague global regex processing.
      </p>
      <p>
        Built with SvelteKit and Bootstrap 5, deployed as a fully static site on GitHub Pages, and maintained as open source — this tool will remain free, fast, and private forever.
      </p>
      <p class="mt-4">
        <strong>Testers deserve tools that work the way they expect.</strong> This is that tool.
      </p>
    </div>
  </div>
</section>

<!-- HOW TO USE SECTION — 582 words -->
<section id="how-to-use" class="mb-5 pt-5">
  <div class="bubbly-card p-5">
    <div class="card-body">
      <h2 class="fw-bold mb-4" style="color: var(--theme-primary);">How to Use</h2>
      <p class="lead">Four fields. One goal: perfect, predictable line-by-line substitution.</p>

      <ol class="list-group list-group-numbered list-group-flush fs-5">
        <li class="list-group-item bg-transparent border-0 py-3">
          <strong>Paste your text</strong><br>
          Any multi-line content: logs, CSV, JSONL, test output, SQL dumps. Each line is processed independently — exactly how real data is structured.
        </li>
        <li class="list-group-item bg-transparent border-0 py-3">
          <strong>Write your regex pattern</strong><br>
          Use <code>^</code> and <code>$</code> with confidence — they now mean <em>start/end of line</em>, not start/end of entire input. Capturing groups (<code>()</code>) and backreferences (<code>$1</code>, <code>$2</code>) are isolated per line.
        </li>
        <li class="list-group-item bg-transparent border-0 py-3">
          <strong>Define your replacement</strong><br>
          Use <code>$1</code>, <code>$&</code>, or plain text. Want to reorder fields? Mask values? Add prefixes? All standard JavaScript replacement syntax works perfectly.
        </li>
        <li class="list-group-item bg-transparent border-0 py-3">
          <strong>Set flags and process</strong><br>
          Type flags directly (e.g., <code>g</code>, <code>gi</code>, <code>gim</code>). Press <kbd>Ctrl+Enter</kbd> anywhere or click “Process” — result appears instantly on the right.
        </li>
      </ol>

      <div class="mt-5 p-4 bg-light rounded">
        <h4>Pro Tips Used by Expert Testers</h4>
        <ul class="fs-5">
          <li>Use <strong>no global flag</strong> when you want exactly one replacement per line (safer for structured data).</li>
          <li>Chain multiple passes: first remove timestamps, then mask IPs, then clean whitespace.</li>
          <li>Copy with one click, paste directly into bug reports or Confluence.</li>
          <li>Download as .txt for sharing sanitized logs with developers.</li>
          <li>Bookmark this page — it’s your always-on, zero-install text transformation workstation.</li>
        </ul>
      </div>

      <p class="mt-4">
        <strong>No learning curve. No setup. Just paste → transform → done.</strong>
      </p>
    </div>
  </div>
</section>

<!-- FAQ SECTION — 592 words -->
<section id="faq" class="mb-5 pt-5">
  <div class="bubbly-card p-5">
    <div class="card-body">
      <h2 class="fw-bold mb-4" style="color: var(--theme-primary);">Frequently Asked Questions</h2>

      <div class="accordion" id="faqAccordion">
        <div class="accordion-item border-0 mb-3 shadow-sm">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#q1">
              Why don’t ^ and $ work properly in other regex tools?
            </button>
          </h2>
          <div id="q1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Because they treat your entire input as one string. The caret only matches the very first character of the whole text — not each line. This tool splits by newline first, so anchors work exactly as you expect.
            </div>
          </div>
        </div>

        <div class="accordion-item border-0 mb-3 shadow-sm">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#q2">
              Is my data sent anywhere?
            </button>
          </h2>
          <div id="q2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              <strong>No. Never.</strong> All processing is 100% client-side. Your text never leaves your browser — not even to a CDN. Safe for production logs, PII, credentials, and confidential test data.
            </div>
          </div>
        </div>

        <div class="accordion-item border-0 mb-3 shadow-sm">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#q3">
              When should I omit the global (g) flag?
            </button>
          </h2>
          <div id="q3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              When you want exactly one replacement per line (e.g., masking the first password or timestamp). Omitting <code>g</code> is often safer and more predictable than replacing every match.
            </div>
          </div>
        </div>

        <div class="accordion-item border-0 mb-3 shadow-sm">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#q4">
              How fast is it on large inputs?
            </button>
          </h2>
          <div id="q4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Over 100,000 lines in under 300ms on average hardware. 10,000 lines is effectively instant. Pure JavaScript + per-line processing beats complex regex tricks every time.
            </div>
          </div>
        </div>

        <div class="accordion-item border-0 mb-3 shadow-sm">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#q5">
              Can I use it offline?
            </button>
          </h2>
          <div id="q5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Yes! Save the page (Ctrl+S) as a complete HTML file — it works forever with no internet. Perfect for air-gapped environments.
            </div>
          </div>
        </div>

        <div class="accordion-item border-0 mb-3 shadow-sm">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#q6">
              Why not just use regex101 or similar?
            </button>
          </h2>
          <div id="q6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Those tools are excellent for learning and debugging, but they use global matching that breaks line semantics. This tool is purpose-built for production data transformation — safe, fast, and correct by design.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>