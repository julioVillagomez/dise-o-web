$(document).ready(function(){
    menu("inicio");

    setTimeout(function() {
        $('#modelId').modal('show');
    }, 1000);

    setTimeout(function () {
        $('#modelId').modal('hide');
    }, 3000);

    $("#modelId").on("shown.bs.modal",function() {

        $('#usuario').val("usuario")
        console.log('me ejecute al abrir');
    })

    $("#modelId").on("hidden.bs.modal", function () {

        console.log('me ejecute al cerrar modal');
    })

    $("#example").dataTable({
        //  ajax: 'tabla.txt'
        "ajax": "json.txt",
        "columns": [{
                "data": "name"
            },
            {
                "data": "position"
            },
            {
                "data": "office"
            },
            {
                "data": "extn"
            },
            {
                "data": "start_date",
                "render": function (data, type , row) {
                    console.log(row.id);
                    return "hola"
                    
                }
            },
            {
                "data": "salary"
            }
        ]
    });

})



function menu(id){
    var padre = $('#'+id).parent();
    $('.navbar-collapse > .navbar-nav li').removeClass('active');
    

    if(padre.length != 0){
        $(padre[0]).addClass('active');
        $.ajax({
            url:'pages/'+id+".html",
            success:function(data){
                $("#content").html(data)

                switch(id){
                    case "servicios":
                        servicios();
                    break;
                    case "contacto":
                        initMap()
                    break;
                }

            },
            error:function(data){

            }
        })

    }
}


function servicios(){
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };
    // bind filter button click
    $('.filters-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });
}


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });

    var marker = new google.maps.Marker({
        position: {
            lat: -34.397,
            lng: 150.644
        },
        map: map
    });
}