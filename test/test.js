(function($) {

  module('setup test');

  test('createVmlNameSpace', function() {
    var ns = 'DD_belatedPNG',
      nsDD_belatedPNG;

    if (document.namespaces) {
      expect(3);
      nsDD_belatedPNG = document.namespaces[ns];
      ok(nsDD_belatedPNG);
      equals(nsDD_belatedPNG.name, ns);
      equals(nsDD_belatedPNG.urn, 'urn:schemas-microsoft-com:vml');
    } else {
      expect(0);
    }
  });

  test('createVmlStyleSheet', function() {
    var styles = document.getElementsByTagName('style'),
      expected, media;
	expect(4);
	expected = [
		'DD_belatedPNG:shape {',
	'	DISPLAY: none !important',
		'}',
		'DD_belatedPNG:fill {',
		'	DISPLAY: none !important',
		'}',
		'IMG.DD_belatedPNG_sizeFinder {	',
		'	DISPLAY: none !important',
		' }'
	].join('');
	media = 'print';
	if(!styles[0].styleSheet) {
		expected  = '';
		media = 'screen';
	}
	strictEqual(styles[0].media, media);
	strictEqual(styles[0].innerHTML.replace(/\s/g, ''), expected.replace(/\s/g, ''));
	
	if(styles[1] && styles[1].styleSheet) {
		expected = [
			'DD_belatedPNG:shape {',
			'BEHAVIOR: url(#default#VML)',
			'}',
			'DD_belatedPNG:fill {',
			'BEHAVIOR: url(#default#VML)',
			'}',
			'DD_belatedPNG:shape {',
			'POSITION: absolute',
			'}',
			'IMG.DD_belatedPNG_sizeFinder {',
			'Z-INDEX: -1; BORDER-BOTTOM: medium none; POSITION: absolute; BORDER-LEFT: medium none; VISIBILITY: hidden; BORDER-TOP: medium none; TOP: -10000px; BORDER-RIGHT: medium none; BEHAVIOR: none',
			'}'
		].join('');
		
		strictEqual(styles[1].media, 'screen');
		strictEqual(styles[1].innerHTML.replace(/\s/g, ''), expected.replace(/\s/g, ''));
    } else {
		ok(!styles[1]);
		ok(!styles[0].styleSheet);
	}
 
  });

})(jQuery);