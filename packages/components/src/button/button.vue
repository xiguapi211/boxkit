<template>
    <div>
        <button :class="innerClass">
            {{ text }}
        </button>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue';

export default defineComponent({
    name: 'BKButton',
    props: {
        text: {
            type: String,
            default: '按钮'
        }
    },
    setup() {
        const state = reactive({});
        return {
            ...toRefs(state)
        };
    },
    computed: {
        innerClass(): any {
            return {
                'bk-button': true
            };
        }
    }
});
</script>

<style lang="less">
.bk-button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    cursor: pointer;
    transition: border-color 0.25s;
    color: red;
    &:hover {
        border-color: #646cff;
    }
    &:focus, &:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
}
</style>