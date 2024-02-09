  function cloakTab(a,b,c) {
  var AB_CLOAK = window.open()
  AB_CLOAK.document.body.innerHTML = '  <iframe src=" ' + b + ' " frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0%;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe>'
  AB_CLOAK.document.head.innerHTML = '<link id="favicon" rel="shortcut icon" type="image/png" href=" '+ c +' "/>'
  AB_CLOAK.document.title = a;
 }
