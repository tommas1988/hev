<style lang="scss" scoped>
.wrapper {
  margin: 40px auto;

  .extra-left,
  .new-button {
    margin-bottom: 5px;
  }
  .extra-left {
    float: left;
  }

  .new-button {
    float: right;
    margin-right: 10px;
  }
}
</style>

<template>
  <div class="wrapper" :style="style">
    <div class="extra-left">
      <slot name="extra-left"></slot>
    </div>
    <div class="new-button">
      <Button type="primary" shape="circle" icon="plus-round">{{ addButtonName }}</Button>
    </div>
    <div style="clear: both">
      <Table border :columns="columns" :data="data"></Table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AddableTable extends Vue {
  @Prop() width: number;
  @Prop() addButtonName: String;
  @Prop() columns: any[];
  @Prop() data: any[];

  get style() {
    return {
      width: this.width + 'px'
    };
  }
}
</script>