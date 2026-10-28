/**
 * Minimal Web Audio API acoustic heartbeat pulse sound
 * Strictly user-initiated and subtle.
 */

let audioCtx: AudioContext | null = null;

export function playHeartbeatPulse() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // Lubricate two low-frequency thumps: lub-dub
    const playThump = (time: number, freq: number, gainVal: number) => {
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);
      osc.frequency.exponentialRampToValueAtTime(32, time + 0.12);

      gain.gain.setValueAtTime(gainVal, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.14);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(time);
      osc.stop(time + 0.15);
    };

    // Lub
    playThump(now, 72, 0.15);
    // Dub (slightly higher pitch, slightly lower volume, 140ms later)
    playThump(now + 0.14, 88, 0.12);
  } catch (err) {
    // Non-critical audio, fail silently
    console.debug('Audio context note:', err);
  }
}
