/**
 * Создает SVG-иконку для уведомления в зависимости от типа
 * @param {string} variant - Тип уведомления ('info', 'warning', 'error', 'success')
 * @returns {string} SVG-иконка в виде строки
 */
const getIconSVG = (variant) => {
    const icons = {
        info: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.25C5.25 1.25 1.25 5.25 1.25 10C1.25 14.75 5.25 18.75 10 18.75C14.75 18.75 18.75 14.875 18.75 10C18.75 5.125 14.875 1.25 10 1.25ZM9.375 5H10.625V11.25H9.375V5ZM10 15.25C9.5 15.25 9 14.75 9 14.25C9 13.75 9.375 13.25 10 13.25C10.5 13.25 11 13.75 11 14.25C11 14.75 10.5 15.25 10 15.25Z" fill="#4851d9"/></svg>`,
        warning: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.25 2.5H3.75C3.41848 2.5 3.10054 2.6317 2.86612 2.86612C2.6317 3.10054 2.5 3.41848 2.5 3.75V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V3.75C17.5 3.41848 17.3683 3.10054 17.1339 2.86612C16.8995 2.6317 16.5815 2.5 16.25 2.5ZM10 5C10.1854 5 10.3667 5.05498 10.5208 5.158C10.675 5.26101 10.7952 5.40743 10.8661 5.57873C10.9371 5.75004 10.9557 5.93854 10.9195 6.1204C10.8833 6.30225 10.794 6.4693 10.6629 6.60041C10.5318 6.73152 10.3648 6.82081 10.1829 6.85699C10.001 6.89316 9.81254 6.87459 9.64123 6.80364C9.46993 6.73268 9.32351 6.61252 9.2205 6.45835C9.11748 6.30418 9.0625 6.12292 9.0625 5.9375C9.0625 5.68886 9.16127 5.4504 9.33709 5.27459C9.5129 5.09877 9.75136 5 10 5ZM12.5 15.0781H7.5V13.6719H9.29688V10.0781H8.125V8.67188H10.7031V13.6719H12.5V15.0781Z" fill="#d2c900"/></svg>`,
        error: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.25C5.125 1.25 1.25 5.125 1.25 10C1.25 14.875 5.125 18.75 10 18.75C14.875 18.75 18.75 14.875 18.75 10C18.75 5.125 14.875 1.25 10 1.25ZM13.375 14.375L5.625 6.625L6.625 5.625L14.375 13.375L13.375 14.375Z" fill="#e5341d"/></svg>`,
        success: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.0625 9.91412L8.9375 12.7891L13.1875 8.53912L12.5391 7.89062L8.9375 11.4922L7.46094 10.0156L6.8125 10.6641L6.0625 9.91412ZM10 1.25C5.125 1.25 1.25 5.125 1.25 10C1.25 14.875 5.125 18.75 10 18.75C14.875 18.75 18.75 14.875 18.75 10C18.75 5.125 14.875 1.25 10 1.25Z" fill="#0cad39"/></svg>`,
    };
    return icons[variant] || icons.info;
};

/**
 *Функция генерация элемента
 * @param {object} obj - принимает объект с информацией об уведомление
 */
export function showNotification(obj) {
    const template = `<div class="notification notification-${obj.variant}">
    <span class="notification-icon">${getIconSVG(obj.variant)}</span>
    <div class="notification-content">
    <p class="notification-title">${obj.title}</p>
    <p class="notification-subtitle">${obj.subtitle}</p>
    </div>
    <button class="notification-button"><img src="/src/images/delete-icon.svg" alt="icon-delete"></button>
    </div>`;

    window.document.body.insertAdjacentHTML("beforeend", template);
    checkElement();
}
