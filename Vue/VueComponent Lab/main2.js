import GlobalButton from "./components/GlobalButton.js";
import GlobalMessage from "./components/GlobalMessage.js";
import LocalButton from "./components/LocalButton.js";

const vue = "https://unpkg.com/vue@3.4.15/dist/vue.esm-browser.js";
const { createApp } = await import(vue);

const app = createApp({
    data(){
        return{
            count : 0
        };
    },
    components: {
        GlobalButton,
        GlobalMessage,
        LocalButton
    },
    template: `
    <div>
    <h1>Vue component Modules</h1>
        <global-button @click="count++"  label="global dawilly btn"></global-button>
        <global-message  message="GLobal message Hello heavenlight"></global-message>
        <div> Count : {{ count }}</div>
        <local-button label="local btn"></local-button>
        </div>
    `
    }
)

app.mount("#app");