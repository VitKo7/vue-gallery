<template>
    <v-container>
        <PhotoForm @addPhoto="addPhoto" />
        <v-row>
            <PhotoGallery
                v-for="photo in photos"
                v-bind:photo="photo"
                :key="photo.id"
            />
        </v-row>
    </v-container>
</template>

<script>
import PhotoGallery from '../components/photo/PhotoGallery';
import PhotoForm from '../components/photo/PhotoForm';

export default {
    data: () => ({
        // photos: [
        //     { id: 1, title: 'фото 1' },
        //     { id: 2, title: 'фото 2' },
        //     { id: 3, title: 'фото 3' },
        //     { id: 4, title: 'фото 4' },
        // ],
        photos: [],
        mounted() {
            this.fetchToDo(); //! not working here
        },
        methods: {
            fetchToDo() {
                // async request for photos when component is made up;
                //! not working here
                this.axios
                    .get(
                        `https://jsonplaceholder.typicode.com/photos?_limit=10`
                    )
                    .then((result) => (this.photos = result.data));
            },
            addPhoto(photo) {
                this.photos.push(photo);
            },
        },
    }),
    components: {
        PhotoGallery,
        PhotoForm,
    },
};
</script>

<style lang="scss" scoped></style>
