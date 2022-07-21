<template>
    <div>
        <div>测试按钮</div>
        <bk-button
            text="Hello Button"
        />
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { BKButton } from '@boxkit/components';

export default defineComponent({
    name: 'Case',
    components: {
        'bk-button': BKButton,
    },
    setup() {
        const state = reactive({});
        return {
            ...toRefs(state)
        };
    }
});
</script>

<style lang="less" scoped>

</style>
