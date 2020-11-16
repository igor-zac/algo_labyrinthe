<template>
  <div id="app">
    <h1>Labyrinth's game</h1>
    <Labyrinth_selector :labyrinth_data="labyrinth_data" @labyrinth_chosen="labyrinthChosen"/>
    <Labyrinth :labyrinth_data="selected_labyrinth"/>
  </div>
</template>

<script>
  import labyrinthData from "./data/labyrinthes"

  import Labyrinth_selector from "./components/Labyrinth_selector";
  import Labyrinth from "./components/Labyrinth";

export default {
  name: 'App',
  components: {
    Labyrinth_selector,
    Labyrinth
  },
  data: function(){
    return {
      labyrinth_data: labyrinthData,
      selected_labyrinth: []
    }
  },
  methods: {
    labyrinthChosen: function(labyrinth){
      this.selected_labyrinth = labyrinth;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
