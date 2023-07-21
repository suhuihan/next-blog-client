/*
 * @Descripttion: 
 * @version: 
 * @Author: WangPeng
 * @Date: 2023-04-16 01:57:34
 * @LastEditors: WangPeng
 * @LastEditTime: 2023-07-21 10:34:41
 */
// 网站时间轴
export const timeAixsList = [
    {
        id: 1,
        time: "2021.06.01",
        title: "申请域名 wp-boke.work",
    },
    {
        id: 2,
        time: "2021.08.01",
        title: "域名备案通过",
    },
    {
        id: 3,
        time: "2021.11.11",
        title: "blog第一版发布",
    },
    {
        id: 4,
        time: "2022.03.11",
        title: "blog第二版发版",
    },
    {
        id: 5,
        time: "2023.02.11",
        title: "NextJS重构，blog第三版预发布，域名 shimmer.wp-boke.work",
    },
    {
        id: 6,
        time: "2023.03.11",
        title: "NextJS重构，blog第三版正式发布，转移到正式域名wp-boke.work",
    },
    {
        id: 7,
        time: "2023.05.05",
        title: "网站logo正式发布",
    },
    {
        id: 8,
        time: "2023.05.24",
        title: "正式上线网站更多页，用于网站新功能开发",
    },
];
// 职业概述
export const web_desc = '作为一名Web前端开发工程师，我负责设计、开发和维护Web应用程序的用户界面，使之呈现出美观、易用、高效的特性。我能够熟练运用HTML、CSS、JavaScript等前端技术和工具，同时也具备与UI设计师、后端工程师和产品经理等多个团队成员协作的能力。在我的工作中，我不断学习和跟进前沿技术和最佳实践，以提高开发效率和开发质量。'

// 技能与工具
export const skillList = [
    {
        id: 1,
        value: 'HTML、CSS、JavaScript'
    },
    {
        id: 2,
        value: 'React、Vue.js'
    },
    {
        id: 3,
        value: 'TypeScript'
    },
    {
        id: 4,
        value: 'Ant Design、Element UI、Echarts、Antv'
    },
    {
        id: 5,
        value: 'Redux、Vuex、MobX'
    },
    {
        id: 6,
        value: 'Node.js、Next.js、Nest.js、Koa、Egg.js'
    },
    {
        id: 7,
        value: 'Webpack、Babel/Gulp'
    },
    {
        id: 8,
        value: 'Sass、Less'
    },
    {
        id: 9,
        value: 'MySQL'
    },
    {
        id: 10,
        value: 'RESTful API、计算机网络'
    }
];

// 工作经历
export const workList = [
    {
        id: 1,
        companyName: '华兴资本',
        workTime: '2021.8 - 至今',
        role: 'Web前端开发工程师',
        place: '北京',
        operatingDuty: [
            {
                id: 1,
                value: '创建并维护Web前端开发项目的代码库，协作实施时间表；'
            },
            {
                id: 2,
                value: '跟踪并了解前端开发技术的发展，维护和优化现有项目；'
            }, {
                id: 3,
                value: '协助测试团队进行测试，并解决测试过程中的问题和反馈；'
            }, {
                id: 4,
                value: '设计和开发Web前端组件，提高开发效率；'
            }, {
                id: 5,
                value: '与UI设计师和产品经理合作，确保网站的外观和功能符合设计要求和用户期望；'
            }, {
                id: 6,
                value: '编写文档和注释，以便其他开发人员能够轻松地维护和扩展网站；'
            }, {
                id: 7,
                value: '优化网站的性能和速度，提高用户体验。'
            }
        ]
    },
    {
        id: 2,
        companyName: '乐纯悠品',
        workTime: '2018.9 - 2021.8',
        role: 'Web前端开发工程师',
        place: '北京',
        operatingDuty: [
            {
                id: 1,
                value: '设计和开发高可用性和可访问性的网站，确保良好的用户体验；'
            },
            {
                id: 2,
                value: '使用HTML、CSS和JavaScript等技术编写高质量的代码；'
            },
            {
                id: 3,
                value: '与后端开发人员协作，确保正确的服务器通信和交互；'
            },
            {
                id: 4,
                value: '使用React和Vue.js等框架开发网站前端，提高开发效率和代码质量；'
            },
            {
                id: 5,
                value: '对网站进行测试和调试，确保稳定性和安全性；'
            },
            {
                id: 6,
                value: '解决网站开发过程中的各种问题；'
            },
            {
                id: 7,
                value: '编写文档和注释，以便其他开发人员能够轻松地维护和扩展网站。'
            }
        ]
    }
];

// 项目经验
export const projectList = [
    {
        id: 3,
        projectName: 'Dashboard',
        projectTime: '2023.1 - 至今',
        desc: '该项目是为公司领导提供数据可视化展示的一个网页，主要用于查看公司各项运营指标和财务指标等信息。',
        lectotype: 'React + Antd + Antd Mobile + Echarts',
        jobOrContribute: [
            {
                id: 1,
                value: '担任该项目的主要开发人员，负责整个项目的架构和开发环境的搭建，使用 React、antd、antd mobile 和 echarts 等技术实现数据可视化效果，确保整个项目的高效运行；'
            },
            {
                id: 2,
                value: '开发了客户运营指标、基金运营指标、投行运营指标和财务指标等模块，以图表化形式展示数据，方便领导查看和分析公司的运营情况。同时，为了满足领导查看详细数据的需求，开发了相应的下钻弹窗，方便领导快速获取更深入的数据信息；'
            },
            {
                id: 3,
                value: '基于React 针对不同设备的展示需求，适配了 PC、iPad 和大屏设备的展示，使用 antd 和 antd mobile 等 UI 库确保了页面的美观和易用性；'
            },
            {
                id: 4,
                value: '优化了项目的代码结构和性能，提高了代码的可维护性和扩展性，确保了项目的长期稳定性和可持续发展性。同时，与后端开发人员密切配合，保证前后端接口的顺畅和数据的准确性；'
            },
            {
                id: 5,
                value: '通过该项目，公司领导能够快速了解公司的运营情况和财务状况，对公司的决策和发展提供了重要的参考依据，取得了很好的效果和反响。'
            },
        ],
        projectResults: [
            {
                id: 1,
                value: '实现了数据可视化展示，包括客户运营指标、基金运营指标、投行运营指标和财务指标等模块；'
            },
            {
                id: 2,
                value: '实现了下钻弹窗，方便领导查看详细数据信息；'
            },
            {
                id: 3,
                value: '适配了不同设备的展示需求，确保了页面的美观和易用性；'
            },
            {
                id: 4,
                value: '优化了项目的代码结构和性能，提高了代码的可维护性和扩展性；'
            },
            {
                id: 5,
                value: '帮助公司领导快速了解公司的运营情况和财务状况，为公司的决策和发展提供了重要的参考依据。'
            },
        ]
    },
    {
        id: 2,
        projectName: 'Solar移动端',
        projectTime: '2022.4 - 至今',
        desc: '为了方便公司内部员工在移动端的数据查询和筛选，我们在Solar数据中台的基础上开发了移动端应用程序，即Solar移动端。该应用程序使用React技术构建，实现了自适应屏幕布局，能够适应不同尺寸和分辨率的移动设备。',
        lectotype: 'UmiJS + React + Antd Mobile + Echarts',
        jobOrContribute: [
            {
                id: 1,
                value: '参与了Solar移动端应用程序的开发工作，主要负责实现界面和交互方面的需求；'
            },
            {
                id: 2,
                value: '使用React和相关的插件和库，开发了可重用的组件和模块，加速了开发过程；'
            },
            {
                id: 3,
                value: '基于React Router和Redux等插件和库，管理了Solar移动端应用程序的路由、状态和数据请求等方面的需求；'
            },
            {
                id: 4,
                value: '负责应用程序的自适应屏幕布局，使得应用程序能够在不同尺寸和分辨率的移动设备上正常显示；'
            },
            {
                id: 5,
                value: '参与了测试和调试工作，保证应用程序的质量和稳定性。'
            },
        ],
        projectResults: [
            {
                id: 1,
                value: '成功开发并发布了Solar移动端应用程序，方便了公司内部员工在移动设备上的数据查询和筛选；'
            },
            {
                id: 2,
                value: '应用程序使用React技术构建，具有良好的组件化和可重用性，加速了开发过程；'
            },
            {
                id: 3,
                value: '应用程序实现了自适应屏幕布局，适应不同尺寸和分辨率的移动设备，提高了用户体验；'
            },
            {
                id: 4,
                value: '应用程序经过测试和调试，保证了其质量和稳定性，得到了公司内部员工和客户的广泛使用和高度评价。'
            },
        ]
    },
    {
        id: 1,
        projectName: 'Solar (pc)',
        projectTime: '2021.8 - 至今',
        desc: 'Solar项目是一个数据中台项目，旨在整合公司的其他数据平台，为客户的数据查询和筛选提供更加高效的解决方案。项目目标是建立一个可扩展、易维护和可靠的数据中台平台，为公司内部员工和外部客户提供高质量的数据服务。为了实现这个目标，Solar项目分为多个阶段，包括需求调研、系统设计、开发实现和测试部署等。项目团队由多个部门和职能组成，成功交付，为公司的数据服务提供了更加高效、便捷和可靠的解决方案。',
        lectotype: 'UmiJS + React + Antd + Echarts',
        jobOrContribute: [
            {
                id: 1,
                value: '作为前端开发工程师，负责开发和维护Solar数据中台的前端应用程序；'
            },
            {
                id: 2,
                value: '使用React框架进行前端应用程序的开发和设计；'
            },
            {
                id: 3,
                value: '与项目团队合作，了解用户需求并根据需求开发前端应用程序；'
            },
            {
                id: 4,
                value: '参与系统设计和技术选型，为项目提供前端技术选型建议；'
            },
            {
                id: 5,
                value: '优化前端代码以提高应用程序的性能和响应速度；'
            },
            {
                id: 6,
                value: '与后端开发工程师紧密合作，确保前端和后端代码能够无缝衔接；'
            },
            {
                id: 7,
                value: '提供前端技术支持和协助，为项目团队和其他相关部门提供技术指导和解决方案；'
            },
            {
                id: 8,
                value: '通过团队合作和沟通，确保项目在预定时间内交付，并达到高质量的标准。'
            },
        ],
        projectResults: [
            {
                id: 1,
                value: '成功建立了一个可扩展、易维护和可靠的数据中台平台，为公司内部员工和外部客户提供高质量的数据服务；'
            },
            {
                id: 2,
                value: '整合了公司的其他数据平台，提供了更加高效的数据查询和筛选解决方案；'
            },
            {
                id: 3,
                value: '集成了协同和管理配置的功能，为客户的数据使用和管理提供了全面的解决方案；'
            },
            {
                id: 4,
                value: '建立了完整的项目开发流程和质量控制体系，确保项目在预定时间内交付，并达到高质量的标准；'
            },
            {
                id: 5,
                value: '提供了优质的技术支持和服务，为客户提供更好的体验和服务；'
            },
            {
                id: 6,
                value: 'Solar项目被公司内部广泛使用，并得到了员工和客户的高度评价。项目的成功建设为公司的数据服务提供了更加高效、便捷和可靠的解决方案，为公司的业务发展做出了重要贡献。'
            },
        ]
    },
    {
        id: 4,
        projectName: '乐纯酸奶',
        projectTime: '2018.9 - 2021.8',
        desc: '该项目旨在为乐纯酸奶在线上推广提供支持，通过建立官网介绍页面，让用户更便捷地了解乐纯酸奶的品牌、产品、营养成分等信息。',
        lectotype: 'React + Redux',
        jobOrContribute: [
            {
                id: 1,
                value: '担任模块开发，负责乐纯品牌、产品、营养价值等模块的开发和迭代优化；'
            },
            {
                id: 2,
                value: '使用React框架和Redux库实现页面的组件化和数据状态管理，提高页面的可维护性和扩展性；'
            },
            {
                id: 3,
                value: '使用组件库和CSS3动画效果增强页面的交互性和可视性，提升用户访问体验；'
            },
            {
                id: 4,
                value: '通过不断迭代优化，完善了乐纯品牌、产品、营养价值等模块，提升了页面性能和用户体验；'
            },
            {
                id: 5,
                value: '参与项目上线后的维护和BUG修复，保证项目的稳定性和可用性。'
            },
        ],
        projectResults: [
            {
                id: 1,
                value: '成功上线了乐纯酸奶官网介绍页面，为在线上推广乐纯酸奶提供了有力的支持；'
            },
            {
                id: 2,
                value: '提升了用户了解乐纯酸奶的便捷性，增强了用户对乐纯酸奶品牌的信任感；'
            },
            {
                id: 3,
                value: '不断进行优化和迭代，提升了页面性能和用户体验，有效促进了营销效果；'
            },
        ]
    },
    {
        id: 5,
        projectName: '乐纯酸奶移动端',
        projectTime: '2018.9 - 2021.8',
        desc: '乐纯酸奶m站是为了便捷销售乐纯酸奶而设计的移动端网站，旨在提供用户在线上购买乐纯酸奶的便捷体验。该项目的主要目标是提高乐纯酸奶的线上销售量，增强品牌的知名度和用户的购买体验。',
        lectotype: 'React + React Router + Redux + JavaScript + CSS',
        jobOrContribute: [
            {
                id: 1,
                value: '开发和优化了多个页面和模块，如商品列表、商品详情、购物车、订单支付等，保证了用户在m站的流畅体验；'
            },
            {
                id: 2,
                value: '负责与后端开发人员对接，实现了前后端数据的交互，并且通过redux进行状态管理，提高了项目的代码复用性和可维护性；'
            },
            {
                id: 3,
                value: '负责页面的性能优化，如使用lazyload减少首屏加载时间、压缩图片减少页面体积等，提高了页面的加载速度和用户体验；'
            },
            {
                id: 4,
                value: '参与了项目的上线和后续的维护工作，及时修复了项目中出现的问题和bug，并持续对项目进行优化，保证了m站的稳定性和功能的完善性。'
            },
        ],
        projectResults: [
            {
                id: 1,
                value: '通过简洁明了的页面设计和操作流程，提高了用户的购买体验和转化率；'
            },
            {
                id: 2,
                value: '通过移动端的设计，提供了更加便捷的访问方式，使得用户可以随时随地浏览和购买产品；'
            },
            {
                id: 3,
                value: '上线后，乐纯酸奶移动端m站得到了用户和公司的高度认可，极大地提升了乐纯酸奶的销售量和品牌影响力。'
            },
        ]
    },
    {
        id: 6,
        projectName: '乐纯(产品平台)',
        projectTime: '2018.9 - 2021.8',
        desc: '为了方便公司内部人员操作，管理乐纯平台用户权限及管理员权限，开发了一款后台管理系统。',
        lectotype: 'React + Ant Design + Redux',
        jobOrContribute: [
            {
                id: 1,
                value: '负责与后端对接接口，实现数据的交互；'
            },
            {
                id: 2,
                value: '开发用户权限及管理员权限的管理功能，包括新增、编辑、删除等操作；'
            },
            {
                id: 3,
                value: '实现用户审核及数据统计功能，为管理员提供数据分析支持；'
            },
            {
                id: 4,
                value: '优化系统性能，提高用户体验。'
            },
        ],
        projectResults: [
            {
                id: 1,
                value: '实现了用户审核及数据统计功能，为管理员提供数据分析支持；'
            },
            {
                id: 2,
                value: '通过对系统性能的优化，提高了用户体验，获得了公司内部人员的好评；'
            },
            {
                id: 3,
                value: '系统安全性得到了保障，用户权限及管理员权限的管理功能得到了充分应用。'
            },
        ]
    },
];

// 教育经历
export const schoolUndergo = [
    {
        id: 1,
        schoolName: '山西农业大学信息学院',
        specialityName: '计算机科学与技术',
        education: '本科',
        time: '2014-07 ~ 2018-09'
    },
]

// 我的项目
export const myProject = [
    {
        id: 1,
        projectName: '个人技术博客',
        projectTime: '2019.10 - 至今',
        lectotype: 'React + Antd + NextJS + Markdown + SEO',
        desc: '个人技术博客是我独立开发的博客网站，主要用于记录和分享自己在前端开发、技术学习等方面的心得和经验。该网站采用了Next.js框架进行开发，支持实时编辑和预览。',
        jobOrAchievement: '我负责了整个博客网站的搭建、页面设计和开发、SEO优化等。在项目中，我实现了博客文章的分类、搜索、评论功能，并采用Egg.js和MySQL搭建了后端，实现了用户注册和登录、文章管理等功能。通过精心的设计和不断的优化，使博客网站具有优秀的用户体验和较高的访问速度。'
    },
    {
        id: 2,
        projectName: '博客后台管理平台',
        projectTime: '2019.10 - 至今',
        lectotype: 'Client：Next.js + React + Ant Design + Umi.js Server：Egg.js + MySQL',
        desc: '作为一个独立开发者，我想要拥有一个自己的技术博客，来分享自己的技术经验，同时也想要一个方便管理的后台管理平台来对博客内容进行管理。',
        jobOrAchievement: '我负责了整个项目的设计和开发，并完成了后台管理系统的各项功能，包括文章管理、分类管理、标签管理等。在项目开发过程中，我还使用了git进行版本控制，同时采用了敏捷开发的方式，不断迭代完善，确保项目高质量的交付。'
    },
    {
        id: 3,
        projectName: '率土之滨玩家管理平台',
        projectTime: '2023.3 - 至今',
        lectotype: 'Client：Umi.js + React + Ant Design Server：Nest.js + MySQL',
        desc: '《率土之滨》是一款深受玩家喜爱的策略游戏，其中最重要的元素之一是组建团队、社团或公会，共同完成游戏中的任务和挑战。为了提高游戏的可玩性和趣味性，设计一个系统，为《率土之滨》的玩家提供一套成员管理的系统机制，包含任务平台、奖池系统、抽奖系统、人员管理、团队管理、会员管理等功能。',
        jobOrAchievement: '目前项目刚刚建项，正在持续开发中...'
    },
];

// 自我评价
export const about = '作为一名热爱前端开发的工程师，我对技术始终保持着敬畏之心，并且不断学习新的知识和技能，以提高自己的技术水平和工作效率。我注重团队合作，乐于分享和交流，能够快速融入团队并且和其他成员良好协作，以达到共同的目标。同时，我有较强的问题解决能力和自主学习能力，在遇到挑战和困难时能够冷静应对，通过不断尝试和探索找到最优解决方案。我希望能够在未来的工作中继续发挥自己的优势，并且不断追求进步和提高。';

// 更多列表
export const moreList = [
    {
        id: "resume",
        title: "我的简历",
        desc: "我的个人简历",
        url: "/resume",
    },
    {
        id: "visitor",
        title: "访客列表",
        desc: "访客的信息",
        url: "/visitor",
    },
    {
        id: "friendly-links",
        title: "友情链接",
        desc: "快来互链吧！！！",
        url: "/friendly-links",
    },
    {
        id: "start-pages",
        title: "起始页",
        desc: "替代传统搜索首页，提供更多的可配置设置",
        url: "https://start.wp-boke.work",
    },
    {
        id: "stats.uptimerobot",
        title: "页面状态监控",
        desc: "监控页面的状态，提供实时的预告",
        url: "https://stats.uptimerobot.com/QxJWAuB6Nx",
    },
    // {
    //     id: "audiovisuals",
    //     title: "音乐&MV",
    //     desc: "我喜欢的一些音乐和mv",
    //     url: "/audiovisuals",
    // },
];