import Vue from 'vue'
import VeLine from 'v-charts/lib/line.common'
import VeHistogram from 'v-charts/lib/histogram.common'
import Element from 'element-ui/lib/element-ui.common'
import Icon from 'vue-awesome/components/Icon.vue'
import BangumiSearch from '~/components/search/BangumiSearch'
import UserSearch from '~/components/search/UserSearch'
import Pagination from '~/components/Pagination'
import Dialog from '~/components/Dialog'
require('vue-awesome/icons')

Vue.component('v-icon', Icon)
Vue.use(Element)
Vue.component(VeLine.name, VeLine)
Vue.component(VeHistogram.name, VeHistogram)
Vue.component(BangumiSearch.name, BangumiSearch)
Vue.component(UserSearch.name, UserSearch)
Vue.component(Pagination.name, Pagination)
Vue.component(Dialog.name, Dialog)
