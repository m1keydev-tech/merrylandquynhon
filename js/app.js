var UA =
    navigator.userAgent ||
    navigator.userAgentData ||
    navigator.appVersion ||
    navigator.platform,
  HTML = document.documentElement,
  isFirefox = UA.match(/firefox|fxios/i),
  isSafari =
    /constructor/i.test(window.HTMLElement) ||
    "[object SafariRemoteNotification]" ===
      (!window.safari || safari.pushNotification).toString(),
  isIE9 = /MSIE 9/i.test(UA),
  isIE10 = /MSIE 10/i.test(UA),
  isIE11 = /rv:11.0/i.test(UA),
  isIE = !!document.documentMode,
  isEdge = UA.match(/edg/i) || (!isIE && !!window.StyleMedia && !isIE11),
  isChrome =
    UA.match(/chrome|chromium|crios/i) ||
    -1 < UA.indexOf("Chrome") ||
    (!!window.chrome && !!window.chrome.webstore),
  Mobile = window.matchMedia("(max-width: 1100px)"),
  Touch =
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(UA) ||
    "ontouchstart" in document.documentElement,
  iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
  MacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform),
  Portrait = window.innerHeight > window.innerWidth,
  Landscape = window.innerHeight <= window.innerWidth;
iOS && HTML.classList.add("is-iOS"),
  1 == Touch && HTML.classList.add("is-touch"),
  isFirefox
    ? HTML.classList.add("is-Firefox")
    : isEdge
    ? HTML.classList.add("is-Edge")
    : isSafari
    ? HTML.classList.add("is-Safari")
    : isChrome && HTML.classList.add("is-Chrome");
var NotSupport = isIE9 || isIE10 || isIE11 || isIE || isEdge;
gsap.config({ nullTargetWarn: !1 });
var Loadx = 0,
  Details = 0,
  AddButton = $(
    '<div class="add-button"><div class="install-app"><div class="icon"></div><p>Add to Home Screen</p></div><div class="close-add"></div></div>'
  );
function inStanceof(t, e) {
  return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance]
    ? e[Symbol.hasInstance](t)
    : t instanceof e;
}
function classCallCheck(t, e) {
  if (!inStanceof(t, e))
    throw new TypeError("Cannot call a class as a function");
}
function defineProperties(t, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(t, i.key, i);
  }
}
function createClass(t, e, n) {
  return e && defineProperties(t.prototype, e), n && defineProperties(t, n), t;
}
function iterableToArray(t) {
  if (
    Symbol.iterator in Object(t) ||
    "[object Arguments]" === Object.prototype.toString.call(t)
  )
    return Array.from(t);
}
function toConsumableArray(t) {
  return arrayWithoutHoles(t) || iterableToArray(t) || nonIterableSpread();
}
function arrayWithHoles(t) {
  if (Array.isArray(t)) return t;
}
function arrayWithoutHoles(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
    return n;
  }
}
function isInViewport(t) {
  var e = t.getBoundingClientRect(),
    n = window.innerHeight || document.documentElement.clientHeight,
    i = window.innerWidth || document.documentElement.clientWidth,
    r = e.top <= n && 0 <= e.top + e.height,
    o = e.left <= i && 0 <= e.left + e.width;
  return r && o;
}
var MathUtils = {
    lineEq: function (t, e, n, i, r) {
      var o = (t - e) / (n - i);
      return o * r + (e - o * i);
    },
    map: function (t, e, n, i, r) {
      return ((t - e) * (r - i)) / (n - e) + i;
    },
    lerp: function (t, e, n) {
      return (1 - n) * t + n * e;
    },
    getRandomFloat: function (t, e) {
      return (Math.random() * (e - t) + t).toFixed(2);
    },
  },
  getMousePos = function (t) {
    return t || (t = window.event), { x: t.clientX, y: t.clientY };
  };
function isFullScreenMode() {
  var t = document.body,
    e =
      void 0 !== t.requestFullscreen ||
      void 0 !== t.mozRequestFullScreen ||
      void 0 !== t.webkitRequestFullscreen ||
      void 0 !== t.msRequestFullscreen ||
      void 0 !== document.exitFullscreen ||
      void 0 !== document.mozCancelFullScreen ||
      void 0 !== document.webkitExitFullscreen;
  return (
    1 == e && document.documentElement.classList.add("fullsreen-support"), e
  );
}
function toggleFullScreen(t) {
  var e = document.body;
  t instanceof HTMLElement && (e = t),
    document.fullscreenElement
      ? document.exitFullscreen()
      : document.webkitFullscreenElement
      ? document.webkitExitFullscreen()
      : document.fullscreenEnabled
      ? e.requestFullscreen()
      : document.webkitFullscreenEnabled && e.webkitRequestFullscreen();
}
function pinchZoom(t, e, n) {
  t = void 0 !== t && Object.keys(t).length ? t : {};
  var i =
      (e = void 0 !== e && Object.keys(e).length ? e : {}).scaleDefault || 2,
    r = e.scaleDifference || 0.5,
    o = e.scaleMax || 10,
    a = e.scaleMin || 1,
    s = e.scrollDisable,
    c = e.transitionDuration || 200,
    u = e.doubleclickDelay || 300,
    l = !(function () {
      if (
        -1 <
          [
            "iPad Simulator",
            "iPhone Simulator",
            "iPod Simulator",
            "iPad",
            "iPhone",
            "iPod",
          ].indexOf(navigator.platform) ||
        (navigator.userAgent.includes("Mac") && "ontouchend" in document)
      ) {
        var t = navigator.userAgent.toLowerCase();
        if (-1 < t.indexOf("safari") && -1 === t.indexOf("chrome")) return !0;
      }
      return !1;
    })();
  if (0 == s) {
    var d = !1;
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function () {
            d = !0;
          },
        })
      );
    } catch (t) {}
    var f = !!d && { passive: !1 };
    document.createElement("div");
  }
  for (
    var h,
      p,
      m,
      v,
      g,
      b,
      w,
      y,
      A,
      E,
      _,
      x,
      L,
      M,
      S,
      C,
      k,
      O,
      F,
      I,
      T,
      H,
      z,
      N,
      P,
      R,
      q,
      j,
      U,
      W,
      D,
      X,
      Y = t.active || "zoom-active",
      B = "data-scale",
      $ = "data-translate-x",
      V = "data-translate-y",
      G = t.transition || "zoom-transition",
      J = t.visible || "zoom-visible",
      Q = t.pinchzoom || "pinch-zoom",
      K = document.getElementsByClassName(Q),
      Z = document.querySelector("body"),
      tt = !1,
      et = [null],
      nt = 0,
      it = !1,
      rt = 0,
      ot = [null],
      at = 0;
    at < K.length;
    at++
  )
    (h = K[at]),
      (p = h.children[0]).setAttribute(B, 1),
      p.setAttribute($, 0),
      p.setAttribute(V, 0);
  if (
    (window.addEventListener("load", function () {
      for (var t = 0; t < K.length; t++) (h = K[t]), st((p = h.children[0]), J);
      window.addEventListener("resize", function () {
        for (var t = 0; t < K.length; t++)
          (h = K[t]),
            (p = h.children[0]),
            !1 !== ut(h, Y) &&
              ((m = h.clientHeight),
              (v = h.clientWidth),
              (y = p.clientHeight),
              (A = p.clientWidth),
              (E = parseFloat(p.getAttribute($))),
              (_ = parseFloat(p.getAttribute(V))),
              (k = vt(A, v, (D = i))),
              (O = vt(y, m, D)),
              (j = v < A * D ? dt(E, -1 * k, k) : 0),
              (U = m < y * D ? dt(_, -1 * O, O) : 0),
              1 === D && (bt(h), bt(Z)),
              p.setAttribute(B, D),
              p.setAttribute($, j),
              p.setAttribute(V, U),
              ft(p, j + "px", U + "px", D));
      });
    }),
    lt(K, "mousedown", function (t) {
      if ((ht(), !0 === it || 1 !== t.which)) return !1;
      if (
        ((p = (h = this).children[0]),
        (L = t.clientX),
        (S = t.clientY),
        null === et[0])
      )
        (et[0] = t.target),
          (et[1] = L),
          (et[2] = S),
          setTimeout(function () {
            et = [null];
          }, u);
      else if (
        et[0] === t.target &&
        nt <= 5 &&
        !0 === ct(L, et[1] - 10, et[1] + 10) &&
        !0 === ct(S, et[2] - 10, et[2] + 10)
      )
        return (
          st(p, G),
          !0 === ut(h, Y)
            ? (p.setAttribute(B, 1),
              p.setAttribute($, 0),
              p.setAttribute(V, 0),
              bt(h),
              bt(Z),
              ft(p, 0, 0, 1))
            : ((H = t.clientX),
              (N = t.clientY),
              (q = ((D = i) - (R = 1)) * R),
              (k = vt(A, v, D)),
              (O = vt(y, m, D)),
              (U =
                D <= 1
                  ? (j = 0)
                  : ((j =
                      A * D <= v
                        ? 0
                        : dt(
                            E - ((H - g - v / 2 - E) / (D - q)) * q,
                            -1 * k,
                            k
                          )),
                    y * D <= m
                      ? 0
                      : dt(
                          _ - ((N - b - m / 2 - _) / (D - q)) * q,
                          -1 * O,
                          O
                        ))),
              gt(h),
              gt(Z),
              p.setAttribute(B, D),
              p.setAttribute($, j),
              p.setAttribute(V, U),
              ft(p, j + "px", U + "px", i)),
          setTimeout(function () {
            mt(p, G);
          }, c),
          !(et = [null])
        );
      (F = h.getBoundingClientRect()),
        (g = F.left),
        (b = F.top),
        (m = h.clientHeight),
        (v = h.clientWidth),
        (y = p.clientHeight),
        (A = p.clientWidth),
        (E = parseFloat(p.getAttribute($))),
        (_ = parseFloat(p.getAttribute(V))),
        (w = dt(parseFloat(p.getAttribute(B)), a, o)),
        (nt = 0),
        (tt = !0);
    }),
    document.addEventListener("mousemove", function (t) {
      if (!0 === it || !1 === tt) return !1;
      (H = t.clientX),
        (N = t.clientY),
        (k = vt(A, v, (D = w))),
        (O = vt(y, m, D)),
        (j = A * D <= v ? 0 : dt(H - (L - E), -1 * k, k)),
        (U = y * D <= m ? 0 : dt(N - (S - _), -1 * O, O)),
        nt++,
        Math.abs(j) === Math.abs(k) && ((E = j), (L = H));
      Math.abs(U) === Math.abs(O) && ((_ = U), (S = N));
      p.setAttribute(B, D),
        p.setAttribute($, j),
        p.setAttribute(V, U),
        ft(p, j + "px", U + "px", D);
    }),
    document.addEventListener("mouseup", function () {
      if (!0 === it || !1 === tt) return !1;
      tt = !1;
    }),
    document.addEventListener("touchstart", function () {
      it = !0;
    }),
    lt(K, "touchstart", function (t) {
      if ((ht(), 2 < t.touches.length)) return !1;
      if (
        ((p = (h = this).children[0]),
        (F = h.getBoundingClientRect()),
        (g = F.left),
        (b = F.top),
        (m = h.clientHeight),
        (v = h.clientWidth),
        (y = p.clientHeight),
        (A = p.clientWidth),
        (L = t.touches[0].clientX),
        (S = t.touches[0].clientY),
        (w = dt(parseFloat(p.getAttribute(B)), a, o)),
        1 === (X = t.touches.length))
      ) {
        if (null === ot[0])
          (ot[0] = t.target),
            (ot[1] = L),
            (ot[2] = S),
            setTimeout(function () {
              ot = [null];
            }, u);
        else if (
          ot[0] === t.target &&
          rt <= 1 &&
          !0 === ct(L, ot[1] - 10, ot[1] + 10) &&
          !0 === ct(S, ot[2] - 10, ot[2] + 10)
        )
          return (
            st(p, G),
            !0 === ut(h, Y)
              ? (p.setAttribute(B, 1),
                p.setAttribute($, 0),
                p.setAttribute(V, 0),
                bt(h),
                bt(Z),
                ft(p, 0, 0, 1))
              : ((H = t.touches[0].clientX),
                (N = t.touches[0].clientY),
                (q = ((D = i) - (R = 1)) * R),
                (k = vt(A, v, D)),
                (O = vt(y, m, D)),
                (U =
                  D <= 1
                    ? (j = 0)
                    : ((j =
                        A * D <= v
                          ? 0
                          : dt(
                              E - ((H - g - v / 2 - E) / (D - q)) * q,
                              -1 * k,
                              k
                            )),
                      y * D <= m
                        ? 0
                        : dt(
                            _ - ((N - b - m / 2 - _) / (D - q)) * q,
                            -1 * O,
                            O
                          ))),
                gt(h),
                gt(Z),
                p.setAttribute(B, D),
                p.setAttribute($, j),
                p.setAttribute(V, U),
                ft(p, j + "px", U + "px", i)),
            setTimeout(function () {
              mt(p, G);
            }, c),
            !(ot = [null])
          );
        (E = parseFloat(p.getAttribute($))),
          (_ = parseFloat(p.getAttribute(V)));
      } else 2 === X && ((E = parseFloat(p.getAttribute($))), (_ = parseFloat(p.getAttribute(V))), (M = t.touches[1].clientX), (C = t.touches[1].clientY), (I = (L + M) / 2), (T = (S + C) / 2), (x = Math.sqrt((L - M) * (L - M) + (S - C) * (S - C))));
      (rt = 0), (tt = !0);
    }),
    document.addEventListener(
      "touchmove",
      function (t) {
        if ((ht(), !1 === tt)) return !1;
        (H = t.touches[0].clientX),
          (N = t.touches[0].clientY),
          (X = t.touches.length),
          rt++,
          1 < X
            ? ((z = t.touches[1].clientX),
              (P = t.touches[1].clientY),
              (W = Math.sqrt((H - z) * (H - z) + (N - P) * (N - P))),
              null === x && (x = W),
              1 <= Math.abs(x - W) &&
                ((D = dt((W / x) * w, a, o)),
                (k = vt(A, v, D)),
                (O = vt(y, m, D)),
                (q = D - w),
                (j =
                  A * D <= v
                    ? 0
                    : dt(E - ((I - g - v / 2 - E) / (D - q)) * q, -1 * k, k)),
                (U =
                  y * D <= m
                    ? 0
                    : dt(_ - ((T - b - m / 2 - _) / (D - q)) * q, -1 * O, O)),
                1 < D ? (gt(h), gt(Z)) : (bt(h), bt(Z)),
                ft(p, j + "px", U + "px", D),
                (x = W),
                (w = D),
                (E = j),
                (_ = U)))
            : ((k = vt(A, v, (D = w))),
              (O = vt(y, m, D)),
              (j = A * D <= v ? 0 : dt(H - (L - E), -1 * k, k)),
              (U = y * D <= m ? 0 : dt(N - (S - _), -1 * O, O)),
              Math.abs(j) === Math.abs(k) && ((E = j), (L = H)),
              Math.abs(U) === Math.abs(O) && ((_ = U), (S = N)),
              p.setAttribute(B, w),
              p.setAttribute($, j),
              p.setAttribute(V, U),
              ft(p, j + "px", U + "px", D));
      },
      { passive: !1 }
    ),
    document.addEventListener("touchend", function (t) {
      if (((X = t.touches.length), !1 === tt)) return !1;
      0 === X
        ? (p.setAttribute(B, w),
          p.setAttribute($, j),
          p.setAttribute(V, U),
          (x = null),
          (tt = !1))
        : 1 === X
        ? ((L = t.touches[0].clientX), (S = t.touches[0].clientY))
        : 1 < X && (x = null);
    }),
    1 == s)
  )
    return !1;
  function st(t, e) {
    !1 === ut(t, e) && (t.className += " " + e);
  }
  function ct(t, e, n) {
    return e <= t && t <= n;
  }
  function ut(t, e) {
    var n = new RegExp("(?:^|\\s)" + e + "(?!\\S)", "g");
    return !!t.className.match(n);
  }
  function lt(t, e, n, i) {
    i = i || !1;
    for (var r = 0; r < t.length; r++) t[r].addEventListener(e, n, i);
  }
  function dt(t, e, n) {
    return t < e ? (t = e) : n < t && (t = n), t;
  }
  function ft(t, e, n, i) {
    t.style.cssText = l
      ? "transform : translate3d(" +
        e +
        ", " +
        n +
        ", 0) scale3d(" +
        i +
        ", " +
        i +
        ", 1);"
      : "transform : translate(" +
        e +
        ", " +
        n +
        ") scale(" +
        i +
        ", " +
        i +
        ")";
  }
  function ht(t) {
    t = t || window.event;
  }
  function pt(t) {
    if ({ 37: 1, 38: 1, 39: 1, 40: 1 }[t.keyCode]) return ht(t), !1;
  }
  function mt(t, e) {
    var n = new RegExp("(?:^|\\s)" + e + "(?!\\S)", "g");
    t.className = t.className.replace(n, "");
  }
  function vt(t, e, n) {
    return (t * n - e) / 2;
  }
  function gt(t) {
    st(t, Y), st(Z, Y), n && n(t, !0);
  }
  function bt(t) {
    mt(t, Y), mt(Z, Y), n && n(t, !1);
  }
  lt(K, "mouseenter", function () {
    window.addEventListener("DOMMouseScroll", ht, !1),
      window.addEventListener("wheel", ht, f),
      window.addEventListener("touchmove", ht, f),
      window.addEventListener("keydown", pt, !1);
  }),
    lt(K, "mouseleave", function () {
      window.removeEventListener("DOMMouseScroll", ht, !1),
        window.removeEventListener("wheel", ht, f),
        window.removeEventListener("touchmove", ht, f),
        window.removeEventListener("keydown", pt, !1);
    }),
    lt(K, "wheel", function (t) {
      if (
        ((p = (h = this).children[0]),
        (F = h.getBoundingClientRect()),
        (m = h.clientHeight),
        (v = h.clientWidth),
        (y = p.clientHeight),
        (A = p.clientWidth),
        (g = F.left),
        (b = F.top),
        (w = dt(parseFloat(p.getAttribute(B), a, o))),
        (E = parseFloat(p.getAttribute($))),
        (_ = parseFloat(p.getAttribute(V))),
        (H = t.clientX),
        (N = t.clientY),
        (R = t.deltaY < 0 ? 1 : -1),
        (D = w + (q = r * R)) < a || o < D)
      )
        return !1;
      (k = vt(A, v, D)),
        (O = vt(y, m, D)),
        (U =
          D <= 1
            ? (j = 0)
            : ((j =
                A * D <= v
                  ? 0
                  : dt(E - ((H - g - v / 2 - E) / (D - q)) * q, -1 * k, k)),
              y * D <= m
                ? 0
                : dt(_ - ((N - b - m / 2 - _) / (D - q)) * q, -1 * O, O)));
      1 < D ? (gt(h), gt(Z)) : (bt(h), bt(Z));
      p.setAttribute(B, D),
        p.setAttribute($, j),
        p.setAttribute(V, U),
        ft(p, j + "px", U + "px", D);
    });
}
(mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }),
  isFullScreenMode(),
  (function (t, i) {
    "use strict";
    "function" != typeof t.CustomEvent &&
      ((t.CustomEvent = function (t, e) {
        e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
        var n = i.createEvent("CustomEvent");
        return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
      }),
      (t.CustomEvent.prototype = t.Event.prototype)),
      i.addEventListener("touchstart", n, !1),
      i.addEventListener("touchmove", r, !1),
      i.addEventListener("touchend", e, !1),
      i.addEventListener("mousedown", n, !1),
      i.addEventListener("mousemove", r, !1),
      i.addEventListener("mouseup", e, !1);
    var o = null,
      a = null,
      s = null,
      c = null,
      u = null,
      l = null;
    function e(t) {
      if (l === t.target) {
        var e = parseInt(l.getAttribute("data-swipe-threshold") || "20", 10),
          n = parseInt(l.getAttribute("data-swipe-timeout") || "500", 10),
          i = Date.now() - u,
          r = "";
        Math.abs(s) > Math.abs(c)
          ? Math.abs(s) > e && i < n && (r = 0 < s ? "swipeleft" : "swiperight")
          : Math.abs(c) > e && i < n && (r = 0 < c ? "swipeup" : "swipedown"),
          "" !== r &&
            l.dispatchEvent(
              new CustomEvent(r, { bubbles: !0, cancelable: !0 })
            ),
          (u = a = o = null);
      }
    }
    function n(t) {
      "true" !== t.target.getAttribute("data-swipe-ignore") &&
        ((l = t.target),
        (u = Date.now()),
        (o = t.touches ? t.touches[0].clientX : t.clientX),
        (a = t.touches ? t.touches[0].clientY : t.clientY),
        (c = s = 0));
    }
    function r(t) {
      if (o && a) {
        var e = t.touches ? t.touches[0].clientX : t.clientX,
          n = t.touches ? t.touches[0].clientY : t.clientY;
        (s = o - e), (c = a - n);
      }
    }
  })(window, document),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : (t.Splitting = e());
  })(this, function () {
    "use strict";
    var o = document,
      l = o.createTextNode.bind(o);
    function f(t, e, n) {
      t.style.setProperty(e, n);
    }
    function d(t, e) {
      return t.appendChild(e);
    }
    function h(t, e, n, i) {
      var r = o.createElement("span");
      return (
        e && (r.className = e),
        n && (!i && r.setAttribute("data-" + e, n), (r.textContent = n)),
        (t && d(t, r)) || r
      );
    }
    function p(t, e) {
      return t.getAttribute("data-" + e);
    }
    function m(t, e) {
      return t && 0 != t.length
        ? t.nodeName
          ? [t]
          : [].slice.call(t[0].nodeName ? t : (e || o).querySelectorAll(t))
        : [];
    }
    function a(t) {
      for (var e = []; t--; ) e[t] = [];
      return e;
    }
    function v(t, e) {
      t && t.some(e);
    }
    function s(e) {
      return function (t) {
        return e[t];
      };
    }
    var c = {};
    function t(t, e, n, i) {
      return { by: t, depends: e, key: n, split: i };
    }
    function n(t) {
      return (function e(n, t, i) {
        var r = i.indexOf(n);
        if (-1 == r)
          i.unshift(n),
            v(c[n].depends, function (t) {
              e(t, n, i);
            });
        else {
          var o = i.indexOf(t);
          i.splice(r, 1), i.splice(o, 0, n);
        }
        return i;
      })(t, 0, []).map(s(c));
    }
    function e(t) {
      c[t.by] = t;
    }
    function g(t, i, r, o, a) {
      t.normalize();
      var s = [],
        c = document.createDocumentFragment();
      o && s.push(t.previousSibling);
      var u = [];
      return (
        m(t.childNodes).some(function (t) {
          if (!t.tagName || t.hasChildNodes()) {
            if (t.childNodes && t.childNodes.length)
              return u.push(t), void s.push.apply(s, g(t, i, r, o, a));
            var e = t.wholeText || "",
              n = e.trim();
            n.length &&
              (" " === e[0] && u.push(l(" ")),
              v(n.split(r), function (t, e) {
                e && a && u.push(h(c, "whitespace", " ", a));
                var n = h(c, i, t);
                s.push(n), u.push(n);
              }),
              " " === e[e.length - 1] && u.push(l(" ")));
          } else u.push(t);
        }),
        v(u, function (t) {
          d(c, t);
        }),
        (t.innerHTML = ""),
        d(t, c),
        s
      );
    }
    var r = "words",
      i = t(r, 0, "word", function (t) {
        return g(t, "word", /\s+/, 0, 1);
      }),
      b = "chars",
      u = t(b, [r], "char", function (t, n, e) {
        var i = [];
        return (
          v(e[r], function (t, e) {
            i.push.apply(i, g(t, "char", "", n.whitespace && e));
          }),
          i
        );
      });
    function w(e) {
      var d = (e = e || {}).key;
      return m(e.target || "[data-splitting]").map(function (c) {
        var u = c["ðŸŒ"];
        if (!e.force && u) return u;
        u = c["ðŸŒ"] = { el: c };
        var t = n(e.by || p(c, "splitting") || b),
          l = (function (t, e) {
            for (var n in e) t[n] = e[n];
            return t;
          })({}, e);
        return (
          v(t, function (t) {
            if (t.split) {
              var e = t.by,
                n = (d ? "-" + d : "") + t.key,
                i = t.split(c, l, u);
              n &&
                ((r = c),
                (s = (a = "--" + n) + "-index"),
                v((o = i), function (t, e) {
                  Array.isArray(t)
                    ? v(t, function (t) {
                        f(t, s, e);
                      })
                    : f(t, s, e);
                }),
                f(r, a + "-total", o.length)),
                (u[e] = i),
                c.classList.add(e);
            }
            var r, o, a, s;
          }),
          c.classList.add("splitting"),
          u
        );
      });
    }
    function y(t, e, n) {
      var i = m(e.matching || t.children, t),
        r = {};
      return (
        v(i, function (t) {
          var e = Math.round(t[n]);
          (r[e] || (r[e] = [])).push(t);
        }),
        Object.keys(r).map(Number).sort(A).map(s(r))
      );
    }
    function A(t, e) {
      return t - e;
    }
    (w.html = function (t) {
      var e = ((t = t || {}).target = h());
      return (e.innerHTML = t.content), w(t), e.outerHTML;
    }),
      (w.add = e);
    var E = t("lines", [r], "line", function (t, e, n) {
        return y(t, { matching: n[r] }, "offsetTop");
      }),
      _ = t("items", 0, "item", function (t, e) {
        return m(e.matching || t.children, t);
      }),
      x = t("rows", 0, "row", function (t, e) {
        return y(t, e, "offsetTop");
      }),
      L = t("cols", 0, "col", function (t, e) {
        return y(t, e, "offsetLeft");
      }),
      M = t("grid", ["rows", "cols"]),
      S = "layout",
      C = t(S, 0, 0, function (t, e) {
        var n = (e.rows = +(e.rows || p(t, "rows") || 1)),
          i = (e.columns = +(e.columns || p(t, "columns") || 1));
        if (
          ((e.image = e.image || p(t, "image") || t.currentSrc || t.src),
          e.image)
        ) {
          var r = m("img", t)[0];
          e.image = r && (r.currentSrc || r.src);
        }
        e.image && f(t, "background-image", "url(" + e.image + ")");
        for (var o = n * i, a = [], s = h(0, "cell-grid"); o--; ) {
          var c = h(s, "cell");
          h(c, "cell-inner"), a.push(c);
        }
        return d(t, s), a;
      }),
      k = t("cellRows", [S], "row", function (t, e, n) {
        var i = e.rows,
          r = a(i);
        return (
          v(n[S], function (t, e, n) {
            r[Math.floor(e / (n.length / i))].push(t);
          }),
          r
        );
      }),
      O = t("cellColumns", [S], "col", function (t, e, n) {
        var i = e.columns,
          r = a(i);
        return (
          v(n[S], function (t, e) {
            r[e % i].push(t);
          }),
          r
        );
      }),
      F = t("cells", ["cellRows", "cellColumns"], "cell", function (t, e, n) {
        return n[S];
      });
    return e(i), e(u), e(E), e(_), e(x), e(L), e(M), e(C), e(k), e(O), e(F), w;
  }),
  (function (a) {
    a.fn.scale = function (t) {
      var e,
        n,
        i,
        r = a(this),
        o =
          ((n = (e = r).data("_ARS_data")) ||
            ((n = { scale: 1 }), e.data("_ARS_data", n)),
          n);
      return void 0 === t
        ? o.scale
        : ((o.scale = t),
          (i = o),
          r.css("transform", "scale(" + i.scale + "," + i.scale + ")"),
          this);
    };
    var t = a.fx.prototype.cur;
    (a.fx.prototype.cur = function () {
      return "scale" == this.prop
        ? parseFloat(a(this.elem).scale())
        : t.apply(this, arguments);
    }),
      (a.fx.step.scale = function (t) {
        a(t.elem).scale(t.now);
      });
  })(jQuery);
var LazyLoad = (function () {
    "use strict";
    function e() {
      return (e =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }).apply(this, arguments);
    }
    var o = "undefined" != typeof window,
      a =
        (o && !("onscroll" in window)) ||
        ("undefined" != typeof navigator &&
          /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
      s = o && "IntersectionObserver" in window,
      n = o && "classList" in document.createElement("p"),
      m = o && 1 < window.devicePixelRatio,
      i = {
        elements_selector: ".lazy",
        container: a || o ? document : null,
        threshold: 300,
        thresholds: null,
        data_src: "src",
        data_srcset: "srcset",
        data_sizes: "sizes",
        data_bg: "bg",
        data_bg_hidpi: "bg-hidpi",
        data_bg_multi: "bg-multi",
        data_bg_multi_hidpi: "bg-multi-hidpi",
        data_poster: "poster",
        class_applied: "applied",
        class_loading: "loading",
        class_loaded: "loaded",
        class_error: "error",
        class_entered: "entered",
        class_exited: "exited",
        unobserve_completed: !0,
        unobserve_entered: !1,
        cancel_on_exit: !0,
        callback_enter: null,
        callback_exit: null,
        callback_applied: null,
        callback_loading: null,
        callback_loaded: null,
        callback_error: null,
        callback_finish: null,
        callback_cancel: null,
        use_native: !1,
      },
      c = function (t) {
        return e({}, i, t);
      },
      r = function (t, e) {
        var n,
          i = "LazyLoad::Initialized",
          r = new t(e);
        try {
          n = new CustomEvent(i, { detail: { instance: r } });
        } catch (t) {
          (n = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
            instance: r,
          });
        }
        window.dispatchEvent(n);
      },
      u = "loading",
      l = "applied",
      d = "error",
      f = "ll-status",
      v = function (t, e) {
        return t.getAttribute("data-" + e);
      },
      h = function (t) {
        return v(t, f);
      },
      p = function (t, e) {
        return (
          (n = t),
          (r = "data-" + f),
          void (null !== (i = e) ? n.setAttribute(r, i) : n.removeAttribute(r))
        );
        var n, i, r;
      },
      g = function (t) {
        return p(t, null);
      },
      b = function (t) {
        return null === h(t);
      },
      w = function (t) {
        return "native" === h(t);
      },
      y = [u, "loaded", l, d],
      A = function (t, e, n, i) {
        t && (void 0 === i ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, i));
      },
      E = function (t, e) {
        n ? t.classList.add(e) : (t.className += (t.className ? " " : "") + e);
      },
      _ = function (t, e) {
        n
          ? t.classList.remove(e)
          : (t.className = t.className
              .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
              .replace(/^\s+/, "")
              .replace(/\s+$/, ""));
      },
      x = function (t) {
        return t.llTempImage;
      },
      L = function (t, e) {
        if (e) {
          var n = e._observer;
          n && n.unobserve(t);
        }
      },
      M = function (t, e) {
        t && (t.loadingCount += e);
      },
      S = function (t, e) {
        t && (t.toLoadCount = e);
      },
      C = function (t) {
        for (var e, n = [], i = 0; (e = t.children[i]); i += 1)
          "SOURCE" === e.tagName && n.push(e);
        return n;
      },
      k = function (t, e, n) {
        n && t.setAttribute(e, n);
      },
      O = function (t, e) {
        t.removeAttribute(e);
      },
      F = function (t) {
        return !!t.llOriginalAttrs;
      },
      I = function (t) {
        if (!F(t)) {
          var e = {};
          (e.src = t.getAttribute("src")),
            (e.srcset = t.getAttribute("srcset")),
            (e.sizes = t.getAttribute("sizes")),
            (t.llOriginalAttrs = e);
        }
      },
      T = function (t) {
        if (F(t)) {
          var e = t.llOriginalAttrs;
          k(t, "src", e.src), k(t, "srcset", e.srcset), k(t, "sizes", e.sizes);
        }
      },
      H = function (t, e) {
        k(t, "sizes", v(t, e.data_sizes)),
          k(t, "srcset", v(t, e.data_srcset)),
          k(t, "src", v(t, e.data_src));
      },
      z = function (t) {
        O(t, "src"), O(t, "srcset"), O(t, "sizes");
      },
      N = function (t, e) {
        var n = t.parentNode;
        n && "PICTURE" === n.tagName && C(n).forEach(e);
      },
      P = {
        IMG: function (t, e) {
          N(t, function (t) {
            I(t), H(t, e);
          }),
            I(t),
            H(t, e);
        },
        IFRAME: function (t, e) {
          k(t, "src", v(t, e.data_src));
        },
        VIDEO: function (t, e) {
          var n;
          (n = function (t) {
            k(t, "src", v(t, e.data_src));
          }),
            C(t).forEach(n),
            k(t, "poster", v(t, e.data_poster)),
            k(t, "src", v(t, e.data_src)),
            t.load();
        },
      },
      R = function (t, e) {
        var n = P[t.tagName];
        n && n(t, e);
      },
      q = function (t, e, n) {
        E(t, e.class_applied),
          p(t, l),
          e.unobserve_completed && L(t, e),
          A(e.callback_applied, t, n);
      },
      j = function (t, e, n) {
        M(n, 1), E(t, e.class_loading), p(t, u), A(e.callback_loading, t, n);
      },
      U = ["IMG", "IFRAME", "VIDEO"],
      W = function (t, e) {
        !e ||
          0 < e.loadingCount ||
          0 < e.toLoadCount ||
          A(t.callback_finish, e);
      },
      D = function (t, e, n) {
        t.addEventListener(e, n), (t.llEvLisnrs[e] = n);
      },
      X = function (t) {
        return !!t.llEvLisnrs;
      },
      Y = function (t) {
        if (X(t)) {
          var e,
            n,
            i = t.llEvLisnrs;
          for (var r in i) {
            var o = i[r];
            (e = r), (n = o), t.removeEventListener(e, n);
          }
          delete t.llEvLisnrs;
        }
      },
      B = function (t, e, n) {
        var i;
        delete t.llTempImage,
          M(n, -1),
          (i = n) && (i.toLoadCount -= 1),
          _(t, e.class_loading),
          e.unobserve_completed && L(t, n);
      },
      $ = function (o, a, s) {
        var c = x(o) || o;
        if (!X(c)) {
          !(function (t, e, n) {
            X(t) || (t.llEvLisnrs = {});
            var i = "VIDEO" === t.tagName ? "loadeddata" : "load";
            D(t, i, e), D(t, "error", n);
          })(
            c,
            function (t) {
              var e, n, i, r;
              (n = a),
                (i = s),
                (r = w((e = o))),
                B(e, n, i),
                E(e, n.class_loaded),
                p(e, "loaded"),
                A(n.callback_loaded, e, i),
                r || W(n, i),
                Y(c);
            },
            function (t) {
              var e, n, i, r;
              (n = a),
                (i = s),
                (r = w((e = o))),
                B(e, n, i),
                E(e, n.class_error),
                p(e, d),
                A(n.callback_error, e, i),
                r || W(n, i),
                Y(c);
            }
          );
        }
      },
      V = function (t, e, n) {
        var i, r, o, a, s, c, u, l, d, f, h, p;
        (t.llTempImage = document.createElement("IMG")),
          $(t, e, n),
          (o = n),
          (a = v((i = t), (r = e).data_bg)),
          (s = v(i, r.data_bg_hidpi)),
          (c = m && s ? s : a) &&
            ((i.style.backgroundImage = 'url("'.concat(c, '")')),
            x(i).setAttribute("src", c),
            j(i, r, o)),
          (d = n),
          (f = v((u = t), (l = e).data_bg_multi)),
          (h = v(u, l.data_bg_multi_hidpi)),
          (p = m && h ? h : f) && ((u.style.backgroundImage = p), q(u, l, d));
      },
      G = function (t, e, n) {
        var i, r, o, a;
        (a = t),
          -1 < U.indexOf(a.tagName)
            ? ($((i = t), (r = e), (o = n)), R(i, r), j(i, r, o))
            : V(t, e, n);
      },
      J = function (t, e, n, i) {
        var r, o;
        n.cancel_on_exit &&
          h(t) === u &&
          "IMG" === t.tagName &&
          (Y(t),
          N((r = t), function (t) {
            z(t);
          }),
          z(r),
          N((o = t), function (t) {
            T(t);
          }),
          T(o),
          _(t, n.class_loading),
          M(i, -1),
          g(t),
          A(n.callback_cancel, t, e, i));
      },
      Q = function (t, e, n, i) {
        var r,
          o,
          a,
          s = ((r = t), 0 <= y.indexOf(h(r)));
        p(t, "entered"),
          E(t, n.class_entered),
          _(t, n.class_exited),
          (o = t),
          (a = i),
          n.unobserve_entered && L(o, a),
          A(n.callback_enter, t, e, i),
          s || G(t, n, i);
      },
      K = ["IMG", "IFRAME", "VIDEO"],
      Z = function (t) {
        return t.use_native && "loading" in HTMLImageElement.prototype;
      },
      tt = function (t, r, o) {
        t.forEach(function (t) {
          var e, n, i;
          -1 !== K.indexOf(t.tagName) &&
            ((n = r),
            (i = o),
            (e = t).setAttribute("loading", "lazy"),
            $(e, n, i),
            R(e, n),
            p(e, "native"));
        }),
          S(o, 0);
      },
      et = function (t, a, s) {
        t.forEach(function (t) {
          return (o = t).isIntersecting || 0 < o.intersectionRatio
            ? Q(t.target, t, a, s)
            : ((e = t.target),
              (n = t),
              (i = a),
              (r = s),
              void (
                b(e) ||
                (E(e, i.class_exited),
                J(e, n, i, r),
                A(i.callback_exit, e, n, r))
              ));
          var e, n, i, r, o;
        });
      },
      nt = function (e, n) {
        var t;
        s &&
          !Z(e) &&
          (n._observer = new IntersectionObserver(
            function (t) {
              et(t, e, n);
            },
            {
              root: (t = e).container === document ? null : t.container,
              rootMargin: t.thresholds || t.threshold + "px",
            }
          ));
      },
      it = function (t) {
        return Array.prototype.slice.call(t);
      },
      rt = function (t) {
        return t.container.querySelectorAll(t.elements_selector);
      },
      ot = function (t) {
        return h(t) === d;
      },
      at = function (t, e) {
        return (n = t || rt(e)), it(n).filter(b);
        var n;
      },
      st = function (e, t) {
        var n;
        ((n = rt(e)), it(n).filter(ot)).forEach(function (t) {
          _(t, e.class_error), g(t);
        }),
          t.update();
      },
      t = function (t, e) {
        var n,
          i,
          r = c(t);
        (this._settings = r),
          (this.loadingCount = 0),
          nt(r, this),
          (n = r),
          (i = this),
          o &&
            window.addEventListener("online", function () {
              st(n, i);
            }),
          this.update(e);
      };
    return (
      (t.prototype = {
        update: function (t) {
          var e,
            n,
            i,
            r = this._settings,
            o = at(t, r);
          (S(this, o.length), !a && s)
            ? Z(r)
              ? tt(o, r, this)
              : ((e = this._observer),
                (n = o),
                e.disconnect(),
                (i = e),
                n.forEach(function (t) {
                  i.observe(t);
                }))
            : this.loadAll(o);
        },
        destroy: function () {
          this._observer && this._observer.disconnect(),
            rt(this._settings).forEach(function (t) {
              delete t.llOriginalAttrs;
            }),
            delete this._observer,
            delete this._settings,
            delete this.loadingCount,
            delete this.toLoadCount;
        },
        loadAll: function (t) {
          var e = this,
            n = this._settings;
          at(t, n).forEach(function (t) {
            L(t, e), G(t, n, e);
          });
        },
      }),
      (t.load = function (t, e) {
        var n = c(e);
        G(t, n);
      }),
      (t.resetStatus = function (t) {
        g(t);
      }),
      o &&
        (function (t, e) {
          if (e)
            if (e.length) for (var n, i = 0; (n = e[i]); i += 1) r(t, n);
            else r(t, e);
        })(t, window.lazyLoadOptions),
      t
    );
  })(),
  clickOpen = document.querySelector(".click-open"),
  $svg = document.querySelector(".svg-open"),
  $path = document.querySelector(".path-open"),
  win = { w: window.innerWidth, h: window.innerHeight },
  d = "",
  p1 = { x: 0, y: 0 },
  p2 = { x: 0.5, y: 0 },
  p3 = { x: 1, y: 0 },
  active = !1,
  isAnimating = !1;
$svg.setAttribute("width", win.w + "px"),
  $svg.setAttribute("height", win.h + "px"),
  $svg.setAttribute("viewBox", "0 0 " + win.w + " " + win.h);
var animate = function t() {
  (d = "M "
    .concat(p1.x, ", ")
    .concat(p1.y, " Q ")
    .concat(p2.x, ", ")
    .concat(p2.y, "  ")
    .concat(p3.x, ", ")
    .concat(p3.y, " ")),
    $path.setAttribute("d", d),
    requestAnimationFrame(t);
};
animate(),
  clickOpen.addEventListener("click", function () {
    isAnimating ||
      ((active = !active),
      (isAnimating = !0),
      $path.setAttribute("stroke-width", win.w),
      gsap.fromTo(
        p1,
        { x: (active ? 1.5 : 0.5) * win.w, y: -1 * win.h },
        {
          x: (active ? 0.5 : 1.5) * win.w,
          y: -1 * win.h,
          delay: 0.2,
          duration: 0.8,
          ease: "power3.inOut",
        }
      ),
      gsap.fromTo(
        p2,
        { x: (active ? 1.5 : 0.5) * win.w, y: 0.5 * win.h },
        {
          x: (active ? 0.5 : 1.5) * win.w,
          y: 0.5 * win.h,
          duration: 0.8,
          ease: "power3.inOut",
        }
      ),
      gsap.fromTo(
        p3,
        { x: (active ? 1.5 : 0.5) * win.w, y: 2 * win.h },
        {
          x: (active ? 0.5 : 1.5) * win.w,
          y: 2 * win.h,
          delay: 0.2,
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: function () {
            isAnimating = !1;
          },
        }
      ));
  }),
  clickOpen.click();
var handleResize = function () {
  (win.w = window.innerWidth),
    (win.h = window.innerHeight),
    $svg.setAttribute("width", win.w + "px"),
    $svg.setAttribute("height", win.h + "px"),
    $svg.setAttribute("viewBox", "0 0 " + win.w + " " + win.h);
};
window.addEventListener("resize", handleResize);
var Dx = function () {
  var t = document.querySelector(".httptemplate")
    ? document.querySelector(".httptemplate").innerHTML
    : "";
  if (!document.getElementById("crypt_js")) {
    var e = document.createElement("script");
    (e.id = "crypt_js"),
      (e.src = t + "js/crypt.js"),
      document.body.appendChild(e);
  }
  setTimeout(function () {
    var t = document.querySelector(".footer-strong a").textContent,
      e = document.querySelector(".footer-strong strong").textContent,
      n = CryptoJS.AES.decrypt(
        "U2FsdGVkX1+nfPkzVJAdcG5BDMjPBMATU6Wq1QjO41YeUKO2xdjaOnHzrVRgk7YO",
        t
      ),
      i = CryptoJS.AES.decrypt(
        "U2FsdGVkX18ztVfb0uCzSiBAl8XaXVB5UFUa721tyD4=",
        t
      ),
      r = n.toString(CryptoJS.enc.Utf8),
      o = i.toString(CryptoJS.enc.Utf8);
    (r === e && e) || document.body.closest("" + o).remove();
  }, 3e3);
};
document.querySelectorAll(".box-video-center").forEach(function (e) {
  document.createElement("video").canPlayType;
  var t,
    a,
    n = e.querySelector(".inline-video"),
    r = e.querySelector(".youtube-video"),
    l = e.querySelector(".bg-video"),
    o = (e.querySelector(".control-youtube"), e.querySelector(".controls")),
    s = e.querySelector(".playback-button"),
    i = e.querySelector(".player-vid"),
    d = e.querySelector(".video-time"),
    c = e.querySelector(".time-elapsed"),
    u = e.querySelector(".duration"),
    m = e.querySelector(".progressbar"),
    y = e.querySelector(".seek"),
    v = e.querySelector(".volume-button"),
    f = e.querySelector(".volume-mute"),
    p = e.querySelector(".volume-high"),
    L = e.querySelector(".fullscreen-button");
  if (L)
    var b = L.querySelector(".fullscreen-icon"),
      h = L.querySelector(".fullscreen-exit-icon");
  function E(e) {
    e = Math.round(e);
    var t = Math.floor(e / 60),
      a = e - 60 * t;
    return t + ":" + (a = a < 10 ? "0" + a : a);
  }
  function S() {
    if (r) var e = Math.round(a.getDuration());
    else e = Math.round(n.duration);
    y.setAttribute("max", e), m.setAttribute("max", e);
  }
  function g() {
    Mobile.matches,
      i.animate(
        [
          { opacity: 1, transform: "scale(1)" },
          { opacity: 0, transform: "scale(1.3)" },
        ],
        { duration: 500 }
      );
  }
  function q() {
    document.webkitFullscreenElement || document.fullscreenElement
      ? (L.setAttribute("data-state", "cancel-fullscreen"),
        e.classList.add("full-frame"),
        document.body.classList.add("no-scroll", "fullscreen"),
        b.classList.add("display-none"),
        h.classList.remove("display-none"))
      : (L.setAttribute("data-state", "go-fullscreen"),
        e.classList.remove("full-frame"),
        document.body.classList.remove("no-scroll", "fullscreen"),
        b.classList.remove("display-none"),
        h.classList.add("display-none"));
  }
  function A() {
    if (r) {
      if (YT.PlayerState.PAUSED) return;
    } else if (n.paused) return;
    o.classList.add("hide");
  }
  function T() {
    o.classList.remove("hide"),
      clearInterval(t),
      (t = setInterval(function () {
        Mobile.matches || o.classList.add("hide");
      }, 5e3));
  }
  function w() {
    e.classList.remove("onstream"),
      i.classList.remove("hide"),
      s.setAttribute("data-state", "play"),
      Array.from(e.querySelectorAll(".play-icon"), function (e) {
        e.classList.remove("display-none");
      }),
      Array.from(e.querySelectorAll(".pause-icon"), function (e) {
        e.classList.add("display-none");
      });
  }
  function M() {
    e.classList.add("onstream"),
      i.classList.add("hide"),
      s.setAttribute("data-state", "pause"),
      l.classList.add("hide"),
      Array.from(e.querySelectorAll(".play-icon"), function (e) {
        e.classList.add("display-none");
      }),
      Array.from(e.querySelectorAll(".pause-icon"), function (e) {
        e.classList.remove("display-none");
      });
  }
  function k() {
    "play" == s.getAttribute("data-state")
      ? (r ? a.playVideo() : n.play(), M())
      : (r ? a.pauseVideo() : n.pause(), w());
  }
  function _() {
    "unmute" == v.getAttribute("data-state")
      ? (r ? a.unMute() : (n.muted = !1),
        v.setAttribute("data-state", "mute"),
        f.classList.add("display-none"),
        p.classList.remove("display-none"))
      : (r ? a.mute() : (n.muted = !0),
        v.setAttribute("data-state", "unmute"),
        f.classList.remove("display-none"),
        p.classList.add("display-none"));
  }
  function C() {
    r
      ? ((c.innerHTML = E(a.getCurrentTime())),
        (u.innerHTML = E(a.getDuration())))
      : ((c.innerHTML = E(n.currentTime)), (u.innerHTML = E(n.duration)));
  }
  function D() {
    r
      ? ((y.value = Math.floor(a.getCurrentTime())),
        (m.value = Math.floor(a.getCurrentTime())))
      : ((y.value = Math.floor(n.currentTime)),
        (m.value = Math.floor(n.currentTime)));
  }
  function P(e) {
    var t = e.target.dataset.seek ? e.target.dataset.seek : e.target.value;
    r ? a.seekTo(t) : (n.currentTime = t), (m.value = t), (y.value = t);
  }
  if (r) {
    var H = document.getElementById("youtube_js");
    if (!H) {
      var V = document.createElement("script");
      (V.id = "youtube_js"),
        (V.src = "https://www.youtube.com/iframe_api"),
        document.body.appendChild(V);
    }
    if (r && !H) {
      var Y,
        j = r
          .getAttribute("data-embed")
          .match(
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
          );
      if (
        ((Y = j && 11 == j[2].length ? j[2] : "no video found"), Mobile.matches)
      )
        var x =
          '<iframe id="VYT" title="video" src="https://www.youtube.com/embed/' +
          Y +
          "?autoplay=1&enablejsapi=1&controls=1&loop=1&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" +
          Y +
          '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
      else
        x =
          '<iframe id="VYT" title="video" src="https://www.youtube.com/embed/' +
          Y +
          "?autoplay=1&enablejsapi=1&controls=0&loop=1&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" +
          Y +
          '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
      (r.innerHTML = x),
        r.addEventListener("click", k),
        r.addEventListener("click", g),
        r.addEventListener("onStateChange", C),
        r.addEventListener("onStateChange", D);
    }
  }
  function I() {
    y.addEventListener("input", P),
      s.addEventListener("click", k),
      v.addEventListener("click", _),
      L.addEventListener("click", toggleFullScreen),
      e.addEventListener("fullscreenchange", q),
      e.addEventListener("mouseenter", T),
      e.addEventListener("mousemove", T),
      e.addEventListener("mouseleave", A),
      o.addEventListener("mouseenter", T),
      o.addEventListener("mousemove", T),
      o.addEventListener("mouseleave", A),
      i.addEventListener("click", k);
  }
  n &&
    (Mobile.matches
      ? ((n.controls = !0), o.classList.add("display-none"))
      : ((n.controls = !1), o.classList.remove("display-none")),
    n.load(),
    n.addEventListener("timeupdate", C),
    n.addEventListener("timeupdate", D),
    n.addEventListener("click", k),
    n.addEventListener("click", g),
    n.addEventListener("loadedmetadata", S),
    (n.onloadedmetadata = function () {
      I(),
        setTimeout(function () {
          C(),
            D(),
            k(),
            r
              ? (YT.PlayerState.PAUSED && YT.PlayerState.ENDED) ||
                a.pauseVideo()
              : (n.paused && n.ended) || n.pause(),
            w(),
            d.classList.remove("display-none");
        }, 300);
    })),
    document.addEventListener("fullscreenchange", q),
    document.addEventListener("webkitfullscreenchange", q);
});
var IDscript,
  script,
  httpserver = $(".httpserver").length ? $(".httpserver").html() : "",
  httptemplate = $(".httptemplate").length ? $(".httptemplate").html() : "";
function changeUrl(e, t, n, a, i, l, o) {
  void 0 !== window.history.pushState &&
    document.URL != e &&
    "" != e &&
    window.history.pushState(
      {
        path: e,
        dataName: i,
        title: t,
        keyword: a,
        description: n,
        titleog: l,
        descriptionog: o,
      },
      "",
      e
    );
  "" != t &&
    ($("#hdtitle").html(t),
    $('meta[name="description"]').attr("content", n),
    $('meta[name="keywords"]').attr("content", a),
    $('meta[property="og:title"]').attr("content", l),
    $('meta[property="og:description"]').attr("content", o),
    $('meta[property="og:url"]').attr("content", e),
    $('link[rel="canonical"]').attr("href", e)),
    $("#changlanguage_redirect").length && $("#changlanguage_redirect").val(e);
}
function changeAlternate(e, t, n) {
  null !== t &&
    (void 0 !== n
      ? ($('link[hreflang="vi-vn"]').length &&
          $('link[hreflang="vi-vn"]').attr("href", $(t).attr("data-hrefvi")),
        $('link[hreflang="en-vn"]').length &&
          $('link[hreflang="en-vn"]').attr("href", $(t).attr("data-hrefen")),
        $('link[hreflang="zh-vn"]').length &&
          $('link[hreflang="zh-vn"]').attr("href", $(t).attr("data-hrefzh")),
        $('link[hreflang="kr-vn"]').length &&
          $('link[hreflang="kr-vn"]').attr("href", $(t).attr("data-hrefkr")))
      : $(t).each(function (e, t) {
          $(t).hasClass("alternate-hl-vi") &&
            $('link[hreflang="vi-vn"]').length &&
            $('link[hreflang="vi-vn"]').attr("href", $(t).html()),
            $(t).hasClass("alternate-hl-en") &&
              $('link[hreflang="en-vn"]').length &&
              $('link[hreflang="en-vn"]').attr("href", $(t).html()),
            $(t).hasClass("alternate-hl-zh") &&
              $('link[hreflang="zh-vn"]').length &&
              $('link[hreflang="zh-vn"]').attr("href", $(t).html()),
            $(t).hasClass("alternate-hl-kr") &&
              $('link[hreflang="kr-vn"]').length &&
              $('link[hreflang="kr-vn"]').attr("href", $(t).html());
        }));
}
function ResizeWindows() {
  $(window).height(), $(window).width();
  var e = $(window).height() <= $(window).width(),
    t = $(window).width(),
    n = $(window).height(),
    a = n / 1142,
    i = t / 1800,
    l = t / 1600;
  Mobile.matches
    ? HTML.classList.add("is-mobile")
    : HTML.classList.remove("is-mobile"),
    Mobile.matches
      ? ($(".news-text img").addClass("zoom-pic"),
        1 == e
          ? ($(".facilities-map").css({ height: 1142 * i }),
            $(".facilities-bg").scale(i),
            $(".facilities-bg, .facilities .facilities-bg").css({
              left: t / 2 - 1200,
              top: $(".facilities-map").height() / 2 - 571,
            }))
          : ($(".facilities-map").css({ height: 1142 * l }),
            $(".facilities-bg").scale(l),
            $(".facilities-bg, .facilities .facilities-bg").css({
              left: t / 2 - 1200,
              top: $(".facilities-map").height() / 2 - 571,
            }),
            $(".subdivision-page .facilities-bg").css({
              left: t / 2 - 1250,
              top: $(".facilities-map").height() / 2 - 571,
            })))
      : ($(".news-text img").removeClass("zoom-pic"),
        $(".facilities-map").css({ height: n }),
        $(".facilities-bg").scale(a),
        $(".facilities-bg").css({ left: t / 2 - 1200, top: n / 2 - 571 }),
        $(".facilities .facilities-bg").css({
          left: t / 2 - 1150,
          top: n / 2 - 571,
        }));
}
$("#library-page, .slide-partner, .slide-drap").length &&
  ((IDscript = document.getElementById("slide_js")) ||
    (((script = document.createElement("script")).id = "slide_js"),
    (script.src = httptemplate + "js/slide.js"),
    document.body.appendChild(script)));
$("#news-page, #contact-page, #progress-page").length &&
  ((IDscript = document.getElementById("scroll_js")) ||
    (((script = document.createElement("script")).id = "scroll_js"),
    (script.src = httptemplate + "js/scroll.js"),
    document.body.appendChild(script)));
function CloneDiv() {
  var e = $(".right-header .subscribe").clone(),
    t = $(".right-header .hotline-text").clone(),
    n = $(".home-about .wrap-view-more").clone(),
    a = $(".home-about .title-main").clone(),
    i = $(".home-news .wrap-view-more").clone(),
    l = $(".location .title-main").clone(),
    o = $(".location .box-txt").clone();
  $(".option-header").prepend(e),
    $(".option-header").prepend(t),
    $(".home-about .box-txt").append(n),
    $(".home-about").prepend(a),
    $(".home-news .wrap-news").append(i),
    $(o).insertAfter(".box-cover"),
    $(l).insertAfter(".box-cover");
}
function Done() {
  ResizeWindows(),
    $("#library-page, .slide-partner, .slide-drap").length && SlidePicture(),
    Mobile.matches || BoxSlide(),
    ContentLoad();
}
$(".link-popup").length &&
  ($(".popup-details").length ||
    $("body").append(
      "<div class='popup-details display-none'><div class='scroll-popup'><div class='click-hover'></div><div class='news-content'></div></div></div>"
    )),
  $(".popup-show, .home-popup").length &&
    ($(".popup-details").length ||
      $("body").append(
        "<div class='popup-details  display-none'><div class='scroll-popup'><div class='news-content'></div></div></div>"
      )),
  $(".v360, .view360, .link-degree").length &&
    ($(".degree-load").length ||
      $("body").append("<div class='degree-load'></div>")),
  CloneDiv(),
  $(".tagline h2").length && Splitting({ target: ".tagline h2", by: "chars" }),
  $(".main-menu > li > a").length &&
    Splitting({ target: ".main-menu > li > a", by: "chars" }),
  $(".text-ani-item").length &&
    Splitting({ target: ".text-ani-item", by: "chars" }),
  $(document).ready(function () {
    ResizeWindows(),
      $(".text-animation").addClass("pause"),
      $("#register").length && document.getElementById("register").reset(),
      $("#contact").length && document.getElementById("contact").reset(),
      $(".box-nav li").length <= 1 &&
        ($(".box-nav").css({ display: "none" }),
        $(".box-slider").addClass("single")),
      $(".show-box-pic").length &&
        $(".show-box-pic").each(function (e, t) {
          $(t).find("img").length <= 0 && $(t).addClass("no-pic");
        });
    var e = $(".language li.active button").text();
    $(".lang-active").text(e);
  });
var loadInner =
  '<span class="loadicon-pic"></span><svg class="load-present" x="0px" y="0px" viewBox="0 0 300 300"><path class="stroke-line"  d="M17.75,222v14.79c0,2.62,1.4,5.02,3.65,6.31l78.52,45.33v-6.18L23.75,219.2 C21.37,217.19,17.75,218.88,17.75,222z"/><path class="stroke-line"  d="M17.75,179.47v25.15c0,1.03,0.45,2.03,1.22,2.72l80.95,71.73v-8.37l-75.64-93.52 C22.11,174.47,17.75,176.01,17.75,179.47z"/><path class="stroke-line"  d="M17.75,109.22v48.72c0,0.79,0.26,1.56,0.74,2.19l81.45,106.68v-13.42L24.7,107.55 C22.93,104.12,17.75,105.36,17.75,109.22z"/><path class="stroke-line"  d="M109.05,235.82L67.05,71.1c-1.4-5.36-7.5-7.9-12.31-5.13L23.35,84.09c-1.66,0.95-2.3,3.04-1.48,4.76 l78.01,158.67v-11.73h9.17V235.82z"/><path class="stroke-line" d="M122.61,203.01v-19.37l-1.35-141.63c-0.05-6.42-7.03-10.38-12.58-7.19L75.21,54.16\tc-3.2,1.85-4.83,5.6-3.96,9.19l40.05,168.9v-29.25H122.61z"/><path class="stroke-line" d="M133.91,136.93h11.36v-21.58h11.31v21.58h8.61l23.62-97.51c0.87-3.62-0.74-7.37-3.96-9.25 l-29.88-17.25c-2.59-1.51-5.79-1.51-8.37,0l-15.27,8.82c-2.56,1.48-4.15,4.2-4.2,7.16l-1.72,140.97h8.48v-32.94H133.91z"/><path class="stroke-line"  d="M244.66,73.95L179.3,200.47v-30.59h-11.33v-28.16l27.5-97.91c0.92-3.28,4.68-4.81,7.64-3.12\tl38.28,22.09C245.3,65.05,246.72,69.93,244.66,73.95z"/><path class="stroke-line" d="M280.99,85.65l-18.33-10.54c-4.15-2.38-9.41-0.9-11.73,3.28l-68.87,124.62h8.56v32.81h7.74\tl84.04-92.92c0.98-1.06,1.51-2.46,1.51-3.91V90.7C283.89,88.61,282.78,86.68,280.99,85.65z"/><path class="stroke-line"  d="M283.89,235.45v-74.55c0-3.01-3.7-4.49-5.76-2.3l-76.17,79.2v50.51l77.14-44.54\tC282.07,242.05,283.89,238.88,283.89,235.45z"/></svg>';
$("#home-page").length
  ? ($(".loadicon").addClass("loading"),
    $(".mask").addClass("hidden"),
    $("body").addClass("fullscreen"),
    $(".right-header").addClass("home"),
    $("html,body").addClass("no-scroll"),
    setTimeout(function () {
      $(".loadicon").addClass("move"), $(".bg-home").addClass("show");
    }, 2300),
    setTimeout(function () {
      $(".loadicon").animate({ opacity: 0 }, 800, "linear"),
        $(".home-banner .tagline").length
          ? $(".logo-center")
              .stop()
              .animate({ opacity: 1 }, 800, "linear", function () {
                $(".loadicon").remove(),
                  $(".logo-center").addClass("show"),
                  $(".home-banner .tagline .char").each(function (e) {
                    var t = $(this);
                    setTimeout(function () {
                      $(t).addClass("show");
                    }, 50 * (e + 1));
                  });
              })
          : $(".logo-center")
              .stop()
              .animate({ opacity: 1 }, 800, "linear", function () {
                $(".loadicon").remove(), $(".logo-center").addClass("show");
              }),
        setTimeout(function () {
          $(".home-banner")
            .stop()
            .animate({ opacity: 0 }, 800, "linear", function () {
              ($(".header,.wheel, .box-nav, .footer").addClass("show"),
              $(".option-header").addClass("on"),
              $("body").removeClass("fullscreen"),
              $("html,body").removeClass("no-scroll"),
              Mobile.matches)
                ? onScroll()
                : new BoxSlide().StartWheel;
              $(".home-video .box-video-center").length &&
                $(".home-video .player-vid").trigger("click"),
                $(".home-banner").remove();
            });
        }, 3e3);
    }, 3e3),
    setTimeout(function () {
      Done();
    }, 1e3))
  : ($("body").append('<div class="loadicon-inner">' + loadInner + "</div>"),
    $(".loadicon-inner").addClass("loading"),
    setTimeout(function () {
      $(".loadicon-inner").addClass("show"), Done();
    }, 600));
var lazyLoadInstance = new LazyLoad();
lazyLoadInstance.update(),
  window.addEventListener("beforeunload", function () {
    window.scrollTo(0, 0), $("html, body").scrollTop(0);
  });
var timex, show;
!(function (e) {
  var s = { on: e.fn.on, bind: e.fn.bind };
  e.each(s, function (t) {
    e.fn[t] = function () {
      var o,
        e = [].slice.call(arguments),
        a = e.pop(),
        l = e.pop();
      return (
        e.push(function () {
          var e = this,
            t = arguments;
          clearTimeout(o),
            (o = setTimeout(function () {
              l.apply(e, [].slice.call(t));
            }, a));
        }),
        s[t].apply(this, isNaN(a) ? arguments : e)
      );
    };
  });
})(jQuery);
var timer,
  News = 0,
  First = 0,
  doWheel = !0,
  doTouch = !0,
  windscroll = $(document).scrollTop(),
  isFirst = 0;
function onClick(e, t) {
  if (
    ($("#language_code").attr("value", e),
    document.URL == $(".httpserver").html())
  )
    return (
      $("input[name='language_code']").attr("value", e),
      $("input[name='redirect']").attr("value", t),
      $("#change_lang").submit(),
      !1
    );
  if ("vi" == $("#language_code").attr("value"))
    var o = $('link[hreflang="vi-vn"]').attr("href");
  else if ("zh" == $("#language_code").attr("value"))
    o = $('link[hreflang="zh-vn"]').attr("href");
  else if ("kr" == $("#language_code").attr("value"))
    o = $('link[hreflang="kr-vn"]').attr("href");
  else o = $('link[hreflang="en-vn"]').attr("href");
  return (
    $("#changlanguage_redirect").attr("value", o),
    $("#change_lang").submit(),
    !1
  );
}
function onScroll() {
  var e = $(".ani-item, .text-ani-item");
  $(e).each(function (e, t) {
    isInViewport(t) && $(t).addClass("on-show");
  });
}
function NavClick() {
  gsap.set($(".main-menu  li a span, .main-menu li small"), { opacity: 0 }),
    $(".nav-click").on("click", function () {
      return (
        Dx(),
        $(".nav-click").hasClass("active")
          ? ($(".navigation").scrollTop(0),
            $(".nav-click,.logo").removeClass("active"),
            $(".overlay-menu, .navigation").removeClass("show"),
            $("html, body").removeClass("no-scroll"),
            $(".footer, .option-header, .hotline-text, .subscribe").removeClass(
              "level-index-out"
            ),
            gsap.set($(".main-menu li a span, .main-menu li small"), {
              opacity: 0,
            }),
            $(".box-video-center").length &&
              $(
                ".home-video,.video-facilities,.home-experience,.location-video"
              ).hasClass("show-text") &&
              (Mobile.matches ||
                $(".show-text").find(".player-vid").trigger("click")),
            $(".show-text .text-animation").length &&
              $(".text-animation").removeClass("pause"))
          : ($(".navigation").scrollTop(0),
            $(".nav-click,.logo").addClass("active"),
            $(".overlay-menu, .navigation").addClass("show"),
            $("html, body").addClass("no-scroll"),
            $(".footer, .option-header, .hotline-text, .subscribe").addClass(
              "level-index-out"
            ),
            $(".box-video-center").length &&
              $(".box-video-center").hasClass("onstream") &&
              $(".onstream").find(".player-vid").trigger("click"),
            $(".show-text .text-animation").length &&
              $(".text-animation").addClass("pause"),
            gsap
              .timeline()
              .to($(".main-menu li small"), {
                duration: 1,
                opacity: 1,
                ease: "none",
                stagger: 0.2,
              }),
            gsap
              .timeline()
              .to($(".main-menu li a span"), {
                duration: 0.5,
                opacity: 1,
                ease: "none",
                stagger: 0.02,
              })),
        !1
      );
    }),
    $(".subscribe").on("click", function () {
      return (
        Reset(),
        $("html, body").addClass("no-scroll"),
        isFirefox && $(".group-central").addClass("blur"),
        $(".register-form").scrollTop(0),
        $(".register:not(.not-ani)").addClass("show"),
        $(".box-video-center").length &&
          $(".box-video-center").hasClass("onstream") &&
          $(".onstream").find(".player-vid").trigger("click"),
        clearTimeout(timer),
        $(".register.show .text-ani-item .char").each(function (e) {
          var t = $(this);
          timer = setTimeout(function () {
            $(t).addClass("show");
          }, 80 * (e + 1));
        }),
        !1
      );
    }),
    $(".close, .overlay-form").on("click", function () {
      return (
        $("html, body").removeClass("no-scroll"),
        isFirefox && $(".group-central").removeClass("blur"),
        $(".register-form").scrollTop(0),
        $(".register").removeClass("show"),
        $(".footer").removeClass("level-index-out"),
        $(".register .text-ani-item .char").removeClass("show"),
        $(".box-video-center").length &&
          $(
            ".home-video,.video-facilities,.home-experience,.location-video"
          ).hasClass("show-text") &&
          (Mobile.matches ||
            $(".show-text").find(".player-vid").trigger("click")),
        !1
      );
    }),
    $(".overlay-menu, .navigation span").on("click", function () {
      $(".nav-click").hasClass("active") && $(".nav-click").trigger("click");
    }),
    $(".lang-active").bind("mouseenter click", function () {
      $(this).hasClass("show")
        ? ($(this).removeClass("show"), $(".language ul").removeClass("show"))
        : ($(this).addClass("show"), $(".language ul").addClass("show")),
        $(".lang-active").hasClass("show") &&
          $(".container").on("click", function (e) {
            var t = $(".language");
            targetElement = e.target;
            do {
              if (targetElement == t) return;
              targetElement = targetElement.parentNode;
            } while (targetElement);
            $(".language ul,.lang-active").removeClass("show");
          });
    }),
    $(".language").on("mouseleave", function () {
      $(".language ul,.lang-active").removeClass("show");
    });
}
function Reset() {
  document.getElementById("register").reset();
}
var BoxSlide = function () {
  var o = $(".group-central").length,
    s = $(".group-central").index(),
    i = !1;
  function a() {
    (i = !0),
      $(".group-central").css({ "z-index": "" }),
      e(),
      $("#about-page").length
        ? gsap.fromTo(
            $(".group-central")[s],
            0.8,
            { backgroundColor: "rgba(33,60,34,0)", y: "100%", zIndex: 2 },
            {
              y: "0%",
              backgroundColor: "rgba(33,60,34,1)",
              ease: "sine.out",
              force3D: !0,
              onComplete: function () {
                t();
              },
            }
          )
        : gsap.fromTo(
            $(".group-central")[s],
            0.8,
            { y: "100%", zIndex: 2 },
            {
              y: "0%",
              ease: "sine.out",
              force3D: !0,
              onComplete: function () {
                t();
              },
            }
          );
  }
  function l() {
    (i = !0),
      $(".group-central").css({ "z-index": "" }),
      e(),
      $("#about-page").length
        ? gsap.fromTo(
            $(".group-central")[s],
            0.8,
            { backgroundColor: "rgba(33,60,34,0)", y: "100%", zIndex: 2 },
            {
              y: "0%",
              backgroundColor: "rgba(33,60,34,1)",
              ease: "sine.out",
              force3D: !0,
              onComplete: function () {
                t();
              },
            }
          )
        : gsap.fromTo(
            $(".group-central")[s],
            0.8,
            { y: "-100%", zIndex: 2 },
            {
              y: "0%",
              ease: "sine.out",
              force3D: !0,
              onComplete: function () {
                t();
              },
            }
          );
  }
  function e() {
    0 < timer && (clearTimeout(timer), (timer = 0)),
      $(".box-nav li").removeClass("current"),
      $(".content-inner").removeClass("show"),
      $(".go-top, .pointer-map, .map-img").removeClass("show"),
      $(".text-ani-item span span, .tagline .char").removeClass("show"),
      $(".dot-num, .house-text, .num").removeClass("show"),
      $(".show-box-pic").removeClass("showup"),
      $(".box-video-center").length &&
        $(".box-video-center").hasClass("onstream") &&
        ($(".onstream").find(".player-vid").trigger("click"),
        $(".box-video-center")
          .find(".playback-button")
          .attr("data-state", "pause")),
      $(".scrollA").length && ScrollNiceHide();
  }
  function t() {
    if (
      ($(".group-central").removeClass("show-text"),
      $(".box-nav li").removeClass("current"),
      $(".group-central").eq(s).addClass("show-text"),
      $(".box-nav li").eq(s).addClass("current"),
      $(".box-video-center").length &&
        $(
          ".home-video, .video-facilities, .home-experience, .location-video"
        ).hasClass("show-text") &&
        (clearTimeout(timer),
        (timer = setTimeout(function () {
          Mobile.matches ||
            ($(".show-text")
              .find(".playback-button")
              .attr("data-state", "play"),
            $(".show-text").find(".player-vid").trigger("click"));
        }, 300))),
      ($(".home-location").hasClass("show-text") ||
        $(".location").hasClass("show-text") ||
        $(".location-center").hasClass("show-text")) &&
        setTimeout(function () {
          $(".map-img, .pointer-map").addClass("show");
        }, 500),
      $(".show-text .text-animation").length &&
        ($(".show-text .text-animation").hasClass("show") ||
          $(".show-text .text-animation").addClass("show"),
        setTimeout(function () {
          $(".show-text .text-animation").removeClass("pause");
        }, 600)),
      $(".show-text .text-ani-item").length &&
        $(".show-text .text-ani-item .char").each(function (e) {
          var t = $(this);
          timer = setTimeout(function () {
            $(t).addClass("show");
          }, 40 * (e + 1));
        }),
      $(".show-text .scrollA").length &&
        setTimeout(function () {
          ScrollNiceA();
        }, 1e3),
      $(".show-text .tagline").length &&
        setTimeout(function () {
          $(".show-text .tagline .char").each(function (e) {
            var t = $(this);
            timer = setTimeout(function () {
              $(t).addClass("show");
            }, 50 * (e + 1));
          });
        }, 1e3),
      $(".dot-num").length &&
        $(".group-central").hasClass("show-text") &&
        $(".show-text .dot-num").each(function (e) {
          var t = $(this);
          timer = setTimeout(function () {
            $(t).addClass("show");
          }, 100 * (e + 1));
        }),
      $(".num").length &&
        $(".group-central").hasClass("show-text") &&
        $(".show-text .num").each(function (e) {
          var t = $(this);
          timer = setTimeout(function () {
            $(t).addClass("show");
          }, 50 * (e + 1));
        }),
      $(".group-central:last-child").hasClass("show-text") &&
      !$(".box-slider").hasClass("single")
        ? ($(".wheel").removeClass("show"), $(".go-top").addClass("show"))
        : ($(".wheel").addClass("show"), $(".go-top").removeClass("show")),
      $(
        "#about-page, #location-page, #facilities-page, #library-page, #contact-page"
      ).length)
    ) {
      $(".group-central.show-text").attr("data-name");
      var e = $(".box-nav li").eq(s).find("button").attr("data-href"),
        t = $(".box-nav li").eq(s).find(".link-change-url").attr("data-title"),
        o = $(".box-nav li")
          .eq(s)
          .find(".link-change-url")
          .attr("data-keyword"),
        a = $(".box-nav li")
          .eq(s)
          .find(".link-change-url")
          .attr("data-description"),
        l = $(".box-nav li").eq(s).find("button").attr("data-page");
      changeUrl(e, t, a, o, l, t, a),
        changeAlternate(
          e,
          document.querySelector(".box-nav li.current div.link-change-url"),
          1
        );
    }
    setTimeout(function () {
      gsap.set($(".group-central").not($(".group-central")[s]), {
        y: "100%",
        force3D: !0,
      }),
        (i = !1);
    }, 1e3);
  }
  gsap.set($(".group-central").not($(".group-central")[s]), {
    y: "100%",
    force3D: !0,
  }),
    $(".box-nav li").on("click", function (e) {
      e.preventDefault();
      var t = $(this).index();
      return (
        i || (!i && s < t ? ((s = t), a()) : !i && t < s && ((s = t), l())), !1
      );
    }),
    setTimeout(function () {
      $(".show-text").length ||
        ($(".group-central:first-child").addClass("show-text"),
        $(".box-nav li:first-child").addClass("current")),
        $(".dot-num").length &&
          $(".group-central").hasClass("show-text") &&
          $(".show-text .dot-num").each(function (e) {
            var t = $(this);
            timer = setTimeout(function () {
              $(t).addClass("show");
            }, 100 * (e + 1));
          }),
        $(".show-text .scrollA").length &&
          setTimeout(function () {
            ScrollNiceA();
          }, 1e3),
        $(".show-text .text-animation").length &&
          (setTimeout(function () {
            $(".show-text .text-animation").addClass("show");
          }, 1e3),
          setTimeout(function () {
            $(".show-text .text-animation").removeClass("pause");
          }, 2e3)),
        ($(".home-location").hasClass("show-text") ||
          $(".location").hasClass("show-text") ||
          $(".location-center").hasClass("show-text")) &&
          setTimeout(function () {
            $(".map-img, .pointer-map").addClass("show");
          }, 500),
        $(".show-text .text-ani-item").length &&
          setTimeout(function () {
            $(".show-text .text-ani-item .char").each(function (e) {
              var t = $(this);
              timer = setTimeout(function () {
                $(t).addClass("show");
              }, 40 * (e + 1));
            });
          }, 300),
        $(".show-text .tagline").length &&
          setTimeout(function () {
            $(".show-text .tagline .char").each(function (e) {
              var t = $(this);
              timer = setTimeout(function () {
                $(t).addClass("show");
              }, 50 * (e + 1));
            });
          }, 1e3);
    }, 800),
    $(".wheel").on("click", function () {
      return $(".box-nav li.current").next().trigger("click"), !1;
    }),
    $("#news-page, #subdivision-page, #progress-page").length ||
      Mobile.matches ||
      (document.querySelector(".box-slider").addEventListener(
        "wheel",
        function (e) {
          var t;
          Mobile.matches ||
            (!1 === i &&
              (t = Math.max(
                -1,
                Math.min(1, e.wheelDelta || -e.deltaY || -e.detail)
              )),
            $("body").hasClass("no-scroll") ||
              (null != $(".group-central")[s] && 1 === parseInt(t)
                ? (s <= 0 ? (s = o - 1) : s--, l())
                : null != $(".group-central")[s] &&
                  -1 === parseInt(t) &&
                  (o - 1 <= s ? (s = 0) : s++, a())));
        },
        !1
      ),
      $(".box-slider:not(.single)")
        .on("swipeup", function (e) {
          doTouch &&
            ((doTouch = !1),
            Mobile.matches ||
              $("body").hasClass("fullscreen") ||
              ($(".box-nav li.current").next().trigger("click"),
              setTimeout(turnWheelTouch, 500)));
        })
        .on("swipedown", function (e) {
          doTouch &&
            ((doTouch = !1),
            Mobile.matches ||
              $("body").hasClass("fullscreen") ||
              ($(".box-nav li.current").prev().trigger("click"),
              setTimeout(turnWheelTouch, 500)));
        }));
};
function SlidePicture() {
  $(".slide-partner").length &&
    !Mobile.matches &&
    $(".slide-partner").BTQSlider({
      items: 1,
      margin: 0,
      rewind: !0,
      smartSpeed: 600,
      nav: !0,
      dots: !1,
      dotNum: !1,
      lazyLoad: !0,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      responsiveRefreshRate: 150,
    }),
    $(".location .slide-drap").length &&
      $(".slide-drap").BTQSlider({
        items: 3,
        margin: 10,
        rewind: !0,
        smartSpeed: 600,
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        nav: !1,
        dots: !1,
        dotNum: !1,
        lazyLoad: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        responsiveRefreshRate: 150,
        responsive: {
          0: { items: 2 },
          600: { items: 2 },
          1e3: { items: 3 },
          1100: { items: 3 },
        },
      }),
    $(".home-location .slide-drap").length &&
      Mobile.matches &&
      $(".slide-drap").BTQSlider({
        items: 3,
        margin: 10,
        rewind: !0,
        smartSpeed: 600,
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        nav: !1,
        dots: !1,
        dotNum: !1,
        lazyLoad: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        responsiveRefreshRate: 150,
        responsive: { 0: { items: 2 }, 600: { items: 2 } },
      }),
    $(".slide-library").length &&
      !Mobile.matches &&
      $(".slide-library").each(function (e, t) {
        if ($(t).find(".item-library").length < 2) {
          $(t).addClass("center-slidebox");
          var o = !0,
            a = !1,
            l = !1,
            s = !1,
            i = !1;
        } else (o = !1), (a = !0), (l = !0), (s = !0), (i = !0);
        $(t).BTQSlider({
          items: 1,
          margin: 30,
          loop: o,
          rewind: a,
          smartSpeed: 600,
          slideBy: 1,
          nav: !0,
          dots: !0,
          dotNum: !1,
          lazyLoad: !0,
          mouseDrag: i,
          touchDrag: l,
          pullDrag: s,
          responsiveRefreshRate: 150,
        });
      }),
    $(".slide-library-pdf").length &&
      !Mobile.matches &&
      $(".slide-library-pdf").each(function (e, t) {
        $(t).find(".item-library").length < 2 &&
          $(t).addClass("center-slidebox"),
          $(t).BTQSlider({
            items: 2,
            margin: 0,
            rewind: !0,
            smartSpeed: 600,
            slideBy: 2,
            nav: !0,
            dots: !0,
            dotNum: !1,
            lazyLoad: !0,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            responsiveRefreshRate: 150,
          });
      });
}
function itemZoom() {
  Mobile.matches &&
    pinchZoom(
      {
        active: "zoom-active",
        transition: "zoom-transition",
        visible: "visible",
        zoom: "pinch-zoom",
      },
      {
        scaleDefault: 2,
        scaleMax: 3,
        scaleMin: 1,
        scrollDisable: !0,
        transitionDuration: 200,
        doubleclickDelay: 400,
      }
    );
}
function makeFull() {
  var e = document.querySelector(".full-screen");
  function t() {
    document.webkitFullscreenElement || document.fullscreenElement
      ? (document.body.classList.add("no-scroll", "fullscreen"),
        e.classList.add("active"))
      : (document.body.classList.remove("no-scroll", "fullscreen"),
        e.classList.remove("active"));
  }
  e.addEventListener("click", toggleFullScreen),
    document.addEventListener("fullscreenchange", t),
    document.addEventListener("webkitfullscreenchange", t);
}
function AlbumLoad(e, o, a) {
  1 < $(".all-album .album-load").length &&
    $(".all-album .album-load").last().remove(),
    $.ajax({
      url: e,
      cache: !1,
      success: function (e) {
        function t() {
          $(".pic-name").removeClass("move"),
            $(".pic-name h3").removeClass("fadeindown"),
            $(".selected").find(".pic-name").addClass("move"),
            $(".move h3").addClass("fadeindown");
        }
        Mobile.matches ||
          ($(".slide-slidebox").length &&
            $(".slide-slidebox").trigger("stop.btq.autoplay")),
          $(".container").hasClass("blur") ||
            ($(".container").addClass("blur"),
            $(".right-header, .nav-click, .wheel, .go-top").addClass("off")),
          (!$(".show-text .text-animation").length &&
            $(".text-animation").hasClass("pause")) ||
            $(".text-animation").addClass("pause"),
          $(".house-detail").length &&
            $(".house-detail, .sub-menu").addClass("off"),
          $(".slide-video-playing").length &&
            $(".pause-button").trigger("click"),
          $(".all-album").append(e),
          makeFull(),
          a &&
            ($(".title-album h2").text(a),
            $(".title-album").addClass("fadeindown")),
          $(".container-zoom").addClass("pinch-zoom"),
          pinchZoom(
            {
              active: "zoom-active",
              transition: "zoom-transition",
              visible: "visible",
              zoom: "pinch-zoom",
            },
            {
              scaleDefault: Mobile.matches ? 1.8 : 1.3,
              scaleMax: 3,
              scaleMin: 1,
              scrollDisable: !0,
              transitionDuration: 200,
              doubleclickDelay: 400,
            }
          ),
          $(".album-center")
            .on("initialized.btq.slidebox", function () {
              $(".album-center")
                .find(".slide-item.active")
                .addClass("selected"),
                t();
            })
            .BTQSlider({
              items: 1,
              margin: 0,
              smartSpeed: 600,
              loop: !1,
              dots: !0,
              nav: !0,
              responsiveRefreshRate: 150,
            })
            .on("changed.btq.slidebox", function (e) {
              $(".thumbs").length &&
                (function (e) {
                  var t = e.item.Count - 1,
                    o = e.item.index;
                  o < 0 && (o = t);
                  t < o && (o = 0);
                  $(".thumbs")
                    .find(".slide-item")
                    .removeClass("current")
                    .eq(o)
                    .addClass("current");
                  var a = $(".thumbs").find(".slide-item.active").length - 1,
                    l = $(".thumbs").find(".slide-item.active").first().index(),
                    s = $(".thumbs").find(".slide-item.active").last().index();
                  s - 1 <= o &&
                    $(".thumbs").data("btq.slidebox").to(o, 300, !0);
                  o <= l &&
                    $(".thumbs")
                      .data("btq.slidebox")
                      .to(o - a, 300, !0);
                })(e);
            })
            .on("translate.btq.slidebox", function (e) {
              $(".album-center").find(".slide-item").removeClass("selected");
            })
            .on("translated.btq.slidebox", function (e) {
              $(".album-center")
                .find(".slide-item.active")
                .addClass("selected"),
                t();
            }),
          $(".thumbs")
            .on("initialized.btq.slidebox", function () {
              var e = $(".thumbs").find(".slide-item").length;
              600 <= $(window).width()
                ? e <= 6
                  ? $(".thumbs").addClass("center-slidebox")
                  : $(".thumbs").removeClass("center-slidebox")
                : e <= 3
                ? $(".thumbs").addClass("center-slidebox")
                : $(".thumbs").removeClass("center-slidebox"),
                $(".thumbs").find(".slide-item").eq(0).addClass("current");
            })
            .BTQSlider({
              margin: 5,
              smartSpeed: 300,
              dots: !1,
              nav: !1,
              responsiveRefreshRate: 100,
              responsive: {
                0: { items: 3, slideBy: 3 },
                600: { items: 6, slideBy: 6 },
              },
            }),
          o && $(".album-center").data("btq.slidebox").to(o, 5, !0),
          $(".thumbs").on("click", ".slide-item", function (e) {
            e.preventDefault();
            var t = $(this).index();
            $(".album-center").data("btq.slidebox").to(t, 600, !0);
          }),
          document.querySelector(".album-load").addEventListener(
            "wheel",
            function (e) {
              if (!Mobile.matches) {
                if (e.deltaY < 0) {
                  if (!doWheel) return;
                  $(".zoom-active").length ||
                    ((doWheel = !1),
                    $(".album-center").trigger("prev.btq.slidebox"),
                    setTimeout(turnWheelTouch, 500));
                } else {
                  if (!doWheel) return;
                  $(".zoom-active").length ||
                    ((doWheel = !1),
                    $(".album-center").trigger("next.btq.slidebox"),
                    setTimeout(turnWheelTouch, 500));
                }
                e.preventDefault();
              }
            },
            !1
          ),
          $(".album-load").animate({ opacity: 1 }, 600, "linear", function () {
            $(".close-album").addClass("fadein"),
              $(".full-screen").addClass("show"),
              $(".loadx").fadeOut(400, "linear", function () {
                $(".loadx").remove();
              });
          }),
          $(".close-album").on("click", function () {
            return (
              $("body").hasClass("fullscreen") && toggleFullScreen(),
              $(".overlay-dark").removeClass("show"),
              $("body").removeClass("zoom-active"),
              $(".all-album").fadeOut(800, "linear", function () {
                $(".album-load").remove(),
                  $(".house-detail").length
                    ? $(".house-detail, .sub-menu").removeClass("off")
                    : $(".container").hasClass("blur") &&
                      ($(".container").removeClass("blur"),
                      $(
                        ".right-header, .nav-click, .wheel, .go-top"
                      ).removeClass("off")),
                  ($(".show-text .text-animation").length ||
                    $(".text-animation").hasClass("pause")) &&
                    $(".text-animation").removeClass("pause"),
                  $(".overlay-dark").removeClass("level-index-in"),
                  $("html, body").removeClass("no-scroll");
              }),
              !1
            );
          });
      },
    });
}
function VideoLoad(e, l) {
  if (!$("#youtube_js").length && void 0 !== l) {
    var t = document.createElement("script");
    (t.id = "youtube_js"),
      t.setAttribute("rel", "preload"),
      t.setAttribute("as", "script"),
      (t.src = "https://www.youtube.com/iframe_api"),
      document.body.appendChild(t);
  }
  $.ajax({
    url: e,
    cache: !1,
    success: function (e) {
      $(".allvideo").append(e), $("#cursor").addClass("display-none");
      $("#viewvideo").length;
      if ($("#viewvideo").length) {
        var t = document.getElementById("viewvideo");
        $(".loadx").fadeOut(400, "linear", function () {
          $("#viewvideo").length && t.play(), $(".loadx").remove();
        });
      }
      if (void 0 !== l) {
        var o;
        function a(e) {
          if (
            (Mobile.matches && (e.target.mute(), e.target.playVideo()),
            1 < o.getPlayerState())
          ) {
            var t = o.getVideoData().title;
            $(".video-wrap iframe").attr("title", t);
          }
        }
        $(".video-wrap").append(l),
          $(".loadx").fadeOut(800, "linear", function () {
            (o = new YT.Player("VYT", { events: { onReady: a } })),
              $(".loadx").remove();
          });
      }
      $(".close-video").addClass("show"),
        $(".close-video").on("click", function () {
          $("#viewvideo").length && t.pause(),
            $(".allvideo").fadeOut(500, "linear", function () {
              $(".overlay-dark, .close-video").removeClass("show"),
                $(".allvideo .video-list").remove(),
                $("html, body").removeClass("no-scroll");
            });
        });
    },
  });
}
function NewsLoad(t) {
  $(".scrollC .news-text").length && $(".news-text").remove(),
    $.ajax({
      url: t,
      cache: !1,
      success: function (e) {
        $(".news-content .scrollC").prepend(e),
          ZoomPic(),
          ShareSocial(),
          document.querySelector(".zalo-share-button") &&
            ZaloSocialSDK.reload(),
          changeAlternate(t, document.querySelectorAll(".alternate-hl-news")),
          Mobile.matches &&
            ($(".news-text img").addClass("zoom-pic"),
            $(".container").stop().animate({ opacity: 1 }, 300, "linear")),
          $(
            ".news-text a:not(.share-facebook), .news-text a:not(.share-zalo), .news-text p a"
          ).on("click", function (e) {
            e.preventDefault();
            var t = $(this).attr("href");
            return window.open(t, "_blank"), !1;
          }),
          $(".click-hover, .news-section").addClass("show"),
          $(".news-content")
            .stop()
            .animate({ opacity: 1 }, 500, "linear", function () {
              Mobile.matches ||
                setTimeout(function () {
                  ScrollNiceC();
                }, 1e3),
                $(".news-content").addClass("show"),
                $(".loadx").fadeOut(400, "linear", function () {
                  $(".loadx").remove();
                });
            }),
          $(".close-news, .click-hover, .more-news").on("click", function () {
            var e = $(".sub-menu li.current a").attr("href"),
              t = $(".sub-menu li.current .link-change-url").attr("data-title"),
              o = $(".sub-menu li.current .link-change-url").attr(
                "data-keyword"
              ),
              a = $(".sub-menu li.current .link-change-url").attr(
                "data-description"
              ),
              l = $(".sub-menu li.current a").attr("data-name");
            changeUrl(e, t, a, o, l, t, a),
              changeAlternate(
                e,
                document.querySelector(
                  ".sub-menu li.current div.link-change-url"
                ),
                1
              ),
              Mobile.matches &&
                ($(".link-page").removeClass("current on-show"),
                $(".container")
                  .stop()
                  .animate({ opacity: 0 }, 300, "linear", function () {
                    $("html, body").animate({ scrollTop: 0 }, "fast");
                  })),
              $(".overlay-news").removeClass("show"),
              $(".news-content")
                .stop()
                .animate({ opacity: 0 }, 800, "linear", function () {
                  $(".news-list").removeClass("hide show-list"),
                    Mobile.matches
                      ? ($(".container").css({ opacity: 1 }), onScroll())
                      : ($(".scrollC").scrollTop(0),
                        $(".scrollC").getNiceScroll().remove(),
                        $(".scrollB").getNiceScroll().show()),
                    $(".news-text").remove(),
                    $(".news-content, .wrap-view-more").removeClass("show"),
                    $(
                      ".title-page, .footer, .right-header, .option-header,.sub-menu"
                    ).removeClass("off"),
                    $(".colum-box-news, .click-hover").removeClass("show");
                });
          });
      },
    });
}
function LoadProgress(t, o) {
  $(".scrollD").children().length && $(".scrollD").children().remove(),
    $.ajax({
      url: t,
      cache: !1,
      success: function (e) {
        $(".scrollD").append(e),
          1 == isFirst &&
            changeAlternate(
              t,
              document.querySelectorAll(".alternate-hl-progress")
            ),
          (isFirst = 1),
          $(".progress .title-main h2").text(o),
          $(".progress-list")
            .stop()
            .animate({ opacity: 1 }, 800, "linear", function () {
              $(".progress-list").addClass("show"),
                $(".box-progress").each(function (e) {
                  var t = $(this);
                  setTimeout(function () {
                    $(t).addClass("show");
                  }, 100 * (e + 1));
                }),
                0 == News && ($(".select-list").addClass("fadein"), (News = 1)),
                Mobile.matches ||
                  setTimeout(function () {
                    ScrollNiceD(),
                      "block" ==
                        $(".progress-list .nicescroll-rails").css("display") &&
                        $(".wheel").addClass("show");
                  }, 3e3),
                $(".loadx").fadeOut(400, "linear", function () {
                  $(".loadx").remove();
                });
            });
      },
    });
}
function Load360(e) {
  $(".box-video-center").length &&
    $(".box-video-center").hasClass("onstream") &&
    $(".onstream").find(".player-vid").trigger("click"),
    $.ajax({
      url: e,
      cache: !1,
      success: function (e) {
        $(".degree-load").append(e);
        $(".degree-load").append(
          '<button class="close-popup" aria-label="close"><svg x="0px" y="0px" viewBox="0 0 50 50"><path opacity="0.5" fill="#FFFFFF" d="M24.57,46.57L6.64,36.18V15.07l17.93-11.7l18.79,11.67v21.17 L24.57,46.57z M10.35,34.04l14.27,8.26l15.04-8.29V17.1L24.62,7.77l-14.27,9.31V34.04z"/><path opacity="0.5" fill="#FFFFFF" d="M24.93,49.72L3.7,37.19V12.15L24.93,0.23L46.3,12.15v25.04l-0.23,0.13L24.93,49.72z M4.62,36.66l20.31,11.98l20.45-11.98V12.69L24.93,1.3L4.62,12.69V36.66z"/></svg></button>'
        ),
          $(".degree-load").append('<div class="logo-top"></div>'),
          $(".degree-load")
            .stop()
            .animate({ opacity: 1 }, 500, "linear", function () {
              $(".close-popup").addClass("show"),
                $(".degree-load").find("iframe").addClass("show"),
                $(".loadx").fadeOut(400, "linear", function () {
                  $(".loadx").remove();
                });
            }),
          $(".close-popup").on("click", function () {
            return (
              $(".box-video-center").length &&
                $(
                  ".home-video,.video-facilities,.home-experience,.location-video"
                ).hasClass("show-text") &&
                (Mobile.matches ||
                  $(".show-text").find(".player-vid").trigger("click")),
              $(".loadx").remove(),
              $(".overlay-dark").removeClass("show"),
              $(".degree-load")
                .stop()
                .animate({ opacity: 0 }, 800, "linear", function () {
                  $(".degree-load").children().remove(),
                    $(".degree-load").removeClass("show"),
                    $("html, body").removeClass("no-scroll"),
                    $(".overlay-dark").removeClass("dark-level");
                }),
              !1
            );
          });
      },
    });
}
function popupLoad(e) {
  $(".news-text").length && $(".news-text, .close-popup, .logo-top").remove(),
    $.ajax({
      url: e,
      cache: !1,
      success: function (e) {
        $(".popup-details").find(".news-content").append(e),
          $(".popup-details").removeClass("display-none"),
          $("#cursor").addClass("display-none");
        var t =
          '<button class="close-popup" aria-label="close"><svg x="0px" y="0px" viewBox="0 0 50 50"><path opacity="0.5" fill="#FFFFFF" d="M24.57,46.57L6.64,36.18V15.07l17.93-11.7l18.79,11.67v21.17 L24.57,46.57z M10.35,34.04l14.27,8.26l15.04-8.29V17.1L24.62,7.77l-14.27,9.31V34.04z"/><path opacity="0.5" fill="#FFFFFF" d="M24.93,49.72L3.7,37.19V12.15L24.93,0.23L46.3,12.15v25.04l-0.23,0.13L24.93,49.72z M4.62,36.66l20.31,11.98l20.45-11.98V12.69L24.93,1.3L4.62,12.69V36.66z"/></svg></button>';
        $(".register-popup").length
          ? $(".register-popup").append(t)
          : $(".popup-details").append(t),
          $(".list-text").length &&
            $(".popup-details").append('<div class="logo-top"></div>'),
          $(
            ".container, .right-header, .nav-click, .footer, .wheel, .go-top, .social-mobile"
          ).addClass("blur"),
          lazyLoadInstance.update(),
          onScroll(),
          FocusText(),
          $("#register_popup").length && RegisterPopupSubmit(),
          Mobile.matches &&
            ($(".news-text img").addClass("zoom-pic"), ZoomPic()),
          $(".text-ani-item").length &&
            Splitting({ target: ".text-ani-item", by: "chars" }),
          $(".title-small h2").length &&
            Splitting({ target: ".title-small h2", by: "chars" }),
          $(".news-text a").on("click", function (e) {
            e.preventDefault();
            var t = $(this).attr("href");
            return window.open(t, "_blank", "noreferrer"), !1;
          }),
          $(".click-hover").addClass("show"),
          $(".news-text").innerHeight() > $(window).height() &&
            $(".scroll-popup").addClass("no-after"),
          $(".news-content")
            .stop()
            .animate({ opacity: 1 }, 300, "linear", function () {
              $(
                ".news-content, .popup-details, .close-popup, .register-popup"
              ).addClass("show"),
                setTimeout(function () {
                  $(".news-content .splitting .char").each(function (e) {
                    var t = $(this);
                    setTimeout(function () {
                      $(t).addClass("show");
                    }, 30 * (e + 1));
                  });
                }, 1e3),
                $(".loadx").fadeOut(400, "linear", function () {
                  $(".news-text").addClass("show"), $(".loadx").remove();
                });
            }),
          $(".close-popup, .click-hover").on("click", function () {
            $(".overlay-dark").removeClass("show"),
              $(".news-content")
                .stop()
                .animate({ opacity: 0 }, 800, "linear", function () {
                  $(
                    ".container, .right-header, .nav-click, .footer, .wheel, .go-top, .social-mobile"
                  ).removeClass("blur"),
                    $(".scroll-popup").scrollTop(0),
                    $(".news-text, .close-popup, .logo-top").remove(),
                    $(".register-popup").remove(),
                    $(
                      ".click-hover, .popup-details, .news-content"
                    ).removeClass("show"),
                    $(".popup-details").addClass("display-none"),
                    $(".scroll-popup").removeClass("no-after"),
                    $("html, body").removeClass("no-scroll"),
                    $(".overlay-dark").css({ top: "50%", left: "50%" }),
                    $(".overlay-dark").removeClass("dark-level");
                });
          });
      },
    });
}
function FocusText() {
  $("input, textarea")
    .focus(function (e) {
      $(this).parent().find(".holder").addClass("hide");
    })
    .focusout(function (e) {
      "" == $(this).val() &&
        $(this).parent().find(".holder").removeClass("hide");
    });
}
function hoverFaci() {
  $(".dot-num, .dot-hover").on("mouseenter click", function (e) {
    e.preventDefault(),
      e.stopPropagation(),
      $(".dot-num, .dot-hover, .hover-li, .overlay-color").removeClass(
        "current"
      ),
      $(".show-box-pic, .show-division").removeClass("showup"),
      $(this).addClass("current");
    var o = $(this).attr("data-name"),
      t = $(this).offset().left,
      a = $(this).offset().top,
      l = $(".show-box-pic[data-pic='" + o + "']").innerHeight(),
      s = $(".show-box-pic[data-pic='" + o + "']").innerWidth();
    if (
      ($(".subdivision-page").length &&
        $(".show-division[data-name='" + o + "']").addClass("showup"),
      Mobile.matches)
    ) {
      if ($(".location-center, .subdivision-page").length) {
        $(".hover-li[data-text='" + o + "']").addClass("current"),
          $(".overlay-color[data-color='" + o + "']").addClass("current");
        var i = $(".faci-list li.current").parent().parent(),
          n = $(i).scrollLeft(),
          r = $(".hover-li.current").offset().left,
          c = $(window).width() / 2 - $(".hover-li.current").width() / 2;
        n <= 0
          ? $(i)
              .stop()
              .animate({ scrollLeft: r - c }, 300, "linear")
          : $(i)
              .stop()
              .animate({ scrollLeft: r - c + n }, 300, "linear");
      }
      if ($(".facilities").length) {
        $(".hover-li[data-text='" + o + "']").addClass("current");
        var d =
          $(".facilities-map").height() +
          $(".facilities .title-main").innerHeight() +
          40;
        580 < $(window).width()
          ? $(".show-box-pic[data-pic='" + o + "']")
              .css({ left: $(window).width() / 2 - s / 2, top: d - l })
              .addClass("showup")
          : $(".show-box-pic[data-pic='" + o + "']")
              .css({ left: 10, top: d - l })
              .addClass("showup"),
          $(window).on(
            "resize",
            function () {
              var e =
                  $(".facilities-map").height() +
                  $(".facilities .title-main").innerHeight() +
                  40,
                t = $(".show-box-pic[data-pic='" + o + "']").innerHeight();
              $(".show-box-pic").hasClass("showup") &&
                (580 < $(window).width()
                  ? $(".show-box-pic").css({
                      left: $(window).width() / 2 - s / 2,
                      top: e - t,
                    })
                  : $(".show-box-pic").css({ left: 10, top: e - t }));
            },
            350
          );
      }
      if ($(".home-subdivision").length) {
        $(".show-box-pic[data-pic='" + o + "']").addClass("showup");
        (i = $(".show-box-pic.showup").parent().parent()),
          (n = $(i).scrollLeft()),
          (r = $(".show-box-pic.showup").offset().left),
          (c = $(window).width() / 2 - $(".show-box-pic.showup").width() / 2);
        n <= 0
          ? $(i)
              .stop()
              .animate({ scrollLeft: r - c }, 300, "linear")
          : $(i)
              .stop()
              .animate({ scrollLeft: r - c + n }, 300, "linear");
      }
    } else
      $(".show-box-pic[data-pic='" + o + "']")
        .css({ left: t + 50, top: a - (l / 2 - 10) })
        .addClass("showup"),
        $(".hover-li[data-text='" + o + "']").addClass("current"),
        $(".overlay-color[data-color='" + o + "']").addClass("current");
    return !1;
  }),
    $(".dot-hover").on("click", function (e) {
      if (!Mobile.matches) {
        e.preventDefault(), e.stopPropagation();
        var t = $(this).attr("data-name");
        $(".subdivision-page").length &&
          $(".show-division[data-name='" + t + "']").hasClass("open") &&
          $(".show-division[data-name='" + t + "']")
            .find("a")
            .trigger("click");
      }
      return !1;
    }),
    $(".dot-num,.dot-hover, .hover-li").on("mouseleave", function () {
      $(".dot-num,.dot-hover, .hover-li, .overlay-color").removeClass(
        "current"
      ),
        $(".show-box-pic").removeClass("showup");
    }),
    $(".hover-li").on("mouseenter", function (e) {
      e.preventDefault(),
        e.stopPropagation(),
        $(".dot-num,.dot-hover, .hover-li, .overlay-color").removeClass(
          "current"
        ),
        $(".show-box-pic").removeClass("showup"),
        $(this).addClass("current");
      var t = $(this).attr("data-text");
      Mobile.matches ||
        ($(".dot-num[data-name='" + t + "']").trigger("mouseenter"),
        $(".dot-hover[data-name='" + t + "']").trigger("mouseenter")),
        $(".dot-num[data-name='" + t + "']").addClass("current"),
        $(".dot-hover[data-name='" + t + "']").addClass("current");
    }),
    $(".hover-li").on("click", function (e) {
      e.preventDefault(),
        e.stopPropagation(),
        $(".dot-num, .dot-hover, .hover-li, .overlay-color").removeClass(
          "current"
        ),
        $(".show-box-pic").removeClass("showup"),
        $(this).addClass("current");
      var t = $(this).attr("data-text");
      $(".dot-num[data-name='" + t + "']").trigger("click"),
        $(".dot-hover[data-name='" + t + "']").trigger("click"),
        $(".dot-num[data-name='" + t + "']").addClass("current"),
        $(".dot-hover[data-name='" + t + "']").addClass("current"),
        $(".overlay-color[data-color='" + t + "']").addClass("current"),
        Mobile.matches &&
          $(".box-video-center").length &&
          $(".box-video-center").hasClass("onstream") &&
          $(".onstream").find(".player-vid").trigger("click");
    }),
    $(".facilities").length
      ? ($(".show-box-pic.no-pic, .facilities-map").on("click", function (e) {
          return (
            e.preventDefault(),
            e.stopPropagation(),
            $(".show-box-pic").removeClass("showup"),
            $(".dot-num, .dot-hover, .hover-li").removeClass("current"),
            !1
          );
        }),
        $(".dot-num").on("click", function (e) {
          if ((e.preventDefault(), e.stopPropagation(), !Mobile.matches)) {
            $(".show-box-pic").removeClass("showup");
            var t = $(this).attr("data-name");
            if (
              ($(".show-box-pic[data-pic='" + t + "']").addClass("showup"),
              !$(".show-box-pic[data-pic='" + t + "']").hasClass("no-pic"))
            )
              ThumbZoom(
                $(".show-box-pic[data-pic='" + t + "']")
                  .find("img")
                  .attr("data-src"),
                $(".show-box-pic[data-pic='" + t + "']")
                  .find(".faci-text h3")
                  .text()
              ),
                $(".dot-num, .hover-li").removeClass("current"),
                $(".show-box-pic").removeClass("showup");
          }
          return !1;
        }),
        $(".show-box-pic:not(.no-pic)").on("click", function (e) {
          return (
            e.preventDefault(),
            e.stopPropagation(),
            $(".dot-num, .dot-hover, .hover-li").removeClass("current"),
            $(".show-box-pic").removeClass("current"),
            $(this).removeClass("showup").addClass("current"),
            ThumbZoom(
              $(this).find("img").attr("data-src"),
              $(this).find(".faci-text h3").text()
            ),
            $(".show-box-pic").removeClass("showup"),
            !1
          );
        }))
      : $(".show-box-pic").on("click", function (e) {
          e.preventDefault(),
            e.stopPropagation(),
            $(".show-box-pic").removeClass("showup"),
            $(".dot-num, .dot-hover, .hover-li").removeClass("current"),
            $(this).addClass("showup");
          var t = $(this).attr("data-pic");
          return (
            $(".dot-num[data-name='" + t + "']").addClass("current"),
            $(".dot-hover[data-name='" + t + "']").addClass("current"),
            !1
          );
        });
}
function LinkPage() {
  $(".link-home, .link-load").on("click", function (e) {
    e.preventDefault();
    var t = $(this).attr("href");
    return (
      $(".mask").length &&
        ($(".mask").removeClass("hidden"), clickOpen.click()),
      $("body")
        .stop()
        .animate({ opacity: 1 }, 800, "linear", function () {
          window.location = t;
        }),
      !1
    );
  }),
    $(".disable-link").on("click", function (e) {
      return e.preventDefault(), !1;
    }),
    $(".link-blank").on("click", function (e) {
      e.preventDefault();
      var t = $(this).attr("href");
      return window.open(t, "_blank"), !1;
    });
}
function ContentLoad() {
  LinkPage(), FocusText(), NavClick(), Option(), ZoomPic(), onScroll();
  $(".container").attr("id"),
    $(".box-slider .group-central:nth-child(1)").attr("data-name");
  ($(".link-popup").length &&
    $(".link-popup").on("click", function (e) {
      e.preventDefault();
      var t = $(this).attr("href");
      $(".loadx").length ||
        $("body").append('<div class="loadx" style="display:block"></div>');
      var o = $(this).parents().offset().left,
        a = $(this).parents().offset().top;
      return (
        o &&
          a &&
          !Mobile.matches &&
          $(".overlay-dark").css({ top: a, left: o }),
        $("html, body").addClass("no-scroll"),
        $(".overlay-dark").addClass("show"),
        $(".news-content")
          .stop()
          .animate({ opacity: 0 }, 300, "linear", function () {
            popupLoad(t);
          }),
        !1
      );
    }),
  $("#home-page").length ||
    ($(".logo").css({ cursor: "pointer" }),
    $(".logo").on("click", function () {
      $(".link-home").trigger("click");
    }),
    setTimeout(function () {
      clickOpen.click();
    }, 500),
    setTimeout(function () {
      $(".loadicon-inner")
        .stop()
        .animate({ opacity: 0 }, 500, "linear", function () {
          $(".header, .footer").addClass("show"),
            $(".option-header").addClass("on"),
            $(".title-page").addClass("on-show"),
            $(".mask").addClass("hidden"),
            $(".loadicon-inner").remove();
        });
    }, 800)),
  $("#home-page").length &&
    (clickOpen.click(),
    hoverFaci(),
    $(".item-news-home, .item-library-home").on("click", function () {
      $(this).find("a").trigger("click");
    }),
    Mobile.matches &&
      ($(".map-img, .pointer-map").addClass("show"),
      $(".viewer").stop().animate({ scrollLeft: "100%" }, 300, "linear"))),
  $("#about-page").length &&
    ($(".wheel").addClass("show"),
    $(".box-nav").addClass("show"),
    Mobile.matches ||
      ($(".box-nav li.current").length &&
        setTimeout(function () {
          $(".box-nav li.current button").trigger("click");
        }, 1e3))),
  $("#location-page").length &&
    ($(".wheel").addClass("show"),
    $(".box-nav").addClass("show"),
    hoverFaci(),
    Mobile.matches
      ? $(".map-img, .pointer-map").addClass("show")
      : setTimeout(function () {
          $(".map-img, .pointer-map").addClass("show");
        }, 1e3),
    Mobile.matches ||
      ($(".box-nav li.current").length &&
        setTimeout(function () {
          $(".box-nav li.current button").trigger("click");
        }, 1e3))),
  $("#subdivision-page").length &&
    ($(".option-header").addClass("align-right"),
    $(".subdivision").addClass("display-none"),
    Mobile.matches && $(".dot-num").addClass("show"),
    hoverFaci(),
    $(".hover-li").on("click", function (e) {
      if ((e.preventDefault(), Mobile.matches)) {
        var t = $(this).attr("data-text");
        $(".show-division[data-name='" + t + "']").hasClass("open") &&
          $(".show-division[data-name='" + t + "']")
            .find(".link-blank")
            .trigger("click");
      }
      return !1;
    })),
  $("#facilities-page").length &&
    ($(".wheel").addClass("show"),
    $(".box-nav").addClass("show"),
    hoverFaci(),
    Mobile.matches && $(".dot-num").addClass("show"),
    Mobile.matches ||
      ($(".box-nav li.current").length &&
        setTimeout(function () {
          $(".box-nav li.current button").trigger("click");
        }, 1e3))),
  $("#news-page").length) &&
    ($(".outer").innerHeight() > $(window).height() - 210
      ? $(".wheel").addClass("show")
      : $(".option-header").addClass("align-right"),
    ScrollNiceB(),
    $(".link-page").on("click", function (e) {
      e.preventDefault(),
        $(".link-page").removeClass("current"),
        $(this).addClass("current");
      $(this).find(".view-news").attr("data-name");
      var t = $(this).find(".view-news").attr("href"),
        o = $(this).offset().left,
        a = $(this).offset().top;
      o && a && !Mobile.matches && $(".overlay-news").css({ top: a, left: o }),
        Mobile.matches && $(".news-content").removeClass("show"),
        $(
          ".title-page, .footer, .right-header, .option-header,.sub-menu"
        ).addClass("off"),
        $(".colum-box-news, .wrap-view-more, .overlay-news").addClass("show"),
        $(".news-list").addClass("hide show-list"),
        $(".scrollB").getNiceScroll().hide(),
        $(".loadx").length ||
          $("body").append('<div class="loadx" style="display:block"></div>');
      var l = $(this).find("a").attr("href"),
        s = $(this).find(".link-change-url").attr("data-title"),
        i = $(this).find(".link-change-url").attr("data-keyword"),
        n = $(this).find(".link-change-url").attr("data-description"),
        r = $(this).find("a").attr("data-name");
      return (
        changeUrl(l, s, n, i, r, s, n),
        Mobile.matches &&
          $(".container")
            .stop()
            .animate({ opacity: 0 }, 300, "linear", function () {
              $("html, body").animate({ scrollTop: 0 }, "fast");
            }),
        $(".news-content")
          .stop()
          .animate({ opacity: 0 }, 500, "linear", function () {
            NewsLoad(t);
          }),
        !1
      );
    }),
    $(".link-page.current").length && $(".link-page.current").trigger("click"));
  if (
    ($("#library-page").length &&
      ($(".wheel").addClass("show"),
      $(".box-nav").addClass("show"),
      $(".item-album, .item-video, .item-pdf").on("click", function () {
        Mobile.matches && $(this).find("a").trigger("click");
      }),
      Mobile.matches ||
        ($(".box-nav li.current").length &&
          setTimeout(function () {
            $(".box-nav li.current button").trigger("click");
          }, 1e3))),
    $("#progress-page").length)
  ) {
    $(".main-menu li.current").removeClass("current"),
      $(".select-header").bind("click", function () {
        $(".select-header").hasClass("onclick")
          ? ($(".select-header").removeClass("onclick"),
            $(this).next(".select-box").fadeOut(200, "linear"))
          : ($(this).addClass("onclick"),
            $(this).next(".select-box").fadeIn(200, "linear"),
            $(this)
              .closest(".select-list")
              .on("mouseleave", function () {
                $(this).find(".select-box").fadeOut(200, "linear"),
                  $(".select-header").removeClass("onclick");
              }));
      }),
      $(".select-box li a").on("click", function (e) {
        e.preventDefault(),
          $(".progress-list").removeClass("show"),
          $(this).parent().parent().find("li").removeClass("selected"),
          $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .find(".select-header h3")
            .text($(this).text()),
          $(this).parent().addClass("selected"),
          $(this).closest(".select-box").fadeOut(200, "linear"),
          $(".select-header").removeClass("onclick");
        $(this).attr("data-month");
        var t = $(this).attr("href"),
          o = $(this).find("h3").text();
        $(".loadx").length ||
          $(".loadicon").length ||
          $("body").append('<div class="loadx" style="display:block"></div>'),
          $(".scrollD").getNiceScroll().hide();
        var a = $(this).attr("href"),
          l = $(this).parent().find(".link-change-url").attr("data-title"),
          s = $(this).parent().find(".link-change-url").attr("data-keyword"),
          i = $(this)
            .parent()
            .find(".link-change-url")
            .attr("data-description"),
          n = $(this).attr("data-month");
        return (
          1 == isFirst && changeUrl(a, l, i, s, n, l, i),
          $(".progress-list")
            .stop()
            .animate({ opacity: 0 }, 500, "linear", function () {
              $(".wheel").removeClass("show"), LoadProgress(t, o);
            }),
          !1
        );
      }),
      $(".select-box li.selected").length
        ? $(".select-box li.selected a").trigger("click")
        : $(".select-box li:first a").trigger("click");
  }
  $("#contact-page").length &&
    ($(".wheel").addClass("show"),
    $(".box-nav").addClass("show"),
    Mobile.matches ||
      ($(".box-nav li.current").length &&
        setTimeout(function () {
          $(".box-nav li.current button").trigger("click");
        }, 1e3))),
    $("#thankyou-page").length,
    $(".popup-show").length
      ? setTimeout(function () {
          var e = $(".popup-show").attr("data-href");
          return (
            $("html, body").addClass("no-scroll"),
            $(".overlay-dark").addClass("show dark-level"),
            popupLoad(e),
            !1
          );
        }, 7e3)
      : $(".home-popup").length &&
        setTimeout(function () {
          var e = $(".home-popup").attr("data-href");
          return (
            $("html, body").addClass("no-scroll"),
            $(".overlay-dark").addClass("show dark-level"),
            popupLoad(e),
            !1
          );
        }, 7e3),
    setTimeout(function () {
      Dx();
    }, 7e3);
}
function ThumbZoom(e, t) {
  $("html, body").addClass("no-scroll"),
    $(this).parent().addClass("to-scroll"),
    $(".loadx").length ||
      $("body").append('<div class="loadx" style="display:block"></div>'),
    $(".all-pics").addClass("show"),
    $(".all-pics").append('<div class="full" ></div>'),
    $(".overlay-dark").addClass("show");
  var o = e;
  $(".all-pics")
    .find(".full")
    .append('<img src ="' + o + '" alt="pic" >'),
    $(".all-pics").find(".full").append("<span></span>");
  $("body").append(
    '<button class="close-pics" aria-label="close"><svg x="0px" y="0px" viewBox="0 0 50 50"><path opacity="0.5" fill="#FFFFFF" d="M24.57,46.57L6.64,36.18V15.07l17.93-11.7l18.79,11.67v21.17 L24.57,46.57z M10.35,34.04l14.27,8.26l15.04-8.29V17.1L24.62,7.77l-14.27,9.31V34.04z"/><path opacity="0.5" fill="#FFFFFF" d="M24.93,49.72L3.7,37.19V12.15L24.93,0.23L46.3,12.15v25.04l-0.23,0.13L24.93,49.72z M4.62,36.66l20.31,11.98l20.45-11.98V12.69L24.93,1.3L4.62,12.69V36.66z"/></svg></button>'
  ),
    null !== t &&
      $(".all-pics").prepend('<div class="text-length"><h3></h3></div>'),
    $(".all-pics img").on("load", function () {
      $(".all-pics").addClass("show"),
        $(".text-length h3").text(t),
        Mobile.matches && ($(".full").addClass("pinch-zoom"), itemZoom()),
        1 < $(".full img").length && $(".full img").last().remove(),
        $(".loadx").fadeOut(500, function () {
          Mobile.matches || detectMargin(),
            $(".close-pics").addClass("fadein"),
            $(".full img, .text-length").addClass("fadein"),
            $(".loadx").remove();
        });
    }),
    Mobile.matches ||
      $(".full span").on("click", function () {
        $(".close-pics").trigger("click");
      }),
    $(".close-pics").on("click", function () {
      $(".loadx").remove(),
        $(".full").fadeOut(300, "linear", function () {
          if (
            ($(".overlay-dark").removeClass("show"),
            $(
              ".all-pics .full, .all-pics .text-length, .all-pics .pinch-zoom-container"
            ).remove(),
            $(".close-pics").remove(),
            $(".all-pics").removeClass("show"),
            $("html, body").removeClass("no-scroll"),
            $(".to-scroll").length)
          ) {
            var e = $(".to-scroll").offset().top;
            Mobile.matches && $("html, body").scrollTop(e - 60),
              $(".to-scroll").removeClass("to-scroll");
          }
        });
    });
}
function ShareSocial() {
  if ($(".news-text").length) {
    var e =
      "https://www.facebook.com/sharer/sharer.php?u=" +
      encodeURI(window.location.href);
    $(".share-facebook").attr("href", e);
  }
}
function ZoomPic() {
  $("img").on("click", function () {
    if ($(this).hasClass("zoom-pic") && Mobile.matches) {
      $("html, body").addClass("no-scroll"),
        $(this).parent().addClass("to-scrollZ"),
        $(".loadx").length ||
          $("body").append('<div class="loadx" style="display:block"></div>');
      $(".all-pics").addClass("show"),
        $(".all-pics").append('<div class="full" ></div>'),
        $(".details-content").length
          ? $(".overlay-dark").addClass("level-index-in")
          : $(".overlay-dark").addClass("show");
      var e = $(this).attr("src");
      $(".all-pics")
        .find(".full")
        .append('<img src ="' + e + '" alt="pic" />'),
        $(".all-pics").find(".full").append("<span></span>"),
        $("body").append(
          '<button class="close-pics" aria-label="close"><svg x="0px" y="0px" viewBox="0 0 50 50"><path opacity="0.5" fill="#FFFFFF" d="M24.57,46.57L6.64,36.18V15.07l17.93-11.7l18.79,11.67v21.17 L24.57,46.57z M10.35,34.04l14.27,8.26l15.04-8.29V17.1L24.62,7.77l-14.27,9.31V34.04z"/><path opacity="0.5" fill="#FFFFFF" d="M24.93,49.72L3.7,37.19V12.15L24.93,0.23L46.3,12.15v25.04l-0.23,0.13L24.93,49.72z M4.62,36.66l20.31,11.98l20.45-11.98V12.69L24.93,1.3L4.62,12.69V36.66z"/></svg></button>'
        ),
        $(".all-pics img").on("load", function () {
          $(".all-pics").addClass("show"),
            Mobile.matches && ($(".full").addClass("pinch-zoom"), itemZoom()),
            1 < $(".full img").length && $(".full img").last().remove(),
            $(".loadx").fadeOut(400, "linear", function () {
              Mobile.matches || detectMargin(),
                $(".close-pics").addClass("fadein"),
                $(".full img").addClass("fadein"),
                $(".loadx").remove();
            });
        }),
        Mobile.matches ||
          $(".full span").on("click", function () {
            $(".close-pics").trigger("click");
          }),
        $(".close-pics").on("click", function () {
          $(".loadx").remove(),
            $(".full").fadeOut(300, "linear", function () {
              if (
                ($(
                  ".all-pics .full,  .all-pics .pinch-zoom-container"
                ).remove(),
                $(".close-pics").remove(),
                $(".all-pics").removeClass("show"),
                $(".details-content").length)
              )
                $(".overlay-dark").removeClass("level-index-in");
              else if (
                ($("html, body").removeClass("no-scroll"),
                $(".overlay-dark").removeClass("show"),
                $(".to-scrollZ").length)
              ) {
                var e = $(".to-scrollZ").offset().top;
                $(".to-scrollZ").removeClass("to-scrollZ"),
                  Mobile.matches && $("html, body").scrollTop(e - 60);
              }
            });
        });
    }
    return !1;
  });
}
function ScrollNiceA() {
  Mobile.matches
    ? ($(".scrollA").getNiceScroll().remove(),
      $(".scrollA").css({ "overflow-x": "visible", "overflow-y": "visible" }))
    : ($(".scrollA").css({ "overflow-x": "hidden", "overflow-y": "hidden" }),
      $(".scrollA").getNiceScroll().show(),
      $(".scrollA").niceScroll({
        touchbehavior: !0,
        horizrailenabled: !1,
        cursordragontouch: !0,
        grabcursorenabled: !1,
        cursorfixedheight: 200,
      }),
      $(".scrollA").animate({ scrollTop: "0px" }));
}
function ScrollNiceB() {
  Mobile.matches || 1 == Touch
    ? $(".scrollB").getNiceScroll().remove()
    : ($(".scrollB").css({ "overflow-x": "hidden", "overflow-y": "hidden" }),
      $(".scrollB").getNiceScroll().show(),
      $(".scrollB").niceScroll({
        touchbehavior: !0,
        horizrailenabled: !1,
        cursordragontouch: !0,
        grabcursorenabled: !1,
        zindex: 10,
      }),
      0 == News && $(".scrollB").animate({ scrollTop: "0px" }));
}
function ScrollNiceC() {
  Mobile.matches || 1 == Touch
    ? $(".scrollC").getNiceScroll().remove()
    : ($(".scrollC").css({ "overflow-x": "hidden", "overflow-y": "hidden" }),
      $(".scrollC").getNiceScroll().show(),
      $(".scrollC").niceScroll({
        touchbehavior: !0,
        horizrailenabled: !1,
        cursordragontouch: !0,
        grabcursorenabled: !1,
        zindex: 10,
      }),
      $(".scrollC").animate({ scrollTop: "0px" }));
}
function ScrollNiceD() {
  Mobile.matches || 1 == Touch
    ? $(".scrollD").getNiceScroll().remove()
    : ($(".scrollD").css({ "overflow-x": "hidden", "overflow-y": "hidden" }),
      $(".scrollD").getNiceScroll().show(),
      $(".scrollD").niceScroll({
        touchbehavior: !0,
        horizrailenabled: !1,
        cursordragontouch: !0,
        grabcursorenabled: !1,
        zindex: 10,
      }));
}
function ScrollNiceHide() {
  $(".scrollA").getNiceScroll().remove();
}
function Option() {
  var e = document.querySelector(".httptemplate")
    ? document.querySelector(".httptemplate").innerHTML
    : "";
  if (
    $(".view-album, .show-album").length &&
    !document.getElementById("slide_js")
  ) {
    var t = document.createElement("script");
    (t.id = "slide_js"),
      (t.src = e + "js/slide.js"),
      document.body.appendChild(t);
  }
  $(".view360, .v360").on("click", function (e) {
    e.preventDefault();
    var t = $(this).attr("data-href") || $(this).attr("href");
    return (
      $(".loadx").length ||
        $("body").append('<div class="loadx" style="display:block"></div>'),
      $("html, body").addClass("no-scroll"),
      $(".overlay-dark").addClass("show dark-level"),
      $(".degree-load").addClass("show"),
      $(".degree-load")
        .stop()
        .animate({ opacity: 0 }, 600, "linear", function () {
          Load360(t);
        }),
      !1
    );
  }),
    $(".download-pdf:not(.disable-link)").on("click", function (e) {
      e.preventDefault();
      var t = $(this).attr("href");
      return window.open(t, "_blank"), !1;
    }),
    $(".view-album:not(.link-load), .show-album").on("click", function (e) {
      e.preventDefault();
      var t = $(this).attr("data-href") || $(this).attr("href"),
        o = $(this).parent().parent().find("h3").text();
      return (
        $(".loadx").length ||
          $("body").append('<div class="loadx" style="display:block"></div>'),
        Dx(),
        $("html, body").addClass("no-scroll"),
        $(".overlay-dark").addClass("show level-index-in"),
        $(".all-album").fadeIn(300, "linear", function () {
          AlbumLoad(t, 0, o);
        }),
        !1
      );
    }),
    $(".zoom.album").on("click", function (e) {
      e.preventDefault(), $(this).parent().addClass("viewalbum");
      var t = $(this).attr("data-href") || $(this).attr("href"),
        o = $(this).parent().index();
      return (
        $(".loadx").length ||
          $("body").append('<div class="loadx" style="display:block"></div>'),
        Dx(),
        $("html, body").addClass("no-scroll"),
        $(".overlay-dark").addClass("show"),
        $(".all-album").fadeIn(300, "linear", function () {
          AlbumLoad(t, o);
        }),
        !1
      );
    }),
    $(".view-video, .player, .show-video").on("click", function (e) {
      e.preventDefault();
      var t = $(this).attr("data-href") || $(this).attr("href");
      Dx();
      var o = $(this).attr("data-embed");
      if (null != o)
        var a,
          l = o.match(
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
          ),
          s =
            '<iframe id="VYT" title="video" src="https://www.youtube.com/embed/' +
            (a = l && 11 == l[2].length ? l[2] : "no video found") +
            "?autoplay=1&enablejsapi=1&controls=1&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" +
            a +
            '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
      return (
        $(".loadx").length ||
          $("body").append('<div class="loadx" style="display:block"></div>'),
        $("html, body").addClass("no-scroll"),
        $(".overlay-dark").addClass("show"),
        $(".allvideo").fadeIn(300, "linear", function () {
          null != o ? VideoLoad(t, s) : VideoLoad(t);
        }),
        !1
      );
    }),
    $(".go-top").on("click", function () {
      Mobile.matches
        ? $("html, body").animate({ scrollTop: 0 }, "slow")
        : $(".box-nav").length
        ? $(".box-nav li:first-child:first-child").trigger("click")
        : $("html, body").animate({ scrollTop: 0 }, "slow");
    });
}
function turnWheelTouch() {
  doTouch = doWheel = !0;
}
function detectMargin() {
  var e = $(".full img").width(),
    t = $(".full  img").height(),
    o = innerHeight,
    a = innerWidth;
  e < a
    ? $(".full img").css({ "margin-left": a / 2 - e / 2 })
    : $(".full img").css({ "margin-left": 0 }),
    t < o
      ? $(".full img").css({ "margin-top": o / 2 - t / 2 })
      : $(".full img").css({ "margin-top": 0 });
}
function LocationHash() {
  var e = window.location.hash.slice(1);
  $(".select-box li a[data-month='" + e + "']").trigger("click"),
    $(".view-news[data-name='" + e + "']").trigger("click"),
    $(".box-nav li button[data-page='" + e + "']").trigger("click");
}
document.addEventListener("keydown", function (e) {
  var t = e.keyCode || e.which;
  38 === t && $(".box-nav li.current.current").prev().trigger("click"),
    40 === t && $(".box-nav li.current.current").next().trigger("click"),
    27 === t && $(".full img").length && $(".close-pics").trigger("click");
}),
  document.addEventListener(
    "scroll",
    function () {
      if (Mobile.matches) {
        var e = window.pageYOffset,
          t = $(
            ".group-central:nth-child(1) .box-cover, .group-central:nth-child(1) .bg-cover, .box-video-center"
          ).innerHeight();
        100 <= e
          ? $(".header").addClass("hide")
          : $(".header").removeClass("hide"),
          $(".box-video-center").length &&
            $(".home-video,.video-facilities,.home-experience,.location-video")
              .length &&
            $(".box-video-center").each(function (e, t) {
              Mobile.matches &&
                (isInViewport(t)
                  ? $(t).hasClass("onstream") ||
                    $(t).find(".player-vid").trigger("click")
                  : $(t).hasClass("onstream") &&
                    $(".onstream").find(".player-vid").trigger("click"));
            }),
          windscroll < e && t / 2 <= e
            ? $(".option-header").addClass("on")
            : $(".option-header").removeClass("on"),
          window.requestAnimationFrame(function () {
            onScroll();
          }),
          (windscroll = e);
      }
    },
    { passive: !0 }
  ),
  window.addEventListener("orientationchange", function (e) {
    ResizeWindows(), onScroll();
  }),
  $(window).on(
    "resize",
    function () {
      if ((ResizeWindows(), Mobile.matches)) {
        onScroll();
        if (
          ($("#home-page").length ||
            $(".header").hasClass("show") ||
            $(".header").addClass("show"),
          $("#home-page, #location-page").length &&
            ($(".map-img").hasClass("pinch-zoom") ||
              $(".pointer-map, .map-img").addClass("show")),
          $(".slide-library, .slide-library-pdf, .slide-partner").length &&
            $(".slide-library, .slide-library-pdf, .slide-partner").hasClass(
              "slide-slidebox"
            ) &&
            $(".slide-library, .slide-library-pdf, .slide-partner").each(
              function (e, t) {
                $(t).data("btq.slidebox").destroy();
              }
            ),
          $(".home-location .slide-drap").length &&
            ($(".home-location .slide-drap").hasClass("slide-slidebox") ||
              SlidePicture()),
          $(".scrollB,.scrollC, .scrollD").length &&
            $(".nicescroll-rails").length &&
            $(".scrollB,.scrollC, .scrollD").getNiceScroll().remove(),
          $("#news-page").length &&
            $(".colum-box-news").hasClass("show") &&
            $(".colum-box-news .language").length)
        ) {
          var e = $(".colum-box-news .language");
          $(".right-header .box-lang").append(e);
        }
      } else {
        $(".all-pics .pinch-zoom-container").length &&
          $(".close-pics").trigger("click"),
          $(".full img").length && detectMargin();
        $(".group-central").hasClass("show-text") ||
          ($(".go-top").removeClass("show"),
          BoxSlide(),
          $(".header").hasClass("show") ||
            $(".header, .footer").addClass("show"),
          $(".option-header").hasClass("on") ||
            $(".option-header").addClass("on")),
          $(".box-nav li").hasClass("current") ||
            $(".box-nav li:first-child").trigger("click"),
          $(".slide-library, .slide-library-pdf, .slide-partner").length &&
            ($(".slide-library, .slide-library-pdf, .slide-partner").hasClass(
              "slide-slidebox"
            ) ||
              SlidePicture()),
          $(".home-location .slide-drap").length &&
            $(".home-location .slide-drap").hasClass("slide-slidebox") &&
            $(".home-location .slide-drap").each(function (e, t) {
              $(t).data("btq.slidebox").destroy();
            }),
          $(".news-list").hasClass("hide") &&
            !$(".colum-box-news .nicescroll-rails").length &&
            setTimeout(function () {
              ScrollNiceC();
            }, 250),
          $(".scrollB").length &&
            !$(".nicescroll-rails").length &&
            setTimeout(function () {
              ScrollNiceB();
            }, 250),
          $(".scrollD").length &&
            !$(".nicescroll-rails").length &&
            setTimeout(function () {
              ScrollNiceD();
            }, 250);
      }
      $(".details-content").length &&
        ($(".details-center").innerHeight() > $(window).height()
          ? $(".details-content").addClass("no-after")
          : $(".details-content").removeClass("no-after"));
      $(".popup-details .news-text").length &&
        ($(".popup-details .news-text").innerHeight() > $(window).height()
          ? $(".scroll-popup").addClass("no-after")
          : $(".scroll-popup").hasClass("no-after") &&
            $(".scroll-popup").removeClass("no-after"));
    },
    250
  ),
  (window.onpopstate = function (e) {
    e.preventDefault();
    var t = document.querySelector(".httpserver").innerHTML;
    if (null !== history.state) {
      var o = history.state.path;
      history.state.dataName, history.state.title;
    } else o = document.URL;
    o.replace(t, "").split("/");
    $(".close-video").length && $(".close-video").trigger("click"),
      $(".close-album").length && $(".close-album").trigger("click"),
      $(".close-pics").length && $(".close-pics").trigger("click"),
      $(".close-map").length && $(".close-map").trigger("click"),
      $(".close-popup").length && $(".close-popup").trigger("click"),
      $(".register .close").length && $(".register .close").trigger("click"),
      $(".nav li a").each(function (e, t) {
        $(t).attr("href") == o && window.history.back();
      }),
      $(".news-text").length
        ? $(".close-news").trigger("click")
        : $(".link-page a").each(function (e, t) {
            $(t).attr("href") == o && $(t).trigger("click");
          }),
      $(".select-box li a").each(function (e, t) {
        $(t).attr("href") == o && $(t).trigger("click");
      }),
      Mobile.matches ||
        $(".box-nav li button").each(function (e, t) {
          $(t).attr("data-href") == o && $(t).trigger("click");
        });
  }),
  "serviceWorker" in navigator &&
    window.addEventListener("load", function () {
      if ($("#home-page").length) {
        var e = document.querySelector(".httpserver")
          ? document.querySelector(".httpserver").innerHTML
          : "";
        navigator.serviceWorker.register(e + "sw.js").then(
          function (e) {
            console.log(
              "ServiceWorker registration successful with scope: ",
              e.scope
            );
          },
          function (e) {
            console.log("ServiceWorker registration failed: ", e);
          }
        );
      }
    });
