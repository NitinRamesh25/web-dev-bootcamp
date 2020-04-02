/*
    Notes:
    1. Use .on instead of .click as .on will work on items that were created later as well.
    2. .on has to be on an element that already existed on page load, that's why we use $("ul").on 
        instead of $("li").on and then the second parameter inside the .on can be the actual element 
        that you wish to target.
 */

// Check-off specific todos
$("ul").on("click", "li", function (event) {
    // stop event from propagating to the parent in DOM tree
    event.stopPropagation();
    $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(300, function () {
        $(this).remove();
    });
});

// Creating a new todo
$("input[type='text'").keypress(function (event) {
    event.stopPropagation();
    if (event.which === 13) {
        // grapping input text
        var todoText = $(this).val();
        // appending new li to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
        // clear the input text
        $(this).val("");
    }
});