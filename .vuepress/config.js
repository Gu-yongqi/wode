module.exports = {
    title: "五阿哥不上朝",
    description: '热爱生活',
    dest: 'public',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'stylesheet', href: '/index.css' }],
        ['script', { type: 'text/javascript', src: '/index.js' }]
    ],
    theme: 'reco',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/', icon: 'reco-home' },
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
            // {
            //     text: 'Docs',
            //     icon: 'reco-message',
            //     link: '/docs/api.md'
            // },
            {
                text: 'Contact',
                icon: 'reco-message',
                items: [
                    { text: 'GitHub', link: 'https://github.com/Gu-yongqi', icon: 'reco-github' },
                    { text: 'BiliBili', link: 'https://space.bilibili.com/700906551', icon: 'reco-bilibili' },
                    { text: '3180244940', link: 'https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101559500&redirect_uri=https:%2F%2Fcpo.qq.com%2Fconnect%2Fcallback&scope=get_user_info', icon: 'reco-qq' },
                ]
            }
        ],
        // sidebar: {
        //     '/docs/': [
        //         'theme-reco',
        //         'theme',
        //         'api'
        //     ]
        // },
        type: 'blog',
        // 博客设置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: 'Tag' // 默认 “标签”
            }
        },
        friendLink: [{
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                // email: '1156743527@qq.com',
                // avatar: '',
                link: 'https://www.recoluan.com'
            },
            {
                title: 'vuepress',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                // avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
        ],
        logo: '/logo.png',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 自动形成侧边导航
        sidebar: 'auto',
        // 最后更新时间
        lastUpdated: 'Last Updated',
        // 作者
        author: '五阿哥不上朝',
        // 作者头像
        authorAvatar: '/logo.png',
        // 备案号
        record: '3180244940',
        // 项目开始时间
        startYear: '2022',
        /**
         * 密钥 (if your blog is private)
         */

        // keyPage: {
        //     keys: ['your password'],
        //     color: '#42b983',
        //     lineColor: '#42b983'
        // },

        /**
         * valine 设置 (if you need valine comment )
         */

        // valineConfig: {
        //   appId: '...',// your appId
        //   appKey: '...', // your appKey
        // }
    },
    markdown: {
        lineNumbers: true
    }
}