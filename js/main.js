$(document).ready(function() {
	"use strict";

	//walkthrough changelog
	$('[data-walkthrough-chapter]').each(function() {
		var $this = $(this);
		var chap = $this.data('walkthroughChapter');

		$this.find('.replace').load('../../etc/ #changelog .ch' + chap);
	});

	//load monsters/map/dynamic content
	$('.ajax-load').click(function(e) {
		e.preventDefault();

		var $this = $(this);
		var href = $this.attr('href');
		var idSel = href.substring(href.lastIndexOf('#'));

		if (href.indexOf('/beastiary') >= 0)
			idSel += ' .thumbnail';

		var $parent = $this.parents('.ajax-replace');
		$parent.load(href + ' ' + idSel, function() {
			$this.remove();

			if (href.indexOf('/quests') >= 0)
				$parent.addClass('well');
			
			if (gfyCollection)
				gfyCollection.init();
		});
	});
});
