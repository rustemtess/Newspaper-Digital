import { IItem } from "./interface"

export const Items: Array<IItem> = [
    {
        id: 1,
        title: 'Главная',
        href: '/',
        allowItems: [2, 3]
    },
    {
        id: 2,
        title: 'Войти',
        href: '/auth',
        allowItems: [1]
    },
    {
        id: 3,
        title: 'Профиль',
        href: '/admin',
        allowItems: [1]
    }
];