<template>
    <v-container>
        <PhotoForm @addPhoto="addPhoto" />
        <v-row>
            <PhotoGallery
                v-for="photo in photos"
                v-bind:photo="photo"
                :key="photo.id"
                @openPhoto="openPhoto"
            />
        </v-row>
        <PhotoDialog :photo="currentPhoto" v-model="dialogVisible" />
    </v-container>
</template>

<script>
import PhotoGallery from '../components/photo/PhotoGallery';
import PhotoForm from '../components/photo/PhotoForm';
import PhotoDialog from '../components/photo/PhotoDialog.vue';

export default {
    components: {
        PhotoDialog,
        PhotoGallery,
        PhotoForm,
    },
    data: () => ({
        // photos: [
        //     { id: 1, title: 'фото 1' },
        //     { id: 2, title: 'фото 2' },
        //     { id: 3, title: 'фото 3' },
        //     { id: 4, title: 'фото 4' },
        // ],
        photos: [],
        currentPhoto: {},
        dialogVisible: false,
    }),
    mounted() {
        this.fetchToDo();
    },
    methods: {
        fetchToDo() {
            // async request for photos when component is made up;
            this.axios
                .get(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
                .then((result) => (this.photos = result.data));
        },
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
