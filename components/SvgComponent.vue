<template >
    <p v-html="icon" />

</template>

<script>
    export default {
        name: "Icon",
        props:{
            icon: String,
        }
    }
</script>
