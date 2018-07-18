import project from './components/project.vue'
import addproject from './components/addProject.vue'
import addtrack from './components/addtrack.vue'
import showtrack from './components/track.vue'

export default [
    {path: '/', component: project},
    {path: '/addproject', component: addproject},
    {path: '/addtrack', component: addtrack},
    {path: '/showtrack', component: showtrack}
]
