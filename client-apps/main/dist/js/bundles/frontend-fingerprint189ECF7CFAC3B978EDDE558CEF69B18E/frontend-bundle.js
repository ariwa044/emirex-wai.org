/*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */
if (
  ((function (t, e) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = t.document
          ? e(t, !0)
          : function (t) {
              if (!t.document)
                throw new Error("jQuery requires a window with a document");
              return e(t);
            })
      : e(t);
  })("undefined" != typeof window ? window : this, function (t, e) {
    var n = [],
      i = t.document,
      o = n.slice,
      s = n.concat,
      r = n.push,
      a = n.indexOf,
      l = {},
      u = l.toString,
      c = l.hasOwnProperty,
      d = {},
      h = "2.2.4",
      f = function (t, e) {
        return new f.fn.init(t, e);
      },
      p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      m = /^-ms-/,
      g = /-([\da-z])/gi,
      v = function (t, e) {
        return e.toUpperCase();
      };
    function y(t) {
      var e = !!t && "length" in t && t.length,
        n = f.type(t);
      return (
        "function" !== n &&
        !f.isWindow(t) &&
        ("array" === n ||
          0 === e ||
          ("number" == typeof e && e > 0 && e - 1 in t))
      );
    }
    (f.fn = f.prototype =
      {
        jquery: h,
        constructor: f,
        selector: "",
        length: 0,
        toArray: function () {
          return o.call(this);
        },
        get: function (t) {
          return null != t
            ? t < 0
              ? this[t + this.length]
              : this[t]
            : o.call(this);
        },
        pushStack: function (t) {
          var e = f.merge(this.constructor(), t);
          return (e.prevObject = this), (e.context = this.context), e;
        },
        each: function (t) {
          return f.each(this, t);
        },
        map: function (t) {
          return this.pushStack(
            f.map(this, function (e, n) {
              return t.call(e, n, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(o.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (t) {
          var e = this.length,
            n = +t + (t < 0 ? e : 0);
          return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: r,
        sort: n.sort,
        splice: n.splice,
      }),
      (f.extend = f.fn.extend =
        function () {
          var t,
            e,
            n,
            i,
            o,
            s,
            r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
          for (
            "boolean" == typeof r && ((u = r), (r = arguments[a] || {}), a++),
              "object" == typeof r || f.isFunction(r) || (r = {}),
              a === l && ((r = this), a--);
            a < l;
            a++
          )
            if (null != (t = arguments[a]))
              for (e in t)
                (n = r[e]),
                  r !== (i = t[e]) &&
                    (u && i && (f.isPlainObject(i) || (o = f.isArray(i)))
                      ? (o
                          ? ((o = !1), (s = n && f.isArray(n) ? n : []))
                          : (s = n && f.isPlainObject(n) ? n : {}),
                        (r[e] = f.extend(u, s, i)))
                      : void 0 !== i && (r[e] = i));
          return r;
        }),
      f.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
          throw new Error(t);
        },
        noop: function () {},
        isFunction: function (t) {
          return "function" === f.type(t);
        },
        isArray: Array.isArray,
        isWindow: function (t) {
          return null != t && t === t.window;
        },
        isNumeric: function (t) {
          var e = t && t.toString();
          return !f.isArray(t) && e - parseFloat(e) + 1 >= 0;
        },
        isPlainObject: function (t) {
          var e;
          if ("object" !== f.type(t) || t.nodeType || f.isWindow(t)) return !1;
          if (
            t.constructor &&
            !c.call(t, "constructor") &&
            !c.call(t.constructor.prototype || {}, "isPrototypeOf")
          )
            return !1;
          for (e in t);
          return void 0 === e || c.call(t, e);
        },
        isEmptyObject: function (t) {
          var e;
          for (e in t) return !1;
          return !0;
        },
        type: function (t) {
          return null == t
            ? t + ""
            : "object" == typeof t || "function" == typeof t
            ? l[u.call(t)] || "object"
            : typeof t;
        },
        globalEval: function (t) {
          var e,
            n = eval;
          (t = f.trim(t)) &&
            (1 === t.indexOf("use strict")
              ? (((e = i.createElement("script")).text = t),
                i.head.appendChild(e).parentNode.removeChild(e))
              : n(t));
        },
        camelCase: function (t) {
          return t.replace(m, "ms-").replace(g, v);
        },
        nodeName: function (t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function (t, e) {
          var n,
            i = 0;
          if (y(t))
            for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
          else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
          return t;
        },
        trim: function (t) {
          return null == t ? "" : (t + "").replace(p, "");
        },
        makeArray: function (t, e) {
          var n = e || [];
          return (
            null != t &&
              (y(Object(t))
                ? f.merge(n, "string" == typeof t ? [t] : t)
                : r.call(n, t)),
            n
          );
        },
        inArray: function (t, e, n) {
          return null == e ? -1 : a.call(e, t, n);
        },
        merge: function (t, e) {
          for (var n = +e.length, i = 0, o = t.length; i < n; i++)
            t[o++] = e[i];
          return (t.length = o), t;
        },
        grep: function (t, e, n) {
          for (var i = [], o = 0, s = t.length, r = !n; o < s; o++)
            !e(t[o], o) !== r && i.push(t[o]);
          return i;
        },
        map: function (t, e, n) {
          var i,
            o,
            r = 0,
            a = [];
          if (y(t))
            for (i = t.length; r < i; r++)
              null != (o = e(t[r], r, n)) && a.push(o);
          else for (r in t) null != (o = e(t[r], r, n)) && a.push(o);
          return s.apply([], a);
        },
        guid: 1,
        proxy: function (t, e) {
          var n, i, s;
          if (
            ("string" == typeof e && ((n = t[e]), (e = t), (t = n)),
            f.isFunction(t))
          )
            return (
              (i = o.call(arguments, 2)),
              (s = function () {
                return t.apply(e || this, i.concat(o.call(arguments)));
              }),
              (s.guid = t.guid = t.guid || f.guid++),
              s
            );
        },
        now: Date.now,
        support: d,
      }),
      "function" == typeof Symbol &&
        (f.fn[Symbol.iterator] = n[Symbol.iterator]),
      f.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (t, e) {
          l["[object " + e + "]"] = e.toLowerCase();
        }
      );
    var w =
      /*!
       * Sizzle CSS Selector Engine v2.2.1
       * http://sizzlejs.com/
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license
       * http://jquery.org/license
       *
       * Date: 2015-10-17
       */
      (function (t) {
        var e,
          n,
          i,
          o,
          s,
          r,
          a,
          l,
          u,
          c,
          d,
          h,
          f,
          p,
          m,
          g,
          v,
          y,
          w,
          b = "sizzle" + 1 * new Date(),
          x = t.document,
          S = 0,
          T = 0,
          k = st(),
          _ = st(),
          M = st(),
          $ = function (t, e) {
            return t === e && (d = !0), 0;
          },
          C = 1 << 31,
          D = {}.hasOwnProperty,
          E = [],
          O = E.pop,
          N = E.push,
          A = E.push,
          Y = E.slice,
          j = function (t, e) {
            for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
            return -1;
          },
          H =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          I = "[\\x20\\t\\r\\n\\f]",
          P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          L =
            "\\[[\\x20\\t\\r\\n\\f]*(" +
            P +
            ")(?:" +
            I +
            "*([*^$|!~]?=)" +
            I +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            P +
            "))|)" +
            I +
            "*\\]",
          W =
            ":(" +
            P +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            L +
            ")*)|.*)\\)|)",
          F = new RegExp(I + "+", "g"),
          R = new RegExp(
            "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
            "g"
          ),
          q = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
          U = new RegExp(
            "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
          ),
          V = new RegExp(
            "=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]",
            "g"
          ),
          z = new RegExp(W),
          B = new RegExp("^" + P + "$"),
          G = {
            ID: new RegExp("^#(" + P + ")"),
            CLASS: new RegExp("^\\.(" + P + ")"),
            TAG: new RegExp("^(" + P + "|[*])"),
            ATTR: new RegExp("^" + L),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + H + ")$", "i"),
            needsContext: new RegExp(
              "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          Q = /^(?:input|select|textarea|button)$/i,
          Z = /^h\d$/i,
          X = /^[^{]+\{\s*\[native \w/,
          J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          K = /[+~]/,
          tt = /'|\\/g,
          et = new RegExp(
            "\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)",
            "ig"
          ),
          nt = function (t, e, n) {
            var i = "0x" + e - 65536;
            return i != i || n
              ? e
              : i < 0
              ? String.fromCharCode(i + 65536)
              : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
          },
          it = function () {
            h();
          };
        try {
          A.apply((E = Y.call(x.childNodes)), x.childNodes),
            E[x.childNodes.length].nodeType;
        } catch (t) {
          A = {
            apply: E.length
              ? function (t, e) {
                  N.apply(t, Y.call(e));
                }
              : function (t, e) {
                  for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                  t.length = n - 1;
                },
          };
        }
        function ot(t, e, i, o) {
          var s,
            a,
            u,
            c,
            d,
            p,
            v,
            y,
            S = e && e.ownerDocument,
            T = e ? e.nodeType : 9;
          if (
            ((i = i || []),
            "string" != typeof t || !t || (1 !== T && 9 !== T && 11 !== T))
          )
            return i;
          if (
            !o &&
            ((e ? e.ownerDocument || e : x) !== f && h(e), (e = e || f), m)
          ) {
            if (11 !== T && (p = J.exec(t)))
              if ((s = p[1])) {
                if (9 === T) {
                  if (!(u = e.getElementById(s))) return i;
                  if (u.id === s) return i.push(u), i;
                } else if (
                  S &&
                  (u = S.getElementById(s)) &&
                  w(e, u) &&
                  u.id === s
                )
                  return i.push(u), i;
              } else {
                if (p[2]) return A.apply(i, e.getElementsByTagName(t)), i;
                if (
                  (s = p[3]) &&
                  n.getElementsByClassName &&
                  e.getElementsByClassName
                )
                  return A.apply(i, e.getElementsByClassName(s)), i;
              }
            if (n.qsa && !M[t + " "] && (!g || !g.test(t))) {
              if (1 !== T) (S = e), (y = t);
              else if ("object" !== e.nodeName.toLowerCase()) {
                for (
                  (c = e.getAttribute("id"))
                    ? (c = c.replace(tt, "\\$&"))
                    : e.setAttribute("id", (c = b)),
                    a = (v = r(t)).length,
                    d = B.test(c) ? "#" + c : "[id='" + c + "']";
                  a--;

                )
                  v[a] = d + " " + mt(v[a]);
                (y = v.join(",")), (S = (K.test(t) && ft(e.parentNode)) || e);
              }
              if (y)
                try {
                  return A.apply(i, S.querySelectorAll(y)), i;
                } catch (t) {
                } finally {
                  c === b && e.removeAttribute("id");
                }
            }
          }
          return l(t.replace(R, "$1"), e, i, o);
        }
        function st() {
          var t = [];
          return function e(n, o) {
            return (
              t.push(n + " ") > i.cacheLength && delete e[t.shift()],
              (e[n + " "] = o)
            );
          };
        }
        function rt(t) {
          return (t[b] = !0), t;
        }
        function at(t) {
          var e = f.createElement("div");
          try {
            return !!t(e);
          } catch (t) {
            return !1;
          } finally {
            e.parentNode && e.parentNode.removeChild(e), (e = null);
          }
        }
        function lt(t, e) {
          for (var n = t.split("|"), o = n.length; o--; )
            i.attrHandle[n[o]] = e;
        }
        function ut(t, e) {
          var n = e && t,
            i =
              n &&
              1 === t.nodeType &&
              1 === e.nodeType &&
              (~e.sourceIndex || C) - (~t.sourceIndex || C);
          if (i) return i;
          if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
          return t ? 1 : -1;
        }
        function ct(t) {
          return function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
          };
        }
        function dt(t) {
          return function (e) {
            var n = e.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && e.type === t;
          };
        }
        function ht(t) {
          return rt(function (e) {
            return (
              (e = +e),
              rt(function (n, i) {
                for (var o, s = t([], n.length, e), r = s.length; r--; )
                  n[(o = s[r])] && (n[o] = !(i[o] = n[o]));
              })
            );
          });
        }
        function ft(t) {
          return t && void 0 !== t.getElementsByTagName && t;
        }
        for (e in ((n = ot.support = {}),
        (s = ot.isXML =
          function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName;
          }),
        (h = ot.setDocument =
          function (t) {
            var e,
              o,
              r = t ? t.ownerDocument || t : x;
            return r !== f && 9 === r.nodeType && r.documentElement
              ? ((p = (f = r).documentElement),
                (m = !s(f)),
                (o = f.defaultView) &&
                  o.top !== o &&
                  (o.addEventListener
                    ? o.addEventListener("unload", it, !1)
                    : o.attachEvent && o.attachEvent("onunload", it)),
                (n.attributes = at(function (t) {
                  return (t.className = "i"), !t.getAttribute("className");
                })),
                (n.getElementsByTagName = at(function (t) {
                  return (
                    t.appendChild(f.createComment("")),
                    !t.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName = X.test(f.getElementsByClassName)),
                (n.getById = at(function (t) {
                  return (
                    (p.appendChild(t).id = b),
                    !f.getElementsByName || !f.getElementsByName(b).length
                  );
                })),
                n.getById
                  ? ((i.find.ID = function (t, e) {
                      if (void 0 !== e.getElementById && m) {
                        var n = e.getElementById(t);
                        return n ? [n] : [];
                      }
                    }),
                    (i.filter.ID = function (t) {
                      var e = t.replace(et, nt);
                      return function (t) {
                        return t.getAttribute("id") === e;
                      };
                    }))
                  : (delete i.find.ID,
                    (i.filter.ID = function (t) {
                      var e = t.replace(et, nt);
                      return function (t) {
                        var n =
                          void 0 !== t.getAttributeNode &&
                          t.getAttributeNode("id");
                        return n && n.value === e;
                      };
                    })),
                (i.find.TAG = n.getElementsByTagName
                  ? function (t, e) {
                      return void 0 !== e.getElementsByTagName
                        ? e.getElementsByTagName(t)
                        : n.qsa
                        ? e.querySelectorAll(t)
                        : void 0;
                    }
                  : function (t, e) {
                      var n,
                        i = [],
                        o = 0,
                        s = e.getElementsByTagName(t);
                      if ("*" === t) {
                        for (; (n = s[o++]); ) 1 === n.nodeType && i.push(n);
                        return i;
                      }
                      return s;
                    }),
                (i.find.CLASS =
                  n.getElementsByClassName &&
                  function (t, e) {
                    if (void 0 !== e.getElementsByClassName && m)
                      return e.getElementsByClassName(t);
                  }),
                (v = []),
                (g = []),
                (n.qsa = X.test(f.querySelectorAll)) &&
                  (at(function (t) {
                    (p.appendChild(t).innerHTML =
                      "<a id='" +
                      b +
                      "'></a><select id='" +
                      b +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      t.querySelectorAll("[msallowcapture^='']").length &&
                        g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                      t.querySelectorAll("[selected]").length ||
                        g.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + H + ")"),
                      t.querySelectorAll("[id~=" + b + "-]").length ||
                        g.push("~="),
                      t.querySelectorAll(":checked").length ||
                        g.push(":checked"),
                      t.querySelectorAll("a#" + b + "+*").length ||
                        g.push(".#.+[+~]");
                  }),
                  at(function (t) {
                    var e = f.createElement("input");
                    e.setAttribute("type", "hidden"),
                      t.appendChild(e).setAttribute("name", "D"),
                      t.querySelectorAll("[name=d]").length &&
                        g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                      t.querySelectorAll(":enabled").length ||
                        g.push(":enabled", ":disabled"),
                      t.querySelectorAll("*,:x"),
                      g.push(",.*:");
                  })),
                (n.matchesSelector = X.test(
                  (y =
                    p.matches ||
                    p.webkitMatchesSelector ||
                    p.mozMatchesSelector ||
                    p.oMatchesSelector ||
                    p.msMatchesSelector)
                )) &&
                  at(function (t) {
                    (n.disconnectedMatch = y.call(t, "div")),
                      y.call(t, "[s!='']:x"),
                      v.push("!=", W);
                  }),
                (g = g.length && new RegExp(g.join("|"))),
                (v = v.length && new RegExp(v.join("|"))),
                (e = X.test(p.compareDocumentPosition)),
                (w =
                  e || X.test(p.contains)
                    ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                          i = e && e.parentNode;
                        return (
                          t === i ||
                          !(
                            !i ||
                            1 !== i.nodeType ||
                            !(n.contains
                              ? n.contains(i)
                              : t.compareDocumentPosition &&
                                16 & t.compareDocumentPosition(i))
                          )
                        );
                      }
                    : function (t, e) {
                        if (e)
                          for (; (e = e.parentNode); ) if (e === t) return !0;
                        return !1;
                      }),
                ($ = e
                  ? function (t, e) {
                      if (t === e) return (d = !0), 0;
                      var i =
                        !t.compareDocumentPosition - !e.compareDocumentPosition;
                      return (
                        i ||
                        (1 &
                          (i =
                            (t.ownerDocument || t) === (e.ownerDocument || e)
                              ? t.compareDocumentPosition(e)
                              : 1) ||
                        (!n.sortDetached && e.compareDocumentPosition(t) === i)
                          ? t === f || (t.ownerDocument === x && w(x, t))
                            ? -1
                            : e === f || (e.ownerDocument === x && w(x, e))
                            ? 1
                            : c
                            ? j(c, t) - j(c, e)
                            : 0
                          : 4 & i
                          ? -1
                          : 1)
                      );
                    }
                  : function (t, e) {
                      if (t === e) return (d = !0), 0;
                      var n,
                        i = 0,
                        o = t.parentNode,
                        s = e.parentNode,
                        r = [t],
                        a = [e];
                      if (!o || !s)
                        return t === f
                          ? -1
                          : e === f
                          ? 1
                          : o
                          ? -1
                          : s
                          ? 1
                          : c
                          ? j(c, t) - j(c, e)
                          : 0;
                      if (o === s) return ut(t, e);
                      for (n = t; (n = n.parentNode); ) r.unshift(n);
                      for (n = e; (n = n.parentNode); ) a.unshift(n);
                      for (; r[i] === a[i]; ) i++;
                      return i
                        ? ut(r[i], a[i])
                        : r[i] === x
                        ? -1
                        : a[i] === x
                        ? 1
                        : 0;
                    }),
                f)
              : f;
          }),
        (ot.matches = function (t, e) {
          return ot(t, null, null, e);
        }),
        (ot.matchesSelector = function (t, e) {
          if (
            ((t.ownerDocument || t) !== f && h(t),
            (e = e.replace(V, "='$1']")),
            n.matchesSelector &&
              m &&
              !M[e + " "] &&
              (!v || !v.test(e)) &&
              (!g || !g.test(e)))
          )
            try {
              var i = y.call(t, e);
              if (
                i ||
                n.disconnectedMatch ||
                (t.document && 11 !== t.document.nodeType)
              )
                return i;
            } catch (t) {}
          return ot(e, f, null, [t]).length > 0;
        }),
        (ot.contains = function (t, e) {
          return (t.ownerDocument || t) !== f && h(t), w(t, e);
        }),
        (ot.attr = function (t, e) {
          (t.ownerDocument || t) !== f && h(t);
          var o = i.attrHandle[e.toLowerCase()],
            s =
              o && D.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !m) : void 0;
          return void 0 !== s
            ? s
            : n.attributes || !m
            ? t.getAttribute(e)
            : (s = t.getAttributeNode(e)) && s.specified
            ? s.value
            : null;
        }),
        (ot.error = function (t) {
          throw new Error("Syntax error, unrecognized expression: " + t);
        }),
        (ot.uniqueSort = function (t) {
          var e,
            i = [],
            o = 0,
            s = 0;
          if (
            ((d = !n.detectDuplicates),
            (c = !n.sortStable && t.slice(0)),
            t.sort($),
            d)
          ) {
            for (; (e = t[s++]); ) e === t[s] && (o = i.push(s));
            for (; o--; ) t.splice(i[o], 1);
          }
          return (c = null), t;
        }),
        (o = ot.getText =
          function (t) {
            var e,
              n = "",
              i = 0,
              s = t.nodeType;
            if (s) {
              if (1 === s || 9 === s || 11 === s) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) n += o(t);
              } else if (3 === s || 4 === s) return t.nodeValue;
            } else for (; (e = t[i++]); ) n += o(e);
            return n;
          }),
        (i = ot.selectors =
          {
            cacheLength: 50,
            createPseudo: rt,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (t) {
                return (
                  (t[1] = t[1].replace(et, nt)),
                  (t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt)),
                  "~=" === t[2] && (t[3] = " " + t[3] + " "),
                  t.slice(0, 4)
                );
              },
              CHILD: function (t) {
                return (
                  (t[1] = t[1].toLowerCase()),
                  "nth" === t[1].slice(0, 3)
                    ? (t[3] || ot.error(t[0]),
                      (t[4] = +(t[4]
                        ? t[5] + (t[6] || 1)
                        : 2 * ("even" === t[3] || "odd" === t[3]))),
                      (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                    : t[3] && ot.error(t[0]),
                  t
                );
              },
              PSEUDO: function (t) {
                var e,
                  n = !t[6] && t[2];
                return G.CHILD.test(t[0])
                  ? null
                  : (t[3]
                      ? (t[2] = t[4] || t[5] || "")
                      : n &&
                        z.test(n) &&
                        (e = r(n, !0)) &&
                        (e = n.indexOf(")", n.length - e) - n.length) &&
                        ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                    t.slice(0, 3));
              },
            },
            filter: {
              TAG: function (t) {
                var e = t.replace(et, nt).toLowerCase();
                return "*" === t
                  ? function () {
                      return !0;
                    }
                  : function (t) {
                      return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
              },
              CLASS: function (t) {
                var e = k[t + " "];
                return (
                  e ||
                  ((e = new RegExp(
                    "(^|[\\x20\\t\\r\\n\\f])" + t + "(" + I + "|$)"
                  )) &&
                    k(t, function (t) {
                      return e.test(
                        ("string" == typeof t.className && t.className) ||
                          (void 0 !== t.getAttribute &&
                            t.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (t, e, n) {
                return function (i) {
                  var o = ot.attr(i, t);
                  return null == o
                    ? "!=" === e
                    : !e ||
                        ((o += ""),
                        "=" === e
                          ? o === n
                          : "!=" === e
                          ? o !== n
                          : "^=" === e
                          ? n && 0 === o.indexOf(n)
                          : "*=" === e
                          ? n && o.indexOf(n) > -1
                          : "$=" === e
                          ? n && o.slice(-n.length) === n
                          : "~=" === e
                          ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1
                          : "|=" === e &&
                            (o === n || o.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function (t, e, n, i, o) {
                var s = "nth" !== t.slice(0, 3),
                  r = "last" !== t.slice(-4),
                  a = "of-type" === e;
                return 1 === i && 0 === o
                  ? function (t) {
                      return !!t.parentNode;
                    }
                  : function (e, n, l) {
                      var u,
                        c,
                        d,
                        h,
                        f,
                        p,
                        m = s !== r ? "nextSibling" : "previousSibling",
                        g = e.parentNode,
                        v = a && e.nodeName.toLowerCase(),
                        y = !l && !a,
                        w = !1;
                      if (g) {
                        if (s) {
                          for (; m; ) {
                            for (h = e; (h = h[m]); )
                              if (
                                a
                                  ? h.nodeName.toLowerCase() === v
                                  : 1 === h.nodeType
                              )
                                return !1;
                            p = m = "only" === t && !p && "nextSibling";
                          }
                          return !0;
                        }
                        if (((p = [r ? g.firstChild : g.lastChild]), r && y)) {
                          for (
                            w =
                              (f =
                                (u =
                                  (c =
                                    (d = (h = g)[b] || (h[b] = {}))[
                                      h.uniqueID
                                    ] || (d[h.uniqueID] = {}))[t] || [])[0] ===
                                  S && u[1]) && u[2],
                              h = f && g.childNodes[f];
                            (h = (++f && h && h[m]) || (w = f = 0) || p.pop());

                          )
                            if (1 === h.nodeType && ++w && h === e) {
                              c[t] = [S, f, w];
                              break;
                            }
                        } else if (
                          (y &&
                            (w = f =
                              (u =
                                (c =
                                  (d = (h = e)[b] || (h[b] = {}))[h.uniqueID] ||
                                  (d[h.uniqueID] = {}))[t] || [])[0] === S &&
                              u[1]),
                          !1 === w)
                        )
                          for (
                            ;
                            (h =
                              (++f && h && h[m]) || (w = f = 0) || p.pop()) &&
                            ((a
                              ? h.nodeName.toLowerCase() !== v
                              : 1 !== h.nodeType) ||
                              !++w ||
                              (y &&
                                ((c =
                                  (d = h[b] || (h[b] = {}))[h.uniqueID] ||
                                  (d[h.uniqueID] = {}))[t] = [S, w]),
                              h !== e));

                          );
                        return (w -= o) === i || (w % i == 0 && w / i >= 0);
                      }
                    };
              },
              PSEUDO: function (t, e) {
                var n,
                  o =
                    i.pseudos[t] ||
                    i.setFilters[t.toLowerCase()] ||
                    ot.error("unsupported pseudo: " + t);
                return o[b]
                  ? o(e)
                  : o.length > 1
                  ? ((n = [t, t, "", e]),
                    i.setFilters.hasOwnProperty(t.toLowerCase())
                      ? rt(function (t, n) {
                          for (var i, s = o(t, e), r = s.length; r--; )
                            t[(i = j(t, s[r]))] = !(n[i] = s[r]);
                        })
                      : function (t) {
                          return o(t, 0, n);
                        })
                  : o;
              },
            },
            pseudos: {
              not: rt(function (t) {
                var e = [],
                  n = [],
                  i = a(t.replace(R, "$1"));
                return i[b]
                  ? rt(function (t, e, n, o) {
                      for (var s, r = i(t, null, o, []), a = t.length; a--; )
                        (s = r[a]) && (t[a] = !(e[a] = s));
                    })
                  : function (t, o, s) {
                      return (
                        (e[0] = t), i(e, null, s, n), (e[0] = null), !n.pop()
                      );
                    };
              }),
              has: rt(function (t) {
                return function (e) {
                  return ot(t, e).length > 0;
                };
              }),
              contains: rt(function (t) {
                return (
                  (t = t.replace(et, nt)),
                  function (e) {
                    return (
                      (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                    );
                  }
                );
              }),
              lang: rt(function (t) {
                return (
                  B.test(t || "") || ot.error("unsupported lang: " + t),
                  (t = t.replace(et, nt).toLowerCase()),
                  function (e) {
                    var n;
                    do {
                      if (
                        (n = m
                          ? e.lang
                          : e.getAttribute("xml:lang") ||
                            e.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === t ||
                          0 === n.indexOf(t + "-")
                        );
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (e) {
                var n = t.location && t.location.hash;
                return n && n.slice(1) === e.id;
              },
              root: function (t) {
                return t === p;
              },
              focus: function (t) {
                return (
                  t === f.activeElement &&
                  (!f.hasFocus || f.hasFocus()) &&
                  !!(t.type || t.href || ~t.tabIndex)
                );
              },
              enabled: function (t) {
                return !1 === t.disabled;
              },
              disabled: function (t) {
                return !0 === t.disabled;
              },
              checked: function (t) {
                var e = t.nodeName.toLowerCase();
                return (
                  ("input" === e && !!t.checked) ||
                  ("option" === e && !!t.selected)
                );
              },
              selected: function (t) {
                return (
                  t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                );
              },
              empty: function (t) {
                for (t = t.firstChild; t; t = t.nextSibling)
                  if (t.nodeType < 6) return !1;
                return !0;
              },
              parent: function (t) {
                return !i.pseudos.empty(t);
              },
              header: function (t) {
                return Z.test(t.nodeName);
              },
              input: function (t) {
                return Q.test(t.nodeName);
              },
              button: function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e && "button" === t.type) || "button" === e;
              },
              text: function (t) {
                var e;
                return (
                  "input" === t.nodeName.toLowerCase() &&
                  "text" === t.type &&
                  (null == (e = t.getAttribute("type")) ||
                    "text" === e.toLowerCase())
                );
              },
              first: ht(function () {
                return [0];
              }),
              last: ht(function (t, e) {
                return [e - 1];
              }),
              eq: ht(function (t, e, n) {
                return [n < 0 ? n + e : n];
              }),
              even: ht(function (t, e) {
                for (var n = 0; n < e; n += 2) t.push(n);
                return t;
              }),
              odd: ht(function (t, e) {
                for (var n = 1; n < e; n += 2) t.push(n);
                return t;
              }),
              lt: ht(function (t, e, n) {
                for (var i = n < 0 ? n + e : n; --i >= 0; ) t.push(i);
                return t;
              }),
              gt: ht(function (t, e, n) {
                for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
                return t;
              }),
            },
          }),
        (i.pseudos.nth = i.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          i.pseudos[e] = ct(e);
        for (e in { submit: !0, reset: !0 }) i.pseudos[e] = dt(e);
        function pt() {}
        function mt(t) {
          for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
          return i;
        }
        function gt(t, e, n) {
          var i = e.dir,
            o = n && "parentNode" === i,
            s = T++;
          return e.first
            ? function (e, n, s) {
                for (; (e = e[i]); )
                  if (1 === e.nodeType || o) return t(e, n, s);
              }
            : function (e, n, r) {
                var a,
                  l,
                  u,
                  c = [S, s];
                if (r) {
                  for (; (e = e[i]); )
                    if ((1 === e.nodeType || o) && t(e, n, r)) return !0;
                } else
                  for (; (e = e[i]); )
                    if (1 === e.nodeType || o) {
                      if (
                        (a = (l =
                          (u = e[b] || (e[b] = {}))[e.uniqueID] ||
                          (u[e.uniqueID] = {}))[i]) &&
                        a[0] === S &&
                        a[1] === s
                      )
                        return (c[2] = a[2]);
                      if (((l[i] = c), (c[2] = t(e, n, r)))) return !0;
                    }
              };
        }
        function vt(t) {
          return t.length > 1
            ? function (e, n, i) {
                for (var o = t.length; o--; ) if (!t[o](e, n, i)) return !1;
                return !0;
              }
            : t[0];
        }
        function yt(t, e, n, i, o) {
          for (var s, r = [], a = 0, l = t.length, u = null != e; a < l; a++)
            (s = t[a]) && ((n && !n(s, i, o)) || (r.push(s), u && e.push(a)));
          return r;
        }
        function wt(t, e, n, i, o, s) {
          return (
            i && !i[b] && (i = wt(i)),
            o && !o[b] && (o = wt(o, s)),
            rt(function (s, r, a, l) {
              var u,
                c,
                d,
                h = [],
                f = [],
                p = r.length,
                m =
                  s ||
                  (function (t, e, n) {
                    for (var i = 0, o = e.length; i < o; i++) ot(t, e[i], n);
                    return n;
                  })(e || "*", a.nodeType ? [a] : a, []),
                g = !t || (!s && e) ? m : yt(m, h, t, a, l),
                v = n ? (o || (s ? t : p || i) ? [] : r) : g;
              if ((n && n(g, v, a, l), i))
                for (u = yt(v, f), i(u, [], a, l), c = u.length; c--; )
                  (d = u[c]) && (v[f[c]] = !(g[f[c]] = d));
              if (s) {
                if (o || t) {
                  if (o) {
                    for (u = [], c = v.length; c--; )
                      (d = v[c]) && u.push((g[c] = d));
                    o(null, (v = []), u, l);
                  }
                  for (c = v.length; c--; )
                    (d = v[c]) &&
                      (u = o ? j(s, d) : h[c]) > -1 &&
                      (s[u] = !(r[u] = d));
                }
              } else (v = yt(v === r ? v.splice(p, v.length) : v)), o ? o(null, r, v, l) : A.apply(r, v);
            })
          );
        }
        function bt(t) {
          for (
            var e,
              n,
              o,
              s = t.length,
              r = i.relative[t[0].type],
              a = r || i.relative[" "],
              l = r ? 1 : 0,
              c = gt(
                function (t) {
                  return t === e;
                },
                a,
                !0
              ),
              d = gt(
                function (t) {
                  return j(e, t) > -1;
                },
                a,
                !0
              ),
              h = [
                function (t, n, i) {
                  var o =
                    (!r && (i || n !== u)) ||
                    ((e = n).nodeType ? c(t, n, i) : d(t, n, i));
                  return (e = null), o;
                },
              ];
            l < s;
            l++
          )
            if ((n = i.relative[t[l].type])) h = [gt(vt(h), n)];
            else {
              if ((n = i.filter[t[l].type].apply(null, t[l].matches))[b]) {
                for (o = ++l; o < s && !i.relative[t[o].type]; o++);
                return wt(
                  l > 1 && vt(h),
                  l > 1 &&
                    mt(
                      t
                        .slice(0, l - 1)
                        .concat({ value: " " === t[l - 2].type ? "*" : "" })
                    ).replace(R, "$1"),
                  n,
                  l < o && bt(t.slice(l, o)),
                  o < s && bt((t = t.slice(o))),
                  o < s && mt(t)
                );
              }
              h.push(n);
            }
          return vt(h);
        }
        return (
          (pt.prototype = i.filters = i.pseudos),
          (i.setFilters = new pt()),
          (r = ot.tokenize =
            function (t, e) {
              var n,
                o,
                s,
                r,
                a,
                l,
                u,
                c = _[t + " "];
              if (c) return e ? 0 : c.slice(0);
              for (a = t, l = [], u = i.preFilter; a; ) {
                for (r in ((n && !(o = q.exec(a))) ||
                  (o && (a = a.slice(o[0].length) || a), l.push((s = []))),
                (n = !1),
                (o = U.exec(a)) &&
                  ((n = o.shift()),
                  s.push({ value: n, type: o[0].replace(R, " ") }),
                  (a = a.slice(n.length))),
                i.filter))
                  !(o = G[r].exec(a)) ||
                    (u[r] && !(o = u[r](o))) ||
                    ((n = o.shift()),
                    s.push({ value: n, type: r, matches: o }),
                    (a = a.slice(n.length)));
                if (!n) break;
              }
              return e ? a.length : a ? ot.error(t) : _(t, l).slice(0);
            }),
          (a = ot.compile =
            function (t, e) {
              var n,
                o = [],
                s = [],
                a = M[t + " "];
              if (!a) {
                for (e || (e = r(t)), n = e.length; n--; )
                  (a = bt(e[n]))[b] ? o.push(a) : s.push(a);
                (a = M(
                  t,
                  (function (t, e) {
                    var n = e.length > 0,
                      o = t.length > 0,
                      s = function (s, r, a, l, c) {
                        var d,
                          p,
                          g,
                          v = 0,
                          y = "0",
                          w = s && [],
                          b = [],
                          x = u,
                          T = s || (o && i.find.TAG("*", c)),
                          k = (S += null == x ? 1 : Math.random() || 0.1),
                          _ = T.length;
                        for (
                          c && (u = r === f || r || c);
                          y !== _ && null != (d = T[y]);
                          y++
                        ) {
                          if (o && d) {
                            for (
                              p = 0,
                                r || d.ownerDocument === f || (h(d), (a = !m));
                              (g = t[p++]);

                            )
                              if (g(d, r || f, a)) {
                                l.push(d);
                                break;
                              }
                            c && (S = k);
                          }
                          n && ((d = !g && d) && v--, s && w.push(d));
                        }
                        if (((v += y), n && y !== v)) {
                          for (p = 0; (g = e[p++]); ) g(w, b, r, a);
                          if (s) {
                            if (v > 0)
                              for (; y--; ) w[y] || b[y] || (b[y] = O.call(l));
                            b = yt(b);
                          }
                          A.apply(l, b),
                            c &&
                              !s &&
                              b.length > 0 &&
                              v + e.length > 1 &&
                              ot.uniqueSort(l);
                        }
                        return c && ((S = k), (u = x)), w;
                      };
                    return n ? rt(s) : s;
                  })(s, o)
                )),
                  (a.selector = t);
              }
              return a;
            }),
          (l = ot.select =
            function (t, e, o, s) {
              var l,
                u,
                c,
                d,
                h,
                f = "function" == typeof t && t,
                p = !s && r((t = f.selector || t));
              if (((o = o || []), 1 === p.length)) {
                if (
                  (u = p[0] = p[0].slice(0)).length > 2 &&
                  "ID" === (c = u[0]).type &&
                  n.getById &&
                  9 === e.nodeType &&
                  m &&
                  i.relative[u[1].type]
                ) {
                  if (
                    !(e = (i.find.ID(c.matches[0].replace(et, nt), e) || [])[0])
                  )
                    return o;
                  f && (e = e.parentNode),
                    (t = t.slice(u.shift().value.length));
                }
                for (
                  l = G.needsContext.test(t) ? 0 : u.length;
                  l-- && ((c = u[l]), !i.relative[(d = c.type)]);

                )
                  if (
                    (h = i.find[d]) &&
                    (s = h(
                      c.matches[0].replace(et, nt),
                      (K.test(u[0].type) && ft(e.parentNode)) || e
                    ))
                  ) {
                    if ((u.splice(l, 1), !(t = s.length && mt(u))))
                      return A.apply(o, s), o;
                    break;
                  }
              }
              return (
                (f || a(t, p))(
                  s,
                  e,
                  !m,
                  o,
                  !e || (K.test(t) && ft(e.parentNode)) || e
                ),
                o
              );
            }),
          (n.sortStable = b.split("").sort($).join("") === b),
          (n.detectDuplicates = !!d),
          h(),
          (n.sortDetached = at(function (t) {
            return 1 & t.compareDocumentPosition(f.createElement("div"));
          })),
          at(function (t) {
            return (
              (t.innerHTML = "<a href='#'></a>"),
              "#" === t.firstChild.getAttribute("href")
            );
          }) ||
            lt("type|href|height|width", function (t, e, n) {
              if (!n)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
            }),
          (n.attributes &&
            at(function (t) {
              return (
                (t.innerHTML = "<input/>"),
                t.firstChild.setAttribute("value", ""),
                "" === t.firstChild.getAttribute("value")
              );
            })) ||
            lt("value", function (t, e, n) {
              if (!n && "input" === t.nodeName.toLowerCase())
                return t.defaultValue;
            }),
          at(function (t) {
            return null == t.getAttribute("disabled");
          }) ||
            lt(H, function (t, e, n) {
              var i;
              if (!n)
                return !0 === t[e]
                  ? e.toLowerCase()
                  : (i = t.getAttributeNode(e)) && i.specified
                  ? i.value
                  : null;
            }),
          ot
        );
      })(t);
    (f.find = w),
      (f.expr = w.selectors),
      (f.expr[":"] = f.expr.pseudos),
      (f.uniqueSort = f.unique = w.uniqueSort),
      (f.text = w.getText),
      (f.isXMLDoc = w.isXML),
      (f.contains = w.contains);
    var b = function (t, e, n) {
        for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
          if (1 === t.nodeType) {
            if (o && f(t).is(n)) break;
            i.push(t);
          }
        return i;
      },
      x = function (t, e) {
        for (var n = []; t; t = t.nextSibling)
          1 === t.nodeType && t !== e && n.push(t);
        return n;
      },
      S = f.expr.match.needsContext,
      T = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      k = /^.[^:#\[\.,]*$/;
    function _(t, e, n) {
      if (f.isFunction(e))
        return f.grep(t, function (t, i) {
          return !!e.call(t, i, t) !== n;
        });
      if (e.nodeType)
        return f.grep(t, function (t) {
          return (t === e) !== n;
        });
      if ("string" == typeof e) {
        if (k.test(e)) return f.filter(e, t, n);
        e = f.filter(e, t);
      }
      return f.grep(t, function (t) {
        return a.call(e, t) > -1 !== n;
      });
    }
    (f.filter = function (t, e, n) {
      var i = e[0];
      return (
        n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType
          ? f.find.matchesSelector(i, t)
            ? [i]
            : []
          : f.find.matches(
              t,
              f.grep(e, function (t) {
                return 1 === t.nodeType;
              })
            )
      );
    }),
      f.fn.extend({
        find: function (t) {
          var e,
            n = this.length,
            i = [],
            o = this;
          if ("string" != typeof t)
            return this.pushStack(
              f(t).filter(function () {
                for (e = 0; e < n; e++) if (f.contains(o[e], this)) return !0;
              })
            );
          for (e = 0; e < n; e++) f.find(t, o[e], i);
          return (
            ((i = this.pushStack(n > 1 ? f.unique(i) : i)).selector = this
              .selector
              ? this.selector + " " + t
              : t),
            i
          );
        },
        filter: function (t) {
          return this.pushStack(_(this, t || [], !1));
        },
        not: function (t) {
          return this.pushStack(_(this, t || [], !0));
        },
        is: function (t) {
          return !!_(
            this,
            "string" == typeof t && S.test(t) ? f(t) : t || [],
            !1
          ).length;
        },
      });
    var M,
      $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    ((f.fn.init = function (t, e, n) {
      var o, s;
      if (!t) return this;
      if (((n = n || M), "string" == typeof t)) {
        if (
          !(o =
            "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
              ? [null, t, null]
              : $.exec(t)) ||
          (!o[1] && e)
        )
          return !e || e.jquery
            ? (e || n).find(t)
            : this.constructor(e).find(t);
        if (o[1]) {
          if (
            ((e = e instanceof f ? e[0] : e),
            f.merge(
              this,
              f.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : i, !0)
            ),
            T.test(o[1]) && f.isPlainObject(e))
          )
            for (o in e)
              f.isFunction(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
          return this;
        }
        return (
          (s = i.getElementById(o[2])) &&
            s.parentNode &&
            ((this.length = 1), (this[0] = s)),
          (this.context = i),
          (this.selector = t),
          this
        );
      }
      return t.nodeType
        ? ((this.context = this[0] = t), (this.length = 1), this)
        : f.isFunction(t)
        ? void 0 !== n.ready
          ? n.ready(t)
          : t(f)
        : (void 0 !== t.selector &&
            ((this.selector = t.selector), (this.context = t.context)),
          f.makeArray(t, this));
    }).prototype = f.fn),
      (M = f(i));
    var C = /^(?:parents|prev(?:Until|All))/,
      D = { children: !0, contents: !0, next: !0, prev: !0 };
    function E(t, e) {
      for (; (t = t[e]) && 1 !== t.nodeType; );
      return t;
    }
    f.fn.extend({
      has: function (t) {
        var e = f(t, this),
          n = e.length;
        return this.filter(function () {
          for (var t = 0; t < n; t++) if (f.contains(this, e[t])) return !0;
        });
      },
      closest: function (t, e) {
        for (
          var n,
            i = 0,
            o = this.length,
            s = [],
            r = S.test(t) || "string" != typeof t ? f(t, e || this.context) : 0;
          i < o;
          i++
        )
          for (n = this[i]; n && n !== e; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (r
                ? r.index(n) > -1
                : 1 === n.nodeType && f.find.matchesSelector(n, t))
            ) {
              s.push(n);
              break;
            }
        return this.pushStack(s.length > 1 ? f.uniqueSort(s) : s);
      },
      index: function (t) {
        return t
          ? "string" == typeof t
            ? a.call(f(t), this[0])
            : a.call(this, t.jquery ? t[0] : t)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (t, e) {
        return this.pushStack(f.uniqueSort(f.merge(this.get(), f(t, e))));
      },
      addBack: function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      },
    }),
      f.each(
        {
          parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
          },
          parents: function (t) {
            return b(t, "parentNode");
          },
          parentsUntil: function (t, e, n) {
            return b(t, "parentNode", n);
          },
          next: function (t) {
            return E(t, "nextSibling");
          },
          prev: function (t) {
            return E(t, "previousSibling");
          },
          nextAll: function (t) {
            return b(t, "nextSibling");
          },
          prevAll: function (t) {
            return b(t, "previousSibling");
          },
          nextUntil: function (t, e, n) {
            return b(t, "nextSibling", n);
          },
          prevUntil: function (t, e, n) {
            return b(t, "previousSibling", n);
          },
          siblings: function (t) {
            return x((t.parentNode || {}).firstChild, t);
          },
          children: function (t) {
            return x(t.firstChild);
          },
          contents: function (t) {
            return t.contentDocument || f.merge([], t.childNodes);
          },
        },
        function (t, e) {
          f.fn[t] = function (n, i) {
            var o = f.map(this, e, n);
            return (
              "Until" !== t.slice(-5) && (i = n),
              i && "string" == typeof i && (o = f.filter(i, o)),
              this.length > 1 &&
                (D[t] || f.uniqueSort(o), C.test(t) && o.reverse()),
              this.pushStack(o)
            );
          };
        }
      );
    var O,
      N = /\S+/g;
    function A() {
      i.removeEventListener("DOMContentLoaded", A),
        t.removeEventListener("load", A),
        f.ready();
    }
    (f.Callbacks = function (t) {
      t =
        "string" == typeof t
          ? (function (t) {
              var e = {};
              return (
                f.each(t.match(N) || [], function (t, n) {
                  e[n] = !0;
                }),
                e
              );
            })(t)
          : f.extend({}, t);
      var e,
        n,
        i,
        o,
        s = [],
        r = [],
        a = -1,
        l = function () {
          for (o = t.once, i = e = !0; r.length; a = -1)
            for (n = r.shift(); ++a < s.length; )
              !1 === s[a].apply(n[0], n[1]) &&
                t.stopOnFalse &&
                ((a = s.length), (n = !1));
          t.memory || (n = !1), (e = !1), o && (s = n ? [] : "");
        },
        u = {
          add: function () {
            return (
              s &&
                (n && !e && ((a = s.length - 1), r.push(n)),
                (function e(n) {
                  f.each(n, function (n, i) {
                    f.isFunction(i)
                      ? (t.unique && u.has(i)) || s.push(i)
                      : i && i.length && "string" !== f.type(i) && e(i);
                  });
                })(arguments),
                n && !e && l()),
              this
            );
          },
          remove: function () {
            return (
              f.each(arguments, function (t, e) {
                for (var n; (n = f.inArray(e, s, n)) > -1; )
                  s.splice(n, 1), n <= a && a--;
              }),
              this
            );
          },
          has: function (t) {
            return t ? f.inArray(t, s) > -1 : s.length > 0;
          },
          empty: function () {
            return s && (s = []), this;
          },
          disable: function () {
            return (o = r = []), (s = n = ""), this;
          },
          disabled: function () {
            return !s;
          },
          lock: function () {
            return (o = r = []), n || (s = n = ""), this;
          },
          locked: function () {
            return !!o;
          },
          fireWith: function (t, n) {
            return (
              o ||
                ((n = [t, (n = n || []).slice ? n.slice() : n]),
                r.push(n),
                e || l()),
              this
            );
          },
          fire: function () {
            return u.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!i;
          },
        };
      return u;
    }),
      f.extend({
        Deferred: function (t) {
          var e = [
              ["resolve", "done", f.Callbacks("once memory"), "resolved"],
              ["reject", "fail", f.Callbacks("once memory"), "rejected"],
              ["notify", "progress", f.Callbacks("memory")],
            ],
            n = "pending",
            i = {
              state: function () {
                return n;
              },
              always: function () {
                return o.done(arguments).fail(arguments), this;
              },
              then: function () {
                var t = arguments;
                return f
                  .Deferred(function (n) {
                    f.each(e, function (e, s) {
                      var r = f.isFunction(t[e]) && t[e];
                      o[s[1]](function () {
                        var t = r && r.apply(this, arguments);
                        t && f.isFunction(t.promise)
                          ? t
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[s[0] + "With"](
                              this === i ? n.promise() : this,
                              r ? [t] : arguments
                            );
                      });
                    }),
                      (t = null);
                  })
                  .promise();
              },
              promise: function (t) {
                return null != t ? f.extend(t, i) : i;
              },
            },
            o = {};
          return (
            (i.pipe = i.then),
            f.each(e, function (t, s) {
              var r = s[2],
                a = s[3];
              (i[s[1]] = r.add),
                a &&
                  r.add(
                    function () {
                      n = a;
                    },
                    e[1 ^ t][2].disable,
                    e[2][2].lock
                  ),
                (o[s[0]] = function () {
                  return (
                    o[s[0] + "With"](this === o ? i : this, arguments), this
                  );
                }),
                (o[s[0] + "With"] = r.fireWith);
            }),
            i.promise(o),
            t && t.call(o, o),
            o
          );
        },
        when: function (t) {
          var e,
            n,
            i,
            s = 0,
            r = o.call(arguments),
            a = r.length,
            l = 1 !== a || (t && f.isFunction(t.promise)) ? a : 0,
            u = 1 === l ? t : f.Deferred(),
            c = function (t, n, i) {
              return function (s) {
                (n[t] = this),
                  (i[t] = arguments.length > 1 ? o.call(arguments) : s),
                  i === e ? u.notifyWith(n, i) : --l || u.resolveWith(n, i);
              };
            };
          if (a > 1)
            for (
              e = new Array(a), n = new Array(a), i = new Array(a);
              s < a;
              s++
            )
              r[s] && f.isFunction(r[s].promise)
                ? r[s]
                    .promise()
                    .progress(c(s, n, e))
                    .done(c(s, i, r))
                    .fail(u.reject)
                : --l;
          return l || u.resolveWith(i, r), u.promise();
        },
      }),
      (f.fn.ready = function (t) {
        return f.ready.promise().done(t), this;
      }),
      f.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
          t ? f.readyWait++ : f.ready(!0);
        },
        ready: function (t) {
          (!0 === t ? --f.readyWait : f.isReady) ||
            ((f.isReady = !0),
            (!0 !== t && --f.readyWait > 0) ||
              (O.resolveWith(i, [f]),
              f.fn.triggerHandler &&
                (f(i).triggerHandler("ready"), f(i).off("ready"))));
        },
      }),
      (f.ready.promise = function (e) {
        return (
          O ||
            ((O = f.Deferred()),
            "complete" === i.readyState ||
            ("loading" !== i.readyState && !i.documentElement.doScroll)
              ? t.setTimeout(f.ready)
              : (i.addEventListener("DOMContentLoaded", A),
                t.addEventListener("load", A))),
          O.promise(e)
        );
      }),
      f.ready.promise();
    var Y = function (t, e, n, i, o, s, r) {
        var a = 0,
          l = t.length,
          u = null == n;
        if ("object" === f.type(n))
          for (a in ((o = !0), n)) Y(t, e, a, n[a], !0, s, r);
        else if (
          void 0 !== i &&
          ((o = !0),
          f.isFunction(i) || (r = !0),
          u &&
            (r
              ? (e.call(t, i), (e = null))
              : ((u = e),
                (e = function (t, e, n) {
                  return u.call(f(t), n);
                }))),
          e)
        )
          for (; a < l; a++) e(t[a], n, r ? i : i.call(t[a], a, e(t[a], n)));
        return o ? t : u ? e.call(t) : l ? e(t[0], n) : s;
      },
      j = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
      };
    function H() {
      this.expando = f.expando + H.uid++;
    }
    (H.uid = 1),
      (H.prototype = {
        register: function (t, e) {
          var n = e || {};
          return (
            t.nodeType
              ? (t[this.expando] = n)
              : Object.defineProperty(t, this.expando, {
                  value: n,
                  writable: !0,
                  configurable: !0,
                }),
            t[this.expando]
          );
        },
        cache: function (t) {
          if (!j(t)) return {};
          var e = t[this.expando];
          return (
            e ||
              ((e = {}),
              j(t) &&
                (t.nodeType
                  ? (t[this.expando] = e)
                  : Object.defineProperty(t, this.expando, {
                      value: e,
                      configurable: !0,
                    }))),
            e
          );
        },
        set: function (t, e, n) {
          var i,
            o = this.cache(t);
          if ("string" == typeof e) o[e] = n;
          else for (i in e) o[i] = e[i];
          return o;
        },
        get: function (t, e) {
          return void 0 === e
            ? this.cache(t)
            : t[this.expando] && t[this.expando][e];
        },
        access: function (t, e, n) {
          var i;
          return void 0 === e || (e && "string" == typeof e && void 0 === n)
            ? void 0 !== (i = this.get(t, e))
              ? i
              : this.get(t, f.camelCase(e))
            : (this.set(t, e, n), void 0 !== n ? n : e);
        },
        remove: function (t, e) {
          var n,
            i,
            o,
            s = t[this.expando];
          if (void 0 !== s) {
            if (void 0 === e) this.register(t);
            else {
              f.isArray(e)
                ? (i = e.concat(e.map(f.camelCase)))
                : ((o = f.camelCase(e)),
                  (i =
                    e in s ? [e, o] : (i = o) in s ? [i] : i.match(N) || [])),
                (n = i.length);
              for (; n--; ) delete s[i[n]];
            }
            (void 0 === e || f.isEmptyObject(s)) &&
              (t.nodeType
                ? (t[this.expando] = void 0)
                : delete t[this.expando]);
          }
        },
        hasData: function (t) {
          var e = t[this.expando];
          return void 0 !== e && !f.isEmptyObject(e);
        },
      });
    var I = new H(),
      P = new H(),
      L = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      W = /[A-Z]/g;
    function F(t, e, n) {
      var i;
      if (void 0 === n && 1 === t.nodeType)
        if (
          ((i = "data-" + e.replace(W, "-$&").toLowerCase()),
          "string" == typeof (n = t.getAttribute(i)))
        ) {
          try {
            n =
              "true" === n ||
              ("false" !== n &&
                ("null" === n
                  ? null
                  : +n + "" === n
                  ? +n
                  : L.test(n)
                  ? f.parseJSON(n)
                  : n));
          } catch (t) {}
          P.set(t, e, n);
        } else n = void 0;
      return n;
    }
    f.extend({
      hasData: function (t) {
        return P.hasData(t) || I.hasData(t);
      },
      data: function (t, e, n) {
        return P.access(t, e, n);
      },
      removeData: function (t, e) {
        P.remove(t, e);
      },
      _data: function (t, e, n) {
        return I.access(t, e, n);
      },
      _removeData: function (t, e) {
        I.remove(t, e);
      },
    }),
      f.fn.extend({
        data: function (t, e) {
          var n,
            i,
            o,
            s = this[0],
            r = s && s.attributes;
          if (void 0 === t) {
            if (
              this.length &&
              ((o = P.get(s)), 1 === s.nodeType && !I.get(s, "hasDataAttrs"))
            ) {
              for (n = r.length; n--; )
                r[n] &&
                  0 === (i = r[n].name).indexOf("data-") &&
                  ((i = f.camelCase(i.slice(5))), F(s, i, o[i]));
              I.set(s, "hasDataAttrs", !0);
            }
            return o;
          }
          return "object" == typeof t
            ? this.each(function () {
                P.set(this, t);
              })
            : Y(
                this,
                function (e) {
                  var n, i;
                  if (s && void 0 === e)
                    return void 0 !==
                      (n =
                        P.get(s, t) ||
                        P.get(s, t.replace(W, "-$&").toLowerCase()))
                      ? n
                      : ((i = f.camelCase(t)),
                        void 0 !== (n = P.get(s, i)) ||
                        void 0 !== (n = F(s, i, void 0))
                          ? n
                          : void 0);
                  (i = f.camelCase(t)),
                    this.each(function () {
                      var n = P.get(this, i);
                      P.set(this, i, e),
                        t.indexOf("-") > -1 &&
                          void 0 !== n &&
                          P.set(this, t, e);
                    });
                },
                null,
                e,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (t) {
          return this.each(function () {
            P.remove(this, t);
          });
        },
      }),
      f.extend({
        queue: function (t, e, n) {
          var i;
          if (t)
            return (
              (e = (e || "fx") + "queue"),
              (i = I.get(t, e)),
              n &&
                (!i || f.isArray(n)
                  ? (i = I.access(t, e, f.makeArray(n)))
                  : i.push(n)),
              i || []
            );
        },
        dequeue: function (t, e) {
          e = e || "fx";
          var n = f.queue(t, e),
            i = n.length,
            o = n.shift(),
            s = f._queueHooks(t, e);
          "inprogress" === o && ((o = n.shift()), i--),
            o &&
              ("fx" === e && n.unshift("inprogress"),
              delete s.stop,
              o.call(
                t,
                function () {
                  f.dequeue(t, e);
                },
                s
              )),
            !i && s && s.empty.fire();
        },
        _queueHooks: function (t, e) {
          var n = e + "queueHooks";
          return (
            I.get(t, n) ||
            I.access(t, n, {
              empty: f.Callbacks("once memory").add(function () {
                I.remove(t, [e + "queue", n]);
              }),
            })
          );
        },
      }),
      f.fn.extend({
        queue: function (t, e) {
          var n = 2;
          return (
            "string" != typeof t && ((e = t), (t = "fx"), n--),
            arguments.length < n
              ? f.queue(this[0], t)
              : void 0 === e
              ? this
              : this.each(function () {
                  var n = f.queue(this, t, e);
                  f._queueHooks(this, t),
                    "fx" === t && "inprogress" !== n[0] && f.dequeue(this, t);
                })
          );
        },
        dequeue: function (t) {
          return this.each(function () {
            f.dequeue(this, t);
          });
        },
        clearQueue: function (t) {
          return this.queue(t || "fx", []);
        },
        promise: function (t, e) {
          var n,
            i = 1,
            o = f.Deferred(),
            s = this,
            r = this.length,
            a = function () {
              --i || o.resolveWith(s, [s]);
            };
          for (
            "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
            r--;

          )
            (n = I.get(s[r], t + "queueHooks")) &&
              n.empty &&
              (i++, n.empty.add(a));
          return a(), o.promise(e);
        },
      });
    var R = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      q = new RegExp("^(?:([+-])=|)(" + R + ")([a-z%]*)$", "i"),
      U = ["Top", "Right", "Bottom", "Left"],
      V = function (t, e) {
        return (
          (t = e || t),
          "none" === f.css(t, "display") || !f.contains(t.ownerDocument, t)
        );
      };
    function z(t, e, n, i) {
      var o,
        s = 1,
        r = 20,
        a = i
          ? function () {
              return i.cur();
            }
          : function () {
              return f.css(t, e, "");
            },
        l = a(),
        u = (n && n[3]) || (f.cssNumber[e] ? "" : "px"),
        c = (f.cssNumber[e] || ("px" !== u && +l)) && q.exec(f.css(t, e));
      if (c && c[3] !== u) {
        (u = u || c[3]), (n = n || []), (c = +l || 1);
        do {
          (c /= s = s || ".5"), f.style(t, e, c + u);
        } while (s !== (s = a() / l) && 1 !== s && --r);
      }
      return (
        n &&
          ((c = +c || +l || 0),
          (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
          i && ((i.unit = u), (i.start = c), (i.end = o))),
        o
      );
    }
    var B = /^(?:checkbox|radio)$/i,
      G = /<([\w:-]+)/,
      Q = /^$|\/(?:java|ecma)script/i,
      Z = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    function X(t, e) {
      var n =
        void 0 !== t.getElementsByTagName
          ? t.getElementsByTagName(e || "*")
          : void 0 !== t.querySelectorAll
          ? t.querySelectorAll(e || "*")
          : [];
      return void 0 === e || (e && f.nodeName(t, e)) ? f.merge([t], n) : n;
    }
    function J(t, e) {
      for (var n = 0, i = t.length; n < i; n++)
        I.set(t[n], "globalEval", !e || I.get(e[n], "globalEval"));
    }
    (Z.optgroup = Z.option),
      (Z.tbody = Z.tfoot = Z.colgroup = Z.caption = Z.thead),
      (Z.th = Z.td);
    var K,
      tt,
      et = /<|&#?\w+;/;
    function nt(t, e, n, i, o) {
      for (
        var s,
          r,
          a,
          l,
          u,
          c,
          d = e.createDocumentFragment(),
          h = [],
          p = 0,
          m = t.length;
        p < m;
        p++
      )
        if ((s = t[p]) || 0 === s)
          if ("object" === f.type(s)) f.merge(h, s.nodeType ? [s] : s);
          else if (et.test(s)) {
            for (
              r = r || d.appendChild(e.createElement("div")),
                a = (G.exec(s) || ["", ""])[1].toLowerCase(),
                l = Z[a] || Z._default,
                r.innerHTML = l[1] + f.htmlPrefilter(s) + l[2],
                c = l[0];
              c--;

            )
              r = r.lastChild;
            f.merge(h, r.childNodes), ((r = d.firstChild).textContent = "");
          } else h.push(e.createTextNode(s));
      for (d.textContent = "", p = 0; (s = h[p++]); )
        if (i && f.inArray(s, i) > -1) o && o.push(s);
        else if (
          ((u = f.contains(s.ownerDocument, s)),
          (r = X(d.appendChild(s), "script")),
          u && J(r),
          n)
        )
          for (c = 0; (s = r[c++]); ) Q.test(s.type || "") && n.push(s);
      return d;
    }
    (K = i.createDocumentFragment().appendChild(i.createElement("div"))),
      (tt = i.createElement("input")).setAttribute("type", "radio"),
      tt.setAttribute("checked", "checked"),
      tt.setAttribute("name", "t"),
      K.appendChild(tt),
      (d.checkClone = K.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (K.innerHTML = "<textarea>x</textarea>"),
      (d.noCloneChecked = !!K.cloneNode(!0).lastChild.defaultValue);
    var it = /^key/,
      ot = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      st = /^([^.]*)(?:\.(.+)|)/;
    function rt() {
      return !0;
    }
    function at() {
      return !1;
    }
    function lt() {
      try {
        return i.activeElement;
      } catch (t) {}
    }
    function ut(t, e, n, i, o, s) {
      var r, a;
      if ("object" == typeof e) {
        for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), e))
          ut(t, a, n, i, e[a], s);
        return t;
      }
      if (
        (null == i && null == o
          ? ((o = n), (i = n = void 0))
          : null == o &&
            ("string" == typeof n
              ? ((o = i), (i = void 0))
              : ((o = i), (i = n), (n = void 0))),
        !1 === o)
      )
        o = at;
      else if (!o) return t;
      return (
        1 === s &&
          ((r = o),
          (o = function (t) {
            return f().off(t), r.apply(this, arguments);
          }),
          (o.guid = r.guid || (r.guid = f.guid++))),
        t.each(function () {
          f.event.add(this, e, o, i, n);
        })
      );
    }
    (f.event = {
      global: {},
      add: function (t, e, n, i, o) {
        var s,
          r,
          a,
          l,
          u,
          c,
          d,
          h,
          p,
          m,
          g,
          v = I.get(t);
        if (v)
          for (
            n.handler && ((n = (s = n).handler), (o = s.selector)),
              n.guid || (n.guid = f.guid++),
              (l = v.events) || (l = v.events = {}),
              (r = v.handle) ||
                (r = v.handle =
                  function (e) {
                    return void 0 !== f && f.event.triggered !== e.type
                      ? f.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
              u = (e = (e || "").match(N) || [""]).length;
            u--;

          )
            (p = g = (a = st.exec(e[u]) || [])[1]),
              (m = (a[2] || "").split(".").sort()),
              p &&
                ((d = f.event.special[p] || {}),
                (p = (o ? d.delegateType : d.bindType) || p),
                (d = f.event.special[p] || {}),
                (c = f.extend(
                  {
                    type: p,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && f.expr.match.needsContext.test(o),
                    namespace: m.join("."),
                  },
                  s
                )),
                (h = l[p]) ||
                  (((h = l[p] = []).delegateCount = 0),
                  (d.setup && !1 !== d.setup.call(t, i, m, r)) ||
                    (t.addEventListener && t.addEventListener(p, r))),
                d.add &&
                  (d.add.call(t, c),
                  c.handler.guid || (c.handler.guid = n.guid)),
                o ? h.splice(h.delegateCount++, 0, c) : h.push(c),
                (f.event.global[p] = !0));
      },
      remove: function (t, e, n, i, o) {
        var s,
          r,
          a,
          l,
          u,
          c,
          d,
          h,
          p,
          m,
          g,
          v = I.hasData(t) && I.get(t);
        if (v && (l = v.events)) {
          for (u = (e = (e || "").match(N) || [""]).length; u--; )
            if (
              ((p = g = (a = st.exec(e[u]) || [])[1]),
              (m = (a[2] || "").split(".").sort()),
              p)
            ) {
              for (
                d = f.event.special[p] || {},
                  h = l[(p = (i ? d.delegateType : d.bindType) || p)] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  r = s = h.length;
                s--;

              )
                (c = h[s]),
                  (!o && g !== c.origType) ||
                    (n && n.guid !== c.guid) ||
                    (a && !a.test(c.namespace)) ||
                    (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                    (h.splice(s, 1),
                    c.selector && h.delegateCount--,
                    d.remove && d.remove.call(t, c));
              r &&
                !h.length &&
                ((d.teardown && !1 !== d.teardown.call(t, m, v.handle)) ||
                  f.removeEvent(t, p, v.handle),
                delete l[p]);
            } else for (p in l) f.event.remove(t, p + e[u], n, i, !0);
          f.isEmptyObject(l) && I.remove(t, "handle events");
        }
      },
      dispatch: function (t) {
        t = f.event.fix(t);
        var e,
          n,
          i,
          s,
          r,
          a = [],
          l = o.call(arguments),
          u = (I.get(this, "events") || {})[t.type] || [],
          c = f.event.special[t.type] || {};
        if (
          ((l[0] = t),
          (t.delegateTarget = this),
          !c.preDispatch || !1 !== c.preDispatch.call(this, t))
        ) {
          for (
            a = f.event.handlers.call(this, t, u), e = 0;
            (s = a[e++]) && !t.isPropagationStopped();

          )
            for (
              t.currentTarget = s.elem, n = 0;
              (r = s.handlers[n++]) && !t.isImmediatePropagationStopped();

            )
              (t.rnamespace && !t.rnamespace.test(r.namespace)) ||
                ((t.handleObj = r),
                (t.data = r.data),
                void 0 !==
                  (i = (
                    (f.event.special[r.origType] || {}).handle || r.handler
                  ).apply(s.elem, l)) &&
                  !1 === (t.result = i) &&
                  (t.preventDefault(), t.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, t), t.result;
        }
      },
      handlers: function (t, e) {
        var n,
          i,
          o,
          s,
          r = [],
          a = e.delegateCount,
          l = t.target;
        if (
          a &&
          l.nodeType &&
          ("click" !== t.type || isNaN(t.button) || t.button < 1)
        )
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
              for (i = [], n = 0; n < a; n++)
                void 0 === i[(o = (s = e[n]).selector + " ")] &&
                  (i[o] = s.needsContext
                    ? f(o, this).index(l) > -1
                    : f.find(o, this, null, [l]).length),
                  i[o] && i.push(s);
              i.length && r.push({ elem: l, handlers: i });
            }
        return a < e.length && r.push({ elem: this, handlers: e.slice(a) }), r;
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (t, e) {
          return (
            null == t.which &&
              (t.which = null != e.charCode ? e.charCode : e.keyCode),
            t
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (t, e) {
          var n,
            o,
            s,
            r = e.button;
          return (
            null == t.pageX &&
              null != e.clientX &&
              ((o = (n = t.target.ownerDocument || i).documentElement),
              (s = n.body),
              (t.pageX =
                e.clientX +
                ((o && o.scrollLeft) || (s && s.scrollLeft) || 0) -
                ((o && o.clientLeft) || (s && s.clientLeft) || 0)),
              (t.pageY =
                e.clientY +
                ((o && o.scrollTop) || (s && s.scrollTop) || 0) -
                ((o && o.clientTop) || (s && s.clientTop) || 0))),
            t.which ||
              void 0 === r ||
              (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
            t
          );
        },
      },
      fix: function (t) {
        if (t[f.expando]) return t;
        var e,
          n,
          o,
          s = t.type,
          r = t,
          a = this.fixHooks[s];
        for (
          a ||
            (this.fixHooks[s] = a =
              ot.test(s) ? this.mouseHooks : it.test(s) ? this.keyHooks : {}),
            o = a.props ? this.props.concat(a.props) : this.props,
            t = new f.Event(r),
            e = o.length;
          e--;

        )
          t[(n = o[e])] = r[n];
        return (
          t.target || (t.target = i),
          3 === t.target.nodeType && (t.target = t.target.parentNode),
          a.filter ? a.filter(t, r) : t
        );
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            if (this !== lt() && this.focus) return this.focus(), !1;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            if (this === lt() && this.blur) return this.blur(), !1;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            if (
              "checkbox" === this.type &&
              this.click &&
              f.nodeName(this, "input")
            )
              return this.click(), !1;
          },
          _default: function (t) {
            return f.nodeName(t.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (t) {
            void 0 !== t.result &&
              t.originalEvent &&
              (t.originalEvent.returnValue = t.result);
          },
        },
      },
    }),
      (f.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n);
      }),
      (f.Event = function (t, e) {
        if (!(this instanceof f.Event)) return new f.Event(t, e);
        t && t.type
          ? ((this.originalEvent = t),
            (this.type = t.type),
            (this.isDefaultPrevented =
              t.defaultPrevented ||
              (void 0 === t.defaultPrevented && !1 === t.returnValue)
                ? rt
                : at))
          : (this.type = t),
          e && f.extend(this, e),
          (this.timeStamp = (t && t.timeStamp) || f.now()),
          (this[f.expando] = !0);
      }),
      (f.Event.prototype = {
        constructor: f.Event,
        isDefaultPrevented: at,
        isPropagationStopped: at,
        isImmediatePropagationStopped: at,
        isSimulated: !1,
        preventDefault: function () {
          var t = this.originalEvent;
          (this.isDefaultPrevented = rt),
            t && !this.isSimulated && t.preventDefault();
        },
        stopPropagation: function () {
          var t = this.originalEvent;
          (this.isPropagationStopped = rt),
            t && !this.isSimulated && t.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var t = this.originalEvent;
          (this.isImmediatePropagationStopped = rt),
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      f.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (t, e) {
          f.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
              var n,
                i = this,
                o = t.relatedTarget,
                s = t.handleObj;
              return (
                (o && (o === i || f.contains(i, o))) ||
                  ((t.type = s.origType),
                  (n = s.handler.apply(this, arguments)),
                  (t.type = e)),
                n
              );
            },
          };
        }
      ),
      f.fn.extend({
        on: function (t, e, n, i) {
          return ut(this, t, e, n, i);
        },
        one: function (t, e, n, i) {
          return ut(this, t, e, n, i, 1);
        },
        off: function (t, e, n) {
          var i, o;
          if (t && t.preventDefault && t.handleObj)
            return (
              (i = t.handleObj),
              f(t.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" == typeof t) {
            for (o in t) this.off(o, e, t[o]);
            return this;
          }
          return (
            (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
            !1 === n && (n = at),
            this.each(function () {
              f.event.remove(this, t, n, e);
            })
          );
        },
      });
    var ct =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      dt = /<script|<style|<link/i,
      ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ft = /^true\/(.*)/,
      pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function mt(t, e) {
      return f.nodeName(t, "table") &&
        f.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr")
        ? t.getElementsByTagName("tbody")[0] ||
            t.appendChild(t.ownerDocument.createElement("tbody"))
        : t;
    }
    function gt(t) {
      return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
    }
    function vt(t) {
      var e = ft.exec(t.type);
      return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
    }
    function yt(t, e) {
      var n, i, o, s, r, a, l, u;
      if (1 === e.nodeType) {
        if (
          I.hasData(t) &&
          ((s = I.access(t)), (r = I.set(e, s)), (u = s.events))
        )
          for (o in (delete r.handle, (r.events = {}), u))
            for (n = 0, i = u[o].length; n < i; n++) f.event.add(e, o, u[o][n]);
        P.hasData(t) && ((a = P.access(t)), (l = f.extend({}, a)), P.set(e, l));
      }
    }
    function wt(t, e, n, i) {
      e = s.apply([], e);
      var o,
        r,
        a,
        l,
        u,
        c,
        h = 0,
        p = t.length,
        m = p - 1,
        g = e[0],
        v = f.isFunction(g);
      if (v || (p > 1 && "string" == typeof g && !d.checkClone && ht.test(g)))
        return t.each(function (o) {
          var s = t.eq(o);
          v && (e[0] = g.call(this, o, s.html())), wt(s, e, n, i);
        });
      if (
        p &&
        ((r = (o = nt(e, t[0].ownerDocument, !1, t, i)).firstChild),
        1 === o.childNodes.length && (o = r),
        r || i)
      ) {
        for (l = (a = f.map(X(o, "script"), gt)).length; h < p; h++)
          (u = o),
            h !== m &&
              ((u = f.clone(u, !0, !0)), l && f.merge(a, X(u, "script"))),
            n.call(t[h], u, h);
        if (l)
          for (
            c = a[a.length - 1].ownerDocument, f.map(a, vt), h = 0;
            h < l;
            h++
          )
            (u = a[h]),
              Q.test(u.type || "") &&
                !I.access(u, "globalEval") &&
                f.contains(c, u) &&
                (u.src
                  ? f._evalUrl && f._evalUrl(u.src)
                  : f.globalEval(u.textContent.replace(pt, "")));
      }
      return t;
    }
    function bt(t, e, n) {
      for (var i, o = e ? f.filter(e, t) : t, s = 0; null != (i = o[s]); s++)
        n || 1 !== i.nodeType || f.cleanData(X(i)),
          i.parentNode &&
            (n && f.contains(i.ownerDocument, i) && J(X(i, "script")),
            i.parentNode.removeChild(i));
      return t;
    }
    f.extend({
      htmlPrefilter: function (t) {
        return t.replace(ct, "<$1></$2>");
      },
      clone: function (t, e, n) {
        var i,
          o,
          s,
          r,
          a,
          l,
          u,
          c = t.cloneNode(!0),
          h = f.contains(t.ownerDocument, t);
        if (
          !(
            d.noCloneChecked ||
            (1 !== t.nodeType && 11 !== t.nodeType) ||
            f.isXMLDoc(t)
          )
        )
          for (r = X(c), i = 0, o = (s = X(t)).length; i < o; i++)
            (a = s[i]),
              (l = r[i]),
              (u = void 0),
              "input" === (u = l.nodeName.toLowerCase()) && B.test(a.type)
                ? (l.checked = a.checked)
                : ("input" !== u && "textarea" !== u) ||
                  (l.defaultValue = a.defaultValue);
        if (e)
          if (n)
            for (s = s || X(t), r = r || X(c), i = 0, o = s.length; i < o; i++)
              yt(s[i], r[i]);
          else yt(t, c);
        return (r = X(c, "script")).length > 0 && J(r, !h && X(t, "script")), c;
      },
      cleanData: function (t) {
        for (
          var e, n, i, o = f.event.special, s = 0;
          void 0 !== (n = t[s]);
          s++
        )
          if (j(n)) {
            if ((e = n[I.expando])) {
              if (e.events)
                for (i in e.events)
                  o[i] ? f.event.remove(n, i) : f.removeEvent(n, i, e.handle);
              n[I.expando] = void 0;
            }
            n[P.expando] && (n[P.expando] = void 0);
          }
      },
    }),
      f.fn.extend({
        domManip: wt,
        detach: function (t) {
          return bt(this, t, !0);
        },
        remove: function (t) {
          return bt(this, t);
        },
        text: function (t) {
          return Y(
            this,
            function (t) {
              return void 0 === t
                ? f.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = t);
                  });
            },
            null,
            t,
            arguments.length
          );
        },
        append: function () {
          return wt(this, arguments, function (t) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              mt(this, t).appendChild(t);
          });
        },
        prepend: function () {
          return wt(this, arguments, function (t) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var e = mt(this, t);
              e.insertBefore(t, e.firstChild);
            }
          });
        },
        before: function () {
          return wt(this, arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this);
          });
        },
        after: function () {
          return wt(this, arguments, function (t) {
            this.parentNode &&
              this.parentNode.insertBefore(t, this.nextSibling);
          });
        },
        empty: function () {
          for (var t, e = 0; null != (t = this[e]); e++)
            1 === t.nodeType && (f.cleanData(X(t, !1)), (t.textContent = ""));
          return this;
        },
        clone: function (t, e) {
          return (
            (t = null != t && t),
            (e = null == e ? t : e),
            this.map(function () {
              return f.clone(this, t, e);
            })
          );
        },
        html: function (t) {
          return Y(
            this,
            function (t) {
              var e = this[0] || {},
                n = 0,
                i = this.length;
              if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
              if (
                "string" == typeof t &&
                !dt.test(t) &&
                !Z[(G.exec(t) || ["", ""])[1].toLowerCase()]
              ) {
                t = f.htmlPrefilter(t);
                try {
                  for (; n < i; n++)
                    1 === (e = this[n] || {}).nodeType &&
                      (f.cleanData(X(e, !1)), (e.innerHTML = t));
                  e = 0;
                } catch (t) {}
              }
              e && this.empty().append(t);
            },
            null,
            t,
            arguments.length
          );
        },
        replaceWith: function () {
          var t = [];
          return wt(
            this,
            arguments,
            function (e) {
              var n = this.parentNode;
              f.inArray(this, t) < 0 &&
                (f.cleanData(X(this)), n && n.replaceChild(e, this));
            },
            t
          );
        },
      }),
      f.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (t, e) {
          f.fn[t] = function (t) {
            for (var n, i = [], o = f(t), s = o.length - 1, a = 0; a <= s; a++)
              (n = a === s ? this : this.clone(!0)),
                f(o[a])[e](n),
                r.apply(i, n.get());
            return this.pushStack(i);
          };
        }
      );
    var xt,
      St = { HTML: "block", BODY: "block" };
    function Tt(t, e) {
      var n = f(e.createElement(t)).appendTo(e.body),
        i = f.css(n[0], "display");
      return n.detach(), i;
    }
    function kt(t) {
      var e = i,
        n = St[t];
      return (
        n ||
          (("none" !== (n = Tt(t, e)) && n) ||
            ((e = (xt = (
              xt || f("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(e.documentElement))[0].contentDocument).write(),
            e.close(),
            (n = Tt(t, e)),
            xt.detach()),
          (St[t] = n)),
        n
      );
    }
    var _t = /^margin/,
      Mt = new RegExp("^(" + R + ")(?!px)[a-z%]+$", "i"),
      $t = function (e) {
        var n = e.ownerDocument.defaultView;
        return (n && n.opener) || (n = t), n.getComputedStyle(e);
      },
      Ct = function (t, e, n, i) {
        var o,
          s,
          r = {};
        for (s in e) (r[s] = t.style[s]), (t.style[s] = e[s]);
        for (s in ((o = n.apply(t, i || [])), e)) t.style[s] = r[s];
        return o;
      },
      Dt = i.documentElement;
    function Et(t, e, n) {
      var i,
        o,
        s,
        r,
        a = t.style;
      return (
        ("" !==
          (r = (n = n || $t(t)) ? n.getPropertyValue(e) || n[e] : void 0) &&
          void 0 !== r) ||
          f.contains(t.ownerDocument, t) ||
          (r = f.style(t, e)),
        n &&
          !d.pixelMarginRight() &&
          Mt.test(r) &&
          _t.test(e) &&
          ((i = a.width),
          (o = a.minWidth),
          (s = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = r),
          (r = n.width),
          (a.width = i),
          (a.minWidth = o),
          (a.maxWidth = s)),
        void 0 !== r ? r + "" : r
      );
    }
    function Ot(t, e) {
      return {
        get: function () {
          if (!t()) return (this.get = e).apply(this, arguments);
          delete this.get;
        },
      };
    }
    !(function () {
      var e,
        n,
        o,
        s,
        r = i.createElement("div"),
        a = i.createElement("div");
      function l() {
        (a.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (a.innerHTML = ""),
          Dt.appendChild(r);
        var i = t.getComputedStyle(a);
        (e = "1%" !== i.top),
          (s = "2px" === i.marginLeft),
          (n = "4px" === i.width),
          (a.style.marginRight = "50%"),
          (o = "4px" === i.marginRight),
          Dt.removeChild(r);
      }
      a.style &&
        ((a.style.backgroundClip = "content-box"),
        (a.cloneNode(!0).style.backgroundClip = ""),
        (d.clearCloneStyle = "content-box" === a.style.backgroundClip),
        (r.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        r.appendChild(a),
        f.extend(d, {
          pixelPosition: function () {
            return l(), e;
          },
          boxSizingReliable: function () {
            return null == n && l(), n;
          },
          pixelMarginRight: function () {
            return null == n && l(), o;
          },
          reliableMarginLeft: function () {
            return null == n && l(), s;
          },
          reliableMarginRight: function () {
            var e,
              n = a.appendChild(i.createElement("div"));
            return (
              (n.style.cssText = a.style.cssText =
                "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (n.style.marginRight = n.style.width = "0"),
              (a.style.width = "1px"),
              Dt.appendChild(r),
              (e = !parseFloat(t.getComputedStyle(n).marginRight)),
              Dt.removeChild(r),
              a.removeChild(n),
              e
            );
          },
        }));
    })();
    var Nt = /^(none|table(?!-c[ea]).+)/,
      At = { position: "absolute", visibility: "hidden", display: "block" },
      Yt = { letterSpacing: "0", fontWeight: "400" },
      jt = ["Webkit", "O", "Moz", "ms"],
      Ht = i.createElement("div").style;
    function It(t) {
      if (t in Ht) return t;
      for (var e = t[0].toUpperCase() + t.slice(1), n = jt.length; n--; )
        if ((t = jt[n] + e) in Ht) return t;
    }
    function Pt(t, e, n) {
      var i = q.exec(e);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
    }
    function Lt(t, e, n, i, o) {
      for (
        var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
          r = 0;
        s < 4;
        s += 2
      )
        "margin" === n && (r += f.css(t, n + U[s], !0, o)),
          i
            ? ("content" === n && (r -= f.css(t, "padding" + U[s], !0, o)),
              "margin" !== n &&
                (r -= f.css(t, "border" + U[s] + "Width", !0, o)))
            : ((r += f.css(t, "padding" + U[s], !0, o)),
              "padding" !== n &&
                (r += f.css(t, "border" + U[s] + "Width", !0, o)));
      return r;
    }
    function Wt(t, e, n) {
      var i = !0,
        o = "width" === e ? t.offsetWidth : t.offsetHeight,
        s = $t(t),
        r = "border-box" === f.css(t, "boxSizing", !1, s);
      if (o <= 0 || null == o) {
        if (
          (((o = Et(t, e, s)) < 0 || null == o) && (o = t.style[e]), Mt.test(o))
        )
          return o;
        (i = r && (d.boxSizingReliable() || o === t.style[e])),
          (o = parseFloat(o) || 0);
      }
      return o + Lt(t, e, n || (r ? "border" : "content"), i, s) + "px";
    }
    function Ft(t, e) {
      for (var n, i, o, s = [], r = 0, a = t.length; r < a; r++)
        (i = t[r]).style &&
          ((s[r] = I.get(i, "olddisplay")),
          (n = i.style.display),
          e
            ? (s[r] || "none" !== n || (i.style.display = ""),
              "" === i.style.display &&
                V(i) &&
                (s[r] = I.access(i, "olddisplay", kt(i.nodeName))))
            : ((o = V(i)),
              ("none" === n && o) ||
                I.set(i, "olddisplay", o ? n : f.css(i, "display"))));
      for (r = 0; r < a; r++)
        (i = t[r]).style &&
          ((e && "none" !== i.style.display && "" !== i.style.display) ||
            (i.style.display = e ? s[r] || "" : "none"));
      return t;
    }
    function Rt(t, e, n, i, o) {
      return new Rt.prototype.init(t, e, n, i, o);
    }
    f.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var n = Et(t, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: "cssFloat" },
      style: function (t, e, n, i) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var o,
            s,
            r,
            a = f.camelCase(e),
            l = t.style;
          if (
            ((e = f.cssProps[a] || (f.cssProps[a] = It(a) || a)),
            (r = f.cssHooks[e] || f.cssHooks[a]),
            void 0 === n)
          )
            return r && "get" in r && void 0 !== (o = r.get(t, !1, i))
              ? o
              : l[e];
          "string" === (s = typeof n) &&
            (o = q.exec(n)) &&
            o[1] &&
            ((n = z(t, e, o)), (s = "number")),
            null != n &&
              n == n &&
              ("number" === s &&
                (n += (o && o[3]) || (f.cssNumber[a] ? "" : "px")),
              d.clearCloneStyle ||
                "" !== n ||
                0 !== e.indexOf("background") ||
                (l[e] = "inherit"),
              (r && "set" in r && void 0 === (n = r.set(t, n, i))) ||
                (l[e] = n));
        }
      },
      css: function (t, e, n, i) {
        var o,
          s,
          r,
          a = f.camelCase(e);
        return (
          (e = f.cssProps[a] || (f.cssProps[a] = It(a) || a)),
          (r = f.cssHooks[e] || f.cssHooks[a]) &&
            "get" in r &&
            (o = r.get(t, !0, n)),
          void 0 === o && (o = Et(t, e, i)),
          "normal" === o && e in Yt && (o = Yt[e]),
          "" === n || n
            ? ((s = parseFloat(o)), !0 === n || isFinite(s) ? s || 0 : o)
            : o
        );
      },
    }),
      f.each(["height", "width"], function (t, e) {
        f.cssHooks[e] = {
          get: function (t, n, i) {
            if (n)
              return Nt.test(f.css(t, "display")) && 0 === t.offsetWidth
                ? Ct(t, At, function () {
                    return Wt(t, e, i);
                  })
                : Wt(t, e, i);
          },
          set: function (t, n, i) {
            var o,
              s = i && $t(t),
              r =
                i &&
                Lt(t, e, i, "border-box" === f.css(t, "boxSizing", !1, s), s);
            return (
              r &&
                (o = q.exec(n)) &&
                "px" !== (o[3] || "px") &&
                ((t.style[e] = n), (n = f.css(t, e))),
              Pt(0, n, r)
            );
          },
        };
      }),
      (f.cssHooks.marginLeft = Ot(d.reliableMarginLeft, function (t, e) {
        if (e)
          return (
            (parseFloat(Et(t, "marginLeft")) ||
              t.getBoundingClientRect().left -
                Ct(t, { marginLeft: 0 }, function () {
                  return t.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      (f.cssHooks.marginRight = Ot(d.reliableMarginRight, function (t, e) {
        if (e)
          return Ct(t, { display: "inline-block" }, Et, [t, "marginRight"]);
      })),
      f.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
        (f.cssHooks[t + e] = {
          expand: function (n) {
            for (
              var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n];
              i < 4;
              i++
            )
              o[t + U[i] + e] = s[i] || s[i - 2] || s[0];
            return o;
          },
        }),
          _t.test(t) || (f.cssHooks[t + e].set = Pt);
      }),
      f.fn.extend({
        css: function (t, e) {
          return Y(
            this,
            function (t, e, n) {
              var i,
                o,
                s = {},
                r = 0;
              if (f.isArray(e)) {
                for (i = $t(t), o = e.length; r < o; r++)
                  s[e[r]] = f.css(t, e[r], !1, i);
                return s;
              }
              return void 0 !== n ? f.style(t, e, n) : f.css(t, e);
            },
            t,
            e,
            arguments.length > 1
          );
        },
        show: function () {
          return Ft(this, !0);
        },
        hide: function () {
          return Ft(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                V(this) ? f(this).show() : f(this).hide();
              });
        },
      }),
      (f.Tween = Rt),
      (Rt.prototype = {
        constructor: Rt,
        init: function (t, e, n, i, o, s) {
          (this.elem = t),
            (this.prop = n),
            (this.easing = o || f.easing._default),
            (this.options = e),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = s || (f.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var t = Rt.propHooks[this.prop];
          return t && t.get ? t.get(this) : Rt.propHooks._default.get(this);
        },
        run: function (t) {
          var e,
            n = Rt.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = e =
                  f.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = e = t),
            (this.now = (this.end - this.start) * e + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Rt.propHooks._default.set(this),
            this
          );
        },
      }),
      (Rt.prototype.init.prototype = Rt.prototype),
      (Rt.propHooks = {
        _default: {
          get: function (t) {
            var e;
            return 1 !== t.elem.nodeType ||
              (null != t.elem[t.prop] && null == t.elem.style[t.prop])
              ? t.elem[t.prop]
              : (e = f.css(t.elem, t.prop, "")) && "auto" !== e
              ? e
              : 0;
          },
          set: function (t) {
            f.fx.step[t.prop]
              ? f.fx.step[t.prop](t)
              : 1 !== t.elem.nodeType ||
                (null == t.elem.style[f.cssProps[t.prop]] &&
                  !f.cssHooks[t.prop])
              ? (t.elem[t.prop] = t.now)
              : f.style(t.elem, t.prop, t.now + t.unit);
          },
        },
      }),
      (Rt.propHooks.scrollTop = Rt.propHooks.scrollLeft =
        {
          set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          },
        }),
      (f.easing = {
        linear: function (t) {
          return t;
        },
        swing: function (t) {
          return 0.5 - Math.cos(t * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (f.fx = Rt.prototype.init),
      (f.fx.step = {});
    var qt,
      Ut,
      Vt = /^(?:toggle|show|hide)$/,
      zt = /queueHooks$/;
    function Bt() {
      return (
        t.setTimeout(function () {
          qt = void 0;
        }),
        (qt = f.now())
      );
    }
    function Gt(t, e) {
      var n,
        i = 0,
        o = { height: t };
      for (e = e ? 1 : 0; i < 4; i += 2 - e)
        o["margin" + (n = U[i])] = o["padding" + n] = t;
      return e && (o.opacity = o.width = t), o;
    }
    function Qt(t, e, n) {
      for (
        var i,
          o = (Zt.tweeners[e] || []).concat(Zt.tweeners["*"]),
          s = 0,
          r = o.length;
        s < r;
        s++
      )
        if ((i = o[s].call(n, e, t))) return i;
    }
    function Zt(t, e, n) {
      var i,
        o,
        s = 0,
        r = Zt.prefilters.length,
        a = f.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (o) return !1;
          for (
            var e = qt || Bt(),
              n = Math.max(0, u.startTime + u.duration - e),
              i = 1 - (n / u.duration || 0),
              s = 0,
              r = u.tweens.length;
            s < r;
            s++
          )
            u.tweens[s].run(i);
          return (
            a.notifyWith(t, [u, i, n]),
            i < 1 && r ? n : (a.resolveWith(t, [u]), !1)
          );
        },
        u = a.promise({
          elem: t,
          props: f.extend({}, e),
          opts: f.extend(
            !0,
            { specialEasing: {}, easing: f.easing._default },
            n
          ),
          originalProperties: e,
          originalOptions: n,
          startTime: qt || Bt(),
          duration: n.duration,
          tweens: [],
          createTween: function (e, n) {
            var i = f.Tween(
              t,
              u.opts,
              e,
              n,
              u.opts.specialEasing[e] || u.opts.easing
            );
            return u.tweens.push(i), i;
          },
          stop: function (e) {
            var n = 0,
              i = e ? u.tweens.length : 0;
            if (o) return this;
            for (o = !0; n < i; n++) u.tweens[n].run(1);
            return (
              e
                ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e]))
                : a.rejectWith(t, [u, e]),
              this
            );
          },
        }),
        c = u.props;
      for (
        !(function (t, e) {
          var n, i, o, s, r;
          for (n in t)
            if (
              ((o = e[(i = f.camelCase(n))]),
              (s = t[n]),
              f.isArray(s) && ((o = s[1]), (s = t[n] = s[0])),
              n !== i && ((t[i] = s), delete t[n]),
              (r = f.cssHooks[i]) && ("expand" in r))
            )
              for (n in ((s = r.expand(s)), delete t[i], s))
                (n in t) || ((t[n] = s[n]), (e[n] = o));
            else e[i] = o;
        })(c, u.opts.specialEasing);
        s < r;
        s++
      )
        if ((i = Zt.prefilters[s].call(u, t, c, u.opts)))
          return (
            f.isFunction(i.stop) &&
              (f._queueHooks(u.elem, u.opts.queue).stop = f.proxy(i.stop, i)),
            i
          );
      return (
        f.map(c, Qt, u),
        f.isFunction(u.opts.start) && u.opts.start.call(t, u),
        f.fx.timer(f.extend(l, { elem: t, anim: u, queue: u.opts.queue })),
        u
          .progress(u.opts.progress)
          .done(u.opts.done, u.opts.complete)
          .fail(u.opts.fail)
          .always(u.opts.always)
      );
    }
    (f.Animation = f.extend(Zt, {
      tweeners: {
        "*": [
          function (t, e) {
            var n = this.createTween(t, e);
            return z(n.elem, t, q.exec(e), n), n;
          },
        ],
      },
      tweener: function (t, e) {
        f.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.match(N));
        for (var n, i = 0, o = t.length; i < o; i++)
          (n = t[i]),
            (Zt.tweeners[n] = Zt.tweeners[n] || []),
            Zt.tweeners[n].unshift(e);
      },
      prefilters: [
        function (t, e, n) {
          var i,
            o,
            s,
            r,
            a,
            l,
            u,
            c = this,
            d = {},
            h = t.style,
            p = t.nodeType && V(t),
            m = I.get(t, "fxshow");
          for (i in (n.queue ||
            (null == (a = f._queueHooks(t, "fx")).unqueued &&
              ((a.unqueued = 0),
              (l = a.empty.fire),
              (a.empty.fire = function () {
                a.unqueued || l();
              })),
            a.unqueued++,
            c.always(function () {
              c.always(function () {
                a.unqueued--, f.queue(t, "fx").length || a.empty.fire();
              });
            })),
          1 === t.nodeType &&
            ("height" in e || "width" in e) &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            "inline" ===
              ("none" === (u = f.css(t, "display"))
                ? I.get(t, "olddisplay") || kt(t.nodeName)
                : u) &&
              "none" === f.css(t, "float") &&
              (h.display = "inline-block")),
          n.overflow &&
            ((h.overflow = "hidden"),
            c.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          e))
            if (((o = e[i]), Vt.exec(o))) {
              if (
                (delete e[i],
                (s = s || "toggle" === o),
                o === (p ? "hide" : "show"))
              ) {
                if ("show" !== o || !m || void 0 === m[i]) continue;
                p = !0;
              }
              d[i] = (m && m[i]) || f.style(t, i);
            } else u = void 0;
          if (f.isEmptyObject(d))
            "inline" === ("none" === u ? kt(t.nodeName) : u) && (h.display = u);
          else
            for (i in (m
              ? "hidden" in m && (p = m.hidden)
              : (m = I.access(t, "fxshow", {})),
            s && (m.hidden = !p),
            p
              ? f(t).show()
              : c.done(function () {
                  f(t).hide();
                }),
            c.done(function () {
              var e;
              for (e in (I.remove(t, "fxshow"), d)) f.style(t, e, d[e]);
            }),
            d))
              (r = Qt(p ? m[i] : 0, i, c)),
                i in m ||
                  ((m[i] = r.start),
                  p &&
                    ((r.end = r.start),
                    (r.start = "width" === i || "height" === i ? 1 : 0)));
        },
      ],
      prefilter: function (t, e) {
        e ? Zt.prefilters.unshift(t) : Zt.prefilters.push(t);
      },
    })),
      (f.speed = function (t, e, n) {
        var i =
          t && "object" == typeof t
            ? f.extend({}, t)
            : {
                complete: n || (!n && e) || (f.isFunction(t) && t),
                duration: t,
                easing: (n && e) || (e && !f.isFunction(e) && e),
              };
        return (
          (i.duration = f.fx.off
            ? 0
            : "number" == typeof i.duration
            ? i.duration
            : i.duration in f.fx.speeds
            ? f.fx.speeds[i.duration]
            : f.fx.speeds._default),
          (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            f.isFunction(i.old) && i.old.call(this),
              i.queue && f.dequeue(this, i.queue);
          }),
          i
        );
      }),
      f.fn.extend({
        fadeTo: function (t, e, n, i) {
          return this.filter(V)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: e }, t, n, i);
        },
        animate: function (t, e, n, i) {
          var o = f.isEmptyObject(t),
            s = f.speed(e, n, i),
            r = function () {
              var e = Zt(this, f.extend({}, t), s);
              (o || I.get(this, "finish")) && e.stop(!0);
            };
          return (
            (r.finish = r),
            o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
          );
        },
        stop: function (t, e, n) {
          var i = function (t) {
            var e = t.stop;
            delete t.stop, e(n);
          };
          return (
            "string" != typeof t && ((n = e), (e = t), (t = void 0)),
            e && !1 !== t && this.queue(t || "fx", []),
            this.each(function () {
              var e = !0,
                o = null != t && t + "queueHooks",
                s = f.timers,
                r = I.get(this);
              if (o) r[o] && r[o].stop && i(r[o]);
              else for (o in r) r[o] && r[o].stop && zt.test(o) && i(r[o]);
              for (o = s.length; o--; )
                s[o].elem !== this ||
                  (null != t && s[o].queue !== t) ||
                  (s[o].anim.stop(n), (e = !1), s.splice(o, 1));
              (!e && n) || f.dequeue(this, t);
            })
          );
        },
        finish: function (t) {
          return (
            !1 !== t && (t = t || "fx"),
            this.each(function () {
              var e,
                n = I.get(this),
                i = n[t + "queue"],
                o = n[t + "queueHooks"],
                s = f.timers,
                r = i ? i.length : 0;
              for (
                n.finish = !0,
                  f.queue(this, t, []),
                  o && o.stop && o.stop.call(this, !0),
                  e = s.length;
                e--;

              )
                s[e].elem === this &&
                  s[e].queue === t &&
                  (s[e].anim.stop(!0), s.splice(e, 1));
              for (e = 0; e < r; e++)
                i[e] && i[e].finish && i[e].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      f.each(["toggle", "show", "hide"], function (t, e) {
        var n = f.fn[e];
        f.fn[e] = function (t, i, o) {
          return null == t || "boolean" == typeof t
            ? n.apply(this, arguments)
            : this.animate(Gt(e, !0), t, i, o);
        };
      }),
      f.each(
        {
          slideDown: Gt("show"),
          slideUp: Gt("hide"),
          slideToggle: Gt("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (t, e) {
          f.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i);
          };
        }
      ),
      (f.timers = []),
      (f.fx.tick = function () {
        var t,
          e = 0,
          n = f.timers;
        for (qt = f.now(); e < n.length; e++)
          (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || f.fx.stop(), (qt = void 0);
      }),
      (f.fx.timer = function (t) {
        f.timers.push(t), t() ? f.fx.start() : f.timers.pop();
      }),
      (f.fx.interval = 13),
      (f.fx.start = function () {
        Ut || (Ut = t.setInterval(f.fx.tick, f.fx.interval));
      }),
      (f.fx.stop = function () {
        t.clearInterval(Ut), (Ut = null);
      }),
      (f.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (f.fn.delay = function (e, n) {
        return (
          (e = (f.fx && f.fx.speeds[e]) || e),
          (n = n || "fx"),
          this.queue(n, function (n, i) {
            var o = t.setTimeout(n, e);
            i.stop = function () {
              t.clearTimeout(o);
            };
          })
        );
      }),
      (function () {
        var t = i.createElement("input"),
          e = i.createElement("select"),
          n = e.appendChild(i.createElement("option"));
        (t.type = "checkbox"),
          (d.checkOn = "" !== t.value),
          (d.optSelected = n.selected),
          (e.disabled = !0),
          (d.optDisabled = !n.disabled),
          ((t = i.createElement("input")).value = "t"),
          (t.type = "radio"),
          (d.radioValue = "t" === t.value);
      })();
    var Xt,
      Jt = f.expr.attrHandle;
    f.fn.extend({
      attr: function (t, e) {
        return Y(this, f.attr, t, e, arguments.length > 1);
      },
      removeAttr: function (t) {
        return this.each(function () {
          f.removeAttr(this, t);
        });
      },
    }),
      f.extend({
        attr: function (t, e, n) {
          var i,
            o,
            s = t.nodeType;
          if (3 !== s && 8 !== s && 2 !== s)
            return void 0 === t.getAttribute
              ? f.prop(t, e, n)
              : ((1 === s && f.isXMLDoc(t)) ||
                  ((e = e.toLowerCase()),
                  (o =
                    f.attrHooks[e] ||
                    (f.expr.match.bool.test(e) ? Xt : void 0))),
                void 0 !== n
                  ? null === n
                    ? void f.removeAttr(t, e)
                    : o && "set" in o && void 0 !== (i = o.set(t, n, e))
                    ? i
                    : (t.setAttribute(e, n + ""), n)
                  : o && "get" in o && null !== (i = o.get(t, e))
                  ? i
                  : null == (i = f.find.attr(t, e))
                  ? void 0
                  : i);
        },
        attrHooks: {
          type: {
            set: function (t, e) {
              if (!d.radioValue && "radio" === e && f.nodeName(t, "input")) {
                var n = t.value;
                return t.setAttribute("type", e), n && (t.value = n), e;
              }
            },
          },
        },
        removeAttr: function (t, e) {
          var n,
            i,
            o = 0,
            s = e && e.match(N);
          if (s && 1 === t.nodeType)
            for (; (n = s[o++]); )
              (i = f.propFix[n] || n),
                f.expr.match.bool.test(n) && (t[i] = !1),
                t.removeAttribute(n);
        },
      }),
      (Xt = {
        set: function (t, e, n) {
          return !1 === e ? f.removeAttr(t, n) : t.setAttribute(n, n), n;
        },
      }),
      f.each(f.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = Jt[e] || f.find.attr;
        Jt[e] = function (t, e, i) {
          var o, s;
          return (
            i ||
              ((s = Jt[e]),
              (Jt[e] = o),
              (o = null != n(t, e, i) ? e.toLowerCase() : null),
              (Jt[e] = s)),
            o
          );
        };
      });
    var Kt = /^(?:input|select|textarea|button)$/i,
      te = /^(?:a|area)$/i;
    f.fn.extend({
      prop: function (t, e) {
        return Y(this, f.prop, t, e, arguments.length > 1);
      },
      removeProp: function (t) {
        return this.each(function () {
          delete this[f.propFix[t] || t];
        });
      },
    }),
      f.extend({
        prop: function (t, e, n) {
          var i,
            o,
            s = t.nodeType;
          if (3 !== s && 8 !== s && 2 !== s)
            return (
              (1 === s && f.isXMLDoc(t)) ||
                ((e = f.propFix[e] || e), (o = f.propHooks[e])),
              void 0 !== n
                ? o && "set" in o && void 0 !== (i = o.set(t, n, e))
                  ? i
                  : (t[e] = n)
                : o && "get" in o && null !== (i = o.get(t, e))
                ? i
                : t[e]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (t) {
              var e = f.find.attr(t, "tabindex");
              return e
                ? parseInt(e, 10)
                : Kt.test(t.nodeName) || (te.test(t.nodeName) && t.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      d.optSelected ||
        (f.propHooks.selected = {
          get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null;
          },
          set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
          },
        }),
      f.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          f.propFix[this.toLowerCase()] = this;
        }
      );
    var ee = /[\t\r\n\f]/g;
    function ne(t) {
      return (t.getAttribute && t.getAttribute("class")) || "";
    }
    f.fn.extend({
      addClass: function (t) {
        var e,
          n,
          i,
          o,
          s,
          r,
          a,
          l = 0;
        if (f.isFunction(t))
          return this.each(function (e) {
            f(this).addClass(t.call(this, e, ne(this)));
          });
        if ("string" == typeof t && t)
          for (e = t.match(N) || []; (n = this[l++]); )
            if (
              ((o = ne(n)),
              (i = 1 === n.nodeType && (" " + o + " ").replace(ee, " ")))
            ) {
              for (r = 0; (s = e[r++]); )
                i.indexOf(" " + s + " ") < 0 && (i += s + " ");
              o !== (a = f.trim(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          i,
          o,
          s,
          r,
          a,
          l = 0;
        if (f.isFunction(t))
          return this.each(function (e) {
            f(this).removeClass(t.call(this, e, ne(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof t && t)
          for (e = t.match(N) || []; (n = this[l++]); )
            if (
              ((o = ne(n)),
              (i = 1 === n.nodeType && (" " + o + " ").replace(ee, " ")))
            ) {
              for (r = 0; (s = e[r++]); )
                for (; i.indexOf(" " + s + " ") > -1; )
                  i = i.replace(" " + s + " ", " ");
              o !== (a = f.trim(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (t, e) {
        var n = typeof t;
        return "boolean" == typeof e && "string" === n
          ? e
            ? this.addClass(t)
            : this.removeClass(t)
          : f.isFunction(t)
          ? this.each(function (n) {
              f(this).toggleClass(t.call(this, n, ne(this), e), e);
            })
          : this.each(function () {
              var e, i, o, s;
              if ("string" === n)
                for (i = 0, o = f(this), s = t.match(N) || []; (e = s[i++]); )
                  o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
              else
                (void 0 !== t && "boolean" !== n) ||
                  ((e = ne(this)) && I.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      e || !1 === t ? "" : I.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (t) {
        var e,
          n,
          i = 0;
        for (e = " " + t + " "; (n = this[i++]); )
          if (
            1 === n.nodeType &&
            (" " + ne(n) + " ").replace(ee, " ").indexOf(e) > -1
          )
            return !0;
        return !1;
      },
    });
    var ie = /\r/g,
      oe = /[\x20\t\r\n\f]+/g;
    f.fn.extend({
      val: function (t) {
        var e,
          n,
          i,
          o = this[0];
        return arguments.length
          ? ((i = f.isFunction(t)),
            this.each(function (n) {
              var o;
              1 === this.nodeType &&
                (null == (o = i ? t.call(this, n, f(this).val()) : t)
                  ? (o = "")
                  : "number" == typeof o
                  ? (o += "")
                  : f.isArray(o) &&
                    (o = f.map(o, function (t) {
                      return null == t ? "" : t + "";
                    })),
                ((e =
                  f.valHooks[this.type] ||
                  f.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in e &&
                  void 0 !== e.set(this, o, "value")) ||
                  (this.value = o));
            }))
          : o
          ? (e = f.valHooks[o.type] || f.valHooks[o.nodeName.toLowerCase()]) &&
            "get" in e &&
            void 0 !== (n = e.get(o, "value"))
            ? n
            : "string" == typeof (n = o.value)
            ? n.replace(ie, "")
            : null == n
            ? ""
            : n
          : void 0;
      },
    }),
      f.extend({
        valHooks: {
          option: {
            get: function (t) {
              var e = f.find.attr(t, "value");
              return null != e ? e : f.trim(f.text(t)).replace(oe, " ");
            },
          },
          select: {
            get: function (t) {
              for (
                var e,
                  n,
                  i = t.options,
                  o = t.selectedIndex,
                  s = "select-one" === t.type || o < 0,
                  r = s ? null : [],
                  a = s ? o + 1 : i.length,
                  l = o < 0 ? a : s ? o : 0;
                l < a;
                l++
              )
                if (
                  ((n = i[l]).selected || l === o) &&
                  (d.optDisabled
                    ? !n.disabled
                    : null === n.getAttribute("disabled")) &&
                  (!n.parentNode.disabled ||
                    !f.nodeName(n.parentNode, "optgroup"))
                ) {
                  if (((e = f(n).val()), s)) return e;
                  r.push(e);
                }
              return r;
            },
            set: function (t, e) {
              for (
                var n, i, o = t.options, s = f.makeArray(e), r = o.length;
                r--;

              )
                ((i = o[r]).selected =
                  f.inArray(f.valHooks.option.get(i), s) > -1) && (n = !0);
              return n || (t.selectedIndex = -1), s;
            },
          },
        },
      }),
      f.each(["radio", "checkbox"], function () {
        (f.valHooks[this] = {
          set: function (t, e) {
            if (f.isArray(e))
              return (t.checked = f.inArray(f(t).val(), e) > -1);
          },
        }),
          d.checkOn ||
            (f.valHooks[this].get = function (t) {
              return null === t.getAttribute("value") ? "on" : t.value;
            });
      });
    var se = /^(?:focusinfocus|focusoutblur)$/;
    f.extend(f.event, {
      trigger: function (e, n, o, s) {
        var r,
          a,
          l,
          u,
          d,
          h,
          p,
          m = [o || i],
          g = c.call(e, "type") ? e.type : e,
          v = c.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((a = l = o = o || i),
          3 !== o.nodeType &&
            8 !== o.nodeType &&
            !se.test(g + f.event.triggered) &&
            (g.indexOf(".") > -1 &&
              ((v = g.split(".")), (g = v.shift()), v.sort()),
            (d = g.indexOf(":") < 0 && "on" + g),
            ((e = e[f.expando]
              ? e
              : new f.Event(g, "object" == typeof e && e)).isTrigger = s
              ? 2
              : 3),
            (e.namespace = v.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = o),
            (n = null == n ? [e] : f.makeArray(n, [e])),
            (p = f.event.special[g] || {}),
            s || !p.trigger || !1 !== p.trigger.apply(o, n)))
        ) {
          if (!s && !p.noBubble && !f.isWindow(o)) {
            for (
              u = p.delegateType || g, se.test(u + g) || (a = a.parentNode);
              a;
              a = a.parentNode
            )
              m.push(a), (l = a);
            l === (o.ownerDocument || i) &&
              m.push(l.defaultView || l.parentWindow || t);
          }
          for (r = 0; (a = m[r++]) && !e.isPropagationStopped(); )
            (e.type = r > 1 ? u : p.bindType || g),
              (h = (I.get(a, "events") || {})[e.type] && I.get(a, "handle")) &&
                h.apply(a, n),
              (h = d && a[d]) &&
                h.apply &&
                j(a) &&
                ((e.result = h.apply(a, n)),
                !1 === e.result && e.preventDefault());
          return (
            (e.type = g),
            s ||
              e.isDefaultPrevented() ||
              (p._default && !1 !== p._default.apply(m.pop(), n)) ||
              !j(o) ||
              (d &&
                f.isFunction(o[g]) &&
                !f.isWindow(o) &&
                ((l = o[d]) && (o[d] = null),
                (f.event.triggered = g),
                o[g](),
                (f.event.triggered = void 0),
                l && (o[d] = l))),
            e.result
          );
        }
      },
      simulate: function (t, e, n) {
        var i = f.extend(new f.Event(), n, { type: t, isSimulated: !0 });
        f.event.trigger(i, null, e);
      },
    }),
      f.fn.extend({
        trigger: function (t, e) {
          return this.each(function () {
            f.event.trigger(t, e, this);
          });
        },
        triggerHandler: function (t, e) {
          var n = this[0];
          if (n) return f.event.trigger(t, e, n, !0);
        },
      }),
      f.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (t, e) {
          f.fn[e] = function (t, n) {
            return arguments.length > 0
              ? this.on(e, null, t, n)
              : this.trigger(e);
          };
        }
      ),
      f.fn.extend({
        hover: function (t, e) {
          return this.mouseenter(t).mouseleave(e || t);
        },
      }),
      (d.focusin = "onfocusin" in t),
      d.focusin ||
        f.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
          var n = function (t) {
            f.event.simulate(e, t.target, f.event.fix(t));
          };
          f.event.special[e] = {
            setup: function () {
              var i = this.ownerDocument || this,
                o = I.access(i, e);
              o || i.addEventListener(t, n, !0), I.access(i, e, (o || 0) + 1);
            },
            teardown: function () {
              var i = this.ownerDocument || this,
                o = I.access(i, e) - 1;
              o
                ? I.access(i, e, o)
                : (i.removeEventListener(t, n, !0), I.remove(i, e));
            },
          };
        });
    var re = t.location,
      ae = f.now(),
      le = /\?/;
    (f.parseJSON = function (t) {
      return JSON.parse(t + "");
    }),
      (f.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
          n = new t.DOMParser().parseFromString(e, "text/xml");
        } catch (t) {
          n = void 0;
        }
        return (
          (n && !n.getElementsByTagName("parsererror").length) ||
            f.error("Invalid XML: " + e),
          n
        );
      });
    var ue = /#.*$/,
      ce = /([?&])_=[^&]*/,
      de = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      he = /^(?:GET|HEAD)$/,
      fe = /^\/\//,
      pe = {},
      me = {},
      ge = "*/".concat("*"),
      ve = i.createElement("a");
    function ye(t) {
      return function (e, n) {
        "string" != typeof e && ((n = e), (e = "*"));
        var i,
          o = 0,
          s = e.toLowerCase().match(N) || [];
        if (f.isFunction(n))
          for (; (i = s[o++]); )
            "+" === i[0]
              ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n))
              : (t[i] = t[i] || []).push(n);
      };
    }
    function we(t, e, n, i) {
      var o = {},
        s = t === me;
      function r(a) {
        var l;
        return (
          (o[a] = !0),
          f.each(t[a] || [], function (t, a) {
            var u = a(e, n, i);
            return "string" != typeof u || s || o[u]
              ? s
                ? !(l = u)
                : void 0
              : (e.dataTypes.unshift(u), r(u), !1);
          }),
          l
        );
      }
      return r(e.dataTypes[0]) || (!o["*"] && r("*"));
    }
    function be(t, e) {
      var n,
        i,
        o = f.ajaxSettings.flatOptions || {};
      for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
      return i && f.extend(!0, t, i), t;
    }
    (ve.href = re.href),
      f.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: re.href,
          type: "GET",
          isLocal:
            /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              re.protocol
            ),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": ge,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": f.parseJSON,
            "text xml": f.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (t, e) {
          return e ? be(be(t, f.ajaxSettings), e) : be(f.ajaxSettings, t);
        },
        ajaxPrefilter: ye(pe),
        ajaxTransport: ye(me),
        ajax: function (e, n) {
          "object" == typeof e && ((n = e), (e = void 0)), (n = n || {});
          var o,
            s,
            r,
            a,
            l,
            u,
            c,
            d,
            h = f.ajaxSetup({}, n),
            p = h.context || h,
            m = h.context && (p.nodeType || p.jquery) ? f(p) : f.event,
            g = f.Deferred(),
            v = f.Callbacks("once memory"),
            y = h.statusCode || {},
            w = {},
            b = {},
            x = 0,
            S = "canceled",
            T = {
              readyState: 0,
              getResponseHeader: function (t) {
                var e;
                if (2 === x) {
                  if (!a)
                    for (a = {}; (e = de.exec(r)); )
                      a[e[1].toLowerCase()] = e[2];
                  e = a[t.toLowerCase()];
                }
                return null == e ? null : e;
              },
              getAllResponseHeaders: function () {
                return 2 === x ? r : null;
              },
              setRequestHeader: function (t, e) {
                var n = t.toLowerCase();
                return x || ((t = b[n] = b[n] || t), (w[t] = e)), this;
              },
              overrideMimeType: function (t) {
                return x || (h.mimeType = t), this;
              },
              statusCode: function (t) {
                var e;
                if (t)
                  if (x < 2) for (e in t) y[e] = [y[e], t[e]];
                  else T.always(t[T.status]);
                return this;
              },
              abort: function (t) {
                var e = t || S;
                return o && o.abort(e), k(0, e), this;
              },
            };
          if (
            ((g.promise(T).complete = v.add),
            (T.success = T.done),
            (T.error = T.fail),
            (h.url = ((e || h.url || re.href) + "")
              .replace(ue, "")
              .replace(fe, re.protocol + "//")),
            (h.type = n.method || n.type || h.method || h.type),
            (h.dataTypes = f
              .trim(h.dataType || "*")
              .toLowerCase()
              .match(N) || [""]),
            null == h.crossDomain)
          ) {
            u = i.createElement("a");
            try {
              (u.href = h.url),
                (u.href = u.href),
                (h.crossDomain =
                  ve.protocol + "//" + ve.host != u.protocol + "//" + u.host);
            } catch (t) {
              h.crossDomain = !0;
            }
          }
          if (
            (h.data &&
              h.processData &&
              "string" != typeof h.data &&
              (h.data = f.param(h.data, h.traditional)),
            we(pe, h, n, T),
            2 === x)
          )
            return T;
          for (d in ((c = f.event && h.global) &&
            0 == f.active++ &&
            f.event.trigger("ajaxStart"),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !he.test(h.type)),
          (s = h.url),
          h.hasContent ||
            (h.data &&
              ((s = h.url += (le.test(s) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              (h.url = ce.test(s)
                ? s.replace(ce, "$1_=" + ae++)
                : s + (le.test(s) ? "&" : "?") + "_=" + ae++)),
          h.ifModified &&
            (f.lastModified[s] &&
              T.setRequestHeader("If-Modified-Since", f.lastModified[s]),
            f.etag[s] && T.setRequestHeader("If-None-Match", f.etag[s])),
          ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
            T.setRequestHeader("Content-Type", h.contentType),
          T.setRequestHeader(
            "Accept",
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] +
                  ("*" !== h.dataTypes[0] ? ", " + ge + "; q=0.01" : "")
              : h.accepts["*"]
          ),
          h.headers))
            T.setRequestHeader(d, h.headers[d]);
          if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || 2 === x))
            return T.abort();
          for (d in ((S = "abort"), { success: 1, error: 1, complete: 1 }))
            T[d](h[d]);
          if ((o = we(me, h, n, T))) {
            if (
              ((T.readyState = 1), c && m.trigger("ajaxSend", [T, h]), 2 === x)
            )
              return T;
            h.async &&
              h.timeout > 0 &&
              (l = t.setTimeout(function () {
                T.abort("timeout");
              }, h.timeout));
            try {
              (x = 1), o.send(w, k);
            } catch (t) {
              if (!(x < 2)) throw t;
              k(-1, t);
            }
          } else k(-1, "No Transport");
          function k(e, n, i, a) {
            var u,
              d,
              w,
              b,
              S,
              k = n;
            2 !== x &&
              ((x = 2),
              l && t.clearTimeout(l),
              (o = void 0),
              (r = a || ""),
              (T.readyState = e > 0 ? 4 : 0),
              (u = (e >= 200 && e < 300) || 304 === e),
              i &&
                (b = (function (t, e, n) {
                  for (
                    var i, o, s, r, a = t.contents, l = t.dataTypes;
                    "*" === l[0];

                  )
                    l.shift(),
                      void 0 === i &&
                        (i = t.mimeType || e.getResponseHeader("Content-Type"));
                  if (i)
                    for (o in a)
                      if (a[o] && a[o].test(i)) {
                        l.unshift(o);
                        break;
                      }
                  if (l[0] in n) s = l[0];
                  else {
                    for (o in n) {
                      if (!l[0] || t.converters[o + " " + l[0]]) {
                        s = o;
                        break;
                      }
                      r || (r = o);
                    }
                    s = s || r;
                  }
                  if (s) return s !== l[0] && l.unshift(s), n[s];
                })(h, T, i)),
              (b = (function (t, e, n, i) {
                var o,
                  s,
                  r,
                  a,
                  l,
                  u = {},
                  c = t.dataTypes.slice();
                if (c[1])
                  for (r in t.converters) u[r.toLowerCase()] = t.converters[r];
                for (s = c.shift(); s; )
                  if (
                    (t.responseFields[s] && (n[t.responseFields[s]] = e),
                    !l &&
                      i &&
                      t.dataFilter &&
                      (e = t.dataFilter(e, t.dataType)),
                    (l = s),
                    (s = c.shift()))
                  )
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                      if (!(r = u[l + " " + s] || u["* " + s]))
                        for (o in u)
                          if (
                            (a = o.split(" "))[1] === s &&
                            (r = u[l + " " + a[0]] || u["* " + a[0]])
                          ) {
                            !0 === r
                              ? (r = u[o])
                              : !0 !== u[o] && ((s = a[0]), c.unshift(a[1]));
                            break;
                          }
                      if (!0 !== r)
                        if (r && t.throws) e = r(e);
                        else
                          try {
                            e = r(e);
                          } catch (t) {
                            return {
                              state: "parsererror",
                              error: r
                                ? t
                                : "No conversion from " + l + " to " + s,
                            };
                          }
                    }
                return { state: "success", data: e };
              })(h, b, T, u)),
              u
                ? (h.ifModified &&
                    ((S = T.getResponseHeader("Last-Modified")) &&
                      (f.lastModified[s] = S),
                    (S = T.getResponseHeader("etag")) && (f.etag[s] = S)),
                  204 === e || "HEAD" === h.type
                    ? (k = "nocontent")
                    : 304 === e
                    ? (k = "notmodified")
                    : ((k = b.state), (d = b.data), (u = !(w = b.error))))
                : ((w = k), (!e && k) || ((k = "error"), e < 0 && (e = 0))),
              (T.status = e),
              (T.statusText = (n || k) + ""),
              u ? g.resolveWith(p, [d, k, T]) : g.rejectWith(p, [T, k, w]),
              T.statusCode(y),
              (y = void 0),
              c &&
                m.trigger(u ? "ajaxSuccess" : "ajaxError", [T, h, u ? d : w]),
              v.fireWith(p, [T, k]),
              c &&
                (m.trigger("ajaxComplete", [T, h]),
                --f.active || f.event.trigger("ajaxStop")));
          }
          return T;
        },
        getJSON: function (t, e, n) {
          return f.get(t, e, n, "json");
        },
        getScript: function (t, e) {
          return f.get(t, void 0, e, "script");
        },
      }),
      f.each(["get", "post"], function (t, e) {
        f[e] = function (t, n, i, o) {
          return (
            f.isFunction(n) && ((o = o || i), (i = n), (n = void 0)),
            f.ajax(
              f.extend(
                { url: t, type: e, dataType: o, data: n, success: i },
                f.isPlainObject(t) && t
              )
            )
          );
        };
      }),
      (f._evalUrl = function (t) {
        return f.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      f.fn.extend({
        wrapAll: function (t) {
          var e;
          return f.isFunction(t)
            ? this.each(function (e) {
                f(this).wrapAll(t.call(this, e));
              })
            : (this[0] &&
                ((e = f(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var t = this; t.firstElementChild; )
                      t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this);
        },
        wrapInner: function (t) {
          return f.isFunction(t)
            ? this.each(function (e) {
                f(this).wrapInner(t.call(this, e));
              })
            : this.each(function () {
                var e = f(this),
                  n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t);
              });
        },
        wrap: function (t) {
          var e = f.isFunction(t);
          return this.each(function (n) {
            f(this).wrapAll(e ? t.call(this, n) : t);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              f.nodeName(this, "body") || f(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (f.expr.filters.hidden = function (t) {
        return !f.expr.filters.visible(t);
      }),
      (f.expr.filters.visible = function (t) {
        return (
          t.offsetWidth > 0 ||
          t.offsetHeight > 0 ||
          t.getClientRects().length > 0
        );
      });
    var xe = /%20/g,
      Se = /\[\]$/,
      Te = /\r?\n/g,
      ke = /^(?:submit|button|image|reset|file)$/i,
      _e = /^(?:input|select|textarea|keygen)/i;
    function Me(t, e, n, i) {
      var o;
      if (f.isArray(e))
        f.each(e, function (e, o) {
          n || Se.test(t)
            ? i(t, o)
            : Me(
                t + "[" + ("object" == typeof o && null != o ? e : "") + "]",
                o,
                n,
                i
              );
        });
      else if (n || "object" !== f.type(e)) i(t, e);
      else for (o in e) Me(t + "[" + o + "]", e[o], n, i);
    }
    (f.param = function (t, e) {
      var n,
        i = [],
        o = function (t, e) {
          (e = f.isFunction(e) ? e() : null == e ? "" : e),
            (i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
        };
      if (
        (void 0 === e && (e = f.ajaxSettings && f.ajaxSettings.traditional),
        f.isArray(t) || (t.jquery && !f.isPlainObject(t)))
      )
        f.each(t, function () {
          o(this.name, this.value);
        });
      else for (n in t) Me(n, t[n], e, o);
      return i.join("&").replace(xe, "+");
    }),
      f.fn.extend({
        serialize: function () {
          return f.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var t = f.prop(this, "elements");
            return t ? f.makeArray(t) : this;
          })
            .filter(function () {
              var t = this.type;
              return (
                this.name &&
                !f(this).is(":disabled") &&
                _e.test(this.nodeName) &&
                !ke.test(t) &&
                (this.checked || !B.test(t))
              );
            })
            .map(function (t, e) {
              var n = f(this).val();
              return null == n
                ? null
                : f.isArray(n)
                ? f.map(n, function (t) {
                    return { name: e.name, value: t.replace(Te, "\r\n") };
                  })
                : { name: e.name, value: n.replace(Te, "\r\n") };
            })
            .get();
        },
      }),
      (f.ajaxSettings.xhr = function () {
        try {
          return new t.XMLHttpRequest();
        } catch (t) {}
      });
    var $e = { 0: 200, 1223: 204 },
      Ce = f.ajaxSettings.xhr();
    (d.cors = !!Ce && "withCredentials" in Ce),
      (d.ajax = Ce = !!Ce),
      f.ajaxTransport(function (e) {
        var n, i;
        if (d.cors || (Ce && !e.crossDomain))
          return {
            send: function (o, s) {
              var r,
                a = e.xhr();
              if (
                (a.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
              )
                for (r in e.xhrFields) a[r] = e.xhrFields[r];
              for (r in (e.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(e.mimeType),
              e.crossDomain ||
                o["X-Requested-With"] ||
                (o["X-Requested-With"] = "XMLHttpRequest"),
              o))
                a.setRequestHeader(r, o[r]);
              (n = function (t) {
                return function () {
                  n &&
                    ((n =
                      i =
                      a.onload =
                      a.onerror =
                      a.onabort =
                      a.onreadystatechange =
                        null),
                    "abort" === t
                      ? a.abort()
                      : "error" === t
                      ? "number" != typeof a.status
                        ? s(0, "error")
                        : s(a.status, a.statusText)
                      : s(
                          $e[a.status] || a.status,
                          a.statusText,
                          "text" !== (a.responseType || "text") ||
                            "string" != typeof a.responseText
                            ? { binary: a.response }
                            : { text: a.responseText },
                          a.getAllResponseHeaders()
                        ));
                };
              }),
                (a.onload = n()),
                (i = a.onerror = n("error")),
                void 0 !== a.onabort
                  ? (a.onabort = i)
                  : (a.onreadystatechange = function () {
                      4 === a.readyState &&
                        t.setTimeout(function () {
                          n && i();
                        });
                    }),
                (n = n("abort"));
              try {
                a.send((e.hasContent && e.data) || null);
              } catch (t) {
                if (n) throw t;
              }
            },
            abort: function () {
              n && n();
            },
          };
      }),
      f.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (t) {
            return f.globalEval(t), t;
          },
        },
      }),
      f.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
      }),
      f.ajaxTransport("script", function (t) {
        var e, n;
        if (t.crossDomain)
          return {
            send: function (o, s) {
              (e = f("<script>")
                .prop({ charset: t.scriptCharset, src: t.url })
                .on(
                  "load error",
                  (n = function (t) {
                    e.remove(),
                      (n = null),
                      t && s("error" === t.type ? 404 : 200, t.type);
                  })
                )),
                i.head.appendChild(e[0]);
            },
            abort: function () {
              n && n();
            },
          };
      });
    var De = [],
      Ee = /(=)\?(?=&|$)|\?\?/;
    f.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var t = De.pop() || f.expando + "_" + ae++;
        return (this[t] = !0), t;
      },
    }),
      f.ajaxPrefilter("json jsonp", function (e, n, i) {
        var o,
          s,
          r,
          a =
            !1 !== e.jsonp &&
            (Ee.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                0 ===
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Ee.test(e.data) &&
                "data");
        if (a || "jsonp" === e.dataTypes[0])
          return (
            (o = e.jsonpCallback =
              f.isFunction(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(Ee, "$1" + o))
              : !1 !== e.jsonp &&
                (e.url += (le.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
            (e.converters["script json"] = function () {
              return r || f.error(o + " was not called"), r[0];
            }),
            (e.dataTypes[0] = "json"),
            (s = t[o]),
            (t[o] = function () {
              r = arguments;
            }),
            i.always(function () {
              void 0 === s ? f(t).removeProp(o) : (t[o] = s),
                e[o] && ((e.jsonpCallback = n.jsonpCallback), De.push(o)),
                r && f.isFunction(s) && s(r[0]),
                (r = s = void 0);
            }),
            "script"
          );
      }),
      (f.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && ((n = e), (e = !1)), (e = e || i);
        var o = T.exec(t),
          s = !n && [];
        return o
          ? [e.createElement(o[1])]
          : ((o = nt([t], e, s)),
            s && s.length && f(s).remove(),
            f.merge([], o.childNodes));
      });
    var Oe = f.fn.load;
    function Ne(t) {
      return f.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
    }
    (f.fn.load = function (t, e, n) {
      if ("string" != typeof t && Oe) return Oe.apply(this, arguments);
      var i,
        o,
        s,
        r = this,
        a = t.indexOf(" ");
      return (
        a > -1 && ((i = f.trim(t.slice(a))), (t = t.slice(0, a))),
        f.isFunction(e)
          ? ((n = e), (e = void 0))
          : e && "object" == typeof e && (o = "POST"),
        r.length > 0 &&
          f
            .ajax({ url: t, type: o || "GET", dataType: "html", data: e })
            .done(function (t) {
              (s = arguments),
                r.html(i ? f("<div>").append(f.parseHTML(t)).find(i) : t);
            })
            .always(
              n &&
                function (t, e) {
                  r.each(function () {
                    n.apply(this, s || [t.responseText, e, t]);
                  });
                }
            ),
        this
      );
    }),
      f.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (t, e) {
          f.fn[e] = function (t) {
            return this.on(e, t);
          };
        }
      ),
      (f.expr.filters.animated = function (t) {
        return f.grep(f.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
      (f.offset = {
        setOffset: function (t, e, n) {
          var i,
            o,
            s,
            r,
            a,
            l,
            u = f.css(t, "position"),
            c = f(t),
            d = {};
          "static" === u && (t.style.position = "relative"),
            (a = c.offset()),
            (s = f.css(t, "top")),
            (l = f.css(t, "left")),
            ("absolute" === u || "fixed" === u) && (s + l).indexOf("auto") > -1
              ? ((r = (i = c.position()).top), (o = i.left))
              : ((r = parseFloat(s) || 0), (o = parseFloat(l) || 0)),
            f.isFunction(e) && (e = e.call(t, n, f.extend({}, a))),
            null != e.top && (d.top = e.top - a.top + r),
            null != e.left && (d.left = e.left - a.left + o),
            "using" in e ? e.using.call(t, d) : c.css(d);
        },
      }),
      f.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function (e) {
                  f.offset.setOffset(this, t, e);
                });
          var e,
            n,
            i = this[0],
            o = { top: 0, left: 0 },
            s = i && i.ownerDocument;
          return s
            ? ((e = s.documentElement),
              f.contains(e, i)
                ? ((o = i.getBoundingClientRect()),
                  (n = Ne(s)),
                  {
                    top: o.top + n.pageYOffset - e.clientTop,
                    left: o.left + n.pageXOffset - e.clientLeft,
                  })
                : o)
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var t,
              e,
              n = this[0],
              i = { top: 0, left: 0 };
            return (
              "fixed" === f.css(n, "position")
                ? (e = n.getBoundingClientRect())
                : ((t = this.offsetParent()),
                  (e = this.offset()),
                  f.nodeName(t[0], "html") || (i = t.offset()),
                  (i.top += f.css(t[0], "borderTopWidth", !0)),
                  (i.left += f.css(t[0], "borderLeftWidth", !0))),
              {
                top: e.top - i.top - f.css(n, "marginTop", !0),
                left: e.left - i.left - f.css(n, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var t = this.offsetParent;
              t && "static" === f.css(t, "position");

            )
              t = t.offsetParent;
            return t || Dt;
          });
        },
      }),
      f.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, e) {
          var n = "pageYOffset" === e;
          f.fn[t] = function (i) {
            return Y(
              this,
              function (t, i, o) {
                var s = Ne(t);
                if (void 0 === o) return s ? s[e] : t[i];
                s
                  ? s.scrollTo(n ? s.pageXOffset : o, n ? o : s.pageYOffset)
                  : (t[i] = o);
              },
              t,
              i,
              arguments.length
            );
          };
        }
      ),
      f.each(["top", "left"], function (t, e) {
        f.cssHooks[e] = Ot(d.pixelPosition, function (t, n) {
          if (n)
            return (n = Et(t, e)), Mt.test(n) ? f(t).position()[e] + "px" : n;
        });
      }),
      f.each({ Height: "height", Width: "width" }, function (t, e) {
        f.each(
          { padding: "inner" + t, content: e, "": "outer" + t },
          function (n, i) {
            f.fn[i] = function (i, o) {
              var s = arguments.length && (n || "boolean" != typeof i),
                r = n || (!0 === i || !0 === o ? "margin" : "border");
              return Y(
                this,
                function (e, n, i) {
                  var o;
                  return f.isWindow(e)
                    ? e.document.documentElement["client" + t]
                    : 9 === e.nodeType
                    ? ((o = e.documentElement),
                      Math.max(
                        e.body["scroll" + t],
                        o["scroll" + t],
                        e.body["offset" + t],
                        o["offset" + t],
                        o["client" + t]
                      ))
                    : void 0 === i
                    ? f.css(e, n, r)
                    : f.style(e, n, i, r);
                },
                e,
                s ? i : void 0,
                s,
                null
              );
            };
          }
        );
      }),
      f.fn.extend({
        bind: function (t, e, n) {
          return this.on(t, null, e, n);
        },
        unbind: function (t, e) {
          return this.off(t, null, e);
        },
        delegate: function (t, e, n, i) {
          return this.on(e, t, n, i);
        },
        undelegate: function (t, e, n) {
          return 1 === arguments.length
            ? this.off(t, "**")
            : this.off(e, t || "**", n);
        },
        size: function () {
          return this.length;
        },
      }),
      (f.fn.andSelf = f.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return f;
        });
    var Ae = t.jQuery,
      Ye = t.$;
    return (
      (f.noConflict = function (e) {
        return (
          t.$ === f && (t.$ = Ye), e && t.jQuery === f && (t.jQuery = Ae), f
        );
      }),
      e || (t.jQuery = t.$ = f),
      f
    );
  }),
  !jQuery)
)
  throw new Error("Bootstrap requires jQuery");
!(function (t) {
  "use strict";
  (t.fn.emulateTransitionEnd = function (e) {
    var n = !1,
      i = this;
    t(this).one(t.support.transition.end, function () {
      n = !0;
    });
    return (
      setTimeout(function () {
        n || t(i).trigger(t.support.transition.end);
      }, e),
      this
    );
  }),
    t(function () {
      t.support.transition = (function () {
        var t = document.createElement("bootstrap"),
          e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend",
          };
        for (var n in e) if (void 0 !== t.style[n]) return { end: e[n] };
      })();
    });
})(window.jQuery),
  (function (t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
      n = function (n) {
        t(n).on("click", e, this.close);
      };
    n.prototype.close = function (e) {
      var n = t(this),
        i = n.attr("data-target");
      i || (i = (i = n.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
      var o = t(i);
      function s() {
        o.trigger("closed.bs.alert").remove();
      }
      e && e.preventDefault(),
        o.length || (o = n.hasClass("alert") ? n : n.parent()),
        o.trigger((e = t.Event("close.bs.alert"))),
        e.isDefaultPrevented() ||
          (o.removeClass("in"),
          t.support.transition && o.hasClass("fade")
            ? o.one(t.support.transition.end, s).emulateTransitionEnd(150)
            : s());
    };
    var i = t.fn.alert;
    (t.fn.alert = function (e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.alert");
        o || i.data("bs.alert", (o = new n(this))),
          "string" == typeof e && o[e].call(i);
      });
    }),
      (t.fn.alert.Constructor = n),
      (t.fn.alert.noConflict = function () {
        return (t.fn.alert = i), this;
      }),
      t(document).on("click.bs.alert.data-api", e, n.prototype.close);
  })(window.jQuery),
  (function (t) {
    "use strict";
    var e = function (n, i) {
      (this.$element = t(n)), (this.options = t.extend({}, e.DEFAULTS, i));
    };
    (e.DEFAULTS = { loadingText: "loading..." }),
      (e.prototype.setState = function (t) {
        var e = "disabled",
          n = this.$element,
          i = n.is("input") ? "val" : "html",
          o = n.data();
        (t += "Text"),
          o.resetText || n.data("resetText", n[i]()),
          n[i](o[t] || this.options[t]),
          setTimeout(function () {
            "loadingText" == t
              ? n.addClass(e).attr(e, e)
              : n.removeClass(e).removeAttr(e);
          }, 0);
      }),
      (e.prototype.toggle = function () {
        var t = this.$element.closest('[data-toggle="buttons"]');
        t.length &&
          "radio" ===
            this.$element
              .find("input")
              .prop("checked", !this.$element.hasClass("active"))
              .trigger("change")
              .prop("type") &&
          t.find(".active").removeClass("active");
        this.$element.toggleClass("active");
      });
    var n = t.fn.button;
    (t.fn.button = function (n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.button"),
          s = "object" == typeof n && n;
        o || i.data("bs.button", (o = new e(this, s))),
          "toggle" == n ? o.toggle() : n && o.setState(n);
      });
    }),
      (t.fn.button.Constructor = e),
      (t.fn.button.noConflict = function () {
        return (t.fn.button = n), this;
      }),
      t(document).on(
        "click.bs.button.data-api",
        "[data-toggle^=button]",
        function (e) {
          var n = t(e.target);
          n.hasClass("btn") || (n = n.closest(".btn")),
            n.button("toggle"),
            e.preventDefault();
        }
      );
  })(window.jQuery),
  (function (t) {
    "use strict";
    var e = function (e, n) {
      (this.$element = t(e)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = n),
        (this.paused =
          this.sliding =
          this.interval =
          this.$active =
          this.$items =
            null),
        "hover" == this.options.pause &&
          this.$element
            .on("mouseenter", t.proxy(this.pause, this))
            .on("mouseleave", t.proxy(this.cycle, this));
    };
    (e.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0 }),
      (e.prototype.cycle = function (e) {
        return (
          e || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              t.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (e.prototype.getActiveIndex = function () {
        return (
          (this.$active = this.$element.find(".item.active")),
          (this.$items = this.$active.parent().children()),
          this.$items.index(this.$active)
        );
      }),
      (e.prototype.to = function (e) {
        var n = this,
          i = this.getActiveIndex();
        if (!(e > this.$items.length - 1 || e < 0))
          return this.sliding
            ? this.$element.one("slid", function () {
                n.to(e);
              })
            : i == e
            ? this.pause().cycle()
            : this.slide(e > i ? "next" : "prev", t(this.$items[e]));
      }),
      (e.prototype.pause = function (e) {
        return (
          e || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            t.support.transition.end &&
            (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (e.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
      }),
      (e.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
      }),
      (e.prototype.slide = function (e, n) {
        var i = this.$element.find(".item.active"),
          o = n || i[e](),
          s = this.interval,
          r = "next" == e ? "left" : "right",
          a = "next" == e ? "first" : "last",
          l = this;
        if (!o.length) {
          if (!this.options.wrap) return;
          o = this.$element.find(".item")[a]();
        }
        (this.sliding = !0), s && this.pause();
        var u = t.Event("slide.bs.carousel", {
          relatedTarget: o[0],
          direction: r,
        });
        if (!o.hasClass("active")) {
          if (
            (this.$indicators.length &&
              (this.$indicators.find(".active").removeClass("active"),
              this.$element.one("slid", function () {
                var e = t(l.$indicators.children()[l.getActiveIndex()]);
                e && e.addClass("active");
              })),
            t.support.transition && this.$element.hasClass("slide"))
          ) {
            if ((this.$element.trigger(u), u.isDefaultPrevented())) return;
            o.addClass(e),
              o[0].offsetWidth,
              i.addClass(r),
              o.addClass(r),
              i
                .one(t.support.transition.end, function () {
                  o.removeClass([e, r].join(" ")).addClass("active"),
                    i.removeClass(["active", r].join(" ")),
                    (l.sliding = !1),
                    setTimeout(function () {
                      l.$element.trigger("slid");
                    }, 0);
                })
                .emulateTransitionEnd(600);
          } else {
            if ((this.$element.trigger(u), u.isDefaultPrevented())) return;
            i.removeClass("active"),
              o.addClass("active"),
              (this.sliding = !1),
              this.$element.trigger("slid");
          }
          return s && this.cycle(), this;
        }
      });
    var n = t.fn.carousel;
    (t.fn.carousel = function (n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.carousel"),
          s = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n),
          r = "string" == typeof n ? n : s.slide;
        o || i.data("bs.carousel", (o = new e(this, s))),
          "number" == typeof n
            ? o.to(n)
            : r
            ? o[r]()
            : s.interval && o.pause().cycle();
      });
    }),
      (t.fn.carousel.Constructor = e),
      (t.fn.carousel.noConflict = function () {
        return (t.fn.carousel = n), this;
      }),
      t(document).on(
        "click.bs.carousel.data-api",
        "[data-slide], [data-slide-to]",
        function (e) {
          var n,
            i = t(this),
            o = t(
              i.attr("data-target") ||
                ((n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            s = t.extend({}, o.data(), i.data()),
            r = i.attr("data-slide-to");
          r && (s.interval = !1),
            o.carousel(s),
            (r = i.attr("data-slide-to")) && o.data("bs.carousel").to(r),
            e.preventDefault();
        }
      ),
      t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
          var e = t(this);
          e.carousel(e.data());
        });
      });
  })(window.jQuery),
  (function (t) {
    "use strict";
    var e = function (n, i) {
      (this.$element = t(n)),
        (this.options = t.extend({}, e.DEFAULTS, i)),
        (this.transitioning = null),
        this.options.parent && (this.$parent = t(this.options.parent)),
        this.options.toggle && this.toggle();
    };
    (e.DEFAULTS = { toggle: !0 }),
      (e.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height";
      }),
      (e.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var e = t.Event("show.bs.collapse");
          if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
            var n = this.$parent && this.$parent.find("> .panel > .in");
            if (n && n.length) {
              var i = n.data("bs.collapse");
              if (i && i.transitioning) return;
              n.collapse("hide"), i || n.data("bs.collapse", null);
            }
            var o = this.dimension();
            this.$element.removeClass("collapse").addClass("collapsing")[o](0),
              (this.transitioning = 1);
            var s = function () {
              this.$element.removeClass("collapsing").addClass("in")[o]("auto"),
                (this.transitioning = 0),
                this.$element.trigger("shown.bs.collapse");
            };
            if (!t.support.transition) return s.call(this);
            var r = t.camelCase(["scroll", o].join("-"));
            this.$element
              .one(t.support.transition.end, t.proxy(s, this))
              .emulateTransitionEnd(350)
              [o](this.$element[0][r]);
          }
        }
      }),
      (e.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var e = t.Event("hide.bs.collapse");
          if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
            var n = this.dimension();
            this.$element[n](this.$element[n]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse")
                .removeClass("in"),
              (this.transitioning = 1);
            var i = function () {
              (this.transitioning = 0),
                this.$element
                  .trigger("hidden.bs.collapse")
                  .removeClass("collapsing")
                  .addClass("collapse");
            };
            if (!t.support.transition) return i.call(this);
            this.$element[n](0)
              .one(t.support.transition.end, t.proxy(i, this))
              .emulateTransitionEnd(350);
          }
        }
      }),
      (e.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      });
    var n = t.fn.collapse;
    (t.fn.collapse = function (n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.collapse"),
          s = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
        o || i.data("bs.collapse", (o = new e(this, s))),
          "string" == typeof n && o[n]();
      });
    }),
      (t.fn.collapse.Constructor = e),
      (t.fn.collapse.noConflict = function () {
        return (t.fn.collapse = n), this;
      }),
      t(document).on(
        "click.bs.collapse.data-api",
        "[data-toggle=collapse]",
        function (e) {
          var n,
            i = t(this),
            o =
              i.attr("data-target") ||
              e.preventDefault() ||
              ((n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
            s = t(o),
            r = s.data("bs.collapse"),
            a = r ? "toggle" : i.data(),
            l = i.attr("data-parent"),
            u = l && t(l);
          (r && r.transitioning) ||
            (u &&
              u
                .find('[data-toggle=collapse][data-parent="' + l + '"]')
                .not(i)
                .addClass("collapsed"),
            i[s.hasClass("in") ? "addClass" : "removeClass"]("collapsed")),
            s.collapse(a);
        }
      );
  })(window.jQuery),
  (function (t) {
    "use strict";
    var e = "[data-toggle=dropdown]",
      n = function (e) {
        t(e).on("click.bs.dropdown", this.toggle);
      };
    function i() {
      t(".dropdown-backdrop").remove(),
        t(e).each(function (e) {
          var n = o(t(this));
          n.hasClass("open") &&
            (n.trigger((e = t.Event("hide.bs.dropdown"))),
            e.isDefaultPrevented() ||
              n.removeClass("open").trigger("hidden.bs.dropdown"));
        });
    }
    function o(e) {
      var n = e.attr("data-target");
      n ||
        (n =
          (n = e.attr("href")) &&
          /#/.test(n) &&
          n.replace(/.*(?=#[^\s]*$)/, ""));
      var i = n && t(n);
      return i && i.length ? i : e.parent();
    }
    (n.prototype.toggle = function (e) {
      var n = t(this);
      if (!n.is(".disabled, :disabled")) {
        var s = o(n),
          r = s.hasClass("open");
        if ((i(), !r)) {
          if (
            ("ontouchstart" in document.documentElement &&
              !s.closest(".navbar-nav").length &&
              t('<div class="dropdown-backdrop"/>')
                .insertAfter(t(this))
                .on("click", i),
            s.trigger((e = t.Event("show.bs.dropdown"))),
            e.isDefaultPrevented())
          )
            return;
          s.toggleClass("open").trigger("shown.bs.dropdown"), n.focus();
        }
        return !1;
      }
    }),
      (n.prototype.keydown = function (n) {
        if (/(38|40|27)/.test(n.keyCode)) {
          var i = t(this);
          if (
            (n.preventDefault(),
            n.stopPropagation(),
            !i.is(".disabled, :disabled"))
          ) {
            var s = o(i),
              r = s.hasClass("open");
            if (!r || (r && 27 == n.keyCode))
              return 27 == n.which && s.find(e).focus(), i.click();
            var a = t("[role=menu] li:not(.divider):visible a", s);
            if (a.length) {
              var l = a.index(a.filter(":focus"));
              38 == n.keyCode && l > 0 && l--,
                40 == n.keyCode && l < a.length - 1 && l++,
                ~l || (l = 0),
                a.eq(l).focus();
            }
          }
        }
      });
    var s = t.fn.dropdown;
    (t.fn.dropdown = function (e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("dropdown");
        o || i.data("dropdown", (o = new n(this))),
          "string" == typeof e && o[e].call(i);
      });
    }),
      (t.fn.dropdown.Constructor = n),
      (t.fn.dropdown.noConflict = function () {
        return (t.fn.dropdown = s), this;
      }),
      t(document)
        .on("click.bs.dropdown.data-api", i)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
          t.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", e, n.prototype.toggle)
        .on(
          "keydown.bs.dropdown.data-api",
          e + ", [role=menu]",
          n.prototype.keydown
        );
  })(window.jQuery),
  (function (t) {
    "use strict";
    var e = function (e, n) {
      (this.options = n),
        (this.$element = t(e)),
        (this.$backdrop = this.isShown = null),
        this.options.remote && this.$element.load(this.options.remote);
    };
    (e.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (e.prototype.toggle = function (t) {
        return this[this.isShown ? "hide" : "show"](t);
      }),
      (e.prototype.show = function (e) {
        var n = this,
          i = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(i),
          this.isShown ||
            i.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.escape(),
            this.$element.on(
              "click.dismiss.modal",
              '[data-dismiss="modal"]',
              t.proxy(this.hide, this)
            ),
            this.backdrop(function () {
              var i = t.support.transition && n.$element.hasClass("fade");
              n.$element.parent().length || n.$element.appendTo(document.body),
                n.$element.show(),
                i && n.$element[0].offsetWidth,
                n.$element.addClass("in").attr("aria-hidden", !1),
                n.enforceFocus();
              var o = t.Event("shown.bs.modal", { relatedTarget: e });
              i
                ? n.$element
                    .find(".modal-dialog")
                    .one(t.support.transition.end, function () {
                      n.$element.focus().trigger(o);
                    })
                    .emulateTransitionEnd(300)
                : n.$element.focus().trigger(o);
            }));
      }),
      (e.prototype.hide = function (e) {
        e && e.preventDefault(),
          (e = t.Event("hide.bs.modal")),
          this.$element.trigger(e),
          this.isShown &&
            !e.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            t(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .attr("aria-hidden", !0)
              .off("click.dismiss.modal"),
            t.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one(t.support.transition.end, t.proxy(this.hideModal, this))
                  .emulateTransitionEnd(300)
              : this.hideModal());
      }),
      (e.prototype.enforceFocus = function () {
        t(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            t.proxy(function (t) {
              this.$element[0] === t.target ||
                this.$element.has(t.target).length ||
                this.$element.focus();
            }, this)
          );
      }),
      (e.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keyup.dismiss.bs.modal",
              t.proxy(function (t) {
                27 == t.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
      }),
      (e.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(),
          this.backdrop(function () {
            t.removeBackdrop(), t.$element.trigger("hidden.bs.modal");
          });
      }),
      (e.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (e.prototype.backdrop = function (e) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var i = t.support.transition && n;
          if (
            ((this.$backdrop = t(
              '<div class="modal-backdrop ' + n + '" />'
            ).appendTo(document.body)),
            this.$element.on(
              "click.dismiss.modal",
              t.proxy(function (t) {
                t.target === t.currentTarget &&
                  ("static" == this.options.backdrop
                    ? this.$element[0].focus.call(this.$element[0])
                    : this.hide.call(this));
              }, this)
            ),
            i && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
          )
            return;
          i
            ? this.$backdrop
                .one(t.support.transition.end, e)
                .emulateTransitionEnd(150)
            : e();
        } else
          !this.isShown && this.$backdrop
            ? (this.$backdrop.removeClass("in"),
              t.support.transition && this.$element.hasClass("fade")
                ? this.$backdrop
                    .one(t.support.transition.end, e)
                    .emulateTransitionEnd(150)
                : e())
            : e && e();
      });
    var n = t.fn.modal;
    (t.fn.modal = function (n, i) {
      return this.each(function () {
        var o = t(this),
          s = o.data("bs.modal"),
          r = t.extend({}, e.DEFAULTS, o.data(), "object" == typeof n && n);
        s || o.data("bs.modal", (s = new e(this, r))),
          "string" == typeof n ? s[n](i) : r.show && s.show(i);
      });
    }),
      (t.fn.modal.Constructor = e),
      (t.fn.modal.noConflict = function () {
        return (t.fn.modal = n), this;
      }),
      t(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (e) {
          var n = t(this),
            i = n.attr("href"),
            o = t(
              n.attr("data-target") || (i && i.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            s = o.data("modal")
              ? "toggle"
              : t.extend({ remote: !/#/.test(i) && i }, o.data(), n.data());
          e.preventDefault(),
            o.modal(s, this).one("hide", function () {
              n.is(":visible") && n.focus();
            });
        }
      ),
      t(document)
        .on("show.bs.modal", ".modal", function () {
          t(document.body).addClass("modal-open");
        })
        .on("hidden.bs.modal", ".modal", function () {
          t(document.body).removeClass("modal-open");
        });
  })(window.jQuery),
  (function (t) {
    "use strict";
    var e = function (t, e) {
      (this.type =
        this.options =
        this.enabled =
        this.timeout =
        this.hoverState =
        this.$element =
          null),
        this.init("tooltip", t, e);
    };
    (e.DEFAULTS = {
      animation: !0,
      placement: "top",
      selector: !1,
      template:
        '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      container: !1,
    }),
      (e.prototype.init = function (e, n, i) {
        (this.enabled = !0),
          (this.type = e),
          (this.$element = t(n)),
          (this.options = this.getOptions(i));
        for (var o = this.options.trigger.split(" "), s = o.length; s--; ) {
          var r = o[s];
          if ("click" == r)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              t.proxy(this.toggle, this)
            );
          else if ("manual" != r) {
            var a = "hover" == r ? "mouseenter" : "focus",
              l = "hover" == r ? "mouseleave" : "blur";
            this.$element.on(
              a + "." + this.type,
              this.options.selector,
              t.proxy(this.enter, this)
            ),
              this.$element.on(
                l + "." + this.type,
                this.options.selector,
                t.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = t.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (e.prototype.getDefaults = function () {
        return e.DEFAULTS;
      }),
      (e.prototype.getOptions = function (e) {
        return (
          (e = t.extend({}, this.getDefaults(), this.$element.data(), e))
            .delay &&
            "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          e
        );
      }),
      (e.prototype.getDelegateOptions = function () {
        var e = {},
          n = this.getDefaults();
        return (
          this._options &&
            t.each(this._options, function (t, i) {
              n[t] != i && (e[t] = i);
            }),
          e
        );
      }),
      (e.prototype.enter = function (e) {
        var n =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget)
                [this.type](this.getDelegateOptions())
                .data("bs." + this.type);
        if (
          (clearTimeout(n.timeout),
          (n.hoverState = "in"),
          !n.options.delay || !n.options.delay.show)
        )
          return n.show();
        n.timeout = setTimeout(function () {
          "in" == n.hoverState && n.show();
        }, n.options.delay.show);
      }),
      (e.prototype.leave = function (e) {
        var n =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget)
                [this.type](this.getDelegateOptions())
                .data("bs." + this.type);
        if (
          (clearTimeout(n.timeout),
          (n.hoverState = "out"),
          !n.options.delay || !n.options.delay.hide)
        )
          return n.hide();
        n.timeout = setTimeout(function () {
          "out" == n.hoverState && n.hide();
        }, n.options.delay.hide);
      }),
      (e.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          if ((this.$element.trigger(e), e.isDefaultPrevented())) return;
          var n = this.tip();
          this.setContent(), this.options.animation && n.addClass("fade");
          var i =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, n[0], this.$element[0])
                : this.options.placement,
            o = /\s?auto?\s?/i,
            s = o.test(i);
          s && (i = i.replace(o, "") || "top"),
            n.detach().css({ top: 0, left: 0, display: "block" }).addClass(i),
            this.options.container
              ? n.appendTo(this.options.container)
              : n.insertAfter(this.$element);
          var r = this.getPosition(),
            a = n[0].offsetWidth,
            l = n[0].offsetHeight;
          if (s) {
            var u = this.$element.parent(),
              c = i,
              d = document.documentElement.scrollTop || document.body.scrollTop,
              h =
                "body" == this.options.container
                  ? window.innerWidth
                  : u.outerWidth(),
              f =
                "body" == this.options.container
                  ? window.innerHeight
                  : u.outerHeight(),
              p = "body" == this.options.container ? 0 : u.offset().left;
            (i =
              "bottom" == i && r.top + r.height + l - d > f
                ? "top"
                : "top" == i && r.top - d - l < 0
                ? "bottom"
                : "right" == i && r.right + a > h
                ? "left"
                : "left" == i && r.left - a < p
                ? "right"
                : i),
              n.removeClass(c).addClass(i);
          }
          var m = this.getCalculatedOffset(i, r, a, l);
          this.applyPlacement(m, i),
            this.$element.trigger("shown.bs." + this.type);
        }
      }),
      (e.prototype.applyPlacement = function (t, e) {
        var n,
          i = this.tip(),
          o = i[0].offsetWidth,
          s = i[0].offsetHeight,
          r = parseInt(i.css("margin-top"), 10),
          a = parseInt(i.css("margin-left"), 10);
        isNaN(r) && (r = 0),
          isNaN(a) && (a = 0),
          (t.top = t.top + r),
          (t.left = t.left + a),
          i.offset(t).addClass("in");
        var l = i[0].offsetWidth,
          u = i[0].offsetHeight;
        if (
          ("top" == e && u != s && ((n = !0), (t.top = t.top + s - u)),
          /bottom|top/.test(e))
        ) {
          var c = 0;
          t.left < 0 &&
            ((c = -2 * t.left),
            (t.left = 0),
            i.offset(t),
            (l = i[0].offsetWidth),
            (u = i[0].offsetHeight)),
            this.replaceArrow(c - o + l, l, "left");
        } else this.replaceArrow(u - s, u, "top");
        n && i.offset(t);
      }),
      (e.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "");
      }),
      (e.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
          t.removeClass("fade in top bottom left right");
      }),
      (e.prototype.hide = function () {
        var e = this,
          n = this.tip(),
          i = t.Event("hide.bs." + this.type);
        function o() {
          "in" != e.hoverState && n.detach();
        }
        if ((this.$element.trigger(i), !i.isDefaultPrevented()))
          return (
            n.removeClass("in"),
            t.support.transition && this.$tip.hasClass("fade")
              ? n.one(t.support.transition.end, o).emulateTransitionEnd(150)
              : o(),
            this.$element.trigger("hidden.bs." + this.type),
            this
          );
      }),
      (e.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) &&
          t
            .attr("data-original-title", t.attr("title") || "")
            .attr("title", "");
      }),
      (e.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (e.prototype.getPosition = function () {
        var e = this.$element[0];
        return t.extend(
          {},
          "function" == typeof e.getBoundingClientRect
            ? e.getBoundingClientRect()
            : { width: e.offsetWidth, height: e.offsetHeight },
          this.$element.offset()
        );
      }),
      (e.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t
          ? { top: e.top + e.height, left: e.left + e.width / 2 - n / 2 }
          : "top" == t
          ? { top: e.top - i, left: e.left + e.width / 2 - n / 2 }
          : "left" == t
          ? { top: e.top + e.height / 2 - i / 2, left: e.left - n }
          : { top: e.top + e.height / 2 - i / 2, left: e.left + e.width };
      }),
      (e.prototype.getTitle = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-original-title") ||
          ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        );
      }),
      (e.prototype.tip = function () {
        return (this.$tip = this.$tip || t(this.options.template));
      }),
      (e.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (e.prototype.validate = function () {
        this.$element[0].parentNode ||
          (this.hide(), (this.$element = null), (this.options = null));
      }),
      (e.prototype.enable = function () {
        this.enabled = !0;
      }),
      (e.prototype.disable = function () {
        this.enabled = !1;
      }),
      (e.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (e.prototype.toggle = function (e) {
        var n = e
          ? t(e.currentTarget)
              [this.type](this.getDelegateOptions())
              .data("bs." + this.type)
          : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n);
      }),
      (e.prototype.destroy = function () {
        this.hide()
          .$element.off("." + this.type)
          .removeData("bs." + this.type);
      });
    var n = t.fn.tooltip;
    (t.fn.tooltip = function (n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.tooltip"),
          s = "object" == typeof n && n;
        o || i.data("bs.tooltip", (o = new e(this, s))),
          "string" == typeof n && o[n]();
      });
    }),
      (t.fn.tooltip.Constructor = e),
      (t.fn.tooltip.noConflict = function () {
        return (t.fn.tooltip = n), this;
      });
  })(window.jQuery),
  (function (t) {
    "use strict";
    var e = function (t, e) {
      this.init("popover", t, e);
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
    })),
      ((e.prototype = t.extend(
        {},
        t.fn.tooltip.Constructor.prototype
      )).constructor = e),
      (e.prototype.getDefaults = function () {
        return e.DEFAULTS;
      }),
      (e.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle(),
          n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
          t.find(".popover-content")[this.options.html ? "html" : "text"](n),
          t.removeClass("fade top bottom left right in"),
          t.find(".popover-title").html() || t.find(".popover-title").hide();
      }),
      (e.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (e.prototype.getContent = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-content") ||
          ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        );
      }),
      (e.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      }),
      (e.prototype.tip = function () {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip;
      });
    var n = t.fn.popover;
    (t.fn.popover = function (n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.popover"),
          s = "object" == typeof n && n;
        o || i.data("bs.popover", (o = new e(this, s))),
          "string" == typeof n && o[n]();
      });
    }),
      (t.fn.popover.Constructor = e),
      (t.fn.popover.noConflict = function () {
        return (t.fn.popover = n), this;
      });
  })(window.jQuery),
  (function (t) {
    "use strict";
    function e(n, i) {
      var o,
        s = t.proxy(this.process, this);
      (this.$element = t(n).is("body") ? t(window) : t(n)),
        (this.$body = t("body")),
        (this.$scrollElement = this.$element.on(
          "scroll.bs.scroll-spy.data-api",
          s
        )),
        (this.options = t.extend({}, e.DEFAULTS, i)),
        (this.selector =
          (this.options.target ||
            ((o = t(n).attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")) ||
            "") + " .nav li > a"),
        (this.offsets = t([])),
        (this.targets = t([])),
        (this.activeTarget = null),
        this.refresh(),
        this.process();
    }
    (e.DEFAULTS = { offset: 10 }),
      (e.prototype.refresh = function () {
        var e = this.$element[0] == window ? "offset" : "position";
        (this.offsets = t([])), (this.targets = t([]));
        var n = this;
        this.$body
          .find(this.selector)
          .map(function () {
            var i = t(this),
              o = i.data("target") || i.attr("href"),
              s = /^#\w/.test(o) && t(o);
            return (
              (s &&
                s.length && [
                  [
                    s[e]().top +
                      (!t.isWindow(n.$scrollElement.get(0)) &&
                        n.$scrollElement.scrollTop()),
                    o,
                  ],
                ]) ||
              null
            );
          })
          .sort(function (t, e) {
            return t[0] - e[0];
          })
          .each(function () {
            n.offsets.push(this[0]), n.targets.push(this[1]);
          });
      }),
      (e.prototype.process = function () {
        var t,
          e = this.$scrollElement.scrollTop() + this.options.offset,
          n =
            (this.$scrollElement[0].scrollHeight ||
              this.$body[0].scrollHeight) - this.$scrollElement.height(),
          i = this.offsets,
          o = this.targets,
          s = this.activeTarget;
        if (e >= n) return s != (t = o.last()[0]) && this.activate(t);
        for (t = i.length; t--; )
          s != o[t] &&
            e >= i[t] &&
            (!i[t + 1] || e <= i[t + 1]) &&
            this.activate(o[t]);
      }),
      (e.prototype.activate = function (e) {
        (this.activeTarget = e),
          t(this.selector).parents(".active").removeClass("active");
        var n =
            this.selector +
            '[data-target="' +
            e +
            '"],' +
            this.selector +
            '[href="' +
            e +
            '"]',
          i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length &&
          (i = i.closest("li.dropdown").addClass("active")),
          i.trigger("activate");
      });
    var n = t.fn.scrollspy;
    (t.fn.scrollspy = function (n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.scrollspy"),
          s = "object" == typeof n && n;
        o || i.data("bs.scrollspy", (o = new e(this, s))),
          "string" == typeof n && o[n]();
      });
    }),
      (t.fn.scrollspy.Constructor = e),
      (t.fn.scrollspy.noConflict = function () {
        return (t.fn.scrollspy = n), this;
      }),
      t(window).on("load", function () {
        t('[data-spy="scroll"]').each(function () {
          var e = t(this);
          e.scrollspy(e.data());
        });
      });
  })(window.jQuery),
  (function (t) {
    "use strict";
    var e = function (e) {
      this.element = t(e);
    };
    (e.prototype.show = function () {
      var e = this.element,
        n = e.closest("ul:not(.dropdown-menu)"),
        i = e.attr("data-target");
      if (
        (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")),
        !e.parent("li").hasClass("active"))
      ) {
        var o = n.find(".active:last a")[0],
          s = t.Event("show.bs.tab", { relatedTarget: o });
        if ((e.trigger(s), !s.isDefaultPrevented())) {
          var r = t(i);
          this.activate(e.parent("li"), n),
            this.activate(r, r.parent(), function () {
              e.trigger({ type: "shown.bs.tab", relatedTarget: o });
            });
        }
      }
    }),
      (e.prototype.activate = function (e, n, i) {
        var o = n.find("> .active"),
          s = i && t.support.transition && o.hasClass("fade");
        function r() {
          o
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active"),
            e.addClass("active"),
            s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu") &&
              e.closest("li.dropdown").addClass("active"),
            i && i();
        }
        s ? o.one(t.support.transition.end, r).emulateTransitionEnd(150) : r(),
          o.removeClass("in");
      });
    var n = t.fn.tab;
    (t.fn.tab = function (n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.tab");
        o || i.data("bs.tab", (o = new e(this))),
          "string" == typeof n && o[n]();
      });
    }),
      (t.fn.tab.Constructor = e),
      (t.fn.tab.noConflict = function () {
        return (t.fn.tab = n), this;
      }),
      t(document).on(
        "click.bs.tab.data-api",
        '[data-toggle="tab"], [data-toggle="pill"]',
        function (e) {
          e.preventDefault(), t(this).tab("show");
        }
      );
  })(window.jQuery),
  (function (t) {
    "use strict";
    var e = function (n, i) {
      (this.options = t.extend({}, e.DEFAULTS, i)),
        (this.$window = t(window)
          .on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            t.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = t(n)),
        (this.affixed = this.unpin = null),
        this.checkPosition();
    };
    (e.RESET = "affix affix-top affix-bottom"),
      (e.DEFAULTS = { offset: 0 }),
      (e.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1);
      }),
      (e.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var n = t(document).height(),
            i = this.$window.scrollTop(),
            o = this.$element.offset(),
            s = this.options.offset,
            r = s.top,
            a = s.bottom;
          "object" != typeof s && (a = r = s),
            "function" == typeof r && (r = s.top()),
            "function" == typeof a && (a = s.bottom());
          var l =
            !(null != this.unpin && i + this.unpin <= o.top) &&
            (null != a && o.top + this.$element.height() >= n - a
              ? "bottom"
              : null != r && i <= r && "top");
          this.affixed !== l &&
            (this.unpin && this.$element.css("top", ""),
            (this.affixed = l),
            (this.unpin = "bottom" == l ? o.top - i : null),
            this.$element
              .removeClass(e.RESET)
              .addClass("affix" + (l ? "-" + l : "")),
            "bottom" == l &&
              this.$element.offset({
                top: document.body.offsetHeight - a - this.$element.height(),
              }));
        }
      });
    var n = t.fn.affix;
    (t.fn.affix = function (n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.affix"),
          s = "object" == typeof n && n;
        o || i.data("bs.affix", (o = new e(this, s))),
          "string" == typeof n && o[n]();
      });
    }),
      (t.fn.affix.Constructor = e),
      (t.fn.affix.noConflict = function () {
        return (t.fn.affix = n), this;
      }),
      t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
          var e = t(this),
            n = e.data();
          (n.offset = n.offset || {}),
            n.offsetBottom && (n.offset.bottom = n.offsetBottom),
            n.offsetTop && (n.offset.top = n.offsetTop),
            e.affix(n);
        });
      });
  })(window.jQuery);
var inModal = new URLSearchParams(window.location.search).has("modal");
function debounce(t, e, n = !1) {
  let i;
  return function (...o) {
    const s = this,
      r = n && !i;
    clearTimeout(i),
      (i = setTimeout(() => {
        (i = null), n || t.apply(s, o);
      }, e)),
      r && t.apply(s, o);
  };
}
function setJoinModalStyles() {
  0 != $("#join-modal .btn:visible").length &&
    ($("#join-modal .btn:visible").css("margin-top", "auto"),
    breakpoint().indexOf("phone") >= 0
      ? ($("#join-modal .row").css("display", "flex"),
        $("#join-modal .row").css("flex-direction", "column"))
      : ($("#join-modal .row").css("display", "flex"),
        $("#join-modal .row").css("flex-direction", "row")));
}
function centerPagination() {
  var t = 0;
  $(".pagination .page-numbers li").each(function () {
    t += $(this).outerWidth(!0);
  }),
    $(".pagination .page-numbers").width(t + 1);
}
$(document).ready(function () {
  $("a").filter(function () {
    return (
      this.hostname &&
      this.hostname.replace(/^www\./, "") !==
        location.hostname.replace(/^www\./, "")
    );
  }),
    $("footer .scroll-to-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 300);
    }),
    parent.jQuery &&
      (0 == parent.$("#iframe-modal").length &&
        $("html").height() < $(window).height() &&
        $(".body-content").css(
          "min-height",
          $(window).height() -
            $(".body-content").offset().top -
            $("footer").height()
        ),
      parent.$("#iframe-modal").length > 0 && $("body").addClass("in-modal")),
    SetDynamicElements(),
    $(window).on("orientationchange resize", function () {
      SetDynamicElements();
    }),
    $(".search-toggle").on("click keydown", function (t) {
      if ("click" === t.type || ("keydown" === t.type && 13 === t.which)) {
        var e = $(this),
          n = $(e.attr("href"));
        n.toggle(),
          e.toggleClass("active"),
          e.hasClass("active") && n.find(".search-text").focus(),
          e.attr("aria-expanded", e.hasClass("active")),
          e.hasClass("active") && n.find(".search-text").focus();
        var i = n.closest("li");
        return (
          e.hasClass("active")
            ? i.attr("aria-hidden", "false")
            : i.attr("aria-hidden", "true"),
          t.stopPropagation(),
          t.preventDefault(),
          $("body")
            .off("click")
            .on("click", function () {
              n.hide(), e.removeClass("active");
            }),
          n.off("click").on("click", function (t) {
            t.stopPropagation();
          }),
          !1
        );
      }
    }),
    $(".search-text").keydown(function (t) {
      13 == (t.charCode || t.keyCode || 0) &&
        $(this).parents(".form-group").find(".search-go").click();
    }),
    $(".search-go").click(function () {
      var t = $(this).parents(".form-group").find(".search-text").val();
      return (
        (window.location.href =
          $(this).attr("href") +
          (t.length > 0 ? "?q=" + encodeURIComponent(t) : "")),
        !1
      );
    }),
    $("#join-modal").on("shown.bs.modal", function (t) {
      (t.currentTarget.relatedTarget = t.relatedTarget), setJoinModalStyles();
    }),
    $("#join-modal").on("hidden.bs.modal", function (t) {
      t.currentTarget.relatedTarget &&
        setTimeout(function () {
          $($(t.currentTarget.relatedTarget)).focus();
        });
    }),
    window.addEventListener("resize", function (t) {
      setJoinModalStyles();
    }),
    centerPagination(),
    $(document).on("click", ".modal-iframe", function (t) {
      var e = $(t.target);
      if (
        (e.is("[href]") || (e = e.closest("[href]")),
        e.prop("href").startsWith("mailto:"))
      )
        return !0;
      t.preventDefault(), ShowIframeModal(e);
    });
});
let debounceCenterPagination = debounce(centerPagination, 300);
function SetDynamicElements(t) {
  if (
    (t || (t = $("body")),
    t.find(".max-window-height").each(function () {
      for (
        var t = $(this).offset().top, e = $(this).parent();
        0 == t && e.length > 0 && e.offset();

      )
        (t = e.offset().top), (e = e.parent());
      var n =
        $(window).height() - t - ($(this).outerHeight() - $(this).height());
      !$(this).hasClass("limit-to-window") &&
        $(this).height() > n &&
        (n = $(this).height()),
        $(this).height(n);
    }),
    t.find(".children-same-height").each(function () {
      var t = $(this).children();
      if (!(t.length <= 1)) {
        var e = 0,
          n = $(this).data("outer-height");
        t.each(function () {
          $(this).attr("style") &&
            $(this).attr(
              "style",
              $(this)
                .attr("style")
                .replace("height: " + $(this).outerHeight() + "px;", "")
            ),
            ((n && $(this).outerHeight(!0) > e) ||
              (!n && $(this).height() > e)) &&
              (e = n ? $(this).outerHeight(!0) : $(this).height());
        }),
          t.height(e);
      }
    }),
    breakpoint().indexOf("mobile") >= 0)
  ) {
    var e = $(".header-ribbon:visible");
    0 == e.length && (e = $(".body-content > .section > .background .title")),
      $("h1")
        .toggleClass("really-long", $("h1").text().length >= 45)
        .toggleClass("long", $("h1").text().length >= 30),
      $(".body-content > .section > .background").css(
        "min-height",
        e.outerHeight()
      ),
      e.parents(".container.moved-up").length > 0 &&
        parent.jQuery &&
        0 == parent.$("#iframe-modal .modal-body").length &&
        $(".container.moved-up").css("margin-top", -e.outerHeight());
  } else
    $(".body-content > .section > .background").css("min-height", ""),
      $(".container.moved-up").css("margin-top", "");
}
function breakpoint() {
  var t = [];
  return (
    $(window).width() < 992 && t.push("mobile"),
    t.push(
      $(window).width() < 768
        ? "phone"
        : $(window).width() < 992
        ? "tablet"
        : $(window).width() < 1200
        ? "desktop"
        : "large"
    ),
    t
  );
}
function isIpad() {
  return null != navigator.userAgent.match(/iPad/i);
}
function ShowIframeModal(t, e) {
  var n = "iframe-modal",
    i = parent.jQuery ? parent.$("#" + n) : "";
  0 == i.length &&
    parent.jQuery &&
    (parent
      .$("body")
      .append(
        '<div class="modal fade sliced-corner" id="' +
          n +
          '" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a href="javascript:void(0);" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></a><h4 class="modal-title" role="heading" aria-level="2"></h4></div><div class="modal-body"></div></div></div></div>'
      ),
    (i = parent.$("#" + n)).on("hidden.bs.modal", function () {
      i.find("iframe").prop("src", ""), i.find("iframe").html("");
    }));
  var o = Math.min(0.8 * $(parent).height() - 30, 700),
    s = Math.min(
      Math.max($(parent).width() - 20, 0.8 * $(parent).width()),
      1100
    ),
    r = t && t.data("modal-height") ? t.data("modal-height") : o,
    a = t && t.data("modal-width") ? t.data("modal-width") : s;
  a > s && (a = s),
    r > o && (r = o),
    parent.jQuery &&
      parent.$(".modal:visible").length > 0 &&
      i.css("z-index", parseInt(parent.$(".modal:visible").css("z-index")) + 1);
  var l = i.find(".modal-body");
  i.find(".modal-dialog").css("margin-top", "5%");
  var u = e || t.prop("href");
  return (
    l.html(
      '<iframe frameborder="0" src="' +
        u +
        (u.indexOf("?") >= 0 ? "&" : "?") +
        'modal=1" width="' +
        a +
        '" height="' +
        r +
        '"></iframe>'
    ),
    l.append(
      '<div class="loading" role="alert" aria-live="polite" aria-atomic="true"><div class="loading-indicator"><span class="novicon novicon-spinner novicon-spin"></span>Loading...</div></div>'
    ),
    i
      .find(".modal-dialog,.modal-body,.modal-content")
      .width(a + l.outerWidth() - l.width())
      .height(r),
    i.modal(),
    !1
  );
}
/*! SmartMenus jQuery Plugin - v1.1.1 - July 23, 2020
 * http://www.smartmenus.org/
 * Copyright Vasil Dinkov, Vadikom Web Ltd. http://vadikom.com; Licensed MIT */ function createCookie(
  t,
  e,
  n = null
) {
  if (!t || !e)
    return void console.error(
      "Name and value are required to create a cookie."
    );
  const i = `${encodeURIComponent(t)}=${encodeURIComponent(e)}${
    n ? `; max-age=${n}` : ""
  }; path=/`;
  document.cookie = i;
}
function readCookie(t) {
  if (!t) return console.error("Name is required to read a cookie."), null;
  const e = `${encodeURIComponent(t)}=`,
    n = document.cookie.split(";");
  for (const t of n) {
    let n = t.trim();
    if (n.startsWith(e)) return decodeURIComponent(n.substring(e.length));
  }
  return null;
}
function ShowSavedPopup(t, e) {
  var n = parent.$("#save-slideout");
  if (
    (0 == n.length &&
      (parent
        .$("body")
        .append(
          '<div id="save-slideout" class="alert alert-success"><span class="icon"><span class="novicon novicon-check"></span></span><strong></strong></div>'
        ),
      (n = parent.$("#save-slideout"))),
    null == e && (e = " saved"),
    n.find("strong").html(t + e),
    -1 == breakpoint().indexOf("mobile"))
  ) {
    var i = n.outerHeight();
    n.stop().css("top", "-" + i + "px");
    var o = i + ($("#admin-bar").outerHeight() || 0);
    n.stop().animate({ top: "+=" + o }, 1e3),
      setTimeout(function () {
        n.stop().animate({ top: "-=" + o }, 2e3);
      }, 5e3);
  } else
    n.stop().fadeIn(500, function () {
      setTimeout(function () {
        n.fadeOut(2e3);
      }, 5e3);
    });
}
function getUrlParameter(t) {
  t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(location.search);
  return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "));
}
function TextCounter(t) {
  var e = parseInt(t.prop("maxlength")),
    n = t.parents(".with-count"),
    i = n.find(".character-count"),
    o = i.children("strong"),
    s = e - t.val().length;
  i.css("right", n.css("padding-right")), o.html(s);
}
function ShowEventStartingPopup(t) {
  var e =
    '<div class="modal fade" tabindex="-1" role="dialog" id="event-starting-modal">\n                    <div class="modal-dialog" role="document">\n                        <div class="modal-content">\n                            <div class="modal-body">\n                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n                                <h1>[EVENT NAME]</h1>\n                                <hr>\n                                <div class="event-starting-content">\n                                    <h2>Your Virtual Event is Starting at [TIME OF DAY] ([TIMEZONE])</h2>\n                                    <a href="[JOIN LINK]" class="btn btn-default join-link">JOIN EVENT</a>\n                                    <a href="[VIEW EVENT]" class="view-event-link">View Event Details</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>';
  const n = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !0,
  }).format(new Date(t.StartingTime));
  (e = (e = (e = (e = (e = e.replace("[EVENT NAME]", t.EventName)).replace(
    "[TIME OF DAY]",
    n
  )).replace("[TIMEZONE]", t.TimeZone)).replace(
    "[JOIN LINK]",
    t.JoinUrl
  )).replace("[VIEW EVENT]", t.EventDetailsUrl)),
    $("body").append(e),
    $("#event-starting-modal").modal("show");
}
function ValidateSelect(t) {
  var e = $(t.target);
  if (e) {
    var n = e.attr("id"),
      i = e.closest("form").validate();
    i && i.element("#" + n);
  }
}
function ShouldShowOneTimeAlert() {
  if ("undefined" != typeof hashedAlertText) {
    var t = readCookie("OneTimeAlert");
    return null === t || t !== hashedAlertText;
  }
}
function Acknowledge() {
  isAuthenticated
    ? createCookie("OneTimeAlert", hashedAlertText, 31536e3)
    : createCookie("OneTimeAlert", hashedAlertText),
    hideAlert();
}
function showAlert() {
  $(".c-alert-one-time").removeClass("hidden");
}
function hideAlert() {
  $(".c-alert-one-time").addClass("hidden");
}
"#_=_" == window.location.hash &&
  (history.replaceState
    ? history.replaceState(null, null, window.location.href.split("#")[0])
    : (window.location.hash = "")),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(function ($) {
    function initMouseDetection(t) {
      var e = ".smartmenus_mouse";
      if (mouseDetectionEnabled || t)
        mouseDetectionEnabled &&
          t &&
          ($(document).off(e), (mouseDetectionEnabled = !1));
      else {
        var n = !0,
          i = null,
          o = {
            mousemove: function (t) {
              var e = {
                x: t.pageX,
                y: t.pageY,
                timeStamp: new Date().getTime(),
              };
              if (i) {
                var o = Math.abs(i.x - e.x),
                  s = Math.abs(i.y - e.y);
                if (
                  (o > 0 || s > 0) &&
                  4 >= o &&
                  4 >= s &&
                  300 >= e.timeStamp - i.timeStamp &&
                  ((mouse = !0), n)
                ) {
                  var r = $(t.target).closest("a");
                  r.is("a") &&
                    $.each(menuTrees, function () {
                      return $.contains(this.$root[0], r[0])
                        ? (this.itemEnter({ currentTarget: r[0] }), !1)
                        : void 0;
                    }),
                    (n = !1);
                }
              }
              i = e;
            },
          };
        (o[
          touchEvents
            ? "touchstart"
            : "pointerover pointermove pointerout MSPointerOver MSPointerMove MSPointerOut"
        ] = function (t) {
          isTouchEvent(t.originalEvent) && (mouse = !1);
        }),
          $(document).on(getEventsNS(o, e)),
          (mouseDetectionEnabled = !0);
      }
    }
    function isTouchEvent(t) {
      return !/^(4|mouse)$/.test(t.pointerType);
    }
    function getEventsNS(t, e) {
      e || (e = "");
      var n = {};
      for (var i in t) n[i.split(" ").join(e + " ") + e] = t[i];
      return n;
    }
    var menuTrees = [],
      mouse = !1,
      touchEvents = "ontouchstart" in window,
      mouseDetectionEnabled = !1,
      requestAnimationFrame =
        window.requestAnimationFrame ||
        function (t) {
          return setTimeout(t, 1e3 / 60);
        },
      cancelAnimationFrame =
        window.cancelAnimationFrame ||
        function (t) {
          clearTimeout(t);
        },
      canAnimate = !!$.fn.animate;
    return (
      ($.SmartMenus = function (t, e) {
        (this.$root = $(t)),
          (this.opts = e),
          (this.rootId = ""),
          (this.accessIdPrefix = ""),
          (this.$subArrow = null),
          (this.activatedItems = []),
          (this.visibleSubMenus = []),
          (this.showTimeout = 0),
          (this.hideTimeout = 0),
          (this.scrollTimeout = 0),
          (this.clickActivated = !1),
          (this.focusActivated = !1),
          (this.zIndexInc = 0),
          (this.idInc = 0),
          (this.$firstLink = null),
          (this.$firstSub = null),
          (this.disabled = !1),
          (this.$disableOverlay = null),
          (this.$touchScrollingSub = null),
          (this.cssTransforms3d =
            "perspective" in t.style || "webkitPerspective" in t.style),
          (this.wasCollapsible = !1),
          this.init();
      }),
      $.extend($.SmartMenus, {
        hideAll: function () {
          $.each(menuTrees, function () {
            this.menuHideAll();
          });
        },
        destroy: function () {
          for (; menuTrees.length; ) menuTrees[0].destroy();
          initMouseDetection(!0);
        },
        prototype: {
          init: function (t) {
            var e = this;
            if (!t) {
              menuTrees.push(this),
                (this.rootId = (
                  new Date().getTime() +
                  Math.random() +
                  ""
                ).replace(/\D/g, "")),
                (this.accessIdPrefix = "sm-" + this.rootId + "-"),
                this.$root.hasClass("sm-rtl") &&
                  (this.opts.rightToLeftSubMenus = !0);
              var n = ".smartmenus";
              this.$root
                .data("smartmenus", this)
                .attr("data-smartmenus-id", this.rootId)
                .dataSM("level", 1)
                .on(
                  getEventsNS(
                    {
                      "mouseover focusin": $.proxy(this.rootOver, this),
                      "mouseout focusout": $.proxy(this.rootOut, this),
                      keydown: $.proxy(this.rootKeyDown, this),
                    },
                    n
                  )
                )
                .on(
                  getEventsNS(
                    {
                      mouseenter: $.proxy(this.itemEnter, this),
                      mouseleave: $.proxy(this.itemLeave, this),
                      mousedown: $.proxy(this.itemDown, this),
                      focus: $.proxy(this.itemFocus, this),
                      blur: $.proxy(this.itemBlur, this),
                      click: $.proxy(this.itemClick, this),
                    },
                    n
                  ),
                  "a"
                ),
                (n += this.rootId),
                this.opts.hideOnClick &&
                  $(document).on(
                    getEventsNS(
                      {
                        touchstart: $.proxy(this.docTouchStart, this),
                        touchmove: $.proxy(this.docTouchMove, this),
                        touchend: $.proxy(this.docTouchEnd, this),
                        click: $.proxy(this.docClick, this),
                      },
                      n
                    )
                  ),
                $(window).on(
                  getEventsNS(
                    {
                      "resize orientationchange": $.proxy(this.winResize, this),
                    },
                    n
                  )
                ),
                this.opts.subIndicators &&
                  ((this.$subArrow = $("<span/>").addClass("sub-arrow")),
                  this.opts.subIndicatorsText &&
                    this.$subArrow.html(this.opts.subIndicatorsText)),
                initMouseDetection();
            }
            if (
              ((this.$firstSub = this.$root
                .find("ul")
                .each(function () {
                  e.menuInit($(this));
                })
                .eq(0)),
              (this.$firstLink = this.$root.find("a").eq(0)),
              this.opts.markCurrentItem)
            ) {
              var i = /(index|default)\.[^#\?\/]*/i,
                o = window.location.href.replace(i, ""),
                s = o.replace(/#.*/, "");
              this.$root.find("a:not(.mega-menu a)").each(function () {
                var t = this.href.replace(i, ""),
                  n = $(this);
                (t == o || t == s) &&
                  (n.addClass("current"),
                  e.opts.markCurrentTree &&
                    n
                      .parentsUntil("[data-smartmenus-id]", "ul")
                      .each(function () {
                        $(this).dataSM("parent-a").addClass("current");
                      }));
              });
            }
            this.wasCollapsible = this.isCollapsible();
          },
          destroy: function (t) {
            if (!t) {
              var e = ".smartmenus";
              this.$root
                .removeData("smartmenus")
                .removeAttr("data-smartmenus-id")
                .removeDataSM("level")
                .off(e),
                (e += this.rootId),
                $(document).off(e),
                $(window).off(e),
                this.opts.subIndicators && (this.$subArrow = null);
            }
            this.menuHideAll();
            var n = this;
            this.$root
              .find("ul")
              .each(function () {
                var t = $(this);
                t.dataSM("scroll-arrows") && t.dataSM("scroll-arrows").remove(),
                  t.dataSM("shown-before") &&
                    ((n.opts.subMenusMinWidth || n.opts.subMenusMaxWidth) &&
                      t
                        .css({ width: "", minWidth: "", maxWidth: "" })
                        .removeClass("sm-nowrap"),
                    t.dataSM("scroll-arrows") &&
                      t.dataSM("scroll-arrows").remove(),
                    t.css({
                      zIndex: "",
                      top: "",
                      left: "",
                      marginLeft: "",
                      marginTop: "",
                      display: "",
                    })),
                  0 == (t.attr("id") || "").indexOf(n.accessIdPrefix) &&
                    t.removeAttr("id");
              })
              .removeDataSM("in-mega")
              .removeDataSM("shown-before")
              .removeDataSM("scroll-arrows")
              .removeDataSM("parent-a")
              .removeDataSM("level")
              .removeDataSM("beforefirstshowfired")
              .removeAttr("role")
              .removeAttr("aria-hidden")
              .removeAttr("aria-labelledby")
              .removeAttr("aria-expanded"),
              this.$root
                .find("a.has-submenu")
                .each(function () {
                  var t = $(this);
                  0 == t.attr("id").indexOf(n.accessIdPrefix) &&
                    t.removeAttr("id");
                })
                .removeClass("has-submenu")
                .removeDataSM("sub")
                .removeAttr("aria-haspopup")
                .removeAttr("aria-controls")
                .removeAttr("aria-expanded")
                .closest("li")
                .removeDataSM("sub"),
              this.opts.subIndicators &&
                this.$root.find("span.sub-arrow").remove(),
              this.opts.markCurrentItem &&
                this.$root.find("a.current").removeClass("current"),
              t ||
                ((this.$root = null),
                (this.$firstLink = null),
                (this.$firstSub = null),
                this.$disableOverlay &&
                  (this.$disableOverlay.remove(),
                  (this.$disableOverlay = null)),
                menuTrees.splice($.inArray(this, menuTrees), 1));
          },
          disable: function (t) {
            if (!this.disabled) {
              if (
                (this.menuHideAll(),
                !t && !this.opts.isPopup && this.$root.is(":visible"))
              ) {
                var e = this.$root.offset();
                this.$disableOverlay = $(
                  '<div class="sm-jquery-disable-overlay"/>'
                )
                  .css({
                    position: "absolute",
                    top: e.top,
                    left: e.left,
                    width: this.$root.outerWidth(),
                    height: this.$root.outerHeight(),
                    zIndex: this.getStartZIndex(!0),
                    opacity: 0,
                  })
                  .appendTo(document.body);
              }
              this.disabled = !0;
            }
          },
          docClick: function (t) {
            return this.$touchScrollingSub
              ? void (this.$touchScrollingSub = null)
              : void (
                  ((this.visibleSubMenus.length &&
                    !$.contains(this.$root[0], t.target)) ||
                    $(t.target).closest("a").length) &&
                  this.menuHideAll()
                );
          },
          docTouchEnd: function () {
            if (this.lastTouch) {
              if (
                !(
                  !this.visibleSubMenus.length ||
                  (void 0 !== this.lastTouch.x2 &&
                    this.lastTouch.x1 != this.lastTouch.x2) ||
                  (void 0 !== this.lastTouch.y2 &&
                    this.lastTouch.y1 != this.lastTouch.y2) ||
                  (this.lastTouch.target &&
                    $.contains(this.$root[0], this.lastTouch.target))
                )
              ) {
                this.hideTimeout &&
                  (clearTimeout(this.hideTimeout), (this.hideTimeout = 0));
                var t = this;
                this.hideTimeout = setTimeout(function () {
                  t.menuHideAll();
                }, 350);
              }
              this.lastTouch = null;
            }
          },
          docTouchMove: function (t) {
            if (this.lastTouch) {
              var e = t.originalEvent.touches[0];
              (this.lastTouch.x2 = e.pageX), (this.lastTouch.y2 = e.pageY);
            }
          },
          docTouchStart: function (t) {
            var e = t.originalEvent.touches[0];
            this.lastTouch = { x1: e.pageX, y1: e.pageY, target: e.target };
          },
          enable: function () {
            this.disabled &&
              (this.$disableOverlay &&
                (this.$disableOverlay.remove(), (this.$disableOverlay = null)),
              (this.disabled = !1));
          },
          getClosestMenu: function (t) {
            for (var e = $(t).closest("ul"); e.dataSM("in-mega"); )
              e = e.parent().closest("ul");
            return e[0] || null;
          },
          getHeight: function (t) {
            return this.getOffset(t, !0);
          },
          getOffset: function (t, e) {
            var n;
            "none" == t.css("display") &&
              ((n = {
                position: t[0].style.position,
                visibility: t[0].style.visibility,
              }),
              t.css({ position: "absolute", visibility: "hidden" }).show());
            var i = t[0].getBoundingClientRect && t[0].getBoundingClientRect(),
              o =
                i &&
                (e
                  ? i.height || i.bottom - i.top
                  : i.width || i.right - i.left);
            return (
              o || 0 === o || (o = e ? t[0].offsetHeight : t[0].offsetWidth),
              n && t.hide().css(n),
              o
            );
          },
          getStartZIndex: function (t) {
            var e = parseInt(this[t ? "$root" : "$firstSub"].css("z-index"));
            return (
              !t && isNaN(e) && (e = parseInt(this.$root.css("z-index"))),
              isNaN(e) ? 1 : e
            );
          },
          getTouchPoint: function (t) {
            return (
              (t.touches && t.touches[0]) ||
              (t.changedTouches && t.changedTouches[0]) ||
              t
            );
          },
          getViewport: function (t) {
            var e = t ? "Height" : "Width",
              n = document.documentElement["client" + e],
              i = window["inner" + e];
            return i && (n = Math.min(n, i)), n;
          },
          getViewportHeight: function () {
            return this.getViewport(!0);
          },
          getViewportWidth: function () {
            return this.getViewport();
          },
          getWidth: function (t) {
            return this.getOffset(t);
          },
          handleEvents: function () {
            return !this.disabled && this.isCSSOn();
          },
          handleItemEvents: function (t) {
            return this.handleEvents() && !this.isLinkInMegaMenu(t);
          },
          isCollapsible: function () {
            return "static" == this.$firstSub.css("position");
          },
          isCSSOn: function () {
            return "inline" != this.$firstLink.css("display");
          },
          isFixed: function () {
            var t = "fixed" == this.$root.css("position");
            return (
              t ||
                this.$root.parentsUntil("body").each(function () {
                  return "fixed" == $(this).css("position")
                    ? ((t = !0), !1)
                    : void 0;
                }),
              t
            );
          },
          isLinkInMegaMenu: function (t) {
            return $(this.getClosestMenu(t[0])).hasClass("mega-menu");
          },
          isTouchMode: function () {
            return !mouse || this.opts.noMouseOver || this.isCollapsible();
          },
          itemActivate: function (t, e) {
            var n = t.closest("ul"),
              i = n.dataSM("level");
            if (
              i > 1 &&
              (!this.activatedItems[i - 2] ||
                this.activatedItems[i - 2][0] != n.dataSM("parent-a")[0])
            ) {
              var o = this;
              $(n.parentsUntil("[data-smartmenus-id]", "ul").get().reverse())
                .add(n)
                .each(function () {
                  o.itemActivate($(this).dataSM("parent-a"));
                });
            }
            if (
              ((!this.isCollapsible() || e) &&
                this.menuHideSubMenus(
                  this.activatedItems[i - 1] &&
                    this.activatedItems[i - 1][0] == t[0]
                    ? i
                    : i - 1
                ),
              (this.activatedItems[i - 1] = t),
              !1 !== this.$root.triggerHandler("activate.smapi", t[0]))
            ) {
              var s = t.dataSM("sub");
              s &&
                (this.isTouchMode() ||
                  !this.opts.showOnClick ||
                  this.clickActivated) &&
                this.menuShow(s);
            }
          },
          itemBlur: function (t) {
            var e = $(t.currentTarget);
            this.handleItemEvents(e) &&
              this.$root.triggerHandler("blur.smapi", e[0]);
          },
          itemClick: function (t) {
            var e = $(t.currentTarget);
            if (this.handleItemEvents(e)) {
              if (
                this.$touchScrollingSub &&
                this.$touchScrollingSub[0] == e.closest("ul")[0]
              )
                return (
                  (this.$touchScrollingSub = null), t.stopPropagation(), !1
                );
              if (!1 === this.$root.triggerHandler("click.smapi", e[0]))
                return !1;
              var n = e.dataSM("sub"),
                i = !!n && 2 == n.dataSM("level");
              if (n) {
                var o = $(t.target).is(".sub-arrow"),
                  s = this.isCollapsible(),
                  r = /toggle$/.test(this.opts.collapsibleBehavior),
                  a = /link$/.test(this.opts.collapsibleBehavior),
                  l = /^accordion/.test(this.opts.collapsibleBehavior);
                if (n.is(":visible")) {
                  if (!s && this.opts.showOnClick && i)
                    return (
                      this.menuHide(n),
                      (this.clickActivated = !1),
                      (this.focusActivated = !1),
                      !1
                    );
                  if (s && (r || o))
                    return this.itemActivate(e, l), this.menuHide(n), !1;
                } else if (
                  (!a || !s || o) &&
                  (!s &&
                    this.opts.showOnClick &&
                    i &&
                    (this.clickActivated = !0),
                  this.itemActivate(e, l),
                  n.is(":visible"))
                )
                  return (this.focusActivated = !0), !1;
              }
              return (
                !(
                  (!s && this.opts.showOnClick && i) ||
                  e.hasClass("disabled") ||
                  !1 === this.$root.triggerHandler("select.smapi", e[0])
                ) && void 0
              );
            }
          },
          itemDown: function (t) {
            var e = $(t.currentTarget);
            this.handleItemEvents(e) && e.dataSM("mousedown", !0);
          },
          itemEnter: function (t) {
            var e = $(t.currentTarget);
            if (this.handleItemEvents(e)) {
              if (!this.isTouchMode()) {
                this.showTimeout &&
                  (clearTimeout(this.showTimeout), (this.showTimeout = 0));
                var n = this;
                this.showTimeout = setTimeout(
                  function () {
                    n.itemActivate(e);
                  },
                  this.opts.showOnClick && 1 == e.closest("ul").dataSM("level")
                    ? 1
                    : this.opts.showTimeout
                );
              }
              this.$root.triggerHandler("mouseenter.smapi", e[0]);
            }
          },
          itemFocus: function (t) {
            var e = $(t.currentTarget);
            this.handleItemEvents(e) &&
              (!this.focusActivated ||
                (this.isTouchMode() && e.dataSM("mousedown")) ||
                (this.activatedItems.length &&
                  this.activatedItems[this.activatedItems.length - 1][0] ==
                    e[0]) ||
                this.itemActivate(e, !0),
              this.$root.triggerHandler("focus.smapi", e[0]));
          },
          itemLeave: function (t) {
            var e = $(t.currentTarget);
            this.handleItemEvents(e) &&
              (this.isTouchMode() ||
                (e[0].blur(),
                this.showTimeout &&
                  (clearTimeout(this.showTimeout), (this.showTimeout = 0))),
              e.removeDataSM("mousedown"),
              this.$root.triggerHandler("mouseleave.smapi", e[0]));
          },
          menuHide: function (t) {
            if (
              !1 !== this.$root.triggerHandler("beforehide.smapi", t[0]) &&
              (canAnimate && t.stop(!0, !0), "none" != t.css("display"))
            ) {
              var e = function () {
                t.css("z-index", "");
              };
              this.isCollapsible()
                ? canAnimate && this.opts.collapsibleHideFunction
                  ? this.opts.collapsibleHideFunction.call(this, t, e)
                  : t.hide(this.opts.collapsibleHideDuration, e)
                : canAnimate && this.opts.hideFunction
                ? this.opts.hideFunction.call(this, t, e)
                : t.hide(this.opts.hideDuration, e),
                t.dataSM("scroll") &&
                  (this.menuScrollStop(t),
                  t
                    .css({
                      "touch-action": "",
                      "-ms-touch-action": "",
                      "-webkit-transform": "",
                      transform: "",
                    })
                    .off(".smartmenus_scroll")
                    .removeDataSM("scroll")
                    .dataSM("scroll-arrows")
                    .hide()),
                t
                  .dataSM("parent-a")
                  .removeClass("highlighted")
                  .attr("aria-expanded", "false"),
                t.attr({ "aria-expanded": "false", "aria-hidden": "true" });
              var n = t.dataSM("level");
              this.activatedItems.splice(n - 1, 1),
                this.visibleSubMenus.splice(
                  $.inArray(t, this.visibleSubMenus),
                  1
                ),
                this.$root.triggerHandler("hide.smapi", t[0]);
            }
          },
          menuHideAll: function () {
            this.showTimeout &&
              (clearTimeout(this.showTimeout), (this.showTimeout = 0));
            for (
              var t = this.opts.isPopup ? 1 : 0,
                e = this.visibleSubMenus.length - 1;
              e >= t;
              e--
            )
              this.menuHide(this.visibleSubMenus[e]);
            this.opts.isPopup &&
              (canAnimate && this.$root.stop(!0, !0),
              this.$root.is(":visible") &&
                (canAnimate && this.opts.hideFunction
                  ? this.opts.hideFunction.call(this, this.$root)
                  : this.$root.hide(this.opts.hideDuration))),
              (this.activatedItems = []),
              (this.visibleSubMenus = []),
              (this.clickActivated = !1),
              (this.focusActivated = !1),
              (this.zIndexInc = 0),
              this.$root.triggerHandler("hideAll.smapi");
          },
          menuHideSubMenus: function (t) {
            for (var e = this.activatedItems.length - 1; e >= t; e--) {
              var n = this.activatedItems[e].dataSM("sub");
              n && this.menuHide(n);
            }
          },
          menuInit: function (t) {
            if (!t.dataSM("in-mega")) {
              t.hasClass("mega-menu") && t.find("ul").dataSM("in-mega", !0);
              for (
                var e = 2, n = t[0];
                (n = n.parentNode.parentNode) != this.$root[0];

              )
                e++;
              var i = t.prevAll("a").eq(-1);
              i.length || (i = t.prevAll().find("a").eq(-1)),
                i.addClass("has-submenu").dataSM("sub", t),
                t
                  .dataSM("parent-a", i)
                  .dataSM("level", e)
                  .parent()
                  .dataSM("sub", t);
              var o = i.attr("id") || this.accessIdPrefix + ++this.idInc,
                s = t.attr("id") || this.accessIdPrefix + ++this.idInc;
              i.attr({
                id: o,
                "aria-haspopup": "true",
                "aria-controls": s,
                "aria-expanded": "false",
              }),
                t.attr({
                  id: s,
                  role: "group",
                  "aria-hidden": "true",
                  "aria-labelledby": o,
                  "aria-expanded": "false",
                }),
                this.opts.subIndicators &&
                  i[this.opts.subIndicatorsPos](this.$subArrow.clone());
            }
          },
          menuPosition: function (t) {
            var e,
              n,
              i = t.dataSM("parent-a"),
              o = i.closest("li"),
              s = o.parent(),
              r = t.dataSM("level"),
              a = this.getWidth(t),
              l = this.getHeight(t),
              u = i.offset(),
              c = u.left,
              d = u.top,
              h = this.getWidth(i),
              f = this.getHeight(i),
              p = $(window),
              m = p.scrollLeft(),
              g = p.scrollTop(),
              v = this.getViewportWidth(),
              y = this.getViewportHeight(),
              w =
                s.parent().is("[data-sm-horizontal-sub]") ||
                (2 == r && !s.hasClass("sm-vertical")),
              b =
                (this.opts.rightToLeftSubMenus && !o.is("[data-sm-reverse]")) ||
                (!this.opts.rightToLeftSubMenus && o.is("[data-sm-reverse]")),
              x =
                2 == r
                  ? this.opts.mainMenuSubOffsetX
                  : this.opts.subMenusSubOffsetX,
              S =
                2 == r
                  ? this.opts.mainMenuSubOffsetY
                  : this.opts.subMenusSubOffsetY;
            if (
              (w
                ? ((e = b ? h - a - x : x),
                  (n = this.opts.bottomToTopSubMenus ? -l - S : f + S))
                : ((e = b ? x - a : h - x),
                  (n = this.opts.bottomToTopSubMenus ? f - S - l : S)),
              this.opts.keepInViewport)
            ) {
              var T = c + e,
                k = d + n;
              if (
                (b && m > T
                  ? (e = w ? m - T + e : h - x)
                  : !b && T + a > m + v && (e = w ? m + v - a - T + e : x - a),
                w ||
                  (y > l && k + l > g + y
                    ? (n += g + y - l - k)
                    : (l >= y || g > k) && (n += g - k)),
                (w && (k + l > g + y + 0.49 || g > k)) || (!w && l > y + 0.49))
              ) {
                var _ = this;
                t.dataSM("scroll-arrows") ||
                  t.dataSM(
                    "scroll-arrows",
                    $([
                      $(
                        '<span class="scroll-up"><span class="scroll-up-arrow"></span></span>'
                      )[0],
                      $(
                        '<span class="scroll-down"><span class="scroll-down-arrow"></span></span>'
                      )[0],
                    ])
                      .on({
                        mouseenter: function () {
                          (t.dataSM("scroll").up =
                            $(this).hasClass("scroll-up")),
                            _.menuScroll(t);
                        },
                        mouseleave: function (e) {
                          _.menuScrollStop(t), _.menuScrollOut(t, e);
                        },
                        "mousewheel DOMMouseScroll": function (t) {
                          t.preventDefault();
                        },
                      })
                      .insertAfter(t)
                  );
                var M = ".smartmenus_scroll";
                if (
                  (t
                    .dataSM("scroll", {
                      y: this.cssTransforms3d ? 0 : n - f,
                      step: 1,
                      itemH: f,
                      subH: l,
                      arrowDownH: this.getHeight(
                        t.dataSM("scroll-arrows").eq(1)
                      ),
                    })
                    .on(
                      getEventsNS(
                        {
                          mouseover: function (e) {
                            _.menuScrollOver(t, e);
                          },
                          mouseout: function (e) {
                            _.menuScrollOut(t, e);
                          },
                          "mousewheel DOMMouseScroll": function (e) {
                            _.menuScrollMousewheel(t, e);
                          },
                        },
                        M
                      )
                    )
                    .dataSM("scroll-arrows")
                    .css({
                      top: "auto",
                      left: "0",
                      marginLeft:
                        e + (parseInt(t.css("border-left-width")) || 0),
                      width:
                        a -
                        (parseInt(t.css("border-left-width")) || 0) -
                        (parseInt(t.css("border-right-width")) || 0),
                      zIndex: t.css("z-index"),
                    })
                    .eq(w && this.opts.bottomToTopSubMenus ? 0 : 1)
                    .show(),
                  this.isFixed())
                ) {
                  var C = {};
                  (C[
                    touchEvents
                      ? "touchstart touchmove touchend"
                      : "pointerdown pointermove pointerup MSPointerDown MSPointerMove MSPointerUp"
                  ] = function (e) {
                    _.menuScrollTouch(t, e);
                  }),
                    t
                      .css({
                        "touch-action": "none",
                        "-ms-touch-action": "none",
                      })
                      .on(getEventsNS(C, M));
                }
              }
            }
            t.css({ top: "auto", left: "0", marginLeft: e, marginTop: n - f });
          },
          menuScroll: function (t, e, n) {
            var i,
              o = t.dataSM("scroll"),
              s = t.dataSM("scroll-arrows"),
              r = o.up ? o.upEnd : o.downEnd;
            if (!e && o.momentum) {
              if (((o.momentum *= 0.92), 0.5 > (i = o.momentum)))
                return void this.menuScrollStop(t);
            } else
              i =
                n ||
                (e || !this.opts.scrollAccelerate
                  ? this.opts.scrollStep
                  : Math.floor(o.step));
            var a = t.dataSM("level");
            if (
              (this.activatedItems[a - 1] &&
                this.activatedItems[a - 1].dataSM("sub") &&
                this.activatedItems[a - 1].dataSM("sub").is(":visible") &&
                this.menuHideSubMenus(a - 1),
              (o.y =
                (o.up && o.y >= r) || (!o.up && r >= o.y)
                  ? o.y
                  : Math.abs(r - o.y) > i
                  ? o.y + (o.up ? i : -i)
                  : r),
              t.css(
                this.cssTransforms3d
                  ? {
                      "-webkit-transform": "translate3d(0, " + o.y + "px, 0)",
                      transform: "translate3d(0, " + o.y + "px, 0)",
                    }
                  : { marginTop: o.y }
              ),
              mouse &&
                ((o.up && o.y > o.downEnd) || (!o.up && o.y < o.upEnd)) &&
                s.eq(o.up ? 1 : 0).show(),
              o.y == r)
            )
              mouse && s.eq(o.up ? 0 : 1).hide(), this.menuScrollStop(t);
            else if (!e) {
              this.opts.scrollAccelerate &&
                o.step < this.opts.scrollStep &&
                (o.step += 0.2);
              var l = this;
              this.scrollTimeout = requestAnimationFrame(function () {
                l.menuScroll(t);
              });
            }
          },
          menuScrollMousewheel: function (t, e) {
            if (this.getClosestMenu(e.target) == t[0]) {
              var n = ((e = e.originalEvent).wheelDelta || -e.detail) > 0;
              t
                .dataSM("scroll-arrows")
                .eq(n ? 0 : 1)
                .is(":visible") &&
                ((t.dataSM("scroll").up = n), this.menuScroll(t, !0));
            }
            e.preventDefault();
          },
          menuScrollOut: function (t, e) {
            mouse &&
              (/^scroll-(up|down)/.test((e.relatedTarget || "").className) ||
                ((t[0] == e.relatedTarget ||
                  $.contains(t[0], e.relatedTarget)) &&
                  this.getClosestMenu(e.relatedTarget) == t[0]) ||
                t.dataSM("scroll-arrows").css("visibility", "hidden"));
          },
          menuScrollOver: function (t, e) {
            if (
              mouse &&
              !/^scroll-(up|down)/.test(e.target.className) &&
              this.getClosestMenu(e.target) == t[0]
            ) {
              this.menuScrollRefreshData(t);
              var n = t.dataSM("scroll"),
                i =
                  $(window).scrollTop() -
                  t.dataSM("parent-a").offset().top -
                  n.itemH;
              t.dataSM("scroll-arrows")
                .eq(0)
                .css("margin-top", i)
                .end()
                .eq(1)
                .css("margin-top", i + this.getViewportHeight() - n.arrowDownH)
                .end()
                .css("visibility", "visible");
            }
          },
          menuScrollRefreshData: function (t) {
            var e = t.dataSM("scroll"),
              n =
                $(window).scrollTop() -
                t.dataSM("parent-a").offset().top -
                e.itemH;
            this.cssTransforms3d &&
              (n = -(parseFloat(t.css("margin-top")) - n)),
              $.extend(e, {
                upEnd: n,
                downEnd: n + this.getViewportHeight() - e.subH,
              });
          },
          menuScrollStop: function (t) {
            return this.scrollTimeout
              ? (cancelAnimationFrame(this.scrollTimeout),
                (this.scrollTimeout = 0),
                (t.dataSM("scroll").step = 1),
                !0)
              : void 0;
          },
          menuScrollTouch: function (t, e) {
            if (isTouchEvent((e = e.originalEvent))) {
              var n = this.getTouchPoint(e);
              if (this.getClosestMenu(n.target) == t[0]) {
                var i = t.dataSM("scroll");
                if (/(start|down)$/i.test(e.type))
                  this.menuScrollStop(t)
                    ? (e.preventDefault(), (this.$touchScrollingSub = t))
                    : (this.$touchScrollingSub = null),
                    this.menuScrollRefreshData(t),
                    $.extend(i, {
                      touchStartY: n.pageY,
                      touchStartTime: e.timeStamp,
                    });
                else if (/move$/i.test(e.type)) {
                  var o = void 0 !== i.touchY ? i.touchY : i.touchStartY;
                  if (void 0 !== o && o != n.pageY) {
                    this.$touchScrollingSub = t;
                    var s = n.pageY > o;
                    void 0 !== i.up &&
                      i.up != s &&
                      $.extend(i, {
                        touchStartY: n.pageY,
                        touchStartTime: e.timeStamp,
                      }),
                      $.extend(i, { up: s, touchY: n.pageY }),
                      this.menuScroll(t, !0, Math.abs(n.pageY - o));
                  }
                  e.preventDefault();
                } else
                  void 0 !== i.touchY &&
                    ((i.momentum =
                      15 *
                      Math.pow(
                        Math.abs(n.pageY - i.touchStartY) /
                          (e.timeStamp - i.touchStartTime),
                        2
                      )) &&
                      (this.menuScrollStop(t),
                      this.menuScroll(t),
                      e.preventDefault()),
                    delete i.touchY);
              }
            }
          },
          menuShow: function (t) {
            if (
              (t.dataSM("beforefirstshowfired") ||
                (t.dataSM("beforefirstshowfired", !0),
                !1 !==
                  this.$root.triggerHandler("beforefirstshow.smapi", t[0]))) &&
              !1 !== this.$root.triggerHandler("beforeshow.smapi", t[0]) &&
              (t.dataSM("shown-before", !0),
              canAnimate && t.stop(!0, !0),
              !t.is(":visible"))
            ) {
              var e = t.dataSM("parent-a"),
                n = this.isCollapsible();
              if (
                ((this.opts.keepHighlighted || n) && e.addClass("highlighted"),
                n)
              )
                t.removeClass("sm-nowrap").css({
                  zIndex: "",
                  width: "auto",
                  minWidth: "",
                  maxWidth: "",
                  top: "",
                  left: "",
                  marginLeft: "",
                  marginTop: "",
                });
              else {
                if (
                  (t.css(
                    "z-index",
                    (this.zIndexInc =
                      (this.zIndexInc || this.getStartZIndex()) + 1)
                  ),
                  (this.opts.subMenusMinWidth || this.opts.subMenusMaxWidth) &&
                    (t
                      .css({ width: "auto", minWidth: "", maxWidth: "" })
                      .addClass("sm-nowrap"),
                    this.opts.subMenusMinWidth &&
                      t.css("min-width", this.opts.subMenusMinWidth),
                    this.opts.subMenusMaxWidth))
                ) {
                  var i = this.getWidth(t);
                  t.css("max-width", this.opts.subMenusMaxWidth),
                    i > this.getWidth(t) &&
                      t
                        .removeClass("sm-nowrap")
                        .css("width", this.opts.subMenusMaxWidth);
                }
                this.menuPosition(t);
              }
              var o = function () {
                t.css("overflow", "");
              };
              n
                ? canAnimate && this.opts.collapsibleShowFunction
                  ? this.opts.collapsibleShowFunction.call(this, t, o)
                  : t.show(this.opts.collapsibleShowDuration, o)
                : canAnimate && this.opts.showFunction
                ? this.opts.showFunction.call(this, t, o)
                : t.show(this.opts.showDuration, o),
                e.attr("aria-expanded", "true"),
                t.attr({ "aria-expanded": "true", "aria-hidden": "false" }),
                this.visibleSubMenus.push(t),
                this.$root.triggerHandler("show.smapi", t[0]);
            }
          },
          popupHide: function (t) {
            this.hideTimeout &&
              (clearTimeout(this.hideTimeout), (this.hideTimeout = 0));
            var e = this;
            this.hideTimeout = setTimeout(
              function () {
                e.menuHideAll();
              },
              t ? 1 : this.opts.hideTimeout
            );
          },
          popupShow: function (t, e) {
            if (this.opts.isPopup) {
              if (
                (this.hideTimeout &&
                  (clearTimeout(this.hideTimeout), (this.hideTimeout = 0)),
                this.$root.dataSM("shown-before", !0),
                canAnimate && this.$root.stop(!0, !0),
                !this.$root.is(":visible"))
              ) {
                this.$root.css({ left: t, top: e });
                var n = this,
                  i = function () {
                    n.$root.css("overflow", "");
                  };
                canAnimate && this.opts.showFunction
                  ? this.opts.showFunction.call(this, this.$root, i)
                  : this.$root.show(this.opts.showDuration, i),
                  (this.visibleSubMenus[0] = this.$root);
              }
            } else
              alert(
                'SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.'
              );
          },
          refresh: function () {
            this.destroy(!0), this.init(!0);
          },
          rootKeyDown: function (t) {
            if (this.handleEvents())
              switch (t.keyCode) {
                case 27:
                  var e = this.activatedItems[0];
                  if (e)
                    this.menuHideAll(),
                      e[0].focus(),
                      (n = e.dataSM("sub")) && this.menuHide(n);
                  break;
                case 32:
                  var n,
                    i = $(t.target);
                  if (i.is("a") && this.handleItemEvents(i))
                    (n = i.dataSM("sub")) &&
                      !n.is(":visible") &&
                      (this.itemClick({ currentTarget: t.target }),
                      t.preventDefault());
              }
          },
          rootOut: function (t) {
            if (
              this.handleEvents() &&
              !this.isTouchMode() &&
              t.target != this.$root[0] &&
              (this.hideTimeout &&
                (clearTimeout(this.hideTimeout), (this.hideTimeout = 0)),
              !this.opts.showOnClick || !this.opts.hideOnClick)
            ) {
              var e = this;
              this.hideTimeout = setTimeout(function () {
                e.menuHideAll();
              }, this.opts.hideTimeout);
            }
          },
          rootOver: function (t) {
            this.handleEvents() &&
              !this.isTouchMode() &&
              t.target != this.$root[0] &&
              this.hideTimeout &&
              (clearTimeout(this.hideTimeout), (this.hideTimeout = 0));
          },
          winResize: function (t) {
            if (this.handleEvents()) {
              if (
                !("onorientationchange" in window) ||
                "orientationchange" == t.type
              ) {
                var e = this.isCollapsible();
                (this.wasCollapsible && e) ||
                  (this.activatedItems.length &&
                    this.activatedItems[
                      this.activatedItems.length - 1
                    ][0].blur(),
                  this.menuHideAll()),
                  (this.wasCollapsible = e);
              }
            } else if (this.$disableOverlay) {
              var n = this.$root.offset();
              this.$disableOverlay.css({
                top: n.top,
                left: n.left,
                width: this.$root.outerWidth(),
                height: this.$root.outerHeight(),
              });
            }
          },
        },
      }),
      ($.fn.dataSM = function (t, e) {
        return e
          ? this.data(t + "_smartmenus", e)
          : this.data(t + "_smartmenus");
      }),
      ($.fn.removeDataSM = function (t) {
        return this.removeData(t + "_smartmenus");
      }),
      ($.fn.smartmenus = function (options) {
        if ("string" == typeof options) {
          var args = arguments,
            method = options;
          return (
            Array.prototype.shift.call(args),
            this.each(function () {
              var t = $(this).data("smartmenus");
              t && t[method] && t[method].apply(t, args);
            })
          );
        }
        return this.each(function () {
          var dataOpts = $(this).data("sm-options") || null;
          if (dataOpts && "object" != typeof dataOpts)
            try {
              dataOpts = eval("(" + dataOpts + ")");
            } catch (t) {
              (dataOpts = null),
                alert(
                  'ERROR\n\nSmartMenus jQuery init:\nInvalid "data-sm-options" attribute value syntax.'
                );
            }
          new $.SmartMenus(
            this,
            $.extend({}, $.fn.smartmenus.defaults, options, dataOpts)
          );
        });
      }),
      ($.fn.smartmenus.defaults = {
        isPopup: !1,
        mainMenuSubOffsetX: 0,
        mainMenuSubOffsetY: 0,
        subMenusSubOffsetX: 0,
        subMenusSubOffsetY: 0,
        subMenusMinWidth: "10em",
        subMenusMaxWidth: "20em",
        subIndicators: !0,
        subIndicatorsPos: "append",
        subIndicatorsText: "",
        scrollStep: 30,
        scrollAccelerate: !0,
        showTimeout: 250,
        hideTimeout: 500,
        showDuration: 0,
        showFunction: null,
        hideDuration: 0,
        hideFunction: function (t, e) {
          t.fadeOut(200, e);
        },
        collapsibleShowDuration: 0,
        collapsibleShowFunction: function (t, e) {
          t.slideDown(200, e);
        },
        collapsibleHideDuration: 0,
        collapsibleHideFunction: function (t, e) {
          t.slideUp(200, e);
        },
        showOnClick: !1,
        hideOnClick: !0,
        noMouseOver: !1,
        keepInViewport: !0,
        keepHighlighted: !0,
        markCurrentItem: !1,
        markCurrentTree: !0,
        rightToLeftSubMenus: !1,
        bottomToTopSubMenus: !1,
        collapsibleBehavior: "default",
      }),
      $
    );
  }),
  /*! SmartMenus jQuery Plugin Bootstrap Addon - v0.4.1 - July 23, 2020
   * http://www.smartmenus.org/
   * Copyright Vasil Dinkov, Vadikom Web Ltd. http://vadikom.com; Licensed MIT */
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "smartmenus"], t)
      : "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(function (t) {
    return (
      t.extend((t.SmartMenus.Bootstrap = {}), {
        keydownFix: !1,
        init: function () {
          var e = t("ul.navbar-nav:not([data-sm-skip])");
          e.each(function () {
            function e() {
              o.find("a.current").parent().addClass("active"),
                o.find("a.has-submenu").each(function () {
                  var e = t(this);
                  e.is('[data-toggle="dropdown"]') &&
                    e
                      .dataSM("bs-data-toggle-dropdown", !0)
                      .removeAttr("data-toggle"),
                    e.is('[role="button"]') &&
                      e.dataSM("bs-role-button", !0).removeAttr("role");
                });
            }
            function n(t) {
              var e = s.getViewportWidth();
              if (e != i || t) {
                var n = o.find(".caret");
                s.isCollapsible()
                  ? (o.addClass("sm-collapsible"),
                    o.is("[data-sm-skip-collapsible-behavior]") ||
                      n.addClass("navbar-toggle sub-arrow"))
                  : (o.removeClass("sm-collapsible"),
                    o.is("[data-sm-skip-collapsible-behavior]") ||
                      n.removeClass("navbar-toggle sub-arrow")),
                  (i = e);
              }
            }
            var i,
              o = t(this),
              s = o.data("smartmenus");
            s ||
              (o
                .smartmenus({
                  subMenusSubOffsetX: 2,
                  subMenusSubOffsetY: -6,
                  subIndicators: !1,
                  collapsibleShowFunction: null,
                  collapsibleHideFunction: null,
                  rightToLeftSubMenus: o.hasClass("navbar-right"),
                  bottomToTopSubMenus: o
                    .closest(".navbar")
                    .hasClass("navbar-fixed-bottom"),
                })
                .on({
                  "show.smapi": function (e, n) {
                    var i = t(n),
                      o = i.dataSM("scroll-arrows");
                    o &&
                      o.css(
                        "background-color",
                        t(document.body).css("background-color")
                      ),
                      i.parent().addClass("open");
                  },
                  "hide.smapi": function (e, n) {
                    t(n).parent().removeClass("open");
                  },
                }),
              e(),
              ((s = o.data("smartmenus")).isCollapsible = function () {
                return (
                  !/^(left|right)$/.test(
                    this.$firstLink.parent().css("float")
                  ) && "block" == this.$root.css("display")
                );
              }),
              (s.refresh = function () {
                t.SmartMenus.prototype.refresh.call(this), e(), n(!0);
              }),
              (s.destroy = function (e) {
                o.find("a.current").parent().removeClass("active"),
                  o.find("a.has-submenu").each(function () {
                    var e = t(this);
                    e.dataSM("bs-data-toggle-dropdown") &&
                      e
                        .attr("data-toggle", "dropdown")
                        .removeDataSM("bs-data-toggle-dropdown"),
                      e.dataSM("bs-role-button") &&
                        e.attr("role", "button").removeDataSM("bs-role-button");
                  }),
                  t.SmartMenus.prototype.destroy.call(this, e);
              }),
              o.is("[data-sm-skip-collapsible-behavior]") &&
                (s.opts.collapsibleBehavior = "toggle"),
              n(),
              t(window).on("resize.smartmenus" + s.rootId, n));
          }),
            e.length &&
              !t.SmartMenus.Bootstrap.keydownFix &&
              (t(document).off(
                "keydown.bs.dropdown.data-api",
                ".dropdown-menu"
              ),
              t.fn.dropdown &&
                t.fn.dropdown.Constructor &&
                t(document).on(
                  "keydown.bs.dropdown.data-api",
                  '.dropdown-menu:not([id^="sm-"])',
                  t.fn.dropdown.Constructor.prototype.keydown
                ),
              (t.SmartMenus.Bootstrap.keydownFix = !0));
        },
      }),
      t(t.SmartMenus.Bootstrap.init),
      t
    );
  }),
  (function () {
    "use strict";
    function t() {
      function t() {
        var t = {
          width: r.width / r.naturalWidth,
          height: r.height / r.naturalHeight,
        };
        s.forEach(function (e, n) {
          var i = 0;
          o[n].coords = e
            .split(",")
            .map(function (e) {
              var n = 1 == (i = 1 - i) ? "width" : "height";
              return Math.floor(Number(e) * t[n]);
            })
            .join(",");
        });
      }
      function e(t) {
        return t.coords.replace(/ *, */g, ",").replace(/ +/g, ",");
      }
      function n() {
        clearTimeout(a), (a = setTimeout(t, 250));
      }
      var i = this,
        o = null,
        s = null,
        r = null,
        a = null;
      "function" == typeof i._resize
        ? i._resize()
        : ((o = i.getElementsByTagName("area")),
          (s = Array.prototype.map.call(o, e)),
          (r = document.querySelector('img[usemap="#' + i.name + '"]')),
          (i._resize = t),
          r.addEventListener("load", t, !1),
          window.addEventListener("focus", t, !1),
          window.addEventListener("resize", n, !1),
          window.addEventListener("readystatechange", t, !1),
          document.addEventListener("fullscreenchange", t, !1),
          (r.width !== r.naturalWidth || r.height !== r.naturalHeight) && t());
    }
    function e() {
      function e(e) {
        e &&
          ((function (t) {
            if (!t.tagName)
              throw new TypeError("Object is not a valid DOM element");
            if ("MAP" !== t.tagName.toUpperCase())
              throw new TypeError(
                "Expected <MAP> tag, found <" + t.tagName + ">."
              );
          })(e),
          t.call(e),
          n.push(e));
      }
      var n;
      return function (t) {
        switch (((n = []), typeof t)) {
          case "undefined":
          case "string":
            Array.prototype.forEach.call(
              document.querySelectorAll(t || "map"),
              e
            );
            break;
          case "object":
            e(t);
            break;
          default:
            throw new TypeError("Unexpected data type (" + typeof t + ").");
        }
        return n;
      };
    }
    "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e())
      : (window.imageMapResize = e()),
      "jQuery" in window &&
        (jQuery.fn.imageMapResize = function () {
          return this.filter("map").each(t).end();
        });
  })(),
  $("form [maxlength]:not(.numbers-only,.masked,[readonly])").each(function () {
    if (!isNaN(parseInt($(this).prop("maxlength")))) {
      var t = $(this).parents(".count-container");
      0 === t.length && (t = $(this).parents(".form-group")),
        t.hasClass("with-count") ||
          (t.append(
            '<span class="character-count" style="display: none;" role="alert" aria-live="polite"><strong>0</strong> characters remaining</span>'
          ),
          t.addClass("with-count"));
    }
  }),
  $("form [maxlength]:not(.numbers-only,.masked,[readonly])")
    .focus(function () {
      TextCounter($(this)),
        $(this).parents(".with-count").find(".character-count").stop().fadeIn();
    })
    .blur(function () {
      $(this).parents(".with-count").find(".character-count").stop().fadeOut();
    })
    .bind("keydown keyup", function () {
      TextCounter($(this));
    })
    .bind("cut paste", function () {
      var t = $(this);
      setTimeout(function () {
        TextCounter(t);
      }, 100);
    }),
  $(document).ready(function () {
    ShouldShowOneTimeAlert() &&
      (showAlert(), $(".c-alert-one-time__btn").click(Acknowledge)),
      readCookie("NoviSession") || createCookie("NoviSession", generateUUID()),
      "show" == getUrlParameter("joinModal") && $("#join-modal").modal("show"),
      $(document).on("keydown", ".numbers-only", function (t) {
        var e = t.charCode || t.keyCode || 0,
          n = t.ctrlKey || t.metaKey;
        return (
          8 == e ||
          9 == e ||
          13 == e ||
          46 == e ||
          (e >= 37 && e <= 40) ||
          (e >= 48 && e <= 57) ||
          (e >= 96 && e <= 105) ||
          109 == e ||
          110 == e ||
          189 == e ||
          190 == e ||
          (n && (86 == e || 67 == e))
        );
      }),
      $.validator &&
        ($.validator.addMethod(
          "integer",
          function (t, e) {
            return this.optional(e) || /^-?\d+$/.test(t);
          },
          "Please enter a whole number."
        ),
        $.validator.unobtrusive.adapters.addBool("integer"),
        $("form").unbind("invalid-form.validate"),
        $("form").bind("invalid-form.validate", function (t, e) {
          e.numberOfInvalids() &&
            ($(e.errorList[0].element).is(":visible")
              ? e.errorList[0].element.focus()
              : $(e.errorList[0].element)
                  .parents(".form-group")
                  .find("input:visible,textarea:visible,select:visible")
                  .focus());
        })),
      $("#top-featured-carousel, #callouts, #partners").each((t, e) => {
        $(e).on("init afterChange", () => {
          setTimeout(() => {
            $(e).find(".slick-track").attr("role", "list"),
              $(e).find(".slick-slide").attr("role", "listitem");
          }, 100);
        });
      }),
      isAuthenticated &&
        allowMultipleAccounts &&
        PopulateLinkedCustomers(0, !0, profileViewModel),
      PopulateCartItemQuantity(),
      attendeeStartTimes &&
        attendeeStartTimes.length > 0 &&
        setInterval(function () {
          var t = attendeeStartTimes.filter(function (t, e) {
            return (
              new Date(t.StartingTime) > new Date() &&
              new Date(t.StartingTime) <
                new Date(Date.now() + 6e4 * t.JoinWindowMinutes)
            );
          });
          t.length > 0 &&
            (ShowEventStartingPopup(t[0]),
            $.ajax({
              url: attendeeEventStartingReadUrl,
              type: "POST",
              dataType: "json",
              data: { eventId: t[0].EventID },
              success: function (t) {
                "OK" == t.Status && (attendeeStartTimes = JSON.parse(t.Result));
              },
            }));
        }, 6e4);
  }),
  $("form input[name*='Email'][type=text]").on(
    "keyup blur change paste input",
    function () {
      this.value = this.value.replace(/\s/g, "");
    }
  );
var TogglePanelToggled = function (t, e) {};
function PopulateLinkedCustomers(t, e, n) {
  $.ajax({
    url: getLinkedCustomerAccountsUrl,
    type: "GET",
    dataType: "json",
    data: { customerID: t, currentUser: e },
    success: function (t) {
      "OK" == t.Status
        ? t.LinkedRecords.forEach((t) =>
            n.LinkedCustomers.push(new linkedRecordModel(t))
          )
        : ShowCustomAlert(t.Error);
    },
    error: function (t, e, n) {
      console.log("There was an issue while fetching linked accounts");
    },
  });
}
function UpdateCartItemQuantity(t) {
  isAuthenticated || sessionStorage.setItem("cartItemQuantity", t),
    profileViewModel.CartItemQuantity(t);
}
function PopulateCartItemQuantity() {
  if (isAuthenticated)
    profileViewModel.CartItemQuantity(cartItemQuantity),
      sessionStorage.removeItem("cartItemQuantity");
  else {
    var t = parseInt(sessionStorage.getItem("cartItemQuantity"), 10) || 0;
    profileViewModel.CartItemQuantity(t);
  }
}
$(document).on("click", ".toggle", function (t) {
  var e = $(t.target);
  e.is("[href]") || (e = e.closest("[href]"));
  var n = $(e.attr("href"));
  n.toggleClass("hide"),
    e.toggleClass("active"),
    e.data("overlay") &&
      (e.hasClass("active")
        ? ($('<div class="body-overlay"></div>').appendTo("body"),
          TogglePanelToggled(e, !0))
        : ($("body .body-overlay").remove(), TogglePanelToggled(e, !1))),
    $("body").click(function (t) {
      var i = $(t.target);
      i.is("[href]") || (i = i.closest("[href]")),
        i.is(e) ||
          i.parents("[data-dont-dismiss]").length > 0 ||
          (n.addClass("hide"),
          e.removeClass("active"),
          $("body .body-overlay").remove(),
          TogglePanelToggled(e, !1));
    }),
    n.find("a").click(function () {
      0 == $(this).parents("[data-dont-dismiss]").length &&
        (n.addClass("hide"),
        e.removeClass("active"),
        $("body .body-overlay").remove(),
        TogglePanelToggled(e, !1));
    }),
    n.click(function (t) {
      $(t.target).is("a") ||
        $(t.target).parent().is("a") ||
        t.stopPropagation();
    }),
    t.preventDefault();
});
var profileViewModel = {
  LinkedCustomers: ko.observableArray([]),
  CartItemQuantity: ko.observable(0),
};
profileViewModel.CartItemQuantityLabel = ko.computed(function () {
  return profileViewModel.CartItemQuantity() > 1 ? "Items" : "Item";
});
var linkedRecordModel = function (t) {
  $.extend(this, t),
    (this.Default = ko.observable(t.Default)),
    (this.SwitchCustomerRecord = function () {
      if (this.Default()) return !1;
      $.ajax({
        url: switchCustomerRecordUrl,
        type: "POST",
        dataType: "json",
        data: { customerID: this.ID },
        success: function (t) {
          "OK" == t.Status
            ? window.location.reload()
            : ShowCustomAlert(t.Error);
        },
      });
    });
};
function redirectToMemberCompass() {
  window.location.href = "/member-compass";
}
function applyBindingsSafely(t, e) {
  var n = document.getElementById(e);
  n && !ko.dataFor(n) && ko.applyBindings(t, n);
}
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
    var e = (16 * Math.random()) | 0;
    return ("x" == t ? e : (3 & e) | 8).toString(16);
  });
}
function listToSentence(t, e = "and", n = !0) {
  if (!t || 0 === t.length) return "";
  const i = t.length;
  if (1 === i) return t[0];
  const o = t.slice(0, i - 1).join(", "),
    s = t[i - 1];
  return n && i > 2 ? `${o}, ${e} ${s}` : `${o} ${e} ${s}`;
}
function ShowConfirmationModal(t, e, n, i, o, s, r, a, l) {
  var u = "info" == (l = l || "warning") ? "icon guidance" : "icon",
    c = "info" == l ? "fa-solid fa-info" : "novicon novicon-exclamation",
    d = "confirm-modal" + o,
    h = parent.$("#" + d);
  0 === h.length &&
    (parent
      .$("body")
      .append(
        '<div class="modal fade no-header alert-modal" id="' +
          d +
          '" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog" style="' +
          l +
          '"><div class="modal-content"><div class="modal-body"></div></div></div></div>'
      ),
    (h = parent.$("#" + d))),
    parent.$(".modal:visible").length > 0 &&
      h.css("z-index", parseInt(parent.$(".modal:visible").css("z-index")) + 2);
  var f = h.find(".modal-body");
  if (
    ((s && 0 != s.length) || (s = "Yes"), (r && 0 != r.length) || (r = "No"), n)
  ) {
    var p = [
        '<div class="message-container">',
        `   <span class="${u}"><span class="${c}" role="img" aria-label="warning"></span></span>`,
        '   <div class="message" style="padding-bottom: 5px;">',
        "       <p>",
        t,
        "       </p>       <p>",
        "           <em>",
        !0 === i ? n : "",
        "</em>",
        "       </p>",
        "   </div>",
        '   <div class="form-group">',
        '       <textarea class="form-control" id="confirm-text"></textarea>',
        "   </div>",
        "</div>",
      ].join(""),
      m = [
        '<div class="buttons clearfix">',
        '   <a href="javascript:void(0);" class="btn btn-default" data-dismiss="modal" id="do-dismissed-action">' +
          r +
          "</a>",
        '   <a href="javascript:void(0);" class="btn btn-primary" id="do-confirmed-action">' +
          s +
          "</a>",
        "</div>",
      ].join("");
    f.html(p), f.append(m);
  } else
    f.html(
      `<div class="message-container"><span class="${u}"><span class="${c}"></span></span><div class="message one-line">${t}</div></div>`
    ),
      f.append(
        '<div class="buttons clearfix"><a href="javascript:void(0);" class="btn btn-default" data-dismiss="modal" id="do-dismissed-action">' +
          r +
          '</a><a href="javascript:void(0);" class="btn btn-primary" data-dismiss="modal" id="do-confirmed-action">' +
          s +
          "</a></div>"
      );
  return (
    h.modal({ backdrop: "static", keyboard: !1 }),
    n &&
      ($(f).find("#do-confirmed-action").attr("disabled", !0),
      $(f)
        .find("#confirm-text")
        .on("keyup", function (t) {
          $(t.target)[0].value.trim().toLowerCase() === n.toLowerCase()
            ? $(f).find("#do-confirmed-action").attr("disabled", !1)
            : $(f).find("#do-confirmed-action").attr("disabled", !0);
        })),
    $(f)
      .find("#do-confirmed-action")
      .click(function (t) {
        n
          ? $(f).find("#confirm-text")[0].value.trim().toLowerCase() ===
              n.toLowerCase() &&
            e &&
            (h.modal("hide"), e())
          : e && (h.modal("hide"), e());
      }),
    $(f)
      .find("#do-dismissed-action")
      .click(function (t) {
        a && (h.modal("hide"), a());
      }),
    h.modal(),
    parent.$(".modal:visible").length > 0 &&
      (h.css(
        "z-index",
        parseInt(parent.$(".modal:visible").css("z-index")) + 2
      ),
      parent
        .$(".modal-backdrop:last")
        .css(
          "z-index",
          parseInt(parent.$(".modal:visible").css("z-index")) + 1
        )),
    !1
  );
}
function ShowCustomAlertWithReturnTargetFocus(t, e) {
  ShowCustomAlert(t, function () {
    $($(e)).focus();
  });
}
function ShowCustomAlert(t, e, n, i, o) {
  if (parent.jQuery) {
    var s = "custom-alert",
      r = parent.$("#" + s);
    0 == r.length &&
      (parent
        .$("body")
        .append(
          '<div class="modal fade no-header alert-modal" id="' +
            s +
            '" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"></div></div></div></div>'
        ),
      (r = parent.$("#" + s)));
    var a = parent.$(".modal:visible").length > 0,
      l = 0;
    a &&
      ((l = parseInt(parent.$(".modal:visible").css("z-index"))),
      r.css("z-index", l + 2)),
      (i = i || "novicon novicon-exclamation"),
      (void 0 !== o && null != o) || (o = "");
    var u = r.find(".modal-body");
    return (
      u.html(
        '<div class="message-container"><span class="icon ' +
          o +
          '"><span class="' +
          i +
          '" role="img" aria-label="warning"></span></span><div class="message">' +
          t +
          "</div></div>"
      ),
      u.append(
        '<div class="buttons clearfix"><a href="javascript:void(0);" class="btn btn-default" data-dismiss="modal">OK</a></div>'
      ),
      n && u.find(".buttons").prepend(n),
      r.on("hidden.bs.modal", function (t) {
        "function" == typeof e && e();
      }),
      r.modal({ backdrop: "static", keyboard: !1 }),
      a && parent.$(".modal-backdrop:last").css("z-index", l + 1),
      !1
    );
  }
}
function ShowRenameModal(t, e) {
  var n = "confirm-modal",
    i = parent.$("#" + n);
  0 === i.length &&
    (parent
      .$("body")
      .append(
        '<div class="modal fade no-header alert-modal" id="' +
          n +
          '" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"></div></div></div></div>'
      ),
    (i = parent.$("#" + n))),
    parent.$(".modal:visible").length > 0 &&
      i.css("z-index", parseInt(parent.$(".modal:visible").css("z-index")) + 2);
  var o = i.find(".modal-body"),
    s = [
      '<div class="message-container">',
      '   <span class="icon"><span class="novicon novicon-exclamation" role="img" aria-label="warning"></span></span>',
      '   <div class="message" style="padding-bottom: 5px;">',
      '       <p style="margin-top: 8px;">',
      `Rename ${t}`,
      "       </p>       <p>",
      "           <em>",
      "",
      "</em>",
      "       </p>",
      "   </div>",
      "   <div>",
      `       <span style="display: inline-flex; align-items: center; margin-top: 15px;">\n                    <input type="text" class="form-control" id="confirm-text" style="display: inline-block; width: 275px;" maxlength="250" />\n                    .${t
        .split(".")
        .pop()}\n                </span>`,
      '       <span style="margin-top: 10px;" class="text-danger error-message"></span>',
      "   </div>",
      "</div>",
    ].join(""),
    r = [
      '<div class="buttons clearfix">',
      '   <a href="javascript:void(0);" class="btn btn-default" data-dismiss="modal" id="do-dismissed-action">Cancel</a>',
      '   <a href="javascript:void(0);" class="btn btn-primary" id="do-confirmed-action">Rename</a>',
      "</div>",
    ].join("");
  return (
    o.html(s),
    o.append(r),
    i.modal({ backdrop: "static", keyboard: !1 }),
    $(o)
      .find("#do-confirmed-action")
      .click(function (t) {
        var n;
        if (
          ($(".error-message").text(""),
          (n = $(o).find("#confirm-text")[0].value).length)
        ) {
          /[<>:"/\\|?*\0]|^\s|\s$|\.$/.test(n)
            ? $(".error-message").html(
                "<br /> <br />File name contains invalid characters."
              )
            : (i.modal("hide"), e(n));
        } else $(".error-message").html("<br /> <br />You must enter a new file name.");
      }),
    i.modal(),
    parent.$(".modal:visible").length > 0 &&
      (i.css(
        "z-index",
        parseInt(parent.$(".modal:visible").css("z-index")) + 2
      ),
      parent
        .$(".modal-backdrop:last")
        .css(
          "z-index",
          parseInt(parent.$(".modal:visible").css("z-index")) + 1
        )),
    !1
  );
}
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
applyBindingsSafely(profileViewModel, "profile-actions"),
  applyBindingsSafely(profileViewModel, "profile-actions-mobile"),
  applyBindingsSafely(profileViewModel, "nav-shopping-cart"),
  applyBindingsSafely(profileViewModel, "cart-items-link"),
  applyBindingsSafely(profileViewModel, "cart-items-link-mobile"),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : (t.moment = e());
  })(this, function () {
    "use strict";
    var t, e;
    function n() {
      return t.apply(null, arguments);
    }
    function i(t) {
      return (
        t instanceof Array ||
        "[object Array]" === Object.prototype.toString.call(t)
      );
    }
    function o(t) {
      return (
        null != t && "[object Object]" === Object.prototype.toString.call(t)
      );
    }
    function s(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    function r(t) {
      if (Object.getOwnPropertyNames)
        return 0 === Object.getOwnPropertyNames(t).length;
      var e;
      for (e in t) if (s(t, e)) return !1;
      return !0;
    }
    function a(t) {
      return void 0 === t;
    }
    function l(t) {
      return (
        "number" == typeof t ||
        "[object Number]" === Object.prototype.toString.call(t)
      );
    }
    function u(t) {
      return (
        t instanceof Date ||
        "[object Date]" === Object.prototype.toString.call(t)
      );
    }
    function c(t, e) {
      var n,
        i = [],
        o = t.length;
      for (n = 0; n < o; ++n) i.push(e(t[n], n));
      return i;
    }
    function d(t, e) {
      for (var n in e) s(e, n) && (t[n] = e[n]);
      return (
        s(e, "toString") && (t.toString = e.toString),
        s(e, "valueOf") && (t.valueOf = e.valueOf),
        t
      );
    }
    function h(t, e, n, i) {
      return Te(t, e, n, i, !0).utc();
    }
    function f(t) {
      return (
        null == t._pf &&
          (t._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1,
          }),
        t._pf
      );
    }
    function p(t) {
      var n = null,
        i = !1,
        o = t._d && !isNaN(t._d.getTime());
      return (
        o &&
          ((n = f(t)),
          (i = e.call(n.parsedDateParts, function (t) {
            return null != t;
          })),
          (o =
            n.overflow < 0 &&
            !n.empty &&
            !n.invalidEra &&
            !n.invalidMonth &&
            !n.invalidWeekday &&
            !n.weekdayMismatch &&
            !n.nullInput &&
            !n.invalidFormat &&
            !n.userInvalidated &&
            (!n.meridiem || (n.meridiem && i))),
          t._strict &&
            (o =
              o &&
              0 === n.charsLeftOver &&
              0 === n.unusedTokens.length &&
              void 0 === n.bigHour)),
        null != Object.isFrozen && Object.isFrozen(t)
          ? o
          : ((t._isValid = o), t._isValid)
      );
    }
    function m(t) {
      var e = h(NaN);
      return null != t ? d(f(e), t) : (f(e).userInvalidated = !0), e;
    }
    e = Array.prototype.some
      ? Array.prototype.some
      : function (t) {
          var e,
            n = Object(this),
            i = n.length >>> 0;
          for (e = 0; e < i; e++)
            if (e in n && t.call(this, n[e], e, n)) return !0;
          return !1;
        };
    var g = (n.momentProperties = []),
      v = !1;
    function y(t, e) {
      var n,
        i,
        o,
        s = g.length;
      if (
        (a(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject),
        a(e._i) || (t._i = e._i),
        a(e._f) || (t._f = e._f),
        a(e._l) || (t._l = e._l),
        a(e._strict) || (t._strict = e._strict),
        a(e._tzm) || (t._tzm = e._tzm),
        a(e._isUTC) || (t._isUTC = e._isUTC),
        a(e._offset) || (t._offset = e._offset),
        a(e._pf) || (t._pf = f(e)),
        a(e._locale) || (t._locale = e._locale),
        s > 0)
      )
        for (n = 0; n < s; n++) a((o = e[(i = g[n])])) || (t[i] = o);
      return t;
    }
    function w(t) {
      y(this, t),
        (this._d = new Date(null != t._d ? t._d.getTime() : NaN)),
        this.isValid() || (this._d = new Date(NaN)),
        !1 === v && ((v = !0), n.updateOffset(this), (v = !1));
    }
    function b(t) {
      return t instanceof w || (null != t && null != t._isAMomentObject);
    }
    function x(t) {
      !1 === n.suppressDeprecationWarnings &&
        "undefined" != typeof console &&
        console.warn &&
        console.warn("Deprecation warning: " + t);
    }
    function S(t, e) {
      var i = !0;
      return d(function () {
        if (
          (null != n.deprecationHandler && n.deprecationHandler(null, t), i)
        ) {
          var o,
            r,
            a,
            l = [],
            u = arguments.length;
          for (r = 0; r < u; r++) {
            if (((o = ""), "object" == typeof arguments[r])) {
              for (a in ((o += "\n[" + r + "] "), arguments[0]))
                s(arguments[0], a) && (o += a + ": " + arguments[0][a] + ", ");
              o = o.slice(0, -2);
            } else o = arguments[r];
            l.push(o);
          }
          x(
            t +
              "\nArguments: " +
              Array.prototype.slice.call(l).join("") +
              "\n" +
              new Error().stack
          ),
            (i = !1);
        }
        return e.apply(this, arguments);
      }, e);
    }
    var T,
      k = {};
    function _(t, e) {
      null != n.deprecationHandler && n.deprecationHandler(t, e),
        k[t] || (x(e), (k[t] = !0));
    }
    function M(t) {
      return (
        ("undefined" != typeof Function && t instanceof Function) ||
        "[object Function]" === Object.prototype.toString.call(t)
      );
    }
    function $(t, e) {
      var n,
        i = d({}, t);
      for (n in e)
        s(e, n) &&
          (o(t[n]) && o(e[n])
            ? ((i[n] = {}), d(i[n], t[n]), d(i[n], e[n]))
            : null != e[n]
            ? (i[n] = e[n])
            : delete i[n]);
      for (n in t) s(t, n) && !s(e, n) && o(t[n]) && (i[n] = d({}, i[n]));
      return i;
    }
    function C(t) {
      null != t && this.set(t);
    }
    (n.suppressDeprecationWarnings = !1),
      (n.deprecationHandler = null),
      (T = Object.keys
        ? Object.keys
        : function (t) {
            var e,
              n = [];
            for (e in t) s(t, e) && n.push(e);
            return n;
          });
    function D(t, e, n) {
      var i = "" + Math.abs(t),
        o = e - i.length;
      return (
        (t >= 0 ? (n ? "+" : "") : "-") +
        Math.pow(10, Math.max(0, o)).toString().substr(1) +
        i
      );
    }
    var E =
        /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      O = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      N = {},
      A = {};
    function Y(t, e, n, i) {
      var o = i;
      "string" == typeof i &&
        (o = function () {
          return this[i]();
        }),
        t && (A[t] = o),
        e &&
          (A[e[0]] = function () {
            return D(o.apply(this, arguments), e[1], e[2]);
          }),
        n &&
          (A[n] = function () {
            return this.localeData().ordinal(o.apply(this, arguments), t);
          });
    }
    function j(t, e) {
      return t.isValid()
        ? ((e = H(e, t.localeData())),
          (N[e] =
            N[e] ||
            (function (t) {
              var e,
                n,
                i,
                o = t.match(E);
              for (e = 0, n = o.length; e < n; e++)
                A[o[e]]
                  ? (o[e] = A[o[e]])
                  : (o[e] = (i = o[e]).match(/\[[\s\S]/)
                      ? i.replace(/^\[|\]$/g, "")
                      : i.replace(/\\/g, ""));
              return function (e) {
                var i,
                  s = "";
                for (i = 0; i < n; i++) s += M(o[i]) ? o[i].call(e, t) : o[i];
                return s;
              };
            })(e)),
          N[e](t))
        : t.localeData().invalidDate();
    }
    function H(t, e) {
      var n = 5;
      function i(t) {
        return e.longDateFormat(t) || t;
      }
      for (O.lastIndex = 0; n >= 0 && O.test(t); )
        (t = t.replace(O, i)), (O.lastIndex = 0), (n -= 1);
      return t;
    }
    var I = {
      D: "date",
      dates: "date",
      date: "date",
      d: "day",
      days: "day",
      day: "day",
      e: "weekday",
      weekdays: "weekday",
      weekday: "weekday",
      E: "isoWeekday",
      isoweekdays: "isoWeekday",
      isoweekday: "isoWeekday",
      DDD: "dayOfYear",
      dayofyears: "dayOfYear",
      dayofyear: "dayOfYear",
      h: "hour",
      hours: "hour",
      hour: "hour",
      ms: "millisecond",
      milliseconds: "millisecond",
      millisecond: "millisecond",
      m: "minute",
      minutes: "minute",
      minute: "minute",
      M: "month",
      months: "month",
      month: "month",
      Q: "quarter",
      quarters: "quarter",
      quarter: "quarter",
      s: "second",
      seconds: "second",
      second: "second",
      gg: "weekYear",
      weekyears: "weekYear",
      weekyear: "weekYear",
      GG: "isoWeekYear",
      isoweekyears: "isoWeekYear",
      isoweekyear: "isoWeekYear",
      w: "week",
      weeks: "week",
      week: "week",
      W: "isoWeek",
      isoweeks: "isoWeek",
      isoweek: "isoWeek",
      y: "year",
      years: "year",
      year: "year",
    };
    function P(t) {
      return "string" == typeof t ? I[t] || I[t.toLowerCase()] : void 0;
    }
    function L(t) {
      var e,
        n,
        i = {};
      for (n in t) s(t, n) && (e = P(n)) && (i[e] = t[n]);
      return i;
    }
    var W = {
      date: 9,
      day: 11,
      weekday: 11,
      isoWeekday: 11,
      dayOfYear: 4,
      hour: 13,
      millisecond: 16,
      minute: 14,
      month: 8,
      quarter: 7,
      second: 15,
      weekYear: 1,
      isoWeekYear: 1,
      week: 5,
      isoWeek: 5,
      year: 1,
    };
    var F,
      R = /\d/,
      q = /\d\d/,
      U = /\d{3}/,
      V = /\d{4}/,
      z = /[+-]?\d{6}/,
      B = /\d\d?/,
      G = /\d\d\d\d?/,
      Q = /\d\d\d\d\d\d?/,
      Z = /\d{1,3}/,
      X = /\d{1,4}/,
      J = /[+-]?\d{1,6}/,
      K = /\d+/,
      tt = /[+-]?\d+/,
      et = /Z|[+-]\d\d:?\d\d/gi,
      nt = /Z|[+-]\d\d(?::?\d\d)?/gi,
      it =
        /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
      ot = /^[1-9]\d?/,
      st = /^([1-9]\d|\d)/;
    function rt(t, e, n) {
      F[t] = M(e)
        ? e
        : function (t, i) {
            return t && n ? n : e;
          };
    }
    function at(t, e) {
      return s(F, t)
        ? F[t](e._strict, e._locale)
        : new RegExp(
            lt(
              t
                .replace("\\", "")
                .replace(
                  /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                  function (t, e, n, i, o) {
                    return e || n || i || o;
                  }
                )
            )
          );
    }
    function lt(t) {
      return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function ut(t) {
      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
    }
    function ct(t) {
      var e = +t,
        n = 0;
      return 0 !== e && isFinite(e) && (n = ut(e)), n;
    }
    F = {};
    var dt = {};
    function ht(t, e) {
      var n,
        i,
        o = e;
      for (
        "string" == typeof t && (t = [t]),
          l(e) &&
            (o = function (t, n) {
              n[e] = ct(t);
            }),
          i = t.length,
          n = 0;
        n < i;
        n++
      )
        dt[t[n]] = o;
    }
    function ft(t, e) {
      ht(t, function (t, n, i, o) {
        (i._w = i._w || {}), e(t, i._w, i, o);
      });
    }
    function pt(t, e, n) {
      null != e && s(dt, t) && dt[t](e, n._a, n, t);
    }
    function mt(t) {
      return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0;
    }
    function gt(t) {
      return mt(t) ? 366 : 365;
    }
    Y("Y", 0, 0, function () {
      var t = this.year();
      return t <= 9999 ? D(t, 4) : "+" + t;
    }),
      Y(0, ["YY", 2], 0, function () {
        return this.year() % 100;
      }),
      Y(0, ["YYYY", 4], 0, "year"),
      Y(0, ["YYYYY", 5], 0, "year"),
      Y(0, ["YYYYYY", 6, !0], 0, "year"),
      rt("Y", tt),
      rt("YY", B, q),
      rt("YYYY", X, V),
      rt("YYYYY", J, z),
      rt("YYYYYY", J, z),
      ht(["YYYYY", "YYYYYY"], 0),
      ht("YYYY", function (t, e) {
        e[0] = 2 === t.length ? n.parseTwoDigitYear(t) : ct(t);
      }),
      ht("YY", function (t, e) {
        e[0] = n.parseTwoDigitYear(t);
      }),
      ht("Y", function (t, e) {
        e[0] = parseInt(t, 10);
      }),
      (n.parseTwoDigitYear = function (t) {
        return ct(t) + (ct(t) > 68 ? 1900 : 2e3);
      });
    var vt,
      yt = wt("FullYear", !0);
    function wt(t, e) {
      return function (i) {
        return null != i
          ? (xt(this, t, i), n.updateOffset(this, e), this)
          : bt(this, t);
      };
    }
    function bt(t, e) {
      if (!t.isValid()) return NaN;
      var n = t._d,
        i = t._isUTC;
      switch (e) {
        case "Milliseconds":
          return i ? n.getUTCMilliseconds() : n.getMilliseconds();
        case "Seconds":
          return i ? n.getUTCSeconds() : n.getSeconds();
        case "Minutes":
          return i ? n.getUTCMinutes() : n.getMinutes();
        case "Hours":
          return i ? n.getUTCHours() : n.getHours();
        case "Date":
          return i ? n.getUTCDate() : n.getDate();
        case "Day":
          return i ? n.getUTCDay() : n.getDay();
        case "Month":
          return i ? n.getUTCMonth() : n.getMonth();
        case "FullYear":
          return i ? n.getUTCFullYear() : n.getFullYear();
        default:
          return NaN;
      }
    }
    function xt(t, e, n) {
      var i, o, s, r, a;
      if (t.isValid() && !isNaN(n)) {
        switch (((i = t._d), (o = t._isUTC), e)) {
          case "Milliseconds":
            return void (o ? i.setUTCMilliseconds(n) : i.setMilliseconds(n));
          case "Seconds":
            return void (o ? i.setUTCSeconds(n) : i.setSeconds(n));
          case "Minutes":
            return void (o ? i.setUTCMinutes(n) : i.setMinutes(n));
          case "Hours":
            return void (o ? i.setUTCHours(n) : i.setHours(n));
          case "Date":
            return void (o ? i.setUTCDate(n) : i.setDate(n));
          case "FullYear":
            break;
          default:
            return;
        }
        (s = n),
          (r = t.month()),
          (a = 29 !== (a = t.date()) || 1 !== r || mt(s) ? a : 28),
          o ? i.setUTCFullYear(s, r, a) : i.setFullYear(s, r, a);
      }
    }
    function St(t, e) {
      if (isNaN(t) || isNaN(e)) return NaN;
      var n,
        i = ((e % (n = 12)) + n) % n;
      return (
        (t += (e - i) / 12), 1 === i ? (mt(t) ? 29 : 28) : 31 - ((i % 7) % 2)
      );
    }
    (vt = Array.prototype.indexOf
      ? Array.prototype.indexOf
      : function (t) {
          var e;
          for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
          return -1;
        }),
      Y("M", ["MM", 2], "Mo", function () {
        return this.month() + 1;
      }),
      Y("MMM", 0, 0, function (t) {
        return this.localeData().monthsShort(this, t);
      }),
      Y("MMMM", 0, 0, function (t) {
        return this.localeData().months(this, t);
      }),
      rt("M", B, ot),
      rt("MM", B, q),
      rt("MMM", function (t, e) {
        return e.monthsShortRegex(t);
      }),
      rt("MMMM", function (t, e) {
        return e.monthsRegex(t);
      }),
      ht(["M", "MM"], function (t, e) {
        e[1] = ct(t) - 1;
      }),
      ht(["MMM", "MMMM"], function (t, e, n, i) {
        var o = n._locale.monthsParse(t, i, n._strict);
        null != o ? (e[1] = o) : (f(n).invalidMonth = t);
      });
    var Tt =
        "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_"
        ),
      kt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      _t = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      Mt = it,
      $t = it;
    function Ct(t, e, n) {
      var i,
        o,
        s,
        r = t.toLocaleLowerCase();
      if (!this._monthsParse)
        for (
          this._monthsParse = [],
            this._longMonthsParse = [],
            this._shortMonthsParse = [],
            i = 0;
          i < 12;
          ++i
        )
          (s = h([2e3, i])),
            (this._shortMonthsParse[i] = this.monthsShort(
              s,
              ""
            ).toLocaleLowerCase()),
            (this._longMonthsParse[i] = this.months(s, "").toLocaleLowerCase());
      return n
        ? "MMM" === e
          ? -1 !== (o = vt.call(this._shortMonthsParse, r))
            ? o
            : null
          : -1 !== (o = vt.call(this._longMonthsParse, r))
          ? o
          : null
        : "MMM" === e
        ? -1 !== (o = vt.call(this._shortMonthsParse, r)) ||
          -1 !== (o = vt.call(this._longMonthsParse, r))
          ? o
          : null
        : -1 !== (o = vt.call(this._longMonthsParse, r)) ||
          -1 !== (o = vt.call(this._shortMonthsParse, r))
        ? o
        : null;
    }
    function Dt(t, e) {
      if (!t.isValid()) return t;
      if ("string" == typeof e)
        if (/^\d+$/.test(e)) e = ct(e);
        else if (!l((e = t.localeData().monthsParse(e)))) return t;
      var n = e,
        i = t.date();
      return (
        (i = i < 29 ? i : Math.min(i, St(t.year(), n))),
        t._isUTC ? t._d.setUTCMonth(n, i) : t._d.setMonth(n, i),
        t
      );
    }
    function Et(t) {
      return null != t
        ? (Dt(this, t), n.updateOffset(this, !0), this)
        : bt(this, "Month");
    }
    function Ot() {
      function t(t, e) {
        return e.length - t.length;
      }
      var e,
        n,
        i,
        o,
        s = [],
        r = [],
        a = [];
      for (e = 0; e < 12; e++)
        (n = h([2e3, e])),
          (i = lt(this.monthsShort(n, ""))),
          (o = lt(this.months(n, ""))),
          s.push(i),
          r.push(o),
          a.push(o),
          a.push(i);
      s.sort(t),
        r.sort(t),
        a.sort(t),
        (this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i")),
        (this._monthsShortRegex = this._monthsRegex),
        (this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")),
        (this._monthsShortStrictRegex = new RegExp(
          "^(" + s.join("|") + ")",
          "i"
        ));
    }
    function Nt(t, e, n, i, o, s, r) {
      var a;
      return (
        t < 100 && t >= 0
          ? ((a = new Date(t + 400, e, n, i, o, s, r)),
            isFinite(a.getFullYear()) && a.setFullYear(t))
          : (a = new Date(t, e, n, i, o, s, r)),
        a
      );
    }
    function At(t) {
      var e, n;
      return (
        t < 100 && t >= 0
          ? (((n = Array.prototype.slice.call(arguments))[0] = t + 400),
            (e = new Date(Date.UTC.apply(null, n))),
            isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t))
          : (e = new Date(Date.UTC.apply(null, arguments))),
        e
      );
    }
    function Yt(t, e, n) {
      var i = 7 + e - n;
      return -((7 + At(t, 0, i).getUTCDay() - e) % 7) + i - 1;
    }
    function jt(t, e, n, i, o) {
      var s,
        r,
        a = 1 + 7 * (e - 1) + ((7 + n - i) % 7) + Yt(t, i, o);
      return (
        a <= 0
          ? (r = gt((s = t - 1)) + a)
          : a > gt(t)
          ? ((s = t + 1), (r = a - gt(t)))
          : ((s = t), (r = a)),
        { year: s, dayOfYear: r }
      );
    }
    function Ht(t, e, n) {
      var i,
        o,
        s = Yt(t.year(), e, n),
        r = Math.floor((t.dayOfYear() - s - 1) / 7) + 1;
      return (
        r < 1
          ? (i = r + It((o = t.year() - 1), e, n))
          : r > It(t.year(), e, n)
          ? ((i = r - It(t.year(), e, n)), (o = t.year() + 1))
          : ((o = t.year()), (i = r)),
        { week: i, year: o }
      );
    }
    function It(t, e, n) {
      var i = Yt(t, e, n),
        o = Yt(t + 1, e, n);
      return (gt(t) - i + o) / 7;
    }
    Y("w", ["ww", 2], "wo", "week"),
      Y("W", ["WW", 2], "Wo", "isoWeek"),
      rt("w", B, ot),
      rt("ww", B, q),
      rt("W", B, ot),
      rt("WW", B, q),
      ft(["w", "ww", "W", "WW"], function (t, e, n, i) {
        e[i.substr(0, 1)] = ct(t);
      });
    function Pt(t, e) {
      return t.slice(e, 7).concat(t.slice(0, e));
    }
    Y("d", 0, "do", "day"),
      Y("dd", 0, 0, function (t) {
        return this.localeData().weekdaysMin(this, t);
      }),
      Y("ddd", 0, 0, function (t) {
        return this.localeData().weekdaysShort(this, t);
      }),
      Y("dddd", 0, 0, function (t) {
        return this.localeData().weekdays(this, t);
      }),
      Y("e", 0, 0, "weekday"),
      Y("E", 0, 0, "isoWeekday"),
      rt("d", B),
      rt("e", B),
      rt("E", B),
      rt("dd", function (t, e) {
        return e.weekdaysMinRegex(t);
      }),
      rt("ddd", function (t, e) {
        return e.weekdaysShortRegex(t);
      }),
      rt("dddd", function (t, e) {
        return e.weekdaysRegex(t);
      }),
      ft(["dd", "ddd", "dddd"], function (t, e, n, i) {
        var o = n._locale.weekdaysParse(t, i, n._strict);
        null != o ? (e.d = o) : (f(n).invalidWeekday = t);
      }),
      ft(["d", "e", "E"], function (t, e, n, i) {
        e[i] = ct(t);
      });
    var Lt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
        "_"
      ),
      Wt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      Ft = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      Rt = it,
      qt = it,
      Ut = it;
    function Vt(t, e, n) {
      var i,
        o,
        s,
        r = t.toLocaleLowerCase();
      if (!this._weekdaysParse)
        for (
          this._weekdaysParse = [],
            this._shortWeekdaysParse = [],
            this._minWeekdaysParse = [],
            i = 0;
          i < 7;
          ++i
        )
          (s = h([2e3, 1]).day(i)),
            (this._minWeekdaysParse[i] = this.weekdaysMin(
              s,
              ""
            ).toLocaleLowerCase()),
            (this._shortWeekdaysParse[i] = this.weekdaysShort(
              s,
              ""
            ).toLocaleLowerCase()),
            (this._weekdaysParse[i] = this.weekdays(s, "").toLocaleLowerCase());
      return n
        ? "dddd" === e
          ? -1 !== (o = vt.call(this._weekdaysParse, r))
            ? o
            : null
          : "ddd" === e
          ? -1 !== (o = vt.call(this._shortWeekdaysParse, r))
            ? o
            : null
          : -1 !== (o = vt.call(this._minWeekdaysParse, r))
          ? o
          : null
        : "dddd" === e
        ? -1 !== (o = vt.call(this._weekdaysParse, r)) ||
          -1 !== (o = vt.call(this._shortWeekdaysParse, r)) ||
          -1 !== (o = vt.call(this._minWeekdaysParse, r))
          ? o
          : null
        : "ddd" === e
        ? -1 !== (o = vt.call(this._shortWeekdaysParse, r)) ||
          -1 !== (o = vt.call(this._weekdaysParse, r)) ||
          -1 !== (o = vt.call(this._minWeekdaysParse, r))
          ? o
          : null
        : -1 !== (o = vt.call(this._minWeekdaysParse, r)) ||
          -1 !== (o = vt.call(this._weekdaysParse, r)) ||
          -1 !== (o = vt.call(this._shortWeekdaysParse, r))
        ? o
        : null;
    }
    function zt() {
      function t(t, e) {
        return e.length - t.length;
      }
      var e,
        n,
        i,
        o,
        s,
        r = [],
        a = [],
        l = [],
        u = [];
      for (e = 0; e < 7; e++)
        (n = h([2e3, 1]).day(e)),
          (i = lt(this.weekdaysMin(n, ""))),
          (o = lt(this.weekdaysShort(n, ""))),
          (s = lt(this.weekdays(n, ""))),
          r.push(i),
          a.push(o),
          l.push(s),
          u.push(i),
          u.push(o),
          u.push(s);
      r.sort(t),
        a.sort(t),
        l.sort(t),
        u.sort(t),
        (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
        (this._weekdaysShortRegex = this._weekdaysRegex),
        (this._weekdaysMinRegex = this._weekdaysRegex),
        (this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i")),
        (this._weekdaysShortStrictRegex = new RegExp(
          "^(" + a.join("|") + ")",
          "i"
        )),
        (this._weekdaysMinStrictRegex = new RegExp(
          "^(" + r.join("|") + ")",
          "i"
        ));
    }
    function Bt() {
      return this.hours() % 12 || 12;
    }
    function Gt(t, e) {
      Y(t, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), e);
      });
    }
    function Qt(t, e) {
      return e._meridiemParse;
    }
    Y("H", ["HH", 2], 0, "hour"),
      Y("h", ["hh", 2], 0, Bt),
      Y("k", ["kk", 2], 0, function () {
        return this.hours() || 24;
      }),
      Y("hmm", 0, 0, function () {
        return "" + Bt.apply(this) + D(this.minutes(), 2);
      }),
      Y("hmmss", 0, 0, function () {
        return (
          "" + Bt.apply(this) + D(this.minutes(), 2) + D(this.seconds(), 2)
        );
      }),
      Y("Hmm", 0, 0, function () {
        return "" + this.hours() + D(this.minutes(), 2);
      }),
      Y("Hmmss", 0, 0, function () {
        return "" + this.hours() + D(this.minutes(), 2) + D(this.seconds(), 2);
      }),
      Gt("a", !0),
      Gt("A", !1),
      rt("a", Qt),
      rt("A", Qt),
      rt("H", B, st),
      rt("h", B, ot),
      rt("k", B, ot),
      rt("HH", B, q),
      rt("hh", B, q),
      rt("kk", B, q),
      rt("hmm", G),
      rt("hmmss", Q),
      rt("Hmm", G),
      rt("Hmmss", Q),
      ht(["H", "HH"], 3),
      ht(["k", "kk"], function (t, e, n) {
        var i = ct(t);
        e[3] = 24 === i ? 0 : i;
      }),
      ht(["a", "A"], function (t, e, n) {
        (n._isPm = n._locale.isPM(t)), (n._meridiem = t);
      }),
      ht(["h", "hh"], function (t, e, n) {
        (e[3] = ct(t)), (f(n).bigHour = !0);
      }),
      ht("hmm", function (t, e, n) {
        var i = t.length - 2;
        (e[3] = ct(t.substr(0, i))),
          (e[4] = ct(t.substr(i))),
          (f(n).bigHour = !0);
      }),
      ht("hmmss", function (t, e, n) {
        var i = t.length - 4,
          o = t.length - 2;
        (e[3] = ct(t.substr(0, i))),
          (e[4] = ct(t.substr(i, 2))),
          (e[5] = ct(t.substr(o))),
          (f(n).bigHour = !0);
      }),
      ht("Hmm", function (t, e, n) {
        var i = t.length - 2;
        (e[3] = ct(t.substr(0, i))), (e[4] = ct(t.substr(i)));
      }),
      ht("Hmmss", function (t, e, n) {
        var i = t.length - 4,
          o = t.length - 2;
        (e[3] = ct(t.substr(0, i))),
          (e[4] = ct(t.substr(i, 2))),
          (e[5] = ct(t.substr(o)));
      });
    var Zt = wt("Hours", !0);
    var Xt,
      Jt = {
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        longDateFormat: {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A",
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          w: "a week",
          ww: "%d weeks",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        months: Tt,
        monthsShort: kt,
        week: { dow: 0, doy: 6 },
        weekdays: Lt,
        weekdaysMin: Ft,
        weekdaysShort: Wt,
        meridiemParse: /[ap]\.?m?\.?/i,
      },
      Kt = {},
      te = {};
    function ee(t, e) {
      var n,
        i = Math.min(t.length, e.length);
      for (n = 0; n < i; n += 1) if (t[n] !== e[n]) return n;
      return i;
    }
    function ne(t) {
      return t ? t.toLowerCase().replace("_", "-") : t;
    }
    function ie(t) {
      var e = null;
      if (
        void 0 === Kt[t] &&
        "undefined" != typeof module &&
        module &&
        module.exports &&
        (function (t) {
          return !(!t || !t.match("^[^/\\\\]*$"));
        })(t)
      )
        try {
          (e = Xt._abbr), require("./locale/" + t), oe(e);
        } catch (e) {
          Kt[t] = null;
        }
      return Kt[t];
    }
    function oe(t, e) {
      var n;
      return (
        t &&
          ((n = a(e) ? re(t) : se(t, e))
            ? (Xt = n)
            : "undefined" != typeof console &&
              console.warn &&
              console.warn(
                "Locale " + t + " not found. Did you forget to load it?"
              )),
        Xt._abbr
      );
    }
    function se(t, e) {
      if (null !== e) {
        var n,
          i = Jt;
        if (((e.abbr = t), null != Kt[t]))
          _(
            "defineLocaleOverride",
            "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
          ),
            (i = Kt[t]._config);
        else if (null != e.parentLocale)
          if (null != Kt[e.parentLocale]) i = Kt[e.parentLocale]._config;
          else {
            if (null == (n = ie(e.parentLocale)))
              return (
                te[e.parentLocale] || (te[e.parentLocale] = []),
                te[e.parentLocale].push({ name: t, config: e }),
                null
              );
            i = n._config;
          }
        return (
          (Kt[t] = new C($(i, e))),
          te[t] &&
            te[t].forEach(function (t) {
              se(t.name, t.config);
            }),
          oe(t),
          Kt[t]
        );
      }
      return delete Kt[t], null;
    }
    function re(t) {
      var e;
      if ((t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t))
        return Xt;
      if (!i(t)) {
        if ((e = ie(t))) return e;
        t = [t];
      }
      return (function (t) {
        for (var e, n, i, o, s = 0; s < t.length; ) {
          for (
            e = (o = ne(t[s]).split("-")).length,
              n = (n = ne(t[s + 1])) ? n.split("-") : null;
            e > 0;

          ) {
            if ((i = ie(o.slice(0, e).join("-")))) return i;
            if (n && n.length >= e && ee(o, n) >= e - 1) break;
            e--;
          }
          s++;
        }
        return Xt;
      })(t);
    }
    function ae(t) {
      var e,
        n = t._a;
      return (
        n &&
          -2 === f(t).overflow &&
          ((e =
            n[1] < 0 || n[1] > 11
              ? 1
              : n[2] < 1 || n[2] > St(n[0], n[1])
              ? 2
              : n[3] < 0 ||
                n[3] > 24 ||
                (24 === n[3] && (0 !== n[4] || 0 !== n[5] || 0 !== n[6]))
              ? 3
              : n[4] < 0 || n[4] > 59
              ? 4
              : n[5] < 0 || n[5] > 59
              ? 5
              : n[6] < 0 || n[6] > 999
              ? 6
              : -1),
          f(t)._overflowDayOfYear && (e < 0 || e > 2) && (e = 2),
          f(t)._overflowWeeks && -1 === e && (e = 7),
          f(t)._overflowWeekday && -1 === e && (e = 8),
          (f(t).overflow = e)),
        t
      );
    }
    var le =
        /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      ue =
        /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      ce = /Z|[+-]\d\d(?::?\d\d)?/,
      de = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, !1],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
        ["YYYYDDD", /\d{7}/],
        ["YYYYMM", /\d{6}/, !1],
        ["YYYY", /\d{4}/, !1],
      ],
      he = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/],
      ],
      fe = /^\/?Date\((-?\d+)/i,
      pe =
        /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
      me = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480,
      };
    function ge(t) {
      var e,
        n,
        i,
        o,
        s,
        r,
        a = t._i,
        l = le.exec(a) || ue.exec(a),
        u = de.length,
        c = he.length;
      if (l) {
        for (f(t).iso = !0, e = 0, n = u; e < n; e++)
          if (de[e][1].exec(l[1])) {
            (o = de[e][0]), (i = !1 !== de[e][2]);
            break;
          }
        if (null == o) return void (t._isValid = !1);
        if (l[3]) {
          for (e = 0, n = c; e < n; e++)
            if (he[e][1].exec(l[3])) {
              s = (l[2] || " ") + he[e][0];
              break;
            }
          if (null == s) return void (t._isValid = !1);
        }
        if (!i && null != s) return void (t._isValid = !1);
        if (l[4]) {
          if (!ce.exec(l[4])) return void (t._isValid = !1);
          r = "Z";
        }
        (t._f = o + (s || "") + (r || "")), xe(t);
      } else t._isValid = !1;
    }
    function ve(t) {
      var e = parseInt(t, 10);
      return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e;
    }
    function ye(t) {
      var e,
        n,
        i,
        o,
        s,
        r,
        a,
        l,
        u = pe.exec(
          t._i
            .replace(/\([^()]*\)|[\n\t]/g, " ")
            .replace(/(\s\s+)/g, " ")
            .replace(/^\s\s*/, "")
            .replace(/\s\s*$/, "")
        );
      if (u) {
        if (
          ((n = u[4]),
          (i = u[3]),
          (o = u[2]),
          (s = u[5]),
          (r = u[6]),
          (a = u[7]),
          (l = [
            ve(n),
            kt.indexOf(i),
            parseInt(o, 10),
            parseInt(s, 10),
            parseInt(r, 10),
          ]),
          a && l.push(parseInt(a, 10)),
          (e = l),
          !(function (t, e, n) {
            return (
              !t ||
              Wt.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() ||
              ((f(n).weekdayMismatch = !0), (n._isValid = !1), !1)
            );
          })(u[1], e, t))
        )
          return;
        (t._a = e),
          (t._tzm = (function (t, e, n) {
            if (t) return me[t];
            if (e) return 0;
            var i = parseInt(n, 10),
              o = i % 100;
            return ((i - o) / 100) * 60 + o;
          })(u[8], u[9], u[10])),
          (t._d = At.apply(null, t._a)),
          t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
          (f(t).rfc2822 = !0);
      } else t._isValid = !1;
    }
    function we(t, e, n) {
      return null != t ? t : null != e ? e : n;
    }
    function be(t) {
      var e,
        i,
        o,
        s,
        r,
        a = [];
      if (!t._d) {
        for (
          o = (function (t) {
            var e = new Date(n.now());
            return t._useUTC
              ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]
              : [e.getFullYear(), e.getMonth(), e.getDate()];
          })(t),
            t._w &&
              null == t._a[2] &&
              null == t._a[1] &&
              (function (t) {
                var e, n, i, o, s, r, a, l, u;
                null != (e = t._w).GG || null != e.W || null != e.E
                  ? ((s = 1),
                    (r = 4),
                    (n = we(e.GG, t._a[0], Ht(ke(), 1, 4).year)),
                    (i = we(e.W, 1)),
                    ((o = we(e.E, 1)) < 1 || o > 7) && (l = !0))
                  : ((s = t._locale._week.dow),
                    (r = t._locale._week.doy),
                    (u = Ht(ke(), s, r)),
                    (n = we(e.gg, t._a[0], u.year)),
                    (i = we(e.w, u.week)),
                    null != e.d
                      ? ((o = e.d) < 0 || o > 6) && (l = !0)
                      : null != e.e
                      ? ((o = e.e + s), (e.e < 0 || e.e > 6) && (l = !0))
                      : (o = s));
                i < 1 || i > It(n, s, r)
                  ? (f(t)._overflowWeeks = !0)
                  : null != l
                  ? (f(t)._overflowWeekday = !0)
                  : ((a = jt(n, i, o, s, r)),
                    (t._a[0] = a.year),
                    (t._dayOfYear = a.dayOfYear));
              })(t),
            null != t._dayOfYear &&
              ((r = we(t._a[0], o[0])),
              (t._dayOfYear > gt(r) || 0 === t._dayOfYear) &&
                (f(t)._overflowDayOfYear = !0),
              (i = At(r, 0, t._dayOfYear)),
              (t._a[1] = i.getUTCMonth()),
              (t._a[2] = i.getUTCDate())),
            e = 0;
          e < 3 && null == t._a[e];
          ++e
        )
          t._a[e] = a[e] = o[e];
        for (; e < 7; e++)
          t._a[e] = a[e] = null == t._a[e] ? (2 === e ? 1 : 0) : t._a[e];
        24 === t._a[3] &&
          0 === t._a[4] &&
          0 === t._a[5] &&
          0 === t._a[6] &&
          ((t._nextDay = !0), (t._a[3] = 0)),
          (t._d = (t._useUTC ? At : Nt).apply(null, a)),
          (s = t._useUTC ? t._d.getUTCDay() : t._d.getDay()),
          null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
          t._nextDay && (t._a[3] = 24),
          t._w &&
            void 0 !== t._w.d &&
            t._w.d !== s &&
            (f(t).weekdayMismatch = !0);
      }
    }
    function xe(t) {
      if (t._f !== n.ISO_8601)
        if (t._f !== n.RFC_2822) {
          (t._a = []), (f(t).empty = !0);
          var e,
            i,
            o,
            s,
            r,
            a,
            l,
            u = "" + t._i,
            c = u.length,
            d = 0;
          for (
            l = (o = H(t._f, t._locale).match(E) || []).length, e = 0;
            e < l;
            e++
          )
            (s = o[e]),
              (i = (u.match(at(s, t)) || [])[0]) &&
                ((r = u.substr(0, u.indexOf(i))).length > 0 &&
                  f(t).unusedInput.push(r),
                (u = u.slice(u.indexOf(i) + i.length)),
                (d += i.length)),
              A[s]
                ? (i ? (f(t).empty = !1) : f(t).unusedTokens.push(s),
                  pt(s, i, t))
                : t._strict && !i && f(t).unusedTokens.push(s);
          (f(t).charsLeftOver = c - d),
            u.length > 0 && f(t).unusedInput.push(u),
            t._a[3] <= 12 &&
              !0 === f(t).bigHour &&
              t._a[3] > 0 &&
              (f(t).bigHour = void 0),
            (f(t).parsedDateParts = t._a.slice(0)),
            (f(t).meridiem = t._meridiem),
            (t._a[3] = (function (t, e, n) {
              var i;
              if (null == n) return e;
              return null != t.meridiemHour
                ? t.meridiemHour(e, n)
                : null != t.isPM
                ? ((i = t.isPM(n)) && e < 12 && (e += 12),
                  i || 12 !== e || (e = 0),
                  e)
                : e;
            })(t._locale, t._a[3], t._meridiem)),
            null !== (a = f(t).era) &&
              (t._a[0] = t._locale.erasConvertYear(a, t._a[0])),
            be(t),
            ae(t);
        } else ye(t);
      else ge(t);
    }
    function Se(t) {
      var e = t._i,
        s = t._f;
      return (
        (t._locale = t._locale || re(t._l)),
        null === e || (void 0 === s && "" === e)
          ? m({ nullInput: !0 })
          : ("string" == typeof e && (t._i = e = t._locale.preparse(e)),
            b(e)
              ? new w(ae(e))
              : (u(e)
                  ? (t._d = e)
                  : i(s)
                  ? (function (t) {
                      var e,
                        n,
                        i,
                        o,
                        s,
                        r,
                        a = !1,
                        l = t._f.length;
                      if (0 === l)
                        return (
                          (f(t).invalidFormat = !0), void (t._d = new Date(NaN))
                        );
                      for (o = 0; o < l; o++)
                        (s = 0),
                          (r = !1),
                          (e = y({}, t)),
                          null != t._useUTC && (e._useUTC = t._useUTC),
                          (e._f = t._f[o]),
                          xe(e),
                          p(e) && (r = !0),
                          (s += f(e).charsLeftOver),
                          (s += 10 * f(e).unusedTokens.length),
                          (f(e).score = s),
                          a
                            ? s < i && ((i = s), (n = e))
                            : (null == i || s < i || r) &&
                              ((i = s), (n = e), r && (a = !0));
                      d(t, n || e);
                    })(t)
                  : s
                  ? xe(t)
                  : (function (t) {
                      var e = t._i;
                      a(e)
                        ? (t._d = new Date(n.now()))
                        : u(e)
                        ? (t._d = new Date(e.valueOf()))
                        : "string" == typeof e
                        ? (function (t) {
                            var e = fe.exec(t._i);
                            null === e
                              ? (ge(t),
                                !1 === t._isValid &&
                                  (delete t._isValid,
                                  ye(t),
                                  !1 === t._isValid &&
                                    (delete t._isValid,
                                    t._strict
                                      ? (t._isValid = !1)
                                      : n.createFromInputFallback(t))))
                              : (t._d = new Date(+e[1]));
                          })(t)
                        : i(e)
                        ? ((t._a = c(e.slice(0), function (t) {
                            return parseInt(t, 10);
                          })),
                          be(t))
                        : o(e)
                        ? (function (t) {
                            if (!t._d) {
                              var e = L(t._i),
                                n = void 0 === e.day ? e.date : e.day;
                              (t._a = c(
                                [
                                  e.year,
                                  e.month,
                                  n,
                                  e.hour,
                                  e.minute,
                                  e.second,
                                  e.millisecond,
                                ],
                                function (t) {
                                  return t && parseInt(t, 10);
                                }
                              )),
                                be(t);
                            }
                          })(t)
                        : l(e)
                        ? (t._d = new Date(e))
                        : n.createFromInputFallback(t);
                    })(t),
                p(t) || (t._d = null),
                t))
      );
    }
    function Te(t, e, n, s, a) {
      var l,
        u = {};
      return (
        (!0 !== e && !1 !== e) || ((s = e), (e = void 0)),
        (!0 !== n && !1 !== n) || ((s = n), (n = void 0)),
        ((o(t) && r(t)) || (i(t) && 0 === t.length)) && (t = void 0),
        (u._isAMomentObject = !0),
        (u._useUTC = u._isUTC = a),
        (u._l = n),
        (u._i = t),
        (u._f = e),
        (u._strict = s),
        (l = new w(ae(Se(u))))._nextDay &&
          (l.add(1, "d"), (l._nextDay = void 0)),
        l
      );
    }
    function ke(t, e, n, i) {
      return Te(t, e, n, i, !1);
    }
    (n.createFromInputFallback = S(
      "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
      function (t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
      }
    )),
      (n.ISO_8601 = function () {}),
      (n.RFC_2822 = function () {});
    var _e = S(
        "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
        function () {
          var t = ke.apply(null, arguments);
          return this.isValid() && t.isValid() ? (t < this ? this : t) : m();
        }
      ),
      Me = S(
        "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
        function () {
          var t = ke.apply(null, arguments);
          return this.isValid() && t.isValid() ? (t > this ? this : t) : m();
        }
      );
    function $e(t, e) {
      var n, o;
      if ((1 === e.length && i(e[0]) && (e = e[0]), !e.length)) return ke();
      for (n = e[0], o = 1; o < e.length; ++o)
        (e[o].isValid() && !e[o][t](n)) || (n = e[o]);
      return n;
    }
    var Ce = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond",
    ];
    function De(t) {
      var e = L(t),
        n = e.year || 0,
        i = e.quarter || 0,
        o = e.month || 0,
        r = e.week || e.isoWeek || 0,
        a = e.day || 0,
        l = e.hour || 0,
        u = e.minute || 0,
        c = e.second || 0,
        d = e.millisecond || 0;
      (this._isValid = (function (t) {
        var e,
          n,
          i = !1,
          o = Ce.length;
        for (e in t)
          if (
            s(t, e) &&
            (-1 === vt.call(Ce, e) || (null != t[e] && isNaN(t[e])))
          )
            return !1;
        for (n = 0; n < o; ++n)
          if (t[Ce[n]]) {
            if (i) return !1;
            parseFloat(t[Ce[n]]) !== ct(t[Ce[n]]) && (i = !0);
          }
        return !0;
      })(e)),
        (this._milliseconds = +d + 1e3 * c + 6e4 * u + 1e3 * l * 60 * 60),
        (this._days = +a + 7 * r),
        (this._months = +o + 3 * i + 12 * n),
        (this._data = {}),
        (this._locale = re()),
        this._bubble();
    }
    function Ee(t) {
      return t instanceof De;
    }
    function Oe(t) {
      return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
    }
    function Ne(t, e) {
      Y(t, 0, 0, function () {
        var t = this.utcOffset(),
          n = "+";
        return (
          t < 0 && ((t = -t), (n = "-")),
          n + D(~~(t / 60), 2) + e + D(~~t % 60, 2)
        );
      });
    }
    Ne("Z", ":"),
      Ne("ZZ", ""),
      rt("Z", nt),
      rt("ZZ", nt),
      ht(["Z", "ZZ"], function (t, e, n) {
        (n._useUTC = !0), (n._tzm = Ye(nt, t));
      });
    var Ae = /([\+\-]|\d\d)/gi;
    function Ye(t, e) {
      var n,
        i,
        o = (e || "").match(t);
      return null === o
        ? null
        : 0 ===
          (i =
            60 *
              (n = ((o[o.length - 1] || []) + "").match(Ae) || ["-", 0, 0])[1] +
            ct(n[2]))
        ? 0
        : "+" === n[0]
        ? i
        : -i;
    }
    function je(t, e) {
      var i, o;
      return e._isUTC
        ? ((i = e.clone()),
          (o = (b(t) || u(t) ? t.valueOf() : ke(t).valueOf()) - i.valueOf()),
          i._d.setTime(i._d.valueOf() + o),
          n.updateOffset(i, !1),
          i)
        : ke(t).local();
    }
    function He(t) {
      return -Math.round(t._d.getTimezoneOffset());
    }
    function Ie() {
      return !!this.isValid() && this._isUTC && 0 === this._offset;
    }
    n.updateOffset = function () {};
    var Pe = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
      Le =
        /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function We(t, e) {
      var n,
        i,
        o,
        r = t,
        a = null;
      return (
        Ee(t)
          ? (r = { ms: t._milliseconds, d: t._days, M: t._months })
          : l(t) || !isNaN(+t)
          ? ((r = {}), e ? (r[e] = +t) : (r.milliseconds = +t))
          : (a = Pe.exec(t))
          ? ((n = "-" === a[1] ? -1 : 1),
            (r = {
              y: 0,
              d: ct(a[2]) * n,
              h: ct(a[3]) * n,
              m: ct(a[4]) * n,
              s: ct(a[5]) * n,
              ms: ct(Oe(1e3 * a[6])) * n,
            }))
          : (a = Le.exec(t))
          ? ((n = "-" === a[1] ? -1 : 1),
            (r = {
              y: Fe(a[2], n),
              M: Fe(a[3], n),
              w: Fe(a[4], n),
              d: Fe(a[5], n),
              h: Fe(a[6], n),
              m: Fe(a[7], n),
              s: Fe(a[8], n),
            }))
          : null == r
          ? (r = {})
          : "object" == typeof r &&
            ("from" in r || "to" in r) &&
            ((o = (function (t, e) {
              var n;
              if (!t.isValid() || !e.isValid())
                return { milliseconds: 0, months: 0 };
              (e = je(e, t)),
                t.isBefore(e)
                  ? (n = Re(t, e))
                  : (((n = Re(e, t)).milliseconds = -n.milliseconds),
                    (n.months = -n.months));
              return n;
            })(ke(r.from), ke(r.to))),
            ((r = {}).ms = o.milliseconds),
            (r.M = o.months)),
        (i = new De(r)),
        Ee(t) && s(t, "_locale") && (i._locale = t._locale),
        Ee(t) && s(t, "_isValid") && (i._isValid = t._isValid),
        i
      );
    }
    function Fe(t, e) {
      var n = t && parseFloat(t.replace(",", "."));
      return (isNaN(n) ? 0 : n) * e;
    }
    function Re(t, e) {
      var n = {};
      return (
        (n.months = e.month() - t.month() + 12 * (e.year() - t.year())),
        t.clone().add(n.months, "M").isAfter(e) && --n.months,
        (n.milliseconds = +e - +t.clone().add(n.months, "M")),
        n
      );
    }
    function qe(t, e) {
      return function (n, i) {
        var o;
        return (
          null === i ||
            isNaN(+i) ||
            (_(
              e,
              "moment()." +
                e +
                "(period, number) is deprecated. Please use moment()." +
                e +
                "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
            ),
            (o = n),
            (n = i),
            (i = o)),
          Ue(this, We(n, i), t),
          this
        );
      };
    }
    function Ue(t, e, i, o) {
      var s = e._milliseconds,
        r = Oe(e._days),
        a = Oe(e._months);
      t.isValid() &&
        ((o = null == o || o),
        a && Dt(t, bt(t, "Month") + a * i),
        r && xt(t, "Date", bt(t, "Date") + r * i),
        s && t._d.setTime(t._d.valueOf() + s * i),
        o && n.updateOffset(t, r || a));
    }
    (We.fn = De.prototype),
      (We.invalid = function () {
        return We(NaN);
      });
    var Ve = qe(1, "add"),
      ze = qe(-1, "subtract");
    function Be(t) {
      return "string" == typeof t || t instanceof String;
    }
    function Ge(t) {
      return (
        b(t) ||
        u(t) ||
        Be(t) ||
        l(t) ||
        (function (t) {
          var e = i(t),
            n = !1;
          e &&
            (n =
              0 ===
              t.filter(function (e) {
                return !l(e) && Be(t);
              }).length);
          return e && n;
        })(t) ||
        (function (t) {
          var e,
            n,
            i = o(t) && !r(t),
            a = !1,
            l = [
              "years",
              "year",
              "y",
              "months",
              "month",
              "M",
              "days",
              "day",
              "d",
              "dates",
              "date",
              "D",
              "hours",
              "hour",
              "h",
              "minutes",
              "minute",
              "m",
              "seconds",
              "second",
              "s",
              "milliseconds",
              "millisecond",
              "ms",
            ],
            u = l.length;
          for (e = 0; e < u; e += 1) (n = l[e]), (a = a || s(t, n));
          return i && a;
        })(t) ||
        null == t
      );
    }
    function Qe(t) {
      var e,
        n = o(t) && !r(t),
        i = !1,
        a = [
          "sameDay",
          "nextDay",
          "lastDay",
          "nextWeek",
          "lastWeek",
          "sameElse",
        ];
      for (e = 0; e < a.length; e += 1) i = i || s(t, a[e]);
      return n && i;
    }
    function Ze(t, e) {
      if (t.date() < e.date()) return -Ze(e, t);
      var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
        i = t.clone().add(n, "months");
      return (
        -(
          n +
          (e - i < 0
            ? (e - i) / (i - t.clone().add(n - 1, "months"))
            : (e - i) / (t.clone().add(n + 1, "months") - i))
        ) || 0
      );
    }
    function Xe(t) {
      var e;
      return void 0 === t
        ? this._locale._abbr
        : (null != (e = re(t)) && (this._locale = e), this);
    }
    (n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
      (n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
    var Je = S(
      "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
      function (t) {
        return void 0 === t ? this.localeData() : this.locale(t);
      }
    );
    function Ke() {
      return this._locale;
    }
    var tn = 1e3,
      en = 6e4,
      nn = 36e5,
      on = 126227808e5;
    function sn(t, e) {
      return ((t % e) + e) % e;
    }
    function rn(t, e, n) {
      return t < 100 && t >= 0
        ? new Date(t + 400, e, n) - on
        : new Date(t, e, n).valueOf();
    }
    function an(t, e, n) {
      return t < 100 && t >= 0
        ? Date.UTC(t + 400, e, n) - on
        : Date.UTC(t, e, n);
    }
    function ln(t, e) {
      return e.erasAbbrRegex(t);
    }
    function un() {
      var t,
        e,
        n,
        i,
        o,
        s = [],
        r = [],
        a = [],
        l = [],
        u = this.eras();
      for (t = 0, e = u.length; t < e; ++t)
        (n = lt(u[t].name)),
          (i = lt(u[t].abbr)),
          (o = lt(u[t].narrow)),
          r.push(n),
          s.push(i),
          a.push(o),
          l.push(n),
          l.push(i),
          l.push(o);
      (this._erasRegex = new RegExp("^(" + l.join("|") + ")", "i")),
        (this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i")),
        (this._erasAbbrRegex = new RegExp("^(" + s.join("|") + ")", "i")),
        (this._erasNarrowRegex = new RegExp("^(" + a.join("|") + ")", "i"));
    }
    function cn(t, e) {
      Y(0, [t, t.length], 0, e);
    }
    function dn(t, e, n, i, o) {
      var s;
      return null == t
        ? Ht(this, i, o).year
        : (e > (s = It(t, i, o)) && (e = s), hn.call(this, t, e, n, i, o));
    }
    function hn(t, e, n, i, o) {
      var s = jt(t, e, n, i, o),
        r = At(s.year, 0, s.dayOfYear);
      return (
        this.year(r.getUTCFullYear()),
        this.month(r.getUTCMonth()),
        this.date(r.getUTCDate()),
        this
      );
    }
    Y("N", 0, 0, "eraAbbr"),
      Y("NN", 0, 0, "eraAbbr"),
      Y("NNN", 0, 0, "eraAbbr"),
      Y("NNNN", 0, 0, "eraName"),
      Y("NNNNN", 0, 0, "eraNarrow"),
      Y("y", ["y", 1], "yo", "eraYear"),
      Y("y", ["yy", 2], 0, "eraYear"),
      Y("y", ["yyy", 3], 0, "eraYear"),
      Y("y", ["yyyy", 4], 0, "eraYear"),
      rt("N", ln),
      rt("NN", ln),
      rt("NNN", ln),
      rt("NNNN", function (t, e) {
        return e.erasNameRegex(t);
      }),
      rt("NNNNN", function (t, e) {
        return e.erasNarrowRegex(t);
      }),
      ht(["N", "NN", "NNN", "NNNN", "NNNNN"], function (t, e, n, i) {
        var o = n._locale.erasParse(t, i, n._strict);
        o ? (f(n).era = o) : (f(n).invalidEra = t);
      }),
      rt("y", K),
      rt("yy", K),
      rt("yyy", K),
      rt("yyyy", K),
      rt("yo", function (t, e) {
        return e._eraYearOrdinalRegex || K;
      }),
      ht(["y", "yy", "yyy", "yyyy"], 0),
      ht(["yo"], function (t, e, n, i) {
        var o;
        n._locale._eraYearOrdinalRegex &&
          (o = t.match(n._locale._eraYearOrdinalRegex)),
          n._locale.eraYearOrdinalParse
            ? (e[0] = n._locale.eraYearOrdinalParse(t, o))
            : (e[0] = parseInt(t, 10));
      }),
      Y(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100;
      }),
      Y(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100;
      }),
      cn("gggg", "weekYear"),
      cn("ggggg", "weekYear"),
      cn("GGGG", "isoWeekYear"),
      cn("GGGGG", "isoWeekYear"),
      rt("G", tt),
      rt("g", tt),
      rt("GG", B, q),
      rt("gg", B, q),
      rt("GGGG", X, V),
      rt("gggg", X, V),
      rt("GGGGG", J, z),
      rt("ggggg", J, z),
      ft(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, i) {
        e[i.substr(0, 2)] = ct(t);
      }),
      ft(["gg", "GG"], function (t, e, i, o) {
        e[o] = n.parseTwoDigitYear(t);
      }),
      Y("Q", 0, "Qo", "quarter"),
      rt("Q", R),
      ht("Q", function (t, e) {
        e[1] = 3 * (ct(t) - 1);
      }),
      Y("D", ["DD", 2], "Do", "date"),
      rt("D", B, ot),
      rt("DD", B, q),
      rt("Do", function (t, e) {
        return t
          ? e._dayOfMonthOrdinalParse || e._ordinalParse
          : e._dayOfMonthOrdinalParseLenient;
      }),
      ht(["D", "DD"], 2),
      ht("Do", function (t, e) {
        e[2] = ct(t.match(B)[0]);
      });
    var fn = wt("Date", !0);
    Y("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
      rt("DDD", Z),
      rt("DDDD", U),
      ht(["DDD", "DDDD"], function (t, e, n) {
        n._dayOfYear = ct(t);
      }),
      Y("m", ["mm", 2], 0, "minute"),
      rt("m", B, st),
      rt("mm", B, q),
      ht(["m", "mm"], 4);
    var pn = wt("Minutes", !1);
    Y("s", ["ss", 2], 0, "second"),
      rt("s", B, st),
      rt("ss", B, q),
      ht(["s", "ss"], 5);
    var mn,
      gn,
      vn = wt("Seconds", !1);
    for (
      Y("S", 0, 0, function () {
        return ~~(this.millisecond() / 100);
      }),
        Y(0, ["SS", 2], 0, function () {
          return ~~(this.millisecond() / 10);
        }),
        Y(0, ["SSS", 3], 0, "millisecond"),
        Y(0, ["SSSS", 4], 0, function () {
          return 10 * this.millisecond();
        }),
        Y(0, ["SSSSS", 5], 0, function () {
          return 100 * this.millisecond();
        }),
        Y(0, ["SSSSSS", 6], 0, function () {
          return 1e3 * this.millisecond();
        }),
        Y(0, ["SSSSSSS", 7], 0, function () {
          return 1e4 * this.millisecond();
        }),
        Y(0, ["SSSSSSSS", 8], 0, function () {
          return 1e5 * this.millisecond();
        }),
        Y(0, ["SSSSSSSSS", 9], 0, function () {
          return 1e6 * this.millisecond();
        }),
        rt("S", Z, R),
        rt("SS", Z, q),
        rt("SSS", Z, U),
        mn = "SSSS";
      mn.length <= 9;
      mn += "S"
    )
      rt(mn, K);
    function yn(t, e) {
      e[6] = ct(1e3 * ("0." + t));
    }
    for (mn = "S"; mn.length <= 9; mn += "S") ht(mn, yn);
    (gn = wt("Milliseconds", !1)),
      Y("z", 0, 0, "zoneAbbr"),
      Y("zz", 0, 0, "zoneName");
    var wn = w.prototype;
    function bn(t) {
      return t;
    }
    (wn.add = Ve),
      (wn.calendar = function (t, e) {
        1 === arguments.length &&
          (arguments[0]
            ? Ge(arguments[0])
              ? ((t = arguments[0]), (e = void 0))
              : Qe(arguments[0]) && ((e = arguments[0]), (t = void 0))
            : ((t = void 0), (e = void 0)));
        var i = t || ke(),
          o = je(i, this).startOf("day"),
          s = n.calendarFormat(this, o) || "sameElse",
          r = e && (M(e[s]) ? e[s].call(this, i) : e[s]);
        return this.format(r || this.localeData().calendar(s, this, ke(i)));
      }),
      (wn.clone = function () {
        return new w(this);
      }),
      (wn.diff = function (t, e, n) {
        var i, o, s;
        if (!this.isValid()) return NaN;
        if (!(i = je(t, this)).isValid()) return NaN;
        switch (((o = 6e4 * (i.utcOffset() - this.utcOffset())), (e = P(e)))) {
          case "year":
            s = Ze(this, i) / 12;
            break;
          case "month":
            s = Ze(this, i);
            break;
          case "quarter":
            s = Ze(this, i) / 3;
            break;
          case "second":
            s = (this - i) / 1e3;
            break;
          case "minute":
            s = (this - i) / 6e4;
            break;
          case "hour":
            s = (this - i) / 36e5;
            break;
          case "day":
            s = (this - i - o) / 864e5;
            break;
          case "week":
            s = (this - i - o) / 6048e5;
            break;
          default:
            s = this - i;
        }
        return n ? s : ut(s);
      }),
      (wn.endOf = function (t) {
        var e, i;
        if (void 0 === (t = P(t)) || "millisecond" === t || !this.isValid())
          return this;
        switch (((i = this._isUTC ? an : rn), t)) {
          case "year":
            e = i(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            e = i(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
            break;
          case "month":
            e = i(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            e =
              i(this.year(), this.month(), this.date() - this.weekday() + 7) -
              1;
            break;
          case "isoWeek":
            e =
              i(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1) + 7
              ) - 1;
            break;
          case "day":
          case "date":
            e = i(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            (e = this._d.valueOf()),
              (e +=
                nn - sn(e + (this._isUTC ? 0 : this.utcOffset() * en), nn) - 1);
            break;
          case "minute":
            (e = this._d.valueOf()), (e += en - sn(e, en) - 1);
            break;
          case "second":
            (e = this._d.valueOf()), (e += tn - sn(e, tn) - 1);
        }
        return this._d.setTime(e), n.updateOffset(this, !0), this;
      }),
      (wn.format = function (t) {
        t || (t = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
        var e = j(this, t);
        return this.localeData().postformat(e);
      }),
      (wn.from = function (t, e) {
        return this.isValid() && ((b(t) && t.isValid()) || ke(t).isValid())
          ? We({ to: this, from: t }).locale(this.locale()).humanize(!e)
          : this.localeData().invalidDate();
      }),
      (wn.fromNow = function (t) {
        return this.from(ke(), t);
      }),
      (wn.to = function (t, e) {
        return this.isValid() && ((b(t) && t.isValid()) || ke(t).isValid())
          ? We({ from: this, to: t }).locale(this.locale()).humanize(!e)
          : this.localeData().invalidDate();
      }),
      (wn.toNow = function (t) {
        return this.to(ke(), t);
      }),
      (wn.get = function (t) {
        return M(this[(t = P(t))]) ? this[t]() : this;
      }),
      (wn.invalidAt = function () {
        return f(this).overflow;
      }),
      (wn.isAfter = function (t, e) {
        var n = b(t) ? t : ke(t);
        return (
          !(!this.isValid() || !n.isValid()) &&
          ("millisecond" === (e = P(e) || "millisecond")
            ? this.valueOf() > n.valueOf()
            : n.valueOf() < this.clone().startOf(e).valueOf())
        );
      }),
      (wn.isBefore = function (t, e) {
        var n = b(t) ? t : ke(t);
        return (
          !(!this.isValid() || !n.isValid()) &&
          ("millisecond" === (e = P(e) || "millisecond")
            ? this.valueOf() < n.valueOf()
            : this.clone().endOf(e).valueOf() < n.valueOf())
        );
      }),
      (wn.isBetween = function (t, e, n, i) {
        var o = b(t) ? t : ke(t),
          s = b(e) ? e : ke(e);
        return (
          !!(this.isValid() && o.isValid() && s.isValid()) &&
          ("(" === (i = i || "()")[0]
            ? this.isAfter(o, n)
            : !this.isBefore(o, n)) &&
          (")" === i[1] ? this.isBefore(s, n) : !this.isAfter(s, n))
        );
      }),
      (wn.isSame = function (t, e) {
        var n,
          i = b(t) ? t : ke(t);
        return (
          !(!this.isValid() || !i.isValid()) &&
          ("millisecond" === (e = P(e) || "millisecond")
            ? this.valueOf() === i.valueOf()
            : ((n = i.valueOf()),
              this.clone().startOf(e).valueOf() <= n &&
                n <= this.clone().endOf(e).valueOf()))
        );
      }),
      (wn.isSameOrAfter = function (t, e) {
        return this.isSame(t, e) || this.isAfter(t, e);
      }),
      (wn.isSameOrBefore = function (t, e) {
        return this.isSame(t, e) || this.isBefore(t, e);
      }),
      (wn.isValid = function () {
        return p(this);
      }),
      (wn.lang = Je),
      (wn.locale = Xe),
      (wn.localeData = Ke),
      (wn.max = Me),
      (wn.min = _e),
      (wn.parsingFlags = function () {
        return d({}, f(this));
      }),
      (wn.set = function (t, e) {
        if ("object" == typeof t) {
          var n,
            i = (function (t) {
              var e,
                n = [];
              for (e in t) s(t, e) && n.push({ unit: e, priority: W[e] });
              return (
                n.sort(function (t, e) {
                  return t.priority - e.priority;
                }),
                n
              );
            })((t = L(t))),
            o = i.length;
          for (n = 0; n < o; n++) this[i[n].unit](t[i[n].unit]);
        } else if (M(this[(t = P(t))])) return this[t](e);
        return this;
      }),
      (wn.startOf = function (t) {
        var e, i;
        if (void 0 === (t = P(t)) || "millisecond" === t || !this.isValid())
          return this;
        switch (((i = this._isUTC ? an : rn), t)) {
          case "year":
            e = i(this.year(), 0, 1);
            break;
          case "quarter":
            e = i(this.year(), this.month() - (this.month() % 3), 1);
            break;
          case "month":
            e = i(this.year(), this.month(), 1);
            break;
          case "week":
            e = i(this.year(), this.month(), this.date() - this.weekday());
            break;
          case "isoWeek":
            e = i(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1)
            );
            break;
          case "day":
          case "date":
            e = i(this.year(), this.month(), this.date());
            break;
          case "hour":
            (e = this._d.valueOf()),
              (e -= sn(e + (this._isUTC ? 0 : this.utcOffset() * en), nn));
            break;
          case "minute":
            (e = this._d.valueOf()), (e -= sn(e, en));
            break;
          case "second":
            (e = this._d.valueOf()), (e -= sn(e, tn));
        }
        return this._d.setTime(e), n.updateOffset(this, !0), this;
      }),
      (wn.subtract = ze),
      (wn.toArray = function () {
        var t = this;
        return [
          t.year(),
          t.month(),
          t.date(),
          t.hour(),
          t.minute(),
          t.second(),
          t.millisecond(),
        ];
      }),
      (wn.toObject = function () {
        var t = this;
        return {
          years: t.year(),
          months: t.month(),
          date: t.date(),
          hours: t.hours(),
          minutes: t.minutes(),
          seconds: t.seconds(),
          milliseconds: t.milliseconds(),
        };
      }),
      (wn.toDate = function () {
        return new Date(this.valueOf());
      }),
      (wn.toISOString = function (t) {
        if (!this.isValid()) return null;
        var e = !0 !== t,
          n = e ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999
          ? j(
              n,
              e
                ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
            )
          : M(Date.prototype.toISOString)
          ? e
            ? this.toDate().toISOString()
            : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                .toISOString()
                .replace("Z", j(n, "Z"))
          : j(
              n,
              e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
            );
      }),
      (wn.inspect = function () {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var t,
          e,
          n,
          i = "moment",
          o = "";
        return (
          this.isLocal() ||
            ((i = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
            (o = "Z")),
          (t = "[" + i + '("]'),
          (e = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
          "-MM-DD[T]HH:mm:ss.SSS",
          (n = o + '[")]'),
          this.format(t + e + "-MM-DD[T]HH:mm:ss.SSS" + n)
        );
      }),
      "undefined" != typeof Symbol &&
        null != Symbol.for &&
        (wn[Symbol.for("nodejs.util.inspect.custom")] = function () {
          return "Moment<" + this.format() + ">";
        }),
      (wn.toJSON = function () {
        return this.isValid() ? this.toISOString() : null;
      }),
      (wn.toString = function () {
        return this.clone()
          .locale("en")
          .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }),
      (wn.unix = function () {
        return Math.floor(this.valueOf() / 1e3);
      }),
      (wn.valueOf = function () {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
      }),
      (wn.creationData = function () {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict,
        };
      }),
      (wn.eraName = function () {
        var t,
          e,
          n,
          i = this.localeData().eras();
        for (t = 0, e = i.length; t < e; ++t) {
          if (
            ((n = this.clone().startOf("day").valueOf()),
            i[t].since <= n && n <= i[t].until)
          )
            return i[t].name;
          if (i[t].until <= n && n <= i[t].since) return i[t].name;
        }
        return "";
      }),
      (wn.eraNarrow = function () {
        var t,
          e,
          n,
          i = this.localeData().eras();
        for (t = 0, e = i.length; t < e; ++t) {
          if (
            ((n = this.clone().startOf("day").valueOf()),
            i[t].since <= n && n <= i[t].until)
          )
            return i[t].narrow;
          if (i[t].until <= n && n <= i[t].since) return i[t].narrow;
        }
        return "";
      }),
      (wn.eraAbbr = function () {
        var t,
          e,
          n,
          i = this.localeData().eras();
        for (t = 0, e = i.length; t < e; ++t) {
          if (
            ((n = this.clone().startOf("day").valueOf()),
            i[t].since <= n && n <= i[t].until)
          )
            return i[t].abbr;
          if (i[t].until <= n && n <= i[t].since) return i[t].abbr;
        }
        return "";
      }),
      (wn.eraYear = function () {
        var t,
          e,
          i,
          o,
          s = this.localeData().eras();
        for (t = 0, e = s.length; t < e; ++t)
          if (
            ((i = s[t].since <= s[t].until ? 1 : -1),
            (o = this.clone().startOf("day").valueOf()),
            (s[t].since <= o && o <= s[t].until) ||
              (s[t].until <= o && o <= s[t].since))
          )
            return (this.year() - n(s[t].since).year()) * i + s[t].offset;
        return this.year();
      }),
      (wn.year = yt),
      (wn.isLeapYear = function () {
        return mt(this.year());
      }),
      (wn.weekYear = function (t) {
        return dn.call(
          this,
          t,
          this.week(),
          this.weekday() + this.localeData()._week.dow,
          this.localeData()._week.dow,
          this.localeData()._week.doy
        );
      }),
      (wn.isoWeekYear = function (t) {
        return dn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
      }),
      (wn.quarter = wn.quarters =
        function (t) {
          return null == t
            ? Math.ceil((this.month() + 1) / 3)
            : this.month(3 * (t - 1) + (this.month() % 3));
        }),
      (wn.month = Et),
      (wn.daysInMonth = function () {
        return St(this.year(), this.month());
      }),
      (wn.week = wn.weeks =
        function (t) {
          var e = this.localeData().week(this);
          return null == t ? e : this.add(7 * (t - e), "d");
        }),
      (wn.isoWeek = wn.isoWeeks =
        function (t) {
          var e = Ht(this, 1, 4).week;
          return null == t ? e : this.add(7 * (t - e), "d");
        }),
      (wn.weeksInYear = function () {
        var t = this.localeData()._week;
        return It(this.year(), t.dow, t.doy);
      }),
      (wn.weeksInWeekYear = function () {
        var t = this.localeData()._week;
        return It(this.weekYear(), t.dow, t.doy);
      }),
      (wn.isoWeeksInYear = function () {
        return It(this.year(), 1, 4);
      }),
      (wn.isoWeeksInISOWeekYear = function () {
        return It(this.isoWeekYear(), 1, 4);
      }),
      (wn.date = fn),
      (wn.day = wn.days =
        function (t) {
          if (!this.isValid()) return null != t ? this : NaN;
          var e = bt(this, "Day");
          return null != t
            ? ((t = (function (t, e) {
                return "string" != typeof t
                  ? t
                  : isNaN(t)
                  ? "number" == typeof (t = e.weekdaysParse(t))
                    ? t
                    : null
                  : parseInt(t, 10);
              })(t, this.localeData())),
              this.add(t - e, "d"))
            : e;
        }),
      (wn.weekday = function (t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d");
      }),
      (wn.isoWeekday = function (t) {
        if (!this.isValid()) return null != t ? this : NaN;
        if (null != t) {
          var e = (function (t, e) {
            return "string" == typeof t
              ? e.weekdaysParse(t) % 7 || 7
              : isNaN(t)
              ? null
              : t;
          })(t, this.localeData());
          return this.day(this.day() % 7 ? e : e - 7);
        }
        return this.day() || 7;
      }),
      (wn.dayOfYear = function (t) {
        var e =
          Math.round(
            (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
          ) + 1;
        return null == t ? e : this.add(t - e, "d");
      }),
      (wn.hour = wn.hours = Zt),
      (wn.minute = wn.minutes = pn),
      (wn.second = wn.seconds = vn),
      (wn.millisecond = wn.milliseconds = gn),
      (wn.utcOffset = function (t, e, i) {
        var o,
          s = this._offset || 0;
        if (!this.isValid()) return null != t ? this : NaN;
        if (null != t) {
          if ("string" == typeof t) {
            if (null === (t = Ye(nt, t))) return this;
          } else Math.abs(t) < 16 && !i && (t *= 60);
          return (
            !this._isUTC && e && (o = He(this)),
            (this._offset = t),
            (this._isUTC = !0),
            null != o && this.add(o, "m"),
            s !== t &&
              (!e || this._changeInProgress
                ? Ue(this, We(t - s, "m"), 1, !1)
                : this._changeInProgress ||
                  ((this._changeInProgress = !0),
                  n.updateOffset(this, !0),
                  (this._changeInProgress = null))),
            this
          );
        }
        return this._isUTC ? s : He(this);
      }),
      (wn.utc = function (t) {
        return this.utcOffset(0, t);
      }),
      (wn.local = function (t) {
        return (
          this._isUTC &&
            (this.utcOffset(0, t),
            (this._isUTC = !1),
            t && this.subtract(He(this), "m")),
          this
        );
      }),
      (wn.parseZone = function () {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
          var t = Ye(et, this._i);
          null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
        }
        return this;
      }),
      (wn.hasAlignedHourOffset = function (t) {
        return (
          !!this.isValid() &&
          ((t = t ? ke(t).utcOffset() : 0), (this.utcOffset() - t) % 60 == 0)
        );
      }),
      (wn.isDST = function () {
        return (
          this.utcOffset() > this.clone().month(0).utcOffset() ||
          this.utcOffset() > this.clone().month(5).utcOffset()
        );
      }),
      (wn.isLocal = function () {
        return !!this.isValid() && !this._isUTC;
      }),
      (wn.isUtcOffset = function () {
        return !!this.isValid() && this._isUTC;
      }),
      (wn.isUtc = Ie),
      (wn.isUTC = Ie),
      (wn.zoneAbbr = function () {
        return this._isUTC ? "UTC" : "";
      }),
      (wn.zoneName = function () {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }),
      (wn.dates = S("dates accessor is deprecated. Use date instead.", fn)),
      (wn.months = S("months accessor is deprecated. Use month instead", Et)),
      (wn.years = S("years accessor is deprecated. Use year instead", yt)),
      (wn.zone = S(
        "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
        function (t, e) {
          return null != t
            ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this)
            : -this.utcOffset();
        }
      )),
      (wn.isDSTShifted = S(
        "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
        function () {
          if (!a(this._isDSTShifted)) return this._isDSTShifted;
          var t,
            e = {};
          return (
            y(e, this),
            (e = Se(e))._a
              ? ((t = e._isUTC ? h(e._a) : ke(e._a)),
                (this._isDSTShifted =
                  this.isValid() &&
                  (function (t, e, n) {
                    var i,
                      o = Math.min(t.length, e.length),
                      s = Math.abs(t.length - e.length),
                      r = 0;
                    for (i = 0; i < o; i++)
                      ((n && t[i] !== e[i]) || (!n && ct(t[i]) !== ct(e[i]))) &&
                        r++;
                    return r + s;
                  })(e._a, t.toArray()) > 0))
              : (this._isDSTShifted = !1),
            this._isDSTShifted
          );
        }
      ));
    var xn = C.prototype;
    function Sn(t, e, n, i) {
      var o = re(),
        s = h().set(i, e);
      return o[n](s, t);
    }
    function Tn(t, e, n) {
      if ((l(t) && ((e = t), (t = void 0)), (t = t || ""), null != e))
        return Sn(t, e, n, "month");
      var i,
        o = [];
      for (i = 0; i < 12; i++) o[i] = Sn(t, i, n, "month");
      return o;
    }
    function kn(t, e, n, i) {
      "boolean" == typeof t
        ? (l(e) && ((n = e), (e = void 0)), (e = e || ""))
        : ((n = e = t),
          (t = !1),
          l(e) && ((n = e), (e = void 0)),
          (e = e || ""));
      var o,
        s = re(),
        r = t ? s._week.dow : 0,
        a = [];
      if (null != n) return Sn(e, (n + r) % 7, i, "day");
      for (o = 0; o < 7; o++) a[o] = Sn(e, (o + r) % 7, i, "day");
      return a;
    }
    (xn.calendar = function (t, e, n) {
      var i = this._calendar[t] || this._calendar.sameElse;
      return M(i) ? i.call(e, n) : i;
    }),
      (xn.longDateFormat = function (t) {
        var e = this._longDateFormat[t],
          n = this._longDateFormat[t.toUpperCase()];
        return e || !n
          ? e
          : ((this._longDateFormat[t] = n
              .match(E)
              .map(function (t) {
                return "MMMM" === t || "MM" === t || "DD" === t || "dddd" === t
                  ? t.slice(1)
                  : t;
              })
              .join("")),
            this._longDateFormat[t]);
      }),
      (xn.invalidDate = function () {
        return this._invalidDate;
      }),
      (xn.ordinal = function (t) {
        return this._ordinal.replace("%d", t);
      }),
      (xn.preparse = bn),
      (xn.postformat = bn),
      (xn.relativeTime = function (t, e, n, i) {
        var o = this._relativeTime[n];
        return M(o) ? o(t, e, n, i) : o.replace(/%d/i, t);
      }),
      (xn.pastFuture = function (t, e) {
        var n = this._relativeTime[t > 0 ? "future" : "past"];
        return M(n) ? n(e) : n.replace(/%s/i, e);
      }),
      (xn.set = function (t) {
        var e, n;
        for (n in t)
          s(t, n) && (M((e = t[n])) ? (this[n] = e) : (this["_" + n] = e));
        (this._config = t),
          (this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
              "|" +
              /\d{1,2}/.source
          ));
      }),
      (xn.eras = function (t, e) {
        var i,
          o,
          s,
          r = this._eras || re("en")._eras;
        for (i = 0, o = r.length; i < o; ++i) {
          if ("string" == typeof r[i].since)
            (s = n(r[i].since).startOf("day")), (r[i].since = s.valueOf());
          switch (typeof r[i].until) {
            case "undefined":
              r[i].until = 1 / 0;
              break;
            case "string":
              (s = n(r[i].until).startOf("day").valueOf()),
                (r[i].until = s.valueOf());
          }
        }
        return r;
      }),
      (xn.erasParse = function (t, e, n) {
        var i,
          o,
          s,
          r,
          a,
          l = this.eras();
        for (t = t.toUpperCase(), i = 0, o = l.length; i < o; ++i)
          if (
            ((s = l[i].name.toUpperCase()),
            (r = l[i].abbr.toUpperCase()),
            (a = l[i].narrow.toUpperCase()),
            n)
          )
            switch (e) {
              case "N":
              case "NN":
              case "NNN":
                if (r === t) return l[i];
                break;
              case "NNNN":
                if (s === t) return l[i];
                break;
              case "NNNNN":
                if (a === t) return l[i];
            }
          else if ([s, r, a].indexOf(t) >= 0) return l[i];
      }),
      (xn.erasConvertYear = function (t, e) {
        var i = t.since <= t.until ? 1 : -1;
        return void 0 === e
          ? n(t.since).year()
          : n(t.since).year() + (e - t.offset) * i;
      }),
      (xn.erasAbbrRegex = function (t) {
        return (
          s(this, "_erasAbbrRegex") || un.call(this),
          t ? this._erasAbbrRegex : this._erasRegex
        );
      }),
      (xn.erasNameRegex = function (t) {
        return (
          s(this, "_erasNameRegex") || un.call(this),
          t ? this._erasNameRegex : this._erasRegex
        );
      }),
      (xn.erasNarrowRegex = function (t) {
        return (
          s(this, "_erasNarrowRegex") || un.call(this),
          t ? this._erasNarrowRegex : this._erasRegex
        );
      }),
      (xn.months = function (t, e) {
        return t
          ? i(this._months)
            ? this._months[t.month()]
            : this._months[
                (this._months.isFormat || _t).test(e) ? "format" : "standalone"
              ][t.month()]
          : i(this._months)
          ? this._months
          : this._months.standalone;
      }),
      (xn.monthsShort = function (t, e) {
        return t
          ? i(this._monthsShort)
            ? this._monthsShort[t.month()]
            : this._monthsShort[_t.test(e) ? "format" : "standalone"][t.month()]
          : i(this._monthsShort)
          ? this._monthsShort
          : this._monthsShort.standalone;
      }),
      (xn.monthsParse = function (t, e, n) {
        var i, o, s;
        if (this._monthsParseExact) return Ct.call(this, t, e, n);
        for (
          this._monthsParse ||
            ((this._monthsParse = []),
            (this._longMonthsParse = []),
            (this._shortMonthsParse = [])),
            i = 0;
          i < 12;
          i++
        ) {
          if (
            ((o = h([2e3, i])),
            n &&
              !this._longMonthsParse[i] &&
              ((this._longMonthsParse[i] = new RegExp(
                "^" + this.months(o, "").replace(".", "") + "$",
                "i"
              )),
              (this._shortMonthsParse[i] = new RegExp(
                "^" + this.monthsShort(o, "").replace(".", "") + "$",
                "i"
              ))),
            n ||
              this._monthsParse[i] ||
              ((s = "^" + this.months(o, "") + "|^" + this.monthsShort(o, "")),
              (this._monthsParse[i] = new RegExp(s.replace(".", ""), "i"))),
            n && "MMMM" === e && this._longMonthsParse[i].test(t))
          )
            return i;
          if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
          if (!n && this._monthsParse[i].test(t)) return i;
        }
      }),
      (xn.monthsRegex = function (t) {
        return this._monthsParseExact
          ? (s(this, "_monthsRegex") || Ot.call(this),
            t ? this._monthsStrictRegex : this._monthsRegex)
          : (s(this, "_monthsRegex") || (this._monthsRegex = $t),
            this._monthsStrictRegex && t
              ? this._monthsStrictRegex
              : this._monthsRegex);
      }),
      (xn.monthsShortRegex = function (t) {
        return this._monthsParseExact
          ? (s(this, "_monthsRegex") || Ot.call(this),
            t ? this._monthsShortStrictRegex : this._monthsShortRegex)
          : (s(this, "_monthsShortRegex") || (this._monthsShortRegex = Mt),
            this._monthsShortStrictRegex && t
              ? this._monthsShortStrictRegex
              : this._monthsShortRegex);
      }),
      (xn.week = function (t) {
        return Ht(t, this._week.dow, this._week.doy).week;
      }),
      (xn.firstDayOfYear = function () {
        return this._week.doy;
      }),
      (xn.firstDayOfWeek = function () {
        return this._week.dow;
      }),
      (xn.weekdays = function (t, e) {
        var n = i(this._weekdays)
          ? this._weekdays
          : this._weekdays[
              t && !0 !== t && this._weekdays.isFormat.test(e)
                ? "format"
                : "standalone"
            ];
        return !0 === t ? Pt(n, this._week.dow) : t ? n[t.day()] : n;
      }),
      (xn.weekdaysMin = function (t) {
        return !0 === t
          ? Pt(this._weekdaysMin, this._week.dow)
          : t
          ? this._weekdaysMin[t.day()]
          : this._weekdaysMin;
      }),
      (xn.weekdaysShort = function (t) {
        return !0 === t
          ? Pt(this._weekdaysShort, this._week.dow)
          : t
          ? this._weekdaysShort[t.day()]
          : this._weekdaysShort;
      }),
      (xn.weekdaysParse = function (t, e, n) {
        var i, o, s;
        if (this._weekdaysParseExact) return Vt.call(this, t, e, n);
        for (
          this._weekdaysParse ||
            ((this._weekdaysParse = []),
            (this._minWeekdaysParse = []),
            (this._shortWeekdaysParse = []),
            (this._fullWeekdaysParse = [])),
            i = 0;
          i < 7;
          i++
        ) {
          if (
            ((o = h([2e3, 1]).day(i)),
            n &&
              !this._fullWeekdaysParse[i] &&
              ((this._fullWeekdaysParse[i] = new RegExp(
                "^" + this.weekdays(o, "").replace(".", "\\.?") + "$",
                "i"
              )),
              (this._shortWeekdaysParse[i] = new RegExp(
                "^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$",
                "i"
              )),
              (this._minWeekdaysParse[i] = new RegExp(
                "^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$",
                "i"
              ))),
            this._weekdaysParse[i] ||
              ((s =
                "^" +
                this.weekdays(o, "") +
                "|^" +
                this.weekdaysShort(o, "") +
                "|^" +
                this.weekdaysMin(o, "")),
              (this._weekdaysParse[i] = new RegExp(s.replace(".", ""), "i"))),
            n && "dddd" === e && this._fullWeekdaysParse[i].test(t))
          )
            return i;
          if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
          if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
          if (!n && this._weekdaysParse[i].test(t)) return i;
        }
      }),
      (xn.weekdaysRegex = function (t) {
        return this._weekdaysParseExact
          ? (s(this, "_weekdaysRegex") || zt.call(this),
            t ? this._weekdaysStrictRegex : this._weekdaysRegex)
          : (s(this, "_weekdaysRegex") || (this._weekdaysRegex = Rt),
            this._weekdaysStrictRegex && t
              ? this._weekdaysStrictRegex
              : this._weekdaysRegex);
      }),
      (xn.weekdaysShortRegex = function (t) {
        return this._weekdaysParseExact
          ? (s(this, "_weekdaysRegex") || zt.call(this),
            t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
          : (s(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = qt),
            this._weekdaysShortStrictRegex && t
              ? this._weekdaysShortStrictRegex
              : this._weekdaysShortRegex);
      }),
      (xn.weekdaysMinRegex = function (t) {
        return this._weekdaysParseExact
          ? (s(this, "_weekdaysRegex") || zt.call(this),
            t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
          : (s(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ut),
            this._weekdaysMinStrictRegex && t
              ? this._weekdaysMinStrictRegex
              : this._weekdaysMinRegex);
      }),
      (xn.isPM = function (t) {
        return "p" === (t + "").toLowerCase().charAt(0);
      }),
      (xn.meridiem = function (t, e, n) {
        return t > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
      }),
      oe("en", {
        eras: [
          {
            since: "0001-01-01",
            until: 1 / 0,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD",
          },
          {
            since: "0000-12-31",
            until: -1 / 0,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC",
          },
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (t) {
          var e = t % 10;
          return (
            t +
            (1 === ct((t % 100) / 10)
              ? "th"
              : 1 === e
              ? "st"
              : 2 === e
              ? "nd"
              : 3 === e
              ? "rd"
              : "th")
          );
        },
      }),
      (n.lang = S("moment.lang is deprecated. Use moment.locale instead.", oe)),
      (n.langData = S(
        "moment.langData is deprecated. Use moment.localeData instead.",
        re
      ));
    var _n = Math.abs;
    function Mn(t, e, n, i) {
      var o = We(e, n);
      return (
        (t._milliseconds += i * o._milliseconds),
        (t._days += i * o._days),
        (t._months += i * o._months),
        t._bubble()
      );
    }
    function $n(t) {
      return t < 0 ? Math.floor(t) : Math.ceil(t);
    }
    function Cn(t) {
      return (4800 * t) / 146097;
    }
    function Dn(t) {
      return (146097 * t) / 4800;
    }
    function En(t) {
      return function () {
        return this.as(t);
      };
    }
    var On = En("ms"),
      Nn = En("s"),
      An = En("m"),
      Yn = En("h"),
      jn = En("d"),
      Hn = En("w"),
      In = En("M"),
      Pn = En("Q"),
      Ln = En("y"),
      Wn = On;
    function Fn(t) {
      return function () {
        return this.isValid() ? this._data[t] : NaN;
      };
    }
    var Rn = Fn("milliseconds"),
      qn = Fn("seconds"),
      Un = Fn("minutes"),
      Vn = Fn("hours"),
      zn = Fn("days"),
      Bn = Fn("months"),
      Gn = Fn("years");
    var Qn = Math.round,
      Zn = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
    function Xn(t, e, n, i, o) {
      return o.relativeTime(e || 1, !!n, t, i);
    }
    var Jn = Math.abs;
    function Kn(t) {
      return (t > 0) - (t < 0) || +t;
    }
    function ti() {
      if (!this.isValid()) return this.localeData().invalidDate();
      var t,
        e,
        n,
        i,
        o,
        s,
        r,
        a,
        l = Jn(this._milliseconds) / 1e3,
        u = Jn(this._days),
        c = Jn(this._months),
        d = this.asSeconds();
      return d
        ? ((t = ut(l / 60)),
          (e = ut(t / 60)),
          (l %= 60),
          (t %= 60),
          (n = ut(c / 12)),
          (c %= 12),
          (i = l ? l.toFixed(3).replace(/\.?0+$/, "") : ""),
          (o = d < 0 ? "-" : ""),
          (s = Kn(this._months) !== Kn(d) ? "-" : ""),
          (r = Kn(this._days) !== Kn(d) ? "-" : ""),
          (a = Kn(this._milliseconds) !== Kn(d) ? "-" : ""),
          o +
            "P" +
            (n ? s + n + "Y" : "") +
            (c ? s + c + "M" : "") +
            (u ? r + u + "D" : "") +
            (e || t || l ? "T" : "") +
            (e ? a + e + "H" : "") +
            (t ? a + t + "M" : "") +
            (l ? a + i + "S" : ""))
        : "P0D";
    }
    var ei = De.prototype;
    return (
      (ei.isValid = function () {
        return this._isValid;
      }),
      (ei.abs = function () {
        var t = this._data;
        return (
          (this._milliseconds = _n(this._milliseconds)),
          (this._days = _n(this._days)),
          (this._months = _n(this._months)),
          (t.milliseconds = _n(t.milliseconds)),
          (t.seconds = _n(t.seconds)),
          (t.minutes = _n(t.minutes)),
          (t.hours = _n(t.hours)),
          (t.months = _n(t.months)),
          (t.years = _n(t.years)),
          this
        );
      }),
      (ei.add = function (t, e) {
        return Mn(this, t, e, 1);
      }),
      (ei.subtract = function (t, e) {
        return Mn(this, t, e, -1);
      }),
      (ei.as = function (t) {
        if (!this.isValid()) return NaN;
        var e,
          n,
          i = this._milliseconds;
        if ("month" === (t = P(t)) || "quarter" === t || "year" === t)
          switch (
            ((e = this._days + i / 864e5), (n = this._months + Cn(e)), t)
          ) {
            case "month":
              return n;
            case "quarter":
              return n / 3;
            case "year":
              return n / 12;
          }
        else
          switch (((e = this._days + Math.round(Dn(this._months))), t)) {
            case "week":
              return e / 7 + i / 6048e5;
            case "day":
              return e + i / 864e5;
            case "hour":
              return 24 * e + i / 36e5;
            case "minute":
              return 1440 * e + i / 6e4;
            case "second":
              return 86400 * e + i / 1e3;
            case "millisecond":
              return Math.floor(864e5 * e) + i;
            default:
              throw new Error("Unknown unit " + t);
          }
      }),
      (ei.asMilliseconds = On),
      (ei.asSeconds = Nn),
      (ei.asMinutes = An),
      (ei.asHours = Yn),
      (ei.asDays = jn),
      (ei.asWeeks = Hn),
      (ei.asMonths = In),
      (ei.asQuarters = Pn),
      (ei.asYears = Ln),
      (ei.valueOf = Wn),
      (ei._bubble = function () {
        var t,
          e,
          n,
          i,
          o,
          s = this._milliseconds,
          r = this._days,
          a = this._months,
          l = this._data;
        return (
          (s >= 0 && r >= 0 && a >= 0) ||
            (s <= 0 && r <= 0 && a <= 0) ||
            ((s += 864e5 * $n(Dn(a) + r)), (r = 0), (a = 0)),
          (l.milliseconds = s % 1e3),
          (t = ut(s / 1e3)),
          (l.seconds = t % 60),
          (e = ut(t / 60)),
          (l.minutes = e % 60),
          (n = ut(e / 60)),
          (l.hours = n % 24),
          (r += ut(n / 24)),
          (a += o = ut(Cn(r))),
          (r -= $n(Dn(o))),
          (i = ut(a / 12)),
          (a %= 12),
          (l.days = r),
          (l.months = a),
          (l.years = i),
          this
        );
      }),
      (ei.clone = function () {
        return We(this);
      }),
      (ei.get = function (t) {
        return (t = P(t)), this.isValid() ? this[t + "s"]() : NaN;
      }),
      (ei.milliseconds = Rn),
      (ei.seconds = qn),
      (ei.minutes = Un),
      (ei.hours = Vn),
      (ei.days = zn),
      (ei.weeks = function () {
        return ut(this.days() / 7);
      }),
      (ei.months = Bn),
      (ei.years = Gn),
      (ei.humanize = function (t, e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var n,
          i,
          o = !1,
          s = Zn;
        return (
          "object" == typeof t && ((e = t), (t = !1)),
          "boolean" == typeof t && (o = t),
          "object" == typeof e &&
            ((s = Object.assign({}, Zn, e)),
            null != e.s && null == e.ss && (s.ss = e.s - 1)),
          (i = (function (t, e, n, i) {
            var o = We(t).abs(),
              s = Qn(o.as("s")),
              r = Qn(o.as("m")),
              a = Qn(o.as("h")),
              l = Qn(o.as("d")),
              u = Qn(o.as("M")),
              c = Qn(o.as("w")),
              d = Qn(o.as("y")),
              h =
                (s <= n.ss && ["s", s]) ||
                (s < n.s && ["ss", s]) ||
                (r <= 1 && ["m"]) ||
                (r < n.m && ["mm", r]) ||
                (a <= 1 && ["h"]) ||
                (a < n.h && ["hh", a]) ||
                (l <= 1 && ["d"]) ||
                (l < n.d && ["dd", l]);
            return (
              null != n.w &&
                (h = h || (c <= 1 && ["w"]) || (c < n.w && ["ww", c])),
              ((h = h ||
                (u <= 1 && ["M"]) ||
                (u < n.M && ["MM", u]) ||
                (d <= 1 && ["y"]) || ["yy", d])[2] = e),
              (h[3] = +t > 0),
              (h[4] = i),
              Xn.apply(null, h)
            );
          })(this, !o, s, (n = this.localeData()))),
          o && (i = n.pastFuture(+this, i)),
          n.postformat(i)
        );
      }),
      (ei.toISOString = ti),
      (ei.toString = ti),
      (ei.toJSON = ti),
      (ei.locale = Xe),
      (ei.localeData = Ke),
      (ei.toIsoString = S(
        "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
        ti
      )),
      (ei.lang = Je),
      Y("X", 0, 0, "unix"),
      Y("x", 0, 0, "valueOf"),
      rt("x", tt),
      rt("X", /[+-]?\d+(\.\d{1,3})?/),
      ht("X", function (t, e, n) {
        n._d = new Date(1e3 * parseFloat(t));
      }),
      ht("x", function (t, e, n) {
        n._d = new Date(ct(t));
      }),
      //! moment.js
      (n.version = "2.30.1"),
      (t = ke),
      (n.fn = wn),
      (n.min = function () {
        var t = [].slice.call(arguments, 0);
        return $e("isBefore", t);
      }),
      (n.max = function () {
        var t = [].slice.call(arguments, 0);
        return $e("isAfter", t);
      }),
      (n.now = function () {
        return Date.now ? Date.now() : +new Date();
      }),
      (n.utc = h),
      (n.unix = function (t) {
        return ke(1e3 * t);
      }),
      (n.months = function (t, e) {
        return Tn(t, e, "months");
      }),
      (n.isDate = u),
      (n.locale = oe),
      (n.invalid = m),
      (n.duration = We),
      (n.isMoment = b),
      (n.weekdays = function (t, e, n) {
        return kn(t, e, n, "weekdays");
      }),
      (n.parseZone = function () {
        return ke.apply(null, arguments).parseZone();
      }),
      (n.localeData = re),
      (n.isDuration = Ee),
      (n.monthsShort = function (t, e) {
        return Tn(t, e, "monthsShort");
      }),
      (n.weekdaysMin = function (t, e, n) {
        return kn(t, e, n, "weekdaysMin");
      }),
      (n.defineLocale = se),
      (n.updateLocale = function (t, e) {
        if (null != e) {
          var n,
            i,
            o = Jt;
          null != Kt[t] && null != Kt[t].parentLocale
            ? Kt[t].set($(Kt[t]._config, e))
            : (null != (i = ie(t)) && (o = i._config),
              (e = $(o, e)),
              null == i && (e.abbr = t),
              ((n = new C(e)).parentLocale = Kt[t]),
              (Kt[t] = n)),
            oe(t);
        } else
          null != Kt[t] &&
            (null != Kt[t].parentLocale
              ? ((Kt[t] = Kt[t].parentLocale), t === oe() && oe(t))
              : null != Kt[t] && delete Kt[t]);
        return Kt[t];
      }),
      (n.locales = function () {
        return T(Kt);
      }),
      (n.weekdaysShort = function (t, e, n) {
        return kn(t, e, n, "weekdaysShort");
      }),
      (n.normalizeUnits = P),
      (n.relativeTimeRounding = function (t) {
        return void 0 === t ? Qn : "function" == typeof t && ((Qn = t), !0);
      }),
      (n.relativeTimeThreshold = function (t, e) {
        return (
          void 0 !== Zn[t] &&
          (void 0 === e
            ? Zn[t]
            : ((Zn[t] = e), "s" === t && (Zn.ss = e - 1), !0))
        );
      }),
      (n.calendarFormat = function (t, e) {
        var n = t.diff(e, "days", !0);
        return n < -6
          ? "sameElse"
          : n < -1
          ? "lastWeek"
          : n < 0
          ? "lastDay"
          : n < 1
          ? "sameDay"
          : n < 2
          ? "nextDay"
          : n < 7
          ? "nextWeek"
          : "sameElse";
      }),
      (n.prototype = wn),
      (n.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM",
      }),
      n
    );
  });
//# sourceMappingURL=frontend-bundle.js.map
