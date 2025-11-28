/*!
 * Knockout JavaScript library v3.4.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
!(function (e) {
  var n = this || (0, eval)("this"),
    t = n.document,
    a = n.navigator,
    r = n.jQuery,
    i = n.JSON;
  !(function (e) {
    "function" == typeof define && define.amd
      ? define(["exports", "require"], e)
      : "object" == typeof exports && "object" == typeof module
      ? e(module.exports || exports)
      : e((n.ko = {}));
  })(function (o, u) {
    function c(e, n) {
      return (null === e || typeof e in k) && e === n;
    }
    function s(n, t) {
      var a;
      return function () {
        a ||
          (a = x.a.setTimeout(function () {
            (a = e), n();
          }, t));
      };
    }
    function f(e, n) {
      var t;
      return function () {
        clearTimeout(t), (t = x.a.setTimeout(e, n));
      };
    }
    function l(e, n) {
      n && n !== E
        ? "beforeChange" === n
          ? this.Kb(e)
          : this.Ha(e, n)
        : this.Lb(e);
    }
    function d(e, n) {
      null !== n && n.k && n.k();
    }
    function p(e, n) {
      var t = this.Hc,
        a = t[_];
      a.R ||
        (this.lb && this.Ma[n]
          ? (t.Pb(n, e, this.Ma[n]), (this.Ma[n] = null), --this.lb)
          : a.r[n] || t.Pb(n, e, a.s ? { ia: e } : t.uc(e)));
    }
    function h(e, n, t, a) {
      (x.d[e] = {
        init: function (e, r, i, o, u) {
          var c, s;
          return (
            x.m(
              function () {
                var i = x.a.c(r()),
                  o = !t != !i,
                  f = !s;
                (f || n || o !== c) &&
                  (f && x.va.Aa() && (s = x.a.ua(x.f.childNodes(e), !0)),
                  o
                    ? (f || x.f.da(e, x.a.ua(s)), x.eb(a ? a(u, i) : u, e))
                    : x.f.xa(e),
                  (c = o));
              },
              null,
              { i: e }
            ),
            { controlsDescendantBindings: !0 }
          );
        },
      }),
        (x.h.ta[e] = !1),
        (x.f.Z[e] = !0);
    }
    var b,
      v,
      g,
      m,
      y,
      w,
      x = void 0 !== o ? o : {};
    (x.b = function (e, n) {
      for (var t = e.split("."), a = x, r = 0; r < t.length - 1; r++)
        a = a[t[r]];
      a[t[t.length - 1]] = n;
    }),
      (x.G = function (e, n, t) {
        e[n] = t;
      }),
      (x.version = "3.4.0"),
      x.b("version", x.version),
      (x.options = { deferUpdates: !1, useOnlyNativeEvents: !1 }),
      (x.a = (function () {
        function o(e, n) {
          for (var t in e) e.hasOwnProperty(t) && n(t, e[t]);
        }
        function u(e, n) {
          if (n) for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
          return e;
        }
        function c(e, n) {
          return (e.__proto__ = n), e;
        }
        function s(e, n, t, a) {
          var r = e[n].match(v) || [];
          x.a.q(t.match(v), function (e) {
            x.a.pa(r, e, a);
          }),
            (e[n] = r.join(" "));
        }
        var f = { __proto__: [] } instanceof Array,
          l = "function" == typeof Symbol,
          d = {},
          p = {};
        (d[
          a && /Firefox\/2/i.test(a.userAgent) ? "KeyboardEvent" : "UIEvents"
        ] = ["keyup", "keydown", "keypress"]),
          (d.MouseEvents =
            "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(
              " "
            )),
          o(d, function (e, n) {
            if (n.length) for (var t = 0, a = n.length; t < a; t++) p[n[t]] = e;
          });
        var h = { propertychange: !0 },
          b =
            t &&
            (function () {
              for (
                var n = 3,
                  a = t.createElement("div"),
                  r = a.getElementsByTagName("i");
                (a.innerHTML =
                  "\x3c!--[if gt IE " + ++n + "]><i></i><![endif]--\x3e"),
                  r[0];

              );
              return 4 < n ? n : e;
            })(),
          v = /\S+/g;
        return {
          cc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
          q: function (e, n) {
            for (var t = 0, a = e.length; t < a; t++) n(e[t], t);
          },
          o: function (e, n) {
            if ("function" == typeof Array.prototype.indexOf)
              return Array.prototype.indexOf.call(e, n);
            for (var t = 0, a = e.length; t < a; t++) if (e[t] === n) return t;
            return -1;
          },
          Sb: function (e, n, t) {
            for (var a = 0, r = e.length; a < r; a++)
              if (n.call(t, e[a], a)) return e[a];
            return null;
          },
          La: function (e, n) {
            var t = x.a.o(e, n);
            0 < t ? e.splice(t, 1) : 0 === t && e.shift();
          },
          Tb: function (e) {
            for (var n = [], t = 0, a = (e = e || []).length; t < a; t++)
              0 > x.a.o(n, e[t]) && n.push(e[t]);
            return n;
          },
          fb: function (e, n) {
            for (var t = [], a = 0, r = (e = e || []).length; a < r; a++)
              t.push(n(e[a], a));
            return t;
          },
          Ka: function (e, n) {
            for (var t = [], a = 0, r = (e = e || []).length; a < r; a++)
              n(e[a], a) && t.push(e[a]);
            return t;
          },
          ra: function (e, n) {
            if (n instanceof Array) e.push.apply(e, n);
            else for (var t = 0, a = n.length; t < a; t++) e.push(n[t]);
            return e;
          },
          pa: function (e, n, t) {
            var a = x.a.o(x.a.zb(e), n);
            0 > a ? t && e.push(n) : t || e.splice(a, 1);
          },
          ka: f,
          extend: u,
          Xa: c,
          Ya: f ? c : u,
          D: o,
          Ca: function (e, n) {
            if (!e) return e;
            var t,
              a = {};
            for (t in e) e.hasOwnProperty(t) && (a[t] = n(e[t], t, e));
            return a;
          },
          ob: function (e) {
            for (; e.firstChild; ) x.removeNode(e.firstChild);
          },
          jc: function (e) {
            for (
              var n = (
                  ((e = x.a.V(e))[0] && e[0].ownerDocument) ||
                  t
                ).createElement("div"),
                a = 0,
                r = e.length;
              a < r;
              a++
            )
              n.appendChild(x.$(e[a]));
            return n;
          },
          ua: function (e, n) {
            for (var t = 0, a = e.length, r = []; t < a; t++) {
              var i = e[t].cloneNode(!0);
              r.push(n ? x.$(i) : i);
            }
            return r;
          },
          da: function (e, n) {
            if ((x.a.ob(e), n))
              for (var t = 0, a = n.length; t < a; t++) e.appendChild(n[t]);
          },
          qc: function (e, n) {
            var t = e.nodeType ? [e] : e;
            if (0 < t.length) {
              for (
                var a = t[0], r = a.parentNode, i = 0, o = n.length;
                i < o;
                i++
              )
                r.insertBefore(n[i], a);
              for (i = 0, o = t.length; i < o; i++) x.removeNode(t[i]);
            }
          },
          za: function (e, n) {
            if (e.length) {
              for (
                n = (8 === n.nodeType && n.parentNode) || n;
                e.length && e[0].parentNode !== n;

              )
                e.splice(0, 1);
              for (; 1 < e.length && e[e.length - 1].parentNode !== n; )
                e.length--;
              if (1 < e.length) {
                var t = e[0],
                  a = e[e.length - 1];
                for (e.length = 0; t !== a; ) e.push(t), (t = t.nextSibling);
                e.push(a);
              }
            }
            return e;
          },
          sc: function (e, n) {
            7 > b ? e.setAttribute("selected", n) : (e.selected = n);
          },
          $a: function (n) {
            return null === n || n === e
              ? ""
              : n.trim
              ? n.trim()
              : n.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
          },
          nd: function (e, n) {
            return (
              (e = e || ""),
              !(n.length > e.length) && e.substring(0, n.length) === n
            );
          },
          Mc: function (e, n) {
            if (e === n) return !0;
            if (11 === e.nodeType) return !1;
            if (n.contains)
              return n.contains(3 === e.nodeType ? e.parentNode : e);
            if (n.compareDocumentPosition)
              return 16 == (16 & n.compareDocumentPosition(e));
            for (; e && e != n; ) e = e.parentNode;
            return !!e;
          },
          nb: function (e) {
            return x.a.Mc(e, e.ownerDocument.documentElement);
          },
          Qb: function (e) {
            return !!x.a.Sb(e, x.a.nb);
          },
          A: function (e) {
            return e && e.tagName && e.tagName.toLowerCase();
          },
          Wb: function (e) {
            return x.onError
              ? function () {
                  try {
                    return e.apply(this, arguments);
                  } catch (e) {
                    throw (x.onError && x.onError(e), e);
                  }
                }
              : e;
          },
          setTimeout: function (e, n) {
            return setTimeout(x.a.Wb(e), n);
          },
          $b: function (e) {
            setTimeout(function () {
              throw (x.onError && x.onError(e), e);
            }, 0);
          },
          p: function (e, n, t) {
            var a = x.a.Wb(t);
            if (((t = b && h[n]), x.options.useOnlyNativeEvents || t || !r))
              if (t || "function" != typeof e.addEventListener) {
                if (void 0 === e.attachEvent)
                  throw Error(
                    "Browser doesn't support addEventListener or attachEvent"
                  );
                var i = function (n) {
                    a.call(e, n);
                  },
                  o = "on" + n;
                e.attachEvent(o, i),
                  x.a.F.oa(e, function () {
                    e.detachEvent(o, i);
                  });
              } else e.addEventListener(n, a, !1);
            else r(e).bind(n, a);
          },
          Da: function (e, a) {
            if (!e || !e.nodeType)
              throw Error(
                "element must be a DOM node when calling triggerEvent"
              );
            var i;
            if (
              ((i =
                !(
                  "input" !== x.a.A(e) ||
                  !e.type ||
                  "click" != a.toLowerCase()
                ) &&
                ("checkbox" == (i = e.type) || "radio" == i)),
              x.options.useOnlyNativeEvents || !r || i)
            )
              if ("function" == typeof t.createEvent) {
                if ("function" != typeof e.dispatchEvent)
                  throw Error(
                    "The supplied element doesn't support dispatchEvent"
                  );
                (i = t.createEvent(p[a] || "HTMLEvents")).initEvent(
                  a,
                  !0,
                  !0,
                  n,
                  0,
                  0,
                  0,
                  0,
                  0,
                  !1,
                  !1,
                  !1,
                  !1,
                  0,
                  e
                ),
                  e.dispatchEvent(i);
              } else if (i && e.click) e.click();
              else {
                if (void 0 === e.fireEvent)
                  throw Error("Browser doesn't support triggering events");
                e.fireEvent("on" + a);
              }
            else r(e).trigger(a);
          },
          c: function (e) {
            return x.H(e) ? e() : e;
          },
          zb: function (e) {
            return x.H(e) ? e.t() : e;
          },
          bb: function (e, n, t) {
            var a;
            n &&
              ("object" == typeof e.classList
                ? ((a = e.classList[t ? "add" : "remove"]),
                  x.a.q(n.match(v), function (n) {
                    a.call(e.classList, n);
                  }))
                : "string" == typeof e.className.baseVal
                ? s(e.className, "baseVal", n, t)
                : s(e, "className", n, t));
          },
          Za: function (n, t) {
            var a = x.a.c(t);
            (null !== a && a !== e) || (a = "");
            var r = x.f.firstChild(n);
            !r || 3 != r.nodeType || x.f.nextSibling(r)
              ? x.f.da(n, [n.ownerDocument.createTextNode(a)])
              : (r.data = a),
              x.a.Rc(n);
          },
          rc: function (e, n) {
            if (((e.name = n), 7 >= b))
              try {
                e.mergeAttributes(
                  t.createElement("<input name='" + e.name + "'/>"),
                  !1
                );
              } catch (e) {}
          },
          Rc: function (e) {
            9 <= b &&
              (e = 1 == e.nodeType ? e : e.parentNode).style &&
              (e.style.zoom = e.style.zoom);
          },
          Nc: function (e) {
            if (b) {
              var n = e.style.width;
              (e.style.width = 0), (e.style.width = n);
            }
          },
          hd: function (e, n) {
            (e = x.a.c(e)), (n = x.a.c(n));
            for (var t = [], a = e; a <= n; a++) t.push(a);
            return t;
          },
          V: function (e) {
            for (var n = [], t = 0, a = e.length; t < a; t++) n.push(e[t]);
            return n;
          },
          Yb: function (e) {
            return l ? Symbol(e) : e;
          },
          rd: 6 === b,
          sd: 7 === b,
          C: b,
          ec: function (e, n) {
            for (
              var t = x.a
                  .V(e.getElementsByTagName("input"))
                  .concat(x.a.V(e.getElementsByTagName("textarea"))),
                a =
                  "string" == typeof n
                    ? function (e) {
                        return e.name === n;
                      }
                    : function (e) {
                        return n.test(e.name);
                      },
                r = [],
                i = t.length - 1;
              0 <= i;
              i--
            )
              a(t[i]) && r.push(t[i]);
            return r;
          },
          ed: function (e) {
            return "string" == typeof e && (e = x.a.$a(e))
              ? i && i.parse
                ? i.parse(e)
                : new Function("return " + e)()
              : null;
          },
          Eb: function (e, n, t) {
            if (!i || !i.stringify)
              throw Error(
                "Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"
              );
            return i.stringify(x.a.c(e), n, t);
          },
          fd: function (e, n, a) {
            var r = (a = a || {}).params || {},
              i = a.includeFields || this.cc,
              u = e;
            if ("object" == typeof e && "form" === x.a.A(e)) {
              u = e.action;
              for (var c = i.length - 1; 0 <= c; c--)
                for (var s = x.a.ec(e, i[c]), f = s.length - 1; 0 <= f; f--)
                  r[s[f].name] = s[f].value;
            }
            n = x.a.c(n);
            var l = t.createElement("form");
            for (var d in ((l.style.display = "none"),
            (l.action = u),
            (l.method = "post"),
            n))
              ((e = t.createElement("input")).type = "hidden"),
                (e.name = d),
                (e.value = x.a.Eb(x.a.c(n[d]))),
                l.appendChild(e);
            o(r, function (e, n) {
              var a = t.createElement("input");
              (a.type = "hidden"),
                (a.name = e),
                (a.value = n),
                l.appendChild(a);
            }),
              t.body.appendChild(l),
              a.submitter ? a.submitter(l) : l.submit(),
              setTimeout(function () {
                l.parentNode.removeChild(l);
              }, 0);
          },
        };
      })()),
      x.b("utils", x.a),
      x.b("utils.arrayForEach", x.a.q),
      x.b("utils.arrayFirst", x.a.Sb),
      x.b("utils.arrayFilter", x.a.Ka),
      x.b("utils.arrayGetDistinctValues", x.a.Tb),
      x.b("utils.arrayIndexOf", x.a.o),
      x.b("utils.arrayMap", x.a.fb),
      x.b("utils.arrayPushAll", x.a.ra),
      x.b("utils.arrayRemoveItem", x.a.La),
      x.b("utils.extend", x.a.extend),
      x.b("utils.fieldsIncludedWithJsonPost", x.a.cc),
      x.b("utils.getFormFields", x.a.ec),
      x.b("utils.peekObservable", x.a.zb),
      x.b("utils.postJson", x.a.fd),
      x.b("utils.parseJson", x.a.ed),
      x.b("utils.registerEventHandler", x.a.p),
      x.b("utils.stringifyJson", x.a.Eb),
      x.b("utils.range", x.a.hd),
      x.b("utils.toggleDomNodeCssClass", x.a.bb),
      x.b("utils.triggerEvent", x.a.Da),
      x.b("utils.unwrapObservable", x.a.c),
      x.b("utils.objectForEach", x.a.D),
      x.b("utils.addOrRemoveItem", x.a.pa),
      x.b("utils.setTextContent", x.a.Za),
      x.b("unwrap", x.a.c),
      Function.prototype.bind ||
        (Function.prototype.bind = function (e) {
          var n = this;
          if (1 === arguments.length)
            return function () {
              return n.apply(e, arguments);
            };
          var t = Array.prototype.slice.call(arguments, 1);
          return function () {
            var a = t.slice(0);
            return a.push.apply(a, arguments), n.apply(e, a);
          };
        }),
      (x.a.e = new (function () {
        function n(n, i) {
          var o = n[a];
          if (!o || "null" === o || !r[o]) {
            if (!i) return e;
            (o = n[a] = "ko" + t++), (r[o] = {});
          }
          return r[o];
        }
        var t = 0,
          a = "__ko__" + new Date().getTime(),
          r = {};
        return {
          get: function (t, a) {
            var r = n(t, !1);
            return r === e ? e : r[a];
          },
          set: function (t, a, r) {
            (r === e && n(t, !1) === e) || (n(t, !0)[a] = r);
          },
          clear: function (e) {
            var n = e[a];
            return !!n && (delete r[n], (e[a] = null), !0);
          },
          I: function () {
            return t++ + a;
          },
        };
      })()),
      x.b("utils.domData", x.a.e),
      x.b("utils.domData.clear", x.a.e.clear),
      (x.a.F = new (function () {
        function n(n, t) {
          var r = x.a.e.get(n, a);
          return r === e && t && ((r = []), x.a.e.set(n, a, r)), r;
        }
        function t(e) {
          if ((a = n(e, !1)))
            for (var a = a.slice(0), r = 0; r < a.length; r++) a[r](e);
          if ((x.a.e.clear(e), x.a.F.cleanExternalData(e), o[e.nodeType]))
            for (a = e.firstChild; (e = a); )
              (a = e.nextSibling), 8 === e.nodeType && t(e);
        }
        var a = x.a.e.I(),
          i = { 1: !0, 8: !0, 9: !0 },
          o = { 1: !0, 9: !0 };
        return {
          oa: function (e, t) {
            if ("function" != typeof t)
              throw Error("Callback must be a function");
            n(e, !0).push(t);
          },
          pc: function (t, r) {
            var i = n(t, !1);
            i && (x.a.La(i, r), 0 == i.length && x.a.e.set(t, a, e));
          },
          $: function (e) {
            if (i[e.nodeType] && (t(e), o[e.nodeType])) {
              var n = [];
              x.a.ra(n, e.getElementsByTagName("*"));
              for (var a = 0, r = n.length; a < r; a++) t(n[a]);
            }
            return e;
          },
          removeNode: function (e) {
            x.$(e), e.parentNode && e.parentNode.removeChild(e);
          },
          cleanExternalData: function (e) {
            r && "function" == typeof r.cleanData && r.cleanData([e]);
          },
        };
      })()),
      (x.$ = x.a.F.$),
      (x.removeNode = x.a.F.removeNode),
      x.b("cleanNode", x.$),
      x.b("removeNode", x.removeNode),
      x.b("utils.domNodeDisposal", x.a.F),
      x.b("utils.domNodeDisposal.addDisposeCallback", x.a.F.oa),
      x.b("utils.domNodeDisposal.removeDisposeCallback", x.a.F.pc),
      (b = [0, "", ""]),
      (y = {
        thead: (v = [1, "<table>", "</table>"]),
        tbody: v,
        tfoot: v,
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: (g = [3, "<table><tbody><tr>", "</tr></tbody></table>"]),
        th: g,
        option: (m = [1, "<select multiple='multiple'>", "</select>"]),
        optgroup: m,
      }),
      (w = 8 >= x.a.C),
      (x.a.ma = function (e, a) {
        var i;
        if (r) {
          if (r.parseHTML) i = r.parseHTML(e, a) || [];
          else if ((i = r.clean([e], a)) && i[0]) {
            for (var o = i[0]; o.parentNode && 11 !== o.parentNode.nodeType; )
              o = o.parentNode;
            o.parentNode && o.parentNode.removeChild(o);
          }
        } else {
          (i = a) || (i = t), (o = i.parentWindow || i.defaultView || n);
          var u,
            c = x.a.$a(e).toLowerCase(),
            s = i.createElement("div");
          for (
            u = ((c = c.match(/^<([a-z]+)[ >]/)) && y[c[1]]) || b,
              c = u[0],
              u = "ignored<div>" + u[1] + e + u[2] + "</div>",
              "function" == typeof o.innerShiv
                ? s.appendChild(o.innerShiv(u))
                : (w && i.appendChild(s),
                  (s.innerHTML = u),
                  w && s.parentNode.removeChild(s));
            c--;

          )
            s = s.lastChild;
          i = x.a.V(s.lastChild.childNodes);
        }
        return i;
      }),
      (x.a.Cb = function (n, t) {
        if ((x.a.ob(n), null !== (t = x.a.c(t)) && t !== e))
          if (("string" != typeof t && (t = t.toString()), r)) r(n).html(t);
          else
            for (var a = x.a.ma(t, n.ownerDocument), i = 0; i < a.length; i++)
              n.appendChild(a[i]);
      }),
      x.b("utils.parseHtmlFragment", x.a.ma),
      x.b("utils.setHtml", x.a.Cb),
      (x.M = (function () {
        function n(e, t) {
          if (e)
            if (8 == e.nodeType)
              null != (a = x.M.lc(e.nodeValue)) && t.push({ Lc: e, cd: a });
            else if (1 == e.nodeType)
              for (var a = 0, r = e.childNodes, i = r.length; a < i; a++)
                n(r[a], t);
        }
        var t = {};
        return {
          wb: function (e) {
            if ("function" != typeof e)
              throw Error(
                "You can only pass a function to ko.memoization.memoize()"
              );
            var n =
              ((4294967296 * (1 + Math.random())) | 0)
                .toString(16)
                .substring(1) +
              ((4294967296 * (1 + Math.random())) | 0)
                .toString(16)
                .substring(1);
            return (t[n] = e), "\x3c!--[ko_memo:" + n + "]--\x3e";
          },
          xc: function (n, a) {
            var r = t[n];
            if (r === e)
              throw Error(
                "Couldn't find any memo with ID " +
                  n +
                  ". Perhaps it's already been unmemoized."
              );
            try {
              return r.apply(null, a || []), !0;
            } finally {
              delete t[n];
            }
          },
          yc: function (e, t) {
            var a = [];
            n(e, a);
            for (var r = 0, i = a.length; r < i; r++) {
              var o = a[r].Lc,
                u = [o];
              t && x.a.ra(u, t),
                x.M.xc(a[r].cd, u),
                (o.nodeValue = ""),
                o.parentNode && o.parentNode.removeChild(o);
            }
          },
          lc: function (e) {
            return (e = e.match(/^\[ko_memo\:(.*?)\]$/)) ? e[1] : null;
          },
        };
      })()),
      x.b("memoization", x.M),
      x.b("memoization.memoize", x.M.wb),
      x.b("memoization.unmemoize", x.M.xc),
      x.b("memoization.parseMemoText", x.M.lc),
      x.b("memoization.unmemoizeDomNodeAndDescendants", x.M.yc),
      (x.Y = (function () {
        function e() {
          if (i)
            for (var e, n = i, t = 0; u < i; )
              if ((e = r[u++])) {
                if (u > n) {
                  if (5e3 <= ++t) {
                    (u = i),
                      x.a.$b(
                        Error(
                          "'Too much recursion' after processing " +
                            t +
                            " task groups."
                        )
                      );
                    break;
                  }
                  n = i;
                }
                try {
                  e();
                } catch (e) {
                  x.a.$b(e);
                }
              }
        }
        function a() {
          e(), (u = i = r.length = 0);
        }
        var r = [],
          i = 0,
          o = 1,
          u = 0;
        return {
          scheduler: n.MutationObserver
            ? (function (e) {
                var n = t.createElement("div");
                return (
                  new MutationObserver(e).observe(n, { attributes: !0 }),
                  function () {
                    n.classList.toggle("foo");
                  }
                );
              })(a)
            : t && "onreadystatechange" in t.createElement("script")
            ? function (e) {
                var n = t.createElement("script");
                (n.onreadystatechange = function () {
                  (n.onreadystatechange = null),
                    t.documentElement.removeChild(n),
                    (n = null),
                    e();
                }),
                  t.documentElement.appendChild(n);
              }
            : function (e) {
                setTimeout(e, 0);
              },
          Wa: function (e) {
            return i || x.Y.scheduler(a), (r[i++] = e), o++;
          },
          cancel: function (e) {
            (e -= o - i) >= u && e < i && (r[e] = null);
          },
          resetForTesting: function () {
            var e = i - u;
            return (u = i = r.length = 0), e;
          },
          md: e,
        };
      })()),
      x.b("tasks", x.Y),
      x.b("tasks.schedule", x.Y.Wa),
      x.b("tasks.runEarly", x.Y.md),
      (x.ya = {
        throttle: function (e, n) {
          e.throttleEvaluation = n;
          var t = null;
          return x.B({
            read: e,
            write: function (a) {
              clearTimeout(t),
                (t = x.a.setTimeout(function () {
                  e(a);
                }, n));
            },
          });
        },
        rateLimit: function (e, n) {
          var t, a, r;
          "number" == typeof n ? (t = n) : ((t = n.timeout), (a = n.method)),
            (e.cb = !1),
            (r = "notifyWhenChangesStop" == a ? f : s),
            e.Ta(function (e) {
              return r(e, t);
            });
        },
        deferred: function (n, t) {
          if (!0 !== t)
            throw Error(
              "The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled."
            );
          n.cb ||
            ((n.cb = !0),
            n.Ta(function (t) {
              var a;
              return function () {
                x.Y.cancel(a), (a = x.Y.Wa(t)), n.notifySubscribers(e, "dirty");
              };
            }));
        },
        notify: function (e, n) {
          e.equalityComparer = "always" == n ? null : c;
        },
      });
    var k = { undefined: 1, boolean: 1, number: 1, string: 1 };
    x.b("extenders", x.ya),
      (x.vc = function (e, n, t) {
        (this.ia = e),
          (this.gb = n),
          (this.Kc = t),
          (this.R = !1),
          x.G(this, "dispose", this.k);
      }),
      (x.vc.prototype.k = function () {
        (this.R = !0), this.Kc();
      }),
      (x.J = function () {
        x.a.Ya(this, T), T.rb(this);
      });
    var E = "change",
      T = {
        rb: function (e) {
          (e.K = {}), (e.Nb = 1);
        },
        X: function (e, n, t) {
          var a = this;
          t = t || E;
          var r = new x.vc(a, n ? e.bind(n) : e, function () {
            x.a.La(a.K[t], r), a.Ia && a.Ia(t);
          });
          return a.sa && a.sa(t), a.K[t] || (a.K[t] = []), a.K[t].push(r), r;
        },
        notifySubscribers: function (e, n) {
          if (((n = n || E) === E && this.zc(), this.Pa(n)))
            try {
              x.l.Ub();
              for (var t, a = this.K[n].slice(0), r = 0; (t = a[r]); ++r)
                t.R || t.gb(e);
            } finally {
              x.l.end();
            }
        },
        Na: function () {
          return this.Nb;
        },
        Uc: function (e) {
          return this.Na() !== e;
        },
        zc: function () {
          ++this.Nb;
        },
        Ta: function (e) {
          var n,
            t,
            a,
            r = this,
            i = x.H(r);
          r.Ha || ((r.Ha = r.notifySubscribers), (r.notifySubscribers = l));
          var o = e(function () {
            (r.Mb = !1),
              i && a === r && (a = r()),
              (n = !1),
              r.tb(t, a) && r.Ha((t = a));
          });
          (r.Lb = function (e) {
            (r.Mb = n = !0), (a = e), o();
          }),
            (r.Kb = function (e) {
              n || ((t = e), r.Ha(e, "beforeChange"));
            });
        },
        Pa: function (e) {
          return this.K[e] && this.K[e].length;
        },
        Sc: function (e) {
          if (e) return (this.K[e] && this.K[e].length) || 0;
          var n = 0;
          return (
            x.a.D(this.K, function (e, t) {
              "dirty" !== e && (n += t.length);
            }),
            n
          );
        },
        tb: function (e, n) {
          return !this.equalityComparer || !this.equalityComparer(e, n);
        },
        extend: function (e) {
          var n = this;
          return (
            e &&
              x.a.D(e, function (e, t) {
                var a = x.ya[e];
                "function" == typeof a && (n = a(n, t) || n);
              }),
            n
          );
        },
      };
    x.G(T, "subscribe", T.X),
      x.G(T, "extend", T.extend),
      x.G(T, "getSubscriptionsCount", T.Sc),
      x.a.ka && x.a.Xa(T, Function.prototype),
      (x.J.fn = T),
      (x.hc = function (e) {
        return (
          null != e &&
          "function" == typeof e.X &&
          "function" == typeof e.notifySubscribers
        );
      }),
      x.b("subscribable", x.J),
      x.b("isSubscribable", x.hc),
      (x.va = x.l =
        (function () {
          function e(e) {
            a.push(t), (t = e);
          }
          function n() {
            t = a.pop();
          }
          var t,
            a = [],
            r = 0;
          return {
            Ub: e,
            end: n,
            oc: function (e) {
              if (t) {
                if (!x.hc(e))
                  throw Error(
                    "Only subscribable things can act as dependencies"
                  );
                t.gb.call(t.Gc, e, e.Cc || (e.Cc = ++r));
              }
            },
            w: function (t, a, r) {
              try {
                return e(), t.apply(a, r || []);
              } finally {
                n();
              }
            },
            Aa: function () {
              if (t) return t.m.Aa();
            },
            Sa: function () {
              if (t) return t.Sa;
            },
          };
        })()),
      x.b("computedContext", x.va),
      x.b("computedContext.getDependenciesCount", x.va.Aa),
      x.b("computedContext.isInitial", x.va.Sa),
      x.b("ignoreDependencies", (x.qd = x.l.w));
    var C = x.a.Yb("_latestValue");
    x.N = function (e) {
      function n() {
        return 0 < arguments.length
          ? (n.tb(n[C], arguments[0]) &&
              (n.ga(), (n[C] = arguments[0]), n.fa()),
            this)
          : (x.l.oc(n), n[C]);
      }
      return (
        (n[C] = e),
        x.a.ka || x.a.extend(n, x.J.fn),
        x.J.fn.rb(n),
        x.a.Ya(n, N),
        x.options.deferUpdates && x.ya.deferred(n, !0),
        n
      );
    };
    var N = {
      equalityComparer: c,
      t: function () {
        return this[C];
      },
      fa: function () {
        this.notifySubscribers(this[C]);
      },
      ga: function () {
        this.notifySubscribers(this[C], "beforeChange");
      },
    };
    x.a.ka && x.a.Xa(N, x.J.fn);
    var S = (x.N.gd = "__ko_proto__");
    (N[S] = x.N),
      (x.Oa = function (n, t) {
        return (
          null !== n && n !== e && n[S] !== e && (n[S] === t || x.Oa(n[S], t))
        );
      }),
      (x.H = function (e) {
        return x.Oa(e, x.N);
      }),
      (x.Ba = function (e) {
        return !!(
          ("function" == typeof e && e[S] === x.N) ||
          ("function" == typeof e && e[S] === x.B && e.Vc)
        );
      }),
      x.b("observable", x.N),
      x.b("isObservable", x.H),
      x.b("isWriteableObservable", x.Ba),
      x.b("isWritableObservable", x.Ba),
      x.b("observable.fn", N),
      x.G(N, "peek", N.t),
      x.G(N, "valueHasMutated", N.fa),
      x.G(N, "valueWillMutate", N.ga),
      (x.la = function (e) {
        if ("object" != typeof (e = e || []) || !("length" in e))
          throw Error(
            "The argument passed when initializing an observable array must be an array, or null, or undefined."
          );
        return (
          (e = x.N(e)), x.a.Ya(e, x.la.fn), e.extend({ trackArrayChanges: !0 })
        );
      }),
      (x.la.fn = {
        remove: function (e) {
          for (
            var n = this.t(),
              t = [],
              a =
                "function" != typeof e || x.H(e)
                  ? function (n) {
                      return n === e;
                    }
                  : e,
              r = 0;
            r < n.length;
            r++
          ) {
            var i = n[r];
            a(i) &&
              (0 === t.length && this.ga(), t.push(i), n.splice(r, 1), r--);
          }
          return t.length && this.fa(), t;
        },
        removeAll: function (n) {
          if (n === e) {
            var t = this.t(),
              a = t.slice(0);
            return this.ga(), t.splice(0, t.length), this.fa(), a;
          }
          return n
            ? this.remove(function (e) {
                return 0 <= x.a.o(n, e);
              })
            : [];
        },
        destroy: function (e) {
          var n = this.t(),
            t =
              "function" != typeof e || x.H(e)
                ? function (n) {
                    return n === e;
                  }
                : e;
          this.ga();
          for (var a = n.length - 1; 0 <= a; a--)
            t(n[a]) && (n[a]._destroy = !0);
          this.fa();
        },
        destroyAll: function (n) {
          return n === e
            ? this.destroy(function () {
                return !0;
              })
            : n
            ? this.destroy(function (e) {
                return 0 <= x.a.o(n, e);
              })
            : [];
        },
        indexOf: function (e) {
          var n = this();
          return x.a.o(n, e);
        },
        replace: function (e, n) {
          var t = this.indexOf(e);
          0 <= t && (this.ga(), (this.t()[t] = n), this.fa());
        },
      }),
      x.a.ka && x.a.Xa(x.la.fn, x.N.fn),
      x.a.q(
        "pop push reverse shift sort splice unshift".split(" "),
        function (e) {
          x.la.fn[e] = function () {
            var n = this.t();
            this.ga(), this.Vb(n, e, arguments);
            var t = n[e].apply(n, arguments);
            return this.fa(), t === n ? this : t;
          };
        }
      ),
      x.a.q(["slice"], function (e) {
        x.la.fn[e] = function () {
          var n = this();
          return n[e].apply(n, arguments);
        };
      }),
      x.b("observableArray", x.la),
      (x.ya.trackArrayChanges = function (e, n) {
        function t() {
          if (!r) {
            r = !0;
            var n = e.notifySubscribers;
            e.notifySubscribers = function (e, t) {
              return (t && t !== E) || ++o, n.apply(this, arguments);
            };
            var t = [].concat(e.t() || []);
            (i = null),
              (a = e.X(function (n) {
                var a;
                (n = [].concat(n || [])),
                  e.Pa("arrayChange") &&
                    ((!i || 1 < o) && (i = x.a.ib(t, n, e.hb)), (a = i)),
                  (t = n),
                  (i = null),
                  (o = 0),
                  a && a.length && e.notifySubscribers(a, "arrayChange");
              }));
          }
        }
        if (
          ((e.hb = {}),
          n && "object" == typeof n && x.a.extend(e.hb, n),
          (e.hb.sparse = !0),
          !e.Vb)
        ) {
          var a,
            r = !1,
            i = null,
            o = 0,
            u = e.sa,
            c = e.Ia;
          (e.sa = function (n) {
            u && u.call(e, n), "arrayChange" === n && t();
          }),
            (e.Ia = function (n) {
              c && c.call(e, n),
                "arrayChange" !== n || e.Pa("arrayChange") || (a.k(), (r = !1));
            }),
            (e.Vb = function (e, n, t) {
              function a(e, n, t) {
                return (u[u.length] = { status: e, value: n, index: t });
              }
              if (r && !o) {
                var u = [],
                  c = e.length,
                  s = t.length,
                  f = 0;
                switch (n) {
                  case "push":
                    f = c;
                  case "unshift":
                    for (n = 0; n < s; n++) a("added", t[n], f + n);
                    break;
                  case "pop":
                    f = c - 1;
                  case "shift":
                    c && a("deleted", e[f], f);
                    break;
                  case "splice":
                    (n = Math.min(Math.max(0, 0 > t[0] ? c + t[0] : t[0]), c)),
                      (c = 1 === s ? c : Math.min(n + (t[1] || 0), c)),
                      (s = n + s - 2),
                      (f = Math.max(c, s));
                    for (var l = [], d = [], p = 2; n < f; ++n, ++p)
                      n < c && d.push(a("deleted", e[n], n)),
                        n < s && l.push(a("added", t[p], n));
                    x.a.dc(d, l);
                    break;
                  default:
                    return;
                }
                i = u;
              }
            });
        }
      });
    var _ = x.a.Yb("_state");
    x.m = x.B = function (n, t, a) {
      function r() {
        if (0 < arguments.length) {
          if ("function" != typeof i)
            throw Error(
              "Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters."
            );
          return i.apply(o.pb, arguments), this;
        }
        return x.l.oc(r), (o.S || (o.s && r.Qa())) && r.aa(), o.T;
      }
      if (
        ("object" == typeof n ? (a = n) : ((a = a || {}), n && (a.read = n)),
        "function" != typeof a.read)
      )
        throw Error(
          "Pass a function that returns the value of the ko.computed"
        );
      var i = a.write,
        o = {
          T: e,
          S: !0,
          Ra: !1,
          Fb: !1,
          R: !1,
          Va: !1,
          s: !1,
          jd: a.read,
          pb: t || a.owner,
          i: a.disposeWhenNodeIsRemoved || a.i || null,
          wa: a.disposeWhen || a.wa,
          mb: null,
          r: {},
          L: 0,
          bc: null,
        };
      return (
        (r[_] = o),
        (r.Vc = "function" == typeof i),
        x.a.ka || x.a.extend(r, x.J.fn),
        x.J.fn.rb(r),
        x.a.Ya(r, D),
        a.pure
          ? ((o.Va = !0), (o.s = !0), x.a.extend(r, B))
          : a.deferEvaluation && x.a.extend(r, A),
        x.options.deferUpdates && x.ya.deferred(r, !0),
        o.i && ((o.Fb = !0), o.i.nodeType || (o.i = null)),
        o.s || a.deferEvaluation || r.aa(),
        o.i &&
          r.ba() &&
          x.a.F.oa(
            o.i,
            (o.mb = function () {
              r.k();
            })
          ),
        r
      );
    };
    var D = {
        equalityComparer: c,
        Aa: function () {
          return this[_].L;
        },
        Pb: function (e, n, t) {
          if (this[_].Va && n === this)
            throw Error("A 'pure' computed must not be called recursively");
          (this[_].r[e] = t), (t.Ga = this[_].L++), (t.na = n.Na());
        },
        Qa: function () {
          var e,
            n,
            t = this[_].r;
          for (e in t)
            if (t.hasOwnProperty(e) && (n = t[e]).ia.Uc(n.na)) return !0;
        },
        bd: function () {
          this.Fa && !this[_].Ra && this.Fa();
        },
        ba: function () {
          return this[_].S || 0 < this[_].L;
        },
        ld: function () {
          this.Mb || this.ac();
        },
        uc: function (e) {
          if (e.cb && !this[_].i) {
            var n = e.X(this.bd, this, "dirty"),
              t = e.X(this.ld, this);
            return {
              ia: e,
              k: function () {
                n.k(), t.k();
              },
            };
          }
          return e.X(this.ac, this);
        },
        ac: function () {
          var e = this,
            n = e.throttleEvaluation;
          n && 0 <= n
            ? (clearTimeout(this[_].bc),
              (this[_].bc = x.a.setTimeout(function () {
                e.aa(!0);
              }, n)))
            : e.Fa
            ? e.Fa()
            : e.aa(!0);
        },
        aa: function (e) {
          var n = this[_],
            t = n.wa;
          if (!n.Ra && !n.R) {
            if ((n.i && !x.a.nb(n.i)) || (t && t())) {
              if (!n.Fb) return void this.k();
            } else n.Fb = !1;
            n.Ra = !0;
            try {
              this.Qc(e);
            } finally {
              n.Ra = !1;
            }
            n.L || this.k();
          }
        },
        Qc: function (n) {
          var t = this[_],
            a = t.Va ? e : !t.L,
            r = { Hc: this, Ma: t.r, lb: t.L };
          x.l.Ub({ Gc: r, gb: p, m: this, Sa: a }),
            (t.r = {}),
            (t.L = 0),
            (r = this.Pc(t, r)),
            this.tb(t.T, r) &&
              (t.s || this.notifySubscribers(t.T, "beforeChange"),
              (t.T = r),
              t.s ? this.zc() : n && this.notifySubscribers(t.T)),
            a && this.notifySubscribers(t.T, "awake");
        },
        Pc: function (e, n) {
          try {
            var t = e.jd;
            return e.pb ? t.call(e.pb) : t();
          } finally {
            x.l.end(), n.lb && !e.s && x.a.D(n.Ma, d), (e.S = !1);
          }
        },
        t: function () {
          var e = this[_];
          return ((e.S && !e.L) || (e.s && this.Qa())) && this.aa(), e.T;
        },
        Ta: function (e) {
          x.J.fn.Ta.call(this, e),
            (this.Fa = function () {
              this.Kb(this[_].T), (this[_].S = !0), this.Lb(this);
            });
        },
        k: function () {
          var e = this[_];
          !e.s &&
            e.r &&
            x.a.D(e.r, function (e, n) {
              n.k && n.k();
            }),
            e.i && e.mb && x.a.F.pc(e.i, e.mb),
            (e.r = null),
            (e.L = 0),
            (e.R = !0),
            (e.S = !1),
            (e.s = !1),
            (e.i = null);
        },
      },
      B = {
        sa: function (e) {
          var n = this,
            t = n[_];
          if (!t.R && t.s && "change" == e) {
            if (((t.s = !1), t.S || n.Qa()))
              (t.r = null), (t.L = 0), (t.S = !0), n.aa();
            else {
              var a = [];
              x.a.D(t.r, function (e, n) {
                a[n.Ga] = e;
              }),
                x.a.q(a, function (e, a) {
                  var r = t.r[e],
                    i = n.uc(r.ia);
                  (i.Ga = a), (i.na = r.na), (t.r[e] = i);
                });
            }
            t.R || n.notifySubscribers(t.T, "awake");
          }
        },
        Ia: function (n) {
          var t = this[_];
          t.R ||
            "change" != n ||
            this.Pa("change") ||
            (x.a.D(t.r, function (e, n) {
              n.k && ((t.r[e] = { ia: n.ia, Ga: n.Ga, na: n.na }), n.k());
            }),
            (t.s = !0),
            this.notifySubscribers(e, "asleep"));
        },
        Na: function () {
          var e = this[_];
          return e.s && (e.S || this.Qa()) && this.aa(), x.J.fn.Na.call(this);
        },
      },
      A = {
        sa: function (e) {
          ("change" != e && "beforeChange" != e) || this.t();
        },
      };
    x.a.ka && x.a.Xa(D, x.J.fn);
    var O = x.N.gd;
    (x.m[O] = x.N),
      (D[O] = x.m),
      (x.Xc = function (e) {
        return x.Oa(e, x.m);
      }),
      (x.Yc = function (e) {
        return x.Oa(e, x.m) && e[_] && e[_].Va;
      }),
      x.b("computed", x.m),
      x.b("dependentObservable", x.m),
      x.b("isComputed", x.Xc),
      x.b("isPureComputed", x.Yc),
      x.b("computed.fn", D),
      x.G(D, "peek", D.t),
      x.G(D, "dispose", D.k),
      x.G(D, "isActive", D.ba),
      x.G(D, "getDependenciesCount", D.Aa),
      (x.nc = function (e, n) {
        return "function" == typeof e
          ? x.m(e, n, { pure: !0 })
          : (((e = x.a.extend({}, e)).pure = !0), x.m(e, n));
      }),
      x.b("pureComputed", x.nc),
      (function () {
        function n(a, r, i) {
          if (
            ((i = i || new t()),
            "object" != typeof (a = r(a)) ||
              null === a ||
              a === e ||
              a instanceof RegExp ||
              a instanceof Date ||
              a instanceof String ||
              a instanceof Number ||
              a instanceof Boolean)
          )
            return a;
          var o = a instanceof Array ? [] : {};
          return (
            i.save(a, o),
            (function (e, n) {
              if (e instanceof Array) {
                for (var t = 0; t < e.length; t++) n(t);
                "function" == typeof e.toJSON && n("toJSON");
              } else for (t in e) n(t);
            })(a, function (t) {
              var u = r(a[t]);
              switch (typeof u) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                  o[t] = u;
                  break;
                case "object":
                case "undefined":
                  var c = i.get(u);
                  o[t] = c !== e ? c : n(u, r, i);
              }
            }),
            o
          );
        }
        function t() {
          (this.keys = []), (this.Ib = []);
        }
        (x.wc = function (e) {
          if (0 == arguments.length)
            throw Error(
              "When calling ko.toJS, pass the object you want to convert."
            );
          return n(e, function (e) {
            for (var n = 0; x.H(e) && 10 > n; n++) e = e();
            return e;
          });
        }),
          (x.toJSON = function (e, n, t) {
            return (e = x.wc(e)), x.a.Eb(e, n, t);
          }),
          (t.prototype = {
            save: function (e, n) {
              var t = x.a.o(this.keys, e);
              0 <= t ? (this.Ib[t] = n) : (this.keys.push(e), this.Ib.push(n));
            },
            get: function (n) {
              return 0 <= (n = x.a.o(this.keys, n)) ? this.Ib[n] : e;
            },
          });
      })(),
      x.b("toJS", x.wc),
      x.b("toJSON", x.toJSON),
      (x.j = {
        u: function (n) {
          switch (x.a.A(n)) {
            case "option":
              return !0 === n.__ko__hasDomDataOptionValue__
                ? x.a.e.get(n, x.d.options.xb)
                : 7 >= x.a.C
                ? n.getAttributeNode("value") &&
                  n.getAttributeNode("value").specified
                  ? n.value
                  : n.text
                : n.value;
            case "select":
              return 0 <= n.selectedIndex
                ? x.j.u(n.options[n.selectedIndex])
                : e;
            default:
              return n.value;
          }
        },
        ha: function (n, t, a) {
          switch (x.a.A(n)) {
            case "option":
              "string" == typeof t
                ? (x.a.e.set(n, x.d.options.xb, e),
                  "__ko__hasDomDataOptionValue__" in n &&
                    delete n.__ko__hasDomDataOptionValue__,
                  (n.value = t))
                : (x.a.e.set(n, x.d.options.xb, t),
                  (n.__ko__hasDomDataOptionValue__ = !0),
                  (n.value = "number" == typeof t ? t : ""));
              break;
            case "select":
              ("" !== t && null !== t) || (t = e);
              for (var r, i = -1, o = 0, u = n.options.length; o < u; ++o)
                if ((r = x.j.u(n.options[o])) == t || ("" == r && t === e)) {
                  i = o;
                  break;
                }
              (a || 0 <= i || (t === e && 1 < n.size)) && (n.selectedIndex = i);
              break;
            default:
              (null !== t && t !== e) || (t = ""), (n.value = t);
          }
        },
      }),
      x.b("selectExtensions", x.j),
      x.b("selectExtensions.readValue", x.j.u),
      x.b("selectExtensions.writeValue", x.j.ha),
      (x.h = (function () {
        function e(e) {
          123 === (e = x.a.$a(e)).charCodeAt(0) && (e = e.slice(1, -1));
          var n,
            t = [],
            o = e.match(a),
            u = [],
            c = 0;
          if (o) {
            o.push(",");
            for (var s, f = 0; (s = o[f]); ++f) {
              var l = s.charCodeAt(0);
              if (44 === l) {
                if (0 >= c) {
                  t.push(
                    n && u.length
                      ? { key: n, value: u.join("") }
                      : { unknown: n || u.join("") }
                  ),
                    (n = c = 0),
                    (u = []);
                  continue;
                }
              } else if (58 === l) {
                if (!c && !n && 1 === u.length) {
                  n = u.pop();
                  continue;
                }
              } else
                47 === l && f && 1 < s.length
                  ? (l = o[f - 1].match(r)) &&
                    !i[l[0]] &&
                    ((o = (e = e.substr(e.indexOf(s) + 1)).match(a)).push(","),
                    (f = -1),
                    (s = "/"))
                  : 40 === l || 123 === l || 91 === l
                  ? ++c
                  : 41 === l || 125 === l || 93 === l
                  ? --c
                  : n ||
                    u.length ||
                    (34 !== l && 39 !== l) ||
                    (s = s.slice(1, -1));
              u.push(s);
            }
          }
          return t;
        }
        var n = ["true", "false", "null", "undefined"],
          t = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
          a = RegExp(
            "\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]",
            "g"
          ),
          r = /[\])"'A-Za-z0-9_$]+$/,
          i = { in: 1, return: 1, typeof: 1 },
          o = {};
        return {
          ta: [],
          ea: o,
          yb: e,
          Ua: function (a, r) {
            function i(e, a) {
              var r;
              if (!f) {
                var l = x.getBindingHandler(e);
                if (l && l.preprocess && !(a = l.preprocess(a, e, i))) return;
                (l = o[e]) &&
                  ((r = a),
                  0 <= x.a.o(n, r)
                    ? (r = !1)
                    : ((l = r.match(t)),
                      (r =
                        null !== l &&
                        (l[1] ? "Object(" + l[1] + ")" + l[2] : r))),
                  (l = r)),
                  l && c.push("'" + e + "':function(_z){" + r + "=_z}");
              }
              s && (a = "function(){return " + a + " }"),
                u.push("'" + e + "':" + a);
            }
            var u = [],
              c = [],
              s = (r = r || {}).valueAccessors,
              f = r.bindingParams,
              l = "string" == typeof a ? e(a) : a;
            return (
              x.a.q(l, function (e) {
                i(e.key || e.unknown, e.value);
              }),
              c.length && i("_ko_property_writers", "{" + c.join(",") + " }"),
              u.join(",")
            );
          },
          ad: function (e, n) {
            for (var t = 0; t < e.length; t++) if (e[t].key == n) return !0;
            return !1;
          },
          Ea: function (e, n, t, a, r) {
            e && x.H(e)
              ? !x.Ba(e) || (r && e.t() === a) || e(a)
              : (e = n.get("_ko_property_writers")) && e[t] && e[t](a);
          },
        };
      })()),
      x.b("expressionRewriting", x.h),
      x.b("expressionRewriting.bindingRewriteValidators", x.h.ta),
      x.b("expressionRewriting.parseObjectLiteral", x.h.yb),
      x.b("expressionRewriting.preProcessBindings", x.h.Ua),
      x.b("expressionRewriting._twoWayBindings", x.h.ea),
      x.b("jsonExpressionRewriting", x.h),
      x.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", x.h.Ua),
      (function () {
        function e(e) {
          return 8 == e.nodeType && o.test(i ? e.text : e.nodeValue);
        }
        function n(e) {
          return 8 == e.nodeType && u.test(i ? e.text : e.nodeValue);
        }
        function a(t, a) {
          for (var r = t, i = 1, o = []; (r = r.nextSibling); ) {
            if (n(r) && 0 == --i) return o;
            o.push(r), e(r) && i++;
          }
          if (!a)
            throw Error(
              "Cannot find closing comment tag to match: " + t.nodeValue
            );
          return null;
        }
        function r(e, n) {
          var t = a(e, n);
          return t
            ? 0 < t.length
              ? t[t.length - 1].nextSibling
              : e.nextSibling
            : null;
        }
        var i = t && "\x3c!--test--\x3e" === t.createComment("test").text,
          o = i
            ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/
            : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
          u = i ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
          c = { ul: !0, ol: !0 };
        x.f = {
          Z: {},
          childNodes: function (n) {
            return e(n) ? a(n) : n.childNodes;
          },
          xa: function (n) {
            if (e(n))
              for (var t = 0, a = (n = x.f.childNodes(n)).length; t < a; t++)
                x.removeNode(n[t]);
            else x.a.ob(n);
          },
          da: function (n, t) {
            if (e(n)) {
              x.f.xa(n);
              for (var a = n.nextSibling, r = 0, i = t.length; r < i; r++)
                a.parentNode.insertBefore(t[r], a);
            } else x.a.da(n, t);
          },
          mc: function (n, t) {
            e(n)
              ? n.parentNode.insertBefore(t, n.nextSibling)
              : n.firstChild
              ? n.insertBefore(t, n.firstChild)
              : n.appendChild(t);
          },
          gc: function (n, t, a) {
            a
              ? e(n)
                ? n.parentNode.insertBefore(t, a.nextSibling)
                : a.nextSibling
                ? n.insertBefore(t, a.nextSibling)
                : n.appendChild(t)
              : x.f.mc(n, t);
          },
          firstChild: function (t) {
            return e(t)
              ? !t.nextSibling || n(t.nextSibling)
                ? null
                : t.nextSibling
              : t.firstChild;
          },
          nextSibling: function (t) {
            return (
              e(t) && (t = r(t)),
              t.nextSibling && n(t.nextSibling) ? null : t.nextSibling
            );
          },
          Tc: e,
          pd: function (e) {
            return (e = (i ? e.text : e.nodeValue).match(o)) ? e[1] : null;
          },
          kc: function (t) {
            if (c[x.a.A(t)]) {
              var a = t.firstChild;
              if (a)
                do {
                  if (1 === a.nodeType) {
                    var i,
                      o = null;
                    if ((i = a.firstChild))
                      do {
                        if (o) o.push(i);
                        else if (e(i)) {
                          var u = r(i, !0);
                          u ? (i = u) : (o = [i]);
                        } else n(i) && (o = [i]);
                      } while ((i = i.nextSibling));
                    if ((i = o))
                      for (o = a.nextSibling, u = 0; u < i.length; u++)
                        o ? t.insertBefore(i[u], o) : t.appendChild(i[u]);
                  }
                } while ((a = a.nextSibling));
            }
          },
        };
      })(),
      x.b("virtualElements", x.f),
      x.b("virtualElements.allowedBindings", x.f.Z),
      x.b("virtualElements.emptyNode", x.f.xa),
      x.b("virtualElements.insertAfter", x.f.gc),
      x.b("virtualElements.prepend", x.f.mc),
      x.b("virtualElements.setDomNodeChildren", x.f.da),
      (x.Q = function () {
        this.Fc = {};
      }),
      x.a.extend(x.Q.prototype, {
        nodeHasBindings: function (e) {
          switch (e.nodeType) {
            case 1:
              return (
                null != e.getAttribute("data-bind") ||
                x.g.getComponentNameForNode(e)
              );
            case 8:
              return x.f.Tc(e);
            default:
              return !1;
          }
        },
        getBindings: function (e, n) {
          var t = (t = this.getBindingsString(e, n))
            ? this.parseBindingsString(t, n, e)
            : null;
          return x.g.Ob(t, e, n, !1);
        },
        getBindingAccessors: function (e, n) {
          var t = (t = this.getBindingsString(e, n))
            ? this.parseBindingsString(t, n, e, { valueAccessors: !0 })
            : null;
          return x.g.Ob(t, e, n, !0);
        },
        getBindingsString: function (e) {
          switch (e.nodeType) {
            case 1:
              return e.getAttribute("data-bind");
            case 8:
              return x.f.pd(e);
            default:
              return null;
          }
        },
        parseBindingsString: function (e, n, t, a) {
          try {
            var r,
              i = this.Fc,
              o = e + ((a && a.valueAccessors) || "");
            if (!(r = i[o])) {
              var u,
                c =
                  "with($context){with($data||{}){return{" +
                  x.h.Ua(e, a) +
                  "}}}";
              (u = new Function("$context", "$element", c)), (r = i[o] = u);
            }
            return r(n, t);
          } catch (n) {
            throw (
              ((n.message =
                "Unable to parse bindings.\nBindings value: " +
                e +
                "\nMessage: " +
                n.message),
              n)
            );
          }
        },
      }),
      (x.Q.instance = new x.Q()),
      x.b("bindingProvider", x.Q),
      (function () {
        function t(e) {
          return function () {
            return e;
          };
        }
        function a(e) {
          return e();
        }
        function i(e) {
          return x.a.Ca(x.l.w(e), function (n, t) {
            return function () {
              return e()[t];
            };
          });
        }
        function o(e, n, a) {
          return "function" == typeof e ? i(e.bind(null, n, a)) : x.a.Ca(e, t);
        }
        function u(e, n) {
          return i(this.getBindings.bind(this, e, n));
        }
        function c(e, n, t) {
          var a,
            r = x.f.firstChild(n),
            i = x.Q.instance,
            o = i.preprocessNode;
          if (o) {
            for (; (a = r); ) (r = x.f.nextSibling(a)), o.call(i, a);
            r = x.f.firstChild(n);
          }
          for (; (a = r); ) (r = x.f.nextSibling(a)), s(e, a, t);
        }
        function s(e, n, t) {
          var a = !0,
            r = 1 === n.nodeType;
          r && x.f.kc(n),
            ((r && t) || x.Q.instance.nodeHasBindings(n)) &&
              (a = f(n, null, e, t).shouldBindDescendants),
            a && !d[x.a.A(n)] && c(e, n, !r);
        }
        function f(n, t, r, i) {
          var o,
            c,
            s = x.a.e.get(n, p);
          if (!t) {
            if (s)
              throw Error(
                "You cannot apply bindings multiple times to the same element."
              );
            x.a.e.set(n, p, !0);
          }
          if ((!s && i && x.tc(n, r), t && "function" != typeof t)) o = t;
          else {
            var f = x.Q.instance,
              l = f.getBindingAccessors || u,
              d = x.B(
                function () {
                  return (o = t ? t(r, n) : l.call(f, n, r)) && r.P && r.P(), o;
                },
                null,
                { i: n }
              );
            (o && d.ba()) || (d = null);
          }
          if (o) {
            var h = d
                ? function (e) {
                    return function () {
                      return a(d()[e]);
                    };
                  }
                : function (e) {
                    return o[e];
                  },
              b = function () {
                return x.a.Ca(d ? d() : o, a);
              };
            (b.get = function (e) {
              return o[e] && a(h(e));
            }),
              (b.has = function (e) {
                return e in o;
              }),
              (i = (function (e) {
                var n = [],
                  t = {},
                  a = [];
                return (
                  x.a.D(e, function r(i) {
                    if (!t[i]) {
                      var o = x.getBindingHandler(i);
                      o &&
                        (o.after &&
                          (a.push(i),
                          x.a.q(o.after, function (n) {
                            if (e[n]) {
                              if (-1 !== x.a.o(a, n))
                                throw Error(
                                  "Cannot combine the following bindings, because they have a cyclic dependency: " +
                                    a.join(", ")
                                );
                              r(n);
                            }
                          }),
                          a.length--),
                        n.push({ key: i, fc: o })),
                        (t[i] = !0);
                    }
                  }),
                  n
                );
              })(o)),
              x.a.q(i, function (t) {
                var a = t.fc.init,
                  i = t.fc.update,
                  u = t.key;
                if (8 === n.nodeType && !x.f.Z[u])
                  throw Error(
                    "The binding '" +
                      u +
                      "' cannot be used with virtual elements"
                  );
                try {
                  "function" == typeof a &&
                    x.l.w(function () {
                      var t = a(n, h(u), b, r.$data, r);
                      if (t && t.controlsDescendantBindings) {
                        if (c !== e)
                          throw Error(
                            "Multiple bindings (" +
                              c +
                              " and " +
                              u +
                              ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element."
                          );
                        c = u;
                      }
                    }),
                    "function" == typeof i &&
                      x.B(
                        function () {
                          i(n, h(u), b, r.$data, r);
                        },
                        null,
                        { i: n }
                      );
                } catch (e) {
                  throw (
                    ((e.message =
                      'Unable to process binding "' +
                      u +
                      ": " +
                      o[u] +
                      '"\nMessage: ' +
                      e.message),
                    e)
                  );
                }
              });
          }
          return { shouldBindDescendants: c === e };
        }
        function l(e) {
          return e && e instanceof x.U ? e : new x.U(e);
        }
        x.d = {};
        var d = { script: !0, textarea: !0, template: !0 };
        (x.getBindingHandler = function (e) {
          return x.d[e];
        }),
          (x.U = function (n, t, a, r) {
            var i,
              o = this,
              u = "function" == typeof n && !x.H(n),
              c = x.B(
                function () {
                  var e = u ? n() : n,
                    i = x.a.c(e);
                  return (
                    t
                      ? (t.P && t.P(), x.a.extend(o, t), c && (o.P = c))
                      : ((o.$parents = []), (o.$root = i), (o.ko = x)),
                    (o.$rawData = e),
                    (o.$data = i),
                    a && (o[a] = i),
                    r && r(o, t, i),
                    o.$data
                  );
                },
                null,
                {
                  wa: function () {
                    return i && !x.a.Qb(i);
                  },
                  i: !0,
                }
              );
            c.ba() &&
              ((o.P = c),
              (c.equalityComparer = null),
              (i = []),
              (c.Ac = function (n) {
                i.push(n),
                  x.a.F.oa(n, function (n) {
                    x.a.La(i, n), i.length || (c.k(), (o.P = c = e));
                  });
              }));
          }),
          (x.U.prototype.createChildContext = function (e, n, t) {
            return new x.U(e, this, n, function (e, n) {
              (e.$parentContext = n),
                (e.$parent = n.$data),
                (e.$parents = (n.$parents || []).slice(0)),
                e.$parents.unshift(e.$parent),
                t && t(e);
            });
          }),
          (x.U.prototype.extend = function (e) {
            return new x.U(this.P || this.$data, this, null, function (n, t) {
              (n.$rawData = t.$rawData),
                x.a.extend(n, "function" == typeof e ? e() : e);
            });
          });
        var p = x.a.e.I(),
          h = x.a.e.I();
        (x.tc = function (e, n) {
          if (2 != arguments.length) return x.a.e.get(e, h);
          x.a.e.set(e, h, n), n.P && n.P.Ac(e);
        }),
          (x.Ja = function (e, n, t) {
            return 1 === e.nodeType && x.f.kc(e), f(e, n, l(t), !0);
          }),
          (x.Dc = function (e, n, t) {
            return (t = l(t)), x.Ja(e, o(n, t, e), t);
          }),
          (x.eb = function (e, n) {
            (1 !== n.nodeType && 8 !== n.nodeType) || c(l(e), n, !0);
          }),
          (x.Rb = function (e, t) {
            if (
              (!r && n.jQuery && (r = n.jQuery),
              t && 1 !== t.nodeType && 8 !== t.nodeType)
            )
              throw Error(
                "ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"
              );
            (t = t || n.document.body), s(l(e), t, !0);
          }),
          (x.kb = function (n) {
            switch (n.nodeType) {
              case 1:
              case 8:
                var t = x.tc(n);
                if (t) return t;
                if (n.parentNode) return x.kb(n.parentNode);
            }
            return e;
          }),
          (x.Jc = function (n) {
            return (n = x.kb(n)) ? n.$data : e;
          }),
          x.b("bindingHandlers", x.d),
          x.b("applyBindings", x.Rb),
          x.b("applyBindingsToDescendants", x.eb),
          x.b("applyBindingAccessorsToNode", x.Ja),
          x.b("applyBindingsToNode", x.Dc),
          x.b("contextFor", x.kb),
          x.b("dataFor", x.Jc);
      })(),
      (function (e) {
        function n(n, a) {
          var o,
            u = r.hasOwnProperty(n) ? r[n] : e;
          u
            ? u.X(a)
            : ((u = r[n] = new x.J()).X(a),
              t(n, function (e, t) {
                var a = !(!t || !t.synchronous);
                (i[n] = { definition: e, Zc: a }),
                  delete r[n],
                  o || a
                    ? u.notifySubscribers(e)
                    : x.Y.Wa(function () {
                        u.notifySubscribers(e);
                      });
              }),
              (o = !0));
        }
        function t(e, n) {
          a("getConfig", [e], function (t) {
            t
              ? a("loadComponent", [e, t], function (e) {
                  n(e, t);
                })
              : n(null, null);
          });
        }
        function a(n, t, r, i) {
          i || (i = x.g.loaders.slice(0));
          var o = i.shift();
          if (o) {
            var u = o[n];
            if (u) {
              var c = !1;
              if (
                u.apply(
                  o,
                  t.concat(function (e) {
                    c ? r(null) : null !== e ? r(e) : a(n, t, r, i);
                  })
                ) !== e &&
                ((c = !0), !o.suppressLoaderExceptions)
              )
                throw Error(
                  "Component loaders must supply values by invoking the callback, not by returning values synchronously."
                );
            } else a(n, t, r, i);
          } else r(null);
        }
        var r = {},
          i = {};
        (x.g = {
          get: function (t, a) {
            var r = i.hasOwnProperty(t) ? i[t] : e;
            r
              ? r.Zc
                ? x.l.w(function () {
                    a(r.definition);
                  })
                : x.Y.Wa(function () {
                    a(r.definition);
                  })
              : n(t, a);
          },
          Xb: function (e) {
            delete i[e];
          },
          Jb: a,
        }),
          (x.g.loaders = []),
          x.b("components", x.g),
          x.b("components.get", x.g.get),
          x.b("components.clearCachedDefinition", x.g.Xb);
      })(),
      (function () {
        function e(e, n, t, a) {
          function r() {
            0 == --u && a(i);
          }
          var i = {},
            u = 2,
            c = t.template;
          (t = t.viewModel),
            c
              ? o(n, c, function (n) {
                  x.g.Jb("loadTemplate", [e, n], function (e) {
                    (i.template = e), r();
                  });
                })
              : r(),
            t
              ? o(n, t, function (n) {
                  x.g.Jb("loadViewModel", [e, n], function (e) {
                    (i[f] = e), r();
                  });
                })
              : r();
        }
        function a(e, n, t) {
          if ("function" == typeof n)
            t(function (e) {
              return new n(e);
            });
          else if ("function" == typeof n[f]) t(n[f]);
          else if ("instance" in n) {
            var r = n.instance;
            t(function () {
              return r;
            });
          } else
            "viewModel" in n
              ? a(e, n.viewModel, t)
              : e("Unknown viewModel value: " + n);
        }
        function r(e) {
          switch (x.a.A(e)) {
            case "script":
              return x.a.ma(e.text);
            case "textarea":
              return x.a.ma(e.value);
            case "template":
              if (i(e.content)) return x.a.ua(e.content.childNodes);
          }
          return x.a.ua(e.childNodes);
        }
        function i(e) {
          return n.DocumentFragment
            ? e instanceof DocumentFragment
            : e && 11 === e.nodeType;
        }
        function o(e, t, a) {
          "string" == typeof t.require
            ? u || n.require
              ? (u || n.require)([t.require], a)
              : e("Uses require, but no AMD loader is present")
            : a(t);
        }
        function c(e) {
          return function (n) {
            throw Error("Component '" + e + "': " + n);
          };
        }
        var s = {};
        (x.g.register = function (e, n) {
          if (!n) throw Error("Invalid configuration for " + e);
          if (x.g.ub(e))
            throw Error("Component " + e + " is already registered");
          s[e] = n;
        }),
          (x.g.ub = function (e) {
            return s.hasOwnProperty(e);
          }),
          (x.g.od = function (e) {
            delete s[e], x.g.Xb(e);
          }),
          (x.g.Zb = {
            getConfig: function (e, n) {
              n(s.hasOwnProperty(e) ? s[e] : null);
            },
            loadComponent: function (n, t, a) {
              var r = c(n);
              o(r, t, function (t) {
                e(n, r, t, a);
              });
            },
            loadTemplate: function (e, a, o) {
              if (((e = c(e)), "string" == typeof a)) o(x.a.ma(a));
              else if (a instanceof Array) o(a);
              else if (i(a)) o(x.a.V(a.childNodes));
              else if (a.element)
                if (
                  ((a = a.element),
                  n.HTMLElement
                    ? a instanceof HTMLElement
                    : a && a.tagName && 1 === a.nodeType)
                )
                  o(r(a));
                else if ("string" == typeof a) {
                  var u = t.getElementById(a);
                  u ? o(r(u)) : e("Cannot find element with ID " + a);
                } else e("Unknown element type: " + a);
              else e("Unknown template value: " + a);
            },
            loadViewModel: function (e, n, t) {
              a(c(e), n, t);
            },
          });
        var f = "createViewModel";
        x.b("components.register", x.g.register),
          x.b("components.isRegistered", x.g.ub),
          x.b("components.unregister", x.g.od),
          x.b("components.defaultLoader", x.g.Zb),
          x.g.loaders.push(x.g.Zb),
          (x.g.Bc = s);
      })(),
      (function () {
        function e(e, t) {
          if ((a = e.getAttribute("params"))) {
            var a = n.parseBindingsString(a, t, e, {
                valueAccessors: !0,
                bindingParams: !0,
              }),
              r =
                ((a = x.a.Ca(a, function (n) {
                  return x.m(n, null, { i: e });
                })),
                x.a.Ca(a, function (n) {
                  var t = n.t();
                  return n.ba()
                    ? x.m({
                        read: function () {
                          return x.a.c(n());
                        },
                        write:
                          x.Ba(t) &&
                          function (e) {
                            n()(e);
                          },
                        i: e,
                      })
                    : t;
                }));
            return r.hasOwnProperty("$raw") || (r.$raw = a), r;
          }
          return { $raw: {} };
        }
        (x.g.getComponentNameForNode = function (e) {
          var n = x.a.A(e);
          if (
            x.g.ub(n) &&
            (-1 != n.indexOf("-") ||
              "[object HTMLUnknownElement]" == "" + e ||
              (8 >= x.a.C && e.tagName === n))
          )
            return n;
        }),
          (x.g.Ob = function (n, t, a, r) {
            if (1 === t.nodeType) {
              var i = x.g.getComponentNameForNode(t);
              if (i) {
                if ((n = n || {}).component)
                  throw Error(
                    'Cannot use the "component" binding on a custom element matching a component'
                  );
                var o = { name: i, params: e(t, a) };
                n.component = r
                  ? function () {
                      return o;
                    }
                  : o;
              }
            }
            return n;
          });
        var n = new x.Q();
        9 > x.a.C &&
          ((x.g.register = (function (e) {
            return function (n) {
              return t.createElement(n), e.apply(this, arguments);
            };
          })(x.g.register)),
          (t.createDocumentFragment = (function (e) {
            return function () {
              var n,
                t = e(),
                a = x.g.Bc;
              for (n in a) a.hasOwnProperty(n) && t.createElement(n);
              return t;
            };
          })(t.createDocumentFragment)));
      })(),
      (function (e) {
        var n = 0;
        (x.d.component = {
          init: function (e, t, a, r, i) {
            function o() {
              var e = u && u.dispose;
              "function" == typeof e && e.call(u), (c = u = null);
            }
            var u,
              c,
              s = x.a.V(x.f.childNodes(e));
            return (
              x.a.F.oa(e, o),
              x.m(
                function () {
                  var a,
                    r,
                    f = x.a.c(t());
                  if (
                    ("string" == typeof f
                      ? (a = f)
                      : ((a = x.a.c(f.name)), (r = x.a.c(f.params))),
                    !a)
                  )
                    throw Error("No component name specified");
                  var l = (c = ++n);
                  x.g.get(a, function (n) {
                    if (c === l) {
                      if ((o(), !n))
                        throw Error("Unknown component '" + a + "'");
                      !(function (e, n, t) {
                        if (!(n = n.template))
                          throw Error("Component '" + e + "' has no template");
                        (e = x.a.ua(n)), x.f.da(t, e);
                      })(a, n, e);
                      var t = (function (e, n, t, a) {
                        var r = e.createViewModel;
                        return r
                          ? r.call(e, a, { element: n, templateNodes: t })
                          : a;
                      })(n, e, s, r);
                      (n = i.createChildContext(t, void 0, function (e) {
                        (e.$component = t), (e.$componentTemplateNodes = s);
                      })),
                        (u = t),
                        x.eb(n, e);
                    }
                  });
                },
                null,
                { i: e }
              ),
              { controlsDescendantBindings: !0 }
            );
          },
        }),
          (x.f.Z.component = !0);
      })();
    var M = { class: "className", for: "htmlFor" };
    (x.d.attr = {
      update: function (n, t) {
        var a = x.a.c(t()) || {};
        x.a.D(a, function (t, a) {
          var r = !1 === (a = x.a.c(a)) || null === a || a === e;
          r && n.removeAttribute(t),
            8 >= x.a.C && t in M
              ? ((t = M[t]), r ? n.removeAttribute(t) : (n[t] = a))
              : r || n.setAttribute(t, a.toString()),
            "name" === t && x.a.rc(n, r ? "" : a.toString());
        });
      },
    }),
      (x.d.checked = {
        after: ["value", "attr"],
        init: function (n, t, a) {
          function r() {
            var e = n.checked,
              r = d ? i() : e;
            if (!x.va.Sa() && (!u || e)) {
              var o = x.l.w(t);
              if (s) {
                var c = f ? o.t() : o;
                l !== r
                  ? (e && (x.a.pa(c, r, !0), x.a.pa(c, l, !1)), (l = r))
                  : x.a.pa(c, r, e),
                  f && x.Ba(o) && o(c);
              } else x.h.Ea(o, a, "checked", r, !0);
            }
          }
          var i = x.nc(function () {
              return a.has("checkedValue")
                ? x.a.c(a.get("checkedValue"))
                : a.has("value")
                ? x.a.c(a.get("value"))
                : n.value;
            }),
            o = "checkbox" == n.type,
            u = "radio" == n.type;
          if (o || u) {
            var c = t(),
              s = o && x.a.c(c) instanceof Array,
              f = !(s && c.push && c.splice),
              l = s ? i() : e,
              d = u || s;
            u &&
              !n.name &&
              x.d.uniqueName.init(n, function () {
                return !0;
              }),
              x.m(r, null, { i: n }),
              x.a.p(n, "click", r),
              x.m(
                function () {
                  var e = x.a.c(t());
                  n.checked = s ? 0 <= x.a.o(e, i()) : o ? e : i() === e;
                },
                null,
                { i: n }
              ),
              (c = e);
          }
        },
      }),
      (x.h.ea.checked = !0),
      (x.d.checkedValue = {
        update: function (e, n) {
          e.value = x.a.c(n());
        },
      }),
      (x.d.css = {
        update: function (e, n) {
          var t = x.a.c(n());
          null !== t && "object" == typeof t
            ? x.a.D(t, function (n, t) {
                (t = x.a.c(t)), x.a.bb(e, n, t);
              })
            : ((t = x.a.$a(String(t || ""))),
              x.a.bb(e, e.__ko__cssValue, !1),
              (e.__ko__cssValue = t),
              x.a.bb(e, t, !0));
        },
      }),
      (x.d.enable = {
        update: function (e, n) {
          var t = x.a.c(n());
          t && e.disabled
            ? e.removeAttribute("disabled")
            : t || e.disabled || (e.disabled = !0);
        },
      }),
      (x.d.disable = {
        update: function (e, n) {
          x.d.enable.update(e, function () {
            return !x.a.c(n());
          });
        },
      }),
      (x.d.event = {
        init: function (e, n, t, a, r) {
          var i = n() || {};
          x.a.D(i, function (i) {
            "string" == typeof i &&
              x.a.p(e, i, function (e) {
                var o,
                  u = n()[i];
                if (u) {
                  try {
                    var c = x.a.V(arguments);
                    (a = r.$data), c.unshift(a), (o = u.apply(a, c));
                  } finally {
                    !0 !== o &&
                      (e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1));
                  }
                  !1 === t.get(i + "Bubble") &&
                    ((e.cancelBubble = !0),
                    e.stopPropagation && e.stopPropagation());
                }
              });
          });
        },
      }),
      (x.d.foreach = {
        ic: function (e) {
          return function () {
            var n = e(),
              t = x.a.zb(n);
            return t && "number" != typeof t.length
              ? (x.a.c(n),
                {
                  foreach: t.data,
                  as: t.as,
                  includeDestroyed: t.includeDestroyed,
                  afterAdd: t.afterAdd,
                  beforeRemove: t.beforeRemove,
                  afterRender: t.afterRender,
                  beforeMove: t.beforeMove,
                  afterMove: t.afterMove,
                  templateEngine: x.W.sb,
                })
              : { foreach: n, templateEngine: x.W.sb };
          };
        },
        init: function (e, n) {
          return x.d.template.init(e, x.d.foreach.ic(n));
        },
        update: function (e, n, t, a, r) {
          return x.d.template.update(e, x.d.foreach.ic(n), t, a, r);
        },
      }),
      (x.h.ta.foreach = !1),
      (x.f.Z.foreach = !0),
      (x.d.hasfocus = {
        init: function (e, n, t) {
          function a(a) {
            e.__ko_hasfocusUpdating = !0;
            var r = e.ownerDocument;
            if ("activeElement" in r) {
              var i;
              try {
                i = r.activeElement;
              } catch (e) {
                i = r.body;
              }
              a = i === e;
            }
            (r = n()),
              x.h.Ea(r, t, "hasfocus", a, !0),
              (e.__ko_hasfocusLastValue = a),
              (e.__ko_hasfocusUpdating = !1);
          }
          var r = a.bind(null, !0),
            i = a.bind(null, !1);
          x.a.p(e, "focus", r),
            x.a.p(e, "focusin", r),
            x.a.p(e, "blur", i),
            x.a.p(e, "focusout", i);
        },
        update: function (e, n) {
          var t = !!x.a.c(n());
          e.__ko_hasfocusUpdating ||
            e.__ko_hasfocusLastValue === t ||
            (t ? e.focus() : e.blur(),
            !t && e.__ko_hasfocusLastValue && e.ownerDocument.body.focus(),
            x.l.w(x.a.Da, null, [e, t ? "focusin" : "focusout"]));
        },
      }),
      (x.h.ea.hasfocus = !0),
      (x.d.hasFocus = x.d.hasfocus),
      (x.h.ea.hasFocus = !0),
      (x.d.html = {
        init: function () {
          return { controlsDescendantBindings: !0 };
        },
        update: function (e, n) {
          x.a.Cb(e, n());
        },
      }),
      h("if"),
      h("ifnot", !1, !0),
      h("with", !0, !1, function (e, n) {
        return e.createChildContext(n);
      });
    var j = {};
    (x.d.options = {
      init: function (e) {
        if ("select" !== x.a.A(e))
          throw Error("options binding applies only to SELECT elements");
        for (; 0 < e.length; ) e.remove(0);
        return { controlsDescendantBindings: !0 };
      },
      update: function (n, t, a) {
        function r() {
          return x.a.Ka(n.options, function (e) {
            return e.selected;
          });
        }
        function i(e, n, t) {
          var a = typeof n;
          return "function" == a ? n(e) : "string" == a ? e[n] : t;
        }
        function o(e, t) {
          if (h && f) x.j.ha(n, x.a.c(a.get("value")), !0);
          else if (p.length) {
            var r = 0 <= x.a.o(p, x.j.u(t[0]));
            x.a.sc(t[0], r), h && !r && x.l.w(x.a.Da, null, [n, "change"]);
          }
        }
        var u = n.multiple,
          c = 0 != n.length && u ? n.scrollTop : null,
          s = x.a.c(t()),
          f = a.get("valueAllowUnset") && a.has("value"),
          l = a.get("optionsIncludeDestroyed");
        t = {};
        var d,
          p = [];
        f ||
          (u
            ? (p = x.a.fb(r(), x.j.u))
            : 0 <= n.selectedIndex &&
              p.push(x.j.u(n.options[n.selectedIndex]))),
          s &&
            (void 0 === s.length && (s = [s]),
            (d = x.a.Ka(s, function (n) {
              return l || n === e || null === n || !x.a.c(n._destroy);
            })),
            a.has("optionsCaption") &&
              null !== (s = x.a.c(a.get("optionsCaption"))) &&
              s !== e &&
              d.unshift(j));
        var h = !1;
        (t.beforeRemove = function (e) {
          n.removeChild(e);
        }),
          (s = o),
          a.has("optionsAfterRender") &&
            "function" == typeof a.get("optionsAfterRender") &&
            (s = function (n, t) {
              o(0, t),
                x.l.w(a.get("optionsAfterRender"), null, [
                  t[0],
                  n !== j ? n : e,
                ]);
            }),
          x.a.Bb(
            n,
            d,
            function (t, r, o) {
              return (
                o.length &&
                  ((p = !f && o[0].selected ? [x.j.u(o[0])] : []), (h = !0)),
                (r = n.ownerDocument.createElement("option")),
                t === j
                  ? (x.a.Za(r, a.get("optionsCaption")), x.j.ha(r, e))
                  : ((o = i(t, a.get("optionsValue"), t)),
                    x.j.ha(r, x.a.c(o)),
                    (t = i(t, a.get("optionsText"), o)),
                    x.a.Za(r, t)),
                [r]
              );
            },
            t,
            s
          ),
          x.l.w(function () {
            f
              ? x.j.ha(n, x.a.c(a.get("value")), !0)
              : (u
                  ? p.length && r().length < p.length
                  : p.length && 0 <= n.selectedIndex
                  ? x.j.u(n.options[n.selectedIndex]) !== p[0]
                  : p.length || 0 <= n.selectedIndex) && x.a.Da(n, "change");
          }),
          x.a.Nc(n),
          c && 20 < Math.abs(c - n.scrollTop) && (n.scrollTop = c);
      },
    }),
      (x.d.options.xb = x.a.e.I()),
      (x.d.selectedOptions = {
        after: ["options", "foreach"],
        init: function (e, n, t) {
          x.a.p(e, "change", function () {
            var a = n(),
              r = [];
            x.a.q(e.getElementsByTagName("option"), function (e) {
              e.selected && r.push(x.j.u(e));
            }),
              x.h.Ea(a, t, "selectedOptions", r);
          });
        },
        update: function (e, n) {
          if ("select" != x.a.A(e))
            throw Error("values binding applies only to SELECT elements");
          var t = x.a.c(n()),
            a = e.scrollTop;
          t &&
            "number" == typeof t.length &&
            x.a.q(e.getElementsByTagName("option"), function (e) {
              var n = 0 <= x.a.o(t, x.j.u(e));
              e.selected != n && x.a.sc(e, n);
            }),
            (e.scrollTop = a);
        },
      }),
      (x.h.ea.selectedOptions = !0),
      (x.d.style = {
        update: function (n, t) {
          var a = x.a.c(t() || {});
          x.a.D(a, function (t, a) {
            (null !== (a = x.a.c(a)) && a !== e && !1 !== a) || (a = ""),
              (n.style[t] = a);
          });
        },
      }),
      (x.d.submit = {
        init: function (e, n, t, a, r) {
          if ("function" != typeof n())
            throw Error("The value for a submit binding must be a function");
          x.a.p(e, "submit", function (t) {
            var a,
              i = n();
            try {
              a = i.call(r.$data, e);
            } finally {
              !0 !== a &&
                (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
            }
          });
        },
      }),
      (x.d.text = {
        init: function () {
          return { controlsDescendantBindings: !0 };
        },
        update: function (e, n) {
          x.a.Za(e, n());
        },
      }),
      (x.f.Z.text = !0),
      (function () {
        if (n && n.navigator)
          var t = function (e) {
              if (e) return parseFloat(e[1]);
            },
            a = n.opera && n.opera.version && parseInt(n.opera.version()),
            r = n.navigator.userAgent,
            i = t(r.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
            o = t(r.match(/Firefox\/([^ ]*)/));
        if (10 > x.a.C)
          var u = x.a.e.I(),
            c = x.a.e.I(),
            s = function (e) {
              var n = this.activeElement;
              (n = n && x.a.e.get(n, c)) && n(e);
            },
            f = function (e, n) {
              var t = e.ownerDocument;
              x.a.e.get(t, u) ||
                (x.a.e.set(t, u, !0), x.a.p(t, "selectionchange", s)),
                x.a.e.set(e, c, n);
            };
        (x.d.textInput = {
          init: function (n, t, r) {
            function u(e, t) {
              x.a.p(n, e, t);
            }
            function c() {
              l || ((d = n.value), (l = x.a.setTimeout(s, 4)));
            }
            function s() {
              clearTimeout(l), (d = l = e);
              var a = n.value;
              p !== a && ((p = a), x.h.Ea(t(), r, "textInput", a));
            }
            var l,
              d,
              p = n.value,
              h = 9 == x.a.C ? c : s;
            10 > x.a.C
              ? (u("propertychange", function (e) {
                  "value" === e.propertyName && h(e);
                }),
                8 == x.a.C && (u("keyup", s), u("keydown", s)),
                8 <= x.a.C && (f(n, h), u("dragend", c)))
              : (u("input", s),
                5 > i && "textarea" === x.a.A(n)
                  ? (u("keydown", c), u("paste", c), u("cut", c))
                  : 11 > a
                  ? u("keydown", c)
                  : 4 > o &&
                    (u("DOMAutoComplete", s), u("dragdrop", s), u("drop", s))),
              u("change", s),
              x.m(
                function a() {
                  var r = x.a.c(t());
                  (null !== r && r !== e) || (r = ""),
                    d !== e && r === d
                      ? x.a.setTimeout(a, 4)
                      : n.value !== r && ((p = r), (n.value = r));
                },
                null,
                { i: n }
              );
          },
        }),
          (x.h.ea.textInput = !0),
          (x.d.textinput = {
            preprocess: function (e, n, t) {
              t("textInput", e);
            },
          });
      })(),
      (x.d.uniqueName = {
        init: function (e, n) {
          if (n()) {
            var t = "ko_unique_" + ++x.d.uniqueName.Ic;
            x.a.rc(e, t);
          }
        },
      }),
      (x.d.uniqueName.Ic = 0),
      (x.d.value = {
        after: ["options", "foreach"],
        init: function (e, n, t) {
          if (
            "input" != e.tagName.toLowerCase() ||
            ("checkbox" != e.type && "radio" != e.type)
          ) {
            var a = ["change"],
              r = t.get("valueUpdate"),
              i = !1,
              o = null;
            r &&
              ("string" == typeof r && (r = [r]),
              x.a.ra(a, r),
              (a = x.a.Tb(a)));
            var u = function () {
              (o = null), (i = !1);
              var a = n(),
                r = x.j.u(e);
              x.h.Ea(a, t, "value", r);
            };
            !x.a.C ||
              "input" != e.tagName.toLowerCase() ||
              "text" != e.type ||
              "off" == e.autocomplete ||
              (e.form && "off" == e.form.autocomplete) ||
              -1 != x.a.o(a, "propertychange") ||
              (x.a.p(e, "propertychange", function () {
                i = !0;
              }),
              x.a.p(e, "focus", function () {
                i = !1;
              }),
              x.a.p(e, "blur", function () {
                i && u();
              })),
              x.a.q(a, function (n) {
                var t = u;
                x.a.nd(n, "after") &&
                  ((t = function () {
                    (o = x.j.u(e)), x.a.setTimeout(u, 0);
                  }),
                  (n = n.substring(5))),
                  x.a.p(e, n, t);
              });
            var c = function () {
              var a = x.a.c(n()),
                r = x.j.u(e);
              if (null !== o && a === o) x.a.setTimeout(c, 0);
              else if (a !== r)
                if ("select" === x.a.A(e)) {
                  var i = t.get("valueAllowUnset");
                  (r = function () {
                    x.j.ha(e, a, i);
                  })(),
                    i || a === x.j.u(e)
                      ? x.a.setTimeout(r, 0)
                      : x.l.w(x.a.Da, null, [e, "change"]);
                } else x.j.ha(e, a);
            };
            x.m(c, null, { i: e });
          } else x.Ja(e, { checkedValue: n });
        },
        update: function () {},
      }),
      (x.h.ea.value = !0),
      (x.d.visible = {
        update: function (e, n) {
          var t = x.a.c(n()),
            a = "none" != e.style.display;
          t && !a
            ? (e.style.display = "")
            : !t && a && (e.style.display = "none");
        },
      }),
      (function (e) {
        x.d[e] = {
          init: function (n, t, a, r, i) {
            return x.d.event.init.call(
              this,
              n,
              function () {
                var n = {};
                return (n[e] = t()), n;
              },
              a,
              r,
              i
            );
          },
        };
      })("click"),
      (x.O = function () {}),
      (x.O.prototype.renderTemplateSource = function () {
        throw Error("Override renderTemplateSource");
      }),
      (x.O.prototype.createJavaScriptEvaluatorBlock = function () {
        throw Error("Override createJavaScriptEvaluatorBlock");
      }),
      (x.O.prototype.makeTemplateSource = function (e, n) {
        if ("string" == typeof e) {
          var a = (n = n || t).getElementById(e);
          if (!a) throw Error("Cannot find template with ID " + e);
          return new x.v.n(a);
        }
        if (1 == e.nodeType || 8 == e.nodeType) return new x.v.qa(e);
        throw Error("Unknown template type: " + e);
      }),
      (x.O.prototype.renderTemplate = function (e, n, t, a) {
        return (
          (e = this.makeTemplateSource(e, a)),
          this.renderTemplateSource(e, n, t, a)
        );
      }),
      (x.O.prototype.isTemplateRewritten = function (e, n) {
        return (
          !1 === this.allowTemplateRewriting ||
          this.makeTemplateSource(e, n).data("isRewritten")
        );
      }),
      (x.O.prototype.rewriteTemplate = function (e, n, t) {
        (n = n((e = this.makeTemplateSource(e, t)).text())),
          e.text(n),
          e.data("isRewritten", !0);
      }),
      x.b("templateEngine", x.O),
      (x.Gb = (function () {
        function e(e, n, t, a) {
          e = x.h.yb(e);
          for (var r = x.h.ta, i = 0; i < e.length; i++) {
            var o = e[i].key;
            if (r.hasOwnProperty(o)) {
              var u = r[o];
              if ("function" == typeof u) {
                if ((o = u(e[i].value))) throw Error(o);
              } else if (!u)
                throw Error(
                  "This template engine does not support the '" +
                    o +
                    "' binding within its templates"
                );
            }
          }
          return (
            (t =
              "ko.__tr_ambtns(function($context,$element){return(function(){return{ " +
              x.h.Ua(e, { valueAccessors: !0 }) +
              " } })()},'" +
              t.toLowerCase() +
              "')"),
            a.createJavaScriptEvaluatorBlock(t) + n
          );
        }
        var n =
            /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
          t = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
        return {
          Oc: function (e, n, t) {
            n.isTemplateRewritten(e, t) ||
              n.rewriteTemplate(
                e,
                function (e) {
                  return x.Gb.dd(e, n);
                },
                t
              );
          },
          dd: function (a, r) {
            return a
              .replace(n, function (n, t, a, i, o) {
                return e(o, t, a, r);
              })
              .replace(t, function (n, t) {
                return e(t, "\x3c!-- ko --\x3e", "#comment", r);
              });
          },
          Ec: function (e, n) {
            return x.M.wb(function (t, a) {
              var r = t.nextSibling;
              r && r.nodeName.toLowerCase() === n && x.Ja(r, e, a);
            });
          },
        };
      })()),
      x.b("__tr_ambtns", x.Gb.Ec),
      (function () {
        (x.v = {}),
          (x.v.n = function (e) {
            if ((this.n = e)) {
              var n = x.a.A(e);
              this.ab =
                "script" === n
                  ? 1
                  : "textarea" === n
                  ? 2
                  : "template" == n && e.content && 11 === e.content.nodeType
                  ? 3
                  : 4;
            }
          }),
          (x.v.n.prototype.text = function () {
            var e =
              1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML";
            if (0 == arguments.length) return this.n[e];
            var n = arguments[0];
            "innerHTML" === e ? x.a.Cb(this.n, n) : (this.n[e] = n);
          });
        var n = x.a.e.I() + "_";
        x.v.n.prototype.data = function (e) {
          if (1 === arguments.length) return x.a.e.get(this.n, n + e);
          x.a.e.set(this.n, n + e, arguments[1]);
        };
        var t = x.a.e.I();
        (x.v.n.prototype.nodes = function () {
          var n = this.n;
          if (0 == arguments.length)
            return (
              (x.a.e.get(n, t) || {}).jb ||
              (3 === this.ab ? n.content : 4 === this.ab ? n : e)
            );
          x.a.e.set(n, t, { jb: arguments[0] });
        }),
          (x.v.qa = function (e) {
            this.n = e;
          }),
          (x.v.qa.prototype = new x.v.n()),
          (x.v.qa.prototype.text = function () {
            if (0 == arguments.length) {
              var n = x.a.e.get(this.n, t) || {};
              return n.Hb === e && n.jb && (n.Hb = n.jb.innerHTML), n.Hb;
            }
            x.a.e.set(this.n, t, { Hb: arguments[0] });
          }),
          x.b("templateSources", x.v),
          x.b("templateSources.domElement", x.v.n),
          x.b("templateSources.anonymousTemplate", x.v.qa);
      })(),
      (function () {
        function n(e, n, t) {
          var a;
          for (n = x.f.nextSibling(n); e && (a = e) !== n; )
            t(a, (e = x.f.nextSibling(a)));
        }
        function t(e, t) {
          if (e.length) {
            var a = e[0],
              r = e[e.length - 1],
              i = a.parentNode,
              o = x.Q.instance,
              u = o.preprocessNode;
            if (u) {
              if (
                (n(a, r, function (e, n) {
                  var t = e.previousSibling,
                    i = u.call(o, e);
                  i &&
                    (e === a && (a = i[0] || n),
                    e === r && (r = i[i.length - 1] || t));
                }),
                (e.length = 0),
                !a)
              )
                return;
              a === r ? e.push(a) : (e.push(a, r), x.a.za(e, i));
            }
            n(a, r, function (e) {
              (1 !== e.nodeType && 8 !== e.nodeType) || x.Rb(t, e);
            }),
              n(a, r, function (e) {
                (1 !== e.nodeType && 8 !== e.nodeType) || x.M.yc(e, [t]);
              }),
              x.a.za(e, i);
          }
        }
        function a(e) {
          return e.nodeType ? e : 0 < e.length ? e[0] : null;
        }
        function r(e, n, r, i, u) {
          u = u || {};
          var c = ((e && a(e)) || r || {}).ownerDocument,
            s = u.templateEngine || o;
          if (
            (x.Gb.Oc(r, s, c),
            "number" != typeof (r = s.renderTemplate(r, i, u, c)).length ||
              (0 < r.length && "number" != typeof r[0].nodeType))
          )
            throw Error("Template engine must return an array of DOM nodes");
          switch (((c = !1), n)) {
            case "replaceChildren":
              x.f.da(e, r), (c = !0);
              break;
            case "replaceNode":
              x.a.qc(e, r), (c = !0);
              break;
            case "ignoreTargetNode":
              break;
            default:
              throw Error("Unknown renderMode: " + n);
          }
          return (
            c &&
              (t(r, i),
              u.afterRender && x.l.w(u.afterRender, null, [r, i.$data])),
            r
          );
        }
        function i(e, n, t) {
          return x.H(e) ? e() : "function" == typeof e ? e(n, t) : e;
        }
        var o;
        (x.Db = function (n) {
          if (n != e && !(n instanceof x.O))
            throw Error("templateEngine must inherit from ko.templateEngine");
          o = n;
        }),
          (x.Ab = function (n, t, u, c, s) {
            if (((u = u || {}).templateEngine || o) == e)
              throw Error(
                "Set a template engine before calling renderTemplate"
              );
            if (((s = s || "replaceChildren"), c)) {
              var f = a(c);
              return x.B(
                function () {
                  var e = t && t instanceof x.U ? t : new x.U(x.a.c(t)),
                    o = i(n, e.$data, e);
                  (e = r(c, s, o, e, u)),
                    "replaceNode" == s && (f = a((c = e)));
                },
                null,
                {
                  wa: function () {
                    return !f || !x.a.nb(f);
                  },
                  i: f && "replaceNode" == s ? f.parentNode : f,
                }
              );
            }
            return x.M.wb(function (e) {
              x.Ab(n, t, u, e, "replaceNode");
            });
          }),
          (x.kd = function (n, a, o, u, c) {
            function s(e, n) {
              t(n, l), o.afterRender && o.afterRender(n, e), (l = null);
            }
            function f(e, t) {
              return (
                (l = c.createChildContext(e, o.as, function (e) {
                  e.$index = t;
                })),
                r(null, "ignoreTargetNode", i(n, e, l), l, o)
              );
            }
            var l;
            return x.B(
              function () {
                var n = x.a.c(a) || [];
                void 0 === n.length && (n = [n]),
                  (n = x.a.Ka(n, function (n) {
                    return (
                      o.includeDestroyed ||
                      n === e ||
                      null === n ||
                      !x.a.c(n._destroy)
                    );
                  })),
                  x.l.w(x.a.Bb, null, [u, n, f, o, s]);
              },
              null,
              { i: u }
            );
          });
        var u = x.a.e.I();
        (x.d.template = {
          init: function (e, n) {
            var t = x.a.c(n());
            if ("string" == typeof t || t.name) x.f.xa(e);
            else {
              if ("nodes" in t) {
                if (((t = t.nodes || []), x.H(t)))
                  throw Error(
                    'The "nodes" option must be a plain, non-observable array.'
                  );
              } else t = x.f.childNodes(e);
              (t = x.a.jc(t)), new x.v.qa(e).nodes(t);
            }
            return { controlsDescendantBindings: !0 };
          },
          update: function (n, t, a, r, i) {
            var o,
              c = t();
            (a = !0),
              (r = null),
              "string" == typeof (t = x.a.c(c))
                ? (t = {})
                : ((c = t.name),
                  "if" in t && (a = x.a.c(t.if)),
                  a && "ifnot" in t && (a = !x.a.c(t.ifnot)),
                  (o = x.a.c(t.data))),
              "foreach" in t
                ? (r = x.kd(c || n, (a && t.foreach) || [], t, n, i))
                : a
                ? ((i = "data" in t ? i.createChildContext(o, t.as) : i),
                  (r = x.Ab(c || n, i, t, n)))
                : x.f.xa(n),
              (i = r),
              (o = x.a.e.get(n, u)) && "function" == typeof o.k && o.k(),
              x.a.e.set(n, u, i && i.ba() ? i : e);
          },
        }),
          (x.h.ta.template = function (e) {
            return (1 == (e = x.h.yb(e)).length && e[0].unknown) ||
              x.h.ad(e, "name")
              ? null
              : "This template engine does not support anonymous templates nested within its templates";
          }),
          (x.f.Z.template = !0);
      })(),
      x.b("setTemplateEngine", x.Db),
      x.b("renderTemplate", x.Ab),
      (x.a.dc = function (e, n, t) {
        var a, r, i, o, u;
        if (e.length && n.length)
          for (a = r = 0; (!t || a < t) && (o = e[r]); ++r) {
            for (i = 0; (u = n[i]); ++i)
              if (o.value === u.value) {
                (o.moved = u.index),
                  (u.moved = o.index),
                  n.splice(i, 1),
                  (a = i = 0);
                break;
              }
            a += i;
          }
      }),
      (x.a.ib = (function () {
        function e(e, n, t, a, r) {
          var i,
            o,
            u,
            c,
            s,
            f = Math.min,
            l = Math.max,
            d = [],
            p = e.length,
            h = n.length,
            b = h - p || 1,
            v = p + h + 1;
          for (i = 0; i <= p; i++)
            for (
              c = u, d.push((u = [])), s = f(h, i + b), o = l(0, i - 1);
              o <= s;
              o++
            )
              u[o] = o
                ? i
                  ? e[i - 1] === n[o - 1]
                    ? c[o - 1]
                    : f(c[o] || v, u[o - 1] || v) + 1
                  : o + 1
                : i + 1;
          for (f = [], l = [], b = [], i = p, o = h; i || o; )
            (h = d[i][o] - 1),
              o && h === d[i][o - 1]
                ? l.push((f[f.length] = { status: t, value: n[--o], index: o }))
                : i && h === d[i - 1][o]
                ? b.push((f[f.length] = { status: a, value: e[--i], index: i }))
                : (--o,
                  --i,
                  r.sparse || f.push({ status: "retained", value: n[o] }));
          return x.a.dc(b, l, !r.dontLimitMoves && 10 * p), f.reverse();
        }
        return function (n, t, a) {
          return (
            (a = "boolean" == typeof a ? { dontLimitMoves: a } : a || {}),
            (t = t || []),
            (n = n || []).length < t.length
              ? e(n, t, "added", "deleted", a)
              : e(t, n, "deleted", "added", a)
          );
        };
      })()),
      x.b("utils.compareArrays", x.a.ib),
      (function () {
        function n(n, t, a, r, i) {
          var o = [],
            u = x.B(
              function () {
                var e = t(a, i, x.a.za(o, n)) || [];
                0 < o.length && (x.a.qc(o, e), r && x.l.w(r, null, [a, e, i])),
                  (o.length = 0),
                  x.a.ra(o, e);
              },
              null,
              {
                i: n,
                wa: function () {
                  return !x.a.Qb(o);
                },
              }
            );
          return { ca: o, B: u.ba() ? u : e };
        }
        var t = x.a.e.I(),
          a = x.a.e.I();
        x.a.Bb = function (r, i, o, u, c) {
          function s(e, n) {
            (k = p[n]),
              m !== n && (C[e] = k),
              k.qb(m++),
              x.a.za(k.ca, r),
              v.push(k),
              w.push(k);
          }
          function f(e, n) {
            if (e)
              for (var t = 0, a = n.length; t < a; t++)
                n[t] &&
                  x.a.q(n[t].ca, function (a) {
                    e(a, t, n[t].ja);
                  });
          }
          (i = i || []), (u = u || {});
          var l,
            d = x.a.e.get(r, t) === e,
            p = x.a.e.get(r, t) || [],
            h = x.a.fb(p, function (e) {
              return e.ja;
            }),
            b = x.a.ib(h, i, u.dontLimitMoves),
            v = [],
            g = 0,
            m = 0,
            y = [],
            w = [];
          i = [];
          for (var k, E, T, C = [], N = ((h = []), 0); (E = b[N]); N++)
            switch (((T = E.moved), E.status)) {
              case "deleted":
                T === e &&
                  ((k = p[g]).B && (k.B.k(), (k.B = e)),
                  x.a.za(k.ca, r).length &&
                    (u.beforeRemove &&
                      (v.push(k),
                      w.push(k),
                      k.ja === a ? (k = null) : (i[N] = k)),
                    k && y.push.apply(y, k.ca))),
                  g++;
                break;
              case "retained":
                s(N, g++);
                break;
              case "added":
                T !== e
                  ? s(N, T)
                  : ((k = { ja: E.value, qb: x.N(m++) }),
                    v.push(k),
                    w.push(k),
                    d || (h[N] = k));
            }
          for (
            x.a.e.set(r, t, v),
              f(u.beforeMove, C),
              x.a.q(y, u.beforeRemove ? x.$ : x.removeNode),
              N = 0,
              d = x.f.firstChild(r);
            (k = w[N]);
            N++
          ) {
            for (
              k.ca || x.a.extend(k, n(r, o, k.ja, c, k.qb)), g = 0;
              (b = k.ca[g]);
              d = b.nextSibling, l = b, g++
            )
              b !== d && x.f.gc(r, b, l);
            !k.Wc && c && (c(k.ja, k.ca, k.qb), (k.Wc = !0));
          }
          for (f(u.beforeRemove, i), N = 0; N < i.length; ++N)
            i[N] && (i[N].ja = a);
          f(u.afterMove, C), f(u.afterAdd, h);
        };
      })(),
      x.b("utils.setDomNodeChildrenFromArrayMapping", x.a.Bb),
      (x.W = function () {
        this.allowTemplateRewriting = !1;
      }),
      (x.W.prototype = new x.O()),
      (x.W.prototype.renderTemplateSource = function (e, n, t, a) {
        return (n = 9 > x.a.C || !e.nodes ? null : e.nodes())
          ? x.a.V(n.cloneNode(!0).childNodes)
          : ((e = e.text()), x.a.ma(e, a));
      }),
      (x.W.sb = new x.W()),
      x.Db(x.W.sb),
      x.b("nativeTemplateEngine", x.W),
      (function () {
        (x.vb = function () {
          var e = (this.$c = (function () {
            if (!r || !r.tmpl) return 0;
            try {
              if (0 <= r.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
            } catch (e) {}
            return 1;
          })());
          (this.renderTemplateSource = function (n, a, i, o) {
            if (((o = o || t), (i = i || {}), 2 > e))
              throw Error(
                "Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."
              );
            var u = n.data("precompiled");
            return (
              u ||
                ((u = n.text() || ""),
                (u = r.template(
                  null,
                  "{{ko_with $item.koBindingContext}}" + u + "{{/ko_with}}"
                )),
                n.data("precompiled", u)),
              (n = [a.$data]),
              (a = r.extend({ koBindingContext: a }, i.templateOptions)),
              (a = r.tmpl(u, n, a)).appendTo(o.createElement("div")),
              (r.fragments = {}),
              a
            );
          }),
            (this.createJavaScriptEvaluatorBlock = function (e) {
              return "{{ko_code ((function() { return " + e + " })()) }}";
            }),
            (this.addTemplate = function (e, n) {
              t.write(
                "<script type='text/html' id='" + e + "'>" + n + "</script>"
              );
            }),
            0 < e &&
              ((r.tmpl.tag.ko_code = { open: "__.push($1 || '');" }),
              (r.tmpl.tag.ko_with = { open: "with($1) {", close: "} " }));
        }),
          (x.vb.prototype = new x.O());
        var e = new x.vb();
        0 < e.$c && x.Db(e), x.b("jqueryTmplTemplateEngine", x.vb);
      })();
  });
})();
//# sourceMappingURL=knockout-3.4.0.js.map
