import createRestHomePage from './restaurant'
import createTabs from './tabs'

function initialLoad(){
    createTabs()
    createRestHomePage();
}

export default initialLoad;