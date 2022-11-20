import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";

export default defineUserConfig({
  title: 'Emerge Technology',
  head: [
    ['link', {rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico'}],
  ],
  
  theme: gungnirTheme({
    navbarTitle: 'emergetec',

    navbar: [
      {
        text: "Home",
        link: "/",
        icon: "fa-home"
      },
      {
        text: "Tags",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "Links",
        link: "/links/",
        icon: "fa-link"
      }
    ],

    homeHeaderImages: [
      {
        "path": "/home-bg/1.jpg",
        "mask": "rgba(40, 57, 101, .4)"
      },
      {
        "path": "/home-bg/2.jpg",
        "mask": "rgb(251, 170, 152, .2)"
      },
      {
        "path": "/home-bg/3.jpg",
        "mask": "rgb(251, 170, 152, .2)"
      },
      {
        "path": "/home-bg/4.jpg",
        "mask": "rgb(251, 170, 152, .2)"
      },
      {
        "path": "/home-bg/5.jpg",
        "mask": "rgb(251, 170, 152, .2)"
      }
    ],

    personalInfo: {
      name: "Tim Knapp",
      avatar: "/avatar.jpg",
      description: '(Retired) Developer.'
    },

    footer: `
      &copy; Emerge Technology 2001-2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  })
})
