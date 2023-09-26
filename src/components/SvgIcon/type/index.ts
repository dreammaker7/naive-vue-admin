import { CSSProperties } from 'vue';

export type SpinAnimation = {
  // animation-duration
  duration?: CSSProperties['animation-duration'];
  // animation-timing-function
  timing?: CSSProperties['animation-timing-function'];
  // animation-delay
  delay?: CSSProperties['animation-delay'];
  // animation-iteration-count
  count?: CSSProperties['animation-iteration-count'];
};
