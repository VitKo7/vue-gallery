<template>
    <v-dialog v-model="dialogVisible" persistent max-width="600">
        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
                {{ photo.title }}
            </v-card-title>
            <v-card-text>
                <v-img :src="photo.url" />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    // props: ['photo', 'dialogVisible'],   // better version is obj.: show parameters;
    props: {
        photo: {
            type: Object,
            required: true,
        },
        value: {
            type: Boolean,
            default: false,
        },
    },
    created() {
        this.dialogVisible = this.value;
    },
    data: () => ({
        dialogVisible: false,
    }),
    watch: {
        value(newValue) {
            // console.log(newValue);
            this.dialogVisible = newValue;
        },
        dialogVisible(newValue) {
            this.$emit('input', newValue);
        },
    },
};
</script>

<style lang="scss" scoped></style>
