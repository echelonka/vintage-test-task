<template>
    <section class="locations">
        <div class="container__columns container__columns--without-gap">
            <div class="container container--half">
                <h2>Our Offices</h2>
                <div>
                    <a
                        @click.prevent="changeCity(city)"
                        v-for="city in cities"
                        href="#"
                        :key="city"
                        :class="{'locations__city--active': city === selectedCity}"
                        class="text--link locations__city"
                    >
                        {{city}}
                    </a>
                </div>
                <transition name="slide-fade" mode="out-in">
                    <div class="locations__info" v-for="city in citiesInfo" :key="city.name" v-if="city.name === selectedCity">
                        <div class="locations__info-name">{{city.location.companyName}}</div>
                        <address class="locations__info-address">
                            <p v-for="address in city.location.address" :key="address">{{address}}</p>
                        </address>
                    </div>
                </transition>
            </div>
            <div>
                <GmapMap
                    :center="mapPosition"
                    :zoom="14"
                    :options="googleMapOptions"
                    map-type-id="roadmap"
                    style="width: 100%; height: 500px"
                    :styles="googleMapStyle"
                >
                    <GmapMarker
                        :position="mapPosition"
                        :options="markerOptions"
                    />
                </GmapMap>
            </div>
        </div>
    </section>
</template>

<script>
    import googleMapStyle from '../assets/googleMapStyle'
    import citiesInfo from '../assets/citiesInfo'
    import marker from '../assets/marker.png'

    export default {
        name: 'Locations',

        data: () => ({
            cities: citiesInfo.map(item => item.name),
            citiesInfo: citiesInfo,
            googleMapStyle: googleMapStyle,
            googleMapOptions: {
                disableDefaultUI: true,
                styles: googleMapStyle
            },
            markerOptions: {
                icon: {
                    url: marker
                }
            },
            mapPosition: {},
            selectedCity: ''
        }),

        methods: {
            changeCity(cityName) {
                this.selectedCity = cityName
                this.mapPosition = citiesInfo.find(city => city.name === cityName).coordinates
            }
        },

        computed: {
            officeLocation() {
                return citiesInfo.find(city => city.name === this.selectedCity).location
            }
        },

        created() {
            this.changeCity('Kyiv')
        }
    }
</script>

<style scoped lang="scss">
    @import '../scss/main';

    .locations {
        background-color: $grey;
        color: #fff;

        &__city {
            margin: 0 20px 0 0;
            color: #fff;
            font-size: 12px;
            transition: color $transition;
            &:hover, &--active {
                color: $green;
            }
        }

        &__info {
            margin: 40px 0 0;
            &-name {
                margin: 0 0 20px;
                font-weight: 300;
                font-size: 28px;
            }
            &-address {
                p {
                    font-weight: normal;
                    font-size: 12px;
                }
            }
        }
    }

    .slide-fade {
        &-enter-active, &-leave-active {
            transition: opacity $transition, transform $transition;
        }
        &-enter, &-leave-to {
            transform: translateX(10px);
            opacity: 0;
        }
    }
</style>
