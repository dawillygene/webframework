export default {
    data(){
      return {
          count : 0
      };
    },
    name: 'LocalButton',
    props: ['label'],
    template: `
    <button @click="count++" style="padding: 8px 16px; background-color: #2196F3; color: white; border: none; border-radius: 4px; cursor: pointer;">
      {{ label }} clicked {{ count }} times
    </button>
  `
};