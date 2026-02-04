<script setup>
import { reactive, ref } from 'vue'

/* STATICS */
const noPhrases = [
    "",
    "think about it",
    "why no?",
    "are u sure?",
    "dont hurt me plz </3",

];

const gifts = [
    'https://media.tenor.com/Qz8ZJcAsW7MAAAAi/bubu-love-bite.gif',
    'https://media.tenor.com/AbrC4pKZ6MsAAAAi/smoochie-smooches.gif',
    'https://media.tenor.com/8dzBZD1j7G8AAAAi/hello-kitty-daniel.gif',
    'https://media.tenor.com/rwAWhystcgQAAAAi/happy-valentines-day-love-happy-valentines-day-my-love.gif',
    'https://media.tenor.com/RUd2klwr7t4AAAAi/haleys-ouo.gif'
];
/* REF/REACTIVE */
// yes vars
const yesScale = ref(1); // used for scale botton size
const pressedYes = ref(false);

// no vars
const noBtn = ref(null);
const noIndexPhrase = reactive({
    index: 0,
    limit: noPhrases.length - 1
});
const noStylePosition = ref({
    position: 'static',
});


/* FUNCTIONS */
const pressNoButton = () => {
    if (noIndexPhrase.index < noIndexPhrase.limit) {
        noIndexPhrase.index++;
    }

    const btnRect = noBtn.value.getBoundingClientRect();

    const maxX = window.innerWidth - btnRect.width;
    const maxY = window.innerHeight - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    yesScale.value += 0.45;

    noStylePosition.value = {
        position: 'fixed',
        left: `${randomX}px`,
        top: `${randomY}px`,
    };
}

const pressYesButton = () => {
    pressedYes.value = true;
}
</script>



<template>
    <section>
        <div class="container" v-if="!pressedYes">
            <div>
                <h1>Ciao Giogis <br> Vuoi passare san valentino con me?</h1>
                <p>{{ noPhrases[noIndexPhrase.index] }}</p>
            </div>
            <img :src="gifts[noIndexPhrase.index]" alt="cute image Valentine" />
            <div class="buttons-container">
                <!-- YES -->
                <button class="yes" :style="{ transform: `scale(${yesScale})` }" @click="pressYesButton">
                    Yes!!
                </button>
                <!-- NO -->
                <button ref="noBtn" :style="noStylePosition" class="no" @click="pressNoButton">
                    No
                </button>
            </div>
        </div>
        <div v-else class="container">
            <img class="final-kiss-gif" src="https://media1.tenor.com/m/TO3XZieplToAAAAd/cat-kiss-cock.gif" alt="">
            <p class="love">love uuu too❤️</p>
        </div>
    </section>
</template>



<style scoped lang="scss">
section {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(120deg, pink 20%, white 90%);
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    text-align: center;
}

h1 {
    font-size: 1.7rem;
    font-weight: bold;
}

p {
    font-size: 1.45rem;
}

img {
    width: 200px;
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
            background-image: url(https://t3.ftcdn.net/jpg/02/73/62/02/360_F_273620242_EGmYZddPe9QUPw8YardUfE1CBeNWjugo.jpg);
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
</style>