import { showNotification } from "./components/notification";

showNotification({
    variant: "info",
    title: "Информация",
    subtitle: "Это информационное сообщение",
});

showNotification({
    variant: "warning",
    title: "Предупреждение",
    subtitle: "Это предупреждение",
});

showNotification({
    variant: "error",
    title: "Ошибка",
    subtitle: "Это ошибка",
});
showNotification({
    variant: "success",
    title: "Успех",
    subtitle: "Это успешное сообщение",
});
