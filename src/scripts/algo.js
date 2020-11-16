const cell_neighbours = array => cell =>{
    const neighbours = [];

    const array_side_length = Math.sqrt(array.length);
    const cell_index = array.indexOf(cell);

    const cell_above = (cell_index > array_side_length) ?
        array[cell_index - array_side_length] :
        null;
    const cell_on_right = (cell_index % array_side_length !== array_side_length - 1) ?
        array[cell_index + 1] :
        null;
    const cell_below = (cell_index < array.length - array_side_length) ?
        array[cell_index + array_side_length] :
        null;
    const cell_on_left = (cell_index % array_side_length !== 0) ?
        array[cell_index - 1] :
        null;

    if (cell.walls[0] === false && cell_above){
        // console.log('top added');
        neighbours.push(cell_above);
    }
    if (cell.walls[3] === false && cell_on_left){
        // console.log('left added');
        neighbours.push(cell_on_left);
    }
    if (cell.walls[1] === false && cell_on_right){
        // console.log('right added');
        neighbours.push(cell_on_right);
    }
    if (cell.walls[2] === false && cell_below){
        // console.log('bottom added');
        neighbours.push(cell_below);
    }

    return neighbours;
};

const dfs = (array, starting_cell) => {
    const neighbours = cell_neighbours(array);
    const stack = [];
    stack.push(starting_cell);

    while(stack.length){
        let current_cell = stack.pop();
        console.log("X: " + current_cell.posX + " || Y: " + current_cell.posY);
        for (let neighbour of neighbours(current_cell)){
            if (neighbour.visited === false){
                stack.push(neighbour);
                neighbour.visited = true;
            }

        }
    }
};

export {dfs}