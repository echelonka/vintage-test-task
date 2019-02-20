<template>
    <form method="POST" class="form" @submit.prevent="checkForm">
        <div v-for="(input, i) in inputs" :key="i" class="form-group">
            <input
                :type="input.type"
                :id="input.label"
                class="form-group__input"
                :name="input.name"
                v-model="inputValues[i]"
            >
            <label :for="input.label" class="form-group__label">{{input.label}}</label>
        </div>
        <div class="form-group form-group">
            <input type="checkbox" id="personal" v-model="agreement">
            <label for="personal" class="form-group__checkbox">I agree the processing of personal data</label>
        </div>
        <div class="form__errors" v-if="errors.length">
            <transition-group name="fade">
                <p v-for="error in errors" :key="error">{{error}}</p>
            </transition-group>
        </div>
        <button type="submit" class="form__submit-button" :disabled="loading">
            Get in Touch
        </button>
    </form>
</template>

<script>
    export default {
        name: 'Form',

        data: () => ({
            agreement: false,
            errors: [],
            loading: false,
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
            ],
            inputValues: []
        }),

        methods: {
            checkForm() {
                this.errors = []

                if (!this.agreement) return this.errors.push('Please, agree with terms and conditions.')
                /* Submit form if all inputs are filled. */
                if (this.inputs.reduce((a, b, i) => a && this.inputValues[i], true)) return this.submitForm()
                /* Show errors for empty inputs. */
                this.inputs.forEach((item, i) => {
                    if (!this.inputValues[i]) this.errors.push(`${item.label} cannot be blank.`)
                })
            },

            submitForm() {
                this.loading = true
                const data = {}
                this.inputs.forEach((item, i) => data[item.name] = this.inputValues[i])
                this.axios.post('/post', data).then(() => {
                    this.loading = false
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../scss/base/base';
    @import '../scss/components/form';

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
