<template>
    <v-container>
        <PhotoForm @addPhoto="addPhoto" />
        <v-row>
            <PhotoGallery
                v-for="photo in $store.getters.getAllPhotos"
                v-bind:photo="photo"
                :key="photo.id"
            />
        </v-row>
        <PhotoDialog />
    </v-container>
</template>

<script>
import PhotoGallery from '../components/photo/PhotoGallery';
import PhotoForm from '../components/photo/PhotoForm';
import PhotoDialog from '../components/photo/PhotoDialog.vue';
import { mapActions } from 'vuex';

export default {
    components: {
        PhotoDialog,
        PhotoGallery,
        PhotoForm,
    },
    data: () => ({
        photos: [],
    }),
    mounted() {
        this.fetchPhotos();
    },
    methods: {
        ...mapActions(['fetchPhotos']),
        addPhoto(photo) {
            this.photos.push(photo);
        },
        openPhoto(photo) {
            this.currentPhoto = photo;
            this.dialogVisible = true;
        },
    },
};
</script>

<style lang="scss" scoped></style>
