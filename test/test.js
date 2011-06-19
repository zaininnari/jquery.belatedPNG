(function($) {

module("setup test");

test("createVmlNameSpace", function() {
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

})(jQuery);