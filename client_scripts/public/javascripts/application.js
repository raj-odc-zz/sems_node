// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery.min.js
//= require components/bootstrap-datepicker.init
//= require components/bootstrap-datepicker
//= require components/script.min

//= require angular
//= require angular-resource
//= require restangular
//= require underscore
//= require app.js
//= require angular-route
//= require angular-rails-templates
//= require_tree ../templates
//= require_directory ../templates
//= require angular-google-chart.js

//Included Layout Js by order

//= require components/script.min
//= require components/modernizr
//= require components/bootstrap.min
//= require components/jquery-migrate.min
//= require components/jquery.nicescroll.min
//= require components/breakpoints
//= require components/davis.min
//= require components/jquery.lazyjaxdavis.min
//= require components/pace.min
//= require components/jquery.validate.min
//= require components/bootstrap-select
//= require components/less.min
//= require components/excanvas
//= require components/ie.prototype.polyfill
//= require components/preload.pace.init
//= require components/animations.init
//= require components/form-validator.init.js
//= require components/fuelux-checkbox.init
//= require components/sidebar.main.init.js
//= require components/sidebar.collapse.init
//= require components/bootstrap-select.init
//= require components/core.init

//= require_tree .



// To set active in organization tab
//~ $("#navigation_current_page li").click(function(){
  //~ $("#navigation_current_page li").removeClass('active');
  //~ $(this).addClass('active');
//~ });

// SSN format in personal details
 function ssn_format_add(event)
  {
      var ssn = $('#ssn').val()
       // Allow: backspace, delete
        if (event.keyCode == 46 || event.keyCode == 8)
        {
            var tempField = $(this).attr('name');
            var hiddenID = tempField.substr(tempField.indexOf('_') + 1);
            $('#' + hiddenID).val('');
            $(this).val('')
            return;
        }
        if (ssn.length > 16)
          {
            $('#ssn_length_error').show();
          }
    if(ssn.length == 3 || ssn.length == 8 || ssn.length == 13)
    {
      ssn = ssn + '.';
      $('#ssn').val(ssn);
    }
  }
