$('li').on('click', function(event){
    event.stopPropagation();
    let message = prompt("New input:");
    if (message.length > 0) this.innerHTML = message;
});

$('button').on('click', function(){
    $(this).prev().append('<li>New task<img src="./assets/add-user.png"></li>')
})

$('li').draggable({
    appendTo: $('ul'),
    connectToSortable: $('ul'),
    cursor: 'crosshair',
    delay: 200,
    opacity: 0.5,
    refreshPosition: true,
    revert: 'invalid',
    revertDuration: 300,
    snap: true
});     

$('ul').droppable({
    accept: $('li'),
});

$('ul').sortable({
    appendTo: $('ul'),
    connectWith: $('ul')
})