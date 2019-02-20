<template>
    <main id="app">
        <Contacts/>
        <Locations/>
        <ContactUs/>
    </main>
</template>

<script>
    import Contacts from './components/Contacts'
    import Locations from './components/Locations'
    import ContactUs from './components/ContactUs'

    export default {
        name: 'app',
        components: {
            Contacts,
            Locations,
            ContactUs
        }
    }
</script>

<style lang="scss">
    @import 'scss/main';
</style>
