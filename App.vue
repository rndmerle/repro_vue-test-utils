<template>
    <div>Test<sub-comp/></div>
</template>

<script lang="ts">
import Sub from "./Sub.vue";

export default {
    name: "Component",
    components: {
        "sub-comp": Sub
    }
}
</script>
