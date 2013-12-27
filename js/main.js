define(["jquery",'xnCarousel'],
function ($) {
	"use strict";

var carousel = new Carousel(".viewport.photo-carousel",{
                touchEnabled: false,
                pageSize: 4,
                pagingIndicators: true,
                animationType: 'slide',
                moveSpeed: 500,
                avoidLeftRightMargins: true,
                itemTemplate: itemTemplate
            });

            // Modification API

            function notify(text) {
                $("#output-message").removeClass('hide');
                $("#output-message").html("<i>" + text + "</i><br>");
            }

            $("#btnAddItem").click(function(e) {
                var total = carousel.getItemCount();
                carousel.addItem({
                    "id": total,
                    "name": "Item " + total,
                    "thumbnailURL": "http://static-media.fox.com/img/Fox.com/105/703/TheFollowing_FOL106_2500_145x80_19477059529.jpg",
                    "airdate": "2013-09-22",
                    "expirationDays": 5 + total
                });

                notify("Item Added");
            });

            $("#btnRemoveFirst").click(function(e) {
                carousel.removeItem(0);
                notify("Item 0 removed");
            });

            $("#btnRemoveSelected").click(function(e) {
                carousel.removeItem(carousel.getSelectedIndex());
                notify("Selected Item Removed");
            });

            $("#btnClear").click(function(e) {
                carousel.clear();
                notify("Cleared");
            });

            $("#btnSelect").click(function(e) {
                carousel.selectItem(1);
                notify("Second Item selected");
            });

             $("#btnClearSelect").click(function(e) {
                carousel.clearSelection();
                notify("Selection Removed");
            });

            // Pagination API

            $("#btnBack").click(function(e) {
                carousel.goBack();
                notify("Navigated to previous page");
            });

            $("#btnNext").click(function(e) {
                carousel.goNext();
                notify("Navigated to next page");
            });

            $("#btnFirst").click(function(e) {
                carousel.goToFirstPage();
                notify("Navigated to first page");
            });

            $("#btnLast").click(function(e) {
                carousel.goToLastPage();
                notify("Navigated to last page");
            });

            $("#btnGotoPage").click(function(e) {
                carousel.goToPage(1);
                notify("Navigated to 2nd page");
            });


            // Information API
            function display(text, value) {
                $("#output-message").removeClass('hide');
                $("#output-message").html("<i>" + text + "</i>: <strong>" + value + "</strong><br>");
            }

            $("#btnGetItemCount").click(function(e) {
                display('Item Count', carousel.getItemCount());
            });

            $("#btnGetPageCount").click(function(e) {
                display('Page Count', carousel.getPageCount());
            });

            $("#btnGetSelectedIndex").click(function(e) {
                display('Selected Index', carousel.getSelectedIndex());
            });

            $("#btnGetItemsForPage").click(function(e) {
                display('Item indices for 2nd page', carousel.getItemIndicesForPage(1));
            });

            $("#btnGetCurrentPage").click(function(e) {
                display('Current Page Index', carousel.getCurrentPage());
            });

            $("#btnGetLastItem").click(function(e) {
                display('Last Item Index', carousel.getLastItemIndex());
            });

            var eventMessageIndex = 1;
            function displayEvent(text) {
                var $eventContainer = $("#output-events");
                var $eventMessages = $eventContainer.children(".event-item");
                if($eventMessages.length > 10) $eventMessages.first().remove();
                $("#output-events").append("<div class='event-item'>" + (eventMessageIndex++) + ". " + text + "</div>");
            }

            // Events
            /*carousel.on('carousel:initialized', function() {
                displayEvent("Carousel Initialized");
            });*/
            carousel.on('carousel:pageChangeStart', function(e, from, to) {
                displayEvent("Page Change Started: " + from + " -> " + to);
            });
           /* carousel.on('carousel:pageChanged', function(e) {
                displayEvent("Page Change Done before animation: new Page " + e[0]);
            });*/
            carousel.on('carousel:itemsCleared', function() {
                displayEvent("Cleared");
            });
            carousel.on('carousel:itemRemoved', function() {
                displayEvent("Item removed");
            });
            carousel.on('carousel:itemSelected', function(e, index) {
                displayEvent("Item Selected: " + index);
            });
            carousel.on('carousel:selectionClear', function(e) {
                displayEvent("Selection Cleared");
            });
            carousel.on('carousel:itemAdded', function(e, item) {
                displayEvent("Item Added: " + JSON.stringify(item));
            });
            carousel.on('carousel:rendered', function(e) {
                displayEvent("Carousel Rendered");
            });
            carousel.on('carousel:pageChangeEnded', function(e, from, to) {
                displayEvent("Page Change Complete: " + from + " -> " + to);
            });


       

           
            $.getJSON('js/data.json', function (data) {
                carousel.render(items);
            });

});