<script setup>
import { reactive, ref } from 'vue'

/* STATICS */
const noPhrases = [
    "",
    "no?",
    "why?",
    "are u sure?",
    "dont hurt me plz </3",
    "think about it"
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
    top: '50%',
    left: '50%',
});


/* FUNCTIONS */
const pressNoButton = () => {
    console.log("click no");

    if (!noBtn.value) return;

    if (noIndexPhrase.index < noIndexPhrase.limit) {
        noIndexPhrase.index++;
    }

    const btnRect = noBtn.value.getBoundingClientRect();

    const maxX = window.innerWidth - btnRect.width;
    const maxY = window.innerHeight - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noStylePosition.value = {
        position: 'fixed',
        left: `${randomX}px`,
        top: `${randomY}px`,
    };

    yesScale.value += 0.9;
}

const pressYesButton = () => {
    console.log("click si");
    pressedYes.value = true;
}
</script>



<template>
    <section>
        <div id="container" v-if="!pressedYes">
            <h1>Vuoi stare con me?</h1>
            <p>{{ noPhrases[noIndexPhrase.index] }}</p>
            <img src="@/assets/images/minion-valentine.jpg" alt="Minion Valentine" />
            <div class="buttons">
                <!-- YES -->
                <button class="yes" :style="{ transform: `scale(${yesScale})` }" @click="pressYesButton">
                    Sì
                </button>
                <!-- NO -->
                <div class="wrapepr" :style="noStylePosition">
                    <button ref="noBtn" class="no" @click="pressNoButton">
                        No
                    </button>
                </div>
            </div>
        </div>
        <p v-else class="love">love uuu ❤️</p>
    </section>
</template>



<style scoped lang="scss">
section {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(120deg, pink, white);
}

#container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

h1 {
    font-size: 2rem;
    font-weight: bold;
}

p {
    font-size: 1.2rem;
}

.buttons {
    display: flex;
    justify-content: space-around;
    width: 100%;
}

button {
    padding: 12px 24px;
    font-size: 1.2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.yes {
    background-color: rgb(146, 28, 146);
    color: white;
}

.no {
    background-color: rgb(247, 109, 109);
    color: white;
    z-index: 9999;
}

.love {
    font-size: 2rem;
}
</style>