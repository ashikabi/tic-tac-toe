//import {jQuery} from './jquery-3.2.1.min'
import jQuery,{$} from './loader'

(function ($) {
	"use strict";
	$('.col').on('mouseover',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).addClass('hov-column-'+ verTable);
		$(table1).find(".rw.head ."+column).addClass('hov-column-head-'+ verTable);
	});

	$('.col').on('mouseout',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).removeClass('hov-column-'+ verTable);
		$(table1).find(".rw.head ."+column).removeClass('hov-column-head-'+ verTable);
	});
    

})(jQuery);