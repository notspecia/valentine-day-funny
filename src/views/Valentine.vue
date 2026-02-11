<script setup>
import { reactive, ref } from 'vue'
import gif1 from '@/assets/gifs/gif-1.gif'
import gif2 from '@/assets/gifs/gif-2.gif'
import gif3 from '@/assets/gifs/gif-3.gif'
import gif4 from '@/assets/gifs/gif-4.gif'
import gif5 from '@/assets/gifs/gif-5.gif'
import gif6 from '@/assets/gifs/gif-6.gif'
import gif7 from '@/assets/gifs/gif-7.gif'
import kissCat from '@/assets/gifs/kiss-cat.gif'



/* STATICS */
const noPhrases = [
    "",
    "why not?",
    "are you really sure?",
    "think about it carefully…",
    "this is your final answer?",
    "so that’s a no-no?",
    "i’m running out of dramatic options..."
];


const gifts = [
    gif1,
    gif2,
    gif3,
    gif4,
    gif5,
    gif6,
    gif7
]

/* REF/REACTIVE */
// yes button vars
const yesScale = ref(1); // used for scale botton size
const pressedYes = ref(false);

// no button vars
const noBtn = ref(null);
const noIndexPhrase = reactive({
    index: 0,
    limit: noPhrases.length - 1
});
const noStylePosition = ref({
    position: 'static',
});

// heart animation vars
const hearts = ref([])
const showHearts = ref(false)


/* FUNCTIONS */
// used for generating hearts when pressing yes button
const createHearts = () => {
    showHearts.value = true;

    hearts.value = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2
    }))
}


const pressNoButton = () => {
    if (noIndexPhrase.index < noIndexPhrase.limit) {
        noIndexPhrase.index++;
    }

    const btnRect = noBtn.value.getBoundingClientRect();

    const maxX = window.innerWidth - btnRect.width;
    const maxY = window.innerHeight - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    yesScale.value += 0.25;

    noStylePosition.value = {
        position: 'fixed',
        left: `${randomX}px`,
        top: `${randomY}px`,
    };
}

const pressYesButton = () => {
    pressedYes.value = true;
    createHearts();
}
</script>



<template>
    <section>
        <div v-if="showHearts" class="hearts-layer">
            <img v-for="heart in hearts"
                src="https://static.vecteezy.com/system/resources/thumbnails/012/658/366/small/heart-shaped-love-icon-symbol-for-pictogram-app-website-logo-or-graphic-design-element-pixel-art-style-illustration-format-png.png"
                :key="heart.id" class="heart" :style="{
                    left: heart.left + '%',
                    animationDuration: heart.duration + 's',
                    animationDelay: heart.delay + 's'
                }">
        </div>
        <div class="container" v-if="!pressedYes">
            <div>
                <h1>Hello Giogi</h1>
                <h2>Do you want to be my valentine?</h2>
                <p class="no-phrase">{{ noPhrases[noIndexPhrase.index] }}</p>
            </div>
            <img class="slide-gif" :src="gifts[noIndexPhrase.index]" alt="cute image Valentine" />
            <div class="buttons-container">
                <!-- YES -->
                <button class="yes" :style="{ transform: `scale(${yesScale})` }" @click="pressYesButton">
                    Yes
                </button>
                <!-- NO -->
                <button ref="noBtn" :style="noStylePosition" class="no" @click="pressNoButton">
                    No
                </button>
            </div>
        </div>
        <div v-else class="container">
            <img class="final-kiss-gif" :src="kissCat" alt="kiss cat image">
            <p class="love">i know it! i love u too <3 </p>
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
    position: relative;
    overflow: hidden;

    .hearts-layer {
        position: absolute;
        inset: 0;
        pointer-events: none;
        overflow: hidden;
        z-index: 0;
    }

    .heart {
        position: absolute;
        top: -10px;
        width: 32px;
        height: 32px;
        animation-name: fall;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    @keyframes fall {
        0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
        }

        100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0.8;
        }
    }


    .container {
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        text-align: center;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: bold;
    }


    h2 {
        font-size: 1.4rem;
        margin-bottom: 10px;
    }

    p.no-phrase {
        font-size: 1.25rem;

    }

    p.love {
        background-color: rgba(255, 255, 255, 0.9);
        font-size: 1.8rem;
        font-weight: bold;
        padding: 10px 20px;
        border-radius: 20px;
    }

    img.slide-gif {
        width: 200px;
        height: 200px;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
    }

    img.final-kiss-gif {
        width: 60%;
    }

    .buttons-container {
        display: flex;
        justify-content: space-around;
        width: 100%;

        button {
            padding: 12px 24px;
            font-size: 1.4rem;
            font-weight: bold;
            border: 2px solid black;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.2s ease;

            &.yes {
                background: white;
                background-position: center;
                background-size: cover;
                color: black;
            }

            &.no {
                font-size: 1rem;
                background-color: rgb(178, 36, 81);
                color: white;
                z-index: 9999;
            }
        }
    }
}
</style>