import type { App } from 'vue';
import BKButton from './button.vue';

BKButton.install = (app: App) => {
    app.component(BKButton.name, BKButton);
    return app;
};

export default BKButton;