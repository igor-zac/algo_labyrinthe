<template>
    <form>
        <div class="form-group row">
            <label for="size" class="col-6">Labyrinth size</label>
            <select class="form-control col-6" id="size" v-model="current_labyrinth_size">
                <option v-for="(value, name) in labyrinth_data"
                        :key="Object.keys(labyrinth_data).indexOf(name)"
                        :value="value">
                    {{name | sizeDisplay}}
                </option>
            </select>
        </div>
        <div class="form-group row">
            <label for="labyrinth" class="col-6">Labyrinth choice</label>
            <select class="form-control col-6" id="labyrinth" v-model="current_labyrinth">
                <option v-for="(value, name) in current_labyrinth_size"
                        :key="Object.keys(current_labyrinth_size).indexOf(name)"
                        :value="value">
                    {{ name }}
                </option>
            </select>
        </div>
    </form>
</template>

<script>
    export default {
        name: "Labyrinth_selector",
        data: function () {
            return {
                current_labyrinth_size: {},
                current_labyrinth: {}
            }
        },
        props: {
            labyrinth_data: Object
        },
        watch: {
            current_labyrinth: function(){
                this.$emit('labyrinth_chosen', this.current_labyrinth);
            },
            current_labyrinth_size: function(){
                this.current_labyrinth = this.current_labyrinth_size['ex-0'];
            }
        },
        filters: {
            sizeDisplay: function (value) {
                if (!value) return '';

                value = value.toString();
                return value + " x " + value;
            }
        },
        mounted() {
            this.current_labyrinth_size = this.labyrinth_data["3"];
        }
    }
</script>

<style scoped>
form {
    width: 100%;
    max-width: 300px;
    margin: auto;
}
</style>