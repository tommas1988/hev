<style lang="scss" scoped>
</style>

<template>
  <div>
      <Icon :type="icon.type" :color="icon.color" :size="icon.size"></Icon>
      <span :style="{marginLeft: `${spacing}px`}">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class IconText extends Vue {
    @Prop()
    text: string;
    @Prop()
    icon: any;
    @Prop({ default: 5 })
    spacing: number;
}
</script>