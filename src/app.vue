<template>
    <div class="app">
        <span>{{ msg }}</span>
    </div>
</template>

<script lang="ts">
    import Component from 'vue-class-component';
    import Vue from 'vue';

    @Component
    export default class App extends Vue {
        msg: string = 'App loaded.';
    };
</script>
