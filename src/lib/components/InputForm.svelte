<script lang="ts">
  import type { RegexInputs } from '../regexProcessor';
  import { validateInputs } from '../regexProcessor';

  export let inputs: RegexInputs;
  export let onInputChange: (field: keyof RegexInputs, value: string) => void;
  export let onProcess: () => void;
  export let error: string | undefined;

  let localError: string | undefined;

  function handleChange(event: Event, field: keyof RegexInputs) {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    onInputChange(field, target.value);

    // Live validation for pattern and flags
    if (field === 'pattern' || field === 'flags') {
      const validation = validateInputs({ ...inputs, [field]: target.value });
      localError = validation.error;
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'Enter') {
      onProcess();
    }
  }
</script>

<div class="card bg-light mb-3">
  <div class="card-header fw-bold">Input Text & Regex Settings</div>
  <div class="card-body">
    <form>
      <div class="mb-3">
        <label for="inputText" class="form-label">Multi-line Input Text</label>
        <textarea
          id="inputText"
          class="form-control"
          rows="5"
          value={inputs.inputText}
          on:input={(e) => handleChange(e, 'inputText')}
          on:keydown={handleKeydown}
          placeholder="Enter text here... Each line will be processed separately."
        ></textarea>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="pattern" class="form-label">Regex Pattern</label>
          <input
            id="pattern"
            type="text"
            class="form-control"
            value={inputs.pattern}
            on:input={(e) => handleChange(e, 'pattern')}
            on:keydown={handleKeydown}
            placeholder="e.g., \d+ or [a-z]"
          />
        </div>
        <div class="col-md-6">
          <label for="replacement" class="form-label">Replacement String</label>
          <input
            id="replacement"
            type="text"
            class="form-control"
            value={inputs.replacement}
            on:input={(e) => handleChange(e, 'replacement')}
            on:keydown={handleKeydown}
            placeholder="e.g., XXX or $1"
          />
        </div>
      </div>
      <div class="mb-3">
        <label for="flags" class="form-label">Regex Flags (e.g., gi)</label>
        <input
          id="flags"
          type="text"
          class="form-control"
          value={inputs.flags}
          on:input={(e) => handleChange(e, 'flags')}
          on:keydown={handleKeydown}
          placeholder="g (global), i (ignore case), m (multiline), etc."
        />
      </div>
      {#if error || localError}
        <div class="alert alert-danger" role="alert">
          {error || localError}
        </div>
      {/if}
      <button type="button" class="btn btn-primary" on:click={onProcess}>Process (Ctrl+Enter)</button>
    </form>
  </div>
</div>

<style>
  textarea.form-control {
    resize: vertical;
  }
</style>