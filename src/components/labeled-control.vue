<style lang="scss" scoped>
.labeled-control {
    $width: 80px;
    
    label {
        float: left;
        width: $width;
        text-align: right;
        vertical-align: middle;
        font-size: 12px;
        line-height: 1;
        padding: 10px 12px 10px 0;
        box-shadow: border-box;
    }

    .control-wrapper{
        margin-left: $width;
    }
}
</style>

<template>
  <div class="labeled-control" :style="{ width: `${width}px` }">
      <label >{{ label }}</label>
      <div class="control-wrapper">
          <slot></slot>
      </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class LabeledControl extends Vue {
    @Prop()
    label: string;
    @Prop()
    width: number;
}
</script>