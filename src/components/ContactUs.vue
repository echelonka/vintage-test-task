<template>
    <section class="contact-us">
        <div class="container">
            <h2 class="text--white">Contact Us</h2>
            <div class="container__columns">
                <Form/>
                <div class="contact-us__info">
                    <p>
                        Please tell us more about your request and give us info about your company and country
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Form from './Form'

    export default {
        name: 'ContactUs',
        components: {
            Form
        },

        data: () => ({
            inputs: [
                {
                    label: 'Name',
                    type: 'text',
                    name: 'name'
                },
                {
                    label: 'Phone',
                    type: 'tel',
                    name: 'phone'
                },
                {
                    label: 'E-mail',
                    type: 'email',
                    name: 'email'
                }
            ]
        })
    }
</script>

<style scoped lang="scss">
    .contact-us {
        background-image: url('../assets/pattern.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        &__info {
            p {
                font-weight: normal;
                font-size: 18px;
            }
        }
    }
</style>
