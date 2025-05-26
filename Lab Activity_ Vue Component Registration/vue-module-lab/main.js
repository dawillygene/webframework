import { createApp } from
'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import GlobalButton from './components/GlobalButton.js';
import LocalButton from './components/LocalButton.js';
const app = createApp({
components: {
'local-wrapper': {
components: {LocalButton // local registration
},
template: `
<div>
<h2>Inside Local Wrapper</h2>
<local-button label="I'm Local"></local-button>
</div>
`
}
},
template: `
<div>
<h1>Vue Components with Modules</h1>
<global-button></global-button>
<local-wrapper></local-wrapper>
</div>
`
});

// Registering the global component
app.component('global-button', GlobalButton);
app.mount('#app');