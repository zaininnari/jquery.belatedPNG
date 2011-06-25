(function($) {

  module('setup test');
  var ns = 'DD_belatedPNG',
      testId = 'testId',
      testIdFixPng = 'fixPng',
      $testId,
      $testIdFixPng,
      imagePath = '../test.png';

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
        selector = !document.documentMode || document.documentMode < 8 ? ns + ':*' : ns + ':shape, ' + ns + ':fill',
        expected, media;
    expect(4);

    expected = [
      (!document.documentMode || document.documentMode < 8 ? ns + '\\:*' : ns + ':shape') + ' {',
      '  DISPLAY: none !important',
      '}',
      (!document.documentMode || document.documentMode < 8 ? '' : ns + ':fill{DISPLAY: none !important}'),
      'IMG.DD_belatedPNG_sizeFinder {  ',
      '  DISPLAY: none !important',
      ' }'
    ].join('');
    media = 'print';
    if (!styles[0].styleSheet) {
      expected = '';
      media = 'screen';
    }
    strictEqual(styles[0].media, media);
    strictEqual(styles[0].innerHTML.replace(/\s/g, ''), expected.replace(/\s/g, ''));

    if (styles[1] && styles[1].styleSheet) {
      expected = [
        (!document.documentMode || document.documentMode < 8 ? ns + '\\:*' : ns + '\\:shape') + ' {',
        'BEHAVIOR: url(#default#VML)',
        '}',
        (!document.documentMode || document.documentMode < 8 ? '' : ns + ':fill{BEHAVIOR: url(#default#VML)}'),
        ns + '\\:shape{',
        'POSITION: absolute',
        '}',
        'IMG.DD_belatedPNG_sizeFinder {',
        (!document.documentMode || document.documentMode < 8 ? 'Z-INDEX:-1;VISIBILITY:hidden;BEHAVIOR:none;BORDER-TOP-STYLE:none;BORDER-RIGHT-STYLE:none;BORDER-LEFT-STYLE:none;POSITION:absolute;TOP:-10000px;BORDER-BOTTOM-STYLE:none' : 'Z-INDEX: -1; BORDER-BOTTOM: medium none; POSITION: absolute; BORDER-LEFT: medium none; VISIBILITY: hidden; BORDER-TOP: medium none; TOP: -10000px; BORDER-RIGHT: medium none; BEHAVIOR: none'),
        '}'
      ].join('');

      if (document.documentMode && document.documentMode === 8) {
        expected = expected.replace(new RegExp(ns + '\\\\', 'g'), ns);
      }

      strictEqual(styles[1].media, 'screen');
      strictEqual(styles[1].innerHTML.replace(/\s/g, ''), expected.replace(/\s/g, ''));
    } else {
      ok(!styles[1]);
      ok(!styles[0].styleSheet);
    }

  });

  module('Event test', {
    setup: function() {
      var div = document.createElement('div'),
          img = document.createElement('img');
      div.id = testId;
      img.id = testIdFixPng;
      img.src = imagePath;
      div.appendChild(img);
      document.getElementsByTagName('body')[0].appendChild(div);
      $testId = $('#' + testId);
      $testIdFixPng = $('#' + testIdFixPng);
    },
    teardown: function() {
      $testId.remove();
    }
  });

  test('readPropertyChange base', function() {
    $testIdFixPng.fixPng();
    expect(1);
    if (!$.support.opacity) {
      ok($testIdFixPng.attr('vmlInitiated'));
    } else {
      ok(true);
    }
  });

  test('readPropertyChange mouseover', function() {
    var eventName = 'mouseover';
    expect(3);
    $testIdFixPng.fixPng();
    ok(Object.prototype.hasOwnProperty.call($testIdFixPng.get(0) , 'vmlInitiated') ? $testIdFixPng.attr('vmlInitiated') : true);
    strictEqual($testIdFixPng.hasClass(eventName), false);
    $testIdFixPng.get(0)['on' + eventName] = function(){
      $(this).addClass(eventName);
    };
    if (!$.support.opacity) {
      $testIdFixPng.get(0).vml.image.shape['on' + eventName]();
    } else {
      $testIdFixPng.trigger(eventName);
    }
    strictEqual($testIdFixPng.hasClass(eventName), true);
  });

  test('readPropertyChange mouseout', function() {
    var eventName = 'mouseout';
    expect(3);
    $testIdFixPng.fixPng();
    ok(Object.prototype.hasOwnProperty.call($testIdFixPng.get(0) , 'vmlInitiated') ? $testIdFixPng.attr('vmlInitiated') : true);
    strictEqual($testIdFixPng.hasClass(eventName), false);
    $testIdFixPng.get(0)['on' + eventName] = function(){
      $(this).addClass(eventName);
    };
    if (!$.support.opacity) {
      $testIdFixPng.get(0).vml.image.shape['on' + eventName]();
    } else {
      $testIdFixPng.trigger(eventName);
    }
    strictEqual($testIdFixPng.hasClass(eventName), true);
  });

  test('readPropertyChange mouseenter', function() {
    var eventName = 'mouseenter';
    expect(3);
    $testIdFixPng.fixPng();
    ok(Object.prototype.hasOwnProperty.call($testIdFixPng.get(0) , 'vmlInitiated') ? $testIdFixPng.attr('vmlInitiated') : true);
    strictEqual($testIdFixPng.hasClass(eventName), false);
    $testIdFixPng.get(0)['on' + eventName] = function(){
      $(this).addClass(eventName);
    };
    if (!$.support.opacity) {
      $testIdFixPng.get(0).vml.image.shape['on' + eventName]();
    } else {
      $testIdFixPng.trigger(eventName);
    }
    strictEqual($testIdFixPng.hasClass(eventName), true);
  });

  test('readPropertyChange mouseleave', function() {
    var eventName = 'mouseleave';
    expect(3);
    $testIdFixPng.fixPng();
    ok(Object.prototype.hasOwnProperty.call($testIdFixPng.get(0) , 'vmlInitiated') ? $testIdFixPng.attr('vmlInitiated') : true);
    strictEqual($testIdFixPng.hasClass(eventName), false);
    $testIdFixPng.get(0)['on' + eventName] = function(){
      $(this).addClass(eventName);
    };
    if (!$.support.opacity) {
      $testIdFixPng.get(0).vml.image.shape['on' + eventName]();
    } else {
      $testIdFixPng.trigger(eventName);
    }
    strictEqual($testIdFixPng.hasClass(eventName), true);
  });

})(jQuery);
