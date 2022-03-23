<template>
    <v-container>
        <PhotoGallery
            v-for="photo in photos"
            v-bind:photo="photo"
            :key="photo.id"
        />
    </v-container>
</template>

<script>
import PhotoGallery from '../components/photo/PhotoGallery';

export default {
    data: () => ({
        photos: [
            { id: 1, title: 'фото 1' },
            { id: 2, title: 'фото 2' },
            { id: 3, title: 'фото 3' },
            { id: 4, title: 'фото 4' },
        ],
    }),
    components: {
        PhotoGallery,
    },
};
</script>

<style lang="scss" scoped></style>
