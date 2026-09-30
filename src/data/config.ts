import type { IconType } from 'react-icons';
import {
    FaTelegramPlane, FaInstagram, FaDiscord,
    FaSpotify, FaSteam, FaXbox, FaGithub, FaGift
} from 'react-icons/fa';

export interface LinkItem {
    id: string;
    title: string;
    url: string;
    icon: IconType;
    spanClass: string;       // Занимаемые ячейки (col-span & row-span)
    cardStyle: string;       // Пастельный фон, цвет границы и текста
    iconSizeClass: string;   // Размер логотипа
}

export interface ProfileData {
    name: string;
    nicknames: string[];
    status: string;
    avatarUrl: string;
    links: LinkItem[];
}

export const profile: ProfileData = {
    name: "Ann Doronina",
    nicknames: ["saraht", "sarahtheory"],
    status: "Backend Engineer | Go & PHP",
    avatarUrl: "https://avatars.githubusercontent.com/u/40212039?v=4",
    links: [
        {
            id: 'github',
            title: 'GitHub',
            url: 'https://github.com/Sarahttheory',
            icon: FaGithub,
            // Большой квадрат (2х2)
            spanClass: 'col-span-2 row-span-2',
            cardStyle: 'bg-[#18191c] text-[#e2e8f0] border-[#2a2d32]',
            iconSizeClass: 'w-16 h-16'
        },
        {
            id: 'telegram',
            title: 'Telegram',
            url: 'https://t.me/Sarahtheory',
            icon: FaTelegramPlane,
            // Горизонтальный прямоугольник (2х1)
            spanClass: 'col-span-2 row-span-1',
            cardStyle: 'bg-[#11212d] text-[#38bdf8] border-[#1d3548]',
            iconSizeClass: 'w-10 h-10'
        },
        {
            id: 'instagram',
            title: 'Instagram',
            url: 'https://www.instagram.com/sarahttheory?stkn=NjVxcjI2azhjZzh6',
            icon: FaInstagram,
            // Маленький квадрат (1х1)
            spanClass: 'col-span-1 row-span-1',
            cardStyle: 'bg-[#291720] text-[#f472b6] border-[#442233]',
            iconSizeClass: 'w-10 h-10'
        },
        {
            id: 'spotify',
            title: 'Spotify',
            url: 'https://open.spotify.com/user/31hxbvlzcs3o6piqb5trbhrxzcy4?si=5644934b3ddb46d9',
            icon: FaSpotify,
            // Маленький квадрат (1х1)
            spanClass: 'col-span-1 row-span-1',
            cardStyle: 'bg-[#122419] text-[#4ade80] border-[#1b3a27]',
            iconSizeClass: 'w-10 h-10'
        },
        {
            id: 'discord',
            title: 'Discord',
            url: 'https://discord.gg/tJaRN3sY',
            icon: FaDiscord,
            // Вертикальный прямоугольник (2х2 или 2х1)
            spanClass: 'col-span-2 row-span-1',
            cardStyle: 'bg-[#181a2e] text-[#818cf8] border-[#272b4d]',
            iconSizeClass: 'w-10 h-10'
        },
        {
            id: 'steam',
            title: 'Steam',
            url: 'https://steamcommunity.com/id/SarahTheory/',
            icon: FaSteam,
            // Вертикальная плашка (1х2)
            spanClass: 'col-span-1 row-span-2',
            cardStyle: 'bg-[#131b26] text-[#60a5fa] border-[#202e40]',
            iconSizeClass: 'w-12 h-12'
        },
        {
            id: 'xbox',
            title: 'Xbox',
            url: 'https://www.xbox.com/ru-RU/play/user/Saraht3570',
            icon: FaXbox,
            // Вертикальная плашка (1х2)
            spanClass: 'col-span-1 row-span-2',
            cardStyle: 'bg-[#142217] text-[#86efac] border-[#203a26]',
            iconSizeClass: 'w-12 h-12'
        },
        {
            id: 'wishlist',
            title: 'Wishlist',
            url: 'https://followish.io/mywishlist/3bsouvuhg5wz5k',
            icon: FaGift,
            // Вертикальный прямоугольник (2х2 или 2х1)
            spanClass: 'col-span-2 row-span-1',
            cardStyle: 'bg-[#1c1915] text-[#eab308]/70 border-[#2b261f]',
            iconSizeClass: 'w-10 h-10'
        }
    ]
};