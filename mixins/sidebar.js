export default {
  methods: {
    mapTitle(title) {
      return {
        dashboard: '首页',
        bangumi: '番剧',
        'bangumi-list': '番剧列表',
        'bangumi-manager': '设置版主',
        'bangumi-managers': '版主列表',
        'bangumi-create': '创建番剧',
        video: '视频',
        'video-list': '视频列表',
        'video-trending': '播放排行',
        'video-create': '上架视频',
        cartoon: '漫画',
        'cartoon-list': '漫画列表',
        'cartoon-trending': '观看排行',
        role: '偶像',
        'role-list': '偶像列表',
        'role-create': '添加偶像',
        user: '用户',
        'user-dalao': '大佬列表',
        'user-search': '用户搜索',
        feedback: '反馈',
        'feedback-event': '用户反馈',
        'feedback-report': '用户举报',
        manager: '管理',
        'manager-control': '权限管理',
        'manager-setting': '权限设置'
      }[title]
    },
    mapIcon(icon) {
      // icons: https://fontawesome.com/icons?d=gallery&s=solid
      return {
        dashboard: 'tachometer-alt',
        bangumi: 'globe',
        'bangumi-list': 'th-list',
        'bangumi-manager': 'user-cog',
        'bangumi-managers': 'users',
        'bangumi-create': 'network-wired',
        video: 'video',
        'video-list': 'list-ol',
        'video-trending': 'signal',
        'video-create': 'cart-plus',
        cartoon: 'dragon',
        'cartoon-list': 'list',
        'cartoon-trending': 'chart-line',
        role: 'user-injured',
        'role-list': 'users',
        'role-create': 'cross',
        user: 'users',
        'user-dalao': 'crown',
        'user-search': 'search-location',
        feedback: 'feather-alt',
        'feedback-event': 'code-branch',
        'feedback-report': 'broadcast-tower',
        manager: 'cog',
        'manager-control': 'scroll',
        'manager-setting': 'dice-d20'
      }[icon]
    }
  }
}
