// src/lib/regexProcessor.ts
// Single file containing ALL core logic for FR1 (Input Acceptance), FR2 (Line-by-Line Substitution), and FR3 (Output Display & Interaction prep)
// Exports functions for validation, processing, and reset to keep UI components logic-free

export interface RegexInputs {
  inputText: string;
  pattern: string;
  replacement: string;
  flags: string; // e.g., 'gi' (supports g, i, m, s, u)
}

export interface ProcessResult {
  output: string;
  error?: string;
}

// FR1: Input Acceptance - Validate inputs and compile regex
export function validateInputs(inputs: RegexInputs): { valid: boolean; error?: string } {
  const { pattern, flags } = inputs;

  if (!pattern.trim()) {
    return { valid: false, error: 'Regex pattern cannot be empty.' };
  }

  try {
    new RegExp(pattern, flags);
    return { valid: true };
  } catch (e) {
    return { valid: false, error: `Invalid regex pattern or flags: ${e.message}` };
  }
}

// FR2: Line-by-Line Substitution Processing - Main processing function
export function performSubstitution(inputs: RegexInputs): ProcessResult {
  const validation = validateInputs(inputs);
  if (!validation.valid) {
    return { output: '', error: validation.error };
  }

  const { inputText, pattern, replacement, flags } = inputs;
  const regex = new RegExp(pattern, flags);

  try {
    const lines = inputText.split('\n');
    const processedLines = lines.map(line => line.replace(regex, replacement));
    const output = processedLines.join('\n');
    return { output };
  } catch (e) {
    return { output: '', error: `Error during substitution: ${e.message}` };
  }
}

// FR3: Output Interaction Prep - Reset function (returns default inputs)
export function getDefaultInputs(): RegexInputs {
  return {
    inputText: '',
    pattern: '',
    replacement: '',
    flags: 'g'
  };
}

// Additional helper for FR3: Prepare download blob (client-side, returns Blob for UI to use)
export function prepareDownloadBlob(output: string, filename: string = 'substituted.txt'): Blob {
  return new Blob([output], { type: 'text/plain' });
}