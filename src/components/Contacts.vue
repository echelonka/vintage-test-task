<template>
    <section class="contacts container">
        <h1>Contacts</h1>
        <div class="container__columns">
            <div>
                <h2><span class="text--green">GMS</span> Headquarters</h2>
                <div class="contacts__columns">
                    <div>
                        <address>
                            <p>Global Message Services Ukraine LLC</p>
                            <p>Bundesstrasse 5 | 3rd Floor</p>
                            <p>6300 Zug</p>
                            <p>Switzerland</p>
                        </address>
                        <a href="tel:+41415446200" class="contacts__tel text--green">+41 41 544 62 00</a>
                    </div>
                    <div>
                        <p>Email</p>
                        <a href="mailto:info@gms-worldwide.com" class="text--green text--link">info@gms-worldwide.com</a>
                        <p>Send message</p>
                        <a href="viber://chat?service=1234" class="text--green text--link">Viber Us</a>
                        <p>Send from</p>
                        <a href="#" class="text--green text--link">Contact Us</a>
                    </div>
                </div>
            </div>
            <div>
                <h2>Technical support <span class="text--green">24/7</span></h2>
                <p>
                    GMS understands that it can be hard to follow all new technologies. We regularly provide for all our
                    clients educational trainings to make your operator`s business earn more and better though our best
                    practices.
                </p>
                <p><a href="tel:+41415446206" class="contacts__tel text--green">+41 41 544 62 06</a></p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Contacts'
    }
</script>

<style scoped lang="scss">
    @import '../scss/base/mixins';

    .contacts {
        &__columns {
            @include tablets {
                display: grid;
                grid-template-columns: repeat(2, 50%);
                grid-column-gap: 20px;
            }
        }

        &__tel {
            display: inline-block;
            font-size: 15.5px;
            @include tablets {
                margin: 25px 0 0;
                font-size: 26px;
                line-height: 1.3;
            }
        }
    }
</style>
