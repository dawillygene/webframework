import GlobalButton from "./components/GlobalButton.js";
import LocalButton from "./components/LocalButton.js";
import GlobalMessage from "./components/GlobalMessage.js";

const vue = "https://unpkg.com/vue@3.4.15/dist/vue.esm-browser.js";
const { createApp } = await import(vue);

const app = createApp({
    data(){
        return{
            count : 0
        }
    },
    components: {
'local-wrapper':{
    // emits:['click'],
    components:{ LocalButton },
    template:`<div>
    <local-button label="local dawilly btn"></local-button>
    </div>`
}
    },
    template: `
    <div>
    <h1>Vue component Modules</h1>
        <global-button label="global dawilly btn"></global-button>
        <local-wrapper @click="count++"></local-wrapper>
        <global-message message="GLobal message Hello heavenlight"></global-message>
        <div>count: {{ count }}</div>
        </div>
    `,


});

app.component("global-button", GlobalButton);
app.component("global-message", GlobalMessage);

app.mount("#app");

