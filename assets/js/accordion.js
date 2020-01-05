$(document).ready(function() {

    /*Checks for for certain classes when a headline is clicked and changes
    these in order to open/close a section using css styling. Ensures only
    one section is open at a time and when one opens, all other sections are
    closed. Also changes the applicable icon (arrow) to point into the right
    direction */

    $("#rm-heading").on("click", function() {
        if ($("#rm-content").hasClass("item-closed")) {
            $("#rm-chevron-icon").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $("#ror-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#dd-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#v-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#rm-content").removeClass("item-closed").addClass("item-opened");
            $("#ror-content").removeClass("item-opened").addClass("item-closed");
            $("#dd-content").removeClass("item-opened").addClass("item-closed");
            $("#v-content").removeClass("item-opened").addClass("item-closed");
        }
        else {
            $("#rm-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#rm-content").removeClass("item-opened").addClass("item-closed");
        }
    });

    $("#ror-heading").on("click", function() {
        if ($("#ror-content").hasClass("item-closed")) {
            $("#ror-chevron-icon").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $("#rm-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#dd-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#v-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#ror-content").removeClass("item-closed").addClass("item-opened");
            $("#rm-content").removeClass("item-opened").addClass("item-closed");
            $("#dd-content").removeClass("item-opened").addClass("item-closed");
            $("#v-content").removeClass("item-opened").addClass("item-closed");
        }
        else {
            $("#ror-content").removeClass("item-opened").addClass("item-closed");
            $("#ror-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
        }
    });

    $("#dd-heading").on("click", function() {
        if ($("#dd-content").hasClass("item-closed")) {
            $("#dd-chevron-icon").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $("#rm-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#ror-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#v-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#dd-content").removeClass("item-closed").addClass("item-opened");
            $("#rm-content").removeClass("item-opened").addClass("item-closed");
            $("#ror-content").removeClass("item-opened").addClass("item-closed");
            $("#v-content").removeClass("item-opened").addClass("item-closed");
        }
        else {
            $("#dd-content").removeClass("item-opened").addClass("item-closed");
            $("#dd-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
        }
    });

    $("#v-heading").on("click", function() {
        if ($("#v-content").hasClass("item-closed")) {
            $("#v-chevron-icon").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $("#rm-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#ror-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#dd-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#v-content").removeClass("item-closed").addClass("item-opened");
            $("#rm-content").removeClass("item-opened").addClass("item-closed");
            $("#ror-content").removeClass("item-opened").addClass("item-closed");
            $("#dd-content").removeClass("item-opened").addClass("item-closed");
        }
        else {
            $("#v-content").removeClass("item-opened").addClass("item-closed");
            $("#v-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
        }
    });   

});