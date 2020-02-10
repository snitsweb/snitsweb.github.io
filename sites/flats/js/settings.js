$( document ).ready(function() {
  $('.change_items .top').click(function(e){
    $('.change_items').toggleClass('active');
  });

  $('.change_items > .bot > .type_color > input').click(function(e){
    e.preventDefault();
  });


  $('.change_items .colors a').click(function(event) {
    var color = $(this).data('color');
    hex = color.replace('#', '');
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
    $('.new_style').detach();
    $('body').append('<style class="new_style">.change_bg{background-color:' + color + ' !important;}.change_svg{fill:' + color + ' !important;}.change_collor{color:' + color + ' !important;}.change_collor_active.active{color:' + color + ' !important;}.change_border{border-color:' + color + ' !important;}.change_hover:hover {background-color:' + color + ' !important;color: #ffffff !important;}.change_hover:hover .path{fill:#ffffff !important;}.change_shadow{box-shadow: 0 15px 25px rgba(' + r + ', ' + g + ', ' + b + ', 0.2) !important;}.change_shadow_hover:hover{box-shadow: 0 15px 25px rgba(' + r + ', ' + g + ', ' + b + ', 0.2) !important;}.change_bg_active.active{background-color:' + color + ' !important;}.change_border_active.active{border-color:' + color + ' !important;}.change_border{border-color:' + color + ' !important;}.uslugi .items .item:hover .top::before{background-color:' + color + ' !important}.gallery .items a:hover::before{background-color:' + color + ' !important}.change_color_hover:hover{color: ' + color + ' !important;background-color: transparent !important;}.change_svg_hover:hover path{fill: ' + color + ' !important;}.change_shadow:hover {box-shadow:none !important;}header .bot .right .menu .button span, header .bot .right .menu .button span::before, header .bot .right .menu .button span::after {background-color:' + color + ' !important}header .bot .right .menu .button.active span{background-color:transparent !important;}.catalog .filter .slider .ui-slider-handle{box-shadow: 0 15px 25px rgba(' + r + ', ' + g + ', ' + b + ', 0.2) !important;background-color:' + color + ' !important}.catalog .filter .slider .ui-slider-range{background-color:' + color + ' !important}.price_table .table::-webkit-scrollbar-thumb{background-color:' + color + ' !important} .steps__text:after{background-color:' + color + ' !important;} .twentytwenty-handle{background-color:' + color + ' !important;border-color:' + color + ' !important;} .slick-arrow:hover{background-color:' + color + ' !important;} .cost__form-check:checked:before{border-color:' + color + ' !important;} .popup__agreement:checked:before{background-color:' + color + ' !important;}.popup__review-camera-icon{color:' + color +'!important;}</style>');
    return false;
  });

  $('.change_items input[type=text]').keyup(function(event) {
    var color = $(this).val();
    hex = color.replace('#', '');
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
    $('.new_style').detach();
    $('body').append('<style class="new_style">.change_bg{background-color:' + color + ' !important;}.change_svg{fill:' + color + ' !important;}.change_collor{color:' + color + ' !important;}.change_collor_active.active{color:' + color + ' !important;}.change_border{border-color:' + color + ' !important;}.change_hover:hover {background-color:' + color + ' !important;color: #ffffff !important;}.change_hover:hover .path{fill:#ffffff !important;}.change_shadow{box-shadow: 0 15px 25px rgba(' + r + ', ' + g + ', ' + b + ', 0.2) !important;}.change_shadow_hover:hover{box-shadow: 0 15px 25px rgba(' + r + ', ' + g + ', ' + b + ', 0.2) !important;}.change_bg_active.active{background-color:' + color + ' !important;}.change_border_active.active{border-color:' + color + ' !important;}.change_border{border-color:' + color + ' !important;}.uslugi .items .item:hover .top::before{background-color:' + color + ' !important}.gallery .items a:hover::before{background-color:' + color + ' !important}.change_color_hover:hover{color: ' + color + ' !important;background-color: transparent !important;}.change_svg_hover:hover path{fill: ' + color + ' !important;}.change_shadow:hover {box-shadow:none !important;}header .bot .right .menu .button span, header .bot .right .menu .button span::before, header .bot .right .menu .button span::after {background-color:' + color + ' !important}header .bot .right .menu .button.active span{background-color:transparent !important;}.catalog .filter .slider .ui-slider-handle{box-shadow: 0 15px 25px rgba(' + r + ', ' + g + ', ' + b + ', 0.2) !important;background-color:' + color + ' !important}.catalog .filter .slider .ui-slider-range{background-color:' + color + ' !important}.price_table .table::-webkit-scrollbar-thumb{background-color:' + color + ' !important}.steps__text:after{background-color:' + color + ' !important;} .twentytwenty-handle{background-color:' + color + ' !important;border-color:' + color + ' !important;} .slick-arrow:hover{background-color:' + color + ' !important;} .cost__form-check:checked:before{border-color:' + color + ' !important;} .popup__agreement:checked:before{background-color:' + color + ' !important;}.popup__review-camera-icon{color:' + color +'!important;}</style>');
    return false;
  });

  $('.change_items input[type=checkbox]').change(function(event) {
    if (this.checked) {
      $('body').append('<style class="new_style_border">.change_border_radius {border-radius: 0 !important;}.popup__agreement:before{border-radius:0!important;}</style>');
    } else {
      $('.new_style_border').detach();
    }
    return false;
  });
});