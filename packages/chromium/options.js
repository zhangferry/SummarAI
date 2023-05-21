(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/preact/dist/preact.module.js
  function h(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function p(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function y(l3, u3, i3) {
    var t3, o4, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o4 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return d(l3, f3, t3, o4, null);
  }
  function d(n2, i3, t3, o4, r3) {
    var f3 = { type: n2, props: i3, key: t3, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function _() {
    return { current: null };
  }
  function k(n2) {
    return n2.children;
  }
  function b(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function g(n2, l3) {
    if (null == l3)
      return n2.__ ? g(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? g(n2) : null;
  }
  function m(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return m(n2);
    }
  }
  function w(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
  }
  function x() {
    var n2, l3, u3, i3, o4, r3, e3, c3;
    for (t.sort(f); n2 = t.shift(); )
      n2.__d && (l3 = t.length, i3 = void 0, o4 = void 0, e3 = (r3 = (u3 = n2).__v).__e, (c3 = u3.__P) && (i3 = [], (o4 = h({}, r3)).__v = r3.__v + 1, L(c3, r3, o4, u3.__n, void 0 !== c3.ownerSVGElement, null != r3.__h ? [e3] : null, i3, null == e3 ? g(r3) : e3, r3.__h), M(i3, r3), r3.__e != e3 && m(r3)), t.length > l3 && t.sort(f));
    x.__r = 0;
  }
  function P(n2, l3, u3, i3, t3, o4, r3, f3, e3, a3) {
    var h3, p3, y3, _4, b3, m3, w4, x4 = i3 && i3.__k || s, P4 = x4.length;
    for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
      if (null != (_4 = u3.__k[h3] = null == (_4 = l3[h3]) || "boolean" == typeof _4 || "function" == typeof _4 ? null : "string" == typeof _4 || "number" == typeof _4 || "bigint" == typeof _4 ? d(null, _4, null, null, _4) : v(_4) ? d(k, { children: _4 }, null, null, null) : _4.__b > 0 ? d(_4.type, _4.props, _4.key, _4.ref ? _4.ref : null, _4.__v) : _4)) {
        if (_4.__ = u3, _4.__b = u3.__b + 1, null === (y3 = x4[h3]) || y3 && _4.key == y3.key && _4.type === y3.type)
          x4[h3] = void 0;
        else
          for (p3 = 0; p3 < P4; p3++) {
            if ((y3 = x4[p3]) && _4.key == y3.key && _4.type === y3.type) {
              x4[p3] = void 0;
              break;
            }
            y3 = null;
          }
        L(n2, _4, y3 = y3 || c, t3, o4, r3, f3, e3, a3), b3 = _4.__e, (p3 = _4.ref) && y3.ref != p3 && (w4 || (w4 = []), y3.ref && w4.push(y3.ref, null, _4), w4.push(p3, _4.__c || b3, _4)), null != b3 ? (null == m3 && (m3 = b3), "function" == typeof _4.type && _4.__k === y3.__k ? _4.__d = e3 = C(_4, e3, n2) : e3 = $(n2, _4, y3, x4, b3, e3), "function" == typeof u3.type && (u3.__d = e3)) : e3 && y3.__e == e3 && e3.parentNode != n2 && (e3 = g(y3));
      }
    for (u3.__e = m3, h3 = P4; h3--; )
      null != x4[h3] && ("function" == typeof u3.type && null != x4[h3].__e && x4[h3].__e == u3.__d && (u3.__d = A(i3).nextSibling), q(x4[h3], x4[h3]));
    if (w4)
      for (h3 = 0; h3 < w4.length; h3++)
        O(w4[h3], w4[++h3], w4[++h3]);
  }
  function C(n2, l3, u3) {
    for (var i3, t3 = n2.__k, o4 = 0; t3 && o4 < t3.length; o4++)
      (i3 = t3[o4]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? C(i3, l3, u3) : $(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function S(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (v(n2) ? n2.some(function(n3) {
      S(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function $(n2, l3, u3, i3, t3, o4) {
    var r3, f3, e3;
    if (void 0 !== l3.__d)
      r3 = l3.__d, l3.__d = void 0;
    else if (null == u3 || t3 != o4 || null == t3.parentNode)
      n:
        if (null == o4 || o4.parentNode !== n2)
          n2.appendChild(t3), r3 = null;
        else {
          for (f3 = o4, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 1)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, o4), r3 = o4;
        }
    return void 0 !== r3 ? r3 : t3.nextSibling;
  }
  function A(n2) {
    var l3, u3, i3;
    if (null == n2.type || "string" == typeof n2.type)
      return n2.__e;
    if (n2.__k) {
      for (l3 = n2.__k.length - 1; l3 >= 0; l3--)
        if ((u3 = n2.__k[l3]) && (i3 = A(u3)))
          return i3;
    }
    return null;
  }
  function H(n2, l3, u3, i3, t3) {
    var o4;
    for (o4 in u3)
      "children" === o4 || "key" === o4 || o4 in l3 || T(n2, o4, null, u3[o4], i3);
    for (o4 in l3)
      t3 && "function" != typeof l3[o4] || "children" === o4 || "key" === o4 || "value" === o4 || "checked" === o4 || u3[o4] === l3[o4] || T(n2, o4, l3[o4], u3[o4], i3);
  }
  function I(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
  }
  function T(n2, l3, u3, i3, t3) {
    var o4;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || I(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || I(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o4 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o4] = u3, u3 ? i3 || n2.addEventListener(l3, o4 ? z : j, o4) : n2.removeEventListener(l3, o4 ? z : j, o4);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (t3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && "rowSpan" !== l3 && "colSpan" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function j(n2) {
    return this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function z(n2) {
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function L(n2, u3, i3, t3, o4, r3, f3, e3, c3) {
    var s3, a3, p3, y3, d3, _4, g3, m3, w4, x4, C3, S3, $3, A4, H3, I3 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (s3 = l.__b) && s3(u3);
    try {
      n:
        if ("function" == typeof I3) {
          if (m3 = u3.props, w4 = (s3 = I3.contextType) && t3[s3.__c], x4 = s3 ? w4 ? w4.props.value : s3.__ : t3, i3.__c ? g3 = (a3 = u3.__c = i3.__c).__ = a3.__E : ("prototype" in I3 && I3.prototype.render ? u3.__c = a3 = new I3(m3, x4) : (u3.__c = a3 = new b(m3, x4), a3.constructor = I3, a3.render = B), w4 && w4.sub(a3), a3.props = m3, a3.state || (a3.state = {}), a3.context = x4, a3.__n = t3, p3 = a3.__d = true, a3.__h = [], a3._sb = []), null == a3.__s && (a3.__s = a3.state), null != I3.getDerivedStateFromProps && (a3.__s == a3.state && (a3.__s = h({}, a3.__s)), h(a3.__s, I3.getDerivedStateFromProps(m3, a3.__s))), y3 = a3.props, d3 = a3.state, a3.__v = u3, p3)
            null == I3.getDerivedStateFromProps && null != a3.componentWillMount && a3.componentWillMount(), null != a3.componentDidMount && a3.__h.push(a3.componentDidMount);
          else {
            if (null == I3.getDerivedStateFromProps && m3 !== y3 && null != a3.componentWillReceiveProps && a3.componentWillReceiveProps(m3, x4), !a3.__e && null != a3.shouldComponentUpdate && false === a3.shouldComponentUpdate(m3, a3.__s, x4) || u3.__v === i3.__v) {
              for (u3.__v !== i3.__v && (a3.props = m3, a3.state = a3.__s, a3.__d = false), a3.__e = false, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), C3 = 0; C3 < a3._sb.length; C3++)
                a3.__h.push(a3._sb[C3]);
              a3._sb = [], a3.__h.length && f3.push(a3);
              break n;
            }
            null != a3.componentWillUpdate && a3.componentWillUpdate(m3, a3.__s, x4), null != a3.componentDidUpdate && a3.__h.push(function() {
              a3.componentDidUpdate(y3, d3, _4);
            });
          }
          if (a3.context = x4, a3.props = m3, a3.__P = n2, S3 = l.__r, $3 = 0, "prototype" in I3 && I3.prototype.render) {
            for (a3.state = a3.__s, a3.__d = false, S3 && S3(u3), s3 = a3.render(a3.props, a3.state, a3.context), A4 = 0; A4 < a3._sb.length; A4++)
              a3.__h.push(a3._sb[A4]);
            a3._sb = [];
          } else
            do {
              a3.__d = false, S3 && S3(u3), s3 = a3.render(a3.props, a3.state, a3.context), a3.state = a3.__s;
            } while (a3.__d && ++$3 < 25);
          a3.state = a3.__s, null != a3.getChildContext && (t3 = h(h({}, t3), a3.getChildContext())), p3 || null == a3.getSnapshotBeforeUpdate || (_4 = a3.getSnapshotBeforeUpdate(y3, d3)), P(n2, v(H3 = null != s3 && s3.type === k && null == s3.key ? s3.props.children : s3) ? H3 : [H3], u3, i3, t3, o4, r3, f3, e3, c3), a3.base = u3.__e, u3.__h = null, a3.__h.length && f3.push(a3), g3 && (a3.__E = a3.__ = null), a3.__e = false;
        } else
          null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = N(i3.__e, u3, i3, t3, o4, r3, f3, c3);
      (s3 = l.diffed) && s3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function M(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function N(l3, u3, i3, t3, o4, r3, f3, e3) {
    var s3, a3, h3, y3 = i3.props, d3 = u3.props, _4 = u3.type, k4 = 0;
    if ("svg" === _4 && (o4 = true), null != r3) {
      for (; k4 < r3.length; k4++)
        if ((s3 = r3[k4]) && "setAttribute" in s3 == !!_4 && (_4 ? s3.localName === _4 : 3 === s3.nodeType)) {
          l3 = s3, r3[k4] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === _4)
        return document.createTextNode(d3);
      l3 = o4 ? document.createElementNS("http://www.w3.org/2000/svg", _4) : document.createElement(_4, d3.is && d3), r3 = null, e3 = false;
    }
    if (null === _4)
      y3 === d3 || e3 && l3.data === d3 || (l3.data = d3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), a3 = (y3 = i3.props || c).dangerouslySetInnerHTML, h3 = d3.dangerouslySetInnerHTML, !e3) {
        if (null != r3)
          for (y3 = {}, k4 = 0; k4 < l3.attributes.length; k4++)
            y3[l3.attributes[k4].name] = l3.attributes[k4].value;
        (h3 || a3) && (h3 && (a3 && h3.__html == a3.__html || h3.__html === l3.innerHTML) || (l3.innerHTML = h3 && h3.__html || ""));
      }
      if (H(l3, d3, y3, o4, e3), h3)
        u3.__k = [];
      else if (P(l3, v(k4 = u3.props.children) ? k4 : [k4], u3, i3, t3, o4 && "foreignObject" !== _4, r3, f3, r3 ? r3[0] : i3.__k && g(i3, 0), e3), null != r3)
        for (k4 = r3.length; k4--; )
          null != r3[k4] && p(r3[k4]);
      e3 || ("value" in d3 && void 0 !== (k4 = d3.value) && (k4 !== l3.value || "progress" === _4 && !k4 || "option" === _4 && k4 !== y3.value) && T(l3, "value", k4, y3.value, false), "checked" in d3 && void 0 !== (k4 = d3.checked) && k4 !== l3.checked && T(l3, "checked", k4, y3.checked, false));
    }
    return l3;
  }
  function O(n2, u3, i3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function q(n2, u3, i3) {
    var t3, o4;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || O(t3, null, u3)), null != (t3 = n2.__c)) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null, n2.__c = void 0;
    }
    if (t3 = n2.__k)
      for (o4 = 0; o4 < t3.length; o4++)
        t3[o4] && q(t3[o4], u3, i3 || "function" != typeof n2.type);
    i3 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function B(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function D(u3, i3, t3) {
    var o4, r3, f3;
    l.__ && l.__(u3, i3), r3 = (o4 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, f3 = [], L(i3, u3 = (!o4 && t3 || i3).__k = y(k, null, [u3]), r3 || c, c, void 0 !== i3.ownerSVGElement, !o4 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !o4 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o4), M(f3, u3);
  }
  function E(n2, l3) {
    D(n2, l3, E);
  }
  function F(l3, u3, i3) {
    var t3, o4, r3, f3, e3 = h({}, l3.props);
    for (r3 in l3.type && l3.type.defaultProps && (f3 = l3.type.defaultProps), u3)
      "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o4 = u3[r3] : e3[r3] = void 0 === u3[r3] && void 0 !== f3 ? f3[r3] : u3[r3];
    return arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), d(l3.type, e3, t3 || l3.key, o4 || l3.ref, null);
  }
  function G(n2, l3) {
    var u3 = { __c: l3 = "__cC" + e++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u4, i3;
      return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
        return i3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u4.some(function(n5) {
          n5.__e = true, w(n5);
        });
      }, this.sub = function(n4) {
        u4.push(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  var n, l, u, i, t, o, r, f, e, c, s, a, v;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      c = {};
      s = [];
      a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      v = Array.isArray;
      n = s.slice, l = { __e: function(n2, l3, u3, i3) {
        for (var t3, o4, r3; l3 = l3.__; )
          if ((t3 = l3.__c) && !t3.__)
            try {
              if ((o4 = t3.constructor) && null != o4.getDerivedStateFromError && (t3.setState(o4.getDerivedStateFromError(n2)), r3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), r3 = t3.__d), r3)
                return t3.__E = t3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, i = function(n2) {
        return null != n2 && void 0 === n2.constructor;
      }, b.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n2 && (n2 = n2(h({}, u3), this.props)), n2 && h(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), w(this));
      }, b.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
      }, b.prototype.render = k, t = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
        return n2.__v.__b - l3.__v.__b;
      }, x.__r = 0, e = 0;
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function d2(t3, u3) {
    l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
    var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
  }
  function h2(n2) {
    return o2 = 1, s2(B2, n2);
  }
  function s2(n2, u3, i3) {
    var o4 = d2(t2++, 2);
    if (o4.t = n2, !o4.__c && (o4.__ = [i3 ? i3(u3) : B2(void 0, u3), function(n3) {
      var t3 = o4.__N ? o4.__N[0] : o4.__[0], r3 = o4.t(t3, n3);
      t3 !== r3 && (o4.__N = [r3, o4.__[1]], o4.__c.setState({}));
    }], o4.__c = r2, !r2.u)) {
      var f3 = function(n3, t3, r3) {
        if (!o4.__c.__H)
          return true;
        var u4 = o4.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !c3 || c3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o4.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o4.__N || o4.__;
  }
  function p2(u3, i3) {
    var o4 = d2(t2++, 3);
    !l.__s && z2(o4.__H, i3) && (o4.__ = u3, o4.i = i3, r2.__H.__h.push(o4));
  }
  function y2(u3, i3) {
    var o4 = d2(t2++, 4);
    !l.__s && z2(o4.__H, i3) && (o4.__ = u3, o4.i = i3, r2.__h.push(o4));
  }
  function _2(n2) {
    return o2 = 5, F2(function() {
      return { current: n2 };
    }, []);
  }
  function A2(n2, t3, r3) {
    o2 = 6, y2(function() {
      return "function" == typeof n2 ? (n2(t3()), function() {
        return n2(null);
      }) : n2 ? (n2.current = t3(), function() {
        return n2.current = null;
      }) : void 0;
    }, null == r3 ? r3 : r3.concat(n2));
  }
  function F2(n2, r3) {
    var u3 = d2(t2++, 7);
    return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
  }
  function T2(n2, t3) {
    return o2 = 8, F2(function() {
      return n2;
    }, t3);
  }
  function q2(n2) {
    var u3 = r2.context[n2.__c], i3 = d2(t2++, 9);
    return i3.c = n2, u3 ? (null == i3.__ && (i3.__ = true, u3.sub(r2)), u3.props.value) : n2.__;
  }
  function x2(t3, r3) {
    l.useDebugValue && l.useDebugValue(r3 ? r3(t3) : t3);
  }
  function P2(n2) {
    var u3 = d2(t2++, 10), i3 = h2();
    return u3.__ = n2, r2.componentDidCatch || (r2.componentDidCatch = function(n3, t3) {
      u3.__ && u3.__(n3, t3), i3[1](n3);
    }), [i3[0], function() {
      i3[1](void 0);
    }];
  }
  function V() {
    var n2 = d2(t2++, 11);
    if (!n2.__) {
      for (var u3 = r2.__v; null !== u3 && !u3.__m && null !== u3.__; )
        u3 = u3.__;
      var i3 = u3.__m || (u3.__m = [0, 0]);
      n2.__ = "P" + i3[0] + "-" + i3[1]++;
    }
    return n2.__;
  }
  function b2() {
    for (var t3; t3 = f2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  function j2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    g2 && (t3 = requestAnimationFrame(r3));
  }
  function k2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function w2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function z2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function B2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, g2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = [];
      e2 = l.__b;
      a2 = l.__r;
      v2 = l.diffed;
      l2 = l.__c;
      m2 = l.unmount;
      l.__b = function(n2) {
        r2 = null, e2 && e2(n2);
      }, l.__r = function(n2) {
        a2 && a2(n2), t2 = 0;
        var i3 = (r2 = n2.__c).__H;
        i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
        })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [])), u2 = r2;
      }, l.diffed = function(t3) {
        v2 && v2(t3);
        var o4 = t3.__c;
        o4 && o4.__H && (o4.__H.__h.length && (1 !== f2.push(o4) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o4.__H.__.forEach(function(n2) {
          n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
        })), u2 = r2 = null;
      }, l.__c = function(t3, r3) {
        r3.some(function(t4) {
          try {
            t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
              return !n2.__ || w2(n2);
            });
          } catch (u3) {
            r3.some(function(n2) {
              n2.__h && (n2.__h = []);
            }), r3 = [], l.__e(u3, t4.__v);
          }
        }), l2 && l2(t3, r3);
      }, l.unmount = function(t3) {
        m2 && m2(t3);
        var r3, u3 = t3.__c;
        u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
          try {
            k2(n2);
          } catch (n3) {
            r3 = n3;
          }
        }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
      };
      g2 = "function" == typeof requestAnimationFrame;
    }
  });

  // node_modules/preact/compat/dist/compat.module.js
  function S2(n2, t3) {
    for (var e3 in t3)
      n2[e3] = t3[e3];
    return n2;
  }
  function C2(n2, t3) {
    for (var e3 in n2)
      if ("__source" !== e3 && !(e3 in t3))
        return true;
    for (var r3 in t3)
      if ("__source" !== r3 && n2[r3] !== t3[r3])
        return true;
    return false;
  }
  function E2(n2, t3) {
    return n2 === t3 && (0 !== n2 || 1 / n2 == 1 / t3) || n2 != n2 && t3 != t3;
  }
  function w3(n2) {
    this.props = n2;
  }
  function x3(n2, e3) {
    function r3(n3) {
      var t3 = this.props.ref, r4 = t3 == n3.ref;
      return !r4 && t3 && (t3.call ? t3(null) : t3.current = null), e3 ? !e3(this.props, n3) || !r4 : C2(this.props, n3);
    }
    function u3(e4) {
      return this.shouldComponentUpdate = r3, y(n2, e4);
    }
    return u3.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u3.prototype.isReactComponent = true, u3.__f = true, u3;
  }
  function k3(n2) {
    function t3(t4) {
      var e3 = S2({}, t4);
      return delete e3.ref, n2(e3, t4.ref || null);
    }
    return t3.$$typeof = N2, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
  }
  function L2(n2, t3, e3) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = S2({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return L2(n3, t3, e3);
    })), n2;
  }
  function P3(n2, t3, e3) {
    return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return P3(n3, t3, e3);
    }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e3)), n2;
  }
  function U() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function D2(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function F3(n2) {
    var e3, r3, u3;
    function o4(o5) {
      if (e3 || (e3 = n2()).then(function(n3) {
        r3 = n3.default || n3;
      }, function(n3) {
        u3 = n3;
      }), u3)
        throw u3;
      if (!r3)
        throw e3;
      return y(r3, o5);
    }
    return o4.displayName = "Lazy", o4.__f = true, o4;
  }
  function M2() {
    this.u = null, this.o = null;
  }
  function W(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function j3(n2) {
    var e3 = this, r3 = n2.i;
    e3.componentWillUnmount = function() {
      D(null, e3.l), e3.l = null, e3.i = null;
    }, e3.i && e3.i !== r3 && e3.componentWillUnmount(), n2.__v ? (e3.l || (e3.i = r3, e3.l = { nodeType: 1, parentNode: r3, childNodes: [], appendChild: function(n3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, insertBefore: function(n3, t3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, removeChild: function(n3) {
      this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.i.removeChild(n3);
    } }), D(y(W, { context: e3.context }, n2.__v), e3.l)) : e3.l && e3.componentWillUnmount();
  }
  function z3(n2, e3) {
    var r3 = y(j3, { __v: n2, i: e3 });
    return r3.containerInfo = e3, r3;
  }
  function G2(n2, t3, e3) {
    return null == t3.__k && (t3.textContent = ""), D(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
  }
  function J(n2, t3, e3) {
    return E(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
  }
  function Q() {
  }
  function X() {
    return this.cancelBubble;
  }
  function nn() {
    return this.defaultPrevented;
  }
  function fn(n2) {
    return y.bind(null, n2);
  }
  function an(n2) {
    return !!n2 && n2.$$typeof === B3;
  }
  function sn(n2) {
    return an(n2) ? F.apply(null, arguments) : n2;
  }
  function hn(n2) {
    return !!n2.__k && (D(null, n2), true);
  }
  function vn(n2) {
    return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
  }
  function yn(n2) {
    n2();
  }
  function _n(n2) {
    return n2;
  }
  function bn() {
    return [false, yn];
  }
  function Sn(n2, t3) {
    var e3 = t3(), r3 = h2({ p: { __: e3, m: t3 } }), u3 = r3[0].p, o4 = r3[1];
    return y2(function() {
      u3.__ = e3, u3.m = t3, E2(u3.__, t3()) || o4({ p: u3 });
    }, [n2, e3, t3]), p2(function() {
      return E2(u3.__, u3.m()) || o4({ p: u3 }), n2(function() {
        E2(u3.__, u3.m()) || o4({ p: u3 });
      });
    }, [n2]), e3;
  }
  var R, N2, A3, O2, T3, I2, V2, B3, H2, Z, Y, $2, q3, K, tn, en, rn, un, on, ln, cn, dn, pn, mn, gn, Cn;
  var init_compat_module = __esm({
    "node_modules/preact/compat/dist/compat.module.js"() {
      init_preact_module();
      init_preact_module();
      init_hooks_module();
      init_hooks_module();
      (w3.prototype = new b()).isPureReactComponent = true, w3.prototype.shouldComponentUpdate = function(n2, t3) {
        return C2(this.props, n2) || C2(this.state, t3);
      };
      R = l.__b;
      l.__b = function(n2) {
        n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R && R(n2);
      };
      N2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      A3 = function(n2, t3) {
        return null == n2 ? null : S(S(n2).map(t3));
      };
      O2 = { map: A3, forEach: A3, count: function(n2) {
        return n2 ? S(n2).length : 0;
      }, only: function(n2) {
        var t3 = S(n2);
        if (1 !== t3.length)
          throw "Children.only";
        return t3[0];
      }, toArray: S };
      T3 = l.__e;
      l.__e = function(n2, t3, e3, r3) {
        if (n2.then) {
          for (var u3, o4 = t3; o4 = o4.__; )
            if ((u3 = o4.__c) && u3.__c)
              return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
        }
        T3(n2, t3, e3, r3);
      };
      I2 = l.unmount;
      l.unmount = function(n2) {
        var t3 = n2.__c;
        t3 && t3.__R && t3.__R(), t3 && true === n2.__h && (n2.type = null), I2 && I2(n2);
      }, (U.prototype = new b()).__c = function(n2, t3) {
        var e3 = t3.__c, r3 = this;
        null == r3.t && (r3.t = []), r3.t.push(e3);
        var u3 = D2(r3.__v), o4 = false, i3 = function() {
          o4 || (o4 = true, e3.__R = null, u3 ? u3(l3) : l3());
        };
        e3.__R = i3;
        var l3 = function() {
          if (!--r3.__u) {
            if (r3.state.__a) {
              var n3 = r3.state.__a;
              r3.__v.__k[0] = P3(n3, n3.__c.__P, n3.__c.__O);
            }
            var t4;
            for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); )
              t4.forceUpdate();
          }
        }, c3 = true === t3.__h;
        r3.__u++ || c3 || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
      }, U.prototype.componentWillUnmount = function() {
        this.t = [];
      }, U.prototype.render = function(n2, e3) {
        if (this.__b) {
          if (this.__v.__k) {
            var r3 = document.createElement("div"), o4 = this.__v.__k[0].__c;
            this.__v.__k[0] = L2(this.__b, r3, o4.__O = o4.__P);
          }
          this.__b = null;
        }
        var i3 = e3.__a && y(k, null, n2.fallback);
        return i3 && (i3.__h = null), [y(k, null, e3.__a ? null : n2.children), i3];
      };
      V2 = function(n2, t3, e3) {
        if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
          for (e3 = n2.u; e3; ) {
            for (; e3.length > 3; )
              e3.pop()();
            if (e3[1] < e3[0])
              break;
            n2.u = e3 = e3[2];
          }
      };
      (M2.prototype = new b()).__a = function(n2) {
        var t3 = this, e3 = D2(t3.__v), r3 = t3.o.get(n2);
        return r3[0]++, function(u3) {
          var o4 = function() {
            t3.props.revealOrder ? (r3.push(u3), V2(t3, n2, r3)) : u3();
          };
          e3 ? e3(o4) : o4();
        };
      }, M2.prototype.render = function(n2) {
        this.u = null, this.o = /* @__PURE__ */ new Map();
        var t3 = S(n2.children);
        n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
        for (var e3 = t3.length; e3--; )
          this.o.set(t3[e3], this.u = [1, 0, this.u]);
        return n2.children;
      }, M2.prototype.componentDidUpdate = M2.prototype.componentDidMount = function() {
        var n2 = this;
        this.o.forEach(function(t3, e3) {
          V2(n2, e3, t3);
        });
      };
      B3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
      H2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
      Y = /[A-Z0-9]/g;
      $2 = "undefined" != typeof document;
      q3 = function(n2) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
      };
      b.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
        Object.defineProperty(b.prototype, t3, { configurable: true, get: function() {
          return this["UNSAFE_" + t3];
        }, set: function(n2) {
          Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
        } });
      });
      K = l.event;
      l.event = function(n2) {
        K && (n2 = K(n2));
        var t3 = n2.currentTarget, e3 = n2.type;
        return "input" !== e3 && "change" !== e3 || !t3.h || Promise.resolve().then(function() {
          return function(n3, t4) {
            null != t4.value && Promise.resolve().then(function() {
              return t4.value = t4.v;
            }), "change" === n3 && null != t4.checked && Promise.resolve().then(function() {
              return t4.checked = t4.v;
            });
          }(e3, t3);
        }), n2.persist = Q, n2.isPropagationStopped = X, n2.isDefaultPrevented = nn, n2.nativeEvent = n2;
      };
      en = { enumerable: false, configurable: true, get: function() {
        return this.class;
      } };
      rn = l.vnode;
      l.vnode = function(n2) {
        "string" == typeof n2.type && function(n3) {
          var t3 = n3.props, e3 = n3.type, u3 = {};
          for (var o4 in t3) {
            var i3 = t3[o4];
            if (!("value" === o4 && "defaultValue" in t3 && null == i3 || $2 && "children" === o4 && "noscript" === e3 || "class" === o4 || "className" === o4)) {
              var l3 = o4.toLowerCase();
              "defaultValue" === o4 && "value" in t3 && null == t3.value ? o4 = "value" : "download" === o4 && true === i3 ? i3 = "" : "ondoubleclick" === l3 ? o4 = "ondblclick" : "onchange" !== l3 || "input" !== e3 && "textarea" !== e3 || q3(t3.type) ? "onfocus" === l3 ? o4 = "onfocusin" : "onblur" === l3 ? o4 = "onfocusout" : Z.test(o4) ? o4 = l3 : -1 === e3.indexOf("-") && H2.test(o4) ? o4 = o4.replace(Y, "-$&").toLowerCase() : null === i3 && (i3 = void 0) : l3 = o4 = "oninput", "oninput" === l3 && u3[o4 = l3] && (o4 = "oninputCapture"), u3[o4] = i3;
            }
          }
          "select" == e3 && u3.multiple && Array.isArray(u3.value) && (u3.value = S(t3.children).forEach(function(n4) {
            n4.props.selected = -1 != u3.value.indexOf(n4.props.value);
          })), "select" == e3 && null != u3.defaultValue && (u3.value = S(t3.children).forEach(function(n4) {
            n4.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n4.props.value) : u3.defaultValue == n4.props.value;
          })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", en)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n3.props = u3;
        }(n2), n2.$$typeof = B3, rn && rn(n2);
      };
      un = l.__r;
      l.__r = function(n2) {
        un && un(n2), tn = n2.__c;
      };
      on = l.diffed;
      l.diffed = function(n2) {
        on && on(n2);
        var t3 = n2.type, e3 = n2.props, r3 = n2.__e, u3 = r3 && r3.h;
        null == r3 || "input" !== t3 && "textarea" !== t3 && "select" !== t3 || false === u3 || (u3 || e3.oninput || e3.onchange || e3.onChange) && (null != e3.value ? (r3.h = true, r3.v = e3.value) : null != e3.checked ? (r3.h = true, r3.v = e3.checked) : r3.h = false), null != r3 && "textarea" === n2.type && "value" in e3 && e3.value !== r3.value && (r3.value = null == e3.value ? "" : e3.value), tn = null;
      };
      ln = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
        return tn.__n[n2.__c].props.value;
      } } } };
      cn = "17.0.2";
      dn = function(n2, t3) {
        return n2(t3);
      };
      pn = function(n2, t3) {
        return n2(t3);
      };
      mn = k;
      gn = y2;
      Cn = { useState: h2, useId: V, useReducer: s2, useEffect: p2, useLayoutEffect: y2, useInsertionEffect: gn, useTransition: bn, useDeferredValue: _n, useSyncExternalStore: Sn, startTransition: yn, useRef: _2, useImperativeHandle: A2, useMemo: F2, useCallback: T2, useContext: q2, useDebugValue: x2, version: "17.0.2", Children: O2, render: G2, hydrate: J, unmountComponentAtNode: hn, createPortal: z3, createElement: y, createContext: G, createFactory: fn, cloneElement: sn, createRef: _, Fragment: k, isValidElement: an, findDOMNode: vn, Component: b, PureComponent: w3, memo: x3, forwardRef: k3, flushSync: pn, unstable_batchedUpdates: dn, StrictMode: mn, Suspense: U, SuspenseList: M2, lazy: F3, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ln };
    }
  });

  // node_modules/react/index.mjs
  var react_exports = {};
  __export(react_exports, {
    Children: () => O2,
    Component: () => b,
    Fragment: () => k,
    PureComponent: () => w3,
    StrictMode: () => mn,
    Suspense: () => U,
    SuspenseList: () => M2,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => ln,
    cloneElement: () => sn,
    createContext: () => G,
    createElement: () => y,
    createFactory: () => fn,
    createPortal: () => z3,
    createRef: () => _,
    default: () => Cn,
    findDOMNode: () => vn,
    flushSync: () => pn,
    forwardRef: () => k3,
    hydrate: () => J,
    isValidElement: () => an,
    lazy: () => F3,
    memo: () => x3,
    render: () => G2,
    startTransition: () => yn,
    unmountComponentAtNode: () => hn,
    unstable_batchedUpdates: () => dn,
    useCallback: () => T2,
    useContext: () => q2,
    useDebugValue: () => x2,
    useDeferredValue: () => _n,
    useEffect: () => p2,
    useErrorBoundary: () => P2,
    useId: () => V,
    useImperativeHandle: () => A2,
    useInsertionEffect: () => gn,
    useLayoutEffect: () => y2,
    useMemo: () => F2,
    useReducer: () => s2,
    useRef: () => _2,
    useState: () => h2,
    useSyncExternalStore: () => Sn,
    useTransition: () => bn,
    version: () => cn
  });
  var init_react = __esm({
    "node_modules/react/index.mjs"() {
      init_compat_module();
      init_compat_module();
    }
  });

  // node_modules/webextension-polyfill/dist/browser-polyfill.js
  var require_browser_polyfill = __commonJS({
    "node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports2, module2) {
      (function(global2, factory) {
        if (typeof define === "function" && define.amd) {
          define("webextension-polyfill", ["module"], factory);
        } else if (typeof exports2 !== "undefined") {
          factory(module2);
        } else {
          var mod = {
            exports: {}
          };
          factory(mod);
          global2.browser = mod.exports;
        }
      })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : exports2, function(module3) {
        "use strict";
        if (!globalThis.chrome?.runtime?.id) {
          throw new Error("This script should only be loaded in a browser extension.");
        }
        if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
          const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
          const wrapAPIs = (extensionAPIs) => {
            const apiMetadata = {
              "alarms": {
                "clear": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "clearAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "get": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "bookmarks": {
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getChildren": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getRecent": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getSubTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTree": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "browserAction": {
                "disable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "enable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "getBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "openPopup": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "browsingData": {
                "remove": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "removeCache": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCookies": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeDownloads": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFormData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeHistory": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeLocalStorage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePasswords": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePluginData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "settings": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "commands": {
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "contextMenus": {
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "cookies": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAllCookieStores": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "set": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "devtools": {
                "inspectedWindow": {
                  "eval": {
                    "minArgs": 1,
                    "maxArgs": 2,
                    "singleCallbackArg": false
                  }
                },
                "panels": {
                  "create": {
                    "minArgs": 3,
                    "maxArgs": 3,
                    "singleCallbackArg": true
                  },
                  "elements": {
                    "createSidebarPane": {
                      "minArgs": 1,
                      "maxArgs": 1
                    }
                  }
                }
              },
              "downloads": {
                "cancel": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "download": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "erase": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFileIcon": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "open": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "pause": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFile": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "resume": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "extension": {
                "isAllowedFileSchemeAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "isAllowedIncognitoAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "history": {
                "addUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "deleteRange": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getVisits": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "i18n": {
                "detectLanguage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAcceptLanguages": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "identity": {
                "launchWebAuthFlow": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "idle": {
                "queryState": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "management": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getSelf": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setEnabled": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "uninstallSelf": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "notifications": {
                "clear": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPermissionLevel": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "pageAction": {
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "hide": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "permissions": {
                "contains": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "request": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "runtime": {
                "getBackgroundPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPlatformInfo": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "openOptionsPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "requestUpdateCheck": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "sendMessage": {
                  "minArgs": 1,
                  "maxArgs": 3
                },
                "sendNativeMessage": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "setUninstallURL": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "sessions": {
                "getDevices": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getRecentlyClosed": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "restore": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "storage": {
                "local": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                },
                "managed": {
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  }
                },
                "sync": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                }
              },
              "tabs": {
                "captureVisibleTab": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "detectLanguage": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "discard": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "duplicate": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "executeScript": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getZoom": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getZoomSettings": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goBack": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goForward": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "highlight": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "insertCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "query": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "reload": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "sendMessage": {
                  "minArgs": 2,
                  "maxArgs": 3
                },
                "setZoom": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "setZoomSettings": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "update": {
                  "minArgs": 1,
                  "maxArgs": 2
                }
              },
              "topSites": {
                "get": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "webNavigation": {
                "getAllFrames": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFrame": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "webRequest": {
                "handlerBehaviorChanged": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "windows": {
                "create": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getLastFocused": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              }
            };
            if (Object.keys(apiMetadata).length === 0) {
              throw new Error("api-metadata.json has not been included in browser-polyfill");
            }
            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = void 0) {
                super(items);
                this.createItem = createItem;
              }
              get(key) {
                if (!this.has(key)) {
                  this.set(key, this.createItem(key));
                }
                return super.get(key);
              }
            }
            const isThenable = (value) => {
              return value && typeof value === "object" && typeof value.then === "function";
            };
            const makeCallback = (promise, metadata) => {
              return (...callbackArgs) => {
                if (extensionAPIs.runtime.lastError) {
                  promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                  promise.resolve(callbackArgs[0]);
                } else {
                  promise.resolve(callbackArgs);
                }
              };
            };
            const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
            const wrapAsyncFunction = (name, metadata) => {
              return function asyncFunctionWrapper(target, ...args) {
                if (args.length < metadata.minArgs) {
                  throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                }
                if (args.length > metadata.maxArgs) {
                  throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                }
                return new Promise((resolve, reject) => {
                  if (metadata.fallbackToNoCallback) {
                    try {
                      target[name](...args, makeCallback({
                        resolve,
                        reject
                      }, metadata));
                    } catch (cbError) {
                      console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                      target[name](...args);
                      metadata.fallbackToNoCallback = false;
                      metadata.noCallback = true;
                      resolve();
                    }
                  } else if (metadata.noCallback) {
                    target[name](...args);
                    resolve();
                  } else {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  }
                });
              };
            };
            const wrapMethod = (target, method4, wrapper) => {
              return new Proxy(method4, {
                apply(targetMethod, thisObj, args) {
                  return wrapper.call(thisObj, target, ...args);
                }
              });
            };
            let hasOwnProperty7 = Function.call.bind(Object.prototype.hasOwnProperty);
            const wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache2 = /* @__PURE__ */ Object.create(null);
              let handlers = {
                has(proxyTarget2, prop) {
                  return prop in target || prop in cache2;
                },
                get(proxyTarget2, prop, receiver) {
                  if (prop in cache2) {
                    return cache2[prop];
                  }
                  if (!(prop in target)) {
                    return void 0;
                  }
                  let value = target[prop];
                  if (typeof value === "function") {
                    if (typeof wrappers[prop] === "function") {
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    } else if (hasOwnProperty7(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else {
                      value = value.bind(target);
                    }
                  } else if (typeof value === "object" && value !== null && (hasOwnProperty7(wrappers, prop) || hasOwnProperty7(metadata, prop))) {
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  } else if (hasOwnProperty7(metadata, "*")) {
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  } else {
                    Object.defineProperty(cache2, prop, {
                      configurable: true,
                      enumerable: true,
                      get() {
                        return target[prop];
                      },
                      set(value2) {
                        target[prop] = value2;
                      }
                    });
                    return value;
                  }
                  cache2[prop] = value;
                  return value;
                },
                set(proxyTarget2, prop, value, receiver) {
                  if (prop in cache2) {
                    cache2[prop] = value;
                  } else {
                    target[prop] = value;
                  }
                  return true;
                },
                defineProperty(proxyTarget2, prop, desc) {
                  return Reflect.defineProperty(cache2, prop, desc);
                },
                deleteProperty(proxyTarget2, prop) {
                  return Reflect.deleteProperty(cache2, prop);
                }
              };
              let proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            };
            const wrapEvent = (wrapperMap) => ({
              addListener(target, listener, ...args) {
                target.addListener(wrapperMap.get(listener), ...args);
              },
              hasListener(target, listener) {
                return target.hasListener(wrapperMap.get(listener));
              },
              removeListener(target, listener) {
                target.removeListener(wrapperMap.get(listener));
              }
            });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onRequestFinished(req) {
                const wrappedReq = wrapObject(
                  req,
                  {},
                  {
                    getContent: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  }
                );
                listener(wrappedReq);
              };
            });
            const onMessageWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onMessage(message, sender, sendResponse) {
                let didCallSendResponse = false;
                let wrappedSendResponse;
                let sendResponsePromise = new Promise((resolve) => {
                  wrappedSendResponse = function(response) {
                    didCallSendResponse = true;
                    resolve(response);
                  };
                });
                let result;
                try {
                  result = listener(message, sender, wrappedSendResponse);
                } catch (err) {
                  result = Promise.reject(err);
                }
                const isResultThenable = result !== true && isThenable(result);
                if (result !== true && !isResultThenable && !didCallSendResponse) {
                  return false;
                }
                const sendPromisedResult = (promise) => {
                  promise.then((msg) => {
                    sendResponse(msg);
                  }, (error) => {
                    let message2;
                    if (error && (error instanceof Error || typeof error.message === "string")) {
                      message2 = error.message;
                    } else {
                      message2 = "An unexpected error occurred";
                    }
                    sendResponse({
                      __mozWebExtensionPolyfillReject__: true,
                      message: message2
                    });
                  }).catch((err) => {
                    console.error("Failed to send onMessage rejected reply", err);
                  });
                };
                if (isResultThenable) {
                  sendPromisedResult(result);
                } else {
                  sendPromisedResult(sendResponsePromise);
                }
                return true;
              };
            });
            const wrappedSendMessageCallback = ({
              reject,
              resolve
            }, reply) => {
              if (extensionAPIs.runtime.lastError) {
                if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                  resolve();
                } else {
                  reject(new Error(extensionAPIs.runtime.lastError.message));
                }
              } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
                reject(new Error(reply.message));
              } else {
                resolve(reply);
              }
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise((resolve, reject) => {
                const wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb);
                apiNamespaceObj.sendMessage(...args);
              });
            };
            const staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
            };
            const settingMetadata = {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            };
            apiMetadata.privacy = {
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          module3.exports = wrapAPIs(chrome);
        } else {
          module3.exports = globalThis.browser;
        }
      });
    }
  });

  // node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
  var require_use_sync_external_store_shim_development = __commonJS({
    "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports2) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          }
          var React = (init_react(), __toCommonJS(react_exports));
          var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function error(format2) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format2, args);
              }
            }
          }
          function printWarning(level, format2, args) {
            {
              var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame.getStackAddendum();
              if (stack !== "") {
                format2 += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format2);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          function is(x4, y3) {
            return x4 === y3 && (x4 !== 0 || 1 / x4 === 1 / y3) || x4 !== x4 && y3 !== y3;
          }
          var objectIs = typeof Object.is === "function" ? Object.is : is;
          var useState = React.useState, useEffect = React.useEffect, useLayoutEffect3 = React.useLayoutEffect, useDebugValue = React.useDebugValue;
          var didWarnOld18Alpha = false;
          var didWarnUncachedGetSnapshot = false;
          function useSyncExternalStore2(subscribe, getSnapshot, getServerSnapshot) {
            {
              if (!didWarnOld18Alpha) {
                if (React.startTransition !== void 0) {
                  didWarnOld18Alpha = true;
                  error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
                }
              }
            }
            var value = getSnapshot();
            {
              if (!didWarnUncachedGetSnapshot) {
                var cachedValue = getSnapshot();
                if (!objectIs(value, cachedValue)) {
                  error("The result of getSnapshot should be cached to avoid an infinite loop");
                  didWarnUncachedGetSnapshot = true;
                }
              }
            }
            var _useState = useState({
              inst: {
                value,
                getSnapshot
              }
            }), inst = _useState[0].inst, forceUpdate = _useState[1];
            useLayoutEffect3(function() {
              inst.value = value;
              inst.getSnapshot = getSnapshot;
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            }, [subscribe, value, getSnapshot]);
            useEffect(function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
              var handleStoreChange = function() {
                if (checkIfSnapshotChanged(inst)) {
                  forceUpdate({
                    inst
                  });
                }
              };
              return subscribe(handleStoreChange);
            }, [subscribe]);
            useDebugValue(value);
            return value;
          }
          function checkIfSnapshotChanged(inst) {
            var latestGetSnapshot = inst.getSnapshot;
            var prevValue = inst.value;
            try {
              var nextValue = latestGetSnapshot();
              return !objectIs(prevValue, nextValue);
            } catch (error2) {
              return true;
            }
          }
          function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
            return getSnapshot();
          }
          var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
          var isServerEnvironment = !canUseDOM;
          var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore2;
          var useSyncExternalStore$2 = React.useSyncExternalStore !== void 0 ? React.useSyncExternalStore : shim;
          exports2.useSyncExternalStore = useSyncExternalStore$2;
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
          }
        })();
      }
    }
  });

  // node_modules/use-sync-external-store/shim/index.js
  var require_shim = __commonJS({
    "node_modules/use-sync-external-store/shim/index.js"(exports2, module2) {
      "use strict";
      if (false) {
        module2.exports = null;
      } else {
        module2.exports = require_use_sync_external_store_shim_development();
      }
    }
  });

  // node_modules/classnames/index.js
  var require_classnames = __commonJS({
    "node_modules/classnames/index.js"(exports2, module2) {
      (function() {
        "use strict";
        var hasOwn = {}.hasOwnProperty;
        var nativeCodeString = "[native code]";
        function classNames23() {
          var classes = [];
          for (var i3 = 0; i3 < arguments.length; i3++) {
            var arg = arguments[i3];
            if (!arg)
              continue;
            var argType = typeof arg;
            if (argType === "string" || argType === "number") {
              classes.push(arg);
            } else if (Array.isArray(arg)) {
              if (arg.length) {
                var inner = classNames23.apply(null, arg);
                if (inner) {
                  classes.push(inner);
                }
              }
            } else if (argType === "object") {
              if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
                classes.push(arg.toString());
                continue;
              }
              for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                  classes.push(key);
                }
              }
            }
          }
          return classes.join(" ");
        }
        if (typeof module2 !== "undefined" && module2.exports) {
          classNames23.default = classNames23;
          module2.exports = classNames23;
        } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
          define("classnames", [], function() {
            return classNames23;
          });
        } else {
          window.classNames = classNames23;
        }
      })();
    }
  });

  // node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "node_modules/react-is/cjs/react-is.development.js"(exports2) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          function isValidElementType(type4) {
            return typeof type4 === "string" || typeof type4 === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type4 === REACT_FRAGMENT_TYPE || type4 === REACT_CONCURRENT_MODE_TYPE || type4 === REACT_PROFILER_TYPE || type4 === REACT_STRICT_MODE_TYPE || type4 === REACT_SUSPENSE_TYPE || type4 === REACT_SUSPENSE_LIST_TYPE || typeof type4 === "object" && type4 !== null && (type4.$$typeof === REACT_LAZY_TYPE || type4.$$typeof === REACT_MEMO_TYPE || type4.$$typeof === REACT_PROVIDER_TYPE || type4.$$typeof === REACT_CONTEXT_TYPE || type4.$$typeof === REACT_FORWARD_REF_TYPE || type4.$$typeof === REACT_FUNDAMENTAL_TYPE || type4.$$typeof === REACT_RESPONDER_TYPE || type4.$$typeof === REACT_SCOPE_TYPE || type4.$$typeof === REACT_BLOCK_TYPE);
          }
          function typeOf(object4) {
            if (typeof object4 === "object" && object4 !== null) {
              var $$typeof = object4.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type4 = object4.type;
                  switch (type4) {
                    case REACT_ASYNC_MODE_TYPE:
                    case REACT_CONCURRENT_MODE_TYPE:
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                      return type4;
                    default:
                      var $$typeofType = type4 && type4.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var AsyncMode = REACT_ASYNC_MODE_TYPE;
          var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element2 = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal2 = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          function isAsyncMode(object4) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
              }
            }
            return isConcurrentMode(object4) || typeOf(object4) === REACT_ASYNC_MODE_TYPE;
          }
          function isConcurrentMode(object4) {
            return typeOf(object4) === REACT_CONCURRENT_MODE_TYPE;
          }
          function isContextConsumer(object4) {
            return typeOf(object4) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object4) {
            return typeOf(object4) === REACT_PROVIDER_TYPE;
          }
          function isElement(object4) {
            return typeof object4 === "object" && object4 !== null && object4.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object4) {
            return typeOf(object4) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment2(object4) {
            return typeOf(object4) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object4) {
            return typeOf(object4) === REACT_LAZY_TYPE;
          }
          function isMemo2(object4) {
            return typeOf(object4) === REACT_MEMO_TYPE;
          }
          function isPortal(object4) {
            return typeOf(object4) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object4) {
            return typeOf(object4) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object4) {
            return typeOf(object4) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object4) {
            return typeOf(object4) === REACT_SUSPENSE_TYPE;
          }
          exports2.AsyncMode = AsyncMode;
          exports2.ConcurrentMode = ConcurrentMode;
          exports2.ContextConsumer = ContextConsumer;
          exports2.ContextProvider = ContextProvider;
          exports2.Element = Element2;
          exports2.ForwardRef = ForwardRef;
          exports2.Fragment = Fragment;
          exports2.Lazy = Lazy;
          exports2.Memo = Memo;
          exports2.Portal = Portal2;
          exports2.Profiler = Profiler;
          exports2.StrictMode = StrictMode;
          exports2.Suspense = Suspense;
          exports2.isAsyncMode = isAsyncMode;
          exports2.isConcurrentMode = isConcurrentMode;
          exports2.isContextConsumer = isContextConsumer;
          exports2.isContextProvider = isContextProvider;
          exports2.isElement = isElement;
          exports2.isForwardRef = isForwardRef;
          exports2.isFragment = isFragment2;
          exports2.isLazy = isLazy;
          exports2.isMemo = isMemo2;
          exports2.isPortal = isPortal;
          exports2.isProfiler = isProfiler;
          exports2.isStrictMode = isStrictMode;
          exports2.isSuspense = isSuspense;
          exports2.isValidElementType = isValidElementType;
          exports2.typeOf = typeOf;
        })();
      }
    }
  });

  // node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "node_modules/react-is/index.js"(exports2, module2) {
      "use strict";
      if (false) {
        module2.exports = null;
      } else {
        module2.exports = require_react_is_development();
      }
    }
  });

  // src/options/index.tsx
  init_preact_module();

  // node_modules/@babel/runtime/helpers/esm/extends.js
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = arguments[i3];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  // node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }

  // node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
  function _iterableToArrayLimit(arr, i3) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s, _e, _x, _r, _arr = [], _n2 = true, _d = false;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i3) {
          if (Object(_i) !== _i)
            return;
          _n2 = false;
        } else
          for (; !(_n2 = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i3); _n2 = true)
            ;
      } catch (err) {
        _d = true, _e = err;
      } finally {
        try {
          if (!_n2 && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r))
            return;
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
  }

  // node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++)
      arr2[i3] = arr[i3];
    return arr2;
  }

  // node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
  function _unsupportedIterableToArray(o4, minLen) {
    if (!o4)
      return;
    if (typeof o4 === "string")
      return _arrayLikeToArray(o4, minLen);
    var n2 = Object.prototype.toString.call(o4).slice(8, -1);
    if (n2 === "Object" && o4.constructor)
      n2 = o4.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o4);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o4, minLen);
  }

  // node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  // node_modules/@babel/runtime/helpers/esm/slicedToArray.js
  function _slicedToArray(arr, i3) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i3) || _unsupportedIterableToArray(arr, i3) || _nonIterableRest();
  }

  // node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i3;
    for (i3 = 0; i3 < sourceKeys.length; i3++) {
      key = sourceKeys[i3];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }

  // node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
  function _objectWithoutProperties(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i3;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i3 = 0; i3 < sourceSymbolKeys.length; i3++) {
        key = sourceSymbolKeys[i3];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }

  // node_modules/@geist-ui/core/esm/styled-jsx.es.js
  init_react();
  var style$1 = {};
  var stylesheetRegistry = {};
  function hash(str) {
    var hash2 = 5381, i3 = str.length;
    while (i3) {
      hash2 = hash2 * 33 ^ str.charCodeAt(--i3);
    }
    return hash2 >>> 0;
  }
  var stringHash = hash;
  var stylesheet = {};
  (function(exports2) {
    exports2.__esModule = true;
    exports2["default"] = void 0;
    function _defineProperties2(target, props) {
      for (var i3 = 0; i3 < props.length; i3++) {
        var descriptor = props[i3];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    var isProd = typeof process !== "undefined" && process.env && false;
    var isString = function isString2(o4) {
      return Object.prototype.toString.call(o4) === "[object String]";
    };
    var StyleSheet = /* @__PURE__ */ function() {
      function StyleSheet2(_temp) {
        var _ref = _temp === void 0 ? {} : _temp, _ref$name = _ref.name, name = _ref$name === void 0 ? "stylesheet" : _ref$name, _ref$optimizeForSpeed = _ref.optimizeForSpeed, optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed, _ref$isBrowser = _ref.isBrowser, isBrowser4 = _ref$isBrowser === void 0 ? typeof window !== "undefined" : _ref$isBrowser;
        invariant(isString(name), "`name` must be a string");
        this._name = name;
        this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
        invariant(
          typeof optimizeForSpeed === "boolean",
          "`optimizeForSpeed` must be a boolean"
        );
        this._optimizeForSpeed = optimizeForSpeed;
        this._isBrowser = isBrowser4;
        this._serverSheet = void 0;
        this._tags = [];
        this._injected = false;
        this._rulesCount = 0;
        var node2 = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = node2 ? node2.getAttribute("content") : null;
      }
      var _proto = StyleSheet2.prototype;
      _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
        invariant(typeof bool === "boolean", "`setOptimizeForSpeed` accepts a boolean");
        invariant(
          this._rulesCount === 0,
          "optimizeForSpeed cannot be when rules have already been inserted"
        );
        this.flush();
        this._optimizeForSpeed = bool;
        this.inject();
      };
      _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
        return this._optimizeForSpeed;
      };
      _proto.inject = function inject() {
        var _this = this;
        invariant(!this._injected, "sheet already injected");
        this._injected = true;
        if (this._isBrowser && this._optimizeForSpeed) {
          this._tags[0] = this.makeStyleTag(this._name);
          this._optimizeForSpeed = "insertRule" in this.getSheet();
          if (!this._optimizeForSpeed) {
            if (!isProd) {
              console.warn(
                "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
              );
            }
            this.flush();
            this._injected = true;
          }
          return;
        }
        this._serverSheet = {
          cssRules: [],
          insertRule: function insertRule(rule, index2) {
            if (typeof index2 === "number") {
              _this._serverSheet.cssRules[index2] = {
                cssText: rule
              };
            } else {
              _this._serverSheet.cssRules.push({
                cssText: rule
              });
            }
            return index2;
          },
          deleteRule: function deleteRule(index2) {
            _this._serverSheet.cssRules[index2] = null;
          }
        };
      };
      _proto.getSheetForTag = function getSheetForTag(tag) {
        if (tag.sheet) {
          return tag.sheet;
        }
        for (var i3 = 0; i3 < document.styleSheets.length; i3++) {
          if (document.styleSheets[i3].ownerNode === tag) {
            return document.styleSheets[i3];
          }
        }
      };
      _proto.getSheet = function getSheet() {
        return this.getSheetForTag(this._tags[this._tags.length - 1]);
      };
      _proto.insertRule = function insertRule(rule, index2) {
        invariant(isString(rule), "`insertRule` accepts only strings");
        if (!this._isBrowser) {
          if (typeof index2 !== "number") {
            index2 = this._serverSheet.cssRules.length;
          }
          this._serverSheet.insertRule(rule, index2);
          return this._rulesCount++;
        }
        if (this._optimizeForSpeed) {
          var sheet = this.getSheet();
          if (typeof index2 !== "number") {
            index2 = sheet.cssRules.length;
          }
          try {
            sheet.insertRule(rule, index2);
          } catch (error) {
            if (!isProd) {
              console.warn(
                "StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info"
              );
            }
            return -1;
          }
        } else {
          var insertionPoint = this._tags[index2];
          this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
        }
        return this._rulesCount++;
      };
      _proto.replaceRule = function replaceRule(index2, rule) {
        if (this._optimizeForSpeed || !this._isBrowser) {
          var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
          if (!rule.trim()) {
            rule = this._deletedRulePlaceholder;
          }
          if (!sheet.cssRules[index2]) {
            return index2;
          }
          sheet.deleteRule(index2);
          try {
            sheet.insertRule(rule, index2);
          } catch (error) {
            if (!isProd) {
              console.warn(
                "StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info"
              );
            }
            sheet.insertRule(this._deletedRulePlaceholder, index2);
          }
        } else {
          var tag = this._tags[index2];
          invariant(tag, "old rule at index `" + index2 + "` not found");
          tag.textContent = rule;
        }
        return index2;
      };
      _proto.deleteRule = function deleteRule(index2) {
        if (!this._isBrowser) {
          this._serverSheet.deleteRule(index2);
          return;
        }
        if (this._optimizeForSpeed) {
          this.replaceRule(index2, "");
        } else {
          var tag = this._tags[index2];
          invariant(tag, "rule at index `" + index2 + "` not found");
          tag.parentNode.removeChild(tag);
          this._tags[index2] = null;
        }
      };
      _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if (this._isBrowser) {
          this._tags.forEach(function(tag) {
            return tag && tag.parentNode.removeChild(tag);
          });
          this._tags = [];
        } else {
          this._serverSheet.cssRules = [];
        }
      };
      _proto.cssRules = function cssRules() {
        var _this2 = this;
        if (!this._isBrowser) {
          return this._serverSheet.cssRules;
        }
        return this._tags.reduce(function(rules2, tag) {
          if (tag) {
            rules2 = rules2.concat(
              Array.prototype.map.call(
                _this2.getSheetForTag(tag).cssRules,
                function(rule) {
                  return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
                }
              )
            );
          } else {
            rules2.push(null);
          }
          return rules2;
        }, []);
      };
      _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
        if (cssString) {
          invariant(
            isString(cssString),
            "makeStyleTag acceps only strings as second parameter"
          );
        }
        var tag = document.createElement("style");
        if (this._nonce)
          tag.setAttribute("nonce", this._nonce);
        tag.type = "text/css";
        tag.setAttribute("data-" + name, "");
        if (cssString) {
          tag.appendChild(document.createTextNode(cssString));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (relativeToTag) {
          head.insertBefore(tag, relativeToTag);
        } else {
          head.appendChild(tag);
        }
        return tag;
      };
      _createClass2(StyleSheet2, [
        {
          key: "length",
          get: function get2() {
            return this._rulesCount;
          }
        }
      ]);
      return StyleSheet2;
    }();
    exports2["default"] = StyleSheet;
    function invariant(condition, message) {
      if (!condition) {
        throw new Error("StyleSheet: " + message + ".");
      }
    }
  })(stylesheet);
  (function(exports2) {
    exports2.__esModule = true;
    exports2["default"] = void 0;
    var _stringHash = _interopRequireDefault(stringHash);
    var _stylesheet = _interopRequireDefault(stylesheet);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var sanitize = function sanitize2(rule) {
      return rule.replace(/\/style/gi, "\\/style");
    };
    var StyleSheetRegistry = /* @__PURE__ */ function() {
      function StyleSheetRegistry2(_temp) {
        var _ref = _temp === void 0 ? {} : _temp, _ref$styleSheet = _ref.styleSheet, styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet, _ref$optimizeForSpeed = _ref.optimizeForSpeed, optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed, _ref$isBrowser = _ref.isBrowser, isBrowser4 = _ref$isBrowser === void 0 ? typeof window !== "undefined" : _ref$isBrowser;
        this._sheet = styleSheet || new _stylesheet["default"]({
          name: "styled-jsx",
          optimizeForSpeed
        });
        this._sheet.inject();
        if (styleSheet && typeof optimizeForSpeed === "boolean") {
          this._sheet.setOptimizeForSpeed(optimizeForSpeed);
          this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        this._isBrowser = isBrowser4;
        this._fromServer = void 0;
        this._indices = {};
        this._instancesCounts = {};
        this.computeId = this.createComputeId();
        this.computeSelector = this.createComputeSelector();
      }
      var _proto = StyleSheetRegistry2.prototype;
      _proto.add = function add(props) {
        var _this = this;
        if (void 0 === this._optimizeForSpeed) {
          this._optimizeForSpeed = Array.isArray(props.children);
          this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
          this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        if (this._isBrowser && !this._fromServer) {
          this._fromServer = this.selectFromServer();
          this._instancesCounts = Object.keys(this._fromServer).reduce(
            function(acc, tagName) {
              acc[tagName] = 0;
              return acc;
            },
            {}
          );
        }
        var _this$getIdAndRules = this.getIdAndRules(props), styleId = _this$getIdAndRules.styleId, rules2 = _this$getIdAndRules.rules;
        if (styleId in this._instancesCounts) {
          this._instancesCounts[styleId] += 1;
          return;
        }
        var indices = rules2.map(function(rule) {
          return _this._sheet.insertRule(rule);
        }).filter(function(index2) {
          return index2 !== -1;
        });
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      };
      _proto.remove = function remove(props) {
        var _this2 = this;
        var _this$getIdAndRules2 = this.getIdAndRules(props), styleId = _this$getIdAndRules2.styleId;
        invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
        this._instancesCounts[styleId] -= 1;
        if (this._instancesCounts[styleId] < 1) {
          var tagFromServer = this._fromServer && this._fromServer[styleId];
          if (tagFromServer) {
            tagFromServer.parentNode.removeChild(tagFromServer);
            delete this._fromServer[styleId];
          } else {
            this._indices[styleId].forEach(function(index2) {
              return _this2._sheet.deleteRule(index2);
            });
            delete this._indices[styleId];
          }
          delete this._instancesCounts[styleId];
        }
      };
      _proto.update = function update(props, nextProps) {
        this.add(nextProps);
        this.remove(props);
      };
      _proto.flush = function flush() {
        this._sheet.flush();
        this._sheet.inject();
        this._fromServer = void 0;
        this._indices = {};
        this._instancesCounts = {};
        this.computeId = this.createComputeId();
        this.computeSelector = this.createComputeSelector();
      };
      _proto.cssRules = function cssRules() {
        var _this3 = this;
        var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function(styleId) {
          return [styleId, _this3._fromServer[styleId]];
        }) : [];
        var cssRules2 = this._sheet.cssRules();
        return fromServer.concat(
          Object.keys(this._indices).map(function(styleId) {
            return [
              styleId,
              _this3._indices[styleId].map(function(index2) {
                return cssRules2[index2].cssText;
              }).join(_this3._optimizeForSpeed ? "" : "\n")
            ];
          }).filter(function(rule) {
            return Boolean(rule[1]);
          })
        );
      };
      _proto.createComputeId = function createComputeId() {
        var cache2 = {};
        return function(baseId, props) {
          if (!props) {
            return "jsx-" + baseId;
          }
          var propsToString = String(props);
          var key = baseId + propsToString;
          if (!cache2[key]) {
            cache2[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
          }
          return cache2[key];
        };
      };
      _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
        if (selectoPlaceholderRegexp === void 0) {
          selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
        }
        var cache2 = {};
        return function(id, css) {
          if (!this._isBrowser) {
            css = sanitize(css);
          }
          var idcss = id + css;
          if (!cache2[idcss]) {
            cache2[idcss] = css.replace(selectoPlaceholderRegexp, id);
          }
          return cache2[idcss];
        };
      };
      _proto.getIdAndRules = function getIdAndRules(props) {
        var _this4 = this;
        var css = props.children, dynamic = props.dynamic, id = props.id;
        if (dynamic) {
          var styleId = this.computeId(id, dynamic);
          return {
            styleId,
            rules: Array.isArray(css) ? css.map(function(rule) {
              return _this4.computeSelector(styleId, rule);
            }) : [this.computeSelector(styleId, css)]
          };
        }
        return {
          styleId: this.computeId(id),
          rules: Array.isArray(css) ? css : [css]
        };
      };
      _proto.selectFromServer = function selectFromServer() {
        var elements = Array.prototype.slice.call(
          document.querySelectorAll('[id^="__jsx-"]')
        );
        return elements.reduce(function(acc, element) {
          var id = element.id.slice(2);
          acc[id] = element;
          return acc;
        }, {});
      };
      return StyleSheetRegistry2;
    }();
    exports2["default"] = StyleSheetRegistry;
    function invariant(condition, message) {
      if (!condition) {
        throw new Error("StyleSheetRegistry: " + message + ".");
      }
    }
  })(stylesheetRegistry);
  (function(exports2) {
    exports2.__esModule = true;
    exports2["default"] = JSXStyle;
    exports2.flush = flush;
    var _react = Cn;
    var _stylesheetRegistry = _interopRequireDefault(stylesheetRegistry);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var styleSheetRegistry = new _stylesheetRegistry["default"]();
    function JSXStyle(props) {
      if (typeof window === "undefined") {
        styleSheetRegistry.add(props);
        return null;
      }
      ;
      (0, _react.useLayoutEffect)(
        function() {
          styleSheetRegistry.add(props);
          return function() {
            styleSheetRegistry.remove(props);
          };
        },
        [props.id, String(props.dynamic)]
      );
      return null;
    }
    JSXStyle.dynamic = function(info) {
      return info.map(function(tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(" ");
    };
    function flush() {
      var cssRules = styleSheetRegistry.cssRules();
      styleSheetRegistry.flush();
      return cssRules;
    }
  })(style$1);
  var style = style$1.default || style$1;
  style.flush = style$1.flush;
  var server = {};
  (function(exports2) {
    exports2.__esModule = true;
    exports2["default"] = flushToReact;
    exports2.flushToHTML = flushToHTML2;
    var _react = _interopRequireDefault(Cn);
    var _style = style$1.default || style$1;
    _style.flush = style$1.flush;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function flushToReact(options) {
      if (options === void 0) {
        options = {};
      }
      return (0, _style.flush)().map(function(args) {
        var id = args[0];
        var css = args[1];
        return _react["default"].createElement("style", {
          id: "__" + id,
          // Avoid warnings upon render with a key
          key: "__" + id,
          nonce: options.nonce ? options.nonce : void 0,
          dangerouslySetInnerHTML: {
            __html: css
          }
        });
      });
    }
    function flushToHTML2(options) {
      if (options === void 0) {
        options = {};
      }
      return (0, _style.flush)().reduce(function(html, args) {
        var id = args[0];
        var css = args[1];
        html += '<style id="__' + id + '"' + (options.nonce ? ' nonce="' + options.nonce + '"' : "") + ">" + css + "</style>";
        return html;
      }, "");
    }
  })(server);
  var _server = server.default || server;
  _server.flushToHTML = server.flushToHTML;
  var styled_jsx_es_default = style;

  // node_modules/@geist-ui/core/esm/input/input.js
  init_react();

  // node_modules/@geist-ui/core/esm/use-theme/theme-context.js
  init_react();

  // node_modules/@babel/runtime/helpers/esm/typeof.js
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }

  // node_modules/@geist-ui/core/esm/themes/presets/shared.js
  var defaultFont = {
    sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    mono: "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
    prism: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,"Liberation Mono", "Courier New", monospace'
  };
  var defaultBreakpoints = {
    xs: {
      min: "0",
      max: "650px"
    },
    sm: {
      min: "650px",
      max: "900px"
    },
    md: {
      min: "900px",
      max: "1280px"
    },
    lg: {
      min: "1280px",
      max: "1920px"
    },
    xl: {
      min: "1920px",
      max: "10000px"
    }
  };
  var defaultLayout = {
    gap: "16pt",
    gapNegative: "-16pt",
    gapHalf: "8pt",
    gapHalfNegative: "-8pt",
    gapQuarter: "4pt",
    gapQuarterNegative: "-4pt",
    pageMargin: "16pt",
    pageWidth: "750pt",
    pageWidthWithMargin: "782pt",
    breakpointMobile: defaultBreakpoints.xs.max,
    breakpointTablet: defaultBreakpoints.sm.max,
    radius: "6px",
    unit: "16px"
  };

  // node_modules/@geist-ui/core/esm/themes/presets/default.js
  var palette = {
    accents_1: "#fafafa",
    accents_2: "#eaeaea",
    accents_3: "#999",
    accents_4: "#888",
    accents_5: "#666",
    accents_6: "#444",
    accents_7: "#333",
    accents_8: "#111",
    background: "#fff",
    foreground: "#000",
    selection: "#79ffe1",
    secondary: "#666",
    code: "#f81ce5",
    border: "#eaeaea",
    error: "#e00",
    errorLight: "#ff1a1a",
    errorLighter: "#f7d4d6",
    errorDark: "#c50000",
    success: "#0070f3",
    successLight: "#3291ff",
    successLighter: "#d3e5ff",
    successDark: "#0761d1",
    warning: "#f5a623",
    warningLight: "#f7b955",
    warningLighter: "#ffefcf",
    warningDark: "#ab570a",
    cyan: "#50e3c2",
    cyanLighter: "#aaffec",
    cyanLight: "#79ffe1",
    cyanDark: "#29bc9b",
    violet: "#7928ca",
    violetLighter: "#e3d7fc",
    violetLight: "#8a63d2",
    violetDark: "#4c2889",
    purple: "#f81ce5",
    alert: "#ff0080",
    magenta: "#eb367f",
    link: "#0070f3"
  };
  var expressiveness = {
    linkStyle: "none",
    linkHoverStyle: "none",
    dropdownBoxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.02)",
    scrollerStart: "rgba(255, 255, 255, 1)",
    scrollerEnd: "rgba(255, 255, 255, 0)",
    shadowSmall: "0 5px 10px rgba(0, 0, 0, 0.12)",
    shadowMedium: "0 8px 30px rgba(0, 0, 0, 0.12)",
    shadowLarge: "0 30px 60px rgba(0, 0, 0, 0.12)",
    portalOpacity: 0.25
  };
  var font = defaultFont;
  var breakpoints = defaultBreakpoints;
  var layout = defaultLayout;
  var themes = {
    type: "light",
    font,
    layout,
    palette,
    breakpoints,
    expressiveness
  };
  var default_default = themes;

  // node_modules/@geist-ui/core/esm/themes/presets/dark.js
  var palette2 = {
    accents_1: "#111",
    accents_2: "#333",
    accents_3: "#444",
    accents_4: "#666",
    accents_5: "#888",
    accents_6: "#999",
    accents_7: "#eaeaea",
    accents_8: "#fafafa",
    background: "#000",
    foreground: "#fff",
    selection: "#f81ce5",
    secondary: "#888",
    code: "#79ffe1",
    border: "#333",
    error: "#e00",
    errorLighter: "#f7d4d6",
    errorLight: "#ff1a1a",
    errorDark: "#c50000",
    success: "#0070f3",
    successLighter: "#d3e5ff",
    successLight: "#3291ff",
    successDark: "#0761d1",
    warning: "#f5a623",
    warningLighter: "#ffefcf",
    warningLight: "#f7b955",
    warningDark: "#ab570a",
    cyan: "#50e3c2",
    cyanLighter: "#aaffec",
    cyanLight: "#79ffe1",
    cyanDark: "#29bc9b",
    violet: "#7928ca",
    violetLighter: "#e3d7fc",
    violetLight: "#8a63d2",
    violetDark: "#4c2889",
    purple: "#f81ce5",
    alert: "#ff0080",
    magenta: "#eb367f",
    link: "#3291ff"
  };
  var expressiveness2 = {
    linkStyle: "none",
    linkHoverStyle: "none",
    dropdownBoxShadow: "0 0 0 1px #333",
    scrollerStart: "rgba(255, 255, 255, 1)",
    scrollerEnd: "rgba(255, 255, 255, 0)",
    shadowSmall: "0 0 0 1px #333",
    shadowMedium: "0 0 0 1px #333",
    shadowLarge: "0 0 0 1px #333",
    portalOpacity: 0.75
  };
  var font2 = defaultFont;
  var breakpoints2 = defaultBreakpoints;
  var layout2 = defaultLayout;
  var themes2 = {
    type: "dark",
    font: font2,
    layout: layout2,
    palette: palette2,
    breakpoints: breakpoints2,
    expressiveness: expressiveness2
  };
  var dark_default = themes2;

  // node_modules/@geist-ui/core/esm/themes/themes.js
  var isObject = function isObject2(target) {
    return target && _typeof(target) === "object";
  };
  var deepDuplicable = function deepDuplicable2(source, target) {
    if (!isObject(target) || !isObject(source))
      return source;
    var sourceKeys = Object.keys(source);
    var result = {};
    for (var _i = 0, _sourceKeys = sourceKeys; _i < _sourceKeys.length; _i++) {
      var key = _sourceKeys[_i];
      var sourceValue = source[key];
      var targetValue = target[key];
      if (Array.isArray(sourceValue) && Array.isArray(targetValue)) {
        result[key] = targetValue.concat(sourceValue);
      } else if (isObject(sourceValue) && isObject(targetValue)) {
        result[key] = deepDuplicable2(sourceValue, _extends({}, targetValue));
      } else if (targetValue) {
        result[key] = targetValue;
      } else {
        result[key] = sourceValue;
      }
    }
    return result;
  };
  var getPresets = function getPresets2() {
    return [default_default, dark_default];
  };
  var getPresetStaticTheme = function getPresetStaticTheme2() {
    return default_default;
  };
  var isAvailableThemeType = function isAvailableThemeType2(type4) {
    if (!type4)
      return false;
    var presetThemes = getPresets();
    var hasType = presetThemes.find(function(theme) {
      return theme.type === type4;
    });
    return !hasType;
  };
  var isPresetTheme = function isPresetTheme2(themeOrType) {
    if (!themeOrType)
      return false;
    var isType = typeof themeOrType === "string";
    var type4 = isType ? themeOrType : themeOrType.type;
    return !isAvailableThemeType(type4);
  };
  var hasUserCustomTheme = function hasUserCustomTheme2() {
    var themes3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return !!themes3.find(function(item) {
      return isAvailableThemeType(item.type);
    });
  };
  var create = function create2(base, custom) {
    if (!isAvailableThemeType(custom.type)) {
      throw new Error("Duplicate or unavailable theme type");
    }
    return deepDuplicable(base, custom);
  };
  var createFromDark = function createFromDark2(custom) {
    return create(dark_default, custom);
  };
  var createFromLight = function createFromLight2(custom) {
    return create(default_default, custom);
  };
  var Themes = {
    isPresetTheme,
    isAvailableThemeType,
    hasUserCustomTheme,
    getPresets,
    getPresetStaticTheme,
    create,
    createFromDark,
    createFromLight
  };
  var themes_default = Themes;

  // node_modules/@geist-ui/core/esm/themes/index.js
  var themes_default2 = themes_default;

  // node_modules/@geist-ui/core/esm/use-theme/theme-context.js
  var defaultTheme = themes_default2.getPresetStaticTheme();
  var ThemeContext = /* @__PURE__ */ Cn.createContext(defaultTheme);
  var useTheme = function useTheme2() {
    return Cn.useContext(ThemeContext);
  };

  // node_modules/@geist-ui/core/esm/use-theme/index.js
  var use_theme_default = useTheme;

  // node_modules/@geist-ui/core/esm/input/input-label.js
  init_react();
  var InputLabel = function InputLabel2(_ref) {
    var children = _ref.children, isRight = _ref.isRight;
    var theme = use_theme_default();
    return /* @__PURE__ */ Cn.createElement("span", {
      className: styled_jsx_es_default.dynamic([["3089782703", [theme.layout.gapHalf, theme.palette.accents_4, theme.palette.accents_1, theme.layout.radius, theme.layout.radius, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border]]]) + " " + ((isRight ? "right" : "") || "")
    }, children, /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "3089782703",
      dynamic: [theme.layout.gapHalf, theme.palette.accents_4, theme.palette.accents_1, theme.layout.radius, theme.layout.radius, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border]
    }, "span.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:initial;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:none;margin:0;padding:0 ".concat(theme.layout.gapHalf, ";color:").concat(theme.palette.accents_4, ";background-color:").concat(theme.palette.accents_1, ";border-top-left-radius:").concat(theme.layout.radius, ";border-bottom-left-radius:").concat(theme.layout.radius, ";border-top:1px solid ").concat(theme.palette.border, ";border-left:1px solid ").concat(theme.palette.border, ";border-bottom:1px solid ").concat(theme.palette.border, ";font-size:inherit;line-height:1;}span.right.__jsx-style-dynamic-selector{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:").concat(theme.layout.radius, ";border-bottom-right-radius:").concat(theme.layout.radius, ";border-left:0;border-right:1px solid ").concat(theme.palette.border, ";}")));
  };
  var MemoInputLabel = /* @__PURE__ */ Cn.memo(InputLabel);
  var input_label_default = MemoInputLabel;

  // node_modules/@geist-ui/core/esm/input/input-block-label.js
  init_react();
  var InputBlockLabelComponent = function InputBlockLabelComponent2(_ref) {
    var children = _ref.children;
    var theme = use_theme_default();
    return /* @__PURE__ */ Cn.createElement("label", {
      className: styled_jsx_es_default.dynamic([["1278828862", [theme.palette.accents_6]]])
    }, children, /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "1278828862",
      dynamic: [theme.palette.accents_6]
    }, "label.__jsx-style-dynamic-selector{display:block;font-weight:normal;color:".concat(theme.palette.accents_6, ";padding:0 0 0 1px;margin-bottom:0.5em;font-size:1em;line-height:1.5;}label.__jsx-style-dynamic-selector>*:first-child{margin-top:0;}label.__jsx-style-dynamic-selector>*:last-child{margin-bottom:0;}")));
  };
  InputBlockLabelComponent.displayName = "GeistInputBlockLabel";
  var InputBlockLabel = /* @__PURE__ */ Cn.memo(InputBlockLabelComponent);
  var input_block_label_default = InputBlockLabel;

  // node_modules/@geist-ui/core/esm/input/input-icon.js
  init_react();
  var InputIconComponent = function InputIconComponent2(_ref) {
    var icon = _ref.icon, clickable = _ref.clickable, onClick = _ref.onClick;
    return /* @__PURE__ */ Cn.createElement("span", {
      onClick,
      className: styled_jsx_es_default.dynamic([["4247656379", [clickable ? "pointer" : "default", clickable ? "auto" : "none"]]]) + " input-icon"
    }, icon, /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "4247656379",
      dynamic: [clickable ? "pointer" : "default", clickable ? "auto" : "none"]
    }, ".input-icon.__jsx-style-dynamic-selector{box-sizing:border-box;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:calc(var(--input-height) - 2px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:0;line-height:1;position:relative;cursor:".concat(clickable ? "pointer" : "default", ";pointer-events:").concat(clickable ? "auto" : "none", ";}.input-icon.__jsx-style-dynamic-selector svg{width:calc(var(--input-height) - 2px);height:calc(var(--input-height) - 2px);-webkit-transform:scale(0.44);-ms-transform:scale(0.44);transform:scale(0.44);}")));
  };
  InputIconComponent.displayName = "GeistInputIcon";
  var InputIcon = /* @__PURE__ */ Cn.memo(InputIconComponent);
  var input_icon_default = InputIcon;

  // node_modules/@geist-ui/core/esm/input/input-icon-clear.js
  init_react();

  // node_modules/@geist-ui/core/esm/use-classes/use-classes.js
  var classObjectToString = function classObjectToString2(className) {
    var keys = Object.keys(className);
    var len = keys.length;
    var str = "";
    for (var index2 = 0; index2 < len; index2++) {
      var key = keys[index2];
      var val = className[keys[index2]];
      if (!val)
        continue;
      str = str ? "".concat(str, " ").concat(String(key)) : String(key);
    }
    return str;
  };
  var isObjectClassName = function isObjectClassName2(value) {
    return _typeof(value) === "object" && !Array.isArray(value);
  };
  var useClasses = function useClasses2() {
    var len = arguments.length;
    var classes = "";
    if (len === 0)
      return classes;
    for (var index2 = 0; index2 < len; index2++) {
      var val = index2 < 0 || arguments.length <= index2 ? void 0 : arguments[index2];
      if (!val)
        continue;
      if (isObjectClassName(val)) {
        classes += " ".concat(classObjectToString(val));
      } else {
        classes += " ".concat(String(val).trim());
      }
    }
    return classes.trim();
  };
  var use_classes_default = useClasses;

  // node_modules/@geist-ui/core/esm/use-classes/index.js
  var use_classes_default2 = use_classes_default;

  // node_modules/@geist-ui/core/esm/input/input-icon-clear.js
  var InputIconClear = function InputIconClear2(_ref) {
    var onClick = _ref.onClick, disabled = _ref.disabled, visible = _ref.visible;
    var theme = use_theme_default();
    var classes = use_classes_default2("clear-icon", {
      visible
    });
    var clickHandler = function clickHandler2(event) {
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
      onClick && onClick(event);
    };
    return /* @__PURE__ */ Cn.createElement("div", {
      onClick: clickHandler,
      className: styled_jsx_es_default.dynamic([["1567030211", [disabled ? "not-allowed" : "pointer", theme.palette.accents_3, disabled ? theme.palette.accents_3 : theme.palette.foreground]]]) + " " + (classes || "")
    }, /* @__PURE__ */ Cn.createElement("svg", {
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none",
      shapeRendering: "geometricPrecision",
      className: styled_jsx_es_default.dynamic([["1567030211", [disabled ? "not-allowed" : "pointer", theme.palette.accents_3, disabled ? theme.palette.accents_3 : theme.palette.foreground]]])
    }, /* @__PURE__ */ Cn.createElement("path", {
      d: "M18 6L6 18",
      className: styled_jsx_es_default.dynamic([["1567030211", [disabled ? "not-allowed" : "pointer", theme.palette.accents_3, disabled ? theme.palette.accents_3 : theme.palette.foreground]]])
    }), /* @__PURE__ */ Cn.createElement("path", {
      d: "M6 6l12 12",
      className: styled_jsx_es_default.dynamic([["1567030211", [disabled ? "not-allowed" : "pointer", theme.palette.accents_3, disabled ? theme.palette.accents_3 : theme.palette.foreground]]])
    })), /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "1567030211",
      dynamic: [disabled ? "not-allowed" : "pointer", theme.palette.accents_3, disabled ? theme.palette.accents_3 : theme.palette.foreground]
    }, ".clear-icon.__jsx-style-dynamic-selector{box-sizing:border-box;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:calc(var(--input-height) - 2px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:".concat(disabled ? "not-allowed" : "pointer", ";-webkit-transition:color 150ms ease 0s;transition:color 150ms ease 0s;margin:0;padding:0;color:").concat(theme.palette.accents_3, ";visibility:hidden;opacity:0;}.visible.__jsx-style-dynamic-selector{visibility:visible;opacity:1;}.clear-icon.__jsx-style-dynamic-selector:hover{color:").concat(disabled ? theme.palette.accents_3 : theme.palette.foreground, ";}svg.__jsx-style-dynamic-selector{color:currentColor;width:calc(var(--input-height) - 2px);height:calc(var(--input-height) - 2px);-webkit-transform:scale(0.44);-ms-transform:scale(0.44);transform:scale(0.44);}")));
  };
  var MemoInputIconClear = /* @__PURE__ */ Cn.memo(InputIconClear);
  var input_icon_clear_default = MemoInputIconClear;

  // node_modules/@geist-ui/core/esm/input/styles.js
  var getColors = function getColors2(palette3, status) {
    var colors = {
      "default": {
        color: palette3.foreground,
        borderColor: palette3.border,
        hoverBorder: palette3.accents_5
      },
      secondary: {
        color: palette3.foreground,
        borderColor: palette3.secondary,
        hoverBorder: palette3.secondary
      },
      success: {
        color: palette3.foreground,
        borderColor: palette3.successLight,
        hoverBorder: palette3.success
      },
      warning: {
        color: palette3.foreground,
        borderColor: palette3.warningLight,
        hoverBorder: palette3.warning
      },
      error: {
        color: palette3.error,
        borderColor: palette3.error,
        hoverBorder: palette3.errorDark
      }
    };
    if (!status)
      return colors["default"];
    return colors[status];
  };

  // node_modules/@geist-ui/core/esm/input/input-props.js
  var defaultProps = {
    disabled: false,
    readOnly: false,
    clearable: false,
    iconClickable: false,
    type: "default",
    htmlType: "text",
    autoComplete: "off",
    className: "",
    placeholder: "",
    initialValue: ""
  };

  // node_modules/@geist-ui/core/esm/use-scale/with-scale.js
  init_react();

  // node_modules/@geist-ui/core/esm/use-scale/scale-context.js
  init_react();
  var ScalePropKeys = ["width", "height", "padding", "margin", "w", "h", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "pl", "pr", "pt", "pb", "marginLeft", "marginRight", "marginTop", "marginBottom", "ml", "mr", "mt", "mb", "px", "py", "mx", "my", "font", "unit", "scale"];
  var defaultDynamicLayoutPipe = function defaultDynamicLayoutPipe2(scale1x) {
    return "".concat(scale1x);
  };
  var defaultContext = {
    getScaleProps: function getScaleProps() {
      return void 0;
    },
    getAllScaleProps: function getAllScaleProps() {
      return {};
    },
    SCALES: {
      pl: defaultDynamicLayoutPipe,
      pr: defaultDynamicLayoutPipe,
      pb: defaultDynamicLayoutPipe,
      pt: defaultDynamicLayoutPipe,
      px: defaultDynamicLayoutPipe,
      py: defaultDynamicLayoutPipe,
      mb: defaultDynamicLayoutPipe,
      ml: defaultDynamicLayoutPipe,
      mr: defaultDynamicLayoutPipe,
      mt: defaultDynamicLayoutPipe,
      mx: defaultDynamicLayoutPipe,
      my: defaultDynamicLayoutPipe,
      width: defaultDynamicLayoutPipe,
      height: defaultDynamicLayoutPipe,
      font: defaultDynamicLayoutPipe
    },
    unit: "16px"
  };
  var ScaleContext = /* @__PURE__ */ Cn.createContext(defaultContext);
  var useScale = function useScale2() {
    return Cn.useContext(ScaleContext);
  };

  // node_modules/@geist-ui/core/esm/utils/collections.js
  init_react();
  var getId = function getId2() {
    return Math.random().toString(32).slice(2, 10);
  };
  var hasChild = function hasChild2(children, child) {
    var types2 = Cn.Children.map(children, function(item) {
      if (!/* @__PURE__ */ Cn.isValidElement(item))
        return null;
      return item.type;
    });
    return (types2 || []).includes(child);
  };
  var pickChild = function pickChild2(children, targetChild) {
    var target = [];
    var withoutTargetChildren = Cn.Children.map(children, function(item) {
      if (!/* @__PURE__ */ Cn.isValidElement(item))
        return item;
      if (item.type === targetChild) {
        target.push(item);
        return null;
      }
      return item;
    });
    var targetChildren = target.length >= 0 ? target : void 0;
    return [withoutTargetChildren, targetChildren];
  };
  var isBrowser = function isBrowser2() {
    return Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
  };
  var isCSSNumberValue = function isCSSNumberValue2(value) {
    return value !== void 0 && !Number.isNaN(+value);
  };

  // node_modules/@geist-ui/core/esm/use-scale/utils.js
  function _createForOfIteratorHelper(o4, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o4[Symbol.iterator] || o4["@@iterator"];
    if (!it) {
      if (Array.isArray(o4) || (it = _unsupportedIterableToArray2(o4)) || allowArrayLike && o4 && typeof o4.length === "number") {
        if (it)
          o4 = it;
        var i3 = 0;
        var F4 = function F5() {
        };
        return { s: F4, n: function n2() {
          if (i3 >= o4.length)
            return { done: true };
          return { done: false, value: o4[i3++] };
        }, e: function e3(_e) {
          throw _e;
        }, f: F4 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return { s: function s3() {
      it = it.call(o4);
    }, n: function n2() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    }, e: function e3(_e2) {
      didErr = true;
      err = _e2;
    }, f: function f3() {
      try {
        if (!normalCompletion && it["return"] != null)
          it["return"]();
      } finally {
        if (didErr)
          throw err;
      }
    } };
  }
  function _unsupportedIterableToArray2(o4, minLen) {
    if (!o4)
      return;
    if (typeof o4 === "string")
      return _arrayLikeToArray2(o4, minLen);
    var n2 = Object.prototype.toString.call(o4).slice(8, -1);
    if (n2 === "Object" && o4.constructor)
      n2 = o4.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o4);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray2(o4, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
      arr2[i3] = arr[i3];
    }
    return arr2;
  }
  var generateGetScaleProps = function generateGetScaleProps2(props) {
    var getScaleProps2 = function getScaleProps3(keyOrKeys) {
      if (!Array.isArray(keyOrKeys))
        return props[keyOrKeys];
      var value = void 0;
      var _iterator = _createForOfIteratorHelper(keyOrKeys), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var key = _step.value;
          var currentValue = props[key];
          if (typeof currentValue !== "undefined") {
            value = currentValue;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return value;
    };
    return getScaleProps2;
  };
  var generateGetAllScaleProps = function generateGetAllScaleProps2(props) {
    var getAllScaleProps2 = function getAllScaleProps3() {
      var scaleProps = {};
      var _iterator2 = _createForOfIteratorHelper(ScalePropKeys), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var key = _step2.value;
          var value = props[key];
          if (typeof value !== "undefined") {
            scaleProps[key] = value;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return scaleProps;
    };
    return getAllScaleProps2;
  };

  // node_modules/@geist-ui/core/esm/use-scale/with-scale.js
  var _excluded = ["children"];
  var _excluded2 = ["paddingLeft", "pl", "paddingRight", "pr", "paddingTop", "pt", "paddingBottom", "pb", "marginTop", "mt", "marginRight", "mr", "marginBottom", "mb", "marginLeft", "ml", "px", "py", "mx", "my", "width", "height", "font", "w", "h", "margin", "padding", "unit", "scale"];
  var reduceScaleCoefficient = function reduceScaleCoefficient2(scale) {
    if (scale === 1)
      return scale;
    var diff = Math.abs((scale - 1) / 2);
    return scale > 1 ? 1 + diff : 1 - diff;
  };
  var withScale = function withScale2(Render) {
    var ScaleFC = /* @__PURE__ */ k3(function(_ref, ref) {
      var _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref20, _ref21, _ref22, _ref23, _ref24, _ref25, _ref26, _ref27, _ref28, _ref29, _ref30, _ref31, _ref32, _ref33;
      var children = _ref.children, props = _objectWithoutProperties(_ref, _excluded);
      var _useTheme = use_theme_default(), layout3 = _useTheme.layout;
      var paddingLeft = props.paddingLeft, pl = props.pl, paddingRight = props.paddingRight, pr = props.pr, paddingTop = props.paddingTop, pt = props.pt, paddingBottom = props.paddingBottom, pb = props.pb, marginTop = props.marginTop, mt = props.mt, marginRight = props.marginRight, mr = props.mr, marginBottom = props.marginBottom, mb = props.mb, marginLeft = props.marginLeft, ml = props.ml, px = props.px, py = props.py, mx = props.mx, my = props.my, width = props.width, height = props.height, font3 = props.font, w4 = props.w, h3 = props.h, margin = props.margin, padding = props.padding, _props$unit = props.unit, unit = _props$unit === void 0 ? layout3.unit : _props$unit, _props$scale = props.scale, scale = _props$scale === void 0 ? 1 : _props$scale, innerProps = _objectWithoutProperties(props, _excluded2);
      var makeScaleHandler = function makeScaleHandler2(attrValue) {
        return function(scale1x, defaultValue) {
          if (scale1x === 0) {
            scale1x = 1;
            defaultValue = defaultValue || 0;
          }
          var factor = reduceScaleCoefficient(scale) * scale1x;
          if (typeof attrValue === "undefined") {
            if (typeof defaultValue !== "undefined")
              return "".concat(defaultValue);
            return "calc(".concat(factor, " * ").concat(unit, ")");
          }
          if (!isCSSNumberValue(attrValue))
            return "".concat(attrValue);
          var customFactor = factor * Number(attrValue);
          return "calc(".concat(customFactor, " * ").concat(unit, ")");
        };
      };
      var value = {
        unit,
        SCALES: {
          pt: makeScaleHandler((_ref2 = (_ref3 = paddingTop !== null && paddingTop !== void 0 ? paddingTop : pt) !== null && _ref3 !== void 0 ? _ref3 : py) !== null && _ref2 !== void 0 ? _ref2 : padding),
          pr: makeScaleHandler((_ref4 = (_ref5 = paddingRight !== null && paddingRight !== void 0 ? paddingRight : pr) !== null && _ref5 !== void 0 ? _ref5 : px) !== null && _ref4 !== void 0 ? _ref4 : padding),
          pb: makeScaleHandler((_ref6 = (_ref7 = paddingBottom !== null && paddingBottom !== void 0 ? paddingBottom : pb) !== null && _ref7 !== void 0 ? _ref7 : py) !== null && _ref6 !== void 0 ? _ref6 : padding),
          pl: makeScaleHandler((_ref8 = (_ref9 = paddingLeft !== null && paddingLeft !== void 0 ? paddingLeft : pl) !== null && _ref9 !== void 0 ? _ref9 : px) !== null && _ref8 !== void 0 ? _ref8 : padding),
          px: makeScaleHandler((_ref10 = (_ref11 = (_ref12 = (_ref13 = px !== null && px !== void 0 ? px : paddingLeft) !== null && _ref13 !== void 0 ? _ref13 : paddingRight) !== null && _ref12 !== void 0 ? _ref12 : pl) !== null && _ref11 !== void 0 ? _ref11 : pr) !== null && _ref10 !== void 0 ? _ref10 : padding),
          py: makeScaleHandler((_ref14 = (_ref15 = (_ref16 = (_ref17 = py !== null && py !== void 0 ? py : paddingTop) !== null && _ref17 !== void 0 ? _ref17 : paddingBottom) !== null && _ref16 !== void 0 ? _ref16 : pt) !== null && _ref15 !== void 0 ? _ref15 : pb) !== null && _ref14 !== void 0 ? _ref14 : padding),
          mt: makeScaleHandler((_ref18 = (_ref19 = marginTop !== null && marginTop !== void 0 ? marginTop : mt) !== null && _ref19 !== void 0 ? _ref19 : my) !== null && _ref18 !== void 0 ? _ref18 : margin),
          mr: makeScaleHandler((_ref20 = (_ref21 = marginRight !== null && marginRight !== void 0 ? marginRight : mr) !== null && _ref21 !== void 0 ? _ref21 : mx) !== null && _ref20 !== void 0 ? _ref20 : margin),
          mb: makeScaleHandler((_ref22 = (_ref23 = marginBottom !== null && marginBottom !== void 0 ? marginBottom : mb) !== null && _ref23 !== void 0 ? _ref23 : my) !== null && _ref22 !== void 0 ? _ref22 : margin),
          ml: makeScaleHandler((_ref24 = (_ref25 = marginLeft !== null && marginLeft !== void 0 ? marginLeft : ml) !== null && _ref25 !== void 0 ? _ref25 : mx) !== null && _ref24 !== void 0 ? _ref24 : margin),
          mx: makeScaleHandler((_ref26 = (_ref27 = (_ref28 = (_ref29 = mx !== null && mx !== void 0 ? mx : marginLeft) !== null && _ref29 !== void 0 ? _ref29 : marginRight) !== null && _ref28 !== void 0 ? _ref28 : ml) !== null && _ref27 !== void 0 ? _ref27 : mr) !== null && _ref26 !== void 0 ? _ref26 : margin),
          my: makeScaleHandler((_ref30 = (_ref31 = (_ref32 = (_ref33 = my !== null && my !== void 0 ? my : marginTop) !== null && _ref33 !== void 0 ? _ref33 : marginBottom) !== null && _ref32 !== void 0 ? _ref32 : mt) !== null && _ref31 !== void 0 ? _ref31 : mb) !== null && _ref30 !== void 0 ? _ref30 : margin),
          width: makeScaleHandler(width !== null && width !== void 0 ? width : w4),
          height: makeScaleHandler(height !== null && height !== void 0 ? height : h3),
          font: makeScaleHandler(font3)
        },
        getScaleProps: generateGetScaleProps(props),
        getAllScaleProps: generateGetAllScaleProps(props)
      };
      return /* @__PURE__ */ Cn.createElement(ScaleContext.Provider, {
        value
      }, /* @__PURE__ */ Cn.createElement(Render, _extends({}, innerProps, {
        ref
      }), children));
    });
    ScaleFC.displayName = "Scale".concat(Render.displayName || "Wrapper");
    return ScaleFC;
  };
  var with_scale_default = withScale;

  // node_modules/@geist-ui/core/esm/use-scale/index.js
  var use_scale_default = useScale;

  // node_modules/@geist-ui/core/esm/input/input.js
  var _excluded3 = ["label", "labelRight", "type", "htmlType", "icon", "iconRight", "iconClickable", "onIconClick", "initialValue", "onChange", "readOnly", "value", "onClearClick", "clearable", "className", "onBlur", "onFocus", "autoComplete", "placeholder", "children", "disabled"];
  var simulateChangeEvent = function simulateChangeEvent2(el, event) {
    return _extends({}, event, {
      target: el,
      currentTarget: el
    });
  };
  var InputComponent = /* @__PURE__ */ Cn.forwardRef(function(_ref, ref) {
    var label = _ref.label, labelRight = _ref.labelRight, type4 = _ref.type, htmlType = _ref.htmlType, icon = _ref.icon, iconRight = _ref.iconRight, iconClickable = _ref.iconClickable, onIconClick = _ref.onIconClick, initialValue = _ref.initialValue, onChange = _ref.onChange, readOnly = _ref.readOnly, value = _ref.value, onClearClick = _ref.onClearClick, clearable = _ref.clearable, className = _ref.className, onBlur = _ref.onBlur, onFocus = _ref.onFocus, autoComplete = _ref.autoComplete, placeholder = _ref.placeholder, children = _ref.children, disabled = _ref.disabled, props = _objectWithoutProperties(_ref, _excluded3);
    var theme = use_theme_default();
    var _useScale = use_scale_default(), SCALES = _useScale.SCALES;
    var inputRef = _2(null);
    A2(ref, function() {
      return inputRef.current;
    });
    var _useState = h2(initialValue), _useState2 = _slicedToArray(_useState, 2), selfValue = _useState2[0], setSelfValue = _useState2[1];
    var _useState3 = h2(false), _useState4 = _slicedToArray(_useState3, 2), hover = _useState4[0], setHover = _useState4[1];
    var isControlledComponent = F2(function() {
      return value !== void 0;
    }, [value]);
    var labelClasses = F2(function() {
      return labelRight ? "right-label" : label ? "left-label" : "";
    }, [label, labelRight]);
    var iconClasses = F2(function() {
      return iconRight ? "right-icon" : icon ? "left-icon" : "";
    }, [icon, iconRight]);
    var _useMemo = F2(function() {
      return getColors(theme.palette, type4);
    }, [theme.palette, type4]), color = _useMemo.color, borderColor = _useMemo.borderColor, hoverBorder = _useMemo.hoverBorder;
    var changeHandler = function changeHandler2(event) {
      if (disabled || readOnly)
        return;
      setSelfValue(event.target.value);
      onChange && onChange(event);
    };
    var clearHandler = function clearHandler2(event) {
      setSelfValue("");
      onClearClick && onClearClick(event);
      if (!inputRef.current)
        return;
      var changeEvent = simulateChangeEvent(inputRef.current, event);
      changeEvent.target.value = "";
      onChange && onChange(changeEvent);
      inputRef.current.focus();
    };
    var focusHandler = function focusHandler2(e3) {
      setHover(true);
      onFocus && onFocus(e3);
    };
    var blurHandler = function blurHandler2(e3) {
      setHover(false);
      onBlur && onBlur(e3);
    };
    var iconClickHandler = function iconClickHandler2(e3) {
      if (disabled)
        return;
      onIconClick && onIconClick(e3);
    };
    var iconProps = F2(function() {
      return {
        clickable: iconClickable,
        onClick: iconClickHandler
      };
    }, [iconClickable, iconClickHandler]);
    p2(function() {
      if (isControlledComponent) {
        setSelfValue(value);
      }
    });
    var controlledValue = isControlledComponent ? {
      value: selfValue
    } : {
      defaultValue: initialValue
    };
    var inputProps = _extends({}, props, controlledValue);
    return /* @__PURE__ */ Cn.createElement("div", {
      className: styled_jsx_es_default.dynamic([["575189429", [SCALES.height(2.25), SCALES.font(0.875), SCALES.width(1, "initial"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, "initial"), theme.layout.radius, borderColor, theme.palette.accents_1, theme.palette.accents_2, hoverBorder, SCALES.font(0.875), color, theme.palette.accents_3, theme.palette.background, color]]]) + " with-label"
    }, children && /* @__PURE__ */ Cn.createElement(input_block_label_default, null, children), /* @__PURE__ */ Cn.createElement("div", {
      className: styled_jsx_es_default.dynamic([["575189429", [SCALES.height(2.25), SCALES.font(0.875), SCALES.width(1, "initial"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, "initial"), theme.layout.radius, borderColor, theme.palette.accents_1, theme.palette.accents_2, hoverBorder, SCALES.font(0.875), color, theme.palette.accents_3, theme.palette.background, color]]]) + " " + (use_classes_default2("input-container", className) || "")
    }, label && /* @__PURE__ */ Cn.createElement(input_label_default, null, label), /* @__PURE__ */ Cn.createElement("div", {
      className: styled_jsx_es_default.dynamic([["575189429", [SCALES.height(2.25), SCALES.font(0.875), SCALES.width(1, "initial"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, "initial"), theme.layout.radius, borderColor, theme.palette.accents_1, theme.palette.accents_2, hoverBorder, SCALES.font(0.875), color, theme.palette.accents_3, theme.palette.background, color]]]) + " " + (use_classes_default2("input-wrapper", {
        hover,
        disabled
      }, labelClasses) || "")
    }, icon && /* @__PURE__ */ Cn.createElement(input_icon_default, _extends({
      icon
    }, iconProps)), /* @__PURE__ */ Cn.createElement("input", _extends({
      type: htmlType,
      ref: inputRef,
      placeholder,
      disabled,
      readOnly,
      onFocus: focusHandler,
      onBlur: blurHandler,
      onChange: changeHandler,
      autoComplete
    }, inputProps, {
      className: styled_jsx_es_default.dynamic([["575189429", [SCALES.height(2.25), SCALES.font(0.875), SCALES.width(1, "initial"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, "initial"), theme.layout.radius, borderColor, theme.palette.accents_1, theme.palette.accents_2, hoverBorder, SCALES.font(0.875), color, theme.palette.accents_3, theme.palette.background, color]]]) + " " + (inputProps && inputProps.className != null && inputProps.className || use_classes_default2({
        disabled
      }, iconClasses) || "")
    })), clearable && /* @__PURE__ */ Cn.createElement(input_icon_clear_default, {
      visible: Boolean(inputRef.current && inputRef.current.value !== ""),
      disabled: disabled || readOnly,
      onClick: clearHandler
    }), iconRight && /* @__PURE__ */ Cn.createElement(input_icon_default, _extends({
      icon: iconRight
    }, iconProps))), labelRight && /* @__PURE__ */ Cn.createElement(input_label_default, {
      isRight: true
    }, labelRight)), /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "575189429",
      dynamic: [SCALES.height(2.25), SCALES.font(0.875), SCALES.width(1, "initial"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, "initial"), theme.layout.radius, borderColor, theme.palette.accents_1, theme.palette.accents_2, hoverBorder, SCALES.font(0.875), color, theme.palette.accents_3, theme.palette.background, color]
    }, ".with-label.__jsx-style-dynamic-selector{display:inline-block;box-sizing:border-box;-webkit-box-align:center;--input-height:".concat(SCALES.height(2.25), ";font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, "initial"), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.input-container.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:").concat(SCALES.width(1, "initial"), ";height:var(--input-height);}.input-wrapper.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:").concat(theme.layout.radius, ";border:1px solid ").concat(borderColor, ";-webkit-transition:border 0.2s ease 0s,color 0.2s ease 0s;transition:border 0.2s ease 0s,color 0.2s ease 0s;}.input-wrapper.left-label.__jsx-style-dynamic-selector{border-top-left-radius:0;border-bottom-left-radius:0;}.input-wrapper.right-label.__jsx-style-dynamic-selector{border-top-right-radius:0;border-bottom-right-radius:0;}.input-wrapper.disabled.__jsx-style-dynamic-selector{background-color:").concat(theme.palette.accents_1, ";border-color:").concat(theme.palette.accents_2, ";cursor:not-allowed;}input.disabled.__jsx-style-dynamic-selector{cursor:not-allowed;}.input-wrapper.hover.__jsx-style-dynamic-selector{border-color:").concat(hoverBorder, ";}input.__jsx-style-dynamic-selector{margin:0.25em 0.625em;padding:0;box-shadow:none;font-size:").concat(SCALES.font(0.875), ";background-color:transparent;border:none;color:").concat(color, ";outline:none;border-radius:0;width:100%;min-width:0;-webkit-appearance:none;}input.left-icon.__jsx-style-dynamic-selector{margin-left:0;}input.right-icon.__jsx-style-dynamic-selector{margin-right:0;}.__jsx-style-dynamic-selector::-webkit-input-placeholder,.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:").concat(theme.palette.accents_3, ";}.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:").concat(theme.palette.accents_3, ";}.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:").concat(theme.palette.accents_3, ";}.__jsx-style-dynamic-selector::placeholder,.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:").concat(theme.palette.accents_3, ";}.__jsx-style-dynamic-selector::-ms-reveal{display:none !important;}input.__jsx-style-dynamic-selector:-webkit-autofill,input.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:hover,input.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:active,input.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:focus{-webkit-box-shadow:0 0 0 30px ").concat(theme.palette.background, " inset !important;-webkit-text-fill-color:").concat(color, " !important;}")));
  });
  InputComponent.defaultProps = defaultProps;
  InputComponent.displayName = "GeistInput";
  var Input = with_scale_default(InputComponent);
  var input_default = Input;

  // node_modules/@geist-ui/core/esm/textarea/textarea.js
  init_react();

  // node_modules/@geist-ui/core/esm/utils/prop-types.js
  var tuple = function tuple2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args;
  };
  var buttonTypes = tuple("default", "secondary", "success", "warning", "error", "abort", "secondary-light", "success-light", "warning-light", "error-light");
  var normalTypes = tuple("default", "secondary", "success", "warning", "error");
  var snippetTypes = tuple("default", "secondary", "success", "warning", "error", "dark", "lite");
  var cardTypes = tuple("default", "secondary", "success", "warning", "error", "dark", "lite", "alert", "purple", "violet", "cyan");
  var copyTypes = tuple("default", "silent", "prevent");
  var triggerTypes = tuple("hover", "click");
  var placement = tuple("top", "topStart", "topEnd", "left", "leftStart", "leftEnd", "bottom", "bottomStart", "bottomEnd", "right", "rightStart", "rightEnd");
  var dividerAlign = tuple("start", "center", "end", "left", "right");

  // node_modules/@geist-ui/core/esm/textarea/textarea.js
  var _excluded4 = ["type", "disabled", "readOnly", "onFocus", "onBlur", "className", "initialValue", "onChange", "value", "placeholder", "resize"];
  var resizeTypes = tuple("none", "both", "horizontal", "vertical", "initial", "inherit");
  var defaultProps2 = {
    initialValue: "",
    type: "default",
    disabled: false,
    readOnly: false,
    className: "",
    resize: "none"
  };
  var TextareaComponent = /* @__PURE__ */ Cn.forwardRef(function(_ref, ref) {
    var type4 = _ref.type, disabled = _ref.disabled, readOnly = _ref.readOnly, onFocus = _ref.onFocus, onBlur = _ref.onBlur, className = _ref.className, initialValue = _ref.initialValue, onChange = _ref.onChange, value = _ref.value, placeholder = _ref.placeholder, resize = _ref.resize, props = _objectWithoutProperties(_ref, _excluded4);
    var theme = use_theme_default();
    var _useScale = use_scale_default(), SCALES = _useScale.SCALES;
    var textareaRef = _2(null);
    A2(ref, function() {
      return textareaRef.current;
    });
    var isControlledComponent = F2(function() {
      return value !== void 0;
    }, [value]);
    var _useState = h2(initialValue), _useState2 = _slicedToArray(_useState, 2), selfValue = _useState2[0], setSelfValue = _useState2[1];
    var _useState3 = h2(false), _useState4 = _slicedToArray(_useState3, 2), hover = _useState4[0], setHover = _useState4[1];
    var _useMemo = F2(function() {
      return getColors(theme.palette, type4);
    }, [theme.palette, type4]), color = _useMemo.color, borderColor = _useMemo.borderColor, hoverBorder = _useMemo.hoverBorder;
    var classes = use_classes_default2("wrapper", {
      hover,
      disabled
    }, className);
    var changeHandler = function changeHandler2(event) {
      if (disabled || readOnly)
        return;
      setSelfValue(event.target.value);
      onChange && onChange(event);
    };
    var focusHandler = function focusHandler2(e3) {
      setHover(true);
      onFocus && onFocus(e3);
    };
    var blurHandler = function blurHandler2(e3) {
      setHover(false);
      onBlur && onBlur(e3);
    };
    p2(function() {
      if (isControlledComponent) {
        setSelfValue(value);
      }
    });
    var controlledValue = isControlledComponent ? {
      value: selfValue
    } : {
      defaultValue: initialValue
    };
    var textareaProps = _extends({}, props, controlledValue);
    return /* @__PURE__ */ Cn.createElement("div", {
      className: styled_jsx_es_default.dynamic([["12276481", [theme.layout.radius, borderColor, color, SCALES.font(0.875), SCALES.height(1, "auto"), SCALES.width(1, "initial"), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverBorder, theme.palette.accents_1, theme.palette.accents_2, theme.font.sans, SCALES.pt(0.5), SCALES.pr(0.5), SCALES.pb(0.5), SCALES.pl(0.5), resize, theme.palette.background]]]) + " " + (classes || "")
    }, /* @__PURE__ */ Cn.createElement("textarea", _extends({
      ref: textareaRef,
      disabled,
      placeholder,
      readOnly,
      onFocus: focusHandler,
      onBlur: blurHandler,
      onChange: changeHandler
    }, textareaProps, {
      className: styled_jsx_es_default.dynamic([["12276481", [theme.layout.radius, borderColor, color, SCALES.font(0.875), SCALES.height(1, "auto"), SCALES.width(1, "initial"), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverBorder, theme.palette.accents_1, theme.palette.accents_2, theme.font.sans, SCALES.pt(0.5), SCALES.pr(0.5), SCALES.pb(0.5), SCALES.pl(0.5), resize, theme.palette.background]]]) + " " + (textareaProps && textareaProps.className != null && textareaProps.className || "")
    })), /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "12276481",
      dynamic: [theme.layout.radius, borderColor, color, SCALES.font(0.875), SCALES.height(1, "auto"), SCALES.width(1, "initial"), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverBorder, theme.palette.accents_1, theme.palette.accents_2, theme.font.sans, SCALES.pt(0.5), SCALES.pr(0.5), SCALES.pb(0.5), SCALES.pl(0.5), resize, theme.palette.background]
    }, ".wrapper.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:".concat(theme.layout.radius, ";border:1px solid ").concat(borderColor, ";color:").concat(color, ";-webkit-transition:border 0.2s ease 0s,color 0.2s ease 0s;transition:border 0.2s ease 0s,color 0.2s ease 0s;min-width:12.5rem;max-width:95vw;--textarea-font-size:").concat(SCALES.font(0.875), ";--textarea-height:").concat(SCALES.height(1, "auto"), ";width:").concat(SCALES.width(1, "initial"), ";height:var(--textarea-height);margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.wrapper.hover.__jsx-style-dynamic-selector{border-color:").concat(hoverBorder, ";}.wrapper.disabled.__jsx-style-dynamic-selector{background-color:").concat(theme.palette.accents_1, ";border-color:").concat(theme.palette.accents_2, ";cursor:not-allowed;}textarea.__jsx-style-dynamic-selector{background-color:transparent;box-shadow:none;display:block;font-family:").concat(theme.font.sans, ";font-size:var(--textarea-font-size);width:100%;height:var(--textarea-height);border:none;outline:none;padding:").concat(SCALES.pt(0.5), " ").concat(SCALES.pr(0.5), " ").concat(SCALES.pb(0.5), " ").concat(SCALES.pl(0.5), ";resize:").concat(resize, ";}.disabled.__jsx-style-dynamic-selector>textarea.__jsx-style-dynamic-selector{cursor:not-allowed;}textarea.__jsx-style-dynamic-selector:-webkit-autofill,textarea.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:hover,textarea.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:active,textarea.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:focus{-webkit-box-shadow:0 0 0 30px ").concat(theme.palette.background, " inset !important;}")));
  });
  TextareaComponent.defaultProps = defaultProps2;
  TextareaComponent.displayName = "GeistTextarea";
  var Textarea = with_scale_default(TextareaComponent);
  var textarea_default = Textarea;

  // node_modules/@geist-ui/core/esm/textarea/index.js
  var textarea_default2 = textarea_default;

  // node_modules/@geist-ui/core/esm/input/password.js
  init_react();

  // node_modules/@geist-ui/core/esm/input/password-icon.js
  init_react();
  var PasswordIcon = function PasswordIcon2(_ref) {
    var visible = _ref.visible;
    return /* @__PURE__ */ Cn.createElement("svg", {
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none",
      shapeRendering: "geometricPrecision",
      style: {
        color: "currentColor"
      }
    }, !visible ? /* @__PURE__ */ Cn.createElement(Cn.Fragment, null, /* @__PURE__ */ Cn.createElement("path", {
      d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
    }), /* @__PURE__ */ Cn.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    })) : /* @__PURE__ */ Cn.createElement(Cn.Fragment, null, /* @__PURE__ */ Cn.createElement("path", {
      d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"
    }), /* @__PURE__ */ Cn.createElement("path", {
      d: "M1 1l22 22"
    })));
  };
  var MemoPasswordIcon = /* @__PURE__ */ Cn.memo(PasswordIcon);
  var password_icon_default = MemoPasswordIcon;

  // node_modules/@geist-ui/core/esm/input/password.js
  var _excluded5 = ["hideToggle", "children"];
  var passwordDefaultProps = _extends({}, defaultProps, {
    hideToggle: false
  });
  var InputPasswordComponent = /* @__PURE__ */ Cn.forwardRef(function(_ref, ref) {
    var hideToggle = _ref.hideToggle, children = _ref.children, props = _objectWithoutProperties(_ref, _excluded5);
    var _useScale = useScale(), getAllScaleProps2 = _useScale.getAllScaleProps;
    var inputRef = _2(null);
    var _useState = h2(false), _useState2 = _slicedToArray(_useState, 2), visible = _useState2[0], setVisible = _useState2[1];
    A2(ref, function() {
      return inputRef.current;
    });
    var iconClickHandler = function iconClickHandler2() {
      setVisible(function(v3) {
        return !v3;
      });
      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    };
    var inputProps = F2(function() {
      return _extends({}, props, {
        ref: inputRef,
        iconClickable: true,
        onIconClick: iconClickHandler,
        htmlType: visible ? "text" : "password"
      });
    }, [props, iconClickHandler, visible, inputRef]);
    var icon = F2(function() {
      if (hideToggle)
        return null;
      return /* @__PURE__ */ Cn.createElement(password_icon_default, {
        visible
      });
    }, [hideToggle, visible]);
    return /* @__PURE__ */ Cn.createElement(input_default, _extends({
      iconRight: icon
    }, getAllScaleProps2(), inputProps), children);
  });
  InputPasswordComponent.defaultProps = passwordDefaultProps;
  InputPasswordComponent.displayName = "GeistInputPassword";
  var InputPassword = with_scale_default(InputPasswordComponent);
  var password_default = InputPassword;

  // node_modules/@geist-ui/core/esm/input/index.js
  input_default.Textarea = textarea_default2;
  input_default.Password = password_default;
  var input_default2 = input_default;

  // node_modules/react-dom/index.mjs
  init_compat_module();
  init_compat_module();

  // node_modules/@geist-ui/core/esm/utils/use-portal.js
  init_react();

  // node_modules/@geist-ui/core/esm/utils/use-ssr.js
  init_react();
  var useSSR = function useSSR2() {
    var _useState = h2(false), _useState2 = _slicedToArray(_useState, 2), browser = _useState2[0], setBrowser = _useState2[1];
    p2(function() {
      setBrowser(isBrowser());
    }, []);
    return {
      isBrowser: browser,
      isServer: !browser
    };
  };
  var use_ssr_default = useSSR;

  // node_modules/@geist-ui/core/esm/utils/use-portal.js
  var createElement = function createElement2(id) {
    var el = document.createElement("div");
    el.setAttribute("id", id);
    return el;
  };
  var usePortal = function usePortal2() {
    var selectId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getId();
    var getContainer2 = arguments.length > 1 ? arguments[1] : void 0;
    var id = "geist-ui-".concat(selectId);
    var _useSSR = use_ssr_default(), isBrowser4 = _useSSR.isBrowser;
    var _useState = h2(isBrowser4 ? createElement(id) : null), _useState2 = _slicedToArray(_useState, 2), elSnapshot = _useState2[0], setElSnapshot = _useState2[1];
    p2(function() {
      var customContainer = getContainer2 ? getContainer2() : null;
      var parentElement = customContainer || document.body;
      var hasElement = parentElement.querySelector("#".concat(id));
      var el = hasElement || createElement(id);
      if (!hasElement) {
        parentElement.appendChild(el);
      }
      setElSnapshot(el);
    }, []);
    return elSnapshot;
  };
  var use_portal_default = usePortal;

  // node_modules/@geist-ui/core/esm/shared/css-transition.js
  init_react();
  var _excluded6 = ["children", "className", "visible", "enterTime", "leaveTime", "clearTime", "name"];
  var defaultProps3 = {
    visible: false,
    enterTime: 60,
    leaveTime: 60,
    clearTime: 60,
    className: "",
    name: "transition"
  };
  var CssTransition = function CssTransition2(_ref) {
    var children = _ref.children, className = _ref.className, visible = _ref.visible, enterTime = _ref.enterTime, leaveTime = _ref.leaveTime, clearTime = _ref.clearTime, name = _ref.name, props = _objectWithoutProperties(_ref, _excluded6);
    var _useState = h2(""), _useState2 = _slicedToArray(_useState, 2), classes = _useState2[0], setClasses = _useState2[1];
    var _useState3 = h2(visible), _useState4 = _slicedToArray(_useState3, 2), renderable = _useState4[0], setRenderable = _useState4[1];
    p2(function() {
      var statusClassName = visible ? "enter" : "leave";
      var time = visible ? enterTime : leaveTime;
      if (visible && !renderable) {
        setRenderable(true);
      }
      setClasses("".concat(name, "-").concat(statusClassName));
      var timer = setTimeout(function() {
        setClasses("".concat(name, "-").concat(statusClassName, " ").concat(name, "-").concat(statusClassName, "-active"));
        clearTimeout(timer);
      }, time);
      var clearClassesTimer = setTimeout(function() {
        if (!visible) {
          setClasses("");
          setRenderable(false);
        }
        clearTimeout(clearClassesTimer);
      }, time + clearTime);
      return function() {
        clearTimeout(timer);
        clearTimeout(clearClassesTimer);
      };
    }, [visible, renderable]);
    if (!/* @__PURE__ */ Cn.isValidElement(children) || !renderable)
      return null;
    return /* @__PURE__ */ Cn.cloneElement(children, _extends({}, props, {
      className: "".concat(children.props.className, " ").concat(className, " ").concat(classes)
    }));
  };
  CssTransition.defaultProps = defaultProps3;
  CssTransition.displayName = "GeistCssTransition";
  var css_transition_default = CssTransition;

  // node_modules/@geist-ui/core/esm/utils/use-warning.js
  var warningStack = {};
  var useWarning = function useWarning2(message, component) {
    var tag = component ? " [".concat(component, "]") : " ";
    var log = "[Geist UI]".concat(tag, ": ").concat(message);
    if (typeof console === "undefined")
      return;
    if (warningStack[log])
      return;
    warningStack[log] = true;
    if (true) {
      return console.error(log);
    }
    console.warn(log);
  };
  var use_warning_default = useWarning;

  // node_modules/@geist-ui/core/esm/loading/loading.js
  init_react();
  var _excluded7 = ["children", "type", "color", "className", "spaceRatio"];
  var defaultProps4 = {
    type: "default",
    className: "",
    spaceRatio: 1
  };
  var getIconBgColor = function getIconBgColor2(type4, palette3, color) {
    var colors = {
      "default": palette3.accents_6,
      secondary: palette3.secondary,
      success: palette3.success,
      warning: palette3.warning,
      error: palette3.error
    };
    return color ? color : colors[type4];
  };
  var LoadingComponent = function LoadingComponent2(_ref) {
    var children = _ref.children, type4 = _ref.type, color = _ref.color, className = _ref.className, spaceRatio = _ref.spaceRatio, props = _objectWithoutProperties(_ref, _excluded7);
    var theme = use_theme_default();
    var _useScale = use_scale_default(), SCALES = _useScale.SCALES;
    var classes = use_classes_default2("loading-container", className);
    var bgColor = F2(function() {
      return getIconBgColor(type4, theme.palette, color);
    }, [type4, theme.palette, color]);
    return /* @__PURE__ */ Cn.createElement("div", _extends({}, props, {
      className: styled_jsx_es_default.dynamic([["2201634259", [SCALES.font(1), SCALES.width(1, "100%"), SCALES.height(1, "100%"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]]]) + " " + (props && props.className != null && props.className || classes || "")
    }), /* @__PURE__ */ Cn.createElement("span", {
      className: styled_jsx_es_default.dynamic([["2201634259", [SCALES.font(1), SCALES.width(1, "100%"), SCALES.height(1, "100%"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]]]) + " loading"
    }, children && /* @__PURE__ */ Cn.createElement("label", {
      className: styled_jsx_es_default.dynamic([["2201634259", [SCALES.font(1), SCALES.width(1, "100%"), SCALES.height(1, "100%"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]]])
    }, children), /* @__PURE__ */ Cn.createElement("i", {
      className: styled_jsx_es_default.dynamic([["2201634259", [SCALES.font(1), SCALES.width(1, "100%"), SCALES.height(1, "100%"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]]])
    }), /* @__PURE__ */ Cn.createElement("i", {
      className: styled_jsx_es_default.dynamic([["2201634259", [SCALES.font(1), SCALES.width(1, "100%"), SCALES.height(1, "100%"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]]])
    }), /* @__PURE__ */ Cn.createElement("i", {
      className: styled_jsx_es_default.dynamic([["2201634259", [SCALES.font(1), SCALES.width(1, "100%"), SCALES.height(1, "100%"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]]])
    })), /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "2201634259",
      dynamic: [SCALES.font(1), SCALES.width(1, "100%"), SCALES.height(1, "100%"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]
    }, ".loading-container.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;font-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, "100%"), ";height:").concat(SCALES.height(1, "100%"), ";min-height:1em;padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}label.__jsx-style-dynamic-selector{margin-right:0.5em;color:").concat(theme.palette.accents_5, ";line-height:1;}label.__jsx-style-dynamic-selector *{margin:0;}.loading.__jsx-style-dynamic-selector{position:absolute;top:50%;left:50%;width:100%;height:100%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}i.__jsx-style-dynamic-selector{width:0.25em;height:0.25em;border-radius:50%;background-color:").concat(bgColor, ";margin:0 calc(0.25em / 2 * ").concat(spaceRatio, ");display:inline-block;-webkit-animation:loading-blink-__jsx-style-dynamic-selector 1.4s infinite both;animation:loading-blink-__jsx-style-dynamic-selector 1.4s infinite both;}i.__jsx-style-dynamic-selector:nth-child(2){-webkit-animation-delay:0.2s;animation-delay:0.2s;}i.__jsx-style-dynamic-selector:nth-child(3){-webkit-animation-delay:0.4s;animation-delay:0.4s;}@-webkit-keyframes loading-blink-__jsx-style-dynamic-selector{0%{opacity:0.2;}20%{opacity:1;}100%{opacity:0.2;}}@keyframes loading-blink-__jsx-style-dynamic-selector{0%{opacity:0.2;}20%{opacity:1;}100%{opacity:0.2;}}")));
  };
  LoadingComponent.defaultProps = defaultProps4;
  LoadingComponent.displayName = "GeistLoading";
  var Loading = with_scale_default(LoadingComponent);
  var loading_default = Loading;

  // node_modules/@geist-ui/core/esm/loading/index.js
  var loading_default2 = loading_default;

  // node_modules/@geist-ui/core/esm/use-current-state/use-current-state.js
  init_react();
  var useCurrentState = function useCurrentState2(initialState) {
    var _useState = h2(function() {
      return typeof initialState === "function" ? initialState() : initialState;
    }), _useState2 = _slicedToArray(_useState, 2), state = _useState2[0], setState = _useState2[1];
    var ref = _2(initialState);
    p2(function() {
      ref.current = state;
    }, [state]);
    var setValue = function setValue2(val) {
      var result = typeof val === "function" ? val(ref.current) : val;
      ref.current = result;
      setState(result);
    };
    return [state, setValue, ref];
  };
  var use_current_state_default = useCurrentState;

  // node_modules/@geist-ui/core/esm/use-current-state/index.js
  var use_current_state_default2 = use_current_state_default;

  // node_modules/@geist-ui/core/esm/utils/use-current-state.js
  var use_current_state_default3 = use_current_state_default2;

  // node_modules/@geist-ui/core/esm/utils/color.js
  var hexToRgb = function hexToRgb2(color) {
    var fullReg = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var full = color.replace(fullReg, function(_4, r3, g3, b3) {
      return "".concat(r3).concat(r3).concat(g3).concat(g3).concat(b3).concat(b3);
    });
    var values = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(full);
    if (!values) {
      throw new Error("Geist UI: Unsupported ".concat(color, " color."));
    }
    return [Number.parseInt(values[1], 16), Number.parseInt(values[2], 16), Number.parseInt(values[3], 16)];
  };
  var colorToRgbValues = function colorToRgbValues2(color) {
    if (color.charAt(0) === "#")
      return hexToRgb(color);
    var safeColor = color.replace(/ /g, "");
    var colorType = color.substr(0, 4);
    var regArray = safeColor.match(/\((.+)\)/);
    if (!colorType.startsWith("rgb") || !regArray) {
      console.log(color);
      throw new Error('Geist UI: Only support ["RGB", "RGBA", "HEX"] color.');
    }
    return regArray[1].split(",").map(function(str) {
      return Number.parseFloat(str);
    });
  };
  var addColorAlpha = function addColorAlpha2(color, alpha) {
    if (!/^#|rgb|RGB/.test(color))
      return color;
    var _colorToRgbValues = colorToRgbValues(color), _colorToRgbValues2 = _slicedToArray(_colorToRgbValues, 3), r3 = _colorToRgbValues2[0], g3 = _colorToRgbValues2[1], b3 = _colorToRgbValues2[2];
    var safeAlpha = alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
    return "rgba(".concat(r3, ", ").concat(g3, ", ").concat(b3, ", ").concat(safeAlpha, ")");
  };

  // node_modules/@geist-ui/core/esm/link/link.js
  init_react();

  // node_modules/@geist-ui/core/esm/link/icon.js
  init_react();
  var LinkIconComponent = function LinkIconComponent2() {
    return /* @__PURE__ */ Cn.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "0.9375em",
      height: "0.9375em",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none",
      shapeRendering: "geometricPrecision",
      className: "jsx-3409194595 icon"
    }, /* @__PURE__ */ Cn.createElement("path", {
      d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6",
      className: "jsx-3409194595"
    }), /* @__PURE__ */ Cn.createElement("path", {
      d: "M15 3h6v6",
      className: "jsx-3409194595"
    }), /* @__PURE__ */ Cn.createElement("path", {
      d: "M10 14L21 3",
      className: "jsx-3409194595"
    }), /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "3409194595"
    }, ".icon.jsx-3409194595{margin:0 0 -1px 0.1875em;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;color:currentColor;}"));
  };
  LinkIconComponent.displayName = "GeistLinkIcon";
  var LinkIcon = /* @__PURE__ */ Cn.memo(LinkIconComponent);
  var icon_default = LinkIcon;

  // node_modules/@geist-ui/core/esm/link/link.js
  var _excluded8 = ["href", "color", "underline", "children", "className", "block", "icon"];
  var defaultProps5 = {
    href: "",
    color: false,
    icon: false,
    underline: false,
    block: false,
    className: ""
  };
  var LinkComponent = /* @__PURE__ */ Cn.forwardRef(function(_ref, ref) {
    var href = _ref.href, color = _ref.color, underline = _ref.underline, children = _ref.children, className = _ref.className, block = _ref.block, icon = _ref.icon, props = _objectWithoutProperties(_ref, _excluded8);
    var theme = use_theme_default();
    var _useScale = use_scale_default(), SCALES = _useScale.SCALES;
    var linkColor = color || block ? theme.palette.link : "inherit";
    var hoverColor = color || block ? theme.palette.successLight : "inherit";
    var decoration = underline ? "underline" : "none";
    var classes = use_classes_default2("link", {
      block
    }, className);
    return /* @__PURE__ */ Cn.createElement("a", _extends({
      href
    }, props, {
      ref,
      className: styled_jsx_es_default.dynamic([["442871747", [linkColor, block ? theme.layout.radius : 0, SCALES.font(1, "inherit"), SCALES.width(1, "fit-content"), SCALES.height(1, "auto"), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.pt(0.125), SCALES.pr(0.25), SCALES.pb(0.125), SCALES.pl(0.25), SCALES.mt(0), SCALES.mr(-0.125), SCALES.mb(0), SCALES.ml(-0.125), decoration, block ? addColorAlpha(theme.palette.link, 0.1) : "unset", hoverColor]]]) + " " + (props && props.className != null && props.className || classes || "")
    }), children, icon && /* @__PURE__ */ Cn.createElement(icon_default, null), /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "442871747",
      dynamic: [linkColor, block ? theme.layout.radius : 0, SCALES.font(1, "inherit"), SCALES.width(1, "fit-content"), SCALES.height(1, "auto"), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.pt(0.125), SCALES.pr(0.25), SCALES.pb(0.125), SCALES.pl(0.25), SCALES.mt(0), SCALES.mr(-0.125), SCALES.mb(0), SCALES.ml(-0.125), decoration, block ? addColorAlpha(theme.palette.link, 0.1) : "unset", hoverColor]
    }, ".link.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;line-height:inherit;color:".concat(linkColor, ";-webkit-text-decoration:none;text-decoration:none;border-radius:").concat(block ? theme.layout.radius : 0, ";-webkit-transition:color 200ms ease 0ms;transition:color 200ms ease 0ms;font-size:").concat(SCALES.font(1, "inherit"), ";width:").concat(SCALES.width(1, "fit-content"), ";height:").concat(SCALES.height(1, "auto"), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";}.block.__jsx-style-dynamic-selector{padding:").concat(SCALES.pt(0.125), " ").concat(SCALES.pr(0.25), " ").concat(SCALES.pb(0.125), " ").concat(SCALES.pl(0.25), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(-0.125), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(-0.125), ";}.link.__jsx-style-dynamic-selector:hover,.link.__jsx-style-dynamic-selector:active,.link.__jsx-style-dynamic-selector:focus{-webkit-text-decoration:").concat(decoration, ";text-decoration:").concat(decoration, ";}.link.__jsx-style-dynamic-selector:hover{background-color:").concat(block ? addColorAlpha(theme.palette.link, 0.1) : "unset", ";color:").concat(hoverColor, ";}")));
  });
  LinkComponent.defaultProps = defaultProps5;
  LinkComponent.displayName = "GeistLink";
  var Link = with_scale_default(LinkComponent);
  var link_default = Link;

  // node_modules/@geist-ui/core/esm/link/index.js
  var link_default2 = link_default;

  // node_modules/@geist-ui/core/esm/button/button.js
  init_react();

  // node_modules/@geist-ui/core/esm/button/button.drip.js
  init_react();
  var defaultProps6 = {
    x: 0,
    y: 0
  };
  var ButtonDrip = function ButtonDrip2(_ref) {
    var x4 = _ref.x, y3 = _ref.y, color = _ref.color, onCompleted = _ref.onCompleted;
    var dripRef = _2(null);
    var top = Number.isNaN(+y3) ? 0 : y3 - 10;
    var left = Number.isNaN(+x4) ? 0 : x4 - 10;
    p2(function() {
      if (!dripRef.current)
        return;
      dripRef.current.addEventListener("animationend", onCompleted);
      return function() {
        if (!dripRef.current)
          return;
        dripRef.current.removeEventListener("animationend", onCompleted);
      };
    });
    return /* @__PURE__ */ Cn.createElement("div", {
      ref: dripRef,
      className: "jsx-3424889537 drip"
    }, /* @__PURE__ */ Cn.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      style: {
        top,
        left
      },
      className: "jsx-3424889537"
    }, /* @__PURE__ */ Cn.createElement("g", {
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      className: "jsx-3424889537"
    }, /* @__PURE__ */ Cn.createElement("g", {
      fill: color,
      className: "jsx-3424889537"
    }, /* @__PURE__ */ Cn.createElement("rect", {
      width: "100%",
      height: "100%",
      rx: "10",
      className: "jsx-3424889537"
    })))), /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "3424889537"
    }, ".drip.jsx-3424889537{position:absolute;left:0;right:0;top:0;bottom:0;}svg.jsx-3424889537{position:absolute;-webkit-animation:350ms ease-in expand-jsx-3424889537;animation:350ms ease-in expand-jsx-3424889537;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;width:1rem;height:1rem;}@-webkit-keyframes expand-jsx-3424889537{0%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}30%{opacity:1;}80%{opacity:0.5;}100%{-webkit-transform:scale(28);-ms-transform:scale(28);transform:scale(28);opacity:0;}}@keyframes expand-jsx-3424889537{0%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}30%{opacity:1;}80%{opacity:0.5;}100%{-webkit-transform:scale(28);-ms-transform:scale(28);transform:scale(28);opacity:0;}}"));
  };
  ButtonDrip.defaultProps = defaultProps6;
  ButtonDrip.displayName = "GeistButtonDrip";
  var button_drip_default = ButtonDrip;

  // node_modules/@geist-ui/core/esm/button/button-loading.js
  init_react();
  var ButtonLoading = function ButtonLoading2(_ref) {
    var color = _ref.color;
    return /* @__PURE__ */ Cn.createElement("div", {
      className: "jsx-3416748964 btn-loading"
    }, /* @__PURE__ */ Cn.createElement(loading_default2, {
      color
    }), /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "3416748964"
    }, ".btn-loading.jsx-3416748964{position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;background-color:var(--geist-ui-button-bg);}"));
  };
  ButtonLoading.displayName = "GeistButtonLoading";
  var button_loading_default = ButtonLoading;

  // node_modules/@geist-ui/core/esm/button/utils.js
  init_react();

  // node_modules/@geist-ui/core/esm/button/button-icon.js
  init_react();
  var _excluded9 = ["isRight", "isSingle", "children", "className"];
  var defaultProps7 = {
    isRight: false,
    className: ""
  };
  var ButtonIcon = function ButtonIcon2(_ref) {
    var isRight = _ref.isRight, isSingle = _ref.isSingle, children = _ref.children, className = _ref.className, props = _objectWithoutProperties(_ref, _excluded9);
    var classes = use_classes_default2("icon", {
      right: isRight,
      single: isSingle
    }, className);
    return /* @__PURE__ */ Cn.createElement("span", _extends({}, props, {
      className: "jsx-643337184 " + (props && props.className != null && props.className || classes || "")
    }), children, /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "643337184"
    }, ".icon.jsx-643337184{position:absolute;left:var(--geist-ui-button-icon-padding);right:auto;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--geist-ui-button-color);z-index:1;}.right.jsx-643337184{right:var(--geist-ui-button-icon-padding);left:auto;}.icon.jsx-643337184 svg{background:transparent;height:calc(var(--geist-ui-button-height) / 2.35);width:calc(var(--geist-ui-button-height) / 2.35);}.single.jsx-643337184{position:static;-webkit-transform:none;-ms-transform:none;transform:none;}"));
  };
  ButtonIcon.defaultProps = defaultProps7;
  ButtonIcon.displayName = "GeistButtonIcon";
  var button_icon_default = ButtonIcon;

  // node_modules/@geist-ui/core/esm/button/utils.js
  var getButtonChildrenWithIcon = function getButtonChildrenWithIcon2(auto, children, icons) {
    var icon = icons.icon, iconRight = icons.iconRight;
    var hasIcon = icon || iconRight;
    var isRight = Boolean(iconRight);
    var paddingForAutoMode = auto ? "calc(var(--geist-ui-button-height) / 2 + var(--geist-ui-button-icon-padding) * .5)" : 0;
    var classes = use_classes_default2("text", isRight ? "right" : "left");
    if (!hasIcon)
      return /* @__PURE__ */ Cn.createElement("div", {
        className: "text"
      }, children);
    if (Cn.Children.count(children) === 0) {
      return /* @__PURE__ */ Cn.createElement(button_icon_default, {
        isRight,
        isSingle: true
      }, hasIcon);
    }
    return /* @__PURE__ */ Cn.createElement(Cn.Fragment, null, /* @__PURE__ */ Cn.createElement(button_icon_default, {
      isRight
    }, hasIcon), /* @__PURE__ */ Cn.createElement("div", {
      className: styled_jsx_es_default.dynamic([["3568181479", [paddingForAutoMode, paddingForAutoMode]]]) + " " + (classes || "")
    }, children, /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "3568181479",
      dynamic: [paddingForAutoMode, paddingForAutoMode]
    }, ".left.__jsx-style-dynamic-selector{padding-left:".concat(paddingForAutoMode, ";}.right.__jsx-style-dynamic-selector{padding-right:").concat(paddingForAutoMode, ";}"))));
  };
  var filterPropsWithGroup = function filterPropsWithGroup2(props, config) {
    if (!config.isButtonGroup)
      return props;
    return _extends({}, props, {
      auto: true,
      shadow: false,
      ghost: config.ghost || props.ghost,
      type: config.type || props.type,
      disabled: config.disabled || props.disabled
    });
  };

  // node_modules/@geist-ui/core/esm/button-group/button-group-context.js
  init_react();
  var defaultContext2 = {
    isButtonGroup: false,
    disabled: false
  };
  var ButtonGroupContext = /* @__PURE__ */ Cn.createContext(defaultContext2);
  var useButtonGroupContext = function useButtonGroupContext2() {
    return Cn.useContext(ButtonGroupContext);
  };

  // node_modules/@geist-ui/core/esm/button/styles.js
  var getButtonGhostColors = function getButtonGhostColors2(palette3, type4) {
    var colors = {
      secondary: {
        bg: palette3.background,
        border: palette3.foreground,
        color: palette3.foreground
      },
      success: {
        bg: palette3.background,
        border: palette3.success,
        color: palette3.success
      },
      warning: {
        bg: palette3.background,
        border: palette3.warning,
        color: palette3.warning
      },
      error: {
        bg: palette3.background,
        border: palette3.error,
        color: palette3.error
      }
    };
    return colors[type4] || null;
  };
  var getButtonColors = function getButtonColors2(palette3, props) {
    var type4 = props.type, disabled = props.disabled, ghost = props.ghost;
    var colors = {
      "default": {
        bg: palette3.background,
        border: palette3.border,
        color: palette3.accents_5
      },
      secondary: {
        bg: palette3.foreground,
        border: palette3.foreground,
        color: palette3.background
      },
      success: {
        bg: palette3.success,
        border: palette3.success,
        color: "#fff"
      },
      warning: {
        bg: palette3.warning,
        border: palette3.warning,
        color: "#fff"
      },
      error: {
        bg: palette3.error,
        border: palette3.error,
        color: "#fff"
      },
      abort: {
        bg: "transparent",
        border: "transparent",
        color: palette3.accents_5
      }
    };
    if (disabled)
      return {
        bg: palette3.accents_1,
        border: palette3.accents_2,
        color: "#ccc"
      };
    var withoutLightType = type4 === null || type4 === void 0 ? void 0 : type4.replace("-light", "");
    var defaultColor = colors["default"];
    if (ghost)
      return getButtonGhostColors(palette3, withoutLightType) || defaultColor;
    return colors[withoutLightType] || defaultColor;
  };
  var getButtonGhostHoverColors = function getButtonGhostHoverColors2(palette3, type4) {
    var colors = {
      secondary: {
        bg: palette3.foreground,
        border: palette3.background,
        color: palette3.background
      },
      success: {
        bg: palette3.success,
        border: palette3.background,
        color: "white"
      },
      warning: {
        bg: palette3.warning,
        border: palette3.background,
        color: "white"
      },
      error: {
        bg: palette3.error,
        border: palette3.background,
        color: "white"
      }
    };
    var withoutLightType = type4.replace("-light", "");
    return colors[withoutLightType] || null;
  };
  var getButtonHoverColors = function getButtonHoverColors2(palette3, props) {
    var type4 = props.type, disabled = props.disabled, loading = props.loading, shadow = props.shadow, ghost = props.ghost;
    var defaultColor = getButtonColors(palette3, props);
    var alphaBackground = addColorAlpha(defaultColor.bg, 0.85);
    var colors = {
      "default": {
        bg: palette3.background,
        border: palette3.foreground
      },
      secondary: {
        bg: palette3.background,
        border: palette3.foreground
      },
      success: {
        bg: palette3.background,
        border: palette3.success
      },
      warning: {
        bg: palette3.background,
        border: palette3.warning
      },
      error: {
        bg: palette3.background,
        border: palette3.error
      },
      abort: {
        bg: "transparent",
        border: "transparent",
        color: palette3.accents_5
      },
      "secondary-light": _extends({}, defaultColor, {
        bg: alphaBackground
      }),
      "success-light": _extends({}, defaultColor, {
        bg: alphaBackground
      }),
      "warning-light": _extends({}, defaultColor, {
        bg: alphaBackground
      }),
      "error-light": _extends({}, defaultColor, {
        bg: alphaBackground
      })
    };
    if (disabled)
      return {
        bg: palette3.accents_1,
        border: palette3.accents_2,
        color: "#ccc"
      };
    if (loading)
      return _extends({}, defaultColor, {
        color: "transparent"
      });
    if (shadow)
      return defaultColor;
    var hoverColor = (ghost ? getButtonGhostHoverColors(palette3, type4) : colors[type4]) || colors["default"];
    return _extends({}, hoverColor, {
      color: hoverColor.color || hoverColor.border
    });
  };
  var getButtonCursor = function getButtonCursor2(disabled, loading) {
    if (disabled)
      return {
        cursor: "not-allowed",
        events: "auto"
      };
    if (loading)
      return {
        cursor: "default",
        events: "none"
      };
    return {
      cursor: "pointer",
      events: "auto"
    };
  };
  var getButtonDripColor = function getButtonDripColor2(palette3, props) {
    var type4 = props.type;
    var isLightHover = type4.endsWith("light");
    var hoverColors = getButtonHoverColors(palette3, props);
    return isLightHover ? addColorAlpha(hoverColors.bg, 0.65) : addColorAlpha(palette3.accents_2, 0.65);
  };

  // node_modules/@geist-ui/core/esm/button/button.js
  var _excluded10 = ["children", "disabled", "type", "loading", "shadow", "ghost", "effect", "onClick", "auto", "icon", "htmlType", "iconRight", "className"];
  var defaultProps8 = {
    type: "default",
    htmlType: "button",
    ghost: false,
    loading: false,
    shadow: false,
    auto: false,
    effect: true,
    disabled: false,
    className: ""
  };
  var ButtonComponent = /* @__PURE__ */ Cn.forwardRef(function(btnProps, ref) {
    var theme = use_theme_default();
    var _useScale = use_scale_default(), SCALES = _useScale.SCALES;
    var buttonRef = _2(null);
    A2(ref, function() {
      return buttonRef.current;
    });
    var _useState = h2(false), _useState2 = _slicedToArray(_useState, 2), dripShow = _useState2[0], setDripShow = _useState2[1];
    var _useState3 = h2(0), _useState4 = _slicedToArray(_useState3, 2), dripX = _useState4[0], setDripX = _useState4[1];
    var _useState5 = h2(0), _useState6 = _slicedToArray(_useState5, 2), dripY = _useState6[0], setDripY = _useState6[1];
    var groupConfig = useButtonGroupContext();
    var filteredProps = filterPropsWithGroup(btnProps, groupConfig);
    var children = filteredProps.children, disabled = filteredProps.disabled, type4 = filteredProps.type, loading = filteredProps.loading, shadow = filteredProps.shadow, ghost = filteredProps.ghost, effect = filteredProps.effect, onClick = filteredProps.onClick, auto = filteredProps.auto, icon = filteredProps.icon, htmlType = filteredProps.htmlType, iconRight = filteredProps.iconRight, className = filteredProps.className, props = _objectWithoutProperties(filteredProps, _excluded10);
    var _useMemo = F2(function() {
      return getButtonColors(theme.palette, filteredProps);
    }, [theme.palette, filteredProps]), bg = _useMemo.bg, border = _useMemo.border, color = _useMemo.color;
    var hover = F2(function() {
      return getButtonHoverColors(theme.palette, filteredProps);
    }, [theme.palette, filteredProps]);
    var _useMemo2 = F2(function() {
      return getButtonCursor(disabled, loading);
    }, [disabled, loading]), cursor = _useMemo2.cursor, events = _useMemo2.events;
    var dripColor = F2(function() {
      return getButtonDripColor(theme.palette, filteredProps);
    }, [theme.palette, filteredProps]);
    var dripCompletedHandle = function dripCompletedHandle2() {
      setDripShow(false);
      setDripX(0);
      setDripY(0);
    };
    var clickHandler = function clickHandler2(event) {
      if (disabled || loading)
        return;
      var showDrip = !shadow && !ghost && effect;
      if (showDrip && buttonRef.current) {
        var rect = buttonRef.current.getBoundingClientRect();
        setDripShow(true);
        setDripX(event.clientX - rect.left);
        setDripY(event.clientY - rect.top);
      }
      onClick && onClick(event);
    };
    var childrenWithIcon = F2(function() {
      return getButtonChildrenWithIcon(auto, children, {
        icon,
        iconRight
      });
    }, [auto, children, icon, iconRight]);
    var paddingLeft = auto ? SCALES.pl(1.15) : SCALES.pl(1.375), paddingRight = auto ? SCALES.pr(1.15) : SCALES.pr(1.375);
    return /* @__PURE__ */ Cn.createElement("button", _extends({
      ref: buttonRef,
      type: htmlType,
      disabled,
      onClick: clickHandler
    }, props, {
      className: styled_jsx_es_default.dynamic([["86551275", [SCALES.height(2.5), theme.layout.radius, SCALES.font(0.875), color, bg, border, cursor, events, shadow ? theme.expressiveness.shadowSmall : "none", SCALES.pl(0.727), SCALES.height(2.5), color, bg, auto ? "min-content" : SCALES.width(10.5), auto ? "auto" : "initial", SCALES.height(2.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hover.color, hover.color, hover.bg, hover.border, cursor, events, shadow ? theme.expressiveness.shadowMedium : "none", shadow ? "-1px" : "0px"]]]) + " " + (props && props.className != null && props.className || use_classes_default2("btn", className) || "")
    }), loading && /* @__PURE__ */ Cn.createElement(button_loading_default, {
      color
    }), childrenWithIcon, dripShow && /* @__PURE__ */ Cn.createElement(button_drip_default, {
      x: dripX,
      y: dripY,
      color: dripColor,
      onCompleted: dripCompletedHandle
    }), /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "86551275",
      dynamic: [SCALES.height(2.5), theme.layout.radius, SCALES.font(0.875), color, bg, border, cursor, events, shadow ? theme.expressiveness.shadowSmall : "none", SCALES.pl(0.727), SCALES.height(2.5), color, bg, auto ? "min-content" : SCALES.width(10.5), auto ? "auto" : "initial", SCALES.height(2.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hover.color, hover.color, hover.bg, hover.border, cursor, events, shadow ? theme.expressiveness.shadowMedium : "none", shadow ? "-1px" : "0px"]
    }, ".btn.__jsx-style-dynamic-selector{box-sizing:border-box;display:inline-block;line-height:".concat(SCALES.height(2.5), ";border-radius:").concat(theme.layout.radius, ";font-weight:400;font-size:").concat(SCALES.font(0.875), ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;text-transform:capitalize;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;white-space:nowrap;-webkit-transition:background-color 200ms ease 0ms,box-shadow 200ms ease 0ms, border 200ms ease 0ms,color 200ms ease 0ms;transition:background-color 200ms ease 0ms,box-shadow 200ms ease 0ms, border 200ms ease 0ms,color 200ms ease 0ms;position:relative;overflow:hidden;color:").concat(color, ";background-color:").concat(bg, ";border:1px solid ").concat(border, ";cursor:").concat(cursor, ";pointer-events:").concat(events, ";box-shadow:").concat(shadow ? theme.expressiveness.shadowSmall : "none", ";--geist-ui-button-icon-padding:").concat(SCALES.pl(0.727), ";--geist-ui-button-height:").concat(SCALES.height(2.5), ";--geist-ui-button-color:").concat(color, ";--geist-ui-button-bg:").concat(bg, ";min-width:").concat(auto ? "min-content" : SCALES.width(10.5), ";width:").concat(auto ? "auto" : "initial", ";height:").concat(SCALES.height(2.5), ";padding:").concat(SCALES.pt(0), " ").concat(paddingRight, " ").concat(SCALES.pb(0), " ").concat(paddingLeft, ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.btn.__jsx-style-dynamic-selector:hover,.btn.__jsx-style-dynamic-selector:focus{color:").concat(hover.color, ";--geist-ui-button-color:").concat(hover.color, ";background-color:").concat(hover.bg, ";border-color:").concat(hover.border, ";cursor:").concat(cursor, ";pointer-events:").concat(events, ";box-shadow:").concat(shadow ? theme.expressiveness.shadowMedium : "none", ";-webkit-transform:translate3d(0px,").concat(shadow ? "-1px" : "0px", ",0px);-ms-transform:translate3d(0px,").concat(shadow ? "-1px" : "0px", ",0px);transform:translate3d(0px,").concat(shadow ? "-1px" : "0px", ",0px);}.btn.__jsx-style-dynamic-selector .text{position:relative;z-index:1;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;line-height:inherit;top:-1px;}.btn.__jsx-style-dynamic-selector .text p,.btn.__jsx-style-dynamic-selector .text pre,.btn.__jsx-style-dynamic-selector .text div{margin:0;}")));
  });
  ButtonComponent.defaultProps = defaultProps8;
  ButtonComponent.displayName = "GeistButton";
  var Button = with_scale_default(ButtonComponent);
  var button_default = Button;

  // node_modules/@geist-ui/core/esm/button/index.js
  var button_default2 = button_default;

  // node_modules/@geist-ui/core/esm/card/card.js
  init_react();

  // node_modules/@geist-ui/core/esm/card/styles.js
  var getStyles = function getStyles2(type4, palette3, isShadow) {
    var colors = {
      "default": {
        color: palette3.foreground,
        bgColor: palette3.background
      },
      dark: {
        color: palette3.background,
        bgColor: palette3.foreground
      },
      secondary: {
        color: palette3.background,
        bgColor: palette3.secondary
      },
      success: {
        color: palette3.background,
        bgColor: palette3.success
      },
      warning: {
        color: palette3.background,
        bgColor: palette3.warning
      },
      error: {
        color: palette3.background,
        bgColor: palette3.error
      },
      lite: {
        color: palette3.foreground,
        bgColor: palette3.background
      },
      alert: {
        color: "white",
        bgColor: palette3.alert
      },
      purple: {
        color: "white",
        bgColor: palette3.purple
      },
      violet: {
        color: "white",
        bgColor: palette3.violet
      },
      cyan: {
        color: "black",
        bgColor: palette3.cyan
      }
    };
    var showBorder = type4 === "default" && !isShadow;
    return _extends({}, colors[type4], {
      borderColor: showBorder ? palette3.border : "transparent"
    });
  };

  // node_modules/@geist-ui/core/esm/card/card-footer.js
  init_react();
  var _excluded11 = ["children", "className", "disableAutoMargin"];
  var defaultProps9 = {
    disableAutoMargin: false,
    className: ""
  };
  var CardFooterComponent = function CardFooterComponent2(_ref) {
    var children = _ref.children, className = _ref.className, disableAutoMargin = _ref.disableAutoMargin, props = _objectWithoutProperties(_ref, _excluded11);
    var theme = use_theme_default();
    var _useScale = use_scale_default(), SCALES = _useScale.SCALES;
    var classes = use_classes_default2({
      "auto-margin": !disableAutoMargin
    }, className);
    return /* @__PURE__ */ Cn.createElement("footer", _extends({}, props, {
      className: styled_jsx_es_default.dynamic([["1602358380", [SCALES.py(0.66), SCALES.px(1.31), SCALES.font(0.875), theme.palette.border, theme.layout.radius, theme.layout.radius, SCALES.height(3.3), SCALES.width(1, "auto"), SCALES.height(1, "auto"), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.gapQuarter]]]) + " " + (props && props.className != null && props.className || classes || "")
    }), children, /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "1602358380",
      dynamic: [SCALES.py(0.66), SCALES.px(1.31), SCALES.font(0.875), theme.palette.border, theme.layout.radius, theme.layout.radius, SCALES.height(3.3), SCALES.width(1, "auto"), SCALES.height(1, "auto"), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.gapQuarter]
    }, "footer.__jsx-style-dynamic-selector{padding:".concat(SCALES.py(0.66), " ").concat(SCALES.px(1.31), ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;color:inherit;background-color:inherit;font-size:").concat(SCALES.font(0.875), ";border-top:1px solid ").concat(theme.palette.border, ";border-bottom-left-radius:").concat(theme.layout.radius, ";border-bottom-right-radius:").concat(theme.layout.radius, ";min-height:").concat(SCALES.height(3.3), ";width:").concat(SCALES.width(1, "auto"), ";height:").concat(SCALES.height(1, "auto"), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.auto-margin.__jsx-style-dynamic-selector *{margin-top:0;margin-bottom:0;margin-right:").concat(theme.layout.gapQuarter, ";}")));
  };
  CardFooterComponent.defaultProps = defaultProps9;
  CardFooterComponent.displayName = "GeistCardFooter";
  var CardFooter = with_scale_default(CardFooterComponent);
  var card_footer_default = CardFooter;

  // node_modules/@geist-ui/core/esm/card/card-content.js
  init_react();
  var _excluded12 = ["className", "children"];
  var defaultProps10 = {
    className: ""
  };
  var CardContentComponent = function CardContentComponent2(_ref) {
    var className = _ref.className, children = _ref.children, props = _objectWithoutProperties(_ref, _excluded12);
    var _useScale = use_scale_default(), SCALES = _useScale.SCALES;
    return /* @__PURE__ */ Cn.createElement("div", _extends({}, props, {
      className: styled_jsx_es_default.dynamic([["490544004", [SCALES.width(1, "100%"), SCALES.height(1, "auto"), SCALES.pt(1), SCALES.pr(1), SCALES.pb(1), SCALES.pl(1), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || use_classes_default2("content", className) || "")
    }), children, /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "490544004",
      dynamic: [SCALES.width(1, "100%"), SCALES.height(1, "auto"), SCALES.pt(1), SCALES.pr(1), SCALES.pb(1), SCALES.pl(1), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
    }, ".content.__jsx-style-dynamic-selector{width:".concat(SCALES.width(1, "100%"), ";height:").concat(SCALES.height(1, "auto"), ";padding:").concat(SCALES.pt(1), " ").concat(SCALES.pr(1), " ").concat(SCALES.pb(1), " ").concat(SCALES.pl(1), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.content.__jsx-style-dynamic-selector>p:first-child{margin-top:0;}.content.__jsx-style-dynamic-selector>p:last-child{margin-bottom:0;}")));
  };
  CardContentComponent.defaultProps = defaultProps10;
  CardContentComponent.displayName = "GeistCardContent";
  var CardContent = with_scale_default(CardContentComponent);
  var card_content_default = CardContent;

  // node_modules/@geist-ui/core/esm/image/image.js
  init_react();

  // node_modules/@geist-ui/core/esm/image/image.skeleton.js
  init_react();
  var _excluded13 = ["opacity"];
  var defaultProps11 = {
    opacity: 0.5
  };
  var ImageSkeleton = /* @__PURE__ */ Cn.memo(function(_ref) {
    var opacity = _ref.opacity, props = _objectWithoutProperties(_ref, _excluded13);
    var theme = use_theme_default();
    return /* @__PURE__ */ Cn.createElement("div", _extends({}, props, {
      className: styled_jsx_es_default.dynamic([["2946022605", [theme.palette.accents_1, theme.palette.accents_2, theme.palette.accents_2, theme.palette.accents_1, opacity]]]) + " " + (props && props.className != null && props.className || "skeleton")
    }), /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "2946022605",
      dynamic: [theme.palette.accents_1, theme.palette.accents_2, theme.palette.accents_2, theme.palette.accents_1, opacity]
    }, ".skeleton.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background-image:linear-gradient( 270deg, ".concat(theme.palette.accents_1, ", ").concat(theme.palette.accents_2, ", ").concat(theme.palette.accents_2, ", ").concat(theme.palette.accents_1, " );background-size:400% 100%;-webkit-animation:loading-__jsx-style-dynamic-selector 3s ease-in-out infinite;animation:loading-__jsx-style-dynamic-selector 3s ease-in-out infinite;opacity:").concat(opacity, ";-webkit-transition:opacity 300ms ease-out;transition:opacity 300ms ease-out;}@-webkit-keyframes loading-__jsx-style-dynamic-selector{0%{background-position:200% 0;}to{background-position:-200% 0;}}@keyframes loading-__jsx-style-dynamic-selector{0%{background-position:200% 0;}to{background-position:-200% 0;}}")));
  });
  ImageSkeleton.defaultProps = defaultProps11;
  ImageSkeleton.displayName = "GeistImageSkeleton";
  var image_skeleton_default = ImageSkeleton;

  // node_modules/@geist-ui/core/esm/image/helpers.js
  var transformDataSource = function transformDataSource2(src) {
    var left = "".concat(src).slice(0, 4);
    if (encodeURIComponent(left) === "%3Csvg") {
      return "data:image/svg+xml;utf8,".concat(src);
    }
    return src;
  };
  var getHostFromUrl = function getHostFromUrl2(url2) {
    try {
      return new URL(url2).host;
    } catch (e3) {
      return url2;
    }
  };

  // node_modules/@geist-ui/core/esm/image/image.js
  var _excluded14 = ["src", "disableSkeleton", "className", "maxDelay"];
  var defaultProps12 = {
    disableSkeleton: false,
    className: "",
    maxDelay: 3e3
  };
  var ImageComponent = function ImageComponent2(_ref) {
    var src = _ref.src, disableSkeleton = _ref.disableSkeleton, className = _ref.className, maxDelay = _ref.maxDelay, props = _objectWithoutProperties(_ref, _excluded14);
    var _useScale = use_scale_default(), SCALES = _useScale.SCALES, getScaleProps2 = _useScale.getScaleProps;
    var width = getScaleProps2(["width", "w"]);
    var height = getScaleProps2(["height", "h"]);
    var showAnimation = !disableSkeleton && width && height;
    var theme = use_theme_default();
    var _useState = h2(true), _useState2 = _slicedToArray(_useState, 2), loading = _useState2[0], setLoading = _useState2[1];
    var _useState3 = h2(true), _useState4 = _slicedToArray(_useState3, 2), showSkeleton = _useState4[0], setShowSkeleton = _useState4[1];
    var imageRef = _2(null);
    var url2 = F2(function() {
      return transformDataSource(src);
    }, [src]);
    var imageLoaded = function imageLoaded2() {
      if (!showAnimation)
        return;
      setLoading(false);
    };
    p2(function() {
      if (!showAnimation)
        return;
      if (!imageRef.current)
        return;
      if (imageRef.current.complete) {
        setLoading(false);
        setShowSkeleton(false);
      }
    });
    p2(function() {
      var timer = setTimeout(function() {
        if (showAnimation) {
          setShowSkeleton(false);
        }
        clearTimeout(timer);
      }, maxDelay);
      return function() {
        return clearTimeout(timer);
      };
    }, [loading]);
    return /* @__PURE__ */ Cn.createElement("div", {
      className: styled_jsx_es_default.dynamic([["4175752462", [theme.layout.radius, SCALES.width(1, "auto"), SCALES.height(1, "auto"), SCALES.mt(0), SCALES.mr(0, "auto"), SCALES.mb(0), SCALES.ml(0, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.width(1, "auto"), SCALES.height(1, "auto")]]]) + " " + (use_classes_default2("image", className) || "")
    }, showSkeleton && showAnimation && /* @__PURE__ */ Cn.createElement(image_skeleton_default, {
      opacity: loading ? 0.5 : 0
    }), /* @__PURE__ */ Cn.createElement("img", _extends({
      ref: imageRef,
      onLoad: imageLoaded,
      src: url2
    }, props, {
      className: styled_jsx_es_default.dynamic([["4175752462", [theme.layout.radius, SCALES.width(1, "auto"), SCALES.height(1, "auto"), SCALES.mt(0), SCALES.mr(0, "auto"), SCALES.mb(0), SCALES.ml(0, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.width(1, "auto"), SCALES.height(1, "auto")]]]) + " " + (props && props.className != null && props.className || "")
    })), /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "4175752462",
      dynamic: [theme.layout.radius, SCALES.width(1, "auto"), SCALES.height(1, "auto"), SCALES.mt(0), SCALES.mr(0, "auto"), SCALES.mb(0), SCALES.ml(0, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.width(1, "auto"), SCALES.height(1, "auto")]
    }, ".image.__jsx-style-dynamic-selector{position:relative;border-radius:".concat(theme.layout.radius, ";overflow:hidden;max-width:100%;width:").concat(SCALES.width(1, "auto"), ";height:").concat(SCALES.height(1, "auto"), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0, "auto"), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0, "auto"), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";}img.__jsx-style-dynamic-selector{width:").concat(SCALES.width(1, "auto"), ";height:").concat(SCALES.height(1, "auto"), ";object-fit:scale-down;display:inline-block;}")));
  };
  ImageComponent.defaultProps = defaultProps12;
  ImageComponent.displayName = "GeistImage";
  var Image = with_scale_default(ImageComponent);
  var image_default = Image;

  // node_modules/@geist-ui/core/esm/image/image-browser.js
  init_react();

  // node_modules/@geist-ui/core/esm/image/image-browser-https-icon.js
  init_react();
  var ImageBrowserHttpsIcon = function ImageBrowserHttpsIcon2() {
    return /* @__PURE__ */ Cn.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className: "jsx-4165143638"
    }, /* @__PURE__ */ Cn.createElement("path", {
      d: "M5 10.2H19V21H5V10.2Z",
      className: "jsx-4165143638"
    }), /* @__PURE__ */ Cn.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 12C13.933 12 15.5 10.3882 15.5 8.4C15.5 6.41177 13.933 4.8 12 4.8C10.067 4.8 8.5 6.41177 8.5 8.4C8.5 10.3882 10.067 12 12 12ZM12 13.8C14.8995 13.8 17.25 11.3823 17.25 8.4C17.25 5.41766 14.8995 3 12 3C9.10051 3 6.75 5.41766 6.75 8.4C6.75 11.3823 9.10051 13.8 12 13.8Z",
      className: "jsx-4165143638"
    }), /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "4165143638"
    }, "svg.jsx-4165143638{width:1em;height:1em;}"));
  };
  var MemoImageBrowserHttpsIcon = /* @__PURE__ */ Cn.memo(ImageBrowserHttpsIcon);
  var image_browser_https_icon_default = MemoImageBrowserHttpsIcon;

  // node_modules/@geist-ui/core/esm/image/styles.js
  var getBrowserColors = function getBrowserColors2(invert, palette3) {
    return invert ? {
      color: palette3.background,
      barBgColor: palette3.foreground,
      inputBgColor: palette3.accents_8,
      borderColor: palette3.accents_7,
      titleColor: palette3.accents_2
    } : {
      color: palette3.foreground,
      barBgColor: palette3.background,
      inputBgColor: palette3.accents_1,
      borderColor: palette3.border,
      titleColor: palette3.accents_5
    };
  };

  // node_modules/@geist-ui/core/esm/image/image-browser.js
  var _excluded15 = ["url", "title", "children", "showFullLink", "invert", "anchorProps", "className"];
  var defaultProps13 = {
    className: "",
    showFullLink: false,
    anchorProps: {},
    invert: false
  };
  var getTitle = function getTitle2(title, colors) {
    return /* @__PURE__ */ Cn.createElement("div", {
      className: styled_jsx_es_default.dynamic([["524099755", [colors.titleColor]]]) + " title"
    }, title, /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "524099755",
      dynamic: [colors.titleColor]
    }, ".title.__jsx-style-dynamic-selector{color:".concat(colors.titleColor, ";font-size:0.75em;}")));
  };
  var getAddressInput = function getAddressInput2(url2, showFullLink, colors, anchorProps) {
    return /* @__PURE__ */ Cn.createElement("div", {
      className: styled_jsx_es_default.dynamic([["3718009574", [colors.inputBgColor]]]) + " address-input"
    }, /* @__PURE__ */ Cn.createElement("span", {
      className: styled_jsx_es_default.dynamic([["3718009574", [colors.inputBgColor]]]) + " https"
    }, /* @__PURE__ */ Cn.createElement(image_browser_https_icon_default, null)), /* @__PURE__ */ Cn.createElement(link_default2, _extends({
      href: url2,
      title: url2,
      target: "_blank"
    }, anchorProps), showFullLink ? url2 : getHostFromUrl(url2)), /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "3718009574",
      dynamic: [colors.inputBgColor]
    }, ".address-input.__jsx-style-dynamic-selector{height:1.75em;max-width:60%;min-width:40%;background-color:".concat(colors.inputBgColor, ";color:inherit;border-radius:3px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 10px;overflow:hidden;position:relative;}.address-input.__jsx-style-dynamic-selector *{font-size:0.75em;color:inherit;}.address-input.__jsx-style-dynamic-selector a{max-width:90%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;display:inline-block;color:inherit;}.https.__jsx-style-dynamic-selector{width:0.75em;height:0.75em;font-size:1em;margin-right:0.31em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:-1px;color:inherit;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}")));
  };
  var ImageBrowserComponent = /* @__PURE__ */ Cn.forwardRef(function(_ref, ref) {
    var url2 = _ref.url, title = _ref.title, children = _ref.children, showFullLink = _ref.showFullLink, invert = _ref.invert, anchorProps = _ref.anchorProps, className = _ref.className, props = _objectWithoutProperties(_ref, _excluded15);
    var theme = use_theme_default();
    var _useScale = use_scale_default(), SCALES = _useScale.SCALES;
    var colors = F2(function() {
      return getBrowserColors(invert, theme.palette);
    }, [invert, theme.palette]);
    var input = F2(function() {
      if (url2)
        return getAddressInput(url2, showFullLink, colors, anchorProps);
      if (title)
        return getTitle(title, colors);
      return null;
    }, [url2, showFullLink, title, colors, anchorProps]);
    return /* @__PURE__ */ Cn.createElement("div", _extends({
      ref
    }, props, {
      className: styled_jsx_es_default.dynamic([["1856409351", [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, "max-content"), SCALES.height(1, "auto"), SCALES.mt(0), SCALES.mr(0, "auto"), SCALES.mb(0), SCALES.ml(0, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]]]) + " " + (props && props.className != null && props.className || use_classes_default2("browser", className) || "")
    }), /* @__PURE__ */ Cn.createElement("header", {
      className: styled_jsx_es_default.dynamic([["1856409351", [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, "max-content"), SCALES.height(1, "auto"), SCALES.mt(0), SCALES.mr(0, "auto"), SCALES.mb(0), SCALES.ml(0, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]]])
    }, /* @__PURE__ */ Cn.createElement("div", {
      className: styled_jsx_es_default.dynamic([["1856409351", [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, "max-content"), SCALES.height(1, "auto"), SCALES.mt(0), SCALES.mr(0, "auto"), SCALES.mb(0), SCALES.ml(0, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]]]) + " traffic"
    }, /* @__PURE__ */ Cn.createElement("span", {
      className: styled_jsx_es_default.dynamic([["1856409351", [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, "max-content"), SCALES.height(1, "auto"), SCALES.mt(0), SCALES.mr(0, "auto"), SCALES.mb(0), SCALES.ml(0, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]]]) + " close"
    }), /* @__PURE__ */ Cn.createElement("span", {
      className: styled_jsx_es_default.dynamic([["1856409351", [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, "max-content"), SCALES.height(1, "auto"), SCALES.mt(0), SCALES.mr(0, "auto"), SCALES.mb(0), SCALES.ml(0, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]]]) + " mini"
    }), /* @__PURE__ */ Cn.createElement("span", {
      className: styled_jsx_es_default.dynamic([["1856409351", [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, "max-content"), SCALES.height(1, "auto"), SCALES.mt(0), SCALES.mr(0, "auto"), SCALES.mb(0), SCALES.ml(0, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]]]) + " full"
    })), input), children, /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "1856409351",
      dynamic: [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, "max-content"), SCALES.height(1, "auto"), SCALES.mt(0), SCALES.mr(0, "auto"), SCALES.mb(0), SCALES.ml(0, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]
    }, ".browser.__jsx-style-dynamic-selector{background-color:transparent;box-shadow:".concat(theme.expressiveness.shadowLarge, ";max-width:100%;border-radius:").concat(theme.layout.radius, ";overflow:hidden;font-size:").concat(SCALES.font(1), ";width:").concat(SCALES.width(1, "max-content"), ";height:").concat(SCALES.height(1, "auto"), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0, "auto"), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0, "auto"), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";}.browser.__jsx-style-dynamic-selector .image{border-top-left-radius:0;border-top-right-radius:0;}header.__jsx-style-dynamic-selector{height:2.5em;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;color:").concat(colors.color, ";background-color:").concat(colors.barBgColor, ";border-bottom:1px solid ").concat(colors.borderColor, ";}.traffic.__jsx-style-dynamic-selector{width:auto;position:absolute;left:").concat(theme.layout.gapHalf, ";top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);bottom:0;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:inherit;}.traffic.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{border-radius:50%;width:0.75em;height:0.75em;max-width:20px;max-height:20px;display:inline-block;margin-right:0.5em;}.close.__jsx-style-dynamic-selector{background-color:#ff5f56;}.mini.__jsx-style-dynamic-selector{background-color:#ffbd2e;}.full.__jsx-style-dynamic-selector{background-color:#27c93f;}")));
  });
  ImageBrowserComponent.defaultProps = defaultProps13;
  ImageBrowserComponent.displayName = "GeistImageBrowser";
  var ImageBrowser = with_scale_default(ImageBrowserComponent);
  var image_browser_default = ImageBrowser;

  // node_modules/@geist-ui/core/esm/image/index.js
  image_default.Browser = image_browser_default;
  var image_default2 = image_default;

  // node_modules/@geist-ui/core/esm/card/card.js
  var _excluded16 = ["children", "hoverable", "className", "shadow", "type"];
  var defaultProps14 = {
    type: "default",
    hoverable: false,
    shadow: false,
    className: ""
  };
  var CardComponent = function CardComponent2(_ref) {
    var children = _ref.children, hoverable = _ref.hoverable, className = _ref.className, shadow = _ref.shadow, type4 = _ref.type, props = _objectWithoutProperties(_ref, _excluded16);
    var theme = use_theme_default();
    var _useScale = use_scale_default(), SCALES = _useScale.SCALES;
    var hoverShadow = F2(function() {
      if (shadow)
        return theme.expressiveness.shadowMedium;
      return hoverable ? theme.expressiveness.shadowSmall : "none";
    }, [hoverable, shadow, theme.expressiveness]);
    var _useMemo = F2(function() {
      return getStyles(type4, theme.palette, shadow);
    }, [type4, theme.palette, shadow]), color = _useMemo.color, bgColor = _useMemo.bgColor, borderColor = _useMemo.borderColor;
    var _pickChild = pickChild(children, card_footer_default), _pickChild2 = _slicedToArray(_pickChild, 2), withoutFooterChildren = _pickChild2[0], footerChildren = _pickChild2[1];
    var _pickChild3 = pickChild(withoutFooterChildren, image_default2), _pickChild4 = _slicedToArray(_pickChild3, 2), withoutImageChildren = _pickChild4[0], imageChildren = _pickChild4[1];
    var hasContent = hasChild(withoutImageChildren, card_content_default);
    return /* @__PURE__ */ Cn.createElement("div", _extends({}, props, {
      className: styled_jsx_es_default.dynamic([["4234389955", [theme.palette.background, theme.layout.radius, shadow ? theme.expressiveness.shadowSmall : "none", color, bgColor, borderColor, SCALES.width(1, "auto"), SCALES.height(1, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverShadow]]]) + " " + (props && props.className != null && props.className || use_classes_default2("card", className) || "")
    }), imageChildren, hasContent ? withoutImageChildren : /* @__PURE__ */ Cn.createElement(card_content_default, null, withoutImageChildren), footerChildren, /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "4234389955",
      dynamic: [theme.palette.background, theme.layout.radius, shadow ? theme.expressiveness.shadowSmall : "none", color, bgColor, borderColor, SCALES.width(1, "auto"), SCALES.height(1, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverShadow]
    }, ".card.__jsx-style-dynamic-selector{background:".concat(theme.palette.background, ";-webkit-transition:all 0.2s ease;transition:all 0.2s ease;border-radius:").concat(theme.layout.radius, ";box-shadow:").concat(shadow ? theme.expressiveness.shadowSmall : "none", ";box-sizing:border-box;color:").concat(color, ";background-color:").concat(bgColor, ";border:1px solid ").concat(borderColor, ";width:").concat(SCALES.width(1, "auto"), ";height:").concat(SCALES.height(1, "auto"), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.card.__jsx-style-dynamic-selector:hover{box-shadow:").concat(hoverShadow, ";}.card.__jsx-style-dynamic-selector img{width:100%;}.card.__jsx-style-dynamic-selector .image{border-bottom-left-radius:0;border-bottom-right-radius:0;}")));
  };
  CardComponent.defaultProps = defaultProps14;
  CardComponent.displayName = "GeistCard";
  var Card = with_scale_default(CardComponent);
  var card_default = Card;

  // node_modules/@geist-ui/core/esm/card/index.js
  card_default.Footer = card_footer_default;
  card_default.Actions = card_footer_default;
  card_default.Content = card_content_default;
  card_default.Body = card_content_default;
  var card_default2 = card_default;

  // node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }

  // node_modules/@babel/runtime/helpers/esm/iterableToArray.js
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }

  // node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  // node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  // node_modules/@geist-ui/core/esm/geist-provider/geist-provider.js
  init_react();

  // node_modules/@geist-ui/core/esm/utils/use-geist-ui-context.js
  init_react();
  var defaultToastLayout = {
    padding: "12px 16px",
    margin: "8px 0",
    width: "420px",
    maxWidth: "90vw",
    maxHeight: "75px",
    placement: "bottomRight"
  };
  var defaultParams = {
    toasts: [],
    toastLayout: defaultToastLayout,
    updateToastLayout: function updateToastLayout(t3) {
      return t3;
    },
    updateToasts: function updateToasts(t3) {
      return t3;
    },
    lastUpdateToastId: null,
    updateLastToastId: function updateLastToastId() {
      return null;
    }
  };
  var GeistUIContent = /* @__PURE__ */ Cn.createContext(defaultParams);
  var useGeistUIContext = function useGeistUIContext2() {
    return Cn.useContext(GeistUIContent);
  };

  // node_modules/@geist-ui/core/esm/geist-provider/theme-provider.js
  init_react();

  // node_modules/@geist-ui/core/esm/use-all-themes/all-themes-context.js
  init_react();
  var defaultAllThemesConfig = {
    themes: themes_default.getPresets()
  };
  var AllThemesContext = /* @__PURE__ */ Cn.createContext(defaultAllThemesConfig);

  // node_modules/@geist-ui/core/esm/geist-provider/theme-provider.js
  var ThemeProvider = function ThemeProvider2(_ref) {
    var children = _ref.children, themeType = _ref.themeType, _ref$themes = _ref.themes, themes3 = _ref$themes === void 0 ? [] : _ref$themes;
    var _useState = h2({
      themes: themes_default2.getPresets()
    }), _useState2 = _slicedToArray(_useState, 2), allThemes = _useState2[0], setAllThemes = _useState2[1];
    var currentTheme = F2(function() {
      var theme = allThemes.themes.find(function(item) {
        return item.type === themeType;
      });
      if (theme)
        return theme;
      return themes_default2.getPresetStaticTheme();
    }, [allThemes, themeType]);
    p2(function() {
      if (!(themes3 !== null && themes3 !== void 0 && themes3.length))
        return;
      setAllThemes(function(last) {
        var safeThemes = themes3.filter(function(item) {
          return themes_default2.isAvailableThemeType(item.type);
        });
        var nextThemes = themes_default2.getPresets().concat(safeThemes);
        return _extends({}, last, {
          themes: nextThemes
        });
      });
    }, [themes3]);
    return /* @__PURE__ */ Cn.createElement(AllThemesContext.Provider, {
      value: allThemes
    }, /* @__PURE__ */ Cn.createElement(ThemeContext.Provider, {
      value: currentTheme
    }, children));
  };
  var theme_provider_default = ThemeProvider;

  // node_modules/@geist-ui/core/esm/use-toasts/toast-container.js
  init_react();

  // node_modules/@geist-ui/core/esm/use-toasts/toast-item.js
  init_react();

  // node_modules/@geist-ui/core/esm/use-toasts/helpers.js
  init_react();
  var makeToastActions = function makeToastActions2(actions, cancelHandle) {
    var handler = function handler2(event, userHandler) {
      userHandler && userHandler(event, cancelHandle);
    };
    if (!actions || !actions.length)
      return null;
    return actions.map(function(action, index2) {
      return /* @__PURE__ */ Cn.createElement(button_default2, {
        auto: true,
        scale: 1 / 3,
        font: "13px",
        type: action.passive ? "default" : "secondary",
        key: "action-".concat(index2),
        onClick: function onClick(event) {
          return handler(event, action.handler);
        }
      }, action.name);
    });
  };
  var getColors3 = function getColors4(palette3, type4) {
    var colors = {
      "default": palette3.background,
      secondary: palette3.secondary,
      success: palette3.success,
      warning: palette3.warning,
      error: palette3.error
    };
    var isDefault = !type4 || type4 === "default";
    if (isDefault)
      return {
        bgColor: colors["default"],
        color: palette3.foreground
      };
    return {
      bgColor: colors[type4],
      color: "white"
    };
  };
  var toastPlacement = tuple("topLeft", "topRight", "bottomLeft", "bottomRight");
  var isTopPlacement = function isTopPlacement2(placement2) {
    return "".concat(placement2).toLowerCase().startsWith("top");
  };
  var isLeftPlacement = function isLeftPlacement2(placement2) {
    return "".concat(placement2).toLowerCase().endsWith("left");
  };
  var getTranslateByPlacement = function getTranslateByPlacement2(placement2) {
    var translateInByPlacement = {
      topLeft: "translate(-60px, -60px)",
      topRight: "translate(60px, -60px)",
      bottomLeft: "translate(-60px, 60px)",
      bottomRight: "translate(60px, 60px)"
    };
    var translateOutByPlacement = {
      topLeft: "translate(-50px, 15px) scale(0.85)",
      topRight: "translate(50px, 15px) scale(0.85)",
      bottomLeft: "translate(-50px, -15px) scale(0.85)",
      bottomRight: "translate(50px, -15px) scale(0.85)"
    };
    return {
      enter: translateInByPlacement[placement2],
      leave: translateOutByPlacement[placement2]
    };
  };

  // node_modules/@geist-ui/core/esm/use-toasts/toast-item.js
  var ToastItem = /* @__PURE__ */ Cn.memo(function(_ref) {
    var toast = _ref.toast, layout3 = _ref.layout;
    var theme = use_theme_default();
    var _useMemo = F2(function() {
      return getColors3(theme.palette, toast.type);
    }, [theme.palette, toast.type]), color = _useMemo.color, bgColor = _useMemo.bgColor;
    var isReactNode = typeof toast.text !== "string";
    var padding = layout3.padding, margin = layout3.margin, maxHeight = layout3.maxHeight, maxWidth = layout3.maxWidth, width = layout3.width, placement2 = layout3.placement;
    var _useMemo2 = F2(function() {
      return getTranslateByPlacement(placement2);
    }, [placement2]), enter = _useMemo2.enter, leave = _useMemo2.leave;
    return /* @__PURE__ */ Cn.createElement(css_transition_default, {
      name: "toast",
      visible: toast.visible,
      clearTime: 350
    }, /* @__PURE__ */ Cn.createElement("div", {
      key: toast.id,
      className: styled_jsx_es_default.dynamic([["1407001838", [width, maxWidth, maxHeight, theme.palette.foreground, bgColor, color, theme.layout.radius, theme.expressiveness.shadowSmall, theme.layout.gapHalf, enter, margin, padding, margin, padding, leave]]]) + " toast"
    }, isReactNode ? toast.text : /* @__PURE__ */ Cn.createElement(Cn.Fragment, null, /* @__PURE__ */ Cn.createElement("div", {
      className: styled_jsx_es_default.dynamic([["1407001838", [width, maxWidth, maxHeight, theme.palette.foreground, bgColor, color, theme.layout.radius, theme.expressiveness.shadowSmall, theme.layout.gapHalf, enter, margin, padding, margin, padding, leave]]]) + " message"
    }, toast.text), /* @__PURE__ */ Cn.createElement("div", {
      className: styled_jsx_es_default.dynamic([["1407001838", [width, maxWidth, maxHeight, theme.palette.foreground, bgColor, color, theme.layout.radius, theme.expressiveness.shadowSmall, theme.layout.gapHalf, enter, margin, padding, margin, padding, leave]]]) + " action"
    }, makeToastActions(toast.actions, toast.cancel))), /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "1407001838",
      dynamic: [width, maxWidth, maxHeight, theme.palette.foreground, bgColor, color, theme.layout.radius, theme.expressiveness.shadowSmall, theme.layout.gapHalf, enter, margin, padding, margin, padding, leave]
    }, ".toast.__jsx-style-dynamic-selector{width:".concat(width, ";max-width:").concat(maxWidth, ";max-height:").concat(maxHeight, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:").concat(theme.palette.foreground, ";background-color:").concat(bgColor, ";color:").concat(color, ";border:0;border-radius:").concat(theme.layout.radius, ";opacity:1;box-shadow:").concat(theme.expressiveness.shadowSmall, ";-webkit-transition:all 350ms cubic-bezier(0.1,0.2,0.1,1);transition:all 350ms cubic-bezier(0.1,0.2,0.1,1);overflow:hidden;}.message.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;font-size:0.875em;display:-webkit-box;word-break:break-all;padding-right:").concat(theme.layout.gapHalf, ";overflow:hidden;max-height:100%;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-height:1.1rem;}.toast-enter.__jsx-style-dynamic-selector{opacity:0;height:0;padding:0;margin:0;-webkit-transform:").concat(enter, ";-ms-transform:").concat(enter, ";transform:").concat(enter, ";}.toast-enter-active.__jsx-style-dynamic-selector{opacity:1;height:auto;margin:").concat(margin, ";padding:").concat(padding, ";-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}.toast-leave.__jsx-style-dynamic-selector{opacity:1;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);height:auto;margin:").concat(margin, ";padding:").concat(padding, ";}.toast-leave-active.__jsx-style-dynamic-selector{opacity:0;-webkit-transform:").concat(leave, ";-ms-transform:").concat(leave, ";transform:").concat(leave, ";}"))));
  });
  var toast_item_default = ToastItem;

  // node_modules/@geist-ui/core/esm/use-toasts/toast-container.js
  var ToastContainer = function ToastContainer2() {
    var theme = use_theme_default();
    var portal = use_portal_default("toast");
    var _useCurrentState = use_current_state_default3(false), _useCurrentState2 = _slicedToArray(_useCurrentState, 3), setHovering = _useCurrentState2[1], hoveringRef = _useCurrentState2[2];
    var _useGeistUIContext = useGeistUIContext(), toasts = _useGeistUIContext.toasts, updateToasts2 = _useGeistUIContext.updateToasts, toastLayout = _useGeistUIContext.toastLayout, lastUpdateToastId = _useGeistUIContext.lastUpdateToastId;
    var memoizedLayout = F2(function() {
      return toastLayout;
    }, [toastLayout]);
    var toastElements = F2(function() {
      return toasts.map(function(toast) {
        return /* @__PURE__ */ Cn.createElement(toast_item_default, {
          toast,
          layout: memoizedLayout,
          key: toast._internalIdent
        });
      });
    }, [toasts, memoizedLayout]);
    var classNames23 = F2(function() {
      return use_classes_default2("toasts", {
        top: isTopPlacement(toastLayout.placement),
        left: isLeftPlacement(toastLayout.placement)
      });
    }, [memoizedLayout]);
    var hoverHandler = function hoverHandler2(isHovering) {
      setHovering(isHovering);
      if (isHovering) {
        return updateToasts2(function(last) {
          return last.map(function(toast) {
            if (!toast.visible)
              return toast;
            toast._timeout && window.clearTimeout(toast._timeout);
            return _extends({}, toast, {
              timeout: null
            });
          });
        });
      }
      updateToasts2(function(last) {
        return last.map(function(toast, index2) {
          if (!toast.visible)
            return toast;
          toast._timeout && window.clearTimeout(toast._timeout);
          return _extends({}, toast, {
            _timeout: function() {
              var timer = window.setTimeout(function() {
                toast.cancel();
                window.clearTimeout(timer);
              }, toast.delay + index2 * 100);
              return timer;
            }()
          });
        });
      });
    };
    p2(function() {
      var index2 = toasts.findIndex(function(r3) {
        return r3._internalIdent === lastUpdateToastId;
      });
      var toast = toasts[index2];
      if (!toast || toast.visible || !hoveringRef.current)
        return;
      var hasVisible = toasts.find(function(r3, i3) {
        return i3 < index2 && r3.visible;
      });
      if (hasVisible || !hoveringRef.current)
        return;
      hoverHandler(false);
    }, [toasts, lastUpdateToastId]);
    p2(function() {
      var timeout = null;
      var timer = window.setInterval(function() {
        if (toasts.length === 0)
          return;
        timeout = window.setTimeout(function() {
          var allInvisible = !toasts.find(function(r3) {
            return r3.visible;
          });
          allInvisible && updateToasts2(function() {
            return [];
          });
          timeout && clearTimeout(timeout);
        }, 350);
      }, 5e3);
      return function() {
        timer && clearInterval(timer);
        timeout && clearTimeout(timeout);
      };
    }, [toasts]);
    if (!portal)
      return null;
    if (!toasts || toasts.length === 0)
      return null;
    return /* @__PURE__ */ z3(/* @__PURE__ */ Cn.createElement("div", {
      onMouseEnter: function onMouseEnter() {
        return hoverHandler(true);
      },
      onMouseLeave: function onMouseLeave() {
        return hoverHandler(false);
      },
      className: styled_jsx_es_default.dynamic([["622610754", [theme.layout.gap, theme.layout.gap, theme.layout.gap, theme.layout.gap]]]) + " " + (classNames23 || "")
    }, toastElements, /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "622610754",
      dynamic: [theme.layout.gap, theme.layout.gap, theme.layout.gap, theme.layout.gap]
    }, ".toasts.__jsx-style-dynamic-selector{position:fixed;width:auto;max-width:100%;right:".concat(theme.layout.gap, ";bottom:").concat(theme.layout.gap, ";z-index:2000;-webkit-transition:all 400ms ease;transition:all 400ms ease;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.top.__jsx-style-dynamic-selector{bottom:unset;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;top:").concat(theme.layout.gap, ";}.left.__jsx-style-dynamic-selector{right:unset;left:").concat(theme.layout.gap, ";}"))), portal);
  };
  var toast_container_default = ToastContainer;

  // node_modules/@geist-ui/core/esm/geist-provider/geist-provider.js
  var GeistProvider = function GeistProvider2(_ref) {
    var themes3 = _ref.themes, themeType = _ref.themeType, children = _ref.children;
    var _useState = h2(null), _useState2 = _slicedToArray(_useState, 2), lastUpdateToastId = _useState2[0], setLastUpdateToastId = _useState2[1];
    var _useCurrentState = use_current_state_default3([]), _useCurrentState2 = _slicedToArray(_useCurrentState, 3), toasts = _useCurrentState2[0], setToasts = _useCurrentState2[1], toastsRef = _useCurrentState2[2];
    var _useCurrentState3 = use_current_state_default3(defaultToastLayout), _useCurrentState4 = _slicedToArray(_useCurrentState3, 3), toastLayout = _useCurrentState4[0], setToastLayout = _useCurrentState4[1], toastLayoutRef = _useCurrentState4[2];
    var updateToasts2 = function updateToasts3(fn2) {
      var nextToasts = fn2(toastsRef.current);
      setToasts(nextToasts);
    };
    var updateToastLayout2 = function updateToastLayout3(fn2) {
      var nextLayout = fn2(toastLayoutRef.current);
      setToastLayout(nextLayout);
    };
    var updateLastToastId2 = function updateLastToastId3(fn2) {
      setLastUpdateToastId(fn2());
    };
    var initialValue = F2(function() {
      return {
        toasts,
        toastLayout,
        updateToasts: updateToasts2,
        lastUpdateToastId,
        updateToastLayout: updateToastLayout2,
        updateLastToastId: updateLastToastId2
      };
    }, [toasts, toastLayout, lastUpdateToastId]);
    return /* @__PURE__ */ Cn.createElement(GeistUIContent.Provider, {
      value: initialValue
    }, /* @__PURE__ */ Cn.createElement(theme_provider_default, {
      themes: themes3,
      themeType
    }, children, /* @__PURE__ */ Cn.createElement(toast_container_default, null)));
  };
  var geist_provider_default = GeistProvider;

  // node_modules/@geist-ui/core/esm/geist-provider/index.js
  var geist_provider_default2 = geist_provider_default;

  // node_modules/@geist-ui/core/esm/radio/radio.js
  init_react();

  // node_modules/@geist-ui/core/esm/radio/radio-context.js
  init_react();
  var defaultContext3 = {
    disabledAll: false,
    inGroup: false
  };
  var RadioContext = /* @__PURE__ */ Cn.createContext(defaultContext3);
  var useRadioContext = function useRadioContext2() {
    return Cn.useContext(RadioContext);
  };

  // node_modules/@geist-ui/core/esm/radio/radio-description.js
  init_react();
  var _excluded17 = ["className", "children"];
  var defaultProps15 = {
    className: ""
  };
  var RadioDescriptionComponent = function RadioDescriptionComponent2(_ref) {
    var className = _ref.className, children = _ref.children, props = _objectWithoutProperties(_ref, _excluded17);
    var theme = use_theme_default();
    var _useScale = use_scale_default(), SCALES = _useScale.SCALES;
    return /* @__PURE__ */ Cn.createElement("span", _extends({}, props, {
      className: styled_jsx_es_default.dynamic([["2489497926", [theme.palette.accents_3, SCALES.font(0.85, "calc(var(--radio-size) * 0.85)"), SCALES.width(1, "auto"), SCALES.height(1, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0, "calc(var(--radio-size) + var(--radio-size) * 0.375)")]]]) + " " + (props && props.className != null && props.className || className || "")
    }), children, /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "2489497926",
      dynamic: [theme.palette.accents_3, SCALES.font(0.85, "calc(var(--radio-size) * 0.85)"), SCALES.width(1, "auto"), SCALES.height(1, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0, "calc(var(--radio-size) + var(--radio-size) * 0.375)")]
    }, "span.__jsx-style-dynamic-selector{color:".concat(theme.palette.accents_3, ";font-size:").concat(SCALES.font(0.85, "calc(var(--radio-size) * 0.85)"), ";width:").concat(SCALES.width(1, "auto"), ";height:").concat(SCALES.height(1, "auto"), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0, "calc(var(--radio-size) + var(--radio-size) * 0.375)"), ";}")));
  };
  RadioDescriptionComponent.defaultProps = defaultProps15;
  RadioDescriptionComponent.displayName = "GeistRadioDescription";
  var RadioDescription = with_scale_default(RadioDescriptionComponent);
  var radio_description_default = RadioDescription;

  // node_modules/@geist-ui/core/esm/radio/styles.js
  var getColors5 = function getColors6(palette3, status) {
    var colors = {
      "default": {
        label: palette3.foreground,
        border: palette3.border,
        bg: palette3.foreground
      },
      secondary: {
        label: palette3.foreground,
        border: palette3.border,
        bg: palette3.foreground
      },
      success: {
        label: palette3.success,
        border: palette3.success,
        bg: palette3.success
      },
      warning: {
        label: palette3.warning,
        border: palette3.warning,
        bg: palette3.warning
      },
      error: {
        label: palette3.error,
        border: palette3.error,
        bg: palette3.error
      }
    };
    if (!status)
      return colors["default"];
    return colors[status];
  };

  // node_modules/@geist-ui/core/esm/radio/radio.js
  var _excluded18 = ["className", "checked", "onChange", "disabled", "type", "value", "children"];
  var defaultProps16 = {
    type: "default",
    disabled: false,
    className: ""
  };
  var RadioComponent = function RadioComponent2(_ref) {
    var className = _ref.className, checked = _ref.checked, onChange = _ref.onChange, disabled = _ref.disabled, type4 = _ref.type, radioValue = _ref.value, children = _ref.children, props = _objectWithoutProperties(_ref, _excluded18);
    var theme = use_theme_default();
    var _useScale = use_scale_default(), SCALES = _useScale.SCALES;
    var _useState = h2(!!checked), _useState2 = _slicedToArray(_useState, 2), selfChecked = _useState2[0], setSelfChecked = _useState2[1];
    var _useRadioContext = useRadioContext(), groupValue = _useRadioContext.value, disabledAll = _useRadioContext.disabledAll, inGroup = _useRadioContext.inGroup, updateState = _useRadioContext.updateState;
    var _pickChild = pickChild(children, radio_description_default), _pickChild2 = _slicedToArray(_pickChild, 2), withoutDescChildren = _pickChild2[0], DescChildren = _pickChild2[1];
    if (inGroup) {
      if (checked !== void 0) {
        use_warning_default('Remove props "checked" if in the Radio.Group.', "Radio");
      }
      if (radioValue === void 0) {
        use_warning_default('Props "value" must be deinfed if in the Radio.Group.', "Radio");
      }
      p2(function() {
        setSelfChecked(groupValue === radioValue);
      }, [groupValue, radioValue]);
    }
    var _useMemo = F2(function() {
      return getColors5(theme.palette, type4);
    }, [theme.palette, type4]), label = _useMemo.label, border = _useMemo.border, bg = _useMemo.bg;
    var isDisabled = F2(function() {
      return disabled || disabledAll;
    }, [disabled, disabledAll]);
    var changeHandler = function changeHandler2(event) {
      if (isDisabled)
        return;
      var selfEvent = {
        target: {
          checked: !selfChecked
        },
        stopPropagation: event.stopPropagation,
        preventDefault: event.preventDefault,
        nativeEvent: event
      };
      setSelfChecked(!selfChecked);
      if (inGroup) {
        updateState && updateState(radioValue);
      }
      onChange && onChange(selfEvent);
    };
    p2(function() {
      if (checked === void 0)
        return;
      setSelfChecked(Boolean(checked));
    }, [checked]);
    return /* @__PURE__ */ Cn.createElement("div", {
      className: styled_jsx_es_default.dynamic([["2664604043", [SCALES.font(1), SCALES.width(1, "initial"), SCALES.height(1, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? theme.palette.accents_4 : label, isDisabled ? "not-allowed" : "pointer", border, isDisabled ? theme.palette.accents_4 : bg]]]) + " " + (use_classes_default2("radio", className) || "")
    }, /* @__PURE__ */ Cn.createElement("label", {
      className: styled_jsx_es_default.dynamic([["2664604043", [SCALES.font(1), SCALES.width(1, "initial"), SCALES.height(1, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? theme.palette.accents_4 : label, isDisabled ? "not-allowed" : "pointer", border, isDisabled ? theme.palette.accents_4 : bg]]])
    }, /* @__PURE__ */ Cn.createElement("input", _extends({
      type: "radio",
      value: radioValue,
      checked: selfChecked,
      onChange: changeHandler
    }, props, {
      className: styled_jsx_es_default.dynamic([["2664604043", [SCALES.font(1), SCALES.width(1, "initial"), SCALES.height(1, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? theme.palette.accents_4 : label, isDisabled ? "not-allowed" : "pointer", border, isDisabled ? theme.palette.accents_4 : bg]]]) + " " + (props && props.className != null && props.className || "")
    })), /* @__PURE__ */ Cn.createElement("span", {
      className: styled_jsx_es_default.dynamic([["2664604043", [SCALES.font(1), SCALES.width(1, "initial"), SCALES.height(1, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? theme.palette.accents_4 : label, isDisabled ? "not-allowed" : "pointer", border, isDisabled ? theme.palette.accents_4 : bg]]]) + " name"
    }, /* @__PURE__ */ Cn.createElement("span", {
      className: styled_jsx_es_default.dynamic([["2664604043", [SCALES.font(1), SCALES.width(1, "initial"), SCALES.height(1, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? theme.palette.accents_4 : label, isDisabled ? "not-allowed" : "pointer", border, isDisabled ? theme.palette.accents_4 : bg]]]) + " " + (use_classes_default2("point", {
        active: selfChecked
      }) || "")
    }), withoutDescChildren), DescChildren && DescChildren), /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "2664604043",
      dynamic: [SCALES.font(1), SCALES.width(1, "initial"), SCALES.height(1, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? theme.palette.accents_4 : label, isDisabled ? "not-allowed" : "pointer", border, isDisabled ? theme.palette.accents_4 : bg]
    }, "input.__jsx-style-dynamic-selector{opacity:0;visibility:hidden;overflow:hidden;width:1px;height:1px;top:-1000px;right:-1000px;position:fixed;font-size:0;}.radio.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;--radio-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, "initial"), ";height:").concat(SCALES.height(1, "auto"), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}label.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;color:").concat(isDisabled ? theme.palette.accents_4 : label, ";cursor:").concat(isDisabled ? "not-allowed" : "pointer", ";}.name.__jsx-style-dynamic-selector{font-size:var(--radio-size);font-weight:bold;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.point.__jsx-style-dynamic-selector{height:var(--radio-size);width:var(--radio-size);border-radius:50%;border:1px solid ").concat(border, ";-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;position:relative;display:inline-block;-webkit-transform:scale(0.875);-ms-transform:scale(0.875);transform:scale(0.875);margin-right:calc(var(--radio-size) * 0.375);}.point.__jsx-style-dynamic-selector:before{content:'';position:absolute;left:-1px;top:-1px;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);height:var(--radio-size);width:var(--radio-size);border-radius:50%;background-color:").concat(isDisabled ? theme.palette.accents_4 : bg, ";}.active.__jsx-style-dynamic-selector:before{-webkit-transform:scale(0.875);-ms-transform:scale(0.875);transform:scale(0.875);-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;}")));
  };
  RadioComponent.defaultProps = defaultProps16;
  RadioComponent.displayName = "GeistRadio";
  var Radio = with_scale_default(RadioComponent);
  var radio_default = Radio;

  // node_modules/@geist-ui/core/esm/radio/radio-group.js
  init_react();
  var _excluded19 = ["disabled", "onChange", "value", "children", "className", "initialValue", "useRow"];
  var defaultProps17 = {
    disabled: false,
    className: "",
    useRow: false
  };
  var RadioGroupComponent = function RadioGroupComponent2(_ref) {
    var disabled = _ref.disabled, onChange = _ref.onChange, value = _ref.value, children = _ref.children, className = _ref.className, initialValue = _ref.initialValue, useRow = _ref.useRow, props = _objectWithoutProperties(_ref, _excluded19);
    var _useScale = use_scale_default(), SCALES = _useScale.SCALES;
    var _useState = h2(initialValue), _useState2 = _slicedToArray(_useState, 2), selfVal = _useState2[0], setSelfVal = _useState2[1];
    var updateState = function updateState2(nextValue) {
      setSelfVal(nextValue);
      onChange && onChange(nextValue);
    };
    var providerValue = F2(function() {
      return {
        updateState,
        disabledAll: disabled,
        inGroup: true,
        value: selfVal
      };
    }, [disabled, selfVal]);
    p2(function() {
      if (value === void 0)
        return;
      setSelfVal(value);
    }, [value]);
    return /* @__PURE__ */ Cn.createElement(RadioContext.Provider, {
      value: providerValue
    }, /* @__PURE__ */ Cn.createElement("div", _extends({}, props, {
      className: styled_jsx_es_default.dynamic([["1223822443", [useRow ? "col" : "column", SCALES.font(1), SCALES.width(1, "auto"), SCALES.height(1, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), useRow ? 0 : "var(--radio-group-gap)", useRow ? "var(--radio-group-gap)" : 0, SCALES.font(1)]]]) + " " + (props && props.className != null && props.className || use_classes_default2("radio-group", className) || "")
    }), children), /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "1223822443",
      dynamic: [useRow ? "col" : "column", SCALES.font(1), SCALES.width(1, "auto"), SCALES.height(1, "auto"), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), useRow ? 0 : "var(--radio-group-gap)", useRow ? "var(--radio-group-gap)" : 0, SCALES.font(1)]
    }, ".radio-group.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:".concat(useRow ? "col" : "column", ";-ms-flex-direction:").concat(useRow ? "col" : "column", ";flex-direction:").concat(useRow ? "col" : "column", ";--radio-group-gap:").concat(SCALES.font(1), ";width:").concat(SCALES.width(1, "auto"), ";height:").concat(SCALES.height(1, "auto"), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.radio-group.__jsx-style-dynamic-selector .radio{margin-top:").concat(useRow ? 0 : "var(--radio-group-gap)", ";margin-left:").concat(useRow ? "var(--radio-group-gap)" : 0, ";--radio-size:").concat(SCALES.font(1), ";}.radio-group.__jsx-style-dynamic-selector .radio:first-of-type{margin:0;}")));
  };
  RadioGroupComponent.defaultProps = defaultProps17;
  RadioGroupComponent.displayName = "GeistRadioGroup";
  var RadioGroup = with_scale_default(RadioGroupComponent);
  var radio_group_default = RadioGroup;

  // node_modules/@geist-ui/core/esm/radio/index.js
  radio_default.Group = radio_group_default;
  radio_default.Description = radio_description_default;
  radio_default.Desc = radio_description_default;
  var radio_default2 = radio_default;

  // node_modules/@geist-ui/core/esm/use-toasts/use-toast.js
  init_react();
  var defaultToast = {
    delay: 2e3,
    type: "default"
  };
  var useToasts = function useToasts2(layout3) {
    var _useGeistUIContext = useGeistUIContext(), updateToasts2 = _useGeistUIContext.updateToasts, toasts = _useGeistUIContext.toasts, updateToastLayout2 = _useGeistUIContext.updateToastLayout, updateLastToastId2 = _useGeistUIContext.updateLastToastId;
    p2(function() {
      if (!layout3)
        return;
      updateToastLayout2(function() {
        return layout3 ? _extends({}, defaultToastLayout, layout3) : defaultToastLayout;
      });
    }, []);
    var cancel = function cancel2(internalId) {
      updateToasts2(function(currentToasts) {
        return currentToasts.map(function(item) {
          if (item._internalIdent !== internalId)
            return item;
          return _extends({}, item, {
            visible: false
          });
        });
      });
      updateLastToastId2(function() {
        return internalId;
      });
    };
    var removeAll = function removeAll2() {
      updateToasts2(function(last) {
        return last.map(function(toast) {
          return _extends({}, toast, {
            visible: false
          });
        });
      });
    };
    var findToastOneByID = function findToastOneByID2(id) {
      return toasts.find(function(t3) {
        return t3.id === id;
      });
    };
    var removeToastOneByID = function removeToastOneByID2(id) {
      updateToasts2(function(last) {
        return last.map(function(toast) {
          if (toast.id !== id)
            return toast;
          return _extends({}, toast, {
            visible: false
          });
        });
      });
    };
    var setToast = function setToast2(toast) {
      var internalIdent = "toast-".concat(getId());
      var delay = toast.delay || defaultToast.delay;
      if (toast.id) {
        var hasIdent = toasts.find(function(t3) {
          return t3.id === toast.id;
        });
        if (hasIdent) {
          throw new Error('Toast: Already have the same key: "ident"');
        }
      }
      updateToasts2(function(last) {
        var newToast = {
          delay,
          text: toast.text,
          visible: true,
          type: toast.type || defaultToast.type,
          id: toast.id || internalIdent,
          actions: toast.actions || [],
          _internalIdent: internalIdent,
          _timeout: window.setTimeout(function() {
            cancel(internalIdent);
            if (newToast._timeout) {
              window.clearTimeout(newToast._timeout);
              newToast._timeout = null;
            }
          }, delay),
          cancel: function(_cancel) {
            function cancel2() {
              return _cancel.apply(this, arguments);
            }
            cancel2.toString = function() {
              return _cancel.toString();
            };
            return cancel2;
          }(function() {
            return cancel(internalIdent);
          })
        };
        return [].concat(_toConsumableArray(last), [newToast]);
      });
    };
    return {
      toasts,
      setToast,
      removeAll,
      findToastOneByID,
      removeToastOneByID
    };
  };
  var use_toast_default = useToasts;

  // node_modules/@geist-ui/core/esm/use-toasts/index.js
  var use_toasts_default = use_toast_default;

  // node_modules/@geist-ui/core/esm/spinner/spinner.js
  init_react();
  var _excluded20 = ["className"];
  var defaultProps18 = {
    className: ""
  };
  var getSpans = function getSpans2(theme) {
    return _toConsumableArray(new Array(12)).map(function(_4, index2) {
      return /* @__PURE__ */ Cn.createElement("span", {
        key: "spinner-".concat(index2),
        className: styled_jsx_es_default.dynamic([["3296107463", [theme.palette.foreground, theme.layout.radius]]])
      }, /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
        id: "3296107463",
        dynamic: [theme.palette.foreground, theme.layout.radius]
      }, "span.__jsx-style-dynamic-selector{background-color:".concat(theme.palette.foreground, ";position:absolute;top:-3.9%;width:24%;height:8%;left:-10%;border-radius:").concat(theme.layout.radius, ";-webkit-animation:spinner-__jsx-style-dynamic-selector 1.2s linear 0s infinite normal none running;animation:spinner-__jsx-style-dynamic-selector 1.2s linear 0s infinite normal none running;}span.__jsx-style-dynamic-selector:nth-child(1){-webkit-animation-delay:-1.2s;animation-delay:-1.2s;-webkit-transform:rotate(0deg) translate(146%);-ms-transform:rotate(0deg) translate(146%);transform:rotate(0deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s;-webkit-transform:rotate(30deg) translate(146%);-ms-transform:rotate(30deg) translate(146%);transform:rotate(30deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s;-webkit-transform:rotate(60deg) translate(146%);-ms-transform:rotate(60deg) translate(146%);transform:rotate(60deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(4){-webkit-animation-delay:-0.9s;animation-delay:-0.9s;-webkit-transform:rotate(90deg) translate(146%);-ms-transform:rotate(90deg) translate(146%);transform:rotate(90deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(5){-webkit-animation-delay:-0.8s;animation-delay:-0.8s;-webkit-transform:rotate(120deg) translate(146%);-ms-transform:rotate(120deg) translate(146%);transform:rotate(120deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(6){-webkit-animation-delay:-0.7s;animation-delay:-0.7s;-webkit-transform:rotate(150deg) translate(146%);-ms-transform:rotate(150deg) translate(146%);transform:rotate(150deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(7){-webkit-animation-delay:-0.6s;animation-delay:-0.6s;-webkit-transform:rotate(180deg) translate(146%);-ms-transform:rotate(180deg) translate(146%);transform:rotate(180deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(8){-webkit-animation-delay:-0.5s;animation-delay:-0.5s;-webkit-transform:rotate(210deg) translate(146%);-ms-transform:rotate(210deg) translate(146%);transform:rotate(210deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(9){-webkit-animation-delay:-0.4s;animation-delay:-0.4s;-webkit-transform:rotate(240deg) translate(146%);-ms-transform:rotate(240deg) translate(146%);transform:rotate(240deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(10){-webkit-animation-delay:-0.3s;animation-delay:-0.3s;-webkit-transform:rotate(270deg) translate(146%);-ms-transform:rotate(270deg) translate(146%);transform:rotate(270deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(11){-webkit-animation-delay:-0.2s;animation-delay:-0.2s;-webkit-transform:rotate(300deg) translate(146%);-ms-transform:rotate(300deg) translate(146%);transform:rotate(300deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(12){-webkit-animation-delay:-0.1s;animation-delay:-0.1s;-webkit-transform:rotate(330deg) translate(146%);-ms-transform:rotate(330deg) translate(146%);transform:rotate(330deg) translate(146%);}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{0%{opacity:1;}100%{opacity:0.15;}}@keyframes spinner-__jsx-style-dynamic-selector{0%{opacity:1;}100%{opacity:0.15;}}")));
    });
  };
  var SpinnerComponent = function SpinnerComponent2(_ref) {
    var className = _ref.className, props = _objectWithoutProperties(_ref, _excluded20);
    var theme = use_theme_default();
    var _useScale = use_scale_default(), SCALES = _useScale.SCALES;
    var classes = use_classes_default2("spinner", className);
    return /* @__PURE__ */ Cn.createElement("div", _extends({}, props, {
      className: styled_jsx_es_default.dynamic([["1153799566", [SCALES.width(1.25), SCALES.height(1.25), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || classes || "")
    }), /* @__PURE__ */ Cn.createElement("div", {
      className: styled_jsx_es_default.dynamic([["1153799566", [SCALES.width(1.25), SCALES.height(1.25), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " container"
    }, getSpans(theme)), /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "1153799566",
      dynamic: [SCALES.width(1.25), SCALES.height(1.25), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
    }, ".spinner.__jsx-style-dynamic-selector{display:block;box-sizing:border-box;width:".concat(SCALES.width(1.25), ";height:").concat(SCALES.height(1.25), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.container.__jsx-style-dynamic-selector{width:100%;height:100%;position:relative;left:50%;top:50%;}")));
  };
  SpinnerComponent.defaultProps = defaultProps18;
  SpinnerComponent.displayName = "GeistSpinner";
  var Spinner = with_scale_default(SpinnerComponent);
  var spinner_default = Spinner;

  // node_modules/@geist-ui/core/esm/spinner/index.js
  var spinner_default2 = spinner_default;

  // node_modules/@babel/runtime/helpers/esm/toPrimitive.js
  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }

  // node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }

  // node_modules/@babel/runtime/helpers/esm/defineProperty.js
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  // node_modules/@geist-ui/core/esm/text/text.js
  init_react();

  // node_modules/@geist-ui/core/esm/text/child.js
  init_react();
  var _excluded21 = ["children", "tag", "className", "type"];
  var defaultProps19 = {
    type: "default",
    className: ""
  };
  var getTypeColor = function getTypeColor2(type4, palette3) {
    var colors = {
      "default": "inherit",
      secondary: palette3.secondary,
      success: palette3.success,
      warning: palette3.warning,
      error: palette3.error
    };
    return colors[type4] || colors["default"];
  };
  var TextChild = function TextChild2(_ref) {
    var children = _ref.children, tag = _ref.tag, className = _ref.className, type4 = _ref.type, props = _objectWithoutProperties(_ref, _excluded21);
    var Component = tag;
    var theme = use_theme_default();
    var _useScale = use_scale_default(), SCALES = _useScale.SCALES, getScaleProps2 = _useScale.getScaleProps;
    var font3 = getScaleProps2("font");
    var mx = getScaleProps2(["margin", "marginLeft", "marginRight", "mx", "ml", "mr"]);
    var my = getScaleProps2(["margin", "marginTop", "marginBottom", "my", "mt", "mb"]);
    var px = getScaleProps2(["padding", "paddingLeft", "paddingRight", "pl", "pr", "px"]);
    var py = getScaleProps2(["padding", "paddingTop", "paddingBottom", "pt", "pb", "py"]);
    var color = F2(function() {
      return getTypeColor(type4, theme.palette);
    }, [type4, theme.palette]);
    var classNames23 = F2(function() {
      var keys = [{
        value: mx,
        className: "mx"
      }, {
        value: my,
        className: "my"
      }, {
        value: px,
        className: "px"
      }, {
        value: py,
        className: "py"
      }, {
        value: font3,
        className: "font"
      }];
      var scaleClassNames = keys.reduce(function(pre, next2) {
        if (typeof next2.value === "undefined")
          return pre;
        return "".concat(pre, " ").concat(next2.className);
      }, "");
      return "".concat(scaleClassNames, " ").concat(className).trim();
    }, [mx, my, px, py, font3, className]);
    return /* @__PURE__ */ Cn.createElement(Component, _extends({}, props, {
      className: styled_jsx_es_default.dynamic([["3155699851", [tag, color, SCALES.width(1, "auto"), SCALES.height(1, "auto"), SCALES.font(1, "inherit"), SCALES.ml(0, "revert"), SCALES.mr(0, "revert"), SCALES.mt(0, "revert"), SCALES.mb(0, "revert"), SCALES.pl(0, "revert"), SCALES.pr(0, "revert"), SCALES.pt(0, "revert"), SCALES.pb(0, "revert")]]]) + " " + (props && props.className != null && props.className || classNames23 || "")
    }), children, /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "3155699851",
      dynamic: [tag, color, SCALES.width(1, "auto"), SCALES.height(1, "auto"), SCALES.font(1, "inherit"), SCALES.ml(0, "revert"), SCALES.mr(0, "revert"), SCALES.mt(0, "revert"), SCALES.mb(0, "revert"), SCALES.pl(0, "revert"), SCALES.pr(0, "revert"), SCALES.pt(0, "revert"), SCALES.pb(0, "revert")]
    }, "".concat(tag, ".__jsx-style-dynamic-selector{color:").concat(color, ";width:").concat(SCALES.width(1, "auto"), ";height:").concat(SCALES.height(1, "auto"), ";}.font.__jsx-style-dynamic-selector{font-size:").concat(SCALES.font(1, "inherit"), ";}.mx.__jsx-style-dynamic-selector{margin-left:").concat(SCALES.ml(0, "revert"), ";margin-right:").concat(SCALES.mr(0, "revert"), ";}.my.__jsx-style-dynamic-selector{margin-top:").concat(SCALES.mt(0, "revert"), ";margin-bottom:").concat(SCALES.mb(0, "revert"), ";}.px.__jsx-style-dynamic-selector{padding-left:").concat(SCALES.pl(0, "revert"), ";padding-right:").concat(SCALES.pr(0, "revert"), ";}.py.__jsx-style-dynamic-selector{padding-top:").concat(SCALES.pt(0, "revert"), ";padding-bottom:").concat(SCALES.pb(0, "revert"), ";}")));
  };
  TextChild.defaultProps = defaultProps19;
  TextChild.displayName = "GeistTextChild";
  var child_default = TextChild;

  // node_modules/@geist-ui/core/esm/text/text.js
  var _excluded22 = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "b", "small", "i", "span", "del", "em", "blockquote", "children", "className"];
  var defaultProps20 = {
    h1: false,
    h2: false,
    h3: false,
    h4: false,
    h5: false,
    h6: false,
    p: false,
    b: false,
    small: false,
    i: false,
    span: false,
    del: false,
    em: false,
    blockquote: false,
    className: "",
    type: "default"
  };
  var getModifierChild = function getModifierChild2(tags, children) {
    if (!tags.length)
      return children;
    var nextTag = tags.slice(1, tags.length);
    return /* @__PURE__ */ Cn.createElement(child_default, {
      tag: tags[0]
    }, getModifierChild2(nextTag, children));
  };
  var TextComponent = function TextComponent2(_ref) {
    var h1 = _ref.h1, h22 = _ref.h2, h3 = _ref.h3, h4 = _ref.h4, h5 = _ref.h5, h6 = _ref.h6, p3 = _ref.p, b3 = _ref.b, small = _ref.small, i3 = _ref.i, span = _ref.span, del = _ref.del, em = _ref.em, blockquote = _ref.blockquote, children = _ref.children, className = _ref.className, props = _objectWithoutProperties(_ref, _excluded22);
    var elements = {
      h1,
      h2: h22,
      h3,
      h4,
      h5,
      h6,
      p: p3,
      blockquote
    };
    var inlineElements = {
      span,
      small,
      b: b3,
      em,
      i: i3,
      del
    };
    var names2 = Object.keys(elements).filter(function(name) {
      return elements[name];
    });
    var inlineNames = Object.keys(inlineElements).filter(function(name) {
      return inlineElements[name];
    });
    var tag = F2(function() {
      if (names2[0])
        return names2[0];
      if (inlineNames[0])
        return inlineNames[0];
      return "p";
    }, [names2, inlineNames]);
    var renderableChildElements = inlineNames.filter(function(name) {
      return name !== tag;
    });
    var modifers = F2(function() {
      if (!renderableChildElements.length)
        return children;
      return getModifierChild(renderableChildElements, children);
    }, [renderableChildElements, children]);
    return /* @__PURE__ */ Cn.createElement(child_default, _extends({
      className,
      tag
    }, props), modifers);
  };
  TextComponent.defaultProps = defaultProps20;
  TextComponent.displayName = "GeistText";
  var Text = with_scale_default(TextComponent);
  var text_default = Text;

  // node_modules/@geist-ui/core/esm/text/index.js
  var text_default2 = text_default;

  // node_modules/@geist-ui/core/esm/use-input/use-input.js
  var useInput = function useInput2(initialValue) {
    var _useCurrentState = use_current_state_default3(initialValue), _useCurrentState2 = _slicedToArray(_useCurrentState, 3), state = _useCurrentState2[0], setState = _useCurrentState2[1], currentRef = _useCurrentState2[2];
    return {
      state,
      setState,
      currentRef,
      reset: function reset() {
        return setState(initialValue);
      },
      bindings: {
        value: state,
        onChange: function onChange(event) {
          if (_typeof(event) === "object" && event.target) {
            setState(event.target.value);
          } else {
            setState(event);
          }
        }
      }
    };
  };
  var use_input_default = useInput;

  // node_modules/@geist-ui/core/esm/use-input/index.js
  var use_input_default2 = use_input_default;

  // node_modules/@geist-ui/core/esm/css-baseline/css-baseline.js
  init_react();

  // node_modules/@geist-ui/core/esm/styled-jsx-server.es.js
  var { flushToHTML } = _server;
  var styled_jsx_server_es_default = _server;

  // node_modules/@geist-ui/core/esm/css-baseline/css-baseline.js
  var CssBaseline = function CssBaseline2(_ref) {
    var children = _ref.children;
    var theme = use_theme_default();
    return /* @__PURE__ */ Cn.createElement(Cn.Fragment, null, children, /* @__PURE__ */ Cn.createElement(styled_jsx_es_default, {
      id: "1357910706",
      dynamic: [theme.palette.background, theme.palette.foreground, theme.palette.background, theme.font.sans, theme.font.sans, theme.palette.link, theme.expressiveness.linkStyle, theme.expressiveness.linkHoverStyle, theme.layout.gapHalf, theme.layout.gapHalf, theme.layout.gapHalf, theme.layout.gap, theme.palette.foreground, theme.palette.accents_4, theme.palette.code, theme.font.mono, theme.layout.gap, theme.layout.gap, theme.layout.gap, theme.palette.accents_2, theme.layout.radius, theme.font.mono, theme.palette.foreground, theme.palette.accents_2, theme.palette.accents_1, theme.layout.gap, theme.layout.gap, theme.palette.accents_5, theme.palette.accents_1, theme.layout.radius, theme.palette.border, theme.palette.selection, theme.palette.foreground]
    }, "html,body{background-color:".concat(theme.palette.background, ";color:").concat(theme.palette.foreground, ";}html{font-size:16px;--geist-icons-background:").concat(theme.palette.background, ";}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-size:1rem;line-height:1.5;margin:0;padding:0;min-height:100%;position:relative;overflow-x:hidden;font-family:").concat(theme.font.sans, ";}#__next{overflow-x:hidden;}*,*:before,*:after{box-sizing:inherit;text-rendering:geometricPrecision;-webkit-tap-highlight-color:transparent;}p,small{font-weight:400;color:inherit;-webkit-letter-spacing:-0.005625em;-moz-letter-spacing:-0.005625em;-ms-letter-spacing:-0.005625em;letter-spacing:-0.005625em;font-family:").concat(theme.font.sans, ";}p{margin:1em 0;font-size:1em;line-height:1.625em;}small{margin:0;line-height:1.5;font-size:0.875em;}b{font-weight:600;}span{font-size:inherit;color:inherit;font-weight:inherit;}img{max-width:100%;}a{cursor:pointer;font-size:inherit;-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-box-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:").concat(theme.palette.link, ";-webkit-text-decoration:").concat(theme.expressiveness.linkStyle, ";text-decoration:").concat(theme.expressiveness.linkStyle, ";}a:hover{-webkit-text-decoration:").concat(theme.expressiveness.linkHoverStyle, ";text-decoration:").concat(theme.expressiveness.linkHoverStyle, ";}ul,ol{padding:0;list-style-type:none;margin:").concat(theme.layout.gapHalf, " ").concat(theme.layout.gapHalf, " ").concat(theme.layout.gapHalf, " ").concat(theme.layout.gap, ";color:").concat(theme.palette.foreground, ";}ol{list-style-type:decimal;}li{margin-bottom:0.625em;font-size:1em;line-height:1.625em;}ul li:before{content:'\u2013';display:inline-block;color:").concat(theme.palette.accents_4, ";position:absolute;margin-left:-0.9375em;}h1,h2,h3,h4,h5,h6{color:inherit;margin:0 0 0.7rem 0;}h1{font-size:3rem;-webkit-letter-spacing:-0.02em;-moz-letter-spacing:-0.02em;-ms-letter-spacing:-0.02em;letter-spacing:-0.02em;line-height:1.5;font-weight:700;}h2{font-size:2.25rem;-webkit-letter-spacing:-0.02em;-moz-letter-spacing:-0.02em;-ms-letter-spacing:-0.02em;letter-spacing:-0.02em;font-weight:600;}h3{font-size:1.5rem;-webkit-letter-spacing:-0.02em;-moz-letter-spacing:-0.02em;-ms-letter-spacing:-0.02em;letter-spacing:-0.02em;font-weight:600;}h4{font-size:1.25rem;-webkit-letter-spacing:-0.02em;-moz-letter-spacing:-0.02em;-ms-letter-spacing:-0.02em;letter-spacing:-0.02em;font-weight:600;}h5{font-size:1rem;-webkit-letter-spacing:-0.01em;-moz-letter-spacing:-0.01em;-ms-letter-spacing:-0.01em;letter-spacing:-0.01em;font-weight:600;}h6{font-size:0.875rem;-webkit-letter-spacing:-0.005em;-moz-letter-spacing:-0.005em;-ms-letter-spacing:-0.005em;letter-spacing:-0.005em;font-weight:600;}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;margin:0;}button:focus,input:focus,select:focus,textarea:focus{outline:none;}code{color:").concat(theme.palette.code, ";font-family:").concat(theme.font.mono, ";font-size:0.9em;white-space:pre-wrap;}code:before,code:after{content:'\\`';}pre{padding:calc(").concat(theme.layout.gap, " * 0.9) ").concat(theme.layout.gap, ";margin:").concat(theme.layout.gap, " 0;border:1px solid ").concat(theme.palette.accents_2, ";border-radius:").concat(theme.layout.radius, ";font-family:").concat(theme.font.mono, ";white-space:pre;overflow:auto;line-height:1.5;text-align:left;font-size:14px;-webkit-overflow-scrolling:touch;}pre code{color:").concat(theme.palette.foreground, ";font-size:1em;line-height:1.25em;white-space:pre;}pre code:before,pre code:after{display:none;}pre p{margin:0;}pre::-webkit-scrollbar{display:none;width:0;height:0;background:transparent;}hr{border-color:").concat(theme.palette.accents_2, ";}details{background-color:").concat(theme.palette.accents_1, ";border:none;}details:focus,details:hover,details:active{outline:none;}summary{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;list-style:none;outline:none;}summary::marker,summary::before,summary::-webkit-details-marker{display:none;}summary::-moz-list-bullet{font-size:0;}summary:focus,summary:hover,summary:active{outline:none;list-style:none;}blockquote{padding:calc(0.667 * ").concat(theme.layout.gap, ") ").concat(theme.layout.gap, ";color:").concat(theme.palette.accents_5, ";background-color:").concat(theme.palette.accents_1, ";border-radius:").concat(theme.layout.radius, ";margin:1.5em 0;border:1px solid ").concat(theme.palette.border, ";}blockquote *:first-child{margin-top:0;}blockquote *:last-child{margin-bottom:0;}::selection{background-color:").concat(theme.palette.selection, ";color:").concat(theme.palette.foreground, ";}")));
  };
  var MemoCssBaseline = /* @__PURE__ */ Cn.memo(CssBaseline);
  MemoCssBaseline.flush = styled_jsx_server_es_default;
  MemoCssBaseline.flushToHTML = flushToHTML;
  var css_baseline_default = MemoCssBaseline;

  // src/options/App.tsx
  init_hooks_module();

  // node_modules/lodash-es/_freeGlobal.js
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeGlobal_default = freeGlobal;

  // node_modules/lodash-es/_root.js
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal_default || freeSelf || Function("return this")();
  var root_default = root;

  // node_modules/lodash-es/_Symbol.js
  var Symbol2 = root_default.Symbol;
  var Symbol_default = Symbol2;

  // node_modules/lodash-es/_getRawTag.js
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e3) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var getRawTag_default = getRawTag;

  // node_modules/lodash-es/_objectToString.js
  var objectProto2 = Object.prototype;
  var nativeObjectToString2 = objectProto2.toString;
  function objectToString(value) {
    return nativeObjectToString2.call(value);
  }
  var objectToString_default = objectToString;

  // node_modules/lodash-es/_baseGetTag.js
  var nullTag = "[object Null]";
  var undefinedTag = "[object Undefined]";
  var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
  }
  var baseGetTag_default = baseGetTag;

  // node_modules/lodash-es/isObjectLike.js
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_default = isObjectLike;

  // node_modules/lodash-es/isArray.js
  var isArray = Array.isArray;
  var isArray_default = isArray;

  // node_modules/lodash-es/isObject.js
  function isObject3(value) {
    var type4 = typeof value;
    return value != null && (type4 == "object" || type4 == "function");
  }
  var isObject_default = isObject3;

  // node_modules/lodash-es/identity.js
  function identity(value) {
    return value;
  }
  var identity_default = identity;

  // node_modules/lodash-es/isFunction.js
  var asyncTag = "[object AsyncFunction]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject_default(value)) {
      return false;
    }
    var tag = baseGetTag_default(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_default = isFunction;

  // node_modules/lodash-es/_coreJsData.js
  var coreJsData = root_default["__core-js_shared__"];
  var coreJsData_default = coreJsData;

  // node_modules/lodash-es/_isMasked.js
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var isMasked_default = isMasked;

  // node_modules/lodash-es/_toSource.js
  var funcProto = Function.prototype;
  var funcToString = funcProto.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e3) {
      }
      try {
        return func + "";
      } catch (e3) {
      }
    }
    return "";
  }
  var toSource_default = toSource;

  // node_modules/lodash-es/_baseIsNative.js
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto2 = Function.prototype;
  var objectProto3 = Object.prototype;
  var funcToString2 = funcProto2.toString;
  var hasOwnProperty2 = objectProto3.hasOwnProperty;
  var reIsNative = RegExp(
    "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function baseIsNative(value) {
    if (!isObject_default(value) || isMasked_default(value)) {
      return false;
    }
    var pattern4 = isFunction_default(value) ? reIsNative : reIsHostCtor;
    return pattern4.test(toSource_default(value));
  }
  var baseIsNative_default = baseIsNative;

  // node_modules/lodash-es/_getValue.js
  function getValue(object4, key) {
    return object4 == null ? void 0 : object4[key];
  }
  var getValue_default = getValue;

  // node_modules/lodash-es/_getNative.js
  function getNative(object4, key) {
    var value = getValue_default(object4, key);
    return baseIsNative_default(value) ? value : void 0;
  }
  var getNative_default = getNative;

  // node_modules/lodash-es/_apply.js
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  var apply_default = apply;

  // node_modules/lodash-es/_shortOut.js
  var HOT_COUNT = 800;
  var HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  var shortOut_default = shortOut;

  // node_modules/lodash-es/constant.js
  function constant(value) {
    return function() {
      return value;
    };
  }
  var constant_default = constant;

  // node_modules/lodash-es/_defineProperty.js
  var defineProperty = function() {
    try {
      var func = getNative_default(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e3) {
    }
  }();
  var defineProperty_default = defineProperty;

  // node_modules/lodash-es/_baseSetToString.js
  var baseSetToString = !defineProperty_default ? identity_default : function(func, string3) {
    return defineProperty_default(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant_default(string3),
      "writable": true
    });
  };
  var baseSetToString_default = baseSetToString;

  // node_modules/lodash-es/_setToString.js
  var setToString = shortOut_default(baseSetToString_default);
  var setToString_default = setToString;

  // node_modules/lodash-es/_isIndex.js
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length2) {
    var type4 = typeof value;
    length2 = length2 == null ? MAX_SAFE_INTEGER : length2;
    return !!length2 && (type4 == "number" || type4 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
  }
  var isIndex_default = isIndex;

  // node_modules/lodash-es/eq.js
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_default = eq;

  // node_modules/lodash-es/_overRest.js
  var nativeMax = Math.max;
  function overRest(func, start, transform) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index2 = -1, length2 = nativeMax(args.length - start, 0), array4 = Array(length2);
      while (++index2 < length2) {
        array4[index2] = args[start + index2];
      }
      index2 = -1;
      var otherArgs = Array(start + 1);
      while (++index2 < start) {
        otherArgs[index2] = args[index2];
      }
      otherArgs[start] = transform(array4);
      return apply_default(func, this, otherArgs);
    };
  }
  var overRest_default = overRest;

  // node_modules/lodash-es/_baseRest.js
  function baseRest(func, start) {
    return setToString_default(overRest_default(func, start, identity_default), func + "");
  }
  var baseRest_default = baseRest;

  // node_modules/lodash-es/isLength.js
  var MAX_SAFE_INTEGER2 = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
  }
  var isLength_default = isLength;

  // node_modules/lodash-es/isArrayLike.js
  function isArrayLike(value) {
    return value != null && isLength_default(value.length) && !isFunction_default(value);
  }
  var isArrayLike_default = isArrayLike;

  // node_modules/lodash-es/_isIterateeCall.js
  function isIterateeCall(value, index2, object4) {
    if (!isObject_default(object4)) {
      return false;
    }
    var type4 = typeof index2;
    if (type4 == "number" ? isArrayLike_default(object4) && isIndex_default(index2, object4.length) : type4 == "string" && index2 in object4) {
      return eq_default(object4[index2], value);
    }
    return false;
  }
  var isIterateeCall_default = isIterateeCall;

  // node_modules/lodash-es/_isPrototype.js
  var objectProto4 = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto4;
    return value === proto;
  }
  var isPrototype_default = isPrototype;

  // node_modules/lodash-es/_baseTimes.js
  function baseTimes(n2, iteratee) {
    var index2 = -1, result = Array(n2);
    while (++index2 < n2) {
      result[index2] = iteratee(index2);
    }
    return result;
  }
  var baseTimes_default = baseTimes;

  // node_modules/lodash-es/_baseIsArguments.js
  var argsTag = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
  }
  var baseIsArguments_default = baseIsArguments;

  // node_modules/lodash-es/isArguments.js
  var objectProto5 = Object.prototype;
  var hasOwnProperty3 = objectProto5.hasOwnProperty;
  var propertyIsEnumerable = objectProto5.propertyIsEnumerable;
  var isArguments = baseIsArguments_default(function() {
    return arguments;
  }()) ? baseIsArguments_default : function(value) {
    return isObjectLike_default(value) && hasOwnProperty3.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArguments_default = isArguments;

  // node_modules/lodash-es/stubFalse.js
  function stubFalse() {
    return false;
  }
  var stubFalse_default = stubFalse;

  // node_modules/lodash-es/isBuffer.js
  var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root_default.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer = nativeIsBuffer || stubFalse_default;
  var isBuffer_default = isBuffer;

  // node_modules/lodash-es/_baseIsTypedArray.js
  var argsTag2 = "[object Arguments]";
  var arrayTag = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag2 = "[object Function]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag = "[object Object]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray(value) {
    return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
  }
  var baseIsTypedArray_default = baseIsTypedArray;

  // node_modules/lodash-es/_baseUnary.js
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  var baseUnary_default = baseUnary;

  // node_modules/lodash-es/_nodeUtil.js
  var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var freeProcess = moduleExports2 && freeGlobal_default.process;
  var nodeUtil = function() {
    try {
      var types2 = freeModule2 && freeModule2.require && freeModule2.require("util").types;
      if (types2) {
        return types2;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e3) {
    }
  }();
  var nodeUtil_default = nodeUtil;

  // node_modules/lodash-es/isTypedArray.js
  var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
  var isTypedArray_default = isTypedArray;

  // node_modules/lodash-es/_arrayLikeKeys.js
  var objectProto6 = Object.prototype;
  var hasOwnProperty4 = objectProto6.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length2 = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty4.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex_default(key, length2)))) {
        result.push(key);
      }
    }
    return result;
  }
  var arrayLikeKeys_default = arrayLikeKeys;

  // node_modules/lodash-es/_nativeKeysIn.js
  function nativeKeysIn(object4) {
    var result = [];
    if (object4 != null) {
      for (var key in Object(object4)) {
        result.push(key);
      }
    }
    return result;
  }
  var nativeKeysIn_default = nativeKeysIn;

  // node_modules/lodash-es/_baseKeysIn.js
  var objectProto7 = Object.prototype;
  var hasOwnProperty5 = objectProto7.hasOwnProperty;
  function baseKeysIn(object4) {
    if (!isObject_default(object4)) {
      return nativeKeysIn_default(object4);
    }
    var isProto = isPrototype_default(object4), result = [];
    for (var key in object4) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty5.call(object4, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  var baseKeysIn_default = baseKeysIn;

  // node_modules/lodash-es/keysIn.js
  function keysIn(object4) {
    return isArrayLike_default(object4) ? arrayLikeKeys_default(object4, true) : baseKeysIn_default(object4);
  }
  var keysIn_default = keysIn;

  // node_modules/lodash-es/defaults.js
  var objectProto8 = Object.prototype;
  var hasOwnProperty6 = objectProto8.hasOwnProperty;
  var defaults = baseRest_default(function(object4, sources) {
    object4 = Object(object4);
    var index2 = -1;
    var length2 = sources.length;
    var guard = length2 > 2 ? sources[2] : void 0;
    if (guard && isIterateeCall_default(sources[0], sources[1], guard)) {
      length2 = 1;
    }
    while (++index2 < length2) {
      var source = sources[index2];
      var props = keysIn_default(source);
      var propsIndex = -1;
      var propsLength = props.length;
      while (++propsIndex < propsLength) {
        var key = props[propsIndex];
        var value = object4[key];
        if (value === void 0 || eq_default(value, objectProto8[key]) && !hasOwnProperty6.call(object4, key)) {
          object4[key] = source[key];
        }
      }
    }
    return object4;
  });
  var defaults_default = defaults;

  // src/config/index.ts
  var import_webextension_polyfill = __toESM(require_browser_polyfill());
  var TRIGGER_MODE_TEXT = {
    ["always" /* Always */]: { title: "Always", desc: "ChatGPT is queried on every search" },
    ["manually" /* Manually */]: {
      title: "Manually",
      desc: "ChatGPT is queried when you manually click a button"
    }
  };
  var Theme = /* @__PURE__ */ ((Theme3) => {
    Theme3["Auto"] = "auto";
    Theme3["Light"] = "light";
    Theme3["Dark"] = "dark";
    return Theme3;
  })(Theme || {});
  var userConfigWithDefaultValue = {
    triggerMode: "always" /* Always */,
    theme: "auto" /* Auto */,
    language: "auto" /* Auto */,
    prompt: "",
    promptSearch: "",
    promptPage: "",
    promptComment: "",
    enableSites: null,
    pageSummaryEnable: true,
    pageSummaryWhitelist: "",
    pageSummaryBlacklist: "",
    continueConversation: true
  };
  async function getUserConfig() {
    const result = await import_webextension_polyfill.default.storage.local.get(Object.keys(userConfigWithDefaultValue));
    return defaults_default(result, userConfigWithDefaultValue);
  }
  async function updateUserConfig(updates) {
    console.debug("update configs", updates);
    return import_webextension_polyfill.default.storage.local.set(updates);
  }
  async function getProviderConfigs() {
    const { provider = "chatgpt" /* ChatGPT */ } = await import_webextension_polyfill.default.storage.local.get("provider");
    const configKey = `provider:${"gpt3" /* GPT3 */}`;
    const result = await import_webextension_polyfill.default.storage.local.get(configKey);
    return {
      provider,
      configs: {
        ["gpt3" /* GPT3 */]: result[configKey]
      }
    };
  }
  async function saveProviderConfigs(provider, configs) {
    console.log(`saveProviderConfigs: ${provider}, type: ${"gpt3" /* GPT3 */}, configs: ${configs["gpt3" /* GPT3 */]}`);
    return import_webextension_polyfill.default.storage.local.set({
      provider,
      [`provider:${"gpt3" /* GPT3 */}`]: configs["gpt3" /* GPT3 */]
    });
  }
  var DEFAULT_PAGE_SUMMARY_BLACKLIST = `https://translate.google.com
https://www.deepl.com
https://www.youtube.com
https://youku.com
https://v.qq.com
https://www.iqiyi.com
https://www.bilibili.com
https://www.tudou.com
https://www.tiktok.com
https://vimeo.com
https://www.dailymotion.com
https://www.twitch.tv
https://www.hulu.com
https://www.netflix.com
https://www.hbomax.com
https://www.disneyplus.com
https://www.peacocktv.com
https://www.crunchyroll.com
https://www.funimation.com
https://www.viki.com
`;

  // src/options/ProviderSelect.tsx
  init_react();

  // node_modules/swr/core/dist/index.mjs
  init_react();
  var import_shim = __toESM(require_shim(), 1);

  // node_modules/swr/_internal/dist/index.mjs
  init_react();
  var SWRGlobalState = /* @__PURE__ */ new WeakMap();
  var EMPTY_CACHE = {};
  var INITIAL_CACHE = {};
  var noop = () => {
  };
  var UNDEFINED = (
    /*#__NOINLINE__*/
    noop()
  );
  var OBJECT = Object;
  var isUndefined = (v3) => v3 === UNDEFINED;
  var isFunction2 = (v3) => typeof v3 == "function";
  var mergeObjects = (a3, b3) => ({
    ...a3,
    ...b3
  });
  var STR_UNDEFINED = "undefined";
  var isWindowDefined = typeof window != STR_UNDEFINED;
  var isDocumentDefined = typeof document != STR_UNDEFINED;
  var hasRequestAnimationFrame = () => isWindowDefined && typeof window["requestAnimationFrame"] != STR_UNDEFINED;
  var createCacheHelper = (cache2, key) => {
    const state = SWRGlobalState.get(cache2);
    return [
      // Getter
      () => !isUndefined(key) && cache2.get(key) || EMPTY_CACHE,
      // Setter
      (info) => {
        if (!isUndefined(key)) {
          const prev2 = cache2.get(key);
          if (!(key in INITIAL_CACHE)) {
            INITIAL_CACHE[key] = prev2;
          }
          state[5](key, mergeObjects(prev2, info), prev2 || EMPTY_CACHE);
        }
      },
      // Subscriber
      state[6],
      // Get server cache snapshot
      () => {
        if (!isUndefined(key)) {
          if (key in INITIAL_CACHE)
            return INITIAL_CACHE[key];
        }
        return !isUndefined(key) && cache2.get(key) || EMPTY_CACHE;
      }
    ];
  };
  var table = /* @__PURE__ */ new WeakMap();
  var counter = 0;
  var stableHash = (arg) => {
    const type4 = typeof arg;
    const constructor = arg && arg.constructor;
    const isDate = constructor == Date;
    let result;
    let index2;
    if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
      result = table.get(arg);
      if (result)
        return result;
      result = ++counter + "~";
      table.set(arg, result);
      if (constructor == Array) {
        result = "@";
        for (index2 = 0; index2 < arg.length; index2++) {
          result += stableHash(arg[index2]) + ",";
        }
        table.set(arg, result);
      }
      if (constructor == OBJECT) {
        result = "#";
        const keys = OBJECT.keys(arg).sort();
        while (!isUndefined(index2 = keys.pop())) {
          if (!isUndefined(arg[index2])) {
            result += index2 + ":" + stableHash(arg[index2]) + ",";
          }
        }
        table.set(arg, result);
      }
    } else {
      result = isDate ? arg.toJSON() : type4 == "symbol" ? arg.toString() : type4 == "string" ? JSON.stringify(arg) : "" + arg;
    }
    return result;
  };
  var online = true;
  var isOnline = () => online;
  var [onWindowEvent, offWindowEvent] = isWindowDefined && window.addEventListener ? [
    window.addEventListener.bind(window),
    window.removeEventListener.bind(window)
  ] : [
    noop,
    noop
  ];
  var isVisible = () => {
    const visibilityState = isDocumentDefined && document.visibilityState;
    return isUndefined(visibilityState) || visibilityState !== "hidden";
  };
  var initFocus = (callback) => {
    if (isDocumentDefined) {
      document.addEventListener("visibilitychange", callback);
    }
    onWindowEvent("focus", callback);
    return () => {
      if (isDocumentDefined) {
        document.removeEventListener("visibilitychange", callback);
      }
      offWindowEvent("focus", callback);
    };
  };
  var initReconnect = (callback) => {
    const onOnline = () => {
      online = true;
      callback();
    };
    const onOffline = () => {
      online = false;
    };
    onWindowEvent("online", onOnline);
    onWindowEvent("offline", onOffline);
    return () => {
      offWindowEvent("online", onOnline);
      offWindowEvent("offline", onOffline);
    };
  };
  var preset = {
    isOnline,
    isVisible
  };
  var defaultConfigOptions = {
    initFocus,
    initReconnect
  };
  var IS_REACT_LEGACY = !Cn.useId;
  var IS_SERVER = !isWindowDefined || "Deno" in window;
  var rAF = (f3) => hasRequestAnimationFrame() ? window["requestAnimationFrame"](f3) : setTimeout(f3, 1);
  var useIsomorphicLayoutEffect = IS_SERVER ? p2 : y2;
  var navigatorConnection = typeof navigator !== "undefined" && navigator.connection;
  var slowConnection = !IS_SERVER && navigatorConnection && ([
    "slow-2g",
    "2g"
  ].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
  var serialize = (key) => {
    if (isFunction2(key)) {
      try {
        key = key();
      } catch (err) {
        key = "";
      }
    }
    const args = key;
    key = typeof key == "string" ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : "";
    return [
      key,
      args
    ];
  };
  var __timestamp = 0;
  var getTimestamp = () => ++__timestamp;
  var FOCUS_EVENT = 0;
  var RECONNECT_EVENT = 1;
  var MUTATE_EVENT = 2;
  var ERROR_REVALIDATE_EVENT = 3;
  var constants = {
    __proto__: null,
    ERROR_REVALIDATE_EVENT,
    FOCUS_EVENT,
    MUTATE_EVENT,
    RECONNECT_EVENT
  };
  async function internalMutate(...args) {
    const [cache2, _key, _data, _opts] = args;
    const options = mergeObjects({
      populateCache: true,
      throwOnError: true
    }, typeof _opts === "boolean" ? {
      revalidate: _opts
    } : _opts || {});
    let populateCache = options.populateCache;
    const rollbackOnErrorOption = options.rollbackOnError;
    let optimisticData = options.optimisticData;
    const revalidate = options.revalidate !== false;
    const rollbackOnError = (error) => {
      return typeof rollbackOnErrorOption === "function" ? rollbackOnErrorOption(error) : rollbackOnErrorOption !== false;
    };
    const throwOnError = options.throwOnError;
    if (isFunction2(_key)) {
      const keyFilter = _key;
      const matchedKeys = [];
      const it = cache2.keys();
      for (let keyIt = it.next(); !keyIt.done; keyIt = it.next()) {
        const key = keyIt.value;
        if (
          // Skip the special useSWRInfinite and useSWRSubscription keys.
          !/^\$(inf|sub)\$/.test(key) && keyFilter(cache2.get(key)._k)
        ) {
          matchedKeys.push(key);
        }
      }
      return Promise.all(matchedKeys.map(mutateByKey));
    }
    return mutateByKey(_key);
    async function mutateByKey(_k) {
      const [key] = serialize(_k);
      if (!key)
        return;
      const [get2, set2] = createCacheHelper(cache2, key);
      const [EVENT_REVALIDATORS, MUTATION, FETCH] = SWRGlobalState.get(cache2);
      const revalidators = EVENT_REVALIDATORS[key];
      const startRevalidate = () => {
        if (revalidate) {
          delete FETCH[key];
          if (revalidators && revalidators[0]) {
            return revalidators[0](MUTATE_EVENT).then(() => get2().data);
          }
        }
        return get2().data;
      };
      if (args.length < 3) {
        return startRevalidate();
      }
      let data = _data;
      let error;
      const beforeMutationTs = getTimestamp();
      MUTATION[key] = [
        beforeMutationTs,
        0
      ];
      const hasOptimisticData = !isUndefined(optimisticData);
      const state = get2();
      const displayedData = state.data;
      const currentData = state._c;
      const committedData = isUndefined(currentData) ? displayedData : currentData;
      if (hasOptimisticData) {
        optimisticData = isFunction2(optimisticData) ? optimisticData(committedData) : optimisticData;
        set2({
          data: optimisticData,
          _c: committedData
        });
      }
      if (isFunction2(data)) {
        try {
          data = data(committedData);
        } catch (err) {
          error = err;
        }
      }
      if (data && isFunction2(data.then)) {
        data = await data.catch((err) => {
          error = err;
        });
        if (beforeMutationTs !== MUTATION[key][0]) {
          if (error)
            throw error;
          return data;
        } else if (error && hasOptimisticData && rollbackOnError(error)) {
          populateCache = true;
          data = committedData;
          set2({
            data,
            _c: UNDEFINED
          });
        }
      }
      if (populateCache) {
        if (!error) {
          if (isFunction2(populateCache)) {
            data = populateCache(data, committedData);
          }
          set2({
            data,
            _c: UNDEFINED
          });
        }
      }
      MUTATION[key][1] = getTimestamp();
      const res = await startRevalidate();
      set2({
        _c: UNDEFINED
      });
      if (error) {
        if (throwOnError)
          throw error;
        return;
      }
      return populateCache ? res : data;
    }
  }
  var revalidateAllKeys = (revalidators, type4) => {
    for (const key in revalidators) {
      if (revalidators[key][0])
        revalidators[key][0](type4);
    }
  };
  var initCache = (provider, options) => {
    if (!SWRGlobalState.has(provider)) {
      const opts = mergeObjects(defaultConfigOptions, options);
      const EVENT_REVALIDATORS = {};
      const mutate2 = internalMutate.bind(UNDEFINED, provider);
      let unmount = noop;
      const subscriptions = {};
      const subscribe = (key, callback) => {
        const subs = subscriptions[key] || [];
        subscriptions[key] = subs;
        subs.push(callback);
        return () => subs.splice(subs.indexOf(callback), 1);
      };
      const setter = (key, value, prev2) => {
        provider.set(key, value);
        const subs = subscriptions[key];
        if (subs) {
          for (const fn2 of subs) {
            fn2(value, prev2);
          }
        }
      };
      const initProvider = () => {
        if (!SWRGlobalState.has(provider)) {
          SWRGlobalState.set(provider, [
            EVENT_REVALIDATORS,
            {},
            {},
            {},
            mutate2,
            setter,
            subscribe
          ]);
          if (!IS_SERVER) {
            const releaseFocus = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
            const releaseReconnect = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
            unmount = () => {
              releaseFocus && releaseFocus();
              releaseReconnect && releaseReconnect();
              SWRGlobalState.delete(provider);
            };
          }
        }
      };
      initProvider();
      return [
        provider,
        mutate2,
        initProvider,
        unmount
      ];
    }
    return [
      provider,
      SWRGlobalState.get(provider)[4]
    ];
  };
  var onErrorRetry = (_4, __, config, revalidate, opts) => {
    const maxRetryCount = config.errorRetryCount;
    const currentRetryCount = opts.retryCount;
    const timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
    if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
      return;
    }
    setTimeout(revalidate, timeout, opts);
  };
  var compare = (currentData, newData) => stableHash(currentData) == stableHash(newData);
  var [cache, mutate] = initCache(/* @__PURE__ */ new Map());
  var defaultConfig = mergeObjects(
    {
      // events
      onLoadingSlow: noop,
      onSuccess: noop,
      onError: noop,
      onErrorRetry,
      onDiscarded: noop,
      // switches
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      revalidateIfStale: true,
      shouldRetryOnError: true,
      // timeouts
      errorRetryInterval: slowConnection ? 1e4 : 5e3,
      focusThrottleInterval: 5 * 1e3,
      dedupingInterval: 2 * 1e3,
      loadingTimeout: slowConnection ? 5e3 : 3e3,
      // providers
      compare,
      isPaused: () => false,
      cache,
      mutate,
      fallback: {}
    },
    // use web preset by default
    preset
  );
  var mergeConfigs = (a3, b3) => {
    const v3 = mergeObjects(a3, b3);
    if (b3) {
      const { use: u1, fallback: f1 } = a3;
      const { use: u22, fallback: f22 } = b3;
      if (u1 && u22) {
        v3.use = u1.concat(u22);
      }
      if (f1 && f22) {
        v3.fallback = mergeObjects(f1, f22);
      }
    }
    return v3;
  };
  var SWRConfigContext = G({});
  var SWRConfig = (props) => {
    const { value } = props;
    const parentConfig = q2(SWRConfigContext);
    const isFunctionalConfig = isFunction2(value);
    const config = F2(() => isFunctionalConfig ? value(parentConfig) : value, [
      isFunctionalConfig,
      parentConfig,
      value
    ]);
    const extendedConfig = F2(() => isFunctionalConfig ? config : mergeConfigs(parentConfig, config), [
      isFunctionalConfig,
      parentConfig,
      config
    ]);
    const provider = config && config.provider;
    const cacheContextRef = _2(UNDEFINED);
    if (provider && !cacheContextRef.current) {
      cacheContextRef.current = initCache(provider(extendedConfig.cache || cache), config);
    }
    const cacheContext = cacheContextRef.current;
    if (cacheContext) {
      extendedConfig.cache = cacheContext[0];
      extendedConfig.mutate = cacheContext[1];
    }
    useIsomorphicLayoutEffect(() => {
      if (cacheContext) {
        cacheContext[2] && cacheContext[2]();
        return cacheContext[3];
      }
    }, []);
    return y(SWRConfigContext.Provider, mergeObjects(props, {
      value: extendedConfig
    }));
  };
  var enableDevtools = isWindowDefined && window.__SWR_DEVTOOLS_USE__;
  var use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
  var setupDevTools = () => {
    if (enableDevtools) {
      window.__SWR_DEVTOOLS_REACT__ = Cn;
    }
  };
  var normalize = (args) => {
    return isFunction2(args[1]) ? [
      args[0],
      args[1],
      args[2] || {}
    ] : [
      args[0],
      null,
      (args[1] === null ? args[2] : args[1]) || {}
    ];
  };
  var useSWRConfig = () => {
    return mergeObjects(defaultConfig, q2(SWRConfigContext));
  };
  var middleware = (useSWRNext) => (key_, fetcher_, config) => {
    const fetcher = fetcher_ && ((...args) => {
      const [key] = serialize(key_);
      const [, , , PRELOAD] = SWRGlobalState.get(cache);
      const req = PRELOAD[key];
      if (req) {
        delete PRELOAD[key];
        return req;
      }
      return fetcher_(...args);
    });
    return useSWRNext(key_, fetcher, config);
  };
  var BUILT_IN_MIDDLEWARE = use.concat(middleware);
  var withArgs = (hook) => {
    return function useSWRArgs(...args) {
      const fallbackConfig = useSWRConfig();
      const [key, fn2, _config] = normalize(args);
      const config = mergeConfigs(fallbackConfig, _config);
      let next2 = hook;
      const { use: use2 } = config;
      const middleware2 = (use2 || []).concat(BUILT_IN_MIDDLEWARE);
      for (let i3 = middleware2.length; i3--; ) {
        next2 = middleware2[i3](next2);
      }
      return next2(key, fn2 || config.fetcher || null, config);
    };
  };
  var subscribeCallback = (key, callbacks, callback) => {
    const keyedRevalidators = callbacks[key] || (callbacks[key] = []);
    keyedRevalidators.push(callback);
    return () => {
      const index2 = keyedRevalidators.indexOf(callback);
      if (index2 >= 0) {
        keyedRevalidators[index2] = keyedRevalidators[keyedRevalidators.length - 1];
        keyedRevalidators.pop();
      }
    };
  };
  setupDevTools();

  // node_modules/swr/core/dist/index.mjs
  var WITH_DEDUPE = {
    dedupe: true
  };
  var useSWRHandler = (_key, fetcher, config) => {
    const { cache: cache2, compare: compare2, suspense, fallbackData, revalidateOnMount, revalidateIfStale, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData } = config;
    const [EVENT_REVALIDATORS, MUTATION, FETCH] = SWRGlobalState.get(cache2);
    const [key, fnArg] = serialize(_key);
    const initialMountedRef = _2(false);
    const unmountedRef = _2(false);
    const keyRef = _2(key);
    const fetcherRef = _2(fetcher);
    const configRef = _2(config);
    const getConfig = () => configRef.current;
    const isActive2 = () => getConfig().isVisible() && getConfig().isOnline();
    const [getCache, setCache, subscribeCache, getInitialCache] = createCacheHelper(cache2, key);
    const stateDependencies = _2({}).current;
    const fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
    const isEqual2 = (prev2, current) => {
      for (const _4 in stateDependencies) {
        const t3 = _4;
        if (t3 === "data") {
          if (!compare2(prev2[t3], current[t3])) {
            if (!isUndefined(prev2[t3])) {
              return false;
            }
            if (!compare2(returnedData, current[t3])) {
              return false;
            }
          }
        } else {
          if (current[t3] !== prev2[t3]) {
            return false;
          }
        }
      }
      return true;
    };
    const getSnapshot = F2(() => {
      const shouldStartRequest = (() => {
        if (!key)
          return false;
        if (!fetcher)
          return false;
        if (!isUndefined(revalidateOnMount))
          return revalidateOnMount;
        if (getConfig().isPaused())
          return false;
        if (suspense)
          return false;
        if (!isUndefined(revalidateIfStale))
          return revalidateIfStale;
        return true;
      })();
      const getSelectedCache = (state) => {
        const snapshot = mergeObjects(state);
        delete snapshot._k;
        if (!shouldStartRequest) {
          return snapshot;
        }
        return {
          isValidating: true,
          isLoading: true,
          ...snapshot
        };
      };
      const cachedData2 = getCache();
      const initialData = getInitialCache();
      const clientSnapshot = getSelectedCache(cachedData2);
      const serverSnapshot = cachedData2 === initialData ? clientSnapshot : getSelectedCache(initialData);
      let memorizedSnapshot = clientSnapshot;
      return [
        () => {
          const newSnapshot = getSelectedCache(getCache());
          const compareResult = isEqual2(newSnapshot, memorizedSnapshot);
          if (compareResult) {
            memorizedSnapshot.data = newSnapshot.data;
            memorizedSnapshot.isLoading = newSnapshot.isLoading;
            memorizedSnapshot.isValidating = newSnapshot.isValidating;
            memorizedSnapshot.error = newSnapshot.error;
            return memorizedSnapshot;
          } else {
            memorizedSnapshot = newSnapshot;
            return newSnapshot;
          }
        },
        () => serverSnapshot
      ];
    }, [
      cache2,
      key
    ]);
    const cached2 = (0, import_shim.useSyncExternalStore)(T2(
      (callback) => subscribeCache(key, (current, prev2) => {
        if (!isEqual2(prev2, current))
          callback();
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [
        cache2,
        key
      ]
    ), getSnapshot[0], getSnapshot[1]);
    const isInitialMount = !initialMountedRef.current;
    const hasRevalidator = EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
    const cachedData = cached2.data;
    const data = isUndefined(cachedData) ? fallback : cachedData;
    const error = cached2.error;
    const laggyDataRef = _2(data);
    const returnedData = keepPreviousData ? isUndefined(cachedData) ? laggyDataRef.current : cachedData : data;
    const shouldDoInitialRevalidation = (() => {
      if (hasRevalidator && !isUndefined(error))
        return false;
      if (isInitialMount && !isUndefined(revalidateOnMount))
        return revalidateOnMount;
      if (getConfig().isPaused())
        return false;
      if (suspense)
        return isUndefined(data) ? false : revalidateIfStale;
      return isUndefined(data) || revalidateIfStale;
    })();
    const defaultValidatingState = !!(key && fetcher && isInitialMount && shouldDoInitialRevalidation);
    const isValidating = isUndefined(cached2.isValidating) ? defaultValidatingState : cached2.isValidating;
    const isLoading = isUndefined(cached2.isLoading) ? defaultValidatingState : cached2.isLoading;
    const revalidate = T2(
      async (revalidateOpts) => {
        const currentFetcher = fetcherRef.current;
        if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
          return false;
        }
        let newData;
        let startAt;
        let loading = true;
        const opts = revalidateOpts || {};
        const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
        const callbackSafeguard = () => {
          if (IS_REACT_LEGACY) {
            return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
          }
          return key === keyRef.current;
        };
        const finalState = {
          isValidating: false,
          isLoading: false
        };
        const finishRequestAndUpdateState = () => {
          setCache(finalState);
        };
        const cleanupState = () => {
          const requestInfo = FETCH[key];
          if (requestInfo && requestInfo[1] === startAt) {
            delete FETCH[key];
          }
        };
        const initialState = {
          isValidating: true
        };
        if (isUndefined(getCache().data)) {
          initialState.isLoading = true;
        }
        try {
          if (shouldStartNewRequest) {
            setCache(initialState);
            if (config.loadingTimeout && isUndefined(getCache().data)) {
              setTimeout(() => {
                if (loading && callbackSafeguard()) {
                  getConfig().onLoadingSlow(key, config);
                }
              }, config.loadingTimeout);
            }
            FETCH[key] = [
              currentFetcher(fnArg),
              getTimestamp()
            ];
          }
          [newData, startAt] = FETCH[key];
          newData = await newData;
          if (shouldStartNewRequest) {
            setTimeout(cleanupState, config.dedupingInterval);
          }
          if (!FETCH[key] || FETCH[key][1] !== startAt) {
            if (shouldStartNewRequest) {
              if (callbackSafeguard()) {
                getConfig().onDiscarded(key);
              }
            }
            return false;
          }
          finalState.error = UNDEFINED;
          const mutationInfo = MUTATION[key];
          if (!isUndefined(mutationInfo) && // case 1
          (startAt <= mutationInfo[0] || // case 2
          startAt <= mutationInfo[1] || // case 3
          mutationInfo[1] === 0)) {
            finishRequestAndUpdateState();
            if (shouldStartNewRequest) {
              if (callbackSafeguard()) {
                getConfig().onDiscarded(key);
              }
            }
            return false;
          }
          const cacheData = getCache().data;
          finalState.data = compare2(cacheData, newData) ? cacheData : newData;
          if (shouldStartNewRequest) {
            if (callbackSafeguard()) {
              getConfig().onSuccess(newData, key, config);
            }
          }
        } catch (err) {
          cleanupState();
          const currentConfig = getConfig();
          const { shouldRetryOnError } = currentConfig;
          if (!currentConfig.isPaused()) {
            finalState.error = err;
            if (shouldStartNewRequest && callbackSafeguard()) {
              currentConfig.onError(err, key, currentConfig);
              if (shouldRetryOnError === true || isFunction2(shouldRetryOnError) && shouldRetryOnError(err)) {
                if (isActive2()) {
                  currentConfig.onErrorRetry(err, key, currentConfig, (_opts) => {
                    const revalidators = EVENT_REVALIDATORS[key];
                    if (revalidators && revalidators[0]) {
                      revalidators[0](constants.ERROR_REVALIDATE_EVENT, _opts);
                    }
                  }, {
                    retryCount: (opts.retryCount || 0) + 1,
                    dedupe: true
                  });
                }
              }
            }
          }
        }
        loading = false;
        finishRequestAndUpdateState();
        return true;
      },
      // `setState` is immutable, and `eventsCallback`, `fnArg`, and
      // `keyValidating` are depending on `key`, so we can exclude them from
      // the deps array.
      //
      // FIXME:
      // `fn` and `config` might be changed during the lifecycle,
      // but they might be changed every render like this.
      // `useSWR('key', () => fetch('/api/'), { suspense: true })`
      // So we omit the values from the deps array
      // even though it might cause unexpected behaviors.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [
        key,
        cache2
      ]
    );
    const boundMutate = T2(
      // Use callback to make sure `keyRef.current` returns latest result every time
      (...args) => {
        return internalMutate(cache2, keyRef.current, ...args);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    useIsomorphicLayoutEffect(() => {
      fetcherRef.current = fetcher;
      configRef.current = config;
      if (!isUndefined(cachedData)) {
        laggyDataRef.current = cachedData;
      }
    });
    useIsomorphicLayoutEffect(() => {
      if (!key)
        return;
      const softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
      let nextFocusRevalidatedAt = 0;
      const onRevalidate = (type4, opts = {}) => {
        if (type4 == constants.FOCUS_EVENT) {
          const now = Date.now();
          if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive2()) {
            nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
            softRevalidate();
          }
        } else if (type4 == constants.RECONNECT_EVENT) {
          if (getConfig().revalidateOnReconnect && isActive2()) {
            softRevalidate();
          }
        } else if (type4 == constants.MUTATE_EVENT) {
          return revalidate();
        } else if (type4 == constants.ERROR_REVALIDATE_EVENT) {
          return revalidate(opts);
        }
        return;
      };
      const unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
      unmountedRef.current = false;
      keyRef.current = key;
      initialMountedRef.current = true;
      setCache({
        _k: fnArg
      });
      if (shouldDoInitialRevalidation) {
        if (isUndefined(data) || IS_SERVER) {
          softRevalidate();
        } else {
          rAF(softRevalidate);
        }
      }
      return () => {
        unmountedRef.current = true;
        unsubEvents();
      };
    }, [
      key
    ]);
    useIsomorphicLayoutEffect(() => {
      let timer;
      function next2() {
        const interval = isFunction2(refreshInterval) ? refreshInterval(getCache().data) : refreshInterval;
        if (interval && timer !== -1) {
          timer = setTimeout(execute, interval);
        }
      }
      function execute() {
        if (!getCache().error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
          revalidate(WITH_DEDUPE).then(next2);
        } else {
          next2();
        }
      }
      next2();
      return () => {
        if (timer) {
          clearTimeout(timer);
          timer = -1;
        }
      };
    }, [
      refreshInterval,
      refreshWhenHidden,
      refreshWhenOffline,
      key
    ]);
    x2(returnedData);
    if (suspense && isUndefined(data) && key) {
      if (!IS_REACT_LEGACY && IS_SERVER) {
        throw new Error("Fallback data is required when using suspense in SSR.");
      }
      fetcherRef.current = fetcher;
      configRef.current = config;
      unmountedRef.current = false;
      throw isUndefined(error) ? revalidate(WITH_DEDUPE) : error;
    }
    return {
      mutate: boundMutate,
      get data() {
        stateDependencies.data = true;
        return returnedData;
      },
      get error() {
        stateDependencies.error = true;
        return error;
      },
      get isValidating() {
        stateDependencies.isValidating = true;
        return isValidating;
      },
      get isLoading() {
        stateDependencies.isLoading = true;
        return isLoading;
      }
    };
  };
  var SWRConfig2 = OBJECT.defineProperty(SWRConfig, "defaultValue", {
    value: defaultConfig
  });
  var useSWR = withArgs(useSWRHandler);

  // node_modules/@babel/runtime/helpers/esm/classCallCheck.js
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  // node_modules/@babel/runtime/helpers/esm/createClass.js
  function _defineProperties(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  // node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
  function _setPrototypeOf(o4, p3) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf3(o5, p4) {
      o5.__proto__ = p4;
      return o5;
    };
    return _setPrototypeOf(o4, p3);
  }

  // node_modules/@babel/runtime/helpers/esm/inherits.js
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }

  // node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
  function _getPrototypeOf(o4) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf3(o5) {
      return o5.__proto__ || Object.getPrototypeOf(o5);
    };
    return _getPrototypeOf(o4);
  }

  // node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e3) {
      return false;
    }
  }

  // node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }

  // node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
  function _possibleConstructorReturn(self2, call2) {
    if (call2 && (_typeof(call2) === "object" || typeof call2 === "function")) {
      return call2;
    } else if (call2 !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self2);
  }

  // node_modules/@babel/runtime/helpers/esm/createSuper.js
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }

  // node_modules/rc-resize-observer/es/index.js
  init_react();

  // node_modules/rc-util/es/Children/toArray.js
  init_react();
  var import_react_is = __toESM(require_react_is());
  function toArray(children) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var ret = [];
    Cn.Children.forEach(children, function(child) {
      if ((child === void 0 || child === null) && !option.keepEmpty) {
        return;
      }
      if (Array.isArray(child)) {
        ret = ret.concat(toArray(child));
      } else if ((0, import_react_is.isFragment)(child) && child.props) {
        ret = ret.concat(toArray(child.props.children, option));
      } else {
        ret.push(child);
      }
    });
    return ret;
  }

  // node_modules/rc-util/es/warning.js
  var warned = {};
  var preWarningFns = [];
  var preMessage = function preMessage2(fn2) {
    preWarningFns.push(fn2);
  };
  function warning(valid, message) {
    if (!valid && console !== void 0) {
      var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
        return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "warning");
      }, message);
      if (finalMessage) {
        console.error("Warning: ".concat(finalMessage));
      }
    }
  }
  function note(valid, message) {
    if (!valid && console !== void 0) {
      var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
        return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "note");
      }, message);
      if (finalMessage) {
        console.warn("Note: ".concat(finalMessage));
      }
    }
  }
  function resetWarned() {
    warned = {};
  }
  function call(method4, valid, message) {
    if (!valid && !warned[message]) {
      method4(false, message);
      warned[message] = true;
    }
  }
  function warningOnce(valid, message) {
    call(warning, valid, message);
  }
  function noteOnce(valid, message) {
    call(note, valid, message);
  }
  warningOnce.preMessage = preMessage;
  warningOnce.resetWarned = resetWarned;
  warningOnce.noteOnce = noteOnce;
  var warning_default = warningOnce;

  // node_modules/@babel/runtime/helpers/esm/objectSpread2.js
  function ownKeys(object4, enumerableOnly) {
    var keys = Object.keys(object4);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object4);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object4, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source = null != arguments[i3] ? arguments[i3] : {};
      i3 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }

  // node_modules/rc-util/es/ref.js
  var import_react_is2 = __toESM(require_react_is());

  // node_modules/rc-util/es/hooks/useMemo.js
  init_react();
  function useMemo(getValue4, condition, shouldUpdate) {
    var cacheRef = _2({});
    if (!("value" in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
      cacheRef.current.value = getValue4();
      cacheRef.current.condition = condition;
    }
    return cacheRef.current.value;
  }

  // node_modules/rc-util/es/ref.js
  function fillRef(ref, node2) {
    if (typeof ref === "function") {
      ref(node2);
    } else if (_typeof(ref) === "object" && ref && "current" in ref) {
      ref.current = node2;
    }
  }
  function composeRef() {
    for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
      refs[_key] = arguments[_key];
    }
    var refList = refs.filter(function(ref) {
      return ref;
    });
    if (refList.length <= 1) {
      return refList[0];
    }
    return function(node2) {
      refs.forEach(function(ref) {
        fillRef(ref, node2);
      });
    };
  }
  function useComposeRef() {
    for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      refs[_key2] = arguments[_key2];
    }
    return useMemo(function() {
      return composeRef.apply(void 0, refs);
    }, refs, function(prev2, next2) {
      return prev2.length === next2.length && prev2.every(function(ref, i3) {
        return ref === next2[i3];
      });
    });
  }
  function supportRef(nodeOrComponent) {
    var _type$prototype, _nodeOrComponent$prot;
    var type4 = (0, import_react_is2.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
    if (typeof type4 === "function" && !((_type$prototype = type4.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render)) {
      return false;
    }
    if (typeof nodeOrComponent === "function" && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render)) {
      return false;
    }
    return true;
  }

  // node_modules/rc-resize-observer/es/SingleObserver/index.js
  init_react();

  // node_modules/rc-util/es/Dom/findDOMNode.js
  init_react();
  function isDOM(node2) {
    return node2 instanceof HTMLElement || node2 instanceof SVGElement;
  }
  function findDOMNode(node2) {
    if (isDOM(node2)) {
      return node2;
    }
    if (node2 instanceof Cn.Component) {
      return Cn.findDOMNode(node2);
    }
    return null;
  }

  // node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
  var MapShim = function() {
    if (typeof Map !== "undefined") {
      return Map;
    }
    function getIndex(arr, key) {
      var result = -1;
      arr.some(function(entry, index2) {
        if (entry[0] === key) {
          result = index2;
          return true;
        }
        return false;
      });
      return result;
    }
    return (
      /** @class */
      function() {
        function class_1() {
          this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
          /**
           * @returns {boolean}
           */
          get: function() {
            return this.__entries__.length;
          },
          enumerable: true,
          configurable: true
        });
        class_1.prototype.get = function(key) {
          var index2 = getIndex(this.__entries__, key);
          var entry = this.__entries__[index2];
          return entry && entry[1];
        };
        class_1.prototype.set = function(key, value) {
          var index2 = getIndex(this.__entries__, key);
          if (~index2) {
            this.__entries__[index2][1] = value;
          } else {
            this.__entries__.push([key, value]);
          }
        };
        class_1.prototype.delete = function(key) {
          var entries = this.__entries__;
          var index2 = getIndex(entries, key);
          if (~index2) {
            entries.splice(index2, 1);
          }
        };
        class_1.prototype.has = function(key) {
          return !!~getIndex(this.__entries__, key);
        };
        class_1.prototype.clear = function() {
          this.__entries__.splice(0);
        };
        class_1.prototype.forEach = function(callback, ctx) {
          if (ctx === void 0) {
            ctx = null;
          }
          for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
            var entry = _a[_i];
            callback.call(ctx, entry[1], entry[0]);
          }
        };
        return class_1;
      }()
    );
  }();
  var isBrowser3 = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
  var global$1 = function() {
    if (typeof global !== "undefined" && global.Math === Math) {
      return global;
    }
    if (typeof self !== "undefined" && self.Math === Math) {
      return self;
    }
    if (typeof window !== "undefined" && window.Math === Math) {
      return window;
    }
    return Function("return this")();
  }();
  var requestAnimationFrame$1 = function() {
    if (typeof requestAnimationFrame === "function") {
      return requestAnimationFrame.bind(global$1);
    }
    return function(callback) {
      return setTimeout(function() {
        return callback(Date.now());
      }, 1e3 / 60);
    };
  }();
  var trailingTimeout = 2;
  function throttle(callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    function resolvePending() {
      if (leadingCall) {
        leadingCall = false;
        callback();
      }
      if (trailingCall) {
        proxy();
      }
    }
    function timeoutCallback() {
      requestAnimationFrame$1(resolvePending);
    }
    function proxy() {
      var timeStamp = Date.now();
      if (leadingCall) {
        if (timeStamp - lastCallTime < trailingTimeout) {
          return;
        }
        trailingCall = true;
      } else {
        leadingCall = true;
        trailingCall = false;
        setTimeout(timeoutCallback, delay);
      }
      lastCallTime = timeStamp;
    }
    return proxy;
  }
  var REFRESH_DELAY = 20;
  var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
  var mutationObserverSupported = typeof MutationObserver !== "undefined";
  var ResizeObserverController = (
    /** @class */
    function() {
      function ResizeObserverController2() {
        this.connected_ = false;
        this.mutationEventsAdded_ = false;
        this.mutationsObserver_ = null;
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
      }
      ResizeObserverController2.prototype.addObserver = function(observer) {
        if (!~this.observers_.indexOf(observer)) {
          this.observers_.push(observer);
        }
        if (!this.connected_) {
          this.connect_();
        }
      };
      ResizeObserverController2.prototype.removeObserver = function(observer) {
        var observers2 = this.observers_;
        var index2 = observers2.indexOf(observer);
        if (~index2) {
          observers2.splice(index2, 1);
        }
        if (!observers2.length && this.connected_) {
          this.disconnect_();
        }
      };
      ResizeObserverController2.prototype.refresh = function() {
        var changesDetected = this.updateObservers_();
        if (changesDetected) {
          this.refresh();
        }
      };
      ResizeObserverController2.prototype.updateObservers_ = function() {
        var activeObservers = this.observers_.filter(function(observer) {
          return observer.gatherActive(), observer.hasActive();
        });
        activeObservers.forEach(function(observer) {
          return observer.broadcastActive();
        });
        return activeObservers.length > 0;
      };
      ResizeObserverController2.prototype.connect_ = function() {
        if (!isBrowser3 || this.connected_) {
          return;
        }
        document.addEventListener("transitionend", this.onTransitionEnd_);
        window.addEventListener("resize", this.refresh);
        if (mutationObserverSupported) {
          this.mutationsObserver_ = new MutationObserver(this.refresh);
          this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        } else {
          document.addEventListener("DOMSubtreeModified", this.refresh);
          this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
      };
      ResizeObserverController2.prototype.disconnect_ = function() {
        if (!isBrowser3 || !this.connected_) {
          return;
        }
        document.removeEventListener("transitionend", this.onTransitionEnd_);
        window.removeEventListener("resize", this.refresh);
        if (this.mutationsObserver_) {
          this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
          document.removeEventListener("DOMSubtreeModified", this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
      };
      ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
        var isReflowProperty = transitionKeys.some(function(key) {
          return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
          this.refresh();
        }
      };
      ResizeObserverController2.getInstance = function() {
        if (!this.instance_) {
          this.instance_ = new ResizeObserverController2();
        }
        return this.instance_;
      };
      ResizeObserverController2.instance_ = null;
      return ResizeObserverController2;
    }()
  );
  var defineConfigurable = function(target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
      var key = _a[_i];
      Object.defineProperty(target, key, {
        value: props[key],
        enumerable: false,
        writable: false,
        configurable: true
      });
    }
    return target;
  };
  var getWindowOf = function(target) {
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    return ownerGlobal || global$1;
  };
  var emptyRect = createRectInit(0, 0, 0, 0);
  function toFloat(value) {
    return parseFloat(value) || 0;
  }
  function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function(size, position2) {
      var value = styles["border-" + position2 + "-width"];
      return size + toFloat(value);
    }, 0);
  }
  function getPaddings(styles) {
    var positions = ["top", "right", "bottom", "left"];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
      var position2 = positions_1[_i];
      var value = styles["padding-" + position2];
      paddings[position2] = toFloat(value);
    }
    return paddings;
  }
  function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
  }
  function getHTMLElementContentRect(target) {
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    if (!clientWidth && !clientHeight) {
      return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    var width = toFloat(styles.width), height = toFloat(styles.height);
    if (styles.boxSizing === "border-box") {
      if (Math.round(width + horizPad) !== clientWidth) {
        width -= getBordersSize(styles, "left", "right") + horizPad;
      }
      if (Math.round(height + vertPad) !== clientHeight) {
        height -= getBordersSize(styles, "top", "bottom") + vertPad;
      }
    }
    if (!isDocumentElement(target)) {
      var vertScrollbar = Math.round(width + horizPad) - clientWidth;
      var horizScrollbar = Math.round(height + vertPad) - clientHeight;
      if (Math.abs(vertScrollbar) !== 1) {
        width -= vertScrollbar;
      }
      if (Math.abs(horizScrollbar) !== 1) {
        height -= horizScrollbar;
      }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
  }
  var isSVGGraphicsElement = function() {
    if (typeof SVGGraphicsElement !== "undefined") {
      return function(target) {
        return target instanceof getWindowOf(target).SVGGraphicsElement;
      };
    }
    return function(target) {
      return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
    };
  }();
  function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
  }
  function getContentRect(target) {
    if (!isBrowser3) {
      return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
      return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
  }
  function createReadOnlyRect(_a) {
    var x4 = _a.x, y3 = _a.y, width = _a.width, height = _a.height;
    var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    defineConfigurable(rect, {
      x: x4,
      y: y3,
      width,
      height,
      top: y3,
      right: x4 + width,
      bottom: height + y3,
      left: x4
    });
    return rect;
  }
  function createRectInit(x4, y3, width, height) {
    return { x: x4, y: y3, width, height };
  }
  var ResizeObservation = (
    /** @class */
    function() {
      function ResizeObservation2(target) {
        this.broadcastWidth = 0;
        this.broadcastHeight = 0;
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
      }
      ResizeObservation2.prototype.isActive = function() {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
      };
      ResizeObservation2.prototype.broadcastRect = function() {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
      };
      return ResizeObservation2;
    }()
  );
  var ResizeObserverEntry = (
    /** @class */
    function() {
      function ResizeObserverEntry2(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        defineConfigurable(this, { target, contentRect });
      }
      return ResizeObserverEntry2;
    }()
  );
  var ResizeObserverSPI = (
    /** @class */
    function() {
      function ResizeObserverSPI2(callback, controller, callbackCtx) {
        this.activeObservations_ = [];
        this.observations_ = new MapShim();
        if (typeof callback !== "function") {
          throw new TypeError("The callback provided as parameter 1 is not a function.");
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
      }
      ResizeObserverSPI2.prototype.observe = function(target) {
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        if (typeof Element === "undefined" || !(Element instanceof Object)) {
          return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        if (observations.has(target)) {
          return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        this.controller_.refresh();
      };
      ResizeObserverSPI2.prototype.unobserve = function(target) {
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        if (typeof Element === "undefined" || !(Element instanceof Object)) {
          return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        if (!observations.has(target)) {
          return;
        }
        observations.delete(target);
        if (!observations.size) {
          this.controller_.removeObserver(this);
        }
      };
      ResizeObserverSPI2.prototype.disconnect = function() {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
      };
      ResizeObserverSPI2.prototype.gatherActive = function() {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function(observation) {
          if (observation.isActive()) {
            _this.activeObservations_.push(observation);
          }
        });
      };
      ResizeObserverSPI2.prototype.broadcastActive = function() {
        if (!this.hasActive()) {
          return;
        }
        var ctx = this.callbackCtx_;
        var entries = this.activeObservations_.map(function(observation) {
          return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
      };
      ResizeObserverSPI2.prototype.clearActive = function() {
        this.activeObservations_.splice(0);
      };
      ResizeObserverSPI2.prototype.hasActive = function() {
        return this.activeObservations_.length > 0;
      };
      return ResizeObserverSPI2;
    }()
  );
  var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
  var ResizeObserver2 = (
    /** @class */
    function() {
      function ResizeObserver4(callback) {
        if (!(this instanceof ResizeObserver4)) {
          throw new TypeError("Cannot call a class as a function.");
        }
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
      }
      return ResizeObserver4;
    }()
  );
  [
    "observe",
    "unobserve",
    "disconnect"
  ].forEach(function(method4) {
    ResizeObserver2.prototype[method4] = function() {
      var _a;
      return (_a = observers.get(this))[method4].apply(_a, arguments);
    };
  });
  var index = function() {
    if (typeof global$1.ResizeObserver !== "undefined") {
      return global$1.ResizeObserver;
    }
    return ResizeObserver2;
  }();
  var ResizeObserver_es_default = index;

  // node_modules/rc-resize-observer/es/utils/observerUtil.js
  var elementListeners = /* @__PURE__ */ new Map();
  function onResize(entities) {
    entities.forEach(function(entity) {
      var _elementListeners$get;
      var target = entity.target;
      (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 ? void 0 : _elementListeners$get.forEach(function(listener) {
        return listener(target);
      });
    });
  }
  var resizeObserver = new ResizeObserver_es_default(onResize);
  function observe(element, callback) {
    if (!elementListeners.has(element)) {
      elementListeners.set(element, /* @__PURE__ */ new Set());
      resizeObserver.observe(element);
    }
    elementListeners.get(element).add(callback);
  }
  function unobserve(element, callback) {
    if (elementListeners.has(element)) {
      elementListeners.get(element).delete(callback);
      if (!elementListeners.get(element).size) {
        resizeObserver.unobserve(element);
        elementListeners.delete(element);
      }
    }
  }

  // node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js
  init_react();
  var DomWrapper = /* @__PURE__ */ function(_React$Component) {
    _inherits(DomWrapper3, _React$Component);
    var _super = _createSuper(DomWrapper3);
    function DomWrapper3() {
      _classCallCheck(this, DomWrapper3);
      return _super.apply(this, arguments);
    }
    _createClass(DomWrapper3, [{
      key: "render",
      value: function render() {
        return this.props.children;
      }
    }]);
    return DomWrapper3;
  }(b);

  // node_modules/rc-resize-observer/es/Collection.js
  init_react();
  var CollectionContext = /* @__PURE__ */ G(null);
  function Collection(_ref) {
    var children = _ref.children, onBatchResize = _ref.onBatchResize;
    var resizeIdRef = _2(0);
    var resizeInfosRef = _2([]);
    var onCollectionResize = q2(CollectionContext);
    var onResize2 = T2(function(size, element, data) {
      resizeIdRef.current += 1;
      var currentId = resizeIdRef.current;
      resizeInfosRef.current.push({
        size,
        element,
        data
      });
      Promise.resolve().then(function() {
        if (currentId === resizeIdRef.current) {
          onBatchResize === null || onBatchResize === void 0 ? void 0 : onBatchResize(resizeInfosRef.current);
          resizeInfosRef.current = [];
        }
      });
      onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(size, element, data);
    }, [onBatchResize, onCollectionResize]);
    return /* @__PURE__ */ y(CollectionContext.Provider, {
      value: onResize2
    }, children);
  }

  // node_modules/rc-resize-observer/es/SingleObserver/index.js
  function SingleObserver(props, ref) {
    var children = props.children, disabled = props.disabled;
    var elementRef = _2(null);
    var wrapperRef = _2(null);
    var onCollectionResize = q2(CollectionContext);
    var isRenderProps = typeof children === "function";
    var mergedChildren = isRenderProps ? children(elementRef) : children;
    var sizeRef = _2({
      width: -1,
      height: -1,
      offsetWidth: -1,
      offsetHeight: -1
    });
    var canRef = !isRenderProps && /* @__PURE__ */ an(mergedChildren) && supportRef(mergedChildren);
    var originRef = canRef ? mergedChildren.ref : null;
    var mergedRef = F2(function() {
      return composeRef(originRef, elementRef);
    }, [originRef, elementRef]);
    var getDom = function getDom2() {
      return findDOMNode(elementRef.current) || findDOMNode(wrapperRef.current);
    };
    A2(ref, function() {
      return getDom();
    });
    var propsRef = _2(props);
    propsRef.current = props;
    var onInternalResize = T2(function(target) {
      var _propsRef$current = propsRef.current, onResize2 = _propsRef$current.onResize, data = _propsRef$current.data;
      var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
      var offsetWidth = target.offsetWidth, offsetHeight = target.offsetHeight;
      var fixedWidth = Math.floor(width);
      var fixedHeight = Math.floor(height);
      if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
        var size = {
          width: fixedWidth,
          height: fixedHeight,
          offsetWidth,
          offsetHeight
        };
        sizeRef.current = size;
        var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
        var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
        var sizeInfo = _objectSpread2(_objectSpread2({}, size), {}, {
          offsetWidth: mergedOffsetWidth,
          offsetHeight: mergedOffsetHeight
        });
        onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(sizeInfo, target, data);
        if (onResize2) {
          Promise.resolve().then(function() {
            onResize2(sizeInfo, target);
          });
        }
      }
    }, []);
    p2(function() {
      var currentElement = getDom();
      if (currentElement && !disabled) {
        observe(currentElement, onInternalResize);
      }
      return function() {
        return unobserve(currentElement, onInternalResize);
      };
    }, [elementRef.current, disabled]);
    return /* @__PURE__ */ y(DomWrapper, {
      ref: wrapperRef
    }, canRef ? /* @__PURE__ */ sn(mergedChildren, {
      ref: mergedRef
    }) : mergedChildren);
  }
  var RefSingleObserver = /* @__PURE__ */ k3(SingleObserver);
  if (true) {
    RefSingleObserver.displayName = "SingleObserver";
  }
  var SingleObserver_default = RefSingleObserver;

  // node_modules/rc-resize-observer/es/index.js
  var INTERNAL_PREFIX_KEY = "rc-observer-key";
  function ResizeObserver3(props, ref) {
    var children = props.children;
    var childNodes = typeof children === "function" ? [children] : toArray(children);
    if (true) {
      if (childNodes.length > 1) {
        warning(false, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.");
      } else if (childNodes.length === 0) {
        warning(false, "`children` of ResizeObserver is empty. Nothing is in observe.");
      }
    }
    return childNodes.map(function(child, index2) {
      var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index2);
      return /* @__PURE__ */ y(SingleObserver_default, _extends({}, props, {
        key,
        ref: index2 === 0 ? ref : void 0
      }), child);
    });
  }
  var RefResizeObserver = /* @__PURE__ */ k3(ResizeObserver3);
  if (true) {
    RefResizeObserver.displayName = "ResizeObserver";
  }
  RefResizeObserver.Collection = Collection;
  var es_default = RefResizeObserver;

  // node_modules/rc-util/es/omit.js
  function omit(obj, fields) {
    var clone = _objectSpread2({}, obj);
    if (Array.isArray(fields)) {
      fields.forEach(function(key) {
        delete clone[key];
      });
    }
    return clone;
  }

  // node_modules/@emotion/hash/dist/hash.browser.esm.js
  function murmur2(str) {
    var h3 = 0;
    var k4, i3 = 0, len = str.length;
    for (; len >= 4; ++i3, len -= 4) {
      k4 = str.charCodeAt(i3) & 255 | (str.charCodeAt(++i3) & 255) << 8 | (str.charCodeAt(++i3) & 255) << 16 | (str.charCodeAt(++i3) & 255) << 24;
      k4 = /* Math.imul(k, m): */
      (k4 & 65535) * 1540483477 + ((k4 >>> 16) * 59797 << 16);
      k4 ^= /* k >>> r: */
      k4 >>> 24;
      h3 = /* Math.imul(k, m): */
      (k4 & 65535) * 1540483477 + ((k4 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
      (h3 & 65535) * 1540483477 + ((h3 >>> 16) * 59797 << 16);
    }
    switch (len) {
      case 3:
        h3 ^= (str.charCodeAt(i3 + 2) & 255) << 16;
      case 2:
        h3 ^= (str.charCodeAt(i3 + 1) & 255) << 8;
      case 1:
        h3 ^= str.charCodeAt(i3) & 255;
        h3 = /* Math.imul(h, m): */
        (h3 & 65535) * 1540483477 + ((h3 >>> 16) * 59797 << 16);
    }
    h3 ^= h3 >>> 13;
    h3 = /* Math.imul(h, m): */
    (h3 & 65535) * 1540483477 + ((h3 >>> 16) * 59797 << 16);
    return ((h3 ^ h3 >>> 15) >>> 0).toString(36);
  }
  var hash_browser_esm_default = murmur2;

  // node_modules/@ant-design/cssinjs/es/hooks/useCacheToken.js
  init_react();
  init_react();

  // node_modules/rc-util/es/isEqual.js
  function isEqual(obj1, obj2) {
    var shallow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var refSet = /* @__PURE__ */ new Set();
    function deepEqual(a3, b3) {
      var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
      var circular = refSet.has(a3);
      warning_default(!circular, "Warning: There may be circular references");
      if (circular) {
        return false;
      }
      if (a3 === b3) {
        return true;
      }
      if (shallow && level > 1) {
        return false;
      }
      refSet.add(a3);
      var newLevel = level + 1;
      if (Array.isArray(a3)) {
        if (!Array.isArray(b3) || a3.length !== b3.length) {
          return false;
        }
        for (var i3 = 0; i3 < a3.length; i3++) {
          if (!deepEqual(a3[i3], b3[i3], newLevel)) {
            return false;
          }
        }
        return true;
      }
      if (a3 && b3 && _typeof(a3) === "object" && _typeof(b3) === "object") {
        var keys = Object.keys(a3);
        if (keys.length !== Object.keys(b3).length) {
          return false;
        }
        return keys.every(function(key) {
          return deepEqual(a3[key], b3[key], newLevel);
        });
      }
      return false;
    }
    return deepEqual(obj1, obj2);
  }
  var isEqual_default = isEqual;

  // node_modules/@ant-design/cssinjs/es/StyleContext.js
  init_react();

  // node_modules/@ant-design/cssinjs/es/Cache.js
  var Entity = /* @__PURE__ */ function() {
    function Entity2(instanceId) {
      _classCallCheck(this, Entity2);
      _defineProperty(this, "instanceId", void 0);
      _defineProperty(this, "cache", /* @__PURE__ */ new Map());
      this.instanceId = instanceId;
    }
    _createClass(Entity2, [{
      key: "get",
      value: function get2(keys) {
        return this.cache.get(keys.join("%")) || null;
      }
    }, {
      key: "update",
      value: function update(keys, valueFn) {
        var path = keys.join("%");
        var prevValue = this.cache.get(path);
        var nextValue = valueFn(prevValue);
        if (nextValue === null) {
          this.cache.delete(path);
        } else {
          this.cache.set(path, nextValue);
        }
      }
    }]);
    return Entity2;
  }();
  var Cache_default = Entity;

  // node_modules/@ant-design/cssinjs/es/StyleContext.js
  var ATTR_TOKEN = "data-token-hash";
  var ATTR_MARK = "data-css-hash";
  var ATTR_DEV_CACHE_PATH = "data-dev-cache-path";
  var CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
  function createCache() {
    var cssinjsInstanceId = Math.random().toString(12).slice(2);
    if (typeof document !== "undefined" && document.head && document.body) {
      var styles = document.body.querySelectorAll("style[".concat(ATTR_MARK, "]")) || [];
      var firstChild = document.head.firstChild;
      Array.from(styles).forEach(function(style3) {
        style3[CSS_IN_JS_INSTANCE] = style3[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;
        if (style3[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
          document.head.insertBefore(style3, firstChild);
        }
      });
      var styleHash = {};
      Array.from(document.querySelectorAll("style[".concat(ATTR_MARK, "]"))).forEach(function(style3) {
        var hash2 = style3.getAttribute(ATTR_MARK);
        if (styleHash[hash2]) {
          if (style3[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
            var _style$parentNode;
            (_style$parentNode = style3.parentNode) === null || _style$parentNode === void 0 ? void 0 : _style$parentNode.removeChild(style3);
          }
        } else {
          styleHash[hash2] = true;
        }
      });
    }
    return new Cache_default(cssinjsInstanceId);
  }
  var StyleContext = /* @__PURE__ */ G({
    hashPriority: "low",
    cache: createCache(),
    defaultCache: true
  });
  var StyleContext_default = StyleContext;

  // node_modules/rc-util/es/Dom/canUseDom.js
  function canUseDom() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
  }

  // node_modules/rc-util/es/Dom/contains.js
  function contains(root2, n2) {
    if (!root2) {
      return false;
    }
    if (root2.contains) {
      return root2.contains(n2);
    }
    var node2 = n2;
    while (node2) {
      if (node2 === root2) {
        return true;
      }
      node2 = node2.parentNode;
    }
    return false;
  }

  // node_modules/rc-util/es/Dom/dynamicCSS.js
  var APPEND_ORDER = "data-rc-order";
  var MARK_KEY = "rc-util-key";
  var containerCache = /* @__PURE__ */ new Map();
  function getMark() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark = _ref.mark;
    if (mark) {
      return mark.startsWith("data-") ? mark : "data-".concat(mark);
    }
    return MARK_KEY;
  }
  function getContainer(option) {
    if (option.attachTo) {
      return option.attachTo;
    }
    var head = document.querySelector("head");
    return head || document.body;
  }
  function getOrder(prepend) {
    if (prepend === "queue") {
      return "prependQueue";
    }
    return prepend ? "prepend" : "append";
  }
  function findStyles(container) {
    return Array.from((containerCache.get(container) || container).children).filter(function(node2) {
      return node2.tagName === "STYLE";
    });
  }
  function injectCSS(css) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!canUseDom()) {
      return null;
    }
    var csp = option.csp, prepend = option.prepend;
    var styleNode = document.createElement("style");
    styleNode.setAttribute(APPEND_ORDER, getOrder(prepend));
    if (csp !== null && csp !== void 0 && csp.nonce) {
      styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
    }
    styleNode.innerHTML = css;
    var container = getContainer(option);
    var firstChild = container.firstChild;
    if (prepend) {
      if (prepend === "queue") {
        var existStyle = findStyles(container).filter(function(node2) {
          return ["prepend", "prependQueue"].includes(node2.getAttribute(APPEND_ORDER));
        });
        if (existStyle.length) {
          container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
          return styleNode;
        }
      }
      container.insertBefore(styleNode, firstChild);
    } else {
      container.appendChild(styleNode);
    }
    return styleNode;
  }
  function findExistNode(key) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var container = getContainer(option);
    return findStyles(container).find(function(node2) {
      return node2.getAttribute(getMark(option)) === key;
    });
  }
  function removeCSS(key) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var existNode = findExistNode(key, option);
    if (existNode) {
      var container = getContainer(option);
      container.removeChild(existNode);
    }
  }
  function syncRealContainer(container, option) {
    var cachedRealContainer = containerCache.get(container);
    if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
      var placeholderStyle = injectCSS("", option);
      var parentNode = placeholderStyle.parentNode;
      containerCache.set(container, parentNode);
      container.removeChild(placeholderStyle);
    }
  }
  function updateCSS(css, key) {
    var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var container = getContainer(option);
    syncRealContainer(container, option);
    var existNode = findExistNode(key, option);
    if (existNode) {
      var _option$csp, _option$csp2;
      if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
        var _option$csp3;
        existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
      }
      if (existNode.innerHTML !== css) {
        existNode.innerHTML = css;
      }
      return existNode;
    }
    var newNode = injectCSS(css, option);
    newNode.setAttribute(getMark(option), key);
    return newNode;
  }

  // node_modules/@ant-design/cssinjs/es/util.js
  function flattenToken(token2) {
    var str = "";
    Object.keys(token2).forEach(function(key) {
      var value = token2[key];
      str += key;
      if (value && _typeof(value) === "object") {
        str += flattenToken(value);
      } else {
        str += value;
      }
    });
    return str;
  }
  function token2key(token2, salt) {
    return hash_browser_esm_default("".concat(salt, "_").concat(flattenToken(token2)));
  }
  var layerKey = "layer-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, "");
  var layerWidth = "903px";
  function supportSelector(styleStr, handleElement) {
    if (canUseDom()) {
      var _ele$parentNode;
      updateCSS(styleStr, layerKey);
      var _ele = document.createElement("div");
      _ele.style.position = "fixed";
      _ele.style.left = "0";
      _ele.style.top = "0";
      handleElement === null || handleElement === void 0 ? void 0 : handleElement(_ele);
      document.body.appendChild(_ele);
      if (true) {
        _ele.innerHTML = "Test";
        _ele.style.zIndex = "9999999";
      }
      var support = getComputedStyle(_ele).width === layerWidth;
      (_ele$parentNode = _ele.parentNode) === null || _ele$parentNode === void 0 ? void 0 : _ele$parentNode.removeChild(_ele);
      removeCSS(layerKey);
      return support;
    }
    return false;
  }
  var canLayer = void 0;
  function supportLayer() {
    if (canLayer === void 0) {
      canLayer = supportSelector("@layer ".concat(layerKey, " { .").concat(layerKey, " { width: ").concat(layerWidth, "!important; } }"), function(ele) {
        ele.className = layerKey;
      });
    }
    return canLayer;
  }

  // node_modules/@ant-design/cssinjs/es/hooks/useGlobalCache.js
  init_react();

  // node_modules/@ant-design/cssinjs/es/hooks/useHMR.js
  var webpackHMR = false;
  function useDevHMR() {
    return webpackHMR;
  }
  var useHMR_default = false ? useProdHMR : useDevHMR;
  if (typeof module !== "undefined" && module && module.hot) {
    win = window;
    if (typeof win.webpackHotUpdate === "function") {
      originWebpackHotUpdate = win.webpackHotUpdate;
      win.webpackHotUpdate = function() {
        webpackHMR = true;
        setTimeout(function() {
          webpackHMR = false;
        }, 0);
        return originWebpackHotUpdate.apply(void 0, arguments);
      };
    }
  }
  var win;
  var originWebpackHotUpdate;

  // node_modules/@ant-design/cssinjs/es/hooks/useGlobalCache.js
  function useClientCache(prefix, keyPath, cacheFn, onCacheRemove) {
    var _React$useContext = q2(StyleContext_default), globalCache = _React$useContext.cache;
    var fullPath = [prefix].concat(_toConsumableArray(keyPath));
    var HMRUpdate = useHMR_default();
    F2(
      function() {
        globalCache.update(fullPath, function(prevCache) {
          var _ref = prevCache || [], _ref2 = _slicedToArray(_ref, 2), _ref2$ = _ref2[0], times = _ref2$ === void 0 ? 0 : _ref2$, cache2 = _ref2[1];
          var tmpCache = cache2;
          if (cache2 && HMRUpdate) {
            onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(tmpCache, HMRUpdate);
            tmpCache = null;
          }
          var mergedCache = tmpCache || cacheFn();
          return [times + 1, mergedCache];
        });
      },
      /* eslint-disable react-hooks/exhaustive-deps */
      [fullPath.join("_")]
      /* eslint-enable */
    );
    p2(function() {
      return function() {
        globalCache.update(fullPath, function(prevCache) {
          var _ref3 = prevCache || [], _ref4 = _slicedToArray(_ref3, 2), _ref4$ = _ref4[0], times = _ref4$ === void 0 ? 0 : _ref4$, cache2 = _ref4[1];
          var nextCount = times - 1;
          if (nextCount === 0) {
            onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(cache2, false);
            return null;
          }
          return [times - 1, cache2];
        });
      };
    }, fullPath);
    return globalCache.get(fullPath)[1];
  }

  // node_modules/@ant-design/cssinjs/es/hooks/useCacheToken.js
  var EMPTY_OVERRIDE = {};
  var hashPrefix = true ? "css-dev-only-do-not-override" : "css";
  var tokenKeys = /* @__PURE__ */ new Map();
  function recordCleanToken(tokenKey) {
    tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
  }
  function removeStyleTags(key, instanceId) {
    if (typeof document !== "undefined") {
      var styles = document.querySelectorAll("style[".concat(ATTR_TOKEN, '="').concat(key, '"]'));
      styles.forEach(function(style3) {
        if (style3[CSS_IN_JS_INSTANCE] === instanceId) {
          var _style$parentNode;
          (_style$parentNode = style3.parentNode) === null || _style$parentNode === void 0 ? void 0 : _style$parentNode.removeChild(style3);
        }
      });
    }
  }
  function cleanTokenStyle(tokenKey, instanceId) {
    tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
    var tokenKeyList = Array.from(tokenKeys.keys());
    var cleanableKeyList = tokenKeyList.filter(function(key) {
      var count = tokenKeys.get(key) || 0;
      return count <= 0;
    });
    if (cleanableKeyList.length < tokenKeyList.length) {
      cleanableKeyList.forEach(function(key) {
        removeStyleTags(key, instanceId);
        tokenKeys.delete(key);
      });
    }
  }
  function useCacheToken(theme, tokens) {
    var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var _useContext = q2(StyleContext_default), instanceId = _useContext.cache.instanceId;
    var _option$salt = option.salt, salt = _option$salt === void 0 ? "" : _option$salt, _option$override = option.override, override = _option$override === void 0 ? EMPTY_OVERRIDE : _option$override, formatToken2 = option.formatToken;
    var mergedToken = F2(function() {
      return Object.assign.apply(Object, [{}].concat(_toConsumableArray(tokens)));
    }, [tokens]);
    var tokenStr = F2(function() {
      return flattenToken(mergedToken);
    }, [mergedToken]);
    var overrideTokenStr = F2(function() {
      return flattenToken(override);
    }, [override]);
    var cachedToken = useClientCache("token", [salt, theme.id, tokenStr, overrideTokenStr], function() {
      var derivativeToken = theme.getDerivativeToken(mergedToken);
      var mergedDerivativeToken = _objectSpread2(_objectSpread2({}, derivativeToken), override);
      if (formatToken2) {
        mergedDerivativeToken = formatToken2(mergedDerivativeToken);
      }
      var tokenKey = token2key(mergedDerivativeToken, salt);
      mergedDerivativeToken._tokenKey = tokenKey;
      recordCleanToken(tokenKey);
      var hashId = "".concat(hashPrefix, "-").concat(hash_browser_esm_default(tokenKey));
      mergedDerivativeToken._hashId = hashId;
      return [mergedDerivativeToken, hashId];
    }, function(cache2) {
      cleanTokenStyle(cache2[0]._tokenKey, instanceId);
    });
    return cachedToken;
  }

  // node_modules/@ant-design/cssinjs/es/hooks/useStyleRegister.js
  init_react();

  // node_modules/@emotion/unitless/dist/unitless.browser.esm.js
  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };
  var unitless_browser_esm_default = unitlessKeys;

  // node_modules/stylis/src/Enum.js
  var COMMENT = "comm";
  var RULESET = "rule";
  var DECLARATION = "decl";
  var IMPORT = "@import";
  var KEYFRAMES = "@keyframes";
  var LAYER = "@layer";

  // node_modules/stylis/src/Utility.js
  var abs = Math.abs;
  var from = String.fromCharCode;
  function trim(value) {
    return value.trim();
  }
  function replace(value, pattern4, replacement) {
    return value.replace(pattern4, replacement);
  }
  function indexof(value, search) {
    return value.indexOf(search);
  }
  function charat(value, index2) {
    return value.charCodeAt(index2) | 0;
  }
  function substr(value, begin, end) {
    return value.slice(begin, end);
  }
  function strlen(value) {
    return value.length;
  }
  function sizeof(value) {
    return value.length;
  }
  function append(value, array4) {
    return array4.push(value), value;
  }

  // node_modules/stylis/src/Tokenizer.js
  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = "";
  function node(value, root2, parent, type4, props, children, length2) {
    return { value, root: root2, parent, type: type4, props, children, line, column, length: length2, return: "" };
  }
  function char() {
    return character;
  }
  function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10)
      column = 1, line--;
    return character;
  }
  function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10)
      column = 1, line++;
    return character;
  }
  function peek() {
    return charat(characters, position);
  }
  function caret() {
    return position;
  }
  function slice(begin, end) {
    return substr(characters, begin, end);
  }
  function token(type4) {
    switch (type4) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
  }
  function dealloc(value) {
    return characters = "", value;
  }
  function delimit(type4) {
    return trim(slice(position - 1, delimiter(type4 === 91 ? type4 + 2 : type4 === 40 ? type4 + 1 : type4)));
  }
  function whitespace(type4) {
    while (character = peek())
      if (character < 33)
        next();
      else
        break;
    return token(type4) > 2 || token(character) > 3 ? "" : " ";
  }
  function escaping(index2, count) {
    while (--count && next())
      if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
        break;
    return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
  }
  function delimiter(type4) {
    while (next())
      switch (character) {
        case type4:
          return position;
        case 34:
        case 39:
          if (type4 !== 34 && type4 !== 39)
            delimiter(character);
          break;
        case 40:
          if (type4 === 41)
            delimiter(type4);
          break;
        case 92:
          next();
          break;
      }
    return position;
  }
  function commenter(type4, index2) {
    while (next())
      if (type4 + character === 47 + 10)
        break;
      else if (type4 + character === 42 + 42 && peek() === 47)
        break;
    return "/*" + slice(index2, position - 1) + "*" + from(type4 === 47 ? type4 : next());
  }
  function identifier(index2) {
    while (!token(peek()))
      next();
    return slice(index2, position);
  }

  // node_modules/stylis/src/Parser.js
  function compile(value) {
    return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
  }
  function parse(value, root2, parent, rule, rules2, rulesets, pseudo, points, declarations) {
    var index2 = 0;
    var offset = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type4 = "";
    var props = rules2;
    var children = rulesets;
    var reference = rule;
    var characters2 = type4;
    while (scanning)
      switch (previous = character2, character2 = next()) {
        case 40:
          if (previous != 108 && charat(characters2, length2 - 1) == 58) {
            if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
              ampersand = -1;
            break;
          }
        case 34:
        case 39:
        case 91:
          characters2 += delimit(character2);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          characters2 += whitespace(previous);
          break;
        case 92:
          characters2 += escaping(caret() - 1, 7);
          continue;
        case 47:
          switch (peek()) {
            case 42:
            case 47:
              append(comment(commenter(next(), caret()), root2, parent), declarations);
              break;
            default:
              characters2 += "/";
          }
          break;
        case 123 * variable:
          points[index2++] = strlen(characters2) * ampersand;
        case 125 * variable:
        case 59:
        case 0:
          switch (character2) {
            case 0:
            case 125:
              scanning = 0;
            case 59 + offset:
              if (ampersand == -1)
                characters2 = replace(characters2, /\f/g, "");
              if (property > 0 && strlen(characters2) - length2)
                append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
              break;
            case 59:
              characters2 += ";";
            default:
              append(reference = ruleset(characters2, root2, parent, index2, offset, rules2, points, type4, props = [], children = [], length2), rulesets);
              if (character2 === 123)
                if (offset === 0)
                  parse(characters2, root2, reference, reference, props, rulesets, length2, points, children);
                else
                  switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules2, points, type4, rules2, props = [], length2), children), rules2, children, length2, points, rule ? props : children);
                      break;
                    default:
                      parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                  }
          }
          index2 = offset = property = 0, variable = ampersand = 1, type4 = characters2 = "", length2 = pseudo;
          break;
        case 58:
          length2 = 1 + strlen(characters2), property = previous;
        default:
          if (variable < 1) {
            if (character2 == 123)
              --variable;
            else if (character2 == 125 && variable++ == 0 && prev() == 125)
              continue;
          }
          switch (characters2 += from(character2), character2 * variable) {
            case 38:
              ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
              break;
            case 44:
              points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
              break;
            case 64:
              if (peek() === 45)
                characters2 += delimit(next());
              atrule = peek(), offset = length2 = strlen(type4 = characters2 += identifier(caret())), character2++;
              break;
            case 45:
              if (previous === 45 && strlen(characters2) == 2)
                variable = 0;
          }
      }
    return rulesets;
  }
  function ruleset(value, root2, parent, index2, offset, rules2, points, type4, props, children, length2) {
    var post = offset - 1;
    var rule = offset === 0 ? rules2 : [""];
    var size = sizeof(rule);
    for (var i3 = 0, j4 = 0, k4 = 0; i3 < index2; ++i3)
      for (var x4 = 0, y3 = substr(value, post + 1, post = abs(j4 = points[i3])), z4 = value; x4 < size; ++x4)
        if (z4 = trim(j4 > 0 ? rule[x4] + " " + y3 : replace(y3, /&\f/g, rule[x4])))
          props[k4++] = z4;
    return node(value, root2, parent, offset === 0 ? RULESET : type4, props, children, length2);
  }
  function comment(value, root2, parent) {
    return node(value, root2, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
  }
  function declaration(value, root2, parent, length2) {
    return node(value, root2, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
  }

  // node_modules/stylis/src/Serializer.js
  function serialize2(children, callback) {
    var output = "";
    var length2 = sizeof(children);
    for (var i3 = 0; i3 < length2; i3++)
      output += callback(children[i3], i3, children, callback) || "";
    return output;
  }
  function stringify(element, index2, children, callback) {
    switch (element.type) {
      case LAYER:
        if (element.children.length)
          break;
      case IMPORT:
      case DECLARATION:
        return element.return = element.return || element.value;
      case COMMENT:
        return "";
      case KEYFRAMES:
        return element.return = element.value + "{" + serialize2(element.children, callback) + "}";
      case RULESET:
        element.value = element.props.join(",");
    }
    return strlen(children = serialize2(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
  }

  // node_modules/@ant-design/cssinjs/es/linters/utils.js
  function lintWarning(message, info) {
    var path = info.path, parentSelectors = info.parentSelectors;
    warning_default(false, "[Ant Design CSS-in-JS] ".concat(path ? "Error in ".concat(path, ": ") : "").concat(message).concat(parentSelectors.length ? " Selector: ".concat(parentSelectors.join(" | ")) : ""));
  }

  // node_modules/@ant-design/cssinjs/es/linters/contentQuotesLinter.js
  var linter = function linter2(key, value, info) {
    if (key === "content") {
      var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
      var contentValues = ["normal", "none", "initial", "inherit", "unset"];
      if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        lintWarning("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(value, "\"'`."), info);
      }
    }
  };
  var contentQuotesLinter_default = linter;

  // node_modules/@ant-design/cssinjs/es/linters/hashedAnimationLinter.js
  var linter3 = function linter4(key, value, info) {
    if (key === "animation") {
      if (info.hashId && value !== "none") {
        lintWarning("You seem to be using hashed animation '".concat(value, "', in which case 'animationName' with Keyframe as value is recommended."), info);
      }
    }
  };
  var hashedAnimationLinter_default = linter3;

  // node_modules/@ant-design/cssinjs/es/hooks/useStyleRegister.js
  var isClientSide = canUseDom();
  var SKIP_CHECK = "_skip_check_";
  var MULTI_VALUE = "_multi_value_";
  function normalizeStyle(styleStr) {
    var serialized = serialize2(compile(styleStr), stringify);
    return serialized.replace(/\{%%%\:[^;];}/g, ";");
  }
  function isCompoundCSSProperty(value) {
    return _typeof(value) === "object" && value && (SKIP_CHECK in value || MULTI_VALUE in value);
  }
  function injectSelectorHash(key, hashId, hashPriority) {
    if (!hashId) {
      return key;
    }
    var hashClassName = ".".concat(hashId);
    var hashSelector = hashPriority === "low" ? ":where(".concat(hashClassName, ")") : hashClassName;
    var keys = key.split(",").map(function(k4) {
      var _firstPath$match;
      var fullPath = k4.trim().split(/\s+/);
      var firstPath = fullPath[0] || "";
      var htmlElement = ((_firstPath$match = firstPath.match(/^\w+/)) === null || _firstPath$match === void 0 ? void 0 : _firstPath$match[0]) || "";
      firstPath = "".concat(htmlElement).concat(hashSelector).concat(firstPath.slice(htmlElement.length));
      return [firstPath].concat(_toConsumableArray(fullPath.slice(1))).join(" ");
    });
    return keys.join(",");
  }
  var parseStyle = function parseStyle2(interpolation) {
    var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      root: true,
      parentSelectors: []
    }, root2 = _ref.root, injectHash = _ref.injectHash, parentSelectors = _ref.parentSelectors;
    var hashId = config.hashId, layer = config.layer, path = config.path, hashPriority = config.hashPriority, _config$transformers = config.transformers, transformers = _config$transformers === void 0 ? [] : _config$transformers, _config$linters = config.linters, linters = _config$linters === void 0 ? [] : _config$linters;
    var styleStr = "";
    var effectStyle = {};
    function parseKeyframes(keyframes) {
      var animationName = keyframes.getName(hashId);
      if (!effectStyle[animationName]) {
        var _parseStyle = parseStyle2(keyframes.style, config, {
          root: false,
          parentSelectors
        }), _parseStyle2 = _slicedToArray(_parseStyle, 1), _parsedStr = _parseStyle2[0];
        effectStyle[animationName] = "@keyframes ".concat(keyframes.getName(hashId)).concat(_parsedStr);
      }
    }
    function flattenList(list) {
      var fullList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      list.forEach(function(item) {
        if (Array.isArray(item)) {
          flattenList(item, fullList);
        } else if (item) {
          fullList.push(item);
        }
      });
      return fullList;
    }
    var flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
    flattenStyleList.forEach(function(originStyle) {
      var style3 = typeof originStyle === "string" && !root2 ? {} : originStyle;
      if (typeof style3 === "string") {
        styleStr += "".concat(style3, "\n");
      } else if (style3._keyframe) {
        parseKeyframes(style3);
      } else {
        var mergedStyle = transformers.reduce(function(prev2, trans) {
          var _trans$visit;
          return (trans === null || trans === void 0 ? void 0 : (_trans$visit = trans.visit) === null || _trans$visit === void 0 ? void 0 : _trans$visit.call(trans, prev2)) || prev2;
        }, style3);
        Object.keys(mergedStyle).forEach(function(key) {
          var value = mergedStyle[key];
          if (_typeof(value) === "object" && value && (key !== "animationName" || !value._keyframe) && !isCompoundCSSProperty(value)) {
            var subInjectHash = false;
            var mergedKey = key.trim();
            var nextRoot = false;
            if ((root2 || injectHash) && hashId) {
              if (mergedKey.startsWith("@")) {
                subInjectHash = true;
              } else {
                mergedKey = injectSelectorHash(key, hashId, hashPriority);
              }
            } else if (root2 && !hashId && (mergedKey === "&" || mergedKey === "")) {
              mergedKey = "";
              nextRoot = true;
            }
            var _parseStyle3 = parseStyle2(value, config, {
              root: nextRoot,
              injectHash: subInjectHash,
              parentSelectors: [].concat(_toConsumableArray(parentSelectors), [mergedKey])
            }), _parseStyle4 = _slicedToArray(_parseStyle3, 2), _parsedStr2 = _parseStyle4[0], childEffectStyle = _parseStyle4[1];
            effectStyle = _objectSpread2(_objectSpread2({}, effectStyle), childEffectStyle);
            styleStr += "".concat(mergedKey).concat(_parsedStr2);
          } else {
            let appendStyle = function(cssKey, cssValue) {
              if (_typeof(value) !== "object" || !(value !== null && value !== void 0 && value[SKIP_CHECK])) {
                [contentQuotesLinter_default, hashedAnimationLinter_default].concat(_toConsumableArray(linters)).forEach(function(linter5) {
                  return linter5(cssKey, cssValue, {
                    path,
                    hashId,
                    parentSelectors
                  });
                });
              }
              var styleName = cssKey.replace(/[A-Z]/g, function(match2) {
                return "-".concat(match2.toLowerCase());
              });
              var formatValue = cssValue;
              if (!unitless_browser_esm_default[cssKey] && typeof formatValue === "number" && formatValue !== 0) {
                formatValue = "".concat(formatValue, "px");
              }
              if (cssKey === "animationName" && cssValue !== null && cssValue !== void 0 && cssValue._keyframe) {
                parseKeyframes(cssValue);
                formatValue = cssValue.getName(hashId);
              }
              styleStr += "".concat(styleName, ":").concat(formatValue, ";");
            };
            var _value;
            var actualValue = (_value = value === null || value === void 0 ? void 0 : value.value) !== null && _value !== void 0 ? _value : value;
            if (_typeof(value) === "object" && value !== null && value !== void 0 && value[MULTI_VALUE] && Array.isArray(actualValue)) {
              actualValue.forEach(function(item) {
                appendStyle(key, item);
              });
            } else {
              appendStyle(key, actualValue);
            }
          }
        });
      }
    });
    if (!root2) {
      styleStr = "{".concat(styleStr, "}");
    } else if (layer && supportLayer()) {
      var layerCells = layer.split(",");
      var layerName = layerCells[layerCells.length - 1].trim();
      styleStr = "@layer ".concat(layerName, " {").concat(styleStr, "}");
      if (layerCells.length > 1) {
        styleStr = "@layer ".concat(layer, "{%%%:%}").concat(styleStr);
      }
    }
    return [styleStr, effectStyle];
  };
  function uniqueHash(path, styleStr) {
    return hash_browser_esm_default("".concat(path.join("%")).concat(styleStr));
  }
  function Empty() {
    return null;
  }
  function useStyleRegister(info, styleFn) {
    var token2 = info.token, path = info.path, hashId = info.hashId, layer = info.layer, nonce = info.nonce;
    var _React$useContext = q2(StyleContext_default), autoClear = _React$useContext.autoClear, mock = _React$useContext.mock, defaultCache = _React$useContext.defaultCache, hashPriority = _React$useContext.hashPriority, container = _React$useContext.container, ssrInline = _React$useContext.ssrInline, transformers = _React$useContext.transformers, linters = _React$useContext.linters, cache2 = _React$useContext.cache;
    var tokenKey = token2._tokenKey;
    var fullPath = [tokenKey].concat(_toConsumableArray(path));
    var isMergedClientSide = isClientSide;
    if (mock !== void 0) {
      isMergedClientSide = mock === "client";
    }
    var _useGlobalCache = useClientCache(
      "style",
      fullPath,
      // Create cache if needed
      function() {
        var styleObj = styleFn();
        var _parseStyle5 = parseStyle(styleObj, {
          hashId,
          hashPriority,
          layer,
          path: path.join("-"),
          transformers,
          linters
        }), _parseStyle6 = _slicedToArray(_parseStyle5, 2), parsedStyle = _parseStyle6[0], effectStyle = _parseStyle6[1];
        var styleStr = normalizeStyle(parsedStyle);
        var styleId = uniqueHash(fullPath, styleStr);
        if (isMergedClientSide) {
          var mergedCSSConfig = {
            mark: ATTR_MARK,
            prepend: "queue",
            attachTo: container
          };
          var nonceStr = typeof nonce === "function" ? nonce() : nonce;
          if (nonceStr) {
            mergedCSSConfig.csp = {
              nonce: nonceStr
            };
          }
          var style3 = updateCSS(styleStr, styleId, mergedCSSConfig);
          style3[CSS_IN_JS_INSTANCE] = cache2.instanceId;
          style3.setAttribute(ATTR_TOKEN, tokenKey);
          if (true) {
            style3.setAttribute(ATTR_DEV_CACHE_PATH, fullPath.join("|"));
          }
          Object.keys(effectStyle).forEach(function(effectKey) {
            updateCSS(normalizeStyle(effectStyle[effectKey]), "_effect-".concat(effectKey), mergedCSSConfig);
          });
        }
        return [styleStr, tokenKey, styleId];
      },
      // Remove cache if no need
      function(_ref2, fromHMR) {
        var _ref3 = _slicedToArray(_ref2, 3), styleId = _ref3[2];
        if ((fromHMR || autoClear) && isClientSide) {
          removeCSS(styleId, {
            mark: ATTR_MARK
          });
        }
      }
    ), _useGlobalCache2 = _slicedToArray(_useGlobalCache, 3), cachedStyleStr = _useGlobalCache2[0], cachedTokenKey = _useGlobalCache2[1], cachedStyleId = _useGlobalCache2[2];
    return function(node2) {
      var styleNode;
      if (!ssrInline || isMergedClientSide || !defaultCache) {
        styleNode = /* @__PURE__ */ y(Empty, null);
      } else {
        var _ref4;
        styleNode = /* @__PURE__ */ y("style", _extends({}, (_ref4 = {}, _defineProperty(_ref4, ATTR_TOKEN, cachedTokenKey), _defineProperty(_ref4, ATTR_MARK, cachedStyleId), _ref4), {
          dangerouslySetInnerHTML: {
            __html: cachedStyleStr
          }
        }));
      }
      return /* @__PURE__ */ y(k, null, styleNode, node2);
    };
  }

  // node_modules/@ant-design/cssinjs/es/Keyframes.js
  var Keyframe = /* @__PURE__ */ function() {
    function Keyframe2(name, style3) {
      _classCallCheck(this, Keyframe2);
      _defineProperty(this, "name", void 0);
      _defineProperty(this, "style", void 0);
      _defineProperty(this, "_keyframe", true);
      this.name = name;
      this.style = style3;
    }
    _createClass(Keyframe2, [{
      key: "getName",
      value: function getName() {
        var hashId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        return hashId ? "".concat(hashId, "-").concat(this.name) : this.name;
      }
    }]);
    return Keyframe2;
  }();
  var Keyframes_default = Keyframe;

  // node_modules/@ant-design/cssinjs/es/theme/ThemeCache.js
  function sameDerivativeOption(left, right) {
    if (left.length !== right.length) {
      return false;
    }
    for (var i3 = 0; i3 < left.length; i3++) {
      if (left[i3] !== right[i3]) {
        return false;
      }
    }
    return true;
  }
  var ThemeCache = /* @__PURE__ */ function() {
    function ThemeCache2() {
      _classCallCheck(this, ThemeCache2);
      _defineProperty(this, "cache", void 0);
      _defineProperty(this, "keys", void 0);
      _defineProperty(this, "cacheCallTimes", void 0);
      this.cache = /* @__PURE__ */ new Map();
      this.keys = [];
      this.cacheCallTimes = 0;
    }
    _createClass(ThemeCache2, [{
      key: "size",
      value: function size() {
        return this.keys.length;
      }
    }, {
      key: "internalGet",
      value: function internalGet(derivativeOption) {
        var _cache2, _cache3;
        var updateCallTimes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var cache2 = {
          map: this.cache
        };
        derivativeOption.forEach(function(derivative2) {
          if (!cache2) {
            cache2 = void 0;
          } else {
            var _cache, _cache$map;
            cache2 = (_cache = cache2) === null || _cache === void 0 ? void 0 : (_cache$map = _cache.map) === null || _cache$map === void 0 ? void 0 : _cache$map.get(derivative2);
          }
        });
        if ((_cache2 = cache2) !== null && _cache2 !== void 0 && _cache2.value && updateCallTimes) {
          cache2.value[1] = this.cacheCallTimes++;
        }
        return (_cache3 = cache2) === null || _cache3 === void 0 ? void 0 : _cache3.value;
      }
    }, {
      key: "get",
      value: function get2(derivativeOption) {
        var _this$internalGet;
        return (_this$internalGet = this.internalGet(derivativeOption, true)) === null || _this$internalGet === void 0 ? void 0 : _this$internalGet[0];
      }
    }, {
      key: "has",
      value: function has(derivativeOption) {
        return !!this.internalGet(derivativeOption);
      }
    }, {
      key: "set",
      value: function set2(derivativeOption, value) {
        var _this = this;
        if (!this.has(derivativeOption)) {
          if (this.size() + 1 > ThemeCache2.MAX_CACHE_SIZE + ThemeCache2.MAX_CACHE_OFFSET) {
            var _this$keys$reduce = this.keys.reduce(function(result, key) {
              var _result = _slicedToArray(result, 2), callTimes = _result[1];
              if (_this.internalGet(key)[1] < callTimes) {
                return [key, _this.internalGet(key)[1]];
              }
              return result;
            }, [this.keys[0], this.cacheCallTimes]), _this$keys$reduce2 = _slicedToArray(_this$keys$reduce, 1), targetKey = _this$keys$reduce2[0];
            this.delete(targetKey);
          }
          this.keys.push(derivativeOption);
        }
        var cache2 = this.cache;
        derivativeOption.forEach(function(derivative2, index2) {
          if (index2 === derivativeOption.length - 1) {
            cache2.set(derivative2, {
              value: [value, _this.cacheCallTimes++]
            });
          } else {
            var cacheValue = cache2.get(derivative2);
            if (!cacheValue) {
              cache2.set(derivative2, {
                map: /* @__PURE__ */ new Map()
              });
            } else if (!cacheValue.map) {
              cacheValue.map = /* @__PURE__ */ new Map();
            }
            cache2 = cache2.get(derivative2).map;
          }
        });
      }
    }, {
      key: "deleteByPath",
      value: function deleteByPath(currentCache, derivatives) {
        var cache2 = currentCache.get(derivatives[0]);
        if (derivatives.length === 1) {
          var _cache$value;
          if (!cache2.map) {
            currentCache.delete(derivatives[0]);
          } else {
            currentCache.set(derivatives[0], {
              map: cache2.map
            });
          }
          return (_cache$value = cache2.value) === null || _cache$value === void 0 ? void 0 : _cache$value[0];
        }
        var result = this.deleteByPath(cache2.map, derivatives.slice(1));
        if ((!cache2.map || cache2.map.size === 0) && !cache2.value) {
          currentCache.delete(derivatives[0]);
        }
        return result;
      }
    }, {
      key: "delete",
      value: function _delete(derivativeOption) {
        if (this.has(derivativeOption)) {
          this.keys = this.keys.filter(function(item) {
            return !sameDerivativeOption(item, derivativeOption);
          });
          return this.deleteByPath(this.cache, derivativeOption);
        }
        return void 0;
      }
    }]);
    return ThemeCache2;
  }();
  _defineProperty(ThemeCache, "MAX_CACHE_SIZE", 20);
  _defineProperty(ThemeCache, "MAX_CACHE_OFFSET", 5);

  // node_modules/@ant-design/cssinjs/es/theme/Theme.js
  var uuid = 0;
  var Theme2 = /* @__PURE__ */ function() {
    function Theme3(derivatives) {
      _classCallCheck(this, Theme3);
      _defineProperty(this, "derivatives", void 0);
      _defineProperty(this, "id", void 0);
      this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
      this.id = uuid;
      if (derivatives.length === 0) {
        warning(derivatives.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function.");
      }
      uuid += 1;
    }
    _createClass(Theme3, [{
      key: "getDerivativeToken",
      value: function getDerivativeToken(token2) {
        return this.derivatives.reduce(function(result, derivative2) {
          return derivative2(token2, result);
        }, void 0);
      }
    }]);
    return Theme3;
  }();

  // node_modules/@ant-design/cssinjs/es/theme/createTheme.js
  var cacheThemes = new ThemeCache();
  function createTheme(derivatives) {
    var derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
    if (!cacheThemes.has(derivativeArr)) {
      cacheThemes.set(derivativeArr, new Theme2(derivativeArr));
    }
    return cacheThemes.get(derivativeArr);
  }

  // node_modules/@ant-design/cssinjs/es/transformers/legacyLogicalProperties.js
  function noSplit(list) {
    list.notSplit = true;
    return list;
  }
  var keyMap = {
    // Inset
    inset: ["top", "right", "bottom", "left"],
    insetBlock: ["top", "bottom"],
    insetBlockStart: ["top"],
    insetBlockEnd: ["bottom"],
    insetInline: ["left", "right"],
    insetInlineStart: ["left"],
    insetInlineEnd: ["right"],
    // Margin
    marginBlock: ["marginTop", "marginBottom"],
    marginBlockStart: ["marginTop"],
    marginBlockEnd: ["marginBottom"],
    marginInline: ["marginLeft", "marginRight"],
    marginInlineStart: ["marginLeft"],
    marginInlineEnd: ["marginRight"],
    // Padding
    paddingBlock: ["paddingTop", "paddingBottom"],
    paddingBlockStart: ["paddingTop"],
    paddingBlockEnd: ["paddingBottom"],
    paddingInline: ["paddingLeft", "paddingRight"],
    paddingInlineStart: ["paddingLeft"],
    paddingInlineEnd: ["paddingRight"],
    // Border
    borderBlock: noSplit(["borderTop", "borderBottom"]),
    borderBlockStart: noSplit(["borderTop"]),
    borderBlockEnd: noSplit(["borderBottom"]),
    borderInline: noSplit(["borderLeft", "borderRight"]),
    borderInlineStart: noSplit(["borderLeft"]),
    borderInlineEnd: noSplit(["borderRight"]),
    // Border width
    borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
    borderBlockStartWidth: ["borderTopWidth"],
    borderBlockEndWidth: ["borderBottomWidth"],
    borderInlineWidth: ["borderLeftWidth", "borderRightWidth"],
    borderInlineStartWidth: ["borderLeftWidth"],
    borderInlineEndWidth: ["borderRightWidth"],
    // Border style
    borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
    borderBlockStartStyle: ["borderTopStyle"],
    borderBlockEndStyle: ["borderBottomStyle"],
    borderInlineStyle: ["borderLeftStyle", "borderRightStyle"],
    borderInlineStartStyle: ["borderLeftStyle"],
    borderInlineEndStyle: ["borderRightStyle"],
    // Border color
    borderBlockColor: ["borderTopColor", "borderBottomColor"],
    borderBlockStartColor: ["borderTopColor"],
    borderBlockEndColor: ["borderBottomColor"],
    borderInlineColor: ["borderLeftColor", "borderRightColor"],
    borderInlineStartColor: ["borderLeftColor"],
    borderInlineEndColor: ["borderRightColor"],
    // Border radius
    borderStartStartRadius: ["borderTopLeftRadius"],
    borderStartEndRadius: ["borderTopRightRadius"],
    borderEndStartRadius: ["borderBottomLeftRadius"],
    borderEndEndRadius: ["borderBottomRightRadius"]
  };

  // node_modules/@ant-design/icons/es/components/Context.js
  init_react();
  var IconContext = /* @__PURE__ */ G({});
  var Context_default = IconContext;

  // node_modules/rc-field-form/es/index.js
  init_react();

  // node_modules/rc-field-form/es/Field.js
  init_react();

  // node_modules/rc-field-form/es/FieldContext.js
  init_react();
  var HOOK_MARK = "RC_FORM_INTERNAL_HOOKS";
  var warningFunc = function warningFunc2() {
    warning_default(false, "Can not find FormContext. Please make sure you wrap Field under Form.");
  };
  var Context = /* @__PURE__ */ G({
    getFieldValue: warningFunc,
    getFieldsValue: warningFunc,
    getFieldError: warningFunc,
    getFieldWarning: warningFunc,
    getFieldsError: warningFunc,
    isFieldsTouched: warningFunc,
    isFieldTouched: warningFunc,
    isFieldValidating: warningFunc,
    isFieldsValidating: warningFunc,
    resetFields: warningFunc,
    setFields: warningFunc,
    setFieldValue: warningFunc,
    setFieldsValue: warningFunc,
    validateFields: warningFunc,
    submit: warningFunc,
    getInternalHooks: function getInternalHooks() {
      warningFunc();
      return {
        dispatch: warningFunc,
        initEntityValue: warningFunc,
        registerField: warningFunc,
        useSubscribe: warningFunc,
        setInitialValues: warningFunc,
        destroyForm: warningFunc,
        setCallbacks: warningFunc,
        registerWatch: warningFunc,
        getFields: warningFunc,
        setValidateMessages: warningFunc,
        setPreserve: warningFunc,
        getInitialValue: warningFunc
      };
    }
  });
  var FieldContext_default = Context;

  // node_modules/rc-field-form/es/ListContext.js
  init_react();
  var ListContext = /* @__PURE__ */ G(null);
  var ListContext_default = ListContext;

  // node_modules/rc-field-form/es/utils/typeUtil.js
  function toArray2(value) {
    if (value === void 0 || value === null) {
      return [];
    }
    return Array.isArray(value) ? value : [value];
  }
  function isFormInstance(form) {
    return form && !!form._init;
  }

  // node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
  function _regeneratorRuntime() {
    "use strict";
    _regeneratorRuntime = function _regeneratorRuntime2() {
      return exports2;
    };
    var exports2 = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty2 = Object.defineProperty || function(obj, key, desc) {
      obj[key] = desc.value;
    }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define2(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      }), obj[key];
    }
    try {
      define2({}, "");
    } catch (err) {
      define2 = function define3(obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self2, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context3(tryLocsList || []);
      return defineProperty2(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self2, context)
      }), generator;
    }
    function tryCatch(fn2, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn2.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports2.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var IteratorPrototype = {};
    define2(IteratorPrototype, iteratorSymbol, function() {
      return this;
    });
    var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method4) {
        define2(prototype, method4, function(arg) {
          return this._invoke(method4, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method4, arg, resolve, reject) {
        var record = tryCatch(generator[method4], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg, value = result.value;
          return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
            invoke("next", value2, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function(unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function(error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty2(this, "_invoke", {
        value: function value(method4, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function(resolve, reject) {
              invoke(method4, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self2, context) {
      var state = "suspendedStart";
      return function(method4, arg) {
        if ("executing" === state)
          throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method4)
            throw arg;
          return doneResult();
        }
        for (context.method = method4, context.arg = arg; ; ) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel)
                continue;
              return delegateResult;
            }
          }
          if ("next" === context.method)
            context.sent = context._sent = context.arg;
          else if ("throw" === context.method) {
            if ("suspendedStart" === state)
              throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else
            "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self2, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
              continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method, method4 = delegate.iterator[methodName];
      if (void 0 === method4)
        return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method4, delegate.iterator, context.arg);
      if ("throw" === record.type)
        return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context3(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod)
          return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next)
          return iterable;
        if (!isNaN(iterable.length)) {
          var i3 = -1, next2 = function next3() {
            for (; ++i3 < iterable.length; )
              if (hasOwn.call(iterable, i3))
                return next3.value = iterable[i3], next3.done = false, next3;
            return next3.value = void 0, next3.done = true, next3;
          };
          return next2.next = next2;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: void 0,
        done: true
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty2(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: true
    }), defineProperty2(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: true
    }), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports2.isGeneratorFunction = function(genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports2.mark = function(genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define2(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports2.awrap = function(arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, asyncIteratorSymbol, function() {
      return this;
    }), exports2.AsyncIterator = AsyncIterator, exports2.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
      return exports2.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define2(Gp, toStringTagSymbol, "Generator"), define2(Gp, iteratorSymbol, function() {
      return this;
    }), define2(Gp, "toString", function() {
      return "[object Generator]";
    }), exports2.keys = function(val) {
      var object4 = Object(val), keys = [];
      for (var key in object4)
        keys.push(key);
      return keys.reverse(), function next2() {
        for (; keys.length; ) {
          var key2 = keys.pop();
          if (key2 in object4)
            return next2.value = key2, next2.done = false, next2;
        }
        return next2.done = true, next2;
      };
    }, exports2.values = values, Context3.prototype = {
      constructor: Context3,
      reset: function reset(skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
          for (var name in this)
            "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
      },
      stop: function stop() {
        this.done = true;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type)
          throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done)
          throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
        }
        for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
          var entry = this.tryEntries[i3], record = entry.completion;
          if ("root" === entry.tryLoc)
            return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc)
                return handle(entry.catchLoc, true);
              if (this.prev < entry.finallyLoc)
                return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc)
                return handle(entry.catchLoc, true);
            } else {
              if (!hasFinally)
                throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc)
                return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type4, arg) {
        for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
          var entry = this.tryEntries[i3];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type4 || "continue" === type4) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type4, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if ("throw" === record.type)
          throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
          var entry = this.tryEntries[i3];
          if (entry.finallyLoc === finallyLoc)
            return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
          var entry = this.tryEntries[i3];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName,
          nextLoc
        }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
      }
    }, exports2;
  }

  // node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn2) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn2.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }

  // node_modules/async-validator/dist-web/index.js
  function _extends2() {
    _extends2 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = arguments[i3];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf2(subClass, superClass);
  }
  function _getPrototypeOf2(o4) {
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf3(o5) {
      return o5.__proto__ || Object.getPrototypeOf(o5);
    };
    return _getPrototypeOf2(o4);
  }
  function _setPrototypeOf2(o4, p3) {
    _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf3(o5, p4) {
      o5.__proto__ = p4;
      return o5;
    };
    return _setPrototypeOf2(o4, p3);
  }
  function _isNativeReflectConstruct2() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e3) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct2()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct2(Parent2, args2, Class2) {
        var a3 = [null];
        a3.push.apply(a3, args2);
        var Constructor = Function.bind.apply(Parent2, a3);
        var instance = new Constructor();
        if (Class2)
          _setPrototypeOf2(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn2) {
    return Function.toString.call(fn2).indexOf("[native code]") !== -1;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
      if (Class2 === null || !_isNativeFunction(Class2))
        return Class2;
      if (typeof Class2 !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2))
          return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _getPrototypeOf2(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf2(Wrapper, Class2);
    };
    return _wrapNativeSuper(Class);
  }
  var formatRegExp = /%[sdj%]/g;
  var warning2 = function warning3() {
  };
  if (typeof process !== "undefined" && process.env && true && typeof window !== "undefined" && typeof document !== "undefined") {
    warning2 = function warning6(type4, errors) {
      if (typeof console !== "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === "undefined") {
        if (errors.every(function(e3) {
          return typeof e3 === "string";
        })) {
          console.warn(type4, errors);
        }
      }
    };
  }
  function convertFieldsError(errors) {
    if (!errors || !errors.length)
      return null;
    var fields = {};
    errors.forEach(function(error) {
      var field = error.field;
      fields[field] = fields[field] || [];
      fields[field].push(error);
    });
    return fields;
  }
  function format(template) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var i3 = 0;
    var len = args.length;
    if (typeof template === "function") {
      return template.apply(null, args);
    }
    if (typeof template === "string") {
      var str = template.replace(formatRegExp, function(x4) {
        if (x4 === "%%") {
          return "%";
        }
        if (i3 >= len) {
          return x4;
        }
        switch (x4) {
          case "%s":
            return String(args[i3++]);
          case "%d":
            return Number(args[i3++]);
          case "%j":
            try {
              return JSON.stringify(args[i3++]);
            } catch (_4) {
              return "[Circular]";
            }
            break;
          default:
            return x4;
        }
      });
      return str;
    }
    return template;
  }
  function isNativeStringType(type4) {
    return type4 === "string" || type4 === "url" || type4 === "hex" || type4 === "email" || type4 === "date" || type4 === "pattern";
  }
  function isEmptyValue(value, type4) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (type4 === "array" && Array.isArray(value) && !value.length) {
      return true;
    }
    if (isNativeStringType(type4) && typeof value === "string" && !value) {
      return true;
    }
    return false;
  }
  function asyncParallelArray(arr, func, callback) {
    var results = [];
    var total = 0;
    var arrLength = arr.length;
    function count(errors) {
      results.push.apply(results, errors || []);
      total++;
      if (total === arrLength) {
        callback(results);
      }
    }
    arr.forEach(function(a3) {
      func(a3, count);
    });
  }
  function asyncSerialArray(arr, func, callback) {
    var index2 = 0;
    var arrLength = arr.length;
    function next2(errors) {
      if (errors && errors.length) {
        callback(errors);
        return;
      }
      var original = index2;
      index2 = index2 + 1;
      if (original < arrLength) {
        func(arr[original], next2);
      } else {
        callback([]);
      }
    }
    next2([]);
  }
  function flattenObjArr(objArr) {
    var ret = [];
    Object.keys(objArr).forEach(function(k4) {
      ret.push.apply(ret, objArr[k4] || []);
    });
    return ret;
  }
  var AsyncValidationError = /* @__PURE__ */ function(_Error) {
    _inheritsLoose(AsyncValidationError2, _Error);
    function AsyncValidationError2(errors, fields) {
      var _this;
      _this = _Error.call(this, "Async Validation Error") || this;
      _this.errors = errors;
      _this.fields = fields;
      return _this;
    }
    return AsyncValidationError2;
  }(/* @__PURE__ */ _wrapNativeSuper(Error));
  function asyncMap(objArr, option, func, callback, source) {
    if (option.first) {
      var _pending = new Promise(function(resolve, reject) {
        var next2 = function next3(errors) {
          callback(errors);
          return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
        };
        var flattenArr = flattenObjArr(objArr);
        asyncSerialArray(flattenArr, func, next2);
      });
      _pending["catch"](function(e3) {
        return e3;
      });
      return _pending;
    }
    var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
    var objArrKeys = Object.keys(objArr);
    var objArrLength = objArrKeys.length;
    var total = 0;
    var results = [];
    var pending = new Promise(function(resolve, reject) {
      var next2 = function next3(errors) {
        results.push.apply(results, errors);
        total++;
        if (total === objArrLength) {
          callback(results);
          return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
        }
      };
      if (!objArrKeys.length) {
        callback(results);
        resolve(source);
      }
      objArrKeys.forEach(function(key) {
        var arr = objArr[key];
        if (firstFields.indexOf(key) !== -1) {
          asyncSerialArray(arr, func, next2);
        } else {
          asyncParallelArray(arr, func, next2);
        }
      });
    });
    pending["catch"](function(e3) {
      return e3;
    });
    return pending;
  }
  function isErrorObj(obj) {
    return !!(obj && obj.message !== void 0);
  }
  function getValue2(value, path) {
    var v3 = value;
    for (var i3 = 0; i3 < path.length; i3++) {
      if (v3 == void 0) {
        return v3;
      }
      v3 = v3[path[i3]];
    }
    return v3;
  }
  function complementError(rule, source) {
    return function(oe) {
      var fieldValue;
      if (rule.fullFields) {
        fieldValue = getValue2(source, rule.fullFields);
      } else {
        fieldValue = source[oe.field || rule.fullField];
      }
      if (isErrorObj(oe)) {
        oe.field = oe.field || rule.fullField;
        oe.fieldValue = fieldValue;
        return oe;
      }
      return {
        message: typeof oe === "function" ? oe() : oe,
        fieldValue,
        field: oe.field || rule.fullField
      };
    };
  }
  function deepMerge(target, source) {
    if (source) {
      for (var s3 in source) {
        if (source.hasOwnProperty(s3)) {
          var value = source[s3];
          if (typeof value === "object" && typeof target[s3] === "object") {
            target[s3] = _extends2({}, target[s3], value);
          } else {
            target[s3] = value;
          }
        }
      }
    }
    return target;
  }
  var required$1 = function required(rule, value, source, errors, options, type4) {
    if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type4 || rule.type))) {
      errors.push(format(options.messages.required, rule.fullField));
    }
  };
  var whitespace2 = function whitespace3(rule, value, source, errors, options) {
    if (/^\s+$/.test(value) || value === "") {
      errors.push(format(options.messages.whitespace, rule.fullField));
    }
  };
  var urlReg;
  var getUrlRegex = function() {
    if (urlReg) {
      return urlReg;
    }
    var word = "[a-fA-F\\d:]";
    var b3 = function b4(options) {
      return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : "";
    };
    var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
    var v6seg = "[a-fA-F\\d]{1,4}";
    var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
    var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
    var v4exact = new RegExp("^" + v4 + "$");
    var v6exact = new RegExp("^" + v6 + "$");
    var ip = function ip2(options) {
      return options && options.exact ? v46Exact : new RegExp("(?:" + b3(options) + v4 + b3(options) + ")|(?:" + b3(options) + v6 + b3(options) + ")", "g");
    };
    ip.v4 = function(options) {
      return options && options.exact ? v4exact : new RegExp("" + b3(options) + v4 + b3(options), "g");
    };
    ip.v6 = function(options) {
      return options && options.exact ? v6exact : new RegExp("" + b3(options) + v6 + b3(options), "g");
    };
    var protocol = "(?:(?:[a-z]+:)?//)";
    var auth = "(?:\\S+(?::\\S*)?@)?";
    var ipv4 = ip.v4().source;
    var ipv6 = ip.v6().source;
    var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
    var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
    var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
    var port = "(?::\\d{2,5})?";
    var path = '(?:[/?#][^\\s"]*)?';
    var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
    urlReg = new RegExp("(?:^" + regex + "$)", "i");
    return urlReg;
  };
  var pattern$2 = {
    // http://emailregex.com/
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    // url: new RegExp(
    //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
    //   'i',
    // ),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
  };
  var types = {
    integer: function integer(value) {
      return types.number(value) && parseInt(value, 10) === value;
    },
    "float": function float(value) {
      return types.number(value) && !types.integer(value);
    },
    array: function array(value) {
      return Array.isArray(value);
    },
    regexp: function regexp(value) {
      if (value instanceof RegExp) {
        return true;
      }
      try {
        return !!new RegExp(value);
      } catch (e3) {
        return false;
      }
    },
    date: function date(value) {
      return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
    },
    number: function number(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof value === "number";
    },
    object: function object(value) {
      return typeof value === "object" && !types.array(value);
    },
    method: function method(value) {
      return typeof value === "function";
    },
    email: function email(value) {
      return typeof value === "string" && value.length <= 320 && !!value.match(pattern$2.email);
    },
    url: function url(value) {
      return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
    },
    hex: function hex(value) {
      return typeof value === "string" && !!value.match(pattern$2.hex);
    }
  };
  var type$1 = function type(rule, value, source, errors, options) {
    if (rule.required && value === void 0) {
      required$1(rule, value, source, errors, options);
      return;
    }
    var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
    var ruleType = rule.type;
    if (custom.indexOf(ruleType) > -1) {
      if (!types[ruleType](value)) {
        errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
      }
    } else if (ruleType && typeof value !== rule.type) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  };
  var range = function range2(rule, value, source, errors, options) {
    var len = typeof rule.len === "number";
    var min = typeof rule.min === "number";
    var max = typeof rule.max === "number";
    var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    var val = value;
    var key = null;
    var num = typeof value === "number";
    var str = typeof value === "string";
    var arr = Array.isArray(value);
    if (num) {
      key = "number";
    } else if (str) {
      key = "string";
    } else if (arr) {
      key = "array";
    }
    if (!key) {
      return false;
    }
    if (arr) {
      val = value.length;
    }
    if (str) {
      val = value.replace(spRegexp, "_").length;
    }
    if (len) {
      if (val !== rule.len) {
        errors.push(format(options.messages[key].len, rule.fullField, rule.len));
      }
    } else if (min && !max && val < rule.min) {
      errors.push(format(options.messages[key].min, rule.fullField, rule.min));
    } else if (max && !min && val > rule.max) {
      errors.push(format(options.messages[key].max, rule.fullField, rule.max));
    } else if (min && max && (val < rule.min || val > rule.max)) {
      errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
    }
  };
  var ENUM$1 = "enum";
  var enumerable$1 = function enumerable(rule, value, source, errors, options) {
    rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
    if (rule[ENUM$1].indexOf(value) === -1) {
      errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
    }
  };
  var pattern$1 = function pattern(rule, value, source, errors, options) {
    if (rule.pattern) {
      if (rule.pattern instanceof RegExp) {
        rule.pattern.lastIndex = 0;
        if (!rule.pattern.test(value)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
      } else if (typeof rule.pattern === "string") {
        var _pattern = new RegExp(rule.pattern);
        if (!_pattern.test(value)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
      }
    }
  };
  var rules = {
    required: required$1,
    whitespace: whitespace2,
    type: type$1,
    range,
    "enum": enumerable$1,
    pattern: pattern$1
  };
  var string = function string2(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, "string");
      if (!isEmptyValue(value, "string")) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
        rules.pattern(rule, value, source, errors, options);
        if (rule.whitespace === true) {
          rules.whitespace(rule, value, source, errors, options);
        }
      }
    }
    callback(errors);
  };
  var method2 = function method3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var number2 = function number3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (value === "") {
        value = void 0;
      }
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var _boolean = function _boolean2(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var regexp2 = function regexp3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value)) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var integer2 = function integer3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var floatFn = function floatFn2(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var array2 = function array3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if ((value === void 0 || value === null) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, "array");
      if (value !== void 0 && value !== null) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var object2 = function object3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var ENUM = "enum";
  var enumerable2 = function enumerable3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules[ENUM](rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var pattern2 = function pattern3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value, "string")) {
        rules.pattern(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var date2 = function date3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "date") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value, "date")) {
        var dateObject;
        if (value instanceof Date) {
          dateObject = value;
        } else {
          dateObject = new Date(value);
        }
        rules.type(rule, dateObject, source, errors, options);
        if (dateObject) {
          rules.range(rule, dateObject.getTime(), source, errors, options);
        }
      }
    }
    callback(errors);
  };
  var required2 = function required3(rule, value, callback, source, options) {
    var errors = [];
    var type4 = Array.isArray(value) ? "array" : typeof value;
    rules.required(rule, value, source, errors, options, type4);
    callback(errors);
  };
  var type2 = function type3(rule, value, callback, source, options) {
    var ruleType = rule.type;
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, ruleType) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, ruleType);
      if (!isEmptyValue(value, ruleType)) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var any = function any2(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
    }
    callback(errors);
  };
  var validators = {
    string,
    method: method2,
    number: number2,
    "boolean": _boolean,
    regexp: regexp2,
    integer: integer2,
    "float": floatFn,
    array: array2,
    object: object2,
    "enum": enumerable2,
    pattern: pattern2,
    date: date2,
    url: type2,
    hex: type2,
    email: type2,
    required: required2,
    any
  };
  function newMessages() {
    return {
      "default": "Validation error on field %s",
      required: "%s is required",
      "enum": "%s must be one of %s",
      whitespace: "%s cannot be empty",
      date: {
        format: "%s date %s is invalid for format %s",
        parse: "%s date could not be parsed, %s is invalid ",
        invalid: "%s date %s is invalid"
      },
      types: {
        string: "%s is not a %s",
        method: "%s is not a %s (function)",
        array: "%s is not an %s",
        object: "%s is not an %s",
        number: "%s is not a %s",
        date: "%s is not a %s",
        "boolean": "%s is not a %s",
        integer: "%s is not an %s",
        "float": "%s is not a %s",
        regexp: "%s is not a valid %s",
        email: "%s is not a valid %s",
        url: "%s is not a valid %s",
        hex: "%s is not a valid %s"
      },
      string: {
        len: "%s must be exactly %s characters",
        min: "%s must be at least %s characters",
        max: "%s cannot be longer than %s characters",
        range: "%s must be between %s and %s characters"
      },
      number: {
        len: "%s must equal %s",
        min: "%s cannot be less than %s",
        max: "%s cannot be greater than %s",
        range: "%s must be between %s and %s"
      },
      array: {
        len: "%s must be exactly %s in length",
        min: "%s cannot be less than %s in length",
        max: "%s cannot be greater than %s in length",
        range: "%s must be between %s and %s in length"
      },
      pattern: {
        mismatch: "%s value %s does not match pattern %s"
      },
      clone: function clone() {
        var cloned = JSON.parse(JSON.stringify(this));
        cloned.clone = this.clone;
        return cloned;
      }
    };
  }
  var messages = newMessages();
  var Schema = /* @__PURE__ */ function() {
    function Schema2(descriptor) {
      this.rules = null;
      this._messages = messages;
      this.define(descriptor);
    }
    var _proto = Schema2.prototype;
    _proto.define = function define2(rules2) {
      var _this = this;
      if (!rules2) {
        throw new Error("Cannot configure a schema with no rules");
      }
      if (typeof rules2 !== "object" || Array.isArray(rules2)) {
        throw new Error("Rules must be an object");
      }
      this.rules = {};
      Object.keys(rules2).forEach(function(name) {
        var item = rules2[name];
        _this.rules[name] = Array.isArray(item) ? item : [item];
      });
    };
    _proto.messages = function messages2(_messages) {
      if (_messages) {
        this._messages = deepMerge(newMessages(), _messages);
      }
      return this._messages;
    };
    _proto.validate = function validate(source_, o4, oc) {
      var _this2 = this;
      if (o4 === void 0) {
        o4 = {};
      }
      if (oc === void 0) {
        oc = function oc2() {
        };
      }
      var source = source_;
      var options = o4;
      var callback = oc;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      if (!this.rules || Object.keys(this.rules).length === 0) {
        if (callback) {
          callback(null, source);
        }
        return Promise.resolve(source);
      }
      function complete(results) {
        var errors = [];
        var fields = {};
        function add(e3) {
          if (Array.isArray(e3)) {
            var _errors;
            errors = (_errors = errors).concat.apply(_errors, e3);
          } else {
            errors.push(e3);
          }
        }
        for (var i3 = 0; i3 < results.length; i3++) {
          add(results[i3]);
        }
        if (!errors.length) {
          callback(null, source);
        } else {
          fields = convertFieldsError(errors);
          callback(errors, fields);
        }
      }
      if (options.messages) {
        var messages$1 = this.messages();
        if (messages$1 === messages) {
          messages$1 = newMessages();
        }
        deepMerge(messages$1, options.messages);
        options.messages = messages$1;
      } else {
        options.messages = this.messages();
      }
      var series = {};
      var keys = options.keys || Object.keys(this.rules);
      keys.forEach(function(z4) {
        var arr = _this2.rules[z4];
        var value = source[z4];
        arr.forEach(function(r3) {
          var rule = r3;
          if (typeof rule.transform === "function") {
            if (source === source_) {
              source = _extends2({}, source);
            }
            value = source[z4] = rule.transform(value);
          }
          if (typeof rule === "function") {
            rule = {
              validator: rule
            };
          } else {
            rule = _extends2({}, rule);
          }
          rule.validator = _this2.getValidationMethod(rule);
          if (!rule.validator) {
            return;
          }
          rule.field = z4;
          rule.fullField = rule.fullField || z4;
          rule.type = _this2.getType(rule);
          series[z4] = series[z4] || [];
          series[z4].push({
            rule,
            value,
            source,
            field: z4
          });
        });
      });
      var errorFields = {};
      return asyncMap(series, options, function(data, doIt) {
        var rule = data.rule;
        var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
        deep = deep && (rule.required || !rule.required && data.value);
        rule.field = data.field;
        function addFullField(key, schema) {
          return _extends2({}, schema, {
            fullField: rule.fullField + "." + key,
            fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
          });
        }
        function cb(e3) {
          if (e3 === void 0) {
            e3 = [];
          }
          var errorList = Array.isArray(e3) ? e3 : [e3];
          if (!options.suppressWarning && errorList.length) {
            Schema2.warning("async-validator:", errorList);
          }
          if (errorList.length && rule.message !== void 0) {
            errorList = [].concat(rule.message);
          }
          var filledErrors = errorList.map(complementError(rule, source));
          if (options.first && filledErrors.length) {
            errorFields[rule.field] = 1;
            return doIt(filledErrors);
          }
          if (!deep) {
            doIt(filledErrors);
          } else {
            if (rule.required && !data.value) {
              if (rule.message !== void 0) {
                filledErrors = [].concat(rule.message).map(complementError(rule, source));
              } else if (options.error) {
                filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
              }
              return doIt(filledErrors);
            }
            var fieldsSchema = {};
            if (rule.defaultField) {
              Object.keys(data.value).map(function(key) {
                fieldsSchema[key] = rule.defaultField;
              });
            }
            fieldsSchema = _extends2({}, fieldsSchema, data.rule.fields);
            var paredFieldsSchema = {};
            Object.keys(fieldsSchema).forEach(function(field) {
              var fieldSchema = fieldsSchema[field];
              var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
              paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
            });
            var schema = new Schema2(paredFieldsSchema);
            schema.messages(options.messages);
            if (data.rule.options) {
              data.rule.options.messages = options.messages;
              data.rule.options.error = options.error;
            }
            schema.validate(data.value, data.rule.options || options, function(errs) {
              var finalErrors = [];
              if (filledErrors && filledErrors.length) {
                finalErrors.push.apply(finalErrors, filledErrors);
              }
              if (errs && errs.length) {
                finalErrors.push.apply(finalErrors, errs);
              }
              doIt(finalErrors.length ? finalErrors : null);
            });
          }
        }
        var res;
        if (rule.asyncValidator) {
          res = rule.asyncValidator(rule, data.value, cb, data.source, options);
        } else if (rule.validator) {
          try {
            res = rule.validator(rule, data.value, cb, data.source, options);
          } catch (error) {
            console.error == null ? void 0 : console.error(error);
            if (!options.suppressValidatorError) {
              setTimeout(function() {
                throw error;
              }, 0);
            }
            cb(error.message);
          }
          if (res === true) {
            cb();
          } else if (res === false) {
            cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
          } else if (res instanceof Array) {
            cb(res);
          } else if (res instanceof Error) {
            cb(res.message);
          }
        }
        if (res && res.then) {
          res.then(function() {
            return cb();
          }, function(e3) {
            return cb(e3);
          });
        }
      }, function(results) {
        complete(results);
      }, source);
    };
    _proto.getType = function getType(rule) {
      if (rule.type === void 0 && rule.pattern instanceof RegExp) {
        rule.type = "pattern";
      }
      if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
        throw new Error(format("Unknown rule type %s", rule.type));
      }
      return rule.type || "string";
    };
    _proto.getValidationMethod = function getValidationMethod(rule) {
      if (typeof rule.validator === "function") {
        return rule.validator;
      }
      var keys = Object.keys(rule);
      var messageIndex = keys.indexOf("message");
      if (messageIndex !== -1) {
        keys.splice(messageIndex, 1);
      }
      if (keys.length === 1 && keys[0] === "required") {
        return validators.required;
      }
      return validators[this.getType(rule)] || void 0;
    };
    return Schema2;
  }();
  Schema.register = function register(type4, validator) {
    if (typeof validator !== "function") {
      throw new Error("Cannot register a validator by type, validator is not a function");
    }
    validators[type4] = validator;
  };
  Schema.warning = warning2;
  Schema.messages = messages;
  Schema.validators = validators;

  // node_modules/rc-field-form/es/utils/validateUtil.js
  init_react();

  // node_modules/rc-field-form/es/utils/messages.js
  var typeTemplate = "'${name}' is not a valid ${type}";
  var defaultValidateMessages = {
    default: "Validation error on field '${name}'",
    required: "'${name}' is required",
    enum: "'${name}' must be one of [${enum}]",
    whitespace: "'${name}' cannot be empty",
    date: {
      format: "'${name}' is invalid for format date",
      parse: "'${name}' could not be parsed as date",
      invalid: "'${name}' is invalid date"
    },
    types: {
      string: typeTemplate,
      method: typeTemplate,
      array: typeTemplate,
      object: typeTemplate,
      number: typeTemplate,
      date: typeTemplate,
      boolean: typeTemplate,
      integer: typeTemplate,
      float: typeTemplate,
      regexp: typeTemplate,
      email: typeTemplate,
      url: typeTemplate,
      hex: typeTemplate
    },
    string: {
      len: "'${name}' must be exactly ${len} characters",
      min: "'${name}' must be at least ${min} characters",
      max: "'${name}' cannot be longer than ${max} characters",
      range: "'${name}' must be between ${min} and ${max} characters"
    },
    number: {
      len: "'${name}' must equal ${len}",
      min: "'${name}' cannot be less than ${min}",
      max: "'${name}' cannot be greater than ${max}",
      range: "'${name}' must be between ${min} and ${max}"
    },
    array: {
      len: "'${name}' must be exactly ${len} in length",
      min: "'${name}' cannot be less than ${min} in length",
      max: "'${name}' cannot be greater than ${max} in length",
      range: "'${name}' must be between ${min} and ${max} in length"
    },
    pattern: {
      mismatch: "'${name}' does not match pattern ${pattern}"
    }
  };

  // node_modules/rc-util/es/utils/get.js
  function get(entity, path) {
    var current = entity;
    for (var i3 = 0; i3 < path.length; i3 += 1) {
      if (current === null || current === void 0) {
        return void 0;
      }
      current = current[path[i3]];
    }
    return current;
  }

  // node_modules/@babel/runtime/helpers/esm/toArray.js
  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
  }

  // node_modules/rc-util/es/utils/set.js
  function internalSet(entity, paths, value, removeIfUndefined) {
    if (!paths.length) {
      return value;
    }
    var _paths = _toArray(paths), path = _paths[0], restPath = _paths.slice(1);
    var clone;
    if (!entity && typeof path === "number") {
      clone = [];
    } else if (Array.isArray(entity)) {
      clone = _toConsumableArray(entity);
    } else {
      clone = _objectSpread2({}, entity);
    }
    if (removeIfUndefined && value === void 0 && restPath.length === 1) {
      delete clone[path][restPath[0]];
    } else {
      clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
    }
    return clone;
  }
  function set(entity, paths, value) {
    var removeIfUndefined = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    if (paths.length && removeIfUndefined && value === void 0 && !get(entity, paths.slice(0, -1))) {
      return entity;
    }
    return internalSet(entity, paths, value, removeIfUndefined);
  }

  // node_modules/rc-field-form/es/utils/cloneDeep.js
  function cloneDeep(val) {
    if (Array.isArray(val)) {
      return cloneArrayDeep(val);
    } else if (_typeof(val) === "object" && val !== null) {
      return cloneObjectDeep(val);
    }
    return val;
  }
  function cloneObjectDeep(val) {
    if (Object.getPrototypeOf(val) === Object.prototype) {
      var res = {};
      for (var key in val) {
        res[key] = cloneDeep(val[key]);
      }
      return res;
    }
    return val;
  }
  function cloneArrayDeep(val) {
    return val.map(function(item) {
      return cloneDeep(item);
    });
  }
  var cloneDeep_default = cloneDeep;

  // node_modules/rc-field-form/es/utils/valueUtil.js
  function getNamePath(path) {
    return toArray2(path);
  }
  function cloneByNamePathList(store, namePathList) {
    var newStore = {};
    namePathList.forEach(function(namePath) {
      var value = get(store, namePath);
      newStore = set(newStore, namePath, value);
    });
    return newStore;
  }
  function containsNamePath(namePathList, namePath) {
    return namePathList && namePathList.some(function(path) {
      return matchNamePath(path, namePath);
    });
  }
  function isObject4(obj) {
    return _typeof(obj) === "object" && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
  }
  function internalSetValues(store, values) {
    var newStore = Array.isArray(store) ? _toConsumableArray(store) : _objectSpread2({}, store);
    if (!values) {
      return newStore;
    }
    Object.keys(values).forEach(function(key) {
      var prevValue = newStore[key];
      var value = values[key];
      var recursive = isObject4(prevValue) && isObject4(value);
      newStore[key] = recursive ? internalSetValues(prevValue, value || {}) : cloneDeep_default(value);
    });
    return newStore;
  }
  function setValues(store) {
    for (var _len = arguments.length, restValues = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      restValues[_key - 1] = arguments[_key];
    }
    return restValues.reduce(function(current, newStore) {
      return internalSetValues(current, newStore);
    }, store);
  }
  function matchNamePath(namePath, changedNamePath) {
    if (!namePath || !changedNamePath || namePath.length !== changedNamePath.length) {
      return false;
    }
    return namePath.every(function(nameUnit, i3) {
      return changedNamePath[i3] === nameUnit;
    });
  }
  function isSimilar(source, target) {
    if (source === target) {
      return true;
    }
    if (!source && target || source && !target) {
      return false;
    }
    if (!source || !target || _typeof(source) !== "object" || _typeof(target) !== "object") {
      return false;
    }
    var sourceKeys = Object.keys(source);
    var targetKeys = Object.keys(target);
    var keys = new Set([].concat(sourceKeys, targetKeys));
    return _toConsumableArray(keys).every(function(key) {
      var sourceValue = source[key];
      var targetValue = target[key];
      if (typeof sourceValue === "function" && typeof targetValue === "function") {
        return true;
      }
      return sourceValue === targetValue;
    });
  }
  function defaultGetValueFromEvent(valuePropName) {
    var event = arguments.length <= 1 ? void 0 : arguments[1];
    if (event && event.target && _typeof(event.target) === "object" && valuePropName in event.target) {
      return event.target[valuePropName];
    }
    return event;
  }
  function move(array4, moveIndex, toIndex) {
    var length2 = array4.length;
    if (moveIndex < 0 || moveIndex >= length2 || toIndex < 0 || toIndex >= length2) {
      return array4;
    }
    var item = array4[moveIndex];
    var diff = moveIndex - toIndex;
    if (diff > 0) {
      return [].concat(_toConsumableArray(array4.slice(0, toIndex)), [item], _toConsumableArray(array4.slice(toIndex, moveIndex)), _toConsumableArray(array4.slice(moveIndex + 1, length2)));
    }
    if (diff < 0) {
      return [].concat(_toConsumableArray(array4.slice(0, moveIndex)), _toConsumableArray(array4.slice(moveIndex + 1, toIndex + 1)), [item], _toConsumableArray(array4.slice(toIndex + 1, length2)));
    }
    return array4;
  }

  // node_modules/rc-field-form/es/utils/validateUtil.js
  var AsyncValidator = Schema;
  function replaceMessage(template, kv) {
    return template.replace(/\$\{\w+\}/g, function(str) {
      var key = str.slice(2, -1);
      return kv[key];
    });
  }
  var CODE_LOGIC_ERROR = "CODE_LOGIC_ERROR";
  function validateRule(_x, _x2, _x3, _x4, _x5) {
    return _validateRule.apply(this, arguments);
  }
  function _validateRule() {
    _validateRule = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(name, value, rule, options, messageVariables) {
      var cloneRule, originValidator, subRuleField, validator, messages2, result, subResults, kv, fillVariableResult;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1)
          switch (_context2.prev = _context2.next) {
            case 0:
              cloneRule = _objectSpread2({}, rule);
              delete cloneRule.ruleIndex;
              AsyncValidator.warning = function() {
                return void 0;
              };
              if (cloneRule.validator) {
                originValidator = cloneRule.validator;
                cloneRule.validator = function() {
                  try {
                    return originValidator.apply(void 0, arguments);
                  } catch (error) {
                    console.error(error);
                    return Promise.reject(CODE_LOGIC_ERROR);
                  }
                };
              }
              subRuleField = null;
              if (cloneRule && cloneRule.type === "array" && cloneRule.defaultField) {
                subRuleField = cloneRule.defaultField;
                delete cloneRule.defaultField;
              }
              validator = new AsyncValidator(_defineProperty({}, name, [cloneRule]));
              messages2 = setValues({}, defaultValidateMessages, options.validateMessages);
              validator.messages(messages2);
              result = [];
              _context2.prev = 10;
              _context2.next = 13;
              return Promise.resolve(validator.validate(_defineProperty({}, name, value), _objectSpread2({}, options)));
            case 13:
              _context2.next = 18;
              break;
            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](10);
              if (_context2.t0.errors) {
                result = _context2.t0.errors.map(function(_ref4, index2) {
                  var message = _ref4.message;
                  var mergedMessage = message === CODE_LOGIC_ERROR ? messages2.default : message;
                  return /* @__PURE__ */ an(mergedMessage) ? (
                    // Wrap ReactNode with `key`
                    /* @__PURE__ */ sn(mergedMessage, {
                      key: "error_".concat(index2)
                    })
                  ) : mergedMessage;
                });
              }
            case 18:
              if (!(!result.length && subRuleField)) {
                _context2.next = 23;
                break;
              }
              _context2.next = 21;
              return Promise.all(value.map(function(subValue, i3) {
                return validateRule("".concat(name, ".").concat(i3), subValue, subRuleField, options, messageVariables);
              }));
            case 21:
              subResults = _context2.sent;
              return _context2.abrupt("return", subResults.reduce(function(prev2, errors) {
                return [].concat(_toConsumableArray(prev2), _toConsumableArray(errors));
              }, []));
            case 23:
              kv = _objectSpread2(_objectSpread2({}, rule), {}, {
                name,
                enum: (rule.enum || []).join(", ")
              }, messageVariables);
              fillVariableResult = result.map(function(error) {
                if (typeof error === "string") {
                  return replaceMessage(error, kv);
                }
                return error;
              });
              return _context2.abrupt("return", fillVariableResult);
            case 26:
            case "end":
              return _context2.stop();
          }
      }, _callee2, null, [[10, 15]]);
    }));
    return _validateRule.apply(this, arguments);
  }
  function validateRules(namePath, value, rules2, options, validateFirst, messageVariables) {
    var name = namePath.join(".");
    var filledRules = rules2.map(function(currentRule, ruleIndex) {
      var originValidatorFunc = currentRule.validator;
      var cloneRule = _objectSpread2(_objectSpread2({}, currentRule), {}, {
        ruleIndex
      });
      if (originValidatorFunc) {
        cloneRule.validator = function(rule, val, callback) {
          var hasPromise = false;
          var wrappedCallback = function wrappedCallback2() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            Promise.resolve().then(function() {
              warning_default(!hasPromise, "Your validator function has already return a promise. `callback` will be ignored.");
              if (!hasPromise) {
                callback.apply(void 0, args);
              }
            });
          };
          var promise = originValidatorFunc(rule, val, wrappedCallback);
          hasPromise = promise && typeof promise.then === "function" && typeof promise.catch === "function";
          warning_default(hasPromise, "`callback` is deprecated. Please return a promise instead.");
          if (hasPromise) {
            promise.then(function() {
              callback();
            }).catch(function(err) {
              callback(err || " ");
            });
          }
        };
      }
      return cloneRule;
    }).sort(function(_ref, _ref2) {
      var w1 = _ref.warningOnly, i1 = _ref.ruleIndex;
      var w22 = _ref2.warningOnly, i22 = _ref2.ruleIndex;
      if (!!w1 === !!w22) {
        return i1 - i22;
      }
      if (w1) {
        return 1;
      }
      return -1;
    });
    var summaryPromise;
    if (validateFirst === true) {
      summaryPromise = new Promise(/* @__PURE__ */ function() {
        var _ref3 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(resolve, reject) {
          var i3, rule, errors;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1)
              switch (_context.prev = _context.next) {
                case 0:
                  i3 = 0;
                case 1:
                  if (!(i3 < filledRules.length)) {
                    _context.next = 12;
                    break;
                  }
                  rule = filledRules[i3];
                  _context.next = 5;
                  return validateRule(name, value, rule, options, messageVariables);
                case 5:
                  errors = _context.sent;
                  if (!errors.length) {
                    _context.next = 9;
                    break;
                  }
                  reject([{
                    errors,
                    rule
                  }]);
                  return _context.abrupt("return");
                case 9:
                  i3 += 1;
                  _context.next = 1;
                  break;
                case 12:
                  resolve([]);
                case 13:
                case "end":
                  return _context.stop();
              }
          }, _callee);
        }));
        return function(_x6, _x7) {
          return _ref3.apply(this, arguments);
        };
      }());
    } else {
      var rulePromises = filledRules.map(function(rule) {
        return validateRule(name, value, rule, options, messageVariables).then(function(errors) {
          return {
            errors,
            rule
          };
        });
      });
      summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function(errors) {
        return Promise.reject(errors);
      });
    }
    summaryPromise.catch(function(e3) {
      return e3;
    });
    return summaryPromise;
  }
  function finishOnAllFailed(_x8) {
    return _finishOnAllFailed.apply(this, arguments);
  }
  function _finishOnAllFailed() {
    _finishOnAllFailed = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee3(rulePromises) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1)
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", Promise.all(rulePromises).then(function(errorsList) {
                var _ref5;
                var errors = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(errorsList));
                return errors;
              }));
            case 1:
            case "end":
              return _context3.stop();
          }
      }, _callee3);
    }));
    return _finishOnAllFailed.apply(this, arguments);
  }
  function finishOnFirstFailed(_x9) {
    return _finishOnFirstFailed.apply(this, arguments);
  }
  function _finishOnFirstFailed() {
    _finishOnFirstFailed = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee4(rulePromises) {
      var count;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1)
          switch (_context4.prev = _context4.next) {
            case 0:
              count = 0;
              return _context4.abrupt("return", new Promise(function(resolve) {
                rulePromises.forEach(function(promise) {
                  promise.then(function(ruleError) {
                    if (ruleError.errors.length) {
                      resolve([ruleError]);
                    }
                    count += 1;
                    if (count === rulePromises.length) {
                      resolve([]);
                    }
                  });
                });
              }));
            case 2:
            case "end":
              return _context4.stop();
          }
      }, _callee4);
    }));
    return _finishOnFirstFailed.apply(this, arguments);
  }

  // node_modules/rc-field-form/es/Field.js
  var _excluded23 = ["name"];
  var EMPTY_ERRORS = [];
  function requireUpdate(shouldUpdate, prev2, next2, prevValue, nextValue, info) {
    if (typeof shouldUpdate === "function") {
      return shouldUpdate(prev2, next2, "source" in info ? {
        source: info.source
      } : {});
    }
    return prevValue !== nextValue;
  }
  var Field = /* @__PURE__ */ function(_React$Component) {
    _inherits(Field2, _React$Component);
    var _super = _createSuper(Field2);
    function Field2(props) {
      var _this;
      _classCallCheck(this, Field2);
      _this = _super.call(this, props);
      _this.state = {
        resetCount: 0
      };
      _this.cancelRegisterFunc = null;
      _this.mounted = false;
      _this.touched = false;
      _this.dirty = false;
      _this.validatePromise = void 0;
      _this.prevValidating = void 0;
      _this.errors = EMPTY_ERRORS;
      _this.warnings = EMPTY_ERRORS;
      _this.cancelRegister = function() {
        var _this$props = _this.props, preserve = _this$props.preserve, isListField = _this$props.isListField, name = _this$props.name;
        if (_this.cancelRegisterFunc) {
          _this.cancelRegisterFunc(isListField, preserve, getNamePath(name));
        }
        _this.cancelRegisterFunc = null;
      };
      _this.getNamePath = function() {
        var _this$props2 = _this.props, name = _this$props2.name, fieldContext = _this$props2.fieldContext;
        var _fieldContext$prefixN = fieldContext.prefixName, prefixName = _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
        return name !== void 0 ? [].concat(_toConsumableArray(prefixName), _toConsumableArray(name)) : [];
      };
      _this.getRules = function() {
        var _this$props3 = _this.props, _this$props3$rules = _this$props3.rules, rules2 = _this$props3$rules === void 0 ? [] : _this$props3$rules, fieldContext = _this$props3.fieldContext;
        return rules2.map(function(rule) {
          if (typeof rule === "function") {
            return rule(fieldContext);
          }
          return rule;
        });
      };
      _this.refresh = function() {
        if (!_this.mounted)
          return;
        _this.setState(function(_ref) {
          var resetCount = _ref.resetCount;
          return {
            resetCount: resetCount + 1
          };
        });
      };
      _this.triggerMetaEvent = function(destroy) {
        var onMetaChange = _this.props.onMetaChange;
        onMetaChange === null || onMetaChange === void 0 ? void 0 : onMetaChange(_objectSpread2(_objectSpread2({}, _this.getMeta()), {}, {
          destroy
        }));
      };
      _this.onStoreChange = function(prevStore, namePathList, info) {
        var _this$props4 = _this.props, shouldUpdate = _this$props4.shouldUpdate, _this$props4$dependen = _this$props4.dependencies, dependencies = _this$props4$dependen === void 0 ? [] : _this$props4$dependen, onReset = _this$props4.onReset;
        var store = info.store;
        var namePath = _this.getNamePath();
        var prevValue = _this.getValue(prevStore);
        var curValue = _this.getValue(store);
        var namePathMatch = namePathList && containsNamePath(namePathList, namePath);
        if (info.type === "valueUpdate" && info.source === "external" && prevValue !== curValue) {
          _this.touched = true;
          _this.dirty = true;
          _this.validatePromise = null;
          _this.errors = EMPTY_ERRORS;
          _this.warnings = EMPTY_ERRORS;
          _this.triggerMetaEvent();
        }
        switch (info.type) {
          case "reset":
            if (!namePathList || namePathMatch) {
              _this.touched = false;
              _this.dirty = false;
              _this.validatePromise = void 0;
              _this.errors = EMPTY_ERRORS;
              _this.warnings = EMPTY_ERRORS;
              _this.triggerMetaEvent();
              onReset === null || onReset === void 0 ? void 0 : onReset();
              _this.refresh();
              return;
            }
            break;
          case "remove": {
            if (shouldUpdate) {
              _this.reRender();
              return;
            }
            break;
          }
          case "setField": {
            if (namePathMatch) {
              var data = info.data;
              if ("touched" in data) {
                _this.touched = data.touched;
              }
              if ("validating" in data && !("originRCField" in data)) {
                _this.validatePromise = data.validating ? Promise.resolve([]) : null;
              }
              if ("errors" in data) {
                _this.errors = data.errors || EMPTY_ERRORS;
              }
              if ("warnings" in data) {
                _this.warnings = data.warnings || EMPTY_ERRORS;
              }
              _this.dirty = true;
              _this.triggerMetaEvent();
              _this.reRender();
              return;
            }
            if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
              _this.reRender();
              return;
            }
            break;
          }
          case "dependenciesUpdate": {
            var dependencyList = dependencies.map(getNamePath);
            if (dependencyList.some(function(dependency) {
              return containsNamePath(info.relatedFields, dependency);
            })) {
              _this.reRender();
              return;
            }
            break;
          }
          default:
            if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
              _this.reRender();
              return;
            }
            break;
        }
        if (shouldUpdate === true) {
          _this.reRender();
        }
      };
      _this.validateRules = function(options) {
        var namePath = _this.getNamePath();
        var currentValue = _this.getValue();
        var _ref2 = options || {}, triggerName = _ref2.triggerName, _ref2$validateOnly = _ref2.validateOnly, validateOnly = _ref2$validateOnly === void 0 ? false : _ref2$validateOnly;
        var rootPromise = Promise.resolve().then(function() {
          if (!_this.mounted) {
            return [];
          }
          var _this$props5 = _this.props, _this$props5$validate = _this$props5.validateFirst, validateFirst = _this$props5$validate === void 0 ? false : _this$props5$validate, messageVariables = _this$props5.messageVariables;
          var filteredRules = _this.getRules();
          if (triggerName) {
            filteredRules = filteredRules.filter(function(rule) {
              return rule;
            }).filter(function(rule) {
              var validateTrigger = rule.validateTrigger;
              if (!validateTrigger) {
                return true;
              }
              var triggerList = toArray2(validateTrigger);
              return triggerList.includes(triggerName);
            });
          }
          var promise = validateRules(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
          promise.catch(function(e3) {
            return e3;
          }).then(function() {
            var ruleErrors = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : EMPTY_ERRORS;
            if (_this.validatePromise === rootPromise) {
              var _ruleErrors$forEach;
              _this.validatePromise = null;
              var nextErrors = [];
              var nextWarnings = [];
              (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 ? void 0 : _ruleErrors$forEach.call(ruleErrors, function(_ref3) {
                var warningOnly = _ref3.rule.warningOnly, _ref3$errors = _ref3.errors, errors = _ref3$errors === void 0 ? EMPTY_ERRORS : _ref3$errors;
                if (warningOnly) {
                  nextWarnings.push.apply(nextWarnings, _toConsumableArray(errors));
                } else {
                  nextErrors.push.apply(nextErrors, _toConsumableArray(errors));
                }
              });
              _this.errors = nextErrors;
              _this.warnings = nextWarnings;
              _this.triggerMetaEvent();
              _this.reRender();
            }
          });
          return promise;
        });
        if (validateOnly) {
          return rootPromise;
        }
        _this.validatePromise = rootPromise;
        _this.dirty = true;
        _this.errors = EMPTY_ERRORS;
        _this.warnings = EMPTY_ERRORS;
        _this.triggerMetaEvent();
        _this.reRender();
        return rootPromise;
      };
      _this.isFieldValidating = function() {
        return !!_this.validatePromise;
      };
      _this.isFieldTouched = function() {
        return _this.touched;
      };
      _this.isFieldDirty = function() {
        if (_this.dirty || _this.props.initialValue !== void 0) {
          return true;
        }
        var fieldContext = _this.props.fieldContext;
        var _fieldContext$getInte = fieldContext.getInternalHooks(HOOK_MARK), getInitialValue = _fieldContext$getInte.getInitialValue;
        if (getInitialValue(_this.getNamePath()) !== void 0) {
          return true;
        }
        return false;
      };
      _this.getErrors = function() {
        return _this.errors;
      };
      _this.getWarnings = function() {
        return _this.warnings;
      };
      _this.isListField = function() {
        return _this.props.isListField;
      };
      _this.isList = function() {
        return _this.props.isList;
      };
      _this.isPreserve = function() {
        return _this.props.preserve;
      };
      _this.getMeta = function() {
        _this.prevValidating = _this.isFieldValidating();
        var meta = {
          touched: _this.isFieldTouched(),
          validating: _this.prevValidating,
          errors: _this.errors,
          warnings: _this.warnings,
          name: _this.getNamePath(),
          validated: _this.validatePromise === null
        };
        return meta;
      };
      _this.getOnlyChild = function(children) {
        if (typeof children === "function") {
          var meta = _this.getMeta();
          return _objectSpread2(_objectSpread2({}, _this.getOnlyChild(children(_this.getControlled(), meta, _this.props.fieldContext))), {}, {
            isFunction: true
          });
        }
        var childList = toArray(children);
        if (childList.length !== 1 || !/* @__PURE__ */ an(childList[0])) {
          return {
            child: childList,
            isFunction: false
          };
        }
        return {
          child: childList[0],
          isFunction: false
        };
      };
      _this.getValue = function(store) {
        var getFieldsValue = _this.props.fieldContext.getFieldsValue;
        var namePath = _this.getNamePath();
        return get(store || getFieldsValue(true), namePath);
      };
      _this.getControlled = function() {
        var childProps = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var _this$props6 = _this.props, trigger = _this$props6.trigger, validateTrigger = _this$props6.validateTrigger, getValueFromEvent = _this$props6.getValueFromEvent, normalize3 = _this$props6.normalize, valuePropName = _this$props6.valuePropName, getValueProps = _this$props6.getValueProps, fieldContext = _this$props6.fieldContext;
        var mergedValidateTrigger = validateTrigger !== void 0 ? validateTrigger : fieldContext.validateTrigger;
        var namePath = _this.getNamePath();
        var getInternalHooks3 = fieldContext.getInternalHooks, getFieldsValue = fieldContext.getFieldsValue;
        var _getInternalHooks = getInternalHooks3(HOOK_MARK), dispatch = _getInternalHooks.dispatch;
        var value = _this.getValue();
        var mergedGetValueProps = getValueProps || function(val) {
          return _defineProperty({}, valuePropName, val);
        };
        var originTriggerFunc = childProps[trigger];
        var control = _objectSpread2(_objectSpread2({}, childProps), mergedGetValueProps(value));
        control[trigger] = function() {
          _this.touched = true;
          _this.dirty = true;
          _this.triggerMetaEvent();
          var newValue;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          if (getValueFromEvent) {
            newValue = getValueFromEvent.apply(void 0, args);
          } else {
            newValue = defaultGetValueFromEvent.apply(void 0, [valuePropName].concat(args));
          }
          if (normalize3) {
            newValue = normalize3(newValue, value, getFieldsValue(true));
          }
          dispatch({
            type: "updateValue",
            namePath,
            value: newValue
          });
          if (originTriggerFunc) {
            originTriggerFunc.apply(void 0, args);
          }
        };
        var validateTriggerList = toArray2(mergedValidateTrigger || []);
        validateTriggerList.forEach(function(triggerName) {
          var originTrigger = control[triggerName];
          control[triggerName] = function() {
            if (originTrigger) {
              originTrigger.apply(void 0, arguments);
            }
            var rules2 = _this.props.rules;
            if (rules2 && rules2.length) {
              dispatch({
                type: "validateField",
                namePath,
                triggerName
              });
            }
          };
        });
        return control;
      };
      if (props.fieldContext) {
        var getInternalHooks2 = props.fieldContext.getInternalHooks;
        var _getInternalHooks2 = getInternalHooks2(HOOK_MARK), initEntityValue = _getInternalHooks2.initEntityValue;
        initEntityValue(_assertThisInitialized(_this));
      }
      return _this;
    }
    _createClass(Field2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props7 = this.props, shouldUpdate = _this$props7.shouldUpdate, fieldContext = _this$props7.fieldContext;
        this.mounted = true;
        if (fieldContext) {
          var getInternalHooks2 = fieldContext.getInternalHooks;
          var _getInternalHooks3 = getInternalHooks2(HOOK_MARK), registerField = _getInternalHooks3.registerField;
          this.cancelRegisterFunc = registerField(this);
        }
        if (shouldUpdate === true) {
          this.reRender();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.cancelRegister();
        this.triggerMetaEvent(true);
        this.mounted = false;
      }
    }, {
      key: "reRender",
      value: function reRender() {
        if (!this.mounted)
          return;
        this.forceUpdate();
      }
    }, {
      key: "render",
      value: function render() {
        var resetCount = this.state.resetCount;
        var children = this.props.children;
        var _this$getOnlyChild = this.getOnlyChild(children), child = _this$getOnlyChild.child, isFunction3 = _this$getOnlyChild.isFunction;
        var returnChildNode;
        if (isFunction3) {
          returnChildNode = child;
        } else if (/* @__PURE__ */ an(child)) {
          returnChildNode = /* @__PURE__ */ sn(child, this.getControlled(child.props));
        } else {
          warning_default(!child, "`children` of Field is not validate ReactElement.");
          returnChildNode = child;
        }
        return /* @__PURE__ */ y(k, {
          key: resetCount
        }, returnChildNode);
      }
    }]);
    return Field2;
  }(b);
  Field.contextType = FieldContext_default;
  Field.defaultProps = {
    trigger: "onChange",
    valuePropName: "value"
  };
  function WrapperField(_ref5) {
    var name = _ref5.name, restProps = _objectWithoutProperties(_ref5, _excluded23);
    var fieldContext = q2(FieldContext_default);
    var listContext = q2(ListContext_default);
    var namePath = name !== void 0 ? getNamePath(name) : void 0;
    var key = "keep";
    if (!restProps.isListField) {
      key = "_".concat((namePath || []).join("_"));
    }
    if (restProps.preserve === false && restProps.isListField && namePath.length <= 1) {
      warning_default(false, "`preserve` should not apply on Form.List fields.");
    }
    return /* @__PURE__ */ y(Field, _extends({
      key,
      name: namePath,
      isListField: !!listContext
    }, restProps, {
      fieldContext
    }));
  }
  var Field_default = WrapperField;

  // node_modules/rc-field-form/es/List.js
  init_react();
  var List = function List2(_ref) {
    var name = _ref.name, initialValue = _ref.initialValue, children = _ref.children, rules2 = _ref.rules, validateTrigger = _ref.validateTrigger, isListField = _ref.isListField;
    var context = q2(FieldContext_default);
    var wrapperListContext = q2(ListContext_default);
    var keyRef = _2({
      keys: [],
      id: 0
    });
    var keyManager = keyRef.current;
    var prefixName = F2(function() {
      var parentPrefixName = getNamePath(context.prefixName) || [];
      return [].concat(_toConsumableArray(parentPrefixName), _toConsumableArray(getNamePath(name)));
    }, [context.prefixName, name]);
    var fieldContext = F2(function() {
      return _objectSpread2(_objectSpread2({}, context), {}, {
        prefixName
      });
    }, [context, prefixName]);
    var listContext = F2(function() {
      return {
        getKey: function getKey2(namePath) {
          var len = prefixName.length;
          var pathName = namePath[len];
          return [keyManager.keys[pathName], namePath.slice(len + 1)];
        }
      };
    }, [prefixName]);
    if (typeof children !== "function") {
      warning_default(false, "Form.List only accepts function as children.");
      return null;
    }
    var shouldUpdate = function shouldUpdate2(prevValue, nextValue, _ref2) {
      var source = _ref2.source;
      if (source === "internal") {
        return false;
      }
      return prevValue !== nextValue;
    };
    return /* @__PURE__ */ y(ListContext_default.Provider, {
      value: listContext
    }, /* @__PURE__ */ y(FieldContext_default.Provider, {
      value: fieldContext
    }, /* @__PURE__ */ y(Field_default, {
      name: [],
      shouldUpdate,
      rules: rules2,
      validateTrigger,
      initialValue,
      isList: true,
      isListField: isListField !== null && isListField !== void 0 ? isListField : !!wrapperListContext
    }, function(_ref3, meta) {
      var _ref3$value = _ref3.value, value = _ref3$value === void 0 ? [] : _ref3$value, onChange = _ref3.onChange;
      var getFieldValue = context.getFieldValue;
      var getNewValue = function getNewValue2() {
        var values = getFieldValue(prefixName || []);
        return values || [];
      };
      var operations = {
        add: function add(defaultValue, index2) {
          var newValue = getNewValue();
          if (index2 >= 0 && index2 <= newValue.length) {
            keyManager.keys = [].concat(_toConsumableArray(keyManager.keys.slice(0, index2)), [keyManager.id], _toConsumableArray(keyManager.keys.slice(index2)));
            onChange([].concat(_toConsumableArray(newValue.slice(0, index2)), [defaultValue], _toConsumableArray(newValue.slice(index2))));
          } else {
            if (index2 < 0 || index2 > newValue.length) {
              warning_default(false, "The second parameter of the add function should be a valid positive number.");
            }
            keyManager.keys = [].concat(_toConsumableArray(keyManager.keys), [keyManager.id]);
            onChange([].concat(_toConsumableArray(newValue), [defaultValue]));
          }
          keyManager.id += 1;
        },
        remove: function remove(index2) {
          var newValue = getNewValue();
          var indexSet = new Set(Array.isArray(index2) ? index2 : [index2]);
          if (indexSet.size <= 0) {
            return;
          }
          keyManager.keys = keyManager.keys.filter(function(_4, keysIndex) {
            return !indexSet.has(keysIndex);
          });
          onChange(newValue.filter(function(_4, valueIndex) {
            return !indexSet.has(valueIndex);
          }));
        },
        move: function move2(from2, to) {
          if (from2 === to) {
            return;
          }
          var newValue = getNewValue();
          if (from2 < 0 || from2 >= newValue.length || to < 0 || to >= newValue.length) {
            return;
          }
          keyManager.keys = move(keyManager.keys, from2, to);
          onChange(move(newValue, from2, to));
        }
      };
      var listValue = value || [];
      if (!Array.isArray(listValue)) {
        listValue = [];
        if (true) {
          warning_default(false, "Current value of '".concat(prefixName.join(" > "), "' is not an array type."));
        }
      }
      return children(listValue.map(function(__, index2) {
        var key = keyManager.keys[index2];
        if (key === void 0) {
          keyManager.keys[index2] = keyManager.id;
          key = keyManager.keys[index2];
          keyManager.id += 1;
        }
        return {
          name: index2,
          key,
          isListField: true
        };
      }), operations, meta);
    })));
  };
  var List_default = List;

  // node_modules/rc-field-form/es/useForm.js
  init_react();

  // node_modules/rc-field-form/es/utils/asyncUtil.js
  function allPromiseFinish(promiseList) {
    var hasError = false;
    var count = promiseList.length;
    var results = [];
    if (!promiseList.length) {
      return Promise.resolve([]);
    }
    return new Promise(function(resolve, reject) {
      promiseList.forEach(function(promise, index2) {
        promise.catch(function(e3) {
          hasError = true;
          return e3;
        }).then(function(result) {
          count -= 1;
          results[index2] = result;
          if (count > 0) {
            return;
          }
          if (hasError) {
            reject(results);
          }
          resolve(results);
        });
      });
    });
  }

  // node_modules/rc-field-form/es/utils/NameMap.js
  var SPLIT = "__@field_split__";
  function normalize2(namePath) {
    return namePath.map(function(cell) {
      return "".concat(_typeof(cell), ":").concat(cell);
    }).join(SPLIT);
  }
  var NameMap = /* @__PURE__ */ function() {
    function NameMap2() {
      _classCallCheck(this, NameMap2);
      this.kvs = /* @__PURE__ */ new Map();
    }
    _createClass(NameMap2, [{
      key: "set",
      value: function set2(key, value) {
        this.kvs.set(normalize2(key), value);
      }
    }, {
      key: "get",
      value: function get2(key) {
        return this.kvs.get(normalize2(key));
      }
    }, {
      key: "update",
      value: function update(key, updater) {
        var origin = this.get(key);
        var next2 = updater(origin);
        if (!next2) {
          this.delete(key);
        } else {
          this.set(key, next2);
        }
      }
    }, {
      key: "delete",
      value: function _delete(key) {
        this.kvs.delete(normalize2(key));
      }
      // Since we only use this in test, let simply realize this
    }, {
      key: "map",
      value: function map(callback) {
        return _toConsumableArray(this.kvs.entries()).map(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
          var cells = key.split(SPLIT);
          return callback({
            key: cells.map(function(cell) {
              var _cell$match = cell.match(/^([^:]*):(.*)$/), _cell$match2 = _slicedToArray(_cell$match, 3), type4 = _cell$match2[1], unit = _cell$match2[2];
              return type4 === "number" ? Number(unit) : unit;
            }),
            value
          });
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var json = {};
        this.map(function(_ref3) {
          var key = _ref3.key, value = _ref3.value;
          json[key.join(".")] = value;
          return null;
        });
        return json;
      }
    }]);
    return NameMap2;
  }();
  var NameMap_default = NameMap;

  // node_modules/rc-field-form/es/useForm.js
  var _excluded24 = ["name"];
  var FormStore = /* @__PURE__ */ _createClass(function FormStore2(forceRootUpdate) {
    var _this = this;
    _classCallCheck(this, FormStore2);
    this.formHooked = false;
    this.forceRootUpdate = void 0;
    this.subscribable = true;
    this.store = {};
    this.fieldEntities = [];
    this.initialValues = {};
    this.callbacks = {};
    this.validateMessages = null;
    this.preserve = null;
    this.lastValidatePromise = null;
    this.getForm = function() {
      return {
        getFieldValue: _this.getFieldValue,
        getFieldsValue: _this.getFieldsValue,
        getFieldError: _this.getFieldError,
        getFieldWarning: _this.getFieldWarning,
        getFieldsError: _this.getFieldsError,
        isFieldsTouched: _this.isFieldsTouched,
        isFieldTouched: _this.isFieldTouched,
        isFieldValidating: _this.isFieldValidating,
        isFieldsValidating: _this.isFieldsValidating,
        resetFields: _this.resetFields,
        setFields: _this.setFields,
        setFieldValue: _this.setFieldValue,
        setFieldsValue: _this.setFieldsValue,
        validateFields: _this.validateFields,
        submit: _this.submit,
        _init: true,
        getInternalHooks: _this.getInternalHooks
      };
    };
    this.getInternalHooks = function(key) {
      if (key === HOOK_MARK) {
        _this.formHooked = true;
        return {
          dispatch: _this.dispatch,
          initEntityValue: _this.initEntityValue,
          registerField: _this.registerField,
          useSubscribe: _this.useSubscribe,
          setInitialValues: _this.setInitialValues,
          destroyForm: _this.destroyForm,
          setCallbacks: _this.setCallbacks,
          setValidateMessages: _this.setValidateMessages,
          getFields: _this.getFields,
          setPreserve: _this.setPreserve,
          getInitialValue: _this.getInitialValue,
          registerWatch: _this.registerWatch
        };
      }
      warning_default(false, "`getInternalHooks` is internal usage. Should not call directly.");
      return null;
    };
    this.useSubscribe = function(subscribable) {
      _this.subscribable = subscribable;
    };
    this.prevWithoutPreserves = null;
    this.setInitialValues = function(initialValues, init) {
      _this.initialValues = initialValues || {};
      if (init) {
        var _this$prevWithoutPres;
        var nextStore = setValues({}, initialValues, _this.store);
        (_this$prevWithoutPres = _this.prevWithoutPreserves) === null || _this$prevWithoutPres === void 0 ? void 0 : _this$prevWithoutPres.map(function(_ref) {
          var namePath = _ref.key;
          nextStore = set(nextStore, namePath, get(initialValues, namePath));
        });
        _this.prevWithoutPreserves = null;
        _this.updateStore(nextStore);
      }
    };
    this.destroyForm = function() {
      var prevWithoutPreserves = new NameMap_default();
      _this.getFieldEntities(true).forEach(function(entity) {
        if (!_this.isMergedPreserve(entity.isPreserve())) {
          prevWithoutPreserves.set(entity.getNamePath(), true);
        }
      });
      _this.prevWithoutPreserves = prevWithoutPreserves;
    };
    this.getInitialValue = function(namePath) {
      var initValue = get(_this.initialValues, namePath);
      return namePath.length ? cloneDeep_default(initValue) : initValue;
    };
    this.setCallbacks = function(callbacks) {
      _this.callbacks = callbacks;
    };
    this.setValidateMessages = function(validateMessages) {
      _this.validateMessages = validateMessages;
    };
    this.setPreserve = function(preserve) {
      _this.preserve = preserve;
    };
    this.watchList = [];
    this.registerWatch = function(callback) {
      _this.watchList.push(callback);
      return function() {
        _this.watchList = _this.watchList.filter(function(fn2) {
          return fn2 !== callback;
        });
      };
    };
    this.notifyWatch = function() {
      var namePath = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      if (_this.watchList.length) {
        var values = _this.getFieldsValue();
        var allValues = _this.getFieldsValue(true);
        _this.watchList.forEach(function(callback) {
          callback(values, allValues, namePath);
        });
      }
    };
    this.timeoutId = null;
    this.warningUnhooked = function() {
      if (!_this.timeoutId && typeof window !== "undefined") {
        _this.timeoutId = setTimeout(function() {
          _this.timeoutId = null;
          if (!_this.formHooked) {
            warning_default(false, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
          }
        });
      }
    };
    this.updateStore = function(nextStore) {
      _this.store = nextStore;
    };
    this.getFieldEntities = function() {
      var pure = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      if (!pure) {
        return _this.fieldEntities;
      }
      return _this.fieldEntities.filter(function(field) {
        return field.getNamePath().length;
      });
    };
    this.getFieldsMap = function() {
      var pure = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      var cache2 = new NameMap_default();
      _this.getFieldEntities(pure).forEach(function(field) {
        var namePath = field.getNamePath();
        cache2.set(namePath, field);
      });
      return cache2;
    };
    this.getFieldEntitiesForNamePathList = function(nameList) {
      if (!nameList) {
        return _this.getFieldEntities(true);
      }
      var cache2 = _this.getFieldsMap(true);
      return nameList.map(function(name) {
        var namePath = getNamePath(name);
        return cache2.get(namePath) || {
          INVALIDATE_NAME_PATH: getNamePath(name)
        };
      });
    };
    this.getFieldsValue = function(nameList, filterFunc) {
      _this.warningUnhooked();
      if (nameList === true && !filterFunc) {
        return _this.store;
      }
      var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(nameList) ? nameList : null);
      var filteredNameList = [];
      fieldEntities.forEach(function(entity) {
        var _entity$isListField;
        var namePath = "INVALIDATE_NAME_PATH" in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath();
        if (!nameList && ((_entity$isListField = entity.isListField) === null || _entity$isListField === void 0 ? void 0 : _entity$isListField.call(entity))) {
          return;
        }
        if (!filterFunc) {
          filteredNameList.push(namePath);
        } else {
          var meta = "getMeta" in entity ? entity.getMeta() : null;
          if (filterFunc(meta)) {
            filteredNameList.push(namePath);
          }
        }
      });
      return cloneByNamePathList(_this.store, filteredNameList.map(getNamePath));
    };
    this.getFieldValue = function(name) {
      _this.warningUnhooked();
      var namePath = getNamePath(name);
      return get(_this.store, namePath);
    };
    this.getFieldsError = function(nameList) {
      _this.warningUnhooked();
      var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);
      return fieldEntities.map(function(entity, index2) {
        if (entity && !("INVALIDATE_NAME_PATH" in entity)) {
          return {
            name: entity.getNamePath(),
            errors: entity.getErrors(),
            warnings: entity.getWarnings()
          };
        }
        return {
          name: getNamePath(nameList[index2]),
          errors: [],
          warnings: []
        };
      });
    };
    this.getFieldError = function(name) {
      _this.warningUnhooked();
      var namePath = getNamePath(name);
      var fieldError = _this.getFieldsError([namePath])[0];
      return fieldError.errors;
    };
    this.getFieldWarning = function(name) {
      _this.warningUnhooked();
      var namePath = getNamePath(name);
      var fieldError = _this.getFieldsError([namePath])[0];
      return fieldError.warnings;
    };
    this.isFieldsTouched = function() {
      _this.warningUnhooked();
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var arg0 = args[0], arg1 = args[1];
      var namePathList;
      var isAllFieldsTouched = false;
      if (args.length === 0) {
        namePathList = null;
      } else if (args.length === 1) {
        if (Array.isArray(arg0)) {
          namePathList = arg0.map(getNamePath);
          isAllFieldsTouched = false;
        } else {
          namePathList = null;
          isAllFieldsTouched = arg0;
        }
      } else {
        namePathList = arg0.map(getNamePath);
        isAllFieldsTouched = arg1;
      }
      var fieldEntities = _this.getFieldEntities(true);
      var isFieldTouched = function isFieldTouched2(field) {
        return field.isFieldTouched();
      };
      if (!namePathList) {
        return isAllFieldsTouched ? fieldEntities.every(isFieldTouched) : fieldEntities.some(isFieldTouched);
      }
      var map = new NameMap_default();
      namePathList.forEach(function(shortNamePath) {
        map.set(shortNamePath, []);
      });
      fieldEntities.forEach(function(field) {
        var fieldNamePath = field.getNamePath();
        namePathList.forEach(function(shortNamePath) {
          if (shortNamePath.every(function(nameUnit, i3) {
            return fieldNamePath[i3] === nameUnit;
          })) {
            map.update(shortNamePath, function(list) {
              return [].concat(_toConsumableArray(list), [field]);
            });
          }
        });
      });
      var isNamePathListTouched = function isNamePathListTouched2(entities) {
        return entities.some(isFieldTouched);
      };
      var namePathListEntities = map.map(function(_ref2) {
        var value = _ref2.value;
        return value;
      });
      return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
    };
    this.isFieldTouched = function(name) {
      _this.warningUnhooked();
      return _this.isFieldsTouched([name]);
    };
    this.isFieldsValidating = function(nameList) {
      _this.warningUnhooked();
      var fieldEntities = _this.getFieldEntities();
      if (!nameList) {
        return fieldEntities.some(function(testField) {
          return testField.isFieldValidating();
        });
      }
      var namePathList = nameList.map(getNamePath);
      return fieldEntities.some(function(testField) {
        var fieldNamePath = testField.getNamePath();
        return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
      });
    };
    this.isFieldValidating = function(name) {
      _this.warningUnhooked();
      return _this.isFieldsValidating([name]);
    };
    this.resetWithFieldInitialValue = function() {
      var info = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var cache2 = new NameMap_default();
      var fieldEntities = _this.getFieldEntities(true);
      fieldEntities.forEach(function(field) {
        var initialValue = field.props.initialValue;
        var namePath = field.getNamePath();
        if (initialValue !== void 0) {
          var records = cache2.get(namePath) || /* @__PURE__ */ new Set();
          records.add({
            entity: field,
            value: initialValue
          });
          cache2.set(namePath, records);
        }
      });
      var resetWithFields = function resetWithFields2(entities) {
        entities.forEach(function(field) {
          var initialValue = field.props.initialValue;
          if (initialValue !== void 0) {
            var namePath = field.getNamePath();
            var formInitialValue = _this.getInitialValue(namePath);
            if (formInitialValue !== void 0) {
              warning_default(false, "Form already set 'initialValues' with path '".concat(namePath.join("."), "'. Field can not overwrite it."));
            } else {
              var records = cache2.get(namePath);
              if (records && records.size > 1) {
                warning_default(false, "Multiple Field with path '".concat(namePath.join("."), "' set 'initialValue'. Can not decide which one to pick."));
              } else if (records) {
                var originValue = _this.getFieldValue(namePath);
                if (!info.skipExist || originValue === void 0) {
                  _this.updateStore(set(_this.store, namePath, _toConsumableArray(records)[0].value));
                }
              }
            }
          }
        });
      };
      var requiredFieldEntities;
      if (info.entities) {
        requiredFieldEntities = info.entities;
      } else if (info.namePathList) {
        requiredFieldEntities = [];
        info.namePathList.forEach(function(namePath) {
          var records = cache2.get(namePath);
          if (records) {
            var _requiredFieldEntitie;
            (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, _toConsumableArray(_toConsumableArray(records).map(function(r3) {
              return r3.entity;
            })));
          }
        });
      } else {
        requiredFieldEntities = fieldEntities;
      }
      resetWithFields(requiredFieldEntities);
    };
    this.resetFields = function(nameList) {
      _this.warningUnhooked();
      var prevStore = _this.store;
      if (!nameList) {
        _this.updateStore(setValues({}, _this.initialValues));
        _this.resetWithFieldInitialValue();
        _this.notifyObservers(prevStore, null, {
          type: "reset"
        });
        _this.notifyWatch();
        return;
      }
      var namePathList = nameList.map(getNamePath);
      namePathList.forEach(function(namePath) {
        var initialValue = _this.getInitialValue(namePath);
        _this.updateStore(set(_this.store, namePath, initialValue));
      });
      _this.resetWithFieldInitialValue({
        namePathList
      });
      _this.notifyObservers(prevStore, namePathList, {
        type: "reset"
      });
      _this.notifyWatch(namePathList);
    };
    this.setFields = function(fields) {
      _this.warningUnhooked();
      var prevStore = _this.store;
      var namePathList = [];
      fields.forEach(function(fieldData) {
        var name = fieldData.name, data = _objectWithoutProperties(fieldData, _excluded24);
        var namePath = getNamePath(name);
        namePathList.push(namePath);
        if ("value" in data) {
          _this.updateStore(set(_this.store, namePath, data.value));
        }
        _this.notifyObservers(prevStore, [namePath], {
          type: "setField",
          data: fieldData
        });
      });
      _this.notifyWatch(namePathList);
    };
    this.getFields = function() {
      var entities = _this.getFieldEntities(true);
      var fields = entities.map(function(field) {
        var namePath = field.getNamePath();
        var meta = field.getMeta();
        var fieldData = _objectSpread2(_objectSpread2({}, meta), {}, {
          name: namePath,
          value: _this.getFieldValue(namePath)
        });
        Object.defineProperty(fieldData, "originRCField", {
          value: true
        });
        return fieldData;
      });
      return fields;
    };
    this.initEntityValue = function(entity) {
      var initialValue = entity.props.initialValue;
      if (initialValue !== void 0) {
        var namePath = entity.getNamePath();
        var prevValue = get(_this.store, namePath);
        if (prevValue === void 0) {
          _this.updateStore(set(_this.store, namePath, initialValue));
        }
      }
    };
    this.isMergedPreserve = function(fieldPreserve) {
      var mergedPreserve = fieldPreserve !== void 0 ? fieldPreserve : _this.preserve;
      return mergedPreserve !== null && mergedPreserve !== void 0 ? mergedPreserve : true;
    };
    this.registerField = function(entity) {
      _this.fieldEntities.push(entity);
      var namePath = entity.getNamePath();
      _this.notifyWatch([namePath]);
      if (entity.props.initialValue !== void 0) {
        var prevStore = _this.store;
        _this.resetWithFieldInitialValue({
          entities: [entity],
          skipExist: true
        });
        _this.notifyObservers(prevStore, [entity.getNamePath()], {
          type: "valueUpdate",
          source: "internal"
        });
      }
      return function(isListField, preserve) {
        var subNamePath = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        _this.fieldEntities = _this.fieldEntities.filter(function(item) {
          return item !== entity;
        });
        if (!_this.isMergedPreserve(preserve) && (!isListField || subNamePath.length > 1)) {
          var defaultValue = isListField ? void 0 : _this.getInitialValue(namePath);
          if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function(field) {
            return (
              // Only reset when no namePath exist
              !matchNamePath(field.getNamePath(), namePath)
            );
          })) {
            var _prevStore = _this.store;
            _this.updateStore(set(_prevStore, namePath, defaultValue, true));
            _this.notifyObservers(_prevStore, [namePath], {
              type: "remove"
            });
            _this.triggerDependenciesUpdate(_prevStore, namePath);
          }
        }
        _this.notifyWatch([namePath]);
      };
    };
    this.dispatch = function(action) {
      switch (action.type) {
        case "updateValue": {
          var namePath = action.namePath, value = action.value;
          _this.updateValue(namePath, value);
          break;
        }
        case "validateField": {
          var _namePath = action.namePath, triggerName = action.triggerName;
          _this.validateFields([_namePath], {
            triggerName
          });
          break;
        }
        default:
      }
    };
    this.notifyObservers = function(prevStore, namePathList, info) {
      if (_this.subscribable) {
        var mergedInfo = _objectSpread2(_objectSpread2({}, info), {}, {
          store: _this.getFieldsValue(true)
        });
        _this.getFieldEntities().forEach(function(_ref3) {
          var onStoreChange = _ref3.onStoreChange;
          onStoreChange(prevStore, namePathList, mergedInfo);
        });
      } else {
        _this.forceRootUpdate();
      }
    };
    this.triggerDependenciesUpdate = function(prevStore, namePath) {
      var childrenFields = _this.getDependencyChildrenFields(namePath);
      if (childrenFields.length) {
        _this.validateFields(childrenFields);
      }
      _this.notifyObservers(prevStore, childrenFields, {
        type: "dependenciesUpdate",
        relatedFields: [namePath].concat(_toConsumableArray(childrenFields))
      });
      return childrenFields;
    };
    this.updateValue = function(name, value) {
      var namePath = getNamePath(name);
      var prevStore = _this.store;
      _this.updateStore(set(_this.store, namePath, value));
      _this.notifyObservers(prevStore, [namePath], {
        type: "valueUpdate",
        source: "internal"
      });
      _this.notifyWatch([namePath]);
      var childrenFields = _this.triggerDependenciesUpdate(prevStore, namePath);
      var onValuesChange = _this.callbacks.onValuesChange;
      if (onValuesChange) {
        var changedValues = cloneByNamePathList(_this.store, [namePath]);
        onValuesChange(changedValues, _this.getFieldsValue());
      }
      _this.triggerOnFieldsChange([namePath].concat(_toConsumableArray(childrenFields)));
    };
    this.setFieldsValue = function(store) {
      _this.warningUnhooked();
      var prevStore = _this.store;
      if (store) {
        var nextStore = setValues(_this.store, store);
        _this.updateStore(nextStore);
      }
      _this.notifyObservers(prevStore, null, {
        type: "valueUpdate",
        source: "external"
      });
      _this.notifyWatch();
    };
    this.setFieldValue = function(name, value) {
      _this.setFields([{
        name,
        value
      }]);
    };
    this.getDependencyChildrenFields = function(rootNamePath) {
      var children = /* @__PURE__ */ new Set();
      var childrenFields = [];
      var dependencies2fields = new NameMap_default();
      _this.getFieldEntities().forEach(function(field) {
        var dependencies = field.props.dependencies;
        (dependencies || []).forEach(function(dependency) {
          var dependencyNamePath = getNamePath(dependency);
          dependencies2fields.update(dependencyNamePath, function() {
            var fields = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
            fields.add(field);
            return fields;
          });
        });
      });
      var fillChildren = function fillChildren2(namePath) {
        var fields = dependencies2fields.get(namePath) || /* @__PURE__ */ new Set();
        fields.forEach(function(field) {
          if (!children.has(field)) {
            children.add(field);
            var fieldNamePath = field.getNamePath();
            if (field.isFieldDirty() && fieldNamePath.length) {
              childrenFields.push(fieldNamePath);
              fillChildren2(fieldNamePath);
            }
          }
        });
      };
      fillChildren(rootNamePath);
      return childrenFields;
    };
    this.triggerOnFieldsChange = function(namePathList, filedErrors) {
      var onFieldsChange = _this.callbacks.onFieldsChange;
      if (onFieldsChange) {
        var fields = _this.getFields();
        if (filedErrors) {
          var cache2 = new NameMap_default();
          filedErrors.forEach(function(_ref4) {
            var name = _ref4.name, errors = _ref4.errors;
            cache2.set(name, errors);
          });
          fields.forEach(function(field) {
            field.errors = cache2.get(field.name) || field.errors;
          });
        }
        var changedFields = fields.filter(function(_ref5) {
          var fieldName = _ref5.name;
          return containsNamePath(namePathList, fieldName);
        });
        onFieldsChange(changedFields, fields);
      }
    };
    this.validateFields = function(arg1, arg2) {
      _this.warningUnhooked();
      var nameList;
      var options;
      if (Array.isArray(arg1) || typeof arg1 === "string" || typeof arg2 === "string") {
        nameList = arg1;
        options = arg2;
      } else {
        options = arg1;
      }
      var provideNameList = !!nameList;
      var namePathList = provideNameList ? nameList.map(getNamePath) : [];
      var promiseList = [];
      _this.getFieldEntities(true).forEach(function(field) {
        var _options;
        if (!provideNameList) {
          namePathList.push(field.getNamePath());
        }
        if (((_options = options) === null || _options === void 0 ? void 0 : _options.recursive) && provideNameList) {
          var namePath = field.getNamePath();
          if (
            // nameList[i] === undefined 说明是以 nameList 开头的
            // ['name'] -> ['name','list']
            namePath.every(function(nameUnit, i3) {
              return nameList[i3] === nameUnit || nameList[i3] === void 0;
            })
          ) {
            namePathList.push(namePath);
          }
        }
        if (!field.props.rules || !field.props.rules.length) {
          return;
        }
        var fieldNamePath = field.getNamePath();
        if (!provideNameList || containsNamePath(namePathList, fieldNamePath)) {
          var promise = field.validateRules(_objectSpread2({
            validateMessages: _objectSpread2(_objectSpread2({}, defaultValidateMessages), _this.validateMessages)
          }, options));
          promiseList.push(promise.then(function() {
            return {
              name: fieldNamePath,
              errors: [],
              warnings: []
            };
          }).catch(function(ruleErrors) {
            var _ruleErrors$forEach;
            var mergedErrors = [];
            var mergedWarnings = [];
            (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 ? void 0 : _ruleErrors$forEach.call(ruleErrors, function(_ref6) {
              var warningOnly = _ref6.rule.warningOnly, errors = _ref6.errors;
              if (warningOnly) {
                mergedWarnings.push.apply(mergedWarnings, _toConsumableArray(errors));
              } else {
                mergedErrors.push.apply(mergedErrors, _toConsumableArray(errors));
              }
            });
            if (mergedErrors.length) {
              return Promise.reject({
                name: fieldNamePath,
                errors: mergedErrors,
                warnings: mergedWarnings
              });
            }
            return {
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            };
          }));
        }
      });
      var summaryPromise = allPromiseFinish(promiseList);
      _this.lastValidatePromise = summaryPromise;
      summaryPromise.catch(function(results) {
        return results;
      }).then(function(results) {
        var resultNamePathList = results.map(function(_ref7) {
          var name = _ref7.name;
          return name;
        });
        _this.notifyObservers(_this.store, resultNamePathList, {
          type: "validateFinish"
        });
        _this.triggerOnFieldsChange(resultNamePathList, results);
      });
      var returnPromise = summaryPromise.then(function() {
        if (_this.lastValidatePromise === summaryPromise) {
          return Promise.resolve(_this.getFieldsValue(namePathList));
        }
        return Promise.reject([]);
      }).catch(function(results) {
        var errorList = results.filter(function(result) {
          return result && result.errors.length;
        });
        return Promise.reject({
          values: _this.getFieldsValue(namePathList),
          errorFields: errorList,
          outOfDate: _this.lastValidatePromise !== summaryPromise
        });
      });
      returnPromise.catch(function(e3) {
        return e3;
      });
      _this.triggerOnFieldsChange(namePathList);
      return returnPromise;
    };
    this.submit = function() {
      _this.warningUnhooked();
      _this.validateFields().then(function(values) {
        var onFinish = _this.callbacks.onFinish;
        if (onFinish) {
          try {
            onFinish(values);
          } catch (err) {
            console.error(err);
          }
        }
      }).catch(function(e3) {
        var onFinishFailed = _this.callbacks.onFinishFailed;
        if (onFinishFailed) {
          onFinishFailed(e3);
        }
      });
    };
    this.forceRootUpdate = forceRootUpdate;
  });
  function useForm(form) {
    var formRef = _2();
    var _React$useState = h2({}), _React$useState2 = _slicedToArray(_React$useState, 2), forceUpdate = _React$useState2[1];
    if (!formRef.current) {
      if (form) {
        formRef.current = form;
      } else {
        var forceReRender = function forceReRender2() {
          forceUpdate({});
        };
        var formStore = new FormStore(forceReRender);
        formRef.current = formStore.getForm();
      }
    }
    return [formRef.current];
  }
  var useForm_default = useForm;

  // node_modules/rc-field-form/es/Form.js
  init_react();

  // node_modules/rc-field-form/es/FormContext.js
  init_react();
  var FormContext = /* @__PURE__ */ G({
    triggerFormChange: function triggerFormChange() {
    },
    triggerFormFinish: function triggerFormFinish() {
    },
    registerForm: function registerForm() {
    },
    unregisterForm: function unregisterForm() {
    }
  });
  var FormProvider = function FormProvider2(_ref) {
    var validateMessages = _ref.validateMessages, onFormChange = _ref.onFormChange, onFormFinish = _ref.onFormFinish, children = _ref.children;
    var formContext = q2(FormContext);
    var formsRef = _2({});
    return /* @__PURE__ */ y(FormContext.Provider, {
      value: _objectSpread2(_objectSpread2({}, formContext), {}, {
        validateMessages: _objectSpread2(_objectSpread2({}, formContext.validateMessages), validateMessages),
        // =========================================================
        // =                  Global Form Control                  =
        // =========================================================
        triggerFormChange: function triggerFormChange2(name, changedFields) {
          if (onFormChange) {
            onFormChange(name, {
              changedFields,
              forms: formsRef.current
            });
          }
          formContext.triggerFormChange(name, changedFields);
        },
        triggerFormFinish: function triggerFormFinish2(name, values) {
          if (onFormFinish) {
            onFormFinish(name, {
              values,
              forms: formsRef.current
            });
          }
          formContext.triggerFormFinish(name, values);
        },
        registerForm: function registerForm2(name, form) {
          if (name) {
            formsRef.current = _objectSpread2(_objectSpread2({}, formsRef.current), {}, _defineProperty({}, name, form));
          }
          formContext.registerForm(name, form);
        },
        unregisterForm: function unregisterForm2(name) {
          var newForms = _objectSpread2({}, formsRef.current);
          delete newForms[name];
          formsRef.current = newForms;
          formContext.unregisterForm(name);
        }
      })
    }, children);
  };
  var FormContext_default = FormContext;

  // node_modules/rc-field-form/es/Form.js
  var _excluded25 = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"];
  var Form = function Form2(_ref, ref) {
    var name = _ref.name, initialValues = _ref.initialValues, fields = _ref.fields, form = _ref.form, preserve = _ref.preserve, children = _ref.children, _ref$component = _ref.component, Component = _ref$component === void 0 ? "form" : _ref$component, validateMessages = _ref.validateMessages, _ref$validateTrigger = _ref.validateTrigger, validateTrigger = _ref$validateTrigger === void 0 ? "onChange" : _ref$validateTrigger, onValuesChange = _ref.onValuesChange, _onFieldsChange = _ref.onFieldsChange, _onFinish = _ref.onFinish, onFinishFailed = _ref.onFinishFailed, restProps = _objectWithoutProperties(_ref, _excluded25);
    var formContext = q2(FormContext_default);
    var _useForm = useForm_default(form), _useForm2 = _slicedToArray(_useForm, 1), formInstance = _useForm2[0];
    var _formInstance$getInte = formInstance.getInternalHooks(HOOK_MARK), useSubscribe = _formInstance$getInte.useSubscribe, setInitialValues = _formInstance$getInte.setInitialValues, setCallbacks = _formInstance$getInte.setCallbacks, setValidateMessages = _formInstance$getInte.setValidateMessages, setPreserve = _formInstance$getInte.setPreserve, destroyForm = _formInstance$getInte.destroyForm;
    A2(ref, function() {
      return formInstance;
    });
    p2(function() {
      formContext.registerForm(name, formInstance);
      return function() {
        formContext.unregisterForm(name);
      };
    }, [formContext, formInstance, name]);
    setValidateMessages(_objectSpread2(_objectSpread2({}, formContext.validateMessages), validateMessages));
    setCallbacks({
      onValuesChange,
      onFieldsChange: function onFieldsChange(changedFields) {
        formContext.triggerFormChange(name, changedFields);
        if (_onFieldsChange) {
          for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
          }
          _onFieldsChange.apply(void 0, [changedFields].concat(rest));
        }
      },
      onFinish: function onFinish(values2) {
        formContext.triggerFormFinish(name, values2);
        if (_onFinish) {
          _onFinish(values2);
        }
      },
      onFinishFailed
    });
    setPreserve(preserve);
    var mountRef = _2(null);
    setInitialValues(initialValues, !mountRef.current);
    if (!mountRef.current) {
      mountRef.current = true;
    }
    p2(
      function() {
        return destroyForm;
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    var childrenNode;
    var childrenRenderProps = typeof children === "function";
    if (childrenRenderProps) {
      var values = formInstance.getFieldsValue(true);
      childrenNode = children(values, formInstance);
    } else {
      childrenNode = children;
    }
    useSubscribe(!childrenRenderProps);
    var prevFieldsRef = _2();
    p2(function() {
      if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
        formInstance.setFields(fields || []);
      }
      prevFieldsRef.current = fields;
    }, [fields, formInstance]);
    var formContextValue = F2(function() {
      return _objectSpread2(_objectSpread2({}, formInstance), {}, {
        validateTrigger
      });
    }, [formInstance, validateTrigger]);
    var wrapperNode = /* @__PURE__ */ y(FieldContext_default.Provider, {
      value: formContextValue
    }, childrenNode);
    if (Component === false) {
      return wrapperNode;
    }
    return /* @__PURE__ */ y(Component, _extends({}, restProps, {
      onSubmit: function onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        formInstance.submit();
      },
      onReset: function onReset(event) {
        var _restProps$onReset;
        event.preventDefault();
        formInstance.resetFields();
        (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0 ? void 0 : _restProps$onReset.call(restProps, event);
      }
    }), wrapperNode);
  };
  var Form_default = Form;

  // node_modules/rc-field-form/es/useWatch.js
  init_react();
  function stringify2(value) {
    try {
      return JSON.stringify(value);
    } catch (err) {
      return Math.random();
    }
  }
  var useWatchWarning = true ? function(namePath) {
    var fullyStr = namePath.join("__RC_FIELD_FORM_SPLIT__");
    var nameStrRef = _2(fullyStr);
    warning_default(nameStrRef.current === fullyStr, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
  } : function() {
  };
  function useWatch() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var _args$ = args[0], dependencies = _args$ === void 0 ? [] : _args$, _args$2 = args[1], _form = _args$2 === void 0 ? {} : _args$2;
    var options = isFormInstance(_form) ? {
      form: _form
    } : _form;
    var form = options.form;
    var _useState = h2(), _useState2 = _slicedToArray(_useState, 2), value = _useState2[0], setValue = _useState2[1];
    var valueStr = F2(function() {
      return stringify2(value);
    }, [value]);
    var valueStrRef = _2(valueStr);
    valueStrRef.current = valueStr;
    var fieldContext = q2(FieldContext_default);
    var formInstance = form || fieldContext;
    var isValidForm = formInstance && formInstance._init;
    if (true) {
      warning_default(args.length === 2 ? form ? isValidForm : true : isValidForm, "useWatch requires a form instance since it can not auto detect from context.");
    }
    var namePath = getNamePath(dependencies);
    var namePathRef = _2(namePath);
    namePathRef.current = namePath;
    useWatchWarning(namePath);
    p2(
      function() {
        if (!isValidForm) {
          return;
        }
        var getFieldsValue = formInstance.getFieldsValue, getInternalHooks2 = formInstance.getInternalHooks;
        var _getInternalHooks = getInternalHooks2(HOOK_MARK), registerWatch = _getInternalHooks.registerWatch;
        var cancelRegister = registerWatch(function(values, allValues) {
          var newValue = get(options.preserve ? allValues : values, namePathRef.current);
          var nextValueStr = stringify2(newValue);
          if (valueStrRef.current !== nextValueStr) {
            valueStrRef.current = nextValueStr;
            setValue(newValue);
          }
        });
        var initialValue = get(options.preserve ? getFieldsValue(true) : getFieldsValue(), namePathRef.current);
        setValue(initialValue);
        return cancelRegister;
      },
      // We do not need re-register since namePath content is the same
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [isValidForm]
    );
    return value;
  }
  var useWatch_default = useWatch;

  // node_modules/rc-field-form/es/index.js
  var InternalForm = /* @__PURE__ */ k3(Form_default);
  var RefForm = InternalForm;
  RefForm.FormProvider = FormProvider;
  RefForm.Field = Field_default;
  RefForm.List = List_default;
  RefForm.useForm = useForm_default;
  RefForm.useWatch = useWatch_default;

  // node_modules/antd/es/config-provider/index.js
  init_react();

  // node_modules/antd/es/_util/warning.js
  function noop2() {
  }
  var warning4 = noop2;
  if (true) {
    warning4 = (valid, component, message) => {
      warning_default(valid, `[antd: ${component}] ${message}`);
      if (false) {
        resetWarned();
      }
    };
  }
  var warning_default2 = warning4;

  // node_modules/antd/es/locale/index.js
  init_react();

  // node_modules/rc-pagination/es/locale/en_US.js
  var en_US_default = {
    // Options.jsx
    items_per_page: "/ page",
    jump_to: "Go to",
    jump_to_confirm: "confirm",
    page: "Page",
    // Pagination.jsx
    prev_page: "Previous Page",
    next_page: "Next Page",
    prev_5: "Previous 5 Pages",
    next_5: "Next 5 Pages",
    prev_3: "Previous 3 Pages",
    next_3: "Next 3 Pages",
    page_size: "Page Size"
  };

  // node_modules/rc-picker/es/locale/en_US.js
  var locale = {
    locale: "en_US",
    today: "Today",
    now: "Now",
    backToToday: "Back to today",
    ok: "OK",
    clear: "Clear",
    month: "Month",
    year: "Year",
    timeSelect: "select time",
    dateSelect: "select date",
    weekSelect: "Choose a week",
    monthSelect: "Choose a month",
    yearSelect: "Choose a year",
    decadeSelect: "Choose a decade",
    yearFormat: "YYYY",
    dateFormat: "M/D/YYYY",
    dayFormat: "D",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    monthBeforeYear: true,
    previousMonth: "Previous month (PageUp)",
    nextMonth: "Next month (PageDown)",
    previousYear: "Last year (Control + left)",
    nextYear: "Next year (Control + right)",
    previousDecade: "Last decade",
    nextDecade: "Next decade",
    previousCentury: "Last century",
    nextCentury: "Next century"
  };
  var en_US_default2 = locale;

  // node_modules/antd/es/time-picker/locale/en_US.js
  var locale2 = {
    placeholder: "Select time",
    rangePlaceholder: ["Start time", "End time"]
  };
  var en_US_default3 = locale2;

  // node_modules/antd/es/date-picker/locale/en_US.js
  var locale3 = {
    lang: Object.assign({
      placeholder: "Select date",
      yearPlaceholder: "Select year",
      quarterPlaceholder: "Select quarter",
      monthPlaceholder: "Select month",
      weekPlaceholder: "Select week",
      rangePlaceholder: ["Start date", "End date"],
      rangeYearPlaceholder: ["Start year", "End year"],
      rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
      rangeMonthPlaceholder: ["Start month", "End month"],
      rangeWeekPlaceholder: ["Start week", "End week"]
    }, en_US_default2),
    timePickerLocale: Object.assign({}, en_US_default3)
  };
  var en_US_default4 = locale3;

  // node_modules/antd/es/calendar/locale/en_US.js
  var en_US_default5 = en_US_default4;

  // node_modules/antd/es/locale/en_US.js
  var typeTemplate2 = "${label} is not a valid ${type}";
  var localeValues = {
    locale: "en",
    Pagination: en_US_default,
    DatePicker: en_US_default4,
    TimePicker: en_US_default3,
    Calendar: en_US_default5,
    global: {
      placeholder: "Please select"
    },
    Table: {
      filterTitle: "Filter menu",
      filterConfirm: "OK",
      filterReset: "Reset",
      filterEmptyText: "No filters",
      filterCheckall: "Select all items",
      filterSearchPlaceholder: "Search in filters",
      emptyText: "No data",
      selectAll: "Select current page",
      selectInvert: "Invert current page",
      selectNone: "Clear all data",
      selectionAll: "Select all data",
      sortTitle: "Sort",
      expand: "Expand row",
      collapse: "Collapse row",
      triggerDesc: "Click to sort descending",
      triggerAsc: "Click to sort ascending",
      cancelSort: "Click to cancel sorting"
    },
    Tour: {
      Next: "Next",
      Previous: "Previous",
      Finish: "Finish"
    },
    Modal: {
      okText: "OK",
      cancelText: "Cancel",
      justOkText: "OK"
    },
    Popconfirm: {
      okText: "OK",
      cancelText: "Cancel"
    },
    Transfer: {
      titles: ["", ""],
      searchPlaceholder: "Search here",
      itemUnit: "item",
      itemsUnit: "items",
      remove: "Remove",
      selectCurrent: "Select current page",
      removeCurrent: "Remove current page",
      selectAll: "Select all data",
      removeAll: "Remove all data",
      selectInvert: "Invert current page"
    },
    Upload: {
      uploading: "Uploading...",
      removeFile: "Remove file",
      uploadError: "Upload error",
      previewFile: "Preview file",
      downloadFile: "Download file"
    },
    Empty: {
      description: "No data"
    },
    Icon: {
      icon: "icon"
    },
    Text: {
      edit: "Edit",
      copy: "Copy",
      copied: "Copied",
      expand: "Expand"
    },
    PageHeader: {
      back: "Back"
    },
    Form: {
      optional: "(optional)",
      defaultValidateMessages: {
        default: "Field validation error for ${label}",
        required: "Please enter ${label}",
        enum: "${label} must be one of [${enum}]",
        whitespace: "${label} cannot be a blank character",
        date: {
          format: "${label} date format is invalid",
          parse: "${label} cannot be converted to a date",
          invalid: "${label} is an invalid date"
        },
        types: {
          string: typeTemplate2,
          method: typeTemplate2,
          array: typeTemplate2,
          object: typeTemplate2,
          number: typeTemplate2,
          date: typeTemplate2,
          boolean: typeTemplate2,
          integer: typeTemplate2,
          float: typeTemplate2,
          regexp: typeTemplate2,
          email: typeTemplate2,
          url: typeTemplate2,
          hex: typeTemplate2
        },
        string: {
          len: "${label} must be ${len} characters",
          min: "${label} must be at least ${min} characters",
          max: "${label} must be up to ${max} characters",
          range: "${label} must be between ${min}-${max} characters"
        },
        number: {
          len: "${label} must be equal to ${len}",
          min: "${label} must be minimum ${min}",
          max: "${label} must be maximum ${max}",
          range: "${label} must be between ${min}-${max}"
        },
        array: {
          len: "Must be ${len} ${label}",
          min: "At least ${min} ${label}",
          max: "At most ${max} ${label}",
          range: "The amount of ${label} must be between ${min}-${max}"
        },
        pattern: {
          mismatch: "${label} does not match the pattern ${pattern}"
        }
      }
    },
    Image: {
      preview: "Preview"
    },
    QRCode: {
      expired: "QR code expired",
      refresh: "Refresh"
    },
    ColorPicker: {
      presetEmpty: "Empty"
    }
  };
  var en_US_default6 = localeValues;

  // node_modules/antd/es/modal/locale.js
  var runtimeLocale = Object.assign({}, en_US_default6.Modal);
  function changeConfirmLocale(newLocale) {
    if (newLocale) {
      runtimeLocale = Object.assign(Object.assign({}, runtimeLocale), newLocale);
    } else {
      runtimeLocale = Object.assign({}, en_US_default6.Modal);
    }
  }

  // node_modules/antd/es/locale/context.js
  init_react();
  var LocaleContext = /* @__PURE__ */ G(void 0);
  var context_default = LocaleContext;

  // node_modules/antd/es/locale/useLocale.js
  init_react();
  var useLocale = (componentName, defaultLocale) => {
    const fullLocale = q2(context_default);
    const getLocale = F2(() => {
      var _a;
      const locale4 = defaultLocale || en_US_default6[componentName];
      const localeFromContext = (_a = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale[componentName]) !== null && _a !== void 0 ? _a : {};
      return Object.assign(Object.assign({}, typeof locale4 === "function" ? locale4() : locale4), localeFromContext || {});
    }, [componentName, defaultLocale, fullLocale]);
    const getLocaleCode = F2(() => {
      const localeCode = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.locale;
      if ((fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.exist) && !localeCode) {
        return en_US_default6.locale;
      }
      return localeCode;
    }, [fullLocale]);
    return [getLocale, getLocaleCode];
  };
  var useLocale_default = useLocale;

  // node_modules/antd/es/locale/index.js
  var ANT_MARK = "internalMark";
  var LocaleProvider = (props) => {
    const {
      locale: locale4 = {},
      children,
      _ANT_MARK__
    } = props;
    if (true) {
      true ? warning_default2(_ANT_MARK__ === ANT_MARK, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale") : void 0;
    }
    p2(() => {
      changeConfirmLocale(locale4 && locale4.Modal);
      return () => {
        changeConfirmLocale();
      };
    }, [locale4]);
    const getMemoizedContextValue = F2(() => Object.assign(Object.assign({}, locale4), {
      exist: true
    }), [locale4]);
    return /* @__PURE__ */ y(context_default.Provider, {
      value: getMemoizedContextValue
    }, children);
  };
  if (true) {
    LocaleProvider.displayName = "LocaleProvider";
  }
  var locale_default = LocaleProvider;

  // node_modules/antd/es/theme/internal.js
  init_react();

  // node_modules/antd/es/version/version.js
  var version_default = "5.5.0";

  // node_modules/antd/es/version/index.js
  var version_default2 = version_default;

  // node_modules/@ctrl/tinycolor/dist/module/util.js
  function bound01(n2, max) {
    if (isOnePointZero(n2)) {
      n2 = "100%";
    }
    var isPercent = isPercentage(n2);
    n2 = max === 360 ? n2 : Math.min(max, Math.max(0, parseFloat(n2)));
    if (isPercent) {
      n2 = parseInt(String(n2 * max), 10) / 100;
    }
    if (Math.abs(n2 - max) < 1e-6) {
      return 1;
    }
    if (max === 360) {
      n2 = (n2 < 0 ? n2 % max + max : n2 % max) / parseFloat(String(max));
    } else {
      n2 = n2 % max / parseFloat(String(max));
    }
    return n2;
  }
  function clamp01(val) {
    return Math.min(1, Math.max(0, val));
  }
  function isOnePointZero(n2) {
    return typeof n2 === "string" && n2.indexOf(".") !== -1 && parseFloat(n2) === 1;
  }
  function isPercentage(n2) {
    return typeof n2 === "string" && n2.indexOf("%") !== -1;
  }
  function boundAlpha(a3) {
    a3 = parseFloat(a3);
    if (isNaN(a3) || a3 < 0 || a3 > 1) {
      a3 = 1;
    }
    return a3;
  }
  function convertToPercentage(n2) {
    if (n2 <= 1) {
      return "".concat(Number(n2) * 100, "%");
    }
    return n2;
  }
  function pad2(c3) {
    return c3.length === 1 ? "0" + c3 : String(c3);
  }

  // node_modules/@ctrl/tinycolor/dist/module/conversion.js
  function rgbToRgb(r3, g3, b3) {
    return {
      r: bound01(r3, 255) * 255,
      g: bound01(g3, 255) * 255,
      b: bound01(b3, 255) * 255
    };
  }
  function rgbToHsl(r3, g3, b3) {
    r3 = bound01(r3, 255);
    g3 = bound01(g3, 255);
    b3 = bound01(b3, 255);
    var max = Math.max(r3, g3, b3);
    var min = Math.min(r3, g3, b3);
    var h3 = 0;
    var s3 = 0;
    var l3 = (max + min) / 2;
    if (max === min) {
      s3 = 0;
      h3 = 0;
    } else {
      var d3 = max - min;
      s3 = l3 > 0.5 ? d3 / (2 - max - min) : d3 / (max + min);
      switch (max) {
        case r3:
          h3 = (g3 - b3) / d3 + (g3 < b3 ? 6 : 0);
          break;
        case g3:
          h3 = (b3 - r3) / d3 + 2;
          break;
        case b3:
          h3 = (r3 - g3) / d3 + 4;
          break;
        default:
          break;
      }
      h3 /= 6;
    }
    return { h: h3, s: s3, l: l3 };
  }
  function hue2rgb(p3, q4, t3) {
    if (t3 < 0) {
      t3 += 1;
    }
    if (t3 > 1) {
      t3 -= 1;
    }
    if (t3 < 1 / 6) {
      return p3 + (q4 - p3) * (6 * t3);
    }
    if (t3 < 1 / 2) {
      return q4;
    }
    if (t3 < 2 / 3) {
      return p3 + (q4 - p3) * (2 / 3 - t3) * 6;
    }
    return p3;
  }
  function hslToRgb(h3, s3, l3) {
    var r3;
    var g3;
    var b3;
    h3 = bound01(h3, 360);
    s3 = bound01(s3, 100);
    l3 = bound01(l3, 100);
    if (s3 === 0) {
      g3 = l3;
      b3 = l3;
      r3 = l3;
    } else {
      var q4 = l3 < 0.5 ? l3 * (1 + s3) : l3 + s3 - l3 * s3;
      var p3 = 2 * l3 - q4;
      r3 = hue2rgb(p3, q4, h3 + 1 / 3);
      g3 = hue2rgb(p3, q4, h3);
      b3 = hue2rgb(p3, q4, h3 - 1 / 3);
    }
    return { r: r3 * 255, g: g3 * 255, b: b3 * 255 };
  }
  function rgbToHsv(r3, g3, b3) {
    r3 = bound01(r3, 255);
    g3 = bound01(g3, 255);
    b3 = bound01(b3, 255);
    var max = Math.max(r3, g3, b3);
    var min = Math.min(r3, g3, b3);
    var h3 = 0;
    var v3 = max;
    var d3 = max - min;
    var s3 = max === 0 ? 0 : d3 / max;
    if (max === min) {
      h3 = 0;
    } else {
      switch (max) {
        case r3:
          h3 = (g3 - b3) / d3 + (g3 < b3 ? 6 : 0);
          break;
        case g3:
          h3 = (b3 - r3) / d3 + 2;
          break;
        case b3:
          h3 = (r3 - g3) / d3 + 4;
          break;
        default:
          break;
      }
      h3 /= 6;
    }
    return { h: h3, s: s3, v: v3 };
  }
  function hsvToRgb(h3, s3, v3) {
    h3 = bound01(h3, 360) * 6;
    s3 = bound01(s3, 100);
    v3 = bound01(v3, 100);
    var i3 = Math.floor(h3);
    var f3 = h3 - i3;
    var p3 = v3 * (1 - s3);
    var q4 = v3 * (1 - f3 * s3);
    var t3 = v3 * (1 - (1 - f3) * s3);
    var mod = i3 % 6;
    var r3 = [v3, q4, p3, p3, t3, v3][mod];
    var g3 = [t3, v3, v3, q4, p3, p3][mod];
    var b3 = [p3, p3, t3, v3, v3, q4][mod];
    return { r: r3 * 255, g: g3 * 255, b: b3 * 255 };
  }
  function rgbToHex(r3, g3, b3, allow3Char) {
    var hex2 = [
      pad2(Math.round(r3).toString(16)),
      pad2(Math.round(g3).toString(16)),
      pad2(Math.round(b3).toString(16))
    ];
    if (allow3Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1))) {
      return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0);
    }
    return hex2.join("");
  }
  function rgbaToHex(r3, g3, b3, a3, allow4Char) {
    var hex2 = [
      pad2(Math.round(r3).toString(16)),
      pad2(Math.round(g3).toString(16)),
      pad2(Math.round(b3).toString(16)),
      pad2(convertDecimalToHex(a3))
    ];
    if (allow4Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1)) && hex2[3].startsWith(hex2[3].charAt(1))) {
      return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0) + hex2[3].charAt(0);
    }
    return hex2.join("");
  }
  function convertDecimalToHex(d3) {
    return Math.round(parseFloat(d3) * 255).toString(16);
  }
  function convertHexToDecimal(h3) {
    return parseIntFromHex(h3) / 255;
  }
  function parseIntFromHex(val) {
    return parseInt(val, 16);
  }
  function numberInputToObject(color) {
    return {
      r: color >> 16,
      g: (color & 65280) >> 8,
      b: color & 255
    };
  }

  // node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
  var names = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };

  // node_modules/@ctrl/tinycolor/dist/module/format-input.js
  function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a3 = 1;
    var s3 = null;
    var v3 = null;
    var l3 = null;
    var ok = false;
    var format2 = false;
    if (typeof color === "string") {
      color = stringInputToObject(color);
    }
    if (typeof color === "object") {
      if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
        rgb = rgbToRgb(color.r, color.g, color.b);
        ok = true;
        format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
        s3 = convertToPercentage(color.s);
        v3 = convertToPercentage(color.v);
        rgb = hsvToRgb(color.h, s3, v3);
        ok = true;
        format2 = "hsv";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
        s3 = convertToPercentage(color.s);
        l3 = convertToPercentage(color.l);
        rgb = hslToRgb(color.h, s3, l3);
        ok = true;
        format2 = "hsl";
      }
      if (Object.prototype.hasOwnProperty.call(color, "a")) {
        a3 = color.a;
      }
    }
    a3 = boundAlpha(a3);
    return {
      ok,
      format: color.format || format2,
      r: Math.min(255, Math.max(rgb.r, 0)),
      g: Math.min(255, Math.max(rgb.g, 0)),
      b: Math.min(255, Math.max(rgb.b, 0)),
      a: a3
    };
  }
  var CSS_INTEGER = "[-\\+]?\\d+%?";
  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
  var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
  var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
  function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
      return false;
    }
    var named = false;
    if (names[color]) {
      color = names[color];
      named = true;
    } else if (color === "transparent") {
      return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }
    var match2 = matchers.rgb.exec(color);
    if (match2) {
      return { r: match2[1], g: match2[2], b: match2[3] };
    }
    match2 = matchers.rgba.exec(color);
    if (match2) {
      return { r: match2[1], g: match2[2], b: match2[3], a: match2[4] };
    }
    match2 = matchers.hsl.exec(color);
    if (match2) {
      return { h: match2[1], s: match2[2], l: match2[3] };
    }
    match2 = matchers.hsla.exec(color);
    if (match2) {
      return { h: match2[1], s: match2[2], l: match2[3], a: match2[4] };
    }
    match2 = matchers.hsv.exec(color);
    if (match2) {
      return { h: match2[1], s: match2[2], v: match2[3] };
    }
    match2 = matchers.hsva.exec(color);
    if (match2) {
      return { h: match2[1], s: match2[2], v: match2[3], a: match2[4] };
    }
    match2 = matchers.hex8.exec(color);
    if (match2) {
      return {
        r: parseIntFromHex(match2[1]),
        g: parseIntFromHex(match2[2]),
        b: parseIntFromHex(match2[3]),
        a: convertHexToDecimal(match2[4]),
        format: named ? "name" : "hex8"
      };
    }
    match2 = matchers.hex6.exec(color);
    if (match2) {
      return {
        r: parseIntFromHex(match2[1]),
        g: parseIntFromHex(match2[2]),
        b: parseIntFromHex(match2[3]),
        format: named ? "name" : "hex"
      };
    }
    match2 = matchers.hex4.exec(color);
    if (match2) {
      return {
        r: parseIntFromHex(match2[1] + match2[1]),
        g: parseIntFromHex(match2[2] + match2[2]),
        b: parseIntFromHex(match2[3] + match2[3]),
        a: convertHexToDecimal(match2[4] + match2[4]),
        format: named ? "name" : "hex8"
      };
    }
    match2 = matchers.hex3.exec(color);
    if (match2) {
      return {
        r: parseIntFromHex(match2[1] + match2[1]),
        g: parseIntFromHex(match2[2] + match2[2]),
        b: parseIntFromHex(match2[3] + match2[3]),
        format: named ? "name" : "hex"
      };
    }
    return false;
  }
  function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
  }

  // node_modules/@ctrl/tinycolor/dist/module/index.js
  var TinyColor = (
    /** @class */
    function() {
      function TinyColor2(color, opts) {
        if (color === void 0) {
          color = "";
        }
        if (opts === void 0) {
          opts = {};
        }
        var _a;
        if (color instanceof TinyColor2) {
          return color;
        }
        if (typeof color === "number") {
          color = numberInputToObject(color);
        }
        this.originalInput = color;
        var rgb = inputToRGB(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        if (this.r < 1) {
          this.r = Math.round(this.r);
        }
        if (this.g < 1) {
          this.g = Math.round(this.g);
        }
        if (this.b < 1) {
          this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
      }
      TinyColor2.prototype.isDark = function() {
        return this.getBrightness() < 128;
      };
      TinyColor2.prototype.isLight = function() {
        return !this.isDark();
      };
      TinyColor2.prototype.getBrightness = function() {
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
      };
      TinyColor2.prototype.getLuminance = function() {
        var rgb = this.toRgb();
        var R2;
        var G3;
        var B4;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
          R2 = RsRGB / 12.92;
        } else {
          R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
          G3 = GsRGB / 12.92;
        } else {
          G3 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
          B4 = BsRGB / 12.92;
        } else {
          B4 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R2 + 0.7152 * G3 + 0.0722 * B4;
      };
      TinyColor2.prototype.getAlpha = function() {
        return this.a;
      };
      TinyColor2.prototype.setAlpha = function(alpha) {
        this.a = boundAlpha(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
      };
      TinyColor2.prototype.isMonochrome = function() {
        var s3 = this.toHsl().s;
        return s3 === 0;
      };
      TinyColor2.prototype.toHsv = function() {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
      };
      TinyColor2.prototype.toHsvString = function() {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        var h3 = Math.round(hsv.h * 360);
        var s3 = Math.round(hsv.s * 100);
        var v3 = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h3, ", ").concat(s3, "%, ").concat(v3, "%)") : "hsva(".concat(h3, ", ").concat(s3, "%, ").concat(v3, "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toHsl = function() {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
      };
      TinyColor2.prototype.toHslString = function() {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        var h3 = Math.round(hsl.h * 360);
        var s3 = Math.round(hsl.s * 100);
        var l3 = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(".concat(h3, ", ").concat(s3, "%, ").concat(l3, "%)") : "hsla(".concat(h3, ", ").concat(s3, "%, ").concat(l3, "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toHex = function(allow3Char) {
        if (allow3Char === void 0) {
          allow3Char = false;
        }
        return rgbToHex(this.r, this.g, this.b, allow3Char);
      };
      TinyColor2.prototype.toHexString = function(allow3Char) {
        if (allow3Char === void 0) {
          allow3Char = false;
        }
        return "#" + this.toHex(allow3Char);
      };
      TinyColor2.prototype.toHex8 = function(allow4Char) {
        if (allow4Char === void 0) {
          allow4Char = false;
        }
        return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
      };
      TinyColor2.prototype.toHex8String = function(allow4Char) {
        if (allow4Char === void 0) {
          allow4Char = false;
        }
        return "#" + this.toHex8(allow4Char);
      };
      TinyColor2.prototype.toHexShortString = function(allowShortChar) {
        if (allowShortChar === void 0) {
          allowShortChar = false;
        }
        return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
      };
      TinyColor2.prototype.toRgb = function() {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a
        };
      };
      TinyColor2.prototype.toRgbString = function() {
        var r3 = Math.round(this.r);
        var g3 = Math.round(this.g);
        var b3 = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r3, ", ").concat(g3, ", ").concat(b3, ")") : "rgba(".concat(r3, ", ").concat(g3, ", ").concat(b3, ", ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toPercentageRgb = function() {
        var fmt = function(x4) {
          return "".concat(Math.round(bound01(x4, 255) * 100), "%");
        };
        return {
          r: fmt(this.r),
          g: fmt(this.g),
          b: fmt(this.b),
          a: this.a
        };
      };
      TinyColor2.prototype.toPercentageRgbString = function() {
        var rnd = function(x4) {
          return Math.round(bound01(x4, 255) * 100);
        };
        return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toName = function() {
        if (this.a === 0) {
          return "transparent";
        }
        if (this.a < 1) {
          return false;
        }
        var hex2 = "#" + rgbToHex(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
          var _b = _a[_i], key = _b[0], value = _b[1];
          if (hex2 === value) {
            return key;
          }
        }
        return false;
      };
      TinyColor2.prototype.toString = function(format2) {
        var formatSet = Boolean(format2);
        format2 = format2 !== null && format2 !== void 0 ? format2 : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format2.startsWith("hex") || format2 === "name");
        if (needsAlphaFormat) {
          if (format2 === "name" && this.a === 0) {
            return this.toName();
          }
          return this.toRgbString();
        }
        if (format2 === "rgb") {
          formattedString = this.toRgbString();
        }
        if (format2 === "prgb") {
          formattedString = this.toPercentageRgbString();
        }
        if (format2 === "hex" || format2 === "hex6") {
          formattedString = this.toHexString();
        }
        if (format2 === "hex3") {
          formattedString = this.toHexString(true);
        }
        if (format2 === "hex4") {
          formattedString = this.toHex8String(true);
        }
        if (format2 === "hex8") {
          formattedString = this.toHex8String();
        }
        if (format2 === "name") {
          formattedString = this.toName();
        }
        if (format2 === "hsl") {
          formattedString = this.toHslString();
        }
        if (format2 === "hsv") {
          formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
      };
      TinyColor2.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
      };
      TinyColor2.prototype.clone = function() {
        return new TinyColor2(this.toString());
      };
      TinyColor2.prototype.lighten = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.brighten = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor2(rgb);
      };
      TinyColor2.prototype.darken = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.tint = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        return this.mix("white", amount);
      };
      TinyColor2.prototype.shade = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        return this.mix("black", amount);
      };
      TinyColor2.prototype.desaturate = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.saturate = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.greyscale = function() {
        return this.desaturate(100);
      };
      TinyColor2.prototype.spin = function(amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.mix = function(color, amount) {
        if (amount === void 0) {
          amount = 50;
        }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor2(color).toRgb();
        var p3 = amount / 100;
        var rgba = {
          r: (rgb2.r - rgb1.r) * p3 + rgb1.r,
          g: (rgb2.g - rgb1.g) * p3 + rgb1.g,
          b: (rgb2.b - rgb1.b) * p3 + rgb1.b,
          a: (rgb2.a - rgb1.a) * p3 + rgb1.a
        };
        return new TinyColor2(rgba);
      };
      TinyColor2.prototype.analogous = function(results, slices) {
        if (results === void 0) {
          results = 6;
        }
        if (slices === void 0) {
          slices = 30;
        }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
          hsl.h = (hsl.h + part) % 360;
          ret.push(new TinyColor2(hsl));
        }
        return ret;
      };
      TinyColor2.prototype.complement = function() {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.monochromatic = function(results) {
        if (results === void 0) {
          results = 6;
        }
        var hsv = this.toHsv();
        var h3 = hsv.h;
        var s3 = hsv.s;
        var v3 = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
          res.push(new TinyColor2({ h: h3, s: s3, v: v3 }));
          v3 = (v3 + modification) % 1;
        }
        return res;
      };
      TinyColor2.prototype.splitcomplement = function() {
        var hsl = this.toHsl();
        var h3 = hsl.h;
        return [
          this,
          new TinyColor2({ h: (h3 + 72) % 360, s: hsl.s, l: hsl.l }),
          new TinyColor2({ h: (h3 + 216) % 360, s: hsl.s, l: hsl.l })
        ];
      };
      TinyColor2.prototype.onBackground = function(background) {
        var fg = this.toRgb();
        var bg = new TinyColor2(background).toRgb();
        var alpha = fg.a + bg.a * (1 - fg.a);
        return new TinyColor2({
          r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
          g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
          b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
          a: alpha
        });
      };
      TinyColor2.prototype.triad = function() {
        return this.polyad(3);
      };
      TinyColor2.prototype.tetrad = function() {
        return this.polyad(4);
      };
      TinyColor2.prototype.polyad = function(n2) {
        var hsl = this.toHsl();
        var h3 = hsl.h;
        var result = [this];
        var increment = 360 / n2;
        for (var i3 = 1; i3 < n2; i3++) {
          result.push(new TinyColor2({ h: (h3 + i3 * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
      };
      TinyColor2.prototype.equals = function(color) {
        return this.toRgbString() === new TinyColor2(color).toRgbString();
      };
      return TinyColor2;
    }()
  );

  // node_modules/@ant-design/colors/es/generate.js
  var hueStep = 2;
  var saturationStep = 0.16;
  var saturationStep2 = 0.05;
  var brightnessStep1 = 0.05;
  var brightnessStep2 = 0.15;
  var lightColorCount = 5;
  var darkColorCount = 4;
  var darkColorMap = [{
    index: 7,
    opacity: 0.15
  }, {
    index: 6,
    opacity: 0.25
  }, {
    index: 5,
    opacity: 0.3
  }, {
    index: 5,
    opacity: 0.45
  }, {
    index: 5,
    opacity: 0.65
  }, {
    index: 5,
    opacity: 0.85
  }, {
    index: 4,
    opacity: 0.9
  }, {
    index: 3,
    opacity: 0.95
  }, {
    index: 2,
    opacity: 0.97
  }, {
    index: 1,
    opacity: 0.98
  }];
  function toHsv(_ref) {
    var r3 = _ref.r, g3 = _ref.g, b3 = _ref.b;
    var hsv = rgbToHsv(r3, g3, b3);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v
    };
  }
  function toHex(_ref2) {
    var r3 = _ref2.r, g3 = _ref2.g, b3 = _ref2.b;
    return "#".concat(rgbToHex(r3, g3, b3, false));
  }
  function mix(rgb1, rgb2, amount) {
    var p3 = amount / 100;
    var rgb = {
      r: (rgb2.r - rgb1.r) * p3 + rgb1.r,
      g: (rgb2.g - rgb1.g) * p3 + rgb1.g,
      b: (rgb2.b - rgb1.b) * p3 + rgb1.b
    };
    return rgb;
  }
  function getHue(hsv, i3, light) {
    var hue;
    if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
      hue = light ? Math.round(hsv.h) - hueStep * i3 : Math.round(hsv.h) + hueStep * i3;
    } else {
      hue = light ? Math.round(hsv.h) + hueStep * i3 : Math.round(hsv.h) - hueStep * i3;
    }
    if (hue < 0) {
      hue += 360;
    } else if (hue >= 360) {
      hue -= 360;
    }
    return hue;
  }
  function getSaturation(hsv, i3, light) {
    if (hsv.h === 0 && hsv.s === 0) {
      return hsv.s;
    }
    var saturation;
    if (light) {
      saturation = hsv.s - saturationStep * i3;
    } else if (i3 === darkColorCount) {
      saturation = hsv.s + saturationStep;
    } else {
      saturation = hsv.s + saturationStep2 * i3;
    }
    if (saturation > 1) {
      saturation = 1;
    }
    if (light && i3 === lightColorCount && saturation > 0.1) {
      saturation = 0.1;
    }
    if (saturation < 0.06) {
      saturation = 0.06;
    }
    return Number(saturation.toFixed(2));
  }
  function getValue3(hsv, i3, light) {
    var value;
    if (light) {
      value = hsv.v + brightnessStep1 * i3;
    } else {
      value = hsv.v - brightnessStep2 * i3;
    }
    if (value > 1) {
      value = 1;
    }
    return Number(value.toFixed(2));
  }
  function generate(color) {
    var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var patterns = [];
    var pColor = inputToRGB(color);
    for (var i3 = lightColorCount; i3 > 0; i3 -= 1) {
      var hsv = toHsv(pColor);
      var colorString = toHex(inputToRGB({
        h: getHue(hsv, i3, true),
        s: getSaturation(hsv, i3, true),
        v: getValue3(hsv, i3, true)
      }));
      patterns.push(colorString);
    }
    patterns.push(toHex(pColor));
    for (var _i = 1; _i <= darkColorCount; _i += 1) {
      var _hsv = toHsv(pColor);
      var _colorString = toHex(inputToRGB({
        h: getHue(_hsv, _i),
        s: getSaturation(_hsv, _i),
        v: getValue3(_hsv, _i)
      }));
      patterns.push(_colorString);
    }
    if (opts.theme === "dark") {
      return darkColorMap.map(function(_ref3) {
        var index2 = _ref3.index, opacity = _ref3.opacity;
        var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index2]), opacity * 100));
        return darkColorString;
      });
    }
    return patterns;
  }

  // node_modules/@ant-design/colors/es/index.js
  var presetPrimaryColors = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1677FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666"
  };
  var presetPalettes = {};
  var presetDarkPalettes = {};
  Object.keys(presetPrimaryColors).forEach(function(key) {
    presetPalettes[key] = generate(presetPrimaryColors[key]);
    presetPalettes[key].primary = presetPalettes[key][5];
    presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
      theme: "dark",
      backgroundColor: "#141414"
    });
    presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
  });
  var red = presetPalettes.red;
  var volcano = presetPalettes.volcano;
  var gold = presetPalettes.gold;
  var orange = presetPalettes.orange;
  var yellow = presetPalettes.yellow;
  var lime = presetPalettes.lime;
  var green = presetPalettes.green;
  var cyan = presetPalettes.cyan;
  var blue = presetPalettes.blue;
  var geekblue = presetPalettes.geekblue;
  var purple = presetPalettes.purple;
  var magenta = presetPalettes.magenta;
  var grey = presetPalettes.grey;
  var gray = presetPalettes.grey;

  // node_modules/antd/es/theme/themes/shared/genControlHeight.js
  var genControlHeight = (token2) => {
    const {
      controlHeight
    } = token2;
    return {
      controlHeightSM: controlHeight * 0.75,
      controlHeightXS: controlHeight * 0.5,
      controlHeightLG: controlHeight * 1.25
    };
  };
  var genControlHeight_default = genControlHeight;

  // node_modules/antd/es/theme/themes/shared/genSizeMapToken.js
  function genSizeMapToken(token2) {
    const {
      sizeUnit,
      sizeStep
    } = token2;
    return {
      sizeXXL: sizeUnit * (sizeStep + 8),
      sizeXL: sizeUnit * (sizeStep + 4),
      sizeLG: sizeUnit * (sizeStep + 2),
      sizeMD: sizeUnit * (sizeStep + 1),
      sizeMS: sizeUnit * sizeStep,
      size: sizeUnit * sizeStep,
      sizeSM: sizeUnit * (sizeStep - 1),
      sizeXS: sizeUnit * (sizeStep - 2),
      sizeXXS: sizeUnit * (sizeStep - 3)
      // 4
    };
  }

  // node_modules/antd/es/theme/themes/seed.js
  var defaultPresetColors = {
    blue: "#1677ff",
    purple: "#722ED1",
    cyan: "#13C2C2",
    green: "#52C41A",
    magenta: "#EB2F96",
    pink: "#eb2f96",
    red: "#F5222D",
    orange: "#FA8C16",
    yellow: "#FADB14",
    volcano: "#FA541C",
    geekblue: "#2F54EB",
    gold: "#FAAD14",
    lime: "#A0D911"
  };
  var seedToken = Object.assign(Object.assign({}, defaultPresetColors), {
    // Color
    colorPrimary: "#1677ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1677ff",
    colorTextBase: "",
    colorBgBase: "",
    // Font
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
    fontSize: 14,
    // Line
    lineWidth: 1,
    lineType: "solid",
    // Motion
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
    motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    // Radius
    borderRadius: 6,
    // Size
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    // Control Base
    controlHeight: 32,
    // zIndex
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    // Image
    opacityImage: 1,
    // Wireframe
    wireframe: false,
    // Motion
    motion: true
  });
  var seed_default = seedToken;

  // node_modules/antd/es/theme/themes/shared/genColorMapToken.js
  function genColorMapToken(seed, _ref) {
    let {
      generateColorPalettes: generateColorPalettes2,
      generateNeutralColorPalettes: generateNeutralColorPalettes2
    } = _ref;
    const {
      colorSuccess: colorSuccessBase,
      colorWarning: colorWarningBase,
      colorError: colorErrorBase,
      colorInfo: colorInfoBase,
      colorPrimary: colorPrimaryBase,
      colorBgBase,
      colorTextBase
    } = seed;
    const primaryColors = generateColorPalettes2(colorPrimaryBase);
    const successColors = generateColorPalettes2(colorSuccessBase);
    const warningColors = generateColorPalettes2(colorWarningBase);
    const errorColors = generateColorPalettes2(colorErrorBase);
    const infoColors = generateColorPalettes2(colorInfoBase);
    const neutralColors = generateNeutralColorPalettes2(colorBgBase, colorTextBase);
    return Object.assign(Object.assign({}, neutralColors), {
      colorPrimaryBg: primaryColors[1],
      colorPrimaryBgHover: primaryColors[2],
      colorPrimaryBorder: primaryColors[3],
      colorPrimaryBorderHover: primaryColors[4],
      colorPrimaryHover: primaryColors[5],
      colorPrimary: primaryColors[6],
      colorPrimaryActive: primaryColors[7],
      colorPrimaryTextHover: primaryColors[8],
      colorPrimaryText: primaryColors[9],
      colorPrimaryTextActive: primaryColors[10],
      colorSuccessBg: successColors[1],
      colorSuccessBgHover: successColors[2],
      colorSuccessBorder: successColors[3],
      colorSuccessBorderHover: successColors[4],
      colorSuccessHover: successColors[4],
      colorSuccess: successColors[6],
      colorSuccessActive: successColors[7],
      colorSuccessTextHover: successColors[8],
      colorSuccessText: successColors[9],
      colorSuccessTextActive: successColors[10],
      colorErrorBg: errorColors[1],
      colorErrorBgHover: errorColors[2],
      colorErrorBorder: errorColors[3],
      colorErrorBorderHover: errorColors[4],
      colorErrorHover: errorColors[5],
      colorError: errorColors[6],
      colorErrorActive: errorColors[7],
      colorErrorTextHover: errorColors[8],
      colorErrorText: errorColors[9],
      colorErrorTextActive: errorColors[10],
      colorWarningBg: warningColors[1],
      colorWarningBgHover: warningColors[2],
      colorWarningBorder: warningColors[3],
      colorWarningBorderHover: warningColors[4],
      colorWarningHover: warningColors[4],
      colorWarning: warningColors[6],
      colorWarningActive: warningColors[7],
      colorWarningTextHover: warningColors[8],
      colorWarningText: warningColors[9],
      colorWarningTextActive: warningColors[10],
      colorInfoBg: infoColors[1],
      colorInfoBgHover: infoColors[2],
      colorInfoBorder: infoColors[3],
      colorInfoBorderHover: infoColors[4],
      colorInfoHover: infoColors[4],
      colorInfo: infoColors[6],
      colorInfoActive: infoColors[7],
      colorInfoTextHover: infoColors[8],
      colorInfoText: infoColors[9],
      colorInfoTextActive: infoColors[10],
      colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
      colorWhite: "#fff"
    });
  }

  // node_modules/antd/es/theme/themes/shared/genRadius.js
  var genRadius = (radiusBase) => {
    let radiusLG = radiusBase;
    let radiusSM = radiusBase;
    let radiusXS = radiusBase;
    let radiusOuter = radiusBase;
    if (radiusBase < 6 && radiusBase >= 5) {
      radiusLG = radiusBase + 1;
    } else if (radiusBase < 16 && radiusBase >= 6) {
      radiusLG = radiusBase + 2;
    } else if (radiusBase >= 16) {
      radiusLG = 16;
    }
    if (radiusBase < 7 && radiusBase >= 5) {
      radiusSM = 4;
    } else if (radiusBase < 8 && radiusBase >= 7) {
      radiusSM = 5;
    } else if (radiusBase < 14 && radiusBase >= 8) {
      radiusSM = 6;
    } else if (radiusBase < 16 && radiusBase >= 14) {
      radiusSM = 7;
    } else if (radiusBase >= 16) {
      radiusSM = 8;
    }
    if (radiusBase < 6 && radiusBase >= 2) {
      radiusXS = 1;
    } else if (radiusBase >= 6) {
      radiusXS = 2;
    }
    if (radiusBase > 4 && radiusBase < 8) {
      radiusOuter = 4;
    } else if (radiusBase >= 8) {
      radiusOuter = 6;
    }
    return {
      borderRadius: radiusBase > 16 ? 16 : radiusBase,
      borderRadiusXS: radiusXS,
      borderRadiusSM: radiusSM,
      borderRadiusLG: radiusLG,
      borderRadiusOuter: radiusOuter
    };
  };
  var genRadius_default = genRadius;

  // node_modules/antd/es/theme/themes/shared/genCommonMapToken.js
  function genCommonMapToken(token2) {
    const {
      motionUnit,
      motionBase,
      borderRadius,
      lineWidth
    } = token2;
    return Object.assign({
      // motion
      motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
      motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
      motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
      // line
      lineWidthBold: lineWidth + 1
    }, genRadius_default(borderRadius));
  }

  // node_modules/antd/es/theme/themes/default/colorAlgorithm.js
  var getAlphaColor = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
  var getSolidColor = (baseColor, brightness) => {
    const instance = new TinyColor(baseColor);
    return instance.darken(brightness).toHexString();
  };

  // node_modules/antd/es/theme/themes/default/colors.js
  var generateColorPalettes = (baseColor) => {
    const colors = generate(baseColor);
    return {
      1: colors[0],
      2: colors[1],
      3: colors[2],
      4: colors[3],
      5: colors[4],
      6: colors[5],
      7: colors[6],
      8: colors[4],
      9: colors[5],
      10: colors[6]
      // 8: colors[7],
      // 9: colors[8],
      // 10: colors[9],
    };
  };
  var generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
    const colorBgBase = bgBaseColor || "#fff";
    const colorTextBase = textBaseColor || "#000";
    return {
      colorBgBase,
      colorTextBase,
      colorText: getAlphaColor(colorTextBase, 0.88),
      colorTextSecondary: getAlphaColor(colorTextBase, 0.65),
      colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
      colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),
      colorFill: getAlphaColor(colorTextBase, 0.15),
      colorFillSecondary: getAlphaColor(colorTextBase, 0.06),
      colorFillTertiary: getAlphaColor(colorTextBase, 0.04),
      colorFillQuaternary: getAlphaColor(colorTextBase, 0.02),
      colorBgLayout: getSolidColor(colorBgBase, 4),
      colorBgContainer: getSolidColor(colorBgBase, 0),
      colorBgElevated: getSolidColor(colorBgBase, 0),
      colorBgSpotlight: getAlphaColor(colorTextBase, 0.85),
      colorBorder: getSolidColor(colorBgBase, 15),
      colorBorderSecondary: getSolidColor(colorBgBase, 6)
    };
  };

  // node_modules/antd/es/theme/themes/shared/genFontSizes.js
  function getFontSizes(base) {
    const fontSizes = new Array(10).fill(null).map((_4, index2) => {
      const i3 = index2 - 1;
      const baseSize = base * Math.pow(2.71828, i3 / 5);
      const intSize = index2 > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
      return Math.floor(intSize / 2) * 2;
    });
    fontSizes[1] = base;
    return fontSizes.map((size) => {
      const height = size + 8;
      return {
        size,
        lineHeight: height / size
      };
    });
  }

  // node_modules/antd/es/theme/themes/shared/genFontMapToken.js
  var genFontMapToken = (fontSize) => {
    const fontSizePairs = getFontSizes(fontSize);
    const fontSizes = fontSizePairs.map((pair) => pair.size);
    const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
    return {
      fontSizeSM: fontSizes[0],
      fontSize: fontSizes[1],
      fontSizeLG: fontSizes[2],
      fontSizeXL: fontSizes[3],
      fontSizeHeading1: fontSizes[6],
      fontSizeHeading2: fontSizes[5],
      fontSizeHeading3: fontSizes[4],
      fontSizeHeading4: fontSizes[3],
      fontSizeHeading5: fontSizes[2],
      lineHeight: lineHeights[1],
      lineHeightLG: lineHeights[2],
      lineHeightSM: lineHeights[0],
      lineHeightHeading1: lineHeights[6],
      lineHeightHeading2: lineHeights[5],
      lineHeightHeading3: lineHeights[4],
      lineHeightHeading4: lineHeights[3],
      lineHeightHeading5: lineHeights[2]
    };
  };
  var genFontMapToken_default = genFontMapToken;

  // node_modules/antd/es/theme/themes/default/index.js
  function derivative(token2) {
    const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
      const colors = generate(token2[colorKey]);
      return new Array(10).fill(1).reduce((prev2, _4, i3) => {
        prev2[`${colorKey}-${i3 + 1}`] = colors[i3];
        prev2[`${colorKey}${i3 + 1}`] = colors[i3];
        return prev2;
      }, {});
    }).reduce((prev2, cur) => {
      prev2 = Object.assign(Object.assign({}, prev2), cur);
      return prev2;
    }, {});
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, token2), colorPalettes), genColorMapToken(token2, {
      generateColorPalettes,
      generateNeutralColorPalettes
    })), genFontMapToken_default(token2.fontSize)), genSizeMapToken(token2)), genControlHeight_default(token2)), genCommonMapToken(token2));
  }

  // node_modules/antd/es/theme/util/getAlphaColor.js
  function isStableColor(color) {
    return color >= 0 && color <= 255;
  }
  function getAlphaColor2(frontColor, backgroundColor) {
    const {
      r: fR,
      g: fG,
      b: fB,
      a: originAlpha
    } = new TinyColor(frontColor).toRgb();
    if (originAlpha < 1) {
      return frontColor;
    }
    const {
      r: bR,
      g: bG,
      b: bB
    } = new TinyColor(backgroundColor).toRgb();
    for (let fA = 0.01; fA <= 1; fA += 0.01) {
      const r3 = Math.round((fR - bR * (1 - fA)) / fA);
      const g3 = Math.round((fG - bG * (1 - fA)) / fA);
      const b3 = Math.round((fB - bB * (1 - fA)) / fA);
      if (isStableColor(r3) && isStableColor(g3) && isStableColor(b3)) {
        return new TinyColor({
          r: r3,
          g: g3,
          b: b3,
          a: Math.round(fA * 100) / 100
        }).toRgbString();
      }
    }
    return new TinyColor({
      r: fR,
      g: fG,
      b: fB,
      a: 1
    }).toRgbString();
  }
  var getAlphaColor_default = getAlphaColor2;

  // node_modules/antd/es/theme/util/alias.js
  var __rest = function(s3, e3) {
    var t3 = {};
    for (var p3 in s3)
      if (Object.prototype.hasOwnProperty.call(s3, p3) && e3.indexOf(p3) < 0)
        t3[p3] = s3[p3];
    if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i3 = 0, p3 = Object.getOwnPropertySymbols(s3); i3 < p3.length; i3++) {
        if (e3.indexOf(p3[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i3]))
          t3[p3[i3]] = s3[p3[i3]];
      }
    return t3;
  };
  function formatToken(derivativeToken) {
    const {
      override
    } = derivativeToken, restToken = __rest(derivativeToken, ["override"]);
    const overrideTokens = Object.assign({}, override);
    Object.keys(seed_default).forEach((token2) => {
      delete overrideTokens[token2];
    });
    const mergedToken = Object.assign(Object.assign({}, restToken), overrideTokens);
    const screenXS = 480;
    const screenSM = 576;
    const screenMD = 768;
    const screenLG = 992;
    const screenXL = 1200;
    const screenXXL = 1600;
    if (mergedToken.motion === false) {
      const fastDuration = "0s";
      mergedToken.motionDurationFast = fastDuration;
      mergedToken.motionDurationMid = fastDuration;
      mergedToken.motionDurationSlow = fastDuration;
    }
    const aliasToken = Object.assign(Object.assign(Object.assign({}, mergedToken), {
      colorLink: mergedToken.colorInfoText,
      colorLinkHover: mergedToken.colorInfoHover,
      colorLinkActive: mergedToken.colorInfoActive,
      // ============== Background ============== //
      colorFillContent: mergedToken.colorFillSecondary,
      colorFillContentHover: mergedToken.colorFill,
      colorFillAlter: mergedToken.colorFillQuaternary,
      colorBgContainerDisabled: mergedToken.colorFillTertiary,
      // ============== Split ============== //
      colorBorderBg: mergedToken.colorBgContainer,
      colorSplit: getAlphaColor_default(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
      // ============== Text ============== //
      colorTextPlaceholder: mergedToken.colorTextQuaternary,
      colorTextDisabled: mergedToken.colorTextQuaternary,
      colorTextHeading: mergedToken.colorText,
      colorTextLabel: mergedToken.colorTextSecondary,
      colorTextDescription: mergedToken.colorTextTertiary,
      colorTextLightSolid: mergedToken.colorWhite,
      colorHighlight: mergedToken.colorError,
      colorBgTextHover: mergedToken.colorFillSecondary,
      colorBgTextActive: mergedToken.colorFill,
      colorIcon: mergedToken.colorTextTertiary,
      colorIconHover: mergedToken.colorText,
      colorErrorOutline: getAlphaColor_default(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
      colorWarningOutline: getAlphaColor_default(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
      // Font
      fontSizeIcon: mergedToken.fontSizeSM,
      // Line
      lineWidthFocus: mergedToken.lineWidth * 4,
      // Control
      lineWidth: mergedToken.lineWidth,
      controlOutlineWidth: mergedToken.lineWidth * 2,
      // Checkbox size and expand icon size
      controlInteractiveSize: mergedToken.controlHeight / 2,
      controlItemBgHover: mergedToken.colorFillTertiary,
      controlItemBgActive: mergedToken.colorPrimaryBg,
      controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
      controlItemBgActiveDisabled: mergedToken.colorFill,
      controlTmpOutline: mergedToken.colorFillQuaternary,
      controlOutline: getAlphaColor_default(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
      lineType: mergedToken.lineType,
      borderRadius: mergedToken.borderRadius,
      borderRadiusXS: mergedToken.borderRadiusXS,
      borderRadiusSM: mergedToken.borderRadiusSM,
      borderRadiusLG: mergedToken.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: "none",
      linkHoverDecoration: "none",
      linkFocusDecoration: "none",
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: mergedToken.sizeXXS,
      paddingXS: mergedToken.sizeXS,
      paddingSM: mergedToken.sizeSM,
      padding: mergedToken.size,
      paddingMD: mergedToken.sizeMD,
      paddingLG: mergedToken.sizeLG,
      paddingXL: mergedToken.sizeXL,
      paddingContentHorizontalLG: mergedToken.sizeLG,
      paddingContentVerticalLG: mergedToken.sizeMS,
      paddingContentHorizontal: mergedToken.sizeMS,
      paddingContentVertical: mergedToken.sizeSM,
      paddingContentHorizontalSM: mergedToken.size,
      paddingContentVerticalSM: mergedToken.sizeXS,
      marginXXS: mergedToken.sizeXXS,
      marginXS: mergedToken.sizeXS,
      marginSM: mergedToken.sizeSM,
      margin: mergedToken.size,
      marginMD: mergedToken.sizeMD,
      marginLG: mergedToken.sizeLG,
      marginXL: mergedToken.sizeXL,
      marginXXL: mergedToken.sizeXXL,
      boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS,
      screenXSMin: screenXS,
      screenXSMax: screenSM - 1,
      screenSM,
      screenSMMin: screenSM,
      screenSMMax: screenMD - 1,
      screenMD,
      screenMDMin: screenMD,
      screenMDMax: screenLG - 1,
      screenLG,
      screenLGMin: screenLG,
      screenLGMax: screenXL - 1,
      screenXL,
      screenXLMin: screenXL,
      screenXLMax: screenXXL - 1,
      screenXXL,
      screenXXLMin: screenXXL,
      boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
      boxShadowCard: `
      0 1px 2px -2px ${new TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
    }), overrideTokens);
    return aliasToken;
  }

  // node_modules/antd/es/theme/util/genComponentStyleHook.js
  init_react();

  // node_modules/antd/es/config-provider/context.js
  init_react();
  var defaultIconPrefixCls = "anticon";
  var defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls)
      return customizePrefixCls;
    return suffixCls ? `ant-${suffixCls}` : "ant";
  };
  var ConfigContext = /* @__PURE__ */ G({
    // We provide a default function for Context without provider
    getPrefixCls: defaultGetPrefixCls,
    iconPrefixCls: defaultIconPrefixCls
  });
  var {
    Consumer: ConfigConsumer
  } = ConfigContext;

  // node_modules/antd/es/style/index.js
  var textEllipsis = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  };
  var resetComponent = (token2) => ({
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: token2.colorText,
    fontSize: token2.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: token2.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: token2.fontFamily
  });
  var resetIcon = () => ({
    display: "inline-flex",
    alignItems: "center",
    color: "inherit",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
    verticalAlign: "-0.125em",
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "> *": {
      lineHeight: 1
    },
    svg: {
      display: "inline-block"
    }
  });
  var genLinkStyle = (token2) => ({
    a: {
      color: token2.colorLink,
      textDecoration: token2.linkDecoration,
      backgroundColor: "transparent",
      outline: "none",
      cursor: "pointer",
      transition: `color ${token2.motionDurationSlow}`,
      "-webkit-text-decoration-skip": "objects",
      "&:hover": {
        color: token2.colorLinkHover
      },
      "&:active": {
        color: token2.colorLinkActive
      },
      [`&:active,
  &:hover`]: {
        textDecoration: token2.linkHoverDecoration,
        outline: 0
      },
      // https://github.com/ant-design/ant-design/issues/22503
      "&:focus": {
        textDecoration: token2.linkFocusDecoration,
        outline: 0
      },
      "&[disabled]": {
        color: token2.colorTextDisabled,
        cursor: "not-allowed"
      }
    }
  });
  var genCommonStyle = (token2, componentPrefixCls) => {
    const {
      fontFamily,
      fontSize
    } = token2;
    const rootPrefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
    return {
      [rootPrefixSelector]: {
        fontFamily,
        fontSize,
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        },
        [rootPrefixSelector]: {
          boxSizing: "border-box",
          "&::before, &::after": {
            boxSizing: "border-box"
          }
        }
      }
    };
  };

  // node_modules/antd/es/theme/util/genComponentStyleHook.js
  function genComponentStyleHook(component, styleFn, getDefaultToken, options) {
    return (prefixCls) => {
      const [theme, token2, hashId] = useToken();
      const {
        getPrefixCls,
        iconPrefixCls,
        csp
      } = q2(ConfigContext);
      const rootPrefixCls = getPrefixCls();
      const sharedConfig = {
        theme,
        token: token2,
        hashId,
        nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce
      };
      useStyleRegister(Object.assign(Object.assign({}, sharedConfig), {
        path: ["Shared", rootPrefixCls]
      }), () => [{
        // Link
        "&": genLinkStyle(token2)
      }]);
      return [useStyleRegister(Object.assign(Object.assign({}, sharedConfig), {
        path: [component, prefixCls, iconPrefixCls]
      }), () => {
        const {
          token: proxyToken,
          flush
        } = statisticToken(token2);
        const defaultComponentToken = typeof getDefaultToken === "function" ? getDefaultToken(proxyToken) : getDefaultToken;
        const mergedComponentToken = Object.assign(Object.assign({}, defaultComponentToken), token2[component]);
        const componentCls = `.${prefixCls}`;
        const mergedToken = merge(proxyToken, {
          componentCls,
          prefixCls,
          iconCls: `.${iconPrefixCls}`,
          antCls: `.${rootPrefixCls}`
        }, mergedComponentToken);
        const styleInterpolation = styleFn(mergedToken, {
          hashId,
          prefixCls,
          rootPrefixCls,
          iconPrefixCls,
          overrideComponentToken: token2[component]
        });
        flush(component, mergedComponentToken);
        return [(options === null || options === void 0 ? void 0 : options.resetStyle) === false ? null : genCommonStyle(token2, prefixCls), styleInterpolation];
      }), hashId];
    };
  }

  // node_modules/antd/es/theme/util/statistic.js
  var enableStatistic = true;
  var recording = true;
  function merge() {
    for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
      objs[_key] = arguments[_key];
    }
    if (!enableStatistic) {
      return Object.assign.apply(Object, [{}].concat(objs));
    }
    recording = false;
    const ret = {};
    objs.forEach((obj) => {
      const keys = Object.keys(obj);
      keys.forEach((key) => {
        Object.defineProperty(ret, key, {
          configurable: true,
          enumerable: true,
          get: () => obj[key]
        });
      });
    });
    recording = true;
    return ret;
  }
  var statistic = {};
  function noop3() {
  }
  function statisticToken(token2) {
    let tokenKeys2;
    let proxy = token2;
    let flush = noop3;
    if (enableStatistic) {
      tokenKeys2 = /* @__PURE__ */ new Set();
      proxy = new Proxy(token2, {
        get(obj, prop) {
          if (recording) {
            tokenKeys2.add(prop);
          }
          return obj[prop];
        }
      });
      flush = (componentName, componentToken) => {
        statistic[componentName] = {
          global: Array.from(tokenKeys2),
          component: componentToken
        };
      };
    }
    return {
      token: proxy,
      keys: tokenKeys2,
      flush
    };
  }

  // node_modules/antd/es/theme/internal.js
  var defaultTheme2 = createTheme(derivative);
  var defaultConfig2 = {
    token: seed_default,
    hashed: true
  };
  var DesignTokenContext = /* @__PURE__ */ Cn.createContext(defaultConfig2);
  function useToken() {
    const {
      token: rootDesignToken,
      hashed,
      theme,
      components
    } = Cn.useContext(DesignTokenContext);
    const salt = `${version_default2}-${hashed || ""}`;
    const mergedTheme = theme || defaultTheme2;
    const [token2, hashId] = useCacheToken(mergedTheme, [seed_default, rootDesignToken], {
      salt,
      override: Object.assign({
        override: rootDesignToken
      }, components),
      formatToken
    });
    return [mergedTheme, token2, hashed ? hashId : ""];
  }

  // node_modules/antd/es/config-provider/cssVariables.js
  var dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
  function getStyle(globalPrefixCls2, theme) {
    const variables = {};
    const formatColor = (color, updater) => {
      let clone = color.clone();
      clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
      return clone.toRgbString();
    };
    const fillColor = (colorVal, type4) => {
      const baseColor = new TinyColor(colorVal);
      const colorPalettes = generate(baseColor.toRgbString());
      variables[`${type4}-color`] = formatColor(baseColor);
      variables[`${type4}-color-disabled`] = colorPalettes[1];
      variables[`${type4}-color-hover`] = colorPalettes[4];
      variables[`${type4}-color-active`] = colorPalettes[6];
      variables[`${type4}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
      variables[`${type4}-color-deprecated-bg`] = colorPalettes[0];
      variables[`${type4}-color-deprecated-border`] = colorPalettes[2];
    };
    if (theme.primaryColor) {
      fillColor(theme.primaryColor, "primary");
      const primaryColor = new TinyColor(theme.primaryColor);
      const primaryColors = generate(primaryColor.toRgbString());
      primaryColors.forEach((color, index2) => {
        variables[`primary-${index2 + 1}`] = color;
      });
      variables["primary-color-deprecated-l-35"] = formatColor(primaryColor, (c3) => c3.lighten(35));
      variables["primary-color-deprecated-l-20"] = formatColor(primaryColor, (c3) => c3.lighten(20));
      variables["primary-color-deprecated-t-20"] = formatColor(primaryColor, (c3) => c3.tint(20));
      variables["primary-color-deprecated-t-50"] = formatColor(primaryColor, (c3) => c3.tint(50));
      variables["primary-color-deprecated-f-12"] = formatColor(primaryColor, (c3) => c3.setAlpha(c3.getAlpha() * 0.12));
      const primaryActiveColor = new TinyColor(primaryColors[0]);
      variables["primary-color-active-deprecated-f-30"] = formatColor(primaryActiveColor, (c3) => c3.setAlpha(c3.getAlpha() * 0.3));
      variables["primary-color-active-deprecated-d-02"] = formatColor(primaryActiveColor, (c3) => c3.darken(2));
    }
    if (theme.successColor) {
      fillColor(theme.successColor, "success");
    }
    if (theme.warningColor) {
      fillColor(theme.warningColor, "warning");
    }
    if (theme.errorColor) {
      fillColor(theme.errorColor, "error");
    }
    if (theme.infoColor) {
      fillColor(theme.infoColor, "info");
    }
    const cssList = Object.keys(variables).map((key) => `--${globalPrefixCls2}-${key}: ${variables[key]};`);
    return `
  :root {
    ${cssList.join("\n")}
  }
  `.trim();
  }
  function registerTheme(globalPrefixCls2, theme) {
    const style3 = getStyle(globalPrefixCls2, theme);
    if (canUseDom()) {
      updateCSS(style3, `${dynamicStyleMark}-dynamic-theme`);
    } else {
      true ? warning_default2(false, "ConfigProvider", "SSR do not support dynamic theme with css variables.") : void 0;
    }
  }

  // node_modules/antd/es/config-provider/DisabledContext.js
  init_react();
  var DisabledContext = /* @__PURE__ */ G(false);
  var DisabledContextProvider = (_ref) => {
    let {
      children,
      disabled
    } = _ref;
    const originDisabled = q2(DisabledContext);
    return /* @__PURE__ */ y(DisabledContext.Provider, {
      value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
    }, children);
  };
  var DisabledContext_default = DisabledContext;

  // node_modules/antd/es/config-provider/hooks/useConfig.js
  init_react();

  // node_modules/antd/es/config-provider/SizeContext.js
  init_react();

  // node_modules/antd/es/config-provider/hooks/useSize.js
  init_react();
  var useSize = (customSize) => {
    const size = Cn.useContext(SizeContext_default);
    const mergedSize = Cn.useMemo(() => {
      if (!customSize) {
        return size;
      }
      if (typeof customSize === "string") {
        return customSize !== null && customSize !== void 0 ? customSize : size;
      }
      if (customSize instanceof Function) {
        return customSize(size);
      }
      return size;
    }, [customSize, size]);
    return mergedSize;
  };
  var useSize_default = useSize;

  // node_modules/antd/es/config-provider/SizeContext.js
  var SizeContext = /* @__PURE__ */ G(void 0);
  var SizeContextProvider = (_ref) => {
    let {
      children,
      size
    } = _ref;
    const mergedSize = useSize_default(size);
    return /* @__PURE__ */ y(SizeContext.Provider, {
      value: mergedSize
    }, children);
  };
  var SizeContext_default = SizeContext;

  // node_modules/antd/es/config-provider/hooks/useConfig.js
  function useConfig() {
    const componentDisabled = q2(DisabledContext_default);
    const componentSize = q2(SizeContext_default);
    return {
      componentDisabled,
      componentSize
    };
  }
  var useConfig_default = useConfig;

  // node_modules/antd/es/config-provider/hooks/useTheme.js
  function useTheme3(theme, parentTheme) {
    const themeConfig = theme || {};
    const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? defaultConfig2 : parentTheme;
    const mergedTheme = useMemo(() => {
      if (!theme) {
        return parentTheme;
      }
      const mergedComponents = Object.assign({}, parentThemeConfig.components);
      Object.keys(theme.components || {}).forEach((componentName) => {
        mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
      });
      return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
        token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
        components: mergedComponents
      });
    }, [themeConfig, parentThemeConfig], (prev2, next2) => prev2.some((prevTheme, index2) => {
      const nextTheme = next2[index2];
      return !isEqual_default(prevTheme, nextTheme, true);
    }));
    return mergedTheme;
  }

  // node_modules/rc-motion/es/CSSMotion.js
  var import_classnames = __toESM(require_classnames());
  init_react();
  init_react();

  // node_modules/rc-motion/es/context.js
  init_react();
  var _excluded26 = ["children"];
  var Context2 = /* @__PURE__ */ G({});
  function MotionProvider(_ref) {
    var children = _ref.children, props = _objectWithoutProperties(_ref, _excluded26);
    return /* @__PURE__ */ y(Context2.Provider, {
      value: props
    }, children);
  }

  // node_modules/rc-motion/es/DomWrapper.js
  init_react();
  var DomWrapper2 = /* @__PURE__ */ function(_React$Component) {
    _inherits(DomWrapper3, _React$Component);
    var _super = _createSuper(DomWrapper3);
    function DomWrapper3() {
      _classCallCheck(this, DomWrapper3);
      return _super.apply(this, arguments);
    }
    _createClass(DomWrapper3, [{
      key: "render",
      value: function render() {
        return this.props.children;
      }
    }]);
    return DomWrapper3;
  }(b);
  var DomWrapper_default = DomWrapper2;

  // node_modules/rc-util/es/hooks/useState.js
  init_react();
  function useSafeState(defaultValue) {
    var destroyRef = _2(false);
    var _React$useState = h2(defaultValue), _React$useState2 = _slicedToArray(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
    p2(function() {
      destroyRef.current = false;
      return function() {
        destroyRef.current = true;
      };
    }, []);
    function safeSetState(updater, ignoreDestroy) {
      if (ignoreDestroy && destroyRef.current) {
        return;
      }
      setValue(updater);
    }
    return [value, safeSetState];
  }

  // node_modules/rc-motion/es/hooks/useStatus.js
  init_react();
  init_react();

  // node_modules/rc-motion/es/interface.js
  var STATUS_NONE = "none";
  var STATUS_APPEAR = "appear";
  var STATUS_ENTER = "enter";
  var STATUS_LEAVE = "leave";
  var STEP_NONE = "none";
  var STEP_PREPARE = "prepare";
  var STEP_START = "start";
  var STEP_ACTIVE = "active";
  var STEP_ACTIVATED = "end";
  var STEP_PREPARED = "prepared";

  // node_modules/rc-motion/es/hooks/useDomMotionEvents.js
  init_react();
  init_react();

  // node_modules/rc-motion/es/util/motion.js
  function makePrefixMap(styleProp, eventName) {
    var prefixes = {};
    prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
    prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
    prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
    prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
    prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
    return prefixes;
  }
  function getVendorPrefixes(domSupport, win) {
    var prefixes = {
      animationend: makePrefixMap("Animation", "AnimationEnd"),
      transitionend: makePrefixMap("Transition", "TransitionEnd")
    };
    if (domSupport) {
      if (!("AnimationEvent" in win)) {
        delete prefixes.animationend.animation;
      }
      if (!("TransitionEvent" in win)) {
        delete prefixes.transitionend.transition;
      }
    }
    return prefixes;
  }
  var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window !== "undefined" ? window : {});
  var style2 = {};
  if (canUseDom()) {
    _document$createEleme = document.createElement("div");
    style2 = _document$createEleme.style;
  }
  var _document$createEleme;
  var prefixedEventNames = {};
  function getVendorPrefixedEventName(eventName) {
    if (prefixedEventNames[eventName]) {
      return prefixedEventNames[eventName];
    }
    var prefixMap = vendorPrefixes[eventName];
    if (prefixMap) {
      var stylePropList = Object.keys(prefixMap);
      var len = stylePropList.length;
      for (var i3 = 0; i3 < len; i3 += 1) {
        var styleProp = stylePropList[i3];
        if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style2) {
          prefixedEventNames[eventName] = prefixMap[styleProp];
          return prefixedEventNames[eventName];
        }
      }
    }
    return "";
  }
  var internalAnimationEndName = getVendorPrefixedEventName("animationend");
  var internalTransitionEndName = getVendorPrefixedEventName("transitionend");
  var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
  var animationEndName = internalAnimationEndName || "animationend";
  var transitionEndName = internalTransitionEndName || "transitionend";
  function getTransitionName(transitionName, transitionType) {
    if (!transitionName)
      return null;
    if (_typeof(transitionName) === "object") {
      var type4 = transitionType.replace(/-\w/g, function(match2) {
        return match2[1].toUpperCase();
      });
      return transitionName[type4];
    }
    return "".concat(transitionName, "-").concat(transitionType);
  }

  // node_modules/rc-motion/es/hooks/useDomMotionEvents.js
  var useDomMotionEvents_default = function(callback) {
    var cacheElementRef = _2();
    var callbackRef = _2(callback);
    callbackRef.current = callback;
    var onInternalMotionEnd = T2(function(event) {
      callbackRef.current(event);
    }, []);
    function removeMotionEvents(element) {
      if (element) {
        element.removeEventListener(transitionEndName, onInternalMotionEnd);
        element.removeEventListener(animationEndName, onInternalMotionEnd);
      }
    }
    function patchMotionEvents(element) {
      if (cacheElementRef.current && cacheElementRef.current !== element) {
        removeMotionEvents(cacheElementRef.current);
      }
      if (element && element !== cacheElementRef.current) {
        element.addEventListener(transitionEndName, onInternalMotionEnd);
        element.addEventListener(animationEndName, onInternalMotionEnd);
        cacheElementRef.current = element;
      }
    }
    p2(function() {
      return function() {
        removeMotionEvents(cacheElementRef.current);
      };
    }, []);
    return [patchMotionEvents, removeMotionEvents];
  };

  // node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js
  init_react();
  var useIsomorphicLayoutEffect2 = canUseDom() ? y2 : p2;
  var useIsomorphicLayoutEffect_default = useIsomorphicLayoutEffect2;

  // node_modules/rc-motion/es/hooks/useStepQueue.js
  init_react();

  // node_modules/rc-motion/es/hooks/useNextFrame.js
  init_react();

  // node_modules/rc-util/es/raf.js
  var raf = function raf2(callback) {
    return +setTimeout(callback, 16);
  };
  var caf = function caf2(num) {
    return clearTimeout(num);
  };
  if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
    raf = function raf3(callback) {
      return window.requestAnimationFrame(callback);
    };
    caf = function caf3(handle) {
      return window.cancelAnimationFrame(handle);
    };
  }
  var rafUUID = 0;
  var rafIds = /* @__PURE__ */ new Map();
  function cleanup(id) {
    rafIds.delete(id);
  }
  var wrapperRaf = function wrapperRaf2(callback) {
    var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    rafUUID += 1;
    var id = rafUUID;
    function callRef(leftTimes) {
      if (leftTimes === 0) {
        cleanup(id);
        callback();
      } else {
        var realId = raf(function() {
          callRef(leftTimes - 1);
        });
        rafIds.set(id, realId);
      }
    }
    callRef(times);
    return id;
  };
  wrapperRaf.cancel = function(id) {
    var realId = rafIds.get(id);
    cleanup(realId);
    return caf(realId);
  };
  var raf_default = wrapperRaf;

  // node_modules/rc-motion/es/hooks/useNextFrame.js
  var useNextFrame_default = function() {
    var nextFrameRef = _2(null);
    function cancelNextFrame() {
      raf_default.cancel(nextFrameRef.current);
    }
    function nextFrame(callback) {
      var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
      cancelNextFrame();
      var nextFrameId = raf_default(function() {
        if (delay <= 1) {
          callback({
            isCanceled: function isCanceled() {
              return nextFrameId !== nextFrameRef.current;
            }
          });
        } else {
          nextFrame(callback, delay - 1);
        }
      });
      nextFrameRef.current = nextFrameId;
    }
    p2(function() {
      return function() {
        cancelNextFrame();
      };
    }, []);
    return [nextFrame, cancelNextFrame];
  };

  // node_modules/rc-motion/es/hooks/useStepQueue.js
  var FULL_STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
  var SIMPLE_STEP_QUEUE = [STEP_PREPARE, STEP_PREPARED];
  var SkipStep = false;
  var DoStep = true;
  function isActive(step) {
    return step === STEP_ACTIVE || step === STEP_ACTIVATED;
  }
  var useStepQueue_default = function(status, prepareOnly, callback) {
    var _useState = useSafeState(STEP_NONE), _useState2 = _slicedToArray(_useState, 2), step = _useState2[0], setStep = _useState2[1];
    var _useNextFrame = useNextFrame_default(), _useNextFrame2 = _slicedToArray(_useNextFrame, 2), nextFrame = _useNextFrame2[0], cancelNextFrame = _useNextFrame2[1];
    function startQueue() {
      setStep(STEP_PREPARE, true);
    }
    var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
    useIsomorphicLayoutEffect_default(function() {
      if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
        var index2 = STEP_QUEUE.indexOf(step);
        var nextStep = STEP_QUEUE[index2 + 1];
        var result = callback(step);
        if (result === SkipStep) {
          setStep(nextStep, true);
        } else if (nextStep) {
          nextFrame(function(info) {
            function doNext() {
              if (info.isCanceled())
                return;
              setStep(nextStep, true);
            }
            if (result === true) {
              doNext();
            } else {
              Promise.resolve(result).then(doNext);
            }
          });
        }
      }
    }, [status, step]);
    p2(function() {
      return function() {
        cancelNextFrame();
      };
    }, []);
    return [startQueue, step];
  };

  // node_modules/rc-motion/es/hooks/useStatus.js
  function useStatus(supportMotion, visible, getElement, _ref) {
    var _ref$motionEnter = _ref.motionEnter, motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter, _ref$motionAppear = _ref.motionAppear, motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear, _ref$motionLeave = _ref.motionLeave, motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave, motionDeadline = _ref.motionDeadline, motionLeaveImmediately = _ref.motionLeaveImmediately, onAppearPrepare = _ref.onAppearPrepare, onEnterPrepare = _ref.onEnterPrepare, onLeavePrepare = _ref.onLeavePrepare, onAppearStart = _ref.onAppearStart, onEnterStart = _ref.onEnterStart, onLeaveStart = _ref.onLeaveStart, onAppearActive = _ref.onAppearActive, onEnterActive = _ref.onEnterActive, onLeaveActive = _ref.onLeaveActive, onAppearEnd = _ref.onAppearEnd, onEnterEnd = _ref.onEnterEnd, onLeaveEnd = _ref.onLeaveEnd, onVisibleChanged = _ref.onVisibleChanged;
    var _useState = useSafeState(), _useState2 = _slicedToArray(_useState, 2), asyncVisible = _useState2[0], setAsyncVisible = _useState2[1];
    var _useState3 = useSafeState(STATUS_NONE), _useState4 = _slicedToArray(_useState3, 2), status = _useState4[0], setStatus = _useState4[1];
    var _useState5 = useSafeState(null), _useState6 = _slicedToArray(_useState5, 2), style3 = _useState6[0], setStyle = _useState6[1];
    var mountedRef = _2(false);
    var deadlineRef = _2(null);
    function getDomElement() {
      return getElement();
    }
    var activeRef = _2(false);
    function updateMotionEndStatus() {
      setStatus(STATUS_NONE, true);
      setStyle(null, true);
    }
    function onInternalMotionEnd(event) {
      var element = getDomElement();
      if (event && !event.deadline && event.target !== element) {
        return;
      }
      var currentActive = activeRef.current;
      var canEnd;
      if (status === STATUS_APPEAR && currentActive) {
        canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
      } else if (status === STATUS_ENTER && currentActive) {
        canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
      } else if (status === STATUS_LEAVE && currentActive) {
        canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
      }
      if (status !== STATUS_NONE && currentActive && canEnd !== false) {
        updateMotionEndStatus();
      }
    }
    var _useDomMotionEvents = useDomMotionEvents_default(onInternalMotionEnd), _useDomMotionEvents2 = _slicedToArray(_useDomMotionEvents, 1), patchMotionEvents = _useDomMotionEvents2[0];
    var getEventHandlers = function getEventHandlers2(targetStatus) {
      var _ref2, _ref3, _ref4;
      switch (targetStatus) {
        case STATUS_APPEAR:
          return _ref2 = {}, _defineProperty(_ref2, STEP_PREPARE, onAppearPrepare), _defineProperty(_ref2, STEP_START, onAppearStart), _defineProperty(_ref2, STEP_ACTIVE, onAppearActive), _ref2;
        case STATUS_ENTER:
          return _ref3 = {}, _defineProperty(_ref3, STEP_PREPARE, onEnterPrepare), _defineProperty(_ref3, STEP_START, onEnterStart), _defineProperty(_ref3, STEP_ACTIVE, onEnterActive), _ref3;
        case STATUS_LEAVE:
          return _ref4 = {}, _defineProperty(_ref4, STEP_PREPARE, onLeavePrepare), _defineProperty(_ref4, STEP_START, onLeaveStart), _defineProperty(_ref4, STEP_ACTIVE, onLeaveActive), _ref4;
        default:
          return {};
      }
    };
    var eventHandlers = F2(function() {
      return getEventHandlers(status);
    }, [status]);
    var _useStepQueue = useStepQueue_default(status, !supportMotion, function(newStep) {
      if (newStep === STEP_PREPARE) {
        var onPrepare = eventHandlers[STEP_PREPARE];
        if (!onPrepare) {
          return SkipStep;
        }
        return onPrepare(getDomElement());
      }
      if (step in eventHandlers) {
        var _eventHandlers$step;
        setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
      }
      if (step === STEP_ACTIVE) {
        patchMotionEvents(getDomElement());
        if (motionDeadline > 0) {
          clearTimeout(deadlineRef.current);
          deadlineRef.current = setTimeout(function() {
            onInternalMotionEnd({
              deadline: true
            });
          }, motionDeadline);
        }
      }
      if (step === STEP_PREPARED) {
        updateMotionEndStatus();
      }
      return DoStep;
    }), _useStepQueue2 = _slicedToArray(_useStepQueue, 2), startStep = _useStepQueue2[0], step = _useStepQueue2[1];
    var active = isActive(step);
    activeRef.current = active;
    useIsomorphicLayoutEffect_default(function() {
      setAsyncVisible(visible);
      var isMounted = mountedRef.current;
      mountedRef.current = true;
      var nextStatus;
      if (!isMounted && visible && motionAppear) {
        nextStatus = STATUS_APPEAR;
      }
      if (isMounted && visible && motionEnter) {
        nextStatus = STATUS_ENTER;
      }
      if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
        nextStatus = STATUS_LEAVE;
      }
      var nextEventHandlers = getEventHandlers(nextStatus);
      if (nextStatus && (supportMotion || nextEventHandlers[STEP_PREPARE])) {
        setStatus(nextStatus);
        startStep();
      } else {
        setStatus(STATUS_NONE);
      }
    }, [visible]);
    p2(function() {
      if (
        // Cancel appear
        status === STATUS_APPEAR && !motionAppear || // Cancel enter
        status === STATUS_ENTER && !motionEnter || // Cancel leave
        status === STATUS_LEAVE && !motionLeave
      ) {
        setStatus(STATUS_NONE);
      }
    }, [motionAppear, motionEnter, motionLeave]);
    p2(function() {
      return function() {
        mountedRef.current = false;
        clearTimeout(deadlineRef.current);
      };
    }, []);
    var firstMountChangeRef = _2(false);
    p2(function() {
      if (asyncVisible) {
        firstMountChangeRef.current = true;
      }
      if (asyncVisible !== void 0 && status === STATUS_NONE) {
        if (firstMountChangeRef.current || asyncVisible) {
          onVisibleChanged === null || onVisibleChanged === void 0 ? void 0 : onVisibleChanged(asyncVisible);
        }
        firstMountChangeRef.current = true;
      }
    }, [asyncVisible, status]);
    var mergedStyle = style3;
    if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
      mergedStyle = _objectSpread2({
        transition: "none"
      }, mergedStyle);
    }
    return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
  }

  // node_modules/rc-motion/es/CSSMotion.js
  function genCSSMotion(config) {
    var transitionSupport = config;
    if (_typeof(config) === "object") {
      transitionSupport = config.transitionSupport;
    }
    function isSupportTransition(props, contextMotion) {
      return !!(props.motionName && transitionSupport && contextMotion !== false);
    }
    var CSSMotion = /* @__PURE__ */ k3(function(props, ref) {
      var _props$visible = props.visible, visible = _props$visible === void 0 ? true : _props$visible, _props$removeOnLeave = props.removeOnLeave, removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave, forceRender = props.forceRender, children = props.children, motionName = props.motionName, leavedClassName = props.leavedClassName, eventProps = props.eventProps;
      var _React$useContext = q2(Context2), contextMotion = _React$useContext.motion;
      var supportMotion = isSupportTransition(props, contextMotion);
      var nodeRef = _2();
      var wrapperNodeRef = _2();
      function getDomElement() {
        try {
          return nodeRef.current instanceof HTMLElement ? nodeRef.current : findDOMNode(wrapperNodeRef.current);
        } catch (e3) {
          return null;
        }
      }
      var _useStatus = useStatus(supportMotion, visible, getDomElement, props), _useStatus2 = _slicedToArray(_useStatus, 4), status = _useStatus2[0], statusStep = _useStatus2[1], statusStyle = _useStatus2[2], mergedVisible = _useStatus2[3];
      var renderedRef = _2(mergedVisible);
      if (mergedVisible) {
        renderedRef.current = true;
      }
      var setNodeRef = T2(function(node2) {
        nodeRef.current = node2;
        fillRef(ref, node2);
      }, [ref]);
      var motionChildren;
      var mergedProps = _objectSpread2(_objectSpread2({}, eventProps), {}, {
        visible
      });
      if (!children) {
        motionChildren = null;
      } else if (status === STATUS_NONE) {
        if (mergedVisible) {
          motionChildren = children(_objectSpread2({}, mergedProps), setNodeRef);
        } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
          motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
            className: leavedClassName
          }), setNodeRef);
        } else if (forceRender || !removeOnLeave && !leavedClassName) {
          motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
            style: {
              display: "none"
            }
          }), setNodeRef);
        } else {
          motionChildren = null;
        }
      } else {
        var _classNames;
        var statusSuffix;
        if (statusStep === STEP_PREPARE) {
          statusSuffix = "prepare";
        } else if (isActive(statusStep)) {
          statusSuffix = "active";
        } else if (statusStep === STEP_START) {
          statusSuffix = "start";
        }
        var motionCls = getTransitionName(motionName, "".concat(status, "-").concat(statusSuffix));
        motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
          className: (0, import_classnames.default)(getTransitionName(motionName, status), (_classNames = {}, _defineProperty(_classNames, motionCls, motionCls && statusSuffix), _defineProperty(_classNames, motionName, typeof motionName === "string"), _classNames)),
          style: statusStyle
        }), setNodeRef);
      }
      if (/* @__PURE__ */ an(motionChildren) && supportRef(motionChildren)) {
        var _ref = motionChildren, originNodeRef = _ref.ref;
        if (!originNodeRef) {
          motionChildren = /* @__PURE__ */ sn(motionChildren, {
            ref: setNodeRef
          });
        }
      }
      return /* @__PURE__ */ y(DomWrapper_default, {
        ref: wrapperNodeRef
      }, motionChildren);
    });
    CSSMotion.displayName = "CSSMotion";
    return CSSMotion;
  }
  var CSSMotion_default = genCSSMotion(supportTransition);

  // node_modules/rc-motion/es/CSSMotionList.js
  init_react();

  // node_modules/rc-motion/es/util/diff.js
  var STATUS_ADD = "add";
  var STATUS_KEEP = "keep";
  var STATUS_REMOVE = "remove";
  var STATUS_REMOVED = "removed";
  function wrapKeyToObject(key) {
    var keyObj;
    if (key && _typeof(key) === "object" && "key" in key) {
      keyObj = key;
    } else {
      keyObj = {
        key
      };
    }
    return _objectSpread2(_objectSpread2({}, keyObj), {}, {
      key: String(keyObj.key)
    });
  }
  function parseKeys() {
    var keys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return keys.map(wrapKeyToObject);
  }
  function diffKeys() {
    var prevKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var currentKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var list = [];
    var currentIndex = 0;
    var currentLen = currentKeys.length;
    var prevKeyObjects = parseKeys(prevKeys);
    var currentKeyObjects = parseKeys(currentKeys);
    prevKeyObjects.forEach(function(keyObj) {
      var hit = false;
      for (var i3 = currentIndex; i3 < currentLen; i3 += 1) {
        var currentKeyObj = currentKeyObjects[i3];
        if (currentKeyObj.key === keyObj.key) {
          if (currentIndex < i3) {
            list = list.concat(currentKeyObjects.slice(currentIndex, i3).map(function(obj) {
              return _objectSpread2(_objectSpread2({}, obj), {}, {
                status: STATUS_ADD
              });
            }));
            currentIndex = i3;
          }
          list.push(_objectSpread2(_objectSpread2({}, currentKeyObj), {}, {
            status: STATUS_KEEP
          }));
          currentIndex += 1;
          hit = true;
          break;
        }
      }
      if (!hit) {
        list.push(_objectSpread2(_objectSpread2({}, keyObj), {}, {
          status: STATUS_REMOVE
        }));
      }
    });
    if (currentIndex < currentLen) {
      list = list.concat(currentKeyObjects.slice(currentIndex).map(function(obj) {
        return _objectSpread2(_objectSpread2({}, obj), {}, {
          status: STATUS_ADD
        });
      }));
    }
    var keys = {};
    list.forEach(function(_ref) {
      var key = _ref.key;
      keys[key] = (keys[key] || 0) + 1;
    });
    var duplicatedKeys = Object.keys(keys).filter(function(key) {
      return keys[key] > 1;
    });
    duplicatedKeys.forEach(function(matchKey) {
      list = list.filter(function(_ref2) {
        var key = _ref2.key, status = _ref2.status;
        return key !== matchKey || status !== STATUS_REMOVE;
      });
      list.forEach(function(node2) {
        if (node2.key === matchKey) {
          node2.status = STATUS_KEEP;
        }
      });
    });
    return list;
  }

  // node_modules/rc-motion/es/CSSMotionList.js
  var _excluded27 = ["component", "children", "onVisibleChanged", "onAllRemoved"];
  var _excluded28 = ["status"];
  var MOTION_PROP_NAMES = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
  function genCSSMotionList(transitionSupport) {
    var CSSMotion = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : CSSMotion_default;
    var CSSMotionList = /* @__PURE__ */ function(_React$Component) {
      _inherits(CSSMotionList2, _React$Component);
      var _super = _createSuper(CSSMotionList2);
      function CSSMotionList2() {
        var _this;
        _classCallCheck(this, CSSMotionList2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "state", {
          keyEntities: []
        });
        _defineProperty(_assertThisInitialized(_this), "removeKey", function(removeKey) {
          var keyEntities = _this.state.keyEntities;
          var nextKeyEntities = keyEntities.map(function(entity) {
            if (entity.key !== removeKey)
              return entity;
            return _objectSpread2(_objectSpread2({}, entity), {}, {
              status: STATUS_REMOVED
            });
          });
          _this.setState({
            keyEntities: nextKeyEntities
          });
          return nextKeyEntities.filter(function(_ref) {
            var status = _ref.status;
            return status !== STATUS_REMOVED;
          }).length;
        });
        return _this;
      }
      _createClass(CSSMotionList2, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          var keyEntities = this.state.keyEntities;
          var _this$props = this.props, component = _this$props.component, children = _this$props.children, _onVisibleChanged = _this$props.onVisibleChanged, onAllRemoved = _this$props.onAllRemoved, restProps = _objectWithoutProperties(_this$props, _excluded27);
          var Component = component || k;
          var motionProps = {};
          MOTION_PROP_NAMES.forEach(function(prop) {
            motionProps[prop] = restProps[prop];
            delete restProps[prop];
          });
          delete restProps.keys;
          return /* @__PURE__ */ y(Component, restProps, keyEntities.map(function(_ref2) {
            var status = _ref2.status, eventProps = _objectWithoutProperties(_ref2, _excluded28);
            var visible = status === STATUS_ADD || status === STATUS_KEEP;
            return /* @__PURE__ */ y(CSSMotion, _extends({}, motionProps, {
              key: eventProps.key,
              visible,
              eventProps,
              onVisibleChanged: function onVisibleChanged(changedVisible) {
                _onVisibleChanged === null || _onVisibleChanged === void 0 ? void 0 : _onVisibleChanged(changedVisible, {
                  key: eventProps.key
                });
                if (!changedVisible) {
                  var restKeysCount = _this2.removeKey(eventProps.key);
                  if (restKeysCount === 0 && onAllRemoved) {
                    onAllRemoved();
                  }
                }
              }
            }), children);
          }));
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(_ref3, _ref4) {
          var keys = _ref3.keys;
          var keyEntities = _ref4.keyEntities;
          var parsedKeyObjects = parseKeys(keys);
          var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
          return {
            keyEntities: mixedKeyEntities.filter(function(entity) {
              var prevEntity = keyEntities.find(function(_ref5) {
                var key = _ref5.key;
                return entity.key === key;
              });
              if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
                return false;
              }
              return true;
            })
          };
        }
        // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
      }]);
      return CSSMotionList2;
    }(b);
    _defineProperty(CSSMotionList, "defaultProps", {
      component: "div"
    });
    return CSSMotionList;
  }
  var CSSMotionList_default = genCSSMotionList(supportTransition);

  // node_modules/rc-motion/es/index.js
  var es_default2 = CSSMotion_default;

  // node_modules/antd/es/config-provider/MotionWrapper.js
  init_react();
  function MotionWrapper(props) {
    const {
      children
    } = props;
    const [, token2] = useToken();
    const {
      motion
    } = token2;
    const needWrapMotionProviderRef = _2(false);
    needWrapMotionProviderRef.current = needWrapMotionProviderRef.current || motion === false;
    if (needWrapMotionProviderRef.current) {
      return /* @__PURE__ */ y(MotionProvider, {
        motion
      }, children);
    }
    return children;
  }

  // node_modules/antd/es/config-provider/style/index.js
  var useStyle = (iconPrefixCls, csp) => {
    const [theme, token2] = useToken();
    return useStyleRegister({
      theme,
      token: token2,
      hashId: "",
      path: ["ant-design-icons", iconPrefixCls],
      nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce
    }, () => [{
      [`.${iconPrefixCls}`]: Object.assign(Object.assign({}, resetIcon()), {
        [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
          display: "block"
        }
      })
    }]);
  };
  var style_default = useStyle;

  // node_modules/antd/es/config-provider/index.js
  var __rest2 = function(s3, e3) {
    var t3 = {};
    for (var p3 in s3)
      if (Object.prototype.hasOwnProperty.call(s3, p3) && e3.indexOf(p3) < 0)
        t3[p3] = s3[p3];
    if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i3 = 0, p3 = Object.getOwnPropertySymbols(s3); i3 < p3.length; i3++) {
        if (e3.indexOf(p3[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i3]))
          t3[p3[i3]] = s3[p3[i3]];
      }
    return t3;
  };
  var existThemeConfig = false;
  var PASSED_PROPS = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select"];
  var defaultPrefixCls = "ant";
  var globalPrefixCls;
  var globalIconPrefixCls;
  function getGlobalPrefixCls() {
    return globalPrefixCls || defaultPrefixCls;
  }
  var setGlobalConfig = (_ref) => {
    let {
      prefixCls,
      iconPrefixCls,
      theme
    } = _ref;
    if (prefixCls !== void 0) {
      globalPrefixCls = prefixCls;
    }
    if (iconPrefixCls !== void 0) {
      globalIconPrefixCls = iconPrefixCls;
    }
    if (theme) {
      registerTheme(getGlobalPrefixCls(), theme);
    }
  };
  var ProviderChildren = (props) => {
    const {
      children,
      csp: customCsp,
      autoInsertSpaceInButton,
      form,
      locale: locale4,
      componentSize,
      direction,
      space,
      virtual,
      dropdownMatchSelectWidth,
      popupMatchSelectWidth,
      popupOverflow,
      legacyLocale,
      parentContext,
      iconPrefixCls: customIconPrefixCls,
      theme,
      componentDisabled
    } = props;
    if (true) {
      true ? warning_default2(dropdownMatchSelectWidth === void 0, "ConfigProvider", "`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead.") : void 0;
    }
    const getPrefixCls = T2((suffixCls, customizePrefixCls) => {
      const {
        prefixCls
      } = props;
      if (customizePrefixCls)
        return customizePrefixCls;
      const mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");
      return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
    }, [parentContext.getPrefixCls, props.prefixCls]);
    const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || defaultIconPrefixCls;
    const shouldWrapSSR = iconPrefixCls !== parentContext.iconPrefixCls;
    const csp = customCsp || parentContext.csp;
    const wrapSSR = style_default(iconPrefixCls, csp);
    const mergedTheme = useTheme3(theme, parentContext.theme);
    if (true) {
      existThemeConfig = existThemeConfig || !!mergedTheme;
    }
    const baseConfig = {
      csp,
      autoInsertSpaceInButton,
      locale: locale4 || legacyLocale,
      direction,
      space,
      virtual,
      popupMatchSelectWidth: popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth,
      popupOverflow,
      getPrefixCls,
      iconPrefixCls,
      theme: mergedTheme
    };
    const config = Object.assign({}, parentContext);
    Object.keys(baseConfig).forEach((key) => {
      if (baseConfig[key] !== void 0) {
        config[key] = baseConfig[key];
      }
    });
    PASSED_PROPS.forEach((propName) => {
      const propValue = props[propName];
      if (propValue) {
        config[propName] = propValue;
      }
    });
    const memoedConfig = useMemo(() => config, config, (prevConfig, currentConfig) => {
      const prevKeys = Object.keys(prevConfig);
      const currentKeys = Object.keys(currentConfig);
      return prevKeys.length !== currentKeys.length || prevKeys.some((key) => prevConfig[key] !== currentConfig[key]);
    });
    const memoIconContextValue = F2(() => ({
      prefixCls: iconPrefixCls,
      csp
    }), [iconPrefixCls, csp]);
    let childNode = shouldWrapSSR ? wrapSSR(children) : children;
    const validateMessages = F2(() => {
      var _a, _b, _c;
      return setValues({}, ((_a = en_US_default6.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || {}, ((_c = (_b = memoedConfig.locale) === null || _b === void 0 ? void 0 : _b.Form) === null || _c === void 0 ? void 0 : _c.defaultValidateMessages) || {}, (form === null || form === void 0 ? void 0 : form.validateMessages) || {});
    }, [memoedConfig, form === null || form === void 0 ? void 0 : form.validateMessages]);
    if (Object.keys(validateMessages).length > 0) {
      childNode = /* @__PURE__ */ y(FormProvider, {
        validateMessages
      }, children);
    }
    if (locale4) {
      childNode = /* @__PURE__ */ y(locale_default, {
        locale: locale4,
        _ANT_MARK__: ANT_MARK
      }, childNode);
    }
    if (iconPrefixCls || csp) {
      childNode = /* @__PURE__ */ y(Context_default.Provider, {
        value: memoIconContextValue
      }, childNode);
    }
    if (componentSize) {
      childNode = /* @__PURE__ */ y(SizeContextProvider, {
        size: componentSize
      }, childNode);
    }
    childNode = /* @__PURE__ */ y(MotionWrapper, null, childNode);
    const memoTheme = F2(() => {
      const _a = mergedTheme || {}, {
        algorithm,
        token: token2
      } = _a, rest = __rest2(_a, ["algorithm", "token"]);
      const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : void 0;
      return Object.assign(Object.assign({}, rest), {
        theme: themeObj,
        token: Object.assign(Object.assign({}, seed_default), token2)
      });
    }, [mergedTheme]);
    if (theme) {
      childNode = /* @__PURE__ */ y(DesignTokenContext.Provider, {
        value: memoTheme
      }, childNode);
    }
    if (componentDisabled !== void 0) {
      childNode = /* @__PURE__ */ y(DisabledContextProvider, {
        disabled: componentDisabled
      }, childNode);
    }
    return /* @__PURE__ */ y(ConfigContext.Provider, {
      value: memoedConfig
    }, childNode);
  };
  var ConfigProvider = (props) => {
    const context = q2(ConfigContext);
    const antLocale = q2(context_default);
    return /* @__PURE__ */ y(ProviderChildren, Object.assign({
      parentContext: context,
      legacyLocale: antLocale
    }, props));
  };
  ConfigProvider.ConfigContext = ConfigContext;
  ConfigProvider.SizeContext = SizeContext_default;
  ConfigProvider.config = setGlobalConfig;
  ConfigProvider.useConfig = useConfig_default;
  Object.defineProperty(ConfigProvider, "SizeContext", {
    get: () => {
      true ? warning_default2(false, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead.") : void 0;
      return SizeContext_default;
    }
  });
  if (true) {
    ConfigProvider.displayName = "ConfigProvider";
  }
  var config_provider_default = ConfigProvider;

  // node_modules/@ant-design/icons/es/components/AntdIcon.js
  init_react();
  var import_classnames2 = __toESM(require_classnames());

  // node_modules/@ant-design/icons/es/utils.js
  init_react();
  function warning5(valid, message) {
    warning_default(valid, "[@ant-design/icons] ".concat(message));
  }
  function isIconDefinition(target) {
    return _typeof(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && (_typeof(target.icon) === "object" || typeof target.icon === "function");
  }
  function normalizeAttrs() {
    var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Object.keys(attrs).reduce(function(acc, key) {
      var val = attrs[key];
      switch (key) {
        case "class":
          acc.className = val;
          delete acc.class;
          break;
        default:
          acc[key] = val;
      }
      return acc;
    }, {});
  }
  function generate2(node2, key, rootProps) {
    if (!rootProps) {
      return /* @__PURE__ */ Cn.createElement(node2.tag, _objectSpread2({
        key
      }, normalizeAttrs(node2.attrs)), (node2.children || []).map(function(child, index2) {
        return generate2(child, "".concat(key, "-").concat(node2.tag, "-").concat(index2));
      }));
    }
    return /* @__PURE__ */ Cn.createElement(node2.tag, _objectSpread2(_objectSpread2({
      key
    }, normalizeAttrs(node2.attrs)), rootProps), (node2.children || []).map(function(child, index2) {
      return generate2(child, "".concat(key, "-").concat(node2.tag, "-").concat(index2));
    }));
  }
  function getSecondaryColor(primaryColor) {
    return generate(primaryColor)[0];
  }
  function normalizeTwoToneColors(twoToneColor) {
    if (!twoToneColor) {
      return [];
    }
    return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
  }
  var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
  var useInsertStyles = function useInsertStyles2() {
    var styleStr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : iconStyles;
    var _useContext = q2(Context_default), csp = _useContext.csp, prefixCls = _useContext.prefixCls;
    var mergedStyleStr = styleStr;
    if (prefixCls) {
      mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
    }
    p2(function() {
      updateCSS(mergedStyleStr, "@ant-design-icons", {
        prepend: true,
        csp
      });
    }, []);
  };

  // node_modules/@ant-design/icons/es/components/IconBase.js
  var _excluded29 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
  var twoToneColorPalette = {
    primaryColor: "#333",
    secondaryColor: "#E6E6E6",
    calculated: false
  };
  function setTwoToneColors(_ref) {
    var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
    twoToneColorPalette.calculated = !!secondaryColor;
  }
  function getTwoToneColors() {
    return _objectSpread2({}, twoToneColorPalette);
  }
  var IconBase = function IconBase2(props) {
    var icon = props.icon, className = props.className, onClick = props.onClick, style3 = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _objectWithoutProperties(props, _excluded29);
    var colors = twoToneColorPalette;
    if (primaryColor) {
      colors = {
        primaryColor,
        secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
      };
    }
    useInsertStyles();
    warning5(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
    if (!isIconDefinition(icon)) {
      return null;
    }
    var target = icon;
    if (target && typeof target.icon === "function") {
      target = _objectSpread2(_objectSpread2({}, target), {}, {
        icon: target.icon(colors.primaryColor, colors.secondaryColor)
      });
    }
    return generate2(target.icon, "svg-".concat(target.name), _objectSpread2({
      className,
      onClick,
      style: style3,
      "data-icon": target.name,
      width: "1em",
      height: "1em",
      fill: "currentColor",
      "aria-hidden": "true"
    }, restProps));
  };
  IconBase.displayName = "IconReact";
  IconBase.getTwoToneColors = getTwoToneColors;
  IconBase.setTwoToneColors = setTwoToneColors;
  var IconBase_default = IconBase;

  // node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js
  function setTwoToneColor(twoToneColor) {
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return IconBase_default.setTwoToneColors({
      primaryColor,
      secondaryColor
    });
  }
  function getTwoToneColor() {
    var colors = IconBase_default.getTwoToneColors();
    if (!colors.calculated) {
      return colors.primaryColor;
    }
    return [colors.primaryColor, colors.secondaryColor];
  }

  // node_modules/@ant-design/icons/es/components/AntdIcon.js
  var _excluded30 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
  setTwoToneColor(blue.primary);
  var Icon = /* @__PURE__ */ k3(function(props, ref) {
    var _classNames;
    var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded30);
    var _React$useContext = q2(Context_default), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
    var classString = (0, import_classnames2.default)(rootClassName, prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _defineProperty(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), _classNames), className);
    var iconTabIndex = tabIndex;
    if (iconTabIndex === void 0 && onClick) {
      iconTabIndex = -1;
    }
    var svgStyle = rotate ? {
      msTransform: "rotate(".concat(rotate, "deg)"),
      transform: "rotate(".concat(rotate, "deg)")
    } : void 0;
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return /* @__PURE__ */ y("span", _objectSpread2(_objectSpread2({
      role: "img",
      "aria-label": icon.name
    }, restProps), {}, {
      ref,
      tabIndex: iconTabIndex,
      onClick,
      className: classString
    }), /* @__PURE__ */ y(IconBase_default, {
      icon,
      primaryColor,
      secondaryColor,
      style: svgStyle
    }));
  });
  Icon.displayName = "AntdIcon";
  Icon.getTwoToneColor = getTwoToneColor;
  Icon.setTwoToneColor = setTwoToneColor;
  var AntdIcon_default = Icon;

  // node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js
  init_react();

  // node_modules/@ant-design/icons-svg/es/asn/CloseCircleFilled.js
  var CloseCircleFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, "name": "close-circle", "theme": "filled" };
  var CloseCircleFilled_default = CloseCircleFilled;

  // node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js
  var CloseCircleFilled2 = function CloseCircleFilled3(props, ref) {
    return /* @__PURE__ */ y(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: CloseCircleFilled_default
    }));
  };
  if (true) {
    CloseCircleFilled2.displayName = "CloseCircleFilled";
  }
  var CloseCircleFilled_default2 = /* @__PURE__ */ k3(CloseCircleFilled2);

  // node_modules/@ant-design/icons/es/icons/CloseOutlined.js
  init_react();

  // node_modules/@ant-design/icons-svg/es/asn/CloseOutlined.js
  var CloseOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, "name": "close", "theme": "outlined" };
  var CloseOutlined_default = CloseOutlined;

  // node_modules/@ant-design/icons/es/icons/CloseOutlined.js
  var CloseOutlined2 = function CloseOutlined3(props, ref) {
    return /* @__PURE__ */ y(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: CloseOutlined_default
    }));
  };
  if (true) {
    CloseOutlined2.displayName = "CloseOutlined";
  }
  var CloseOutlined_default2 = /* @__PURE__ */ k3(CloseOutlined2);

  // node_modules/rc-util/es/hooks/useEvent.js
  init_react();
  function useEvent(callback) {
    var fnRef = _2();
    fnRef.current = callback;
    var memoFn = T2(function() {
      var _fnRef$current;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
    }, []);
    return memoFn;
  }

  // node_modules/rc-util/es/KeyCode.js
  var KeyCode = {
    /**
     * MAC_ENTER
     */
    MAC_ENTER: 3,
    /**
     * BACKSPACE
     */
    BACKSPACE: 8,
    /**
     * TAB
     */
    TAB: 9,
    /**
     * NUMLOCK on FF/Safari Mac
     */
    NUM_CENTER: 12,
    // NUMLOCK on FF/Safari Mac
    /**
     * ENTER
     */
    ENTER: 13,
    /**
     * SHIFT
     */
    SHIFT: 16,
    /**
     * CTRL
     */
    CTRL: 17,
    /**
     * ALT
     */
    ALT: 18,
    /**
     * PAUSE
     */
    PAUSE: 19,
    /**
     * CAPS_LOCK
     */
    CAPS_LOCK: 20,
    /**
     * ESC
     */
    ESC: 27,
    /**
     * SPACE
     */
    SPACE: 32,
    /**
     * PAGE_UP
     */
    PAGE_UP: 33,
    // also NUM_NORTH_EAST
    /**
     * PAGE_DOWN
     */
    PAGE_DOWN: 34,
    // also NUM_SOUTH_EAST
    /**
     * END
     */
    END: 35,
    // also NUM_SOUTH_WEST
    /**
     * HOME
     */
    HOME: 36,
    // also NUM_NORTH_WEST
    /**
     * LEFT
     */
    LEFT: 37,
    // also NUM_WEST
    /**
     * UP
     */
    UP: 38,
    // also NUM_NORTH
    /**
     * RIGHT
     */
    RIGHT: 39,
    // also NUM_EAST
    /**
     * DOWN
     */
    DOWN: 40,
    // also NUM_SOUTH
    /**
     * PRINT_SCREEN
     */
    PRINT_SCREEN: 44,
    /**
     * INSERT
     */
    INSERT: 45,
    // also NUM_INSERT
    /**
     * DELETE
     */
    DELETE: 46,
    // also NUM_DELETE
    /**
     * ZERO
     */
    ZERO: 48,
    /**
     * ONE
     */
    ONE: 49,
    /**
     * TWO
     */
    TWO: 50,
    /**
     * THREE
     */
    THREE: 51,
    /**
     * FOUR
     */
    FOUR: 52,
    /**
     * FIVE
     */
    FIVE: 53,
    /**
     * SIX
     */
    SIX: 54,
    /**
     * SEVEN
     */
    SEVEN: 55,
    /**
     * EIGHT
     */
    EIGHT: 56,
    /**
     * NINE
     */
    NINE: 57,
    /**
     * QUESTION_MARK
     */
    QUESTION_MARK: 63,
    // needs localization
    /**
     * A
     */
    A: 65,
    /**
     * B
     */
    B: 66,
    /**
     * C
     */
    C: 67,
    /**
     * D
     */
    D: 68,
    /**
     * E
     */
    E: 69,
    /**
     * F
     */
    F: 70,
    /**
     * G
     */
    G: 71,
    /**
     * H
     */
    H: 72,
    /**
     * I
     */
    I: 73,
    /**
     * J
     */
    J: 74,
    /**
     * K
     */
    K: 75,
    /**
     * L
     */
    L: 76,
    /**
     * M
     */
    M: 77,
    /**
     * N
     */
    N: 78,
    /**
     * O
     */
    O: 79,
    /**
     * P
     */
    P: 80,
    /**
     * Q
     */
    Q: 81,
    /**
     * R
     */
    R: 82,
    /**
     * S
     */
    S: 83,
    /**
     * T
     */
    T: 84,
    /**
     * U
     */
    U: 85,
    /**
     * V
     */
    V: 86,
    /**
     * W
     */
    W: 87,
    /**
     * X
     */
    X: 88,
    /**
     * Y
     */
    Y: 89,
    /**
     * Z
     */
    Z: 90,
    /**
     * META
     */
    META: 91,
    // WIN_KEY_LEFT
    /**
     * WIN_KEY_RIGHT
     */
    WIN_KEY_RIGHT: 92,
    /**
     * CONTEXT_MENU
     */
    CONTEXT_MENU: 93,
    /**
     * NUM_ZERO
     */
    NUM_ZERO: 96,
    /**
     * NUM_ONE
     */
    NUM_ONE: 97,
    /**
     * NUM_TWO
     */
    NUM_TWO: 98,
    /**
     * NUM_THREE
     */
    NUM_THREE: 99,
    /**
     * NUM_FOUR
     */
    NUM_FOUR: 100,
    /**
     * NUM_FIVE
     */
    NUM_FIVE: 101,
    /**
     * NUM_SIX
     */
    NUM_SIX: 102,
    /**
     * NUM_SEVEN
     */
    NUM_SEVEN: 103,
    /**
     * NUM_EIGHT
     */
    NUM_EIGHT: 104,
    /**
     * NUM_NINE
     */
    NUM_NINE: 105,
    /**
     * NUM_MULTIPLY
     */
    NUM_MULTIPLY: 106,
    /**
     * NUM_PLUS
     */
    NUM_PLUS: 107,
    /**
     * NUM_MINUS
     */
    NUM_MINUS: 109,
    /**
     * NUM_PERIOD
     */
    NUM_PERIOD: 110,
    /**
     * NUM_DIVISION
     */
    NUM_DIVISION: 111,
    /**
     * F1
     */
    F1: 112,
    /**
     * F2
     */
    F2: 113,
    /**
     * F3
     */
    F3: 114,
    /**
     * F4
     */
    F4: 115,
    /**
     * F5
     */
    F5: 116,
    /**
     * F6
     */
    F6: 117,
    /**
     * F7
     */
    F7: 118,
    /**
     * F8
     */
    F8: 119,
    /**
     * F9
     */
    F9: 120,
    /**
     * F10
     */
    F10: 121,
    /**
     * F11
     */
    F11: 122,
    /**
     * F12
     */
    F12: 123,
    /**
     * NUMLOCK
     */
    NUMLOCK: 144,
    /**
     * SEMICOLON
     */
    SEMICOLON: 186,
    // needs localization
    /**
     * DASH
     */
    DASH: 189,
    // needs localization
    /**
     * EQUALS
     */
    EQUALS: 187,
    // needs localization
    /**
     * COMMA
     */
    COMMA: 188,
    // needs localization
    /**
     * PERIOD
     */
    PERIOD: 190,
    // needs localization
    /**
     * SLASH
     */
    SLASH: 191,
    // needs localization
    /**
     * APOSTROPHE
     */
    APOSTROPHE: 192,
    // needs localization
    /**
     * SINGLE_QUOTE
     */
    SINGLE_QUOTE: 222,
    // needs localization
    /**
     * OPEN_SQUARE_BRACKET
     */
    OPEN_SQUARE_BRACKET: 219,
    // needs localization
    /**
     * BACKSLASH
     */
    BACKSLASH: 220,
    // needs localization
    /**
     * CLOSE_SQUARE_BRACKET
     */
    CLOSE_SQUARE_BRACKET: 221,
    // needs localization
    /**
     * WIN_KEY
     */
    WIN_KEY: 224,
    /**
     * MAC_FF_META
     */
    MAC_FF_META: 224,
    // Firefox (Gecko) fires this for the meta key instead of 91
    /**
     * WIN_IME
     */
    WIN_IME: 229,
    // ======================== Function ========================
    /**
     * whether text and modified key is entered at the same time.
     */
    isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e3) {
      var keyCode = e3.keyCode;
      if (e3.altKey && !e3.ctrlKey || e3.metaKey || // Function keys don't generate text
      keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
        return false;
      }
      switch (keyCode) {
        case KeyCode.ALT:
        case KeyCode.CAPS_LOCK:
        case KeyCode.CONTEXT_MENU:
        case KeyCode.CTRL:
        case KeyCode.DOWN:
        case KeyCode.END:
        case KeyCode.ESC:
        case KeyCode.HOME:
        case KeyCode.INSERT:
        case KeyCode.LEFT:
        case KeyCode.MAC_FF_META:
        case KeyCode.META:
        case KeyCode.NUMLOCK:
        case KeyCode.NUM_CENTER:
        case KeyCode.PAGE_DOWN:
        case KeyCode.PAGE_UP:
        case KeyCode.PAUSE:
        case KeyCode.PRINT_SCREEN:
        case KeyCode.RIGHT:
        case KeyCode.SHIFT:
        case KeyCode.UP:
        case KeyCode.WIN_KEY:
        case KeyCode.WIN_KEY_RIGHT:
          return false;
        default:
          return true;
      }
    },
    /**
     * whether character is entered.
     */
    isCharacterKey: function isCharacterKey(keyCode) {
      if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
        return true;
      }
      if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
        return true;
      }
      if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
        return true;
      }
      if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
        return true;
      }
      switch (keyCode) {
        case KeyCode.SPACE:
        case KeyCode.QUESTION_MARK:
        case KeyCode.NUM_PLUS:
        case KeyCode.NUM_MINUS:
        case KeyCode.NUM_PERIOD:
        case KeyCode.NUM_DIVISION:
        case KeyCode.SEMICOLON:
        case KeyCode.DASH:
        case KeyCode.EQUALS:
        case KeyCode.COMMA:
        case KeyCode.PERIOD:
        case KeyCode.SLASH:
        case KeyCode.APOSTROPHE:
        case KeyCode.SINGLE_QUOTE:
        case KeyCode.OPEN_SQUARE_BRACKET:
        case KeyCode.BACKSLASH:
        case KeyCode.CLOSE_SQUARE_BRACKET:
          return true;
        default:
          return false;
      }
    }
  };
  var KeyCode_default = KeyCode;

  // node_modules/@ant-design/icons/es/icons/LoadingOutlined.js
  init_react();

  // node_modules/@ant-design/icons-svg/es/asn/LoadingOutlined.js
  var LoadingOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
  var LoadingOutlined_default = LoadingOutlined;

  // node_modules/@ant-design/icons/es/icons/LoadingOutlined.js
  var LoadingOutlined2 = function LoadingOutlined3(props, ref) {
    return /* @__PURE__ */ y(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: LoadingOutlined_default
    }));
  };
  if (true) {
    LoadingOutlined2.displayName = "LoadingOutlined";
  }
  var LoadingOutlined_default2 = /* @__PURE__ */ k3(LoadingOutlined2);

  // node_modules/rc-util/es/Dom/isVisible.js
  var isVisible_default = function(element) {
    if (!element) {
      return false;
    }
    if (element instanceof Element) {
      if (element.offsetParent) {
        return true;
      }
      if (element.getBBox) {
        var _getBBox = element.getBBox(), width = _getBBox.width, height = _getBBox.height;
        if (width || height) {
          return true;
        }
      }
      if (element.getBoundingClientRect) {
        var _element$getBoundingC = element.getBoundingClientRect(), _width = _element$getBoundingC.width, _height = _element$getBoundingC.height;
        if (_width || _height) {
          return true;
        }
      }
    }
    return false;
  };

  // node_modules/antd/es/space/Compact.js
  var import_classnames3 = __toESM(require_classnames());
  init_react();
  var SpaceCompactItemContext = /* @__PURE__ */ G(null);
  var useCompactItemContext = (prefixCls, direction) => {
    const compactItemContext = q2(SpaceCompactItemContext);
    const compactItemClassnames = F2(() => {
      if (!compactItemContext) {
        return "";
      }
      const {
        compactDirection,
        isFirstItem,
        isLastItem
      } = compactItemContext;
      const separator = compactDirection === "vertical" ? "-vertical-" : "-";
      return (0, import_classnames3.default)({
        [`${prefixCls}-compact${separator}item`]: true,
        [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
        [`${prefixCls}-compact${separator}last-item`]: isLastItem,
        [`${prefixCls}-compact${separator}item-rtl`]: direction === "rtl"
      });
    }, [prefixCls, direction, compactItemContext]);
    return {
      compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
      compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
      compactItemClassnames
    };
  };

  // node_modules/antd/es/style/compact-item.js
  function compactItemBorder(token2, parentCls, options) {
    const {
      focusElCls,
      focus,
      borderElCls
    } = options;
    const childCombinator = borderElCls ? "> *" : "";
    const hoverEffects = ["hover", focus ? "focus" : null, "active"].filter(Boolean).map((n2) => `&:${n2} ${childCombinator}`).join(",");
    return {
      [`&-item:not(${parentCls}-last-item)`]: {
        marginInlineEnd: -token2.lineWidth
      },
      "&-item": Object.assign(Object.assign({
        [hoverEffects]: {
          zIndex: 2
        }
      }, focusElCls ? {
        [`&${focusElCls}`]: {
          zIndex: 2
        }
      } : {}), {
        [`&[disabled] ${childCombinator}`]: {
          zIndex: 0
        }
      })
    };
  }
  function compactItemBorderRadius(prefixCls, parentCls, options) {
    const {
      borderElCls
    } = options;
    const childCombinator = borderElCls ? `> ${borderElCls}` : "";
    return {
      [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
        borderRadius: 0
      },
      [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
        [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0
        }
      },
      [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
        [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0
        }
      }
    };
  }
  function genCompactItemStyle(token2) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      focus: true
    };
    const {
      componentCls
    } = token2;
    const compactCls = `${componentCls}-compact`;
    return {
      [compactCls]: Object.assign(Object.assign({}, compactItemBorder(token2, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
    };
  }

  // node_modules/antd/es/_util/motion.js
  var getTransitionDirection = (placement2) => {
    if (placement2 !== void 0 && (placement2 === "topLeft" || placement2 === "topRight")) {
      return `slide-down`;
    }
    return `slide-up`;
  };
  var getTransitionName2 = (rootPrefixCls, motion, transitionName) => {
    if (transitionName !== void 0) {
      return transitionName;
    }
    return `${rootPrefixCls}-${motion}`;
  };

  // node_modules/@rc-component/portal/es/Portal.js
  init_react();

  // node_modules/@rc-component/portal/es/Context.js
  init_react();
  var OrderContext = /* @__PURE__ */ G(null);
  var Context_default2 = OrderContext;

  // node_modules/@rc-component/portal/es/useDom.js
  init_react();

  // node_modules/rc-util/es/hooks/useLayoutEffect.js
  init_react();
  var useLayoutEffect = canUseDom() ? y2 : p2;
  var useLayoutEffect_default = useLayoutEffect;
  var useLayoutUpdateEffect = function useLayoutUpdateEffect2(callback, deps) {
    var firstMountRef = _2(true);
    useLayoutEffect(function() {
      if (!firstMountRef.current) {
        return callback();
      }
    }, deps);
    useLayoutEffect(function() {
      firstMountRef.current = false;
      return function() {
        firstMountRef.current = true;
      };
    }, []);
  };

  // node_modules/@rc-component/portal/es/useDom.js
  var EMPTY_LIST = [];
  function useDom(render, debug) {
    var _React$useState = h2(function() {
      if (!canUseDom()) {
        return null;
      }
      var defaultEle = document.createElement("div");
      if (debug) {
        defaultEle.setAttribute("data-debug", debug);
      }
      return defaultEle;
    }), _React$useState2 = _slicedToArray(_React$useState, 1), ele = _React$useState2[0];
    var appendedRef = _2(false);
    var queueCreate = q2(Context_default2);
    var _React$useState3 = h2(EMPTY_LIST), _React$useState4 = _slicedToArray(_React$useState3, 2), queue = _React$useState4[0], setQueue = _React$useState4[1];
    var mergedQueueCreate = queueCreate || (appendedRef.current ? void 0 : function(appendFn) {
      setQueue(function(origin) {
        var newQueue = [appendFn].concat(_toConsumableArray(origin));
        return newQueue;
      });
    });
    function append2() {
      if (!ele.parentElement) {
        document.body.appendChild(ele);
      }
      appendedRef.current = true;
    }
    function cleanup2() {
      var _ele$parentElement;
      (_ele$parentElement = ele.parentElement) === null || _ele$parentElement === void 0 ? void 0 : _ele$parentElement.removeChild(ele);
      appendedRef.current = false;
    }
    useLayoutEffect_default(function() {
      if (render) {
        if (queueCreate) {
          queueCreate(append2);
        } else {
          append2();
        }
      } else {
        cleanup2();
      }
      return cleanup2;
    }, [render]);
    useLayoutEffect_default(function() {
      if (queue.length) {
        queue.forEach(function(appendFn) {
          return appendFn();
        });
        setQueue(EMPTY_LIST);
      }
    }, [queue]);
    return [ele, mergedQueueCreate];
  }

  // node_modules/@rc-component/portal/es/useScrollLocker.js
  init_react();

  // node_modules/rc-util/es/getScrollBarSize.js
  var cached;
  function getScrollBarSize(fresh) {
    if (typeof document === "undefined") {
      return 0;
    }
    if (fresh || cached === void 0) {
      var inner = document.createElement("div");
      inner.style.width = "100%";
      inner.style.height = "200px";
      var outer = document.createElement("div");
      var outerStyle = outer.style;
      outerStyle.position = "absolute";
      outerStyle.top = "0";
      outerStyle.left = "0";
      outerStyle.pointerEvents = "none";
      outerStyle.visibility = "hidden";
      outerStyle.width = "200px";
      outerStyle.height = "150px";
      outerStyle.overflow = "hidden";
      outer.appendChild(inner);
      document.body.appendChild(outer);
      var widthContained = inner.offsetWidth;
      outer.style.overflow = "scroll";
      var widthScroll = inner.offsetWidth;
      if (widthContained === widthScroll) {
        widthScroll = outer.clientWidth;
      }
      document.body.removeChild(outer);
      cached = widthContained - widthScroll;
    }
    return cached;
  }

  // node_modules/@rc-component/portal/es/util.js
  function isBodyOverflowing() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
  }

  // node_modules/@rc-component/portal/es/useScrollLocker.js
  var UNIQUE_ID = "rc-util-locker-".concat(Date.now());
  var uuid2 = 0;
  function useScrollLocker(lock) {
    var mergedLock = !!lock;
    var _React$useState = h2(function() {
      uuid2 += 1;
      return "".concat(UNIQUE_ID, "_").concat(uuid2);
    }), _React$useState2 = _slicedToArray(_React$useState, 1), id = _React$useState2[0];
    useLayoutEffect_default(function() {
      if (mergedLock) {
        var scrollbarSize = getScrollBarSize();
        var isOverflow = isBodyOverflowing();
        updateCSS("\nhtml body {\n  overflow-y: hidden;\n  ".concat(isOverflow ? "width: calc(100% - ".concat(scrollbarSize, "px);") : "", "\n}"), id);
      } else {
        removeCSS(id);
      }
      return function() {
        removeCSS(id);
      };
    }, [mergedLock, id]);
  }

  // node_modules/@rc-component/portal/es/mock.js
  var inline = false;
  function inlineMock(nextInline) {
    if (typeof nextInline === "boolean") {
      inline = nextInline;
    }
    return inline;
  }

  // node_modules/@rc-component/portal/es/Portal.js
  var getPortalContainer = function getPortalContainer2(getContainer2) {
    if (getContainer2 === false) {
      return false;
    }
    if (!canUseDom() || !getContainer2) {
      return null;
    }
    if (typeof getContainer2 === "string") {
      return document.querySelector(getContainer2);
    }
    if (typeof getContainer2 === "function") {
      return getContainer2();
    }
    return getContainer2;
  };
  var Portal = /* @__PURE__ */ k3(function(props, ref) {
    var open = props.open, autoLock = props.autoLock, getContainer2 = props.getContainer, debug = props.debug, _props$autoDestroy = props.autoDestroy, autoDestroy = _props$autoDestroy === void 0 ? true : _props$autoDestroy, children = props.children;
    var _React$useState = h2(open), _React$useState2 = _slicedToArray(_React$useState, 2), shouldRender = _React$useState2[0], setShouldRender = _React$useState2[1];
    var mergedRender = shouldRender || open;
    if (true) {
      warning_default(canUseDom() || !open, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR.");
    }
    p2(function() {
      if (autoDestroy || open) {
        setShouldRender(open);
      }
    }, [open, autoDestroy]);
    var _React$useState3 = h2(function() {
      return getPortalContainer(getContainer2);
    }), _React$useState4 = _slicedToArray(_React$useState3, 2), innerContainer = _React$useState4[0], setInnerContainer = _React$useState4[1];
    p2(function() {
      var customizeContainer = getPortalContainer(getContainer2);
      setInnerContainer(customizeContainer !== null && customizeContainer !== void 0 ? customizeContainer : null);
    });
    var _useDom = useDom(mergedRender && !innerContainer, debug), _useDom2 = _slicedToArray(_useDom, 2), defaultContainer = _useDom2[0], queueCreate = _useDom2[1];
    var mergedContainer = innerContainer !== null && innerContainer !== void 0 ? innerContainer : defaultContainer;
    useScrollLocker(autoLock && open && canUseDom() && (mergedContainer === defaultContainer || mergedContainer === document.body));
    var childRef = null;
    if (children && supportRef(children) && ref) {
      var _ref = children;
      childRef = _ref.ref;
    }
    var mergedRef = useComposeRef(childRef, ref);
    if (!mergedRender || !canUseDom() || innerContainer === void 0) {
      return null;
    }
    var renderInline = mergedContainer === false || inlineMock();
    var reffedChildren = children;
    if (ref) {
      reffedChildren = /* @__PURE__ */ sn(children, {
        ref: mergedRef
      });
    }
    return /* @__PURE__ */ y(Context_default2.Provider, {
      value: queueCreate
    }, renderInline ? reffedChildren : /* @__PURE__ */ z3(reffedChildren, mergedContainer));
  });
  if (true) {
    Portal.displayName = "Portal";
  }
  var Portal_default = Portal;

  // node_modules/@rc-component/portal/es/index.js
  var es_default3 = Portal_default;

  // node_modules/rc-util/es/hooks/useId.js
  init_react();
  function getUseId() {
    var fullClone = _objectSpread2({}, react_exports);
    return fullClone.useId;
  }
  var uuid3 = 0;
  function useId(id) {
    var _React$useState = h2("ssr-id"), _React$useState2 = _slicedToArray(_React$useState, 2), innerId = _React$useState2[0], setInnerId = _React$useState2[1];
    var useOriginId = getUseId();
    var reactNativeId = useOriginId === null || useOriginId === void 0 ? void 0 : useOriginId();
    p2(function() {
      if (!useOriginId) {
        var nextId = uuid3;
        uuid3 += 1;
        setInnerId("rc_unique_".concat(nextId));
      }
    }, []);
    if (id) {
      return id;
    }
    if (false) {
      return "test-id";
    }
    return reactNativeId || innerId;
  }

  // node_modules/rc-util/es/pickAttrs.js
  var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
  var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
  var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
  var ariaPrefix = "aria-";
  var dataPrefix = "data-";
  function match(key, prefix) {
    return key.indexOf(prefix) === 0;
  }
  function pickAttrs(props) {
    var ariaOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var mergedConfig;
    if (ariaOnly === false) {
      mergedConfig = {
        aria: true,
        data: true,
        attr: true
      };
    } else if (ariaOnly === true) {
      mergedConfig = {
        aria: true
      };
    } else {
      mergedConfig = _objectSpread2({}, ariaOnly);
    }
    var attrs = {};
    Object.keys(props).forEach(function(key) {
      if (
        // Aria
        mergedConfig.aria && (key === "role" || match(key, ariaPrefix)) || // Data
        mergedConfig.data && match(key, dataPrefix) || // Attr
        mergedConfig.attr && propList.includes(key)
      ) {
        attrs[key] = props[key];
      }
    });
    return attrs;
  }

  // node_modules/antd/es/form/context.js
  init_react();
  init_react();
  var FormItemInputContext = /* @__PURE__ */ G({});

  // node_modules/antd/es/style/motion/motion.js
  var initMotionCommon = (duration) => ({
    animationDuration: duration,
    animationFillMode: "both"
  });
  var initMotionCommonLeave = (duration) => ({
    animationDuration: duration,
    animationFillMode: "both"
  });
  var initMotion = function(motionCls, inKeyframes, outKeyframes, duration) {
    let sameLevel = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    const sameLevelPrefix = sameLevel ? "&" : "";
    return {
      [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: Object.assign(Object.assign({}, initMotionCommon(duration)), {
        animationPlayState: "paused"
      }),
      [`${sameLevelPrefix}${motionCls}-leave`]: Object.assign(Object.assign({}, initMotionCommonLeave(duration)), {
        animationPlayState: "paused"
      }),
      [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
        animationName: inKeyframes,
        animationPlayState: "running"
      },
      [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
        animationName: outKeyframes,
        animationPlayState: "running",
        pointerEvents: "none"
      }
    };
  };

  // node_modules/antd/es/style/motion/move.js
  var moveDownIn = new Keyframes_default("antMoveDownIn", {
    "0%": {
      transform: "translate3d(0, 100%, 0)",
      transformOrigin: "0 0",
      opacity: 0
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1
    }
  });
  var moveDownOut = new Keyframes_default("antMoveDownOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1
    },
    "100%": {
      transform: "translate3d(0, 100%, 0)",
      transformOrigin: "0 0",
      opacity: 0
    }
  });
  var moveLeftIn = new Keyframes_default("antMoveLeftIn", {
    "0%": {
      transform: "translate3d(-100%, 0, 0)",
      transformOrigin: "0 0",
      opacity: 0
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1
    }
  });
  var moveLeftOut = new Keyframes_default("antMoveLeftOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1
    },
    "100%": {
      transform: "translate3d(-100%, 0, 0)",
      transformOrigin: "0 0",
      opacity: 0
    }
  });
  var moveRightIn = new Keyframes_default("antMoveRightIn", {
    "0%": {
      transform: "translate3d(100%, 0, 0)",
      transformOrigin: "0 0",
      opacity: 0
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1
    }
  });
  var moveRightOut = new Keyframes_default("antMoveRightOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1
    },
    "100%": {
      transform: "translate3d(100%, 0, 0)",
      transformOrigin: "0 0",
      opacity: 0
    }
  });
  var moveUpIn = new Keyframes_default("antMoveUpIn", {
    "0%": {
      transform: "translate3d(0, -100%, 0)",
      transformOrigin: "0 0",
      opacity: 0
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1
    }
  });
  var moveUpOut = new Keyframes_default("antMoveUpOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1
    },
    "100%": {
      transform: "translate3d(0, -100%, 0)",
      transformOrigin: "0 0",
      opacity: 0
    }
  });
  var moveMotion = {
    "move-up": {
      inKeyframes: moveUpIn,
      outKeyframes: moveUpOut
    },
    "move-down": {
      inKeyframes: moveDownIn,
      outKeyframes: moveDownOut
    },
    "move-left": {
      inKeyframes: moveLeftIn,
      outKeyframes: moveLeftOut
    },
    "move-right": {
      inKeyframes: moveRightIn,
      outKeyframes: moveRightOut
    }
  };
  var initMoveMotion = (token2, motionName) => {
    const {
      antCls
    } = token2;
    const motionCls = `${antCls}-${motionName}`;
    const {
      inKeyframes,
      outKeyframes
    } = moveMotion[motionName];
    return [initMotion(motionCls, inKeyframes, outKeyframes, token2.motionDurationMid), {
      [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
        opacity: 0,
        animationTimingFunction: token2.motionEaseOutCirc
      },
      [`${motionCls}-leave`]: {
        animationTimingFunction: token2.motionEaseInOutCirc
      }
    }];
  };

  // node_modules/antd/es/style/motion/slide.js
  var slideUpIn = new Keyframes_default("antSlideUpIn", {
    "0%": {
      transform: "scaleY(0.8)",
      transformOrigin: "0% 0%",
      opacity: 0
    },
    "100%": {
      transform: "scaleY(1)",
      transformOrigin: "0% 0%",
      opacity: 1
    }
  });
  var slideUpOut = new Keyframes_default("antSlideUpOut", {
    "0%": {
      transform: "scaleY(1)",
      transformOrigin: "0% 0%",
      opacity: 1
    },
    "100%": {
      transform: "scaleY(0.8)",
      transformOrigin: "0% 0%",
      opacity: 0
    }
  });
  var slideDownIn = new Keyframes_default("antSlideDownIn", {
    "0%": {
      transform: "scaleY(0.8)",
      transformOrigin: "100% 100%",
      opacity: 0
    },
    "100%": {
      transform: "scaleY(1)",
      transformOrigin: "100% 100%",
      opacity: 1
    }
  });
  var slideDownOut = new Keyframes_default("antSlideDownOut", {
    "0%": {
      transform: "scaleY(1)",
      transformOrigin: "100% 100%",
      opacity: 1
    },
    "100%": {
      transform: "scaleY(0.8)",
      transformOrigin: "100% 100%",
      opacity: 0
    }
  });
  var slideLeftIn = new Keyframes_default("antSlideLeftIn", {
    "0%": {
      transform: "scaleX(0.8)",
      transformOrigin: "0% 0%",
      opacity: 0
    },
    "100%": {
      transform: "scaleX(1)",
      transformOrigin: "0% 0%",
      opacity: 1
    }
  });
  var slideLeftOut = new Keyframes_default("antSlideLeftOut", {
    "0%": {
      transform: "scaleX(1)",
      transformOrigin: "0% 0%",
      opacity: 1
    },
    "100%": {
      transform: "scaleX(0.8)",
      transformOrigin: "0% 0%",
      opacity: 0
    }
  });
  var slideRightIn = new Keyframes_default("antSlideRightIn", {
    "0%": {
      transform: "scaleX(0.8)",
      transformOrigin: "100% 0%",
      opacity: 0
    },
    "100%": {
      transform: "scaleX(1)",
      transformOrigin: "100% 0%",
      opacity: 1
    }
  });
  var slideRightOut = new Keyframes_default("antSlideRightOut", {
    "0%": {
      transform: "scaleX(1)",
      transformOrigin: "100% 0%",
      opacity: 1
    },
    "100%": {
      transform: "scaleX(0.8)",
      transformOrigin: "100% 0%",
      opacity: 0
    }
  });
  var slideMotion = {
    "slide-up": {
      inKeyframes: slideUpIn,
      outKeyframes: slideUpOut
    },
    "slide-down": {
      inKeyframes: slideDownIn,
      outKeyframes: slideDownOut
    },
    "slide-left": {
      inKeyframes: slideLeftIn,
      outKeyframes: slideLeftOut
    },
    "slide-right": {
      inKeyframes: slideRightIn,
      outKeyframes: slideRightOut
    }
  };
  var initSlideMotion = (token2, motionName) => {
    const {
      antCls
    } = token2;
    const motionCls = `${antCls}-${motionName}`;
    const {
      inKeyframes,
      outKeyframes
    } = slideMotion[motionName];
    return [initMotion(motionCls, inKeyframes, outKeyframes, token2.motionDurationMid), {
      [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
        transform: "scale(0)",
        transformOrigin: "0% 0%",
        opacity: 0,
        animationTimingFunction: token2.motionEaseOutQuint,
        [`&-prepare`]: {
          transform: "scale(1)"
        }
      },
      [`${motionCls}-leave`]: {
        animationTimingFunction: token2.motionEaseInQuint
      }
    }];
  };

  // node_modules/rc-util/es/hooks/useMergedState.js
  function hasValue(value) {
    return value !== void 0;
  }
  function useMergedState(defaultStateValue, option) {
    var _ref = option || {}, defaultValue = _ref.defaultValue, value = _ref.value, onChange = _ref.onChange, postState = _ref.postState;
    var _useState = useSafeState(function() {
      if (hasValue(value)) {
        return value;
      } else if (hasValue(defaultValue)) {
        return typeof defaultValue === "function" ? defaultValue() : defaultValue;
      } else {
        return typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
      }
    }), _useState2 = _slicedToArray(_useState, 2), innerValue = _useState2[0], setInnerValue = _useState2[1];
    var mergedValue = value !== void 0 ? value : innerValue;
    var postMergedValue = postState ? postState(mergedValue) : mergedValue;
    var onChangeFn = useEvent(onChange);
    var _useState3 = useSafeState([mergedValue]), _useState4 = _slicedToArray(_useState3, 2), prevValue = _useState4[0], setPrevValue = _useState4[1];
    useLayoutUpdateEffect(function() {
      var prev2 = prevValue[0];
      if (innerValue !== prev2) {
        onChangeFn(innerValue, prev2);
      }
    }, [prevValue]);
    useLayoutUpdateEffect(function() {
      if (!hasValue(value)) {
        setInnerValue(value);
      }
    }, [value]);
    var triggerChange = useEvent(function(updater, ignoreDestroy) {
      setInnerValue(updater, ignoreDestroy);
      setPrevValue([mergedValue], ignoreDestroy);
    });
    return [postMergedValue, triggerChange];
  }

  // node_modules/antd/es/_util/PurePanel.js
  init_react();
  function genPurePanel(Component, defaultPrefixCls2, getDropdownCls, postProps) {
    return function PurePanel2(props) {
      const {
        prefixCls: customizePrefixCls,
        style: style3
      } = props;
      const holderRef = _2(null);
      const [popupHeight, setPopupHeight] = h2(0);
      const [popupWidth, setPopupWidth] = h2(0);
      const [open, setOpen] = useMergedState(false, {
        value: props.open
      });
      const {
        getPrefixCls
      } = q2(ConfigContext);
      const prefixCls = getPrefixCls(defaultPrefixCls2 || "select", customizePrefixCls);
      p2(() => {
        setOpen(true);
        if (typeof ResizeObserver !== "undefined") {
          const resizeObserver2 = new ResizeObserver((entries) => {
            const element = entries[0].target;
            setPopupHeight(element.offsetHeight + 8);
            setPopupWidth(element.offsetWidth);
          });
          const interval = setInterval(() => {
            var _a;
            const dropdownCls = getDropdownCls ? `.${getDropdownCls(prefixCls)}` : `.${prefixCls}-dropdown`;
            const popup = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(dropdownCls);
            if (popup) {
              clearInterval(interval);
              resizeObserver2.observe(popup);
            }
          }, 10);
          return () => {
            clearInterval(interval);
            resizeObserver2.disconnect();
          };
        }
      }, []);
      let mergedProps = Object.assign(Object.assign({}, props), {
        style: Object.assign(Object.assign({}, style3), {
          margin: 0
        }),
        open,
        visible: open,
        getPopupContainer: () => holderRef.current
      });
      if (postProps) {
        mergedProps = postProps(mergedProps);
      }
      return /* @__PURE__ */ y(config_provider_default, {
        theme: {
          token: {
            motion: false
          }
        }
      }, /* @__PURE__ */ y("div", {
        ref: holderRef,
        style: {
          paddingBottom: popupHeight,
          position: "relative",
          minWidth: popupWidth
        }
      }, /* @__PURE__ */ y(Component, Object.assign({}, mergedProps))));
    };
  }

  // node_modules/antd/es/select/index.js
  var import_classnames22 = __toESM(require_classnames());

  // node_modules/rc-select/es/Select.js
  init_react();

  // node_modules/rc-select/es/BaseSelect.js
  var import_classnames15 = __toESM(require_classnames());

  // node_modules/rc-util/es/isMobile.js
  var isMobile_default = function() {
    if (typeof navigator === "undefined" || typeof window === "undefined") {
      return false;
    }
    var agent = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4));
  };

  // node_modules/rc-select/es/BaseSelect.js
  init_react();

  // node_modules/rc-select/es/hooks/useBaseProps.js
  init_react();
  var BaseSelectContext = /* @__PURE__ */ G(null);
  function useBaseProps() {
    return q2(BaseSelectContext);
  }

  // node_modules/rc-select/es/hooks/useDelayReset.js
  init_react();
  function useDelayReset() {
    var timeout = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
    var _React$useState = h2(false), _React$useState2 = _slicedToArray(_React$useState, 2), bool = _React$useState2[0], setBool = _React$useState2[1];
    var delayRef = _2(null);
    var cancelLatest = function cancelLatest2() {
      window.clearTimeout(delayRef.current);
    };
    p2(function() {
      return cancelLatest;
    }, []);
    var delaySetBool = function delaySetBool2(value, callback) {
      cancelLatest();
      delayRef.current = window.setTimeout(function() {
        setBool(value);
        if (callback) {
          callback();
        }
      }, timeout);
    };
    return [bool, delaySetBool, cancelLatest];
  }

  // node_modules/rc-select/es/hooks/useLock.js
  init_react();
  function useLock() {
    var duration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250;
    var lockRef = _2(null);
    var timeoutRef = _2(null);
    p2(function() {
      return function() {
        window.clearTimeout(timeoutRef.current);
      };
    }, []);
    function doLock(locked) {
      if (locked || lockRef.current === null) {
        lockRef.current = locked;
      }
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(function() {
        lockRef.current = null;
      }, duration);
    }
    return [function() {
      return lockRef.current;
    }, doLock];
  }

  // node_modules/rc-select/es/hooks/useSelectTriggerControl.js
  init_react();
  function useSelectTriggerControl(elements, open, triggerOpen, customizedTrigger) {
    var propsRef = _2(null);
    propsRef.current = {
      open,
      triggerOpen,
      customizedTrigger
    };
    p2(function() {
      function onGlobalMouseDown(event) {
        var _propsRef$current;
        if ((_propsRef$current = propsRef.current) !== null && _propsRef$current !== void 0 && _propsRef$current.customizedTrigger) {
          return;
        }
        var target = event.target;
        if (target.shadowRoot && event.composed) {
          target = event.composedPath()[0] || target;
        }
        if (propsRef.current.open && elements().filter(function(element) {
          return element;
        }).every(function(element) {
          return !element.contains(target) && element !== target;
        })) {
          propsRef.current.triggerOpen(false);
        }
      }
      window.addEventListener("mousedown", onGlobalMouseDown);
      return function() {
        return window.removeEventListener("mousedown", onGlobalMouseDown);
      };
    }, []);
  }

  // node_modules/rc-select/es/Selector/index.js
  init_react();
  init_react();

  // node_modules/rc-select/es/Selector/MultipleSelector.js
  init_react();
  init_react();
  var import_classnames9 = __toESM(require_classnames());

  // node_modules/rc-overflow/es/Overflow.js
  init_react();
  init_react();
  var import_classnames6 = __toESM(require_classnames());

  // node_modules/rc-overflow/es/Item.js
  init_react();
  var import_classnames4 = __toESM(require_classnames());
  var _excluded31 = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"];
  var UNDEFINED2 = void 0;
  function InternalItem(props, ref) {
    var prefixCls = props.prefixCls, invalidate = props.invalidate, item = props.item, renderItem = props.renderItem, responsive = props.responsive, responsiveDisabled = props.responsiveDisabled, registerSize = props.registerSize, itemKey2 = props.itemKey, className = props.className, style3 = props.style, children = props.children, display = props.display, order = props.order, _props$component = props.component, Component = _props$component === void 0 ? "div" : _props$component, restProps = _objectWithoutProperties(props, _excluded31);
    var mergedHidden = responsive && !display;
    function internalRegisterSize(width) {
      registerSize(itemKey2, width);
    }
    p2(function() {
      return function() {
        internalRegisterSize(null);
      };
    }, []);
    var childNode = renderItem && item !== UNDEFINED2 ? renderItem(item) : children;
    var overflowStyle;
    if (!invalidate) {
      overflowStyle = {
        opacity: mergedHidden ? 0 : 1,
        height: mergedHidden ? 0 : UNDEFINED2,
        overflowY: mergedHidden ? "hidden" : UNDEFINED2,
        order: responsive ? order : UNDEFINED2,
        pointerEvents: mergedHidden ? "none" : UNDEFINED2,
        position: mergedHidden ? "absolute" : UNDEFINED2
      };
    }
    var overflowProps = {};
    if (mergedHidden) {
      overflowProps["aria-hidden"] = true;
    }
    var itemNode = /* @__PURE__ */ y(Component, _extends({
      className: (0, import_classnames4.default)(!invalidate && prefixCls, className),
      style: _objectSpread2(_objectSpread2({}, overflowStyle), style3)
    }, overflowProps, restProps, {
      ref
    }), childNode);
    if (responsive) {
      itemNode = /* @__PURE__ */ y(es_default, {
        onResize: function onResize2(_ref) {
          var offsetWidth = _ref.offsetWidth;
          internalRegisterSize(offsetWidth);
        },
        disabled: responsiveDisabled
      }, itemNode);
    }
    return itemNode;
  }
  var Item = /* @__PURE__ */ k3(InternalItem);
  Item.displayName = "Item";
  var Item_default = Item;

  // node_modules/rc-overflow/es/hooks/useEffectState.js
  init_react();

  // node_modules/rc-overflow/es/hooks/channelUpdate.js
  function channelUpdate(callback) {
    if (typeof MessageChannel === "undefined") {
      raf_default(callback);
    } else {
      var channel = new MessageChannel();
      channel.port1.onmessage = function() {
        return callback();
      };
      channel.port2.postMessage(void 0);
    }
  }

  // node_modules/rc-overflow/es/hooks/useEffectState.js
  function useBatcher() {
    var updateFuncRef = _2(null);
    var notifyEffectUpdate = function notifyEffectUpdate2(callback) {
      if (!updateFuncRef.current) {
        updateFuncRef.current = [];
        channelUpdate(function() {
          dn(function() {
            updateFuncRef.current.forEach(function(fn2) {
              fn2();
            });
            updateFuncRef.current = null;
          });
        });
      }
      updateFuncRef.current.push(callback);
    };
    return notifyEffectUpdate;
  }
  function useEffectState(notifyEffectUpdate, defaultValue) {
    var _React$useState = h2(defaultValue), _React$useState2 = _slicedToArray(_React$useState, 2), stateValue = _React$useState2[0], setStateValue = _React$useState2[1];
    var setEffectVal = useEvent(function(nextValue) {
      notifyEffectUpdate(function() {
        setStateValue(nextValue);
      });
    });
    return [stateValue, setEffectVal];
  }

  // node_modules/rc-overflow/es/RawItem.js
  init_react();
  var import_classnames5 = __toESM(require_classnames());
  var _excluded32 = ["component"];
  var _excluded210 = ["className"];
  var _excluded33 = ["className"];
  var InternalRawItem = function InternalRawItem2(props, ref) {
    var context = q2(OverflowContext);
    if (!context) {
      var _props$component = props.component, Component = _props$component === void 0 ? "div" : _props$component, _restProps = _objectWithoutProperties(props, _excluded32);
      return /* @__PURE__ */ y(Component, _extends({}, _restProps, {
        ref
      }));
    }
    var contextClassName = context.className, restContext = _objectWithoutProperties(context, _excluded210);
    var className = props.className, restProps = _objectWithoutProperties(props, _excluded33);
    return /* @__PURE__ */ y(OverflowContext.Provider, {
      value: null
    }, /* @__PURE__ */ y(Item_default, _extends({
      ref,
      className: (0, import_classnames5.default)(contextClassName, className)
    }, restContext, restProps)));
  };
  var RawItem = /* @__PURE__ */ k3(InternalRawItem);
  RawItem.displayName = "RawItem";
  var RawItem_default = RawItem;

  // node_modules/rc-overflow/es/Overflow.js
  var _excluded34 = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"];
  var OverflowContext = /* @__PURE__ */ G(null);
  var RESPONSIVE = "responsive";
  var INVALIDATE = "invalidate";
  function defaultRenderRest(omittedItems) {
    return "+ ".concat(omittedItems.length, " ...");
  }
  function Overflow(props, ref) {
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-overflow" : _props$prefixCls, _props$data = props.data, data = _props$data === void 0 ? [] : _props$data, renderItem = props.renderItem, renderRawItem = props.renderRawItem, itemKey2 = props.itemKey, _props$itemWidth = props.itemWidth, itemWidth = _props$itemWidth === void 0 ? 10 : _props$itemWidth, ssr = props.ssr, style3 = props.style, className = props.className, maxCount = props.maxCount, renderRest = props.renderRest, renderRawRest = props.renderRawRest, suffix = props.suffix, _props$component = props.component, Component = _props$component === void 0 ? "div" : _props$component, itemComponent = props.itemComponent, onVisibleChange = props.onVisibleChange, restProps = _objectWithoutProperties(props, _excluded34);
    var fullySSR = ssr === "full";
    var notifyEffectUpdate = useBatcher();
    var _useEffectState = useEffectState(notifyEffectUpdate, null), _useEffectState2 = _slicedToArray(_useEffectState, 2), containerWidth = _useEffectState2[0], setContainerWidth = _useEffectState2[1];
    var mergedContainerWidth = containerWidth || 0;
    var _useEffectState3 = useEffectState(notifyEffectUpdate, /* @__PURE__ */ new Map()), _useEffectState4 = _slicedToArray(_useEffectState3, 2), itemWidths = _useEffectState4[0], setItemWidths = _useEffectState4[1];
    var _useEffectState5 = useEffectState(notifyEffectUpdate, 0), _useEffectState6 = _slicedToArray(_useEffectState5, 2), prevRestWidth = _useEffectState6[0], setPrevRestWidth = _useEffectState6[1];
    var _useEffectState7 = useEffectState(notifyEffectUpdate, 0), _useEffectState8 = _slicedToArray(_useEffectState7, 2), restWidth = _useEffectState8[0], setRestWidth = _useEffectState8[1];
    var _useEffectState9 = useEffectState(notifyEffectUpdate, 0), _useEffectState10 = _slicedToArray(_useEffectState9, 2), suffixWidth = _useEffectState10[0], setSuffixWidth = _useEffectState10[1];
    var _useState = h2(null), _useState2 = _slicedToArray(_useState, 2), suffixFixedStart = _useState2[0], setSuffixFixedStart = _useState2[1];
    var _useState3 = h2(null), _useState4 = _slicedToArray(_useState3, 2), displayCount = _useState4[0], setDisplayCount = _useState4[1];
    var mergedDisplayCount = F2(function() {
      if (displayCount === null && fullySSR) {
        return Number.MAX_SAFE_INTEGER;
      }
      return displayCount || 0;
    }, [displayCount, containerWidth]);
    var _useState5 = h2(false), _useState6 = _slicedToArray(_useState5, 2), restReady = _useState6[0], setRestReady = _useState6[1];
    var itemPrefixCls = "".concat(prefixCls, "-item");
    var mergedRestWidth = Math.max(prevRestWidth, restWidth);
    var isResponsive = maxCount === RESPONSIVE;
    var shouldResponsive = data.length && isResponsive;
    var invalidate = maxCount === INVALIDATE;
    var showRest = shouldResponsive || typeof maxCount === "number" && data.length > maxCount;
    var mergedData = F2(function() {
      var items = data;
      if (shouldResponsive) {
        if (containerWidth === null && fullySSR) {
          items = data;
        } else {
          items = data.slice(0, Math.min(data.length, mergedContainerWidth / itemWidth));
        }
      } else if (typeof maxCount === "number") {
        items = data.slice(0, maxCount);
      }
      return items;
    }, [data, itemWidth, containerWidth, maxCount, shouldResponsive]);
    var omittedItems = F2(function() {
      if (shouldResponsive) {
        return data.slice(mergedDisplayCount + 1);
      }
      return data.slice(mergedData.length);
    }, [data, mergedData, shouldResponsive, mergedDisplayCount]);
    var getKey2 = T2(function(item, index2) {
      var _ref;
      if (typeof itemKey2 === "function") {
        return itemKey2(item);
      }
      return (_ref = itemKey2 && (item === null || item === void 0 ? void 0 : item[itemKey2])) !== null && _ref !== void 0 ? _ref : index2;
    }, [itemKey2]);
    var mergedRenderItem = T2(renderItem || function(item) {
      return item;
    }, [renderItem]);
    function updateDisplayCount(count, suffixFixedStartVal, notReady) {
      if (displayCount === count && (suffixFixedStartVal === void 0 || suffixFixedStartVal === suffixFixedStart)) {
        return;
      }
      setDisplayCount(count);
      if (!notReady) {
        setRestReady(count < data.length - 1);
        onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(count);
      }
      if (suffixFixedStartVal !== void 0) {
        setSuffixFixedStart(suffixFixedStartVal);
      }
    }
    function onOverflowResize(_4, element) {
      setContainerWidth(element.clientWidth);
    }
    function registerSize(key, width) {
      setItemWidths(function(origin) {
        var clone = new Map(origin);
        if (width === null) {
          clone.delete(key);
        } else {
          clone.set(key, width);
        }
        return clone;
      });
    }
    function registerOverflowSize(_4, width) {
      setRestWidth(width);
      setPrevRestWidth(restWidth);
    }
    function registerSuffixSize(_4, width) {
      setSuffixWidth(width);
    }
    function getItemWidth(index2) {
      return itemWidths.get(getKey2(mergedData[index2], index2));
    }
    useLayoutEffect_default(function() {
      if (mergedContainerWidth && typeof mergedRestWidth === "number" && mergedData) {
        var totalWidth = suffixWidth;
        var len = mergedData.length;
        var lastIndex = len - 1;
        if (!len) {
          updateDisplayCount(0, null);
          return;
        }
        for (var i3 = 0; i3 < len; i3 += 1) {
          var currentItemWidth = getItemWidth(i3);
          if (fullySSR) {
            currentItemWidth = currentItemWidth || 0;
          }
          if (currentItemWidth === void 0) {
            updateDisplayCount(i3 - 1, void 0, true);
            break;
          }
          totalWidth += currentItemWidth;
          if (
            // Only one means `totalWidth` is the final width
            lastIndex === 0 && totalWidth <= mergedContainerWidth || // Last two width will be the final width
            i3 === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth
          ) {
            updateDisplayCount(lastIndex, null);
            break;
          } else if (totalWidth + mergedRestWidth > mergedContainerWidth) {
            updateDisplayCount(i3 - 1, totalWidth - currentItemWidth - suffixWidth + restWidth);
            break;
          }
        }
        if (suffix && getItemWidth(0) + suffixWidth > mergedContainerWidth) {
          setSuffixFixedStart(null);
        }
      }
    }, [mergedContainerWidth, itemWidths, restWidth, suffixWidth, getKey2, mergedData]);
    var displayRest = restReady && !!omittedItems.length;
    var suffixStyle = {};
    if (suffixFixedStart !== null && shouldResponsive) {
      suffixStyle = {
        position: "absolute",
        left: suffixFixedStart,
        top: 0
      };
    }
    var itemSharedProps = {
      prefixCls: itemPrefixCls,
      responsive: shouldResponsive,
      component: itemComponent,
      invalidate
    };
    var internalRenderItemNode = renderRawItem ? function(item, index2) {
      var key = getKey2(item, index2);
      return /* @__PURE__ */ y(OverflowContext.Provider, {
        key,
        value: _objectSpread2(_objectSpread2({}, itemSharedProps), {}, {
          order: index2,
          item,
          itemKey: key,
          registerSize,
          display: index2 <= mergedDisplayCount
        })
      }, renderRawItem(item, index2));
    } : function(item, index2) {
      var key = getKey2(item, index2);
      return /* @__PURE__ */ y(Item_default, _extends({}, itemSharedProps, {
        order: index2,
        key,
        item,
        renderItem: mergedRenderItem,
        itemKey: key,
        registerSize,
        display: index2 <= mergedDisplayCount
      }));
    };
    var restNode;
    var restContextProps = {
      order: displayRest ? mergedDisplayCount : Number.MAX_SAFE_INTEGER,
      className: "".concat(itemPrefixCls, "-rest"),
      registerSize: registerOverflowSize,
      display: displayRest
    };
    if (!renderRawRest) {
      var mergedRenderRest = renderRest || defaultRenderRest;
      restNode = /* @__PURE__ */ y(Item_default, _extends({}, itemSharedProps, restContextProps), typeof mergedRenderRest === "function" ? mergedRenderRest(omittedItems) : mergedRenderRest);
    } else if (renderRawRest) {
      restNode = /* @__PURE__ */ y(OverflowContext.Provider, {
        value: _objectSpread2(_objectSpread2({}, itemSharedProps), restContextProps)
      }, renderRawRest(omittedItems));
    }
    var overflowNode = /* @__PURE__ */ y(Component, _extends({
      className: (0, import_classnames6.default)(!invalidate && prefixCls, className),
      style: style3,
      ref
    }, restProps), mergedData.map(internalRenderItemNode), showRest ? restNode : null, suffix && /* @__PURE__ */ y(Item_default, _extends({}, itemSharedProps, {
      responsive: isResponsive,
      responsiveDisabled: !shouldResponsive,
      order: mergedDisplayCount,
      className: "".concat(itemPrefixCls, "-suffix"),
      registerSize: registerSuffixSize,
      display: true,
      style: suffixStyle
    }), suffix));
    if (isResponsive) {
      overflowNode = /* @__PURE__ */ y(es_default, {
        onResize: onOverflowResize,
        disabled: !shouldResponsive
      }, overflowNode);
    }
    return overflowNode;
  }
  var ForwardOverflow = /* @__PURE__ */ k3(Overflow);
  ForwardOverflow.displayName = "Overflow";
  ForwardOverflow.Item = RawItem_default;
  ForwardOverflow.RESPONSIVE = RESPONSIVE;
  ForwardOverflow.INVALIDATE = INVALIDATE;
  var Overflow_default = ForwardOverflow;

  // node_modules/rc-overflow/es/index.js
  var es_default4 = Overflow_default;

  // node_modules/rc-select/es/TransBtn.js
  init_react();
  var import_classnames7 = __toESM(require_classnames());
  var TransBtn = function TransBtn2(_ref) {
    var className = _ref.className, customizeIcon = _ref.customizeIcon, customizeIconProps = _ref.customizeIconProps, _onMouseDown = _ref.onMouseDown, onClick = _ref.onClick, children = _ref.children;
    var icon;
    if (typeof customizeIcon === "function") {
      icon = customizeIcon(customizeIconProps);
    } else {
      icon = customizeIcon;
    }
    return /* @__PURE__ */ y("span", {
      className,
      onMouseDown: function onMouseDown(event) {
        event.preventDefault();
        if (_onMouseDown) {
          _onMouseDown(event);
        }
      },
      style: {
        userSelect: "none",
        WebkitUserSelect: "none"
      },
      unselectable: "on",
      onClick,
      "aria-hidden": true
    }, icon !== void 0 ? icon : /* @__PURE__ */ y("span", {
      className: (0, import_classnames7.default)(className.split(/\s+/).map(function(cls) {
        return "".concat(cls, "-icon");
      }))
    }, children));
  };
  var TransBtn_default = TransBtn;

  // node_modules/rc-select/es/Selector/Input.js
  init_react();
  var import_classnames8 = __toESM(require_classnames());
  var Input2 = function Input3(_ref, ref) {
    var _inputNode2, _inputNode2$props;
    var prefixCls = _ref.prefixCls, id = _ref.id, inputElement = _ref.inputElement, disabled = _ref.disabled, tabIndex = _ref.tabIndex, autoFocus = _ref.autoFocus, autoComplete = _ref.autoComplete, editable = _ref.editable, activeDescendantId = _ref.activeDescendantId, value = _ref.value, maxLength = _ref.maxLength, _onKeyDown = _ref.onKeyDown, _onMouseDown = _ref.onMouseDown, _onChange = _ref.onChange, onPaste = _ref.onPaste, _onCompositionStart = _ref.onCompositionStart, _onCompositionEnd = _ref.onCompositionEnd, open = _ref.open, attrs = _ref.attrs;
    var inputNode = inputElement || /* @__PURE__ */ y("input", null);
    var _inputNode = inputNode, originRef = _inputNode.ref, originProps = _inputNode.props;
    var onOriginKeyDown = originProps.onKeyDown, onOriginChange = originProps.onChange, onOriginMouseDown = originProps.onMouseDown, onOriginCompositionStart = originProps.onCompositionStart, onOriginCompositionEnd = originProps.onCompositionEnd, style3 = originProps.style;
    warning(!("maxLength" in inputNode.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled.");
    inputNode = /* @__PURE__ */ sn(inputNode, _objectSpread2(_objectSpread2(_objectSpread2({
      type: "search"
    }, originProps), {}, {
      // Override over origin props
      id,
      ref: composeRef(ref, originRef),
      disabled,
      tabIndex,
      autoComplete: autoComplete || "off",
      autoFocus,
      className: (0, import_classnames8.default)("".concat(prefixCls, "-selection-search-input"), (_inputNode2 = inputNode) === null || _inputNode2 === void 0 ? void 0 : (_inputNode2$props = _inputNode2.props) === null || _inputNode2$props === void 0 ? void 0 : _inputNode2$props.className),
      role: "combobox",
      "aria-expanded": open,
      "aria-haspopup": "listbox",
      "aria-owns": "".concat(id, "_list"),
      "aria-autocomplete": "list",
      "aria-controls": "".concat(id, "_list"),
      "aria-activedescendant": activeDescendantId
    }, attrs), {}, {
      value: editable ? value : "",
      maxLength,
      readOnly: !editable,
      unselectable: !editable ? "on" : null,
      style: _objectSpread2(_objectSpread2({}, style3), {}, {
        opacity: editable ? null : 0
      }),
      onKeyDown: function onKeyDown(event) {
        _onKeyDown(event);
        if (onOriginKeyDown) {
          onOriginKeyDown(event);
        }
      },
      onMouseDown: function onMouseDown(event) {
        _onMouseDown(event);
        if (onOriginMouseDown) {
          onOriginMouseDown(event);
        }
      },
      onChange: function onChange(event) {
        _onChange(event);
        if (onOriginChange) {
          onOriginChange(event);
        }
      },
      onCompositionStart: function onCompositionStart(event) {
        _onCompositionStart(event);
        if (onOriginCompositionStart) {
          onOriginCompositionStart(event);
        }
      },
      onCompositionEnd: function onCompositionEnd(event) {
        _onCompositionEnd(event);
        if (onOriginCompositionEnd) {
          onOriginCompositionEnd(event);
        }
      },
      onPaste
    }));
    return inputNode;
  };
  var RefInput = /* @__PURE__ */ k3(Input2);
  RefInput.displayName = "Input";
  var Input_default = RefInput;

  // node_modules/rc-select/es/hooks/useLayoutEffect.js
  init_react();

  // node_modules/rc-select/es/utils/commonUtil.js
  function toArray3(value) {
    if (Array.isArray(value)) {
      return value;
    }
    return value !== void 0 ? [value] : [];
  }
  var isClient = typeof window !== "undefined" && window.document && window.document.documentElement;
  var isBrowserClient = isClient;
  function hasValue2(value) {
    return value !== void 0 && value !== null;
  }
  function isTitleType(title) {
    return ["string", "number"].includes(_typeof(title));
  }
  function getTitle3(item) {
    var title = void 0;
    if (item) {
      if (isTitleType(item.title)) {
        title = item.title.toString();
      } else if (isTitleType(item.label)) {
        title = item.label.toString();
      }
    }
    return title;
  }

  // node_modules/rc-select/es/hooks/useLayoutEffect.js
  function useLayoutEffect2(effect, deps) {
    if (isBrowserClient) {
      y2(effect, deps);
    } else {
      p2(effect, deps);
    }
  }

  // node_modules/rc-select/es/Selector/MultipleSelector.js
  function itemKey(value) {
    var _value$key;
    return (_value$key = value.key) !== null && _value$key !== void 0 ? _value$key : value.value;
  }
  var onPreventMouseDown = function onPreventMouseDown2(event) {
    event.preventDefault();
    event.stopPropagation();
  };
  var SelectSelector = function SelectSelector2(props) {
    var id = props.id, prefixCls = props.prefixCls, values = props.values, open = props.open, searchValue = props.searchValue, autoClearSearchValue = props.autoClearSearchValue, inputRef = props.inputRef, placeholder = props.placeholder, disabled = props.disabled, mode = props.mode, showSearch = props.showSearch, autoFocus = props.autoFocus, autoComplete = props.autoComplete, activeDescendantId = props.activeDescendantId, tabIndex = props.tabIndex, removeIcon = props.removeIcon, maxTagCount = props.maxTagCount, maxTagTextLength = props.maxTagTextLength, _props$maxTagPlacehol = props.maxTagPlaceholder, maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function(omittedValues) {
      return "+ ".concat(omittedValues.length, " ...");
    } : _props$maxTagPlacehol, tagRender = props.tagRender, onToggleOpen = props.onToggleOpen, onRemove = props.onRemove, onInputChange = props.onInputChange, onInputPaste = props.onInputPaste, onInputKeyDown = props.onInputKeyDown, onInputMouseDown = props.onInputMouseDown, onInputCompositionStart = props.onInputCompositionStart, onInputCompositionEnd = props.onInputCompositionEnd;
    var measureRef = _2(null);
    var _useState = h2(0), _useState2 = _slicedToArray(_useState, 2), inputWidth = _useState2[0], setInputWidth = _useState2[1];
    var _useState3 = h2(false), _useState4 = _slicedToArray(_useState3, 2), focused = _useState4[0], setFocused = _useState4[1];
    var selectionPrefixCls = "".concat(prefixCls, "-selection");
    var inputValue = open || mode === "multiple" && autoClearSearchValue === false || mode === "tags" ? searchValue : "";
    var inputEditable = mode === "tags" || mode === "multiple" && autoClearSearchValue === false || showSearch && (open || focused);
    useLayoutEffect2(function() {
      setInputWidth(measureRef.current.scrollWidth);
    }, [inputValue]);
    function defaultRenderSelector(item, content, itemDisabled, closable, onClose) {
      return /* @__PURE__ */ y("span", {
        className: (0, import_classnames9.default)("".concat(selectionPrefixCls, "-item"), _defineProperty({}, "".concat(selectionPrefixCls, "-item-disabled"), itemDisabled)),
        title: getTitle3(item)
      }, /* @__PURE__ */ y("span", {
        className: "".concat(selectionPrefixCls, "-item-content")
      }, content), closable && /* @__PURE__ */ y(TransBtn_default, {
        className: "".concat(selectionPrefixCls, "-item-remove"),
        onMouseDown: onPreventMouseDown,
        onClick: onClose,
        customizeIcon: removeIcon
      }, "\xD7"));
    }
    function customizeRenderSelector(value, content, itemDisabled, closable, onClose) {
      var onMouseDown = function onMouseDown2(e3) {
        onPreventMouseDown(e3);
        onToggleOpen(!open);
      };
      return /* @__PURE__ */ y("span", {
        onMouseDown
      }, tagRender({
        label: content,
        value,
        disabled: itemDisabled,
        closable,
        onClose
      }));
    }
    function renderItem(valueItem) {
      var itemDisabled = valueItem.disabled, label = valueItem.label, value = valueItem.value;
      var closable = !disabled && !itemDisabled;
      var displayLabel = label;
      if (typeof maxTagTextLength === "number") {
        if (typeof label === "string" || typeof label === "number") {
          var strLabel = String(displayLabel);
          if (strLabel.length > maxTagTextLength) {
            displayLabel = "".concat(strLabel.slice(0, maxTagTextLength), "...");
          }
        }
      }
      var onClose = function onClose2(event) {
        if (event)
          event.stopPropagation();
        onRemove(valueItem);
      };
      return typeof tagRender === "function" ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose) : defaultRenderSelector(valueItem, displayLabel, itemDisabled, closable, onClose);
    }
    function renderRest(omittedValues) {
      var content = typeof maxTagPlaceholder === "function" ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
      return defaultRenderSelector({
        title: content
      }, content, false);
    }
    var inputNode = /* @__PURE__ */ y("div", {
      className: "".concat(selectionPrefixCls, "-search"),
      style: {
        width: inputWidth
      },
      onFocus: function onFocus() {
        setFocused(true);
      },
      onBlur: function onBlur() {
        setFocused(false);
      }
    }, /* @__PURE__ */ y(Input_default, {
      ref: inputRef,
      open,
      prefixCls,
      id,
      inputElement: null,
      disabled,
      autoFocus,
      autoComplete,
      editable: inputEditable,
      activeDescendantId,
      value: inputValue,
      onKeyDown: onInputKeyDown,
      onMouseDown: onInputMouseDown,
      onChange: onInputChange,
      onPaste: onInputPaste,
      onCompositionStart: onInputCompositionStart,
      onCompositionEnd: onInputCompositionEnd,
      tabIndex,
      attrs: pickAttrs(props, true)
    }), /* @__PURE__ */ y("span", {
      ref: measureRef,
      className: "".concat(selectionPrefixCls, "-search-mirror"),
      "aria-hidden": true
    }, inputValue, "\xA0"));
    var selectionNode = /* @__PURE__ */ y(es_default4, {
      prefixCls: "".concat(selectionPrefixCls, "-overflow"),
      data: values,
      renderItem,
      renderRest,
      suffix: inputNode,
      itemKey,
      maxCount: maxTagCount
    });
    return /* @__PURE__ */ y(k, null, selectionNode, !values.length && !inputValue && /* @__PURE__ */ y("span", {
      className: "".concat(selectionPrefixCls, "-placeholder")
    }, placeholder));
  };
  var MultipleSelector_default = SelectSelector;

  // node_modules/rc-select/es/Selector/SingleSelector.js
  init_react();
  var SingleSelector = function SingleSelector2(props) {
    var inputElement = props.inputElement, prefixCls = props.prefixCls, id = props.id, inputRef = props.inputRef, disabled = props.disabled, autoFocus = props.autoFocus, autoComplete = props.autoComplete, activeDescendantId = props.activeDescendantId, mode = props.mode, open = props.open, values = props.values, placeholder = props.placeholder, tabIndex = props.tabIndex, showSearch = props.showSearch, searchValue = props.searchValue, activeValue = props.activeValue, maxLength = props.maxLength, onInputKeyDown = props.onInputKeyDown, onInputMouseDown = props.onInputMouseDown, onInputChange = props.onInputChange, onInputPaste = props.onInputPaste, onInputCompositionStart = props.onInputCompositionStart, onInputCompositionEnd = props.onInputCompositionEnd, title = props.title;
    var _React$useState = h2(false), _React$useState2 = _slicedToArray(_React$useState, 2), inputChanged = _React$useState2[0], setInputChanged = _React$useState2[1];
    var combobox = mode === "combobox";
    var inputEditable = combobox || showSearch;
    var item = values[0];
    var inputValue = searchValue || "";
    if (combobox && activeValue && !inputChanged) {
      inputValue = activeValue;
    }
    p2(function() {
      if (combobox) {
        setInputChanged(false);
      }
    }, [combobox, activeValue]);
    var hasTextInput = mode !== "combobox" && !open && !showSearch ? false : !!inputValue;
    var selectionTitle = title === void 0 ? getTitle3(item) : title;
    var renderPlaceholder = function renderPlaceholder2() {
      if (item) {
        return null;
      }
      var hiddenStyle = hasTextInput ? {
        visibility: "hidden"
      } : void 0;
      return /* @__PURE__ */ y("span", {
        className: "".concat(prefixCls, "-selection-placeholder"),
        style: hiddenStyle
      }, placeholder);
    };
    return /* @__PURE__ */ y(k, null, /* @__PURE__ */ y("span", {
      className: "".concat(prefixCls, "-selection-search")
    }, /* @__PURE__ */ y(Input_default, {
      ref: inputRef,
      prefixCls,
      id,
      open,
      inputElement,
      disabled,
      autoFocus,
      autoComplete,
      editable: inputEditable,
      activeDescendantId,
      value: inputValue,
      onKeyDown: onInputKeyDown,
      onMouseDown: onInputMouseDown,
      onChange: function onChange(e3) {
        setInputChanged(true);
        onInputChange(e3);
      },
      onPaste: onInputPaste,
      onCompositionStart: onInputCompositionStart,
      onCompositionEnd: onInputCompositionEnd,
      tabIndex,
      attrs: pickAttrs(props, true),
      maxLength: combobox ? maxLength : void 0
    })), !combobox && item ? /* @__PURE__ */ y("span", {
      className: "".concat(prefixCls, "-selection-item"),
      title: selectionTitle,
      style: hasTextInput ? {
        visibility: "hidden"
      } : void 0
    }, item.label) : null, renderPlaceholder());
  };
  var SingleSelector_default = SingleSelector;

  // node_modules/rc-select/es/utils/keyUtil.js
  function isValidateOpenKey(currentKeyCode) {
    return ![
      // System function button
      KeyCode_default.ESC,
      KeyCode_default.SHIFT,
      KeyCode_default.BACKSPACE,
      KeyCode_default.TAB,
      KeyCode_default.WIN_KEY,
      KeyCode_default.ALT,
      KeyCode_default.META,
      KeyCode_default.WIN_KEY_RIGHT,
      KeyCode_default.CTRL,
      KeyCode_default.SEMICOLON,
      KeyCode_default.EQUALS,
      KeyCode_default.CAPS_LOCK,
      KeyCode_default.CONTEXT_MENU,
      // F1-F12
      KeyCode_default.F1,
      KeyCode_default.F2,
      KeyCode_default.F3,
      KeyCode_default.F4,
      KeyCode_default.F5,
      KeyCode_default.F6,
      KeyCode_default.F7,
      KeyCode_default.F8,
      KeyCode_default.F9,
      KeyCode_default.F10,
      KeyCode_default.F11,
      KeyCode_default.F12
    ].includes(currentKeyCode);
  }

  // node_modules/rc-select/es/Selector/index.js
  var Selector = function Selector2(props, ref) {
    var inputRef = _2(null);
    var compositionStatusRef = _2(false);
    var prefixCls = props.prefixCls, open = props.open, mode = props.mode, showSearch = props.showSearch, tokenWithEnter = props.tokenWithEnter, autoClearSearchValue = props.autoClearSearchValue, onSearch = props.onSearch, onSearchSubmit = props.onSearchSubmit, onToggleOpen = props.onToggleOpen, onInputKeyDown = props.onInputKeyDown, domRef = props.domRef;
    A2(ref, function() {
      return {
        focus: function focus() {
          inputRef.current.focus();
        },
        blur: function blur() {
          inputRef.current.blur();
        }
      };
    });
    var _useLock = useLock(0), _useLock2 = _slicedToArray(_useLock, 2), getInputMouseDown = _useLock2[0], setInputMouseDown = _useLock2[1];
    var onInternalInputKeyDown = function onInternalInputKeyDown2(event) {
      var which = event.which;
      if (which === KeyCode_default.UP || which === KeyCode_default.DOWN) {
        event.preventDefault();
      }
      if (onInputKeyDown) {
        onInputKeyDown(event);
      }
      if (which === KeyCode_default.ENTER && mode === "tags" && !compositionStatusRef.current && !open) {
        onSearchSubmit === null || onSearchSubmit === void 0 ? void 0 : onSearchSubmit(event.target.value);
      }
      if (isValidateOpenKey(which)) {
        onToggleOpen(true);
      }
    };
    var onInternalInputMouseDown = function onInternalInputMouseDown2() {
      setInputMouseDown(true);
    };
    var pastedTextRef = _2(null);
    var triggerOnSearch = function triggerOnSearch2(value) {
      if (onSearch(value, true, compositionStatusRef.current) !== false) {
        onToggleOpen(true);
      }
    };
    var onInputCompositionStart = function onInputCompositionStart2() {
      compositionStatusRef.current = true;
    };
    var onInputCompositionEnd = function onInputCompositionEnd2(e3) {
      compositionStatusRef.current = false;
      if (mode !== "combobox") {
        triggerOnSearch(e3.target.value);
      }
    };
    var onInputChange = function onInputChange2(event) {
      var value = event.target.value;
      if (tokenWithEnter && pastedTextRef.current && /[\r\n]/.test(pastedTextRef.current)) {
        var replacedText = pastedTextRef.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
        value = value.replace(replacedText, pastedTextRef.current);
      }
      pastedTextRef.current = null;
      triggerOnSearch(value);
    };
    var onInputPaste = function onInputPaste2(e3) {
      var clipboardData = e3.clipboardData;
      var value = clipboardData.getData("text");
      pastedTextRef.current = value;
    };
    var onClick = function onClick2(_ref) {
      var target = _ref.target;
      if (target !== inputRef.current) {
        var isIE = document.body.style.msTouchAction !== void 0;
        if (isIE) {
          setTimeout(function() {
            inputRef.current.focus();
          });
        } else {
          inputRef.current.focus();
        }
      }
    };
    var onMouseDown = function onMouseDown2(event) {
      var inputMouseDown = getInputMouseDown();
      if (event.target !== inputRef.current && !inputMouseDown && mode !== "combobox") {
        event.preventDefault();
      }
      if (mode !== "combobox" && (!showSearch || !inputMouseDown) || !open) {
        if (open && autoClearSearchValue !== false) {
          onSearch("", true, false);
        }
        onToggleOpen();
      }
    };
    var sharedProps = {
      inputRef,
      onInputKeyDown: onInternalInputKeyDown,
      onInputMouseDown: onInternalInputMouseDown,
      onInputChange,
      onInputPaste,
      onInputCompositionStart,
      onInputCompositionEnd
    };
    var selectNode = mode === "multiple" || mode === "tags" ? /* @__PURE__ */ y(MultipleSelector_default, _extends({}, props, sharedProps)) : /* @__PURE__ */ y(SingleSelector_default, _extends({}, props, sharedProps));
    return /* @__PURE__ */ y("div", {
      ref: domRef,
      className: "".concat(prefixCls, "-selector"),
      onClick,
      onMouseDown
    }, selectNode);
  };
  var ForwardSelector = /* @__PURE__ */ k3(Selector);
  ForwardSelector.displayName = "Selector";
  var Selector_default = ForwardSelector;

  // node_modules/@rc-component/trigger/es/index.js
  var import_classnames13 = __toESM(require_classnames());
  init_react();

  // node_modules/@rc-component/trigger/es/context.js
  init_react();
  var TriggerContext = /* @__PURE__ */ G(null);
  var context_default2 = TriggerContext;

  // node_modules/@rc-component/trigger/es/hooks/useAction.js
  init_react();
  function toArray4(val) {
    return val ? Array.isArray(val) ? val : [val] : [];
  }
  function useAction(mobile, action, showAction, hideAction) {
    return F2(function() {
      var mergedShowAction = toArray4(showAction !== null && showAction !== void 0 ? showAction : action);
      var mergedHideAction = toArray4(hideAction !== null && hideAction !== void 0 ? hideAction : action);
      var showActionSet = new Set(mergedShowAction);
      var hideActionSet = new Set(mergedHideAction);
      if (mobile) {
        if (showActionSet.has("hover")) {
          showActionSet.delete("hover");
          showActionSet.add("click");
        }
        if (hideActionSet.has("hover")) {
          hideActionSet.delete("hover");
          hideActionSet.add("click");
        }
      }
      return [showActionSet, hideActionSet];
    }, [mobile, action, showAction, hideAction]);
  }

  // node_modules/@rc-component/trigger/es/hooks/useAlign.js
  init_react();

  // node_modules/@rc-component/trigger/es/util.js
  function isPointsEq() {
    var a1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var a22 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var isAlignPoint = arguments.length > 2 ? arguments[2] : void 0;
    if (isAlignPoint) {
      return a1[0] === a22[0];
    }
    return a1[0] === a22[0] && a1[1] === a22[1];
  }
  function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
    var points = align.points;
    var placements = Object.keys(builtinPlacements);
    for (var i3 = 0; i3 < placements.length; i3 += 1) {
      var _builtinPlacements$pl;
      var placement2 = placements[i3];
      if (isPointsEq((_builtinPlacements$pl = builtinPlacements[placement2]) === null || _builtinPlacements$pl === void 0 ? void 0 : _builtinPlacements$pl.points, points, isAlignPoint)) {
        return "".concat(prefixCls, "-placement-").concat(placement2);
      }
    }
    return "";
  }
  function getMotion(prefixCls, motion, animation, transitionName) {
    if (motion) {
      return motion;
    }
    if (animation) {
      return {
        motionName: "".concat(prefixCls, "-").concat(animation)
      };
    }
    if (transitionName) {
      return {
        motionName: transitionName
      };
    }
    return null;
  }
  function getWin(ele) {
    return ele.ownerDocument.defaultView;
  }
  function collectScroller(ele) {
    var scrollerList = [];
    var current = ele === null || ele === void 0 ? void 0 : ele.parentElement;
    var scrollStyle = ["hidden", "scroll", "clip", "auto"];
    while (current) {
      var _getWin$getComputedSt = getWin(current).getComputedStyle(current), overflowX = _getWin$getComputedSt.overflowX, overflowY = _getWin$getComputedSt.overflowY, overflow = _getWin$getComputedSt.overflow;
      if ([overflowX, overflowY, overflow].some(function(o4) {
        return scrollStyle.includes(o4);
      })) {
        scrollerList.push(current);
      }
      current = current.parentElement;
    }
    return scrollerList;
  }
  function toNum(num) {
    var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    return Number.isNaN(num) ? defaultValue : num;
  }
  function getPxValue(val) {
    return toNum(parseFloat(val), 0);
  }
  function getVisibleArea(initArea, scrollerList) {
    var visibleArea = _objectSpread2({}, initArea);
    (scrollerList || []).forEach(function(ele) {
      if (ele instanceof HTMLBodyElement) {
        return;
      }
      var _getWin$getComputedSt2 = getWin(ele).getComputedStyle(ele), overflow = _getWin$getComputedSt2.overflow, overflowClipMargin = _getWin$getComputedSt2.overflowClipMargin, borderTopWidth = _getWin$getComputedSt2.borderTopWidth, borderBottomWidth = _getWin$getComputedSt2.borderBottomWidth, borderLeftWidth = _getWin$getComputedSt2.borderLeftWidth, borderRightWidth = _getWin$getComputedSt2.borderRightWidth;
      var eleRect = ele.getBoundingClientRect();
      var eleOutHeight = ele.offsetHeight, eleInnerHeight = ele.clientHeight, eleOutWidth = ele.offsetWidth, eleInnerWidth = ele.clientWidth;
      var borderTopNum = getPxValue(borderTopWidth);
      var borderBottomNum = getPxValue(borderBottomWidth);
      var borderLeftNum = getPxValue(borderLeftWidth);
      var borderRightNum = getPxValue(borderRightWidth);
      var scaleX = toNum(Math.round(eleRect.width / eleOutWidth * 1e3) / 1e3);
      var scaleY = toNum(Math.round(eleRect.height / eleOutHeight * 1e3) / 1e3);
      var eleScrollWidth = (eleOutWidth - eleInnerWidth - borderLeftNum - borderRightNum) * scaleX;
      var eleScrollHeight = (eleOutHeight - eleInnerHeight - borderTopNum - borderBottomNum) * scaleY;
      var scaledBorderTopWidth = borderTopNum * scaleY;
      var scaledBorderBottomWidth = borderBottomNum * scaleY;
      var scaledBorderLeftWidth = borderLeftNum * scaleX;
      var scaledBorderRightWidth = borderRightNum * scaleX;
      var clipMarginWidth = 0;
      var clipMarginHeight = 0;
      if (overflow === "clip") {
        var clipNum = getPxValue(overflowClipMargin);
        clipMarginWidth = clipNum * scaleX;
        clipMarginHeight = clipNum * scaleY;
      }
      var eleLeft = eleRect.x + scaledBorderLeftWidth - clipMarginWidth;
      var eleTop = eleRect.y + scaledBorderTopWidth - clipMarginHeight;
      var eleRight = eleLeft + eleRect.width + 2 * clipMarginWidth - scaledBorderLeftWidth - scaledBorderRightWidth - eleScrollWidth;
      var eleBottom = eleTop + eleRect.height + 2 * clipMarginHeight - scaledBorderTopWidth - scaledBorderBottomWidth - eleScrollHeight;
      visibleArea.left = Math.max(visibleArea.left, eleLeft);
      visibleArea.top = Math.max(visibleArea.top, eleTop);
      visibleArea.right = Math.min(visibleArea.right, eleRight);
      visibleArea.bottom = Math.min(visibleArea.bottom, eleBottom);
    });
    return visibleArea;
  }

  // node_modules/@rc-component/trigger/es/hooks/useAlign.js
  function getUnitOffset(size) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var offsetStr = "".concat(offset);
    var cells = offsetStr.match(/^(.*)\%$/);
    if (cells) {
      return size * (parseFloat(cells[1]) / 100);
    }
    return parseFloat(offsetStr);
  }
  function getNumberOffset(rect, offset) {
    var _ref = offset || [], _ref2 = _slicedToArray(_ref, 2), offsetX = _ref2[0], offsetY = _ref2[1];
    return [getUnitOffset(rect.width, offsetX), getUnitOffset(rect.height, offsetY)];
  }
  function splitPoints() {
    var points = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return [points[0], points[1]];
  }
  function getAlignPoint(rect, points) {
    var topBottom = points[0];
    var leftRight = points[1];
    var x4;
    var y3;
    if (topBottom === "t") {
      y3 = rect.y;
    } else if (topBottom === "b") {
      y3 = rect.y + rect.height;
    } else {
      y3 = rect.y + rect.height / 2;
    }
    if (leftRight === "l") {
      x4 = rect.x;
    } else if (leftRight === "r") {
      x4 = rect.x + rect.width;
    } else {
      x4 = rect.x + rect.width / 2;
    }
    return {
      x: x4,
      y: y3
    };
  }
  function reversePoints(points, index2) {
    var reverseMap = {
      t: "b",
      b: "t",
      l: "r",
      r: "l"
    };
    return points.map(function(point, i3) {
      if (i3 === index2) {
        return reverseMap[point] || "c";
      }
      return point;
    }).join("");
  }
  function useAlign(open, popupEle, target, placement2, builtinPlacements, popupAlign, onPopupAlign) {
    var _React$useState = h2({
      ready: false,
      offsetX: 0,
      offsetY: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: builtinPlacements[placement2] || {}
    }), _React$useState2 = _slicedToArray(_React$useState, 2), offsetInfo = _React$useState2[0], setOffsetInfo = _React$useState2[1];
    var alignCountRef = _2(0);
    var scrollerList = F2(function() {
      if (!popupEle) {
        return [];
      }
      return collectScroller(popupEle);
    }, [popupEle]);
    var prevFlipRef = _2({});
    var resetFlipCache = function resetFlipCache2() {
      prevFlipRef.current = {};
    };
    if (!open) {
      resetFlipCache();
    }
    var onAlign = useEvent(function() {
      if (popupEle && target && open) {
        let getIntersectionVisibleArea = function(offsetX, offsetY) {
          var area = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : visibleArea;
          var l3 = popupRect.x + offsetX;
          var t3 = popupRect.y + offsetY;
          var r3 = l3 + popupWidth;
          var b3 = t3 + popupHeight;
          var visibleL = Math.max(l3, area.left);
          var visibleT = Math.max(t3, area.top);
          var visibleR = Math.min(r3, area.right);
          var visibleB = Math.min(b3, area.bottom);
          return Math.max(0, (visibleR - visibleL) * (visibleB - visibleT));
        }, syncNextPopupPosition = function() {
          nextPopupY = popupRect.y + nextOffsetY;
          nextPopupBottom = nextPopupY + popupHeight;
          nextPopupX = popupRect.x + nextOffsetX;
          nextPopupRight = nextPopupX + popupWidth;
        };
        var popupElement = popupEle;
        var originLeft = popupElement.style.left;
        var originTop = popupElement.style.top;
        var doc = popupElement.ownerDocument;
        var win = getWin(popupElement);
        var placementInfo = _objectSpread2(_objectSpread2({}, builtinPlacements[placement2]), popupAlign);
        popupElement.style.left = "0";
        popupElement.style.top = "0";
        var targetRect;
        if (Array.isArray(target)) {
          targetRect = {
            x: target[0],
            y: target[1],
            width: 0,
            height: 0
          };
        } else {
          var rect = target.getBoundingClientRect();
          targetRect = {
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height
          };
        }
        var popupRect = popupElement.getBoundingClientRect();
        var _win$getComputedStyle = win.getComputedStyle(popupElement), width = _win$getComputedStyle.width, height = _win$getComputedStyle.height;
        var _doc$documentElement = doc.documentElement, clientWidth = _doc$documentElement.clientWidth, clientHeight = _doc$documentElement.clientHeight, scrollWidth = _doc$documentElement.scrollWidth, scrollHeight = _doc$documentElement.scrollHeight, scrollTop = _doc$documentElement.scrollTop, scrollLeft = _doc$documentElement.scrollLeft;
        var popupHeight = popupRect.height;
        var popupWidth = popupRect.width;
        var targetHeight = targetRect.height;
        var targetWidth = targetRect.width;
        var visibleRegion = {
          left: 0,
          top: 0,
          right: clientWidth,
          bottom: clientHeight
        };
        var scrollRegion = {
          left: -scrollLeft,
          top: -scrollTop,
          right: scrollWidth - scrollLeft,
          bottom: scrollHeight - scrollTop
        };
        var htmlRegion = placementInfo.htmlRegion;
        var VISIBLE = "visible";
        var VISIBLE_FIRST = "visibleFirst";
        if (htmlRegion !== "scroll" && htmlRegion !== VISIBLE_FIRST) {
          htmlRegion = VISIBLE;
        }
        var isVisibleFirst = htmlRegion === VISIBLE_FIRST;
        var scrollRegionArea = getVisibleArea(scrollRegion, scrollerList);
        var visibleRegionArea = getVisibleArea(visibleRegion, scrollerList);
        var visibleArea = htmlRegion === VISIBLE ? visibleRegionArea : scrollRegionArea;
        var adjustCheckVisibleArea = isVisibleFirst ? visibleRegionArea : visibleArea;
        popupElement.style.left = originLeft;
        popupElement.style.top = originTop;
        var _scaleX = toNum(Math.round(popupWidth / parseFloat(width) * 1e3) / 1e3);
        var _scaleY = toNum(Math.round(popupHeight / parseFloat(height) * 1e3) / 1e3);
        if (_scaleX === 0 || _scaleY === 0 || isDOM(target) && !isVisible_default(target)) {
          return;
        }
        var offset = placementInfo.offset, targetOffset = placementInfo.targetOffset;
        var _getNumberOffset = getNumberOffset(popupRect, offset), _getNumberOffset2 = _slicedToArray(_getNumberOffset, 2), popupOffsetX = _getNumberOffset2[0], popupOffsetY = _getNumberOffset2[1];
        var _getNumberOffset3 = getNumberOffset(targetRect, targetOffset), _getNumberOffset4 = _slicedToArray(_getNumberOffset3, 2), targetOffsetX = _getNumberOffset4[0], targetOffsetY = _getNumberOffset4[1];
        targetRect.x -= targetOffsetX;
        targetRect.y -= targetOffsetY;
        var _ref3 = placementInfo.points || [], _ref4 = _slicedToArray(_ref3, 2), popupPoint = _ref4[0], targetPoint = _ref4[1];
        var targetPoints = splitPoints(targetPoint);
        var popupPoints = splitPoints(popupPoint);
        var targetAlignPoint = getAlignPoint(targetRect, targetPoints);
        var popupAlignPoint = getAlignPoint(popupRect, popupPoints);
        var nextAlignInfo = _objectSpread2({}, placementInfo);
        var nextOffsetX = targetAlignPoint.x - popupAlignPoint.x + popupOffsetX;
        var nextOffsetY = targetAlignPoint.y - popupAlignPoint.y + popupOffsetY;
        var originIntersectionVisibleArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY);
        var originIntersectionRecommendArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY, visibleRegionArea);
        var targetAlignPointTL = getAlignPoint(targetRect, ["t", "l"]);
        var popupAlignPointTL = getAlignPoint(popupRect, ["t", "l"]);
        var targetAlignPointBR = getAlignPoint(targetRect, ["b", "r"]);
        var popupAlignPointBR = getAlignPoint(popupRect, ["b", "r"]);
        var overflow = placementInfo.overflow || {};
        var adjustX = overflow.adjustX, adjustY = overflow.adjustY, shiftX = overflow.shiftX, shiftY = overflow.shiftY;
        var supportAdjust = function supportAdjust2(val) {
          if (typeof val === "boolean") {
            return val;
          }
          return val >= 0;
        };
        var nextPopupY;
        var nextPopupBottom;
        var nextPopupX;
        var nextPopupRight;
        syncNextPopupPosition();
        var needAdjustY = supportAdjust(adjustY);
        var sameTB = popupPoints[0] === targetPoints[0];
        if (needAdjustY && popupPoints[0] === "t" && (nextPopupBottom > adjustCheckVisibleArea.bottom || prevFlipRef.current.bt)) {
          var tmpNextOffsetY = nextOffsetY;
          if (sameTB) {
            tmpNextOffsetY -= popupHeight - targetHeight;
          } else {
            tmpNextOffsetY = targetAlignPointTL.y - popupAlignPointBR.y - popupOffsetY;
          }
          var newVisibleArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY);
          var newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY, visibleRegionArea);
          if (
            // Of course use larger one
            newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
            newVisibleRecommendArea >= originIntersectionRecommendArea)
          ) {
            prevFlipRef.current.bt = true;
            nextOffsetY = tmpNextOffsetY;
            nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
          } else {
            prevFlipRef.current.bt = false;
          }
        }
        if (needAdjustY && popupPoints[0] === "b" && (nextPopupY < adjustCheckVisibleArea.top || prevFlipRef.current.tb)) {
          var _tmpNextOffsetY = nextOffsetY;
          if (sameTB) {
            _tmpNextOffsetY += popupHeight - targetHeight;
          } else {
            _tmpNextOffsetY = targetAlignPointBR.y - popupAlignPointTL.y - popupOffsetY;
          }
          var _newVisibleArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY);
          var _newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY, visibleRegionArea);
          if (
            // Of course use larger one
            _newVisibleArea > originIntersectionVisibleArea || _newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
            _newVisibleRecommendArea >= originIntersectionRecommendArea)
          ) {
            prevFlipRef.current.tb = true;
            nextOffsetY = _tmpNextOffsetY;
            nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
          } else {
            prevFlipRef.current.tb = false;
          }
        }
        var needAdjustX = supportAdjust(adjustX);
        var sameLR = popupPoints[1] === targetPoints[1];
        if (needAdjustX && popupPoints[1] === "l" && (nextPopupRight > adjustCheckVisibleArea.right || prevFlipRef.current.rl)) {
          var tmpNextOffsetX = nextOffsetX;
          if (sameLR) {
            tmpNextOffsetX -= popupWidth - targetWidth;
          } else {
            tmpNextOffsetX = targetAlignPointTL.x - popupAlignPointBR.x - popupOffsetX;
          }
          var _newVisibleArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY);
          var _newVisibleRecommendArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY, visibleRegionArea);
          if (
            // Of course use larger one
            _newVisibleArea2 > originIntersectionVisibleArea || _newVisibleArea2 === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
            _newVisibleRecommendArea2 >= originIntersectionRecommendArea)
          ) {
            prevFlipRef.current.rl = true;
            nextOffsetX = tmpNextOffsetX;
            nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
          } else {
            prevFlipRef.current.rl = false;
          }
        }
        if (needAdjustX && popupPoints[1] === "r" && (nextPopupX < adjustCheckVisibleArea.left || prevFlipRef.current.lr)) {
          var _tmpNextOffsetX = nextOffsetX;
          if (sameLR) {
            _tmpNextOffsetX += popupWidth - targetWidth;
          } else {
            _tmpNextOffsetX = targetAlignPointBR.x - popupAlignPointTL.x - popupOffsetX;
          }
          var _newVisibleArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY);
          var _newVisibleRecommendArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY, visibleRegionArea);
          if (
            // Of course use larger one
            _newVisibleArea3 > originIntersectionVisibleArea || _newVisibleArea3 === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
            _newVisibleRecommendArea3 >= originIntersectionRecommendArea)
          ) {
            prevFlipRef.current.lr = true;
            nextOffsetX = _tmpNextOffsetX;
            nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
          } else {
            prevFlipRef.current.lr = false;
          }
        }
        syncNextPopupPosition();
        var numShiftX = shiftX === true ? 0 : shiftX;
        if (typeof numShiftX === "number") {
          if (nextPopupX < visibleArea.left) {
            nextOffsetX -= nextPopupX - visibleArea.left;
            if (targetRect.x + targetWidth < visibleArea.left + numShiftX) {
              nextOffsetX += targetRect.x - visibleArea.left + targetWidth - numShiftX;
            }
          }
          if (nextPopupRight > visibleArea.right) {
            nextOffsetX -= nextPopupRight - visibleArea.right;
            if (targetRect.x > visibleArea.right - numShiftX) {
              nextOffsetX += targetRect.x - visibleArea.right + numShiftX;
            }
          }
        }
        var numShiftY = shiftY === true ? 0 : shiftY;
        if (typeof numShiftY === "number") {
          if (nextPopupY < visibleArea.top) {
            nextOffsetY -= nextPopupY - visibleArea.top;
            if (targetRect.y + targetHeight < visibleArea.top + numShiftY) {
              nextOffsetY += targetRect.y - visibleArea.top + targetHeight - numShiftY;
            }
          }
          if (nextPopupBottom > visibleArea.bottom) {
            nextOffsetY -= nextPopupBottom - visibleArea.bottom;
            if (targetRect.y > visibleArea.bottom - numShiftY) {
              nextOffsetY += targetRect.y - visibleArea.bottom + numShiftY;
            }
          }
        }
        var popupLeft = popupRect.x + nextOffsetX;
        var popupRight = popupLeft + popupWidth;
        var popupTop = popupRect.y + nextOffsetY;
        var popupBottom = popupTop + popupHeight;
        var targetLeft = targetRect.x;
        var targetRight = targetLeft + targetWidth;
        var targetTop = targetRect.y;
        var targetBottom = targetTop + targetHeight;
        var maxLeft = Math.max(popupLeft, targetLeft);
        var minRight = Math.min(popupRight, targetRight);
        var xCenter = (maxLeft + minRight) / 2;
        var nextArrowX = xCenter - popupLeft;
        var maxTop = Math.max(popupTop, targetTop);
        var minBottom = Math.min(popupBottom, targetBottom);
        var yCenter = (maxTop + minBottom) / 2;
        var nextArrowY = yCenter - popupTop;
        onPopupAlign === null || onPopupAlign === void 0 ? void 0 : onPopupAlign(popupEle, nextAlignInfo);
        setOffsetInfo({
          ready: true,
          offsetX: nextOffsetX / _scaleX,
          offsetY: nextOffsetY / _scaleY,
          arrowX: nextArrowX / _scaleX,
          arrowY: nextArrowY / _scaleY,
          scaleX: _scaleX,
          scaleY: _scaleY,
          align: nextAlignInfo
        });
      }
    });
    var triggerAlign = function triggerAlign2() {
      alignCountRef.current += 1;
      var id = alignCountRef.current;
      Promise.resolve().then(function() {
        if (alignCountRef.current === id) {
          onAlign();
        }
      });
    };
    var resetReady = function resetReady2() {
      setOffsetInfo(function(ori) {
        return _objectSpread2(_objectSpread2({}, ori), {}, {
          ready: false
        });
      });
    };
    useLayoutEffect_default(resetReady, [placement2]);
    useLayoutEffect_default(function() {
      if (!open) {
        resetReady();
      }
    }, [open]);
    return [offsetInfo.ready, offsetInfo.offsetX, offsetInfo.offsetY, offsetInfo.arrowX, offsetInfo.arrowY, offsetInfo.scaleX, offsetInfo.scaleY, offsetInfo.align, triggerAlign];
  }

  // node_modules/@rc-component/trigger/es/hooks/useWatch.js
  function useWatch2(open, target, popup, onAlign) {
    useLayoutEffect_default(function() {
      if (open && target && popup) {
        let notifyScroll = function() {
          onAlign();
        };
        var targetElement = target;
        var popupElement = popup;
        var targetScrollList = collectScroller(targetElement);
        var popupScrollList = collectScroller(popupElement);
        var win = getWin(popupElement);
        var mergedList = new Set([win].concat(_toConsumableArray(targetScrollList), _toConsumableArray(popupScrollList)));
        mergedList.forEach(function(scroller) {
          scroller.addEventListener("scroll", notifyScroll, {
            passive: true
          });
        });
        win.addEventListener("resize", notifyScroll, {
          passive: true
        });
        onAlign();
        return function() {
          mergedList.forEach(function(scroller) {
            scroller.removeEventListener("scroll", notifyScroll);
            win.removeEventListener("resize", notifyScroll);
          });
        };
      }
    }, [open, target, popup]);
  }

  // node_modules/@rc-component/trigger/es/Popup/index.js
  var import_classnames12 = __toESM(require_classnames());
  init_react();

  // node_modules/@rc-component/trigger/es/Popup/Arrow.js
  var import_classnames10 = __toESM(require_classnames());
  init_react();
  function Arrow(props) {
    var prefixCls = props.prefixCls, align = props.align, arrow = props.arrow, arrowPos = props.arrowPos;
    var _ref = arrow || {}, className = _ref.className, content = _ref.content;
    var _arrowPos$x = arrowPos.x, x4 = _arrowPos$x === void 0 ? 0 : _arrowPos$x, _arrowPos$y = arrowPos.y, y3 = _arrowPos$y === void 0 ? 0 : _arrowPos$y;
    var arrowRef = _2();
    if (!align || !align.points) {
      return null;
    }
    var alignStyle = {
      position: "absolute"
    };
    if (align.autoArrow !== false) {
      var popupPoints = align.points[0];
      var targetPoints = align.points[1];
      var popupTB = popupPoints[0];
      var popupLR = popupPoints[1];
      var targetTB = targetPoints[0];
      var targetLR = targetPoints[1];
      if (popupTB === targetTB || !["t", "b"].includes(popupTB)) {
        alignStyle.top = y3;
      } else if (popupTB === "t") {
        alignStyle.top = 0;
      } else {
        alignStyle.bottom = 0;
      }
      if (popupLR === targetLR || !["l", "r"].includes(popupLR)) {
        alignStyle.left = x4;
      } else if (popupLR === "l") {
        alignStyle.left = 0;
      } else {
        alignStyle.right = 0;
      }
    }
    return /* @__PURE__ */ y("div", {
      ref: arrowRef,
      className: (0, import_classnames10.default)("".concat(prefixCls, "-arrow"), className),
      style: alignStyle
    }, content);
  }

  // node_modules/@rc-component/trigger/es/Popup/Mask.js
  var import_classnames11 = __toESM(require_classnames());
  init_react();
  function Mask(props) {
    var prefixCls = props.prefixCls, open = props.open, zIndex = props.zIndex, mask = props.mask, motion = props.motion;
    if (!mask) {
      return null;
    }
    return /* @__PURE__ */ y(es_default2, _extends({}, motion, {
      motionAppear: true,
      visible: open,
      removeOnLeave: true
    }), function(_ref) {
      var className = _ref.className;
      return /* @__PURE__ */ y("div", {
        style: {
          zIndex
        },
        className: (0, import_classnames11.default)("".concat(prefixCls, "-mask"), className)
      });
    });
  }

  // node_modules/@rc-component/trigger/es/Popup/PopupContent.js
  init_react();
  var PopupContent = /* @__PURE__ */ x3(function(_ref) {
    var children = _ref.children;
    return children;
  }, function(_4, next2) {
    return next2.cache;
  });
  if (true) {
    PopupContent.displayName = "PopupContent";
  }
  var PopupContent_default = PopupContent;

  // node_modules/@rc-component/trigger/es/Popup/index.js
  var Popup = /* @__PURE__ */ k3(function(props, ref) {
    var popup = props.popup, className = props.className, prefixCls = props.prefixCls, style3 = props.style, target = props.target, _onVisibleChanged = props.onVisibleChanged, open = props.open, keepDom = props.keepDom, onClick = props.onClick, mask = props.mask, arrow = props.arrow, arrowPos = props.arrowPos, align = props.align, motion = props.motion, maskMotion = props.maskMotion, forceRender = props.forceRender, getPopupContainer = props.getPopupContainer, autoDestroy = props.autoDestroy, Portal2 = props.portal, zIndex = props.zIndex, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, ready = props.ready, offsetX = props.offsetX, offsetY = props.offsetY, onAlign = props.onAlign, onPrepare = props.onPrepare, stretch = props.stretch, targetWidth = props.targetWidth, targetHeight = props.targetHeight;
    var childNode = typeof popup === "function" ? popup() : popup;
    var isNodeVisible = open || keepDom;
    var getPopupContainerNeedParams = (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.length) > 0;
    var _React$useState = h2(!getPopupContainer || !getPopupContainerNeedParams), _React$useState2 = _slicedToArray(_React$useState, 2), show = _React$useState2[0], setShow = _React$useState2[1];
    useLayoutEffect_default(function() {
      if (!show && getPopupContainerNeedParams && target) {
        setShow(true);
      }
    }, [show, getPopupContainerNeedParams, target]);
    if (!show) {
      return null;
    }
    var offsetStyle = ready || !open ? {
      left: offsetX,
      top: offsetY
    } : {
      left: "-1000vw",
      top: "-1000vh"
    };
    var miscStyle = {};
    if (stretch) {
      if (stretch.includes("height") && targetHeight) {
        miscStyle.height = targetHeight;
      } else if (stretch.includes("minHeight") && targetHeight) {
        miscStyle.minHeight = targetHeight;
      }
      if (stretch.includes("width") && targetWidth) {
        miscStyle.width = targetWidth;
      } else if (stretch.includes("minWidth") && targetWidth) {
        miscStyle.minWidth = targetWidth;
      }
    }
    if (!open) {
      miscStyle.pointerEvents = "none";
    }
    return /* @__PURE__ */ y(Portal2, {
      open: forceRender || isNodeVisible,
      getContainer: getPopupContainer && function() {
        return getPopupContainer(target);
      },
      autoDestroy
    }, /* @__PURE__ */ y(Mask, {
      prefixCls,
      open,
      zIndex,
      mask,
      motion: maskMotion
    }), /* @__PURE__ */ y(es_default, {
      onResize: onAlign,
      disabled: !open
    }, function(resizeObserverRef) {
      return /* @__PURE__ */ y(es_default2, _extends({
        motionAppear: true,
        motionEnter: true,
        motionLeave: true,
        removeOnLeave: false,
        forceRender,
        leavedClassName: "".concat(prefixCls, "-hidden")
      }, motion, {
        onAppearPrepare: onPrepare,
        onEnterPrepare: onPrepare,
        visible: open,
        onVisibleChanged: function onVisibleChanged(nextVisible) {
          var _motion$onVisibleChan;
          motion === null || motion === void 0 ? void 0 : (_motion$onVisibleChan = motion.onVisibleChanged) === null || _motion$onVisibleChan === void 0 ? void 0 : _motion$onVisibleChan.call(motion, nextVisible);
          _onVisibleChanged(nextVisible);
        }
      }), function(_ref, motionRef) {
        var motionClassName = _ref.className, motionStyle = _ref.style;
        var cls = (0, import_classnames12.default)(prefixCls, motionClassName, className);
        return /* @__PURE__ */ y("div", {
          ref: composeRef(resizeObserverRef, ref, motionRef),
          className: cls,
          style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
            "--arrow-x": "".concat(arrowPos.x || 0, "px"),
            "--arrow-y": "".concat(arrowPos.y || 0, "px")
          }, offsetStyle), miscStyle), motionStyle), {}, {
            boxSizing: "border-box",
            zIndex
          }, style3),
          onMouseEnter,
          onMouseLeave,
          onClick
        }, arrow && /* @__PURE__ */ y(Arrow, {
          prefixCls,
          arrow,
          arrowPos,
          align
        }), /* @__PURE__ */ y(PopupContent_default, {
          cache: !open
        }, childNode));
      });
    }));
  });
  if (true) {
    Popup.displayName = "Popup";
  }
  var Popup_default = Popup;

  // node_modules/@rc-component/trigger/es/TriggerWrapper.js
  init_react();
  var TriggerWrapper = /* @__PURE__ */ k3(function(props, ref) {
    var children = props.children, getTriggerDOMNode = props.getTriggerDOMNode;
    var canUseRef = supportRef(children);
    var setRef = T2(function(node2) {
      fillRef(ref, getTriggerDOMNode ? getTriggerDOMNode(node2) : node2);
    }, [getTriggerDOMNode]);
    var mergedRef = useComposeRef(setRef, children.ref);
    return canUseRef ? /* @__PURE__ */ sn(children, {
      ref: mergedRef
    }) : children;
  });
  if (true) {
    TriggerWrapper.displayName = "TriggerWrapper";
  }
  var TriggerWrapper_default = TriggerWrapper;

  // node_modules/@rc-component/trigger/es/index.js
  var _excluded35 = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
  function generateTrigger() {
    var PortalComponent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : es_default3;
    var Trigger = /* @__PURE__ */ k3(function(props, ref) {
      var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-trigger-popup" : _props$prefixCls, children = props.children, _props$action = props.action, action = _props$action === void 0 ? "hover" : _props$action, showAction = props.showAction, hideAction = props.hideAction, popupVisible = props.popupVisible, defaultPopupVisible = props.defaultPopupVisible, onPopupVisibleChange = props.onPopupVisibleChange, afterPopupVisibleChange = props.afterPopupVisibleChange, mouseEnterDelay = props.mouseEnterDelay, _props$mouseLeaveDela = props.mouseLeaveDelay, mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela, focusDelay = props.focusDelay, blurDelay = props.blurDelay, mask = props.mask, _props$maskClosable = props.maskClosable, maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable, getPopupContainer = props.getPopupContainer, forceRender = props.forceRender, autoDestroy = props.autoDestroy, destroyPopupOnHide = props.destroyPopupOnHide, popup = props.popup, popupClassName = props.popupClassName, popupStyle = props.popupStyle, popupPlacement = props.popupPlacement, _props$builtinPlaceme = props.builtinPlacements, builtinPlacements = _props$builtinPlaceme === void 0 ? {} : _props$builtinPlaceme, popupAlign = props.popupAlign, zIndex = props.zIndex, stretch = props.stretch, getPopupClassNameFromAlign = props.getPopupClassNameFromAlign, alignPoint = props.alignPoint, onPopupClick = props.onPopupClick, onPopupAlign = props.onPopupAlign, arrow = props.arrow, popupMotion = props.popupMotion, maskMotion = props.maskMotion, popupTransitionName = props.popupTransitionName, popupAnimation = props.popupAnimation, maskTransitionName = props.maskTransitionName, maskAnimation = props.maskAnimation, className = props.className, getTriggerDOMNode = props.getTriggerDOMNode, restProps = _objectWithoutProperties(props, _excluded35);
      var mergedAutoDestroy = autoDestroy || destroyPopupOnHide || false;
      var _React$useState = h2(false), _React$useState2 = _slicedToArray(_React$useState, 2), mobile = _React$useState2[0], setMobile = _React$useState2[1];
      useLayoutEffect_default(function() {
        setMobile(isMobile_default());
      }, []);
      var subPopupElements = _2({});
      var parentContext = q2(context_default2);
      var context = F2(function() {
        return {
          registerSubPopup: function registerSubPopup(id2, subPopupEle) {
            subPopupElements.current[id2] = subPopupEle;
            parentContext === null || parentContext === void 0 ? void 0 : parentContext.registerSubPopup(id2, subPopupEle);
          }
        };
      }, [parentContext]);
      var id = useId();
      var _React$useState3 = h2(null), _React$useState4 = _slicedToArray(_React$useState3, 2), popupEle = _React$useState4[0], setPopupEle = _React$useState4[1];
      var setPopupRef = useEvent(function(node2) {
        if (isDOM(node2) && popupEle !== node2) {
          setPopupEle(node2);
        }
        parentContext === null || parentContext === void 0 ? void 0 : parentContext.registerSubPopup(id, node2);
      });
      var _React$useState5 = h2(null), _React$useState6 = _slicedToArray(_React$useState5, 2), targetEle = _React$useState6[0], setTargetEle = _React$useState6[1];
      var setTargetRef = useEvent(function(node2) {
        if (isDOM(node2) && targetEle !== node2) {
          setTargetEle(node2);
        }
      });
      var child = O2.only(children);
      var originChildProps = (child === null || child === void 0 ? void 0 : child.props) || {};
      var cloneProps = {};
      var inPopupOrChild = useEvent(function(ele) {
        var _childDOM$getRootNode, _popupEle$getRootNode;
        var childDOM = targetEle;
        return (childDOM === null || childDOM === void 0 ? void 0 : childDOM.contains(ele)) || (childDOM === null || childDOM === void 0 ? void 0 : (_childDOM$getRootNode = childDOM.getRootNode()) === null || _childDOM$getRootNode === void 0 ? void 0 : _childDOM$getRootNode.host) === ele || ele === childDOM || (popupEle === null || popupEle === void 0 ? void 0 : popupEle.contains(ele)) || (popupEle === null || popupEle === void 0 ? void 0 : (_popupEle$getRootNode = popupEle.getRootNode()) === null || _popupEle$getRootNode === void 0 ? void 0 : _popupEle$getRootNode.host) === ele || ele === popupEle || Object.values(subPopupElements.current).some(function(subPopupEle) {
          return (subPopupEle === null || subPopupEle === void 0 ? void 0 : subPopupEle.contains(ele)) || ele === subPopupEle;
        });
      });
      var mergePopupMotion = getMotion(prefixCls, popupMotion, popupAnimation, popupTransitionName);
      var mergeMaskMotion = getMotion(prefixCls, maskMotion, maskAnimation, maskTransitionName);
      var _React$useState7 = h2(defaultPopupVisible || false), _React$useState8 = _slicedToArray(_React$useState7, 2), internalOpen = _React$useState8[0], setInternalOpen = _React$useState8[1];
      var mergedOpen = popupVisible !== null && popupVisible !== void 0 ? popupVisible : internalOpen;
      var setMergedOpen = useEvent(function(nextOpen) {
        if (popupVisible === void 0) {
          setInternalOpen(nextOpen);
        }
      });
      useLayoutEffect_default(function() {
        setInternalOpen(popupVisible || false);
      }, [popupVisible]);
      var openRef = _2(mergedOpen);
      openRef.current = mergedOpen;
      var internalTriggerOpen = useEvent(function(nextOpen) {
        if (mergedOpen !== nextOpen) {
          setMergedOpen(nextOpen);
          onPopupVisibleChange === null || onPopupVisibleChange === void 0 ? void 0 : onPopupVisibleChange(nextOpen);
        }
      });
      var delayRef = _2();
      var clearDelay = function clearDelay2() {
        clearTimeout(delayRef.current);
      };
      var triggerOpen = function triggerOpen2(nextOpen) {
        var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        clearDelay();
        if (delay === 0) {
          internalTriggerOpen(nextOpen);
        } else {
          delayRef.current = setTimeout(function() {
            internalTriggerOpen(nextOpen);
          }, delay * 1e3);
        }
      };
      p2(function() {
        return clearDelay;
      }, []);
      var _React$useState9 = h2(false), _React$useState10 = _slicedToArray(_React$useState9, 2), inMotion = _React$useState10[0], setInMotion = _React$useState10[1];
      var mountRef = _2(true);
      useLayoutEffect_default(function() {
        if (!mountRef.current || mergedOpen) {
          setInMotion(true);
        }
        mountRef.current = true;
      }, [mergedOpen]);
      var _React$useState11 = h2(null), _React$useState12 = _slicedToArray(_React$useState11, 2), motionPrepareResolve = _React$useState12[0], setMotionPrepareResolve = _React$useState12[1];
      var _React$useState13 = h2([0, 0]), _React$useState14 = _slicedToArray(_React$useState13, 2), mousePos = _React$useState14[0], setMousePos = _React$useState14[1];
      var setMousePosByEvent = function setMousePosByEvent2(event) {
        setMousePos([event.clientX, event.clientY]);
      };
      var _useAlign = useAlign(mergedOpen, popupEle, alignPoint ? mousePos : targetEle, popupPlacement, builtinPlacements, popupAlign, onPopupAlign), _useAlign2 = _slicedToArray(_useAlign, 9), ready = _useAlign2[0], offsetX = _useAlign2[1], offsetY = _useAlign2[2], arrowX = _useAlign2[3], arrowY = _useAlign2[4], scaleX = _useAlign2[5], scaleY = _useAlign2[6], alignInfo = _useAlign2[7], onAlign = _useAlign2[8];
      var triggerAlign = useEvent(function() {
        if (!inMotion) {
          onAlign();
        }
      });
      useWatch2(mergedOpen, targetEle, popupEle, triggerAlign);
      useLayoutEffect_default(function() {
        triggerAlign();
      }, [mousePos, popupPlacement]);
      useLayoutEffect_default(function() {
        if (mergedOpen && !(builtinPlacements !== null && builtinPlacements !== void 0 && builtinPlacements[popupPlacement])) {
          triggerAlign();
        }
      }, [JSON.stringify(popupAlign)]);
      var alignedClassName = F2(function() {
        var baseClassName = getAlignPopupClassName(builtinPlacements, prefixCls, alignInfo, alignPoint);
        return (0, import_classnames13.default)(baseClassName, getPopupClassNameFromAlign === null || getPopupClassNameFromAlign === void 0 ? void 0 : getPopupClassNameFromAlign(alignInfo));
      }, [alignInfo, getPopupClassNameFromAlign, builtinPlacements, prefixCls, alignPoint]);
      A2(ref, function() {
        return {
          forceAlign: triggerAlign
        };
      });
      var onVisibleChanged = function onVisibleChanged2(visible) {
        setInMotion(false);
        onAlign();
        afterPopupVisibleChange === null || afterPopupVisibleChange === void 0 ? void 0 : afterPopupVisibleChange(visible);
      };
      var onPrepare = function onPrepare2() {
        return new Promise(function(resolve) {
          setMotionPrepareResolve(function() {
            return resolve;
          });
        });
      };
      useLayoutEffect_default(function() {
        if (motionPrepareResolve) {
          onAlign();
          motionPrepareResolve();
          setMotionPrepareResolve(null);
        }
      }, [motionPrepareResolve]);
      var _React$useState15 = h2(0), _React$useState16 = _slicedToArray(_React$useState15, 2), targetWidth = _React$useState16[0], setTargetWidth = _React$useState16[1];
      var _React$useState17 = h2(0), _React$useState18 = _slicedToArray(_React$useState17, 2), targetHeight = _React$useState18[0], setTargetHeight = _React$useState18[1];
      var onTargetResize = function onTargetResize2(_4, ele) {
        triggerAlign();
        if (stretch) {
          var rect = ele.getBoundingClientRect();
          setTargetWidth(rect.width);
          setTargetHeight(rect.height);
        }
      };
      var _useAction = useAction(mobile, action, showAction, hideAction), _useAction2 = _slicedToArray(_useAction, 2), showActions = _useAction2[0], hideActions = _useAction2[1];
      var wrapperAction = function wrapperAction2(eventName, nextOpen, delay, preEvent) {
        cloneProps[eventName] = function(event) {
          var _originChildProps$eve;
          preEvent === null || preEvent === void 0 ? void 0 : preEvent(event);
          triggerOpen(nextOpen, delay);
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          (_originChildProps$eve = originChildProps[eventName]) === null || _originChildProps$eve === void 0 ? void 0 : _originChildProps$eve.call.apply(_originChildProps$eve, [originChildProps, event].concat(args));
        };
      };
      var clickToShow = showActions.has("click");
      var clickToHide = hideActions.has("click") || hideActions.has("contextMenu");
      if (clickToShow || clickToHide) {
        cloneProps.onClick = function(event) {
          var _originChildProps$onC;
          if (openRef.current && clickToHide) {
            triggerOpen(false);
          } else if (!openRef.current && clickToShow) {
            setMousePosByEvent(event);
            triggerOpen(true);
          }
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          (_originChildProps$onC = originChildProps.onClick) === null || _originChildProps$onC === void 0 ? void 0 : _originChildProps$onC.call.apply(_originChildProps$onC, [originChildProps, event].concat(args));
        };
      }
      p2(function() {
        if (clickToHide && popupEle && (!mask || maskClosable)) {
          var clickInside = false;
          var onWindowMouseDown = function onWindowMouseDown2(_ref) {
            var target = _ref.target;
            clickInside = inPopupOrChild(target);
          };
          var onWindowClick = function onWindowClick2(_ref2) {
            var target = _ref2.target;
            if (openRef.current && !clickInside && !inPopupOrChild(target)) {
              triggerOpen(false);
            }
          };
          var win = getWin(popupEle);
          var targetRoot = targetEle === null || targetEle === void 0 ? void 0 : targetEle.getRootNode();
          win.addEventListener("mousedown", onWindowMouseDown);
          win.addEventListener("click", onWindowClick);
          var inShadow = targetRoot && targetRoot !== targetEle.ownerDocument;
          if (inShadow) {
            targetRoot.addEventListener("mousedown", onWindowMouseDown);
            targetRoot.addEventListener("click", onWindowClick);
          }
          if (true) {
            var popupRoot = popupEle.getRootNode();
            warning_default(targetRoot === popupRoot, "trigger element and popup element should in same shadow root.");
          }
          return function() {
            win.removeEventListener("mousedown", onWindowMouseDown);
            win.removeEventListener("click", onWindowClick);
            if (inShadow) {
              targetRoot.removeEventListener("mousedown", onWindowMouseDown);
              targetRoot.removeEventListener("click", onWindowClick);
            }
          };
        }
      }, [clickToHide, targetEle, popupEle, mask, maskClosable]);
      var hoverToShow = showActions.has("hover");
      var hoverToHide = hideActions.has("hover");
      var onPopupMouseEnter;
      var onPopupMouseLeave;
      if (hoverToShow) {
        wrapperAction("onMouseEnter", true, mouseEnterDelay, function(event) {
          setMousePosByEvent(event);
        });
        onPopupMouseEnter = function onPopupMouseEnter2() {
          triggerOpen(true, mouseEnterDelay);
        };
        if (alignPoint) {
          cloneProps.onMouseMove = function(event) {
            var _originChildProps$onM;
            (_originChildProps$onM = originChildProps.onMouseMove) === null || _originChildProps$onM === void 0 ? void 0 : _originChildProps$onM.call(originChildProps, event);
          };
        }
      }
      if (hoverToHide) {
        wrapperAction("onMouseLeave", false, mouseLeaveDelay);
        onPopupMouseLeave = function onPopupMouseLeave2() {
          triggerOpen(false, mouseLeaveDelay);
        };
      }
      if (showActions.has("focus")) {
        wrapperAction("onFocus", true, focusDelay);
      }
      if (hideActions.has("focus")) {
        wrapperAction("onBlur", false, blurDelay);
      }
      if (showActions.has("contextMenu")) {
        cloneProps.onContextMenu = function(event) {
          var _originChildProps$onC2;
          setMousePosByEvent(event);
          triggerOpen(true);
          event.preventDefault();
          for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
          }
          (_originChildProps$onC2 = originChildProps.onContextMenu) === null || _originChildProps$onC2 === void 0 ? void 0 : _originChildProps$onC2.call.apply(_originChildProps$onC2, [originChildProps, event].concat(args));
        };
      }
      if (className) {
        cloneProps.className = (0, import_classnames13.default)(originChildProps.className, className);
      }
      var mergedChildrenProps = _objectSpread2(_objectSpread2({}, originChildProps), cloneProps);
      var passedProps = {};
      var passedEventList = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
      passedEventList.forEach(function(eventName) {
        if (restProps[eventName]) {
          passedProps[eventName] = function() {
            var _mergedChildrenProps$;
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }
            (_mergedChildrenProps$ = mergedChildrenProps[eventName]) === null || _mergedChildrenProps$ === void 0 ? void 0 : _mergedChildrenProps$.call.apply(_mergedChildrenProps$, [mergedChildrenProps].concat(args));
            restProps[eventName].apply(restProps, args);
          };
        }
      });
      var triggerNode = /* @__PURE__ */ sn(child, _objectSpread2(_objectSpread2({}, mergedChildrenProps), passedProps));
      var arrowPos = {
        x: arrowX,
        y: arrowY
      };
      var innerArrow = arrow ? _objectSpread2({}, arrow !== true ? arrow : {}) : null;
      return /* @__PURE__ */ y(k, null, /* @__PURE__ */ y(es_default, {
        disabled: !mergedOpen,
        ref: setTargetRef,
        onResize: onTargetResize
      }, /* @__PURE__ */ y(TriggerWrapper_default, {
        getTriggerDOMNode
      }, triggerNode)), /* @__PURE__ */ y(context_default2.Provider, {
        value: context
      }, /* @__PURE__ */ y(Popup_default, {
        portal: PortalComponent,
        ref: setPopupRef,
        prefixCls,
        popup,
        className: (0, import_classnames13.default)(popupClassName, alignedClassName),
        style: popupStyle,
        target: targetEle,
        onMouseEnter: onPopupMouseEnter,
        onMouseLeave: onPopupMouseLeave,
        zIndex,
        open: mergedOpen,
        keepDom: inMotion,
        onClick: onPopupClick,
        mask,
        motion: mergePopupMotion,
        maskMotion: mergeMaskMotion,
        onVisibleChanged,
        onPrepare,
        forceRender,
        autoDestroy: mergedAutoDestroy,
        getPopupContainer,
        align: alignInfo,
        arrow: innerArrow,
        arrowPos,
        ready,
        offsetX,
        offsetY,
        onAlign: triggerAlign,
        stretch,
        targetWidth: targetWidth / scaleX,
        targetHeight: targetHeight / scaleY
      })));
    });
    if (true) {
      Trigger.displayName = "Trigger";
    }
    return Trigger;
  }
  var es_default5 = generateTrigger(es_default3);

  // node_modules/rc-select/es/SelectTrigger.js
  var import_classnames14 = __toESM(require_classnames());
  init_react();
  var _excluded36 = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"];
  var getBuiltInPlacements = function getBuiltInPlacements2(dropdownMatchSelectWidth) {
    var adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
    return {
      bottomLeft: {
        points: ["tl", "bl"],
        offset: [0, 4],
        overflow: {
          adjustX,
          adjustY: 1
        },
        htmlRegion: "scroll"
      },
      bottomRight: {
        points: ["tr", "br"],
        offset: [0, 4],
        overflow: {
          adjustX,
          adjustY: 1
        },
        htmlRegion: "scroll"
      },
      topLeft: {
        points: ["bl", "tl"],
        offset: [0, -4],
        overflow: {
          adjustX,
          adjustY: 1
        },
        htmlRegion: "scroll"
      },
      topRight: {
        points: ["br", "tr"],
        offset: [0, -4],
        overflow: {
          adjustX,
          adjustY: 1
        },
        htmlRegion: "scroll"
      }
    };
  };
  var SelectTrigger = function SelectTrigger2(props, ref) {
    var prefixCls = props.prefixCls, disabled = props.disabled, visible = props.visible, children = props.children, popupElement = props.popupElement, containerWidth = props.containerWidth, animation = props.animation, transitionName = props.transitionName, dropdownStyle = props.dropdownStyle, dropdownClassName = props.dropdownClassName, _props$direction = props.direction, direction = _props$direction === void 0 ? "ltr" : _props$direction, placement2 = props.placement, builtinPlacements = props.builtinPlacements, dropdownMatchSelectWidth = props.dropdownMatchSelectWidth, dropdownRender = props.dropdownRender, dropdownAlign = props.dropdownAlign, getPopupContainer = props.getPopupContainer, empty = props.empty, getTriggerDOMNode = props.getTriggerDOMNode, onPopupVisibleChange = props.onPopupVisibleChange, onPopupMouseEnter = props.onPopupMouseEnter, restProps = _objectWithoutProperties(props, _excluded36);
    var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
    var popupNode = popupElement;
    if (dropdownRender) {
      popupNode = dropdownRender(popupElement);
    }
    var mergedBuiltinPlacements = F2(function() {
      return builtinPlacements || getBuiltInPlacements(dropdownMatchSelectWidth);
    }, [builtinPlacements, dropdownMatchSelectWidth]);
    var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName;
    var popupRef = _2(null);
    A2(ref, function() {
      return {
        getPopupElement: function getPopupElement() {
          return popupRef.current;
        }
      };
    });
    var popupStyle = _objectSpread2({
      minWidth: containerWidth
    }, dropdownStyle);
    if (typeof dropdownMatchSelectWidth === "number") {
      popupStyle.width = dropdownMatchSelectWidth;
    } else if (dropdownMatchSelectWidth) {
      popupStyle.width = containerWidth;
    }
    return /* @__PURE__ */ y(es_default5, _extends({}, restProps, {
      showAction: onPopupVisibleChange ? ["click"] : [],
      hideAction: onPopupVisibleChange ? ["click"] : [],
      popupPlacement: placement2 || (direction === "rtl" ? "bottomRight" : "bottomLeft"),
      builtinPlacements: mergedBuiltinPlacements,
      prefixCls: dropdownPrefixCls,
      popupTransitionName: mergedTransitionName,
      popup: /* @__PURE__ */ y("div", {
        ref: popupRef,
        onMouseEnter: onPopupMouseEnter
      }, popupNode),
      popupAlign: dropdownAlign,
      popupVisible: visible,
      getPopupContainer,
      popupClassName: (0, import_classnames14.default)(dropdownClassName, _defineProperty({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
      popupStyle,
      getTriggerDOMNode,
      onPopupVisibleChange
    }), children);
  };
  var RefSelectTrigger = /* @__PURE__ */ k3(SelectTrigger);
  RefSelectTrigger.displayName = "SelectTrigger";
  var SelectTrigger_default = RefSelectTrigger;

  // node_modules/rc-select/es/utils/valueUtil.js
  function getKey(data, index2) {
    var key = data.key;
    var value;
    if ("value" in data) {
      value = data.value;
    }
    if (key !== null && key !== void 0) {
      return key;
    }
    if (value !== void 0) {
      return value;
    }
    return "rc-index-key-".concat(index2);
  }
  function fillFieldNames(fieldNames, childrenAsData) {
    var _ref = fieldNames || {}, label = _ref.label, value = _ref.value, options = _ref.options;
    return {
      label: label || (childrenAsData ? "children" : "label"),
      value: value || "value",
      options: options || "options"
    };
  }
  function flattenOptions(options) {
    var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, fieldNames = _ref2.fieldNames, childrenAsData = _ref2.childrenAsData;
    var flattenList = [];
    var _fillFieldNames = fillFieldNames(fieldNames, false), fieldLabel = _fillFieldNames.label, fieldValue = _fillFieldNames.value, fieldOptions = _fillFieldNames.options;
    function dig(list, isGroupOption) {
      list.forEach(function(data) {
        var label = data[fieldLabel];
        if (isGroupOption || !(fieldOptions in data)) {
          var value = data[fieldValue];
          flattenList.push({
            key: getKey(data, flattenList.length),
            groupOption: isGroupOption,
            data,
            label,
            value
          });
        } else {
          var grpLabel = label;
          if (grpLabel === void 0 && childrenAsData) {
            grpLabel = data.label;
          }
          flattenList.push({
            key: getKey(data, flattenList.length),
            group: true,
            data,
            label: grpLabel
          });
          dig(data[fieldOptions], true);
        }
      });
    }
    dig(options, false);
    return flattenList;
  }
  function injectPropsWithOption(option) {
    var newOption = _objectSpread2({}, option);
    if (!("props" in newOption)) {
      Object.defineProperty(newOption, "props", {
        get: function get2() {
          warning_default(false, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`.");
          return newOption;
        }
      });
    }
    return newOption;
  }
  function getSeparatedContent(text, tokens) {
    if (!tokens || !tokens.length) {
      return null;
    }
    var match2 = false;
    function separate(str, _ref3) {
      var _ref4 = _toArray(_ref3), token2 = _ref4[0], restTokens = _ref4.slice(1);
      if (!token2) {
        return [str];
      }
      var list2 = str.split(token2);
      match2 = match2 || list2.length > 1;
      return list2.reduce(function(prevList, unitStr) {
        return [].concat(_toConsumableArray(prevList), _toConsumableArray(separate(unitStr, restTokens)));
      }, []).filter(function(unit) {
        return unit;
      });
    }
    var list = separate(text, tokens);
    return match2 ? list : null;
  }

  // node_modules/rc-select/es/BaseSelect.js
  var _excluded37 = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "showArrow", "inputIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"];
  var DEFAULT_OMIT_PROPS = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"];
  function isMultiple(mode) {
    return mode === "tags" || mode === "multiple";
  }
  var BaseSelect = /* @__PURE__ */ k3(function(props, ref) {
    var _customizeRawInputEle, _classNames2;
    var id = props.id, prefixCls = props.prefixCls, className = props.className, showSearch = props.showSearch, tagRender = props.tagRender, direction = props.direction, omitDomProps = props.omitDomProps, displayValues = props.displayValues, onDisplayValuesChange = props.onDisplayValuesChange, emptyOptions = props.emptyOptions, _props$notFoundConten = props.notFoundContent, notFoundContent = _props$notFoundConten === void 0 ? "Not Found" : _props$notFoundConten, onClear = props.onClear, mode = props.mode, disabled = props.disabled, loading = props.loading, getInputElement = props.getInputElement, getRawInputElement = props.getRawInputElement, open = props.open, defaultOpen = props.defaultOpen, onDropdownVisibleChange = props.onDropdownVisibleChange, activeValue = props.activeValue, onActiveValueChange = props.onActiveValueChange, activeDescendantId = props.activeDescendantId, searchValue = props.searchValue, autoClearSearchValue = props.autoClearSearchValue, onSearch = props.onSearch, onSearchSplit = props.onSearchSplit, tokenSeparators = props.tokenSeparators, allowClear = props.allowClear, showArrow = props.showArrow, inputIcon = props.inputIcon, clearIcon = props.clearIcon, OptionList3 = props.OptionList, animation = props.animation, transitionName = props.transitionName, dropdownStyle = props.dropdownStyle, dropdownClassName = props.dropdownClassName, dropdownMatchSelectWidth = props.dropdownMatchSelectWidth, dropdownRender = props.dropdownRender, dropdownAlign = props.dropdownAlign, placement2 = props.placement, builtinPlacements = props.builtinPlacements, getPopupContainer = props.getPopupContainer, _props$showAction = props.showAction, showAction = _props$showAction === void 0 ? [] : _props$showAction, onFocus = props.onFocus, onBlur = props.onBlur, onKeyUp = props.onKeyUp, onKeyDown = props.onKeyDown, onMouseDown = props.onMouseDown, restProps = _objectWithoutProperties(props, _excluded37);
    var multiple = isMultiple(mode);
    var mergedShowSearch = (showSearch !== void 0 ? showSearch : multiple) || mode === "combobox";
    var domProps = _objectSpread2({}, restProps);
    DEFAULT_OMIT_PROPS.forEach(function(propName) {
      delete domProps[propName];
    });
    omitDomProps === null || omitDomProps === void 0 ? void 0 : omitDomProps.forEach(function(propName) {
      delete domProps[propName];
    });
    var _React$useState = h2(false), _React$useState2 = _slicedToArray(_React$useState, 2), mobile = _React$useState2[0], setMobile = _React$useState2[1];
    p2(function() {
      setMobile(isMobile_default());
    }, []);
    var containerRef = _2(null);
    var selectorDomRef = _2(null);
    var triggerRef = _2(null);
    var selectorRef = _2(null);
    var listRef = _2(null);
    var _useDelayReset = useDelayReset(), _useDelayReset2 = _slicedToArray(_useDelayReset, 3), mockFocused = _useDelayReset2[0], setMockFocused = _useDelayReset2[1], cancelSetMockFocused = _useDelayReset2[2];
    A2(ref, function() {
      var _selectorRef$current, _selectorRef$current2;
      return {
        focus: (_selectorRef$current = selectorRef.current) === null || _selectorRef$current === void 0 ? void 0 : _selectorRef$current.focus,
        blur: (_selectorRef$current2 = selectorRef.current) === null || _selectorRef$current2 === void 0 ? void 0 : _selectorRef$current2.blur,
        scrollTo: function scrollTo(arg) {
          var _listRef$current;
          return (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(arg);
        }
      };
    });
    var mergedSearchValue = F2(function() {
      var _displayValues$;
      if (mode !== "combobox") {
        return searchValue;
      }
      var val = (_displayValues$ = displayValues[0]) === null || _displayValues$ === void 0 ? void 0 : _displayValues$.value;
      return typeof val === "string" || typeof val === "number" ? String(val) : "";
    }, [searchValue, mode, displayValues]);
    var customizeInputElement = mode === "combobox" && typeof getInputElement === "function" && getInputElement() || null;
    var customizeRawInputElement = typeof getRawInputElement === "function" && getRawInputElement();
    var customizeRawInputRef = useComposeRef(selectorDomRef, customizeRawInputElement === null || customizeRawInputElement === void 0 ? void 0 : (_customizeRawInputEle = customizeRawInputElement.props) === null || _customizeRawInputEle === void 0 ? void 0 : _customizeRawInputEle.ref);
    var _React$useState3 = h2(false), _React$useState4 = _slicedToArray(_React$useState3, 2), rendered = _React$useState4[0], setRendered = _React$useState4[1];
    useLayoutEffect_default(function() {
      setRendered(true);
    }, []);
    var _useMergedState = useMergedState(false, {
      defaultValue: defaultOpen,
      value: open
    }), _useMergedState2 = _slicedToArray(_useMergedState, 2), innerOpen = _useMergedState2[0], setInnerOpen = _useMergedState2[1];
    var mergedOpen = rendered ? innerOpen : false;
    var emptyListContent = !notFoundContent && emptyOptions;
    if (disabled || emptyListContent && mergedOpen && mode === "combobox") {
      mergedOpen = false;
    }
    var triggerOpen = emptyListContent ? false : mergedOpen;
    var onToggleOpen = T2(function(newOpen) {
      var nextOpen = newOpen !== void 0 ? newOpen : !mergedOpen;
      if (!disabled) {
        setInnerOpen(nextOpen);
        if (mergedOpen !== nextOpen) {
          onDropdownVisibleChange === null || onDropdownVisibleChange === void 0 ? void 0 : onDropdownVisibleChange(nextOpen);
        }
      }
    }, [disabled, mergedOpen, setInnerOpen, onDropdownVisibleChange]);
    var tokenWithEnter = F2(function() {
      return (tokenSeparators || []).some(function(tokenSeparator) {
        return ["\n", "\r\n"].includes(tokenSeparator);
      });
    }, [tokenSeparators]);
    var onInternalSearch = function onInternalSearch2(searchText, fromTyping, isCompositing) {
      var ret = true;
      var newSearchText = searchText;
      onActiveValueChange === null || onActiveValueChange === void 0 ? void 0 : onActiveValueChange(null);
      var patchLabels = isCompositing ? null : getSeparatedContent(searchText, tokenSeparators);
      if (mode !== "combobox" && patchLabels) {
        newSearchText = "";
        onSearchSplit === null || onSearchSplit === void 0 ? void 0 : onSearchSplit(patchLabels);
        onToggleOpen(false);
        ret = false;
      }
      if (onSearch && mergedSearchValue !== newSearchText) {
        onSearch(newSearchText, {
          source: fromTyping ? "typing" : "effect"
        });
      }
      return ret;
    };
    var onInternalSearchSubmit = function onInternalSearchSubmit2(searchText) {
      if (!searchText || !searchText.trim()) {
        return;
      }
      onSearch(searchText, {
        source: "submit"
      });
    };
    p2(function() {
      if (!mergedOpen && !multiple && mode !== "combobox") {
        onInternalSearch("", false, false);
      }
    }, [mergedOpen]);
    p2(function() {
      if (innerOpen && disabled) {
        setInnerOpen(false);
      }
      if (disabled) {
        setMockFocused(false);
      }
    }, [disabled]);
    var _useLock = useLock(), _useLock2 = _slicedToArray(_useLock, 2), getClearLock = _useLock2[0], setClearLock = _useLock2[1];
    var onInternalKeyDown = function onInternalKeyDown2(event) {
      var clearLock = getClearLock();
      var which = event.which;
      if (which === KeyCode_default.ENTER) {
        if (mode !== "combobox") {
          event.preventDefault();
        }
        if (!mergedOpen) {
          onToggleOpen(true);
        }
      }
      setClearLock(!!mergedSearchValue);
      if (which === KeyCode_default.BACKSPACE && !clearLock && multiple && !mergedSearchValue && displayValues.length) {
        var cloneDisplayValues = _toConsumableArray(displayValues);
        var removedDisplayValue = null;
        for (var i3 = cloneDisplayValues.length - 1; i3 >= 0; i3 -= 1) {
          var current = cloneDisplayValues[i3];
          if (!current.disabled) {
            cloneDisplayValues.splice(i3, 1);
            removedDisplayValue = current;
            break;
          }
        }
        if (removedDisplayValue) {
          onDisplayValuesChange(cloneDisplayValues, {
            type: "remove",
            values: [removedDisplayValue]
          });
        }
      }
      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }
      if (mergedOpen && listRef.current) {
        var _listRef$current2;
        (_listRef$current2 = listRef.current).onKeyDown.apply(_listRef$current2, [event].concat(rest));
      }
      onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown.apply(void 0, [event].concat(rest));
    };
    var onInternalKeyUp = function onInternalKeyUp2(event) {
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }
      if (mergedOpen && listRef.current) {
        var _listRef$current3;
        (_listRef$current3 = listRef.current).onKeyUp.apply(_listRef$current3, [event].concat(rest));
      }
      onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp.apply(void 0, [event].concat(rest));
    };
    var onSelectorRemove = function onSelectorRemove2(val) {
      var newValues = displayValues.filter(function(i3) {
        return i3 !== val;
      });
      onDisplayValuesChange(newValues, {
        type: "remove",
        values: [val]
      });
    };
    var focusRef = _2(false);
    var onContainerFocus = function onContainerFocus2() {
      setMockFocused(true);
      if (!disabled) {
        if (onFocus && !focusRef.current) {
          onFocus.apply(void 0, arguments);
        }
        if (showAction.includes("focus")) {
          onToggleOpen(true);
        }
      }
      focusRef.current = true;
    };
    var onContainerBlur = function onContainerBlur2() {
      setMockFocused(false, function() {
        focusRef.current = false;
        onToggleOpen(false);
      });
      if (disabled) {
        return;
      }
      if (mergedSearchValue) {
        if (mode === "tags") {
          onSearch(mergedSearchValue, {
            source: "submit"
          });
        } else if (mode === "multiple") {
          onSearch("", {
            source: "blur"
          });
        }
      }
      if (onBlur) {
        onBlur.apply(void 0, arguments);
      }
    };
    var activeTimeoutIds = [];
    p2(function() {
      return function() {
        activeTimeoutIds.forEach(function(timeoutId) {
          return clearTimeout(timeoutId);
        });
        activeTimeoutIds.splice(0, activeTimeoutIds.length);
      };
    }, []);
    var onInternalMouseDown = function onInternalMouseDown2(event) {
      var _triggerRef$current;
      var target = event.target;
      var popupElement = (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.getPopupElement();
      if (popupElement && popupElement.contains(target)) {
        var timeoutId = setTimeout(function() {
          var index2 = activeTimeoutIds.indexOf(timeoutId);
          if (index2 !== -1) {
            activeTimeoutIds.splice(index2, 1);
          }
          cancelSetMockFocused();
          if (!mobile && !popupElement.contains(document.activeElement)) {
            var _selectorRef$current3;
            (_selectorRef$current3 = selectorRef.current) === null || _selectorRef$current3 === void 0 ? void 0 : _selectorRef$current3.focus();
          }
        });
        activeTimeoutIds.push(timeoutId);
      }
      for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        restArgs[_key3 - 1] = arguments[_key3];
      }
      onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown.apply(void 0, [event].concat(restArgs));
    };
    var _React$useState5 = h2(null), _React$useState6 = _slicedToArray(_React$useState5, 2), containerWidth = _React$useState6[0], setContainerWidth = _React$useState6[1];
    var _React$useState7 = h2({}), _React$useState8 = _slicedToArray(_React$useState7, 2), forceUpdate = _React$useState8[1];
    function onPopupMouseEnter() {
      forceUpdate({});
    }
    useLayoutEffect_default(function() {
      if (triggerOpen) {
        var _containerRef$current;
        var newWidth = Math.ceil((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetWidth);
        if (containerWidth !== newWidth && !Number.isNaN(newWidth)) {
          setContainerWidth(newWidth);
        }
      }
    }, [triggerOpen]);
    var onTriggerVisibleChange;
    if (customizeRawInputElement) {
      onTriggerVisibleChange = function onTriggerVisibleChange2(newOpen) {
        onToggleOpen(newOpen);
      };
    }
    useSelectTriggerControl(function() {
      var _triggerRef$current2;
      return [containerRef.current, (_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0 ? void 0 : _triggerRef$current2.getPopupElement()];
    }, triggerOpen, onToggleOpen, !!customizeRawInputElement);
    var baseSelectContext = F2(function() {
      return _objectSpread2(_objectSpread2({}, props), {}, {
        notFoundContent,
        open: mergedOpen,
        triggerOpen,
        id,
        showSearch: mergedShowSearch,
        multiple,
        toggleOpen: onToggleOpen
      });
    }, [props, notFoundContent, triggerOpen, mergedOpen, id, mergedShowSearch, multiple, onToggleOpen]);
    var mergedShowArrow = showArrow !== void 0 ? showArrow : loading || !multiple && mode !== "combobox";
    var arrowNode;
    if (mergedShowArrow) {
      arrowNode = /* @__PURE__ */ y(TransBtn_default, {
        className: (0, import_classnames15.default)("".concat(prefixCls, "-arrow"), _defineProperty({}, "".concat(prefixCls, "-arrow-loading"), loading)),
        customizeIcon: inputIcon,
        customizeIconProps: {
          loading,
          searchValue: mergedSearchValue,
          open: mergedOpen,
          focused: mockFocused,
          showSearch: mergedShowSearch
        }
      });
    }
    var clearNode;
    var onClearMouseDown = function onClearMouseDown2() {
      var _selectorRef$current4;
      onClear === null || onClear === void 0 ? void 0 : onClear();
      (_selectorRef$current4 = selectorRef.current) === null || _selectorRef$current4 === void 0 ? void 0 : _selectorRef$current4.focus();
      onDisplayValuesChange([], {
        type: "clear",
        values: displayValues
      });
      onInternalSearch("", false, false);
    };
    if (!disabled && allowClear && (displayValues.length || mergedSearchValue) && !(mode === "combobox" && mergedSearchValue === "")) {
      clearNode = /* @__PURE__ */ y(TransBtn_default, {
        className: "".concat(prefixCls, "-clear"),
        onMouseDown: onClearMouseDown,
        customizeIcon: clearIcon
      }, "\xD7");
    }
    var optionList = /* @__PURE__ */ y(OptionList3, {
      ref: listRef
    });
    var mergedClassName = (0, import_classnames15.default)(prefixCls, className, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-focused"), mockFocused), _defineProperty(_classNames2, "".concat(prefixCls, "-multiple"), multiple), _defineProperty(_classNames2, "".concat(prefixCls, "-single"), !multiple), _defineProperty(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), _defineProperty(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), _defineProperty(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames2, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classNames2, "".concat(prefixCls, "-open"), mergedOpen), _defineProperty(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), _defineProperty(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch), _classNames2));
    var selectorNode = /* @__PURE__ */ y(SelectTrigger_default, {
      ref: triggerRef,
      disabled,
      prefixCls,
      visible: triggerOpen,
      popupElement: optionList,
      containerWidth,
      animation,
      transitionName,
      dropdownStyle,
      dropdownClassName,
      direction,
      dropdownMatchSelectWidth,
      dropdownRender,
      dropdownAlign,
      placement: placement2,
      builtinPlacements,
      getPopupContainer,
      empty: emptyOptions,
      getTriggerDOMNode: function getTriggerDOMNode() {
        return selectorDomRef.current;
      },
      onPopupVisibleChange: onTriggerVisibleChange,
      onPopupMouseEnter
    }, customizeRawInputElement ? /* @__PURE__ */ sn(customizeRawInputElement, {
      ref: customizeRawInputRef
    }) : /* @__PURE__ */ y(Selector_default, _extends({}, props, {
      domRef: selectorDomRef,
      prefixCls,
      inputElement: customizeInputElement,
      ref: selectorRef,
      id,
      showSearch: mergedShowSearch,
      autoClearSearchValue,
      mode,
      activeDescendantId,
      tagRender,
      values: displayValues,
      open: mergedOpen,
      onToggleOpen,
      activeValue,
      searchValue: mergedSearchValue,
      onSearch: onInternalSearch,
      onSearchSubmit: onInternalSearchSubmit,
      onRemove: onSelectorRemove,
      tokenWithEnter
    })));
    var renderNode;
    if (customizeRawInputElement) {
      renderNode = selectorNode;
    } else {
      renderNode = /* @__PURE__ */ y("div", _extends({
        className: mergedClassName
      }, domProps, {
        ref: containerRef,
        onMouseDown: onInternalMouseDown,
        onKeyDown: onInternalKeyDown,
        onKeyUp: onInternalKeyUp,
        onFocus: onContainerFocus,
        onBlur: onContainerBlur
      }), mockFocused && !mergedOpen && /* @__PURE__ */ y("span", {
        style: {
          width: 0,
          height: 0,
          position: "absolute",
          overflow: "hidden",
          opacity: 0
        },
        "aria-live": "polite"
      }, "".concat(displayValues.map(function(_ref) {
        var label = _ref.label, value = _ref.value;
        return ["number", "string"].includes(_typeof(label)) ? label : value;
      }).join(", "))), selectorNode, arrowNode, clearNode);
    }
    return /* @__PURE__ */ y(BaseSelectContext.Provider, {
      value: baseSelectContext
    }, renderNode);
  });
  if (true) {
    BaseSelect.displayName = "BaseSelect";
  }
  var BaseSelect_default = BaseSelect;

  // node_modules/rc-select/es/hooks/useCache.js
  init_react();
  var useCache_default = function(labeledValues, valueOptions) {
    var cacheRef = _2({
      values: /* @__PURE__ */ new Map(),
      options: /* @__PURE__ */ new Map()
    });
    var filledLabeledValues = F2(function() {
      var _cacheRef$current = cacheRef.current, prevValueCache = _cacheRef$current.values, prevOptionCache = _cacheRef$current.options;
      var patchedValues = labeledValues.map(function(item) {
        if (item.label === void 0) {
          var _prevValueCache$get;
          return _objectSpread2(_objectSpread2({}, item), {}, {
            label: (_prevValueCache$get = prevValueCache.get(item.value)) === null || _prevValueCache$get === void 0 ? void 0 : _prevValueCache$get.label
          });
        }
        return item;
      });
      var valueCache = /* @__PURE__ */ new Map();
      var optionCache = /* @__PURE__ */ new Map();
      patchedValues.forEach(function(item) {
        valueCache.set(item.value, item);
        optionCache.set(item.value, valueOptions.get(item.value) || prevOptionCache.get(item.value));
      });
      cacheRef.current.values = valueCache;
      cacheRef.current.options = optionCache;
      return patchedValues;
    }, [labeledValues, valueOptions]);
    var getOption = T2(function(val) {
      return valueOptions.get(val) || cacheRef.current.options.get(val);
    }, [valueOptions]);
    return [filledLabeledValues, getOption];
  };

  // node_modules/rc-select/es/hooks/useFilterOptions.js
  init_react();
  function includes(test, search) {
    return toArray3(test).join("").toUpperCase().includes(search);
  }
  var useFilterOptions_default = function(options, fieldNames, searchValue, filterOption, optionFilterProp) {
    return F2(function() {
      if (!searchValue || filterOption === false) {
        return options;
      }
      var fieldOptions = fieldNames.options, fieldLabel = fieldNames.label, fieldValue = fieldNames.value;
      var filteredOptions = [];
      var customizeFilter = typeof filterOption === "function";
      var upperSearch = searchValue.toUpperCase();
      var filterFunc = customizeFilter ? filterOption : function(_4, option) {
        if (optionFilterProp) {
          return includes(option[optionFilterProp], upperSearch);
        }
        if (option[fieldOptions]) {
          return includes(option[fieldLabel !== "children" ? fieldLabel : "label"], upperSearch);
        }
        return includes(option[fieldValue], upperSearch);
      };
      var wrapOption = customizeFilter ? function(opt) {
        return injectPropsWithOption(opt);
      } : function(opt) {
        return opt;
      };
      options.forEach(function(item) {
        if (item[fieldOptions]) {
          var matchGroup = filterFunc(searchValue, wrapOption(item));
          if (matchGroup) {
            filteredOptions.push(item);
          } else {
            var subOptions = item[fieldOptions].filter(function(subItem) {
              return filterFunc(searchValue, wrapOption(subItem));
            });
            if (subOptions.length) {
              filteredOptions.push(_objectSpread2(_objectSpread2({}, item), {}, _defineProperty({}, fieldOptions, subOptions)));
            }
          }
          return;
        }
        if (filterFunc(searchValue, wrapOption(item))) {
          filteredOptions.push(item);
        }
      });
      return filteredOptions;
    }, [options, filterOption, optionFilterProp, searchValue, fieldNames]);
  };

  // node_modules/rc-select/es/hooks/useId.js
  init_react();
  var uuid4 = 0;
  var isBrowserClient2 = canUseDom();
  function getUUID() {
    var retId;
    if (isBrowserClient2) {
      retId = uuid4;
      uuid4 += 1;
    } else {
      retId = "TEST_OR_SSR";
    }
    return retId;
  }
  function useId2(id) {
    var _React$useState = h2(), _React$useState2 = _slicedToArray(_React$useState, 2), innerId = _React$useState2[0], setInnerId = _React$useState2[1];
    p2(function() {
      setInnerId("rc_select_".concat(getUUID()));
    }, []);
    return id || innerId;
  }

  // node_modules/rc-select/es/hooks/useOptions.js
  init_react();

  // node_modules/rc-select/es/utils/legacyUtil.js
  init_react();
  var _excluded38 = ["children", "value"];
  var _excluded211 = ["children"];
  function convertNodeToOption(node2) {
    var _ref = node2, key = _ref.key, _ref$props = _ref.props, children = _ref$props.children, value = _ref$props.value, restProps = _objectWithoutProperties(_ref$props, _excluded38);
    return _objectSpread2({
      key,
      value: value !== void 0 ? value : key,
      children
    }, restProps);
  }
  function convertChildrenToData(nodes) {
    var optionOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return toArray(nodes).map(function(node2, index2) {
      if (!/* @__PURE__ */ an(node2) || !node2.type) {
        return null;
      }
      var _ref2 = node2, isSelectOptGroup = _ref2.type.isSelectOptGroup, key = _ref2.key, _ref2$props = _ref2.props, children = _ref2$props.children, restProps = _objectWithoutProperties(_ref2$props, _excluded211);
      if (optionOnly || !isSelectOptGroup) {
        return convertNodeToOption(node2);
      }
      return _objectSpread2(_objectSpread2({
        key: "__RC_SELECT_GRP__".concat(key === null ? index2 : key, "__"),
        label: key
      }, restProps), {}, {
        options: convertChildrenToData(children)
      });
    }).filter(function(data) {
      return data;
    });
  }

  // node_modules/rc-select/es/hooks/useOptions.js
  function useOptions(options, children, fieldNames, optionFilterProp, optionLabelProp) {
    return F2(function() {
      var mergedOptions = options;
      var childrenAsData = !options;
      if (childrenAsData) {
        mergedOptions = convertChildrenToData(children);
      }
      var valueOptions = /* @__PURE__ */ new Map();
      var labelOptions = /* @__PURE__ */ new Map();
      var setLabelOptions = function setLabelOptions2(labelOptionsMap, option, key) {
        if (key && typeof key === "string") {
          labelOptionsMap.set(option[key], option);
        }
      };
      function dig(optionList) {
        var isChildren = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        for (var i3 = 0; i3 < optionList.length; i3 += 1) {
          var option = optionList[i3];
          if (!option[fieldNames.options] || isChildren) {
            valueOptions.set(option[fieldNames.value], option);
            setLabelOptions(labelOptions, option, fieldNames.label);
            setLabelOptions(labelOptions, option, optionFilterProp);
            setLabelOptions(labelOptions, option, optionLabelProp);
          } else {
            dig(option[fieldNames.options], true);
          }
        }
      }
      dig(mergedOptions);
      return {
        options: mergedOptions,
        valueOptions,
        labelOptions
      };
    }, [options, children, fieldNames, optionFilterProp, optionLabelProp]);
  }

  // node_modules/rc-select/es/hooks/useRefFunc.js
  init_react();
  function useRefFunc(callback) {
    var funcRef = _2();
    funcRef.current = callback;
    var cacheFn = T2(function() {
      return funcRef.current.apply(funcRef, arguments);
    }, []);
    return cacheFn;
  }

  // node_modules/rc-select/es/OptGroup.js
  var OptGroup = function OptGroup2() {
    return null;
  };
  OptGroup.isSelectOptGroup = true;
  var OptGroup_default = OptGroup;

  // node_modules/rc-select/es/Option.js
  var Option = function Option2() {
    return null;
  };
  Option.isSelectOption = true;
  var Option_default = Option;

  // node_modules/rc-select/es/OptionList.js
  var import_classnames19 = __toESM(require_classnames());

  // node_modules/rc-virtual-list/es/List.js
  init_react();
  init_react();
  var import_classnames18 = __toESM(require_classnames());

  // node_modules/rc-virtual-list/es/Filler.js
  init_react();
  var import_classnames16 = __toESM(require_classnames());
  var Filler = /* @__PURE__ */ k3(function(_ref, ref) {
    var height = _ref.height, offset = _ref.offset, children = _ref.children, prefixCls = _ref.prefixCls, onInnerResize = _ref.onInnerResize, innerProps = _ref.innerProps;
    var outerStyle = {};
    var innerStyle = {
      display: "flex",
      flexDirection: "column"
    };
    if (offset !== void 0) {
      outerStyle = {
        height,
        position: "relative",
        overflow: "hidden"
      };
      innerStyle = _objectSpread2(_objectSpread2({}, innerStyle), {}, {
        transform: "translateY(".concat(offset, "px)"),
        position: "absolute",
        left: 0,
        right: 0,
        top: 0
      });
    }
    return /* @__PURE__ */ y("div", {
      style: outerStyle
    }, /* @__PURE__ */ y(es_default, {
      onResize: function onResize2(_ref2) {
        var offsetHeight = _ref2.offsetHeight;
        if (offsetHeight && onInnerResize) {
          onInnerResize();
        }
      }
    }, /* @__PURE__ */ y("div", _extends({
      style: innerStyle,
      className: (0, import_classnames16.default)(_defineProperty({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
      ref
    }, innerProps), children)));
  });
  Filler.displayName = "Filler";
  var Filler_default = Filler;

  // node_modules/rc-virtual-list/es/ScrollBar.js
  init_react();
  var import_classnames17 = __toESM(require_classnames());
  var MIN_SIZE = 20;
  function getPageY(e3) {
    return "touches" in e3 ? e3.touches[0].pageY : e3.pageY;
  }
  var ScrollBar = /* @__PURE__ */ function(_React$Component) {
    _inherits(ScrollBar2, _React$Component);
    var _super = _createSuper(ScrollBar2);
    function ScrollBar2() {
      var _this;
      _classCallCheck(this, ScrollBar2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _this.moveRaf = null;
      _this.scrollbarRef = /* @__PURE__ */ _();
      _this.thumbRef = /* @__PURE__ */ _();
      _this.visibleTimeout = null;
      _this.state = {
        dragging: false,
        pageY: null,
        startTop: null,
        visible: false
      };
      _this.delayHidden = function() {
        clearTimeout(_this.visibleTimeout);
        _this.setState({
          visible: true
        });
        _this.visibleTimeout = setTimeout(function() {
          _this.setState({
            visible: false
          });
        }, 2e3);
      };
      _this.onScrollbarTouchStart = function(e3) {
        e3.preventDefault();
      };
      _this.onContainerMouseDown = function(e3) {
        e3.stopPropagation();
        e3.preventDefault();
      };
      _this.patchEvents = function() {
        window.addEventListener("mousemove", _this.onMouseMove);
        window.addEventListener("mouseup", _this.onMouseUp);
        _this.thumbRef.current.addEventListener("touchmove", _this.onMouseMove);
        _this.thumbRef.current.addEventListener("touchend", _this.onMouseUp);
      };
      _this.removeEvents = function() {
        var _this$scrollbarRef$cu;
        window.removeEventListener("mousemove", _this.onMouseMove);
        window.removeEventListener("mouseup", _this.onMouseUp);
        (_this$scrollbarRef$cu = _this.scrollbarRef.current) === null || _this$scrollbarRef$cu === void 0 ? void 0 : _this$scrollbarRef$cu.removeEventListener("touchstart", _this.onScrollbarTouchStart);
        if (_this.thumbRef.current) {
          _this.thumbRef.current.removeEventListener("touchstart", _this.onMouseDown);
          _this.thumbRef.current.removeEventListener("touchmove", _this.onMouseMove);
          _this.thumbRef.current.removeEventListener("touchend", _this.onMouseUp);
        }
        raf_default.cancel(_this.moveRaf);
      };
      _this.onMouseDown = function(e3) {
        var onStartMove = _this.props.onStartMove;
        _this.setState({
          dragging: true,
          pageY: getPageY(e3),
          startTop: _this.getTop()
        });
        onStartMove();
        _this.patchEvents();
        e3.stopPropagation();
        e3.preventDefault();
      };
      _this.onMouseMove = function(e3) {
        var _this$state = _this.state, dragging = _this$state.dragging, pageY = _this$state.pageY, startTop = _this$state.startTop;
        var onScroll = _this.props.onScroll;
        raf_default.cancel(_this.moveRaf);
        if (dragging) {
          var offsetY = getPageY(e3) - pageY;
          var newTop = startTop + offsetY;
          var enableScrollRange = _this.getEnableScrollRange();
          var enableHeightRange = _this.getEnableHeightRange();
          var ptg = enableHeightRange ? newTop / enableHeightRange : 0;
          var newScrollTop = Math.ceil(ptg * enableScrollRange);
          _this.moveRaf = raf_default(function() {
            onScroll(newScrollTop);
          });
        }
      };
      _this.onMouseUp = function() {
        var onStopMove = _this.props.onStopMove;
        _this.setState({
          dragging: false
        });
        onStopMove();
        _this.removeEvents();
      };
      _this.getSpinHeight = function() {
        var _this$props = _this.props, height = _this$props.height, count = _this$props.count;
        var baseHeight = height / count * 10;
        baseHeight = Math.max(baseHeight, MIN_SIZE);
        baseHeight = Math.min(baseHeight, height / 2);
        return Math.floor(baseHeight);
      };
      _this.getEnableScrollRange = function() {
        var _this$props2 = _this.props, scrollHeight = _this$props2.scrollHeight, height = _this$props2.height;
        return scrollHeight - height || 0;
      };
      _this.getEnableHeightRange = function() {
        var height = _this.props.height;
        var spinHeight = _this.getSpinHeight();
        return height - spinHeight || 0;
      };
      _this.getTop = function() {
        var scrollTop = _this.props.scrollTop;
        var enableScrollRange = _this.getEnableScrollRange();
        var enableHeightRange = _this.getEnableHeightRange();
        if (scrollTop === 0 || enableScrollRange === 0) {
          return 0;
        }
        var ptg = scrollTop / enableScrollRange;
        return ptg * enableHeightRange;
      };
      _this.showScroll = function() {
        var _this$props3 = _this.props, height = _this$props3.height, scrollHeight = _this$props3.scrollHeight;
        return scrollHeight > height;
      };
      return _this;
    }
    _createClass(ScrollBar2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.scrollbarRef.current.addEventListener("touchstart", this.onScrollbarTouchStart);
        this.thumbRef.current.addEventListener("touchstart", this.onMouseDown);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (prevProps.scrollTop !== this.props.scrollTop) {
          this.delayHidden();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.removeEvents();
        clearTimeout(this.visibleTimeout);
      }
    }, {
      key: "render",
      value: (
        // ====================== Render =======================
        function render() {
          var _this$state2 = this.state, dragging = _this$state2.dragging, visible = _this$state2.visible;
          var _this$props4 = this.props, prefixCls = _this$props4.prefixCls, direction = _this$props4.direction;
          var spinHeight = this.getSpinHeight();
          var top = this.getTop();
          var canScroll = this.showScroll();
          var mergedVisible = canScroll && visible;
          var scrollBarDirection = direction === "rtl" ? {
            left: 0
          } : {
            right: 0
          };
          return /* @__PURE__ */ y("div", {
            ref: this.scrollbarRef,
            className: (0, import_classnames17.default)("".concat(prefixCls, "-scrollbar"), _defineProperty({}, "".concat(prefixCls, "-scrollbar-show"), canScroll)),
            style: _objectSpread2(_objectSpread2({
              width: 8,
              top: 0,
              bottom: 0
            }, scrollBarDirection), {}, {
              position: "absolute",
              display: mergedVisible ? null : "none"
            }),
            onMouseDown: this.onContainerMouseDown,
            onMouseMove: this.delayHidden
          }, /* @__PURE__ */ y("div", {
            ref: this.thumbRef,
            className: (0, import_classnames17.default)("".concat(prefixCls, "-scrollbar-thumb"), _defineProperty({}, "".concat(prefixCls, "-scrollbar-thumb-moving"), dragging)),
            style: {
              width: "100%",
              height: spinHeight,
              top,
              left: 0,
              position: "absolute",
              background: "rgba(0, 0, 0, 0.5)",
              borderRadius: 99,
              cursor: "pointer",
              userSelect: "none"
            },
            onMouseDown: this.onMouseDown
          }));
        }
      )
    }]);
    return ScrollBar2;
  }(b);

  // node_modules/rc-virtual-list/es/hooks/useChildren.js
  init_react();

  // node_modules/rc-virtual-list/es/Item.js
  init_react();
  function Item2(_ref) {
    var children = _ref.children, setRef = _ref.setRef;
    var refFunc = T2(function(node2) {
      setRef(node2);
    }, []);
    return /* @__PURE__ */ sn(children, {
      ref: refFunc
    });
  }

  // node_modules/rc-virtual-list/es/hooks/useChildren.js
  function useChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
    var getKey2 = _ref.getKey;
    return list.slice(startIndex, endIndex + 1).map(function(item, index2) {
      var eleIndex = startIndex + index2;
      var node2 = renderFunc(item, eleIndex, {
        // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
      });
      var key = getKey2(item);
      return /* @__PURE__ */ y(Item2, {
        key,
        setRef: function setRef(ele) {
          return setNodeRef(item, ele);
        }
      }, node2);
    });
  }

  // node_modules/rc-virtual-list/es/hooks/useHeights.js
  init_react();
  init_react();

  // node_modules/rc-virtual-list/es/utils/CacheMap.js
  var CacheMap = /* @__PURE__ */ function() {
    function CacheMap2() {
      _classCallCheck(this, CacheMap2);
      this.maps = void 0;
      this.maps = /* @__PURE__ */ Object.create(null);
    }
    _createClass(CacheMap2, [{
      key: "set",
      value: function set2(key, value) {
        this.maps[key] = value;
      }
    }, {
      key: "get",
      value: function get2(key) {
        return this.maps[key];
      }
    }]);
    return CacheMap2;
  }();
  var CacheMap_default = CacheMap;

  // node_modules/rc-virtual-list/es/hooks/useHeights.js
  function useHeights(getKey2, onItemAdd, onItemRemove) {
    var _React$useState = h2(0), _React$useState2 = _slicedToArray(_React$useState, 2), updatedMark = _React$useState2[0], setUpdatedMark = _React$useState2[1];
    var instanceRef = _2(/* @__PURE__ */ new Map());
    var heightsRef = _2(new CacheMap_default());
    var collectRafRef = _2();
    function cancelRaf() {
      raf_default.cancel(collectRafRef.current);
    }
    function collectHeight() {
      cancelRaf();
      collectRafRef.current = raf_default(function() {
        instanceRef.current.forEach(function(element, key) {
          if (element && element.offsetParent) {
            var htmlElement = findDOMNode(element);
            var offsetHeight = htmlElement.offsetHeight;
            if (heightsRef.current.get(key) !== offsetHeight) {
              heightsRef.current.set(key, htmlElement.offsetHeight);
            }
          }
        });
        setUpdatedMark(function(c3) {
          return c3 + 1;
        });
      });
    }
    function setInstanceRef(item, instance) {
      var key = getKey2(item);
      var origin = instanceRef.current.get(key);
      if (instance) {
        instanceRef.current.set(key, instance);
        collectHeight();
      } else {
        instanceRef.current.delete(key);
      }
      if (!origin !== !instance) {
        if (instance) {
          onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
        } else {
          onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
        }
      }
    }
    p2(function() {
      return cancelRaf;
    }, []);
    return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
  }

  // node_modules/rc-virtual-list/es/hooks/useScrollTo.js
  init_react();
  function useScrollTo(containerRef, data, heights, itemHeight, getKey2, collectHeight, syncScrollTop, triggerFlash) {
    var scrollRef = _2();
    return function(arg) {
      if (arg === null || arg === void 0) {
        triggerFlash();
        return;
      }
      raf_default.cancel(scrollRef.current);
      if (typeof arg === "number") {
        syncScrollTop(arg);
      } else if (arg && _typeof(arg) === "object") {
        var index2;
        var align = arg.align;
        if ("index" in arg) {
          index2 = arg.index;
        } else {
          index2 = data.findIndex(function(item) {
            return getKey2(item) === arg.key;
          });
        }
        var _arg$offset = arg.offset, offset = _arg$offset === void 0 ? 0 : _arg$offset;
        var syncScroll = function syncScroll2(times, targetAlign) {
          if (times < 0 || !containerRef.current)
            return;
          var height = containerRef.current.clientHeight;
          var needCollectHeight = false;
          var newTargetAlign = targetAlign;
          if (height) {
            var mergedAlign = targetAlign || align;
            var stackTop = 0;
            var itemTop = 0;
            var itemBottom = 0;
            var maxLen = Math.min(data.length, index2);
            for (var i3 = 0; i3 <= maxLen; i3 += 1) {
              var key = getKey2(data[i3]);
              itemTop = stackTop;
              var cacheHeight = heights.get(key);
              itemBottom = itemTop + (cacheHeight === void 0 ? itemHeight : cacheHeight);
              stackTop = itemBottom;
              if (i3 === index2 && cacheHeight === void 0) {
                needCollectHeight = true;
              }
            }
            var targetTop = null;
            switch (mergedAlign) {
              case "top":
                targetTop = itemTop - offset;
                break;
              case "bottom":
                targetTop = itemBottom - height + offset;
                break;
              default: {
                var scrollTop = containerRef.current.scrollTop;
                var scrollBottom = scrollTop + height;
                if (itemTop < scrollTop) {
                  newTargetAlign = "top";
                } else if (itemBottom > scrollBottom) {
                  newTargetAlign = "bottom";
                }
              }
            }
            if (targetTop !== null && targetTop !== containerRef.current.scrollTop) {
              syncScrollTop(targetTop);
            }
          }
          scrollRef.current = raf_default(function() {
            if (needCollectHeight) {
              collectHeight();
            }
            syncScroll2(times - 1, newTargetAlign);
          }, 2);
        };
        syncScroll(3);
      }
    };
  }

  // node_modules/rc-virtual-list/es/hooks/useDiffItem.js
  init_react();

  // node_modules/rc-virtual-list/es/utils/algorithmUtil.js
  function findListDiffIndex(originList, targetList, getKey2) {
    var originLen = originList.length;
    var targetLen = targetList.length;
    var shortList;
    var longList;
    if (originLen === 0 && targetLen === 0) {
      return null;
    }
    if (originLen < targetLen) {
      shortList = originList;
      longList = targetList;
    } else {
      shortList = targetList;
      longList = originList;
    }
    var notExistKey = {
      __EMPTY_ITEM__: true
    };
    function getItemKey(item) {
      if (item !== void 0) {
        return getKey2(item);
      }
      return notExistKey;
    }
    var diffIndex = null;
    var multiple = Math.abs(originLen - targetLen) !== 1;
    for (var i3 = 0; i3 < longList.length; i3 += 1) {
      var shortKey = getItemKey(shortList[i3]);
      var longKey = getItemKey(longList[i3]);
      if (shortKey !== longKey) {
        diffIndex = i3;
        multiple = multiple || shortKey !== getItemKey(longList[i3 + 1]);
        break;
      }
    }
    return diffIndex === null ? null : {
      index: diffIndex,
      multiple
    };
  }

  // node_modules/rc-virtual-list/es/hooks/useDiffItem.js
  function useDiffItem(data, getKey2, onDiff) {
    var _React$useState = h2(data), _React$useState2 = _slicedToArray(_React$useState, 2), prevData = _React$useState2[0], setPrevData = _React$useState2[1];
    var _React$useState3 = h2(null), _React$useState4 = _slicedToArray(_React$useState3, 2), diffItem = _React$useState4[0], setDiffItem = _React$useState4[1];
    p2(function() {
      var diff = findListDiffIndex(prevData || [], data || [], getKey2);
      if ((diff === null || diff === void 0 ? void 0 : diff.index) !== void 0) {
        onDiff === null || onDiff === void 0 ? void 0 : onDiff(diff.index);
        setDiffItem(data[diff.index]);
      }
      setPrevData(data);
    }, [data]);
    return [diffItem];
  }

  // node_modules/rc-virtual-list/es/hooks/useFrameWheel.js
  init_react();

  // node_modules/rc-virtual-list/es/utils/isFirefox.js
  var isFF = (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
  var isFirefox_default = isFF;

  // node_modules/rc-virtual-list/es/hooks/useOriginScroll.js
  init_react();
  var useOriginScroll_default = function(isScrollAtTop, isScrollAtBottom) {
    var lockRef = _2(false);
    var lockTimeoutRef = _2(null);
    function lockScroll() {
      clearTimeout(lockTimeoutRef.current);
      lockRef.current = true;
      lockTimeoutRef.current = setTimeout(function() {
        lockRef.current = false;
      }, 50);
    }
    var scrollPingRef = _2({
      top: isScrollAtTop,
      bottom: isScrollAtBottom
    });
    scrollPingRef.current.top = isScrollAtTop;
    scrollPingRef.current.bottom = isScrollAtBottom;
    return function(deltaY) {
      var smoothOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var originScroll = (
        // Pass origin wheel when on the top
        deltaY < 0 && scrollPingRef.current.top || // Pass origin wheel when on the bottom
        deltaY > 0 && scrollPingRef.current.bottom
      );
      if (smoothOffset && originScroll) {
        clearTimeout(lockTimeoutRef.current);
        lockRef.current = false;
      } else if (!originScroll || lockRef.current) {
        lockScroll();
      }
      return !lockRef.current && originScroll;
    };
  };

  // node_modules/rc-virtual-list/es/hooks/useFrameWheel.js
  function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
    var offsetRef = _2(0);
    var nextFrameRef = _2(null);
    var wheelValueRef = _2(null);
    var isMouseScrollRef = _2(false);
    var originScroll = useOriginScroll_default(isScrollAtTop, isScrollAtBottom);
    function onWheel(event) {
      if (!inVirtual)
        return;
      raf_default.cancel(nextFrameRef.current);
      var deltaY = event.deltaY;
      offsetRef.current += deltaY;
      wheelValueRef.current = deltaY;
      if (originScroll(deltaY))
        return;
      if (!isFirefox_default) {
        event.preventDefault();
      }
      nextFrameRef.current = raf_default(function() {
        var patchMultiple = isMouseScrollRef.current ? 10 : 1;
        onWheelDelta(offsetRef.current * patchMultiple);
        offsetRef.current = 0;
      });
    }
    function onFireFoxScroll(event) {
      if (!inVirtual)
        return;
      isMouseScrollRef.current = event.detail === wheelValueRef.current;
    }
    return [onWheel, onFireFoxScroll];
  }

  // node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js
  init_react();
  var SMOOTH_PTG = 14 / 15;
  function useMobileTouchMove(inVirtual, listRef, callback) {
    var touchedRef = _2(false);
    var touchYRef = _2(0);
    var elementRef = _2(null);
    var intervalRef = _2(null);
    var cleanUpEvents;
    var onTouchMove = function onTouchMove2(e3) {
      if (touchedRef.current) {
        var currentY = Math.ceil(e3.touches[0].pageY);
        var offsetY = touchYRef.current - currentY;
        touchYRef.current = currentY;
        if (callback(offsetY)) {
          e3.preventDefault();
        }
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(function() {
          offsetY *= SMOOTH_PTG;
          if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
            clearInterval(intervalRef.current);
          }
        }, 16);
      }
    };
    var onTouchEnd = function onTouchEnd2() {
      touchedRef.current = false;
      cleanUpEvents();
    };
    var onTouchStart = function onTouchStart2(e3) {
      cleanUpEvents();
      if (e3.touches.length === 1 && !touchedRef.current) {
        touchedRef.current = true;
        touchYRef.current = Math.ceil(e3.touches[0].pageY);
        elementRef.current = e3.target;
        elementRef.current.addEventListener("touchmove", onTouchMove);
        elementRef.current.addEventListener("touchend", onTouchEnd);
      }
    };
    cleanUpEvents = function cleanUpEvents2() {
      if (elementRef.current) {
        elementRef.current.removeEventListener("touchmove", onTouchMove);
        elementRef.current.removeEventListener("touchend", onTouchEnd);
      }
    };
    useLayoutEffect_default(function() {
      if (inVirtual) {
        listRef.current.addEventListener("touchstart", onTouchStart);
      }
      return function() {
        var _listRef$current;
        (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.removeEventListener("touchstart", onTouchStart);
        cleanUpEvents();
        clearInterval(intervalRef.current);
      };
    }, [inVirtual]);
  }

  // node_modules/rc-virtual-list/es/List.js
  var _excluded39 = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "component", "onScroll", "onVisibleChange", "innerProps"];
  var EMPTY_DATA = [];
  var ScrollStyle = {
    overflowY: "auto",
    overflowAnchor: "none"
  };
  function RawList(props, ref) {
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-virtual-list" : _props$prefixCls, className = props.className, height = props.height, itemHeight = props.itemHeight, _props$fullHeight = props.fullHeight, fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight, style3 = props.style, data = props.data, children = props.children, itemKey2 = props.itemKey, virtual = props.virtual, direction = props.direction, _props$component = props.component, Component = _props$component === void 0 ? "div" : _props$component, onScroll = props.onScroll, onVisibleChange = props.onVisibleChange, innerProps = props.innerProps, restProps = _objectWithoutProperties(props, _excluded39);
    var useVirtual = !!(virtual !== false && height && itemHeight);
    var inVirtual = useVirtual && data && itemHeight * data.length > height;
    var _useState = h2(0), _useState2 = _slicedToArray(_useState, 2), scrollTop = _useState2[0], setScrollTop = _useState2[1];
    var _useState3 = h2(false), _useState4 = _slicedToArray(_useState3, 2), scrollMoving = _useState4[0], setScrollMoving = _useState4[1];
    var mergedClassName = (0, import_classnames18.default)(prefixCls, _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === "rtl"), className);
    var mergedData = data || EMPTY_DATA;
    var componentRef = _2();
    var fillerInnerRef = _2();
    var scrollBarRef = _2();
    var getKey2 = T2(function(item) {
      if (typeof itemKey2 === "function") {
        return itemKey2(item);
      }
      return item === null || item === void 0 ? void 0 : item[itemKey2];
    }, [itemKey2]);
    var sharedConfig = {
      getKey: getKey2
    };
    function syncScrollTop(newTop) {
      setScrollTop(function(origin) {
        var value;
        if (typeof newTop === "function") {
          value = newTop(origin);
        } else {
          value = newTop;
        }
        var alignedTop = keepInRange(value);
        componentRef.current.scrollTop = alignedTop;
        return alignedTop;
      });
    }
    var rangeRef = _2({
      start: 0,
      end: mergedData.length
    });
    var diffItemRef = _2();
    var _useDiffItem = useDiffItem(mergedData, getKey2), _useDiffItem2 = _slicedToArray(_useDiffItem, 1), diffItem = _useDiffItem2[0];
    diffItemRef.current = diffItem;
    var _useHeights = useHeights(getKey2, null, null), _useHeights2 = _slicedToArray(_useHeights, 4), setInstanceRef = _useHeights2[0], collectHeight = _useHeights2[1], heights = _useHeights2[2], heightUpdatedMark = _useHeights2[3];
    var _React$useMemo = F2(function() {
      if (!useVirtual) {
        return {
          scrollHeight: void 0,
          start: 0,
          end: mergedData.length - 1,
          offset: void 0
        };
      }
      if (!inVirtual) {
        var _fillerInnerRef$curre;
        return {
          scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
          start: 0,
          end: mergedData.length - 1,
          offset: void 0
        };
      }
      var itemTop = 0;
      var startIndex;
      var startOffset;
      var endIndex;
      var dataLen = mergedData.length;
      for (var i3 = 0; i3 < dataLen; i3 += 1) {
        var item = mergedData[i3];
        var key = getKey2(item);
        var cacheHeight = heights.get(key);
        var currentItemBottom = itemTop + (cacheHeight === void 0 ? itemHeight : cacheHeight);
        if (currentItemBottom >= scrollTop && startIndex === void 0) {
          startIndex = i3;
          startOffset = itemTop;
        }
        if (currentItemBottom > scrollTop + height && endIndex === void 0) {
          endIndex = i3;
        }
        itemTop = currentItemBottom;
      }
      if (startIndex === void 0) {
        startIndex = 0;
        startOffset = 0;
        endIndex = Math.ceil(height / itemHeight);
      }
      if (endIndex === void 0) {
        endIndex = mergedData.length - 1;
      }
      endIndex = Math.min(endIndex + 1, mergedData.length);
      return {
        scrollHeight: itemTop,
        start: startIndex,
        end: endIndex,
        offset: startOffset
      };
    }, [inVirtual, useVirtual, scrollTop, mergedData, heightUpdatedMark, height]), scrollHeight = _React$useMemo.scrollHeight, start = _React$useMemo.start, end = _React$useMemo.end, offset = _React$useMemo.offset;
    rangeRef.current.start = start;
    rangeRef.current.end = end;
    var maxScrollHeight = scrollHeight - height;
    var maxScrollHeightRef = _2(maxScrollHeight);
    maxScrollHeightRef.current = maxScrollHeight;
    function keepInRange(newScrollTop) {
      var newTop = newScrollTop;
      if (!Number.isNaN(maxScrollHeightRef.current)) {
        newTop = Math.min(newTop, maxScrollHeightRef.current);
      }
      newTop = Math.max(newTop, 0);
      return newTop;
    }
    var isScrollAtTop = scrollTop <= 0;
    var isScrollAtBottom = scrollTop >= maxScrollHeight;
    var originScroll = useOriginScroll_default(isScrollAtTop, isScrollAtBottom);
    function onScrollBar(newScrollTop) {
      var newTop = newScrollTop;
      syncScrollTop(newTop);
    }
    function onFallbackScroll(e3) {
      var newScrollTop = e3.currentTarget.scrollTop;
      if (newScrollTop !== scrollTop) {
        syncScrollTop(newScrollTop);
      }
      onScroll === null || onScroll === void 0 ? void 0 : onScroll(e3);
    }
    var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, function(offsetY) {
      syncScrollTop(function(top) {
        var newTop = top + offsetY;
        return newTop;
      });
    }), _useFrameWheel2 = _slicedToArray(_useFrameWheel, 2), onRawWheel = _useFrameWheel2[0], onFireFoxScroll = _useFrameWheel2[1];
    useMobileTouchMove(useVirtual, componentRef, function(deltaY, smoothOffset) {
      if (originScroll(deltaY, smoothOffset)) {
        return false;
      }
      onRawWheel({
        preventDefault: function preventDefault() {
        },
        deltaY
      });
      return true;
    });
    useLayoutEffect_default(function() {
      function onMozMousePixelScroll(e3) {
        if (useVirtual) {
          e3.preventDefault();
        }
      }
      componentRef.current.addEventListener("wheel", onRawWheel);
      componentRef.current.addEventListener("DOMMouseScroll", onFireFoxScroll);
      componentRef.current.addEventListener("MozMousePixelScroll", onMozMousePixelScroll);
      return function() {
        if (componentRef.current) {
          componentRef.current.removeEventListener("wheel", onRawWheel);
          componentRef.current.removeEventListener("DOMMouseScroll", onFireFoxScroll);
          componentRef.current.removeEventListener("MozMousePixelScroll", onMozMousePixelScroll);
        }
      };
    }, [useVirtual]);
    var scrollTo = useScrollTo(componentRef, mergedData, heights, itemHeight, getKey2, collectHeight, syncScrollTop, function() {
      var _scrollBarRef$current;
      (_scrollBarRef$current = scrollBarRef.current) === null || _scrollBarRef$current === void 0 ? void 0 : _scrollBarRef$current.delayHidden();
    });
    A2(ref, function() {
      return {
        scrollTo
      };
    });
    useLayoutEffect_default(function() {
      if (onVisibleChange) {
        var renderList = mergedData.slice(start, end + 1);
        onVisibleChange(renderList, mergedData);
      }
    }, [start, end, mergedData]);
    var listChildren = useChildren(mergedData, start, end, setInstanceRef, children, sharedConfig);
    var componentStyle = null;
    if (height) {
      componentStyle = _objectSpread2(_defineProperty({}, fullHeight ? "height" : "maxHeight", height), ScrollStyle);
      if (useVirtual) {
        componentStyle.overflowY = "hidden";
        if (scrollMoving) {
          componentStyle.pointerEvents = "none";
        }
      }
    }
    return /* @__PURE__ */ y("div", _extends({
      style: _objectSpread2(_objectSpread2({}, style3), {}, {
        position: "relative"
      }),
      className: mergedClassName
    }, restProps), /* @__PURE__ */ y(Component, {
      className: "".concat(prefixCls, "-holder"),
      style: componentStyle,
      ref: componentRef,
      onScroll: onFallbackScroll
    }, /* @__PURE__ */ y(Filler_default, {
      prefixCls,
      height: scrollHeight,
      offset,
      onInnerResize: collectHeight,
      ref: fillerInnerRef,
      innerProps
    }, listChildren)), useVirtual && /* @__PURE__ */ y(ScrollBar, {
      ref: scrollBarRef,
      prefixCls,
      scrollTop,
      height,
      scrollHeight,
      count: mergedData.length,
      direction,
      onScroll: onScrollBar,
      onStartMove: function onStartMove() {
        setScrollMoving(true);
      },
      onStopMove: function onStopMove() {
        setScrollMoving(false);
      }
    }));
  }
  var List3 = /* @__PURE__ */ k3(RawList);
  List3.displayName = "List";
  var List_default2 = List3;

  // node_modules/rc-virtual-list/es/index.js
  var es_default6 = List_default2;

  // node_modules/rc-select/es/OptionList.js
  init_react();
  init_react();

  // node_modules/rc-select/es/SelectContext.js
  init_react();
  var SelectContext = /* @__PURE__ */ G(null);
  var SelectContext_default = SelectContext;

  // node_modules/rc-select/es/utils/platformUtil.js
  function isPlatformMac() {
    return /(mac\sos|macintosh)/i.test(navigator.appVersion);
  }

  // node_modules/rc-select/es/OptionList.js
  var _excluded40 = ["disabled", "title", "children", "style", "className"];
  function isTitleType2(content) {
    return typeof content === "string" || typeof content === "number";
  }
  var OptionList = function OptionList2(_4, ref) {
    var _useBaseProps = useBaseProps(), prefixCls = _useBaseProps.prefixCls, id = _useBaseProps.id, open = _useBaseProps.open, multiple = _useBaseProps.multiple, mode = _useBaseProps.mode, searchValue = _useBaseProps.searchValue, toggleOpen = _useBaseProps.toggleOpen, notFoundContent = _useBaseProps.notFoundContent, onPopupScroll = _useBaseProps.onPopupScroll;
    var _React$useContext = q2(SelectContext_default), flattenOptions2 = _React$useContext.flattenOptions, onActiveValue = _React$useContext.onActiveValue, defaultActiveFirstOption = _React$useContext.defaultActiveFirstOption, onSelect = _React$useContext.onSelect, menuItemSelectedIcon = _React$useContext.menuItemSelectedIcon, rawValues = _React$useContext.rawValues, fieldNames = _React$useContext.fieldNames, virtual = _React$useContext.virtual, listHeight = _React$useContext.listHeight, listItemHeight = _React$useContext.listItemHeight;
    var itemPrefixCls = "".concat(prefixCls, "-item");
    var memoFlattenOptions = useMemo(function() {
      return flattenOptions2;
    }, [open, flattenOptions2], function(prev2, next2) {
      return next2[0] && prev2[1] !== next2[1];
    });
    var listRef = _2(null);
    var onListMouseDown = function onListMouseDown2(event) {
      event.preventDefault();
    };
    var scrollIntoView = function scrollIntoView2(args) {
      if (listRef.current) {
        listRef.current.scrollTo(typeof args === "number" ? {
          index: args
        } : args);
      }
    };
    var getEnabledActiveIndex = function getEnabledActiveIndex2(index2) {
      var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      var len = memoFlattenOptions.length;
      for (var i3 = 0; i3 < len; i3 += 1) {
        var current = (index2 + i3 * offset + len) % len;
        var _memoFlattenOptions$c = memoFlattenOptions[current], group = _memoFlattenOptions$c.group, data = _memoFlattenOptions$c.data;
        if (!group && !data.disabled) {
          return current;
        }
      }
      return -1;
    };
    var _React$useState = h2(function() {
      return getEnabledActiveIndex(0);
    }), _React$useState2 = _slicedToArray(_React$useState, 2), activeIndex = _React$useState2[0], setActiveIndex = _React$useState2[1];
    var setActive = function setActive2(index2) {
      var fromKeyboard = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      setActiveIndex(index2);
      var info = {
        source: fromKeyboard ? "keyboard" : "mouse"
      };
      var flattenItem = memoFlattenOptions[index2];
      if (!flattenItem) {
        onActiveValue(null, -1, info);
        return;
      }
      onActiveValue(flattenItem.value, index2, info);
    };
    p2(function() {
      setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
    }, [memoFlattenOptions.length, searchValue]);
    var isSelected = T2(function(value) {
      return rawValues.has(value) && mode !== "combobox";
    }, [mode, _toConsumableArray(rawValues).toString(), rawValues.size]);
    p2(function() {
      var timeoutId = setTimeout(function() {
        if (!multiple && open && rawValues.size === 1) {
          var value = Array.from(rawValues)[0];
          var index2 = memoFlattenOptions.findIndex(function(_ref) {
            var data = _ref.data;
            return data.value === value;
          });
          if (index2 !== -1) {
            setActive(index2);
            scrollIntoView(index2);
          }
        }
      });
      if (open) {
        var _listRef$current;
        (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(void 0);
      }
      return function() {
        return clearTimeout(timeoutId);
      };
    }, [open, searchValue, flattenOptions2.length]);
    var onSelectValue = function onSelectValue2(value) {
      if (value !== void 0) {
        onSelect(value, {
          selected: !rawValues.has(value)
        });
      }
      if (!multiple) {
        toggleOpen(false);
      }
    };
    A2(ref, function() {
      return {
        onKeyDown: function onKeyDown(event) {
          var which = event.which, ctrlKey = event.ctrlKey;
          switch (which) {
            case KeyCode_default.N:
            case KeyCode_default.P:
            case KeyCode_default.UP:
            case KeyCode_default.DOWN: {
              var offset = 0;
              if (which === KeyCode_default.UP) {
                offset = -1;
              } else if (which === KeyCode_default.DOWN) {
                offset = 1;
              } else if (isPlatformMac() && ctrlKey) {
                if (which === KeyCode_default.N) {
                  offset = 1;
                } else if (which === KeyCode_default.P) {
                  offset = -1;
                }
              }
              if (offset !== 0) {
                var nextActiveIndex = getEnabledActiveIndex(activeIndex + offset, offset);
                scrollIntoView(nextActiveIndex);
                setActive(nextActiveIndex, true);
              }
              break;
            }
            case KeyCode_default.ENTER: {
              var item = memoFlattenOptions[activeIndex];
              if (item && !item.data.disabled) {
                onSelectValue(item.value);
              } else {
                onSelectValue(void 0);
              }
              if (open) {
                event.preventDefault();
              }
              break;
            }
            case KeyCode_default.ESC: {
              toggleOpen(false);
              if (open) {
                event.stopPropagation();
              }
            }
          }
        },
        onKeyUp: function onKeyUp() {
        },
        scrollTo: function scrollTo(index2) {
          scrollIntoView(index2);
        }
      };
    });
    if (memoFlattenOptions.length === 0) {
      return /* @__PURE__ */ y("div", {
        role: "listbox",
        id: "".concat(id, "_list"),
        className: "".concat(itemPrefixCls, "-empty"),
        onMouseDown: onListMouseDown
      }, notFoundContent);
    }
    var omitFieldNameList = Object.keys(fieldNames).map(function(key) {
      return fieldNames[key];
    });
    var getLabel = function getLabel2(item) {
      return item.label;
    };
    function getItemAriaProps(item, index2) {
      var group = item.group;
      return {
        role: group ? "presentation" : "option",
        id: "".concat(id, "_list_").concat(index2)
      };
    }
    var renderItem = function renderItem2(index2) {
      var item = memoFlattenOptions[index2];
      if (!item)
        return null;
      var itemData = item.data || {};
      var value = itemData.value;
      var group = item.group;
      var attrs = pickAttrs(itemData, true);
      var mergedLabel = getLabel(item);
      return item ? /* @__PURE__ */ y("div", _extends({
        "aria-label": typeof mergedLabel === "string" && !group ? mergedLabel : null
      }, attrs, {
        key: index2
      }, getItemAriaProps(item, index2), {
        "aria-selected": isSelected(value)
      }), value) : null;
    };
    var a11yProps = {
      role: "listbox",
      id: "".concat(id, "_list")
    };
    return /* @__PURE__ */ y(k, null, virtual && /* @__PURE__ */ y("div", _extends({}, a11yProps, {
      style: {
        height: 0,
        width: 0,
        overflow: "hidden"
      }
    }), renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)), /* @__PURE__ */ y(es_default6, {
      itemKey: "key",
      ref: listRef,
      data: memoFlattenOptions,
      height: listHeight,
      itemHeight: listItemHeight,
      fullHeight: false,
      onMouseDown: onListMouseDown,
      onScroll: onPopupScroll,
      virtual,
      innerProps: virtual ? null : a11yProps
    }, function(item, itemIndex) {
      var _classNames;
      var group = item.group, groupOption = item.groupOption, data = item.data, label = item.label, value = item.value;
      var key = data.key;
      if (group) {
        var _data$title;
        var groupTitle = (_data$title = data.title) !== null && _data$title !== void 0 ? _data$title : isTitleType2(label) ? label.toString() : void 0;
        return /* @__PURE__ */ y("div", {
          className: (0, import_classnames19.default)(itemPrefixCls, "".concat(itemPrefixCls, "-group")),
          title: groupTitle
        }, label !== void 0 ? label : key);
      }
      var disabled = data.disabled, title = data.title, children = data.children, style3 = data.style, className = data.className, otherProps = _objectWithoutProperties(data, _excluded40);
      var passedProps = omit(otherProps, omitFieldNameList);
      var selected = isSelected(value);
      var optionPrefixCls = "".concat(itemPrefixCls, "-option");
      var optionClassName = (0, import_classnames19.default)(itemPrefixCls, optionPrefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), _defineProperty(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), _defineProperty(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
      var mergedLabel = getLabel(item);
      var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === "function" || selected;
      var content = typeof mergedLabel === "number" ? mergedLabel : mergedLabel || value;
      var optionTitle = isTitleType2(content) ? content.toString() : void 0;
      if (title !== void 0) {
        optionTitle = title;
      }
      return /* @__PURE__ */ y("div", _extends({}, pickAttrs(passedProps), !virtual ? getItemAriaProps(item, itemIndex) : {}, {
        "aria-selected": selected,
        className: optionClassName,
        title: optionTitle,
        onMouseMove: function onMouseMove() {
          if (activeIndex === itemIndex || disabled) {
            return;
          }
          setActive(itemIndex);
        },
        onClick: function onClick() {
          if (!disabled) {
            onSelectValue(value);
          }
        },
        style: style3
      }), /* @__PURE__ */ y("div", {
        className: "".concat(optionPrefixCls, "-content")
      }, content), /* @__PURE__ */ an(menuItemSelectedIcon) || selected, iconVisible && /* @__PURE__ */ y(TransBtn_default, {
        className: "".concat(itemPrefixCls, "-option-state"),
        customizeIcon: menuItemSelectedIcon,
        customizeIconProps: {
          isSelected: selected
        }
      }, selected ? "\u2713" : null));
    }));
  };
  var RefOptionList = /* @__PURE__ */ k3(OptionList);
  RefOptionList.displayName = "OptionList";
  var OptionList_default = RefOptionList;

  // node_modules/rc-select/es/utils/warningPropsUtil.js
  init_react();
  function warningProps(props) {
    var mode = props.mode, options = props.options, children = props.children, backfill = props.backfill, allowClear = props.allowClear, placeholder = props.placeholder, getInputElement = props.getInputElement, showSearch = props.showSearch, onSearch = props.onSearch, defaultOpen = props.defaultOpen, autoFocus = props.autoFocus, labelInValue = props.labelInValue, value = props.value, inputValue = props.inputValue, optionLabelProp = props.optionLabelProp;
    var multiple = isMultiple(mode);
    var mergedShowSearch = showSearch !== void 0 ? showSearch : multiple || mode === "combobox";
    var mergedOptions = options || convertChildrenToData(children);
    warning_default(mode !== "tags" || mergedOptions.every(function(opt) {
      return !opt.disabled;
    }), "Please avoid setting option to disabled in tags mode since user can always type text as tag.");
    if (mode === "tags" || mode === "combobox") {
      var hasNumberValue = mergedOptions.some(function(item) {
        if (item.options) {
          return item.options.some(function(opt) {
            return typeof ("value" in opt ? opt.value : opt.key) === "number";
          });
        }
        return typeof ("value" in item ? item.value : item.key) === "number";
      });
      warning_default(!hasNumberValue, "`value` of Option should not use number type when `mode` is `tags` or `combobox`.");
    }
    warning_default(mode !== "combobox" || !optionLabelProp, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly.");
    warning_default(mode === "combobox" || !backfill, "`backfill` only works with `combobox` mode.");
    warning_default(mode === "combobox" || !getInputElement, "`getInputElement` only work with `combobox` mode.");
    noteOnce(mode !== "combobox" || !getInputElement || !allowClear || !placeholder, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`.");
    if (onSearch && !mergedShowSearch && mode !== "combobox" && mode !== "tags") {
      warning_default(false, "`onSearch` should work with `showSearch` instead of use alone.");
    }
    noteOnce(!defaultOpen || autoFocus, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed.");
    if (value !== void 0 && value !== null) {
      var values = toArray3(value);
      warning_default(!labelInValue || values.every(function(val) {
        return _typeof(val) === "object" && ("key" in val || "value" in val);
      }), "`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`");
      warning_default(!multiple || Array.isArray(value), "`value` should be array when `mode` is `multiple` or `tags`");
    }
    if (children) {
      var invalidateChildType = null;
      toArray(children).some(function(node2) {
        if (!/* @__PURE__ */ an(node2) || !node2.type) {
          return false;
        }
        var _ref = node2, type4 = _ref.type;
        if (type4.isSelectOption) {
          return false;
        }
        if (type4.isSelectOptGroup) {
          var allChildrenValid = toArray(node2.props.children).every(function(subNode) {
            if (!/* @__PURE__ */ an(subNode) || !node2.type || subNode.type.isSelectOption) {
              return true;
            }
            invalidateChildType = subNode.type;
            return false;
          });
          if (allChildrenValid) {
            return false;
          }
          return true;
        }
        invalidateChildType = type4;
        return true;
      });
      if (invalidateChildType) {
        warning_default(false, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(invalidateChildType.displayName || invalidateChildType.name || invalidateChildType, "`."));
      }
      warning_default(inputValue === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
    }
  }
  function warningNullOptions(options, fieldNames) {
    if (options) {
      var recursiveOptions = function recursiveOptions2(optionsList) {
        var inGroup = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        for (var i3 = 0; i3 < optionsList.length; i3++) {
          var option = optionsList[i3];
          if (option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.value] === null) {
            warning_default(false, "`value` in Select options should not be `null`.");
            return true;
          }
          if (!inGroup && Array.isArray(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.options]) && recursiveOptions2(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.options], true)) {
            break;
          }
        }
      };
      recursiveOptions(options);
    }
  }
  var warningPropsUtil_default = warningProps;

  // node_modules/rc-select/es/Select.js
  var _excluded41 = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"];
  var OMIT_DOM_PROPS = ["inputValue"];
  function isRawValue(value) {
    return !value || _typeof(value) !== "object";
  }
  var Select = /* @__PURE__ */ k3(function(props, ref) {
    var id = props.id, mode = props.mode, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-select" : _props$prefixCls, backfill = props.backfill, fieldNames = props.fieldNames, inputValue = props.inputValue, searchValue = props.searchValue, onSearch = props.onSearch, _props$autoClearSearc = props.autoClearSearchValue, autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc, onSelect = props.onSelect, onDeselect = props.onDeselect, _props$dropdownMatchS = props.dropdownMatchSelectWidth, dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS, filterOption = props.filterOption, filterSort = props.filterSort, optionFilterProp = props.optionFilterProp, optionLabelProp = props.optionLabelProp, options = props.options, children = props.children, defaultActiveFirstOption = props.defaultActiveFirstOption, menuItemSelectedIcon = props.menuItemSelectedIcon, virtual = props.virtual, _props$listHeight = props.listHeight, listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight, _props$listItemHeight = props.listItemHeight, listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight, value = props.value, defaultValue = props.defaultValue, labelInValue = props.labelInValue, onChange = props.onChange, restProps = _objectWithoutProperties(props, _excluded41);
    var mergedId = useId2(id);
    var multiple = isMultiple(mode);
    var childrenAsData = !!(!options && children);
    var mergedFilterOption = F2(function() {
      if (filterOption === void 0 && mode === "combobox") {
        return false;
      }
      return filterOption;
    }, [filterOption, mode]);
    var mergedFieldNames = F2(
      function() {
        return fillFieldNames(fieldNames, childrenAsData);
      },
      /* eslint-disable react-hooks/exhaustive-deps */
      [
        // We stringify fieldNames to avoid unnecessary re-renders.
        JSON.stringify(fieldNames),
        childrenAsData
      ]
      /* eslint-enable react-hooks/exhaustive-deps */
    );
    var _useMergedState = useMergedState("", {
      value: searchValue !== void 0 ? searchValue : inputValue,
      postState: function postState(search) {
        return search || "";
      }
    }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedSearchValue = _useMergedState2[0], setSearchValue = _useMergedState2[1];
    var parsedOptions = useOptions(options, children, mergedFieldNames, optionFilterProp, optionLabelProp);
    var valueOptions = parsedOptions.valueOptions, labelOptions = parsedOptions.labelOptions, mergedOptions = parsedOptions.options;
    var convert2LabelValues = T2(function(draftValues) {
      var valueList = toArray3(draftValues);
      return valueList.map(function(val) {
        var rawValue;
        var rawLabel;
        var rawKey;
        var rawDisabled;
        var rawTitle;
        if (isRawValue(val)) {
          rawValue = val;
        } else {
          var _val$value;
          rawKey = val.key;
          rawLabel = val.label;
          rawValue = (_val$value = val.value) !== null && _val$value !== void 0 ? _val$value : rawKey;
        }
        var option = valueOptions.get(rawValue);
        if (option) {
          var _option$key;
          if (rawLabel === void 0)
            rawLabel = option === null || option === void 0 ? void 0 : option[optionLabelProp || mergedFieldNames.label];
          if (rawKey === void 0)
            rawKey = (_option$key = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key !== void 0 ? _option$key : rawValue;
          rawDisabled = option === null || option === void 0 ? void 0 : option.disabled;
          rawTitle = option === null || option === void 0 ? void 0 : option.title;
          if (!optionLabelProp) {
            var optionLabel = option === null || option === void 0 ? void 0 : option[mergedFieldNames.label];
            if (optionLabel !== void 0 && optionLabel !== rawLabel) {
              warning_default(false, "`label` of `value` is not same as `label` in Select options.");
            }
          }
        }
        return {
          label: rawLabel,
          value: rawValue,
          key: rawKey,
          disabled: rawDisabled,
          title: rawTitle
        };
      });
    }, [mergedFieldNames, optionLabelProp, valueOptions]);
    var _useMergedState3 = useMergedState(defaultValue, {
      value
    }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), internalValue = _useMergedState4[0], setInternalValue = _useMergedState4[1];
    var rawLabeledValues = F2(function() {
      var _values$;
      var values = convert2LabelValues(internalValue);
      if (mode === "combobox" && !((_values$ = values[0]) !== null && _values$ !== void 0 && _values$.value)) {
        return [];
      }
      return values;
    }, [internalValue, convert2LabelValues, mode]);
    var _useCache = useCache_default(rawLabeledValues, valueOptions), _useCache2 = _slicedToArray(_useCache, 2), mergedValues = _useCache2[0], getMixedOption = _useCache2[1];
    var displayValues = F2(function() {
      if (!mode && mergedValues.length === 1) {
        var firstValue = mergedValues[0];
        if (firstValue.value === null && (firstValue.label === null || firstValue.label === void 0)) {
          return [];
        }
      }
      return mergedValues.map(function(item) {
        var _item$label;
        return _objectSpread2(_objectSpread2({}, item), {}, {
          label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value
        });
      });
    }, [mode, mergedValues]);
    var rawValues = F2(function() {
      return new Set(mergedValues.map(function(val) {
        return val.value;
      }));
    }, [mergedValues]);
    p2(function() {
      if (mode === "combobox") {
        var _mergedValues$;
        var strValue = (_mergedValues$ = mergedValues[0]) === null || _mergedValues$ === void 0 ? void 0 : _mergedValues$.value;
        setSearchValue(hasValue2(strValue) ? String(strValue) : "");
      }
    }, [mergedValues]);
    var createTagOption = useRefFunc(function(val, label) {
      var _ref;
      var mergedLabel = label !== null && label !== void 0 ? label : val;
      return _ref = {}, _defineProperty(_ref, mergedFieldNames.value, val), _defineProperty(_ref, mergedFieldNames.label, mergedLabel), _ref;
    });
    var filledTagOptions = F2(function() {
      if (mode !== "tags") {
        return mergedOptions;
      }
      var cloneOptions = _toConsumableArray(mergedOptions);
      var existOptions = function existOptions2(val) {
        return valueOptions.has(val);
      };
      _toConsumableArray(mergedValues).sort(function(a3, b3) {
        return a3.value < b3.value ? -1 : 1;
      }).forEach(function(item) {
        var val = item.value;
        if (!existOptions(val)) {
          cloneOptions.push(createTagOption(val, item.label));
        }
      });
      return cloneOptions;
    }, [createTagOption, mergedOptions, valueOptions, mergedValues, mode]);
    var filteredOptions = useFilterOptions_default(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, optionFilterProp);
    var filledSearchOptions = F2(function() {
      if (mode !== "tags" || !mergedSearchValue || filteredOptions.some(function(item) {
        return item[optionFilterProp || "value"] === mergedSearchValue;
      })) {
        return filteredOptions;
      }
      return [createTagOption(mergedSearchValue)].concat(_toConsumableArray(filteredOptions));
    }, [createTagOption, optionFilterProp, mode, filteredOptions, mergedSearchValue]);
    var orderedFilteredOptions = F2(function() {
      if (!filterSort) {
        return filledSearchOptions;
      }
      return _toConsumableArray(filledSearchOptions).sort(function(a3, b3) {
        return filterSort(a3, b3);
      });
    }, [filledSearchOptions, filterSort]);
    var displayOptions = F2(function() {
      return flattenOptions(orderedFilteredOptions, {
        fieldNames: mergedFieldNames,
        childrenAsData
      });
    }, [orderedFilteredOptions, mergedFieldNames, childrenAsData]);
    var triggerChange = function triggerChange2(values) {
      var labeledValues = convert2LabelValues(values);
      setInternalValue(labeledValues);
      if (onChange && // Trigger event only when value changed
      (labeledValues.length !== mergedValues.length || labeledValues.some(function(newVal, index2) {
        var _mergedValues$index;
        return ((_mergedValues$index = mergedValues[index2]) === null || _mergedValues$index === void 0 ? void 0 : _mergedValues$index.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
      }))) {
        var returnValues = labelInValue ? labeledValues : labeledValues.map(function(v3) {
          return v3.value;
        });
        var returnOptions = labeledValues.map(function(v3) {
          return injectPropsWithOption(getMixedOption(v3.value));
        });
        onChange(
          // Value
          multiple ? returnValues : returnValues[0],
          // Option
          multiple ? returnOptions : returnOptions[0]
        );
      }
    };
    var _React$useState = h2(null), _React$useState2 = _slicedToArray(_React$useState, 2), activeValue = _React$useState2[0], setActiveValue = _React$useState2[1];
    var _React$useState3 = h2(0), _React$useState4 = _slicedToArray(_React$useState3, 2), accessibilityIndex = _React$useState4[0], setAccessibilityIndex = _React$useState4[1];
    var mergedDefaultActiveFirstOption = defaultActiveFirstOption !== void 0 ? defaultActiveFirstOption : mode !== "combobox";
    var onActiveValue = T2(function(active, index2) {
      var _ref2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref2$source = _ref2.source, source = _ref2$source === void 0 ? "keyboard" : _ref2$source;
      setAccessibilityIndex(index2);
      if (backfill && mode === "combobox" && active !== null && source === "keyboard") {
        setActiveValue(String(active));
      }
    }, [backfill, mode]);
    var triggerSelect = function triggerSelect2(val, selected, type4) {
      var getSelectEnt = function getSelectEnt2() {
        var _option$key2;
        var option = getMixedOption(val);
        return [labelInValue ? {
          label: option === null || option === void 0 ? void 0 : option[mergedFieldNames.label],
          value: val,
          key: (_option$key2 = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key2 !== void 0 ? _option$key2 : val
        } : val, injectPropsWithOption(option)];
      };
      if (selected && onSelect) {
        var _getSelectEnt = getSelectEnt(), _getSelectEnt2 = _slicedToArray(_getSelectEnt, 2), wrappedValue = _getSelectEnt2[0], _option = _getSelectEnt2[1];
        onSelect(wrappedValue, _option);
      } else if (!selected && onDeselect && type4 !== "clear") {
        var _getSelectEnt3 = getSelectEnt(), _getSelectEnt4 = _slicedToArray(_getSelectEnt3, 2), _wrappedValue = _getSelectEnt4[0], _option2 = _getSelectEnt4[1];
        onDeselect(_wrappedValue, _option2);
      }
    };
    var onInternalSelect = useRefFunc(function(val, info) {
      var cloneValues;
      var mergedSelect = multiple ? info.selected : true;
      if (mergedSelect) {
        cloneValues = multiple ? [].concat(_toConsumableArray(mergedValues), [val]) : [val];
      } else {
        cloneValues = mergedValues.filter(function(v3) {
          return v3.value !== val;
        });
      }
      triggerChange(cloneValues);
      triggerSelect(val, mergedSelect);
      if (mode === "combobox") {
        setActiveValue("");
      } else if (!isMultiple || autoClearSearchValue) {
        setSearchValue("");
        setActiveValue("");
      }
    });
    var onDisplayValuesChange = function onDisplayValuesChange2(nextValues, info) {
      triggerChange(nextValues);
      var type4 = info.type, values = info.values;
      if (type4 === "remove" || type4 === "clear") {
        values.forEach(function(item) {
          triggerSelect(item.value, false, type4);
        });
      }
    };
    var onInternalSearch = function onInternalSearch2(searchText, info) {
      setSearchValue(searchText);
      setActiveValue(null);
      if (info.source === "submit") {
        var formatted = (searchText || "").trim();
        if (formatted) {
          var newRawValues = Array.from(new Set([].concat(_toConsumableArray(rawValues), [formatted])));
          triggerChange(newRawValues);
          triggerSelect(formatted, true);
          setSearchValue("");
        }
        return;
      }
      if (info.source !== "blur") {
        if (mode === "combobox") {
          triggerChange(searchText);
        }
        onSearch === null || onSearch === void 0 ? void 0 : onSearch(searchText);
      }
    };
    var onInternalSearchSplit = function onInternalSearchSplit2(words) {
      var patchValues = words;
      if (mode !== "tags") {
        patchValues = words.map(function(word) {
          var opt = labelOptions.get(word);
          return opt === null || opt === void 0 ? void 0 : opt.value;
        }).filter(function(val) {
          return val !== void 0;
        });
      }
      var newRawValues = Array.from(new Set([].concat(_toConsumableArray(rawValues), _toConsumableArray(patchValues))));
      triggerChange(newRawValues);
      newRawValues.forEach(function(newRawValue) {
        triggerSelect(newRawValue, true);
      });
    };
    var selectContext = F2(function() {
      var realVirtual = virtual !== false && dropdownMatchSelectWidth !== false;
      return _objectSpread2(_objectSpread2({}, parsedOptions), {}, {
        flattenOptions: displayOptions,
        onActiveValue,
        defaultActiveFirstOption: mergedDefaultActiveFirstOption,
        onSelect: onInternalSelect,
        menuItemSelectedIcon,
        rawValues,
        fieldNames: mergedFieldNames,
        virtual: realVirtual,
        listHeight,
        listItemHeight,
        childrenAsData
      });
    }, [parsedOptions, displayOptions, onActiveValue, mergedDefaultActiveFirstOption, onInternalSelect, menuItemSelectedIcon, rawValues, mergedFieldNames, virtual, dropdownMatchSelectWidth, listHeight, listItemHeight, childrenAsData]);
    if (true) {
      warningPropsUtil_default(props);
      warningNullOptions(mergedOptions, mergedFieldNames);
    }
    return /* @__PURE__ */ y(SelectContext_default.Provider, {
      value: selectContext
    }, /* @__PURE__ */ y(BaseSelect_default, _extends({}, restProps, {
      // >>> MISC
      id: mergedId,
      prefixCls,
      ref,
      omitDomProps: OMIT_DOM_PROPS,
      mode,
      displayValues,
      onDisplayValuesChange,
      searchValue: mergedSearchValue,
      onSearch: onInternalSearch,
      autoClearSearchValue,
      onSearchSplit: onInternalSearchSplit,
      dropdownMatchSelectWidth,
      OptionList: OptionList_default,
      emptyOptions: !displayOptions.length,
      activeValue,
      activeDescendantId: "".concat(mergedId, "_list_").concat(accessibilityIndex)
    })));
  });
  if (true) {
    Select.displayName = "Select";
  }
  var TypedSelect = Select;
  TypedSelect.Option = Option_default;
  TypedSelect.OptGroup = OptGroup_default;
  var Select_default = TypedSelect;

  // node_modules/rc-select/es/index.js
  var es_default7 = Select_default;

  // node_modules/antd/es/select/index.js
  init_react();

  // node_modules/antd/es/_util/statusUtils.js
  var import_classnames20 = __toESM(require_classnames());
  function getStatusClassNames(prefixCls, status, hasFeedback) {
    return (0, import_classnames20.default)({
      [`${prefixCls}-status-success`]: status === "success",
      [`${prefixCls}-status-warning`]: status === "warning",
      [`${prefixCls}-status-error`]: status === "error",
      [`${prefixCls}-status-validating`]: status === "validating",
      [`${prefixCls}-has-feedback`]: hasFeedback
    });
  }
  var getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;

  // node_modules/antd/es/config-provider/defaultRenderEmpty.js
  init_react();

  // node_modules/antd/es/empty/index.js
  var import_classnames21 = __toESM(require_classnames());
  init_react();

  // node_modules/antd/es/empty/empty.js
  init_react();
  var Empty2 = () => {
    const [, token2] = useToken();
    const bgColor = new TinyColor(token2.colorBgBase);
    let themeStyle = {};
    if (bgColor.toHsl().l < 0.5) {
      themeStyle = {
        opacity: 0.65
      };
    }
    return /* @__PURE__ */ y("svg", {
      style: themeStyle,
      width: "184",
      height: "152",
      viewBox: "0 0 184 152",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ y("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /* @__PURE__ */ y("g", {
      transform: "translate(24 31.67)"
    }, /* @__PURE__ */ y("ellipse", {
      fillOpacity: ".8",
      fill: "#F5F5F7",
      cx: "67.797",
      cy: "106.89",
      rx: "67.797",
      ry: "12.668"
    }), /* @__PURE__ */ y("path", {
      d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      fill: "#AEB8C2"
    }), /* @__PURE__ */ y("path", {
      d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      fill: "url(#linearGradient-1)",
      transform: "translate(13.56)"
    }), /* @__PURE__ */ y("path", {
      d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      fill: "#F5F5F7"
    }), /* @__PURE__ */ y("path", {
      d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      fill: "#DCE0E6"
    })), /* @__PURE__ */ y("path", {
      d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      fill: "#DCE0E6"
    }), /* @__PURE__ */ y("g", {
      transform: "translate(149.65 15.383)",
      fill: "#FFF"
    }, /* @__PURE__ */ y("ellipse", {
      cx: "20.654",
      cy: "3.167",
      rx: "2.849",
      ry: "2.815"
    }), /* @__PURE__ */ y("path", {
      d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }))));
  };
  if (true) {
    Empty2.displayName = "EmptyImage";
  }
  var empty_default = Empty2;

  // node_modules/antd/es/empty/simple.js
  init_react();
  init_react();
  var Simple = () => {
    const [, token2] = useToken();
    const {
      colorFill,
      colorFillTertiary,
      colorFillQuaternary,
      colorBgContainer
    } = token2;
    const {
      borderColor,
      shadowColor,
      contentColor
    } = F2(() => ({
      borderColor: new TinyColor(colorFill).onBackground(colorBgContainer).toHexShortString(),
      shadowColor: new TinyColor(colorFillTertiary).onBackground(colorBgContainer).toHexShortString(),
      contentColor: new TinyColor(colorFillQuaternary).onBackground(colorBgContainer).toHexShortString()
    }), [colorFill, colorFillTertiary, colorFillQuaternary, colorBgContainer]);
    return /* @__PURE__ */ y("svg", {
      width: "64",
      height: "41",
      viewBox: "0 0 64 41",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ y("g", {
      transform: "translate(0 1)",
      fill: "none",
      fillRule: "evenodd"
    }, /* @__PURE__ */ y("ellipse", {
      fill: shadowColor,
      cx: "32",
      cy: "33",
      rx: "32",
      ry: "7"
    }), /* @__PURE__ */ y("g", {
      fillRule: "nonzero",
      stroke: borderColor
    }, /* @__PURE__ */ y("path", {
      d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }), /* @__PURE__ */ y("path", {
      d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      fill: contentColor
    }))));
  };
  if (true) {
    Simple.displayName = "SimpleImage";
  }
  var simple_default = Simple;

  // node_modules/antd/es/empty/style/index.js
  var genSharedEmptyStyle = (token2) => {
    const {
      componentCls,
      margin,
      marginXS,
      marginXL,
      fontSize,
      lineHeight
    } = token2;
    return {
      [componentCls]: {
        marginInline: marginXS,
        fontSize,
        lineHeight,
        textAlign: "center",
        // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
        [`${componentCls}-image`]: {
          height: token2.emptyImgHeight,
          marginBottom: marginXS,
          opacity: token2.opacityImage,
          img: {
            height: "100%"
          },
          svg: {
            maxWidth: "100%",
            height: "100%",
            margin: "auto"
          }
        },
        [`${componentCls}-description`]: {
          color: token2.colorText
        },
        // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
        [`${componentCls}-footer`]: {
          marginTop: margin
        },
        "&-normal": {
          marginBlock: marginXL,
          color: token2.colorTextDisabled,
          [`${componentCls}-description`]: {
            color: token2.colorTextDisabled
          },
          [`${componentCls}-image`]: {
            height: token2.emptyImgHeightMD
          }
        },
        "&-small": {
          marginBlock: marginXS,
          color: token2.colorTextDisabled,
          [`${componentCls}-image`]: {
            height: token2.emptyImgHeightSM
          }
        }
      }
    };
  };
  var style_default2 = genComponentStyleHook("Empty", (token2) => {
    const {
      componentCls,
      controlHeightLG
    } = token2;
    const emptyToken = merge(token2, {
      emptyImgCls: `${componentCls}-img`,
      emptyImgHeight: controlHeightLG * 2.5,
      emptyImgHeightMD: controlHeightLG,
      emptyImgHeightSM: controlHeightLG * 0.875
    });
    return [genSharedEmptyStyle(emptyToken)];
  });

  // node_modules/antd/es/empty/index.js
  var __rest3 = function(s3, e3) {
    var t3 = {};
    for (var p3 in s3)
      if (Object.prototype.hasOwnProperty.call(s3, p3) && e3.indexOf(p3) < 0)
        t3[p3] = s3[p3];
    if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i3 = 0, p3 = Object.getOwnPropertySymbols(s3); i3 < p3.length; i3++) {
        if (e3.indexOf(p3[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i3]))
          t3[p3[i3]] = s3[p3[i3]];
      }
    return t3;
  };
  var defaultEmptyImg = /* @__PURE__ */ y(empty_default, null);
  var simpleEmptyImg = /* @__PURE__ */ y(simple_default, null);
  var Empty3 = (_a) => {
    var {
      className,
      rootClassName,
      prefixCls: customizePrefixCls,
      image = defaultEmptyImg,
      description,
      children,
      imageStyle
    } = _a, restProps = __rest3(_a, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle"]);
    const {
      getPrefixCls,
      direction
    } = q2(ConfigContext);
    const prefixCls = getPrefixCls("empty", customizePrefixCls);
    const [wrapSSR, hashId] = style_default2(prefixCls);
    const [locale4] = useLocale_default("Empty");
    const des = typeof description !== "undefined" ? description : locale4 === null || locale4 === void 0 ? void 0 : locale4.description;
    const alt = typeof des === "string" ? des : "empty";
    let imageNode = null;
    if (typeof image === "string") {
      imageNode = /* @__PURE__ */ y("img", {
        alt,
        src: image
      });
    } else {
      imageNode = image;
    }
    return wrapSSR(/* @__PURE__ */ y("div", Object.assign({
      className: (0, import_classnames21.default)(hashId, prefixCls, {
        [`${prefixCls}-normal`]: image === simpleEmptyImg,
        [`${prefixCls}-rtl`]: direction === "rtl"
      }, className, rootClassName)
    }, restProps), /* @__PURE__ */ y("div", {
      className: `${prefixCls}-image`,
      style: imageStyle
    }, imageNode), des && /* @__PURE__ */ y("div", {
      className: `${prefixCls}-description`
    }, des), children && /* @__PURE__ */ y("div", {
      className: `${prefixCls}-footer`
    }, children)));
  };
  Empty3.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
  Empty3.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
  if (true) {
    Empty3.displayName = "Empty";
  }
  var empty_default2 = Empty3;

  // node_modules/antd/es/config-provider/defaultRenderEmpty.js
  var DefaultRenderEmpty = (props) => {
    const {
      componentName
    } = props;
    const {
      getPrefixCls
    } = q2(ConfigContext);
    const prefix = getPrefixCls("empty");
    switch (componentName) {
      case "Table":
      case "List":
        return /* @__PURE__ */ Cn.createElement(empty_default2, {
          image: empty_default2.PRESENTED_IMAGE_SIMPLE
        });
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return /* @__PURE__ */ Cn.createElement(empty_default2, {
          image: empty_default2.PRESENTED_IMAGE_SIMPLE,
          className: `${prefix}-small`
        });
      default:
        return /* @__PURE__ */ Cn.createElement(empty_default2, null);
    }
  };
  var defaultRenderEmpty_default = DefaultRenderEmpty;

  // node_modules/antd/es/select/style/dropdown.js
  var genItemStyle = (token2) => {
    const {
      controlPaddingHorizontal
    } = token2;
    return {
      position: "relative",
      display: "block",
      minHeight: token2.controlHeight,
      padding: `${(token2.controlHeight - token2.fontSize * token2.lineHeight) / 2}px ${controlPaddingHorizontal}px`,
      color: token2.colorText,
      fontWeight: "normal",
      fontSize: token2.fontSize,
      lineHeight: token2.lineHeight,
      boxSizing: "border-box"
    };
  };
  var genSingleStyle = (token2) => {
    const {
      antCls,
      componentCls
    } = token2;
    const selectItemCls = `${componentCls}-item`;
    return [
      {
        [`${componentCls}-dropdown`]: Object.assign(Object.assign({}, resetComponent(token2)), {
          position: "absolute",
          top: -9999,
          zIndex: token2.zIndexPopup,
          boxSizing: "border-box",
          padding: token2.paddingXXS,
          overflow: "hidden",
          fontSize: token2.fontSize,
          // Fix select render lag of long text in chrome
          // https://github.com/ant-design/ant-design/issues/11456
          // https://github.com/ant-design/ant-design/issues/11843
          fontVariant: "initial",
          backgroundColor: token2.colorBgElevated,
          borderRadius: token2.borderRadiusLG,
          outline: "none",
          boxShadow: token2.boxShadowSecondary,
          [`
            &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-bottomLeft,
            &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-bottomLeft
          `]: {
            animationName: slideUpIn
          },
          [`
            &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-topLeft,
            &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-topLeft
          `]: {
            animationName: slideDownIn
          },
          [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-bottomLeft`]: {
            animationName: slideUpOut
          },
          [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-topLeft`]: {
            animationName: slideDownOut
          },
          "&-hidden": {
            display: "none"
          },
          [`${selectItemCls}`]: Object.assign(Object.assign({}, genItemStyle(token2)), {
            cursor: "pointer",
            transition: `background ${token2.motionDurationSlow} ease`,
            borderRadius: token2.borderRadiusSM,
            // =========== Group ============
            "&-group": {
              color: token2.colorTextDescription,
              fontSize: token2.fontSizeSM,
              cursor: "default"
            },
            // =========== Option ===========
            "&-option": {
              display: "flex",
              "&-content": Object.assign(Object.assign({
                flex: "auto"
              }, textEllipsis), {
                "> *": Object.assign({}, textEllipsis)
              }),
              "&-state": {
                flex: "none"
              },
              [`&-active:not(${selectItemCls}-option-disabled)`]: {
                backgroundColor: token2.controlItemBgHover
              },
              [`&-selected:not(${selectItemCls}-option-disabled)`]: {
                color: token2.colorText,
                fontWeight: token2.fontWeightStrong,
                backgroundColor: token2.controlItemBgActive,
                [`${selectItemCls}-option-state`]: {
                  color: token2.colorPrimary
                }
              },
              "&-disabled": {
                [`&${selectItemCls}-option-selected`]: {
                  backgroundColor: token2.colorBgContainerDisabled
                },
                color: token2.colorTextDisabled,
                cursor: "not-allowed"
              },
              "&-grouped": {
                paddingInlineStart: token2.controlPaddingHorizontal * 2
              }
            }
          }),
          // =========================== RTL ===========================
          "&-rtl": {
            direction: "rtl"
          }
        })
      },
      // Follow code may reuse in other components
      initSlideMotion(token2, "slide-up"),
      initSlideMotion(token2, "slide-down"),
      initMoveMotion(token2, "move-up"),
      initMoveMotion(token2, "move-down")
    ];
  };
  var dropdown_default = genSingleStyle;

  // node_modules/antd/es/select/style/multiple.js
  var FIXED_ITEM_MARGIN = 2;
  var getSelectItemStyle = (_ref) => {
    let {
      controlHeightSM,
      controlHeight,
      lineWidth: borderWidth
    } = _ref;
    const selectItemDist = (controlHeight - controlHeightSM) / 2 - borderWidth;
    const selectItemMargin = Math.ceil(selectItemDist / 2);
    return [selectItemDist, selectItemMargin];
  };
  function genSizeStyle(token2, suffix) {
    const {
      componentCls,
      iconCls
    } = token2;
    const selectOverflowPrefixCls = `${componentCls}-selection-overflow`;
    const selectItemHeight = token2.controlHeightSM;
    const [selectItemDist] = getSelectItemStyle(token2);
    const suffixCls = suffix ? `${componentCls}-${suffix}` : "";
    return {
      [`${componentCls}-multiple${suffixCls}`]: {
        fontSize: token2.fontSize,
        /**
         * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
         * may update to redesign with its align logic.
         */
        // =========================== Overflow ===========================
        [selectOverflowPrefixCls]: {
          position: "relative",
          display: "flex",
          flex: "auto",
          flexWrap: "wrap",
          maxWidth: "100%",
          "&-item": {
            flex: "none",
            alignSelf: "center",
            maxWidth: "100%",
            display: "inline-flex"
          }
        },
        // ========================= Selector =========================
        [`${componentCls}-selector`]: {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          // Multiple is little different that horizontal is follow the vertical
          padding: `${selectItemDist - FIXED_ITEM_MARGIN}px ${FIXED_ITEM_MARGIN * 2}px`,
          borderRadius: token2.borderRadius,
          [`${componentCls}-show-search&`]: {
            cursor: "text"
          },
          [`${componentCls}-disabled&`]: {
            background: token2.colorBgContainerDisabled,
            cursor: "not-allowed"
          },
          "&:after": {
            display: "inline-block",
            width: 0,
            margin: `${FIXED_ITEM_MARGIN}px 0`,
            lineHeight: `${selectItemHeight}px`,
            content: '"\\a0"'
          }
        },
        [`
        &${componentCls}-show-arrow ${componentCls}-selector,
        &${componentCls}-allow-clear ${componentCls}-selector
      `]: {
          paddingInlineEnd: token2.fontSizeIcon + token2.controlPaddingHorizontal
        },
        // ======================== Selections ========================
        [`${componentCls}-selection-item`]: {
          position: "relative",
          display: "flex",
          flex: "none",
          boxSizing: "border-box",
          maxWidth: "100%",
          height: selectItemHeight,
          marginTop: FIXED_ITEM_MARGIN,
          marginBottom: FIXED_ITEM_MARGIN,
          lineHeight: `${selectItemHeight - token2.lineWidth * 2}px`,
          background: token2.colorFillSecondary,
          borderRadius: token2.borderRadiusSM,
          cursor: "default",
          transition: `font-size ${token2.motionDurationSlow}, line-height ${token2.motionDurationSlow}, height ${token2.motionDurationSlow}`,
          userSelect: "none",
          marginInlineEnd: FIXED_ITEM_MARGIN * 2,
          paddingInlineStart: token2.paddingXS,
          paddingInlineEnd: token2.paddingXS / 2,
          [`${componentCls}-disabled&`]: {
            color: token2.colorTextDisabled,
            cursor: "not-allowed"
          },
          // It's ok not to do this, but 24px makes bottom narrow in view should adjust
          "&-content": {
            display: "inline-block",
            marginInlineEnd: token2.paddingXS / 2,
            overflow: "hidden",
            whiteSpace: "pre",
            textOverflow: "ellipsis"
          },
          "&-remove": Object.assign(Object.assign({}, resetIcon()), {
            display: "inline-block",
            color: token2.colorIcon,
            fontWeight: "bold",
            fontSize: 10,
            lineHeight: "inherit",
            cursor: "pointer",
            [`> ${iconCls}`]: {
              verticalAlign: "-0.2em"
            },
            "&:hover": {
              color: token2.colorIconHover
            }
          })
        },
        // ========================== Input ==========================
        [`${selectOverflowPrefixCls}-item + ${selectOverflowPrefixCls}-item`]: {
          [`${componentCls}-selection-search`]: {
            marginInlineStart: 0
          }
        },
        [`${componentCls}-selection-search`]: {
          display: "inline-flex",
          position: "relative",
          maxWidth: "100%",
          marginInlineStart: token2.inputPaddingHorizontalBase - selectItemDist,
          [`
          &-input,
          &-mirror
        `]: {
            height: selectItemHeight,
            fontFamily: token2.fontFamily,
            lineHeight: `${selectItemHeight}px`,
            transition: `all ${token2.motionDurationSlow}`
          },
          "&-input": {
            width: "100%",
            minWidth: 4.1
            // fix search cursor missing
          },
          "&-mirror": {
            position: "absolute",
            top: 0,
            insetInlineStart: 0,
            insetInlineEnd: "auto",
            zIndex: 999,
            whiteSpace: "pre",
            visibility: "hidden"
          }
        },
        // ======================= Placeholder =======================
        [`${componentCls}-selection-placeholder `]: {
          position: "absolute",
          top: "50%",
          insetInlineStart: token2.inputPaddingHorizontalBase,
          insetInlineEnd: token2.inputPaddingHorizontalBase,
          transform: "translateY(-50%)",
          transition: `all ${token2.motionDurationSlow}`
        }
      }
    };
  }
  var genMultipleStyle = (token2) => {
    const {
      componentCls
    } = token2;
    const smallToken = merge(token2, {
      controlHeight: token2.controlHeightSM,
      controlHeightSM: token2.controlHeightXS,
      borderRadius: token2.borderRadiusSM,
      borderRadiusSM: token2.borderRadiusXS
    });
    const largeToken = merge(token2, {
      fontSize: token2.fontSizeLG,
      controlHeight: token2.controlHeightLG,
      controlHeightSM: token2.controlHeight,
      borderRadius: token2.borderRadiusLG,
      borderRadiusSM: token2.borderRadius
    });
    const [, smSelectItemMargin] = getSelectItemStyle(token2);
    return [
      genSizeStyle(token2),
      // ======================== Small ========================
      genSizeStyle(smallToken, "sm"),
      // Padding
      {
        [`${componentCls}-multiple${componentCls}-sm`]: {
          [`${componentCls}-selection-placeholder`]: {
            insetInline: token2.controlPaddingHorizontalSM - token2.lineWidth
          },
          // https://github.com/ant-design/ant-design/issues/29559
          [`${componentCls}-selection-search`]: {
            marginInlineStart: smSelectItemMargin
          }
        }
      },
      // ======================== Large ========================
      genSizeStyle(largeToken, "lg")
    ];
  };
  var multiple_default = genMultipleStyle;

  // node_modules/antd/es/select/style/single.js
  function genSizeStyle2(token2, suffix) {
    const {
      componentCls,
      inputPaddingHorizontalBase,
      borderRadius
    } = token2;
    const selectHeightWithoutBorder = token2.controlHeight - token2.lineWidth * 2;
    const selectionItemPadding = Math.ceil(token2.fontSize * 1.25);
    const suffixCls = suffix ? `${componentCls}-${suffix}` : "";
    return {
      [`${componentCls}-single${suffixCls}`]: {
        fontSize: token2.fontSize,
        // ========================= Selector =========================
        [`${componentCls}-selector`]: Object.assign(Object.assign({}, resetComponent(token2)), {
          display: "flex",
          borderRadius,
          [`${componentCls}-selection-search`]: {
            position: "absolute",
            top: 0,
            insetInlineStart: inputPaddingHorizontalBase,
            insetInlineEnd: inputPaddingHorizontalBase,
            bottom: 0,
            "&-input": {
              width: "100%"
            }
          },
          [`
          ${componentCls}-selection-item,
          ${componentCls}-selection-placeholder
        `]: {
            padding: 0,
            lineHeight: `${selectHeightWithoutBorder}px`,
            transition: `all ${token2.motionDurationSlow}, visibility 0s`,
            // Firefox inline-block position calculation is not same as Chrome & Safari. Patch this:
            "@supports (-moz-appearance: meterbar)": {
              lineHeight: `${selectHeightWithoutBorder}px`
            }
          },
          [`${componentCls}-selection-item`]: {
            position: "relative",
            userSelect: "none"
          },
          [`${componentCls}-selection-placeholder`]: {
            transition: "none",
            pointerEvents: "none"
          },
          // For common baseline align
          [[
            "&:after",
            /* For '' value baseline align */
            `${componentCls}-selection-item:after`,
            /* For undefined value baseline align */
            `${componentCls}-selection-placeholder:after`
          ].join(",")]: {
            display: "inline-block",
            width: 0,
            visibility: "hidden",
            content: '"\\a0"'
          }
        }),
        [`
        &${componentCls}-show-arrow ${componentCls}-selection-item,
        &${componentCls}-show-arrow ${componentCls}-selection-placeholder
      `]: {
          paddingInlineEnd: selectionItemPadding
        },
        // Opacity selection if open
        [`&${componentCls}-open ${componentCls}-selection-item`]: {
          color: token2.colorTextPlaceholder
        },
        // ========================== Input ==========================
        // We only change the style of non-customize input which is only support by `combobox` mode.
        // Not customize
        [`&:not(${componentCls}-customize-input)`]: {
          [`${componentCls}-selector`]: {
            width: "100%",
            height: token2.controlHeight,
            padding: `0 ${inputPaddingHorizontalBase}px`,
            [`${componentCls}-selection-search-input`]: {
              height: selectHeightWithoutBorder
            },
            "&:after": {
              lineHeight: `${selectHeightWithoutBorder}px`
            }
          }
        },
        [`&${componentCls}-customize-input`]: {
          [`${componentCls}-selector`]: {
            "&:after": {
              display: "none"
            },
            [`${componentCls}-selection-search`]: {
              position: "static",
              width: "100%"
            },
            [`${componentCls}-selection-placeholder`]: {
              position: "absolute",
              insetInlineStart: 0,
              insetInlineEnd: 0,
              padding: `0 ${inputPaddingHorizontalBase}px`,
              "&:after": {
                display: "none"
              }
            }
          }
        }
      }
    };
  }
  function genSingleStyle2(token2) {
    const {
      componentCls
    } = token2;
    const inputPaddingHorizontalSM = token2.controlPaddingHorizontalSM - token2.lineWidth;
    return [
      genSizeStyle2(token2),
      // ======================== Small ========================
      // Shared
      genSizeStyle2(merge(token2, {
        controlHeight: token2.controlHeightSM,
        borderRadius: token2.borderRadiusSM
      }), "sm"),
      // padding
      {
        [`${componentCls}-single${componentCls}-sm`]: {
          [`&:not(${componentCls}-customize-input)`]: {
            [`${componentCls}-selection-search`]: {
              insetInlineStart: inputPaddingHorizontalSM,
              insetInlineEnd: inputPaddingHorizontalSM
            },
            [`${componentCls}-selector`]: {
              padding: `0 ${inputPaddingHorizontalSM}px`
            },
            // With arrow should provides `padding-right` to show the arrow
            [`&${componentCls}-show-arrow ${componentCls}-selection-search`]: {
              insetInlineEnd: inputPaddingHorizontalSM + token2.fontSize * 1.5
            },
            [`
            &${componentCls}-show-arrow ${componentCls}-selection-item,
            &${componentCls}-show-arrow ${componentCls}-selection-placeholder
          `]: {
              paddingInlineEnd: token2.fontSize * 1.5
            }
          }
        }
      },
      // ======================== Large ========================
      // Shared
      genSizeStyle2(merge(token2, {
        controlHeight: token2.controlHeightLG,
        fontSize: token2.fontSizeLG,
        borderRadius: token2.borderRadiusLG
      }), "lg")
    ];
  }

  // node_modules/antd/es/select/style/index.js
  var genSelectorStyle = (token2) => {
    const {
      componentCls
    } = token2;
    return {
      position: "relative",
      backgroundColor: token2.colorBgContainer,
      border: `${token2.lineWidth}px ${token2.lineType} ${token2.colorBorder}`,
      transition: `all ${token2.motionDurationMid} ${token2.motionEaseInOut}`,
      input: {
        cursor: "pointer"
      },
      [`${componentCls}-show-search&`]: {
        cursor: "text",
        input: {
          cursor: "auto",
          color: "inherit"
        }
      },
      [`${componentCls}-disabled&`]: {
        color: token2.colorTextDisabled,
        background: token2.colorBgContainerDisabled,
        cursor: "not-allowed",
        [`${componentCls}-multiple&`]: {
          background: token2.colorBgContainerDisabled
        },
        input: {
          cursor: "not-allowed"
        }
      }
    };
  };
  var genStatusStyle = function(rootSelectCls, token2) {
    let overwriteDefaultBorder = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    const {
      componentCls,
      borderHoverColor,
      outlineColor,
      antCls
    } = token2;
    const overwriteStyle = overwriteDefaultBorder ? {
      [`${componentCls}-selector`]: {
        borderColor: borderHoverColor
      }
    } : {};
    return {
      [rootSelectCls]: {
        [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${antCls}-pagination-size-changer)`]: Object.assign(Object.assign({}, overwriteStyle), {
          [`${componentCls}-focused& ${componentCls}-selector`]: {
            borderColor: borderHoverColor,
            boxShadow: `0 0 0 ${token2.controlOutlineWidth}px ${outlineColor}`,
            outline: 0
          },
          [`&:hover ${componentCls}-selector`]: {
            borderColor: borderHoverColor
          }
        })
      }
    };
  };
  var getSearchInputWithoutBorderStyle = (token2) => {
    const {
      componentCls
    } = token2;
    return {
      [`${componentCls}-selection-search-input`]: {
        margin: 0,
        padding: 0,
        background: "transparent",
        border: "none",
        outline: "none",
        appearance: "none",
        "&::-webkit-search-cancel-button": {
          display: "none",
          "-webkit-appearance": "none"
        }
      }
    };
  };
  var genBaseStyle = (token2) => {
    const {
      componentCls,
      inputPaddingHorizontalBase,
      iconCls
    } = token2;
    return {
      [componentCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: Object.assign(Object.assign({}, genSelectorStyle(token2)), getSearchInputWithoutBorderStyle(token2)),
        // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
        //   ...genHoverStyle(token),
        // },
        // ======================== Selection ========================
        [`${componentCls}-selection-item`]: Object.assign(Object.assign({
          flex: 1,
          fontWeight: "normal"
        }, textEllipsis), {
          "> *": Object.assign({
            lineHeight: "inherit"
          }, textEllipsis)
        }),
        // ======================= Placeholder =======================
        [`${componentCls}-selection-placeholder`]: Object.assign(Object.assign({}, textEllipsis), {
          flex: 1,
          color: token2.colorTextPlaceholder,
          pointerEvents: "none"
        }),
        // ========================== Arrow ==========================
        [`${componentCls}-arrow`]: Object.assign(Object.assign({}, resetIcon()), {
          position: "absolute",
          top: "50%",
          insetInlineStart: "auto",
          insetInlineEnd: inputPaddingHorizontalBase,
          height: token2.fontSizeIcon,
          marginTop: -token2.fontSizeIcon / 2,
          color: token2.colorTextQuaternary,
          fontSize: token2.fontSizeIcon,
          lineHeight: 1,
          textAlign: "center",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          [iconCls]: {
            verticalAlign: "top",
            transition: `transform ${token2.motionDurationSlow}`,
            "> svg": {
              verticalAlign: "top"
            },
            [`&:not(${componentCls}-suffix)`]: {
              pointerEvents: "auto"
            }
          },
          [`${componentCls}-disabled &`]: {
            cursor: "not-allowed"
          },
          "> *:not(:last-child)": {
            marginInlineEnd: 8
            // FIXME: magic
          }
        }),
        // ========================== Clear ==========================
        [`${componentCls}-clear`]: {
          position: "absolute",
          top: "50%",
          insetInlineStart: "auto",
          insetInlineEnd: inputPaddingHorizontalBase,
          zIndex: 1,
          display: "inline-block",
          width: token2.fontSizeIcon,
          height: token2.fontSizeIcon,
          marginTop: -token2.fontSizeIcon / 2,
          color: token2.colorTextQuaternary,
          fontSize: token2.fontSizeIcon,
          fontStyle: "normal",
          lineHeight: 1,
          textAlign: "center",
          textTransform: "none",
          background: token2.colorBgContainer,
          cursor: "pointer",
          opacity: 0,
          transition: `color ${token2.motionDurationMid} ease, opacity ${token2.motionDurationSlow} ease`,
          textRendering: "auto",
          "&:before": {
            display: "block"
          },
          "&:hover": {
            color: token2.colorTextTertiary
          }
        },
        "&:hover": {
          [`${componentCls}-clear`]: {
            opacity: 1
          }
        }
      }),
      // ========================= Feedback ==========================
      [`${componentCls}-has-feedback`]: {
        [`${componentCls}-clear`]: {
          insetInlineEnd: inputPaddingHorizontalBase + token2.fontSize + token2.paddingXXS
        }
      }
    };
  };
  var genSelectStyle = (token2) => {
    const {
      componentCls
    } = token2;
    return [
      {
        [componentCls]: {
          // ==================== BorderLess ====================
          [`&-borderless ${componentCls}-selector`]: {
            backgroundColor: `transparent !important`,
            borderColor: `transparent !important`,
            boxShadow: `none !important`
          },
          // ==================== In Form ====================
          [`&${componentCls}-in-form-item`]: {
            width: "100%"
          }
        }
      },
      // =====================================================
      // ==                       LTR                       ==
      // =====================================================
      // Base
      genBaseStyle(token2),
      // Single
      genSingleStyle2(token2),
      // Multiple
      multiple_default(token2),
      // Dropdown
      dropdown_default(token2),
      // =====================================================
      // ==                       RTL                       ==
      // =====================================================
      {
        [`${componentCls}-rtl`]: {
          direction: "rtl"
        }
      },
      // =====================================================
      // ==                     Status                      ==
      // =====================================================
      genStatusStyle(componentCls, merge(token2, {
        borderHoverColor: token2.colorPrimaryHover,
        outlineColor: token2.controlOutline
      })),
      genStatusStyle(`${componentCls}-status-error`, merge(token2, {
        borderHoverColor: token2.colorErrorHover,
        outlineColor: token2.colorErrorOutline
      }), true),
      genStatusStyle(`${componentCls}-status-warning`, merge(token2, {
        borderHoverColor: token2.colorWarningHover,
        outlineColor: token2.colorWarningOutline
      }), true),
      // =====================================================
      // ==             Space Compact                       ==
      // =====================================================
      genCompactItemStyle(token2, {
        borderElCls: `${componentCls}-selector`,
        focusElCls: `${componentCls}-focused`
      })
    ];
  };
  var style_default3 = genComponentStyleHook("Select", (token2, _ref) => {
    let {
      rootPrefixCls
    } = _ref;
    const selectToken = merge(token2, {
      rootPrefixCls,
      inputPaddingHorizontalBase: token2.paddingSM - 1
    });
    return [genSelectStyle(selectToken)];
  }, (token2) => ({
    zIndexPopup: token2.zIndexPopupBase + 50
  }));

  // node_modules/antd/es/select/useBuiltinPlacements.js
  var getBuiltInPlacements3 = (popupOverflow) => {
    const htmlRegion = popupOverflow === "scroll" ? "scroll" : "visible";
    const sharedConfig = {
      overflow: {
        adjustX: true,
        adjustY: true,
        shiftY: true
      },
      htmlRegion
    };
    return {
      bottomLeft: Object.assign(Object.assign({}, sharedConfig), {
        points: ["tl", "bl"],
        offset: [0, 4]
      }),
      bottomRight: Object.assign(Object.assign({}, sharedConfig), {
        points: ["tr", "br"],
        offset: [0, 4]
      }),
      topLeft: Object.assign(Object.assign({}, sharedConfig), {
        points: ["bl", "tl"],
        offset: [0, -4]
      }),
      topRight: Object.assign(Object.assign({}, sharedConfig), {
        points: ["br", "tr"],
        offset: [0, -4]
      })
    };
  };
  function useBuiltinPlacements(buildInPlacements, popupOverflow) {
    return buildInPlacements || getBuiltInPlacements3(popupOverflow);
  }

  // node_modules/antd/es/select/useShowArrow.js
  function useShowArrow(showArrow) {
    return showArrow !== null && showArrow !== void 0 ? showArrow : true;
  }

  // node_modules/@ant-design/icons/es/icons/CheckOutlined.js
  init_react();

  // node_modules/@ant-design/icons-svg/es/asn/CheckOutlined.js
  var CheckOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
  var CheckOutlined_default = CheckOutlined;

  // node_modules/@ant-design/icons/es/icons/CheckOutlined.js
  var CheckOutlined2 = function CheckOutlined3(props, ref) {
    return /* @__PURE__ */ y(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: CheckOutlined_default
    }));
  };
  if (true) {
    CheckOutlined2.displayName = "CheckOutlined";
  }
  var CheckOutlined_default2 = /* @__PURE__ */ k3(CheckOutlined2);

  // node_modules/@ant-design/icons/es/icons/DownOutlined.js
  init_react();

  // node_modules/@ant-design/icons-svg/es/asn/DownOutlined.js
  var DownOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
  var DownOutlined_default = DownOutlined;

  // node_modules/@ant-design/icons/es/icons/DownOutlined.js
  var DownOutlined2 = function DownOutlined3(props, ref) {
    return /* @__PURE__ */ y(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: DownOutlined_default
    }));
  };
  if (true) {
    DownOutlined2.displayName = "DownOutlined";
  }
  var DownOutlined_default2 = /* @__PURE__ */ k3(DownOutlined2);

  // node_modules/@ant-design/icons/es/icons/SearchOutlined.js
  init_react();

  // node_modules/@ant-design/icons-svg/es/asn/SearchOutlined.js
  var SearchOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, "name": "search", "theme": "outlined" };
  var SearchOutlined_default = SearchOutlined;

  // node_modules/@ant-design/icons/es/icons/SearchOutlined.js
  var SearchOutlined2 = function SearchOutlined3(props, ref) {
    return /* @__PURE__ */ y(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: SearchOutlined_default
    }));
  };
  if (true) {
    SearchOutlined2.displayName = "SearchOutlined";
  }
  var SearchOutlined_default2 = /* @__PURE__ */ k3(SearchOutlined2);

  // node_modules/antd/es/select/utils/iconUtil.js
  init_react();
  function getIcons(_ref) {
    let {
      suffixIcon,
      clearIcon,
      menuItemSelectedIcon,
      removeIcon,
      loading,
      multiple,
      hasFeedback,
      prefixCls,
      showArrow,
      feedbackIcon
    } = _ref;
    const mergedClearIcon = clearIcon !== null && clearIcon !== void 0 ? clearIcon : /* @__PURE__ */ y(CloseCircleFilled_default2, null);
    const getSuffixIconNode = (arrowIcon) => /* @__PURE__ */ y(k, null, showArrow !== false && arrowIcon, hasFeedback && feedbackIcon);
    let mergedSuffixIcon = null;
    if (suffixIcon !== void 0) {
      mergedSuffixIcon = getSuffixIconNode(suffixIcon);
    } else if (loading) {
      mergedSuffixIcon = getSuffixIconNode(/* @__PURE__ */ y(LoadingOutlined_default2, {
        spin: true
      }));
    } else {
      const iconCls = `${prefixCls}-suffix`;
      mergedSuffixIcon = (_ref2) => {
        let {
          open,
          showSearch
        } = _ref2;
        if (open && showSearch) {
          return getSuffixIconNode(/* @__PURE__ */ y(SearchOutlined_default2, {
            className: iconCls
          }));
        }
        return getSuffixIconNode(/* @__PURE__ */ y(DownOutlined_default2, {
          className: iconCls
        }));
      };
    }
    let mergedItemIcon = null;
    if (menuItemSelectedIcon !== void 0) {
      mergedItemIcon = menuItemSelectedIcon;
    } else if (multiple) {
      mergedItemIcon = /* @__PURE__ */ y(CheckOutlined_default2, null);
    } else {
      mergedItemIcon = null;
    }
    let mergedRemoveIcon = null;
    if (removeIcon !== void 0) {
      mergedRemoveIcon = removeIcon;
    } else {
      mergedRemoveIcon = /* @__PURE__ */ y(CloseOutlined_default2, null);
    }
    return {
      clearIcon: mergedClearIcon,
      suffixIcon: mergedSuffixIcon,
      itemIcon: mergedItemIcon,
      removeIcon: mergedRemoveIcon
    };
  }

  // node_modules/antd/es/select/index.js
  var __rest4 = function(s3, e3) {
    var t3 = {};
    for (var p3 in s3)
      if (Object.prototype.hasOwnProperty.call(s3, p3) && e3.indexOf(p3) < 0)
        t3[p3] = s3[p3];
    if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i3 = 0, p3 = Object.getOwnPropertySymbols(s3); i3 < p3.length; i3++) {
        if (e3.indexOf(p3[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i3]))
          t3[p3[i3]] = s3[p3[i3]];
      }
    return t3;
  };
  var SECRET_COMBOBOX_MODE_DO_NOT_USE = "SECRET_COMBOBOX_MODE_DO_NOT_USE";
  var InternalSelect = (_a, ref) => {
    var _b;
    var {
      prefixCls: customizePrefixCls,
      bordered = true,
      className,
      rootClassName,
      getPopupContainer,
      popupClassName,
      dropdownClassName,
      listHeight = 256,
      placement: placement2,
      listItemHeight = 24,
      size: customizeSize,
      disabled: customDisabled,
      notFoundContent,
      status: customStatus,
      showArrow,
      builtinPlacements,
      dropdownMatchSelectWidth,
      popupMatchSelectWidth
    } = _a, props = __rest4(_a, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "showArrow", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth"]);
    const {
      getPopupContainer: getContextPopupContainer,
      getPrefixCls,
      renderEmpty,
      direction,
      virtual,
      popupMatchSelectWidth: contextPopupMatchSelectWidth,
      popupOverflow,
      select
    } = q2(ConfigContext);
    const prefixCls = getPrefixCls("select", customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const {
      compactSize,
      compactItemClassnames
    } = useCompactItemContext(prefixCls, direction);
    const [wrapSSR, hashId] = style_default3(prefixCls);
    const mode = F2(() => {
      const {
        mode: m3
      } = props;
      if (m3 === "combobox") {
        return void 0;
      }
      if (m3 === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
        return "combobox";
      }
      return m3;
    }, [props.mode]);
    const isMultiple2 = mode === "multiple" || mode === "tags";
    const mergedShowArrow = useShowArrow(showArrow);
    const mergedPopupMatchSelectWidth = (_b = popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth) !== null && _b !== void 0 ? _b : contextPopupMatchSelectWidth;
    const {
      status: contextStatus,
      hasFeedback,
      isFormItemInput,
      feedbackIcon
    } = q2(FormItemInputContext);
    const mergedStatus = getMergedStatus(contextStatus, customStatus);
    let mergedNotFound;
    if (notFoundContent !== void 0) {
      mergedNotFound = notFoundContent;
    } else if (mode === "combobox") {
      mergedNotFound = null;
    } else {
      mergedNotFound = (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty("Select")) || /* @__PURE__ */ y(defaultRenderEmpty_default, {
        componentName: "Select"
      });
    }
    const {
      suffixIcon,
      itemIcon,
      removeIcon,
      clearIcon
    } = getIcons(Object.assign(Object.assign({}, props), {
      multiple: isMultiple2,
      hasFeedback,
      feedbackIcon,
      showArrow: mergedShowArrow,
      prefixCls
    }));
    const selectProps = omit(props, ["suffixIcon", "itemIcon"]);
    const rcSelectRtlDropdownClassName = (0, import_classnames22.default)(popupClassName || dropdownClassName, {
      [`${prefixCls}-dropdown-${direction}`]: direction === "rtl"
    }, rootClassName, hashId);
    const mergedSize = useSize_default((ctx) => {
      var _a2;
      return (_a2 = compactSize !== null && compactSize !== void 0 ? compactSize : customizeSize) !== null && _a2 !== void 0 ? _a2 : ctx;
    });
    const disabled = q2(DisabledContext_default);
    const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    const mergedClassName = (0, import_classnames22.default)({
      [`${prefixCls}-lg`]: mergedSize === "large",
      [`${prefixCls}-sm`]: mergedSize === "small",
      [`${prefixCls}-rtl`]: direction === "rtl",
      [`${prefixCls}-borderless`]: !bordered,
      [`${prefixCls}-in-form-item`]: isFormItemInput
    }, getStatusClassNames(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, className, rootClassName, hashId);
    const memoPlacement = F2(() => {
      if (placement2 !== void 0) {
        return placement2;
      }
      return direction === "rtl" ? "bottomRight" : "bottomLeft";
    }, [placement2, direction]);
    const mergedBuiltinPlacements = useBuiltinPlacements(builtinPlacements, popupOverflow);
    if (true) {
      true ? warning_default2(!dropdownClassName, "Select", "`dropdownClassName` is deprecated. Please use `popupClassName` instead.") : void 0;
      true ? warning_default2(dropdownMatchSelectWidth === void 0, "Select", "`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead.") : void 0;
    }
    return wrapSSR(/* @__PURE__ */ y(es_default7, Object.assign({
      ref,
      virtual,
      showSearch: select === null || select === void 0 ? void 0 : select.showSearch
    }, selectProps, {
      dropdownMatchSelectWidth: mergedPopupMatchSelectWidth,
      builtinPlacements: mergedBuiltinPlacements,
      transitionName: getTransitionName2(rootPrefixCls, getTransitionDirection(placement2), props.transitionName),
      listHeight,
      listItemHeight,
      mode,
      prefixCls,
      placement: memoPlacement,
      direction,
      inputIcon: suffixIcon,
      menuItemSelectedIcon: itemIcon,
      removeIcon,
      clearIcon,
      notFoundContent: mergedNotFound,
      className: mergedClassName,
      getPopupContainer: getPopupContainer || getContextPopupContainer,
      dropdownClassName: rcSelectRtlDropdownClassName,
      showArrow: hasFeedback || mergedShowArrow,
      disabled: mergedDisabled
    })));
  };
  if (true) {
    InternalSelect.displayName = "Select";
  }
  var Select2 = /* @__PURE__ */ k3(InternalSelect);
  var PurePanel = genPurePanel(Select2);
  Select2.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
  Select2.Option = Option_default;
  Select2.OptGroup = OptGroup_default;
  Select2._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
  var select_default = Select2;

  // src/utils/utils.ts
  var import_webextension_polyfill2 = __toESM(require_browser_polyfill());
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  var isFirefox = navigator.userAgent.indexOf("Firefox") != -1;
  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  var AppName = "SummarAI (ChatGPT)";
  function detectSystemColorScheme() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark" /* Dark */;
    }
    return "light" /* Light */;
  }
  function getExtensionVersion() {
    return import_webextension_polyfill2.default.runtime.getManifest().version;
  }

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  init_preact_module();
  init_preact_module();
  var _3 = 0;
  function o3(o4, e3, n2, t3, f3, l3) {
    var s3, u3, a3 = {};
    for (u3 in e3)
      "ref" == u3 ? s3 = e3[u3] : a3[u3] = e3[u3];
    var i3 = { type: o4, props: a3, key: n2, ref: s3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_3, __source: f3, __self: l3 };
    if ("function" == typeof o4 && (s3 = o4.defaultProps))
      for (u3 in s3)
        void 0 === a3[u3] && (a3[u3] = s3[u3]);
    return l.vnode && l.vnode(i3), i3;
  }

  // src/options/ProviderSelect.tsx
  var { Option: Option3 } = select_default;
  var ConfigPanel = ({ config, models }) => {
    var _a, _b, _c, _d, _e, _f;
    const [tab, setTab] = h2(isSafari ? "gpt3" /* GPT3 */ : config.provider);
    const { bindings: apiKeyBindings } = use_input_default2((_b = (_a = config.configs["gpt3" /* GPT3 */]) == null ? void 0 : _a.apiKey) != null ? _b : "");
    const { bindings: apiHostBindings } = use_input_default2((_d = (_c = config.configs["gpt3" /* GPT3 */]) == null ? void 0 : _c.apiHost) != null ? _d : "");
    const [model, setModel] = h2((_f = (_e = config.configs["gpt3" /* GPT3 */]) == null ? void 0 : _e.model) != null ? _f : models[0]);
    const { setToast } = use_toasts_default();
    const save = T2(async () => {
      if (tab === "gpt3" /* GPT3 */) {
        if (!apiKeyBindings.value) {
          alert("Please enter your OpenAI API key");
          return;
        }
        if (!model || !models.includes(model)) {
          alert("Please select a valid model");
          return;
        }
      }
      let apiHost = apiHostBindings.value || "";
      apiHost = apiHost.replace(/^http(s)?:\/\//, "");
      await saveProviderConfigs(tab, {
        ["gpt3" /* GPT3 */]: {
          model,
          apiKey: apiKeyBindings.value,
          apiHost
        }
      });
      setToast({ text: "Changes saved", type: "success" });
    }, [apiHostBindings.value, apiKeyBindings.value, model, models, setToast, tab]);
    p2(() => {
      console.log("config", config);
      console.log("models", models);
    }, [config, models]);
    return /* @__PURE__ */ o3(k, { children: /* @__PURE__ */ o3(card_default2, { className: "glarity--card", children: /* @__PURE__ */ o3("div", { className: "glarity--flex glarity--flex-col glarity--gap-3", children: [
      /* @__PURE__ */ o3(radio_default2.Group, { value: tab, onChange: (v3) => setTab(v3), children: /* @__PURE__ */ o3(radio_default2, { value: "gpt3" /* GPT3 */, children: [
        "OpenAI API",
        /* @__PURE__ */ o3(radio_default2.Desc, { children: /* @__PURE__ */ o3("div", { className: "glarity--flex glarity--flex-col glarity--gap-2", children: [
          /* @__PURE__ */ o3("span", { children: [
            "OpenAI official API, more stable,",
            " ",
            /* @__PURE__ */ o3("span", { className: "glarity--font-semibold", children: "charge by usage" })
          ] }),
          /* @__PURE__ */ o3("div", { className: "glarity--flex glarity--flex-row glarity--gap-2 glarity--geist--select", children: [
            /* @__PURE__ */ o3(
              input_default2,
              {
                htmlType: "text",
                placeholder: "api.openai.com",
                label: "API Host",
                scale: 2 / 3,
                clearable: true,
                ...apiHostBindings
              }
            ),
            /* @__PURE__ */ o3(
              select_default,
              {
                defaultValue: model,
                onChange: (v3) => setModel(v3),
                placeholder: "model",
                optionLabelProp: "label",
                style: { width: "170px" },
                children: models.map((m3) => /* @__PURE__ */ o3(Option3, { value: m3, label: m3, children: m3 }, m3))
              }
            ),
            /* @__PURE__ */ o3(
              input_default2,
              {
                htmlType: "password",
                placeholder: "sk-********",
                label: "API key",
                scale: 2 / 3,
                clearable: true,
                ...apiKeyBindings
              }
            )
          ] }),
          /* @__PURE__ */ o3("span", { className: "glarity--italic glarity--text-xs", children: [
            "You can find or create your API key",
            " ",
            /* @__PURE__ */ o3(
              "a",
              {
                href: "https://platform.openai.com/account/api-keys",
                target: "_blank",
                rel: "noreferrer",
                children: "here"
              }
            )
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ o3(card_default2.Footer, { children: /* @__PURE__ */ o3(button_default2, { scale: 2 / 3, style: { width: 20 }, type: "success", onClick: save, children: "Save" }) })
    ] }) }) });
  };
  function ProviderSelect() {
    const query = useSWR("provider-configs", async () => {
      const [config] = await Promise.all([getProviderConfigs()]);
      return { config };
    });
    const models = [
      "gpt-3.5-turbo",
      "gpt-3.5-turbo-0301",
      "text-davinci-003"
      // 'text-curie-001',
      // 'text-babbage-001',
      // 'text-ada-001',
      // 'text-chat-davinci-002-20221122',
    ];
    if (query.isLoading) {
      return /* @__PURE__ */ o3(spinner_default2, {});
    }
    return /* @__PURE__ */ o3(ConfigPanel, { config: query.data.config, models });
  }
  var ProviderSelect_default = ProviderSelect;

  // src/assets/img/logo.png
  var logo_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAICgAwAEAAAAAQAAAIAAAAAAu7RpdAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KGV7hBwAAOGNJREFUeAHtfQmYXVWV7j7n3lt1qyozqQwkJAFCSAggU1AIQ8KgKDh0+7Bt5+Hzw88ebdt+3e9771m2Pdnd9vN7Dg20jSgt3YK2traNKJCYMMgMDSiTDEJkSEKSmusO57z/X3uvc/Y591bVvVWp8mGzk3v2Xmuvtfbaa+35DBWYgxsCiAtMX9/BlfqrKE1M1Bejavy9rEOwZcuWIn8v61r88pQX+1188cWFX4YK7LFTDnT69u3bayqAlXji+f4lhbg2NypFgalozitxxgIdGCarhWqnGd13880379M82m/jxo1xX19fpLiZjqfaAEIZ5qHoySefXAp7Fvw6qvRWE8cnYQJYhnQXRrZwppV/mctnx+k3QfAk7LY9iuOr79550z2sU75jzWQ9224AbKXXXnttnUqdeta578UM9smwVFxNOI4i1CWWH+FXwsQWCILABGFowiA09XrdRHH0PVOPPnbXLdsema1G0FYDUOdv3HhxR9fil75eKpbeQsXheDsNxCbECKAyNZ7YCv91c3Xxx+EePccUCqViWK/VkAw+eNeOG65Qe8+kidpwUh+G9L4ILbM8FBVuLZZKJ9aqtQq6exEuf2W4PzheqkIM+lXJ1KuVP75jx02fnumRoI0GID073nTWuT+AgufXqtUxKNvZpN6cHrR1N8l+BZVaAGN/fq0UYzQITFwslgrVavU379p547/MZCNoqQGoAqeefd5HC8XS39UqlQqUxFo2EzAXBEFYDEPOba+EyS0QcfqMY06f3AKmRkMjCLAwiKN4ODKVtXfv3Pkc8jnKHvTdQVoopI8TSBOfccaFC8fC0Sfg3AVY50GRzCq/Hoah7GOjKLoXeY+hKdSxHGxF/jjF/uqi4yhAV4nnoIabCsXiMs77CBw1PXsFlWKx2FGrVS+/c8eNl2gnJOHBDF6BzcVqwRj6fw/D0mehkMxTHnU9LBQKaM2PxXH0/rt2brvFy3slOYEFYNvycBT+HrYCf8XdE4LfCNBIggDbw8GOWuHIW2/9wYvIl844gci2syY9vYOSEQ57WPKb4WAWkC74MBKEhRDnPvWnw0rHKbfffl0/V667d++etGG1remvIAPsOopqfRrb6efRia6s1+pwejIKBJweMArMqZn6eaC7Gr4o+AdvB8MkkzWAgKdSmzdvnotDvY0Y3llm2gACzFXYyGJE+4M74Hy2aJwRsFKvhNYsEOAgrXjHjhu/cspZ57wDI+xr62gFYE2OhdkecD7wGuCubk1ke1SpM5vy9UlPHo07lyB7kRumlJJDVBFD/77RaHQbkWid3Bm8Elq3gIz7JEdH+ibsyWSCswAOV4JgFdO9vb2ZPOKmGyYeAfogHr+gE3v9eqC0dniPsZCBZmid+zpGRganokhfXxwec0wy5E1FxMueZ+fOz4V33323KZW69kb1Jv2Ha4MgaLbdPih1V6dOLIw3dQrJAoWtEI3ARRNzNuRiFAmwpChs3RrU+voCmVMaiP5rIeRY/dad3x06bfMFqLmAiQUwMphqZYALb4Pp1WzbFuPOK7ojthEJ0TQSrTUAW4Dt+eL8bIlz585tSZlrrokLUJw1lH3PFVe8cEShUFwahvWiPUu2cpspNW6+T0wiH86qOTnUFu84xCVXTH6vlCsdc70d76N6uHjpsv7rvnPpybff/i+mEHZg8Wf7BWwVVKujpnfJusU33nfrikv//G3Ps+NQVN+2bcW+rVt9s+RKaA0cpxatMbdDxZZL5dEIuoZHX/wdrCV/Awde63C20RPJ7ZC0ZUlrsuZJiihw0HFNEOcLwDvYb3oFR5BwWTIfVBlZHIRkWJ1sLYfEgnLlOjidrh0zI9UnY9kcH0A0fMiEBeKCGRocNmuOPMl8//t98ZLekwr1ur2PHoalwksvPRy/6sQ3nfbcrv7HL3zXF3920bsu/UY0L/zs+7cu3H8wGkFGTdZrJkKfc/5VV+09fXh091WdnT1HVMZGWBR3DMMYzRjY4MV8mo4id5Ak9oXbAZOG+eIwofaMT4mCYwKBS1wfBilWLrxfyd2WLQsIoWVZOqwSo2UzU/goypKmZQunvTCLEvkLIVt0dMM0GO36zpLK1dFjZxXghlqMxTRGx2KHR2HJgiJHBN4swoor3Fju6tk4NjD44a9++8UPvGfrkv+YbiOY8QbQ17cNQ1VQu/LK58/FgvF6WCKsVkYOoHa2CwQ4URR/sjcAS5vBOHAyAOccMQXQzoo8QbfBOYSAJJ1VCWiWynQcLMSSshnQX7iSRoJLKJwR4wS6SDmSchQhukGA0LEsEeJaghJ5MbOpAW+oSZ29PElaZUgTm/ro2Mggh/0lxXLX96763t7fePfWQ67R0TXP2Qo8ow2Aq3ws9GpXXbV7eT0y17ASaMuDqGwH7cJgu7JNu04pgPRyS6CZNk5MSQG0nuctoSDOsTBLGhQRAAS2eYnzCXosBEViBpcBSCKB7VFoASGZa64sGhTM8EMeZl4znPKIziAgDfZdEIlRIhqtVce42vjaV/99zwOYWn8Ke2GEaH9RnfQlLe/gxttFfoSHRjo7y4tgrSH0Xt4+lpDUmwnnSDpenC84uTDTMagHHV7QSmNJlDRxNr1EQFkB8Sje9n9IFhk2mxJ8exOWsh2Ni4RHna84f6wi7qA4X8rPX2Q+wUFRPNbR2VXEUfFfkQIbBFUlzzAhPGMjAJ2IULviiud6ocFbKpVRbnJljZzRNOnBqBLnTQb1igCEmfA8SITwZSQ5OsfErITPpQFjMk2YtBhFMEfT7LosUYpCJGmCSsA8BKWxEMlB4EZ+xUmc4yOZBBUsiARwmbkIPFo+iiiNVUYqgC+46vsvrn3bBcHjbsRta2s9YyMAWqTIDjs6TsSNwl7Ur4qf6m9r1tT5jZVOnU+r0QqkkYsldmgL8ApDSjZiZ1M6t5nzlcd3PpmFLVeEX6Tw5cp1472LVDJiT07C52WLVfI0fj7TyFcSGb1k8RrXO8vdHVEt5FGxMWdbm0u6xcuMNYBeuhwhjOJDQ2554AqtAAEd8pnM9nyPSpJ0BRP4scF42eRNYOdoS0oih0CSBWeGfCeDFPID7FBWIAGHSPAu4fOAKgmJ8xMMEp6cBJ0IJAZAuqJNSPyEqwUUtVMjrn4DwzALF4ZmBXnO9hlbTM/YFKDlRyYqFFlPRUjCVit1PDMTCkuZDPHE45fANluuykJxjsy6NKXhfE+IF22ByiZUAFI4BYhLjJ8SCIvHYJNTWuy5spJCrOjmV0fUrLta3ZKbR835x8fOeANg0Yn9JGEr05rzHfdEztcChAYAxbMc/Pwhn7AUT3oENoYUdqkUITQ6X6lI0dyjka7YznxvpcrVK7w5bLEpGcv1ypa0rpnsXVrH0V404w0g22it83n4IWryKiiLTyroQEsDYFIaJ4d0zkhYHYv/BAWcv8UW56tYKcTxAefY7WhBZgQXZXCiOh0gCUsn1xzMx77T4KS7KMHn4STDJqiWDP1UhLR5er+IHO9k4Iw3AFFAlUYF6JhiqTO2T5B5C9akUq42CaxVACKPE1jdY+m01yOLfbMxZMSDIE+ThynB4dT+Itni0sLzfIB5po/9OlIolM0xT+PJblQ0h9GSfBk8ufThHEsr4Mw3ADc7YcinPnB+KX7ppWfDgYG9eIeA2mvNJJuX1gzVrOJ5XB620sVmVpsmBE1QGSPLkbETpFEDDxGxmTvvkPiQxSujelTn2YZSp7ElS+GJUqRtKMeNQBPxTZI38w0A9/5wv4PKQ/3Y3HrbNR033fJ/CmM1vBIX46lYeb7U17KJofxsTY9L1mAl5ZB1ZMrGVAolREwQrWLGIcnQNwBs20XT2bHInHv+H9ZP3fxrdWnsbASUq7KVT+FmZfk4pSMf08zz84lvM8x8AxCFYlMsdcQPPnhT8bJvf7hw6toLofg0NW+zogm5b8QEOVOJwPz9P3yoMH/h0vjYV22t4zCMh2PZwgASY+9D5fJ8SmbRZELsZ0wvPfMNgL0/DPimS/DYz34cHrP8FNwQqOMVOHnGYXra/3/OjXe9zDFrTzKPPXxbYf3GM/D8ZM7BALl54Y5o0u4wnvNF5tRXgVPnnIbxcSgzDe6XISvdm/M9YaLE+Uxovsb5aubxwoNLHp/nmwSe+RGACmC4L2AKWHvEq6Nv3/zX4alrL8Kg0ObZxTQrOokdZiAbix7o/NPH7jFvemtfhCd+Y5kC4DEdCOR00m0QJlSAdffrL2le0LCm2ZdmpwGgxvXaaLB+/Rm1D775C8FNN/9NoVbrh+5VtA1vK5ixAmumldTaa6x5yoDdEBbEqS3Gk6n0Lk4ZxkPkGAA28DQrC88v4a5tR8ch5sOXXB4dfczpdbxKKfN/xvmueo2FNMFouSpASShjGuP4rDQA6sw1H3v9mZt/s7Jh/Zlh/8BuvPsG40mFtHauVupnAZ2VRAaPcJrRpDghIFlKqRyt41KOiXmodt4h5GXxOACav2BJvHjxYdgG1mQbqKT2Zk5aiN6nSDFNUqyPCtBswSkwtXhWGoBYBFbhlq9Wj4Le3lXRkiWH266Td1QeBldqIGRqfr7Ve1lCpHTiJGccxfm2Ik7aX5NWk6dvCueQHhhjm4s36OE2O+znHe+r0eBcLxNDBzSEYE+2pKm36O4Rt5mcpQYArUR5mgIDP3YEorlfISquMCvl0nozR7ItF5OSLWSOjpEcizlYiPSSx3mwJMno4YQtDxOZwXHy1gK8mDjVH2mu/C0KDWwcenGwHF1DZoNDLZOgPblS4sviJJCa5ipOozS0eNkIAS9zheXhsa5ajSwMKor9NR0ELFZpEjpHrHYTI6oAkQWAzk8FkTUtxEI52Anw5DTwKImLpR7j0UMpqTJfrsatXbxljfUSkKw5eALgaS++LV6nMfJyVMcpxvmqT1HMBGz2rfGUgBXIV0JhWgJpOlfP9MnoO5ZwdrB2zCqD9CTyYIICezixZCs93+NJhGZwTcoiytFw2Nc01ZDg8yMTZyLBot5D40NXnhL3H/iF6eicg4OzMpxfNM889TOz6vBjmwiBJMjxRTnpEvElXf4slZ+TTc98A/DLa6at9Hx2A6sqnZvO+b4hLUmD82kEJ5eRJB1MkfwRKTHTCK4bNfYmx2ephDBJihDmT0hj86kP69B0zs/xkzbCwVhX97z4ov/23+vdPYvh9O+Y557dYZ596j/M+3/rsmjNupOjas3uIkQhyhA5tEZDkFx+yMt9zCt2DaGBkIhZXgOgROdoV4FUKajtz/fMb6hdBpcBMnJSAKmcEGwXJ3c8BWT4Wi+LbE0d3yAzLYNDBLeJK1atjz74u5dXdz37aIi7iOaQ3pXx0uVHRHUM/m5wTPXimoGF8ee68Y92/4QpeVvolLO2viGMC/U7dt5wPRvCltw3HUEnYXYaAJXUIEq7/ug1Bn/IZ6VIptkNvR55rLzmU7QYw+cRJC82zOaQn208KJ+VyYccjttG7hi65iww6zduxs0j3jqvB/ggh1CmFwiC8/PiCC8/YkQMu+nMcy7HvZcP8XX+TWef+1AchZds3/7DWzgSuFEhYZ/dKYDFqurOe6yK73w6UkkYq/OJx9eH8O4cXImf7/yEwVVLrKBCpEgAB2m+pw78+cNI2vigrVeuqJOHiczjnAB2aU4HlcpIwF+tyk8xOXLlUecnGahaPRI/XnLKKVV8bOLSYkfHh/AhlyreNqrhuYuNhYK5GfhL6Pz8dDB7DcBTWL1H5zab72kjOtF3Pus9PGLiwRH0C3x9CG9BJDSkZ0gcr8YCznlkcsd4PGJyX1+RDiysNVKN4oHhelypR3ioBTjH13TYz8gUZUS0E2cjFaBlgIcNnI3BjvGOjwbwna9CSI92Q/D0177pHwul0iV0PkA+gs/vN9QwEsTAX4rP/Hws3whmpwEkhhAXiRH8lzPYzH07qCPJRjyep0DKmJM2dhVec0JPcU4Xh0u8CgNDMTipIlcQ7iLzfR4rQn0qpK0Y5crBFk09KtU4PmpFR3jmCT2F5YcUw7EKSkYhMoJlZORljgP7lWYxzWQQp47P0fDpKhqo3DOH71z8ebFQ+IDnfFIzYJoP4lqlGuGF1L999Vnnv9ZvBLOzBrCKJFd/sac2oBOlroydIbTbsnlfePaC4tLektxBWndEufC9m/ZXMBrgLVt2DH8ccXY8WIs96MLRZmgsik8/rrtw3LpusdmxR3WbbXccqD2+qxKXO/laX9IMnQJJdceBXSWVLAcmjWEc55MNj4QXqmMj9Vtu+JePH338UUsrY6M0lb6grpIR4/3LwOB0IQ7xlPYngfjBtdduhMLu5Q2PcgaS3gcPUMlmzmehrL8M+Ykh4H708DF8i/TwwzoDOh8jGb6pG5vurkJwyvE9xbExvhDnmCkEQRpNK87P8DkgKdvKolJEVWC6pQuLwbFHdYnzqQPD8Uf38H08AM75Toxk6qVBZo4oBwqb8qjzx6HBB6SCO3Z8K7j+W31LFy5eG9VrlYlGdHkeAdpmvikwEYNWYdqxmAcl5xd7vmBxfoJwFkCEYc50ddgxgVf2eIY1KzsLK5aVwrEqvy5gcW7E0IEjkSZeTCHr1QQGL9mtiASrMOfhSi2KT9qAVoc09dGpB+NRUEDfsvVLWSXVVGaukByY8NHxvvNzoqkbb6/D+eE3vvz+sHf5ifEkzsdiMOzA9wgPYNT4gIjrs0JnvgG4sygYyVYXV+cvu4iDHg3OdzQcVTtKQbDrhVpUw5yviyI6gemTNvbgtjLYSS9XdZutnEC2VIdAlIHJmGYlKYdjGWNw/qqlpXDV8k6ZfuziU1xuXthbjdg4tEHk+ROYCa20IvPlEuZPHU+6PI3D0fl3/uhfC3T+KjxeB+c3oyQ1A51fxEJwKIzN6bfv+OFjPBPA5/5l4TjjDQBLUNsj2QKgZoOmGVwK0MScV0t4rejFfdX48adGZS7hNGCdYMyKZR0FjATh6FjaK6XKvOQLIpzBpWVleDwa6ovX2s2J67vF+TrPs3w2yHsfG4k6OkJ+zDERkS3DldmK8ymhBefz2co7d3yrcK1zfg2fkJkgJM6Pw8Jrbt9540/49x38bw3OeAMQy1FDZ1g1lc73Fs0rfo5GK0S7YdowXeUguP/hYTxUYVf+Ym9n9BPWdxW1sehULPyCRCop0KUFdgUpjRboYIpm2aPY8h15aEe4vLcjtDg7BZD8sZ+PRPsGajEbaFKGE6vibK/3kEx6oNAp3KLz777lu4VvXPG+cDV6fjvOv2v7Dx6k8/FFsszDmDPeAFJjJKnGIZ9ZaghHRgfQHxw+OmDk5/fU4nsfGnILGDsFkHTRwlIwf05B5uEQ6wMOx8mPcAOOd9xyND6MNNcZRfxwkBasWFIUG2EFjQ5qdwSDOAe45cHhekcJxAy85vSfdMhXPsbq/KZyrGz2fDr/6196lwz7B8P5LHp2toGsmPWmGCq1FVL2f5JNMuIY89SvUoljbnKPXVcOlyy2ztC1AEnhqOCN5ywo2eE5lcy8BqcIsvULZcLJwiDTjihn+U9YWy488VxFRoHuMj8KhKD5B2PI96qSOP8fWnM+jpVlzuewP17Pt7WYrQbA0uhU/NJ6ZQDRR+znCOj84ZE4Xt5bDF9z0pxi7yLnCdXcxbR1FxyQQ88IqKPSnG5sQ4+ZU3jVujj8yZPD0V0Pj9Rx3IodgT2dzBSe10xh7fUkVpwyevBUnI9H7XAgEJx29zjDvhbDeHZGAFdiWi+kHJDgkoTt+UM48t1wZLlwxqa5GGi5K6KQdOh3IiVKeh9laC/0CdpJe3pQVrPOzCLcAjV41VE9haWYhq6/s1+OB7AtdLqCyJdFHRSeWefjyCrefPfOGx9oNudTDT/M+Bqg7raB1pC0AH5qCNXEgzk/j4zG8brDy+FZp84T53PlT34O/WwI+V/i9Ok6n/qId13MqKE8IuxagKTUbdnijvCCV88v4PaAVYX18eoEKIXV+RPSoGfqnN/qsI+nR9Dz6fzT+dfHWnE+1ZrxBuD8bw3rVTpJIkFDCowLvphu5s8Lg80nz5UjTTqAjYIxg20Iv8wYy1LqDH2oM3VjI1iKKer0Y3rCEZ5OApcJBOl43/k+AfOVBXJxN88u+FpwPu721fFXXPCxqGis4JyPvz3YkV/t+8X56VmYAtIhABZInC1KaKUB0L8y749G8ZZTe0o8AJI9v3O+GB00v3h+LNq7H+/buuPYxHAicJyLV45PAW1szjj5Pq2WM6dcMIdiW8h1gDQC8KrDj15TLjy6C/r11+T8wrVZ63wVli8rBxc7W3Q+Cg8LpbhaGS5UxgYOzF+06rxbfvide+j8hx56qOU/2TkLDUBr7sWu0jSQ1p/n/jxzX7KoFKxaUZaRSXs+nT+ChrH99v7a01h5p0yUSQlOkgojWokEpyUhBmzJnPM9UibRSZscJcsUBJPbvl/uKNQ3H9dTOOqwMjod5EEgD4O4Vjl2TTn84T2D2CLicJLFaq/PlUNQVZQ0LknPv3yS1T4EF0qdpv+lZ2tHbDijtGnLWz/ziUvOu+t97+srX3ll34QnQ1qWxrPTAKzFbZl+GhjaiIbgqFnFlm/Nio4Cz9fVoGJcnAbdcEt/ddeeSjyXPc9KsgZUgISUncBK5MVCAgLEtvc7Ho8k7xQPpnTyQjdjrr9rsM57AWsOLeOQCE3DES7HeqCnSwYvtoDm9wmsHF6tvqAqdpQx7H+n8PXL4PyjJjjkcc4fHd5vOrvmmze/+0/MvEOWyinpe9/7CXyRtU/EtnqZ8TVARhFrQkGJnwg7HGG6pndRUQ4PibZ7e5y6PTUcPfNiJZ4H53OhxcYhP0mz99keyCkjyVMajelySfN4F/fwfR6fj+lmsOC46LMq9+B08o5HRvhXXuw9ClcPngkcgoMp3H63xxUOL5XWi49zzr/3tv/wnN/k7waQF/qz59P5fHL4vR/9YrR46WFmqH+vL1FLaSmevQbgqUhnq+MTLTGwl/AN0Tk94n9HYJl+/otKhDWBnMtn+ZBPEk+2yGsCE8VeLz2/Sb7w6SWfTzxHGBfgB1PCSeGBoSjes58P8SPgSjzDvG7cH+BNwpTFZhDO4GzPvw/O/+dL346e/wZ+UgZETpDlsteM83vMO3/rM/XeZWv4wqnBbWGfsq307DSATKWhnweLTdCHWOUCnrHigYrWQIf/IRwIYYGY4G0+wBxG4CY4ohLHN8nX8iRult+kaJbFkWIYaxPLnzqtsyPESMQPYXnCvKTSlzDs0/lX0/lH0vlcu6VyLB1Rfs+n8/+uvnjpakyZI1gITs+FU286iXaTJPL60Szys7MmXg7GndyJZaQmYcoR53nyMCkdjs8haDopqQm9ik5pckQ5MKHLJfjsoAay2F0CmiDStrngLiecz2E/cT7+Cu+4zsdX5EeHD8iwn/b8EdzaR0GpcbTItuKZbwCqDixBR9MRnEdHx3ifD0MpPoffieMeme9prVwA3q2vePvaTQ95uiawotjzJ3W+Evtl55kaaKA9cFgxuJwcAbOBosMHxrhGw3fx0dTLmMradf7Y6IApoBG84yMY9pevicfGRuB7r5X5ereZnr0GQBPAIPhrqYYOf/XxXYWeroJ55MnRiFu7Mu+r694+Xwm2FJ5ZiVMESClydqdTiJIhn1RN8lPmJvnCk2PKgTJiASeNMymAenmE2NbITgZqbz5mTjC/Owwf3zUa/6I/jO77ces9n87HvR3zrt/+LJy/2uAPbVjna3FekZl6tQgcnGY0WWGqpLPca8+YV9ywtruwakVn4fwz5pdWL+/Ao1112Qo2FUXHT+J8ZvMgCWszPEuIXs99Jf5nwiQwefT2sRRH5iY8gvL/okimEAuQBo8TmHNOmBcedzjqurQcnnPSgsLuR28o/PUfvz08Yh22epMM+4nzf+ez9aUrjsShzyjqBpf5zs/r10SXiVCz0wCgAefFSiUKVuLxqsU4NuUCSk/z1h9ZDuF/eG0iVb2eTzqPlnxVbMcGRmp4ejc2fHdgBFNMIi9HL6V4/CILxDjGNVxw8kYUD6X8uTzDo4c741jP6mPiZfNL5tDFtq7k/9513zd/8OG3hmecdyEedp1gtY/hPuv8tXFlDH9ZJ+98CvXMQrDdMCtTgJvEA+yMMd9bt3BitilZB6BuOCj2ndJQE2Q2yaeMMTyetQLPCqxbXQ67OvGXtuC8Z16oRo8+M4Zv8zTh8uUgzce+GNat7ODDJdI4X8Rx87N7q6aTT/wwKI9zvl1YjG99Dv/c1pKVdaPzL3rD683m896A9wvGOH0wKxu42hfnD9phX3p+E+f7XKqXj2sjPSsNQPVJTsYU4WIxxWQVaZLPDjGKx8SOPLRU2Hrq/ExdVuOErndhsb7j/qF6uRMrMDo5LwMw/cnHul63aW6hd2HmmYPCT5/CM/cPDdc78Qdu+AerErWZSqEEnSY0kzVLnb/ldRdh2zja3PnoynR+ZWwIHSMw76LzV8L5o67nU7iWS7H8cQTSopCcShhnEJuKqAl4JlFykuzmlXRMiIIT3EObcjsWhuH0wrBudVehd0FBRgQdbXwt2TNHcfx88lFdaCx2qGbHZO9l2LCmq3AYHkjBG0Hp+kSVtSS+OC9tM8vlrviHN9wgPX9C57PnF+j8YbwFVTXvxIKvwfmUrmX7aRY1DS9Og5VatBioJJX3K9CUtSUikUNKzPvBXLybMce+rCOLQDpaphOUyXTv/GJQw9vVsijUMqUYe4uZz/4tPQR7MwSdlnjmpI1gJaYWTiky5AuVEyIyVGA25vDeXS6ZG264Lnzt+efLsD9uz6fzpefT+RXz7t/7fH35qnXZnk/xLM+2K5tWXRC7GSyrRIvQ7DQAVXZCpUA0GR1JHBkOdYUaJ4dp72wiHy/PAOuZiAJcQezo+GMmAe4+iCyf3a1b5JlAKauBwqdmWgl4vNtlfvboveFl//vXw62vfwsWvxPP+dLz8eVUOv/QVUdnna/qaifSorQx5NVoE575BsCzG7XNRMpNRoN7bkqie3yu0scwPPMhEgY6VIM9d8NtZBzCYPmMzoNMcb5SWBCHUnjbOMVpSvkxyrD3e5JBoYoosYstD14mGXoJH3tYF5/1G38SP/DwnabcWW4y72NacXN+ROf/7ufE+WP5OZ+yWTrL1F8eJs0Uw8w3ACrmm28c442nP40vfoMfkjeKnQwO34PDcbwbL45IMWgBbARyAAOmsUoU/2JvLbb35nMFA9RnEPAAhwwR5FN+HQGe31vl+4fpSaUvhmkH0/lqzOu+ib8I/uMbwne+9/frF259rdn58BN4cNVvBKDFd4RrFQz7Ua1150slXZmqh3QLLZkE7YXMyrk91jao1VCq9HisTfJ52gbj8gcuEHg0dFgJD17c9uBQ/TycKi6c5x4bBxFf5b71Pwfqw3hEqxPvFtKxSXAyyM+8ex4fiZbhbIJP+ZBGnf/086PREy9UYryb6E8iIiYZjpxQ7BJ4EmUeeugn5pN9fwPsWHjcqn8K/rTvU+anj78Hr5HtM4sXzINeVUw7cD7e6BkbHTTv+4PL6ssPW4d0brXv5Ep9tc7OBJqVt0eKbz01Ow1gEn3EN1rJCWg5EiSOdPR8emAAr4l/e+f++mGLS1EPvh3AQ5xfoOfy9XG8up06P1cGZZF/cKRuvnPr/vrReAt5QQ+eOQCePf+x58ZivpTSEIAi1s/hwpPhq1f/swlXH2HOPW6D+dhH3hXM67zCfP4znzYXvPODpqer02BnYLC1w4p/APfzL+Wwz+Nde8JHARTjO9ovhGnNZwtkxyc89QFgOqwouNVAJZOQARLshAmy+Gxemk7kVwN4V/SpF6vRA0+ORY8+W4lwOATnFzAdOMkej5YlDQr7e+z+Zat4F971+8G9A9GN9w1ED++yzhcaZWAMORQl4lxa0CC89777zF//xZ+ZszccaV7av99sueBN5kMf/IDZvmOn+cKn/icaGhaDtTEzNjZo3vP7l9ZXrtmAEz7nfBWqzvdhFsBAnAw9XsGk99a4JGsnTKPttFGMqxT2Yvl1mAhhvVoOeWLA4mPEPGXsxpM6ZZwG2q0gFg4U3ITHGtMO5OTnoVIPnuaZh4c+52E66eZHH4AX2ZTBADmJKLcu1PwaVpJf/so/mSVHvwoL06psRQeHBs3WC95o/uhT/9fcd/8D5tzNrzY//tF/mvd/9O/rK+D8ZNhPhNoy0kI8mDRUl7FHLzWYhhenwQpFWg3sRtCavbR/yC65idIDG569cz4WsqzJsyV4FZcMH4YnuE5gj5dpQj3j05BJ4XRTITiSy/0JMOO2QnIOIOU4PmW1OKwUoDC/xMVw5113m8999jNm4+GrsO3DH0lFY8dtX7zdNCJD9Kf/4lNm1fIF5vpbdka9K4+Oq3q2T6GqKwVlC0lhdT5pXODaqIFeM1uMZ6kBWKfgNrB57qVa9NjTmHQR+BLm0Eg9vu/RkXpZngkYR2saJa9pg6GIyCFzYJKdc36m1CY8bJgZtAPY0PBdHrDXzWVfutKsOg5/DQVnzpzn+bTOC0/fhMfGhsznPvVH5qknHzcf/dj/wgnRStzPx5+O4ZBDOXS+CtdYFVK4mfN5DoJ86pY3jbK3Es/qIlBW3cUg2HHvUO2Z56sRH6B8Es8C4OEQvmaNEzvWtIWQp7JDR8qYz2eO4tT5CqdcKY3iQJMhE0Ax+EYAPulWxo2GO+64zXzlS39vXv/mt5rr7njQmBcfMedd+Jvx1jd+OF5z9CnxcesPM/0BPudyx/54/3DN4NmH7GJWRTY0BmT4OKdXjNvdquJ041loAF77dGp34I3en+HjShg8IzwhE+COHf7EMGrqkY5bsXzVW3W+Op6CG2Q0KQ00GTIBUgynm3Jn0ezb32+uuupKEXDdv+0wfZ/8iDl03dlRNPeoeN78+Zgi6uaRZwbxbICJerA2Gdf5lADxcpcQMTs40zzskm7uGoKegDpyRq3ZzVI2XGe+AXCEZEhtJ40at22JCvgYAOsm+ZIg0CyQGnilEXlySYlzYFLmQXY+5dbRfOeUu81V3/iO+fwXLzeX/cM/mi1bzjbr1h5pHni6am595IDs9bkm6cKCshvVZRvnL9Erry+ySh2ddDxe84vwNxaL+PxLDfcIcJqJbSYPwpRF40RWaoW2UjPfAKhOoq3TDTANwYc1kzzS0Di5wBrbXuBZTuTJJaXOgYncdpzPslKJNiUID+uSRdxE2N9/IDj28AXB3t27zaJFixPO4ZFh1IUPpPAmA8YKqC5V86rQUBDk8i+qPPHw3cGjD9we8rbwoauPjjecdHbc1TMXx91VmMIWLlenR1LoFBOz0wCgHIdMrppV7/wKlng09LjGvyXp/EDDcTvHw5k9eEADz4RCgEpwNc6BglWcOl9hx5KhURxoMmQJkCQyBFzsBTjOfeOFr8e2kTsI+5ArH20fq6Krhvgkk+zbUABFJLVqhGmbIm4H33fb94MvfPzt4erj1uO0sNPcdPWfBSe/7oPm1z70iajc3SN/bk8s6Kmk6k81bmXWnarsDJ/0ZIfJO59oNg58UMocGNTP2NFi/BmzFh+CqsL/fF4v46VmhlDctJ1PQSosm+R2dgQHTSvwXYC5ZUxhaKl8SpfO51pm/3DdFLFQE+0pQp2vIhWWLD4LUDL9+3ab67/+N+HxW19nFi45wsxZsMysP/3Xzd3X/aN55L5bsE4qcWrIqAT2RliQrV9mpwE4O9LxzZwvdgYN987P7cFyyQU2Ctpq5dLO8FVHdoUvDcACQHBUgK1djDToLAwcypAf5AkdY+YLDelc2oOxJnU0ykOYfITdT2HEw3i2kWWctl4+FAkN7bMFVJvfD9qLTxnxRhV1zzg/D0OWrU/B9B/YE4wMvIDyCvJ2EL76aHBWYBYettbse3GXLCZpjyQw6YEJvs3ELEwBGCqpFHskLZoPDiVbRNzYeRI3X07CXTw+Js4Gr5U87fi5RXwKpv4gHiMfwVM8kmdNDBq2C7s1snjlExcAQJwvGjBRCVr6KyFXaJIBGrkdbMtAFYJlePrstA1zwkXzSqIj/UL9OTw/vXssxh3oeA6mKzmGphyVpfVJYCSSfDYiTCNJBcCHTD4hlJwZEMWg/Baa1nUWGoDTL690HoZxCrjxwh706NMj0fH49AqNwZ5Lm9DIJ67rKaxf3RUeGMSfUEgO+Vuof76scVSaSJI2sC7s4RfC8RSpejGmnng2IX7wmdG4jDONRD2/bKaFkSUhkaQJM7CF5ANxbFwuJAlFIJ7GOD4LDQDaUWlfcT+t9QCOvQhbpuCeR0frh2HYx+3d5CMRJKOhmc+fsv2y4sT5ngJ3Pz4Q9+NdwR7cYk7mMfpPtZXYAYz4E0FMg5C0DcHRE+8lE7JmuCRz8sQ02s7kwoWCJUhFnaZ5hQkrDgZg1+L28KZ7Bmp8oINzNs/oxY7IY0yb/TJ/rBf1THyH9E+fGY4eeHYsyjhfCEnsfnaW8mCL9z+gTZamgTL8oDJ93BTSM98AqJR4D3GzSvhKI58rBn6bb99g3XzvtgM17AqkEZCVBm/eS3whM51GY6QeCDIPIH7gqaFo58ODcXe+5wsRLwh0vl9/ZxMsi1WMpWvl6stphX4CmlmYAlB6M4XzOIFll8sPOMh5+T7cOfz2LQdqm9Z1h2tXlkN+N2iCusxSVqrCngPV+J4nhqMn8eWSbi5aqYFzrNRZSfPOJx3ypOe7UUFJmTVuIFGeMA+Py9w8Y3YaQL7svNI5vxLkLVk+jcPF1M4Hhur3PzkSrcJrVr0Lirjnz+cK8kI846gTPFRehWYwFp22BTbLdDg8PRgfwDZv10vVeNc++9ldnvHLos8r1zoKOvo4J4M3cxStcYNjJ9BBsppUfzKWZvmz0wBUWY19TfKOdDSMZI5Foqc7wB9RioKHfj4a1Z/CPp8f6PIWxg3G82S4pNdzvEynB7d5uFdjM6QR4BSvWWMAhV2N4MweaxM8gGJ7sq74nGjRR3s9cfw5T3PIZ7GKThOOhpl+0BYiXC7DT/u0U0jPTgPQSvgKJmbwkPmKORivjct7HZxjeVgEJyDHZY7Dk6CTvsZyiIUySWZSNqi0JUomRoIcUQIywUMe1xT8uimNp54WyVidz1KFlBfya1B+hZvFDTRATGMlNzsNIK+0wDlkDrQWggXYExm5X7ICI4Y5OQPaiTiLJr8NTXiQIUO/klCmyqVsKd1lJrCTozyMlc53PvGOJ38nL0+WlEme8YKWkeQD0YBLMltKzHwD4O1gX8lxe5anr9I752f4lUxpPDiDSoAkkdXD8dnRBICSaazOzsPkI07zFSbSxxGPoA9vqBiJcVFYiDKAYBoveRra0f7njah8biP/OJiZbwBJwbAOhu9MaKY2cep4Eo9H4wsCTYZMgAwmR8Ai7MgiYpRUYy1XYXWswpqvsXZn5vPn6DnkZ1h9fvIyNMPZnOZX14FErjtlb07YGnb2GsBkPV8N0cwxWhelUZgxcBm0AB7GSypb0usdf1aAo1K+jAeR1wCDUGkZu3wd8omSbKVx4hMe0rcaYEMlT2Tm5bYqy9HNTgMQ53uaeknRQ+F2nA8eZUvqLAgP6yWVpqHnK406loSK07TCSpPASGiatMiXhZ6HlmyfRmUy1sD8PI3muRalx0UpGYadfKdKeFpP5Mbk1hnbp4R1mlVUazRbztfyfF18xxJPWIPSE1Ye5uuwr3SC8tf5zqc+P2nbhZ1u8LbVSuzkpi9fT0+PdpLtjABOFdck2ymFtPmK+zh1/kQ0Wh5oMmQCZDA5AvhK5XsyMkLIriK0lnk40ddlaL7D+/N9npSwBJ+HCMJ5J+ZhYeQFTmc9/Ptg5OdPn7skWZuhtQbQAanyB81FuquGi6DCwMBAArRUvlL7jlGcCsjDxAOXQQuQweQIcs5XUsbqaCeXkQTmKZ3SJDASms/Y5Wu/16yE30pM5SnMmMQuJD7X8jSDMYd5fnVUTsX8jIOTnngK6LOFhPUSP2Opf27M6ssVLpUy8WIzd+58SznO1atsUvGD7fzE+qkO0vO1bM1n7Bta85XNh5WHefkh38nw7+QJq89Pvjycw/E4iZujkeEBUxl+DuQeA5L4k6D8QDSWAB4+J4PgVMPEDcD0ibPr8ztfQAF7eAqHGglOEnFcw6vOc8N6eBEVOO2008rEM900aE47zgcP666sIlcAD+Mltdxkpa/O9mmY1p/Whow+jQ/nne/ydKWfkI7HTwIGLdNCcD3PH9G58SzkY/f/OOg5ZL2kXTbIA1MdecHMP2SJfSoI9BLy5SjDFOJJGoCJL7744sLd3/3uMMq+336eFMfmSQhCPrOOWnzm9HPOWX3bbbfhRThQ9vWF//rAdTIzoY3I9/RZWVSUN/ftcCaVQYU4itiRRFgTWHGarzDLph0SOJXBEYkfaeaP6cw/wvpjjp9WyjxORWu+i1ECHvhw9QAPFZJ/ys9Y/ymOsKYlHye4eK2ss6vbPHLvreb2674ULFiyBk9G60DLiuLVs/Ihpnf5KuEVhO/8XIOS/DYvk64Bdu/eLUXCa99Ea70A8lljF3DOhXcp0TAWVWvRXZvO2vpbi3vK/3ZdX9/Y5/CFBBKVu+eN8onWYg1/Aoic9vk6vxqNPY+MoMgQOS2YJcHPpEyOKsDRyEnwaYjMw81wCY1LaMQbRihD5nvgErIJZTDThQwDbgXjjaGRwQFz773XBdd/9S+DRcvXyUsgCTlG29HhfnP48eeZxcsPk4bR+KErpZ56PGkDwN+ZtS9y1ka+VguCP8U0sJyvrcACOnrgz7pHdTSOxfgD1V/fM1TZdeqZ5z7JP20/OrK/+rVLP75qyfIjULlqJ8xmzcCrNIZxFPeNlaHzM3xeEI2X5ZNNRpPkJwmfW5YBRDTPdaQTZlpmNtLRoQPmmUfvC557/DazZM0pHLmQ6Rov8oudnWbXgz805779d+KuufiyCL8joCepWoYjdyVPKZq0AVCrLfhr02gII5vOPOd/FEqFL9eqMR7ej7k30FDg/dR6XMPHQMMVuF27ghndcw8xzz51j/np/f+Gp3pKvMeq9Nl4HHSWiNAEhJyn2w3jihs3Y0IVmhbfVBT+NG1Ht+mZ32uWHfkaeQzc58VfBzeD+3ebDVvebTacvBn5eDJYm51fTab5067oC2kx3UoDMHB+jWuBa6+99spNZ51zfqnU+Y5qVT52i17tAr6GjhTneywL5PEIvuoTlzrmhIuXHYt7uLSEr70yOvQE2R7lr0xSHgHHNGD/QoirFmxE5/N9wNH+3eb17/5iXO6eg1fNx2zvH8d80zFKSw2ABcD5svi7c8dN79x05rmLSh0dF6AR8DUequUdRUhDIIuEOK6jQvajEIp7JW60AHcDxc4uM3xgrxnct8u8/5NXxctWrYXz3RfC8yy0+kFoEO0MHrK6px537rzx9XD+FwqFYhErWTqfHubylVsCnczYp/HDuglz13+ZH14l4oscrfy4C+BXQvEXw2RR+PP//HezcNkq8+FPfzNes/6E5s73HM8NOcHEiVsAtBlaHgFEbl8fnNuH8vqiO3fc+Nubtpz3baxe/hyvM52KnQBe5MBCgEM9XS/BvtlSxXfx2cJtho0TkqQZpxjHnETkkEASFeNQByNSsQdD1kQyMjUEwE/FjQ7sNmMDz5iVx77BvPUPvxIf9+qtpmvO/PGd7woQm/CCnwzNExU8QV57DUAEsRGYAAvDwvbt+BKyMTeceva5Z1ar9bfAx68BvAo/vg6PlzpqcWf3/PKCrnndaByostsFgCDjSKkNkU3D1Pzjy5yahKbKJO2VudOQyy1dz9xFpnfF4fHKtRvM8jXrzJz5i7CSxjuBzYZ9rz6S5MXhkhFgO5VqL0yhAUgBsbcwjO740Y07geXPoGGUa7Va1/Kjzixe++W/3PPFf33sI/PmL/782Cj/lEMgX9D36pJUwktkkrY0b4mfYZbcRvo8TR6m5TycHNpgpnLSkOWSCcblJJYep1yiEx7XOhQGiLMUC8kVH83Cp1GK+CAED9i48BPHo4/Iu4CuCIlUhopXmEVICPWVakW0HE+1AUgBWBjK6o47BB4YoVFE+PFPl46am28WmvnzFv8kxMcUMM9hFkhMaxVERVgXNAxrNwBJneRwByd6nkmFSStvJeRzE7ma3cjjCk0I4H463w1OiXhNUCGm8zD5Fcc0QwMMhOx+mKkNjEQqNMI0YP9aGC0wkeMpQcRnysAfwMROAtPu08z/ES9thmk1AC1LG4KDRcW+vjjo6wuiA6P993V3dO2G8xdji1hLvE0q2MQ63J0QWIAZrC2Pc0El4pLIMdiiRIYrlZEjTWjyMAnYpJxTKF2cz+Kcf1wkKniSG2Fmqr5JOUQ4gJHIdRKVhnwM2uAkRmZDviUT0uSS4kDPG0TFkaHBCr4scovk/Kj95UB+UPNKmHKSVojp/G3b4uJHLlq9Dy376p6eeVA5rtr7SZTt1ZjJzE8aBjCOJpPnaKm5y87y5mUBJgENrfQOhmuA1X8pCcnkRxb+WoUpSxicTBnanJBUihVKtTSwAD94sCQ9WMgsXMVikefT33rPKYt+3rdtW5E298W0kp6JBpCUu2WLbA9NVxx+Ynio/7liqaMbNqnQPEnwksSx13NQlt7FPP0lDA5HWDuc0hDWIHJxYQeUtGYAhTdzpnQnLxXRIFOy4HxVCRXJVNPm45rTZSJYSJvSB1V8VaRzqH//aD2ufFxkb9nStvPJN6MNAL0hvuaauPC28xcdgFMvxJ2u4Y7OMhqBqQDmIyZIyjSPmKYDBB5YjsOb/ATJLJstoKQJq3Fy+eQVyZTDv9Yosjjw4x8/3QM8duoikWWxjagIiVuEKUeEUBb+Vh21tE0ASb6/Qj30x1cHNa1xHufBUgfWj7RWV8rnmqtS6ix3SAXD4I0fOHXFM30Yafu8N9JB03JQE7bMMBVCTgVbtwa1L2/bs75Qj6/u6pl3Yq1WtatebIdZMzvfO+mqFWNm5mGSEad4n4Z5zNA8gS2Kvd7l2uwmNEqexJPQoHVlScfr+QkVEimLxXpwkkwSjgR/FLEDf4mEu4bBAy/9zBSDd7z3hMV3qG198e2kc8W0w9oera/oVTfteQ9OBd4D7x4PayyA99Oj5LxGeZjF5setDA0AD2bbsHDqfKJ8mqZwKzSe82XIb4lHSksvnq4Jew6HUYCHKP04LvwJRpqvPTnwwOV9W7fWfJumAttL5Ytqj7tNapkO3oZvQ7rwtZ37F9bGqr1BCR/I427Iv7+oRAcjnim5nm64YxcUe0oxYw89pWSxVJJ2S+ZaUA1K9WIdf/ts7ztOOXSPCrwGneZtQWpLxb8MYmwPMSVgyM/345eB7r9cFftgM/b6zHQ5TZX+HxoQQqXLmDHmAAAAAElFTkSuQmCC";

  // src/options/components/Header.tsx
  function Header() {
    return /* @__PURE__ */ o3(k, { children: /* @__PURE__ */ o3("nav", { className: "glarity--flex glarity--flex-row glarity--justify-between glarity--items-center glarity--mt-5 glarity--px-2", children: [
      /* @__PURE__ */ o3("div", { className: "glarity--flex glarity--flex-row glarity--items-center glarity--gap-2", children: /* @__PURE__ */ o3("a", { href: "https://glarity.app/", target: "_blank", rel: "noreferrer", children: [
        /* @__PURE__ */ o3(
          "img",
          {
            src: logo_default,
            className: "glarity--w-10 glarity--h-10 glarity--rounded-lg",
            style: { "vertical-align": "middle" }
          }
        ),
        /* @__PURE__ */ o3("span", { className: "font-semibold", children: [
          AppName,
          " (v",
          getExtensionVersion(),
          ")"
        ] }),
        " "
      ] }) }),
      /* @__PURE__ */ o3("div", { className: "glarity--flex glarity--flex-row glarity--gap-3", children: [
        /* @__PURE__ */ o3("a", { href: "https://discord.gg/TdSNQtdX", target: "_blank", rel: "noreferrer", children: "Discord" }),
        /* @__PURE__ */ o3(
          "a",
          {
            href: "https://github.com/zhangferry/SummarAI/issues",
            target: "_blank",
            rel: "noreferrer",
            children: "Feedback"
          }
        ),
        /* @__PURE__ */ o3("a", { href: "https://twitter.com/zhangferry1", target: "_blank", rel: "noreferrer", children: "Twitter" }),
        /* @__PURE__ */ o3(
          "a",
          {
            href: "https://github.com/zhangferry/SummarAI",
            target: "_blank",
            rel: "noreferrer",
            children: "Source code"
          }
        )
      ] })
    ] }) });
  }
  var Header_default = Header;

  // src/utils/prompt.ts
  var pageSummaryPromptHighlight = `Summarize the highlights of the content and output a useful summary in a few sentences.`;
  var videoSummaryPromptHightligt = `Instructions: Your output should use the following template:
### Summary
### Highlights
- [Emoji] Bulletpoint

Use up to 3 brief bullet points to summarize the content below, Choose an appropriate emoji for each bullet point. and summarize a short highlight: {{Title}} {{Transcript}}.`;
  var searchPromptHighlight = `Using the provided web search results, write a comprehensive reply to the given query. Make sure to cite results using [[number](URL)] notation after the reference. If the provided search results refer to multiple subjects with the same name, write separate answers for each subject. and at last please provide your own insights.`;
  var commentSummaryPromptHightligt = `Give a concise summary of the review content (perhaps a video, topic, or product), including both positive and negative points. If the review is about an item, give the pros, cons, ratings, and recommendations for buying the item.`;

  // src/options/App.tsx
  function OptionsPage(props) {
    const {
      setPageSummaryEnable,
      pageSummaryEnable,
      pageSummaryWhitelist,
      pageSummaryBlacklist,
      setPageSummaryWhitelist,
      setPageSummaryBlacklist
    } = props;
    const [triggerMode, setTriggerMode] = h2("always" /* Always */);
    const [language, setLanguage] = h2("auto" /* Auto */);
    const { setToast } = use_toasts_default();
    const [prompt, setPrompt] = h2("");
    const [promptSearch, setPromptSearch] = h2("");
    const [promptPage, setPromptPage] = h2("");
    const [promptComment, setPromptComment] = h2("");
    const onTriggerModeChange = T2(
      (mode) => {
        setTriggerMode(mode);
        updateUserConfig({ triggerMode: mode });
        setToast({ text: "Changes saved", type: "success" });
      },
      [setToast]
    );
    const onThemeChange = T2(
      (theme) => {
        updateUserConfig({ theme });
        props.onThemeChange(theme);
        setToast({ text: "Changes saved", type: "success" });
      },
      [props, setToast]
    );
    p2(() => {
      getUserConfig().then((config) => {
        setTriggerMode(config.triggerMode);
        setLanguage(config.language);
        setPrompt(config.prompt ? config.prompt : videoSummaryPromptHightligt);
        setPromptSearch(config.promptSearch ? config.promptSearch : searchPromptHighlight);
        setPromptPage(config.promptPage ? config.promptPage : pageSummaryPromptHighlight);
        setPromptComment(config.promptComment ? config.promptComment : commentSummaryPromptHightligt);
      });
    }, []);
    return /* @__PURE__ */ o3("div", { className: "glarity--container glarity--mx-auto", children: [
      /* @__PURE__ */ o3(Header_default, {}),
      /* @__PURE__ */ o3("main", { className: "glarity--w-[900px] glarity--mx-auto glarity--mt-14 glarity--options", children: [
        /* @__PURE__ */ o3(text_default2, { h2: true, children: "Options" }),
        !isIOS && /* @__PURE__ */ o3(k, { children: [
          /* @__PURE__ */ o3(text_default2, { h3: true, className: "glarity--mt-5", children: "Trigger Mode" }),
          /* @__PURE__ */ o3(
            radio_default2.Group,
            {
              value: triggerMode,
              onChange: (val) => onTriggerModeChange(val),
              children: Object.entries(TRIGGER_MODE_TEXT).map(([value, texts]) => {
                return /* @__PURE__ */ o3(radio_default2, { value, children: [
                  texts.title,
                  /* @__PURE__ */ o3(radio_default2.Description, { children: texts.desc })
                ] }, value);
              })
            }
          )
        ] }),
        /* @__PURE__ */ o3(text_default2, { h3: true, className: "glarity--mt-5", children: "Theme" }),
        /* @__PURE__ */ o3(radio_default2.Group, { value: props.theme, onChange: (val) => onThemeChange(val), useRow: true, children: Object.entries(Theme).map(([k4, v3]) => {
          return /* @__PURE__ */ o3(radio_default2, { value: v3, children: k4 }, v3);
        }) }),
        /* @__PURE__ */ o3(text_default2, { h3: true, className: "glarity--mt-5 glarity--mb-0", children: "AI Provider" }),
        /* @__PURE__ */ o3(ProviderSelect_default, {})
      ] })
    ] });
  }
  function App() {
    const [theme, setTheme] = h2("auto" /* Auto */);
    const [pageSummaryEnable, setPageSummaryEnable] = h2(true);
    const [pageSummaryWhitelist, setPageSummaryWhitelist] = h2("");
    const [pageSummaryBlacklist, setPageSummaryBlacklist] = h2("");
    const themeType = F2(() => {
      if (theme === "auto" /* Auto */) {
        return detectSystemColorScheme();
      }
      return theme;
    }, [theme]);
    p2(() => {
      getUserConfig().then((config) => {
        setTheme(config.theme);
        setPageSummaryEnable(config.pageSummaryEnable);
        setPageSummaryWhitelist(config.pageSummaryWhitelist);
        setPageSummaryBlacklist(
          config.pageSummaryBlacklist ? config.pageSummaryBlacklist : DEFAULT_PAGE_SUMMARY_BLACKLIST
        );
      });
    }, []);
    return /* @__PURE__ */ o3(geist_provider_default2, { themeType, children: [
      /* @__PURE__ */ o3(css_baseline_default, {}),
      /* @__PURE__ */ o3(
        OptionsPage,
        {
          theme,
          onThemeChange: setTheme,
          setPageSummaryEnable,
          pageSummaryEnable,
          pageSummaryWhitelist,
          pageSummaryBlacklist,
          setPageSummaryWhitelist,
          setPageSummaryBlacklist
        }
      )
    ] });
  }
  var App_default = App;

  // src/options/index.tsx
  D(/* @__PURE__ */ o3(App_default, {}), document.getElementById("app"));
})();
