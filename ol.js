function aa() {
  return function() {
  }
}
function ca(a) {
  return function() {
    return this[a]
  }
}
function da(a) {
  return function() {
    return a
  }
}
var h, n = this;
function ea() {
}
function fa(a) {
  a.ha = function() {
    return a.zb ? a.zb : a.zb = new a
  }
}
function ga(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function v(a) {
  return void 0 !== a
}
function ha(a) {
  return"array" == ga(a)
}
function ia(a) {
  var b = ga(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function ja(a) {
  return"string" == typeof a
}
function ka(a) {
  return"number" == typeof a
}
function ma(a) {
  return"function" == ga(a)
}
function na(a) {
  var b = typeof a;
  return"object" == b && null != a || "function" == b
}
function E(a) {
  return a[oa] || (a[oa] = ++pa)
}
var oa = "closure_uid_" + (1E9 * Math.random() >>> 0), pa = 0;
function qa(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ra(a, b, c) {
  if(!a) {
    throw Error();
  }
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function G(a, b, c) {
  G = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? qa : ra;
  return G.apply(null, arguments)
}
function sa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var ta = Date.now || function() {
  return+new Date
};
function ua(a, b) {
  var c = a.split("."), d = n;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for(var e;c.length && (e = c.shift());) {
    c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
  }
}
function K(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.u = b.prototype;
  a.prototype = new c
}
;function va(a) {
  if(!wa.test(a)) {
    return a
  }
  -1 != a.indexOf("\x26") && (a = a.replace(xa, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(ya, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(za, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Aa, "\x26quot;"));
  return a
}
var xa = /&/g, ya = /</g, za = />/g, Aa = /\"/g, wa = /[&<>\"]/;
function Ba(a, b) {
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(d.length, e.length), g = 0;0 == c && g < f;g++) {
    var k = d[g] || "", l = e[g] || "", m = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
    do {
      var q = m.exec(k) || ["", "", ""], s = p.exec(l) || ["", "", ""];
      if(0 == q[0].length && 0 == s[0].length) {
        break
      }
      c = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == s[1].length ? 0 : parseInt(s[1], 10)) ? -1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == s[1].length ? 0 : parseInt(s[1], 10)) ? 1 : 0) || ((0 == q[2].length) < (0 == s[2].length) ? -1 : (0 == q[2].length) > (0 == s[2].length) ? 1 : 0) || (q[2] < s[2] ? -1 : q[2] > s[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
}
;var Ca = Array.prototype, Da = Ca.indexOf ? function(a, b, c) {
  return Ca.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(ja(a)) {
    return ja(b) && 1 == b.length ? a.indexOf(b, c) : -1
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, L = Ca.forEach ? function(a, b, c) {
  Ca.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = ja(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
}, Ea = Ca.map ? function(a, b, c) {
  return Ca.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), f = ja(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && (e[g] = b.call(c, f[g], g, a))
  }
  return e
};
function Fa(a, b) {
  var c = Da(a, b), d;
  (d = 0 <= c) && Ca.splice.call(a, c, 1);
  return d
}
function Ga(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
function Ha(a, b, c, d) {
  Ca.splice.apply(a, Ia(arguments, 1))
}
function Ia(a, b, c) {
  return 2 >= arguments.length ? Ca.slice.call(a, b) : Ca.slice.call(a, b, c)
}
function Ja(a) {
  Ca.sort.call(a, Ka)
}
function Ka(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function La(a, b) {
  for(var c in a) {
    b.call(void 0, a[c], c, a)
  }
}
function Ma(a, b) {
  for(var c in a) {
    if(b.call(void 0, a[c], c, a)) {
      return!0
    }
  }
  return!1
}
function Oa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Pa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
function Qa(a) {
  for(var b in a) {
    return!1
  }
  return!0
}
function Ra(a) {
  for(var b in a) {
    delete a[b]
  }
}
function Sa(a) {
  var b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  return b
}
var Ta = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ua(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < Ta.length;f++) {
      c = Ta[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function Va(a, b, c) {
  return Math.min(Math.max(a, b), c)
}
;function Wa(a, b) {
  a[0] += b[0];
  a[1] += b[1]
}
function Xa(a, b) {
  var c = Math.cos(b), d = Math.sin(b), e = a[1] * c + a[0] * d;
  a[0] = a[0] * c - a[1] * d;
  a[1] = e
}
;function Ya(a, b) {
  return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
}
function Za() {
  return[Infinity, Infinity, -Infinity, -Infinity]
}
function $a(a, b, c, d, e) {
  return v(e) ? (e[0] = a, e[1] = b, e[2] = c, e[3] = d, e) : [a, b, c, d]
}
function ab(a, b) {
  b[0] < a[0] && (a[0] = b[0]);
  b[2] > a[2] && (a[2] = b[2]);
  b[1] < a[1] && (a[1] = b[1]);
  b[3] > a[3] && (a[3] = b[3])
}
function bb(a, b, c, d) {
  var e = b * d[0] / 2, f = b * d[1] / 2;
  b = Math.cos(c);
  d = Math.sin(c);
  e = [-e, -e, e, e];
  c = [-f, f, -f, f];
  for(var g, k, f = 0;4 > f;++f) {
    g = e[f], k = c[f], e[f] = a[0] + g * b - k * d, c[f] = a[1] + g * d + k * b
  }
  a = Math.min.apply(null, e);
  b = Math.min.apply(null, c);
  e = Math.max.apply(null, e);
  c = Math.max.apply(null, c);
  return $a(a, b, e, c, void 0)
}
function cb(a) {
  return[a[0], a[3]]
}
function db(a, b) {
  return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
}
;/*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licenced under CC-BY-3.0.
*/
var eb = "object" == typeof Proj4js, fb = {};
fb.degrees = 2 * Math.PI * (new function(a) {
  this.a = a
}(6370997)).a / 360;
fb.ft = 0.3048;
fb.m = 1;
function gb(a) {
  this.a = a.code;
  this.ma = a.units;
  this.b = v(a.extent) ? a.extent : null;
  this.d = v(a.axisOrientation) ? a.axisOrientation : "enu";
  this.i = v(a.global) ? a.global : !1;
  this.c = null
}
gb.prototype.g = ca("ma");
gb.prototype.f = function() {
  return fb[this.ma]
};
function hb(a, b) {
  var c = {units:a.units, axisOrientation:a.axis};
  Ua(c, b);
  gb.call(this, c);
  this.e = a;
  this.h = null
}
K(hb, gb);
hb.prototype.f = function() {
  var a = this.e.to_meter;
  v(a) || (a = fb[this.ma]);
  return a
};
function jb(a) {
  return a.e
}
var kb = {}, lb = {}, mb = {};
function nb(a) {
  ob(a);
  L(a, function(b) {
    L(a, function(a) {
      b !== a && pb(b, a, qb)
    })
  })
}
function ob(a) {
  L(a, function(a) {
    lb[a.a] = a;
    pb(a, a, qb)
  })
}
function rb(a) {
  return null != a ? ja(a) ? sb(a) : a : sb("EPSG:3857")
}
function pb(a, b, c) {
  a = a.a;
  b = b.a;
  a in mb || (mb[a] = {});
  mb[a][b] = c
}
function sb(a) {
  var b;
  a instanceof gb ? b = a : ja(a) ? (b = lb[a], eb && !v(b) && (b = tb({code:a, extent:null})), v(b) || (b = null)) : b = null;
  return b
}
function tb(a) {
  var b = a.code, c = kb[b];
  if(!v(c)) {
    var d = new Proj4js.Proj(b), e = d.srsCode, c = kb[e];
    v(c) || (a = Sa(a), a.code = e, c = new hb(d, a), kb[e] = c);
    kb[b] = c
  }
  return c
}
function ub(a, b) {
  var c = a.a, d = b.a, e;
  c in mb && d in mb[c] && (e = mb[c][d]);
  if(eb && !v(e)) {
    var f = jb(a instanceof hb ? a : tb({code:c, extent:null})), g = jb(b instanceof hb ? b : tb({code:d, extent:null}));
    e = function(a, b, c) {
      var d = a.length;
      c = 1 < c ? c : 2;
      v(b) || (b = 2 < c ? a.slice() : Array(d));
      for(var e, s = 0;s < d;s += c) {
        e = new Proj4js.Point(a[s], a[s + 1]), e = Proj4js.transform(f, g, e), b[s] = e.x, b[s + 1] = e.y
      }
      return b
    };
    pb(a, b, e)
  }
  v(e) || (e = vb);
  return e
}
function vb(a, b) {
  if(v(b) && a !== b) {
    for(var c = 0, d = a.length;c < d;++c) {
      b[c] = a[c]
    }
    a = b
  }
  return a
}
function qb(a, b) {
  var c;
  if(v(b)) {
    c = 0;
    for(var d = a.length;c < d;++c) {
      b[c] = a[c]
    }
    c = b
  }else {
    c = a.slice()
  }
  return c
}
;function wb(a) {
  return function(b) {
    if(v(b)) {
      return[Va(b[0], a[0], a[2]), Va(b[1], a[1], a[3])]
    }
  }
}
function xb(a) {
  return a
}
;function yb(a, b, c) {
  var d = a.length;
  if(a[0] <= b) {
    return 0
  }
  if(!(b <= a[d - 1])) {
    if(0 < c) {
      for(c = 1;c < d;++c) {
        if(a[c] < b) {
          return c - 1
        }
      }
    }else {
      if(0 > c) {
        for(c = 1;c < d;++c) {
          if(a[c] <= b) {
            return c
          }
        }
      }else {
        for(c = 1;c < d;++c) {
          if(a[c] == b) {
            return c
          }
          if(a[c] < b) {
            return a[c - 1] - b < b - a[c] ? c - 1 : c
          }
        }
      }
    }
  }
  return d - 1
}
;function zb(a) {
  return function(b, c, d) {
    if(v(b)) {
      return b = yb(a, b, d), b = Va(b + c, 0, a.length - 1), a[b]
    }
  }
}
function Ab(a, b, c) {
  return function(d, e, f) {
    if(v(d)) {
      return f = 0 < f ? 0 : 0 > f ? 1 : 0.5, d = Math.floor(Math.log(b / d) / Math.log(a) + f), e = Math.max(d + e, 0), v(c) && (e = Math.min(e, c)), b / Math.pow(a, e)
    }
  }
}
;function Bb(a) {
  if(v(a)) {
    return 0
  }
}
function Cb(a, b) {
  if(v(a)) {
    return a + b
  }
}
function Db(a) {
  var b = 2 * Math.PI / a;
  return function(a, d) {
    if(v(a)) {
      return a = Math.floor((a + d) / b + 0.5) * b
    }
  }
}
function Eb() {
  var a = 5 * Math.PI / 180;
  return function(b, c) {
    if(v(b)) {
      return Math.abs(b + c) <= a ? 0 : b + c
    }
  }
}
;function Fb(a, b, c) {
  this.center = a;
  this.resolution = b;
  this.rotation = c
}
;var Gb, Hb, Ib, Jb, Kb, Lb;
function Mb() {
  return n.navigator ? n.navigator.userAgent : null
}
Jb = Ib = Hb = Gb = !1;
var Nb;
if(Nb = Mb()) {
  var Ob = n.navigator;
  Gb = 0 == Nb.lastIndexOf("Opera", 0);
  Hb = !Gb && (-1 != Nb.indexOf("MSIE") || -1 != Nb.indexOf("Trident"));
  Ib = !Gb && -1 != Nb.indexOf("WebKit");
  Jb = !Gb && !Ib && !Hb && "Gecko" == Ob.product
}
var Pb = Gb, M = Hb, Qb = Jb, N = Ib, Rb, Sb = n.navigator;
Rb = Sb && Sb.platform || "";
Kb = -1 != Rb.indexOf("Mac");
Lb = -1 != Rb.indexOf("Win");
var Tb = -1 != Rb.indexOf("Linux");
function Ub() {
  var a = n.document;
  return a ? a.documentMode : void 0
}
var Vb;
a: {
  var Wb = "", Xb;
  if(Pb && n.opera) {
    var Yb = n.opera.version, Wb = "function" == typeof Yb ? Yb() : Yb
  }else {
    if(Qb ? Xb = /rv\:([^\);]+)(\)|;)/ : M ? Xb = /\b(?:MSIE|rv)\s+([^\);]+)(\)|;)/ : N && (Xb = /WebKit\/(\S+)/), Xb) {
      var Zb = Xb.exec(Mb()), Wb = Zb ? Zb[1] : ""
    }
  }
  if(M) {
    var $b = Ub();
    if($b > parseFloat(Wb)) {
      Vb = String($b);
      break a
    }
  }
  Vb = Wb
}
var ac = {};
function bc(a) {
  return ac[a] || (ac[a] = 0 <= Ba(Vb, a))
}
var cc = n.document, dc = cc && M ? Ub() || ("CSS1Compat" == cc.compatMode ? parseInt(Vb, 10) : 5) : void 0;
var ec = !M || M && 9 <= dc, fc = !M || M && 9 <= dc, gc = M && !bc("9");
!N || bc("528");
Qb && bc("1.9b") || M && bc("8") || Pb && bc("9.5") || N && bc("528");
Qb && !bc("8") || M && bc("9");
function hc() {
  0 != ic && (this.gd = Error().stack, jc[E(this)] = this)
}
var ic = 0, jc = {};
hc.prototype.pb = !1;
hc.prototype.ab = function() {
  if(!this.pb && (this.pb = !0, this.q(), 0 != ic)) {
    var a = E(this);
    delete jc[a]
  }
};
function kc(a, b) {
  a.O || (a.O = []);
  a.O.push(G(b, void 0))
}
hc.prototype.q = function() {
  if(this.O) {
    for(;this.O.length;) {
      this.O.shift()()
    }
  }
};
function lc(a) {
  a && "function" == typeof a.ab && a.ab()
}
;function mc(a, b) {
  this.type = a;
  this.b = this.target = b
}
h = mc.prototype;
h.ab = aa();
h.T = !1;
h.fc = !1;
h.Gb = !0;
h.ia = function() {
  this.T = !0
};
h.v = function() {
  this.fc = !0;
  this.Gb = !1
};
function nc(a) {
  a.ia()
}
;function oc(a) {
  oc[" "](a);
  return a
}
oc[" "] = ea;
function pc(a, b) {
  a && qc(this, a, b)
}
K(pc, mc);
var rc = [1, 4, 2];
h = pc.prototype;
h.target = null;
h.cc = null;
h.ac = 0;
h.bc = 0;
h.clientX = 0;
h.clientY = 0;
h.dc = 0;
h.ec = 0;
h.$b = 0;
h.P = 0;
h.fb = 0;
h.sa = !1;
h.N = !1;
h.aa = !1;
h.gb = !1;
h.Ua = !1;
h.A = null;
function qc(a, b, c) {
  var d = a.type = b.type;
  mc.call(a, d);
  a.target = b.target || b.srcElement;
  a.b = c;
  if(c = b.relatedTarget) {
    if(Qb) {
      var e;
      a: {
        try {
          oc(c.nodeName);
          e = !0;
          break a
        }catch(f) {
        }
        e = !1
      }
      e || (c = null)
    }
  }else {
    "mouseover" == d ? c = b.fromElement : "mouseout" == d && (c = b.toElement)
  }
  a.cc = c;
  a.ac = N || void 0 !== b.offsetX ? b.offsetX : b.layerX;
  a.bc = N || void 0 !== b.offsetY ? b.offsetY : b.layerY;
  a.clientX = void 0 !== b.clientX ? b.clientX : b.pageX;
  a.clientY = void 0 !== b.clientY ? b.clientY : b.pageY;
  a.dc = b.screenX || 0;
  a.ec = b.screenY || 0;
  a.$b = b.button;
  a.P = b.keyCode || 0;
  a.fb = b.charCode || ("keypress" == d ? b.keyCode : 0);
  a.sa = b.ctrlKey;
  a.N = b.altKey;
  a.aa = b.shiftKey;
  a.gb = b.metaKey;
  a.Ua = Kb ? b.metaKey : b.ctrlKey;
  a.state = b.state;
  a.A = b;
  b.defaultPrevented && a.v();
  delete a.T
}
function sc(a) {
  return(ec ? 0 == a.A.button : "click" == a.type ? !0 : !!(a.A.button & rc[0])) && !(N && Kb && a.sa)
}
h.ia = function() {
  pc.u.ia.call(this);
  this.A.stopPropagation ? this.A.stopPropagation() : this.A.cancelBubble = !0
};
h.v = function() {
  pc.u.v.call(this);
  var a = this.A;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, gc) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
h.Yb = ca("A");
var tc = "closure_listenable_" + (1E6 * Math.random() | 0), uc = 0;
function vc(a, b, c, d, e, f) {
  this.Q = a;
  this.b = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.ja = f;
  this.a = ++uc;
  this.U = this.ga = !1
}
function wc(a) {
  a.U = !0;
  a.Q = null;
  a.b = null;
  a.src = null;
  a.ja = null
}
;var xc = {}, yc = {}, zc = {}, Ac = {};
function O(a, b, c, d, e) {
  if(ha(b)) {
    for(var f = 0;f < b.length;f++) {
      O(a, b[f], c, d, e)
    }
    return null
  }
  c = Bc(c);
  return a && a[tc] ? a.G.add(b, c, !1, d, e) : Cc(a, b, c, !1, d, e)
}
function Cc(a, b, c, d, e, f) {
  if(!b) {
    throw Error("Invalid event type");
  }
  e = !!e;
  var g = yc;
  b in g || (g[b] = {F:0});
  g = g[b];
  e in g || (g[e] = {F:0}, g.F++);
  var g = g[e], k = E(a), l;
  if(g[k]) {
    l = g[k];
    for(var m = 0;m < l.length;m++) {
      if(g = l[m], g.Q == c && g.ja == f) {
        if(g.U) {
          break
        }
        d || (l[m].ga = !1);
        return l[m]
      }
    }
  }else {
    l = g[k] = [], g.F++
  }
  m = Dc();
  g = new vc(c, m, a, b, e, f);
  g.ga = d;
  m.src = a;
  m.Q = g;
  l.push(g);
  zc[k] || (zc[k] = []);
  zc[k].push(g);
  a.addEventListener ? a.addEventListener(b, m, e) : a.attachEvent(b in Ac ? Ac[b] : Ac[b] = "on" + b, m);
  return xc[g.a] = g
}
function Dc() {
  var a = Ec, b = fc ? function(c) {
    return a.call(b.src, b.Q, c)
  } : function(c) {
    c = a.call(b.src, b.Q, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Fc(a, b, c, d, e) {
  if(ha(b)) {
    for(var f = 0;f < b.length;f++) {
      Fc(a, b[f], c, d, e)
    }
    return null
  }
  c = Bc(c);
  return a && a[tc] ? a.G.add(b, c, !0, d, e) : Cc(a, b, c, !0, d, e)
}
function Gc(a, b, c, d, e) {
  if(ha(b)) {
    for(var f = 0;f < b.length;f++) {
      Gc(a, b[f], c, d, e)
    }
  }else {
    if(c = Bc(c), a && a[tc]) {
      a.G.remove(b, c, d, e)
    }else {
      d = !!d;
      a: {
        f = yc;
        if(b in f && (f = f[b], d in f && (f = f[d], a = E(a), f[a]))) {
          a = f[a];
          break a
        }
        a = null
      }
      if(a) {
        for(f = 0;f < a.length;f++) {
          if(a[f].Q == c && a[f].capture == d && a[f].ja == e) {
            Q(a[f]);
            break
          }
        }
      }
    }
  }
}
function Q(a) {
  if(ka(a) || !a || a.U) {
    return!1
  }
  var b = a.src;
  if(b && b[tc]) {
    return Hc(b.G, a)
  }
  var c = a.type, d = a.b, e = a.capture;
  b.removeEventListener ? b.removeEventListener(c, d, e) : b.detachEvent && b.detachEvent(c in Ac ? Ac[c] : Ac[c] = "on" + c, d);
  b = E(b);
  zc[b] && (d = zc[b], Fa(d, a), 0 == d.length && delete zc[b]);
  wc(a);
  if(d = yc[c][e][b]) {
    Fa(d, a), 0 == d.length && (delete yc[c][e][b], yc[c][e].F--), 0 == yc[c][e].F && (delete yc[c][e], yc[c].F--), 0 == yc[c].F && delete yc[c]
  }
  delete xc[a.a];
  return!0
}
function Ic(a, b, c) {
  var d = 1;
  b = E(b);
  if(a[b]) {
    for(a = Ga(a[b]), b = 0;b < a.length;b++) {
      var e = a[b];
      e && !e.U && (d &= !1 !== Jc(e, c))
    }
  }
  return Boolean(d)
}
function Jc(a, b) {
  var c = a.Q, d = a.ja || a.src;
  a.ga && Q(a);
  return c.call(d, b)
}
function Ec(a, b) {
  if(a.U) {
    return!0
  }
  var c = a.type, d = yc;
  if(!(c in d)) {
    return!0
  }
  var d = d[c], e, f;
  if(!fc) {
    if(!(c = b)) {
      a: {
        for(var c = ["window", "event"], g = n;e = c.shift();) {
          if(null != g[e]) {
            g = g[e]
          }else {
            c = null;
            break a
          }
        }
        c = g
      }
    }
    e = c;
    c = !0 in d;
    g = !1 in d;
    if(c) {
      if(0 > e.keyCode || void 0 != e.returnValue) {
        return!0
      }
      a: {
        var k = !1;
        if(0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a
          }catch(l) {
            k = !0
          }
        }
        if(k || void 0 == e.returnValue) {
          e.returnValue = !0
        }
      }
    }
    k = new pc;
    qc(k, e, this);
    e = !0;
    try {
      if(c) {
        for(var m = [], p = k.b;p;p = p.parentNode) {
          m.push(p)
        }
        f = d[!0];
        for(var q = m.length - 1;!k.T && 0 <= q;q--) {
          k.b = m[q], e &= Ic(f, m[q], k)
        }
        if(g) {
          for(f = d[!1], q = 0;!k.T && q < m.length;q++) {
            k.b = m[q], e &= Ic(f, m[q], k)
          }
        }
      }else {
        e = Jc(a, k)
      }
    }finally {
      m && (m.length = 0)
    }
    return e
  }
  d = new pc(b, this);
  return e = Jc(a, d)
}
var Kc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Bc(a) {
  return ma(a) ? a : a[Kc] || (a[Kc] = function(b) {
    return a.handleEvent(b)
  })
}
;function Lc(a) {
  return function() {
    return a
  }
}
var Mc = Lc(!1), Nc = Lc(!0);
function Oc(a) {
  var b;
  b = b || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
  }
}
function Pc(a) {
  var b = arguments, c = b.length;
  return function() {
    for(var a = 0;a < c;a++) {
      if(!b[a].apply(this, arguments)) {
        return!1
      }
    }
    return!0
  }
}
;function Qc(a) {
  this.src = a;
  this.a = {};
  this.b = 0
}
Qc.prototype.add = function(a, b, c, d, e) {
  var f = this.a[a];
  f || (f = this.a[a] = [], this.b++);
  var g = Rc(f, b, d, e);
  -1 < g ? (a = f[g], c || (a.ga = !1)) : (a = new vc(b, null, this.src, a, !!d, e), a.ga = c, f.push(a));
  return a
};
Qc.prototype.remove = function(a, b, c, d) {
  if(!(a in this.a)) {
    return!1
  }
  var e = this.a[a];
  b = Rc(e, b, c, d);
  return-1 < b ? (wc(e[b]), Ca.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
};
function Hc(a, b) {
  var c = b.type;
  if(!(c in a.a)) {
    return!1
  }
  var d = Fa(a.a[c], b);
  d && (wc(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
  return d
}
function Sc(a, b) {
  var c = v(b), d = v(void 0);
  return Ma(a.a, function(a) {
    for(var f = 0;f < a.length;++f) {
      if(!(c && a[f].type != b || d && void 0 != a[f].capture)) {
        return!0
      }
    }
    return!1
  })
}
function Rc(a, b, c, d) {
  for(var e = 0;e < a.length;++e) {
    var f = a[e];
    if(!f.U && f.Q == b && f.capture == !!c && f.ja == d) {
      return e
    }
  }
  return-1
}
;function R() {
  hc.call(this);
  this.G = new Qc(this);
  this.Jb = this
}
K(R, hc);
R.prototype[tc] = !0;
R.prototype.va = null;
R.prototype.addEventListener = function(a, b, c, d) {
  O(this, a, b, c, d)
};
R.prototype.removeEventListener = function(a, b, c, d) {
  Gc(this, a, b, c, d)
};
function T(a, b) {
  var c, d = a.va;
  if(d) {
    for(c = [];d;d = d.va) {
      c.push(d)
    }
  }
  var d = a.Jb, e = b, f = e.type || e;
  if(ja(e)) {
    e = new mc(e, d)
  }else {
    if(e instanceof mc) {
      e.target = e.target || d
    }else {
      var g = e, e = new mc(f, d);
      Ua(e, g)
    }
  }
  var g = !0, k;
  if(c) {
    for(var l = c.length - 1;!e.T && 0 <= l;l--) {
      k = e.b = c[l], g = Tc(k, f, !0, e) && g
    }
  }
  e.T || (k = e.b = d, g = Tc(k, f, !0, e) && g, e.T || (g = Tc(k, f, !1, e) && g));
  if(c) {
    for(l = 0;!e.T && l < c.length;l++) {
      k = e.b = c[l], g = Tc(k, f, !1, e) && g
    }
  }
  return g
}
R.prototype.q = function() {
  R.u.q.call(this);
  if(this.G) {
    var a = this.G, b = 0, c;
    for(c in a.a) {
      for(var d = a.a[c], e = 0;e < d.length;e++) {
        ++b, d[e].U = !0
      }
      delete a.a[c];
      a.b--
    }
  }
  this.va = null
};
function Tc(a, b, c, d) {
  b = a.G.a[b];
  if(!b) {
    return!0
  }
  b = Ga(b);
  for(var e = !0, f = 0;f < b.length;++f) {
    var g = b[f];
    if(g && !g.U && g.capture == c) {
      var k = g.Q, l = g.ja || g.src;
      g.ga && Hc(a.G, g);
      e = !1 !== k.call(l, d) && e
    }
  }
  return e && !1 != d.Gb
}
;function Uc() {
  R.call(this);
  this.f = 0
}
K(Uc, R);
function Vc(a) {
  ++a.f;
  T(a, "change")
}
Uc.prototype.Pb = function(a, b, c) {
  return O(this, a, b, !1, c)
};
function Wc(a, b) {
  mc.call(this, a);
  this.key = b
}
K(Wc, mc);
function Xc(a) {
  Uc.call(this);
  this.Xa = {};
  this.ob = {};
  this.fd = {};
  this.hd = {};
  v(a) && Yc(this, a)
}
K(Xc, Uc);
var Zc = {}, $c = {}, ad = {};
function bd(a) {
  return a.substr(0, 1).toUpperCase() + a.substr(1)
}
function cd(a) {
  return Zc.hasOwnProperty(a) ? Zc[a] : Zc[a] = "change:" + a.toLowerCase()
}
Xc.prototype.b = function(a) {
  var b, c = this.ob;
  if(c.hasOwnProperty(a)) {
    a = c[a];
    b = a.target;
    var c = a.a, d = $c.hasOwnProperty(c) ? $c[c] : $c[c] = "get" + bd(c), d = d in b ? b[d] : void 0;
    b = v(d) ? d.call(b) : b.b(c);
    b = a.d(b)
  }else {
    this.Xa.hasOwnProperty(a) && (b = this.Xa[a])
  }
  return b
};
Xc.prototype.d = function(a, b) {
  T(this, new Wc("beforepropertychange", a));
  var c = this.ob;
  if(c.hasOwnProperty(a)) {
    var d = c[a], c = d.target, e = d.a;
    b = d.b(b);
    d = ad.hasOwnProperty(e) ? ad[e] : ad[e] = "set" + bd(e);
    d = d in c ? c[d] : void 0;
    v(d) ? d.call(c, b) : c.d(e, b)
  }else {
    this.Xa[a] = b, c = cd(a), T(this, c), T(this, new Wc("propertychange", a))
  }
};
function Yc(a, b) {
  for(var c in b) {
    var d = b[c], e = ad.hasOwnProperty(c) ? ad[c] : ad[c] = "set" + bd(c), e = e in a ? a[e] : void 0;
    v(e) ? e.call(a, d) : a.d(c, d)
  }
}
;function dd() {
  Xc.call(this);
  this.l = [0, 0]
}
K(dd, Xc);
dd.prototype.a = da(null);
dd.prototype.k = da(!1);
function ed(a, b) {
  a.l[1] += b
}
;function V(a) {
  dd.call(this);
  a = a || {};
  var b = {};
  b.center = v(a.center) ? a.center : null;
  b.projection = rb(a.projection);
  var c, d, e;
  if(v(a.resolutions)) {
    c = a.resolutions, d = c[0], e = c[c.length - 1], c = zb(c)
  }else {
    d = a.maxResolution;
    v(d) || (d = a.projection, e = rb(d).b, d = (null === e ? 360 * fb.degrees / fb[d.ma] : Math.max(e[2] - e[0], e[3] - e[1])) / 256);
    c = a.maxZoom;
    v(c) || (c = 28);
    var f = a.zoomFactor;
    v(f) || (f = 2);
    e = d / Math.pow(f, c);
    c = Ab(f, d, c)
  }
  this.t = d;
  this.C = e;
  (v(a.enableRotation) ? a.enableRotation : 1) ? (d = a.constrainRotation, d = v(d) && !0 !== d ? !1 === d ? Cb : ka(d) ? Db(d) : Cb : Eb()) : d = Bb;
  this.g = new Fb(v(a.extent) ? wb(a.extent) : xb, c, d);
  v(a.resolution) ? b.resolution = a.resolution : v(a.zoom) && (b.resolution = fd(this, this.t, a.zoom));
  b.rotation = v(a.rotation) ? a.rotation : 0;
  Yc(this, b)
}
K(V, dd);
function gd(a, b, c) {
  var d, e = a.e();
  v(e) && (d = [e[0] - c[0], e[1] - c[1]], Xa(d, b - a.j()), Wa(d, c));
  return d
}
function hd(a, b, c) {
  var d, e = a.e();
  a = a.i();
  v(e) && v(a) && (d = [c[0] - b * (c[0] - e[0]) / a, c[1] - b * (c[1] - e[1]) / a]);
  return d
}
function fd(a, b, c, d) {
  return a.g.resolution(b, c || 0, d || 0)
}
V.prototype.constrainRotation = function(a, b) {
  return this.g.rotation(a, b || 0)
};
V.prototype.e = function() {
  return this.b("center")
};
V.prototype.getCenter = V.prototype.e;
V.prototype.o = function() {
  return this.b("projection")
};
V.prototype.getProjection = V.prototype.o;
V.prototype.i = function() {
  return this.b("resolution")
};
V.prototype.getResolution = V.prototype.i;
function id(a, b) {
  return Math.max((a[2] - a[0]) / b[0], (a[3] - a[1]) / b[1])
}
V.prototype.j = function() {
  return this.b("rotation")
};
V.prototype.getRotation = V.prototype.j;
V.prototype.a = function() {
  return this
};
function jd(a) {
  var b = a.e(), c = a.o(), d = a.i();
  a = a.j();
  return{center:b.slice(), projection:v(c) ? c : null, resolution:d, rotation:v(a) ? a : 0}
}
V.prototype.r = function(a, b) {
  if(!(a[2] < a[0] || a[3] < a[1])) {
    this.c([(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]);
    var c = id(a, b), d = fd(this, c, 0, 0);
    d < c && (d = fd(this, d, -1, 0));
    this.h(d)
  }
};
V.prototype.k = function() {
  return null != this.e() && v(this.i())
};
V.prototype.c = function(a) {
  this.d("center", a)
};
V.prototype.setCenter = V.prototype.c;
V.prototype.w = function(a) {
  this.d("projection", a)
};
V.prototype.setProjection = V.prototype.w;
V.prototype.h = function(a) {
  this.d("resolution", a)
};
V.prototype.setResolution = V.prototype.h;
V.prototype.n = function(a) {
  this.d("rotation", a)
};
V.prototype.setRotation = V.prototype.n;
function kd(a, b, c) {
  if(ha(b)) {
    for(var d = 0;d < b.length;d++) {
      kd(a, String(b[d]), c)
    }
  }else {
    null != b && c.push("\x26", a, "" === b ? "" : "\x3d", encodeURIComponent(String(b)))
  }
}
function ld(a, b) {
  var c = [a], d;
  for(d in b) {
    kd(d, b[d], c)
  }
  if(c[1]) {
    d = c[0];
    var e = d.indexOf("#");
    0 <= e && (c.push(d.substr(e)), c[0] = d = d.substr(0, e));
    e = d.indexOf("?");
    0 > e ? c[1] = "?" : e == d.length - 1 && (c[1] = void 0)
  }
  return c.join("")
}
;function md(a, b, c) {
  hc.call(this);
  this.c = a;
  this.d = c;
  this.a = b || window;
  this.b = G(this.bb, this)
}
K(md, hc);
h = md.prototype;
h.H = null;
h.nb = !1;
h.start = function() {
  nd(this);
  this.nb = !1;
  var a = od(this), b = pd(this);
  a && !b && this.a.mozRequestAnimationFrame ? (this.H = O(this.a, "MozBeforePaint", this.b), this.a.mozRequestAnimationFrame(null), this.nb = !0) : this.H = a && b ? a.call(this.a, this.b) : this.a.setTimeout(Oc(this.b), 20)
};
function nd(a) {
  if(null != a.H) {
    var b = od(a), c = pd(a);
    b && !c && a.a.mozRequestAnimationFrame ? Q(a.H) : b && c ? c.call(a.a, a.H) : a.a.clearTimeout(a.H)
  }
  a.H = null
}
h.bb = function() {
  this.nb && this.H && Q(this.H);
  this.H = null;
  this.c.call(this.d, ta())
};
h.q = function() {
  nd(this);
  md.u.q.call(this)
};
function od(a) {
  a = a.a;
  return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || null
}
function pd(a) {
  a = a.a;
  return a.cancelRequestAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || null
}
;var qd;
function rd() {
  var a = n.MessageChannel;
  "undefined" === typeof a && ("undefined" !== typeof window && window.postMessage && window.addEventListener) && (a = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    document.body.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = b.location.protocol + "//" + b.location.host, a = G(function(a) {
      if(a.origin == d || a.data == c) {
        this.port1.onmessage()
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d)
    }}
  });
  if("undefined" !== typeof a) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      c = c.next;
      var a = c.sb;
      c.sb = null;
      a()
    };
    return function(a) {
      d.next = {sb:a};
      d = d.next;
      b.port2.postMessage(0)
    }
  }
  return"undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
    var b = document.createElement("script");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null
    };
    document.documentElement.appendChild(b)
  } : function(a) {
    n.setTimeout(a, 0)
  }
}
;var sd, td = !M || M && 9 <= dc;
!Qb && !M || M && M && 9 <= dc || Qb && bc("1.9.1");
M && bc("9");
function ud(a, b) {
  var c;
  c = a.className;
  c = ja(c) && c.match(/\S+/g) || [];
  for(var d = Ia(arguments, 1), e = c.length + d.length, f = c, g = 0;g < d.length;g++) {
    0 <= Da(f, d[g]) || f.push(d[g])
  }
  a.className = c.join(" ");
  return c.length == e
}
;function vd(a, b) {
  this.x = v(a) ? a : 0;
  this.y = v(b) ? b : 0
}
vd.prototype.ceil = function() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this
};
vd.prototype.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this
};
vd.prototype.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this
};
vd.prototype.scale = function(a, b) {
  var c = ka(b) ? b : a;
  this.x *= a;
  this.y *= c;
  return this
};
function wd(a, b) {
  this.width = a;
  this.height = b
}
h = wd.prototype;
h.ba = function() {
  return!(this.width * this.height)
};
h.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
h.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
h.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
h.scale = function(a, b) {
  var c = ka(b) ? b : a;
  this.width *= a;
  this.height *= c;
  return this
};
function xd(a) {
  return a ? new yd(zd(a)) : sd || (sd = new yd)
}
function Ad(a, b) {
  La(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Bd ? a.setAttribute(Bd[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var Bd = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Cd(a) {
  a = a.document.documentElement;
  return new wd(a.clientWidth, a.clientHeight)
}
function Dd(a, b, c) {
  var d = arguments, e = document, f = d[0], g = d[1];
  if(!td && g && (g.name || g.type)) {
    f = ["\x3c", f];
    g.name && f.push(' name\x3d"', va(g.name), '"');
    if(g.type) {
      f.push(' type\x3d"', va(g.type), '"');
      var k = {};
      Ua(k, g);
      delete k.type;
      g = k
    }
    f.push("\x3e");
    f = f.join("")
  }
  f = e.createElement(f);
  g && (ja(g) ? f.className = g : ha(g) ? ud.apply(null, [f].concat(g)) : Ad(f, g));
  2 < d.length && Ed(e, f, d);
  return f
}
function Ed(a, b, c) {
  function d(c) {
    c && b.appendChild(ja(c) ? a.createTextNode(c) : c)
  }
  for(var e = 2;e < c.length;e++) {
    var f = c[e];
    !ia(f) || na(f) && 0 < f.nodeType ? d(f) : L(Fd(f) ? Ga(f) : f, d)
  }
}
function Gd(a) {
  return document.createElement(a)
}
function Hd(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}
function Id(a, b) {
  a.insertBefore(b, a.childNodes[0] || null)
}
function Jd(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function zd(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function Fd(a) {
  if(a && "number" == typeof a.length) {
    if(na(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(ma(a)) {
      return"function" == typeof a.item
    }
  }
  return!1
}
function yd(a) {
  this.a = a || n.document || document
}
function Kd(a) {
  var b = a.a;
  a = N ? b.body : b.documentElement;
  b = b.parentWindow || b.defaultView;
  return M && bc("10") && b.pageYOffset != a.scrollTop ? new vd(a.scrollLeft, a.scrollTop) : new vd(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}
yd.prototype.contains = function(a, b) {
  if(a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b)
  }
  if("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
};
function Ld(a) {
  R.call(this);
  this.xa = a || window;
  this.Ra = O(this.xa, "resize", this.uc, !1, this);
  this.da = Cd(this.xa || window)
}
K(Ld, R);
h = Ld.prototype;
h.Ra = null;
h.xa = null;
h.da = null;
h.q = function() {
  Ld.u.q.call(this);
  this.Ra && (Q(this.Ra), this.Ra = null);
  this.da = this.xa = null
};
h.uc = function() {
  var a = Cd(this.xa || window);
  a == this.da || a && this.da && a.width == this.da.width && a.height == this.da.height || (this.da = a, T(this, "resize"))
};
function Md(a, b, c, d, e) {
  if(!(M || N && bc("525"))) {
    return!0
  }
  if(Kb && e) {
    return Nd(a)
  }
  if(e && !d || !c && (17 == b || 18 == b || Kb && 91 == b)) {
    return!1
  }
  if(N && d && c) {
    switch(a) {
      case 220:
      ;
      case 219:
      ;
      case 221:
      ;
      case 192:
      ;
      case 186:
      ;
      case 189:
      ;
      case 187:
      ;
      case 188:
      ;
      case 190:
      ;
      case 191:
      ;
      case 192:
      ;
      case 222:
        return!1
    }
  }
  if(M && d && b == a) {
    return!1
  }
  switch(a) {
    case 13:
      return!(M && M && 9 <= dc);
    case 27:
      return!N
  }
  return Nd(a)
}
function Nd(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || N && 0 == a) {
    return!0
  }
  switch(a) {
    case 32:
    ;
    case 63:
    ;
    case 107:
    ;
    case 109:
    ;
    case 110:
    ;
    case 111:
    ;
    case 186:
    ;
    case 59:
    ;
    case 189:
    ;
    case 187:
    ;
    case 61:
    ;
    case 188:
    ;
    case 190:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return!0;
    default:
      return!1
  }
}
function Od(a) {
  switch(a) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return a
  }
}
;function Pd(a, b) {
  R.call(this);
  a && Qd(this, a, b)
}
K(Pd, R);
h = Pd.prototype;
h.ta = null;
h.Oa = null;
h.hb = null;
h.Pa = null;
h.D = -1;
h.S = -1;
h.Ya = !1;
var Rd = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Sd = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Td = M || 
N && bc("525"), Ud = Kb && Qb;
Pd.prototype.a = function(a) {
  N && (17 == this.D && !a.sa || 18 == this.D && !a.N || Kb && 91 == this.D && !a.gb) && (this.S = this.D = -1);
  -1 == this.D && (a.sa && 17 != a.P ? this.D = 17 : a.N && 18 != a.P ? this.D = 18 : a.gb && 91 != a.P && (this.D = 91));
  Td && !Md(a.P, this.D, a.aa, a.sa, a.N) ? this.handleEvent(a) : (this.S = Qb ? Od(a.P) : a.P, Ud && (this.Ya = a.N))
};
Pd.prototype.b = function(a) {
  this.S = this.D = -1;
  this.Ya = a.N
};
Pd.prototype.handleEvent = function(a) {
  var b = a.A, c, d, e = b.altKey;
  M && "keypress" == a.type ? (c = this.S, d = 13 != c && 27 != c ? b.keyCode : 0) : N && "keypress" == a.type ? (c = this.S, d = 0 <= b.charCode && 63232 > b.charCode && Nd(c) ? b.charCode : 0) : Pb ? (c = this.S, d = Nd(c) ? b.keyCode : 0) : (c = b.keyCode || this.S, d = b.charCode || 0, Ud && (e = this.Ya), Kb && (63 == d && 224 == c) && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in Rd ? f = Rd[c] : 25 == c && a.aa && (f = 9) : g && g in Sd && (f = Sd[g]);
  a = f == this.D;
  this.D = f;
  b = new Vd(f, d, a, b);
  b.N = e;
  T(this, b)
};
function Qd(a, b, c) {
  a.Pa && Wd(a);
  a.ta = b;
  a.Oa = O(a.ta, "keypress", a, c);
  a.hb = O(a.ta, "keydown", a.a, c, a);
  a.Pa = O(a.ta, "keyup", a.b, c, a)
}
function Wd(a) {
  a.Oa && (Q(a.Oa), Q(a.hb), Q(a.Pa), a.Oa = null, a.hb = null, a.Pa = null);
  a.ta = null;
  a.D = -1;
  a.S = -1
}
Pd.prototype.q = function() {
  Pd.u.q.call(this);
  Wd(this)
};
function Vd(a, b, c, d) {
  d && qc(this, d, void 0);
  this.type = "key";
  this.P = a;
  this.fb = b;
  this.a = c
}
K(Vd, pc);
function Xd(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
}
h = Xd.prototype;
h.contains = function(a) {
  return this && a ? a instanceof Xd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
h.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this
};
h.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this
};
h.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this
};
h.scale = function(a, b) {
  var c = ka(b) ? b : a;
  this.left *= a;
  this.right *= a;
  this.top *= c;
  this.bottom *= c;
  return this
};
function Yd(a, b) {
  var c = zd(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}
function Zd(a, b) {
  return Yd(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}
function $d(a) {
  var b;
  try {
    b = a.getBoundingClientRect()
  }catch(c) {
    return{left:0, top:0, right:0, bottom:0}
  }
  M && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b
}
function ae(a) {
  if(M && !(M && 8 <= dc)) {
    return a.offsetParent
  }
  var b = zd(a), c = Zd(a, "position"), d = "fixed" == c || "absolute" == c;
  for(a = a.parentNode;a && a != b;a = a.parentNode) {
    if(c = Zd(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) {
      return a
    }
  }
  return null
}
function be(a, b) {
  var c = ce(a), d = ce(b);
  return new vd(c.x - d.x, c.y - d.y)
}
function ce(a) {
  if(1 == a.nodeType) {
    var b;
    if(a.getBoundingClientRect) {
      b = $d(a), b = new vd(b.left, b.top)
    }else {
      b = Kd(xd(a));
      var c, d = zd(a), e = Zd(a, "position"), f = Qb && d.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == e && (c = d.getBoxObjectFor(a)) && (0 > c.screenX || 0 > c.screenY), g = new vd(0, 0), k;
      c = d ? zd(d) : document;
      (k = !M) || (k = M && 9 <= dc) || (xd(c), k = !0);
      k = k ? c.documentElement : c.body;
      if(a != k) {
        if(a.getBoundingClientRect) {
          c = $d(a), d = Kd(xd(d)), g.x = c.left + d.x, g.y = c.top + d.y
        }else {
          if(d.getBoxObjectFor && !f) {
            c = d.getBoxObjectFor(a), d = d.getBoxObjectFor(k), g.x = c.screenX - d.screenX, g.y = c.screenY - d.screenY
          }else {
            f = a;
            do {
              g.x += f.offsetLeft;
              g.y += f.offsetTop;
              f != a && (g.x += f.clientLeft || 0, g.y += f.clientTop || 0);
              if(N && "fixed" == Zd(f, "position")) {
                g.x += d.body.scrollLeft;
                g.y += d.body.scrollTop;
                break
              }
              f = f.offsetParent
            }while(f && f != a);
            if(Pb || N && "absolute" == e) {
              g.y -= d.body.offsetTop
            }
            for(f = a;(f = ae(f)) && f != d.body && f != k;) {
              g.x -= f.scrollLeft, Pb && "TR" == f.tagName || (g.y -= f.scrollTop)
            }
          }
        }
      }
      b = new vd(g.x - b.x, g.y - b.y)
    }
    if(Qb && !bc(12)) {
      var l;
      M ? l = "-ms-transform" : N ? l = "-webkit-transform" : Pb ? l = "-o-transform" : Qb && (l = "-moz-transform");
      var m;
      l && (m = Zd(a, l));
      m || (m = Zd(a, "transform"));
      a = m ? (a = m.match(de)) ? new vd(parseFloat(a[1]), parseFloat(a[2])) : new vd(0, 0) : new vd(0, 0);
      a = new vd(b.x + a.x, b.y + a.y)
    }else {
      a = b
    }
    return a
  }
  l = ma(a.Yb);
  m = a;
  a.targetTouches ? m = a.targetTouches[0] : l && a.A.targetTouches && (m = a.A.targetTouches[0]);
  return new vd(m.clientX, m.clientY)
}
function ee(a, b) {
  var c = a.style;
  "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity\x3d" + 100 * b + ")")
}
function fe(a, b) {
  a.style.display = b ? "" : "none"
}
function ge(a, b, c, d) {
  if(/^\d+px?$/.test(b)) {
    return parseInt(b, 10)
  }
  var e = a.style[c], f = a.runtimeStyle[c];
  a.runtimeStyle[c] = a.currentStyle[c];
  a.style[c] = b;
  b = a.style[d];
  a.style[c] = e;
  a.runtimeStyle[c] = f;
  return b
}
function he(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : null;
  return c ? ge(a, c, "left", "pixelLeft") : 0
}
var ie = {thin:2, medium:4, thick:6};
function je(a, b) {
  if("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) {
    return 0
  }
  var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
  return c in ie ? ie[c] : ge(a, c, "left", "pixelLeft")
}
var de = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
function ke(a, b) {
  R.call(this);
  this.a = a;
  var c = na(this.a) && 1 == this.a.nodeType ? this.a : this.a ? this.a.body : null;
  this.f = !!c && "rtl" == Zd(c, "direction");
  this.b = O(this.a, Qb ? "DOMMouseScroll" : "mousewheel", this, b)
}
K(ke, R);
ke.prototype.handleEvent = function(a) {
  var b = 0, c = 0, d = 0;
  a = a.A;
  if("mousewheel" == a.type) {
    c = 1;
    if(M || N && (Lb || bc("532.0"))) {
      c = 40
    }
    d = le(-a.wheelDelta, c);
    v(a.wheelDeltaX) ? (b = le(-a.wheelDeltaX, c), c = le(-a.wheelDeltaY, c)) : c = d
  }else {
    d = a.detail, 100 < d ? d = 3 : -100 > d && (d = -3), v(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d : c = d
  }
  ka(this.d) && (b = Va(b, -this.d, this.d));
  ka(this.c) && (c = Va(c, -this.c, this.c));
  this.f && (b = -b);
  b = new me(d, a, b, c);
  T(this, b)
};
function le(a, b) {
  return N && (Kb || Tb) && 0 != a % b ? a : a / b
}
ke.prototype.q = function() {
  ke.u.q.call(this);
  Q(this.b);
  this.b = null
};
function me(a, b, c, d) {
  b && qc(this, b, void 0);
  this.type = "mousewheel";
  this.c = a;
  this.d = c;
  this.a = d
}
K(me, pc);
function ne(a) {
  this.length = a.length || a;
  for(var b = 0;b < this.length;b++) {
    this[b] = a[b] || 0
  }
}
ne.prototype.a = 4;
ne.prototype.b = function(a, b) {
  b = b || 0;
  for(var c = 0;c < a.length && b + c < this.length;c++) {
    this[b + c] = a[c]
  }
};
ne.prototype.toString = Array.prototype.join;
"undefined" == typeof Float32Array && (ne.BYTES_PER_ELEMENT = 4, ne.prototype.BYTES_PER_ELEMENT = ne.prototype.a, ne.prototype.set = ne.prototype.b, ne.prototype.toString = ne.prototype.toString, ua("Float32Array", ne));
function oe(a) {
  this.length = a.length || a;
  for(var b = 0;b < this.length;b++) {
    this[b] = a[b] || 0
  }
}
oe.prototype.a = 8;
oe.prototype.b = function(a, b) {
  b = b || 0;
  for(var c = 0;c < a.length && b + c < this.length;c++) {
    this[b + c] = a[c]
  }
};
oe.prototype.toString = Array.prototype.join;
if("undefined" == typeof Float64Array) {
  try {
    oe.BYTES_PER_ELEMENT = 8
  }catch(pe) {
  }
  oe.prototype.BYTES_PER_ELEMENT = oe.prototype.a;
  oe.prototype.set = oe.prototype.b;
  oe.prototype.toString = oe.prototype.toString;
  ua("Float64Array", oe)
}
;function qe(a, b, c, d, e) {
  a[0] = b;
  a[1] = c;
  a[2] = d;
  a[3] = e
}
;function re() {
  var a = Array(16);
  se(a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  return a
}
function te() {
  var a = Array(16);
  se(a, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  return a
}
function se(a, b, c, d, e, f, g, k, l, m, p, q, s, r, t, w, z) {
  a[0] = b;
  a[1] = c;
  a[2] = d;
  a[3] = e;
  a[4] = f;
  a[5] = g;
  a[6] = k;
  a[7] = l;
  a[8] = m;
  a[9] = p;
  a[10] = q;
  a[11] = s;
  a[12] = r;
  a[13] = t;
  a[14] = w;
  a[15] = z
}
function ue(a, b) {
  a[0] = b[0];
  a[1] = b[1];
  a[2] = b[2];
  a[3] = b[3];
  a[4] = b[4];
  a[5] = b[5];
  a[6] = b[6];
  a[7] = b[7];
  a[8] = b[8];
  a[9] = b[9];
  a[10] = b[10];
  a[11] = b[11];
  a[12] = b[12];
  a[13] = b[13];
  a[14] = b[14];
  a[15] = b[15]
}
function ve(a) {
  a[0] = 1;
  a[1] = 0;
  a[2] = 0;
  a[3] = 0;
  a[4] = 0;
  a[5] = 1;
  a[6] = 0;
  a[7] = 0;
  a[8] = 0;
  a[9] = 0;
  a[10] = 1;
  a[11] = 0;
  a[12] = 0;
  a[13] = 0;
  a[14] = 0;
  a[15] = 1
}
function we(a, b, c) {
  var d = a[0], e = a[1], f = a[2], g = a[3], k = a[4], l = a[5], m = a[6], p = a[7], q = a[8], s = a[9], r = a[10], t = a[11], w = a[12], z = a[13], u = a[14];
  a = a[15];
  var A = b[0], x = b[1], D = b[2], y = b[3], C = b[4], B = b[5], P = b[6], H = b[7], F = b[8], J = b[9], U = b[10], I = b[11], ba = b[12], S = b[13], la = b[14];
  b = b[15];
  c[0] = d * A + k * x + q * D + w * y;
  c[1] = e * A + l * x + s * D + z * y;
  c[2] = f * A + m * x + r * D + u * y;
  c[3] = g * A + p * x + t * D + a * y;
  c[4] = d * C + k * B + q * P + w * H;
  c[5] = e * C + l * B + s * P + z * H;
  c[6] = f * C + m * B + r * P + u * H;
  c[7] = g * C + p * B + t * P + a * H;
  c[8] = d * F + k * J + q * U + w * I;
  c[9] = e * F + l * J + s * U + z * I;
  c[10] = f * F + m * J + r * U + u * I;
  c[11] = g * F + p * J + t * U + a * I;
  c[12] = d * ba + k * S + q * la + w * b;
  c[13] = e * ba + l * S + s * la + z * b;
  c[14] = f * ba + m * S + r * la + u * b;
  c[15] = g * ba + p * S + t * la + a * b
}
function xe(a, b, c) {
  var d = a[1] * b + a[5] * c + 0 * a[9] + a[13], e = a[2] * b + a[6] * c + 0 * a[10] + a[14], f = a[3] * b + a[7] * c + 0 * a[11] + a[15];
  a[12] = a[0] * b + a[4] * c + 0 * a[8] + a[12];
  a[13] = d;
  a[14] = e;
  a[15] = f
}
function ye(a, b, c) {
  se(a, a[0] * b, a[1] * b, a[2] * b, a[3] * b, a[4] * c, a[5] * c, a[6] * c, a[7] * c, 1 * a[8], 1 * a[9], 1 * a[10], 1 * a[11], a[12], a[13], a[14], a[15])
}
function ze(a, b) {
  var c = a[0], d = a[1], e = a[2], f = a[3], g = a[4], k = a[5], l = a[6], m = a[7], p = Math.cos(b), q = Math.sin(b);
  a[0] = c * p + g * q;
  a[1] = d * p + k * q;
  a[2] = e * p + l * q;
  a[3] = f * p + m * q;
  a[4] = c * -q + g * p;
  a[5] = d * -q + k * p;
  a[6] = e * -q + l * p;
  a[7] = f * -q + m * p
}
new Float64Array(3);
new Float64Array(3);
new Float64Array(4);
new Float64Array(4);
new Float64Array(4);
new Float64Array(16);
var Ae = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];
function Be(a, b) {
  var c, d, e = Ae.length;
  for(d = 0;d < e;++d) {
    try {
      if(c = a.getContext(Ae[d], b), null !== c) {
        return c
      }
    }catch(f) {
    }
  }
  return null
}
;var Ce = n.devicePixelRatio || 1, De = function() {
  if(!("HTMLCanvasElement" in n)) {
    return!1
  }
  try {
    return null !== Gd("CANVAS").getContext("2d")
  }catch(a) {
    return!1
  }
}(), Ee = n.document && "ontouchstart" in n.document.documentElement || !!n.navigator.msPointerEnabled, Fe = function() {
  if(!("WebGLRenderingContext" in n)) {
    return!1
  }
  try {
    var a = Gd("CANVAS");
    return null !== Be(a, {Xb:!0})
  }catch(b) {
    return!1
  }
}();
function Ge(a, b, c) {
  mc.call(this, a, c);
  this.element = b
}
K(Ge, mc);
function He(a) {
  Xc.call(this);
  this.a = a || [];
  Ie(this)
}
K(He, Xc);
h = He.prototype;
h.clear = function() {
  for(;0 < this.b("length");) {
    Je(this, this.b("length") - 1)
  }
};
h.Dc = function(a) {
  var b, c;
  b = 0;
  for(c = a.length;b < c;++b) {
    this.push(a[b])
  }
  return this
};
h.forEach = function(a, b) {
  L(this.a, a, b)
};
h.push = function(a) {
  var b = this.a.length;
  Ha(this.a, b, 0, a);
  Ie(this);
  T(this, new Ge("add", a, this));
  return b
};
h.remove = function(a) {
  var b = this.a, c, d;
  c = 0;
  for(d = b.length;c < d;++c) {
    if(b[c] === a) {
      return Je(this, c)
    }
  }
};
function Je(a, b) {
  var c = a.a[b];
  Ca.splice.call(a.a, b, 1);
  Ie(a);
  T(a, new Ge("remove", c, a));
  return c
}
function Ie(a) {
  a.d("length", a.a.length)
}
;function Ke(a, b, c) {
  this.a = a;
  this.x = b;
  this.y = c
}
function Le(a, b, c) {
  return a + "/" + b + "/" + c
}
Ke.prototype.toString = function() {
  return Le(this.a, this.x, this.y)
};
function Me(a, b, c, d) {
  this.a = a;
  this.c = b;
  this.b = c;
  this.d = d
}
Me.prototype.contains = function(a) {
  return this.a <= a.x && a.x <= this.c && this.b <= a.y && a.y <= this.d
};
function Ne(a, b) {
  R.call(this);
  this.a = a;
  this.state = b
}
K(Ne, R);
Ne.prototype.b = function() {
  return E(this).toString()
};
function Oe(a, b) {
  this.g = a;
  this.e = b;
  this.a = [];
  this.b = [];
  this.c = {}
}
Oe.prototype.clear = function() {
  this.a.length = 0;
  this.b.length = 0;
  Ra(this.c)
};
function Pe(a) {
  var b = a.a, c = a.b, d = b[0];
  1 == b.length ? (b.length = 0, c.length = 0) : (b[0] = b.pop(), c[0] = c.pop(), Qe(a, 0));
  b = a.e(d);
  delete a.c[b];
  return d
}
function Re(a, b) {
  var c = a.g(b);
  Infinity != c && (a.a.push(b), a.b.push(c), a.c[a.e(b)] = !0, Se(a, 0, a.a.length - 1))
}
Oe.prototype.d = function() {
  return this.a.length
};
Oe.prototype.ba = function() {
  return 0 === this.a.length
};
function Qe(a, b) {
  for(var c = a.a, d = a.b, e = c.length, f = c[b], g = d[b], k = b;b < e >> 1;) {
    var l = 2 * b + 1, m = 2 * b + 2, l = m < e && d[m] < d[l] ? m : l;
    c[b] = c[l];
    d[b] = d[l];
    b = l
  }
  c[b] = f;
  d[b] = g;
  Se(a, k, b)
}
function Se(a, b, c) {
  var d = a.a;
  a = a.b;
  for(var e = d[c], f = a[c];c > b;) {
    var g = c - 1 >> 1;
    if(a[g] > f) {
      d[c] = d[g], a[c] = a[g], c = g
    }else {
      break
    }
  }
  d[c] = e;
  a[c] = f
}
function Te(a) {
  var b = a.g, c = a.a, d = a.b, e = 0, f = c.length, g, k, l;
  for(k = 0;k < f;++k) {
    g = c[k], l = b(g), Infinity == l ? delete a.c[a.e(g)] : (d[e] = l, c[e++] = g)
  }
  c.length = e;
  d.length = e;
  for(b = (a.a.length >> 1) - 1;0 <= b;b--) {
    Qe(a, b)
  }
}
;function Ue(a, b) {
  Oe.call(this, function(b) {
    return a.apply(null, b)
  }, function(a) {
    return a[0].b()
  });
  this.h = b;
  this.f = 0
}
K(Ue, Oe);
Ue.prototype.i = function() {
  --this.f;
  this.h()
};
function Ve(a) {
  Uc.call(this);
  this.ea = sb(a.projection);
  this.fa = v(a.extent) ? a.extent : v(a.projection) ? this.ea.b : null;
  this.i = v(a.attributions) ? a.attributions : null;
  this.r = a.logo;
  this.K = v(a.state) ? a.state : 1
}
K(Ve, Uc);
function W(a) {
  Xc.call(this);
  a = Sa(a);
  a.brightness = v(a.brightness) ? a.brightness : 0;
  a.contrast = v(a.contrast) ? a.contrast : 1;
  a.hue = v(a.hue) ? a.hue : 0;
  a.opacity = v(a.opacity) ? a.opacity : 1;
  a.saturation = v(a.saturation) ? a.saturation : 1;
  a.visible = v(a.visible) ? a.visible : !0;
  a.maxResolution = v(a.maxResolution) ? a.maxResolution : Infinity;
  a.minResolution = v(a.minResolution) ? a.minResolution : 0;
  Yc(this, a)
}
K(W, Xc);
W.prototype.i = function() {
  return this.b("brightness")
};
W.prototype.getBrightness = W.prototype.i;
W.prototype.h = function() {
  return this.b("contrast")
};
W.prototype.getContrast = W.prototype.h;
W.prototype.j = function() {
  return this.b("hue")
};
W.prototype.getHue = W.prototype.j;
function We(a) {
  var b = a.i(), c = a.h(), d = a.j(), e = a.n(), f = a.o(), g = a.g(), k = a.e(), l = a.l();
  a = a.k();
  return{brightness:v(b) ? Va(b, -1, 1) : 0, contrast:v(c) ? Math.max(c, 0) : 1, hue:v(d) ? d : 0, opacity:v(e) ? Va(e, 0, 1) : 1, saturation:v(f) ? Math.max(f, 0) : 1, lb:g, visible:v(k) ? !!k : !0, maxResolution:v(l) ? l : Infinity, minResolution:v(a) ? Math.max(a, 0) : 0}
}
W.prototype.l = function() {
  return this.b("maxResolution")
};
W.prototype.getMaxResolution = W.prototype.l;
W.prototype.k = function() {
  return this.b("minResolution")
};
W.prototype.getMinResolution = W.prototype.k;
W.prototype.n = function() {
  return this.b("opacity")
};
W.prototype.getOpacity = W.prototype.n;
W.prototype.o = function() {
  return this.b("saturation")
};
W.prototype.getSaturation = W.prototype.o;
W.prototype.e = function() {
  return this.b("visible")
};
W.prototype.getVisible = W.prototype.e;
W.prototype.C = function(a) {
  this.d("brightness", a)
};
W.prototype.setBrightness = W.prototype.C;
W.prototype.K = function(a) {
  this.d("contrast", a)
};
W.prototype.setContrast = W.prototype.K;
W.prototype.ea = function(a) {
  this.d("hue", a)
};
W.prototype.setHue = W.prototype.ea;
W.prototype.fa = function(a) {
  this.d("maxResolution", a)
};
W.prototype.setMaxResolution = W.prototype.fa;
W.prototype.ya = function(a) {
  this.d("minResolution", a)
};
W.prototype.setMinResolution = W.prototype.ya;
W.prototype.za = function(a) {
  this.d("opacity", a)
};
W.prototype.setOpacity = W.prototype.za;
W.prototype.Aa = function(a) {
  this.d("saturation", a)
};
W.prototype.setSaturation = W.prototype.Aa;
W.prototype.Ba = function(a) {
  this.d("visible", a)
};
W.prototype.setVisible = W.prototype.Ba;
function Xe(a) {
  var b = Sa(a);
  delete b.source;
  W.call(this, b);
  this.a = a.source;
  O(this.a, "change", this.t, !1, this)
}
K(Xe, W);
Xe.prototype.eb = function(a) {
  a = v(a) ? a : {layers:[], B:[]};
  a.layers.push(this);
  a.B.push(We(this));
  return a
};
Xe.prototype.w = ca("a");
Xe.prototype.g = function() {
  return this.a.K
};
Xe.prototype.t = function() {
  Vc(this)
};
function Ye(a, b, c) {
  mc.call(this, a);
  this.map = b;
  this.d = v(c) ? c : null
}
K(Ye, mc);
function X(a, b, c, d) {
  Ye.call(this, a, b, d);
  this.a = c;
  this.originalEvent = c.A;
  this.coordinate = b.i(Ze(b, this.originalEvent));
  this.pixel = Ze(b, this.originalEvent)
}
K(X, Ye);
X.prototype.v = function() {
  X.u.v.call(this);
  this.a.v()
};
X.prototype.ia = function() {
  X.u.ia.call(this);
  this.a.ia()
};
function $e(a) {
  R.call(this);
  this.a = a;
  this.i = 0;
  this.d = !1;
  this.f = this.g = this.e = this.c = this.b = null;
  a = this.a.c;
  this.h = [O(a, "mousemove", this.Fb, !1, this), O(a, "click", this.Fb, !1, this)];
  this.c = O(a, "mousedown", this.nc, !1, this);
  this.e = O(a, "MSPointerDown", this.qc, !1, this);
  this.g = O(a, "touchstart", this.Ac, !1, this)
}
K($e, R);
function af(a, b) {
  if(0 !== a.i) {
    n.clearTimeout(a.i);
    a.i = 0;
    var c = new X(cf, a.a, b);
    T(a, c)
  }else {
    a.i = n.setTimeout(G(function() {
      this.i = 0;
      var a = new X(df, this.a, b);
      T(this, a)
    }, a), 250)
  }
}
h = $e.prototype;
h.pc = function(a) {
  this.f && (L(this.b, Q), this.b = null, this.d ? (a = new X(ef, this.a, a), T(this, a)) : sc(a) && af(this, a))
};
h.nc = function(a) {
  null !== this.e && (Q(this.e), this.e = null, Q(this.g), this.g = null);
  var b = new X(ff, this.a, a);
  T(this, b);
  this.f = a;
  this.d = !1;
  this.b = [O(n.document, "mousemove", this.oc, !1, this), O(n.document, "mouseup", this.pc, !1, this)];
  a.v()
};
h.oc = function(a) {
  var b;
  this.d || (this.d = !0, b = new X(gf, this.a, this.f), T(this, b));
  b = new X(hf, this.a, a);
  T(this, b)
};
h.qc = function(a) {
  null !== this.c && (Q(this.c), this.c = null, Q(this.g), this.g = null);
  var b = new X(jf, this.a, a);
  T(this, b);
  this.f = a;
  this.d = !1;
  this.b = [O(n.document, "MSPointerMove", this.rc, !1, this), O(n.document, "MSPointerUp", this.sc, !1, this)];
  a.v()
};
h.rc = function(a) {
  if(a.clientX != this.f.clientX || a.clientY != this.f.clientY) {
    this.d = !0, a = new X(kf, this.a, a), T(this, a)
  }
};
h.sc = function(a) {
  var b = new X(lf, this.a, a);
  T(this, b);
  L(this.b, Q);
  !this.d && sc(a) && af(this, this.f)
};
h.Ac = function(a) {
  null !== this.c && (Q(this.c), this.c = null, Q(this.e), this.e = null);
  var b = new X(jf, this.a, a);
  T(this, b);
  this.f = a;
  this.d = !1;
  null === this.b && (this.b = [O(n.document, "touchmove", this.zc, !1, this), O(n.document, "touchend", this.yc, !1, this)]);
  a.v()
};
h.zc = function(a) {
  this.d = !0;
  var b = new X(kf, this.a, a);
  T(this, b);
  a.v()
};
h.yc = function(a) {
  var b = new X(lf, this.a, a);
  T(this, b);
  0 === a.A.targetTouches.length && (L(this.b, Q), this.b = null);
  this.d || af(this, this.f)
};
h.q = function() {
  null !== this.h && (L(this.h, Q), this.h = null);
  null !== this.c && (Q(this.c), this.c = null);
  null !== this.e && (Q(this.e), this.e = null);
  null !== this.g && (Q(this.g), this.g = null);
  null !== this.b && (L(this.b, Q), this.b = null);
  $e.u.q.call(this)
};
h.Fb = function(a) {
  T(this, new X(a.type, this.a, a))
};
var cf = "dblclick", ff = "down", gf = "dragstart", hf = "drag", ef = "dragend", df = "singleclick", jf = "touchstart", kf = "touchmove", lf = "touchend", mf = {Pc:"click", Qc:cf, Zc:"mousemove", Tc:ff, Wc:gf, Uc:hf, Vc:ef, ad:df, dd:jf, cd:kf, bd:lf};
function nf(a) {
  Xc.call(this);
  this.element = v(a.element) ? a.element : null;
  this.r = v(a.target) ? ja(a.target) ? document.getElementById(a.target) : a.target : null;
  this.e = null;
  this.i = []
}
K(nf, Xc);
nf.prototype.q = function() {
  Jd(this.element);
  nf.u.q.call(this)
};
nf.prototype.g = ea;
nf.prototype.setMap = function(a) {
  null === this.e || Jd(this.element);
  0 != this.i.length && (L(this.i, Q), this.i.length = 0);
  this.e = a;
  null !== this.e && ((null === this.r ? a.K : this.r).appendChild(this.element), this.g !== ea && this.i.push(O(a, "postrender", this.g, !1, this)), of(a))
};
function pf(a) {
  a = v(a) ? a : {};
  this.j = Gd("UL");
  var b = Dd("DIV", {"class":(v(a.className) ? a.className : "ol-attribution") + " ol-unselectable"}, this.j);
  nf.call(this, {element:b, target:a.target});
  this.h = !0;
  this.c = {};
  this.a = {}
}
K(pf, nf);
pf.prototype.g = function(a) {
  a = a.d;
  if(null === a) {
    this.h && (fe(this.element, !1), this.h = !1)
  }else {
    var b, c, d, e, f, g, k, l, m, p = a.Qa, q = Sa(a.attributions), s = {};
    b = 0;
    for(c = p.length;b < c;b++) {
      if(d = p[b].a, m = E(d).toString(), l = d.i, null !== l) {
        for(d = 0, e = l.length;d < e;d++) {
          g = l[d], k = E(g).toString(), k in q || (f = a.ua[m], v(f) && g.b(f) ? (k in s && delete s[k], q[k] = g) : s[k] = g)
        }
      }
    }
    b = [q, s];
    a = b[0];
    b = b[1];
    for(var r in this.c) {
      r in a ? (this.a[r] || (fe(this.c[r], !0), this.a[r] = !0), delete a[r]) : r in b ? (this.a[r] && (fe(this.c[r], !1), delete this.a[r]), delete b[r]) : (Jd(this.c[r]), delete this.c[r], delete this.a[r])
    }
    for(r in a) {
      c = Gd("LI"), c.innerHTML = a[r].a(), this.j.appendChild(c), this.c[r] = c, this.a[r] = !0
    }
    for(r in b) {
      c = Gd("LI"), c.innerHTML = b[r].a(), fe(c, !1), this.j.appendChild(c), this.c[r] = c
    }
    r = !Qa(this.a);
    this.h != r && (fe(this.element, r), this.h = r)
  }
};
function qf(a) {
  a = v(a) ? a : {};
  this.c = Gd("UL");
  var b = Dd("DIV", {"class":(v(a.className) ? a.className : "ol-logo") + " ol-unselectable"}, this.c);
  nf.call(this, {element:b, target:a.target});
  this.a = !0;
  this.h = {}
}
K(qf, nf);
qf.prototype.g = function(a) {
  a = a.d;
  if(null === a) {
    this.a && (fe(this.element, !1), this.a = !1)
  }else {
    var b;
    a = a.kb;
    var c = this.h;
    for(b in c) {
      b in a || (Jd(c[b]), delete c[b])
    }
    for(var d in a) {
      if(!(d in c)) {
        b = new Image;
        b.src = d;
        var e = a[d];
        "" === e ? e = b : (e = Dd("A", {href:e, target:"_blank"}), e.appendChild(b));
        b = Dd("LI", void 0, e);
        this.c.appendChild(b);
        c[d] = b
      }
    }
    d = !Qa(a);
    this.a != d && (fe(this.element, d), this.a = d)
  }
};
function rf(a) {
  return 1 - Math.pow(1 - a, 3)
}
;function sf(a) {
  return 3 * a * a - 2 * a * a * a
}
function tf(a) {
  return a
}
;function uf(a) {
  var b = a.source, c = v(a.start) ? a.start : ta(), d = b[0], e = b[1], f = v(a.duration) ? a.duration : 1E3, g = v(a.easing) ? a.easing : sf;
  return function(a, b) {
    if(b.time < c) {
      return b.L = !0, b.s[0] += 1, !0
    }
    if(b.time < c + f) {
      var m = 1 - g((b.time - c) / f), p = d - b.p.center[0], q = e - b.p.center[1];
      b.L = !0;
      b.p.center[0] += m * p;
      b.p.center[1] += m * q;
      b.s[0] += 1;
      return!0
    }
    return!1
  }
}
function vf(a) {
  var b = a.rotation, c = v(a.start) ? a.start : ta(), d = v(a.duration) ? a.duration : 1E3, e = v(a.easing) ? a.easing : sf;
  return function(a, g) {
    if(g.time < c) {
      return g.L = !0, g.s[0] += 1, !0
    }
    if(g.time < c + d) {
      var k = 1 - e((g.time - c) / d), l = b - g.p.rotation;
      g.L = !0;
      g.p.rotation += k * l;
      g.s[0] += 1;
      return!0
    }
    return!1
  }
}
function wf(a) {
  var b = a.resolution, c = v(a.start) ? a.start : ta(), d = v(a.duration) ? a.duration : 1E3, e = v(a.easing) ? a.easing : sf;
  return function(a, g) {
    if(g.time < c) {
      return g.L = !0, g.s[0] += 1, !0
    }
    if(g.time < c + d) {
      var k = 1 - e((g.time - c) / d), l = b - g.p.resolution;
      g.L = !0;
      g.p.resolution += k * l;
      g.s[0] += 1;
      return!0
    }
    return!1
  }
}
;function xf(a) {
  a = v(a) ? a : {};
  var b = v(a.className) ? a.className : "ol-zoom", c = v(a.delta) ? a.delta : 1, d = Dd("A", {href:"#zoomIn", "class":b + "-in"});
  O(d, ["touchend", "click"], sa(xf.prototype.c, c), !1, this);
  var e = Dd("A", {href:"#zoomOut", "class":b + "-out"});
  O(e, ["touchend", "click"], sa(xf.prototype.c, -c), !1, this);
  b = Dd("DIV", b + " ol-unselectable", d, e);
  nf.call(this, {element:b, target:a.target});
  this.a = v(a.duration) ? a.duration : 250
}
K(xf, nf);
xf.prototype.c = function(a, b) {
  b.v();
  var c = this.e, d = c.a().a(), e = d.i();
  v(e) && (0 < this.a && c.e(wf({resolution:e, duration:this.a, easing:rf})), c = fd(d, e, a), d.h(c))
};
function yf(a) {
  a = v(a) ? a : {};
  var b = new He;
  (v(a.attribution) ? a.attribution : 1) && b.push(new pf(v(a.attributionOptions) ? a.attributionOptions : void 0));
  (v(a.logo) ? a.logo : 1) && b.push(new qf(v(a.logoOptions) ? a.logoOptions : void 0));
  (v(a.zoom) ? a.zoom : 1) && b.push(new xf(v(a.zoomOptions) ? a.zoomOptions : void 0));
  return b
}
;function zf() {
  this.f = -0.005;
  this.c = 0.05;
  this.e = 100;
  this.a = [];
  this.b = this.d = 0
}
function Af(a) {
  var b = ta() - a.e, c = a.a.length - 3;
  if(a.a[c + 2] < b) {
    return!1
  }
  for(var d = c - 3;0 <= d && a.a[d + 2] > b;) {
    d -= 3
  }
  if(0 <= d) {
    var b = a.a[c + 2] - a.a[d + 2], e = a.a[c] - a.a[d], c = a.a[c + 1] - a.a[d + 1];
    a.d = Math.atan2(c, e);
    a.b = Math.sqrt(e * e + c * c) / b;
    return a.b > a.c
  }
  return!1
}
function Bf(a, b) {
  var c = a.f, d = a.b, e = a.c, f = Math.log(a.c / a.b) / a.f;
  return uf({source:b, duration:f, easing:function(a) {
    return d * (Math.exp(c * a * f) - 1) / (e - d)
  }})
}
;function Cf() {
  Uc.call(this);
  this.l = null
}
K(Cf, Uc);
Cf.prototype.setMap = function(a) {
  this.l = a
};
function Df(a, b, c, d, e) {
  if(null != c) {
    var f = b.j(), g = b.e();
    v(f) && (v(g) && v(e) && 0 < e) && (a.e(vf({rotation:f, duration:e, easing:rf})), v(d) && a.e(uf({source:g, duration:e, easing:rf})));
    if(null != d) {
      var k = gd(b, c, d);
      Ef(a, function() {
        b.c(k);
        b.n(c)
      })
    }else {
      b.n(c)
    }
  }
}
function Ff(a, b, c, d, e) {
  var f = b.i();
  c = fd(b, f, c, 0);
  Gf(a, b, c, d, e)
}
function Gf(a, b, c, d, e) {
  if(null != c) {
    var f = b.i(), g = b.e();
    v(f) && (v(g) && v(e) && 0 < e) && (a.e(wf({resolution:f, duration:e, easing:rf})), v(d) && a.e(uf({source:g, duration:e, easing:rf})));
    if(null != d) {
      var k = hd(b, c, d);
      Ef(a, function() {
        b.c(k);
        b.h(c)
      })
    }else {
      b.h(c)
    }
  }
}
;function Hf(a) {
  a = v(a) ? a : {};
  this.a = v(a.delta) ? a.delta : 1;
  Cf.call(this);
  this.b = v(a.duration) ? a.duration : 250
}
K(Hf, Cf);
Hf.prototype.ka = function(a) {
  var b = !1, c = a.a;
  if(a.type == cf) {
    var b = a.map, d = a.coordinate, c = c.aa ? -this.a : this.a, e = b.a().a();
    Ff(b, e, c, d, this.b);
    a.v();
    b = !0
  }
  return!b
};
function If(a) {
  a = a.a;
  return a.N && !a.Ua && a.aa
}
function Jf(a) {
  a = a.a;
  return!a.N && !a.Ua && !a.aa
}
function Kf(a) {
  a = a.a;
  return!a.N && !a.Ua && a.aa
}
function Lf(a) {
  a = a.a.target.tagName;
  return"INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a
}
;function Mf() {
  Cf.call(this);
  this.e = !1;
  this.d = this.b = this.i = this.g = 0;
  this.n = this.j = null
}
K(Mf, Cf);
h = Mf.prototype;
h.La = ea;
h.Ma = ea;
h.Na = Mc;
h.xb = ea;
h.ka = function(a) {
  var b = a.map, c = b.a(), d;
  if(d = v(c)) {
    if(c = c.k()) {
      c = null != b.k()
    }
    d = c
  }
  if(!d) {
    return!0
  }
  c = !1;
  d = b.a();
  b = a.a;
  a.type == ff && this.xb(a);
  this.e ? a.type == hf ? (this.b = b.clientX - this.g, this.d = b.clientY - this.i, this.La(a)) : a.type == ef && (this.b = b.clientX - this.g, this.d = b.clientY - this.i, this.e = !1, this.Ma(a)) : a.type == gf && (d = jd(d.a()), this.g = b.clientX, this.i = b.clientY, this.d = this.b = 0, this.j = d.center, this.n = a.coordinate, this.Na(a) && (this.e = !0, a.v(), c = !0));
  return!c
};
function Nf(a) {
  Mf.call(this);
  a = v(a) ? a : {};
  this.h = v(a.condition) ? a.condition : Jf;
  this.a = a.kinetic;
  this.c = null
}
K(Nf, Mf);
Nf.prototype.La = function(a) {
  this.a && this.a.a.push(a.a.clientX, a.a.clientY, ta());
  a = a.map;
  var b = a.a(), c = jd(b), d = [-c.resolution * this.b, c.resolution * this.d];
  Xa(d, c.rotation);
  Wa(d, this.j);
  d = b.g.center(d);
  Y(a);
  b.c(d)
};
Nf.prototype.Ma = function(a) {
  a = a.map;
  var b = a.a();
  ed(b, -1);
  if(this.a && Af(this.a)) {
    var b = b.a(), c = jd(b), d = (this.a.c - this.a.b) / this.a.f, e = this.a.d;
    this.c = Bf(this.a, c.center);
    a.e(this.c);
    c = Of(a, c.center);
    d = a.i([c[0] - d * Math.cos(e), c[1] - d * Math.sin(e)]);
    d = b.g.center(d);
    b.c(d)
  }
  Y(a)
};
Nf.prototype.Na = function(a) {
  var b = a.a;
  if(sc(b) && this.h(a)) {
    if(this.a) {
      var c = this.a;
      c.a.length = 0;
      c.d = 0;
      c.b = 0;
      this.a.a.push(b.clientX, b.clientY, ta())
    }
    a = a.map;
    ed(a.a(), 1);
    Y(a);
    return!0
  }
  return!1
};
Nf.prototype.xb = function(a) {
  var b = a.map, c = b.a();
  null !== this.c && Fa(b.n, this.c) && (Y(b), c.c(a.d.p.center), this.c = null)
};
function Pf(a) {
  a = v(a) ? a : {};
  Mf.call(this);
  this.c = v(a.condition) ? a.condition : If;
  this.a = void 0
}
K(Pf, Mf);
Pf.prototype.La = function(a) {
  var b = a.map, c = b.k();
  a = a.pixel;
  c = Math.atan2(c[1] / 2 - a[1], a[0] - c[0] / 2);
  if(v(this.a)) {
    a = c - this.a;
    var d = b.a().a(), e = jd(d);
    Y(b);
    Df(b, d, e.rotation - a)
  }
  this.a = c
};
Pf.prototype.Ma = function(a) {
  a = a.map;
  var b = a.a();
  ed(b, -1);
  var b = b.a(), c = jd(b).rotation, c = b.constrainRotation(c, 0);
  Df(a, b, c, void 0, 250)
};
Pf.prototype.Na = function(a) {
  return sc(a.a) && this.c(a) ? (a = a.map, ed(a.a(), 1), Y(a), this.a = void 0, !0) : !1
};
function Qf() {
  Uc.call(this);
  this.extent = void 0;
  this.h = -1;
  this.e = {};
  this.k = this.g = 0
}
K(Qf, Uc);
function Rf(a, b, c, d) {
  for(var e = 0, f = a[c - d], g = a[c - d + 1];b < c;b += d) {
    var k = a[b], l = a[b + 1], e = e + (k - f) * (l + g), f = k, g = l
  }
  return 0 < e
}
function Sf(a, b, c, d) {
  var e = c[0], f = c[1], g = c[4], k = c[5], l = c[12];
  c = c[13];
  var m = v(d) ? d : [], p = 0, q, s;
  q = 0;
  for(s = a.length;q < s;q += b) {
    var r = a[q], t = a[q + 1];
    m[p++] = e * r + g * t + l;
    m[p++] = f * r + k * t + c
  }
  v(d) && m.length != p && (m.length = p);
  return m
}
;function Tf() {
  Qf.call(this);
  this.i = "XY";
  this.b = 2;
  this.a = null
}
K(Tf, Qf);
function Uf(a) {
  if("XY" == a) {
    return 2
  }
  if("XYZ" == a || "XYM" == a) {
    return 3
  }
  if("XYZM" == a) {
    return 4
  }
  throw Error("unsupported layout: " + a);
}
function Vf(a) {
  if(a.h != a.f) {
    var b = a.a, c = a.b, d = $a(Infinity, Infinity, -Infinity, -Infinity, a.extent), e, f;
    e = 0;
    for(f = b.length;e < f;e += c) {
      var g = d, k = b[e], l = b[e + 1];
      g[0] = Math.min(g[0], k);
      g[1] = Math.min(g[1], l);
      g[2] = Math.max(g[2], k);
      g[3] = Math.max(g[3], l)
    }
    a.extent = d;
    a.h = a.f
  }
  a = a.extent;
  a = v(void 0) ? void 0 : a;
  return a
}
function Wf(a, b) {
  a.k != a.f && (Ra(a.e), a.g = 0, a.k = a.f);
  if(0 > b || 0 !== a.g && b <= a.g) {
    return a
  }
  var c = b.toString();
  if(a.e.hasOwnProperty(c)) {
    return a.e[c]
  }
  var d = a.j(b);
  if(d.a.length < a.a.length) {
    return a.e[c] = d
  }
  a.g = b;
  return a
}
Tf.prototype.j = function() {
  return this
};
Tf.prototype.transform = function(a) {
  null !== this.a && (a(this.a, this.a, this.b), Vc(this))
};
function Xf(a, b, c) {
  var d = a.a;
  return null === d ? null : Sf(d, a.b, b, c)
}
;function Yf(a, b) {
  Tf.call(this);
  this.d = [];
  this.n = -1;
  this.o = null;
  this.l = this.r = this.t = -1;
  this.c = null;
  if(null === a) {
    Zf(this, null, this.d)
  }else {
    a: {
      var c = b, d = a;
      if(v(c)) {
        d = Uf(c)
      }else {
        for(c = 0;2 > c;++c) {
          if(0 === d.length) {
            this.i = "XY";
            this.b = 2;
            break a
          }
          d = d[0]
        }
        d = d.length;
        if(2 == d) {
          c = "XY"
        }else {
          if(3 == d) {
            c = "XYZ"
          }else {
            if(4 == d) {
              c = "XYZM"
            }else {
              throw Error("unsupported stride: " + d);
            }
          }
        }
      }
      this.i = c;
      this.b = d
    }
    null === this.a && (this.a = []);
    var c = this.a, d = this.b, e = this.d, f = 0, e = v(e) ? e : [], g = 0, k, l;
    k = 0;
    for(l = a.length;k < l;++k) {
      var m;
      m = c;
      for(var p = a[k], q = d, s = void 0, r = void 0, s = 0, r = p.length;s < r;++s) {
        var t = p[s], w;
        for(w = 0;w < q;++w) {
          m[f++] = t[w]
        }
      }
      m = f;
      f = e[g++] = m
    }
    e.length = g;
    this.a.length = 0 === e.length ? 0 : e[e.length - 1];
    Vc(this)
  }
}
K(Yf, Tf);
Yf.prototype.j = function(a) {
  var b = [], c = [], d = this.a, e = this.d, f = this.b;
  a = Math.sqrt(a);
  var g = 0, k = 0, l, m;
  l = 0;
  for(m = e.length;l < m;++l) {
    var p = e[l];
    a: {
      var q = d, s = p, r = f, t = a, w = b;
      if(g != s) {
        var z = t * Math.round(q[g] / t), u = t * Math.round(q[g + 1] / t), g = g + r;
        w[k++] = z;
        w[k++] = u;
        var A = void 0, x = void 0;
        do {
          if(A = t * Math.round(q[g] / t), x = t * Math.round(q[g + 1] / t), g += r, g == s) {
            w[k++] = A;
            w[k++] = x;
            break a
          }
        }while(A == z && x == u);
        for(;g < s;) {
          var D, y;
          D = t * Math.round(q[g] / t);
          y = t * Math.round(q[g + 1] / t);
          g += r;
          if(D != A || y != x) {
            var C = A - z, B = x - u, P = D - z, H = y - u;
            C * H == B * P && (0 > C && P < C || C == P || 0 < C && P > C) && (0 > B && H < B || B == H || 0 < B && H > B) || (w[k++] = A, w[k++] = x, z = A, u = x);
            A = D;
            x = y
          }
        }
        w[k++] = A;
        w[k++] = x
      }
    }
    c.push(k);
    g = p
  }
  b.length = k;
  d = new Yf(null);
  Zf(d, b, c);
  return d
};
function Zf(a, b, c) {
  a.b = Uf("XY");
  a.i = "XY";
  a.a = b;
  a.d = c;
  Vc(a)
}
;function $f(a, b, c, d, e, f) {
  mc.call(this, a, b);
  this.render = c;
  this.frameState = d;
  this.context = e;
  this.glContext = f
}
K($f, mc);
function ag(a) {
  this.d = this.b = this.c = this.f = this.a = null;
  this.g = a
}
K(ag, hc);
function bg(a) {
  var b = a.c, c = a.b;
  a = Ea([b, [b[0], c[1]], c, [c[0], b[1]]], a.a.i, a.a);
  return new Yf([a])
}
ag.prototype.q = function() {
  this.setMap(null)
};
ag.prototype.e = function(a) {
  var b = this.d, c = this.g;
  a.render.ub(Infinity, function(a) {
    a.R(c.d, c.b);
    a.pa(b, null)
  })
};
function cg(a) {
  null === a.a || (null === a.c || null === a.b) || Y(a.a)
}
ag.prototype.setMap = function(a) {
  null !== this.f && (Q(this.f), this.f = null, Y(this.a), this.a = null);
  this.a = a;
  null !== this.a && (this.f = O(a, "postcompose", this.e, !1, this), cg(this))
};
function dg(a, b) {
  mc.call(this, a);
  this.a = b
}
K(dg, mc);
function eg(a) {
  Mf.call(this);
  a = v(a) ? a : {};
  this.a = new ag(v(a.style) ? a.style : null);
  this.c = null;
  this.k = v(a.condition) ? a.condition : Nc
}
K(eg, Mf);
eg.prototype.La = function(a) {
  var b = this.a;
  a = a.pixel;
  b.c = this.c;
  b.b = a;
  b.d = bg(b);
  cg(b)
};
eg.prototype.h = ea;
eg.prototype.Ma = function(a) {
  this.a.setMap(null);
  64 <= this.b * this.b + this.d * this.d && (this.h(a), T(this, new dg("boxend", a.coordinate)))
};
eg.prototype.Na = function(a) {
  if(sc(a.a) && this.k(a)) {
    this.c = a.pixel;
    this.a.setMap(a.map);
    var b = this.a, c = this.c;
    b.c = this.c;
    b.b = c;
    b.d = bg(b);
    cg(b);
    T(this, new dg("boxstart", a.coordinate));
    return!0
  }
  return!1
};
var fg = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370db", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#db7093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
var gg = /^#(?:[0-9a-f]{3}){1,2}$/i, hg = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i, ig = /^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i;
function jg(a) {
  if(!ja(a)) {
    var b = a[0];
    b != (b | 0) && (b = b + 0.5 | 0);
    var c = a[1];
    c != (c | 0) && (c = c + 0.5 | 0);
    var d = a[2];
    d != (d | 0) && (d = d + 0.5 | 0);
    a = "rgba(" + b + "," + c + "," + d + "," + a[3] + ")"
  }
  return a
}
var lg = function() {
  var a = {}, b = 0;
  return function(c, d) {
    var e;
    if(a.hasOwnProperty(c)) {
      e = a[c]
    }else {
      if(1024 <= b) {
        e = 0;
        for(var f in a) {
          e++ & 0 && (delete a[f], --b)
        }
      }
      e = kg(c);
      a[c] = e;
      ++b
    }
    v(d) && (d[0] = e[0], d[1] = e[1], d[2] = e[2], d[3] = e[3], e = d);
    return e
  }
}();
function kg(a) {
  var b = !1;
  fg.hasOwnProperty(a) && (a = fg[a], b = !0);
  var c, d;
  if(b || gg.exec(a)) {
    return d = 3 == a.length - 1 ? 1 : 2, b = parseInt(a.substr(1 + 0 * d, d), 16), c = parseInt(a.substr(1 + 1 * d, d), 16), a = parseInt(a.substr(1 + 2 * d, d), 16), 1 == d && (b = (b << 4) + b, c = (c << 4) + c, a = (a << 4) + a), b = [b, c, a, 1]
  }
  if(d = ig.exec(a)) {
    return b = Number(d[1]), c = Number(d[2]), a = Number(d[3]), d = Number(d[4]), b = [b, c, a, d], mg(b, b)
  }
  if(d = hg.exec(a)) {
    return b = Number(d[1]), c = Number(d[2]), a = Number(d[3]), b = [b, c, a, 1], mg(b, b)
  }
  throw Error(a + " is not a valid color");
}
function mg(a, b) {
  var c = v(b) ? b : [];
  c[0] = Va(a[0] + 0.5 | 0, 0, 255);
  c[1] = Va(a[1] + 0.5 | 0, 0, 255);
  c[2] = Va(a[2] + 0.5 | 0, 0, 255);
  c[3] = Va(a[3], 0, 1);
  return c
}
;function ng() {
  var a = {color:[0, 0, 255, 1]}, a = v(a) ? a : {};
  this.f = v(a.color) ? a.color : null;
  this.a = a.lineCap;
  this.b = v(a.lineDash) ? a.lineDash : null;
  this.d = a.lineJoin;
  this.c = a.miterLimit;
  this.e = a.width
}
;function og() {
  var a = {stroke:new ng}, a = v(a) ? a : {};
  this.d = v(a.fill) ? a.fill : null;
  this.c = v(a.image) ? a.image : null;
  this.b = v(a.stroke) ? a.stroke : null;
  this.f = v(a.text) ? a.text : null;
  this.a = a.zIndex
}
;function pg(a) {
  a = v(a) ? a : {};
  eg.call(this, {condition:v(a.condition) ? a.condition : Kf, style:v(a.style) ? a.style : new og})
}
K(pg, eg);
pg.prototype.h = function() {
  var a = this.l, b = a.a().a(), c = Vf(this.a.d), d = [(c[0] + c[2]) / 2, (c[1] + c[3]) / 2], c = id(c, a.k()), c = fd(b, c, 0, void 0);
  Gf(a, b, c, d, 200)
};
function qg(a) {
  Cf.call(this);
  a = v(a) ? a : {};
  this.a = v(a.condition) ? a.condition : Pc(Jf, Lf);
  this.b = v(a.delta) ? a.delta : 128
}
K(qg, Cf);
qg.prototype.ka = function(a) {
  var b = !1;
  if("key" == a.type) {
    var c = a.a.P;
    if(this.a(a) && (40 == c || 37 == c || 39 == c || 38 == c)) {
      var d = a.map, b = d.a(), e = jd(b), f = e.resolution * this.b, g = 0, k = 0;
      40 == c ? k = -f : 37 == c ? g = -f : 39 == c ? g = f : k = f;
      c = [g, k];
      Xa(c, e.rotation);
      e = b.e();
      v(e) && (v(100) && d.e(uf({source:e, duration:100, easing:tf})), d = b.g.center([e[0] + c[0], e[1] + c[1]]), b.c(d));
      a.v();
      b = !0
    }
  }
  return!b
};
function rg(a) {
  Cf.call(this);
  a = v(a) ? a : {};
  this.b = v(a.condition) ? a.condition : Lf;
  this.a = v(a.delta) ? a.delta : 1;
  this.d = v(a.duration) ? a.duration : 100
}
K(rg, Cf);
rg.prototype.ka = function(a) {
  var b = !1;
  if("key" == a.type) {
    var c = a.a.fb;
    if(this.b(a) && (43 == c || 45 == c)) {
      b = a.map;
      c = 43 == c ? this.a : -this.a;
      Y(b);
      var d = b.a().a();
      Ff(b, d, c, void 0, this.d);
      a.v();
      b = !0
    }
  }
  return!b
};
function sg(a) {
  a = v(a) ? a : {};
  Cf.call(this);
  this.a = 0;
  this.g = v(a.duration) ? a.duration : 250;
  this.d = null;
  this.c = this.b = void 0
}
K(sg, Cf);
sg.prototype.ka = function(a) {
  var b = !1;
  if("mousewheel" == a.type) {
    var b = a.map, c = a.a;
    this.d = a.coordinate;
    this.a += c.a / 3;
    v(this.b) || (this.b = ta());
    c = Math.max(80 - (ta() - this.b), 0);
    n.clearTimeout(this.c);
    this.c = n.setTimeout(G(this.e, this, b), c);
    a.v();
    b = !0
  }
  return!b
};
sg.prototype.e = function(a) {
  var b = Va(this.a, -1, 1), c = a.a().a();
  Y(a);
  Ff(a, c, -b, this.d, this.g);
  this.a = 0;
  this.d = null;
  this.c = this.b = void 0
};
function tg() {
  Cf.call(this);
  this.d = !1;
  this.j = {};
  this.targetTouches = []
}
K(tg, Cf);
function ug(a) {
  for(var b = a.length, c = 0, d = 0, e = 0;e < b;e++) {
    c += a[e].clientX, d += a[e].clientY
  }
  return[c / b, d / b]
}
tg.prototype.g = ea;
tg.prototype.e = Mc;
tg.prototype.i = Mc;
tg.prototype.ka = function(a) {
  var b = a.map.a(), c = a.type;
  if(c === jf || c === kf || c === lf) {
    c = a.a, v(c.targetTouches) ? this.targetTouches = c.targetTouches : v(c.pointerId) && (a.type == lf ? delete this.j[c.pointerId] : this.j[c.pointerId] = c, this.targetTouches = Oa(this.j))
  }
  this.d && (a.type == kf ? this.g(a) : a.type == lf && ((this.d = this.e(a)) || ed(b, -1)));
  a.type == jf && (a = this.i(a), !this.d && a && ed(b, 1), this.d = a);
  return!0
};
function vg(a) {
  tg.call(this);
  this.a = (v(a) ? a : {}).kinetic;
  this.b = this.c = null;
  this.h = !1
}
K(vg, tg);
vg.prototype.g = function(a) {
  var b = ug(this.targetTouches);
  if(null !== this.b) {
    this.a && this.a.a.push(b[0], b[1], ta());
    var c = this.b[0] - b[0], d = b[1] - this.b[1];
    a = a.map;
    var e = a.a().a(), f = jd(e), d = c = [c, d], g = f.resolution;
    d[0] *= g;
    d[1] *= g;
    Xa(c, f.rotation);
    Wa(c, f.center);
    c = e.g.center(c);
    Y(a);
    e.c(c)
  }
  this.b = b
};
vg.prototype.e = function(a) {
  a = a.map;
  var b = a.a().a();
  if(0 === this.targetTouches.length) {
    if(!this.h && this.a && Af(this.a)) {
      var c = (this.a.c - this.a.b) / this.a.f, d = this.a.d, e = b.e();
      this.c = Bf(this.a, e);
      a.e(this.c);
      e = Of(a, e);
      c = a.i([e[0] - c * Math.cos(d), e[1] - c * Math.sin(d)]);
      c = b.g.center(c);
      b.c(c)
    }
    Y(a);
    return!1
  }
  this.b = null;
  return!0
};
vg.prototype.i = function(a) {
  if(0 < this.targetTouches.length) {
    var b = a.map, c = b.a().a();
    this.b = null;
    Y(b);
    null !== this.c && Fa(b.n, this.c) && (c.c(a.d.p.center), this.c = null);
    this.a && (a = this.a, a.a.length = 0, a.d = 0, a.b = 0);
    this.h = 1 < this.targetTouches.length;
    return!0
  }
  return!1
};
function wg(a) {
  tg.call(this);
  a = v(a) ? a : {};
  this.b = null;
  this.c = void 0;
  this.a = !1;
  this.h = 0;
  this.k = v(a.threshold) ? a.threshold : 0.3
}
K(wg, tg);
wg.prototype.g = function(a) {
  var b = 0, c = this.targetTouches[0], d = this.targetTouches[1], c = Math.atan2(d.clientY - c.clientY, d.clientX - c.clientX);
  v(this.c) && (b = c - this.c, this.h += b, !this.a && Math.abs(this.h) > this.k && (this.a = !0));
  this.c = c;
  a = a.map;
  c = ce(a.c);
  d = ug(this.targetTouches);
  d[0] -= c.x;
  d[1] -= c.y;
  this.b = a.i(d);
  this.a && (c = a.a().a(), d = jd(c), Y(a), Df(a, c, d.rotation + b, this.b))
};
wg.prototype.e = function(a) {
  if(2 > this.targetTouches.length) {
    a = a.map;
    var b = a.a().a(), c = jd(b);
    if(this.a) {
      var c = c.rotation, d = this.b, c = b.constrainRotation(c, 0);
      Df(a, b, c, d, 250)
    }
    return!1
  }
  return!0
};
wg.prototype.i = function(a) {
  return 2 <= this.targetTouches.length ? (a = a.map, this.b = null, this.c = void 0, this.a = !1, this.h = 0, Y(a), !0) : !1
};
function xg(a) {
  a = v(a) ? a : {};
  tg.call(this);
  this.b = null;
  this.h = v(a.duration) ? a.duration : 400;
  this.a = void 0;
  this.c = 1
}
K(xg, tg);
xg.prototype.g = function(a) {
  var b = 1, c = this.targetTouches[0], d = this.targetTouches[1], e = c.clientX - d.clientX, c = c.clientY - d.clientY, e = Math.sqrt(e * e + c * c);
  v(this.a) && (b = this.a / e);
  this.a = e;
  1 != b && (this.c = b);
  a = a.map;
  var e = a.a().a(), c = jd(e), d = ce(a.c), f = ug(this.targetTouches);
  f[0] -= d.x;
  f[1] -= d.y;
  this.b = a.i(f);
  Y(a);
  Gf(a, e, c.resolution * b, this.b)
};
xg.prototype.e = function(a) {
  if(2 > this.targetTouches.length) {
    a = a.map;
    var b = a.a().a(), c = jd(b).resolution, d = this.b, e = this.h, c = fd(b, c, 0, this.c - 1);
    Gf(a, b, c, d, e);
    return!1
  }
  return!0
};
xg.prototype.i = function(a) {
  return 2 <= this.targetTouches.length ? (a = a.map, this.b = null, this.a = void 0, this.c = 1, Y(a), !0) : !1
};
function yg(a) {
  var b = v(a) ? a : {};
  a = Sa(b);
  delete a.layers;
  b = b.layers;
  W.call(this, a);
  this.a = null;
  O(this, cd("layers"), this.lc, !1, this);
  v(b) ? ha(b) && (b = new He(Ga(b))) : b = new He;
  this.c(b)
}
K(yg, W);
h = yg.prototype;
h.yb = function() {
  this.e() && Vc(this)
};
h.lc = function() {
  null !== this.a && (L(Oa(this.a), Q), this.a = null);
  var a = this.Sa();
  if(null != a) {
    this.a = {add:O(a, "add", this.kc, !1, this), remove:O(a, "remove", this.mc, !1, this)};
    var a = a.a, b, c, d;
    b = 0;
    for(c = a.length;b < c;b++) {
      d = a[b], this.a[E(d).toString()] = O(d, ["propertychange", "change"], this.yb, !1, this)
    }
  }
  Vc(this)
};
h.kc = function(a) {
  a = a.element;
  this.a[E(a).toString()] = O(a, ["propertychange", "change"], this.yb, !1, this);
  Vc(this)
};
h.mc = function(a) {
  a = E(a.element).toString();
  Q(this.a[a]);
  delete this.a[a];
  Vc(this)
};
h.Sa = function() {
  return this.b("layers")
};
yg.prototype.getLayers = yg.prototype.Sa;
yg.prototype.c = function(a) {
  this.d("layers", a)
};
yg.prototype.setLayers = yg.prototype.c;
yg.prototype.eb = function(a) {
  var b = v(a) ? a : {layers:[], B:[]}, c = b.layers.length;
  this.Sa().forEach(function(a) {
    a.eb(b)
  });
  a = We(this);
  var d, e;
  for(d = b.B.length;c < d;c++) {
    e = b.B[c], e.brightness = Va(e.brightness + a.brightness, -1, 1), e.contrast *= a.contrast, e.hue += a.hue, e.opacity *= a.opacity, e.saturation *= a.saturation, e.visible = e.visible && a.visible, e.maxResolution = Math.min(e.maxResolution, a.maxResolution), e.minResolution = Math.max(e.minResolution, a.minResolution)
  }
  return b
};
yg.prototype.g = da(1);
function zg(a) {
  gb.call(this, {code:a, units:"m", extent:Ag, global:!0})
}
K(zg, gb);
var Bg = 6378137 * Math.PI, Ag = [-Bg, -Bg, Bg, Bg], Cg = Ea(["EPSG:3857", "EPSG:102100", "EPSG:102113", "EPSG:900913", "urn:ogc:def:crs:EPSG:6.18:3:3857"], function(a) {
  return new zg(a)
});
function Dg(a, b, c) {
  var d = a.length;
  c = 1 < c ? c : 2;
  v(b) || (b = 2 < c ? a.slice() : Array(d));
  for(var e = 0;e < d;e += c) {
    b[e] = 6378137 * Math.PI * a[e] / 180, b[e + 1] = 6378137 * Math.log(Math.tan(Math.PI * (a[e + 1] + 90) / 360))
  }
  return b
}
function Eg(a, b, c) {
  var d = a.length;
  c = 1 < c ? c : 2;
  v(b) || (b = 2 < c ? a.slice() : Array(d));
  for(var e = 0;e < d;e += c) {
    b[e] = 180 * a[e] / (6378137 * Math.PI), b[e + 1] = 360 * Math.atan(Math.exp(a[e + 1] / 6378137)) / Math.PI - 90
  }
  return b
}
;function Fg(a, b) {
  gb.call(this, {code:a, units:"degrees", extent:Gg, axisOrientation:b, global:!0})
}
K(Fg, gb);
var Gg = [-180, -90, 180, 90], Hg = [new Fg("CRS:84"), new Fg("EPSG:4326", "neu"), new Fg("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new Fg("urn:ogc:def:crs:OGC:1.3:CRS84"), new Fg("urn:ogc:def:crs:OGC:2:84"), new Fg("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new Fg("urn:x-ogc:def:crs:EPSG:4326", "neu")];
function Ig(a, b, c, d, e) {
  R.call(this);
  this.f = e;
  this.d = a;
  this.e = c;
  this.g = b;
  this.state = d
}
K(Ig, R);
function Jg(a, b, c, d, e, f) {
  Ig.call(this, a, b, c, 0, d);
  this.i = e;
  this.a = new Image;
  null !== f && (this.a.crossOrigin = f);
  this.c = {};
  this.b = null;
  this.state = 0
}
K(Jg, Ig);
function Kg(a, b) {
  if(v(b)) {
    var c, d = E(b);
    if(d in a.c) {
      return a.c[d]
    }
    c = Qa(a.c) ? a.a : a.a.cloneNode(!1);
    return a.c[d] = c
  }
  return a.a
}
Jg.prototype.h = function() {
  this.state = 3;
  L(this.b, Q);
  this.b = null;
  T(this, "change")
};
Jg.prototype.j = function() {
  this.state = 2;
  L(this.b, Q);
  this.b = null;
  T(this, "change")
};
function Lg(a) {
  0 == a.state && (a.state = 1, a.b = [Fc(a.a, "error", a.h, !1, a), Fc(a.a, "load", a.j, !1, a)], a.a.src = a.i)
}
;function Mg(a) {
  this.minZoom = v(a.minZoom) ? a.minZoom : 0;
  this.a = a.resolutions;
  this.maxZoom = this.a.length - 1;
  this.d = v(a.origin) ? a.origin : null;
  this.c = null;
  v(a.origins) && (this.c = a.origins);
  this.b = null;
  v(a.tileSizes) && (this.b = a.tileSizes);
  this.f = v(a.tileSize) ? a.tileSize : null === this.b ? 256 : void 0
}
var Ng = new Ke(0, 0, 0);
function Og(a, b, c, d, e) {
  e = Pg(a, b, e);
  for(b = b.a - 1;b >= a.minZoom;) {
    if(c.call(null, b, Qg(a, e, a.a[b], d))) {
      return!0
    }
    --b
  }
  return!1
}
function Rg(a, b) {
  return null === a.d ? a.c[b] : a.d
}
function Sg(a, b, c, d) {
  return b.a < a.maxZoom ? (d = Pg(a, b, d), Qg(a, d, a.a[b.a + 1], c)) : null
}
function Qg(a, b, c, d) {
  Tg(a, b[0], b[1], c, !1, Ng);
  var e = Ng.x, f = Ng.y;
  Tg(a, b[2], b[3], c, !0, Ng);
  a = Ng.x;
  b = Ng.y;
  v(d) ? (d.a = e, d.c = a, d.b = f, d.d = b) : d = new Me(e, a, f, b);
  return d
}
function Ug(a, b) {
  var c = Rg(a, b.a), d = a.a[b.a], e = Vg(a, b.a);
  return[c[0] + (b.x + 0.5) * e * d, c[1] + (b.y + 0.5) * e * d]
}
function Pg(a, b, c) {
  var d = Rg(a, b.a), e = a.a[b.a];
  a = Vg(a, b.a);
  var f = d[0] + b.x * a * e;
  b = d[1] + b.y * a * e;
  return $a(f, b, f + a * e, b + a * e, c)
}
function Tg(a, b, c, d, e, f) {
  var g = yb(a.a, d, 0), k = d / a.a[g], l = Rg(a, g);
  a = Vg(a, g);
  b = k * (b - l[0]) / (d * a);
  c = k * (c - l[1]) / (d * a);
  e ? (b = Math.ceil(b) - 1, c = Math.ceil(c) - 1) : (b = Math.floor(b), c = Math.floor(c));
  e = b;
  v(f) ? (f.a = g, f.x = e, f.y = c) : f = new Ke(g, e, c);
  return f
}
function Vg(a, b) {
  return v(a.f) ? a.f : a.b[b]
}
;function Wg(a) {
  Ve.call(this, {attributions:a.attributions, extent:a.extent, logo:a.logo, projection:a.projection});
  this.k = v(a.opaque) ? a.opaque : !1;
  this.tileGrid = v(a.tileGrid) ? a.tileGrid : null
}
K(Wg, Ve);
h = Wg.prototype;
h.Db = Mc;
h.cb = function(a, b, c, d) {
  var e = !0, f, g, k, l;
  for(k = d.a;k <= d.c;++k) {
    for(l = d.b;l <= d.d;++l) {
      g = this.qa(c, k, l), a[c] && a[c][g] || (f = b(c, k, l), null === f ? e = !1 : (a[c] || (a[c] = {}), a[c][g] = f))
    }
  }
  return e
};
h.Ka = da(0);
h.qa = Le;
function Xg(a, b) {
  var c;
  if(null === a.tileGrid) {
    if(c = b.c, null === c) {
      c = b.b;
      for(var d = null === c ? 360 * fb.degrees / b.f() : Math.max(c[2] - c[0], c[3] - c[1]), e = v(void 0) ? void 0 : 256, f = Array((v(void 0) ? NaN : 42) + 1), d = d / e, g = 0, k = f.length;g < k;++g) {
        f[g] = d / Math.pow(2, g)
      }
      c = new Mg({origin:null === c ? [0, 0] : [c[0], c[1]], resolutions:f, tileSize:e});
      b.c = c
    }
  }else {
    c = a.tileGrid
  }
  return c
}
h.ra = function(a, b, c) {
  return Vg(Xg(this, c), a)
};
h.Ib = ea;
function Yg(a, b) {
  hc.call(this);
  this.c = a;
  this.a = b
}
K(Yg, hc);
Yg.prototype.j = function(a) {
  2 === a.target.state && Zg(this)
};
function Zg(a) {
  var b = a.a;
  b.e() && 1 == b.g() && of(a.c.i)
}
function $g(a, b) {
  b.Db() && a.ca.push(sa(function(a, b, e) {
    b = E(a).toString();
    a = a.a;
    e = e.ua[b];
    for(var f;a.d() > a.f && !(b = a.a.wa, f = b.a.a.toString(), f in e && e[f].contains(b.a));) {
      ah(a)
    }
  }, b))
}
function bh(a, b) {
  if(null != b) {
    var c, d, e;
    d = 0;
    for(e = b.length;d < e;++d) {
      c = b[d], a[E(c).toString()] = c
    }
  }
}
function ch(a, b) {
  var c = b.r;
  v(c) && (a.kb[c] = "")
}
function dh(a, b, c, d) {
  b = E(b).toString();
  c = c.toString();
  b in a ? c in a[b] ? (a = a[b][c], d.a < a.a && (a.a = d.a), d.c > a.c && (a.c = d.c), d.b < a.b && (a.b = d.b), d.d > a.d && (a.d = d.d)) : a[b][c] = d : (a[b] = {}, a[b][c] = d)
}
function eh(a, b, c, d) {
  return function(e, f, g) {
    e = fh(b, e, f, g, c, d);
    return a(e) ? e : null
  }
}
function gh(a, b, c) {
  return[b * (Math.round(a[0] / b) + c[0] % 2 / 2), b * (Math.round(a[1] / b) + c[1] % 2 / 2)]
}
function hh(a, b, c, d, e, f, g, k, l, m) {
  var p = E(b).toString();
  p in a.na || (a.na[p] = {});
  var q = a.na[p];
  a = a.Lc;
  var s = c.minZoom, r, t, w, z, u, A;
  for(A = g;A >= s;--A) {
    for(t = Qg(c, f, c.a[A], void 0), w = c.a[A], z = t.a;z <= t.c;++z) {
      for(u = t.b;u <= t.d;++u) {
        g - A <= k ? (r = fh(b, A, z, u, d, e), 0 == r.state && (q[r.a.toString()] = !0, r.b() in a.c || Re(a, [r, p, Ug(c, r.a), w])), v(l) && l.call(m, r)) : b.Ib(A, z, u)
      }
    }
  }
}
;function ih(a, b, c, d, e, f, g, k) {
  ve(a);
  0 === b && 0 === c || xe(a, b, c);
  1 == d && 1 == e || ye(a, d, e);
  0 !== f && ze(a, f);
  0 === g && 0 === k || xe(a, g, k);
  return a
}
function jh(a, b) {
  return a[0] == b[0] && a[1] == b[1] && a[4] == b[4] && a[5] == b[5] && a[12] == b[12] && a[13] == b[13]
}
function kh(a, b, c) {
  var d = a[1], e = a[5], f = a[13], g = b[0];
  b = b[1];
  c[0] = a[0] * g + a[4] * b + a[12];
  c[1] = d * g + e * b + f;
  return c
}
;function lh(a, b) {
  hc.call(this);
  this.i = b;
  this.d = {}
}
K(lh, hc);
function mh(a) {
  var b = a.p, c = a.tb;
  ih(c, a.size[0] / 2, a.size[1] / 2, 1 / b.resolution, -1 / b.resolution, -b.rotation, -b.center[0], -b.center[1]);
  a = a.Eb;
  var b = c[0], d = c[1], e = c[2], f = c[3], g = c[4], k = c[5], l = c[6], m = c[7], p = c[8], q = c[9], s = c[10], r = c[11], t = c[12], w = c[13], z = c[14], c = c[15], u = b * k - d * g, A = b * l - e * g, x = b * m - f * g, D = d * l - e * k, y = d * m - f * k, C = e * m - f * l, B = p * w - q * t, P = p * z - s * t, H = p * c - r * t, F = q * z - s * w, J = q * c - r * w, U = s * c - r * z, I = u * U - A * J + x * F + D * H - y * P + C * B;
  0 != I && (I = 1 / I, a[0] = (k * U - l * J + m * F) * I, a[1] = (-d * U + e * J - f * F) * I, a[2] = (w * C - z * y + c * D) * I, a[3] = (-q * C + s * y - r * D) * I, a[4] = (-g * U + l * H - m * P) * I, a[5] = (b * U - e * H + f * P) * I, a[6] = (-t * C + z * x - c * A) * I, a[7] = (p * C - s * x + r * A) * I, a[8] = (g * J - k * H + m * B) * I, a[9] = (-b * J + d * H - f * B) * I, a[10] = (t * y - w * x + c * u) * I, a[11] = (-p * y + q * x - r * u) * I, a[12] = (-g * F + k * P - l * B) * I, 
  a[13] = (b * F - d * P + e * B) * I, a[14] = (-t * D + w * A - z * u) * I, a[15] = (p * D - q * A + s * u) * I)
}
lh.prototype.Ca = function(a) {
  return new Yg(this, a)
};
lh.prototype.q = function() {
  La(this.d, function(a) {
    lc(a)
  });
  lh.u.q.call(this)
};
function nh(a, b) {
  var c = E(b).toString();
  if(c in a.d) {
    return a.d[c]
  }
  var d = a.Ca(b);
  return a.d[c] = d
}
lh.prototype.Va = ea;
lh.prototype.r = function(a, b) {
  for(var c in this.d) {
    if(!(null !== b && c in b.B)) {
      var d = this.d[c];
      delete this.d[c];
      lc(d)
    }
  }
};
function oh(a, b) {
  for(var c in a.d) {
    if(!(c in b.B)) {
      b.ca.push(G(a.r, a));
      break
    }
  }
}
;function ph(a) {
  Xe.call(this, a)
}
K(ph, Xe);
function qh(a) {
  Xe.call(this, a);
  this.r(v(a.preload) ? a.preload : 0)
}
K(qh, Xe);
qh.prototype.c = function() {
  return this.b("preload")
};
qh.prototype.getPreload = qh.prototype.c;
qh.prototype.r = function(a) {
  this.d("preload", a)
};
qh.prototype.setPreload = qh.prototype.r;
var rh = Lc([]);
function sh(a, b) {
  var c = a.c();
  v(c) || (c = rh);
  return c.call(a, b)
}
;var th = lg("black"), uh = [], vh = lg("black");
function wh(a, b, c, d) {
  this.e = {};
  this.a = a;
  this.g = b;
  this.d = c;
  this.f = d;
  this.b = {oa:void 0, $:void 0, V:void 0, W:null, X:void 0, Y:void 0, Z:void 0, fillStyle:void 0, strokeStyle:void 0, lineWidth:void 0, image:null, Za:void 0, $a:void 0, height:void 0, rotation:0, scale:1, width:void 0, lineCap:void 0, lineDash:null, lineJoin:void 0, miterLimit:void 0, Hb:void 0, Kc:null};
  this.c = [];
  this.i = re()
}
function xh(a, b) {
  var c = a.b, d = a.a;
  if(db(a.d, Vf(b)) && null !== c.image) {
    var e = Xf(b, a.f, a.c), f = a.i, g, k;
    g = 0;
    for(k = e.length;g < k;g += 2) {
      var l = e[g] - c.Za, m = e[g + 1] - c.$a;
      c.Hb && (l = l + 0.5 | 0, m = m + 0.5 | 0);
      if(1 != c.scale || 0 !== c.rotation) {
        var p = l + c.Za, q = m + c.$a;
        ih(f, p, q, c.scale, c.scale, c.rotation, -p, -q);
        d.setTransform(f[0], f[1], f[4], f[5], f[12], f[13])
      }
      d.drawImage(c.image, l, m, c.width, c.height)
    }
    1 == c.scale && 0 === c.rotation || d.setTransform(1, 0, 0, 1, 0, 0)
  }
}
function yh(a, b) {
  var c = a.a, d = a.b, e = d.fillStyle, f = d.strokeStyle, d = d.Kc;
  if(db(a.d, Vf(b)) && null != d && v(d.text) && (v(e) || v(f))) {
    zh(a);
    var g = Xf(b, a.f, a.c), k, l;
    k = 0;
    for(l = g.length;k < l;k += 2) {
      var m = g[k], p = g[k + 1];
      v(f) && c.strokeText(d.text, m, p);
      v(e) && c.fillText(d.text, m, p)
    }
  }
}
function Ah(a, b, c, d, e) {
  a = a.a;
  a.moveTo(b[c], b[c + 1]);
  var f;
  for(f = c + 2;f < d;f += 2) {
    a.lineTo(b[f], b[f + 1])
  }
  e && a.lineTo(b[c], b[c + 1]);
  return d
}
function Bh(a, b, c, d) {
  var e = a.a, f, g;
  f = 0;
  for(g = d.length;f < g;++f) {
    c = Ah(a, b, c, d[f], !0), e.closePath()
  }
  return c
}
h = wh.prototype;
h.ub = function(a, b) {
  var c = a.toString(), d = this.e[c];
  v(d) ? d.push(b) : this.e[c] = [b]
};
h.Ea = function(a) {
  if(db(this.d, Vf(a))) {
    var b = this.b;
    if(v(b.fillStyle) || v(b.strokeStyle)) {
      zh(this);
      var c = this.a;
      a = Xf(a, this.f, this.c);
      var d = a[2] - a[0], e = a[3] - a[1], d = Math.sqrt(d * d + e * e);
      c.beginPath();
      c.arc(a[0], a[1], d, 0, 2 * Math.PI);
      v(b.fillStyle) && c.fill();
      v(b.strokeStyle) && c.stroke()
    }
  }
};
h.vb = function(a, b) {
  var c = a.a(), d, e;
  d = 0;
  for(e = c.length;d < e;++d) {
    Ch.Polygon.call(this, c[d], b)
  }
};
h.Ja = function(a) {
  xh(this, a);
  yh(this, a)
};
h.Ha = function(a) {
  xh(this, a);
  yh(this, a)
};
h.Fa = function(a) {
  if(db(this.d, Vf(a)) && v(this.b.strokeStyle)) {
    zh(this);
    var b = this.a;
    a = Xf(a, this.f, this.c);
    b.beginPath();
    Ah(this, a, 0, a.length, !1);
    b.stroke()
  }
};
h.Ga = function(a) {
  var b = Vf(a);
  if(db(this.d, b) && v(this.b.strokeStyle)) {
    zh(this);
    var b = this.a, c = Xf(a, this.f, this.c);
    b.beginPath();
    a = a.d();
    var d = 0, e, f;
    e = 0;
    for(f = a.length;e < f;++e) {
      d = Ah(this, c, d, a[e], !1)
    }
    b.stroke()
  }
};
h.pa = function(a) {
  if(db(this.d, Vf(a))) {
    var b = this.b;
    if(v(b.fillStyle) || v(b.strokeStyle)) {
      zh(this);
      var c = this.a, d = Xf(a, this.f, this.c);
      a = a.d;
      c.beginPath();
      Bh(this, d, 0, a);
      v(b.fillStyle) && c.fill();
      v(b.strokeStyle) && c.stroke()
    }
  }
};
h.Ia = function(a) {
  if(db(this.d, Vf(a))) {
    var b = this.b;
    if(v(b.fillStyle) || v(b.strokeStyle)) {
      zh(this);
      var c = this.a, d = Xf(a, this.f, this.c);
      a = a.d();
      var e = 0, f, g;
      f = 0;
      for(g = a.length;f < g;++f) {
        var k = a[f];
        c.beginPath();
        e = Bh(this, d, e, k);
        v(b.fillStyle) && c.fill();
        v(b.strokeStyle) && c.stroke()
      }
    }
  }
};
function Dh(a) {
  var b = Ea(Pa(a.e), Number);
  Ja(b);
  var c, d, e, f, g;
  c = 0;
  for(d = b.length;c < d;++c) {
    for(e = a.e[b[c].toString()], f = 0, g = e.length;f < g;++f) {
      e[f](a)
    }
  }
}
h.R = function(a, b) {
  var c = this.b;
  if(null === a) {
    c.fillStyle = void 0
  }else {
    var d = a.a();
    c.fillStyle = jg(null === d ? th : d)
  }
  null === b ? (c.strokeStyle = void 0, c.lineCap = void 0, c.lineDash = null, c.lineJoin = void 0, c.lineWidth = void 0, c.miterLimit = void 0) : (d = b.f, c.strokeStyle = jg(null === d ? vh : d), d = b.a, c.lineCap = v(d) ? d : "round", d = b.b, c.lineDash = null === d ? uh : d, d = b.d, c.lineJoin = v(d) ? d : "round", d = b.e, c.lineWidth = this.g * (v(d) ? d : 1), d = b.c, c.miterLimit = v(d) ? d : 10)
};
function zh(a) {
  var b = a.b;
  a = a.a;
  var c = b.fillStyle, d = b.strokeStyle, e = b.lineCap, f = b.lineDash, g = b.lineJoin, k = b.lineWidth, l = b.miterLimit;
  v(c) && b.oa != c && (a.fillStyle = c, b.oa = c);
  !v(d) || b.$ == d && b.V == e && b.W == f && b.X == g && b.Z == l && b.Y == k || (a.strokeStyle = d, a.lineCap = e, v(a.setLineDash) && a.setLineDash(f), a.lineJoin = g, a.miterLimit = l, a.lineWidth = k)
}
h.Wa = function(a) {
  if(null !== a) {
    var b = a.b(), c = a.g(), d = a.f(1), e = this.b;
    e.image = d;
    e.Za = b[0];
    e.$a = b[1];
    e.height = c[1];
    e.rotation = a.e();
    e.scale = a.d();
    e.Hb = a.c();
    e.width = c[0]
  }
};
var Ch = {Point:wh.prototype.Ja, LineString:wh.prototype.Fa, Polygon:wh.prototype.pa, MultiPoint:wh.prototype.Ha, MultiLineString:wh.prototype.Ga, MultiPolygon:wh.prototype.Ia, GeometryCollection:wh.prototype.vb, Circle:wh.prototype.Ea};
function Eh(a, b) {
  Yg.call(this, a, b);
  this.r = re()
}
K(Eh, Yg);
Eh.prototype.h = function(a, b, c) {
  Fh(this, "precompose", c, a, void 0);
  var d = this.l();
  if(null !== d) {
    var e = this.i();
    c.globalAlpha = b.opacity;
    if(0 === a.p.rotation) {
      b = e[13];
      var f = d.width * e[0], g = d.height * e[5];
      c.drawImage(d, 0, 0, +d.width, +d.height, Math.round(e[12]), Math.round(b), Math.round(f), Math.round(g))
    }else {
      c.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]), c.drawImage(d, 0, 0), c.setTransform(1, 0, 0, 1, 0, 0)
    }
  }
  Fh(this, "postcompose", c, a, void 0)
};
function Fh(a, b, c, d, e) {
  var f = a.a;
  Sc(f.G, b) && (a = v(e) ? e : Gh(a, d), a = new wh(c, d.pixelRatio, d.extent, a), T(f, new $f(b, f, a, d, c, null)), Dh(a))
}
function Gh(a, b) {
  var c = b.p, d = b.pixelRatio;
  return ih(a.r, d * b.size[0] / 2, d * b.size[1] / 2, d / c.resolution, -d / c.resolution, -c.rotation, -c.center[0], -c.center[1])
}
;function Hh(a) {
  Ve.call(this, {attributions:a.attributions, extent:a.extent, logo:a.logo, projection:a.projection, state:a.state});
  this.g = v(a.resolutions) ? a.resolutions : null
}
K(Hh, Ve);
function Ih(a, b) {
  Eh.call(this, a, b);
  this.b = null;
  this.f = re()
}
K(Ih, Eh);
Ih.prototype.l = function() {
  return null === this.b ? null : Kg(this.b)
};
Ih.prototype.i = ca("f");
Ih.prototype.d = function(a) {
  var b = a.pixelRatio, c = a.p, d = c.center, e = c.resolution, f = c.rotation, g = this.a.a, k = a.s;
  k[0] || k[1] || (c = Jh(g, a.extent, e, b, c.projection), null !== c && (k = c.state, 0 == k ? (Fc(c, "change", this.j, !1, this), Lg(c)) : 2 == k && (this.b = c)));
  if(null !== this.b) {
    var c = this.b, k = c.d, l = c.g, m = c.e, e = b * l / (e * m);
    ih(this.f, b * a.size[0] / 2, b * a.size[1] / 2, e, e, f, m * (k[0] - d[0]) / l, m * (d[1] - k[3]) / l);
    bh(a.attributions, c.f);
    ch(a, g)
  }
};
function Kh(a, b) {
  Eh.call(this, a, b);
  this.k = this.f = this.e = null;
  this.n = re();
  this.o = NaN;
  this.g = this.b = null
}
K(Kh, Eh);
Kh.prototype.l = ca("e");
Kh.prototype.i = ca("n");
Kh.prototype.d = function(a) {
  var b = a.pixelRatio, c = a.p, d = c.projection, e = this.a, f = e.a, g = Xg(f, d), k = f.Ka(), l = yb(g.a, c.resolution, 0), m = f.ra(l, a.pixelRatio, d), p = g.a[l], q = p / (m / Vg(g, l)), s = c.center, r;
  p == c.resolution ? (s = gh(s, p, a.size), r = bb(s, p, c.rotation, a.size)) : r = a.extent;
  var t = Qg(g, r, p), w = m * (t.c - t.a + 1), z = m * (t.d - t.b + 1), u, A;
  null === this.e ? (u = Gd("CANVAS"), u.width = w, u.height = z, A = u.getContext("2d"), this.e = u, this.f = [w, z], this.k = A) : (u = this.e, A = this.k, this.f[0] < w || this.f[1] < z ? (u.width = w, u.height = z, this.f = [w, z], this.b = null) : (w = this.f[0], z = this.f[1], l == this.o && this.b.a <= t.a && t.c <= this.b.c && this.b.b <= t.b && t.d <= this.b.d || (this.b = null)));
  var x, D;
  null === this.b ? (w /= m, z /= m, x = t.a - Math.floor((w - (t.c - t.a + 1)) / 2), D = t.b - Math.floor((z - (t.d - t.b + 1)) / 2), this.o = l, this.b = new Me(x, x + w - 1, D, D + z - 1), this.g = Array(w * z), z = this.b) : (z = this.b, w = z.c - z.a + 1);
  u = {};
  u[l] = {};
  var y = [], C = G(f.cb, f, u, eh(function(a) {
    return null !== a && 2 == a.state
  }, f, b, d)), B = Za(), P = new Me(0, 0, 0, 0), H, F, J;
  for(D = t.a;D <= t.c;++D) {
    for(J = t.b;J <= t.d;++J) {
      F = fh(f, l, D, J, b, d), x = F.state, 2 == x || 4 == x || 3 == x ? u[l][F.a.toString()] = F : (H = Og(g, F.a, C, P, B), H || (y.push(F), H = Sg(g, F.a, P, B), null === H || C(l + 1, H)))
    }
  }
  C = 0;
  for(H = y.length;C < H;++C) {
    F = y[C], D = m * (F.a.x - z.a), J = m * (z.d - F.a.y), A.clearRect(D, J, m, m)
  }
  y = Ea(Pa(u), Number);
  Ja(y);
  var U = f.k, I = cb(Pg(g, new Ke(l, z.a, z.d), B)), ba, S, la, ib, Na, bf, C = 0;
  for(H = y.length;C < H;++C) {
    if(ba = y[C], m = f.ra(ba, b, d), ib = u[ba], ba == l) {
      for(la in ib) {
        F = ib[la], S = (F.a.y - z.b) * w + (F.a.x - z.a), this.g[S] != F && (D = m * (F.a.x - z.a), J = m * (z.d - F.a.y), x = F.state, 4 != x && 3 != x && U || A.clearRect(D, J, m, m), 2 == x && A.drawImage(Lh(F), k, k, m, m, D, J, m, m), this.g[S] = F)
      }
    }else {
      for(la in ba = g.a[ba] / p, ib) {
        for(F = ib[la], S = Pg(g, F.a, B), D = (S[0] - I[0]) / q, J = (I[1] - S[3]) / q, bf = ba * m, Na = ba * m, x = F.state, 4 != x && U || A.clearRect(D, J, bf, Na), 2 == x && A.drawImage(Lh(F), k, k, m, m, D, J, bf, Na), F = Qg(g, S, g.a[l], P), x = Math.max(F.a, z.a), J = Math.min(F.c, z.c), D = Math.max(F.b, z.b), F = Math.min(F.d, z.d);x <= J;++x) {
          for(Na = D;Na <= F;++Na) {
            S = (Na - z.b) * w + (x - z.a), this.g[S] = void 0
          }
        }
      }
    }
  }
  dh(a.ua, f, l, t);
  hh(a, f, g, b, d, r, l, e.c());
  $g(a, f);
  ch(a, f);
  ih(this.n, b * a.size[0] / 2, b * a.size[1] / 2, b * q / c.resolution, b * q / c.resolution, c.rotation, (I[0] - s[0]) / q, (s[1] - I[1]) / q)
};
var Mh = ["Polygon", "LineString", "Image"];
function Nh(a) {
  this.C = a;
  this.n = this.O = null;
  this.b = [];
  this.d = [];
  this.t = re();
  this.a = [];
  this.r = [];
  this.f = Za();
  this.w = re()
}
function Oh(a, b, c, d, e, f) {
  var g = a.d.length, k;
  for(k = c;k < d;k += e) {
    a.d[g++] = b[k], a.d[g++] = b[k + 1]
  }
  f && (a.d[g++] = b[c], a.d[g++] = b[c + 1]);
  return g
}
function Ph(a, b) {
  a.O = [0, b, 0];
  a.b.push(a.O);
  a.n = [0, b, 0];
  a.a.push(a.n)
}
function Qh(a) {
  var b = a.a;
  b.reverse();
  var c, d = b.length, e, f = -1;
  for(c = 0;c < d;++c) {
    if(e = b[c], e = e[0], 5 == e) {
      f = c
    }else {
      if(0 == e) {
        e = a.a;
        for(var g = c;f < g;) {
          var k = e[f];
          e[f] = e[g];
          e[g] = k;
          ++f;
          --g
        }
        f = -1
      }
    }
  }
}
function Rh(a, b, c) {
  a.O[2] = a.b.length;
  a.O = null;
  a.n[2] = a.a.length;
  a.n = null;
  b = [5, b, c];
  a.b.push(b);
  a.a.push(b)
}
Nh.prototype.Ta = ea;
function Sh(a) {
  Nh.call(this, a);
  this.i = this.o = null;
  this.k = this.l = this.j = this.h = this.g = this.e = this.c = void 0
}
K(Sh, Nh);
Sh.prototype.Ja = function(a, b) {
  if(null !== this.i) {
    ab(this.f, Vf(a));
    Ph(this, a);
    var c = a.a, d = this.d.length, c = Oh(this, c, 0, c.length, a.b, !1);
    this.b.push([4, d, c, this.i, this.c, this.e, this.g, this.h, this.j, this.l, this.k]);
    this.a.push([4, d, c, this.o, this.c, this.e, this.g, this.h, this.j, this.l, this.k]);
    Rh(this, a, b)
  }
};
Sh.prototype.Ha = function(a, b) {
  if(null !== this.i) {
    ab(this.f, Vf(a));
    Ph(this, a);
    var c = a.a, d = this.d.length, c = Oh(this, c, 0, c.length, a.b, !1);
    this.b.push([4, d, c, this.i, this.c, this.e, this.g, this.h, this.j, this.l, this.k]);
    this.a.push([4, d, c, this.o, this.c, this.e, this.g, this.h, this.j, this.l, this.k]);
    Rh(this, a, b)
  }
};
Sh.prototype.Ta = function() {
  Qh(this);
  this.e = this.c = void 0;
  this.i = this.o = null;
  this.k = this.l = this.h = this.j = this.g = void 0
};
Sh.prototype.Wa = function(a) {
  var b = a.b(), c = a.g(), d = a.i(1), e = a.f(1);
  this.c = b[0];
  this.e = b[1];
  this.o = d;
  this.i = e;
  this.g = c[1];
  this.h = a.e();
  this.j = a.d();
  this.l = a.c();
  this.k = c[0]
};
function Th(a) {
  Nh.call(this, a);
  this.c = {$:void 0, V:void 0, W:null, X:void 0, Y:void 0, Z:void 0, jb:0, strokeStyle:void 0, lineCap:void 0, lineDash:null, lineJoin:void 0, lineWidth:void 0, miterLimit:void 0}
}
K(Th, Nh);
function Uh(a, b, c, d, e) {
  var f = a.d.length;
  b = Oh(a, b, c, d, e, !1);
  f = [7, f, b];
  a.b.push(f);
  a.a.push(f);
  return d
}
function Vh(a) {
  var b = a.c, c = b.strokeStyle, d = b.lineCap, e = b.lineDash, f = b.lineJoin, g = b.lineWidth, k = b.miterLimit;
  if(b.$ != c || b.V != d || b.W != e || b.X != f || b.Y != g || b.Z != k) {
    b.jb != a.d.length && (a.b.push([10]), b.jb = a.d.length), a.b.push([9, c, g, d, f, k, e], [1]), b.$ = c, b.V = d, b.W = e, b.X = f, b.Y = g, b.Z = k
  }
}
Th.prototype.Fa = function(a, b) {
  var c = this.c, d = c.lineWidth;
  v(c.strokeStyle) && v(d) && (ab(this.f, Vf(a)), Vh(this), Ph(this, a), this.a.push([9, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash], [1]), c = a.a, Uh(this, c, 0, c.length, a.b), this.a.push([10]), Rh(this, a, b))
};
Th.prototype.Ga = function(a, b) {
  var c = this.c, d = c.lineWidth;
  if(v(c.strokeStyle) && v(d)) {
    ab(this.f, Vf(a));
    Vh(this);
    Ph(this, a);
    this.a.push([9, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash], [1]);
    var c = a.d(), d = a.a, e = a.b, f = 0, g, k;
    g = 0;
    for(k = c.length;g < k;++g) {
      f = Uh(this, d, f, c[g], e)
    }
    this.a.push([10]);
    Rh(this, a, b)
  }
};
Th.prototype.Ta = function() {
  this.c.jb != this.d.length && this.b.push([10]);
  Qh(this);
  this.c = null
};
Th.prototype.R = function(a, b) {
  var c = b.f;
  this.c.strokeStyle = jg(null === c ? vh : c);
  c = b.a;
  this.c.lineCap = v(c) ? c : "round";
  c = b.b;
  this.c.lineDash = null === c ? uh : c;
  c = b.d;
  this.c.lineJoin = v(c) ? c : "round";
  c = b.e;
  this.c.lineWidth = v(c) ? c : 1;
  c = b.c;
  this.c.miterLimit = v(c) ? c : 10
};
function Wh(a) {
  Nh.call(this, a);
  this.c = {oa:void 0, $:void 0, V:void 0, W:null, X:void 0, Y:void 0, Z:void 0, fillStyle:void 0, strokeStyle:void 0, lineCap:void 0, lineDash:null, lineJoin:void 0, lineWidth:void 0, miterLimit:void 0}
}
K(Wh, Nh);
function Xh(a, b, c, d, e) {
  var f = a.c, g = [1];
  a.b.push(g);
  a.a.push(g);
  var k, g = 0;
  for(k = d.length;g < k;++g) {
    var l = d[g], m = a.d.length;
    c = Oh(a, b, c, l, e, !0);
    c = [7, m, c];
    m = [3];
    a.b.push(c, m);
    a.a.push(c, m);
    c = l
  }
  b = [6];
  a.a.push(b);
  v(f.fillStyle) && a.b.push(b);
  v(f.strokeStyle) && (f = [10], a.b.push(f), a.a.push(f));
  return c
}
h = Wh.prototype;
h.Ea = function(a, b) {
  var c = this.c, d = c.strokeStyle;
  if(v(c.fillStyle) || v(d)) {
    ab(this.f, Vf(a));
    Yh(this);
    Ph(this, a);
    this.a.push([8, jg(th)]);
    v(c.strokeStyle) && this.a.push([9, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash]);
    d = a.a;
    Oh(this, d, 0, d.length, a.b, !1);
    var d = [1], e = [2];
    this.b.push(d, e);
    this.a.push(d, e);
    Rh(this, a, b);
    d = [6];
    this.a.push(d);
    v(c.fillStyle) && this.b.push(d);
    v(c.strokeStyle) && (c = [10], this.b.push(c), this.a.push(c))
  }
};
h.pa = function(a, b) {
  var c = this.c, d = c.strokeStyle;
  if(v(c.fillStyle) || v(d)) {
    ab(this.f, Vf(a));
    Yh(this);
    Ph(this, a);
    this.a.push([8, jg(th)]);
    v(c.strokeStyle) && this.a.push([9, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash]);
    c = a.d;
    if(a.l != a.f) {
      var d = a.a, e;
      a: {
        e = a.d;
        var f = 0, g, k;
        g = 0;
        for(k = e.length;g < k;++g) {
          var l = e[g], f = Rf(d, f, l, a.b);
          if(0 === g ? !f : f) {
            e = !1;
            break a
          }
          f = l
        }
        e = !0
      }
      if(e) {
        a.c = d
      }else {
        a.c = d.slice();
        e = d = a.c;
        g = a.d;
        k = a.b;
        for(var m = 0, l = 0, f = g.length;l < f;++l) {
          var p = g[l], q = Rf(e, m, p, k);
          if(0 === l ? !q : q) {
            for(var q = e, s = p, r = k;m < s - r;) {
              var t;
              for(t = 0;t < r;++t) {
                var w = q[m + t];
                q[m + t] = q[s - r + t];
                q[s - r + t] = w
              }
              m += r;
              s -= r
            }
          }
          m = p
        }
        d.length = m
      }
      a.l = a.f
    }
    Xh(this, a.c, 0, c, a.b);
    Rh(this, a, b)
  }
};
h.Ia = function(a, b) {
  var c = this.c, d = c.strokeStyle;
  if(v(c.fillStyle) || v(d)) {
    ab(this.f, Vf(a));
    Yh(this);
    Ph(this, a);
    this.a.push([8, jg(th)]);
    v(c.strokeStyle) && this.a.push([9, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash]);
    var c = a.d(), d = a.c(), e = a.b, f = 0, g, k;
    g = 0;
    for(k = c.length;g < k;++g) {
      f = Xh(this, d, f, c[g], e)
    }
    Rh(this, a, b)
  }
};
h.Ta = function() {
  Qh(this);
  this.c = null;
  var a = this.C;
  if(0 !== a) {
    var b = this.d, c, d;
    c = 0;
    for(d = b.length;c < d;++c) {
      b[c] = a * Math.round(b[c] / a)
    }
  }
};
h.R = function(a, b) {
  var c = this.c;
  if(null === a) {
    c.fillStyle = void 0
  }else {
    var d = a.a();
    c.fillStyle = jg(null === d ? th : d)
  }
  null === b ? (c.strokeStyle = void 0, c.lineCap = void 0, c.lineDash = null, c.lineJoin = void 0, c.lineWidth = void 0, c.miterLimit = void 0) : (d = b.f, c.strokeStyle = jg(null === d ? vh : d), d = b.a, c.lineCap = v(d) ? d : "round", d = b.b, c.lineDash = null === d ? uh : d, d = b.d, c.lineJoin = v(d) ? d : "round", d = b.e, c.lineWidth = v(d) ? d : 1, d = b.c, c.miterLimit = v(d) ? d : 10)
};
function Yh(a) {
  var b = a.c, c = b.fillStyle, d = b.strokeStyle, e = b.lineCap, f = b.lineDash, g = b.lineJoin, k = b.lineWidth, l = b.miterLimit;
  v(c) && b.oa != c && (a.b.push([8, c]), b.oa = b.fillStyle);
  !v(d) || b.$ == d && b.V == e && b.W == f && b.X == g && b.Y == k && b.Z == l || (a.b.push([9, d, k, e, g, l, f]), b.$ = d, b.V = e, b.W = f, b.X = g, b.Y = k, b.Z = l)
}
function Zh(a) {
  this.b = a;
  this.a = {};
  a = Gd("CANVAS");
  a.width = 1;
  a.height = 1;
  this.d = a.getContext("2d");
  this.c = re()
}
function $h(a) {
  for(var b in a.a) {
    var c = a.a[b], d;
    for(d in c) {
      c[d].Ta()
    }
  }
}
function ai(a, b, c) {
  var d = v(b) ? b.toString() : "0";
  b = a.a[d];
  v(b) || (b = {}, a.a[d] = b);
  d = b[c];
  v(d) || (d = new bi[c](a.b), b[c] = d);
  return d
}
Zh.prototype.ba = function() {
  return Qa(this.a)
};
var bi = {Image:Sh, LineString:Th, Polygon:Wh};
function ci(a, b, c, d, e) {
  b = b.a();
  null !== b && (d = Wf(b, d), (0,di.Polygon)(a, d, c, e))
}
var di = {Point:function(a, b, c, d) {
  var e = c.c;
  null !== e && (a = ai(a, c.a, "Image"), a.Wa(e), a.Ja(b, d))
}, LineString:function(a, b, c, d) {
  var e = c.b;
  null !== e && (a = ai(a, c.a, "LineString"), a.R(null, e), a.Fa(b, d))
}, Polygon:function(a, b, c, d) {
  var e = c.d, f = c.b;
  if(null !== e || null !== f) {
    a = ai(a, c.a, "Polygon"), a.R(e, f), a.pa(b, d)
  }
}, MultiPoint:function(a, b, c, d) {
  var e = c.c;
  null !== e && (a = ai(a, c.a, "Image"), a.Wa(e), a.Ha(b, d))
}, MultiLineString:function(a, b, c, d) {
  var e = c.b;
  null !== e && (a = ai(a, c.a, "LineString"), a.R(null, e), a.Ga(b, d))
}, MultiPolygon:function(a, b, c, d) {
  var e = c.d, f = c.b;
  if(null !== f || null !== e) {
    a = ai(a, c.a, "Polygon"), a.R(e, f), a.Ia(b, d)
  }
}, GeometryCollection:function(a, b, c, d) {
  b = b.a();
  var e, f;
  e = 0;
  for(f = b.length;e < f;++e) {
    (0,di.Polygon)(a, b[e], c, d)
  }
}, Circle:function(a, b, c, d) {
  var e = c.d, f = c.b;
  if(null !== e || null !== f) {
    a = ai(a, c.a, "Polygon"), a.R(e, f), a.Ea(b, d)
  }
}};
function ei(a, b) {
  Eh.call(this, a, b);
  this.M = !1;
  this.e = -1;
  this.f = NaN;
  this.g = Za();
  this.b = null
}
K(ei, Eh);
ei.prototype.h = function(a, b, c) {
  var d = Gh(this, a);
  Fh(this, "precompose", c, a, d);
  var e = this.b;
  if(null !== e) {
    var f = fi(this);
    c.globalAlpha = b.opacity;
    b = a.extent;
    var g = a.pixelRatio, k = Ea(Pa(e.a), Number);
    Ja(k);
    a: {
      var l, m, p, q, s, r, t;
      l = 0;
      for(m = k.length;l < m;++l) {
        for(s = e.a[k[l].toString()], p = 0, q = Mh.length;p < q;++p) {
          if(r = s[Mh[p]], v(r) && db(b, r.f)) {
            b: {
              var w = r;
              t = c;
              var z = g, u = d, A = f;
              r = r.b;
              var x = void 0;
              jh(u, w.t) ? x = w.r : (x = Sf(w.d, 2, u, w.r), ue(w.t, u));
              for(var u = 0, D = r.length, y = 0, C = void 0, w = w.w;u < D;) {
                var B = r[u];
                switch(B[0]) {
                  case 0:
                    C = B[1];
                    A(C) ? ++u : u = B[2];
                    break;
                  case 1:
                    t.beginPath();
                    ++u;
                    break;
                  case 2:
                    var C = x[y], P = x[y + 1], H = x[y + 2] - C, F = x[y + 3] - P;
                    t.arc(C, P, Math.sqrt(H * H + F * F), 0, 2 * Math.PI, !0);
                    y += 4;
                    ++u;
                    break;
                  case 3:
                    t.closePath();
                    ++u;
                    break;
                  case 4:
                    for(var y = B[1], C = B[2], P = B[3], H = B[4] * z, F = B[5] * z, J = B[6] * z, U = B[7], I = B[8], ba = B[9], B = B[10] * z;y < C;y += 2) {
                      var S = x[y] - H, la = x[y + 1] - F;
                      ba && (S = S + 0.5 | 0, la = la + 0.5 | 0);
                      if(1 != I || 0 !== U) {
                        var ib = S + H, Na = la + F;
                        ih(w, ib, Na, I, I, U, -ib, -Na);
                        t.setTransform(w[0], w[1], w[4], w[5], w[12], w[13])
                      }
                      t.drawImage(P, S, la, B, J);
                      1 == I && 0 === U || t.setTransform(1, 0, 0, 1, 0, 0)
                    }
                    ++u;
                    break;
                  case 5:
                    if(v(void 0) && (C = B[1], C = (void 0)(C, B[2]))) {
                      t = C;
                      break b
                    }
                    ++u;
                    break;
                  case 6:
                    t.fill();
                    ++u;
                    break;
                  case 7:
                    y = B[1];
                    C = B[2];
                    t.moveTo(x[y], x[y + 1]);
                    for(y += 2;y < C;y += 2) {
                      t.lineTo(x[y], x[y + 1])
                    }
                    ++u;
                    break;
                  case 8:
                    t.fillStyle = B[1];
                    ++u;
                    break;
                  case 9:
                    t.strokeStyle = B[1];
                    t.lineWidth = B[2] * z;
                    t.lineCap = B[3];
                    t.lineJoin = B[4];
                    t.miterLimit = B[5];
                    v(t.setLineDash) && t.setLineDash(B[6]);
                    ++u;
                    break;
                  case 10:
                    t.stroke();
                    ++u;
                    break;
                  default:
                    ++u
                }
              }
              t = void 0
            }
            if(t) {
              break a
            }
          }
        }
      }
    }
  }
  Fh(this, "postcompose", c, a, d)
};
function fi(a) {
  a = a.a.qb();
  if(!v(a)) {
    return Nc
  }
  var b = a.a;
  switch(b.length) {
    case 0:
      return Nc;
    case 1:
      return b[0];
    default:
      return function(a) {
        var d, e;
        d = 0;
        for(e = b.length;d < e;++d) {
          if(!b[d](a)) {
            return!1
          }
        }
        return!0
      }
  }
}
ei.prototype.gc = function(a) {
  2 == a.target.a() && Zg(this)
};
ei.prototype.d = function(a) {
  var b = this.a, c = b.a;
  bh(a.attributions, c.i);
  ch(a, c);
  if(this.M || !a.s[0] && !a.s[1]) {
    var d = a.extent, e = a.p.resolution, f = a.pixelRatio;
    if(this.M || this.f != e || this.e != c.f || !Ya(this.g, d)) {
      a = this.g;
      var g = (d[2] - d[0]) / 4, k = (d[3] - d[1]) / 4;
      a[0] = d[0] - g;
      a[1] = d[1] - k;
      a[2] = d[2] + g;
      a[3] = d[3] + k;
      lc(this.b);
      this.b = null;
      this.M = !1;
      var l = b.c();
      v(l) || (l = sh);
      var m = new Zh(e / (2 * f));
      c.a(a, function(a) {
        var b = !1, c = l(a, e);
        if(null != c) {
          var d = e * e / (4 * f * f), g, k, z, u;
          g = 0;
          for(k = c.length;g < k;++g) {
            z = c[g], u = z.c, null === u ? ci(m, a, z, d, a) : (0 == u.a() ? (Fc(u, "change", this.gc, !1, this), u.h()) : 2 == u.a() && ci(m, a, z, d, a), b = 1 == u.a())
          }
          a = b
        }else {
          a = !1
        }
        this.M = this.M || a
      }, this);
      $h(m);
      this.f = e;
      this.e = c.f;
      m.ba() || (this.b = m)
    }
  }
};
function gi(a, b) {
  lh.call(this, 0, b);
  this.a = Gd("CANVAS");
  this.a.style.width = "100%";
  this.a.style.height = "100%";
  this.a.className = "ol-unselectable";
  Id(a, this.a);
  this.b = !0;
  this.e = this.a.getContext("2d");
  this.g = re()
}
K(gi, lh);
gi.prototype.Ca = function(a) {
  return a instanceof ph ? new Ih(this, a) : a instanceof qh ? new Kh(this, a) : null
};
function hi(a, b, c) {
  var d = a.i, e = a.e;
  if(Sc(d.G, b)) {
    var f = c.p, g = c.pixelRatio;
    ih(a.g, a.a.width / 2, a.a.height / 2, g / f.resolution, -g / f.resolution, -f.rotation, -f.center[0], -f.center[1]);
    a = new wh(e, g, c.extent, a.g);
    T(d, new $f(b, d, a, c, e, null));
    Dh(a)
  }
}
gi.prototype.Va = function(a) {
  if(null === a) {
    this.b && (fe(this.a, !1), this.b = !1)
  }else {
    var b = this.e, c = a.size[0] * a.pixelRatio, d = a.size[1] * a.pixelRatio;
    this.a.width != c || this.a.height != d ? (this.a.width = c, this.a.height = d) : b.clearRect(0, 0, this.a.width, this.a.height);
    mh(a);
    hi(this, "precompose", a);
    var c = a.B, d = a.Qa, e = a.p.resolution, f, g, k, l;
    f = 0;
    for(g = d.length;f < g;++f) {
      k = d[f], l = nh(this, k), k = c[E(k)], !k.visible || (1 != k.lb || e >= k.maxResolution || e < k.minResolution) || (l.d(a, k), l.h(a, k, b))
    }
    hi(this, "postcompose", a);
    this.b || (fe(this.a, !0), this.b = !0);
    oh(this, a)
  }
};
function ii(a, b) {
  var c;
  if(v(6)) {
    var d = Array(16);
    for(c = 0;16 > c;++c) {
      d[c] = b[c].toFixed(6)
    }
    c = d.join(",")
  }else {
    c = b.join(",")
  }
  c = "matrix3d(" + c + ")";
  d = a.style;
  d.WebkitTransform = c;
  d.MozTransform = c;
  d.a = c;
  d.transform = c
}
;function ji(a, b, c) {
  Yg.call(this, a, b);
  this.target = c
}
K(ji, Yg);
function ki(a, b) {
  var c = Gd("DIV");
  c.style.position = "absolute";
  ji.call(this, a, b, c);
  this.b = null;
  this.f = te()
}
K(ki, ji);
ki.prototype.d = function(a) {
  var b = a.p, c = b.center, d = b.resolution, e = b.rotation, f = this.b, g = this.a.a, k = a.s;
  k[0] || k[1] || (b = Jh(g, a.extent, d, a.pixelRatio, b.projection), null !== b && (k = b.state, 0 == k ? (Fc(b, "change", this.j, !1, this), Lg(b)) : 2 == k && (f = b)));
  if(null !== f) {
    var k = f.d, l = f.g, b = re();
    ih(b, a.size[0] / 2, a.size[1] / 2, l / d, l / d, e, (k[0] - c[0]) / l, (c[1] - k[3]) / l);
    if(f != this.b) {
      c = Kg(f, this);
      c.style.maxWidth = "none";
      c.style.position = "absolute";
      for(d = this.target;e = d.firstChild;) {
        d.removeChild(e)
      }
      this.target.appendChild(c);
      this.b = f
    }
    jh(b, this.f) || (ii(this.target, b), ue(this.f, b));
    bh(a.attributions, f.f);
    ch(a, g)
  }
};
function li(a, b) {
  var c = Gd("DIV");
  c.style.position = "absolute";
  ji.call(this, a, b, c);
  this.f = !0;
  this.g = 1;
  this.e = 0;
  this.b = {}
}
K(li, ji);
li.prototype.d = function(a, b) {
  if(b.visible) {
    var c = a.pixelRatio, d = a.p, e = d.projection, f = this.a, g = f.a, k = Xg(g, e), l = g.Ka(), m = yb(k.a, d.resolution, 0), p = k.a[m], q = d.center, s;
    p == d.resolution ? (q = gh(q, p, a.size), s = bb(q, p, d.rotation, a.size)) : s = a.extent;
    var p = Qg(k, s, p), r = {};
    r[m] = {};
    var t = G(g.cb, g, r, eh(function(a) {
      return null !== a && 2 == a.state
    }, g, c, e)), w = Za(), z = new Me(0, 0, 0, 0), u, A, x, D;
    for(x = p.a;x <= p.c;++x) {
      for(D = p.b;D <= p.d;++D) {
        u = fh(g, m, x, D, c, e), A = u.state, 2 == A ? r[m][u.a.toString()] = u : 3 != A && 4 != A && (A = Og(k, u.a, t, z, w), A || (u = Sg(k, u.a, z, w), null === u || t(m + 1, u)))
      }
    }
    var y;
    if(this.e != g.f) {
      for(y in this.b) {
        w = this.b[+y], Jd(w.target)
      }
      this.b = {};
      this.e = g.f
    }
    x = Ea(Pa(r), Number);
    Ja(x);
    var t = {}, C;
    D = 0;
    for(u = x.length;D < u;++D) {
      y = x[D];
      y in this.b ? w = this.b[y] : (w = Tg(k, q[0], q[1], k.a[y], !1, void 0), w = new mi(k, w), t[y] = !0, this.b[y] = w);
      y = r[y];
      for(C in y) {
        ni(w, y[C], l)
      }
      oi(w)
    }
    l = Ea(Pa(this.b), Number);
    Ja(l);
    D = re();
    C = 0;
    for(x = l.length;C < x;++C) {
      if(y = l[C], w = this.b[y], y in r) {
        if(A = w.g, u = w.e, ih(D, a.size[0] / 2, a.size[1] / 2, A / d.resolution, A / d.resolution, d.rotation, (u[0] - q[0]) / A, (q[1] - u[1]) / A), pi(w, D), y in t) {
          for(y -= 1;0 <= y;--y) {
            if(y in this.b) {
              Hd(w.target, this.b[y].target);
              break
            }
          }
          0 > y && Id(this.target, w.target)
        }else {
          a.s[0] || a.s[1] || qi(w, s, z)
        }
      }else {
        Jd(w.target), delete this.b[y]
      }
    }
    b.opacity != this.g && (ee(this.target, b.opacity), this.g = b.opacity);
    b.visible && !this.f && (fe(this.target, !0), this.f = !0);
    dh(a.ua, g, m, p);
    hh(a, g, k, c, e, s, m, f.c());
    $g(a, g);
    ch(a, g)
  }else {
    this.f && (fe(this.target, !1), this.f = !1)
  }
};
function mi(a, b) {
  this.target = Gd("DIV");
  this.target.style.position = "absolute";
  this.c = a;
  this.d = b;
  this.e = cb(Pg(a, b));
  this.g = a.a[b.a];
  this.b = {};
  this.a = null;
  this.f = te()
}
function ni(a, b, c) {
  var d = b.a, e = d.toString();
  if(!(e in a.b)) {
    var f = Vg(a.c, d.a), g = Lh(b, a), k = g.style;
    k.maxWidth = "none";
    var l, m;
    0 < c ? (l = Gd("DIV"), m = l.style, m.overflow = "hidden", m.width = f + "px", m.height = f + "px", k.position = "absolute", k.left = -c + "px", k.top = -c + "px", k.width = f + 2 * c + "px", k.height = f + 2 * c + "px", l.appendChild(g)) : (k.width = f + "px", k.height = f + "px", l = g, m = k);
    m.position = "absolute";
    m.left = (d.x - a.d.x) * f + "px";
    m.top = (a.d.y - d.y) * f + "px";
    null === a.a && (a.a = document.createDocumentFragment());
    a.a.appendChild(l);
    a.b[e] = b
  }
}
function oi(a) {
  null !== a.a && (a.target.appendChild(a.a), a.a = null)
}
function qi(a, b, c) {
  var d = Qg(a.c, b, a.c.a[a.d.a], c);
  b = [];
  for(var e in a.b) {
    c = a.b[e], d.contains(c.a) || b.push(c)
  }
  var f, d = 0;
  for(f = b.length;d < f;++d) {
    c = b[d], e = c.a.toString(), Jd(Lh(c, a)), delete a.b[e]
  }
}
function pi(a, b) {
  jh(b, a.f) || (ii(a.target, b), ue(a.f, b))
}
;function ri(a, b) {
  lh.call(this, 0, b);
  this.a = Gd("DIV");
  this.a.className = "ol-unselectable";
  var c = this.a.style;
  c.position = "absolute";
  c.width = "100%";
  c.height = "100%";
  Id(a, this.a);
  this.b = !0
}
K(ri, lh);
ri.prototype.Ca = function(a) {
  if(a instanceof qh) {
    a = new li(this, a)
  }else {
    if(a instanceof ph) {
      a = new ki(this, a)
    }else {
      return null
    }
  }
  this.a.appendChild(a.target);
  return a
};
ri.prototype.Va = function(a) {
  if(null === a) {
    this.b && (fe(this.a, !1), this.b = !1)
  }else {
    var b = a.B, c = a.Qa, d, e, f, g;
    d = 0;
    for(e = c.length;d < e;++d) {
      f = c[d], g = nh(this, f), f = a.B[E(f)], 1 == f.lb && g.d(a, f)
    }
    for(var k in this.d) {
      k in b || (g = this.d[k], Jd(g.target))
    }
    this.b || (fe(this.a, !0), this.b = !0);
    mh(a);
    oh(this, a)
  }
};
function si() {
}
h = si.prototype;
h.ub = aa();
h.Ea = aa();
h.vb = aa();
h.Ja = aa();
h.Fa = aa();
h.Ga = aa();
h.Ha = aa();
h.Ia = aa();
h.pa = aa();
h.R = aa();
h.Wa = aa();
function ti() {
  this.g = re();
  this.b = void 0;
  this.a = re();
  this.c = void 0;
  this.d = re();
  this.e = void 0;
  this.f = re();
  this.h = void 0;
  this.i = re()
}
function ui(a, b, c, d, e) {
  var f = !1;
  v(b) && b !== a.b && (f = a.a, ve(f), f[12] = b, f[13] = b, f[14] = b, f[15] = 1, a.b = b, f = !0);
  if(v(c) && c !== a.c) {
    f = a.d;
    ve(f);
    f[0] = c;
    f[5] = c;
    f[10] = c;
    f[15] = 1;
    var g = -0.5 * c + 0.5;
    f[12] = g;
    f[13] = g;
    f[14] = g;
    f[15] = 1;
    a.c = c;
    f = !0
  }
  v(d) && d !== a.e && (f = Math.cos(d), g = Math.sin(d), se(a.f, 0.213 + 0.787 * f - 0.213 * g, 0.213 - 0.213 * f + 0.143 * g, 0.213 - 0.213 * f - 0.787 * g, 0, 0.715 - 0.715 * f - 0.715 * g, 0.715 + 0.285 * f + 0.14 * g, 0.715 - 0.715 * f + 0.715 * g, 0, 0.072 - 0.072 * f + 0.928 * g, 0.072 - 0.072 * f - 0.283 * g, 0.072 + 0.928 * f + 0.072 * g, 0, 0, 0, 0, 1), a.e = d, f = !0);
  v(e) && e !== a.h && (se(a.i, 0.213 + 0.787 * e, 0.213 - 0.213 * e, 0.213 - 0.213 * e, 0, 0.715 - 0.715 * e, 0.715 + 0.285 * e, 0.715 - 0.715 * e, 0, 0.072 - 0.072 * e, 0.072 - 0.072 * e, 0.072 + 0.928 * e, 0, 0, 0, 0, 1), a.h = e, f = !0);
  f && (f = a.g, ve(f), v(c) && we(f, a.d, f), v(b) && we(f, a.a, f), v(e) && we(f, a.i, f), v(d) && we(f, a.f, f));
  return a.g
}
;function vi(a) {
  this.a = a
}
function wi(a) {
  this.a = a
}
K(wi, vi);
wi.prototype.b = da(35632);
function xi(a) {
  this.a = a
}
K(xi, vi);
xi.prototype.b = da(35633);
function yi() {
  this.a = "precision mediump float;varying vec2 a;uniform mat4 f;uniform float g;uniform sampler2D h;void main(void){vec4 texColor\x3dtexture2D(h,a);gl_FragColor.rgb\x3d(f*vec4(texColor.rgb,1.)).rgb;gl_FragColor.a\x3dtexColor.a*g;}"
}
K(yi, wi);
fa(yi);
function zi() {
  this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position\x3de*vec4(b,0.,1.);a\x3d(d*vec4(c,0.,1.)).st;}"
}
K(zi, xi);
fa(zi);
function Ai(a, b) {
  this.g = a.getUniformLocation(b, "f");
  this.c = a.getUniformLocation(b, "g");
  this.f = a.getUniformLocation(b, "e");
  this.e = a.getUniformLocation(b, "d");
  this.d = a.getUniformLocation(b, "h");
  this.a = a.getAttribLocation(b, "b");
  this.b = a.getAttribLocation(b, "c")
}
;function Bi() {
  this.a = "precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor\x3dtexture2D(g,a);gl_FragColor.rgb\x3dtexColor.rgb;gl_FragColor.a\x3dtexColor.a*f;}"
}
K(Bi, wi);
fa(Bi);
function Ci() {
  this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position\x3de*vec4(b,0.,1.);a\x3d(d*vec4(c,0.,1.)).st;}"
}
K(Ci, xi);
fa(Ci);
function Di(a, b) {
  this.c = a.getUniformLocation(b, "f");
  this.f = a.getUniformLocation(b, "e");
  this.e = a.getUniformLocation(b, "d");
  this.d = a.getUniformLocation(b, "g");
  this.a = a.getAttribLocation(b, "b");
  this.b = a.getAttribLocation(b, "c")
}
;function Ei(a) {
  this.a = v(a) ? a : []
}
function Fi(a, b, c) {
  if(b != c) {
    var d = a.a, e = d.length, f;
    for(f = 0;f < e;f += 2) {
      if(b <= d[f]) {
        d.splice(f, 0, b, c);
        Gi(a);
        return
      }
    }
    d.push(b, c);
    Gi(a)
  }
}
Ei.prototype.clear = function() {
  this.a.length = 0
};
function Gi(a) {
  a = a.a;
  var b = a.length, c = 0, d;
  for(d = 0;d < b;d += 2) {
    a[d] != a[d + 1] && (0 < c && a[c - 2] <= a[d] && a[d] <= a[c - 1] ? a[c - 1] = Math.max(a[c - 1], a[d + 1]) : (a[c++] = a[d], a[c++] = a[d + 1]))
  }
  a.length = c
}
function Hi(a, b) {
  var c = a.a, d = c.length, e;
  for(e = 0;e < d;e += 2) {
    b.call(void 0, c[e], c[e + 1])
  }
}
Ei.prototype.ba = function() {
  return 0 === this.a.length
};
function Ii(a, b, c) {
  var d = a.a, e = d.length, f;
  for(f = 0;f < e;f += 2) {
    if(!(c < d[f] || d[f + 1] < b)) {
      if(d[f] > c) {
        break
      }
      if(b < d[f]) {
        if(c == d[f]) {
          break
        }else {
          if(c < d[f + 1]) {
            d[f] = Math.max(d[f], c);
            break
          }else {
            d.splice(f, 2), f -= 2, e -= 2
          }
        }
      }else {
        if(b == d[f]) {
          if(c < d[f + 1]) {
            d[f] = c;
            break
          }else {
            if(c == d[f + 1]) {
              d.splice(f, 2);
              break
            }else {
              d.splice(f, 2), f -= 2, e -= 2
            }
          }
        }else {
          if(c < d[f + 1]) {
            d.splice(f, 2, d[f], b, c, d[f + 1]);
            break
          }else {
            if(c == d[f + 1]) {
              d[f + 1] = b;
              break
            }else {
              d[f + 1] = b
            }
          }
        }
      }
    }
  }
  Gi(a)
}
;function Ji(a, b, c) {
  this.b = v(a) ? a : [];
  this.a = [];
  this.c = new Ei;
  a = v(b) ? b : this.b.length;
  a < this.b.length && Fi(this.c, a, this.b.length);
  this.e = this.g = null;
  this.f = v(c) ? c : 35044
}
Ji.prototype.add = function(a) {
  var b = a.length, c;
  a: {
    c = this.c.a;
    var d = c.length, e = -1, f, g, k;
    for(g = 0;g < d;g += 2) {
      k = c[g + 1] - c[g];
      if(k == b) {
        c = c[g];
        break a
      }
      k > b && (-1 == e || k < f) && (e = c[g], f = k)
    }
    c = e
  }
  Ii(this.c, c, c + b);
  for(d = 0;d < b;++d) {
    this.b[c + d] = a[d]
  }
  a = 0;
  for(d = this.a.length;a < d;++a) {
    Fi(this.a[a], c, c + b)
  }
  return c
};
Ji.prototype.d = function() {
  var a = this.c.a, b = a.length, c = 0, d;
  for(d = 0;d < b;d += 2) {
    c += a[d + 1] - a[d]
  }
  return this.b.length - c
};
Ji.prototype.remove = function(a, b) {
  var c, d;
  Fi(this.c, b, b + a);
  c = 0;
  for(d = this.a.length;c < d;++c) {
    Ii(this.a[c], b, b + a)
  }
};
function Ki(a, b) {
  Yg.call(this, a, b);
  this.w = new Ji([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
  this.e = this.I = null;
  this.g = void 0;
  this.o = re();
  this.r = te();
  this.K = new ti;
  this.h = this.i = null
}
K(Ki, Yg);
function Li(a, b, c) {
  var d = a.c.c;
  if(v(a.g) && a.g == c) {
    d.bindFramebuffer(36160, a.e)
  }else {
    b.ca.push(sa(function(a, b, c) {
      a.isContextLost() || (a.deleteFramebuffer(b), a.deleteTexture(c))
    }, d, a.e, a.I));
    b = d.createTexture();
    d.bindTexture(3553, b);
    d.texImage2D(3553, 0, 6408, c, c, 0, 6408, 5121, null);
    d.texParameteri(3553, 10240, 9729);
    d.texParameteri(3553, 10241, 9729);
    var e = d.createFramebuffer();
    d.bindFramebuffer(36160, e);
    d.framebufferTexture2D(36160, 36064, 3553, b, 0);
    a.I = b;
    a.e = e;
    a.g = c
  }
}
function Mi(a, b, c, d) {
  a = a.a;
  Sc(a.G, b) && T(a, new $f(b, a, new si, d, null, c))
}
Ki.prototype.l = function() {
  this.e = this.I = null;
  this.g = void 0
};
function Ni(a, b) {
  Ki.call(this, a, b);
  this.b = null
}
K(Ni, Ki);
function Oi(a, b) {
  var c = Kg(b), d = a.c.c, e = d.createTexture();
  d.bindTexture(3553, e);
  d.texImage2D(3553, 0, 6408, 6408, 5121, c);
  d.texParameteri(3553, 10242, 33071);
  d.texParameteri(3553, 10243, 33071);
  d.texParameteri(3553, 10241, 9729);
  d.texParameteri(3553, 10240, 9729);
  return e
}
Ni.prototype.d = function(a) {
  var b = this.c.c, c = a.p, d = c.center, e = c.resolution, f = c.rotation, g = this.b, k = this.I, l = this.a.a, m = a.s;
  m[0] || m[1] || (c = Jh(l, a.extent, e, a.pixelRatio, c.projection), null !== c && (m = c.state, 0 == m ? (Fc(c, "change", this.j, !1, this), Lg(c)) : 2 == m && (g = c, k = Oi(this, c), null === this.I || a.ca.push(sa(function(a, b) {
    a.isContextLost() || a.deleteTexture(b)
  }, b, this.I)))));
  null !== g && (b = this.c.f.e, Pi(this, b.width, b.height, d, e, f, g.d), d = this.o, ve(d), ye(d, 1, -1), xe(d, 0, -1), this.b = g, this.I = k, bh(a.attributions, g.f), ch(a, l))
};
function Pi(a, b, c, d, e, f, g) {
  b *= e;
  c *= e;
  a = a.r;
  ve(a);
  ye(a, 2 / b, 2 / c);
  ze(a, -f);
  xe(a, g[0] - d[0], g[1] - d[1]);
  ye(a, (g[2] - g[0]) / 2, (g[3] - g[1]) / 2);
  xe(a, 1, 1)
}
;function Qi() {
  this.a = "precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor\x3dtexture2D(e,a);}"
}
K(Qi, wi);
fa(Qi);
function Ri() {
  this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position\x3dvec4(b*d.xy+d.zw,0.,1.);a\x3dc;}"
}
K(Ri, xi);
fa(Ri);
function Si(a, b) {
  this.d = a.getUniformLocation(b, "e");
  this.c = a.getUniformLocation(b, "d");
  this.a = a.getAttribLocation(b, "b");
  this.b = a.getAttribLocation(b, "c")
}
;function Ti(a, b) {
  Ki.call(this, a, b);
  this.C = Qi.ha();
  this.va = Ri.ha();
  this.b = null;
  this.t = new Ji([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
  this.n = this.f = null;
  this.k = -1
}
K(Ti, Ki);
Ti.prototype.q = function() {
  var a = this.c.f, b = a.b, c = E(this.t), d = a.a[c];
  Fa(d.rb.a, d.Da);
  b.isContextLost() || b.deleteBuffer(d.buffer);
  delete a.a[c];
  Ti.u.q.call(this)
};
Ti.prototype.l = function() {
  Ti.u.l.call(this);
  this.b = null
};
Ti.prototype.d = function(a) {
  var b = this.c, c = b.f, d = b.c, e = a.p, f = e.projection, g = this.a, k = g.a, l = Xg(k, f), m = yb(l.a, e.resolution, 0), p = l.a[m], q = k.ra(m, a.pixelRatio, f), s = q / Vg(l, m), r = p / s, t = k.Ka(), w = e.center, z;
  p == e.resolution ? (w = gh(w, p, a.size), z = bb(w, p, e.rotation, a.size)) : z = a.extent;
  p = Qg(l, z, p);
  if(null !== this.f && this.f.a == p.a && (this.f.b == p.b && this.f.c == p.c && this.f.d == p.d) && this.k == k.f) {
    r = this.n
  }else {
    var u = [p.c - p.a + 1, p.d - p.b + 1], u = Math.max(u[0] * q, u[1] * q), A = Math.pow(2, Math.ceil(Math.log(u) / Math.LN2)), u = r * A, x = Rg(l, m), D = x[0] + p.a * q * r, r = x[1] + p.b * q * r, r = [D, r, D + u, r + u];
    Li(this, a, A);
    d.viewport(0, 0, A, A);
    d.clearColor(0, 0, 0, 0);
    d.clear(16384);
    d.disable(3042);
    A = Ui(c, this.C, this.va);
    Vi(c, A);
    null === this.b && (this.b = new Si(d, A));
    Wi(c, this.t);
    d.enableVertexAttribArray(this.b.a);
    d.vertexAttribPointer(this.b.a, 2, 5126, !1, 16, 0);
    d.enableVertexAttribArray(this.b.b);
    d.vertexAttribPointer(this.b.b, 2, 5126, !1, 16, 8);
    d.uniform1i(this.b.d, 0);
    c = {};
    c[m] = {};
    var y = G(k.cb, k, c, eh(function(a) {
      return null !== a && 2 == a.state && Xi(b.b, a.b())
    }, k, s, f)), A = !0, D = Za(), C = new Me(0, 0, 0, 0), B, P, H;
    for(P = p.a;P <= p.c;++P) {
      for(H = p.b;H <= p.d;++H) {
        x = fh(k, m, P, H, s, f);
        B = x.state;
        if(2 == B) {
          if(Xi(b.b, x.b())) {
            c[m][x.a.toString()] = x;
            continue
          }
        }else {
          if(3 == B || 4 == B) {
            continue
          }
        }
        A = !1;
        B = Og(l, x.a, y, C, D);
        B || (x = Sg(l, x.a, C, D), null === x || y(m + 1, x))
      }
    }
    y = Ea(Pa(c), Number);
    Ja(y);
    var C = new Float32Array(4), F, J, U, I, ba;
    P = 0;
    for(H = y.length;P < H;++P) {
      for(U in I = c[y[P]], I) {
        x = I[U], J = Pg(l, x.a, D), B = 2 * (J[2] - J[0]) / u, F = 2 * (J[3] - J[1]) / u, ba = 2 * (J[0] - r[0]) / u - 1, J = 2 * (J[1] - r[1]) / u - 1, qe(C, B, F, ba, J), d.uniform4fv(this.b.c, C), Yi(b, x, q, t * s), d.drawArrays(5, 0, 4)
      }
    }
    A ? (this.f = p, this.n = r, this.k = k.f) : (this.n = this.f = null, this.k = -1, a.L = !0)
  }
  dh(a.ua, k, m, p);
  var S = b.g;
  hh(a, k, l, s, f, z, m, g.c(), function(a) {
    var c;
    (c = 2 != a.state) || (c = Xi(b.b, a.b())) || (c = a.b() in S.c);
    c || Re(S, [a, Ug(l, a.a), l.a[a.a.a], q, t * s])
  }, this);
  $g(a, k);
  ch(a, k);
  d = this.o;
  ve(d);
  xe(d, (w[0] - r[0]) / (r[2] - r[0]), (w[1] - r[1]) / (r[3] - r[1]));
  0 !== e.rotation && ze(d, e.rotation);
  ye(d, a.size[0] * e.resolution / (r[2] - r[0]), a.size[1] * e.resolution / (r[3] - r[1]));
  xe(d, -0.5, -0.5)
};
function Zi() {
  this.F = 0;
  this.c = {};
  this.b = this.a = null
}
Zi.prototype.clear = function() {
  this.F = 0;
  this.c = {};
  this.b = this.a = null
};
function Xi(a, b) {
  return a.c.hasOwnProperty(b)
}
Zi.prototype.forEach = function(a, b) {
  for(var c = this.a;null !== c;) {
    a.call(b, c.wa, c.ib, this), c = c.J
  }
};
function $i(a, b) {
  var c = a.c[b];
  if(c === a.b) {
    return c.wa
  }
  c === a.a ? (a.a = a.a.J, a.a.la = null) : (c.J.la = c.la, c.la.J = c.J);
  c.J = null;
  c.la = a.b;
  a.b.J = c;
  a.b = c;
  return c.wa
}
Zi.prototype.d = ca("F");
function ah(a) {
  var b = a.a;
  delete a.c[b.ib];
  null !== b.J && (b.J.la = null);
  a.a = b.J;
  null === a.a && (a.b = null);
  --a.F
}
function aj(a, b, c) {
  c = {ib:b, J:null, la:a.b, wa:c};
  null === a.b ? a.a = c : a.b.J = c;
  a.b = c;
  a.c[b] = c;
  ++a.F
}
;function bj(a, b) {
  this.e = a;
  this.b = b;
  this.a = {};
  this.c = {};
  this.d = {};
  this.f = null;
  O(this.e, "webglcontextlost", this.g, !1, this);
  O(this.e, "webglcontextrestored", this.i, !1, this)
}
function Wi(a, b) {
  var c = a.b, d = b.b, e = E(b);
  if(e in a.a) {
    e = a.a[e], c.bindBuffer(34962, e.buffer), Hi(e.Da, function(a, b) {
      var e = d.slice(a, b);
      c.bufferSubData(34962, a, new Float32Array(e))
    }), e.Da.clear()
  }else {
    var f = c.createBuffer();
    c.bindBuffer(34962, f);
    c.bufferData(34962, new Float32Array(d), b.f);
    var g = new Ei;
    b.a.push(g);
    a.a[e] = {rb:b, buffer:f, Da:g}
  }
}
bj.prototype.q = function() {
  La(this.a, function(a) {
    Fa(a.rb.a, a.Da)
  });
  var a = this.b;
  a.isContextLost() || (La(this.a, function(b) {
    a.deleteBuffer(b.buffer)
  }), La(this.d, function(b) {
    a.deleteProgram(b)
  }), La(this.c, function(b) {
    a.deleteShader(b)
  }))
};
function cj(a, b) {
  var c = E(b);
  if(c in a.c) {
    return a.c[c]
  }
  var d = a.b, e = d.createShader(b.b());
  d.shaderSource(e, b.a);
  d.compileShader(e);
  return a.c[c] = e
}
function Ui(a, b, c) {
  var d = E(b) + "/" + E(c);
  if(d in a.d) {
    return a.d[d]
  }
  var e = a.b, f = e.createProgram();
  e.attachShader(f, cj(a, b));
  e.attachShader(f, cj(a, c));
  e.linkProgram(f);
  return a.d[d] = f
}
bj.prototype.g = function() {
  Ra(this.a);
  Ra(this.c);
  Ra(this.d);
  this.f = null
};
bj.prototype.i = aa();
function Vi(a, b) {
  if(b == a.f) {
    return!1
  }
  a.b.useProgram(b);
  a.f = b;
  return!0
}
;function dj(a, b) {
  lh.call(this, 0, b);
  this.a = Gd("CANVAS");
  this.a.style.width = "100%";
  this.a.style.height = "100%";
  this.a.className = "ol-unselectable";
  Id(a, this.a);
  this.k = Gd("CANVAS");
  this.l = 0;
  this.n = this.k.getContext("2d");
  this.h = !0;
  this.c = Be(this.a, {antialias:!0, depth:!1, Xb:!0, preserveDrawingBuffer:!1, stencil:!0});
  this.f = new bj(this.a, this.c);
  O(this.a, "webglcontextlost", this.Ec, !1, this);
  O(this.a, "webglcontextrestored", this.Fc, !1, this);
  this.b = new Zi;
  this.j = null;
  this.g = new Oe(G(function(a) {
    var b = a[1];
    a = a[2];
    var e = b[0] - this.j[0], b = b[1] - this.j[1];
    return 65536 * Math.log(a) + Math.sqrt(e * e + b * b) / a
  }, this), function(a) {
    return a[0].b()
  });
  this.o = G(function() {
    if(!this.g.ba()) {
      Te(this.g);
      var a = Pe(this.g);
      Yi(this, a[0], a[3], a[4])
    }
  }, this);
  this.e = 0;
  ej(this)
}
K(dj, lh);
function Yi(a, b, c, d) {
  var e = a.c, f = b.b();
  if(Xi(a.b, f)) {
    a = $i(a.b, f), e.bindTexture(3553, a.I), 9729 != a.Ab && (e.texParameteri(3553, 10240, 9729), a.Ab = 9729), 9729 != a.Bb && (e.texParameteri(3553, 10240, 9729), a.Bb = 9729)
  }else {
    var g = e.createTexture();
    e.bindTexture(3553, g);
    if(0 < d) {
      var k = a.k, l = a.n;
      a.l != c ? (k.width = c, k.height = c, a.l = c) : l.clearRect(0, 0, c, c);
      l.drawImage(Lh(b), d, d, c, c, 0, 0, c, c);
      e.texImage2D(3553, 0, 6408, 6408, 5121, k)
    }else {
      e.texImage2D(3553, 0, 6408, 6408, 5121, Lh(b))
    }
    e.texParameteri(3553, 10240, 9729);
    e.texParameteri(3553, 10241, 9729);
    e.texParameteri(3553, 10242, 33071);
    e.texParameteri(3553, 10243, 33071);
    aj(a.b, f, {I:g, Ab:9729, Bb:9729})
  }
}
h = dj.prototype;
h.Ca = function(a) {
  return a instanceof qh ? new Ti(this, a) : a instanceof ph ? new Ni(this, a) : null
};
function fj(a, b, c) {
  var d = a.i;
  Sc(d.G, b) && T(d, new $f(b, d, new si, c, null, a.f))
}
h.q = function() {
  var a = this.c;
  a.isContextLost() || this.b.forEach(function(b) {
    null === b || a.deleteTexture(b.I)
  });
  lc(this.f);
  dj.u.q.call(this)
};
h.Wb = function(a, b) {
  for(var c = this.c, d;1024 < this.b.d() - this.e;) {
    d = this.b.a.wa;
    if(null === d) {
      if(+this.b.a.ib == b.index) {
        break
      }else {
        --this.e
      }
    }else {
      c.deleteTexture(d.I)
    }
    ah(this.b)
  }
};
h.Ec = function(a) {
  a.v();
  this.b.clear();
  this.e = 0;
  La(this.d, function(a) {
    a.l()
  })
};
h.Fc = function() {
  ej(this);
  of(this.i)
};
function ej(a) {
  a = a.c;
  a.activeTexture(33984);
  a.blendFuncSeparate(770, 771, 1, 771);
  a.disable(2884);
  a.disable(2929);
  a.disable(3089);
  a.disable(2960)
}
h.Va = function(a) {
  var b = this.f, c = this.c;
  if(c.isContextLost()) {
    return!1
  }
  if(null === a) {
    return this.h && (fe(this.a, !1), this.h = !1), !1
  }
  this.j = a.focus;
  aj(this.b, (-a.index).toString(), null);
  ++this.e;
  var d = [], e = a.Qa, f = a.p.resolution, g, k, l, m;
  g = 0;
  for(k = e.length;g < k;++g) {
    l = e[g], m = a.B[E(l)], m.visible && (1 == m.lb && f < m.maxResolution && f >= m.minResolution) && d.push(l)
  }
  g = 0;
  for(k = d.length;g < k;++g) {
    l = d[g], e = nh(this, l), m = a.B[E(l)], e.d(a, m)
  }
  g = a.size[0] * a.pixelRatio;
  k = a.size[1] * a.pixelRatio;
  if(this.a.width != g || this.a.height != k) {
    this.a.width = g, this.a.height = k
  }
  c.bindFramebuffer(36160, null);
  c.clearColor(0, 0, 0, 0);
  c.clear(16384);
  c.enable(3042);
  c.viewport(0, 0, this.a.width, this.a.height);
  fj(this, "precompose", a);
  g = 0;
  for(k = d.length;g < k;++g) {
    l = d[g];
    m = a.B[E(l)];
    c = e = nh(this, l);
    l = a;
    e = b;
    Mi(c, "precompose", e, l);
    Wi(e, c.w);
    var f = e.b, p = m.brightness || 1 != m.contrast || m.hue || 1 != m.saturation, q = void 0, s = void 0;
    p ? (q = yi.ha(), s = zi.ha()) : (q = Bi.ha(), s = Ci.ha());
    q = Ui(e, q, s);
    s = void 0;
    p ? null === c.i ? (s = new Ai(f, q), c.i = s) : s = c.i : null === c.h ? (s = new Di(f, q), c.h = s) : s = c.h;
    Vi(e, q) && (f.enableVertexAttribArray(s.a), f.vertexAttribPointer(s.a, 2, 5126, !1, 16, 0), f.enableVertexAttribArray(s.b), f.vertexAttribPointer(s.b, 2, 5126, !1, 16, 8), f.uniform1i(s.d, 0));
    f.uniformMatrix4fv(s.e, !1, c.o);
    f.uniformMatrix4fv(s.f, !1, c.r);
    p && f.uniformMatrix4fv(s.g, !1, ui(c.K, m.brightness, m.contrast, m.hue, m.saturation));
    f.uniform1f(s.c, m.opacity);
    f.bindTexture(3553, c.I);
    f.drawArrays(5, 0, 4);
    Mi(c, "postcompose", e, l)
  }
  this.h || (fe(this.a, !0), this.h = !0);
  mh(a);
  1024 < this.b.d() - this.e && a.ca.push(G(this.Wb, this));
  this.g.ba() || (a.ca.push(this.o), a.L = !0);
  fj(this, "postcompose", a);
  oh(this, a)
};
var gj = {Oc:"canvas", Sc:"dom", ed:"webgl"}, hj = ["webgl", "canvas", "dom"];
function Z(a) {
  Xc.call(this);
  var b = ij(a);
  this.Nb = v(a.pixelRatio) ? a.pixelRatio : Ce;
  this.Mb = b.ol3Logo;
  this.h = new md(this.Hc, void 0, this);
  kc(this, sa(lc, this.h));
  this.Kb = re();
  this.Sb = re();
  this.Lb = 0;
  this.g = null;
  this.j = 0;
  this.M = !1;
  this.l = this.t = null;
  this.c = Dd("DIV", "ol-viewport");
  this.c.style.position = "relative";
  this.c.style.overflow = "hidden";
  this.c.style.width = "100%";
  this.c.style.height = "100%";
  this.c.style.msTouchAction = "none";
  Ee && (this.c.className = "ol-touch");
  this.Qb = Dd("DIV", "ol-overlaycontainer");
  this.c.appendChild(this.Qb);
  this.K = Dd("DIV", "ol-overlaycontainer-stopevent");
  O(this.K, ["click", "dblclick", "mousedown", "touchstart", "MSPointerDown"], nc);
  this.c.appendChild(this.K);
  a = new $e(this);
  O(a, Oa(mf), this.Cb, !1, this);
  kc(this, sa(lc, a));
  this.r = new Pd;
  O(this.r, "key", this.wb, !1, this);
  kc(this, sa(lc, this.r));
  a = new ke(this.c);
  O(a, "mousewheel", this.wb, !1, this);
  kc(this, sa(lc, a));
  this.qb = b.controls;
  this.ya = b.interactions;
  this.Rb = b.overlays;
  this.Aa = new b.Ic(this.c, this);
  kc(this, sa(lc, this.Aa));
  this.Vb = new Ld;
  O(this.Vb, "resize", this.fa, !1, this);
  this.w = null;
  this.n = [];
  this.za = [];
  this.Ba = new Ue(G(this.Zb, this), G(this.xc, this));
  O(this, cd("layergroup"), this.hc, !1, this);
  O(this, cd("view"), this.Bc, !1, this);
  O(this, cd("size"), this.vc, !1, this);
  O(this, cd("target"), this.wc, !1, this);
  Yc(this, b.Nc);
  this.qb.forEach(function(a) {
    a.setMap(this)
  }, this);
  this.ya.forEach(function(a) {
    a.setMap(this)
  }, this);
  this.Rb.forEach(function(a) {
    a.setMap(this)
  }, this)
}
K(Z, Xc);
Z.prototype.e = function(a) {
  Y(this);
  Array.prototype.push.apply(this.n, arguments)
};
Z.prototype.q = function() {
  Jd(this.c);
  Z.u.q.call(this)
};
function Ze(a, b) {
  if(v(b.changedTouches)) {
    var c = b.changedTouches.item(0), d = ce(a.c);
    return[c.clientX - d.x, c.clientY - d.y]
  }
  c = be(b, a.c);
  return[c.x, c.y]
}
Z.prototype.C = function() {
  return this.b("target")
};
Z.prototype.getTarget = Z.prototype.C;
Z.prototype.i = function(a) {
  var b = this.g;
  if(null === b) {
    return null
  }
  a = a.slice();
  return kh(b.Eb, a, a)
};
Z.prototype.o = function() {
  return this.b("layergroup")
};
Z.prototype.getLayerGroup = Z.prototype.o;
Z.prototype.Ob = function() {
  var a = this.o();
  if(v(a)) {
    return a.Sa()
  }
};
function Of(a, b) {
  var c = a.g;
  if(null === c) {
    return null
  }
  var d = b.slice(0, 2);
  return kh(c.tb, d, d)
}
Z.prototype.k = function() {
  return this.b("size")
};
Z.prototype.getSize = Z.prototype.k;
Z.prototype.a = function() {
  return this.b("view")
};
Z.prototype.getView = Z.prototype.a;
h = Z.prototype;
h.Zb = function(a, b, c, d) {
  var e = this.g;
  if(!(null !== e && b in e.na && e.na[b][a.a.toString()])) {
    return Infinity
  }
  a = c[0] - e.focus[0];
  c = c[1] - e.focus[1];
  return 65536 * Math.log(d) + Math.sqrt(a * a + c * c) / d
};
h.wb = function(a, b) {
  var c = new X(b || a.type, this, a);
  this.Cb(c)
};
h.Cb = function(a) {
  if(null !== this.g) {
    this.w = a.coordinate;
    a.d = this.g;
    var b = this.ya.a, c;
    if(!1 !== T(this, a)) {
      for(c = b.length - 1;0 <= c && b[c].ka(a);c--) {
      }
    }
  }
};
h.tc = function() {
  var a = this.g, b = this.Ba;
  if(!b.ba()) {
    var c = 16, d = c, e = 0;
    if(null !== a) {
      e = a.s;
      if(e[0] || e[1]) {
        c = 8, d = 2
      }
      var e = a.na, f = 0, g;
      for(g in e) {
        f++
      }
      e = f
    }
    c *= e;
    d *= e;
    if(b.f < c) {
      Te(b);
      c = Math.min(c - b.f, d, b.d());
      for(d = 0;d < c;++d) {
        g = Pe(b)[0], Fc(g, "change", b.i, !1, b), 0 == g.state && (g.state = 1, g.c = [Fc(g.d, "error", g.g, !1, g), Fc(g.d, "load", g.i, !1, g)], g.h(g, g.e))
      }
      b.f += c
    }
  }
  b = this.za;
  c = 0;
  for(d = b.length;c < d;++c) {
    b[c](this, a)
  }
  b.length = 0
};
h.vc = function() {
  of(this)
};
h.wc = function() {
  var a = this.C(), a = v(a) ? ja(a) ? document.getElementById(a) : a : null;
  Wd(this.r);
  null === a ? Jd(this.c) : (a.appendChild(this.c), Qd(this.r, a));
  this.fa()
};
h.xc = function() {
  Y(this)
};
h.Cc = function() {
  of(this)
};
h.Bc = function() {
  null !== this.t && (Q(this.t), this.t = null);
  var a = this.a();
  null != a && (this.t = O(a, "propertychange", this.Cc, !1, this));
  of(this)
};
h.ic = function() {
  of(this)
};
h.jc = function() {
  of(this)
};
h.hc = function() {
  if(null !== this.l) {
    for(var a = this.l.length, b = 0;b < a;++b) {
      Q(this.l[b])
    }
    this.l = null
  }
  a = this.o();
  null != a && (this.l = [O(a, "propertychange", this.jc, !1, this), O(a, "change", this.ic, !1, this)]);
  of(this)
};
function of(a) {
  null == a.h.H && (0 === a.j ? (a = a.h, nd(a), a.bb()) : a.M = !0)
}
function Y(a) {
  0 === a.j ? null != a.h.H || a.h.start() : a.M = !0
}
h.Hc = function(a) {
  var b, c, d;
  if(0 === this.j) {
    var e = this.k();
    b = this.a();
    var f = v(b) ? this.a().a() : void 0, g = null;
    if(v(e) && 0 < e[0] && 0 < e[1] && v(f) && f.k()) {
      g = Ga(b.l);
      b = this.o().eb();
      var k = b.layers;
      d = b.B;
      var l = {}, m;
      b = 0;
      for(c = k.length;b < c;++b) {
        m = k[b], l[E(m)] = d[b]
      }
      d = jd(f);
      g = {L:!1, attributions:{}, tb:this.Kb, extent:null, focus:null === this.w ? d.center : this.w, index:this.Lb++, Qa:k, B:l, kb:{}, pixelRatio:this.Nb, Eb:this.Sb, ca:[], size:e, Lc:this.Ba, time:a, ua:{}, p:d, s:g, na:{}};
      this.Mb && (g.kb["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] = 
      "http://ol3js.org/")
    }
    a = this.n;
    b = e = 0;
    for(c = a.length;b < c;++b) {
      f = a[b], f(this, g) && (a[e++] = f)
    }
    a.length = e;
    null !== g && (g.extent = bb(d.center, d.resolution, d.rotation, g.size));
    this.g = g;
    this.Aa.Va(g);
    this.M = !1;
    null !== g && (g.L && Y(this), Array.prototype.push.apply(this.za, g.ca), 0 != this.n.length || (g.L || g.s[0] || g.s[1]) || T(this, new Ye("moveend", this)));
    T(this, new Ye("postrender", this, g));
    c = b = this.tc;
    this && (c = G(b, this));
    ma(n.setImmediate) ? n.setImmediate(c) : (qd || (qd = rd()), qd(c))
  }
};
h.Jc = function(a) {
  this.d("layergroup", a)
};
Z.prototype.setLayerGroup = Z.prototype.Jc;
Z.prototype.ea = function(a) {
  this.d("size", a)
};
Z.prototype.setSize = Z.prototype.ea;
Z.prototype.Tb = function(a) {
  this.d("target", a)
};
Z.prototype.setTarget = Z.prototype.Tb;
Z.prototype.Ub = function(a) {
  this.d("view", a)
};
Z.prototype.setView = Z.prototype.Ub;
Z.prototype.fa = function() {
  var a = this.C(), a = v(a) ? ja(a) ? document.getElementById(a) : a : null;
  if(null === a) {
    this.ea(void 0)
  }else {
    var b = zd(a), c = M && a.currentStyle, d;
    if(d = c) {
      xd(b), d = "auto" != c.width && "auto" != c.height && !c.boxSizing
    }
    if(d) {
      b = ge(a, c.width, "width", "pixelWidth"), a = ge(a, c.height, "height", "pixelHeight"), a = new wd(b, a)
    }else {
      c = new wd(a.offsetWidth, a.offsetHeight);
      if(M) {
        b = he(a, "paddingLeft");
        d = he(a, "paddingRight");
        var e = he(a, "paddingTop"), f = he(a, "paddingBottom"), b = new Xd(e, d, f, b)
      }else {
        b = Yd(a, "paddingLeft"), d = Yd(a, "paddingRight"), e = Yd(a, "paddingTop"), f = Yd(a, "paddingBottom"), b = new Xd(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(b))
      }
      M ? (d = je(a, "borderLeft"), e = je(a, "borderRight"), f = je(a, "borderTop"), a = je(a, "borderBottom"), a = new Xd(f, e, a, d)) : (d = Yd(a, "borderLeftWidth"), e = Yd(a, "borderRightWidth"), f = Yd(a, "borderTopWidth"), a = Yd(a, "borderBottomWidth"), a = new Xd(parseFloat(f), parseFloat(e), parseFloat(a), parseFloat(d)));
      a = new wd(c.width - a.left - b.left - b.right - a.right, c.height - a.top - b.top - b.bottom - a.bottom)
    }
    this.ea([a.width, a.height])
  }
};
function Ef(a, b) {
  ++a.j;
  try {
    b.call(void 0)
  }finally {
    if(0 === --a.j && a.M) {
      var c = a.h;
      nd(c);
      c.bb()
    }
  }
}
function ij(a) {
  var b = {}, c = v(a.ol3Logo) ? a.ol3Logo : !0, d = a.layers instanceof yg ? a.layers : new yg({layers:a.layers});
  b.layergroup = d;
  b.target = a.target;
  b.view = v(a.view) ? a.view : new V;
  var d = lh, e;
  e = v(a.renderers) ? a.renderers : v(a.renderer) ? [a.renderer] : hj;
  var f = e.length, g, k;
  for(g = 0;g < f;++g) {
    if(k = e[g], "canvas" == k) {
      if(De) {
        d = gi;
        break
      }
    }else {
      if("dom" == k) {
        d = ri;
        break
      }else {
        if("webgl" == k && Fe) {
          d = dj;
          break
        }
      }
    }
  }
  e = v(a.controls) ? ha(a.controls) ? new He(Ga(a.controls)) : a.controls : yf();
  if(v(a.interactions)) {
    f = ha(a.interactions) ? new He(Ga(a.interactions)) : a.interactions
  }else {
    f = v(void 0) ? void 0 : {};
    g = new He;
    k = new zf;
    (v(f.altShiftDragRotate) ? f.altShiftDragRotate : 1) && g.push(new Pf);
    (v(f.doubleClickZoom) ? f.doubleClickZoom : 1) && g.push(new Hf({delta:f.zoomDelta, duration:f.zoomDuration}));
    (v(f.touchPan) ? f.touchPan : 1) && g.push(new vg({kinetic:k}));
    (v(f.touchRotate) ? f.touchRotate : 1) && g.push(new wg);
    (v(f.touchZoom) ? f.touchZoom : 1) && g.push(new xg({duration:f.zoomDuration}));
    (v(f.dragPan) ? f.dragPan : 1) && g.push(new Nf({kinetic:k}));
    if(v(f.keyboard) ? f.keyboard : 1) {
      g.push(new qg), g.push(new rg({delta:f.zoomDelta, duration:f.zoomDuration}))
    }
    (v(f.mouseWheelZoom) ? f.mouseWheelZoom : 1) && g.push(new sg({duration:f.zoomDuration}));
    (v(f.shiftDragZoom) ? f.shiftDragZoom : 1) && g.push(new pg);
    f = g
  }
  a = v(a.overlays) ? ha(a.overlays) ? new He(Ga(a.overlays)) : a.overlays : new He;
  return{controls:e, interactions:f, ol3Logo:c, overlays:a, Ic:d, Nc:b}
}
nb(Cg);
nb(Hg);
L(Hg, function(a) {
  L(Cg, function(b) {
    pb(a, b, Dg);
    pb(b, a, Eg)
  })
});
function $(a) {
  a = v(a) ? a : {};
  var b = Dd("DIV", {"class":v(a.className) ? a.className : "ol-mouse-position"});
  nf.call(this, {element:b, target:a.target});
  O(this, cd("projection"), this.C, !1, this);
  v(a.coordinateFormat) && this.o(a.coordinateFormat);
  v(a.projection) && this.n(sb(a.projection));
  this.K = v(a.undefinedHTML) ? a.undefinedHTML : "";
  this.j = b.innerHTML;
  this.h = this.c = this.a = null
}
K($, nf);
$.prototype.g = function(a) {
  a = a.d;
  null === a ? this.a = null : this.a != a.p.projection && (this.a = a.p.projection, this.c = null);
  jj(this, this.h)
};
$.prototype.C = function() {
  this.c = null
};
$.prototype.l = function() {
  return this.b("coordinateFormat")
};
$.prototype.getCoordinateFormat = $.prototype.l;
$.prototype.k = function() {
  return this.b("projection")
};
$.prototype.getProjection = $.prototype.k;
$.prototype.t = function(a) {
  a = be(a, this.e.c);
  this.h = [a.x, a.y];
  jj(this, this.h)
};
$.prototype.w = function() {
  jj(this, null);
  this.h = null
};
$.prototype.setMap = function(a) {
  $.u.setMap.call(this, a);
  null !== a && (a = a.c, this.i.push(O(a, "mousemove", this.t, !1, this), O(a, "mouseout", this.w, !1, this)))
};
$.prototype.o = function(a) {
  this.d("coordinateFormat", a)
};
$.prototype.setCoordinateFormat = $.prototype.o;
$.prototype.n = function(a) {
  this.d("projection", a)
};
$.prototype.setProjection = $.prototype.n;
function jj(a, b) {
  var c = a.K;
  if(null !== b && null !== a.a) {
    if(null === a.c) {
      var d = a.k();
      a.c = v(d) ? ub(a.a, d) : vb
    }
    d = a.e.i(b);
    null !== d && (a.c(d, d), c = a.l(), c = v(c) ? c(d) : d.toString())
  }
  v(a.j) && c == a.j || (a.element.innerHTML = c, a.j = c)
}
;function kj(a) {
  a = v(a) ? a : {};
  Hh.call(this, {attributions:a.attributions, extent:a.extent, logo:a.logo, projection:a.projection, resolutions:a.resolutions});
  this.o = v(a.crossOrigin) ? a.crossOrigin : null;
  this.j = a.url;
  this.a = a.params;
  this.d = !0;
  lj(this);
  this.n = a.serverType;
  this.t = v(a.hidpi) ? a.hidpi : !0;
  this.b = null;
  this.c = [0, 0];
  this.e = null;
  this.l = NaN;
  this.k = 0;
  this.h = v(a.ratio) ? a.ratio : 1.5
}
K(kj, Hh);
kj.prototype.w = function(a, b, c, d) {
  if(v(this.j) && null !== this.b && b == this.l && (c === this.e || (c.ma != this.e.ma ? 0 : ub(c, this.e) === qb))) {
    var e = this.b.d, f = this.b.e, g = {SERVICE:"WMS", VERSION:"1.3.0", REQUEST:"GetFeatureInfo", FORMAT:"image/png", TRANSPARENT:!0, QUERY_LAYERS:"LAYERS" in this.a ? this.a.LAYERS : void 0};
    Ua(g, this.a, d);
    b /= f;
    d = Math.floor((e[3] - a[1]) / b);
    g[this.d ? "I" : "X"] = Math.floor((a[0] - e[0]) / b);
    g[this.d ? "J" : "Y"] = d;
    return mj(this, e, this.c, f, c, g)
  }
};
function Jh(a, b, c, d, e) {
  if(!v(a.j)) {
    return null
  }
  null === a.g || (c = a.g[yb(a.g, c, 0)]);
  1 == d || a.t && v(a.n) || (d = 1);
  var f = a.b;
  if(null !== f && a.k == a.f && f.g == c && f.e == d && Ya(f.d, b)) {
    return f
  }
  f = {SERVICE:"WMS", VERSION:"1.3.0", REQUEST:"GetMap", FORMAT:"image/png", TRANSPARENT:!0};
  Ua(f, a.a);
  b = b.slice();
  var g = (b[0] + b[2]) / 2, k = (b[1] + b[3]) / 2;
  if(1 != a.h) {
    var l = a.h * (b[2] - b[0]) / 2, m = a.h * (b[3] - b[1]) / 2;
    b[0] = g - l;
    b[1] = k - m;
    b[2] = g + l;
    b[3] = k + m
  }
  var l = c / d, m = Math.ceil((b[2] - b[0]) / l), p = Math.ceil((b[3] - b[1]) / l);
  b[0] = g - l * m / 2;
  b[2] = g + l * m / 2;
  b[1] = k - l * p / 2;
  b[3] = k + l * p / 2;
  a.c[0] = m;
  a.c[1] = p;
  f = mj(a, b, a.c, d, e, f);
  a.b = new Jg(b, c, d, a.i, f, a.o);
  a.e = e;
  a.l = c;
  a.k = a.f;
  return a.b
}
function mj(a, b, c, d, e, f) {
  f[a.d ? "CRS" : "SRS"] = e.a;
  "STYLES" in a.a || (f.STYLES = new String(""));
  if(1 != d) {
    switch(a.n) {
      case "geoserver":
        f.FORMAT_OPTIONS = "dpi:" + (90 * d + 0.5 | 0);
        break;
      case "mapserver":
        f.MAP_RESOLUTION = 90 * d;
        break;
      case "qgis":
        f.DPI = 90 * d
    }
  }
  f.WIDTH = c[0];
  f.HEIGHT = c[1];
  c = e.d;
  f.BBOX = (a.d && "ne" == c.substr(0, 2) ? [b[1], b[0], b[3], b[2]] : b).join(",");
  return ld(a.j, f)
}
kj.prototype.C = function(a) {
  Ua(this.a, a);
  lj(this);
  this.b = null;
  Vc(this)
};
function lj(a) {
  a.d = 0 <= Ba("VERSION" in a.a ? a.a.VERSION : "1.3.0", "1.3")
}
;function nj() {
}
;function oj(a, b, c, d, e) {
  Ne.call(this, a, b);
  this.e = c;
  this.d = new Image;
  null !== d && (this.d.crossOrigin = d);
  this.f = {};
  this.c = null;
  this.h = e
}
K(oj, Ne);
function Lh(a, b) {
  if(v(b)) {
    var c, d = E(b);
    if(d in a.f) {
      return a.f[d]
    }
    c = Qa(a.f) ? a.d : a.d.cloneNode(!1);
    return a.f[d] = c
  }
  return a.d
}
oj.prototype.b = ca("e");
oj.prototype.g = function() {
  this.state = 3;
  L(this.c, Q);
  this.c = null;
  T(this, "change")
};
oj.prototype.i = function() {
  this.state = this.d.naturalWidth && this.d.naturalHeight ? 2 : 4;
  L(this.c, Q);
  this.c = null;
  T(this, "change")
};
function pj(a) {
  Zi.call(this);
  this.f = v(a) ? a : 2048
}
K(pj, Zi);
function qj(a) {
  Wg.call(this, {attributions:a.attributions, extent:a.extent, logo:a.logo, opaque:a.opaque, projection:a.projection, tileGrid:a.tileGrid});
  this.tileUrlFunction = v(a.tileUrlFunction) ? a.tileUrlFunction : nj;
  this.crossOrigin = v(a.crossOrigin) ? a.crossOrigin : null;
  this.a = new pj;
  this.tileLoadFunction = v(a.tileLoadFunction) ? a.tileLoadFunction : rj;
  this.mb = v(a.mb) ? a.mb : oj
}
K(qj, Wg);
function rj(a, b) {
  Lh(a).src = b
}
qj.prototype.Db = function() {
  return this.a.d() > this.a.f
};
function fh(a, b, c, d, e, f) {
  var g = a.qa(b, c, d);
  if(Xi(a.a, g)) {
    return $i(a.a, g)
  }
  b = new Ke(b, c, d);
  e = a.tileUrlFunction(b, e, f);
  e = new a.mb(b, v(e) ? 0 : 4, v(e) ? e : "", a.crossOrigin, a.tileLoadFunction);
  aj(a.a, g, e);
  return e
}
qj.prototype.Ib = function(a, b, c) {
  a = this.qa(a, b, c);
  Xi(this.a, a) && $i(this.a, a)
};
function sj(a) {
  a = v(a) ? a : {};
  var b = v(a.params) ? a.params : {};
  qj.call(this, {attributions:a.attributions, crossOrigin:a.crossOrigin, extent:a.extent, logo:a.logo, opaque:!("TRANSPARENT" in b ? b.TRANSPARENT : 1), projection:a.projection, tileGrid:a.tileGrid, tileLoadFunction:a.tileLoadFunction, tileUrlFunction:G(this.Mc, this)});
  var c = a.urls;
  if(!v(c) && v(a.url)) {
    var c = a.url, d = [], e = /\{(\d)-(\d)\}/.exec(c) || /\{([a-z])-([a-z])\}/.exec(c);
    if(e) {
      var f = e[2].charCodeAt(0), g;
      for(g = e[1].charCodeAt(0);g <= f;++g) {
        d.push(c.replace(e[0], String.fromCharCode(g)))
      }
    }else {
      d.push(c)
    }
    c = d
  }
  this.j = c;
  this.g = v(a.gutter) ? a.gutter : 0;
  this.b = b;
  this.l = NaN;
  this.c = !0;
  this.d = a.serverType;
  this.h = v(a.hidpi) ? a.hidpi : !0;
  this.e = "";
  tj(this);
  this.n = Za();
  uj(this)
}
K(sj, qj);
h = sj.prototype;
h.Ka = ca("g");
h.qa = function(a, b, c) {
  return this.e + sj.u.qa.call(this, a, b, c)
};
h.ra = function(a, b, c) {
  a = sj.u.ra.call(this, a, b, c);
  return 1 != b && this.h && v(this.d) ? a * b + 0.5 | 0 : a
};
function tj(a) {
  var b = 0, c = [], d;
  for(d in a.b) {
    c[b++] = d + "-" + a.b[d]
  }
  a.e = c.join("/")
}
h.Mc = function(a, b, c) {
  var d = this.tileGrid;
  null === d && (d = Xg(this, c));
  if(!(d.a.length <= a.a)) {
    var e = d.a[a.a], f = Pg(d, a, this.n), g = Vg(d, a.a), k = this.g;
    0 !== k && (g += 2 * k, d = f, e = e * k, v(f) ? (f[0] = d[0] - e, f[1] = d[1] - e, f[2] = d[2] + e, f[3] = d[3] + e) : f = [d[0] - e, d[1] - e, d[2] + e, d[3] + e]);
    1 != b && (g = g * b + 0.5 | 0);
    d = {SERVICE:"WMS", VERSION:"1.3.0", REQUEST:"GetMap", FORMAT:"image/png", TRANSPARENT:!0};
    Ua(d, this.b);
    1 == b || this.h && v(this.d) || (b = 1);
    this.l = b;
    e = b;
    b = this.j;
    if(v(b) && 0 != b.length) {
      d.WIDTH = g;
      d.HEIGHT = g;
      d[this.c ? "CRS" : "SRS"] = c.a;
      "STYLES" in this.b || (d.STYLES = new String(""));
      if(1 != e) {
        switch(this.d) {
          case "geoserver":
            d.FORMAT_OPTIONS = "dpi:" + (90 * e + 0.5 | 0);
            break;
          case "mapserver":
            d.MAP_RESOLUTION = 90 * e;
            break;
          case "qgis":
            d.DPI = 90 * e
        }
      }
      c = c.d;
      this.c && "ne" == c.substr(0, 2) && (c = f[0], f[0] = f[1], f[1] = c, c = f[2], f[2] = f[3], f[3] = c);
      d.BBOX = f.join(",");
      1 == b.length ? a = b[0] : (c = this.j.length, a = ((a.x << a.a) + a.y) % c, a = b[0 > a * c ? a + c : a]);
      a = ld(a, d)
    }else {
      a = void 0
    }
    return a
  }
};
h.Gc = function(a) {
  Ua(this.b, a);
  tj(this);
  uj(this);
  Vc(this)
};
function uj(a) {
  a.c = 0 <= Ba("VERSION" in a.b ? a.b.VERSION : "1.3.0", "1.3")
}
;sj.prototype.updateParams = sj.prototype.Gc;
kj.prototype.updateParams = kj.prototype.C;
He.prototype.forEach = He.prototype.forEach;
Z.prototype.getLayers = Z.prototype.Ob;
Xc.prototype.set = Xc.prototype.d;
Z.prototype.updateSize = Z.prototype.fa;
ua("ol.METERS_PER_UNIT", fb);
kj.prototype.getGetFeatureInfoUrl = kj.prototype.w;
Xe.prototype.getSource = Xe.prototype.w;
gb.prototype.getUnits = gb.prototype.g;
Xc.prototype.get = Xc.prototype.b;
V.prototype.fitExtent = V.prototype.r;
Uc.prototype.on = Uc.prototype.Pb;
ua("ol.RendererHint", gj);
gj.CANVAS = "canvas";
ua("ol.proj.Units", {Rc:"degrees", Xc:"ft", Yc:"m", $c:"pixels"});
ua("ol.control.defaults", yf);
He.prototype.extend = He.prototype.Dc;
ua("ol.Map", Z);
ua("ol.View2D", V);
ua("ol.control.MousePosition", $);
ua("ol.layer.Image", ph);
ua("ol.source.ImageWMS", kj);
ua("ol.layer.Tile", qh);
ua("ol.source.TileWMS", sj);
ua("ol.coordinate.createStringXY", function(a) {
  return function(b) {
    return v(b) ? "{x}, {y}".replace("{x}", b[0].toFixed(a)).replace("{y}", b[1].toFixed(a)) : ""
  }
});
ua("ol.proj.Projection", gb);

