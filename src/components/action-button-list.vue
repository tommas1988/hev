<style lang="scss" scoped>
.button-wrapper {
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }
}
</style>

<template>
    <div>
        <span class="button-wrapper" v-for="item in buttons">
            <Button size="small" :type="item.type">{{ item.name }}</Button>
        </span>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ActionButtonList extends Vue {
  @Prop() buttons: any[];
}
</script>