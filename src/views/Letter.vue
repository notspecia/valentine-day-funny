<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

/* ROUTER + REACTIVES */
const router = useRouter();
const isOpen = ref(false);

/* FUNCTIONS */
const renderToGame = () => {
    isOpen.value = true;
    setTimeout(() => {
        router.push('/valentine');
    }, 1900);
}
</script>



<template>
    <section>
        <div class="wrapper">
            <div class="lid one"></div>
            <div class="lid two"></div>
            <div class="envelope"></div>
            <div class="letter" :class="{ open: isOpen }" @click="renderToGame">
                <p>a request for you <br>
                    <3 </p>
            </div>
        </div>
    </section>
</template>



<style scoped lang="scss">
section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;


    .wrapper {
        position: relative;
        z-index: 0;
        display: flex;
        justify-content: center;
        height: 200px;
        width: 300px;
        background-color: #c93737;
        cursor: pointer;

        .lid {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            border-right: 150px solid transparent;
            border-bottom: 100px solid transparent;
            border-left: 150px solid transparent;
            transform-origin: top;
            transition: transform 0.25s linear;

            /* Lid when closed */
            &.one {
                z-index: 3;
                border-top: 100px solid #ed6565;
                transform: rotateX(0deg);
                transition-delay: 0.75s;
            }

            /* Lid when opened */
            &.two {
                z-index: 1;
                border-top: 100px solid #c93737;
                transform: rotateX(90deg);
                transition-delay: 0.5s;
            }
        }

        .envelope {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 3;
            height: 100%;
            width: 100%;
            border-top: 100px solid transparent;
            border-right: 150px solid #f0c4c4;
            border-bottom: 100px solid #f0c4c4;
            border-left: 150px solid #f2a4a4;
        }

        // message custom letter
        .letter {
            position: absolute;
            top: 0;
            z-index: 2;
            width: 80%;
            height: 80%;
            background-image: url(https://t3.ftcdn.net/jpg/02/73/62/02/360_F_273620242_EGmYZddPe9QUPw8YardUfE1CBeNWjugo.jpg);
            border-radius: 15px;
            transition: 0.5s;

            p {
                text-align: center;
                font-size: 25px;
                font-weight: bold;
                margin-top: 30px;
                color: #3B4049;
            }
        }


        // HOVER TRANSITIONS TRANSFORMATIONS ON WRAPPER LETTER AND LIDS
        &:hover .lid.one {
            transform: rotateX(90deg);
            transition-delay: 0s;
        }

        &:hover .lid.two {
            transform: rotateX(180deg);
            transition-delay: 0.25s;
        }

        &:hover .lid.two {
            transform: rotateX(180deg);
            transition-delay: 0.25s;
        }

        &:hover .letter {
            transform: translateY(-61px);
            transition-delay: 0.5s;
        }

        .letter.open {
            transform: translateY(-1000px);
            transition-delay: 0.5s;
        }
    }
}
</style>