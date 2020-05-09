var vheader = new Vue({
    el: '#header',
    data: {
        menus: [
            { title: "主页", href: "#header" },
            { title: "下载", href: "#download" },
        ]
    }
});

var vmain = new Vue({
    el: '#main',
    data: {
        test: "XXXXXX",
        carousel: {
            title: "不来一发吗",
            small: "当前版本号 Ver 0.101",
            images: [
                "https://static.runoob.com/images/mix/img_fjords_wide.jpg",
                "https://static.runoob.com/images/mix/img_nature_wide.jpg",
            ],
        },
        feature: {
            title: "游戏特色",

        },
        updatelog: {
            title: "更新日志",
            logs: [
                {
                    date: "2019-05-01",
                    ver: "0.002",
                    items: [
                        ""
                    ],
                }, {
                    date: "2019-04-01",
                    ver: "0.001",
                    items: [
                        ""
                    ],
                }
            ]
        },
        note: {
            title: "功能",
        },
    }
});

var vfooter = new Vue({
    el: '#footer',
    data: {
        author: "苍星瞳",
        email: "cangxingtong@qq.com",
        year: new Date().getFullYear(),
    }
});