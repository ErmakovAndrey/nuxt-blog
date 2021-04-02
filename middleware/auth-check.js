export default function(context) {
    if (process.browser) {
        context.store.dispatch('initAuth', null)
    } else {
        // this.$store.dispatch('initAuth', context.req)
    }
    
}