<template>
    <div>
        <a
            href="https://vitejs.dev"
            target="_blank"
        >
            <img
                src="/vite.svg"
                class="logo"
                alt="Vite logo"
            >
        </a>
        <case></case>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Case  from './components/case.vue';

export default defineComponent({
    name: 'App',
    components: {
        Case
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