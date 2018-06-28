// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    
// Your code goes here!
   
    var height = $('#inputHeight').val();
    var width = $('#inputWidth').val();
    var row = "<tr></tr>";
    var column = "<td></td>";
    
    for(var n = 0; n < height; n ++ ){
        $("#pixelCanvas").append(row);               
    }

    $("tr").each(function(){
        
        for(var m = 0; m < width; m ++ ){
            $(this).append(column);
        }

    });
    
    
}

function clearGrid(){
    $("#pixelCanvas").find('*').remove();
};

$("#pixelCanvas").on('click', 'td',function(event){
    var pickedColor = $("#colorPicker").val();
    $(this).css("background-color", pickedColor);
    
});

$("#sizePicker").submit(function(){
    clearGrid();
    makeGrid();
    event.preventDefault();
});