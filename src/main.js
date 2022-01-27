import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";

//including CSS
import "../assets/img/favicon.png";
import "../assets/img/apple-touch-icon.png";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/quill/quill.snow.css";
import "../assets/vendor/quill/quill.bubble.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/simple-datatables/style.css";
import "../assets/css/style.css";

//including JS
import "../assets/vendor/apexcharts/apexcharts.min.js";
import "../assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "../assets/vendor/chart.js/chart.min.js";
import "../assets/vendor/echarts/echarts.min.js";
import "../assets/vendor/simple-datatables/simple-datatables.js";
import "../assets/vendor/tinymce/tinymce.min.js";
import "../assets/vendor/php-email-form/validate.js";
// import "../assets/js/main.js";

import HeaderComponent from "./components/include/HeaderComponent";
import SidebarComponent from "./components/include/SidebarComponent";
import FooterComponent from "./components/include/FooterComponent";
const app = createApp(App);

app.component("HeaderComponent", HeaderComponent);
app.component("SidebarComponent", SidebarComponent);
app.component("FooterComponent", FooterComponent);

app.use(router);
app.mount("#app");
