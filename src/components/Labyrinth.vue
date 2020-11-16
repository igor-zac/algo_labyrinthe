<template>
    <div>
        <table>
            <tr v-for="row in labyrinth_size" :key="row">
                <td v-for="column in labyrinth_size"
                    :key="column"
                    :style="cssVars(cell(row, column))">

                </td>
            </tr>
        </table>
        <div class="algorithms">
            <button class="btn btn-primary" @click="launch_dfs">DFS</button>
        </div>
    </div>
</template>

<script>
    import { dfs } from "../scripts/algo.js"

    export default {
        name: "Labyrinth",
        props: {
            labyrinth_data: Array
        },
        computed: {
            labyrinth: function() {
                return this.labyrinth_data.map(cell => ({ ...cell, visited: false}));
            },
            labyrinth_size: function() {
                return Math.sqrt(this.labyrinth.length);
            }
        },
        methods: {
            launch_dfs: function(){
                dfs(this.labyrinth, this.labyrinth[0]);
            },
            cell: function(row, column){
                return this.labyrinth[(row - 1) * this.labyrinth_size + column - 1];
            },
            cssVars: function (cell) {
                let cell_size = 400 / this.labyrinth_size;
                let border_style = 'solid red ' + ((this.labyrinth_size >= 10) ? '2px' : '3px');
                let background_color = (cell.posX === 0 && cell.posY === 0) ? 'orange' :
                    (cell.posX === this.labyrinth_size - 1 && cell.posY === this.labyrinth_size - 1) ? 'green' :
                        '#2c3e50';

                return {
                    '--height': cell_size + 'px',
                    '--width': cell_size + 'px',
                    '--background-color': background_color,
                    '--border-top': cell.walls[0] ? border_style : 'none',
                    '--border-right': cell.walls[1] ? border_style : 'none',
                    '--border-bottom': cell.walls[2] ? border_style : 'none',
                    '--border-left': cell.walls[3] ? border_style : 'none'
                }
            }
        }
    }
</script>

<style scoped>
    table {
        margin: auto;
    }

    td {
        block-size: border-box;
        width: var(--width);
        height: var(--height);
        background-color: var(--background-color);
        border-top: var(--border-top);
        border-right: var(--border-right);
        border-bottom: var(--border-bottom);
        border-left: var(--border-left);
    }

    .algorithms {
        margin-top: 20px;
    }

    .algorithms button {
        width: 80px;
    }
</style>