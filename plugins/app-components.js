import Vue from 'vue'

//UI
import Intro from '~/components/UI/Intro'
import Message from '~/components/UI/Message'
import PostsList from '~/components/blog/PostsList'
//Controls
import appButton from '~/components/UI/controls/Button'
import appInput from '~/components/UI/controls/Input'
import appTextArea from '~/components/UI/controls/TextArea'

//UI
Vue.component('Intro', Intro)
Vue.component('Message', Message)
Vue.component('PostsList', PostsList)
//Controls
Vue.component('appButton', appButton)
Vue.component('appInput', appInput)
Vue.component('appTextArea', appTextArea)
