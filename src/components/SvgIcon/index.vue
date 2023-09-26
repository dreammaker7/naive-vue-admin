<script lang="ts">
  import { computed, defineComponent } from 'vue';

  import { SPIN_ANIMATION_DEFAULT } from './constant';

  export default defineComponent({
    name: 'SvgIcon',
    props: {
      prefix: {
        type: String,
        default: 'icon'
      },
      name: {
        type: String,
        required: true
      },
      className: {
        type: String
      },
      color: {
        type: String,
        default: 'inherit'
      },
      spin: {
        type: [Boolean, Object],
        default: false
      }
    },
    setup(props) {
      const symbolId = computed(() => `#${props.prefix}-${props.name}`);
      const svgClass = computed(() => `svg-icon${props.className ? ` ${props.className}` : ''}`);

      const spinAnimate = computed(() => {
        if (typeof props.spin === 'boolean') return SPIN_ANIMATION_DEFAULT;

        const config: typeof SPIN_ANIMATION_DEFAULT = { ...props.spin };
        if (typeof Number(config.duration) === 'number') config.duration += 's';
        if (typeof Number(config.delay) === 'number') config.delay += 's';

        // object
        return Object.assign(SPIN_ANIMATION_DEFAULT, config);
      });

      return { symbolId, svgClass, spinAnimate };
    }
  });
</script>

<template>
  <svg :class="`${svgClass}${spin ? ' scoped-svg-rotate' : ''}`" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<style lang="less">
  .svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
    overflow: hidden;

    &.scoped-svg-rotate {
      animation-name: rotate;
      animation-duration: v-bind('spinAnimate.duration');
      animation-timing-function: v-bind('spinAnimate.timing');
      animation-iteration-count: v-bind('spinAnimate.count');
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>
