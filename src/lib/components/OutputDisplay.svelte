<!-- src/lib/components/OutputDisplay.svelte -->
<!-- UI component for FR3: Output Display & Interaction - Shows output, copy, download, reset -->
<!-- Uses Bootstrap classes; integrates Clipboard API and Blob for download -->
<!-- Props: output (string), error (string), onReset (handler) -->

<script lang="ts">
  import { prepareDownloadBlob } from '../regexProcessor';

  export let output: string;
  export let error: string | undefined;
  export let onReset: () => void;

  let copySuccess = false;
  let downloadUrl: string;

  $: if (output) {
    const blob = prepareDownloadBlob(output);
    downloadUrl = URL.createObjectURL(blob);
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(output);
      copySuccess = true;
      setTimeout(() => (copySuccess = false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }
</script>

<div class="card bg-light">
  <div class="card-header">Processed Output</div>
  <div class="card-body">
    {#if error}
      <div class="alert alert-warning" role="alert">
        {error}
      </div>
    {:else if output}
      <textarea
        class="form-control mb-3"
        rows="5"
        readonly
        value={output}
      ></textarea>
      <div class="d-flex justify-content-between">
        <button class="btn btn-success" on:click={copyToClipboard}>
          {copySuccess ? 'Copied!' : 'Copy to Clipboard'}
        </button>
        <a href={downloadUrl} download="substituted.txt" class="btn btn-info">Download .txt</a>
        <button class="btn btn-secondary" on:click={onReset}>Reset</button>
      </div>
    {:else}
      <p class="text-muted">No output yet. Process your input above.</p>
    {/if}
  </div>
</div>

<style>
  /* Minimal custom styles; rely on Bootstrap */
  textarea.form-control {
    resize: vertical;
  }
</style>