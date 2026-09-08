function q1(e, n) {
	for (var i = 0; i < n.length; i++) {
		const o = n[i];
		if (typeof o != "string" && !Array.isArray(o)) {
			for (const a in o)
				if (a !== "default" && !(a in e)) {
					const u = Object.getOwnPropertyDescriptor(o, a);
					u && Object.defineProperty(e, a, u.get ? u : {
						enumerable: !0,
						get: () => o[a]
					})
				}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
		value: "Module"
	}))
}(function() {
	const n = document.createElement("link").relList;
	if (n && n.supports && n.supports("modulepreload")) return;
	for (const a of document.querySelectorAll('link[rel="modulepreload"]')) o(a);
	new MutationObserver(a => {
		for (const u of a)
			if (u.type === "childList")
				for (const c of u.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && o(c)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function i(a) {
		const u = {};
		return a.integrity && (u.integrity = a.integrity), a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? u.credentials = "include" : a.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin", u
	}

	function o(a) {
		if (a.ep) return;
		a.ep = !0;
		const u = i(a);
		fetch(a.href, u)
	}
})();
var Os = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Ly(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Iu = {
		exports: {}
	},
	Qi = {},
	Fu = {
		exports: {}
	},
	Se = {};
var Yp;

function G1() {
	if (Yp) return Se;
	Yp = 1;
	var e = Symbol.for("react.element"),
		n = Symbol.for("react.portal"),
		i = Symbol.for("react.fragment"),
		o = Symbol.for("react.strict_mode"),
		a = Symbol.for("react.profiler"),
		u = Symbol.for("react.provider"),
		c = Symbol.for("react.context"),
		f = Symbol.for("react.forward_ref"),
		p = Symbol.for("react.suspense"),
		h = Symbol.for("react.memo"),
		g = Symbol.for("react.lazy"),
		y = Symbol.iterator;

	function v(j) {
		return j === null || typeof j != "object" ? null : (j = y && j[y] || j["@@iterator"], typeof j == "function" ? j : null)
	}
	var x = {
			isMounted: function() {
				return !1
			},
			enqueueForceUpdate: function() {},
			enqueueReplaceState: function() {},
			enqueueSetState: function() {}
		},
		b = Object.assign,
		E = {};

	function P(j, K, le) {
		this.props = j, this.context = K, this.refs = E, this.updater = le || x
	}
	P.prototype.isReactComponent = {}, P.prototype.setState = function(j, K) {
		if (typeof j != "object" && typeof j != "function" && j != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, j, K, "setState")
	}, P.prototype.forceUpdate = function(j) {
		this.updater.enqueueForceUpdate(this, j, "forceUpdate")
	};

	function C() {}
	C.prototype = P.prototype;

	function R(j, K, le) {
		this.props = j, this.context = K, this.refs = E, this.updater = le || x
	}
	var _ = R.prototype = new C;
	_.constructor = R, b(_, P.prototype), _.isPureReactComponent = !0;
	var A = Array.isArray,
		M = Object.prototype.hasOwnProperty,
		L = {
			current: null
		},
		I = {
			key: !0,
			ref: !0,
			__self: !0,
			__source: !0
		};

	function B(j, K, le) {
		var pe, xe = {},
			ve = null,
			ge = null;
		if (K != null)
			for (pe in K.ref !== void 0 && (ge = K.ref), K.key !== void 0 && (ve = "" + K.key), K) M.call(K, pe) && !I.hasOwnProperty(pe) && (xe[pe] = K[pe]);
		var ue = arguments.length - 2;
		if (ue === 1) xe.children = le;
		else if (1 < ue) {
			for (var we = Array(ue), Ne = 0; Ne < ue; Ne++) we[Ne] = arguments[Ne + 2];
			xe.children = we
		}
		if (j && j.defaultProps)
			for (pe in ue = j.defaultProps, ue) xe[pe] === void 0 && (xe[pe] = ue[pe]);
		return {
			$$typeof: e,
			type: j,
			key: ve,
			ref: ge,
			props: xe,
			_owner: L.current
		}
	}

	function q(j, K) {
		return {
			$$typeof: e,
			type: j.type,
			key: K,
			ref: j.ref,
			props: j.props,
			_owner: j._owner
		}
	}

	function W(j) {
		return typeof j == "object" && j !== null && j.$$typeof === e
	}

	function $(j) {
		var K = {
			"=": "=0",
			":": "=2"
		};
		return "$" + j.replace(/[=:]/g, function(le) {
			return K[le]
		})
	}
	var D = /\/+/g;

	function X(j, K) {
		return typeof j == "object" && j !== null && j.key != null ? $("" + j.key) : K.toString(36)
	}

	function U(j, K, le, pe, xe) {
		var ve = typeof j;
		(ve === "undefined" || ve === "boolean") && (j = null);
		var ge = !1;
		if (j === null) ge = !0;
		else switch (ve) {
			case "string":
			case "number":
				ge = !0;
				break;
			case "object":
				switch (j.$$typeof) {
					case e:
					case n:
						ge = !0
				}
		}
		if (ge) return ge = j, xe = xe(ge), j = pe === "" ? "." + X(ge, 0) : pe, A(xe) ? (le = "", j != null && (le = j.replace(D, "$&/") + "/"), U(xe, K, le, "", function(Ne) {
			return Ne
		})) : xe != null && (W(xe) && (xe = q(xe, le + (!xe.key || ge && ge.key === xe.key ? "" : ("" + xe.key).replace(D, "$&/") + "/") + j)), K.push(xe)), 1;
		if (ge = 0, pe = pe === "" ? "." : pe + ":", A(j))
			for (var ue = 0; ue < j.length; ue++) {
				ve = j[ue];
				var we = pe + X(ve, ue);
				ge += U(ve, K, le, we, xe)
			} else if (we = v(j), typeof we == "function")
				for (j = we.call(j), ue = 0; !(ve = j.next()).done;) ve = ve.value, we = pe + X(ve, ue++), ge += U(ve, K, le, we, xe);
			else if (ve === "object") throw K = String(j), Error("Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead.");
		return ge
	}

	function ce(j, K, le) {
		if (j == null) return j;
		var pe = [],
			xe = 0;
		return U(j, pe, "", "", function(ve) {
			return K.call(le, ve, xe++)
		}), pe
	}

	function oe(j) {
		if (j._status === -1) {
			var K = j._result;
			K = K(), K.then(function(le) {
				(j._status === 0 || j._status === -1) && (j._status = 1, j._result = le)
			}, function(le) {
				(j._status === 0 || j._status === -1) && (j._status = 2, j._result = le)
			}), j._status === -1 && (j._status = 0, j._result = K)
		}
		if (j._status === 1) return j._result.default;
		throw j._result
	}
	var te = {
			current: null
		},
		H = {
			transition: null
		},
		ee = {
			ReactCurrentDispatcher: te,
			ReactCurrentBatchConfig: H,
			ReactCurrentOwner: L
		};

	function Z() {
		throw Error("act(...) is not supported in production builds of React.")
	}
	return Se.Children = {
		map: ce,
		forEach: function(j, K, le) {
			ce(j, function() {
				K.apply(this, arguments)
			}, le)
		},
		count: function(j) {
			var K = 0;
			return ce(j, function() {
				K++
			}), K
		},
		toArray: function(j) {
			return ce(j, function(K) {
				return K
			}) || []
		},
		only: function(j) {
			if (!W(j)) throw Error("React.Children.only expected to receive a single React element child.");
			return j
		}
	}, Se.Component = P, Se.Fragment = i, Se.Profiler = a, Se.PureComponent = R, Se.StrictMode = o, Se.Suspense = p, Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ee, Se.act = Z, Se.cloneElement = function(j, K, le) {
		if (j == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + j + ".");
		var pe = b({}, j.props),
			xe = j.key,
			ve = j.ref,
			ge = j._owner;
		if (K != null) {
			if (K.ref !== void 0 && (ve = K.ref, ge = L.current), K.key !== void 0 && (xe = "" + K.key), j.type && j.type.defaultProps) var ue = j.type.defaultProps;
			for (we in K) M.call(K, we) && !I.hasOwnProperty(we) && (pe[we] = K[we] === void 0 && ue !== void 0 ? ue[we] : K[we])
		}
		var we = arguments.length - 2;
		if (we === 1) pe.children = le;
		else if (1 < we) {
			ue = Array(we);
			for (var Ne = 0; Ne < we; Ne++) ue[Ne] = arguments[Ne + 2];
			pe.children = ue
		}
		return {
			$$typeof: e,
			type: j.type,
			key: xe,
			ref: ve,
			props: pe,
			_owner: ge
		}
	}, Se.createContext = function(j) {
		return j = {
			$$typeof: c,
			_currentValue: j,
			_currentValue2: j,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null
		}, j.Provider = {
			$$typeof: u,
			_context: j
		}, j.Consumer = j
	}, Se.createElement = B, Se.createFactory = function(j) {
		var K = B.bind(null, j);
		return K.type = j, K
	}, Se.createRef = function() {
		return {
			current: null
		}
	}, Se.forwardRef = function(j) {
		return {
			$$typeof: f,
			render: j
		}
	}, Se.isValidElement = W, Se.lazy = function(j) {
		return {
			$$typeof: g,
			_payload: {
				_status: -1,
				_result: j
			},
			_init: oe
		}
	}, Se.memo = function(j, K) {
		return {
			$$typeof: h,
			type: j,
			compare: K === void 0 ? null : K
		}
	}, Se.startTransition = function(j) {
		var K = H.transition;
		H.transition = {};
		try {
			j()
		} finally {
			H.transition = K
		}
	}, Se.unstable_act = Z, Se.useCallback = function(j, K) {
		return te.current.useCallback(j, K)
	}, Se.useContext = function(j) {
		return te.current.useContext(j)
	}, Se.useDebugValue = function() {}, Se.useDeferredValue = function(j) {
		return te.current.useDeferredValue(j)
	}, Se.useEffect = function(j, K) {
		return te.current.useEffect(j, K)
	}, Se.useId = function() {
		return te.current.useId()
	}, Se.useImperativeHandle = function(j, K, le) {
		return te.current.useImperativeHandle(j, K, le)
	}, Se.useInsertionEffect = function(j, K) {
		return te.current.useInsertionEffect(j, K)
	}, Se.useLayoutEffect = function(j, K) {
		return te.current.useLayoutEffect(j, K)
	}, Se.useMemo = function(j, K) {
		return te.current.useMemo(j, K)
	}, Se.useReducer = function(j, K, le) {
		return te.current.useReducer(j, K, le)
	}, Se.useRef = function(j) {
		return te.current.useRef(j)
	}, Se.useState = function(j) {
		return te.current.useState(j)
	}, Se.useSyncExternalStore = function(j, K, le) {
		return te.current.useSyncExternalStore(j, K, le)
	}, Se.useTransition = function() {
		return te.current.useTransition()
	}, Se.version = "18.3.1", Se
}
var Xp;

function rn() {
	return Xp || (Xp = 1, Fu.exports = G1()), Fu.exports
}
var Zp;

function Y1() {
	if (Zp) return Qi;
	Zp = 1;
	var e = rn(),
		n = Symbol.for("react.element"),
		i = Symbol.for("react.fragment"),
		o = Object.prototype.hasOwnProperty,
		a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
		u = {
			key: !0,
			ref: !0,
			__self: !0,
			__source: !0
		};

	function c(f, p, h) {
		var g, y = {},
			v = null,
			x = null;
		h !== void 0 && (v = "" + h), p.key !== void 0 && (v = "" + p.key), p.ref !== void 0 && (x = p.ref);
		for (g in p) o.call(p, g) && !u.hasOwnProperty(g) && (y[g] = p[g]);
		if (f && f.defaultProps)
			for (g in p = f.defaultProps, p) y[g] === void 0 && (y[g] = p[g]);
		return {
			$$typeof: n,
			type: f,
			key: v,
			ref: x,
			props: y,
			_owner: a.current
		}
	}
	return Qi.Fragment = i, Qi.jsx = c, Qi.jsxs = c, Qi
}
var Jp;

function X1() {
	return Jp || (Jp = 1, Iu.exports = Y1()), Iu.exports
}
var S = X1(),
	As = {},
	Vu = {
		exports: {}
	},
	dt = {},
	zu = {
		exports: {}
	},
	Bu = {};
var em;

function Z1() {
	return em || (em = 1, (function(e) {
		function n(H, ee) {
			var Z = H.length;
			H.push(ee);
			e: for (; 0 < Z;) {
				var j = Z - 1 >>> 1,
					K = H[j];
				if (0 < a(K, ee)) H[j] = ee, H[Z] = K, Z = j;
				else break e
			}
		}

		function i(H) {
			return H.length === 0 ? null : H[0]
		}

		function o(H) {
			if (H.length === 0) return null;
			var ee = H[0],
				Z = H.pop();
			if (Z !== ee) {
				H[0] = Z;
				e: for (var j = 0, K = H.length, le = K >>> 1; j < le;) {
					var pe = 2 * (j + 1) - 1,
						xe = H[pe],
						ve = pe + 1,
						ge = H[ve];
					if (0 > a(xe, Z)) ve < K && 0 > a(ge, xe) ? (H[j] = ge, H[ve] = Z, j = ve) : (H[j] = xe, H[pe] = Z, j = pe);
					else if (ve < K && 0 > a(ge, Z)) H[j] = ge, H[ve] = Z, j = ve;
					else break e
				}
			}
			return ee
		}

		function a(H, ee) {
			var Z = H.sortIndex - ee.sortIndex;
			return Z !== 0 ? Z : H.id - ee.id
		}
		if (typeof performance == "object" && typeof performance.now == "function") {
			var u = performance;
			e.unstable_now = function() {
				return u.now()
			}
		} else {
			var c = Date,
				f = c.now();
			e.unstable_now = function() {
				return c.now() - f
			}
		}
		var p = [],
			h = [],
			g = 1,
			y = null,
			v = 3,
			x = !1,
			b = !1,
			E = !1,
			P = typeof setTimeout == "function" ? setTimeout : null,
			C = typeof clearTimeout == "function" ? clearTimeout : null,
			R = typeof setImmediate < "u" ? setImmediate : null;
		typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

		function _(H) {
			for (var ee = i(h); ee !== null;) {
				if (ee.callback === null) o(h);
				else if (ee.startTime <= H) o(h), ee.sortIndex = ee.expirationTime, n(p, ee);
				else break;
				ee = i(h)
			}
		}

		function A(H) {
			if (E = !1, _(H), !b)
				if (i(p) !== null) b = !0, oe(M);
				else {
					var ee = i(h);
					ee !== null && te(A, ee.startTime - H)
				}
		}

		function M(H, ee) {
			b = !1, E && (E = !1, C(B), B = -1), x = !0;
			var Z = v;
			try {
				for (_(ee), y = i(p); y !== null && (!(y.expirationTime > ee) || H && !$());) {
					var j = y.callback;
					if (typeof j == "function") {
						y.callback = null, v = y.priorityLevel;
						var K = j(y.expirationTime <= ee);
						ee = e.unstable_now(), typeof K == "function" ? y.callback = K : y === i(p) && o(p), _(ee)
					} else o(p);
					y = i(p)
				}
				if (y !== null) var le = !0;
				else {
					var pe = i(h);
					pe !== null && te(A, pe.startTime - ee), le = !1
				}
				return le
			} finally {
				y = null, v = Z, x = !1
			}
		}
		var L = !1,
			I = null,
			B = -1,
			q = 5,
			W = -1;

		function $() {
			return !(e.unstable_now() - W < q)
		}

		function D() {
			if (I !== null) {
				var H = e.unstable_now();
				W = H;
				var ee = !0;
				try {
					ee = I(!0, H)
				} finally {
					ee ? X() : (L = !1, I = null)
				}
			} else L = !1
		}
		var X;
		if (typeof R == "function") X = function() {
			R(D)
		};
		else if (typeof MessageChannel < "u") {
			var U = new MessageChannel,
				ce = U.port2;
			U.port1.onmessage = D, X = function() {
				ce.postMessage(null)
			}
		} else X = function() {
			P(D, 0)
		};

		function oe(H) {
			I = H, L || (L = !0, X())
		}

		function te(H, ee) {
			B = P(function() {
				H(e.unstable_now())
			}, ee)
		}
		e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(H) {
			H.callback = null
		}, e.unstable_continueExecution = function() {
			b || x || (b = !0, oe(M))
		}, e.unstable_forceFrameRate = function(H) {
			0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : q = 0 < H ? Math.floor(1e3 / H) : 5
		}, e.unstable_getCurrentPriorityLevel = function() {
			return v
		}, e.unstable_getFirstCallbackNode = function() {
			return i(p)
		}, e.unstable_next = function(H) {
			switch (v) {
				case 1:
				case 2:
				case 3:
					var ee = 3;
					break;
				default:
					ee = v
			}
			var Z = v;
			v = ee;
			try {
				return H()
			} finally {
				v = Z
			}
		}, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(H, ee) {
			switch (H) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					H = 3
			}
			var Z = v;
			v = H;
			try {
				return ee()
			} finally {
				v = Z
			}
		}, e.unstable_scheduleCallback = function(H, ee, Z) {
			var j = e.unstable_now();
			switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? j + Z : j) : Z = j, H) {
				case 1:
					var K = -1;
					break;
				case 2:
					K = 250;
					break;
				case 5:
					K = 1073741823;
					break;
				case 4:
					K = 1e4;
					break;
				default:
					K = 5e3
			}
			return K = Z + K, H = {
				id: g++,
				callback: ee,
				priorityLevel: H,
				startTime: Z,
				expirationTime: K,
				sortIndex: -1
			}, Z > j ? (H.sortIndex = Z, n(h, H), i(p) === null && H === i(h) && (E ? (C(B), B = -1) : E = !0, te(A, Z - j))) : (H.sortIndex = K, n(p, H), b || x || (b = !0, oe(M))), H
		}, e.unstable_shouldYield = $, e.unstable_wrapCallback = function(H) {
			var ee = v;
			return function() {
				var Z = v;
				v = ee;
				try {
					return H.apply(this, arguments)
				} finally {
					v = Z
				}
			}
		}
	})(Bu)), Bu
}
var tm;

function J1() {
	return tm || (tm = 1, zu.exports = Z1()), zu.exports
}
var nm;

function eS() {
	if (nm) return dt;
	nm = 1;
	var e = rn(),
		n = J1();

	function i(t) {
		for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, s = 1; s < arguments.length; s++) r += "&args[]=" + encodeURIComponent(arguments[s]);
		return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	}
	var o = new Set,
		a = {};

	function u(t, r) {
		c(t, r), c(t + "Capture", r)
	}

	function c(t, r) {
		for (a[t] = r, t = 0; t < r.length; t++) o.add(r[t])
	}
	var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
		p = Object.prototype.hasOwnProperty,
		h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
		g = {},
		y = {};

	function v(t) {
		return p.call(y, t) ? !0 : p.call(g, t) ? !1 : h.test(t) ? y[t] = !0 : (g[t] = !0, !1)
	}

	function x(t, r, s, l) {
		if (s !== null && s.type === 0) return !1;
		switch (typeof r) {
			case "function":
			case "symbol":
				return !0;
			case "boolean":
				return l ? !1 : s !== null ? !s.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
			default:
				return !1
		}
	}

	function b(t, r, s, l) {
		if (r === null || typeof r > "u" || x(t, r, s, l)) return !0;
		if (l) return !1;
		if (s !== null) switch (s.type) {
			case 3:
				return !r;
			case 4:
				return r === !1;
			case 5:
				return isNaN(r);
			case 6:
				return isNaN(r) || 1 > r
		}
		return !1
	}

	function E(t, r, s, l, d, m, w) {
		this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = d, this.mustUseProperty = s, this.propertyName = t, this.type = r, this.sanitizeURL = m, this.removeEmptyString = w
	}
	var P = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
		P[t] = new E(t, 0, !1, t, null, !1, !1)
	}), [
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach(function(t) {
		var r = t[0];
		P[r] = new E(r, 1, !1, t[1], null, !1, !1)
	}), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
		P[t] = new E(t, 2, !1, t.toLowerCase(), null, !1, !1)
	}), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
		P[t] = new E(t, 2, !1, t, null, !1, !1)
	}), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
		P[t] = new E(t, 3, !1, t.toLowerCase(), null, !1, !1)
	}), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
		P[t] = new E(t, 3, !0, t, null, !1, !1)
	}), ["capture", "download"].forEach(function(t) {
		P[t] = new E(t, 4, !1, t, null, !1, !1)
	}), ["cols", "rows", "size", "span"].forEach(function(t) {
		P[t] = new E(t, 6, !1, t, null, !1, !1)
	}), ["rowSpan", "start"].forEach(function(t) {
		P[t] = new E(t, 5, !1, t.toLowerCase(), null, !1, !1)
	});
	var C = /[\-:]([a-z])/g;

	function R(t) {
		return t[1].toUpperCase()
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
		var r = t.replace(C, R);
		P[r] = new E(r, 1, !1, t, null, !1, !1)
	}), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
		var r = t.replace(C, R);
		P[r] = new E(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1)
	}), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
		var r = t.replace(C, R);
		P[r] = new E(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1)
	}), ["tabIndex", "crossOrigin"].forEach(function(t) {
		P[t] = new E(t, 1, !1, t.toLowerCase(), null, !1, !1)
	}), P.xlinkHref = new E("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
		P[t] = new E(t, 1, !1, t.toLowerCase(), null, !0, !0)
	});

	function _(t, r, s, l) {
		var d = P.hasOwnProperty(r) ? P[r] : null;
		(d !== null ? d.type !== 0 : l || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (b(r, s, d, l) && (s = null), l || d === null ? v(r) && (s === null ? t.removeAttribute(r) : t.setAttribute(r, "" + s)) : d.mustUseProperty ? t[d.propertyName] = s === null ? d.type === 3 ? !1 : "" : s : (r = d.attributeName, l = d.attributeNamespace, s === null ? t.removeAttribute(r) : (d = d.type, s = d === 3 || d === 4 && s === !0 ? "" : "" + s, l ? t.setAttributeNS(l, r, s) : t.setAttribute(r, s))))
	}
	var A = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
		M = Symbol.for("react.element"),
		L = Symbol.for("react.portal"),
		I = Symbol.for("react.fragment"),
		B = Symbol.for("react.strict_mode"),
		q = Symbol.for("react.profiler"),
		W = Symbol.for("react.provider"),
		$ = Symbol.for("react.context"),
		D = Symbol.for("react.forward_ref"),
		X = Symbol.for("react.suspense"),
		U = Symbol.for("react.suspense_list"),
		ce = Symbol.for("react.memo"),
		oe = Symbol.for("react.lazy"),
		te = Symbol.for("react.offscreen"),
		H = Symbol.iterator;

	function ee(t) {
		return t === null || typeof t != "object" ? null : (t = H && t[H] || t["@@iterator"], typeof t == "function" ? t : null)
	}
	var Z = Object.assign,
		j;

	function K(t) {
		if (j === void 0) try {
			throw Error()
		} catch (s) {
			var r = s.stack.trim().match(/\n( *(at )?)/);
			j = r && r[1] || ""
		}
		return `
` + j + t
	}
	var le = !1;

	function pe(t, r) {
		if (!t || le) return "";
		le = !0;
		var s = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (r)
				if (r = function() {
						throw Error()
					}, Object.defineProperty(r.prototype, "props", {
						set: function() {
							throw Error()
						}
					}), typeof Reflect == "object" && Reflect.construct) {
					try {
						Reflect.construct(r, [])
					} catch (z) {
						var l = z
					}
					Reflect.construct(t, [], r)
				} else {
					try {
						r.call()
					} catch (z) {
						l = z
					}
					t.call(r.prototype)
				}
			else {
				try {
					throw Error()
				} catch (z) {
					l = z
				}
				t()
			}
		} catch (z) {
			if (z && l && typeof z.stack == "string") {
				for (var d = z.stack.split(`
`), m = l.stack.split(`
`), w = d.length - 1, k = m.length - 1; 1 <= w && 0 <= k && d[w] !== m[k];) k--;
				for (; 1 <= w && 0 <= k; w--, k--)
					if (d[w] !== m[k]) {
						if (w !== 1 || k !== 1)
							do
								if (w--, k--, 0 > k || d[w] !== m[k]) {
									var O = `
` + d[w].replace(" at new ", " at ");
									return t.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", t.displayName)), O
								} while (1 <= w && 0 <= k);
						break
					}
			}
		} finally {
			le = !1, Error.prepareStackTrace = s
		}
		return (t = t ? t.displayName || t.name : "") ? K(t) : ""
	}

	function xe(t) {
		switch (t.tag) {
			case 5:
				return K(t.type);
			case 16:
				return K("Lazy");
			case 13:
				return K("Suspense");
			case 19:
				return K("SuspenseList");
			case 0:
			case 2:
			case 15:
				return t = pe(t.type, !1), t;
			case 11:
				return t = pe(t.type.render, !1), t;
			case 1:
				return t = pe(t.type, !0), t;
			default:
				return ""
		}
	}

	function ve(t) {
		if (t == null) return null;
		if (typeof t == "function") return t.displayName || t.name || null;
		if (typeof t == "string") return t;
		switch (t) {
			case I:
				return "Fragment";
			case L:
				return "Portal";
			case q:
				return "Profiler";
			case B:
				return "StrictMode";
			case X:
				return "Suspense";
			case U:
				return "SuspenseList"
		}
		if (typeof t == "object") switch (t.$$typeof) {
			case $:
				return (t.displayName || "Context") + ".Consumer";
			case W:
				return (t._context.displayName || "Context") + ".Provider";
			case D:
				var r = t.render;
				return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
			case ce:
				return r = t.displayName || null, r !== null ? r : ve(t.type) || "Memo";
			case oe:
				r = t._payload, t = t._init;
				try {
					return ve(t(r))
				} catch {}
		}
		return null
	}

	function ge(t) {
		var r = t.type;
		switch (t.tag) {
			case 24:
				return "Cache";
			case 9:
				return (r.displayName || "Context") + ".Consumer";
			case 10:
				return (r._context.displayName || "Context") + ".Provider";
			case 18:
				return "DehydratedFragment";
			case 11:
				return t = r.render, t = t.displayName || t.name || "", r.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
			case 7:
				return "Fragment";
			case 5:
				return r;
			case 4:
				return "Portal";
			case 3:
				return "Root";
			case 6:
				return "Text";
			case 16:
				return ve(r);
			case 8:
				return r === B ? "StrictMode" : "Mode";
			case 22:
				return "Offscreen";
			case 12:
				return "Profiler";
			case 21:
				return "Scope";
			case 13:
				return "Suspense";
			case 19:
				return "SuspenseList";
			case 25:
				return "TracingMarker";
			case 1:
			case 0:
			case 17:
			case 2:
			case 14:
			case 15:
				if (typeof r == "function") return r.displayName || r.name || null;
				if (typeof r == "string") return r
		}
		return null
	}

	function ue(t) {
		switch (typeof t) {
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return t;
			case "object":
				return t;
			default:
				return ""
		}
	}

	function we(t) {
		var r = t.type;
		return (t = t.nodeName) && t.toLowerCase() === "input" && (r === "checkbox" || r === "radio")
	}

	function Ne(t) {
		var r = we(t) ? "checked" : "value",
			s = Object.getOwnPropertyDescriptor(t.constructor.prototype, r),
			l = "" + t[r];
		if (!t.hasOwnProperty(r) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
			var d = s.get,
				m = s.set;
			return Object.defineProperty(t, r, {
				configurable: !0,
				get: function() {
					return d.call(this)
				},
				set: function(w) {
					l = "" + w, m.call(this, w)
				}
			}), Object.defineProperty(t, r, {
				enumerable: s.enumerable
			}), {
				getValue: function() {
					return l
				},
				setValue: function(w) {
					l = "" + w
				},
				stopTracking: function() {
					t._valueTracker = null, delete t[r]
				}
			}
		}
	}

	function Tt(t) {
		t._valueTracker || (t._valueTracker = Ne(t))
	}

	function xr(t) {
		if (!t) return !1;
		var r = t._valueTracker;
		if (!r) return !0;
		var s = r.getValue(),
			l = "";
		return t && (l = we(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== s ? (r.setValue(t), !0) : !1
	}

	function sn(t) {
		if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
		try {
			return t.activeElement || t.body
		} catch {
			return t.body
		}
	}

	function Wa(t, r) {
		var s = r.checked;
		return Z({}, r, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: s ?? t._wrapperState.initialChecked
		})
	}

	function rd(t, r) {
		var s = r.defaultValue == null ? "" : r.defaultValue,
			l = r.checked != null ? r.checked : r.defaultChecked;
		s = ue(r.value != null ? r.value : s), t._wrapperState = {
			initialChecked: l,
			initialValue: s,
			controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null
		}
	}

	function id(t, r) {
		r = r.checked, r != null && _(t, "checked", r, !1)
	}

	function $a(t, r) {
		id(t, r);
		var s = ue(r.value),
			l = r.type;
		if (s != null) l === "number" ? (s === 0 && t.value === "" || t.value != s) && (t.value = "" + s) : t.value !== "" + s && (t.value = "" + s);
		else if (l === "submit" || l === "reset") {
			t.removeAttribute("value");
			return
		}
		r.hasOwnProperty("value") ? Ka(t, r.type, s) : r.hasOwnProperty("defaultValue") && Ka(t, r.type, ue(r.defaultValue)), r.checked == null && r.defaultChecked != null && (t.defaultChecked = !!r.defaultChecked)
	}

	function od(t, r, s) {
		if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
			var l = r.type;
			if (!(l !== "submit" && l !== "reset" || r.value !== void 0 && r.value !== null)) return;
			r = "" + t._wrapperState.initialValue, s || r === t.value || (t.value = r), t.defaultValue = r
		}
		s = t.name, s !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, s !== "" && (t.name = s)
	}

	function Ka(t, r, s) {
		(r !== "number" || sn(t.ownerDocument) !== t) && (s == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + s && (t.defaultValue = "" + s))
	}
	var li = Array.isArray;

	function wr(t, r, s, l) {
		if (t = t.options, r) {
			r = {};
			for (var d = 0; d < s.length; d++) r["$" + s[d]] = !0;
			for (s = 0; s < t.length; s++) d = r.hasOwnProperty("$" + t[s].value), t[s].selected !== d && (t[s].selected = d), d && l && (t[s].defaultSelected = !0)
		} else {
			for (s = "" + ue(s), r = null, d = 0; d < t.length; d++) {
				if (t[d].value === s) {
					t[d].selected = !0, l && (t[d].defaultSelected = !0);
					return
				}
				r !== null || t[d].disabled || (r = t[d])
			}
			r !== null && (r.selected = !0)
		}
	}

	function Qa(t, r) {
		if (r.dangerouslySetInnerHTML != null) throw Error(i(91));
		return Z({}, r, {
			value: void 0,
			defaultValue: void 0,
			children: "" + t._wrapperState.initialValue
		})
	}

	function sd(t, r) {
		var s = r.value;
		if (s == null) {
			if (s = r.children, r = r.defaultValue, s != null) {
				if (r != null) throw Error(i(92));
				if (li(s)) {
					if (1 < s.length) throw Error(i(93));
					s = s[0]
				}
				r = s
			}
			r == null && (r = ""), s = r
		}
		t._wrapperState = {
			initialValue: ue(s)
		}
	}

	function ad(t, r) {
		var s = ue(r.value),
			l = ue(r.defaultValue);
		s != null && (s = "" + s, s !== t.value && (t.value = s), r.defaultValue == null && t.defaultValue !== s && (t.defaultValue = s)), l != null && (t.defaultValue = "" + l)
	}

	function ld(t) {
		var r = t.textContent;
		r === t._wrapperState.initialValue && r !== "" && r !== null && (t.value = r)
	}

	function ud(t) {
		switch (t) {
			case "svg":
				return "http://www.w3.org/2000/svg";
			case "math":
				return "http://www.w3.org/1998/Math/MathML";
			default:
				return "http://www.w3.org/1999/xhtml"
		}
	}

	function qa(t, r) {
		return t == null || t === "http://www.w3.org/1999/xhtml" ? ud(r) : t === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
	}
	var bo, cd = (function(t) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, s, l, d) {
			MSApp.execUnsafeLocalFunction(function() {
				return t(r, s, l, d)
			})
		} : t
	})(function(t, r) {
		if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = r;
		else {
			for (bo = bo || document.createElement("div"), bo.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = bo.firstChild; t.firstChild;) t.removeChild(t.firstChild);
			for (; r.firstChild;) t.appendChild(r.firstChild)
		}
	});

	function ui(t, r) {
		if (r) {
			var s = t.firstChild;
			if (s && s === t.lastChild && s.nodeType === 3) {
				s.nodeValue = r;
				return
			}
		}
		t.textContent = r
	}
	var ci = {
			animationIterationCount: !0,
			aspectRatio: !0,
			borderImageOutset: !0,
			borderImageSlice: !0,
			borderImageWidth: !0,
			boxFlex: !0,
			boxFlexGroup: !0,
			boxOrdinalGroup: !0,
			columnCount: !0,
			columns: !0,
			flex: !0,
			flexGrow: !0,
			flexPositive: !0,
			flexShrink: !0,
			flexNegative: !0,
			flexOrder: !0,
			gridArea: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowSpan: !0,
			gridRowStart: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnSpan: !0,
			gridColumnStart: !0,
			fontWeight: !0,
			lineClamp: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			tabSize: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
			fillOpacity: !0,
			floodOpacity: !0,
			stopOpacity: !0,
			strokeDasharray: !0,
			strokeDashoffset: !0,
			strokeMiterlimit: !0,
			strokeOpacity: !0,
			strokeWidth: !0
		},
		Zx = ["Webkit", "ms", "Moz", "O"];
	Object.keys(ci).forEach(function(t) {
		Zx.forEach(function(r) {
			r = r + t.charAt(0).toUpperCase() + t.substring(1), ci[r] = ci[t]
		})
	});

	function fd(t, r, s) {
		return r == null || typeof r == "boolean" || r === "" ? "" : s || typeof r != "number" || r === 0 || ci.hasOwnProperty(t) && ci[t] ? ("" + r).trim() : r + "px"
	}

	function dd(t, r) {
		t = t.style;
		for (var s in r)
			if (r.hasOwnProperty(s)) {
				var l = s.indexOf("--") === 0,
					d = fd(s, r[s], l);
				s === "float" && (s = "cssFloat"), l ? t.setProperty(s, d) : t[s] = d
			}
	}
	var Jx = Z({
		menuitem: !0
	}, {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	});

	function Ga(t, r) {
		if (r) {
			if (Jx[t] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(i(137, t));
			if (r.dangerouslySetInnerHTML != null) {
				if (r.children != null) throw Error(i(60));
				if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(i(61))
			}
			if (r.style != null && typeof r.style != "object") throw Error(i(62))
		}
	}

	function Ya(t, r) {
		if (t.indexOf("-") === -1) return typeof r.is == "string";
		switch (t) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0
		}
	}
	var Xa = null;

	function Za(t) {
		return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
	}
	var Ja = null,
		Sr = null,
		br = null;

	function hd(t) {
		if (t = Ni(t)) {
			if (typeof Ja != "function") throw Error(i(280));
			var r = t.stateNode;
			r && (r = $o(r), Ja(t.stateNode, t.type, r))
		}
	}

	function pd(t) {
		Sr ? br ? br.push(t) : br = [t] : Sr = t
	}

	function md() {
		if (Sr) {
			var t = Sr,
				r = br;
			if (br = Sr = null, hd(t), r)
				for (t = 0; t < r.length; t++) hd(r[t])
		}
	}

	function gd(t, r) {
		return t(r)
	}

	function yd() {}
	var el = !1;

	function vd(t, r, s) {
		if (el) return t(r, s);
		el = !0;
		try {
			return gd(t, r, s)
		} finally {
			el = !1, (Sr !== null || br !== null) && (yd(), md())
		}
	}

	function fi(t, r) {
		var s = t.stateNode;
		if (s === null) return null;
		var l = $o(s);
		if (l === null) return null;
		s = l[r];
		e: switch (r) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
				break e;
			default:
				t = !1
		}
		if (t) return null;
		if (s && typeof s != "function") throw Error(i(231, r, typeof s));
		return s
	}
	var tl = !1;
	if (f) try {
		var di = {};
		Object.defineProperty(di, "passive", {
			get: function() {
				tl = !0
			}
		}), window.addEventListener("test", di, di), window.removeEventListener("test", di, di)
	} catch {
		tl = !1
	}

	function ew(t, r, s, l, d, m, w, k, O) {
		var z = Array.prototype.slice.call(arguments, 3);
		try {
			r.apply(s, z)
		} catch (G) {
			this.onError(G)
		}
	}
	var hi = !1,
		Eo = null,
		Po = !1,
		nl = null,
		tw = {
			onError: function(t) {
				hi = !0, Eo = t
			}
		};

	function nw(t, r, s, l, d, m, w, k, O) {
		hi = !1, Eo = null, ew.apply(tw, arguments)
	}

	function rw(t, r, s, l, d, m, w, k, O) {
		if (nw.apply(this, arguments), hi) {
			if (hi) {
				var z = Eo;
				hi = !1, Eo = null
			} else throw Error(i(198));
			Po || (Po = !0, nl = z)
		}
	}

	function Xn(t) {
		var r = t,
			s = t;
		if (t.alternate)
			for (; r.return;) r = r.return;
		else {
			t = r;
			do r = t, (r.flags & 4098) !== 0 && (s = r.return), t = r.return; while (t)
		}
		return r.tag === 3 ? s : null
	}

	function xd(t) {
		if (t.tag === 13) {
			var r = t.memoizedState;
			if (r === null && (t = t.alternate, t !== null && (r = t.memoizedState)), r !== null) return r.dehydrated
		}
		return null
	}

	function wd(t) {
		if (Xn(t) !== t) throw Error(i(188))
	}

	function iw(t) {
		var r = t.alternate;
		if (!r) {
			if (r = Xn(t), r === null) throw Error(i(188));
			return r !== t ? null : t
		}
		for (var s = t, l = r;;) {
			var d = s.return;
			if (d === null) break;
			var m = d.alternate;
			if (m === null) {
				if (l = d.return, l !== null) {
					s = l;
					continue
				}
				break
			}
			if (d.child === m.child) {
				for (m = d.child; m;) {
					if (m === s) return wd(d), t;
					if (m === l) return wd(d), r;
					m = m.sibling
				}
				throw Error(i(188))
			}
			if (s.return !== l.return) s = d, l = m;
			else {
				for (var w = !1, k = d.child; k;) {
					if (k === s) {
						w = !0, s = d, l = m;
						break
					}
					if (k === l) {
						w = !0, l = d, s = m;
						break
					}
					k = k.sibling
				}
				if (!w) {
					for (k = m.child; k;) {
						if (k === s) {
							w = !0, s = m, l = d;
							break
						}
						if (k === l) {
							w = !0, l = m, s = d;
							break
						}
						k = k.sibling
					}
					if (!w) throw Error(i(189))
				}
			}
			if (s.alternate !== l) throw Error(i(190))
		}
		if (s.tag !== 3) throw Error(i(188));
		return s.stateNode.current === s ? t : r
	}

	function Sd(t) {
		return t = iw(t), t !== null ? bd(t) : null
	}

	function bd(t) {
		if (t.tag === 5 || t.tag === 6) return t;
		for (t = t.child; t !== null;) {
			var r = bd(t);
			if (r !== null) return r;
			t = t.sibling
		}
		return null
	}
	var Ed = n.unstable_scheduleCallback,
		Pd = n.unstable_cancelCallback,
		ow = n.unstable_shouldYield,
		sw = n.unstable_requestPaint,
		Fe = n.unstable_now,
		aw = n.unstable_getCurrentPriorityLevel,
		rl = n.unstable_ImmediatePriority,
		Td = n.unstable_UserBlockingPriority,
		To = n.unstable_NormalPriority,
		lw = n.unstable_LowPriority,
		Cd = n.unstable_IdlePriority,
		Co = null,
		Qt = null;

	function uw(t) {
		if (Qt && typeof Qt.onCommitFiberRoot == "function") try {
			Qt.onCommitFiberRoot(Co, t, void 0, (t.current.flags & 128) === 128)
		} catch {}
	}
	var Dt = Math.clz32 ? Math.clz32 : dw,
		cw = Math.log,
		fw = Math.LN2;

	function dw(t) {
		return t >>>= 0, t === 0 ? 32 : 31 - (cw(t) / fw | 0) | 0
	}
	var ko = 64,
		Ro = 4194304;

	function pi(t) {
		switch (t & -t) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t & 4194240;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864:
				return t & 130023424;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 1073741824;
			default:
				return t
		}
	}

	function _o(t, r) {
		var s = t.pendingLanes;
		if (s === 0) return 0;
		var l = 0,
			d = t.suspendedLanes,
			m = t.pingedLanes,
			w = s & 268435455;
		if (w !== 0) {
			var k = w & ~d;
			k !== 0 ? l = pi(k) : (m &= w, m !== 0 && (l = pi(m)))
		} else w = s & ~d, w !== 0 ? l = pi(w) : m !== 0 && (l = pi(m));
		if (l === 0) return 0;
		if (r !== 0 && r !== l && (r & d) === 0 && (d = l & -l, m = r & -r, d >= m || d === 16 && (m & 4194240) !== 0)) return r;
		if ((l & 4) !== 0 && (l |= s & 16), r = t.entangledLanes, r !== 0)
			for (t = t.entanglements, r &= l; 0 < r;) s = 31 - Dt(r), d = 1 << s, l |= t[s], r &= ~d;
		return l
	}

	function hw(t, r) {
		switch (t) {
			case 1:
			case 2:
			case 4:
				return r + 250;
			case 8:
			case 16:
			case 32:
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return r + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864:
				return -1;
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1
		}
	}

	function pw(t, r) {
		for (var s = t.suspendedLanes, l = t.pingedLanes, d = t.expirationTimes, m = t.pendingLanes; 0 < m;) {
			var w = 31 - Dt(m),
				k = 1 << w,
				O = d[w];
			O === -1 ? ((k & s) === 0 || (k & l) !== 0) && (d[w] = hw(k, r)) : O <= r && (t.expiredLanes |= k), m &= ~k
		}
	}

	function il(t) {
		return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
	}

	function kd() {
		var t = ko;
		return ko <<= 1, (ko & 4194240) === 0 && (ko = 64), t
	}

	function ol(t) {
		for (var r = [], s = 0; 31 > s; s++) r.push(t);
		return r
	}

	function mi(t, r, s) {
		t.pendingLanes |= r, r !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, r = 31 - Dt(r), t[r] = s
	}

	function mw(t, r) {
		var s = t.pendingLanes & ~r;
		t.pendingLanes = r, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= r, t.mutableReadLanes &= r, t.entangledLanes &= r, r = t.entanglements;
		var l = t.eventTimes;
		for (t = t.expirationTimes; 0 < s;) {
			var d = 31 - Dt(s),
				m = 1 << d;
			r[d] = 0, l[d] = -1, t[d] = -1, s &= ~m
		}
	}

	function sl(t, r) {
		var s = t.entangledLanes |= r;
		for (t = t.entanglements; s;) {
			var l = 31 - Dt(s),
				d = 1 << l;
			d & r | t[l] & r && (t[l] |= r), s &= ~d
		}
	}
	var Pe = 0;

	function Rd(t) {
		return t &= -t, 1 < t ? 4 < t ? (t & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
	}
	var _d, al, Od, Ad, Nd, ll = !1,
		Oo = [],
		Sn = null,
		bn = null,
		En = null,
		gi = new Map,
		yi = new Map,
		Pn = [],
		gw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

	function jd(t, r) {
		switch (t) {
			case "focusin":
			case "focusout":
				Sn = null;
				break;
			case "dragenter":
			case "dragleave":
				bn = null;
				break;
			case "mouseover":
			case "mouseout":
				En = null;
				break;
			case "pointerover":
			case "pointerout":
				gi.delete(r.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				yi.delete(r.pointerId)
		}
	}

	function vi(t, r, s, l, d, m) {
		return t === null || t.nativeEvent !== m ? (t = {
			blockedOn: r,
			domEventName: s,
			eventSystemFlags: l,
			nativeEvent: m,
			targetContainers: [d]
		}, r !== null && (r = Ni(r), r !== null && al(r)), t) : (t.eventSystemFlags |= l, r = t.targetContainers, d !== null && r.indexOf(d) === -1 && r.push(d), t)
	}

	function yw(t, r, s, l, d) {
		switch (r) {
			case "focusin":
				return Sn = vi(Sn, t, r, s, l, d), !0;
			case "dragenter":
				return bn = vi(bn, t, r, s, l, d), !0;
			case "mouseover":
				return En = vi(En, t, r, s, l, d), !0;
			case "pointerover":
				var m = d.pointerId;
				return gi.set(m, vi(gi.get(m) || null, t, r, s, l, d)), !0;
			case "gotpointercapture":
				return m = d.pointerId, yi.set(m, vi(yi.get(m) || null, t, r, s, l, d)), !0
		}
		return !1
	}

	function Md(t) {
		var r = Zn(t.target);
		if (r !== null) {
			var s = Xn(r);
			if (s !== null) {
				if (r = s.tag, r === 13) {
					if (r = xd(s), r !== null) {
						t.blockedOn = r, Nd(t.priority, function() {
							Od(s)
						});
						return
					}
				} else if (r === 3 && s.stateNode.current.memoizedState.isDehydrated) {
					t.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
					return
				}
			}
		}
		t.blockedOn = null
	}

	function Ao(t) {
		if (t.blockedOn !== null) return !1;
		for (var r = t.targetContainers; 0 < r.length;) {
			var s = cl(t.domEventName, t.eventSystemFlags, r[0], t.nativeEvent);
			if (s === null) {
				s = t.nativeEvent;
				var l = new s.constructor(s.type, s);
				Xa = l, s.target.dispatchEvent(l), Xa = null
			} else return r = Ni(s), r !== null && al(r), t.blockedOn = s, !1;
			r.shift()
		}
		return !0
	}

	function Dd(t, r, s) {
		Ao(t) && s.delete(r)
	}

	function vw() {
		ll = !1, Sn !== null && Ao(Sn) && (Sn = null), bn !== null && Ao(bn) && (bn = null), En !== null && Ao(En) && (En = null), gi.forEach(Dd), yi.forEach(Dd)
	}

	function xi(t, r) {
		t.blockedOn === r && (t.blockedOn = null, ll || (ll = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, vw)))
	}

	function wi(t) {
		function r(d) {
			return xi(d, t)
		}
		if (0 < Oo.length) {
			xi(Oo[0], t);
			for (var s = 1; s < Oo.length; s++) {
				var l = Oo[s];
				l.blockedOn === t && (l.blockedOn = null)
			}
		}
		for (Sn !== null && xi(Sn, t), bn !== null && xi(bn, t), En !== null && xi(En, t), gi.forEach(r), yi.forEach(r), s = 0; s < Pn.length; s++) l = Pn[s], l.blockedOn === t && (l.blockedOn = null);
		for (; 0 < Pn.length && (s = Pn[0], s.blockedOn === null);) Md(s), s.blockedOn === null && Pn.shift()
	}
	var Er = A.ReactCurrentBatchConfig,
		No = !0;

	function xw(t, r, s, l) {
		var d = Pe,
			m = Er.transition;
		Er.transition = null;
		try {
			Pe = 1, ul(t, r, s, l)
		} finally {
			Pe = d, Er.transition = m
		}
	}

	function ww(t, r, s, l) {
		var d = Pe,
			m = Er.transition;
		Er.transition = null;
		try {
			Pe = 4, ul(t, r, s, l)
		} finally {
			Pe = d, Er.transition = m
		}
	}

	function ul(t, r, s, l) {
		if (No) {
			var d = cl(t, r, s, l);
			if (d === null) kl(t, r, l, jo, s), jd(t, l);
			else if (yw(d, t, r, s, l)) l.stopPropagation();
			else if (jd(t, l), r & 4 && -1 < gw.indexOf(t)) {
				for (; d !== null;) {
					var m = Ni(d);
					if (m !== null && _d(m), m = cl(t, r, s, l), m === null && kl(t, r, l, jo, s), m === d) break;
					d = m
				}
				d !== null && l.stopPropagation()
			} else kl(t, r, l, null, s)
		}
	}
	var jo = null;

	function cl(t, r, s, l) {
		if (jo = null, t = Za(l), t = Zn(t), t !== null)
			if (r = Xn(t), r === null) t = null;
			else if (s = r.tag, s === 13) {
			if (t = xd(r), t !== null) return t;
			t = null
		} else if (s === 3) {
			if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
			t = null
		} else r !== t && (t = null);
		return jo = t, null
	}

	function Ld(t) {
		switch (t) {
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart":
				return 1;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "toggle":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 4;
			case "message":
				switch (aw()) {
					case rl:
						return 1;
					case Td:
						return 4;
					case To:
					case lw:
						return 16;
					case Cd:
						return 536870912;
					default:
						return 16
				}
			default:
				return 16
		}
	}
	var Tn = null,
		fl = null,
		Mo = null;

	function Id() {
		if (Mo) return Mo;
		var t, r = fl,
			s = r.length,
			l, d = "value" in Tn ? Tn.value : Tn.textContent,
			m = d.length;
		for (t = 0; t < s && r[t] === d[t]; t++);
		var w = s - t;
		for (l = 1; l <= w && r[s - l] === d[m - l]; l++);
		return Mo = d.slice(t, 1 < l ? 1 - l : void 0)
	}

	function Do(t) {
		var r = t.keyCode;
		return "charCode" in t ? (t = t.charCode, t === 0 && r === 13 && (t = 13)) : t = r, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
	}

	function Lo() {
		return !0
	}

	function Fd() {
		return !1
	}

	function mt(t) {
		function r(s, l, d, m, w) {
			this._reactName = s, this._targetInst = d, this.type = l, this.nativeEvent = m, this.target = w, this.currentTarget = null;
			for (var k in t) t.hasOwnProperty(k) && (s = t[k], this[k] = s ? s(m) : m[k]);
			return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? Lo : Fd, this.isPropagationStopped = Fd, this
		}
		return Z(r.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var s = this.nativeEvent;
				s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = Lo)
			},
			stopPropagation: function() {
				var s = this.nativeEvent;
				s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = Lo)
			},
			persist: function() {},
			isPersistent: Lo
		}), r
	}
	var Pr = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function(t) {
				return t.timeStamp || Date.now()
			},
			defaultPrevented: 0,
			isTrusted: 0
		},
		dl = mt(Pr),
		Si = Z({}, Pr, {
			view: 0,
			detail: 0
		}),
		Sw = mt(Si),
		hl, pl, bi, Io = Z({}, Si, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: gl,
			button: 0,
			buttons: 0,
			relatedTarget: function(t) {
				return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
			},
			movementX: function(t) {
				return "movementX" in t ? t.movementX : (t !== bi && (bi && t.type === "mousemove" ? (hl = t.screenX - bi.screenX, pl = t.screenY - bi.screenY) : pl = hl = 0, bi = t), hl)
			},
			movementY: function(t) {
				return "movementY" in t ? t.movementY : pl
			}
		}),
		Vd = mt(Io),
		bw = Z({}, Io, {
			dataTransfer: 0
		}),
		Ew = mt(bw),
		Pw = Z({}, Si, {
			relatedTarget: 0
		}),
		ml = mt(Pw),
		Tw = Z({}, Pr, {
			animationName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		}),
		Cw = mt(Tw),
		kw = Z({}, Pr, {
			clipboardData: function(t) {
				return "clipboardData" in t ? t.clipboardData : window.clipboardData
			}
		}),
		Rw = mt(kw),
		_w = Z({}, Pr, {
			data: 0
		}),
		zd = mt(_w),
		Ow = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified"
		},
		Aw = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta"
		},
		Nw = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey"
		};

	function jw(t) {
		var r = this.nativeEvent;
		return r.getModifierState ? r.getModifierState(t) : (t = Nw[t]) ? !!r[t] : !1
	}

	function gl() {
		return jw
	}
	var Mw = Z({}, Si, {
			key: function(t) {
				if (t.key) {
					var r = Ow[t.key] || t.key;
					if (r !== "Unidentified") return r
				}
				return t.type === "keypress" ? (t = Do(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Aw[t.keyCode] || "Unidentified" : ""
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: gl,
			charCode: function(t) {
				return t.type === "keypress" ? Do(t) : 0
			},
			keyCode: function(t) {
				return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
			},
			which: function(t) {
				return t.type === "keypress" ? Do(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
			}
		}),
		Dw = mt(Mw),
		Lw = Z({}, Io, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0
		}),
		Bd = mt(Lw),
		Iw = Z({}, Si, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: gl
		}),
		Fw = mt(Iw),
		Vw = Z({}, Pr, {
			propertyName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		}),
		zw = mt(Vw),
		Bw = Z({}, Io, {
			deltaX: function(t) {
				return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
			},
			deltaY: function(t) {
				return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
			},
			deltaZ: 0,
			deltaMode: 0
		}),
		Uw = mt(Bw),
		Hw = [9, 13, 27, 32],
		yl = f && "CompositionEvent" in window,
		Ei = null;
	f && "documentMode" in document && (Ei = document.documentMode);
	var Ww = f && "TextEvent" in window && !Ei,
		Ud = f && (!yl || Ei && 8 < Ei && 11 >= Ei),
		Hd = " ",
		Wd = !1;

	function $d(t, r) {
		switch (t) {
			case "keyup":
				return Hw.indexOf(r.keyCode) !== -1;
			case "keydown":
				return r.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1
		}
	}

	function Kd(t) {
		return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
	}
	var Tr = !1;

	function $w(t, r) {
		switch (t) {
			case "compositionend":
				return Kd(r);
			case "keypress":
				return r.which !== 32 ? null : (Wd = !0, Hd);
			case "textInput":
				return t = r.data, t === Hd && Wd ? null : t;
			default:
				return null
		}
	}

	function Kw(t, r) {
		if (Tr) return t === "compositionend" || !yl && $d(t, r) ? (t = Id(), Mo = fl = Tn = null, Tr = !1, t) : null;
		switch (t) {
			case "paste":
				return null;
			case "keypress":
				if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
					if (r.char && 1 < r.char.length) return r.char;
					if (r.which) return String.fromCharCode(r.which)
				}
				return null;
			case "compositionend":
				return Ud && r.locale !== "ko" ? null : r.data;
			default:
				return null
		}
	}
	var Qw = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};

	function Qd(t) {
		var r = t && t.nodeName && t.nodeName.toLowerCase();
		return r === "input" ? !!Qw[t.type] : r === "textarea"
	}

	function qd(t, r, s, l) {
		pd(l), r = Uo(r, "onChange"), 0 < r.length && (s = new dl("onChange", "change", null, s, l), t.push({
			event: s,
			listeners: r
		}))
	}
	var Pi = null,
		Ti = null;

	function qw(t) {
		dh(t, 0)
	}

	function Fo(t) {
		var r = Or(t);
		if (xr(r)) return t
	}

	function Gw(t, r) {
		if (t === "change") return r
	}
	var Gd = !1;
	if (f) {
		var vl;
		if (f) {
			var xl = "oninput" in document;
			if (!xl) {
				var Yd = document.createElement("div");
				Yd.setAttribute("oninput", "return;"), xl = typeof Yd.oninput == "function"
			}
			vl = xl
		} else vl = !1;
		Gd = vl && (!document.documentMode || 9 < document.documentMode)
	}

	function Xd() {
		Pi && (Pi.detachEvent("onpropertychange", Zd), Ti = Pi = null)
	}

	function Zd(t) {
		if (t.propertyName === "value" && Fo(Ti)) {
			var r = [];
			qd(r, Ti, t, Za(t)), vd(qw, r)
		}
	}

	function Yw(t, r, s) {
		t === "focusin" ? (Xd(), Pi = r, Ti = s, Pi.attachEvent("onpropertychange", Zd)) : t === "focusout" && Xd()
	}

	function Xw(t) {
		if (t === "selectionchange" || t === "keyup" || t === "keydown") return Fo(Ti)
	}

	function Zw(t, r) {
		if (t === "click") return Fo(r)
	}

	function Jw(t, r) {
		if (t === "input" || t === "change") return Fo(r)
	}

	function e1(t, r) {
		return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r
	}
	var Lt = typeof Object.is == "function" ? Object.is : e1;

	function Ci(t, r) {
		if (Lt(t, r)) return !0;
		if (typeof t != "object" || t === null || typeof r != "object" || r === null) return !1;
		var s = Object.keys(t),
			l = Object.keys(r);
		if (s.length !== l.length) return !1;
		for (l = 0; l < s.length; l++) {
			var d = s[l];
			if (!p.call(r, d) || !Lt(t[d], r[d])) return !1
		}
		return !0
	}

	function Jd(t) {
		for (; t && t.firstChild;) t = t.firstChild;
		return t
	}

	function eh(t, r) {
		var s = Jd(t);
		t = 0;
		for (var l; s;) {
			if (s.nodeType === 3) {
				if (l = t + s.textContent.length, t <= r && l >= r) return {
					node: s,
					offset: r - t
				};
				t = l
			}
			e: {
				for (; s;) {
					if (s.nextSibling) {
						s = s.nextSibling;
						break e
					}
					s = s.parentNode
				}
				s = void 0
			}
			s = Jd(s)
		}
	}

	function th(t, r) {
		return t && r ? t === r ? !0 : t && t.nodeType === 3 ? !1 : r && r.nodeType === 3 ? th(t, r.parentNode) : "contains" in t ? t.contains(r) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(r) & 16) : !1 : !1
	}

	function nh() {
		for (var t = window, r = sn(); r instanceof t.HTMLIFrameElement;) {
			try {
				var s = typeof r.contentWindow.location.href == "string"
			} catch {
				s = !1
			}
			if (s) t = r.contentWindow;
			else break;
			r = sn(t.document)
		}
		return r
	}

	function wl(t) {
		var r = t && t.nodeName && t.nodeName.toLowerCase();
		return r && (r === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || r === "textarea" || t.contentEditable === "true")
	}

	function t1(t) {
		var r = nh(),
			s = t.focusedElem,
			l = t.selectionRange;
		if (r !== s && s && s.ownerDocument && th(s.ownerDocument.documentElement, s)) {
			if (l !== null && wl(s)) {
				if (r = l.start, t = l.end, t === void 0 && (t = r), "selectionStart" in s) s.selectionStart = r, s.selectionEnd = Math.min(t, s.value.length);
				else if (t = (r = s.ownerDocument || document) && r.defaultView || window, t.getSelection) {
					t = t.getSelection();
					var d = s.textContent.length,
						m = Math.min(l.start, d);
					l = l.end === void 0 ? m : Math.min(l.end, d), !t.extend && m > l && (d = l, l = m, m = d), d = eh(s, m);
					var w = eh(s, l);
					d && w && (t.rangeCount !== 1 || t.anchorNode !== d.node || t.anchorOffset !== d.offset || t.focusNode !== w.node || t.focusOffset !== w.offset) && (r = r.createRange(), r.setStart(d.node, d.offset), t.removeAllRanges(), m > l ? (t.addRange(r), t.extend(w.node, w.offset)) : (r.setEnd(w.node, w.offset), t.addRange(r)))
				}
			}
			for (r = [], t = s; t = t.parentNode;) t.nodeType === 1 && r.push({
				element: t,
				left: t.scrollLeft,
				top: t.scrollTop
			});
			for (typeof s.focus == "function" && s.focus(), s = 0; s < r.length; s++) t = r[s], t.element.scrollLeft = t.left, t.element.scrollTop = t.top
		}
	}
	var n1 = f && "documentMode" in document && 11 >= document.documentMode,
		Cr = null,
		Sl = null,
		ki = null,
		bl = !1;

	function rh(t, r, s) {
		var l = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
		bl || Cr == null || Cr !== sn(l) || (l = Cr, "selectionStart" in l && wl(l) ? l = {
			start: l.selectionStart,
			end: l.selectionEnd
		} : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
			anchorNode: l.anchorNode,
			anchorOffset: l.anchorOffset,
			focusNode: l.focusNode,
			focusOffset: l.focusOffset
		}), ki && Ci(ki, l) || (ki = l, l = Uo(Sl, "onSelect"), 0 < l.length && (r = new dl("onSelect", "select", null, r, s), t.push({
			event: r,
			listeners: l
		}), r.target = Cr)))
	}

	function Vo(t, r) {
		var s = {};
		return s[t.toLowerCase()] = r.toLowerCase(), s["Webkit" + t] = "webkit" + r, s["Moz" + t] = "moz" + r, s
	}
	var kr = {
			animationend: Vo("Animation", "AnimationEnd"),
			animationiteration: Vo("Animation", "AnimationIteration"),
			animationstart: Vo("Animation", "AnimationStart"),
			transitionend: Vo("Transition", "TransitionEnd")
		},
		El = {},
		ih = {};
	f && (ih = document.createElement("div").style, "AnimationEvent" in window || (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation), "TransitionEvent" in window || delete kr.transitionend.transition);

	function zo(t) {
		if (El[t]) return El[t];
		if (!kr[t]) return t;
		var r = kr[t],
			s;
		for (s in r)
			if (r.hasOwnProperty(s) && s in ih) return El[t] = r[s];
		return t
	}
	var oh = zo("animationend"),
		sh = zo("animationiteration"),
		ah = zo("animationstart"),
		lh = zo("transitionend"),
		uh = new Map,
		ch = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

	function Cn(t, r) {
		uh.set(t, r), u(r, [t])
	}
	for (var Pl = 0; Pl < ch.length; Pl++) {
		var Tl = ch[Pl],
			r1 = Tl.toLowerCase(),
			i1 = Tl[0].toUpperCase() + Tl.slice(1);
		Cn(r1, "on" + i1)
	}
	Cn(oh, "onAnimationEnd"), Cn(sh, "onAnimationIteration"), Cn(ah, "onAnimationStart"), Cn("dblclick", "onDoubleClick"), Cn("focusin", "onFocus"), Cn("focusout", "onBlur"), Cn(lh, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var Ri = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
		o1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ri));

	function fh(t, r, s) {
		var l = t.type || "unknown-event";
		t.currentTarget = s, rw(l, r, void 0, t), t.currentTarget = null
	}

	function dh(t, r) {
		r = (r & 4) !== 0;
		for (var s = 0; s < t.length; s++) {
			var l = t[s],
				d = l.event;
			l = l.listeners;
			e: {
				var m = void 0;
				if (r)
					for (var w = l.length - 1; 0 <= w; w--) {
						var k = l[w],
							O = k.instance,
							z = k.currentTarget;
						if (k = k.listener, O !== m && d.isPropagationStopped()) break e;
						fh(d, k, z), m = O
					} else
						for (w = 0; w < l.length; w++) {
							if (k = l[w], O = k.instance, z = k.currentTarget, k = k.listener, O !== m && d.isPropagationStopped()) break e;
							fh(d, k, z), m = O
						}
			}
		}
		if (Po) throw t = nl, Po = !1, nl = null, t
	}

	function Ce(t, r) {
		var s = r[jl];
		s === void 0 && (s = r[jl] = new Set);
		var l = t + "__bubble";
		s.has(l) || (hh(r, t, 2, !1), s.add(l))
	}

	function Cl(t, r, s) {
		var l = 0;
		r && (l |= 4), hh(s, t, l, r)
	}
	var Bo = "_reactListening" + Math.random().toString(36).slice(2);

	function _i(t) {
		if (!t[Bo]) {
			t[Bo] = !0, o.forEach(function(s) {
				s !== "selectionchange" && (o1.has(s) || Cl(s, !1, t), Cl(s, !0, t))
			});
			var r = t.nodeType === 9 ? t : t.ownerDocument;
			r === null || r[Bo] || (r[Bo] = !0, Cl("selectionchange", !1, r))
		}
	}

	function hh(t, r, s, l) {
		switch (Ld(r)) {
			case 1:
				var d = xw;
				break;
			case 4:
				d = ww;
				break;
			default:
				d = ul
		}
		s = d.bind(null, r, s, t), d = void 0, !tl || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (d = !0), l ? d !== void 0 ? t.addEventListener(r, s, {
			capture: !0,
			passive: d
		}) : t.addEventListener(r, s, !0) : d !== void 0 ? t.addEventListener(r, s, {
			passive: d
		}) : t.addEventListener(r, s, !1)
	}

	function kl(t, r, s, l, d) {
		var m = l;
		if ((r & 1) === 0 && (r & 2) === 0 && l !== null) e: for (;;) {
			if (l === null) return;
			var w = l.tag;
			if (w === 3 || w === 4) {
				var k = l.stateNode.containerInfo;
				if (k === d || k.nodeType === 8 && k.parentNode === d) break;
				if (w === 4)
					for (w = l.return; w !== null;) {
						var O = w.tag;
						if ((O === 3 || O === 4) && (O = w.stateNode.containerInfo, O === d || O.nodeType === 8 && O.parentNode === d)) return;
						w = w.return
					}
				for (; k !== null;) {
					if (w = Zn(k), w === null) return;
					if (O = w.tag, O === 5 || O === 6) {
						l = m = w;
						continue e
					}
					k = k.parentNode
				}
			}
			l = l.return
		}
		vd(function() {
			var z = m,
				G = Za(s),
				Y = [];
			e: {
				var Q = uh.get(t);
				if (Q !== void 0) {
					var ne = dl,
						ie = t;
					switch (t) {
						case "keypress":
							if (Do(s) === 0) break e;
						case "keydown":
						case "keyup":
							ne = Dw;
							break;
						case "focusin":
							ie = "focus", ne = ml;
							break;
						case "focusout":
							ie = "blur", ne = ml;
							break;
						case "beforeblur":
						case "afterblur":
							ne = ml;
							break;
						case "click":
							if (s.button === 2) break e;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							ne = Vd;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							ne = Ew;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							ne = Fw;
							break;
						case oh:
						case sh:
						case ah:
							ne = Cw;
							break;
						case lh:
							ne = zw;
							break;
						case "scroll":
							ne = Sw;
							break;
						case "wheel":
							ne = Uw;
							break;
						case "copy":
						case "cut":
						case "paste":
							ne = Rw;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							ne = Bd
					}
					var se = (r & 4) !== 0,
						Ve = !se && t === "scroll",
						F = se ? Q !== null ? Q + "Capture" : null : Q;
					se = [];
					for (var N = z, V; N !== null;) {
						V = N;
						var J = V.stateNode;
						if (V.tag === 5 && J !== null && (V = J, F !== null && (J = fi(N, F), J != null && se.push(Oi(N, J, V)))), Ve) break;
						N = N.return
					}
					0 < se.length && (Q = new ne(Q, ie, null, s, G), Y.push({
						event: Q,
						listeners: se
					}))
				}
			}
			if ((r & 7) === 0) {
				e: {
					if (Q = t === "mouseover" || t === "pointerover", ne = t === "mouseout" || t === "pointerout", Q && s !== Xa && (ie = s.relatedTarget || s.fromElement) && (Zn(ie) || ie[an])) break e;
					if ((ne || Q) && (Q = G.window === G ? G : (Q = G.ownerDocument) ? Q.defaultView || Q.parentWindow : window, ne ? (ie = s.relatedTarget || s.toElement, ne = z, ie = ie ? Zn(ie) : null, ie !== null && (Ve = Xn(ie), ie !== Ve || ie.tag !== 5 && ie.tag !== 6) && (ie = null)) : (ne = null, ie = z), ne !== ie)) {
						if (se = Vd, J = "onMouseLeave", F = "onMouseEnter", N = "mouse", (t === "pointerout" || t === "pointerover") && (se = Bd, J = "onPointerLeave", F = "onPointerEnter", N = "pointer"), Ve = ne == null ? Q : Or(ne), V = ie == null ? Q : Or(ie), Q = new se(J, N + "leave", ne, s, G), Q.target = Ve, Q.relatedTarget = V, J = null, Zn(G) === z && (se = new se(F, N + "enter", ie, s, G), se.target = V, se.relatedTarget = Ve, J = se), Ve = J, ne && ie) t: {
							for (se = ne, F = ie, N = 0, V = se; V; V = Rr(V)) N++;
							for (V = 0, J = F; J; J = Rr(J)) V++;
							for (; 0 < N - V;) se = Rr(se),
							N--;
							for (; 0 < V - N;) F = Rr(F),
							V--;
							for (; N--;) {
								if (se === F || F !== null && se === F.alternate) break t;
								se = Rr(se), F = Rr(F)
							}
							se = null
						}
						else se = null;
						ne !== null && ph(Y, Q, ne, se, !1), ie !== null && Ve !== null && ph(Y, Ve, ie, se, !0)
					}
				}
				e: {
					if (Q = z ? Or(z) : window, ne = Q.nodeName && Q.nodeName.toLowerCase(), ne === "select" || ne === "input" && Q.type === "file") var ae = Gw;
					else if (Qd(Q))
						if (Gd) ae = Jw;
						else {
							ae = Xw;
							var fe = Yw
						}
					else(ne = Q.nodeName) && ne.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (ae = Zw);
					if (ae && (ae = ae(t, z))) {
						qd(Y, ae, s, G);
						break e
					}
					fe && fe(t, Q, z),
					t === "focusout" && (fe = Q._wrapperState) && fe.controlled && Q.type === "number" && Ka(Q, "number", Q.value)
				}
				switch (fe = z ? Or(z) : window, t) {
					case "focusin":
						(Qd(fe) || fe.contentEditable === "true") && (Cr = fe, Sl = z, ki = null);
						break;
					case "focusout":
						ki = Sl = Cr = null;
						break;
					case "mousedown":
						bl = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						bl = !1, rh(Y, s, G);
						break;
					case "selectionchange":
						if (n1) break;
					case "keydown":
					case "keyup":
						rh(Y, s, G)
				}
				var de;
				if (yl) e: {
					switch (t) {
						case "compositionstart":
							var me = "onCompositionStart";
							break e;
						case "compositionend":
							me = "onCompositionEnd";
							break e;
						case "compositionupdate":
							me = "onCompositionUpdate";
							break e
					}
					me = void 0
				}
				else Tr ? $d(t, s) && (me = "onCompositionEnd") : t === "keydown" && s.keyCode === 229 && (me = "onCompositionStart");me && (Ud && s.locale !== "ko" && (Tr || me !== "onCompositionStart" ? me === "onCompositionEnd" && Tr && (de = Id()) : (Tn = G, fl = "value" in Tn ? Tn.value : Tn.textContent, Tr = !0)), fe = Uo(z, me), 0 < fe.length && (me = new zd(me, t, null, s, G), Y.push({
					event: me,
					listeners: fe
				}), de ? me.data = de : (de = Kd(s), de !== null && (me.data = de)))),
				(de = Ww ? $w(t, s) : Kw(t, s)) && (z = Uo(z, "onBeforeInput"), 0 < z.length && (G = new zd("onBeforeInput", "beforeinput", null, s, G), Y.push({
					event: G,
					listeners: z
				}), G.data = de))
			}
			dh(Y, r)
		})
	}

	function Oi(t, r, s) {
		return {
			instance: t,
			listener: r,
			currentTarget: s
		}
	}

	function Uo(t, r) {
		for (var s = r + "Capture", l = []; t !== null;) {
			var d = t,
				m = d.stateNode;
			d.tag === 5 && m !== null && (d = m, m = fi(t, s), m != null && l.unshift(Oi(t, m, d)), m = fi(t, r), m != null && l.push(Oi(t, m, d))), t = t.return
		}
		return l
	}

	function Rr(t) {
		if (t === null) return null;
		do t = t.return; while (t && t.tag !== 5);
		return t || null
	}

	function ph(t, r, s, l, d) {
		for (var m = r._reactName, w = []; s !== null && s !== l;) {
			var k = s,
				O = k.alternate,
				z = k.stateNode;
			if (O !== null && O === l) break;
			k.tag === 5 && z !== null && (k = z, d ? (O = fi(s, m), O != null && w.unshift(Oi(s, O, k))) : d || (O = fi(s, m), O != null && w.push(Oi(s, O, k)))), s = s.return
		}
		w.length !== 0 && t.push({
			event: r,
			listeners: w
		})
	}
	var s1 = /\r\n?/g,
		a1 = /\u0000|\uFFFD/g;

	function mh(t) {
		return (typeof t == "string" ? t : "" + t).replace(s1, `
`).replace(a1, "")
	}

	function Ho(t, r, s) {
		if (r = mh(r), mh(t) !== r && s) throw Error(i(425))
	}

	function Wo() {}
	var Rl = null,
		_l = null;

	function Ol(t, r) {
		return t === "textarea" || t === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null
	}
	var Al = typeof setTimeout == "function" ? setTimeout : void 0,
		l1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
		gh = typeof Promise == "function" ? Promise : void 0,
		u1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof gh < "u" ? function(t) {
			return gh.resolve(null).then(t).catch(c1)
		} : Al;

	function c1(t) {
		setTimeout(function() {
			throw t
		})
	}

	function Nl(t, r) {
		var s = r,
			l = 0;
		do {
			var d = s.nextSibling;
			if (t.removeChild(s), d && d.nodeType === 8)
				if (s = d.data, s === "/$") {
					if (l === 0) {
						t.removeChild(d), wi(r);
						return
					}
					l--
				} else s !== "$" && s !== "$?" && s !== "$!" || l++;
			s = d
		} while (s);
		wi(r)
	}

	function kn(t) {
		for (; t != null; t = t.nextSibling) {
			var r = t.nodeType;
			if (r === 1 || r === 3) break;
			if (r === 8) {
				if (r = t.data, r === "$" || r === "$!" || r === "$?") break;
				if (r === "/$") return null
			}
		}
		return t
	}

	function yh(t) {
		t = t.previousSibling;
		for (var r = 0; t;) {
			if (t.nodeType === 8) {
				var s = t.data;
				if (s === "$" || s === "$!" || s === "$?") {
					if (r === 0) return t;
					r--
				} else s === "/$" && r++
			}
			t = t.previousSibling
		}
		return null
	}
	var _r = Math.random().toString(36).slice(2),
		qt = "__reactFiber$" + _r,
		Ai = "__reactProps$" + _r,
		an = "__reactContainer$" + _r,
		jl = "__reactEvents$" + _r,
		f1 = "__reactListeners$" + _r,
		d1 = "__reactHandles$" + _r;

	function Zn(t) {
		var r = t[qt];
		if (r) return r;
		for (var s = t.parentNode; s;) {
			if (r = s[an] || s[qt]) {
				if (s = r.alternate, r.child !== null || s !== null && s.child !== null)
					for (t = yh(t); t !== null;) {
						if (s = t[qt]) return s;
						t = yh(t)
					}
				return r
			}
			t = s, s = t.parentNode
		}
		return null
	}

	function Ni(t) {
		return t = t[qt] || t[an], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
	}

	function Or(t) {
		if (t.tag === 5 || t.tag === 6) return t.stateNode;
		throw Error(i(33))
	}

	function $o(t) {
		return t[Ai] || null
	}
	var Ml = [],
		Ar = -1;

	function Rn(t) {
		return {
			current: t
		}
	}

	function ke(t) {
		0 > Ar || (t.current = Ml[Ar], Ml[Ar] = null, Ar--)
	}

	function Te(t, r) {
		Ar++, Ml[Ar] = t.current, t.current = r
	}
	var _n = {},
		Ze = Rn(_n),
		at = Rn(!1),
		Jn = _n;

	function Nr(t, r) {
		var s = t.type.contextTypes;
		if (!s) return _n;
		var l = t.stateNode;
		if (l && l.__reactInternalMemoizedUnmaskedChildContext === r) return l.__reactInternalMemoizedMaskedChildContext;
		var d = {},
			m;
		for (m in s) d[m] = r[m];
		return l && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = r, t.__reactInternalMemoizedMaskedChildContext = d), d
	}

	function lt(t) {
		return t = t.childContextTypes, t != null
	}

	function Ko() {
		ke(at), ke(Ze)
	}

	function vh(t, r, s) {
		if (Ze.current !== _n) throw Error(i(168));
		Te(Ze, r), Te(at, s)
	}

	function xh(t, r, s) {
		var l = t.stateNode;
		if (r = r.childContextTypes, typeof l.getChildContext != "function") return s;
		l = l.getChildContext();
		for (var d in l)
			if (!(d in r)) throw Error(i(108, ge(t) || "Unknown", d));
		return Z({}, s, l)
	}

	function Qo(t) {
		return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || _n, Jn = Ze.current, Te(Ze, t), Te(at, at.current), !0
	}

	function wh(t, r, s) {
		var l = t.stateNode;
		if (!l) throw Error(i(169));
		s ? (t = xh(t, r, Jn), l.__reactInternalMemoizedMergedChildContext = t, ke(at), ke(Ze), Te(Ze, t)) : ke(at), Te(at, s)
	}
	var ln = null,
		qo = !1,
		Dl = !1;

	function Sh(t) {
		ln === null ? ln = [t] : ln.push(t)
	}

	function h1(t) {
		qo = !0, Sh(t)
	}

	function On() {
		if (!Dl && ln !== null) {
			Dl = !0;
			var t = 0,
				r = Pe;
			try {
				var s = ln;
				for (Pe = 1; t < s.length; t++) {
					var l = s[t];
					do l = l(!0); while (l !== null)
				}
				ln = null, qo = !1
			} catch (d) {
				throw ln !== null && (ln = ln.slice(t + 1)), Ed(rl, On), d
			} finally {
				Pe = r, Dl = !1
			}
		}
		return null
	}
	var jr = [],
		Mr = 0,
		Go = null,
		Yo = 0,
		Ct = [],
		kt = 0,
		er = null,
		un = 1,
		cn = "";

	function tr(t, r) {
		jr[Mr++] = Yo, jr[Mr++] = Go, Go = t, Yo = r
	}

	function bh(t, r, s) {
		Ct[kt++] = un, Ct[kt++] = cn, Ct[kt++] = er, er = t;
		var l = un;
		t = cn;
		var d = 32 - Dt(l) - 1;
		l &= ~(1 << d), s += 1;
		var m = 32 - Dt(r) + d;
		if (30 < m) {
			var w = d - d % 5;
			m = (l & (1 << w) - 1).toString(32), l >>= w, d -= w, un = 1 << 32 - Dt(r) + d | s << d | l, cn = m + t
		} else un = 1 << m | s << d | l, cn = t
	}

	function Ll(t) {
		t.return !== null && (tr(t, 1), bh(t, 1, 0))
	}

	function Il(t) {
		for (; t === Go;) Go = jr[--Mr], jr[Mr] = null, Yo = jr[--Mr], jr[Mr] = null;
		for (; t === er;) er = Ct[--kt], Ct[kt] = null, cn = Ct[--kt], Ct[kt] = null, un = Ct[--kt], Ct[kt] = null
	}
	var gt = null,
		yt = null,
		Oe = !1,
		It = null;

	function Eh(t, r) {
		var s = At(5, null, null, 0);
		s.elementType = "DELETED", s.stateNode = r, s.return = t, r = t.deletions, r === null ? (t.deletions = [s], t.flags |= 16) : r.push(s)
	}

	function Ph(t, r) {
		switch (t.tag) {
			case 5:
				var s = t.type;
				return r = r.nodeType !== 1 || s.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (t.stateNode = r, gt = t, yt = kn(r.firstChild), !0) : !1;
			case 6:
				return r = t.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (t.stateNode = r, gt = t, yt = null, !0) : !1;
			case 13:
				return r = r.nodeType !== 8 ? null : r, r !== null ? (s = er !== null ? {
					id: un,
					overflow: cn
				} : null, t.memoizedState = {
					dehydrated: r,
					treeContext: s,
					retryLane: 1073741824
				}, s = At(18, null, null, 0), s.stateNode = r, s.return = t, t.child = s, gt = t, yt = null, !0) : !1;
			default:
				return !1
		}
	}

	function Fl(t) {
		return (t.mode & 1) !== 0 && (t.flags & 128) === 0
	}

	function Vl(t) {
		if (Oe) {
			var r = yt;
			if (r) {
				var s = r;
				if (!Ph(t, r)) {
					if (Fl(t)) throw Error(i(418));
					r = kn(s.nextSibling);
					var l = gt;
					r && Ph(t, r) ? Eh(l, s) : (t.flags = t.flags & -4097 | 2, Oe = !1, gt = t)
				}
			} else {
				if (Fl(t)) throw Error(i(418));
				t.flags = t.flags & -4097 | 2, Oe = !1, gt = t
			}
		}
	}

	function Th(t) {
		for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;) t = t.return;
		gt = t
	}

	function Xo(t) {
		if (t !== gt) return !1;
		if (!Oe) return Th(t), Oe = !0, !1;
		var r;
		if ((r = t.tag !== 3) && !(r = t.tag !== 5) && (r = t.type, r = r !== "head" && r !== "body" && !Ol(t.type, t.memoizedProps)), r && (r = yt)) {
			if (Fl(t)) throw Ch(), Error(i(418));
			for (; r;) Eh(t, r), r = kn(r.nextSibling)
		}
		if (Th(t), t.tag === 13) {
			if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(i(317));
			e: {
				for (t = t.nextSibling, r = 0; t;) {
					if (t.nodeType === 8) {
						var s = t.data;
						if (s === "/$") {
							if (r === 0) {
								yt = kn(t.nextSibling);
								break e
							}
							r--
						} else s !== "$" && s !== "$!" && s !== "$?" || r++
					}
					t = t.nextSibling
				}
				yt = null
			}
		} else yt = gt ? kn(t.stateNode.nextSibling) : null;
		return !0
	}

	function Ch() {
		for (var t = yt; t;) t = kn(t.nextSibling)
	}

	function Dr() {
		yt = gt = null, Oe = !1
	}

	function zl(t) {
		It === null ? It = [t] : It.push(t)
	}
	var p1 = A.ReactCurrentBatchConfig;

	function ji(t, r, s) {
		if (t = s.ref, t !== null && typeof t != "function" && typeof t != "object") {
			if (s._owner) {
				if (s = s._owner, s) {
					if (s.tag !== 1) throw Error(i(309));
					var l = s.stateNode
				}
				if (!l) throw Error(i(147, t));
				var d = l,
					m = "" + t;
				return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(w) {
					var k = d.refs;
					w === null ? delete k[m] : k[m] = w
				}, r._stringRef = m, r)
			}
			if (typeof t != "string") throw Error(i(284));
			if (!s._owner) throw Error(i(290, t))
		}
		return t
	}

	function Zo(t, r) {
		throw t = Object.prototype.toString.call(r), Error(i(31, t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t))
	}

	function kh(t) {
		var r = t._init;
		return r(t._payload)
	}

	function Rh(t) {
		function r(F, N) {
			if (t) {
				var V = F.deletions;
				V === null ? (F.deletions = [N], F.flags |= 16) : V.push(N)
			}
		}

		function s(F, N) {
			if (!t) return null;
			for (; N !== null;) r(F, N), N = N.sibling;
			return null
		}

		function l(F, N) {
			for (F = new Map; N !== null;) N.key !== null ? F.set(N.key, N) : F.set(N.index, N), N = N.sibling;
			return F
		}

		function d(F, N) {
			return F = Fn(F, N), F.index = 0, F.sibling = null, F
		}

		function m(F, N, V) {
			return F.index = V, t ? (V = F.alternate, V !== null ? (V = V.index, V < N ? (F.flags |= 2, N) : V) : (F.flags |= 2, N)) : (F.flags |= 1048576, N)
		}

		function w(F) {
			return t && F.alternate === null && (F.flags |= 2), F
		}

		function k(F, N, V, J) {
			return N === null || N.tag !== 6 ? (N = Au(V, F.mode, J), N.return = F, N) : (N = d(N, V), N.return = F, N)
		}

		function O(F, N, V, J) {
			var ae = V.type;
			return ae === I ? G(F, N, V.props.children, J, V.key) : N !== null && (N.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === oe && kh(ae) === N.type) ? (J = d(N, V.props), J.ref = ji(F, N, V), J.return = F, J) : (J = bs(V.type, V.key, V.props, null, F.mode, J), J.ref = ji(F, N, V), J.return = F, J)
		}

		function z(F, N, V, J) {
			return N === null || N.tag !== 4 || N.stateNode.containerInfo !== V.containerInfo || N.stateNode.implementation !== V.implementation ? (N = Nu(V, F.mode, J), N.return = F, N) : (N = d(N, V.children || []), N.return = F, N)
		}

		function G(F, N, V, J, ae) {
			return N === null || N.tag !== 7 ? (N = ur(V, F.mode, J, ae), N.return = F, N) : (N = d(N, V), N.return = F, N)
		}

		function Y(F, N, V) {
			if (typeof N == "string" && N !== "" || typeof N == "number") return N = Au("" + N, F.mode, V), N.return = F, N;
			if (typeof N == "object" && N !== null) {
				switch (N.$$typeof) {
					case M:
						return V = bs(N.type, N.key, N.props, null, F.mode, V), V.ref = ji(F, null, N), V.return = F, V;
					case L:
						return N = Nu(N, F.mode, V), N.return = F, N;
					case oe:
						var J = N._init;
						return Y(F, J(N._payload), V)
				}
				if (li(N) || ee(N)) return N = ur(N, F.mode, V, null), N.return = F, N;
				Zo(F, N)
			}
			return null
		}

		function Q(F, N, V, J) {
			var ae = N !== null ? N.key : null;
			if (typeof V == "string" && V !== "" || typeof V == "number") return ae !== null ? null : k(F, N, "" + V, J);
			if (typeof V == "object" && V !== null) {
				switch (V.$$typeof) {
					case M:
						return V.key === ae ? O(F, N, V, J) : null;
					case L:
						return V.key === ae ? z(F, N, V, J) : null;
					case oe:
						return ae = V._init, Q(F, N, ae(V._payload), J)
				}
				if (li(V) || ee(V)) return ae !== null ? null : G(F, N, V, J, null);
				Zo(F, V)
			}
			return null
		}

		function ne(F, N, V, J, ae) {
			if (typeof J == "string" && J !== "" || typeof J == "number") return F = F.get(V) || null, k(N, F, "" + J, ae);
			if (typeof J == "object" && J !== null) {
				switch (J.$$typeof) {
					case M:
						return F = F.get(J.key === null ? V : J.key) || null, O(N, F, J, ae);
					case L:
						return F = F.get(J.key === null ? V : J.key) || null, z(N, F, J, ae);
					case oe:
						var fe = J._init;
						return ne(F, N, V, fe(J._payload), ae)
				}
				if (li(J) || ee(J)) return F = F.get(V) || null, G(N, F, J, ae, null);
				Zo(N, J)
			}
			return null
		}

		function ie(F, N, V, J) {
			for (var ae = null, fe = null, de = N, me = N = 0, Qe = null; de !== null && me < V.length; me++) {
				de.index > me ? (Qe = de, de = null) : Qe = de.sibling;
				var Ee = Q(F, de, V[me], J);
				if (Ee === null) {
					de === null && (de = Qe);
					break
				}
				t && de && Ee.alternate === null && r(F, de), N = m(Ee, N, me), fe === null ? ae = Ee : fe.sibling = Ee, fe = Ee, de = Qe
			}
			if (me === V.length) return s(F, de), Oe && tr(F, me), ae;
			if (de === null) {
				for (; me < V.length; me++) de = Y(F, V[me], J), de !== null && (N = m(de, N, me), fe === null ? ae = de : fe.sibling = de, fe = de);
				return Oe && tr(F, me), ae
			}
			for (de = l(F, de); me < V.length; me++) Qe = ne(de, F, me, V[me], J), Qe !== null && (t && Qe.alternate !== null && de.delete(Qe.key === null ? me : Qe.key), N = m(Qe, N, me), fe === null ? ae = Qe : fe.sibling = Qe, fe = Qe);
			return t && de.forEach(function(Vn) {
				return r(F, Vn)
			}), Oe && tr(F, me), ae
		}

		function se(F, N, V, J) {
			var ae = ee(V);
			if (typeof ae != "function") throw Error(i(150));
			if (V = ae.call(V), V == null) throw Error(i(151));
			for (var fe = ae = null, de = N, me = N = 0, Qe = null, Ee = V.next(); de !== null && !Ee.done; me++, Ee = V.next()) {
				de.index > me ? (Qe = de, de = null) : Qe = de.sibling;
				var Vn = Q(F, de, Ee.value, J);
				if (Vn === null) {
					de === null && (de = Qe);
					break
				}
				t && de && Vn.alternate === null && r(F, de), N = m(Vn, N, me), fe === null ? ae = Vn : fe.sibling = Vn, fe = Vn, de = Qe
			}
			if (Ee.done) return s(F, de), Oe && tr(F, me), ae;
			if (de === null) {
				for (; !Ee.done; me++, Ee = V.next()) Ee = Y(F, Ee.value, J), Ee !== null && (N = m(Ee, N, me), fe === null ? ae = Ee : fe.sibling = Ee, fe = Ee);
				return Oe && tr(F, me), ae
			}
			for (de = l(F, de); !Ee.done; me++, Ee = V.next()) Ee = ne(de, F, me, Ee.value, J), Ee !== null && (t && Ee.alternate !== null && de.delete(Ee.key === null ? me : Ee.key), N = m(Ee, N, me), fe === null ? ae = Ee : fe.sibling = Ee, fe = Ee);
			return t && de.forEach(function(Q1) {
				return r(F, Q1)
			}), Oe && tr(F, me), ae
		}

		function Ve(F, N, V, J) {
			if (typeof V == "object" && V !== null && V.type === I && V.key === null && (V = V.props.children), typeof V == "object" && V !== null) {
				switch (V.$$typeof) {
					case M:
						e: {
							for (var ae = V.key, fe = N; fe !== null;) {
								if (fe.key === ae) {
									if (ae = V.type, ae === I) {
										if (fe.tag === 7) {
											s(F, fe.sibling), N = d(fe, V.props.children), N.return = F, F = N;
											break e
										}
									} else if (fe.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === oe && kh(ae) === fe.type) {
										s(F, fe.sibling), N = d(fe, V.props), N.ref = ji(F, fe, V), N.return = F, F = N;
										break e
									}
									s(F, fe);
									break
								} else r(F, fe);
								fe = fe.sibling
							}
							V.type === I ? (N = ur(V.props.children, F.mode, J, V.key), N.return = F, F = N) : (J = bs(V.type, V.key, V.props, null, F.mode, J), J.ref = ji(F, N, V), J.return = F, F = J)
						}
						return w(F);
					case L:
						e: {
							for (fe = V.key; N !== null;) {
								if (N.key === fe)
									if (N.tag === 4 && N.stateNode.containerInfo === V.containerInfo && N.stateNode.implementation === V.implementation) {
										s(F, N.sibling), N = d(N, V.children || []), N.return = F, F = N;
										break e
									} else {
										s(F, N);
										break
									}
								else r(F, N);
								N = N.sibling
							}
							N = Nu(V, F.mode, J),
							N.return = F,
							F = N
						}
						return w(F);
					case oe:
						return fe = V._init, Ve(F, N, fe(V._payload), J)
				}
				if (li(V)) return ie(F, N, V, J);
				if (ee(V)) return se(F, N, V, J);
				Zo(F, V)
			}
			return typeof V == "string" && V !== "" || typeof V == "number" ? (V = "" + V, N !== null && N.tag === 6 ? (s(F, N.sibling), N = d(N, V), N.return = F, F = N) : (s(F, N), N = Au(V, F.mode, J), N.return = F, F = N), w(F)) : s(F, N)
		}
		return Ve
	}
	var Lr = Rh(!0),
		_h = Rh(!1),
		Jo = Rn(null),
		es = null,
		Ir = null,
		Bl = null;

	function Ul() {
		Bl = Ir = es = null
	}

	function Hl(t) {
		var r = Jo.current;
		ke(Jo), t._currentValue = r
	}

	function Wl(t, r, s) {
		for (; t !== null;) {
			var l = t.alternate;
			if ((t.childLanes & r) !== r ? (t.childLanes |= r, l !== null && (l.childLanes |= r)) : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r), t === s) break;
			t = t.return
		}
	}

	function Fr(t, r) {
		es = t, Bl = Ir = null, t = t.dependencies, t !== null && t.firstContext !== null && ((t.lanes & r) !== 0 && (ut = !0), t.firstContext = null)
	}

	function Rt(t) {
		var r = t._currentValue;
		if (Bl !== t)
			if (t = {
					context: t,
					memoizedValue: r,
					next: null
				}, Ir === null) {
				if (es === null) throw Error(i(308));
				Ir = t, es.dependencies = {
					lanes: 0,
					firstContext: t
				}
			} else Ir = Ir.next = t;
		return r
	}
	var nr = null;

	function $l(t) {
		nr === null ? nr = [t] : nr.push(t)
	}

	function Oh(t, r, s, l) {
		var d = r.interleaved;
		return d === null ? (s.next = s, $l(r)) : (s.next = d.next, d.next = s), r.interleaved = s, fn(t, l)
	}

	function fn(t, r) {
		t.lanes |= r;
		var s = t.alternate;
		for (s !== null && (s.lanes |= r), s = t, t = t.return; t !== null;) t.childLanes |= r, s = t.alternate, s !== null && (s.childLanes |= r), s = t, t = t.return;
		return s.tag === 3 ? s.stateNode : null
	}
	var An = !1;

	function Kl(t) {
		t.updateQueue = {
			baseState: t.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				interleaved: null,
				lanes: 0
			},
			effects: null
		}
	}

	function Ah(t, r) {
		t = t.updateQueue, r.updateQueue === t && (r.updateQueue = {
			baseState: t.baseState,
			firstBaseUpdate: t.firstBaseUpdate,
			lastBaseUpdate: t.lastBaseUpdate,
			shared: t.shared,
			effects: t.effects
		})
	}

	function dn(t, r) {
		return {
			eventTime: t,
			lane: r,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		}
	}

	function Nn(t, r, s) {
		var l = t.updateQueue;
		if (l === null) return null;
		if (l = l.shared, (be & 2) !== 0) {
			var d = l.pending;
			return d === null ? r.next = r : (r.next = d.next, d.next = r), l.pending = r, fn(t, s)
		}
		return d = l.interleaved, d === null ? (r.next = r, $l(l)) : (r.next = d.next, d.next = r), l.interleaved = r, fn(t, s)
	}

	function ts(t, r, s) {
		if (r = r.updateQueue, r !== null && (r = r.shared, (s & 4194240) !== 0)) {
			var l = r.lanes;
			l &= t.pendingLanes, s |= l, r.lanes = s, sl(t, s)
		}
	}

	function Nh(t, r) {
		var s = t.updateQueue,
			l = t.alternate;
		if (l !== null && (l = l.updateQueue, s === l)) {
			var d = null,
				m = null;
			if (s = s.firstBaseUpdate, s !== null) {
				do {
					var w = {
						eventTime: s.eventTime,
						lane: s.lane,
						tag: s.tag,
						payload: s.payload,
						callback: s.callback,
						next: null
					};
					m === null ? d = m = w : m = m.next = w, s = s.next
				} while (s !== null);
				m === null ? d = m = r : m = m.next = r
			} else d = m = r;
			s = {
				baseState: l.baseState,
				firstBaseUpdate: d,
				lastBaseUpdate: m,
				shared: l.shared,
				effects: l.effects
			}, t.updateQueue = s;
			return
		}
		t = s.lastBaseUpdate, t === null ? s.firstBaseUpdate = r : t.next = r, s.lastBaseUpdate = r
	}

	function ns(t, r, s, l) {
		var d = t.updateQueue;
		An = !1;
		var m = d.firstBaseUpdate,
			w = d.lastBaseUpdate,
			k = d.shared.pending;
		if (k !== null) {
			d.shared.pending = null;
			var O = k,
				z = O.next;
			O.next = null, w === null ? m = z : w.next = z, w = O;
			var G = t.alternate;
			G !== null && (G = G.updateQueue, k = G.lastBaseUpdate, k !== w && (k === null ? G.firstBaseUpdate = z : k.next = z, G.lastBaseUpdate = O))
		}
		if (m !== null) {
			var Y = d.baseState;
			w = 0, G = z = O = null, k = m;
			do {
				var Q = k.lane,
					ne = k.eventTime;
				if ((l & Q) === Q) {
					G !== null && (G = G.next = {
						eventTime: ne,
						lane: 0,
						tag: k.tag,
						payload: k.payload,
						callback: k.callback,
						next: null
					});
					e: {
						var ie = t,
							se = k;
						switch (Q = r, ne = s, se.tag) {
							case 1:
								if (ie = se.payload, typeof ie == "function") {
									Y = ie.call(ne, Y, Q);
									break e
								}
								Y = ie;
								break e;
							case 3:
								ie.flags = ie.flags & -65537 | 128;
							case 0:
								if (ie = se.payload, Q = typeof ie == "function" ? ie.call(ne, Y, Q) : ie, Q == null) break e;
								Y = Z({}, Y, Q);
								break e;
							case 2:
								An = !0
						}
					}
					k.callback !== null && k.lane !== 0 && (t.flags |= 64, Q = d.effects, Q === null ? d.effects = [k] : Q.push(k))
				} else ne = {
					eventTime: ne,
					lane: Q,
					tag: k.tag,
					payload: k.payload,
					callback: k.callback,
					next: null
				}, G === null ? (z = G = ne, O = Y) : G = G.next = ne, w |= Q;
				if (k = k.next, k === null) {
					if (k = d.shared.pending, k === null) break;
					Q = k, k = Q.next, Q.next = null, d.lastBaseUpdate = Q, d.shared.pending = null
				}
			} while (!0);
			if (G === null && (O = Y), d.baseState = O, d.firstBaseUpdate = z, d.lastBaseUpdate = G, r = d.shared.interleaved, r !== null) {
				d = r;
				do w |= d.lane, d = d.next; while (d !== r)
			} else m === null && (d.shared.lanes = 0);
			or |= w, t.lanes = w, t.memoizedState = Y
		}
	}

	function jh(t, r, s) {
		if (t = r.effects, r.effects = null, t !== null)
			for (r = 0; r < t.length; r++) {
				var l = t[r],
					d = l.callback;
				if (d !== null) {
					if (l.callback = null, l = s, typeof d != "function") throw Error(i(191, d));
					d.call(l)
				}
			}
	}
	var Mi = {},
		Gt = Rn(Mi),
		Di = Rn(Mi),
		Li = Rn(Mi);

	function rr(t) {
		if (t === Mi) throw Error(i(174));
		return t
	}

	function Ql(t, r) {
		switch (Te(Li, r), Te(Di, t), Te(Gt, Mi), t = r.nodeType, t) {
			case 9:
			case 11:
				r = (r = r.documentElement) ? r.namespaceURI : qa(null, "");
				break;
			default:
				t = t === 8 ? r.parentNode : r, r = t.namespaceURI || null, t = t.tagName, r = qa(r, t)
		}
		ke(Gt), Te(Gt, r)
	}

	function Vr() {
		ke(Gt), ke(Di), ke(Li)
	}

	function Mh(t) {
		rr(Li.current);
		var r = rr(Gt.current),
			s = qa(r, t.type);
		r !== s && (Te(Di, t), Te(Gt, s))
	}

	function ql(t) {
		Di.current === t && (ke(Gt), ke(Di))
	}
	var je = Rn(0);

	function rs(t) {
		for (var r = t; r !== null;) {
			if (r.tag === 13) {
				var s = r.memoizedState;
				if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || s.data === "$!")) return r
			} else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
				if ((r.flags & 128) !== 0) return r
			} else if (r.child !== null) {
				r.child.return = r, r = r.child;
				continue
			}
			if (r === t) break;
			for (; r.sibling === null;) {
				if (r.return === null || r.return === t) return null;
				r = r.return
			}
			r.sibling.return = r.return, r = r.sibling
		}
		return null
	}
	var Gl = [];

	function Yl() {
		for (var t = 0; t < Gl.length; t++) Gl[t]._workInProgressVersionPrimary = null;
		Gl.length = 0
	}
	var is = A.ReactCurrentDispatcher,
		Xl = A.ReactCurrentBatchConfig,
		ir = 0,
		Me = null,
		Ue = null,
		$e = null,
		os = !1,
		Ii = !1,
		Fi = 0,
		m1 = 0;

	function Je() {
		throw Error(i(321))
	}

	function Zl(t, r) {
		if (r === null) return !1;
		for (var s = 0; s < r.length && s < t.length; s++)
			if (!Lt(t[s], r[s])) return !1;
		return !0
	}

	function Jl(t, r, s, l, d, m) {
		if (ir = m, Me = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, is.current = t === null || t.memoizedState === null ? x1 : w1, t = s(l, d), Ii) {
			m = 0;
			do {
				if (Ii = !1, Fi = 0, 25 <= m) throw Error(i(301));
				m += 1, $e = Ue = null, r.updateQueue = null, is.current = S1, t = s(l, d)
			} while (Ii)
		}
		if (is.current = ls, r = Ue !== null && Ue.next !== null, ir = 0, $e = Ue = Me = null, os = !1, r) throw Error(i(300));
		return t
	}

	function eu() {
		var t = Fi !== 0;
		return Fi = 0, t
	}

	function Yt() {
		var t = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return $e === null ? Me.memoizedState = $e = t : $e = $e.next = t, $e
	}

	function _t() {
		if (Ue === null) {
			var t = Me.alternate;
			t = t !== null ? t.memoizedState : null
		} else t = Ue.next;
		var r = $e === null ? Me.memoizedState : $e.next;
		if (r !== null) $e = r, Ue = t;
		else {
			if (t === null) throw Error(i(310));
			Ue = t, t = {
				memoizedState: Ue.memoizedState,
				baseState: Ue.baseState,
				baseQueue: Ue.baseQueue,
				queue: Ue.queue,
				next: null
			}, $e === null ? Me.memoizedState = $e = t : $e = $e.next = t
		}
		return $e
	}

	function Vi(t, r) {
		return typeof r == "function" ? r(t) : r
	}

	function tu(t) {
		var r = _t(),
			s = r.queue;
		if (s === null) throw Error(i(311));
		s.lastRenderedReducer = t;
		var l = Ue,
			d = l.baseQueue,
			m = s.pending;
		if (m !== null) {
			if (d !== null) {
				var w = d.next;
				d.next = m.next, m.next = w
			}
			l.baseQueue = d = m, s.pending = null
		}
		if (d !== null) {
			m = d.next, l = l.baseState;
			var k = w = null,
				O = null,
				z = m;
			do {
				var G = z.lane;
				if ((ir & G) === G) O !== null && (O = O.next = {
					lane: 0,
					action: z.action,
					hasEagerState: z.hasEagerState,
					eagerState: z.eagerState,
					next: null
				}), l = z.hasEagerState ? z.eagerState : t(l, z.action);
				else {
					var Y = {
						lane: G,
						action: z.action,
						hasEagerState: z.hasEagerState,
						eagerState: z.eagerState,
						next: null
					};
					O === null ? (k = O = Y, w = l) : O = O.next = Y, Me.lanes |= G, or |= G
				}
				z = z.next
			} while (z !== null && z !== m);
			O === null ? w = l : O.next = k, Lt(l, r.memoizedState) || (ut = !0), r.memoizedState = l, r.baseState = w, r.baseQueue = O, s.lastRenderedState = l
		}
		if (t = s.interleaved, t !== null) {
			d = t;
			do m = d.lane, Me.lanes |= m, or |= m, d = d.next; while (d !== t)
		} else d === null && (s.lanes = 0);
		return [r.memoizedState, s.dispatch]
	}

	function nu(t) {
		var r = _t(),
			s = r.queue;
		if (s === null) throw Error(i(311));
		s.lastRenderedReducer = t;
		var l = s.dispatch,
			d = s.pending,
			m = r.memoizedState;
		if (d !== null) {
			s.pending = null;
			var w = d = d.next;
			do m = t(m, w.action), w = w.next; while (w !== d);
			Lt(m, r.memoizedState) || (ut = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), s.lastRenderedState = m
		}
		return [m, l]
	}

	function Dh() {}

	function Lh(t, r) {
		var s = Me,
			l = _t(),
			d = r(),
			m = !Lt(l.memoizedState, d);
		if (m && (l.memoizedState = d, ut = !0), l = l.queue, ru(Vh.bind(null, s, l, t), [t]), l.getSnapshot !== r || m || $e !== null && $e.memoizedState.tag & 1) {
			if (s.flags |= 2048, zi(9, Fh.bind(null, s, l, d, r), void 0, null), Ke === null) throw Error(i(349));
			(ir & 30) !== 0 || Ih(s, r, d)
		}
		return d
	}

	function Ih(t, r, s) {
		t.flags |= 16384, t = {
			getSnapshot: r,
			value: s
		}, r = Me.updateQueue, r === null ? (r = {
			lastEffect: null,
			stores: null
		}, Me.updateQueue = r, r.stores = [t]) : (s = r.stores, s === null ? r.stores = [t] : s.push(t))
	}

	function Fh(t, r, s, l) {
		r.value = s, r.getSnapshot = l, zh(r) && Bh(t)
	}

	function Vh(t, r, s) {
		return s(function() {
			zh(r) && Bh(t)
		})
	}

	function zh(t) {
		var r = t.getSnapshot;
		t = t.value;
		try {
			var s = r();
			return !Lt(t, s)
		} catch {
			return !0
		}
	}

	function Bh(t) {
		var r = fn(t, 1);
		r !== null && Bt(r, t, 1, -1)
	}

	function Uh(t) {
		var r = Yt();
		return typeof t == "function" && (t = t()), r.memoizedState = r.baseState = t, t = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Vi,
			lastRenderedState: t
		}, r.queue = t, t = t.dispatch = v1.bind(null, Me, t), [r.memoizedState, t]
	}

	function zi(t, r, s, l) {
		return t = {
			tag: t,
			create: r,
			destroy: s,
			deps: l,
			next: null
		}, r = Me.updateQueue, r === null ? (r = {
			lastEffect: null,
			stores: null
		}, Me.updateQueue = r, r.lastEffect = t.next = t) : (s = r.lastEffect, s === null ? r.lastEffect = t.next = t : (l = s.next, s.next = t, t.next = l, r.lastEffect = t)), t
	}

	function Hh() {
		return _t().memoizedState
	}

	function ss(t, r, s, l) {
		var d = Yt();
		Me.flags |= t, d.memoizedState = zi(1 | r, s, void 0, l === void 0 ? null : l)
	}

	function as(t, r, s, l) {
		var d = _t();
		l = l === void 0 ? null : l;
		var m = void 0;
		if (Ue !== null) {
			var w = Ue.memoizedState;
			if (m = w.destroy, l !== null && Zl(l, w.deps)) {
				d.memoizedState = zi(r, s, m, l);
				return
			}
		}
		Me.flags |= t, d.memoizedState = zi(1 | r, s, m, l)
	}

	function Wh(t, r) {
		return ss(8390656, 8, t, r)
	}

	function ru(t, r) {
		return as(2048, 8, t, r)
	}

	function $h(t, r) {
		return as(4, 2, t, r)
	}

	function Kh(t, r) {
		return as(4, 4, t, r)
	}

	function Qh(t, r) {
		if (typeof r == "function") return t = t(), r(t),
			function() {
				r(null)
			};
		if (r != null) return t = t(), r.current = t,
			function() {
				r.current = null
			}
	}

	function qh(t, r, s) {
		return s = s != null ? s.concat([t]) : null, as(4, 4, Qh.bind(null, r, t), s)
	}

	function iu() {}

	function Gh(t, r) {
		var s = _t();
		r = r === void 0 ? null : r;
		var l = s.memoizedState;
		return l !== null && r !== null && Zl(r, l[1]) ? l[0] : (s.memoizedState = [t, r], t)
	}

	function Yh(t, r) {
		var s = _t();
		r = r === void 0 ? null : r;
		var l = s.memoizedState;
		return l !== null && r !== null && Zl(r, l[1]) ? l[0] : (t = t(), s.memoizedState = [t, r], t)
	}

	function Xh(t, r, s) {
		return (ir & 21) === 0 ? (t.baseState && (t.baseState = !1, ut = !0), t.memoizedState = s) : (Lt(s, r) || (s = kd(), Me.lanes |= s, or |= s, t.baseState = !0), r)
	}

	function g1(t, r) {
		var s = Pe;
		Pe = s !== 0 && 4 > s ? s : 4, t(!0);
		var l = Xl.transition;
		Xl.transition = {};
		try {
			t(!1), r()
		} finally {
			Pe = s, Xl.transition = l
		}
	}

	function Zh() {
		return _t().memoizedState
	}

	function y1(t, r, s) {
		var l = Ln(t);
		if (s = {
				lane: l,
				action: s,
				hasEagerState: !1,
				eagerState: null,
				next: null
			}, Jh(t)) ep(r, s);
		else if (s = Oh(t, r, s, l), s !== null) {
			var d = ot();
			Bt(s, t, l, d), tp(s, r, l)
		}
	}

	function v1(t, r, s) {
		var l = Ln(t),
			d = {
				lane: l,
				action: s,
				hasEagerState: !1,
				eagerState: null,
				next: null
			};
		if (Jh(t)) ep(r, d);
		else {
			var m = t.alternate;
			if (t.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null)) try {
				var w = r.lastRenderedState,
					k = m(w, s);
				if (d.hasEagerState = !0, d.eagerState = k, Lt(k, w)) {
					var O = r.interleaved;
					O === null ? (d.next = d, $l(r)) : (d.next = O.next, O.next = d), r.interleaved = d;
					return
				}
			} catch {}
			s = Oh(t, r, d, l), s !== null && (d = ot(), Bt(s, t, l, d), tp(s, r, l))
		}
	}

	function Jh(t) {
		var r = t.alternate;
		return t === Me || r !== null && r === Me
	}

	function ep(t, r) {
		Ii = os = !0;
		var s = t.pending;
		s === null ? r.next = r : (r.next = s.next, s.next = r), t.pending = r
	}

	function tp(t, r, s) {
		if ((s & 4194240) !== 0) {
			var l = r.lanes;
			l &= t.pendingLanes, s |= l, r.lanes = s, sl(t, s)
		}
	}
	var ls = {
			readContext: Rt,
			useCallback: Je,
			useContext: Je,
			useEffect: Je,
			useImperativeHandle: Je,
			useInsertionEffect: Je,
			useLayoutEffect: Je,
			useMemo: Je,
			useReducer: Je,
			useRef: Je,
			useState: Je,
			useDebugValue: Je,
			useDeferredValue: Je,
			useTransition: Je,
			useMutableSource: Je,
			useSyncExternalStore: Je,
			useId: Je,
			unstable_isNewReconciler: !1
		},
		x1 = {
			readContext: Rt,
			useCallback: function(t, r) {
				return Yt().memoizedState = [t, r === void 0 ? null : r], t
			},
			useContext: Rt,
			useEffect: Wh,
			useImperativeHandle: function(t, r, s) {
				return s = s != null ? s.concat([t]) : null, ss(4194308, 4, Qh.bind(null, r, t), s)
			},
			useLayoutEffect: function(t, r) {
				return ss(4194308, 4, t, r)
			},
			useInsertionEffect: function(t, r) {
				return ss(4, 2, t, r)
			},
			useMemo: function(t, r) {
				var s = Yt();
				return r = r === void 0 ? null : r, t = t(), s.memoizedState = [t, r], t
			},
			useReducer: function(t, r, s) {
				var l = Yt();
				return r = s !== void 0 ? s(r) : r, l.memoizedState = l.baseState = r, t = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: t,
					lastRenderedState: r
				}, l.queue = t, t = t.dispatch = y1.bind(null, Me, t), [l.memoizedState, t]
			},
			useRef: function(t) {
				var r = Yt();
				return t = {
					current: t
				}, r.memoizedState = t
			},
			useState: Uh,
			useDebugValue: iu,
			useDeferredValue: function(t) {
				return Yt().memoizedState = t
			},
			useTransition: function() {
				var t = Uh(!1),
					r = t[0];
				return t = g1.bind(null, t[1]), Yt().memoizedState = t, [r, t]
			},
			useMutableSource: function() {},
			useSyncExternalStore: function(t, r, s) {
				var l = Me,
					d = Yt();
				if (Oe) {
					if (s === void 0) throw Error(i(407));
					s = s()
				} else {
					if (s = r(), Ke === null) throw Error(i(349));
					(ir & 30) !== 0 || Ih(l, r, s)
				}
				d.memoizedState = s;
				var m = {
					value: s,
					getSnapshot: r
				};
				return d.queue = m, Wh(Vh.bind(null, l, m, t), [t]), l.flags |= 2048, zi(9, Fh.bind(null, l, m, s, r), void 0, null), s
			},
			useId: function() {
				var t = Yt(),
					r = Ke.identifierPrefix;
				if (Oe) {
					var s = cn,
						l = un;
					s = (l & ~(1 << 32 - Dt(l) - 1)).toString(32) + s, r = ":" + r + "R" + s, s = Fi++, 0 < s && (r += "H" + s.toString(32)), r += ":"
				} else s = m1++, r = ":" + r + "r" + s.toString(32) + ":";
				return t.memoizedState = r
			},
			unstable_isNewReconciler: !1
		},
		w1 = {
			readContext: Rt,
			useCallback: Gh,
			useContext: Rt,
			useEffect: ru,
			useImperativeHandle: qh,
			useInsertionEffect: $h,
			useLayoutEffect: Kh,
			useMemo: Yh,
			useReducer: tu,
			useRef: Hh,
			useState: function() {
				return tu(Vi)
			},
			useDebugValue: iu,
			useDeferredValue: function(t) {
				var r = _t();
				return Xh(r, Ue.memoizedState, t)
			},
			useTransition: function() {
				var t = tu(Vi)[0],
					r = _t().memoizedState;
				return [t, r]
			},
			useMutableSource: Dh,
			useSyncExternalStore: Lh,
			useId: Zh,
			unstable_isNewReconciler: !1
		},
		S1 = {
			readContext: Rt,
			useCallback: Gh,
			useContext: Rt,
			useEffect: ru,
			useImperativeHandle: qh,
			useInsertionEffect: $h,
			useLayoutEffect: Kh,
			useMemo: Yh,
			useReducer: nu,
			useRef: Hh,
			useState: function() {
				return nu(Vi)
			},
			useDebugValue: iu,
			useDeferredValue: function(t) {
				var r = _t();
				return Ue === null ? r.memoizedState = t : Xh(r, Ue.memoizedState, t)
			},
			useTransition: function() {
				var t = nu(Vi)[0],
					r = _t().memoizedState;
				return [t, r]
			},
			useMutableSource: Dh,
			useSyncExternalStore: Lh,
			useId: Zh,
			unstable_isNewReconciler: !1
		};

	function Ft(t, r) {
		if (t && t.defaultProps) {
			r = Z({}, r), t = t.defaultProps;
			for (var s in t) r[s] === void 0 && (r[s] = t[s]);
			return r
		}
		return r
	}

	function ou(t, r, s, l) {
		r = t.memoizedState, s = s(l, r), s = s == null ? r : Z({}, r, s), t.memoizedState = s, t.lanes === 0 && (t.updateQueue.baseState = s)
	}
	var us = {
		isMounted: function(t) {
			return (t = t._reactInternals) ? Xn(t) === t : !1
		},
		enqueueSetState: function(t, r, s) {
			t = t._reactInternals;
			var l = ot(),
				d = Ln(t),
				m = dn(l, d);
			m.payload = r, s != null && (m.callback = s), r = Nn(t, m, d), r !== null && (Bt(r, t, d, l), ts(r, t, d))
		},
		enqueueReplaceState: function(t, r, s) {
			t = t._reactInternals;
			var l = ot(),
				d = Ln(t),
				m = dn(l, d);
			m.tag = 1, m.payload = r, s != null && (m.callback = s), r = Nn(t, m, d), r !== null && (Bt(r, t, d, l), ts(r, t, d))
		},
		enqueueForceUpdate: function(t, r) {
			t = t._reactInternals;
			var s = ot(),
				l = Ln(t),
				d = dn(s, l);
			d.tag = 2, r != null && (d.callback = r), r = Nn(t, d, l), r !== null && (Bt(r, t, l, s), ts(r, t, l))
		}
	};

	function np(t, r, s, l, d, m, w) {
		return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, m, w) : r.prototype && r.prototype.isPureReactComponent ? !Ci(s, l) || !Ci(d, m) : !0
	}

	function rp(t, r, s) {
		var l = !1,
			d = _n,
			m = r.contextType;
		return typeof m == "object" && m !== null ? m = Rt(m) : (d = lt(r) ? Jn : Ze.current, l = r.contextTypes, m = (l = l != null) ? Nr(t, d) : _n), r = new r(s, m), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = us, t.stateNode = r, r._reactInternals = t, l && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = d, t.__reactInternalMemoizedMaskedChildContext = m), r
	}

	function ip(t, r, s, l) {
		t = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(s, l), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(s, l), r.state !== t && us.enqueueReplaceState(r, r.state, null)
	}

	function su(t, r, s, l) {
		var d = t.stateNode;
		d.props = s, d.state = t.memoizedState, d.refs = {}, Kl(t);
		var m = r.contextType;
		typeof m == "object" && m !== null ? d.context = Rt(m) : (m = lt(r) ? Jn : Ze.current, d.context = Nr(t, m)), d.state = t.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (ou(t, r, m, s), d.state = t.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (r = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), r !== d.state && us.enqueueReplaceState(d, d.state, null), ns(t, s, d, l), d.state = t.memoizedState), typeof d.componentDidMount == "function" && (t.flags |= 4194308)
	}

	function zr(t, r) {
		try {
			var s = "",
				l = r;
			do s += xe(l), l = l.return; while (l);
			var d = s
		} catch (m) {
			d = `
Error generating stack: ` + m.message + `
` + m.stack
		}
		return {
			value: t,
			source: r,
			stack: d,
			digest: null
		}
	}

	function au(t, r, s) {
		return {
			value: t,
			source: null,
			stack: s ?? null,
			digest: r ?? null
		}
	}

	function lu(t, r) {
		try {
			console.error(r.value)
		} catch (s) {
			setTimeout(function() {
				throw s
			})
		}
	}
	var b1 = typeof WeakMap == "function" ? WeakMap : Map;

	function op(t, r, s) {
		s = dn(-1, s), s.tag = 3, s.payload = {
			element: null
		};
		var l = r.value;
		return s.callback = function() {
			gs || (gs = !0, Eu = l), lu(t, r)
		}, s
	}

	function sp(t, r, s) {
		s = dn(-1, s), s.tag = 3;
		var l = t.type.getDerivedStateFromError;
		if (typeof l == "function") {
			var d = r.value;
			s.payload = function() {
				return l(d)
			}, s.callback = function() {
				lu(t, r)
			}
		}
		var m = t.stateNode;
		return m !== null && typeof m.componentDidCatch == "function" && (s.callback = function() {
			lu(t, r), typeof l != "function" && (Mn === null ? Mn = new Set([this]) : Mn.add(this));
			var w = r.stack;
			this.componentDidCatch(r.value, {
				componentStack: w !== null ? w : ""
			})
		}), s
	}

	function ap(t, r, s) {
		var l = t.pingCache;
		if (l === null) {
			l = t.pingCache = new b1;
			var d = new Set;
			l.set(r, d)
		} else d = l.get(r), d === void 0 && (d = new Set, l.set(r, d));
		d.has(s) || (d.add(s), t = L1.bind(null, t, r, s), r.then(t, t))
	}

	function lp(t) {
		do {
			var r;
			if ((r = t.tag === 13) && (r = t.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return t;
			t = t.return
		} while (t !== null);
		return null
	}

	function up(t, r, s, l, d) {
		return (t.mode & 1) === 0 ? (t === r ? t.flags |= 65536 : (t.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (r = dn(-1, 1), r.tag = 2, Nn(s, r, 1))), s.lanes |= 1), t) : (t.flags |= 65536, t.lanes = d, t)
	}
	var E1 = A.ReactCurrentOwner,
		ut = !1;

	function it(t, r, s, l) {
		r.child = t === null ? _h(r, null, s, l) : Lr(r, t.child, s, l)
	}

	function cp(t, r, s, l, d) {
		s = s.render;
		var m = r.ref;
		return Fr(r, d), l = Jl(t, r, s, l, m, d), s = eu(), t !== null && !ut ? (r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~d, hn(t, r, d)) : (Oe && s && Ll(r), r.flags |= 1, it(t, r, l, d), r.child)
	}

	function fp(t, r, s, l, d) {
		if (t === null) {
			var m = s.type;
			return typeof m == "function" && !Ou(m) && m.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (r.tag = 15, r.type = m, dp(t, r, m, l, d)) : (t = bs(s.type, null, l, r, r.mode, d), t.ref = r.ref, t.return = r, r.child = t)
		}
		if (m = t.child, (t.lanes & d) === 0) {
			var w = m.memoizedProps;
			if (s = s.compare, s = s !== null ? s : Ci, s(w, l) && t.ref === r.ref) return hn(t, r, d)
		}
		return r.flags |= 1, t = Fn(m, l), t.ref = r.ref, t.return = r, r.child = t
	}

	function dp(t, r, s, l, d) {
		if (t !== null) {
			var m = t.memoizedProps;
			if (Ci(m, l) && t.ref === r.ref)
				if (ut = !1, r.pendingProps = l = m, (t.lanes & d) !== 0)(t.flags & 131072) !== 0 && (ut = !0);
				else return r.lanes = t.lanes, hn(t, r, d)
		}
		return uu(t, r, s, l, d)
	}

	function hp(t, r, s) {
		var l = r.pendingProps,
			d = l.children,
			m = t !== null ? t.memoizedState : null;
		if (l.mode === "hidden")
			if ((r.mode & 1) === 0) r.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, Te(Ur, vt), vt |= s;
			else {
				if ((s & 1073741824) === 0) return t = m !== null ? m.baseLanes | s : s, r.lanes = r.childLanes = 1073741824, r.memoizedState = {
					baseLanes: t,
					cachePool: null,
					transitions: null
				}, r.updateQueue = null, Te(Ur, vt), vt |= t, null;
				r.memoizedState = {
					baseLanes: 0,
					cachePool: null,
					transitions: null
				}, l = m !== null ? m.baseLanes : s, Te(Ur, vt), vt |= l
			}
		else m !== null ? (l = m.baseLanes | s, r.memoizedState = null) : l = s, Te(Ur, vt), vt |= l;
		return it(t, r, d, s), r.child
	}

	function pp(t, r) {
		var s = r.ref;
		(t === null && s !== null || t !== null && t.ref !== s) && (r.flags |= 512, r.flags |= 2097152)
	}

	function uu(t, r, s, l, d) {
		var m = lt(s) ? Jn : Ze.current;
		return m = Nr(r, m), Fr(r, d), s = Jl(t, r, s, l, m, d), l = eu(), t !== null && !ut ? (r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~d, hn(t, r, d)) : (Oe && l && Ll(r), r.flags |= 1, it(t, r, s, d), r.child)
	}

	function mp(t, r, s, l, d) {
		if (lt(s)) {
			var m = !0;
			Qo(r)
		} else m = !1;
		if (Fr(r, d), r.stateNode === null) fs(t, r), rp(r, s, l), su(r, s, l, d), l = !0;
		else if (t === null) {
			var w = r.stateNode,
				k = r.memoizedProps;
			w.props = k;
			var O = w.context,
				z = s.contextType;
			typeof z == "object" && z !== null ? z = Rt(z) : (z = lt(s) ? Jn : Ze.current, z = Nr(r, z));
			var G = s.getDerivedStateFromProps,
				Y = typeof G == "function" || typeof w.getSnapshotBeforeUpdate == "function";
			Y || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (k !== l || O !== z) && ip(r, w, l, z), An = !1;
			var Q = r.memoizedState;
			w.state = Q, ns(r, l, w, d), O = r.memoizedState, k !== l || Q !== O || at.current || An ? (typeof G == "function" && (ou(r, s, G, l), O = r.memoizedState), (k = An || np(r, s, k, l, Q, O, z)) ? (Y || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = l, r.memoizedState = O), w.props = l, w.state = O, w.context = z, l = k) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), l = !1)
		} else {
			w = r.stateNode, Ah(t, r), k = r.memoizedProps, z = r.type === r.elementType ? k : Ft(r.type, k), w.props = z, Y = r.pendingProps, Q = w.context, O = s.contextType, typeof O == "object" && O !== null ? O = Rt(O) : (O = lt(s) ? Jn : Ze.current, O = Nr(r, O));
			var ne = s.getDerivedStateFromProps;
			(G = typeof ne == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (k !== Y || Q !== O) && ip(r, w, l, O), An = !1, Q = r.memoizedState, w.state = Q, ns(r, l, w, d);
			var ie = r.memoizedState;
			k !== Y || Q !== ie || at.current || An ? (typeof ne == "function" && (ou(r, s, ne, l), ie = r.memoizedState), (z = An || np(r, s, z, l, Q, ie, O) || !1) ? (G || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(l, ie, O), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(l, ie, O)), typeof w.componentDidUpdate == "function" && (r.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || k === t.memoizedProps && Q === t.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || k === t.memoizedProps && Q === t.memoizedState || (r.flags |= 1024), r.memoizedProps = l, r.memoizedState = ie), w.props = l, w.state = ie, w.context = O, l = z) : (typeof w.componentDidUpdate != "function" || k === t.memoizedProps && Q === t.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || k === t.memoizedProps && Q === t.memoizedState || (r.flags |= 1024), l = !1)
		}
		return cu(t, r, s, l, m, d)
	}

	function cu(t, r, s, l, d, m) {
		pp(t, r);
		var w = (r.flags & 128) !== 0;
		if (!l && !w) return d && wh(r, s, !1), hn(t, r, m);
		l = r.stateNode, E1.current = r;
		var k = w && typeof s.getDerivedStateFromError != "function" ? null : l.render();
		return r.flags |= 1, t !== null && w ? (r.child = Lr(r, t.child, null, m), r.child = Lr(r, null, k, m)) : it(t, r, k, m), r.memoizedState = l.state, d && wh(r, s, !0), r.child
	}

	function gp(t) {
		var r = t.stateNode;
		r.pendingContext ? vh(t, r.pendingContext, r.pendingContext !== r.context) : r.context && vh(t, r.context, !1), Ql(t, r.containerInfo)
	}

	function yp(t, r, s, l, d) {
		return Dr(), zl(d), r.flags |= 256, it(t, r, s, l), r.child
	}
	var fu = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0
	};

	function du(t) {
		return {
			baseLanes: t,
			cachePool: null,
			transitions: null
		}
	}

	function vp(t, r, s) {
		var l = r.pendingProps,
			d = je.current,
			m = !1,
			w = (r.flags & 128) !== 0,
			k;
		if ((k = w) || (k = t !== null && t.memoizedState === null ? !1 : (d & 2) !== 0), k ? (m = !0, r.flags &= -129) : (t === null || t.memoizedState !== null) && (d |= 1), Te(je, d & 1), t === null) return Vl(r), t = r.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : t.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (w = l.children, t = l.fallback, m ? (l = r.mode, m = r.child, w = {
			mode: "hidden",
			children: w
		}, (l & 1) === 0 && m !== null ? (m.childLanes = 0, m.pendingProps = w) : m = Es(w, l, 0, null), t = ur(t, l, s, null), m.return = r, t.return = r, m.sibling = t, r.child = m, r.child.memoizedState = du(s), r.memoizedState = fu, t) : hu(r, w));
		if (d = t.memoizedState, d !== null && (k = d.dehydrated, k !== null)) return P1(t, r, w, l, k, d, s);
		if (m) {
			m = l.fallback, w = r.mode, d = t.child, k = d.sibling;
			var O = {
				mode: "hidden",
				children: l.children
			};
			return (w & 1) === 0 && r.child !== d ? (l = r.child, l.childLanes = 0, l.pendingProps = O, r.deletions = null) : (l = Fn(d, O), l.subtreeFlags = d.subtreeFlags & 14680064), k !== null ? m = Fn(k, m) : (m = ur(m, w, s, null), m.flags |= 2), m.return = r, l.return = r, l.sibling = m, r.child = l, l = m, m = r.child, w = t.child.memoizedState, w = w === null ? du(s) : {
				baseLanes: w.baseLanes | s,
				cachePool: null,
				transitions: w.transitions
			}, m.memoizedState = w, m.childLanes = t.childLanes & ~s, r.memoizedState = fu, l
		}
		return m = t.child, t = m.sibling, l = Fn(m, {
			mode: "visible",
			children: l.children
		}), (r.mode & 1) === 0 && (l.lanes = s), l.return = r, l.sibling = null, t !== null && (s = r.deletions, s === null ? (r.deletions = [t], r.flags |= 16) : s.push(t)), r.child = l, r.memoizedState = null, l
	}

	function hu(t, r) {
		return r = Es({
			mode: "visible",
			children: r
		}, t.mode, 0, null), r.return = t, t.child = r
	}

	function cs(t, r, s, l) {
		return l !== null && zl(l), Lr(r, t.child, null, s), t = hu(r, r.pendingProps.children), t.flags |= 2, r.memoizedState = null, t
	}

	function P1(t, r, s, l, d, m, w) {
		if (s) return r.flags & 256 ? (r.flags &= -257, l = au(Error(i(422))), cs(t, r, w, l)) : r.memoizedState !== null ? (r.child = t.child, r.flags |= 128, null) : (m = l.fallback, d = r.mode, l = Es({
			mode: "visible",
			children: l.children
		}, d, 0, null), m = ur(m, d, w, null), m.flags |= 2, l.return = r, m.return = r, l.sibling = m, r.child = l, (r.mode & 1) !== 0 && Lr(r, t.child, null, w), r.child.memoizedState = du(w), r.memoizedState = fu, m);
		if ((r.mode & 1) === 0) return cs(t, r, w, null);
		if (d.data === "$!") {
			if (l = d.nextSibling && d.nextSibling.dataset, l) var k = l.dgst;
			return l = k, m = Error(i(419)), l = au(m, l, void 0), cs(t, r, w, l)
		}
		if (k = (w & t.childLanes) !== 0, ut || k) {
			if (l = Ke, l !== null) {
				switch (w & -w) {
					case 4:
						d = 2;
						break;
					case 16:
						d = 8;
						break;
					case 64:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
					case 67108864:
						d = 32;
						break;
					case 536870912:
						d = 268435456;
						break;
					default:
						d = 0
				}
				d = (d & (l.suspendedLanes | w)) !== 0 ? 0 : d, d !== 0 && d !== m.retryLane && (m.retryLane = d, fn(t, d), Bt(l, t, d, -1))
			}
			return _u(), l = au(Error(i(421))), cs(t, r, w, l)
		}
		return d.data === "$?" ? (r.flags |= 128, r.child = t.child, r = I1.bind(null, t), d._reactRetry = r, null) : (t = m.treeContext, yt = kn(d.nextSibling), gt = r, Oe = !0, It = null, t !== null && (Ct[kt++] = un, Ct[kt++] = cn, Ct[kt++] = er, un = t.id, cn = t.overflow, er = r), r = hu(r, l.children), r.flags |= 4096, r)
	}

	function xp(t, r, s) {
		t.lanes |= r;
		var l = t.alternate;
		l !== null && (l.lanes |= r), Wl(t.return, r, s)
	}

	function pu(t, r, s, l, d) {
		var m = t.memoizedState;
		m === null ? t.memoizedState = {
			isBackwards: r,
			rendering: null,
			renderingStartTime: 0,
			last: l,
			tail: s,
			tailMode: d
		} : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = l, m.tail = s, m.tailMode = d)
	}

	function wp(t, r, s) {
		var l = r.pendingProps,
			d = l.revealOrder,
			m = l.tail;
		if (it(t, r, l.children, s), l = je.current, (l & 2) !== 0) l = l & 1 | 2, r.flags |= 128;
		else {
			if (t !== null && (t.flags & 128) !== 0) e: for (t = r.child; t !== null;) {
				if (t.tag === 13) t.memoizedState !== null && xp(t, s, r);
				else if (t.tag === 19) xp(t, s, r);
				else if (t.child !== null) {
					t.child.return = t, t = t.child;
					continue
				}
				if (t === r) break e;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === r) break e;
					t = t.return
				}
				t.sibling.return = t.return, t = t.sibling
			}
			l &= 1
		}
		if (Te(je, l), (r.mode & 1) === 0) r.memoizedState = null;
		else switch (d) {
			case "forwards":
				for (s = r.child, d = null; s !== null;) t = s.alternate, t !== null && rs(t) === null && (d = s), s = s.sibling;
				s = d, s === null ? (d = r.child, r.child = null) : (d = s.sibling, s.sibling = null), pu(r, !1, d, s, m);
				break;
			case "backwards":
				for (s = null, d = r.child, r.child = null; d !== null;) {
					if (t = d.alternate, t !== null && rs(t) === null) {
						r.child = d;
						break
					}
					t = d.sibling, d.sibling = s, s = d, d = t
				}
				pu(r, !0, s, null, m);
				break;
			case "together":
				pu(r, !1, null, null, void 0);
				break;
			default:
				r.memoizedState = null
		}
		return r.child
	}

	function fs(t, r) {
		(r.mode & 1) === 0 && t !== null && (t.alternate = null, r.alternate = null, r.flags |= 2)
	}

	function hn(t, r, s) {
		if (t !== null && (r.dependencies = t.dependencies), or |= r.lanes, (s & r.childLanes) === 0) return null;
		if (t !== null && r.child !== t.child) throw Error(i(153));
		if (r.child !== null) {
			for (t = r.child, s = Fn(t, t.pendingProps), r.child = s, s.return = r; t.sibling !== null;) t = t.sibling, s = s.sibling = Fn(t, t.pendingProps), s.return = r;
			s.sibling = null
		}
		return r.child
	}

	function T1(t, r, s) {
		switch (r.tag) {
			case 3:
				gp(r), Dr();
				break;
			case 5:
				Mh(r);
				break;
			case 1:
				lt(r.type) && Qo(r);
				break;
			case 4:
				Ql(r, r.stateNode.containerInfo);
				break;
			case 10:
				var l = r.type._context,
					d = r.memoizedProps.value;
				Te(Jo, l._currentValue), l._currentValue = d;
				break;
			case 13:
				if (l = r.memoizedState, l !== null) return l.dehydrated !== null ? (Te(je, je.current & 1), r.flags |= 128, null) : (s & r.child.childLanes) !== 0 ? vp(t, r, s) : (Te(je, je.current & 1), t = hn(t, r, s), t !== null ? t.sibling : null);
				Te(je, je.current & 1);
				break;
			case 19:
				if (l = (s & r.childLanes) !== 0, (t.flags & 128) !== 0) {
					if (l) return wp(t, r, s);
					r.flags |= 128
				}
				if (d = r.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Te(je, je.current), l) break;
				return null;
			case 22:
			case 23:
				return r.lanes = 0, hp(t, r, s)
		}
		return hn(t, r, s)
	}
	var Sp, mu, bp, Ep;
	Sp = function(t, r) {
		for (var s = r.child; s !== null;) {
			if (s.tag === 5 || s.tag === 6) t.appendChild(s.stateNode);
			else if (s.tag !== 4 && s.child !== null) {
				s.child.return = s, s = s.child;
				continue
			}
			if (s === r) break;
			for (; s.sibling === null;) {
				if (s.return === null || s.return === r) return;
				s = s.return
			}
			s.sibling.return = s.return, s = s.sibling
		}
	}, mu = function() {}, bp = function(t, r, s, l) {
		var d = t.memoizedProps;
		if (d !== l) {
			t = r.stateNode, rr(Gt.current);
			var m = null;
			switch (s) {
				case "input":
					d = Wa(t, d), l = Wa(t, l), m = [];
					break;
				case "select":
					d = Z({}, d, {
						value: void 0
					}), l = Z({}, l, {
						value: void 0
					}), m = [];
					break;
				case "textarea":
					d = Qa(t, d), l = Qa(t, l), m = [];
					break;
				default:
					typeof d.onClick != "function" && typeof l.onClick == "function" && (t.onclick = Wo)
			}
			Ga(s, l);
			var w;
			s = null;
			for (z in d)
				if (!l.hasOwnProperty(z) && d.hasOwnProperty(z) && d[z] != null)
					if (z === "style") {
						var k = d[z];
						for (w in k) k.hasOwnProperty(w) && (s || (s = {}), s[w] = "")
					} else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (a.hasOwnProperty(z) ? m || (m = []) : (m = m || []).push(z, null));
			for (z in l) {
				var O = l[z];
				if (k = d?.[z], l.hasOwnProperty(z) && O !== k && (O != null || k != null))
					if (z === "style")
						if (k) {
							for (w in k) !k.hasOwnProperty(w) || O && O.hasOwnProperty(w) || (s || (s = {}), s[w] = "");
							for (w in O) O.hasOwnProperty(w) && k[w] !== O[w] && (s || (s = {}), s[w] = O[w])
						} else s || (m || (m = []), m.push(z, s)), s = O;
				else z === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, k = k ? k.__html : void 0, O != null && k !== O && (m = m || []).push(z, O)) : z === "children" ? typeof O != "string" && typeof O != "number" || (m = m || []).push(z, "" + O) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (a.hasOwnProperty(z) ? (O != null && z === "onScroll" && Ce("scroll", t), m || k === O || (m = [])) : (m = m || []).push(z, O))
			}
			s && (m = m || []).push("style", s);
			var z = m;
			(r.updateQueue = z) && (r.flags |= 4)
		}
	}, Ep = function(t, r, s, l) {
		s !== l && (r.flags |= 4)
	};

	function Bi(t, r) {
		if (!Oe) switch (t.tailMode) {
			case "hidden":
				r = t.tail;
				for (var s = null; r !== null;) r.alternate !== null && (s = r), r = r.sibling;
				s === null ? t.tail = null : s.sibling = null;
				break;
			case "collapsed":
				s = t.tail;
				for (var l = null; s !== null;) s.alternate !== null && (l = s), s = s.sibling;
				l === null ? r || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null
		}
	}

	function et(t) {
		var r = t.alternate !== null && t.alternate.child === t.child,
			s = 0,
			l = 0;
		if (r)
			for (var d = t.child; d !== null;) s |= d.lanes | d.childLanes, l |= d.subtreeFlags & 14680064, l |= d.flags & 14680064, d.return = t, d = d.sibling;
		else
			for (d = t.child; d !== null;) s |= d.lanes | d.childLanes, l |= d.subtreeFlags, l |= d.flags, d.return = t, d = d.sibling;
		return t.subtreeFlags |= l, t.childLanes = s, r
	}

	function C1(t, r, s) {
		var l = r.pendingProps;
		switch (Il(r), r.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return et(r), null;
			case 1:
				return lt(r.type) && Ko(), et(r), null;
			case 3:
				return l = r.stateNode, Vr(), ke(at), ke(Ze), Yl(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Xo(r) ? r.flags |= 4 : t === null || t.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, It !== null && (Cu(It), It = null))), mu(t, r), et(r), null;
			case 5:
				ql(r);
				var d = rr(Li.current);
				if (s = r.type, t !== null && r.stateNode != null) bp(t, r, s, l, d), t.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
				else {
					if (!l) {
						if (r.stateNode === null) throw Error(i(166));
						return et(r), null
					}
					if (t = rr(Gt.current), Xo(r)) {
						l = r.stateNode, s = r.type;
						var m = r.memoizedProps;
						switch (l[qt] = r, l[Ai] = m, t = (r.mode & 1) !== 0, s) {
							case "dialog":
								Ce("cancel", l), Ce("close", l);
								break;
							case "iframe":
							case "object":
							case "embed":
								Ce("load", l);
								break;
							case "video":
							case "audio":
								for (d = 0; d < Ri.length; d++) Ce(Ri[d], l);
								break;
							case "source":
								Ce("error", l);
								break;
							case "img":
							case "image":
							case "link":
								Ce("error", l), Ce("load", l);
								break;
							case "details":
								Ce("toggle", l);
								break;
							case "input":
								rd(l, m), Ce("invalid", l);
								break;
							case "select":
								l._wrapperState = {
									wasMultiple: !!m.multiple
								}, Ce("invalid", l);
								break;
							case "textarea":
								sd(l, m), Ce("invalid", l)
						}
						Ga(s, m), d = null;
						for (var w in m)
							if (m.hasOwnProperty(w)) {
								var k = m[w];
								w === "children" ? typeof k == "string" ? l.textContent !== k && (m.suppressHydrationWarning !== !0 && Ho(l.textContent, k, t), d = ["children", k]) : typeof k == "number" && l.textContent !== "" + k && (m.suppressHydrationWarning !== !0 && Ho(l.textContent, k, t), d = ["children", "" + k]) : a.hasOwnProperty(w) && k != null && w === "onScroll" && Ce("scroll", l)
							} switch (s) {
							case "input":
								Tt(l), od(l, m, !0);
								break;
							case "textarea":
								Tt(l), ld(l);
								break;
							case "select":
							case "option":
								break;
							default:
								typeof m.onClick == "function" && (l.onclick = Wo)
						}
						l = d, r.updateQueue = l, l !== null && (r.flags |= 4)
					} else {
						w = d.nodeType === 9 ? d : d.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = ud(s)), t === "http://www.w3.org/1999/xhtml" ? s === "script" ? (t = w.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof l.is == "string" ? t = w.createElement(s, {
							is: l.is
						}) : (t = w.createElement(s), s === "select" && (w = t, l.multiple ? w.multiple = !0 : l.size && (w.size = l.size))) : t = w.createElementNS(t, s), t[qt] = r, t[Ai] = l, Sp(t, r, !1, !1), r.stateNode = t;
						e: {
							switch (w = Ya(s, l), s) {
								case "dialog":
									Ce("cancel", t), Ce("close", t), d = l;
									break;
								case "iframe":
								case "object":
								case "embed":
									Ce("load", t), d = l;
									break;
								case "video":
								case "audio":
									for (d = 0; d < Ri.length; d++) Ce(Ri[d], t);
									d = l;
									break;
								case "source":
									Ce("error", t), d = l;
									break;
								case "img":
								case "image":
								case "link":
									Ce("error", t), Ce("load", t), d = l;
									break;
								case "details":
									Ce("toggle", t), d = l;
									break;
								case "input":
									rd(t, l), d = Wa(t, l), Ce("invalid", t);
									break;
								case "option":
									d = l;
									break;
								case "select":
									t._wrapperState = {
										wasMultiple: !!l.multiple
									}, d = Z({}, l, {
										value: void 0
									}), Ce("invalid", t);
									break;
								case "textarea":
									sd(t, l), d = Qa(t, l), Ce("invalid", t);
									break;
								default:
									d = l
							}
							Ga(s, d),
							k = d;
							for (m in k)
								if (k.hasOwnProperty(m)) {
									var O = k[m];
									m === "style" ? dd(t, O) : m === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, O != null && cd(t, O)) : m === "children" ? typeof O == "string" ? (s !== "textarea" || O !== "") && ui(t, O) : typeof O == "number" && ui(t, "" + O) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (a.hasOwnProperty(m) ? O != null && m === "onScroll" && Ce("scroll", t) : O != null && _(t, m, O, w))
								} switch (s) {
								case "input":
									Tt(t), od(t, l, !1);
									break;
								case "textarea":
									Tt(t), ld(t);
									break;
								case "option":
									l.value != null && t.setAttribute("value", "" + ue(l.value));
									break;
								case "select":
									t.multiple = !!l.multiple, m = l.value, m != null ? wr(t, !!l.multiple, m, !1) : l.defaultValue != null && wr(t, !!l.multiple, l.defaultValue, !0);
									break;
								default:
									typeof d.onClick == "function" && (t.onclick = Wo)
							}
							switch (s) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									l = !!l.autoFocus;
									break e;
								case "img":
									l = !0;
									break e;
								default:
									l = !1
							}
						}
						l && (r.flags |= 4)
					}
					r.ref !== null && (r.flags |= 512, r.flags |= 2097152)
				}
				return et(r), null;
			case 6:
				if (t && r.stateNode != null) Ep(t, r, t.memoizedProps, l);
				else {
					if (typeof l != "string" && r.stateNode === null) throw Error(i(166));
					if (s = rr(Li.current), rr(Gt.current), Xo(r)) {
						if (l = r.stateNode, s = r.memoizedProps, l[qt] = r, (m = l.nodeValue !== s) && (t = gt, t !== null)) switch (t.tag) {
							case 3:
								Ho(l.nodeValue, s, (t.mode & 1) !== 0);
								break;
							case 5:
								t.memoizedProps.suppressHydrationWarning !== !0 && Ho(l.nodeValue, s, (t.mode & 1) !== 0)
						}
						m && (r.flags |= 4)
					} else l = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(l), l[qt] = r, r.stateNode = l
				}
				return et(r), null;
			case 13:
				if (ke(je), l = r.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
					if (Oe && yt !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Ch(), Dr(), r.flags |= 98560, m = !1;
					else if (m = Xo(r), l !== null && l.dehydrated !== null) {
						if (t === null) {
							if (!m) throw Error(i(318));
							if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(i(317));
							m[qt] = r
						} else Dr(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
						et(r), m = !1
					} else It !== null && (Cu(It), It = null), m = !0;
					if (!m) return r.flags & 65536 ? r : null
				}
				return (r.flags & 128) !== 0 ? (r.lanes = s, r) : (l = l !== null, l !== (t !== null && t.memoizedState !== null) && l && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (t === null || (je.current & 1) !== 0 ? He === 0 && (He = 3) : _u())), r.updateQueue !== null && (r.flags |= 4), et(r), null);
			case 4:
				return Vr(), mu(t, r), t === null && _i(r.stateNode.containerInfo), et(r), null;
			case 10:
				return Hl(r.type._context), et(r), null;
			case 17:
				return lt(r.type) && Ko(), et(r), null;
			case 19:
				if (ke(je), m = r.memoizedState, m === null) return et(r), null;
				if (l = (r.flags & 128) !== 0, w = m.rendering, w === null)
					if (l) Bi(m, !1);
					else {
						if (He !== 0 || t !== null && (t.flags & 128) !== 0)
							for (t = r.child; t !== null;) {
								if (w = rs(t), w !== null) {
									for (r.flags |= 128, Bi(m, !1), l = w.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), r.subtreeFlags = 0, l = s, s = r.child; s !== null;) m = s, t = l, m.flags &= 14680066, w = m.alternate, w === null ? (m.childLanes = 0, m.lanes = t, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = w.childLanes, m.lanes = w.lanes, m.child = w.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = w.memoizedProps, m.memoizedState = w.memoizedState, m.updateQueue = w.updateQueue, m.type = w.type, t = w.dependencies, m.dependencies = t === null ? null : {
										lanes: t.lanes,
										firstContext: t.firstContext
									}), s = s.sibling;
									return Te(je, je.current & 1 | 2), r.child
								}
								t = t.sibling
							}
						m.tail !== null && Fe() > Hr && (r.flags |= 128, l = !0, Bi(m, !1), r.lanes = 4194304)
					}
				else {
					if (!l)
						if (t = rs(w), t !== null) {
							if (r.flags |= 128, l = !0, s = t.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), Bi(m, !0), m.tail === null && m.tailMode === "hidden" && !w.alternate && !Oe) return et(r), null
						} else 2 * Fe() - m.renderingStartTime > Hr && s !== 1073741824 && (r.flags |= 128, l = !0, Bi(m, !1), r.lanes = 4194304);
					m.isBackwards ? (w.sibling = r.child, r.child = w) : (s = m.last, s !== null ? s.sibling = w : r.child = w, m.last = w)
				}
				return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = Fe(), r.sibling = null, s = je.current, Te(je, l ? s & 1 | 2 : s & 1), r) : (et(r), null);
			case 22:
			case 23:
				return Ru(), l = r.memoizedState !== null, t !== null && t.memoizedState !== null !== l && (r.flags |= 8192), l && (r.mode & 1) !== 0 ? (vt & 1073741824) !== 0 && (et(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : et(r), null;
			case 24:
				return null;
			case 25:
				return null
		}
		throw Error(i(156, r.tag))
	}

	function k1(t, r) {
		switch (Il(r), r.tag) {
			case 1:
				return lt(r.type) && Ko(), t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
			case 3:
				return Vr(), ke(at), ke(Ze), Yl(), t = r.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (r.flags = t & -65537 | 128, r) : null;
			case 5:
				return ql(r), null;
			case 13:
				if (ke(je), t = r.memoizedState, t !== null && t.dehydrated !== null) {
					if (r.alternate === null) throw Error(i(340));
					Dr()
				}
				return t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
			case 19:
				return ke(je), null;
			case 4:
				return Vr(), null;
			case 10:
				return Hl(r.type._context), null;
			case 22:
			case 23:
				return Ru(), null;
			case 24:
				return null;
			default:
				return null
		}
	}
	var ds = !1,
		tt = !1,
		R1 = typeof WeakSet == "function" ? WeakSet : Set,
		re = null;

	function Br(t, r) {
		var s = t.ref;
		if (s !== null)
			if (typeof s == "function") try {
				s(null)
			} catch (l) {
				Le(t, r, l)
			} else s.current = null
	}

	function gu(t, r, s) {
		try {
			s()
		} catch (l) {
			Le(t, r, l)
		}
	}
	var Pp = !1;

	function _1(t, r) {
		if (Rl = No, t = nh(), wl(t)) {
			if ("selectionStart" in t) var s = {
				start: t.selectionStart,
				end: t.selectionEnd
			};
			else e: {
				s = (s = t.ownerDocument) && s.defaultView || window;
				var l = s.getSelection && s.getSelection();
				if (l && l.rangeCount !== 0) {
					s = l.anchorNode;
					var d = l.anchorOffset,
						m = l.focusNode;
					l = l.focusOffset;
					try {
						s.nodeType, m.nodeType
					} catch {
						s = null;
						break e
					}
					var w = 0,
						k = -1,
						O = -1,
						z = 0,
						G = 0,
						Y = t,
						Q = null;
					t: for (;;) {
						for (var ne; Y !== s || d !== 0 && Y.nodeType !== 3 || (k = w + d), Y !== m || l !== 0 && Y.nodeType !== 3 || (O = w + l), Y.nodeType === 3 && (w += Y.nodeValue.length), (ne = Y.firstChild) !== null;) Q = Y, Y = ne;
						for (;;) {
							if (Y === t) break t;
							if (Q === s && ++z === d && (k = w), Q === m && ++G === l && (O = w), (ne = Y.nextSibling) !== null) break;
							Y = Q, Q = Y.parentNode
						}
						Y = ne
					}
					s = k === -1 || O === -1 ? null : {
						start: k,
						end: O
					}
				} else s = null
			}
			s = s || {
				start: 0,
				end: 0
			}
		} else s = null;
		for (_l = {
				focusedElem: t,
				selectionRange: s
			}, No = !1, re = r; re !== null;)
			if (r = re, t = r.child, (r.subtreeFlags & 1028) !== 0 && t !== null) t.return = r, re = t;
			else
				for (; re !== null;) {
					r = re;
					try {
						var ie = r.alternate;
						if ((r.flags & 1024) !== 0) switch (r.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (ie !== null) {
									var se = ie.memoizedProps,
										Ve = ie.memoizedState,
										F = r.stateNode,
										N = F.getSnapshotBeforeUpdate(r.elementType === r.type ? se : Ft(r.type, se), Ve);
									F.__reactInternalSnapshotBeforeUpdate = N
								}
								break;
							case 3:
								var V = r.stateNode.containerInfo;
								V.nodeType === 1 ? V.textContent = "" : V.nodeType === 9 && V.documentElement && V.removeChild(V.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(i(163))
						}
					} catch (J) {
						Le(r, r.return, J)
					}
					if (t = r.sibling, t !== null) {
						t.return = r.return, re = t;
						break
					}
					re = r.return
				}
		return ie = Pp, Pp = !1, ie
	}

	function Ui(t, r, s) {
		var l = r.updateQueue;
		if (l = l !== null ? l.lastEffect : null, l !== null) {
			var d = l = l.next;
			do {
				if ((d.tag & t) === t) {
					var m = d.destroy;
					d.destroy = void 0, m !== void 0 && gu(r, s, m)
				}
				d = d.next
			} while (d !== l)
		}
	}

	function hs(t, r) {
		if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
			var s = r = r.next;
			do {
				if ((s.tag & t) === t) {
					var l = s.create;
					s.destroy = l()
				}
				s = s.next
			} while (s !== r)
		}
	}

	function yu(t) {
		var r = t.ref;
		if (r !== null) {
			var s = t.stateNode;
			t.tag, t = s, typeof r == "function" ? r(t) : r.current = t
		}
	}

	function Tp(t) {
		var r = t.alternate;
		r !== null && (t.alternate = null, Tp(r)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (r = t.stateNode, r !== null && (delete r[qt], delete r[Ai], delete r[jl], delete r[f1], delete r[d1])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
	}

	function Cp(t) {
		return t.tag === 5 || t.tag === 3 || t.tag === 4
	}

	function kp(t) {
		e: for (;;) {
			for (; t.sibling === null;) {
				if (t.return === null || Cp(t.return)) return null;
				t = t.return
			}
			for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
				if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
				t.child.return = t, t = t.child
			}
			if (!(t.flags & 2)) return t.stateNode
		}
	}

	function vu(t, r, s) {
		var l = t.tag;
		if (l === 5 || l === 6) t = t.stateNode, r ? s.nodeType === 8 ? s.parentNode.insertBefore(t, r) : s.insertBefore(t, r) : (s.nodeType === 8 ? (r = s.parentNode, r.insertBefore(t, s)) : (r = s, r.appendChild(t)), s = s._reactRootContainer, s != null || r.onclick !== null || (r.onclick = Wo));
		else if (l !== 4 && (t = t.child, t !== null))
			for (vu(t, r, s), t = t.sibling; t !== null;) vu(t, r, s), t = t.sibling
	}

	function xu(t, r, s) {
		var l = t.tag;
		if (l === 5 || l === 6) t = t.stateNode, r ? s.insertBefore(t, r) : s.appendChild(t);
		else if (l !== 4 && (t = t.child, t !== null))
			for (xu(t, r, s), t = t.sibling; t !== null;) xu(t, r, s), t = t.sibling
	}
	var qe = null,
		Vt = !1;

	function jn(t, r, s) {
		for (s = s.child; s !== null;) Rp(t, r, s), s = s.sibling
	}

	function Rp(t, r, s) {
		if (Qt && typeof Qt.onCommitFiberUnmount == "function") try {
			Qt.onCommitFiberUnmount(Co, s)
		} catch {}
		switch (s.tag) {
			case 5:
				tt || Br(s, r);
			case 6:
				var l = qe,
					d = Vt;
				qe = null, jn(t, r, s), qe = l, Vt = d, qe !== null && (Vt ? (t = qe, s = s.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(s) : t.removeChild(s)) : qe.removeChild(s.stateNode));
				break;
			case 18:
				qe !== null && (Vt ? (t = qe, s = s.stateNode, t.nodeType === 8 ? Nl(t.parentNode, s) : t.nodeType === 1 && Nl(t, s), wi(t)) : Nl(qe, s.stateNode));
				break;
			case 4:
				l = qe, d = Vt, qe = s.stateNode.containerInfo, Vt = !0, jn(t, r, s), qe = l, Vt = d;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!tt && (l = s.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
					d = l = l.next;
					do {
						var m = d,
							w = m.destroy;
						m = m.tag, w !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && gu(s, r, w), d = d.next
					} while (d !== l)
				}
				jn(t, r, s);
				break;
			case 1:
				if (!tt && (Br(s, r), l = s.stateNode, typeof l.componentWillUnmount == "function")) try {
					l.props = s.memoizedProps, l.state = s.memoizedState, l.componentWillUnmount()
				} catch (k) {
					Le(s, r, k)
				}
				jn(t, r, s);
				break;
			case 21:
				jn(t, r, s);
				break;
			case 22:
				s.mode & 1 ? (tt = (l = tt) || s.memoizedState !== null, jn(t, r, s), tt = l) : jn(t, r, s);
				break;
			default:
				jn(t, r, s)
		}
	}

	function _p(t) {
		var r = t.updateQueue;
		if (r !== null) {
			t.updateQueue = null;
			var s = t.stateNode;
			s === null && (s = t.stateNode = new R1), r.forEach(function(l) {
				var d = F1.bind(null, t, l);
				s.has(l) || (s.add(l), l.then(d, d))
			})
		}
	}

	function zt(t, r) {
		var s = r.deletions;
		if (s !== null)
			for (var l = 0; l < s.length; l++) {
				var d = s[l];
				try {
					var m = t,
						w = r,
						k = w;
					e: for (; k !== null;) {
						switch (k.tag) {
							case 5:
								qe = k.stateNode, Vt = !1;
								break e;
							case 3:
								qe = k.stateNode.containerInfo, Vt = !0;
								break e;
							case 4:
								qe = k.stateNode.containerInfo, Vt = !0;
								break e
						}
						k = k.return
					}
					if (qe === null) throw Error(i(160));
					Rp(m, w, d), qe = null, Vt = !1;
					var O = d.alternate;
					O !== null && (O.return = null), d.return = null
				} catch (z) {
					Le(d, r, z)
				}
			}
		if (r.subtreeFlags & 12854)
			for (r = r.child; r !== null;) Op(r, t), r = r.sibling
	}

	function Op(t, r) {
		var s = t.alternate,
			l = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (zt(r, t), Xt(t), l & 4) {
					try {
						Ui(3, t, t.return), hs(3, t)
					} catch (se) {
						Le(t, t.return, se)
					}
					try {
						Ui(5, t, t.return)
					} catch (se) {
						Le(t, t.return, se)
					}
				}
				break;
			case 1:
				zt(r, t), Xt(t), l & 512 && s !== null && Br(s, s.return);
				break;
			case 5:
				if (zt(r, t), Xt(t), l & 512 && s !== null && Br(s, s.return), t.flags & 32) {
					var d = t.stateNode;
					try {
						ui(d, "")
					} catch (se) {
						Le(t, t.return, se)
					}
				}
				if (l & 4 && (d = t.stateNode, d != null)) {
					var m = t.memoizedProps,
						w = s !== null ? s.memoizedProps : m,
						k = t.type,
						O = t.updateQueue;
					if (t.updateQueue = null, O !== null) try {
						k === "input" && m.type === "radio" && m.name != null && id(d, m), Ya(k, w);
						var z = Ya(k, m);
						for (w = 0; w < O.length; w += 2) {
							var G = O[w],
								Y = O[w + 1];
							G === "style" ? dd(d, Y) : G === "dangerouslySetInnerHTML" ? cd(d, Y) : G === "children" ? ui(d, Y) : _(d, G, Y, z)
						}
						switch (k) {
							case "input":
								$a(d, m);
								break;
							case "textarea":
								ad(d, m);
								break;
							case "select":
								var Q = d._wrapperState.wasMultiple;
								d._wrapperState.wasMultiple = !!m.multiple;
								var ne = m.value;
								ne != null ? wr(d, !!m.multiple, ne, !1) : Q !== !!m.multiple && (m.defaultValue != null ? wr(d, !!m.multiple, m.defaultValue, !0) : wr(d, !!m.multiple, m.multiple ? [] : "", !1))
						}
						d[Ai] = m
					} catch (se) {
						Le(t, t.return, se)
					}
				}
				break;
			case 6:
				if (zt(r, t), Xt(t), l & 4) {
					if (t.stateNode === null) throw Error(i(162));
					d = t.stateNode, m = t.memoizedProps;
					try {
						d.nodeValue = m
					} catch (se) {
						Le(t, t.return, se)
					}
				}
				break;
			case 3:
				if (zt(r, t), Xt(t), l & 4 && s !== null && s.memoizedState.isDehydrated) try {
					wi(r.containerInfo)
				} catch (se) {
					Le(t, t.return, se)
				}
				break;
			case 4:
				zt(r, t), Xt(t);
				break;
			case 13:
				zt(r, t), Xt(t), d = t.child, d.flags & 8192 && (m = d.memoizedState !== null, d.stateNode.isHidden = m, !m || d.alternate !== null && d.alternate.memoizedState !== null || (bu = Fe())), l & 4 && _p(t);
				break;
			case 22:
				if (G = s !== null && s.memoizedState !== null, t.mode & 1 ? (tt = (z = tt) || G, zt(r, t), tt = z) : zt(r, t), Xt(t), l & 8192) {
					if (z = t.memoizedState !== null, (t.stateNode.isHidden = z) && !G && (t.mode & 1) !== 0)
						for (re = t, G = t.child; G !== null;) {
							for (Y = re = G; re !== null;) {
								switch (Q = re, ne = Q.child, Q.tag) {
									case 0:
									case 11:
									case 14:
									case 15:
										Ui(4, Q, Q.return);
										break;
									case 1:
										Br(Q, Q.return);
										var ie = Q.stateNode;
										if (typeof ie.componentWillUnmount == "function") {
											l = Q, s = Q.return;
											try {
												r = l, ie.props = r.memoizedProps, ie.state = r.memoizedState, ie.componentWillUnmount()
											} catch (se) {
												Le(l, s, se)
											}
										}
										break;
									case 5:
										Br(Q, Q.return);
										break;
									case 22:
										if (Q.memoizedState !== null) {
											jp(Y);
											continue
										}
								}
								ne !== null ? (ne.return = Q, re = ne) : jp(Y)
							}
							G = G.sibling
						}
					e: for (G = null, Y = t;;) {
						if (Y.tag === 5) {
							if (G === null) {
								G = Y;
								try {
									d = Y.stateNode, z ? (m = d.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (k = Y.stateNode, O = Y.memoizedProps.style, w = O != null && O.hasOwnProperty("display") ? O.display : null, k.style.display = fd("display", w))
								} catch (se) {
									Le(t, t.return, se)
								}
							}
						} else if (Y.tag === 6) {
							if (G === null) try {
								Y.stateNode.nodeValue = z ? "" : Y.memoizedProps
							} catch (se) {
								Le(t, t.return, se)
							}
						} else if ((Y.tag !== 22 && Y.tag !== 23 || Y.memoizedState === null || Y === t) && Y.child !== null) {
							Y.child.return = Y, Y = Y.child;
							continue
						}
						if (Y === t) break e;
						for (; Y.sibling === null;) {
							if (Y.return === null || Y.return === t) break e;
							G === Y && (G = null), Y = Y.return
						}
						G === Y && (G = null), Y.sibling.return = Y.return, Y = Y.sibling
					}
				}
				break;
			case 19:
				zt(r, t), Xt(t), l & 4 && _p(t);
				break;
			case 21:
				break;
			default:
				zt(r, t), Xt(t)
		}
	}

	function Xt(t) {
		var r = t.flags;
		if (r & 2) {
			try {
				e: {
					for (var s = t.return; s !== null;) {
						if (Cp(s)) {
							var l = s;
							break e
						}
						s = s.return
					}
					throw Error(i(160))
				}
				switch (l.tag) {
					case 5:
						var d = l.stateNode;
						l.flags & 32 && (ui(d, ""), l.flags &= -33);
						var m = kp(t);
						xu(t, m, d);
						break;
					case 3:
					case 4:
						var w = l.stateNode.containerInfo,
							k = kp(t);
						vu(t, k, w);
						break;
					default:
						throw Error(i(161))
				}
			}
			catch (O) {
				Le(t, t.return, O)
			}
			t.flags &= -3
		}
		r & 4096 && (t.flags &= -4097)
	}

	function O1(t, r, s) {
		re = t, Ap(t)
	}

	function Ap(t, r, s) {
		for (var l = (t.mode & 1) !== 0; re !== null;) {
			var d = re,
				m = d.child;
			if (d.tag === 22 && l) {
				var w = d.memoizedState !== null || ds;
				if (!w) {
					var k = d.alternate,
						O = k !== null && k.memoizedState !== null || tt;
					k = ds;
					var z = tt;
					if (ds = w, (tt = O) && !z)
						for (re = d; re !== null;) w = re, O = w.child, w.tag === 22 && w.memoizedState !== null ? Mp(d) : O !== null ? (O.return = w, re = O) : Mp(d);
					for (; m !== null;) re = m, Ap(m), m = m.sibling;
					re = d, ds = k, tt = z
				}
				Np(t)
			} else(d.subtreeFlags & 8772) !== 0 && m !== null ? (m.return = d, re = m) : Np(t)
		}
	}

	function Np(t) {
		for (; re !== null;) {
			var r = re;
			if ((r.flags & 8772) !== 0) {
				var s = r.alternate;
				try {
					if ((r.flags & 8772) !== 0) switch (r.tag) {
						case 0:
						case 11:
						case 15:
							tt || hs(5, r);
							break;
						case 1:
							var l = r.stateNode;
							if (r.flags & 4 && !tt)
								if (s === null) l.componentDidMount();
								else {
									var d = r.elementType === r.type ? s.memoizedProps : Ft(r.type, s.memoizedProps);
									l.componentDidUpdate(d, s.memoizedState, l.__reactInternalSnapshotBeforeUpdate)
								} var m = r.updateQueue;
							m !== null && jh(r, m, l);
							break;
						case 3:
							var w = r.updateQueue;
							if (w !== null) {
								if (s = null, r.child !== null) switch (r.child.tag) {
									case 5:
										s = r.child.stateNode;
										break;
									case 1:
										s = r.child.stateNode
								}
								jh(r, w, s)
							}
							break;
						case 5:
							var k = r.stateNode;
							if (s === null && r.flags & 4) {
								s = k;
								var O = r.memoizedProps;
								switch (r.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										O.autoFocus && s.focus();
										break;
									case "img":
										O.src && (s.src = O.src)
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (r.memoizedState === null) {
								var z = r.alternate;
								if (z !== null) {
									var G = z.memoizedState;
									if (G !== null) {
										var Y = G.dehydrated;
										Y !== null && wi(Y)
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(i(163))
					}
					tt || r.flags & 512 && yu(r)
				} catch (Q) {
					Le(r, r.return, Q)
				}
			}
			if (r === t) {
				re = null;
				break
			}
			if (s = r.sibling, s !== null) {
				s.return = r.return, re = s;
				break
			}
			re = r.return
		}
	}

	function jp(t) {
		for (; re !== null;) {
			var r = re;
			if (r === t) {
				re = null;
				break
			}
			var s = r.sibling;
			if (s !== null) {
				s.return = r.return, re = s;
				break
			}
			re = r.return
		}
	}

	function Mp(t) {
		for (; re !== null;) {
			var r = re;
			try {
				switch (r.tag) {
					case 0:
					case 11:
					case 15:
						var s = r.return;
						try {
							hs(4, r)
						} catch (O) {
							Le(r, s, O)
						}
						break;
					case 1:
						var l = r.stateNode;
						if (typeof l.componentDidMount == "function") {
							var d = r.return;
							try {
								l.componentDidMount()
							} catch (O) {
								Le(r, d, O)
							}
						}
						var m = r.return;
						try {
							yu(r)
						} catch (O) {
							Le(r, m, O)
						}
						break;
					case 5:
						var w = r.return;
						try {
							yu(r)
						} catch (O) {
							Le(r, w, O)
						}
				}
			} catch (O) {
				Le(r, r.return, O)
			}
			if (r === t) {
				re = null;
				break
			}
			var k = r.sibling;
			if (k !== null) {
				k.return = r.return, re = k;
				break
			}
			re = r.return
		}
	}
	var A1 = Math.ceil,
		ps = A.ReactCurrentDispatcher,
		wu = A.ReactCurrentOwner,
		Ot = A.ReactCurrentBatchConfig,
		be = 0,
		Ke = null,
		Be = null,
		Ge = 0,
		vt = 0,
		Ur = Rn(0),
		He = 0,
		Hi = null,
		or = 0,
		ms = 0,
		Su = 0,
		Wi = null,
		ct = null,
		bu = 0,
		Hr = 1 / 0,
		pn = null,
		gs = !1,
		Eu = null,
		Mn = null,
		ys = !1,
		Dn = null,
		vs = 0,
		$i = 0,
		Pu = null,
		xs = -1,
		ws = 0;

	function ot() {
		return (be & 6) !== 0 ? Fe() : xs !== -1 ? xs : xs = Fe()
	}

	function Ln(t) {
		return (t.mode & 1) === 0 ? 1 : (be & 2) !== 0 && Ge !== 0 ? Ge & -Ge : p1.transition !== null ? (ws === 0 && (ws = kd()), ws) : (t = Pe, t !== 0 || (t = window.event, t = t === void 0 ? 16 : Ld(t.type)), t)
	}

	function Bt(t, r, s, l) {
		if (50 < $i) throw $i = 0, Pu = null, Error(i(185));
		mi(t, s, l), ((be & 2) === 0 || t !== Ke) && (t === Ke && ((be & 2) === 0 && (ms |= s), He === 4 && In(t, Ge)), ft(t, l), s === 1 && be === 0 && (r.mode & 1) === 0 && (Hr = Fe() + 500, qo && On()))
	}

	function ft(t, r) {
		var s = t.callbackNode;
		pw(t, r);
		var l = _o(t, t === Ke ? Ge : 0);
		if (l === 0) s !== null && Pd(s), t.callbackNode = null, t.callbackPriority = 0;
		else if (r = l & -l, t.callbackPriority !== r) {
			if (s != null && Pd(s), r === 1) t.tag === 0 ? h1(Lp.bind(null, t)) : Sh(Lp.bind(null, t)), u1(function() {
				(be & 6) === 0 && On()
			}), s = null;
			else {
				switch (Rd(l)) {
					case 1:
						s = rl;
						break;
					case 4:
						s = Td;
						break;
					case 16:
						s = To;
						break;
					case 536870912:
						s = Cd;
						break;
					default:
						s = To
				}
				s = Wp(s, Dp.bind(null, t))
			}
			t.callbackPriority = r, t.callbackNode = s
		}
	}

	function Dp(t, r) {
		if (xs = -1, ws = 0, (be & 6) !== 0) throw Error(i(327));
		var s = t.callbackNode;
		if (Wr() && t.callbackNode !== s) return null;
		var l = _o(t, t === Ke ? Ge : 0);
		if (l === 0) return null;
		if ((l & 30) !== 0 || (l & t.expiredLanes) !== 0 || r) r = Ss(t, l);
		else {
			r = l;
			var d = be;
			be |= 2;
			var m = Fp();
			(Ke !== t || Ge !== r) && (pn = null, Hr = Fe() + 500, ar(t, r));
			do try {
				M1();
				break
			} catch (k) {
				Ip(t, k)
			}
			while (!0);
			Ul(), ps.current = m, be = d, Be !== null ? r = 0 : (Ke = null, Ge = 0, r = He)
		}
		if (r !== 0) {
			if (r === 2 && (d = il(t), d !== 0 && (l = d, r = Tu(t, d))), r === 1) throw s = Hi, ar(t, 0), In(t, l), ft(t, Fe()), s;
			if (r === 6) In(t, l);
			else {
				if (d = t.current.alternate, (l & 30) === 0 && !N1(d) && (r = Ss(t, l), r === 2 && (m = il(t), m !== 0 && (l = m, r = Tu(t, m))), r === 1)) throw s = Hi, ar(t, 0), In(t, l), ft(t, Fe()), s;
				switch (t.finishedWork = d, t.finishedLanes = l, r) {
					case 0:
					case 1:
						throw Error(i(345));
					case 2:
						lr(t, ct, pn);
						break;
					case 3:
						if (In(t, l), (l & 130023424) === l && (r = bu + 500 - Fe(), 10 < r)) {
							if (_o(t, 0) !== 0) break;
							if (d = t.suspendedLanes, (d & l) !== l) {
								ot(), t.pingedLanes |= t.suspendedLanes & d;
								break
							}
							t.timeoutHandle = Al(lr.bind(null, t, ct, pn), r);
							break
						}
						lr(t, ct, pn);
						break;
					case 4:
						if (In(t, l), (l & 4194240) === l) break;
						for (r = t.eventTimes, d = -1; 0 < l;) {
							var w = 31 - Dt(l);
							m = 1 << w, w = r[w], w > d && (d = w), l &= ~m
						}
						if (l = d, l = Fe() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * A1(l / 1960)) - l, 10 < l) {
							t.timeoutHandle = Al(lr.bind(null, t, ct, pn), l);
							break
						}
						lr(t, ct, pn);
						break;
					case 5:
						lr(t, ct, pn);
						break;
					default:
						throw Error(i(329))
				}
			}
		}
		return ft(t, Fe()), t.callbackNode === s ? Dp.bind(null, t) : null
	}

	function Tu(t, r) {
		var s = Wi;
		return t.current.memoizedState.isDehydrated && (ar(t, r).flags |= 256), t = Ss(t, r), t !== 2 && (r = ct, ct = s, r !== null && Cu(r)), t
	}

	function Cu(t) {
		ct === null ? ct = t : ct.push.apply(ct, t)
	}

	function N1(t) {
		for (var r = t;;) {
			if (r.flags & 16384) {
				var s = r.updateQueue;
				if (s !== null && (s = s.stores, s !== null))
					for (var l = 0; l < s.length; l++) {
						var d = s[l],
							m = d.getSnapshot;
						d = d.value;
						try {
							if (!Lt(m(), d)) return !1
						} catch {
							return !1
						}
					}
			}
			if (s = r.child, r.subtreeFlags & 16384 && s !== null) s.return = r, r = s;
			else {
				if (r === t) break;
				for (; r.sibling === null;) {
					if (r.return === null || r.return === t) return !0;
					r = r.return
				}
				r.sibling.return = r.return, r = r.sibling
			}
		}
		return !0
	}

	function In(t, r) {
		for (r &= ~Su, r &= ~ms, t.suspendedLanes |= r, t.pingedLanes &= ~r, t = t.expirationTimes; 0 < r;) {
			var s = 31 - Dt(r),
				l = 1 << s;
			t[s] = -1, r &= ~l
		}
	}

	function Lp(t) {
		if ((be & 6) !== 0) throw Error(i(327));
		Wr();
		var r = _o(t, 0);
		if ((r & 1) === 0) return ft(t, Fe()), null;
		var s = Ss(t, r);
		if (t.tag !== 0 && s === 2) {
			var l = il(t);
			l !== 0 && (r = l, s = Tu(t, l))
		}
		if (s === 1) throw s = Hi, ar(t, 0), In(t, r), ft(t, Fe()), s;
		if (s === 6) throw Error(i(345));
		return t.finishedWork = t.current.alternate, t.finishedLanes = r, lr(t, ct, pn), ft(t, Fe()), null
	}

	function ku(t, r) {
		var s = be;
		be |= 1;
		try {
			return t(r)
		} finally {
			be = s, be === 0 && (Hr = Fe() + 500, qo && On())
		}
	}

	function sr(t) {
		Dn !== null && Dn.tag === 0 && (be & 6) === 0 && Wr();
		var r = be;
		be |= 1;
		var s = Ot.transition,
			l = Pe;
		try {
			if (Ot.transition = null, Pe = 1, t) return t()
		} finally {
			Pe = l, Ot.transition = s, be = r, (be & 6) === 0 && On()
		}
	}

	function Ru() {
		vt = Ur.current, ke(Ur)
	}

	function ar(t, r) {
		t.finishedWork = null, t.finishedLanes = 0;
		var s = t.timeoutHandle;
		if (s !== -1 && (t.timeoutHandle = -1, l1(s)), Be !== null)
			for (s = Be.return; s !== null;) {
				var l = s;
				switch (Il(l), l.tag) {
					case 1:
						l = l.type.childContextTypes, l != null && Ko();
						break;
					case 3:
						Vr(), ke(at), ke(Ze), Yl();
						break;
					case 5:
						ql(l);
						break;
					case 4:
						Vr();
						break;
					case 13:
						ke(je);
						break;
					case 19:
						ke(je);
						break;
					case 10:
						Hl(l.type._context);
						break;
					case 22:
					case 23:
						Ru()
				}
				s = s.return
			}
		if (Ke = t, Be = t = Fn(t.current, null), Ge = vt = r, He = 0, Hi = null, Su = ms = or = 0, ct = Wi = null, nr !== null) {
			for (r = 0; r < nr.length; r++)
				if (s = nr[r], l = s.interleaved, l !== null) {
					s.interleaved = null;
					var d = l.next,
						m = s.pending;
					if (m !== null) {
						var w = m.next;
						m.next = d, l.next = w
					}
					s.pending = l
				} nr = null
		}
		return t
	}

	function Ip(t, r) {
		do {
			var s = Be;
			try {
				if (Ul(), is.current = ls, os) {
					for (var l = Me.memoizedState; l !== null;) {
						var d = l.queue;
						d !== null && (d.pending = null), l = l.next
					}
					os = !1
				}
				if (ir = 0, $e = Ue = Me = null, Ii = !1, Fi = 0, wu.current = null, s === null || s.return === null) {
					He = 1, Hi = r, Be = null;
					break
				}
				e: {
					var m = t,
						w = s.return,
						k = s,
						O = r;
					if (r = Ge, k.flags |= 32768, O !== null && typeof O == "object" && typeof O.then == "function") {
						var z = O,
							G = k,
							Y = G.tag;
						if ((G.mode & 1) === 0 && (Y === 0 || Y === 11 || Y === 15)) {
							var Q = G.alternate;
							Q ? (G.updateQueue = Q.updateQueue, G.memoizedState = Q.memoizedState, G.lanes = Q.lanes) : (G.updateQueue = null, G.memoizedState = null)
						}
						var ne = lp(w);
						if (ne !== null) {
							ne.flags &= -257, up(ne, w, k, m, r), ne.mode & 1 && ap(m, z, r), r = ne, O = z;
							var ie = r.updateQueue;
							if (ie === null) {
								var se = new Set;
								se.add(O), r.updateQueue = se
							} else ie.add(O);
							break e
						} else {
							if ((r & 1) === 0) {
								ap(m, z, r), _u();
								break e
							}
							O = Error(i(426))
						}
					} else if (Oe && k.mode & 1) {
						var Ve = lp(w);
						if (Ve !== null) {
							(Ve.flags & 65536) === 0 && (Ve.flags |= 256), up(Ve, w, k, m, r), zl(zr(O, k));
							break e
						}
					}
					m = O = zr(O, k),
					He !== 4 && (He = 2),
					Wi === null ? Wi = [m] : Wi.push(m),
					m = w;do {
						switch (m.tag) {
							case 3:
								m.flags |= 65536, r &= -r, m.lanes |= r;
								var F = op(m, O, r);
								Nh(m, F);
								break e;
							case 1:
								k = O;
								var N = m.type,
									V = m.stateNode;
								if ((m.flags & 128) === 0 && (typeof N.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && (Mn === null || !Mn.has(V)))) {
									m.flags |= 65536, r &= -r, m.lanes |= r;
									var J = sp(m, k, r);
									Nh(m, J);
									break e
								}
						}
						m = m.return
					} while (m !== null)
				}
				zp(s)
			} catch (ae) {
				r = ae, Be === s && s !== null && (Be = s = s.return);
				continue
			}
			break
		} while (!0)
	}

	function Fp() {
		var t = ps.current;
		return ps.current = ls, t === null ? ls : t
	}

	function _u() {
		(He === 0 || He === 3 || He === 2) && (He = 4), Ke === null || (or & 268435455) === 0 && (ms & 268435455) === 0 || In(Ke, Ge)
	}

	function Ss(t, r) {
		var s = be;
		be |= 2;
		var l = Fp();
		(Ke !== t || Ge !== r) && (pn = null, ar(t, r));
		do try {
			j1();
			break
		} catch (d) {
			Ip(t, d)
		}
		while (!0);
		if (Ul(), be = s, ps.current = l, Be !== null) throw Error(i(261));
		return Ke = null, Ge = 0, He
	}

	function j1() {
		for (; Be !== null;) Vp(Be)
	}

	function M1() {
		for (; Be !== null && !ow();) Vp(Be)
	}

	function Vp(t) {
		var r = Hp(t.alternate, t, vt);
		t.memoizedProps = t.pendingProps, r === null ? zp(t) : Be = r, wu.current = null
	}

	function zp(t) {
		var r = t;
		do {
			var s = r.alternate;
			if (t = r.return, (r.flags & 32768) === 0) {
				if (s = C1(s, r, vt), s !== null) {
					Be = s;
					return
				}
			} else {
				if (s = k1(s, r), s !== null) {
					s.flags &= 32767, Be = s;
					return
				}
				if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
				else {
					He = 6, Be = null;
					return
				}
			}
			if (r = r.sibling, r !== null) {
				Be = r;
				return
			}
			Be = r = t
		} while (r !== null);
		He === 0 && (He = 5)
	}

	function lr(t, r, s) {
		var l = Pe,
			d = Ot.transition;
		try {
			Ot.transition = null, Pe = 1, D1(t, r, s, l)
		} finally {
			Ot.transition = d, Pe = l
		}
		return null
	}

	function D1(t, r, s, l) {
		do Wr(); while (Dn !== null);
		if ((be & 6) !== 0) throw Error(i(327));
		s = t.finishedWork;
		var d = t.finishedLanes;
		if (s === null) return null;
		if (t.finishedWork = null, t.finishedLanes = 0, s === t.current) throw Error(i(177));
		t.callbackNode = null, t.callbackPriority = 0;
		var m = s.lanes | s.childLanes;
		if (mw(t, m), t === Ke && (Be = Ke = null, Ge = 0), (s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0 || ys || (ys = !0, Wp(To, function() {
				return Wr(), null
			})), m = (s.flags & 15990) !== 0, (s.subtreeFlags & 15990) !== 0 || m) {
			m = Ot.transition, Ot.transition = null;
			var w = Pe;
			Pe = 1;
			var k = be;
			be |= 4, wu.current = null, _1(t, s), Op(s, t), t1(_l), No = !!Rl, _l = Rl = null, t.current = s, O1(s), sw(), be = k, Pe = w, Ot.transition = m
		} else t.current = s;
		if (ys && (ys = !1, Dn = t, vs = d), m = t.pendingLanes, m === 0 && (Mn = null), uw(s.stateNode), ft(t, Fe()), r !== null)
			for (l = t.onRecoverableError, s = 0; s < r.length; s++) d = r[s], l(d.value, {
				componentStack: d.stack,
				digest: d.digest
			});
		if (gs) throw gs = !1, t = Eu, Eu = null, t;
		return (vs & 1) !== 0 && t.tag !== 0 && Wr(), m = t.pendingLanes, (m & 1) !== 0 ? t === Pu ? $i++ : ($i = 0, Pu = t) : $i = 0, On(), null
	}

	function Wr() {
		if (Dn !== null) {
			var t = Rd(vs),
				r = Ot.transition,
				s = Pe;
			try {
				if (Ot.transition = null, Pe = 16 > t ? 16 : t, Dn === null) var l = !1;
				else {
					if (t = Dn, Dn = null, vs = 0, (be & 6) !== 0) throw Error(i(331));
					var d = be;
					for (be |= 4, re = t.current; re !== null;) {
						var m = re,
							w = m.child;
						if ((re.flags & 16) !== 0) {
							var k = m.deletions;
							if (k !== null) {
								for (var O = 0; O < k.length; O++) {
									var z = k[O];
									for (re = z; re !== null;) {
										var G = re;
										switch (G.tag) {
											case 0:
											case 11:
											case 15:
												Ui(8, G, m)
										}
										var Y = G.child;
										if (Y !== null) Y.return = G, re = Y;
										else
											for (; re !== null;) {
												G = re;
												var Q = G.sibling,
													ne = G.return;
												if (Tp(G), G === z) {
													re = null;
													break
												}
												if (Q !== null) {
													Q.return = ne, re = Q;
													break
												}
												re = ne
											}
									}
								}
								var ie = m.alternate;
								if (ie !== null) {
									var se = ie.child;
									if (se !== null) {
										ie.child = null;
										do {
											var Ve = se.sibling;
											se.sibling = null, se = Ve
										} while (se !== null)
									}
								}
								re = m
							}
						}
						if ((m.subtreeFlags & 2064) !== 0 && w !== null) w.return = m, re = w;
						else e: for (; re !== null;) {
							if (m = re, (m.flags & 2048) !== 0) switch (m.tag) {
								case 0:
								case 11:
								case 15:
									Ui(9, m, m.return)
							}
							var F = m.sibling;
							if (F !== null) {
								F.return = m.return, re = F;
								break e
							}
							re = m.return
						}
					}
					var N = t.current;
					for (re = N; re !== null;) {
						w = re;
						var V = w.child;
						if ((w.subtreeFlags & 2064) !== 0 && V !== null) V.return = w, re = V;
						else e: for (w = N; re !== null;) {
							if (k = re, (k.flags & 2048) !== 0) try {
								switch (k.tag) {
									case 0:
									case 11:
									case 15:
										hs(9, k)
								}
							} catch (ae) {
								Le(k, k.return, ae)
							}
							if (k === w) {
								re = null;
								break e
							}
							var J = k.sibling;
							if (J !== null) {
								J.return = k.return, re = J;
								break e
							}
							re = k.return
						}
					}
					if (be = d, On(), Qt && typeof Qt.onPostCommitFiberRoot == "function") try {
						Qt.onPostCommitFiberRoot(Co, t)
					} catch {}
					l = !0
				}
				return l
			} finally {
				Pe = s, Ot.transition = r
			}
		}
		return !1
	}

	function Bp(t, r, s) {
		r = zr(s, r), r = op(t, r, 1), t = Nn(t, r, 1), r = ot(), t !== null && (mi(t, 1, r), ft(t, r))
	}

	function Le(t, r, s) {
		if (t.tag === 3) Bp(t, t, s);
		else
			for (; r !== null;) {
				if (r.tag === 3) {
					Bp(r, t, s);
					break
				} else if (r.tag === 1) {
					var l = r.stateNode;
					if (typeof r.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Mn === null || !Mn.has(l))) {
						t = zr(s, t), t = sp(r, t, 1), r = Nn(r, t, 1), t = ot(), r !== null && (mi(r, 1, t), ft(r, t));
						break
					}
				}
				r = r.return
			}
	}

	function L1(t, r, s) {
		var l = t.pingCache;
		l !== null && l.delete(r), r = ot(), t.pingedLanes |= t.suspendedLanes & s, Ke === t && (Ge & s) === s && (He === 4 || He === 3 && (Ge & 130023424) === Ge && 500 > Fe() - bu ? ar(t, 0) : Su |= s), ft(t, r)
	}

	function Up(t, r) {
		r === 0 && ((t.mode & 1) === 0 ? r = 1 : (r = Ro, Ro <<= 1, (Ro & 130023424) === 0 && (Ro = 4194304)));
		var s = ot();
		t = fn(t, r), t !== null && (mi(t, r, s), ft(t, s))
	}

	function I1(t) {
		var r = t.memoizedState,
			s = 0;
		r !== null && (s = r.retryLane), Up(t, s)
	}

	function F1(t, r) {
		var s = 0;
		switch (t.tag) {
			case 13:
				var l = t.stateNode,
					d = t.memoizedState;
				d !== null && (s = d.retryLane);
				break;
			case 19:
				l = t.stateNode;
				break;
			default:
				throw Error(i(314))
		}
		l !== null && l.delete(r), Up(t, s)
	}
	var Hp;
	Hp = function(t, r, s) {
		if (t !== null)
			if (t.memoizedProps !== r.pendingProps || at.current) ut = !0;
			else {
				if ((t.lanes & s) === 0 && (r.flags & 128) === 0) return ut = !1, T1(t, r, s);
				ut = (t.flags & 131072) !== 0
			}
		else ut = !1, Oe && (r.flags & 1048576) !== 0 && bh(r, Yo, r.index);
		switch (r.lanes = 0, r.tag) {
			case 2:
				var l = r.type;
				fs(t, r), t = r.pendingProps;
				var d = Nr(r, Ze.current);
				Fr(r, s), d = Jl(null, r, l, t, d, s);
				var m = eu();
				return r.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, lt(l) ? (m = !0, Qo(r)) : m = !1, r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, Kl(r), d.updater = us, r.stateNode = d, d._reactInternals = r, su(r, l, t, s), r = cu(null, r, l, !0, m, s)) : (r.tag = 0, Oe && m && Ll(r), it(null, r, d, s), r = r.child), r;
			case 16:
				l = r.elementType;
				e: {
					switch (fs(t, r), t = r.pendingProps, d = l._init, l = d(l._payload), r.type = l, d = r.tag = z1(l), t = Ft(l, t), d) {
						case 0:
							r = uu(null, r, l, t, s);
							break e;
						case 1:
							r = mp(null, r, l, t, s);
							break e;
						case 11:
							r = cp(null, r, l, t, s);
							break e;
						case 14:
							r = fp(null, r, l, Ft(l.type, t), s);
							break e
					}
					throw Error(i(306, l, ""))
				}
				return r;
			case 0:
				return l = r.type, d = r.pendingProps, d = r.elementType === l ? d : Ft(l, d), uu(t, r, l, d, s);
			case 1:
				return l = r.type, d = r.pendingProps, d = r.elementType === l ? d : Ft(l, d), mp(t, r, l, d, s);
			case 3:
				e: {
					if (gp(r), t === null) throw Error(i(387));l = r.pendingProps,
					m = r.memoizedState,
					d = m.element,
					Ah(t, r),
					ns(r, l, null, s);
					var w = r.memoizedState;
					if (l = w.element, m.isDehydrated)
						if (m = {
								element: l,
								isDehydrated: !1,
								cache: w.cache,
								pendingSuspenseBoundaries: w.pendingSuspenseBoundaries,
								transitions: w.transitions
							}, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
							d = zr(Error(i(423)), r), r = yp(t, r, l, s, d);
							break e
						} else if (l !== d) {
						d = zr(Error(i(424)), r), r = yp(t, r, l, s, d);
						break e
					} else
						for (yt = kn(r.stateNode.containerInfo.firstChild), gt = r, Oe = !0, It = null, s = _h(r, null, l, s), r.child = s; s;) s.flags = s.flags & -3 | 4096, s = s.sibling;
					else {
						if (Dr(), l === d) {
							r = hn(t, r, s);
							break e
						}
						it(t, r, l, s)
					}
					r = r.child
				}
				return r;
			case 5:
				return Mh(r), t === null && Vl(r), l = r.type, d = r.pendingProps, m = t !== null ? t.memoizedProps : null, w = d.children, Ol(l, d) ? w = null : m !== null && Ol(l, m) && (r.flags |= 32), pp(t, r), it(t, r, w, s), r.child;
			case 6:
				return t === null && Vl(r), null;
			case 13:
				return vp(t, r, s);
			case 4:
				return Ql(r, r.stateNode.containerInfo), l = r.pendingProps, t === null ? r.child = Lr(r, null, l, s) : it(t, r, l, s), r.child;
			case 11:
				return l = r.type, d = r.pendingProps, d = r.elementType === l ? d : Ft(l, d), cp(t, r, l, d, s);
			case 7:
				return it(t, r, r.pendingProps, s), r.child;
			case 8:
				return it(t, r, r.pendingProps.children, s), r.child;
			case 12:
				return it(t, r, r.pendingProps.children, s), r.child;
			case 10:
				e: {
					if (l = r.type._context, d = r.pendingProps, m = r.memoizedProps, w = d.value, Te(Jo, l._currentValue), l._currentValue = w, m !== null)
						if (Lt(m.value, w)) {
							if (m.children === d.children && !at.current) {
								r = hn(t, r, s);
								break e
							}
						} else
							for (m = r.child, m !== null && (m.return = r); m !== null;) {
								var k = m.dependencies;
								if (k !== null) {
									w = m.child;
									for (var O = k.firstContext; O !== null;) {
										if (O.context === l) {
											if (m.tag === 1) {
												O = dn(-1, s & -s), O.tag = 2;
												var z = m.updateQueue;
												if (z !== null) {
													z = z.shared;
													var G = z.pending;
													G === null ? O.next = O : (O.next = G.next, G.next = O), z.pending = O
												}
											}
											m.lanes |= s, O = m.alternate, O !== null && (O.lanes |= s), Wl(m.return, s, r), k.lanes |= s;
											break
										}
										O = O.next
									}
								} else if (m.tag === 10) w = m.type === r.type ? null : m.child;
								else if (m.tag === 18) {
									if (w = m.return, w === null) throw Error(i(341));
									w.lanes |= s, k = w.alternate, k !== null && (k.lanes |= s), Wl(w, s, r), w = m.sibling
								} else w = m.child;
								if (w !== null) w.return = m;
								else
									for (w = m; w !== null;) {
										if (w === r) {
											w = null;
											break
										}
										if (m = w.sibling, m !== null) {
											m.return = w.return, w = m;
											break
										}
										w = w.return
									}
								m = w
							}
					it(t, r, d.children, s),
					r = r.child
				}
				return r;
			case 9:
				return d = r.type, l = r.pendingProps.children, Fr(r, s), d = Rt(d), l = l(d), r.flags |= 1, it(t, r, l, s), r.child;
			case 14:
				return l = r.type, d = Ft(l, r.pendingProps), d = Ft(l.type, d), fp(t, r, l, d, s);
			case 15:
				return dp(t, r, r.type, r.pendingProps, s);
			case 17:
				return l = r.type, d = r.pendingProps, d = r.elementType === l ? d : Ft(l, d), fs(t, r), r.tag = 1, lt(l) ? (t = !0, Qo(r)) : t = !1, Fr(r, s), rp(r, l, d), su(r, l, d, s), cu(null, r, l, !0, t, s);
			case 19:
				return wp(t, r, s);
			case 22:
				return hp(t, r, s)
		}
		throw Error(i(156, r.tag))
	};

	function Wp(t, r) {
		return Ed(t, r)
	}

	function V1(t, r, s, l) {
		this.tag = t, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
	}

	function At(t, r, s, l) {
		return new V1(t, r, s, l)
	}

	function Ou(t) {
		return t = t.prototype, !(!t || !t.isReactComponent)
	}

	function z1(t) {
		if (typeof t == "function") return Ou(t) ? 1 : 0;
		if (t != null) {
			if (t = t.$$typeof, t === D) return 11;
			if (t === ce) return 14
		}
		return 2
	}

	function Fn(t, r) {
		var s = t.alternate;
		return s === null ? (s = At(t.tag, r, t.key, t.mode), s.elementType = t.elementType, s.type = t.type, s.stateNode = t.stateNode, s.alternate = t, t.alternate = s) : (s.pendingProps = r, s.type = t.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = t.flags & 14680064, s.childLanes = t.childLanes, s.lanes = t.lanes, s.child = t.child, s.memoizedProps = t.memoizedProps, s.memoizedState = t.memoizedState, s.updateQueue = t.updateQueue, r = t.dependencies, s.dependencies = r === null ? null : {
			lanes: r.lanes,
			firstContext: r.firstContext
		}, s.sibling = t.sibling, s.index = t.index, s.ref = t.ref, s
	}

	function bs(t, r, s, l, d, m) {
		var w = 2;
		if (l = t, typeof t == "function") Ou(t) && (w = 1);
		else if (typeof t == "string") w = 5;
		else e: switch (t) {
			case I:
				return ur(s.children, d, m, r);
			case B:
				w = 8, d |= 8;
				break;
			case q:
				return t = At(12, s, r, d | 2), t.elementType = q, t.lanes = m, t;
			case X:
				return t = At(13, s, r, d), t.elementType = X, t.lanes = m, t;
			case U:
				return t = At(19, s, r, d), t.elementType = U, t.lanes = m, t;
			case te:
				return Es(s, d, m, r);
			default:
				if (typeof t == "object" && t !== null) switch (t.$$typeof) {
					case W:
						w = 10;
						break e;
					case $:
						w = 9;
						break e;
					case D:
						w = 11;
						break e;
					case ce:
						w = 14;
						break e;
					case oe:
						w = 16, l = null;
						break e
				}
				throw Error(i(130, t == null ? t : typeof t, ""))
		}
		return r = At(w, s, r, d), r.elementType = t, r.type = l, r.lanes = m, r
	}

	function ur(t, r, s, l) {
		return t = At(7, t, l, r), t.lanes = s, t
	}

	function Es(t, r, s, l) {
		return t = At(22, t, l, r), t.elementType = te, t.lanes = s, t.stateNode = {
			isHidden: !1
		}, t
	}

	function Au(t, r, s) {
		return t = At(6, t, null, r), t.lanes = s, t
	}

	function Nu(t, r, s) {
		return r = At(4, t.children !== null ? t.children : [], t.key, r), r.lanes = s, r.stateNode = {
			containerInfo: t.containerInfo,
			pendingChildren: null,
			implementation: t.implementation
		}, r
	}

	function B1(t, r, s, l, d) {
		this.tag = r, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ol(0), this.expirationTimes = ol(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ol(0), this.identifierPrefix = l, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null
	}

	function ju(t, r, s, l, d, m, w, k, O) {
		return t = new B1(t, r, s, k, O), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = At(3, null, null, r), t.current = m, m.stateNode = t, m.memoizedState = {
			element: l,
			isDehydrated: s,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		}, Kl(m), t
	}

	function U1(t, r, s) {
		var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: L,
			key: l == null ? null : "" + l,
			children: t,
			containerInfo: r,
			implementation: s
		}
	}

	function $p(t) {
		if (!t) return _n;
		t = t._reactInternals;
		e: {
			if (Xn(t) !== t || t.tag !== 1) throw Error(i(170));
			var r = t;do {
				switch (r.tag) {
					case 3:
						r = r.stateNode.context;
						break e;
					case 1:
						if (lt(r.type)) {
							r = r.stateNode.__reactInternalMemoizedMergedChildContext;
							break e
						}
				}
				r = r.return
			} while (r !== null);
			throw Error(i(171))
		}
		if (t.tag === 1) {
			var s = t.type;
			if (lt(s)) return xh(t, s, r)
		}
		return r
	}

	function Kp(t, r, s, l, d, m, w, k, O) {
		return t = ju(s, l, !0, t, d, m, w, k, O), t.context = $p(null), s = t.current, l = ot(), d = Ln(s), m = dn(l, d), m.callback = r ?? null, Nn(s, m, d), t.current.lanes = d, mi(t, d, l), ft(t, l), t
	}

	function Ps(t, r, s, l) {
		var d = r.current,
			m = ot(),
			w = Ln(d);
		return s = $p(s), r.context === null ? r.context = s : r.pendingContext = s, r = dn(m, w), r.payload = {
			element: t
		}, l = l === void 0 ? null : l, l !== null && (r.callback = l), t = Nn(d, r, w), t !== null && (Bt(t, d, w, m), ts(t, d, w)), w
	}

	function Ts(t) {
		return t = t.current, t.child ? (t.child.tag === 5, t.child.stateNode) : null
	}

	function Qp(t, r) {
		if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
			var s = t.retryLane;
			t.retryLane = s !== 0 && s < r ? s : r
		}
	}

	function Mu(t, r) {
		Qp(t, r), (t = t.alternate) && Qp(t, r)
	}

	function H1() {
		return null
	}
	var qp = typeof reportError == "function" ? reportError : function(t) {
		console.error(t)
	};

	function Du(t) {
		this._internalRoot = t
	}
	Cs.prototype.render = Du.prototype.render = function(t) {
		var r = this._internalRoot;
		if (r === null) throw Error(i(409));
		Ps(t, r, null, null)
	}, Cs.prototype.unmount = Du.prototype.unmount = function() {
		var t = this._internalRoot;
		if (t !== null) {
			this._internalRoot = null;
			var r = t.containerInfo;
			sr(function() {
				Ps(null, t, null, null)
			}), r[an] = null
		}
	};

	function Cs(t) {
		this._internalRoot = t
	}
	Cs.prototype.unstable_scheduleHydration = function(t) {
		if (t) {
			var r = Ad();
			t = {
				blockedOn: null,
				target: t,
				priority: r
			};
			for (var s = 0; s < Pn.length && r !== 0 && r < Pn[s].priority; s++);
			Pn.splice(s, 0, t), s === 0 && Md(t)
		}
	};

	function Lu(t) {
		return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
	}

	function ks(t) {
		return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
	}

	function Gp() {}

	function W1(t, r, s, l, d) {
		if (d) {
			if (typeof l == "function") {
				var m = l;
				l = function() {
					var z = Ts(w);
					m.call(z)
				}
			}
			var w = Kp(r, l, t, 0, null, !1, !1, "", Gp);
			return t._reactRootContainer = w, t[an] = w.current, _i(t.nodeType === 8 ? t.parentNode : t), sr(), w
		}
		for (; d = t.lastChild;) t.removeChild(d);
		if (typeof l == "function") {
			var k = l;
			l = function() {
				var z = Ts(O);
				k.call(z)
			}
		}
		var O = ju(t, 0, !1, null, null, !1, !1, "", Gp);
		return t._reactRootContainer = O, t[an] = O.current, _i(t.nodeType === 8 ? t.parentNode : t), sr(function() {
			Ps(r, O, s, l)
		}), O
	}

	function Rs(t, r, s, l, d) {
		var m = s._reactRootContainer;
		if (m) {
			var w = m;
			if (typeof d == "function") {
				var k = d;
				d = function() {
					var O = Ts(w);
					k.call(O)
				}
			}
			Ps(r, w, t, d)
		} else w = W1(s, r, t, d, l);
		return Ts(w)
	}
	_d = function(t) {
		switch (t.tag) {
			case 3:
				var r = t.stateNode;
				if (r.current.memoizedState.isDehydrated) {
					var s = pi(r.pendingLanes);
					s !== 0 && (sl(r, s | 1), ft(r, Fe()), (be & 6) === 0 && (Hr = Fe() + 500, On()))
				}
				break;
			case 13:
				sr(function() {
					var l = fn(t, 1);
					if (l !== null) {
						var d = ot();
						Bt(l, t, 1, d)
					}
				}), Mu(t, 1)
		}
	}, al = function(t) {
		if (t.tag === 13) {
			var r = fn(t, 134217728);
			if (r !== null) {
				var s = ot();
				Bt(r, t, 134217728, s)
			}
			Mu(t, 134217728)
		}
	}, Od = function(t) {
		if (t.tag === 13) {
			var r = Ln(t),
				s = fn(t, r);
			if (s !== null) {
				var l = ot();
				Bt(s, t, r, l)
			}
			Mu(t, r)
		}
	}, Ad = function() {
		return Pe
	}, Nd = function(t, r) {
		var s = Pe;
		try {
			return Pe = t, r()
		} finally {
			Pe = s
		}
	}, Ja = function(t, r, s) {
		switch (r) {
			case "input":
				if ($a(t, s), r = s.name, s.type === "radio" && r != null) {
					for (s = t; s.parentNode;) s = s.parentNode;
					for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < s.length; r++) {
						var l = s[r];
						if (l !== t && l.form === t.form) {
							var d = $o(l);
							if (!d) throw Error(i(90));
							xr(l), $a(l, d)
						}
					}
				}
				break;
			case "textarea":
				ad(t, s);
				break;
			case "select":
				r = s.value, r != null && wr(t, !!s.multiple, r, !1)
		}
	}, gd = ku, yd = sr;
	var $1 = {
			usingClientEntryPoint: !1,
			Events: [Ni, Or, $o, pd, md, ku]
		},
		Ki = {
			findFiberByHostInstance: Zn,
			bundleType: 0,
			version: "18.3.1",
			rendererPackageName: "react-dom"
		},
		K1 = {
			bundleType: Ki.bundleType,
			version: Ki.version,
			rendererPackageName: Ki.rendererPackageName,
			rendererConfig: Ki.rendererConfig,
			overrideHookState: null,
			overrideHookStateDeletePath: null,
			overrideHookStateRenamePath: null,
			overrideProps: null,
			overridePropsDeletePath: null,
			overridePropsRenamePath: null,
			setErrorHandler: null,
			setSuspenseHandler: null,
			scheduleUpdate: null,
			currentDispatcherRef: A.ReactCurrentDispatcher,
			findHostInstanceByFiber: function(t) {
				return t = Sd(t), t === null ? null : t.stateNode
			},
			findFiberByHostInstance: Ki.findFiberByHostInstance || H1,
			findHostInstancesForRefresh: null,
			scheduleRefresh: null,
			scheduleRoot: null,
			setRefreshHandler: null,
			getCurrentFiber: null,
			reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
		};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var _s = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!_s.isDisabled && _s.supportsFiber) try {
			Co = _s.inject(K1), Qt = _s
		} catch {}
	}
	return dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $1, dt.createPortal = function(t, r) {
		var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!Lu(r)) throw Error(i(200));
		return U1(t, r, null, s)
	}, dt.createRoot = function(t, r) {
		if (!Lu(t)) throw Error(i(299));
		var s = !1,
			l = "",
			d = qp;
		return r != null && (r.unstable_strictMode === !0 && (s = !0), r.identifierPrefix !== void 0 && (l = r.identifierPrefix), r.onRecoverableError !== void 0 && (d = r.onRecoverableError)), r = ju(t, 1, !1, null, null, s, !1, l, d), t[an] = r.current, _i(t.nodeType === 8 ? t.parentNode : t), new Du(r)
	}, dt.findDOMNode = function(t) {
		if (t == null) return null;
		if (t.nodeType === 1) return t;
		var r = t._reactInternals;
		if (r === void 0) throw typeof t.render == "function" ? Error(i(188)) : (t = Object.keys(t).join(","), Error(i(268, t)));
		return t = Sd(r), t = t === null ? null : t.stateNode, t
	}, dt.flushSync = function(t) {
		return sr(t)
	}, dt.hydrate = function(t, r, s) {
		if (!ks(r)) throw Error(i(200));
		return Rs(null, t, r, !0, s)
	}, dt.hydrateRoot = function(t, r, s) {
		if (!Lu(t)) throw Error(i(405));
		var l = s != null && s.hydratedSources || null,
			d = !1,
			m = "",
			w = qp;
		if (s != null && (s.unstable_strictMode === !0 && (d = !0), s.identifierPrefix !== void 0 && (m = s.identifierPrefix), s.onRecoverableError !== void 0 && (w = s.onRecoverableError)), r = Kp(r, null, t, 1, s ?? null, d, !1, m, w), t[an] = r.current, _i(t), l)
			for (t = 0; t < l.length; t++) s = l[t], d = s._getVersion, d = d(s._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [s, d] : r.mutableSourceEagerHydrationData.push(s, d);
		return new Cs(r)
	}, dt.render = function(t, r, s) {
		if (!ks(r)) throw Error(i(200));
		return Rs(null, t, r, !1, s)
	}, dt.unmountComponentAtNode = function(t) {
		if (!ks(t)) throw Error(i(40));
		return t._reactRootContainer ? (sr(function() {
			Rs(null, null, t, !1, function() {
				t._reactRootContainer = null, t[an] = null
			})
		}), !0) : !1
	}, dt.unstable_batchedUpdates = ku, dt.unstable_renderSubtreeIntoContainer = function(t, r, s, l) {
		if (!ks(s)) throw Error(i(200));
		if (t == null || t._reactInternals === void 0) throw Error(i(38));
		return Rs(t, r, s, !1, l)
	}, dt.version = "18.3.1-next-f1338f8080-20240426", dt
}
var rm;

function Sa() {
	if (rm) return Vu.exports;
	rm = 1;

	function e() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
		} catch (n) {
			console.error(n)
		}
	}
	return e(), Vu.exports = eS(), Vu.exports
}
var im;

function tS() {
	if (im) return As;
	im = 1;
	var e = Sa();
	return As.createRoot = e.createRoot, As.hydrateRoot = e.hydrateRoot, As
}
var nS = tS();

function rS(e, n) {
	if (e instanceof RegExp) return {
		keys: !1,
		pattern: e
	};
	var i, o, a, u, c = [],
		f = "",
		p = e.split("/");
	for (p[0] || p.shift(); a = p.shift();) i = a[0], i === "*" ? (c.push(i), f += a[1] === "?" ? "(?:/(.*))?" : "/(.*)") : i === ":" ? (o = a.indexOf("?", 1), u = a.indexOf(".", 1), c.push(a.substring(1, ~o ? o : ~u ? u : a.length)), f += ~o && !~u ? "(?:/([^/]+?))?" : "/([^/]+?)", ~u && (f += (~o ? "?" : "") + "\\" + a.substring(u))) : f += "/" + a;
	return {
		keys: c,
		pattern: new RegExp("^" + f + (n ? "(?=$|/)" : "/?$"), "i")
	}
}
var T = rn();
const st = Ly(T),
	Iy = q1({
		__proto__: null,
		default: st
	}, [T]);
var Uu = {
		exports: {}
	},
	Hu = {};
var om;

function iS() {
	if (om) return Hu;
	om = 1;
	var e = rn();

	function n(y, v) {
		return y === v && (y !== 0 || 1 / y === 1 / v) || y !== y && v !== v
	}
	var i = typeof Object.is == "function" ? Object.is : n,
		o = e.useState,
		a = e.useEffect,
		u = e.useLayoutEffect,
		c = e.useDebugValue;

	function f(y, v) {
		var x = v(),
			b = o({
				inst: {
					value: x,
					getSnapshot: v
				}
			}),
			E = b[0].inst,
			P = b[1];
		return u(function() {
			E.value = x, E.getSnapshot = v, p(E) && P({
				inst: E
			})
		}, [y, x, v]), a(function() {
			return p(E) && P({
				inst: E
			}), y(function() {
				p(E) && P({
					inst: E
				})
			})
		}, [y]), c(x), x
	}

	function p(y) {
		var v = y.getSnapshot;
		y = y.value;
		try {
			var x = v();
			return !i(y, x)
		} catch {
			return !0
		}
	}

	function h(y, v) {
		return v()
	}
	var g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : f;
	return Hu.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : g, Hu
}
var sm;

function oS() {
	return sm || (sm = 1, Uu.exports = iS()), Uu.exports
}
var sS = oS();
const aS = Iy.useInsertionEffect,
	lS = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
	uS = lS ? T.useLayoutEffect : T.useEffect,
	cS = aS || uS,
	Fy = e => {
		const n = T.useRef([e, (...i) => n[0](...i)]).current;
		return cS(() => {
			n[0] = e
		}), n[1]
	},
	fS = "popstate",
	qc = "pushState",
	Gc = "replaceState",
	dS = "hashchange",
	am = [fS, qc, Gc, dS],
	hS = e => {
		for (const n of am) addEventListener(n, e);
		return () => {
			for (const n of am) removeEventListener(n, e)
		}
	},
	Vy = (e, n) => sS.useSyncExternalStore(hS, e, n),
	lm = () => location.search,
	pS = ({
		ssrSearch: e
	} = {}) => Vy(lm, e != null ? () => e : lm),
	um = () => location.pathname,
	mS = ({
		ssrPath: e
	} = {}) => Vy(um, e != null ? () => e : um),
	gS = (e, {
		replace: n = !1,
		state: i = null
	} = {}) => history[n ? Gc : qc](i, "", e),
	yS = (e = {}) => [mS(e), gS],
	cm = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[cm] > "u") {
	for (const e of [qc, Gc]) {
		const n = history[e];
		history[e] = function() {
			const i = n.apply(this, arguments),
				o = new Event(e);
			return o.arguments = arguments, dispatchEvent(o), i
		}
	}
	Object.defineProperty(window, cm, {
		value: !0
	})
}
const vS = (e, n) => n.toLowerCase().indexOf(e.toLowerCase()) ? "~" + n : n.slice(e.length) || "/",
	zy = (e = "") => e === "/" ? "" : e,
	xS = (e, n) => e[0] === "~" ? e.slice(1) : zy(n) + e,
	wS = (e = "", n) => vS(fm(zy(e)), fm(n)),
	fm = e => {
		try {
			return decodeURI(e)
		} catch {
			return e
		}
	},
	By = {
		hook: yS,
		searchHook: pS,
		parser: rS,
		base: "",
		ssrPath: void 0,
		ssrSearch: void 0,
		ssrContext: void 0,
		hrefs: e => e,
		aroundNav: (e, n, i) => e(n, i)
	},
	Uy = T.createContext(By),
	ba = () => T.useContext(Uy),
	Hy = {},
	Wy = T.createContext(Hy),
	SS = () => T.useContext(Wy),
	Yc = e => {
		const [n, i] = e.hook(e);
		return [wS(e.base, n), Fy((o, a) => e.aroundNav(i, xS(o, e.base), a))]
	},
	$y = (e, n, i, o) => {
		const {
			pattern: a,
			keys: u
		} = n instanceof RegExp ? {
			keys: !1,
			pattern: n
		} : e(n || "*", o), c = a.exec(i) || [], [f, ...p] = c;
		return f !== void 0 ? [!0, (() => {
			const h = u !== !1 ? Object.fromEntries(u.map((y, v) => [y, p[v]])) : c.groups;
			let g = {
				...p
			};
			return h && Object.assign(g, h), g
		})(), ...o ? [f] : []] : [!1, null]
	},
	bS = ({
		children: e,
		...n
	}) => {
		const i = ba(),
			o = n.hook ? By : i;
		let a = o;
		const [u, c = n.ssrSearch ?? ""] = n.ssrPath?.split("?") ?? [];
		u && (n.ssrSearch = c, n.ssrPath = u), n.hrefs = n.hrefs ?? n.hook?.hrefs, n.searchHook = n.searchHook ?? n.hook?.searchHook;
		let f = T.useRef({}),
			p = f.current,
			h = p;
		for (let g in o) {
			const y = g === "base" ? o[g] + (n[g] ?? "") : n[g] ?? o[g];
			p === h && y !== h[g] && (f.current = h = {
				...h
			}), h[g] = y, (y !== o[g] || y !== a[g]) && (a = h)
		}
		return T.createElement(Uy.Provider, {
			value: a,
			children: e
		})
	},
	dm = ({
		children: e,
		component: n
	}, i) => n ? T.createElement(n, {
		params: i
	}) : typeof e == "function" ? e(i) : e,
	ES = e => {
		let n = T.useRef(Hy);
		const i = n.current;
		return n.current = Object.keys(e).length !== Object.keys(i).length || Object.entries(e).some(([o, a]) => a !== i[o]) ? e : i
	},
	hm = ({
		path: e,
		nest: n,
		match: i,
		...o
	}) => {
		const a = ba(),
			[u] = Yc(a),
			[c, f, p] = i ?? $y(a.parser, e, u, n),
			h = ES({
				...SS(),
				...f
			});
		if (!c) return null;
		const g = p ? T.createElement(bS, {
			base: p
		}, dm(o, h)) : dm(o, h);
		return T.createElement(Wy.Provider, {
			value: h,
			children: g
		})
	};
T.forwardRef((e, n) => {
	const i = ba(),
		[o, a] = Yc(i),
		{
			to: u = "",
			href: c = u,
			onClick: f,
			asChild: p,
			children: h,
			className: g,
			replace: y,
			state: v,
			transition: x,
			...b
		} = e,
		E = Fy(C => {
			C.ctrlKey || C.metaKey || C.altKey || C.shiftKey || C.button !== 0 || (f?.(C), C.defaultPrevented || (C.preventDefault(), a(c, e)))
		}),
		P = i.hrefs(c[0] === "~" ? c.slice(1) : i.base + c, i);
	return p && T.isValidElement(h) ? T.cloneElement(h, {
		onClick: E,
		href: P
	}) : T.createElement("a", {
		...b,
		onClick: E,
		href: P,
		className: g?.call ? g(o === c) : g,
		children: h,
		ref: n
	})
});
const Ky = e => Array.isArray(e) ? e.flatMap(n => Ky(n && n.type === T.Fragment ? n.props.children : n)) : [e],
	PS = ({
		children: e,
		location: n
	}) => {
		const i = ba(),
			[o] = Yc(i);
		for (const a of Ky(e)) {
			let u = 0;
			if (T.isValidElement(a) && (u = $y(i.parser, a.props.path, n || o, a.props.nest))[0]) return T.cloneElement(a, {
				match: u
			})
		}
		return null
	};
var mo = class {
		constructor() {
			this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
		}
		subscribe(e) {
			return this.listeners.add(e), this.onSubscribe(), () => {
				this.listeners.delete(e), this.onUnsubscribe()
			}
		}
		hasListeners() {
			return this.listeners.size > 0
		}
		onSubscribe() {}
		onUnsubscribe() {}
	},
	TS = {
		setTimeout: (e, n) => setTimeout(e, n),
		clearTimeout: e => clearTimeout(e),
		setInterval: (e, n) => setInterval(e, n),
		clearInterval: e => clearInterval(e)
	},
	CS = class {
		#e = TS;
		#t = !1;
		setTimeoutProvider(e) {
			this.#e = e
		}
		setTimeout(e, n) {
			return this.#e.setTimeout(e, n)
		}
		clearTimeout(e) {
			this.#e.clearTimeout(e)
		}
		setInterval(e, n) {
			return this.#e.setInterval(e, n)
		}
		clearInterval(e) {
			this.#e.clearInterval(e)
		}
	},
	hr = new CS;

function kS(e) {
	setTimeout(e, 0)
}
var gr = typeof window > "u" || "Deno" in globalThis;

function ht() {}

function RS(e, n) {
	return typeof e == "function" ? e(n) : e
}

function mc(e) {
	return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function Qy(e, n) {
	return Math.max(e + (n || 0) - Date.now(), 0)
}

function Hn(e, n) {
	return typeof e == "function" ? e(n) : e
}

function Mt(e, n) {
	return typeof e == "function" ? e(n) : e
}

function pm(e, n) {
	const {
		type: i = "all",
		exact: o,
		fetchStatus: a,
		predicate: u,
		queryKey: c,
		stale: f
	} = e;
	if (c) {
		if (o) {
			if (n.queryHash !== Xc(c, n.options)) return !1
		} else if (!ao(n.queryKey, c)) return !1
	}
	if (i !== "all") {
		const p = n.isActive();
		if (i === "active" && !p || i === "inactive" && p) return !1
	}
	return !(typeof f == "boolean" && n.isStale() !== f || a && a !== n.state.fetchStatus || u && !u(n))
}

function mm(e, n) {
	const {
		exact: i,
		status: o,
		predicate: a,
		mutationKey: u
	} = e;
	if (u) {
		if (!n.options.mutationKey) return !1;
		if (i) {
			if (so(n.options.mutationKey) !== so(u)) return !1
		} else if (!ao(n.options.mutationKey, u)) return !1
	}
	return !(o && n.state.status !== o || a && !a(n))
}

function Xc(e, n) {
	return (n?.queryKeyHashFn || so)(e)
}

function so(e) {
	return JSON.stringify(e, (n, i) => yc(i) ? Object.keys(i).sort().reduce((o, a) => (o[a] = i[a], o), {}) : i)
}

function ao(e, n) {
	return e === n ? !0 : typeof e != typeof n ? !1 : e && n && typeof e == "object" && typeof n == "object" ? Object.keys(n).every(i => ao(e[i], n[i])) : !1
}
var _S = Object.prototype.hasOwnProperty;

function qy(e, n, i = 0) {
	if (e === n) return e;
	if (i > 500) return n;
	const o = gm(e) && gm(n);
	if (!o && !(yc(e) && yc(n))) return n;
	const u = (o ? e : Object.keys(e)).length,
		c = o ? n : Object.keys(n),
		f = c.length,
		p = o ? new Array(f) : {};
	let h = 0;
	for (let g = 0; g < f; g++) {
		const y = o ? g : c[g],
			v = e[y],
			x = n[y];
		if (v === x) {
			p[y] = v, (o ? g < u : _S.call(e, y)) && h++;
			continue
		}
		if (v === null || x === null || typeof v != "object" || typeof x != "object") {
			p[y] = x;
			continue
		}
		const b = qy(v, x, i + 1);
		p[y] = b, b === v && h++
	}
	return u === f && h === u ? e : p
}

function gc(e, n) {
	if (!n || Object.keys(e).length !== Object.keys(n).length) return !1;
	for (const i in e)
		if (e[i] !== n[i]) return !1;
	return !0
}

function gm(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length
}

function yc(e) {
	if (!ym(e)) return !1;
	const n = e.constructor;
	if (n === void 0) return !0;
	const i = n.prototype;
	return !(!ym(i) || !i.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function ym(e) {
	return Object.prototype.toString.call(e) === "[object Object]"
}

function OS(e) {
	return new Promise(n => {
		hr.setTimeout(n, e)
	})
}

function vc(e, n, i) {
	return typeof i.structuralSharing == "function" ? i.structuralSharing(e, n) : i.structuralSharing !== !1 ? qy(e, n) : n
}

function AS(e, n, i = 0) {
	const o = [...e, n];
	return i && o.length > i ? o.slice(1) : o
}

function NS(e, n, i = 0) {
	const o = [n, ...e];
	return i && o.length > i ? o.slice(0, -1) : o
}
var Zc = Symbol();

function Gy(e, n) {
	return !e.queryFn && n?.initialPromise ? () => n.initialPromise : !e.queryFn || e.queryFn === Zc ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}

function Yy(e, n) {
	return typeof e == "function" ? e(...n) : !!e
}

function jS(e, n, i) {
	let o = !1,
		a;
	return Object.defineProperty(e, "signal", {
		enumerable: !0,
		get: () => (a ??= n(), o || (o = !0, a.aborted ? i() : a.addEventListener("abort", i, {
			once: !0
		})), a)
	}), e
}
var MS = class extends mo {
		#e;
		#t;
		#n;
		constructor() {
			super(), this.#n = e => {
				if (!gr && window.addEventListener) {
					const n = () => e();
					return window.addEventListener("visibilitychange", n, !1), () => {
						window.removeEventListener("visibilitychange", n)
					}
				}
			}
		}
		onSubscribe() {
			this.#t || this.setEventListener(this.#n)
		}
		onUnsubscribe() {
			this.hasListeners() || (this.#t?.(), this.#t = void 0)
		}
		setEventListener(e) {
			this.#n = e, this.#t?.(), this.#t = e(n => {
				typeof n == "boolean" ? this.setFocused(n) : this.onFocus()
			})
		}
		setFocused(e) {
			this.#e !== e && (this.#e = e, this.onFocus())
		}
		onFocus() {
			const e = this.isFocused();
			this.listeners.forEach(n => {
				n(e)
			})
		}
		isFocused() {
			return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden"
		}
	},
	Jc = new MS;

function xc() {
	let e, n;
	const i = new Promise((a, u) => {
		e = a, n = u
	});
	i.status = "pending", i.catch(() => {});

	function o(a) {
		Object.assign(i, a), delete i.resolve, delete i.reject
	}
	return i.resolve = a => {
		o({
			status: "fulfilled",
			value: a
		}), e(a)
	}, i.reject = a => {
		o({
			status: "rejected",
			reason: a
		}), n(a)
	}, i
}
var DS = kS;

function LS() {
	let e = [],
		n = 0,
		i = f => {
			f()
		},
		o = f => {
			f()
		},
		a = DS;
	const u = f => {
			n ? e.push(f) : a(() => {
				i(f)
			})
		},
		c = () => {
			const f = e;
			e = [], f.length && a(() => {
				o(() => {
					f.forEach(p => {
						i(p)
					})
				})
			})
		};
	return {
		batch: f => {
			let p;
			n++;
			try {
				p = f()
			} finally {
				n--, n || c()
			}
			return p
		},
		batchCalls: f => (...p) => {
			u(() => {
				f(...p)
			})
		},
		schedule: u,
		setNotifyFunction: f => {
			i = f
		},
		setBatchNotifyFunction: f => {
			o = f
		},
		setScheduler: f => {
			a = f
		}
	}
}
var Xe = LS(),
	IS = class extends mo {
		#e = !0;
		#t;
		#n;
		constructor() {
			super(), this.#n = e => {
				if (!gr && window.addEventListener) {
					const n = () => e(!0),
						i = () => e(!1);
					return window.addEventListener("online", n, !1), window.addEventListener("offline", i, !1), () => {
						window.removeEventListener("online", n), window.removeEventListener("offline", i)
					}
				}
			}
		}
		onSubscribe() {
			this.#t || this.setEventListener(this.#n)
		}
		onUnsubscribe() {
			this.hasListeners() || (this.#t?.(), this.#t = void 0)
		}
		setEventListener(e) {
			this.#n = e, this.#t?.(), this.#t = e(this.setOnline.bind(this))
		}
		setOnline(e) {
			this.#e !== e && (this.#e = e, this.listeners.forEach(i => {
				i(e)
			}))
		}
		isOnline() {
			return this.#e
		}
	},
	aa = new IS;

function FS(e) {
	return Math.min(1e3 * 2 ** e, 3e4)
}

function Xy(e) {
	return (e ?? "online") === "online" ? aa.isOnline() : !0
}
var wc = class extends Error {
	constructor(e) {
		super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent
	}
};

function Zy(e) {
	let n = !1,
		i = 0,
		o;
	const a = xc(),
		u = () => a.status !== "pending",
		c = E => {
			if (!u()) {
				const P = new wc(E);
				v(P), e.onCancel?.(P)
			}
		},
		f = () => {
			n = !0
		},
		p = () => {
			n = !1
		},
		h = () => Jc.isFocused() && (e.networkMode === "always" || aa.isOnline()) && e.canRun(),
		g = () => Xy(e.networkMode) && e.canRun(),
		y = E => {
			u() || (o?.(), a.resolve(E))
		},
		v = E => {
			u() || (o?.(), a.reject(E))
		},
		x = () => new Promise(E => {
			o = P => {
				(u() || h()) && E(P)
			}, e.onPause?.()
		}).then(() => {
			o = void 0, u() || e.onContinue?.()
		}),
		b = () => {
			if (u()) return;
			let E;
			const P = i === 0 ? e.initialPromise : void 0;
			try {
				E = P ?? e.fn()
			} catch (C) {
				E = Promise.reject(C)
			}
			Promise.resolve(E).then(y).catch(C => {
				if (u()) return;
				const R = e.retry ?? (gr ? 0 : 3),
					_ = e.retryDelay ?? FS,
					A = typeof _ == "function" ? _(i, C) : _,
					M = R === !0 || typeof R == "number" && i < R || typeof R == "function" && R(i, C);
				if (n || !M) {
					v(C);
					return
				}
				i++, e.onFail?.(i, C), OS(A).then(() => h() ? void 0 : x()).then(() => {
					n ? v(C) : b()
				})
			})
		};
	return {
		promise: a,
		status: () => a.status,
		cancel: c,
		continue: () => (o?.(), a),
		cancelRetry: f,
		continueRetry: p,
		canStart: g,
		start: () => (g() ? b() : x().then(b), a)
	}
}
var Jy = class {
		#e;
		destroy() {
			this.clearGcTimeout()
		}
		scheduleGc() {
			this.clearGcTimeout(), mc(this.gcTime) && (this.#e = hr.setTimeout(() => {
				this.optionalRemove()
			}, this.gcTime))
		}
		updateGcTime(e) {
			this.gcTime = Math.max(this.gcTime || 0, e ?? (gr ? 1 / 0 : 300 * 1e3))
		}
		clearGcTimeout() {
			this.#e && (hr.clearTimeout(this.#e), this.#e = void 0)
		}
	},
	VS = class extends Jy {
		#e;
		#t;
		#n;
		#i;
		#r;
		#a;
		#s;
		constructor(e) {
			super(), this.#s = !1, this.#a = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#i = e.client, this.#n = this.#i.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#e = xm(this.options), this.state = e.state ?? this.#e, this.scheduleGc()
		}
		get meta() {
			return this.options.meta
		}
		get promise() {
			return this.#r?.promise
		}
		setOptions(e) {
			if (this.options = {
					...this.#a,
					...e
				}, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
				const n = xm(this.options);
				n.data !== void 0 && (this.setState(vm(n.data, n.dataUpdatedAt)), this.#e = n)
			}
		}
		optionalRemove() {
			!this.observers.length && this.state.fetchStatus === "idle" && this.#n.remove(this)
		}
		setData(e, n) {
			const i = vc(this.state.data, e, this.options);
			return this.#o({
				data: i,
				type: "success",
				dataUpdatedAt: n?.updatedAt,
				manual: n?.manual
			}), i
		}
		setState(e, n) {
			this.#o({
				type: "setState",
				state: e,
				setStateOptions: n
			})
		}
		cancel(e) {
			const n = this.#r?.promise;
			return this.#r?.cancel(e), n ? n.then(ht).catch(ht) : Promise.resolve()
		}
		destroy() {
			super.destroy(), this.cancel({
				silent: !0
			})
		}
		reset() {
			this.destroy(), this.setState(this.#e)
		}
		isActive() {
			return this.observers.some(e => Mt(e.options.enabled, this) !== !1)
		}
		isDisabled() {
			return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Zc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
		}
		isStatic() {
			return this.getObserversCount() > 0 ? this.observers.some(e => Hn(e.options.staleTime, this) === "static") : !1
		}
		isStale() {
			return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
		}
		isStaleByTime(e = 0) {
			return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !Qy(this.state.dataUpdatedAt, e)
		}
		onFocus() {
			this.observers.find(n => n.shouldFetchOnWindowFocus())?.refetch({
				cancelRefetch: !1
			}), this.#r?.continue()
		}
		onOnline() {
			this.observers.find(n => n.shouldFetchOnReconnect())?.refetch({
				cancelRefetch: !1
			}), this.#r?.continue()
		}
		addObserver(e) {
			this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#n.notify({
				type: "observerAdded",
				query: this,
				observer: e
			}))
		}
		removeObserver(e) {
			this.observers.includes(e) && (this.observers = this.observers.filter(n => n !== e), this.observers.length || (this.#r && (this.#s ? this.#r.cancel({
				revert: !0
			}) : this.#r.cancelRetry()), this.scheduleGc()), this.#n.notify({
				type: "observerRemoved",
				query: this,
				observer: e
			}))
		}
		getObserversCount() {
			return this.observers.length
		}
		invalidate() {
			this.state.isInvalidated || this.#o({
				type: "invalidate"
			})
		}
		async fetch(e, n) {
			if (this.state.fetchStatus !== "idle" && this.#r?.status() !== "rejected") {
				if (this.state.data !== void 0 && n?.cancelRefetch) this.cancel({
					silent: !0
				});
				else if (this.#r) return this.#r.continueRetry(), this.#r.promise
			}
			if (e && this.setOptions(e), !this.options.queryFn) {
				const f = this.observers.find(p => p.options.queryFn);
				f && this.setOptions(f.options)
			}
			const i = new AbortController,
				o = f => {
					Object.defineProperty(f, "signal", {
						enumerable: !0,
						get: () => (this.#s = !0, i.signal)
					})
				},
				a = () => {
					const f = Gy(this.options, n),
						h = (() => {
							const g = {
								client: this.#i,
								queryKey: this.queryKey,
								meta: this.meta
							};
							return o(g), g
						})();
					return this.#s = !1, this.options.persister ? this.options.persister(f, h, this) : f(h)
				},
				c = (() => {
					const f = {
						fetchOptions: n,
						options: this.options,
						queryKey: this.queryKey,
						client: this.#i,
						state: this.state,
						fetchFn: a
					};
					return o(f), f
				})();
			this.options.behavior?.onFetch(c, this), this.#t = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== c.fetchOptions?.meta) && this.#o({
				type: "fetch",
				meta: c.fetchOptions?.meta
			}), this.#r = Zy({
				initialPromise: n?.initialPromise,
				fn: c.fetchFn,
				onCancel: f => {
					f instanceof wc && f.revert && this.setState({
						...this.#t,
						fetchStatus: "idle"
					}), i.abort()
				},
				onFail: (f, p) => {
					this.#o({
						type: "failed",
						failureCount: f,
						error: p
					})
				},
				onPause: () => {
					this.#o({
						type: "pause"
					})
				},
				onContinue: () => {
					this.#o({
						type: "continue"
					})
				},
				retry: c.options.retry,
				retryDelay: c.options.retryDelay,
				networkMode: c.options.networkMode,
				canRun: () => !0
			});
			try {
				const f = await this.#r.start();
				if (f === void 0) throw new Error(`${this.queryHash} data is undefined`);
				return this.setData(f), this.#n.config.onSuccess?.(f, this), this.#n.config.onSettled?.(f, this.state.error, this), f
			} catch (f) {
				if (f instanceof wc) {
					if (f.silent) return this.#r.promise;
					if (f.revert) {
						if (this.state.data === void 0) throw f;
						return this.state.data
					}
				}
				throw this.#o({
					type: "error",
					error: f
				}), this.#n.config.onError?.(f, this), this.#n.config.onSettled?.(this.state.data, f, this), f
			} finally {
				this.scheduleGc()
			}
		}
		#o(e) {
			const n = i => {
				switch (e.type) {
					case "failed":
						return {
							...i, fetchFailureCount: e.failureCount, fetchFailureReason: e.error
						};
					case "pause":
						return {
							...i, fetchStatus: "paused"
						};
					case "continue":
						return {
							...i, fetchStatus: "fetching"
						};
					case "fetch":
						return {
							...i, ...ev(i.data, this.options), fetchMeta: e.meta ?? null
						};
					case "success":
						const o = {
							...i,
							...vm(e.data, e.dataUpdatedAt),
							dataUpdateCount: i.dataUpdateCount + 1,
							...!e.manual && {
								fetchStatus: "idle",
								fetchFailureCount: 0,
								fetchFailureReason: null
							}
						};
						return this.#t = e.manual ? o : void 0, o;
					case "error":
						const a = e.error;
						return {
							...i, error: a, errorUpdateCount: i.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: i.fetchFailureCount + 1, fetchFailureReason: a, fetchStatus: "idle", status: "error", isInvalidated: !0
						};
					case "invalidate":
						return {
							...i, isInvalidated: !0
						};
					case "setState":
						return {
							...i, ...e.state
						}
				}
			};
			this.state = n(this.state), Xe.batch(() => {
				this.observers.forEach(i => {
					i.onQueryUpdate()
				}), this.#n.notify({
					query: this,
					type: "updated",
					action: e
				})
			})
		}
	};

function ev(e, n) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: Xy(n.networkMode) ? "fetching" : "paused",
		...e === void 0 && {
			error: null,
			status: "pending"
		}
	}
}

function vm(e, n) {
	return {
		data: e,
		dataUpdatedAt: n ?? Date.now(),
		error: null,
		isInvalidated: !1,
		status: "success"
	}
}

function xm(e) {
	const n = typeof e.initialData == "function" ? e.initialData() : e.initialData,
		i = n !== void 0,
		o = i ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
	return {
		data: n,
		dataUpdateCount: 0,
		dataUpdatedAt: i ? o ?? Date.now() : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: !1,
		status: i ? "success" : "pending",
		fetchStatus: "idle"
	}
}
var zS = class extends mo {
	constructor(e, n) {
		super(), this.options = n, this.#e = e, this.#o = null, this.#s = xc(), this.bindMethods(), this.setOptions(n)
	}
	#e;
	#t = void 0;
	#n = void 0;
	#i = void 0;
	#r;
	#a;
	#s;
	#o;
	#m;
	#d;
	#h;
	#u;
	#c;
	#l;
	#p = new Set;
	bindMethods() {
		this.refetch = this.refetch.bind(this)
	}
	onSubscribe() {
		this.listeners.size === 1 && (this.#t.addObserver(this), wm(this.#t, this.options) ? this.#f() : this.updateResult(), this.#x())
	}
	onUnsubscribe() {
		this.hasListeners() || this.destroy()
	}
	shouldFetchOnReconnect() {
		return Sc(this.#t, this.options, this.options.refetchOnReconnect)
	}
	shouldFetchOnWindowFocus() {
		return Sc(this.#t, this.options, this.options.refetchOnWindowFocus)
	}
	destroy() {
		this.listeners = new Set, this.#w(), this.#S(), this.#t.removeObserver(this)
	}
	setOptions(e) {
		const n = this.options,
			i = this.#t;
		if (this.options = this.#e.defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Mt(this.options.enabled, this.#t) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
		this.#b(), this.#t.setOptions(this.options), n._defaulted && !gc(this.options, n) && this.#e.getQueryCache().notify({
			type: "observerOptionsUpdated",
			query: this.#t,
			observer: this
		});
		const o = this.hasListeners();
		o && Sm(this.#t, i, this.options, n) && this.#f(), this.updateResult(), o && (this.#t !== i || Mt(this.options.enabled, this.#t) !== Mt(n.enabled, this.#t) || Hn(this.options.staleTime, this.#t) !== Hn(n.staleTime, this.#t)) && this.#g();
		const a = this.#y();
		o && (this.#t !== i || Mt(this.options.enabled, this.#t) !== Mt(n.enabled, this.#t) || a !== this.#l) && this.#v(a)
	}
	getOptimisticResult(e) {
		const n = this.#e.getQueryCache().build(this.#e, e),
			i = this.createResult(n, e);
		return US(this, i) && (this.#i = i, this.#a = this.options, this.#r = this.#t.state), i
	}
	getCurrentResult() {
		return this.#i
	}
	trackResult(e, n) {
		return new Proxy(e, {
			get: (i, o) => (this.trackProp(o), n?.(o), o === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && this.#s.status === "pending" && this.#s.reject(new Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(i, o))
		})
	}
	trackProp(e) {
		this.#p.add(e)
	}
	getCurrentQuery() {
		return this.#t
	}
	refetch({
		...e
	} = {}) {
		return this.fetch({
			...e
		})
	}
	fetchOptimistic(e) {
		const n = this.#e.defaultQueryOptions(e),
			i = this.#e.getQueryCache().build(this.#e, n);
		return i.fetch().then(() => this.createResult(i, n))
	}
	fetch(e) {
		return this.#f({
			...e,
			cancelRefetch: e.cancelRefetch ?? !0
		}).then(() => (this.updateResult(), this.#i))
	}
	#f(e) {
		this.#b();
		let n = this.#t.fetch(this.options, e);
		return e?.throwOnError || (n = n.catch(ht)), n
	}
	#g() {
		this.#w();
		const e = Hn(this.options.staleTime, this.#t);
		if (gr || this.#i.isStale || !mc(e)) return;
		const i = Qy(this.#i.dataUpdatedAt, e) + 1;
		this.#u = hr.setTimeout(() => {
			this.#i.isStale || this.updateResult()
		}, i)
	}
	#y() {
		return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1
	}
	#v(e) {
		this.#S(), this.#l = e, !(gr || Mt(this.options.enabled, this.#t) === !1 || !mc(this.#l) || this.#l === 0) && (this.#c = hr.setInterval(() => {
			(this.options.refetchIntervalInBackground || Jc.isFocused()) && this.#f()
		}, this.#l))
	}
	#x() {
		this.#g(), this.#v(this.#y())
	}
	#w() {
		this.#u && (hr.clearTimeout(this.#u), this.#u = void 0)
	}
	#S() {
		this.#c && (hr.clearInterval(this.#c), this.#c = void 0)
	}
	createResult(e, n) {
		const i = this.#t,
			o = this.options,
			a = this.#i,
			u = this.#r,
			c = this.#a,
			p = e !== i ? e.state : this.#n,
			{
				state: h
			} = e;
		let g = {
				...h
			},
			y = !1,
			v;
		if (n._optimisticResults) {
			const B = this.hasListeners(),
				q = !B && wm(e, n),
				W = B && Sm(e, i, n, o);
			(q || W) && (g = {
				...g,
				...ev(h.data, e.options)
			}), n._optimisticResults === "isRestoring" && (g.fetchStatus = "idle")
		}
		let {
			error: x,
			errorUpdatedAt: b,
			status: E
		} = g;
		v = g.data;
		let P = !1;
		if (n.placeholderData !== void 0 && v === void 0 && E === "pending") {
			let B;
			a?.isPlaceholderData && n.placeholderData === c?.placeholderData ? (B = a.data, P = !0) : B = typeof n.placeholderData == "function" ? n.placeholderData(this.#h?.state.data, this.#h) : n.placeholderData, B !== void 0 && (E = "success", v = vc(a?.data, B, n), y = !0)
		}
		if (n.select && v !== void 0 && !P)
			if (a && v === u?.data && n.select === this.#m) v = this.#d;
			else try {
				this.#m = n.select, v = n.select(v), v = vc(a?.data, v, n), this.#d = v, this.#o = null
			} catch (B) {
				this.#o = B
			}
		this.#o && (x = this.#o, v = this.#d, b = Date.now(), E = "error");
		const C = g.fetchStatus === "fetching",
			R = E === "pending",
			_ = E === "error",
			A = R && C,
			M = v !== void 0,
			I = {
				status: E,
				fetchStatus: g.fetchStatus,
				isPending: R,
				isSuccess: E === "success",
				isError: _,
				isInitialLoading: A,
				isLoading: A,
				data: v,
				dataUpdatedAt: g.dataUpdatedAt,
				error: x,
				errorUpdatedAt: b,
				failureCount: g.fetchFailureCount,
				failureReason: g.fetchFailureReason,
				errorUpdateCount: g.errorUpdateCount,
				isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
				isFetchedAfterMount: g.dataUpdateCount > p.dataUpdateCount || g.errorUpdateCount > p.errorUpdateCount,
				isFetching: C,
				isRefetching: C && !R,
				isLoadingError: _ && !M,
				isPaused: g.fetchStatus === "paused",
				isPlaceholderData: y,
				isRefetchError: _ && M,
				isStale: ef(e, n),
				refetch: this.refetch,
				promise: this.#s,
				isEnabled: Mt(n.enabled, e) !== !1
			};
		if (this.options.experimental_prefetchInRender) {
			const B = I.data !== void 0,
				q = I.status === "error" && !B,
				W = X => {
					q ? X.reject(I.error) : B && X.resolve(I.data)
				},
				$ = () => {
					const X = this.#s = I.promise = xc();
					W(X)
				},
				D = this.#s;
			switch (D.status) {
				case "pending":
					e.queryHash === i.queryHash && W(D);
					break;
				case "fulfilled":
					(q || I.data !== D.value) && $();
					break;
				case "rejected":
					(!q || I.error !== D.reason) && $();
					break
			}
		}
		return I
	}
	updateResult() {
		const e = this.#i,
			n = this.createResult(this.#t, this.options);
		if (this.#r = this.#t.state, this.#a = this.options, this.#r.data !== void 0 && (this.#h = this.#t), gc(n, e)) return;
		this.#i = n;
		const i = () => {
			if (!e) return !0;
			const {
				notifyOnChangeProps: o
			} = this.options, a = typeof o == "function" ? o() : o;
			if (a === "all" || !a && !this.#p.size) return !0;
			const u = new Set(a ?? this.#p);
			return this.options.throwOnError && u.add("error"), Object.keys(this.#i).some(c => {
				const f = c;
				return this.#i[f] !== e[f] && u.has(f)
			})
		};
		this.#E({
			listeners: i()
		})
	}
	#b() {
		const e = this.#e.getQueryCache().build(this.#e, this.options);
		if (e === this.#t) return;
		const n = this.#t;
		this.#t = e, this.#n = e.state, this.hasListeners() && (n?.removeObserver(this), e.addObserver(this))
	}
	onQueryUpdate() {
		this.updateResult(), this.hasListeners() && this.#x()
	}
	#E(e) {
		Xe.batch(() => {
			e.listeners && this.listeners.forEach(n => {
				n(this.#i)
			}), this.#e.getQueryCache().notify({
				query: this.#t,
				type: "observerResultsUpdated"
			})
		})
	}
};

function BS(e, n) {
	return Mt(n.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && n.retryOnMount === !1)
}

function wm(e, n) {
	return BS(e, n) || e.state.data !== void 0 && Sc(e, n, n.refetchOnMount)
}

function Sc(e, n, i) {
	if (Mt(n.enabled, e) !== !1 && Hn(n.staleTime, e) !== "static") {
		const o = typeof i == "function" ? i(e) : i;
		return o === "always" || o !== !1 && ef(e, n)
	}
	return !1
}

function Sm(e, n, i, o) {
	return (e !== n || Mt(o.enabled, e) === !1) && (!i.suspense || e.state.status !== "error") && ef(e, i)
}

function ef(e, n) {
	return Mt(n.enabled, e) !== !1 && e.isStaleByTime(Hn(n.staleTime, e))
}

function US(e, n) {
	return !gc(e.getCurrentResult(), n)
}

function bm(e) {
	return {
		onFetch: (n, i) => {
			const o = n.options,
				a = n.fetchOptions?.meta?.fetchMore?.direction,
				u = n.state.data?.pages || [],
				c = n.state.data?.pageParams || [];
			let f = {
					pages: [],
					pageParams: []
				},
				p = 0;
			const h = async () => {
				let g = !1;
				const y = b => {
						jS(b, () => n.signal, () => g = !0)
					},
					v = Gy(n.options, n.fetchOptions),
					x = async (b, E, P) => {
						if (g) return Promise.reject();
						if (E == null && b.pages.length) return Promise.resolve(b);
						const R = (() => {
								const L = {
									client: n.client,
									queryKey: n.queryKey,
									pageParam: E,
									direction: P ? "backward" : "forward",
									meta: n.options.meta
								};
								return y(L), L
							})(),
							_ = await v(R),
							{
								maxPages: A
							} = n.options,
							M = P ? NS : AS;
						return {
							pages: M(b.pages, _, A),
							pageParams: M(b.pageParams, E, A)
						}
					};
				if (a && u.length) {
					const b = a === "backward",
						E = b ? HS : Em,
						P = {
							pages: u,
							pageParams: c
						},
						C = E(o, P);
					f = await x(P, C, b)
				} else {
					const b = e ?? u.length;
					do {
						const E = p === 0 ? c[0] ?? o.initialPageParam : Em(o, f);
						if (p > 0 && E == null) break;
						f = await x(f, E), p++
					} while (p < b)
				}
				return f
			};
			n.options.persister ? n.fetchFn = () => n.options.persister?.(h, {
				client: n.client,
				queryKey: n.queryKey,
				meta: n.options.meta,
				signal: n.signal
			}, i) : n.fetchFn = h
		}
	}
}

function Em(e, {
	pages: n,
	pageParams: i
}) {
	const o = n.length - 1;
	return n.length > 0 ? e.getNextPageParam(n[o], n, i[o], i) : void 0
}

function HS(e, {
	pages: n,
	pageParams: i
}) {
	return n.length > 0 ? e.getPreviousPageParam?.(n[0], n, i[0], i) : void 0
}
var WS = class extends Jy {
	#e;
	#t;
	#n;
	#i;
	constructor(e) {
		super(), this.#e = e.client, this.mutationId = e.mutationId, this.#n = e.mutationCache, this.#t = [], this.state = e.state || $S(), this.setOptions(e.options), this.scheduleGc()
	}
	setOptions(e) {
		this.options = e, this.updateGcTime(this.options.gcTime)
	}
	get meta() {
		return this.options.meta
	}
	addObserver(e) {
		this.#t.includes(e) || (this.#t.push(e), this.clearGcTimeout(), this.#n.notify({
			type: "observerAdded",
			mutation: this,
			observer: e
		}))
	}
	removeObserver(e) {
		this.#t = this.#t.filter(n => n !== e), this.scheduleGc(), this.#n.notify({
			type: "observerRemoved",
			mutation: this,
			observer: e
		})
	}
	optionalRemove() {
		this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#n.remove(this))
	}
	continue () {
		return this.#i?.continue() ?? this.execute(this.state.variables)
	}
	async execute(e) {
		const n = () => {
				this.#r({
					type: "continue"
				})
			},
			i = {
				client: this.#e,
				meta: this.options.meta,
				mutationKey: this.options.mutationKey
			};
		this.#i = Zy({
			fn: () => this.options.mutationFn ? this.options.mutationFn(e, i) : Promise.reject(new Error("No mutationFn found")),
			onFail: (u, c) => {
				this.#r({
					type: "failed",
					failureCount: u,
					error: c
				})
			},
			onPause: () => {
				this.#r({
					type: "pause"
				})
			},
			onContinue: n,
			retry: this.options.retry ?? 0,
			retryDelay: this.options.retryDelay,
			networkMode: this.options.networkMode,
			canRun: () => this.#n.canRun(this)
		});
		const o = this.state.status === "pending",
			a = !this.#i.canStart();
		try {
			if (o) n();
			else {
				this.#r({
					type: "pending",
					variables: e,
					isPaused: a
				}), this.#n.config.onMutate && await this.#n.config.onMutate(e, this, i);
				const c = await this.options.onMutate?.(e, i);
				c !== this.state.context && this.#r({
					type: "pending",
					context: c,
					variables: e,
					isPaused: a
				})
			}
			const u = await this.#i.start();
			return await this.#n.config.onSuccess?.(u, e, this.state.context, this, i), await this.options.onSuccess?.(u, e, this.state.context, i), await this.#n.config.onSettled?.(u, null, this.state.variables, this.state.context, this, i), await this.options.onSettled?.(u, null, e, this.state.context, i), this.#r({
				type: "success",
				data: u
			}), u
		} catch (u) {
			try {
				await this.#n.config.onError?.(u, e, this.state.context, this, i)
			} catch (c) {
				Promise.reject(c)
			}
			try {
				await this.options.onError?.(u, e, this.state.context, i)
			} catch (c) {
				Promise.reject(c)
			}
			try {
				await this.#n.config.onSettled?.(void 0, u, this.state.variables, this.state.context, this, i)
			} catch (c) {
				Promise.reject(c)
			}
			try {
				await this.options.onSettled?.(void 0, u, e, this.state.context, i)
			} catch (c) {
				Promise.reject(c)
			}
			throw this.#r({
				type: "error",
				error: u
			}), u
		} finally {
			this.#n.runNext(this)
		}
	}
	#r(e) {
		const n = i => {
			switch (e.type) {
				case "failed":
					return {
						...i, failureCount: e.failureCount, failureReason: e.error
					};
				case "pause":
					return {
						...i, isPaused: !0
					};
				case "continue":
					return {
						...i, isPaused: !1
					};
				case "pending":
					return {
						...i, context: e.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: e.isPaused, status: "pending", variables: e.variables, submittedAt: Date.now()
					};
				case "success":
					return {
						...i, data: e.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
					};
				case "error":
					return {
						...i, data: void 0, error: e.error, failureCount: i.failureCount + 1, failureReason: e.error, isPaused: !1, status: "error"
					}
			}
		};
		this.state = n(this.state), Xe.batch(() => {
			this.#t.forEach(i => {
				i.onMutationUpdate(e)
			}), this.#n.notify({
				mutation: this,
				type: "updated",
				action: e
			})
		})
	}
};

function $S() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: !1,
		status: "idle",
		variables: void 0,
		submittedAt: 0
	}
}
var KS = class extends mo {
	constructor(e = {}) {
		super(), this.config = e, this.#e = new Set, this.#t = new Map, this.#n = 0
	}
	#e;
	#t;
	#n;
	build(e, n, i) {
		const o = new WS({
			client: e,
			mutationCache: this,
			mutationId: ++this.#n,
			options: e.defaultMutationOptions(n),
			state: i
		});
		return this.add(o), o
	}
	add(e) {
		this.#e.add(e);
		const n = Ns(e);
		if (typeof n == "string") {
			const i = this.#t.get(n);
			i ? i.push(e) : this.#t.set(n, [e])
		}
		this.notify({
			type: "added",
			mutation: e
		})
	}
	remove(e) {
		if (this.#e.delete(e)) {
			const n = Ns(e);
			if (typeof n == "string") {
				const i = this.#t.get(n);
				if (i)
					if (i.length > 1) {
						const o = i.indexOf(e);
						o !== -1 && i.splice(o, 1)
					} else i[0] === e && this.#t.delete(n)
			}
		}
		this.notify({
			type: "removed",
			mutation: e
		})
	}
	canRun(e) {
		const n = Ns(e);
		if (typeof n == "string") {
			const o = this.#t.get(n)?.find(a => a.state.status === "pending");
			return !o || o === e
		} else return !0
	}
	runNext(e) {
		const n = Ns(e);
		return typeof n == "string" ? this.#t.get(n)?.find(o => o !== e && o.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve()
	}
	clear() {
		Xe.batch(() => {
			this.#e.forEach(e => {
				this.notify({
					type: "removed",
					mutation: e
				})
			}), this.#e.clear(), this.#t.clear()
		})
	}
	getAll() {
		return Array.from(this.#e)
	}
	find(e) {
		const n = {
			exact: !0,
			...e
		};
		return this.getAll().find(i => mm(n, i))
	}
	findAll(e = {}) {
		return this.getAll().filter(n => mm(e, n))
	}
	notify(e) {
		Xe.batch(() => {
			this.listeners.forEach(n => {
				n(e)
			})
		})
	}
	resumePausedMutations() {
		const e = this.getAll().filter(n => n.state.isPaused);
		return Xe.batch(() => Promise.all(e.map(n => n.continue().catch(ht))))
	}
};

function Ns(e) {
	return e.options.scope?.id
}
var QS = class extends mo {
		constructor(e = {}) {
			super(), this.config = e, this.#e = new Map
		}
		#e;
		build(e, n, i) {
			const o = n.queryKey,
				a = n.queryHash ?? Xc(o, n);
			let u = this.get(a);
			return u || (u = new VS({
				client: e,
				queryKey: o,
				queryHash: a,
				options: e.defaultQueryOptions(n),
				state: i,
				defaultOptions: e.getQueryDefaults(o)
			}), this.add(u)), u
		}
		add(e) {
			this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
				type: "added",
				query: e
			}))
		}
		remove(e) {
			const n = this.#e.get(e.queryHash);
			n && (e.destroy(), n === e && this.#e.delete(e.queryHash), this.notify({
				type: "removed",
				query: e
			}))
		}
		clear() {
			Xe.batch(() => {
				this.getAll().forEach(e => {
					this.remove(e)
				})
			})
		}
		get(e) {
			return this.#e.get(e)
		}
		getAll() {
			return [...this.#e.values()]
		}
		find(e) {
			const n = {
				exact: !0,
				...e
			};
			return this.getAll().find(i => pm(n, i))
		}
		findAll(e = {}) {
			const n = this.getAll();
			return Object.keys(e).length > 0 ? n.filter(i => pm(e, i)) : n
		}
		notify(e) {
			Xe.batch(() => {
				this.listeners.forEach(n => {
					n(e)
				})
			})
		}
		onFocus() {
			Xe.batch(() => {
				this.getAll().forEach(e => {
					e.onFocus()
				})
			})
		}
		onOnline() {
			Xe.batch(() => {
				this.getAll().forEach(e => {
					e.onOnline()
				})
			})
		}
	},
	qS = class {
		#e;
		#t;
		#n;
		#i;
		#r;
		#a;
		#s;
		#o;
		constructor(e = {}) {
			this.#e = e.queryCache || new QS, this.#t = e.mutationCache || new KS, this.#n = e.defaultOptions || {}, this.#i = new Map, this.#r = new Map, this.#a = 0
		}
		mount() {
			this.#a++, this.#a === 1 && (this.#s = Jc.subscribe(async e => {
				e && (await this.resumePausedMutations(), this.#e.onFocus())
			}), this.#o = aa.subscribe(async e => {
				e && (await this.resumePausedMutations(), this.#e.onOnline())
			}))
		}
		unmount() {
			this.#a--, this.#a === 0 && (this.#s?.(), this.#s = void 0, this.#o?.(), this.#o = void 0)
		}
		isFetching(e) {
			return this.#e.findAll({
				...e,
				fetchStatus: "fetching"
			}).length
		}
		isMutating(e) {
			return this.#t.findAll({
				...e,
				status: "pending"
			}).length
		}
		getQueryData(e) {
			const n = this.defaultQueryOptions({
				queryKey: e
			});
			return this.#e.get(n.queryHash)?.state.data
		}
		ensureQueryData(e) {
			const n = this.defaultQueryOptions(e),
				i = this.#e.build(this, n),
				o = i.state.data;
			return o === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && i.isStaleByTime(Hn(n.staleTime, i)) && this.prefetchQuery(n), Promise.resolve(o))
		}
		getQueriesData(e) {
			return this.#e.findAll(e).map(({
				queryKey: n,
				state: i
			}) => {
				const o = i.data;
				return [n, o]
			})
		}
		setQueryData(e, n, i) {
			const o = this.defaultQueryOptions({
					queryKey: e
				}),
				u = this.#e.get(o.queryHash)?.state.data,
				c = RS(n, u);
			if (c !== void 0) return this.#e.build(this, o).setData(c, {
				...i,
				manual: !0
			})
		}
		setQueriesData(e, n, i) {
			return Xe.batch(() => this.#e.findAll(e).map(({
				queryKey: o
			}) => [o, this.setQueryData(o, n, i)]))
		}
		getQueryState(e) {
			const n = this.defaultQueryOptions({
				queryKey: e
			});
			return this.#e.get(n.queryHash)?.state
		}
		removeQueries(e) {
			const n = this.#e;
			Xe.batch(() => {
				n.findAll(e).forEach(i => {
					n.remove(i)
				})
			})
		}
		resetQueries(e, n) {
			const i = this.#e;
			return Xe.batch(() => (i.findAll(e).forEach(o => {
				o.reset()
			}), this.refetchQueries({
				type: "active",
				...e
			}, n)))
		}
		cancelQueries(e, n = {}) {
			const i = {
					revert: !0,
					...n
				},
				o = Xe.batch(() => this.#e.findAll(e).map(a => a.cancel(i)));
			return Promise.all(o).then(ht).catch(ht)
		}
		invalidateQueries(e, n = {}) {
			return Xe.batch(() => (this.#e.findAll(e).forEach(i => {
				i.invalidate()
			}), e?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
				...e,
				type: e?.refetchType ?? e?.type ?? "active"
			}, n)))
		}
		refetchQueries(e, n = {}) {
			const i = {
					...n,
					cancelRefetch: n.cancelRefetch ?? !0
				},
				o = Xe.batch(() => this.#e.findAll(e).filter(a => !a.isDisabled() && !a.isStatic()).map(a => {
					let u = a.fetch(void 0, i);
					return i.throwOnError || (u = u.catch(ht)), a.state.fetchStatus === "paused" ? Promise.resolve() : u
				}));
			return Promise.all(o).then(ht)
		}
		fetchQuery(e) {
			const n = this.defaultQueryOptions(e);
			n.retry === void 0 && (n.retry = !1);
			const i = this.#e.build(this, n);
			return i.isStaleByTime(Hn(n.staleTime, i)) ? i.fetch(n) : Promise.resolve(i.state.data)
		}
		prefetchQuery(e) {
			return this.fetchQuery(e).then(ht).catch(ht)
		}
		fetchInfiniteQuery(e) {
			return e.behavior = bm(e.pages), this.fetchQuery(e)
		}
		prefetchInfiniteQuery(e) {
			return this.fetchInfiniteQuery(e).then(ht).catch(ht)
		}
		ensureInfiniteQueryData(e) {
			return e.behavior = bm(e.pages), this.ensureQueryData(e)
		}
		resumePausedMutations() {
			return aa.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve()
		}
		getQueryCache() {
			return this.#e
		}
		getMutationCache() {
			return this.#t
		}
		getDefaultOptions() {
			return this.#n
		}
		setDefaultOptions(e) {
			this.#n = e
		}
		setQueryDefaults(e, n) {
			this.#i.set(so(e), {
				queryKey: e,
				defaultOptions: n
			})
		}
		getQueryDefaults(e) {
			const n = [...this.#i.values()],
				i = {};
			return n.forEach(o => {
				ao(e, o.queryKey) && Object.assign(i, o.defaultOptions)
			}), i
		}
		setMutationDefaults(e, n) {
			this.#r.set(so(e), {
				mutationKey: e,
				defaultOptions: n
			})
		}
		getMutationDefaults(e) {
			const n = [...this.#r.values()],
				i = {};
			return n.forEach(o => {
				ao(e, o.mutationKey) && Object.assign(i, o.defaultOptions)
			}), i
		}
		defaultQueryOptions(e) {
			if (e._defaulted) return e;
			const n = {
				...this.#n.queries,
				...this.getQueryDefaults(e.queryKey),
				...e,
				_defaulted: !0
			};
			return n.queryHash || (n.queryHash = Xc(n.queryKey, n)), n.refetchOnReconnect === void 0 && (n.refetchOnReconnect = n.networkMode !== "always"), n.throwOnError === void 0 && (n.throwOnError = !!n.suspense), !n.networkMode && n.persister && (n.networkMode = "offlineFirst"), n.queryFn === Zc && (n.enabled = !1), n
		}
		defaultMutationOptions(e) {
			return e?._defaulted ? e : {
				...this.#n.mutations,
				...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
				...e,
				_defaulted: !0
			}
		}
		clear() {
			this.#e.clear(), this.#t.clear()
		}
	},
	tv = T.createContext(void 0),
	GS = e => {
		const n = T.useContext(tv);
		if (!n) throw new Error("No QueryClient set, use QueryClientProvider to set one");
		return n
	},
	YS = ({
		client: e,
		children: n
	}) => (T.useEffect(() => (e.mount(), () => {
		e.unmount()
	}), [e]), S.jsx(tv.Provider, {
		value: e,
		children: n
	})),
	nv = T.createContext(!1),
	XS = () => T.useContext(nv);
nv.Provider;

function ZS() {
	let e = !1;
	return {
		clearReset: () => {
			e = !1
		},
		reset: () => {
			e = !0
		},
		isReset: () => e
	}
}
var JS = T.createContext(ZS()),
	eb = () => T.useContext(JS),
	tb = (e, n, i) => {
		const o = i?.state.error && typeof e.throwOnError == "function" ? Yy(e.throwOnError, [i.state.error, i]) : e.throwOnError;
		(e.suspense || e.experimental_prefetchInRender || o) && (n.isReset() || (e.retryOnMount = !1))
	},
	nb = e => {
		T.useEffect(() => {
			e.clearReset()
		}, [e])
	},
	rb = ({
		result: e,
		errorResetBoundary: n,
		throwOnError: i,
		query: o,
		suspense: a
	}) => e.isError && !n.isReset() && !e.isFetching && o && (a && e.data === void 0 || Yy(i, [e.error, o])),
	ib = e => {
		if (e.suspense) {
			const i = a => a === "static" ? a : Math.max(a ?? 1e3, 1e3),
				o = e.staleTime;
			e.staleTime = typeof o == "function" ? (...a) => i(o(...a)) : i(o), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3))
		}
	},
	ob = (e, n) => e.isLoading && e.isFetching && !n,
	sb = (e, n) => e?.suspense && n.isPending,
	Pm = (e, n, i) => n.fetchOptimistic(e).catch(() => {
		i.clearReset()
	});

function ab(e, n, i) {
	const o = XS(),
		a = eb(),
		u = GS(),
		c = u.defaultQueryOptions(e);
	u.getDefaultOptions().queries?._experimental_beforeQuery?.(c);
	const f = u.getQueryCache().get(c.queryHash);
	c._optimisticResults = o ? "isRestoring" : "optimistic", ib(c), tb(c, a, f), nb(a);
	const p = !u.getQueryCache().get(c.queryHash),
		[h] = T.useState(() => new n(u, c)),
		g = h.getOptimisticResult(c),
		y = !o && e.subscribed !== !1;
	if (T.useSyncExternalStore(T.useCallback(v => {
			const x = y ? h.subscribe(Xe.batchCalls(v)) : ht;
			return h.updateResult(), x
		}, [h, y]), () => h.getCurrentResult(), () => h.getCurrentResult()), T.useEffect(() => {
			h.setOptions(c)
		}, [c, h]), sb(c, g)) throw Pm(c, h, a);
	if (rb({
			result: g,
			errorResetBoundary: a,
			throwOnError: c.throwOnError,
			query: f,
			suspense: c.suspense
		})) throw g.error;
	return u.getDefaultOptions().queries?._experimental_afterQuery?.(c, g), c.experimental_prefetchInRender && !gr && ob(g, o) && (p ? Pm(c, h, a) : f?.promise)?.catch(ht).finally(() => {
		h.updateResult()
	}), c.notifyOnChangeProps ? g : h.trackResult(g)
}

function Ea(e, n) {
	return ab(e, zS)
}
async function lb(e) {
	if (!e.ok) {
		const n = await e.text() || e.statusText;
		throw new Error(`${e.status}: ${n}`)
	}
}
const ub = ({
	on401: e
}) => async ({
	queryKey: n
}) => {
	const i = await fetch(n.join("/"), {
		credentials: "include"
	});
	return await lb(i), await i.json()
}, cb = new qS({
	defaultOptions: {
		queries: {
			queryFn: ub({
				on401: "throw"
			}),
			refetchInterval: !1,
			refetchOnWindowFocus: !1,
			staleTime: 1 / 0,
			retry: !1
		},
		mutations: {
			retry: !1
		}
	}
}), fb = 1, db = 1e6;
let Wu = 0;

function hb() {
	return Wu = (Wu + 1) % Number.MAX_SAFE_INTEGER, Wu.toString()
}
const $u = new Map,
	Tm = e => {
		if ($u.has(e)) return;
		const n = setTimeout(() => {
			$u.delete(e), to({
				type: "REMOVE_TOAST",
				toastId: e
			})
		}, db);
		$u.set(e, n)
	},
	pb = (e, n) => {
		switch (n.type) {
			case "ADD_TOAST":
				return {
					...e, toasts: [n.toast, ...e.toasts].slice(0, fb)
				};
			case "UPDATE_TOAST":
				return {
					...e, toasts: e.toasts.map(i => i.id === n.toast.id ? {
						...i,
						...n.toast
					} : i)
				};
			case "DISMISS_TOAST": {
				const {
					toastId: i
				} = n;
				return i ? Tm(i) : e.toasts.forEach(o => {
					Tm(o.id)
				}), {
					...e,
					toasts: e.toasts.map(o => o.id === i || i === void 0 ? {
						...o,
						open: !1
					} : o)
				}
			}
			case "REMOVE_TOAST":
				return n.toastId === void 0 ? {
					...e,
					toasts: []
				} : {
					...e,
					toasts: e.toasts.filter(i => i.id !== n.toastId)
				}
		}
	},
	ta = [];
let na = {
	toasts: []
};

function to(e) {
	na = pb(na, e), ta.forEach(n => {
		n(na)
	})
}

function mb({
	...e
}) {
	const n = hb(),
		i = a => to({
			type: "UPDATE_TOAST",
			toast: {
				...a,
				id: n
			}
		}),
		o = () => to({
			type: "DISMISS_TOAST",
			toastId: n
		});
	return to({
		type: "ADD_TOAST",
		toast: {
			...e,
			id: n,
			open: !0,
			onOpenChange: a => {
				a || o()
			}
		}
	}), {
		id: n,
		dismiss: o,
		update: i
	}
}

function gb() {
	const [e, n] = T.useState(na);
	return T.useEffect(() => (ta.push(n), () => {
		const i = ta.indexOf(n);
		i > -1 && ta.splice(i, 1)
	}), [e]), {
		...e,
		toast: mb,
		dismiss: i => to({
			type: "DISMISS_TOAST",
			toastId: i
		})
	}
}
var Pa = Sa();
const yb = Ly(Pa);

function We(e, n, {
	checkForDefaultPrevented: i = !0
} = {}) {
	return function(a) {
		if (e?.(a), i === !1 || !a.defaultPrevented) return n?.(a)
	}
}

function Cm(e, n) {
	if (typeof e == "function") return e(n);
	e != null && (e.current = n)
}

function tf(...e) {
	return n => {
		let i = !1;
		const o = e.map(a => {
			const u = Cm(a, n);
			return !i && typeof u == "function" && (i = !0), u
		});
		if (i) return () => {
			for (let a = 0; a < o.length; a++) {
				const u = o[a];
				typeof u == "function" ? u() : Cm(e[a], null)
			}
		}
	}
}

function Wt(...e) {
	return T.useCallback(tf(...e), e)
}

function Ta(e, n = []) {
	let i = [];

	function o(u, c) {
		const f = T.createContext(c),
			p = i.length;
		i = [...i, c];
		const h = y => {
			const {
				scope: v,
				children: x,
				...b
			} = y, E = v?.[e]?.[p] || f, P = T.useMemo(() => b, Object.values(b));
			return S.jsx(E.Provider, {
				value: P,
				children: x
			})
		};
		h.displayName = u + "Provider";

		function g(y, v) {
			const x = v?.[e]?.[p] || f,
				b = T.useContext(x);
			if (b) return b;
			if (c !== void 0) return c;
			throw new Error(`\`${y}\` must be used within \`${u}\``)
		}
		return [h, g]
	}
	const a = () => {
		const u = i.map(c => T.createContext(c));
		return function(f) {
			const p = f?.[e] || u;
			return T.useMemo(() => ({
				[`__scope${e}`]: {
					...f,
					[e]: p
				}
			}), [f, p])
		}
	};
	return a.scopeName = e, [o, vb(a, ...n)]
}

function vb(...e) {
	const n = e[0];
	if (e.length === 1) return n;
	const i = () => {
		const o = e.map(a => ({
			useScope: a(),
			scopeName: a.scopeName
		}));
		return function(u) {
			const c = o.reduce((f, {
				useScope: p,
				scopeName: h
			}) => {
				const y = p(u)[`__scope${h}`];
				return {
					...f,
					...y
				}
			}, {});
			return T.useMemo(() => ({
				[`__scope${n.scopeName}`]: c
			}), [c])
		}
	};
	return i.scopeName = n.scopeName, i
}

function km(e) {
	const n = xb(e),
		i = T.forwardRef((o, a) => {
			const {
				children: u,
				...c
			} = o, f = T.Children.toArray(u), p = f.find(Sb);
			if (p) {
				const h = p.props.children,
					g = f.map(y => y === p ? T.Children.count(h) > 1 ? T.Children.only(null) : T.isValidElement(h) ? h.props.children : null : y);
				return S.jsx(n, {
					...c,
					ref: a,
					children: T.isValidElement(h) ? T.cloneElement(h, void 0, g) : null
				})
			}
			return S.jsx(n, {
				...c,
				ref: a,
				children: u
			})
		});
	return i.displayName = `${e}.Slot`, i
}

function xb(e) {
	const n = T.forwardRef((i, o) => {
		const {
			children: a,
			...u
		} = i;
		if (T.isValidElement(a)) {
			const c = Eb(a),
				f = bb(u, a.props);
			return a.type !== T.Fragment && (f.ref = o ? tf(o, c) : c), T.cloneElement(a, f)
		}
		return T.Children.count(a) > 1 ? T.Children.only(null) : null
	});
	return n.displayName = `${e}.SlotClone`, n
}
var wb = Symbol("radix.slottable");

function Sb(e) {
	return T.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === wb
}

function bb(e, n) {
	const i = {
		...n
	};
	for (const o in n) {
		const a = e[o],
			u = n[o];
		/^on[A-Z]/.test(o) ? a && u ? i[o] = (...f) => {
			const p = u(...f);
			return a(...f), p
		} : a && (i[o] = a) : o === "style" ? i[o] = {
			...a,
			...u
		} : o === "className" && (i[o] = [a, u].filter(Boolean).join(" "))
	}
	return {
		...e,
		...i
	}
}

function Eb(e) {
	let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
		i = n && "isReactWarning" in n && n.isReactWarning;
	return i ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, i = n && "isReactWarning" in n && n.isReactWarning, i ? e.props.ref : e.props.ref || e.ref)
}

function Pb(e) {
	const n = e + "CollectionProvider",
		[i, o] = Ta(n),
		[a, u] = i(n, {
			collectionRef: {
				current: null
			},
			itemMap: new Map
		}),
		c = E => {
			const {
				scope: P,
				children: C
			} = E, R = st.useRef(null), _ = st.useRef(new Map).current;
			return S.jsx(a, {
				scope: P,
				itemMap: _,
				collectionRef: R,
				children: C
			})
		};
	c.displayName = n;
	const f = e + "CollectionSlot",
		p = km(f),
		h = st.forwardRef((E, P) => {
			const {
				scope: C,
				children: R
			} = E, _ = u(f, C), A = Wt(P, _.collectionRef);
			return S.jsx(p, {
				ref: A,
				children: R
			})
		});
	h.displayName = f;
	const g = e + "CollectionItemSlot",
		y = "data-radix-collection-item",
		v = km(g),
		x = st.forwardRef((E, P) => {
			const {
				scope: C,
				children: R,
				..._
			} = E, A = st.useRef(null), M = Wt(P, A), L = u(g, C);
			return st.useEffect(() => (L.itemMap.set(A, {
				ref: A,
				..._
			}), () => {
				L.itemMap.delete(A)
			})), S.jsx(v, {
				[y]: "",
				ref: M,
				children: R
			})
		});
	x.displayName = g;

	function b(E) {
		const P = u(e + "CollectionConsumer", E);
		return st.useCallback(() => {
			const R = P.collectionRef.current;
			if (!R) return [];
			const _ = Array.from(R.querySelectorAll(`[${y}]`));
			return Array.from(P.itemMap.values()).sort((L, I) => _.indexOf(L.ref.current) - _.indexOf(I.ref.current))
		}, [P.collectionRef, P.itemMap])
	}
	return [{
		Provider: c,
		Slot: h,
		ItemSlot: x
	}, b, o]
}

function Tb(e) {
	const n = Cb(e),
		i = T.forwardRef((o, a) => {
			const {
				children: u,
				...c
			} = o, f = T.Children.toArray(u), p = f.find(Rb);
			if (p) {
				const h = p.props.children,
					g = f.map(y => y === p ? T.Children.count(h) > 1 ? T.Children.only(null) : T.isValidElement(h) ? h.props.children : null : y);
				return S.jsx(n, {
					...c,
					ref: a,
					children: T.isValidElement(h) ? T.cloneElement(h, void 0, g) : null
				})
			}
			return S.jsx(n, {
				...c,
				ref: a,
				children: u
			})
		});
	return i.displayName = `${e}.Slot`, i
}

function Cb(e) {
	const n = T.forwardRef((i, o) => {
		const {
			children: a,
			...u
		} = i;
		if (T.isValidElement(a)) {
			const c = Ob(a),
				f = _b(u, a.props);
			return a.type !== T.Fragment && (f.ref = o ? tf(o, c) : c), T.cloneElement(a, f)
		}
		return T.Children.count(a) > 1 ? T.Children.only(null) : null
	});
	return n.displayName = `${e}.SlotClone`, n
}
var kb = Symbol("radix.slottable");

function Rb(e) {
	return T.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === kb
}

function _b(e, n) {
	const i = {
		...n
	};
	for (const o in n) {
		const a = e[o],
			u = n[o];
		/^on[A-Z]/.test(o) ? a && u ? i[o] = (...f) => {
			const p = u(...f);
			return a(...f), p
		} : a && (i[o] = a) : o === "style" ? i[o] = {
			...a,
			...u
		} : o === "className" && (i[o] = [a, u].filter(Boolean).join(" "))
	}
	return {
		...e,
		...i
	}
}

function Ob(e) {
	let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
		i = n && "isReactWarning" in n && n.isReactWarning;
	return i ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, i = n && "isReactWarning" in n && n.isReactWarning, i ? e.props.ref : e.props.ref || e.ref)
}
var Ab = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
	pt = Ab.reduce((e, n) => {
		const i = Tb(`Primitive.${n}`),
			o = T.forwardRef((a, u) => {
				const {
					asChild: c,
					...f
				} = a, p = c ? i : n;
				return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), S.jsx(p, {
					...f,
					ref: u
				})
			});
		return o.displayName = `Primitive.${n}`, {
			...e,
			[n]: o
		}
	}, {});

function rv(e, n) {
	e && Pa.flushSync(() => e.dispatchEvent(n))
}

function Wn(e) {
	const n = T.useRef(e);
	return T.useEffect(() => {
		n.current = e
	}), T.useMemo(() => (...i) => n.current?.(...i), [])
}

function Nb(e, n = globalThis?.document) {
	const i = Wn(e);
	T.useEffect(() => {
		const o = a => {
			a.key === "Escape" && i(a)
		};
		return n.addEventListener("keydown", o, {
			capture: !0
		}), () => n.removeEventListener("keydown", o, {
			capture: !0
		})
	}, [i, n])
}
var jb = "DismissableLayer",
	bc = "dismissableLayer.update",
	Mb = "dismissableLayer.pointerDownOutside",
	Db = "dismissableLayer.focusOutside",
	Rm, iv = T.createContext({
		layers: new Set,
		layersWithOutsidePointerEventsDisabled: new Set,
		branches: new Set
	}),
	nf = T.forwardRef((e, n) => {
		const {
			disableOutsidePointerEvents: i = !1,
			onEscapeKeyDown: o,
			onPointerDownOutside: a,
			onFocusOutside: u,
			onInteractOutside: c,
			onDismiss: f,
			...p
		} = e, h = T.useContext(iv), [g, y] = T.useState(null), v = g?.ownerDocument ?? globalThis?.document, [, x] = T.useState({}), b = Wt(n, I => y(I)), E = Array.from(h.layers), [P] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), C = E.indexOf(P), R = g ? E.indexOf(g) : -1, _ = h.layersWithOutsidePointerEventsDisabled.size > 0, A = R >= C, M = Ib(I => {
			const B = I.target,
				q = [...h.branches].some(W => W.contains(B));
			!A || q || (a?.(I), c?.(I), I.defaultPrevented || f?.())
		}, v), L = Fb(I => {
			const B = I.target;
			[...h.branches].some(W => W.contains(B)) || (u?.(I), c?.(I), I.defaultPrevented || f?.())
		}, v);
		return Nb(I => {
			R === h.layers.size - 1 && (o?.(I), !I.defaultPrevented && f && (I.preventDefault(), f()))
		}, v), T.useEffect(() => {
			if (g) return i && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (Rm = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(g)), h.layers.add(g), _m(), () => {
				i && h.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = Rm)
			}
		}, [g, v, i, h]), T.useEffect(() => () => {
			g && (h.layers.delete(g), h.layersWithOutsidePointerEventsDisabled.delete(g), _m())
		}, [g, h]), T.useEffect(() => {
			const I = () => x({});
			return document.addEventListener(bc, I), () => document.removeEventListener(bc, I)
		}, []), S.jsx(pt.div, {
			...p,
			ref: b,
			style: {
				pointerEvents: _ ? A ? "auto" : "none" : void 0,
				...e.style
			},
			onFocusCapture: We(e.onFocusCapture, L.onFocusCapture),
			onBlurCapture: We(e.onBlurCapture, L.onBlurCapture),
			onPointerDownCapture: We(e.onPointerDownCapture, M.onPointerDownCapture)
		})
	});
nf.displayName = jb;
var Lb = "DismissableLayerBranch",
	ov = T.forwardRef((e, n) => {
		const i = T.useContext(iv),
			o = T.useRef(null),
			a = Wt(n, o);
		return T.useEffect(() => {
			const u = o.current;
			if (u) return i.branches.add(u), () => {
				i.branches.delete(u)
			}
		}, [i.branches]), S.jsx(pt.div, {
			...e,
			ref: a
		})
	});
ov.displayName = Lb;

function Ib(e, n = globalThis?.document) {
	const i = Wn(e),
		o = T.useRef(!1),
		a = T.useRef(() => {});
	return T.useEffect(() => {
		const u = f => {
				if (f.target && !o.current) {
					let p = function() {
						sv(Mb, i, h, {
							discrete: !0
						})
					};
					const h = {
						originalEvent: f
					};
					f.pointerType === "touch" ? (n.removeEventListener("click", a.current), a.current = p, n.addEventListener("click", a.current, {
						once: !0
					})) : p()
				} else n.removeEventListener("click", a.current);
				o.current = !1
			},
			c = window.setTimeout(() => {
				n.addEventListener("pointerdown", u)
			}, 0);
		return () => {
			window.clearTimeout(c), n.removeEventListener("pointerdown", u), n.removeEventListener("click", a.current)
		}
	}, [n, i]), {
		onPointerDownCapture: () => o.current = !0
	}
}

function Fb(e, n = globalThis?.document) {
	const i = Wn(e),
		o = T.useRef(!1);
	return T.useEffect(() => {
		const a = u => {
			u.target && !o.current && sv(Db, i, {
				originalEvent: u
			}, {
				discrete: !1
			})
		};
		return n.addEventListener("focusin", a), () => n.removeEventListener("focusin", a)
	}, [n, i]), {
		onFocusCapture: () => o.current = !0,
		onBlurCapture: () => o.current = !1
	}
}

function _m() {
	const e = new CustomEvent(bc);
	document.dispatchEvent(e)
}

function sv(e, n, i, {
	discrete: o
}) {
	const a = i.originalEvent.target,
		u = new CustomEvent(e, {
			bubbles: !1,
			cancelable: !0,
			detail: i
		});
	n && a.addEventListener(e, n, {
		once: !0
	}), o ? rv(a, u) : a.dispatchEvent(u)
}
var Vb = nf,
	zb = ov,
	$n = globalThis?.document ? T.useLayoutEffect : () => {},
	Bb = "Portal",
	av = T.forwardRef((e, n) => {
		const {
			container: i,
			...o
		} = e, [a, u] = T.useState(!1);
		$n(() => u(!0), []);
		const c = i || a && globalThis?.document?.body;
		return c ? yb.createPortal(S.jsx(pt.div, {
			...o,
			ref: n
		}), c) : null
	});
av.displayName = Bb;

function Ub(e, n) {
	return T.useReducer((i, o) => n[i][o] ?? i, e)
}
var rf = e => {
	const {
		present: n,
		children: i
	} = e, o = Hb(n), a = typeof i == "function" ? i({
		present: o.isPresent
	}) : T.Children.only(i), u = Wt(o.ref, Wb(a));
	return typeof i == "function" || o.isPresent ? T.cloneElement(a, {
		ref: u
	}) : null
};
rf.displayName = "Presence";

function Hb(e) {
	const [n, i] = T.useState(), o = T.useRef(null), a = T.useRef(e), u = T.useRef("none"), c = e ? "mounted" : "unmounted", [f, p] = Ub(c, {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: {
			MOUNT: "mounted"
		}
	});
	return T.useEffect(() => {
		const h = js(o.current);
		u.current = f === "mounted" ? h : "none"
	}, [f]), $n(() => {
		const h = o.current,
			g = a.current;
		if (g !== e) {
			const v = u.current,
				x = js(h);
			e ? p("MOUNT") : x === "none" || h?.display === "none" ? p("UNMOUNT") : p(g && v !== x ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e
		}
	}, [e, p]), $n(() => {
		if (n) {
			let h;
			const g = n.ownerDocument.defaultView ?? window,
				y = x => {
					const E = js(o.current).includes(CSS.escape(x.animationName));
					if (x.target === n && E && (p("ANIMATION_END"), !a.current)) {
						const P = n.style.animationFillMode;
						n.style.animationFillMode = "forwards", h = g.setTimeout(() => {
							n.style.animationFillMode === "forwards" && (n.style.animationFillMode = P)
						})
					}
				},
				v = x => {
					x.target === n && (u.current = js(o.current))
				};
			return n.addEventListener("animationstart", v), n.addEventListener("animationcancel", y), n.addEventListener("animationend", y), () => {
				g.clearTimeout(h), n.removeEventListener("animationstart", v), n.removeEventListener("animationcancel", y), n.removeEventListener("animationend", y)
			}
		} else p("ANIMATION_END")
	}, [n, p]), {
		isPresent: ["mounted", "unmountSuspended"].includes(f),
		ref: T.useCallback(h => {
			o.current = h ? getComputedStyle(h) : null, i(h)
		}, [])
	}
}

function js(e) {
	return e?.animationName || "none"
}

function Wb(e) {
	let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
		i = n && "isReactWarning" in n && n.isReactWarning;
	return i ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, i = n && "isReactWarning" in n && n.isReactWarning, i ? e.props.ref : e.props.ref || e.ref)
}
var $b = Iy[" useInsertionEffect ".trim().toString()] || $n;

function Kb({
	prop: e,
	defaultProp: n,
	onChange: i = () => {},
	caller: o
}) {
	const [a, u, c] = Qb({
		defaultProp: n,
		onChange: i
	}), f = e !== void 0, p = f ? e : a;
	{
		const g = T.useRef(e !== void 0);
		T.useEffect(() => {
			const y = g.current;
			y !== f && console.warn(`${o} is changing from ${y?"controlled":"uncontrolled"} to ${f?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), g.current = f
		}, [f, o])
	}
	const h = T.useCallback(g => {
		if (f) {
			const y = qb(g) ? g(e) : g;
			y !== e && c.current?.(y)
		} else u(g)
	}, [f, e, u, c]);
	return [p, h]
}

function Qb({
	defaultProp: e,
	onChange: n
}) {
	const [i, o] = T.useState(e), a = T.useRef(i), u = T.useRef(n);
	return $b(() => {
		u.current = n
	}, [n]), T.useEffect(() => {
		a.current !== i && (u.current?.(i), a.current = i)
	}, [i, a]), [i, o, u]
}

function qb(e) {
	return typeof e == "function"
}
var Gb = Object.freeze({
		position: "absolute",
		border: 0,
		width: 1,
		height: 1,
		padding: 0,
		margin: -1,
		overflow: "hidden",
		clip: "rect(0, 0, 0, 0)",
		whiteSpace: "nowrap",
		wordWrap: "normal"
	}),
	Yb = "VisuallyHidden",
	Ca = T.forwardRef((e, n) => S.jsx(pt.span, {
		...e,
		ref: n,
		style: {
			...Gb,
			...e.style
		}
	}));
Ca.displayName = Yb;
var Xb = Ca,
	of = "ToastProvider",
	[sf, Zb, Jb] = Pb("Toast"),
	[lv] = Ta("Toast", [Jb]),
	[eE, ka] = lv(of),
	uv = e => {
		const {
			__scopeToast: n,
			label: i = "Notification",
			duration: o = 5e3,
			swipeDirection: a = "right",
			swipeThreshold: u = 50,
			children: c
		} = e, [f, p] = T.useState(null), [h, g] = T.useState(0), y = T.useRef(!1), v = T.useRef(!1);
		return i.trim() || console.error(`Invalid prop \`label\` supplied to \`${of}\`. Expected non-empty \`string\`.`), S.jsx(sf.Provider, {
			scope: n,
			children: S.jsx(eE, {
				scope: n,
				label: i,
				duration: o,
				swipeDirection: a,
				swipeThreshold: u,
				toastCount: h,
				viewport: f,
				onViewportChange: p,
				onToastAdd: T.useCallback(() => g(x => x + 1), []),
				onToastRemove: T.useCallback(() => g(x => x - 1), []),
				isFocusedToastEscapeKeyDownRef: y,
				isClosePausedRef: v,
				children: c
			})
		})
	};
uv.displayName = of;
var cv = "ToastViewport",
	tE = ["F8"],
	Ec = "toast.viewportPause",
	Pc = "toast.viewportResume",
	fv = T.forwardRef((e, n) => {
		const {
			__scopeToast: i,
			hotkey: o = tE,
			label: a = "Notifications ({hotkey})",
			...u
		} = e, c = ka(cv, i), f = Zb(i), p = T.useRef(null), h = T.useRef(null), g = T.useRef(null), y = T.useRef(null), v = Wt(n, y, c.onViewportChange), x = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), b = c.toastCount > 0;
		T.useEffect(() => {
			const P = C => {
				o.length !== 0 && o.every(_ => C[_] || C.code === _) && y.current?.focus()
			};
			return document.addEventListener("keydown", P), () => document.removeEventListener("keydown", P)
		}, [o]), T.useEffect(() => {
			const P = p.current,
				C = y.current;
			if (b && P && C) {
				const R = () => {
						if (!c.isClosePausedRef.current) {
							const L = new CustomEvent(Ec);
							C.dispatchEvent(L), c.isClosePausedRef.current = !0
						}
					},
					_ = () => {
						if (c.isClosePausedRef.current) {
							const L = new CustomEvent(Pc);
							C.dispatchEvent(L), c.isClosePausedRef.current = !1
						}
					},
					A = L => {
						!P.contains(L.relatedTarget) && _()
					},
					M = () => {
						P.contains(document.activeElement) || _()
					};
				return P.addEventListener("focusin", R), P.addEventListener("focusout", A), P.addEventListener("pointermove", R), P.addEventListener("pointerleave", M), window.addEventListener("blur", R), window.addEventListener("focus", _), () => {
					P.removeEventListener("focusin", R), P.removeEventListener("focusout", A), P.removeEventListener("pointermove", R), P.removeEventListener("pointerleave", M), window.removeEventListener("blur", R), window.removeEventListener("focus", _)
				}
			}
		}, [b, c.isClosePausedRef]);
		const E = T.useCallback(({
			tabbingDirection: P
		}) => {
			const R = f().map(_ => {
				const A = _.ref.current,
					M = [A, ...pE(A)];
				return P === "forwards" ? M : M.reverse()
			});
			return (P === "forwards" ? R.reverse() : R).flat()
		}, [f]);
		return T.useEffect(() => {
			const P = y.current;
			if (P) {
				const C = R => {
					const _ = R.altKey || R.ctrlKey || R.metaKey;
					if (R.key === "Tab" && !_) {
						const M = document.activeElement,
							L = R.shiftKey;
						if (R.target === P && L) {
							h.current?.focus();
							return
						}
						const q = E({
								tabbingDirection: L ? "backwards" : "forwards"
							}),
							W = q.findIndex($ => $ === M);
						Ku(q.slice(W + 1)) ? R.preventDefault() : L ? h.current?.focus() : g.current?.focus()
					}
				};
				return P.addEventListener("keydown", C), () => P.removeEventListener("keydown", C)
			}
		}, [f, E]), S.jsxs(zb, {
			ref: p,
			role: "region",
			"aria-label": a.replace("{hotkey}", x),
			tabIndex: -1,
			style: {
				pointerEvents: b ? void 0 : "none"
			},
			children: [b && S.jsx(Tc, {
				ref: h,
				onFocusFromOutsideViewport: () => {
					const P = E({
						tabbingDirection: "forwards"
					});
					Ku(P)
				}
			}), S.jsx(sf.Slot, {
				scope: i,
				children: S.jsx(pt.ol, {
					tabIndex: -1,
					...u,
					ref: v
				})
			}), b && S.jsx(Tc, {
				ref: g,
				onFocusFromOutsideViewport: () => {
					const P = E({
						tabbingDirection: "backwards"
					});
					Ku(P)
				}
			})]
		})
	});
fv.displayName = cv;
var dv = "ToastFocusProxy",
	Tc = T.forwardRef((e, n) => {
		const {
			__scopeToast: i,
			onFocusFromOutsideViewport: o,
			...a
		} = e, u = ka(dv, i);
		return S.jsx(Ca, {
			tabIndex: 0,
			...a,
			ref: n,
			style: {
				position: "fixed"
			},
			onFocus: c => {
				const f = c.relatedTarget;
				!u.viewport?.contains(f) && o()
			}
		})
	});
Tc.displayName = dv;
var go = "Toast",
	nE = "toast.swipeStart",
	rE = "toast.swipeMove",
	iE = "toast.swipeCancel",
	oE = "toast.swipeEnd",
	hv = T.forwardRef((e, n) => {
		const {
			forceMount: i,
			open: o,
			defaultOpen: a,
			onOpenChange: u,
			...c
		} = e, [f, p] = Kb({
			prop: o,
			defaultProp: a ?? !0,
			onChange: u,
			caller: go
		});
		return S.jsx(rf, {
			present: i || f,
			children: S.jsx(lE, {
				open: f,
				...c,
				ref: n,
				onClose: () => p(!1),
				onPause: Wn(e.onPause),
				onResume: Wn(e.onResume),
				onSwipeStart: We(e.onSwipeStart, h => {
					h.currentTarget.setAttribute("data-swipe", "start")
				}),
				onSwipeMove: We(e.onSwipeMove, h => {
					const {
						x: g,
						y
					} = h.detail.delta;
					h.currentTarget.setAttribute("data-swipe", "move"), h.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${g}px`), h.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${y}px`)
				}),
				onSwipeCancel: We(e.onSwipeCancel, h => {
					h.currentTarget.setAttribute("data-swipe", "cancel"), h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), h.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), h.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
				}),
				onSwipeEnd: We(e.onSwipeEnd, h => {
					const {
						x: g,
						y
					} = h.detail.delta;
					h.currentTarget.setAttribute("data-swipe", "end"), h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), h.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${g}px`), h.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${y}px`), p(!1)
				})
			})
		})
	});
hv.displayName = go;
var [sE, aE] = lv(go, {
	onClose() {}
}), lE = T.forwardRef((e, n) => {
	const {
		__scopeToast: i,
		type: o = "foreground",
		duration: a,
		open: u,
		onClose: c,
		onEscapeKeyDown: f,
		onPause: p,
		onResume: h,
		onSwipeStart: g,
		onSwipeMove: y,
		onSwipeCancel: v,
		onSwipeEnd: x,
		...b
	} = e, E = ka(go, i), [P, C] = T.useState(null), R = Wt(n, U => C(U)), _ = T.useRef(null), A = T.useRef(null), M = a || E.duration, L = T.useRef(0), I = T.useRef(M), B = T.useRef(0), {
		onToastAdd: q,
		onToastRemove: W
	} = E, $ = Wn(() => {
		P?.contains(document.activeElement) && E.viewport?.focus(), c()
	}), D = T.useCallback(U => {
		!U || U === 1 / 0 || (window.clearTimeout(B.current), L.current = new Date().getTime(), B.current = window.setTimeout($, U))
	}, [$]);
	T.useEffect(() => {
		const U = E.viewport;
		if (U) {
			const ce = () => {
					D(I.current), h?.()
				},
				oe = () => {
					const te = new Date().getTime() - L.current;
					I.current = I.current - te, window.clearTimeout(B.current), p?.()
				};
			return U.addEventListener(Ec, oe), U.addEventListener(Pc, ce), () => {
				U.removeEventListener(Ec, oe), U.removeEventListener(Pc, ce)
			}
		}
	}, [E.viewport, M, p, h, D]), T.useEffect(() => {
		u && !E.isClosePausedRef.current && D(M)
	}, [u, M, E.isClosePausedRef, D]), T.useEffect(() => (q(), () => W()), [q, W]);
	const X = T.useMemo(() => P ? wv(P) : null, [P]);
	return E.viewport ? S.jsxs(S.Fragment, {
		children: [X && S.jsx(uE, {
			__scopeToast: i,
			role: "status",
			"aria-live": o === "foreground" ? "assertive" : "polite",
			children: X
		}), S.jsx(sE, {
			scope: i,
			onClose: $,
			children: Pa.createPortal(S.jsx(sf.ItemSlot, {
				scope: i,
				children: S.jsx(Vb, {
					asChild: !0,
					onEscapeKeyDown: We(f, () => {
						E.isFocusedToastEscapeKeyDownRef.current || $(), E.isFocusedToastEscapeKeyDownRef.current = !1
					}),
					children: S.jsx(pt.li, {
						tabIndex: 0,
						"data-state": u ? "open" : "closed",
						"data-swipe-direction": E.swipeDirection,
						...b,
						ref: R,
						style: {
							userSelect: "none",
							touchAction: "none",
							...e.style
						},
						onKeyDown: We(e.onKeyDown, U => {
							U.key === "Escape" && (f?.(U.nativeEvent), U.nativeEvent.defaultPrevented || (E.isFocusedToastEscapeKeyDownRef.current = !0, $()))
						}),
						onPointerDown: We(e.onPointerDown, U => {
							U.button === 0 && (_.current = {
								x: U.clientX,
								y: U.clientY
							})
						}),
						onPointerMove: We(e.onPointerMove, U => {
							if (!_.current) return;
							const ce = U.clientX - _.current.x,
								oe = U.clientY - _.current.y,
								te = !!A.current,
								H = ["left", "right"].includes(E.swipeDirection),
								ee = ["left", "up"].includes(E.swipeDirection) ? Math.min : Math.max,
								Z = H ? ee(0, ce) : 0,
								j = H ? 0 : ee(0, oe),
								K = U.pointerType === "touch" ? 10 : 2,
								le = {
									x: Z,
									y: j
								},
								pe = {
									originalEvent: U,
									delta: le
								};
							te ? (A.current = le, Ms(rE, y, pe, {
								discrete: !1
							})) : Om(le, E.swipeDirection, K) ? (A.current = le, Ms(nE, g, pe, {
								discrete: !1
							}), U.target.setPointerCapture(U.pointerId)) : (Math.abs(ce) > K || Math.abs(oe) > K) && (_.current = null)
						}),
						onPointerUp: We(e.onPointerUp, U => {
							const ce = A.current,
								oe = U.target;
							if (oe.hasPointerCapture(U.pointerId) && oe.releasePointerCapture(U.pointerId), A.current = null, _.current = null, ce) {
								const te = U.currentTarget,
									H = {
										originalEvent: U,
										delta: ce
									};
								Om(ce, E.swipeDirection, E.swipeThreshold) ? Ms(oE, x, H, {
									discrete: !0
								}) : Ms(iE, v, H, {
									discrete: !0
								}), te.addEventListener("click", ee => ee.preventDefault(), {
									once: !0
								})
							}
						})
					})
				})
			}), E.viewport)
		})]
	}) : null
}), uE = e => {
	const {
		__scopeToast: n,
		children: i,
		...o
	} = e, a = ka(go, n), [u, c] = T.useState(!1), [f, p] = T.useState(!1);
	return dE(() => c(!0)), T.useEffect(() => {
		const h = window.setTimeout(() => p(!0), 1e3);
		return () => window.clearTimeout(h)
	}, []), f ? null : S.jsx(av, {
		asChild: !0,
		children: S.jsx(Ca, {
			...o,
			children: u && S.jsxs(S.Fragment, {
				children: [a.label, " ", i]
			})
		})
	})
}, cE = "ToastTitle", pv = T.forwardRef((e, n) => {
	const {
		__scopeToast: i,
		...o
	} = e;
	return S.jsx(pt.div, {
		...o,
		ref: n
	})
});
pv.displayName = cE;
var fE = "ToastDescription",
	mv = T.forwardRef((e, n) => {
		const {
			__scopeToast: i,
			...o
		} = e;
		return S.jsx(pt.div, {
			...o,
			ref: n
		})
	});
mv.displayName = fE;
var gv = "ToastAction",
	yv = T.forwardRef((e, n) => {
		const {
			altText: i,
			...o
		} = e;
		return i.trim() ? S.jsx(xv, {
			altText: i,
			asChild: !0,
			children: S.jsx(af, {
				...o,
				ref: n
			})
		}) : (console.error(`Invalid prop \`altText\` supplied to \`${gv}\`. Expected non-empty \`string\`.`), null)
	});
yv.displayName = gv;
var vv = "ToastClose",
	af = T.forwardRef((e, n) => {
		const {
			__scopeToast: i,
			...o
		} = e, a = aE(vv, i);
		return S.jsx(xv, {
			asChild: !0,
			children: S.jsx(pt.button, {
				type: "button",
				...o,
				ref: n,
				onClick: We(e.onClick, a.onClose)
			})
		})
	});
af.displayName = vv;
var xv = T.forwardRef((e, n) => {
	const {
		__scopeToast: i,
		altText: o,
		...a
	} = e;
	return S.jsx(pt.div, {
		"data-radix-toast-announce-exclude": "",
		"data-radix-toast-announce-alt": o || void 0,
		...a,
		ref: n
	})
});

function wv(e) {
	const n = [];
	return Array.from(e.childNodes).forEach(o => {
		if (o.nodeType === o.TEXT_NODE && o.textContent && n.push(o.textContent), hE(o)) {
			const a = o.ariaHidden || o.hidden || o.style.display === "none",
				u = o.dataset.radixToastAnnounceExclude === "";
			if (!a)
				if (u) {
					const c = o.dataset.radixToastAnnounceAlt;
					c && n.push(c)
				} else n.push(...wv(o))
		}
	}), n
}

function Ms(e, n, i, {
	discrete: o
}) {
	const a = i.originalEvent.currentTarget,
		u = new CustomEvent(e, {
			bubbles: !0,
			cancelable: !0,
			detail: i
		});
	n && a.addEventListener(e, n, {
		once: !0
	}), o ? rv(a, u) : a.dispatchEvent(u)
}
var Om = (e, n, i = 0) => {
	const o = Math.abs(e.x),
		a = Math.abs(e.y),
		u = o > a;
	return n === "left" || n === "right" ? u && o > i : !u && a > i
};

function dE(e = () => {}) {
	const n = Wn(e);
	$n(() => {
		let i = 0,
			o = 0;
		return i = window.requestAnimationFrame(() => o = window.requestAnimationFrame(n)), () => {
			window.cancelAnimationFrame(i), window.cancelAnimationFrame(o)
		}
	}, [n])
}

function hE(e) {
	return e.nodeType === e.ELEMENT_NODE
}

function pE(e) {
	const n = [],
		i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
			acceptNode: o => {
				const a = o.tagName === "INPUT" && o.type === "hidden";
				return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
			}
		});
	for (; i.nextNode();) n.push(i.currentNode);
	return n
}

function Ku(e) {
	const n = document.activeElement;
	return e.some(i => i === n ? !0 : (i.focus(), document.activeElement !== n))
}
var mE = uv,
	Sv = fv,
	bv = hv,
	Ev = pv,
	Pv = mv,
	Tv = yv,
	Cv = af;

function kv(e) {
	var n, i, o = "";
	if (typeof e == "string" || typeof e == "number") o += e;
	else if (typeof e == "object")
		if (Array.isArray(e)) {
			var a = e.length;
			for (n = 0; n < a; n++) e[n] && (i = kv(e[n])) && (o && (o += " "), o += i)
		} else
			for (i in e) e[i] && (o && (o += " "), o += i);
	return o
}

function Rv() {
	for (var e, n, i = 0, o = "", a = arguments.length; i < a; i++)(e = arguments[i]) && (n = kv(e)) && (o && (o += " "), o += n);
	return o
}
const Am = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
	Nm = Rv,
	gE = (e, n) => i => {
		var o;
		if (n?.variants == null) return Nm(e, i?.class, i?.className);
		const {
			variants: a,
			defaultVariants: u
		} = n, c = Object.keys(a).map(h => {
			const g = i?.[h],
				y = u?.[h];
			if (g === null) return null;
			const v = Am(g) || Am(y);
			return a[h][v]
		}), f = i && Object.entries(i).reduce((h, g) => {
			let [y, v] = g;
			return v === void 0 || (h[y] = v), h
		}, {}), p = n == null || (o = n.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((h, g) => {
			let {
				class: y,
				className: v,
				...x
			} = g;
			return Object.entries(x).every(b => {
				let [E, P] = b;
				return Array.isArray(P) ? P.includes({
					...u,
					...f
				} [E]) : {
					...u,
					...f
				} [E] === P
			}) ? [...h, y, v] : h
		}, []);
		return Nm(e, c, p, i?.class, i?.className)
	};
const yE = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
	_v = (...e) => e.filter((n, i, o) => !!n && o.indexOf(n) === i).join(" ");
var vE = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
const xE = T.forwardRef(({
	color: e = "currentColor",
	size: n = 24,
	strokeWidth: i = 2,
	absoluteStrokeWidth: o,
	className: a = "",
	children: u,
	iconNode: c,
	...f
}, p) => T.createElement("svg", {
	ref: p,
	...vE,
	width: n,
	height: n,
	stroke: e,
	strokeWidth: o ? Number(i) * 24 / Number(n) : i,
	className: _v("lucide", a),
	...f
}, [...c.map(([h, g]) => T.createElement(h, g)), ...Array.isArray(u) ? u : [u]]));
const Et = (e, n) => {
	const i = T.forwardRef(({
		className: o,
		...a
	}, u) => T.createElement(xE, {
		ref: u,
		iconNode: n,
		className: _v(`lucide-${yE(e)}`, o),
		...a
	}));
	return i.displayName = `${e}`, i
};
const wE = Et("Award", [
	["path", {
		d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
		key: "1yiouv"
	}],
	["circle", {
		cx: "12",
		cy: "8",
		r: "6",
		key: "1vp47v"
	}]
]);
const jm = Et("BadgeCheck", [
	["path", {
		d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
		key: "3c2336"
	}],
	["path", {
		d: "m9 12 2 2 4-4",
		key: "dzmm74"
	}]
]);
const SE = Et("BookOpen", [
	["path", {
		d: "M12 7v14",
		key: "1akyts"
	}],
	["path", {
		d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
		key: "ruj8y"
	}]
]);
const bE = Et("CircleAlert", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]);

const EE = Et("CircuitBoard", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M11 9h4a2 2 0 0 0 2-2V3",
		key: "1ve2rv"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}],
	["path", {
		d: "M7 21v-4a2 2 0 0 1 2-2h4",
		key: "1fwkro"
	}],
	["circle", {
		cx: "15",
		cy: "15",
		r: "2",
		key: "3i40o0"
	}]
]);

const WifiSync = Et("WifiSync", [
  ["path", { d: "M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5", key: "1" }],
  ["path", { d: "M11.965 14.105h4", key: "2" }],
  ["path", { d: "M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5", key: "3" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "4" }],
  ["path", { d: "M21.965 22.105v-4", key: "5" }],
  ["path", { d: "M5 12.86a10 10 0 0 1 3-2.032", key: "6" }],
  ["path", { d: "M8.5 16.429h.01", key: "7" }]
]);

const Instagram = Et("Instagram", [
  ["rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5",
    key: "1"
  }],
  ["path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    key: "2"
  }],
  ["line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5",
    key: "3"
  }]
]);

const Github = Et("Github", [
  ["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "1"
  }],
  ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "2"
  }]
]);

const Lightbulb = Et("Lightbulb", [
  ["path", {
    d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
    key: "1"
  }],
  ["path", {
    d: "M9 18h6",
    key: "2"
  }],
  ["path", {
    d: "M10 22h4",
    key: "3"
  }]
]);

const Mm = Et("Cpu", [
	["rect", {
		width: "16",
		height: "16",
		x: "4",
		y: "4",
		rx: "2",
		key: "14l7u7"
	}],
	["rect", {
		width: "6",
		height: "6",
		x: "9",
		y: "9",
		rx: "1",
		key: "5aljv4"
	}],
	["path", {
		d: "M15 2v2",
		key: "13l42r"
	}],
	["path", {
		d: "M15 20v2",
		key: "15mkzm"
	}],
	["path", {
		d: "M2 15h2",
		key: "1gxd5l"
	}],
	["path", {
		d: "M2 9h2",
		key: "1bbxkp"
	}],
	["path", {
		d: "M20 15h2",
		key: "19e6y8"
	}],
	["path", {
		d: "M20 9h2",
		key: "19tzq7"
	}],
	["path", {
		d: "M9 2v2",
		key: "165o2o"
	}],
	["path", {
		d: "M9 20v2",
		key: "i2bqo8"
	}]
]);
const PE = Et("DollarSign", [
	["line", {
		x1: "12",
		x2: "12",
		y1: "2",
		y2: "22",
		key: "7eqyqh"
	}],
	["path", {
		d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
		key: "1b0p4s"
	}]
]);
const TE = Et("ExternalLink", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]);
const CE = Et("Leaf", [
	["path", {
		d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
		key: "nnexq3"
	}],
	["path", {
		d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
		key: "mt58a7"
	}]
]);
const kE = Et("Menu", [
	["line", {
		x1: "4",
		x2: "20",
		y1: "12",
		y2: "12",
		key: "1e0a9i"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "6",
		y2: "6",
		key: "1owob3"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "18",
		y2: "18",
		key: "yk5zj1"
	}]
]);
const RE = Et("Terminal", [
	["polyline", {
		points: "4 17 10 11 4 5",
		key: "akl6gq"
	}],
	["line", {
		x1: "12",
		x2: "20",
		y1: "19",
		y2: "19",
		key: "q2wloq"
	}]
]);
const lf = Et("X", [
	["path", {
		d: "M18 6 6 18",
		key: "1bl5f8"
	}],
	["path", {
		d: "m6 6 12 12",
		key: "d8bk6v"
	}]
]);
const _E = Et("Zap", [
		["path", {
			d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
			key: "1xq2db"
		}]
	]),
	uf = "-",
	OE = e => {
		const n = NE(e),
			{
				conflictingClassGroups: i,
				conflictingClassGroupModifiers: o
			} = e;
		return {
			getClassGroupId: c => {
				const f = c.split(uf);
				return f[0] === "" && f.length !== 1 && f.shift(), Ov(f, n) || AE(c)
			},
			getConflictingClassGroupIds: (c, f) => {
				const p = i[c] || [];
				return f && o[c] ? [...p, ...o[c]] : p
			}
		}
	},
	Ov = (e, n) => {
		if (e.length === 0) return n.classGroupId;
		const i = e[0],
			o = n.nextPart.get(i),
			a = o ? Ov(e.slice(1), o) : void 0;
		if (a) return a;
		if (n.validators.length === 0) return;
		const u = e.join(uf);
		return n.validators.find(({
			validator: c
		}) => c(u))?.classGroupId
	},
	Dm = /^\[(.+)\]$/,
	AE = e => {
		if (Dm.test(e)) {
			const n = Dm.exec(e)[1],
				i = n?.substring(0, n.indexOf(":"));
			if (i) return "arbitrary.." + i
		}
	},
	NE = e => {
		const {
			theme: n,
			prefix: i
		} = e, o = {
			nextPart: new Map,
			validators: []
		};
		return ME(Object.entries(e.classGroups), i).forEach(([u, c]) => {
			Cc(c, o, u, n)
		}), o
	},
	Cc = (e, n, i, o) => {
		e.forEach(a => {
			if (typeof a == "string") {
				const u = a === "" ? n : Lm(n, a);
				u.classGroupId = i;
				return
			}
			if (typeof a == "function") {
				if (jE(a)) {
					Cc(a(o), n, i, o);
					return
				}
				n.validators.push({
					validator: a,
					classGroupId: i
				});
				return
			}
			Object.entries(a).forEach(([u, c]) => {
				Cc(c, Lm(n, u), i, o)
			})
		})
	},
	Lm = (e, n) => {
		let i = e;
		return n.split(uf).forEach(o => {
			i.nextPart.has(o) || i.nextPart.set(o, {
				nextPart: new Map,
				validators: []
			}), i = i.nextPart.get(o)
		}), i
	},
	jE = e => e.isThemeGetter,
	ME = (e, n) => n ? e.map(([i, o]) => {
		const a = o.map(u => typeof u == "string" ? n + u : typeof u == "object" ? Object.fromEntries(Object.entries(u).map(([c, f]) => [n + c, f])) : u);
		return [i, a]
	}) : e,
	DE = e => {
		if (e < 1) return {
			get: () => {},
			set: () => {}
		};
		let n = 0,
			i = new Map,
			o = new Map;
		const a = (u, c) => {
			i.set(u, c), n++, n > e && (n = 0, o = i, i = new Map)
		};
		return {
			get(u) {
				let c = i.get(u);
				if (c !== void 0) return c;
				if ((c = o.get(u)) !== void 0) return a(u, c), c
			},
			set(u, c) {
				i.has(u) ? i.set(u, c) : a(u, c)
			}
		}
	},
	Av = "!",
	LE = e => {
		const {
			separator: n,
			experimentalParseClassName: i
		} = e, o = n.length === 1, a = n[0], u = n.length, c = f => {
			const p = [];
			let h = 0,
				g = 0,
				y;
			for (let P = 0; P < f.length; P++) {
				let C = f[P];
				if (h === 0) {
					if (C === a && (o || f.slice(P, P + u) === n)) {
						p.push(f.slice(g, P)), g = P + u;
						continue
					}
					if (C === "/") {
						y = P;
						continue
					}
				}
				C === "[" ? h++ : C === "]" && h--
			}
			const v = p.length === 0 ? f : f.substring(g),
				x = v.startsWith(Av),
				b = x ? v.substring(1) : v,
				E = y && y > g ? y - g : void 0;
			return {
				modifiers: p,
				hasImportantModifier: x,
				baseClassName: b,
				maybePostfixModifierPosition: E
			}
		};
		return i ? f => i({
			className: f,
			parseClassName: c
		}) : c
	},
	IE = e => {
		if (e.length <= 1) return e;
		const n = [];
		let i = [];
		return e.forEach(o => {
			o[0] === "[" ? (n.push(...i.sort(), o), i = []) : i.push(o)
		}), n.push(...i.sort()), n
	},
	FE = e => ({
		cache: DE(e.cacheSize),
		parseClassName: LE(e),
		...OE(e)
	}),
	VE = /\s+/,
	zE = (e, n) => {
		const {
			parseClassName: i,
			getClassGroupId: o,
			getConflictingClassGroupIds: a
		} = n, u = [], c = e.trim().split(VE);
		let f = "";
		for (let p = c.length - 1; p >= 0; p -= 1) {
			const h = c[p],
				{
					modifiers: g,
					hasImportantModifier: y,
					baseClassName: v,
					maybePostfixModifierPosition: x
				} = i(h);
			let b = !!x,
				E = o(b ? v.substring(0, x) : v);
			if (!E) {
				if (!b) {
					f = h + (f.length > 0 ? " " + f : f);
					continue
				}
				if (E = o(v), !E) {
					f = h + (f.length > 0 ? " " + f : f);
					continue
				}
				b = !1
			}
			const P = IE(g).join(":"),
				C = y ? P + Av : P,
				R = C + E;
			if (u.includes(R)) continue;
			u.push(R);
			const _ = a(E, b);
			for (let A = 0; A < _.length; ++A) {
				const M = _[A];
				u.push(C + M)
			}
			f = h + (f.length > 0 ? " " + f : f)
		}
		return f
	};

function BE() {
	let e = 0,
		n, i, o = "";
	for (; e < arguments.length;)(n = arguments[e++]) && (i = Nv(n)) && (o && (o += " "), o += i);
	return o
}
const Nv = e => {
	if (typeof e == "string") return e;
	let n, i = "";
	for (let o = 0; o < e.length; o++) e[o] && (n = Nv(e[o])) && (i && (i += " "), i += n);
	return i
};

function UE(e, ...n) {
	let i, o, a, u = c;

	function c(p) {
		const h = n.reduce((g, y) => y(g), e());
		return i = FE(h), o = i.cache.get, a = i.cache.set, u = f, f(p)
	}

	function f(p) {
		const h = o(p);
		if (h) return h;
		const g = zE(p, i);
		return a(p, g), g
	}
	return function() {
		return u(BE.apply(null, arguments))
	}
}
const Re = e => {
		const n = i => i[e] || [];
		return n.isThemeGetter = !0, n
	},
	jv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
	HE = /^\d+\/\d+$/,
	WE = new Set(["px", "full", "screen"]),
	$E = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	KE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	QE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
	qE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
	GE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
	mn = e => Yr(e) || WE.has(e) || HE.test(e),
	zn = e => ri(e, "length", rP),
	Yr = e => !!e && !Number.isNaN(Number(e)),
	Qu = e => ri(e, "number", Yr),
	qi = e => !!e && Number.isInteger(Number(e)),
	YE = e => e.endsWith("%") && Yr(e.slice(0, -1)),
	ye = e => jv.test(e),
	Bn = e => $E.test(e),
	XE = new Set(["length", "size", "percentage"]),
	ZE = e => ri(e, XE, Mv),
	JE = e => ri(e, "position", Mv),
	eP = new Set(["image", "url"]),
	tP = e => ri(e, eP, oP),
	nP = e => ri(e, "", iP),
	Gi = () => !0,
	ri = (e, n, i) => {
		const o = jv.exec(e);
		return o ? o[1] ? typeof n == "string" ? o[1] === n : n.has(o[1]) : i(o[2]) : !1
	},
	rP = e => KE.test(e) && !QE.test(e),
	Mv = () => !1,
	iP = e => qE.test(e),
	oP = e => GE.test(e),
	sP = () => {
		const e = Re("colors"),
			n = Re("spacing"),
			i = Re("blur"),
			o = Re("brightness"),
			a = Re("borderColor"),
			u = Re("borderRadius"),
			c = Re("borderSpacing"),
			f = Re("borderWidth"),
			p = Re("contrast"),
			h = Re("grayscale"),
			g = Re("hueRotate"),
			y = Re("invert"),
			v = Re("gap"),
			x = Re("gradientColorStops"),
			b = Re("gradientColorStopPositions"),
			E = Re("inset"),
			P = Re("margin"),
			C = Re("opacity"),
			R = Re("padding"),
			_ = Re("saturate"),
			A = Re("scale"),
			M = Re("sepia"),
			L = Re("skew"),
			I = Re("space"),
			B = Re("translate"),
			q = () => ["auto", "contain", "none"],
			W = () => ["auto", "hidden", "clip", "visible", "scroll"],
			$ = () => ["auto", ye, n],
			D = () => [ye, n],
			X = () => ["", mn, zn],
			U = () => ["auto", Yr, ye],
			ce = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
			oe = () => ["solid", "dashed", "dotted", "double", "none"],
			te = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
			H = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
			ee = () => ["", "0", ye],
			Z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
			j = () => [Yr, ye];
		return {
			cacheSize: 500,
			separator: ":",
			theme: {
				colors: [Gi],
				spacing: [mn, zn],
				blur: ["none", "", Bn, ye],
				brightness: j(),
				borderColor: [e],
				borderRadius: ["none", "", "full", Bn, ye],
				borderSpacing: D(),
				borderWidth: X(),
				contrast: j(),
				grayscale: ee(),
				hueRotate: j(),
				invert: ee(),
				gap: D(),
				gradientColorStops: [e],
				gradientColorStopPositions: [YE, zn],
				inset: $(),
				margin: $(),
				opacity: j(),
				padding: D(),
				saturate: j(),
				scale: j(),
				sepia: ee(),
				skew: j(),
				space: D(),
				translate: D()
			},
			classGroups: {
				aspect: [{
					aspect: ["auto", "square", "video", ye]
				}],
				container: ["container"],
				columns: [{
					columns: [Bn]
				}],
				"break-after": [{
					"break-after": Z()
				}],
				"break-before": [{
					"break-before": Z()
				}],
				"break-inside": [{
					"break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
				}],
				"box-decoration": [{
					"box-decoration": ["slice", "clone"]
				}],
				box: [{
					box: ["border", "content"]
				}],
				display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
				float: [{
					float: ["right", "left", "none", "start", "end"]
				}],
				clear: [{
					clear: ["left", "right", "both", "none", "start", "end"]
				}],
				isolation: ["isolate", "isolation-auto"],
				"object-fit": [{
					object: ["contain", "cover", "fill", "none", "scale-down"]
				}],
				"object-position": [{
					object: [...ce(), ye]
				}],
				overflow: [{
					overflow: W()
				}],
				"overflow-x": [{
					"overflow-x": W()
				}],
				"overflow-y": [{
					"overflow-y": W()
				}],
				overscroll: [{
					overscroll: q()
				}],
				"overscroll-x": [{
					"overscroll-x": q()
				}],
				"overscroll-y": [{
					"overscroll-y": q()
				}],
				position: ["static", "fixed", "absolute", "relative", "sticky"],
				inset: [{
					inset: [E]
				}],
				"inset-x": [{
					"inset-x": [E]
				}],
				"inset-y": [{
					"inset-y": [E]
				}],
				start: [{
					start: [E]
				}],
				end: [{
					end: [E]
				}],
				top: [{
					top: [E]
				}],
				right: [{
					right: [E]
				}],
				bottom: [{
					bottom: [E]
				}],
				left: [{
					left: [E]
				}],
				visibility: ["visible", "invisible", "collapse"],
				z: [{
					z: ["auto", qi, ye]
				}],
				basis: [{
					basis: $()
				}],
				"flex-direction": [{
					flex: ["row", "row-reverse", "col", "col-reverse"]
				}],
				"flex-wrap": [{
					flex: ["wrap", "wrap-reverse", "nowrap"]
				}],
				flex: [{
					flex: ["1", "auto", "initial", "none", ye]
				}],
				grow: [{
					grow: ee()
				}],
				shrink: [{
					shrink: ee()
				}],
				order: [{
					order: ["first", "last", "none", qi, ye]
				}],
				"grid-cols": [{
					"grid-cols": [Gi]
				}],
				"col-start-end": [{
					col: ["auto", {
						span: ["full", qi, ye]
					}, ye]
				}],
				"col-start": [{
					"col-start": U()
				}],
				"col-end": [{
					"col-end": U()
				}],
				"grid-rows": [{
					"grid-rows": [Gi]
				}],
				"row-start-end": [{
					row: ["auto", {
						span: [qi, ye]
					}, ye]
				}],
				"row-start": [{
					"row-start": U()
				}],
				"row-end": [{
					"row-end": U()
				}],
				"grid-flow": [{
					"grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
				}],
				"auto-cols": [{
					"auto-cols": ["auto", "min", "max", "fr", ye]
				}],
				"auto-rows": [{
					"auto-rows": ["auto", "min", "max", "fr", ye]
				}],
				gap: [{
					gap: [v]
				}],
				"gap-x": [{
					"gap-x": [v]
				}],
				"gap-y": [{
					"gap-y": [v]
				}],
				"justify-content": [{
					justify: ["normal", ...H()]
				}],
				"justify-items": [{
					"justify-items": ["start", "end", "center", "stretch"]
				}],
				"justify-self": [{
					"justify-self": ["auto", "start", "end", "center", "stretch"]
				}],
				"align-content": [{
					content: ["normal", ...H(), "baseline"]
				}],
				"align-items": [{
					items: ["start", "end", "center", "baseline", "stretch"]
				}],
				"align-self": [{
					self: ["auto", "start", "end", "center", "stretch", "baseline"]
				}],
				"place-content": [{
					"place-content": [...H(), "baseline"]
				}],
				"place-items": [{
					"place-items": ["start", "end", "center", "baseline", "stretch"]
				}],
				"place-self": [{
					"place-self": ["auto", "start", "end", "center", "stretch"]
				}],
				p: [{
					p: [R]
				}],
				px: [{
					px: [R]
				}],
				py: [{
					py: [R]
				}],
				ps: [{
					ps: [R]
				}],
				pe: [{
					pe: [R]
				}],
				pt: [{
					pt: [R]
				}],
				pr: [{
					pr: [R]
				}],
				pb: [{
					pb: [R]
				}],
				pl: [{
					pl: [R]
				}],
				m: [{
					m: [P]
				}],
				mx: [{
					mx: [P]
				}],
				my: [{
					my: [P]
				}],
				ms: [{
					ms: [P]
				}],
				me: [{
					me: [P]
				}],
				mt: [{
					mt: [P]
				}],
				mr: [{
					mr: [P]
				}],
				mb: [{
					mb: [P]
				}],
				ml: [{
					ml: [P]
				}],
				"space-x": [{
					"space-x": [I]
				}],
				"space-x-reverse": ["space-x-reverse"],
				"space-y": [{
					"space-y": [I]
				}],
				"space-y-reverse": ["space-y-reverse"],
				w: [{
					w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ye, n]
				}],
				"min-w": [{
					"min-w": [ye, n, "min", "max", "fit"]
				}],
				"max-w": [{
					"max-w": [ye, n, "none", "full", "min", "max", "fit", "prose", {
						screen: [Bn]
					}, Bn]
				}],
				h: [{
					h: [ye, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
				}],
				"min-h": [{
					"min-h": [ye, n, "min", "max", "fit", "svh", "lvh", "dvh"]
				}],
				"max-h": [{
					"max-h": [ye, n, "min", "max", "fit", "svh", "lvh", "dvh"]
				}],
				size: [{
					size: [ye, n, "auto", "min", "max", "fit"]
				}],
				"font-size": [{
					text: ["base", Bn, zn]
				}],
				"font-smoothing": ["antialiased", "subpixel-antialiased"],
				"font-style": ["italic", "not-italic"],
				"font-weight": [{
					font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Qu]
				}],
				"font-family": [{
					font: [Gi]
				}],
				"fvn-normal": ["normal-nums"],
				"fvn-ordinal": ["ordinal"],
				"fvn-slashed-zero": ["slashed-zero"],
				"fvn-figure": ["lining-nums", "oldstyle-nums"],
				"fvn-spacing": ["proportional-nums", "tabular-nums"],
				"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
				tracking: [{
					tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ye]
				}],
				"line-clamp": [{
					"line-clamp": ["none", Yr, Qu]
				}],
				leading: [{
					leading: ["none", "tight", "snug", "normal", "relaxed", "loose", mn, ye]
				}],
				"list-image": [{
					"list-image": ["none", ye]
				}],
				"list-style-type": [{
					list: ["none", "disc", "decimal", ye]
				}],
				"list-style-position": [{
					list: ["inside", "outside"]
				}],
				"placeholder-color": [{
					placeholder: [e]
				}],
				"placeholder-opacity": [{
					"placeholder-opacity": [C]
				}],
				"text-alignment": [{
					text: ["left", "center", "right", "justify", "start", "end"]
				}],
				"text-color": [{
					text: [e]
				}],
				"text-opacity": [{
					"text-opacity": [C]
				}],
				"text-decoration": ["underline", "overline", "line-through", "no-underline"],
				"text-decoration-style": [{
					decoration: [...oe(), "wavy"]
				}],
				"text-decoration-thickness": [{
					decoration: ["auto", "from-font", mn, zn]
				}],
				"underline-offset": [{
					"underline-offset": ["auto", mn, ye]
				}],
				"text-decoration-color": [{
					decoration: [e]
				}],
				"text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
				"text-overflow": ["truncate", "text-ellipsis", "text-clip"],
				"text-wrap": [{
					text: ["wrap", "nowrap", "balance", "pretty"]
				}],
				indent: [{
					indent: D()
				}],
				"vertical-align": [{
					align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ye]
				}],
				whitespace: [{
					whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
				}],
				break: [{
					break: ["normal", "words", "all", "keep"]
				}],
				hyphens: [{
					hyphens: ["none", "manual", "auto"]
				}],
				content: [{
					content: ["none", ye]
				}],
				"bg-attachment": [{
					bg: ["fixed", "local", "scroll"]
				}],
				"bg-clip": [{
					"bg-clip": ["border", "padding", "content", "text"]
				}],
				"bg-opacity": [{
					"bg-opacity": [C]
				}],
				"bg-origin": [{
					"bg-origin": ["border", "padding", "content"]
				}],
				"bg-position": [{
					bg: [...ce(), JE]
				}],
				"bg-repeat": [{
					bg: ["no-repeat", {
						repeat: ["", "x", "y", "round", "space"]
					}]
				}],
				"bg-size": [{
					bg: ["auto", "cover", "contain", ZE]
				}],
				"bg-image": [{
					bg: ["none", {
						"gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
					}, tP]
				}],
				"bg-color": [{
					bg: [e]
				}],
				"gradient-from-pos": [{
					from: [b]
				}],
				"gradient-via-pos": [{
					via: [b]
				}],
				"gradient-to-pos": [{
					to: [b]
				}],
				"gradient-from": [{
					from: [x]
				}],
				"gradient-via": [{
					via: [x]
				}],
				"gradient-to": [{
					to: [x]
				}],
				rounded: [{
					rounded: [u]
				}],
				"rounded-s": [{
					"rounded-s": [u]
				}],
				"rounded-e": [{
					"rounded-e": [u]
				}],
				"rounded-t": [{
					"rounded-t": [u]
				}],
				"rounded-r": [{
					"rounded-r": [u]
				}],
				"rounded-b": [{
					"rounded-b": [u]
				}],
				"rounded-l": [{
					"rounded-l": [u]
				}],
				"rounded-ss": [{
					"rounded-ss": [u]
				}],
				"rounded-se": [{
					"rounded-se": [u]
				}],
				"rounded-ee": [{
					"rounded-ee": [u]
				}],
				"rounded-es": [{
					"rounded-es": [u]
				}],
				"rounded-tl": [{
					"rounded-tl": [u]
				}],
				"rounded-tr": [{
					"rounded-tr": [u]
				}],
				"rounded-br": [{
					"rounded-br": [u]
				}],
				"rounded-bl": [{
					"rounded-bl": [u]
				}],
				"border-w": [{
					border: [f]
				}],
				"border-w-x": [{
					"border-x": [f]
				}],
				"border-w-y": [{
					"border-y": [f]
				}],
				"border-w-s": [{
					"border-s": [f]
				}],
				"border-w-e": [{
					"border-e": [f]
				}],
				"border-w-t": [{
					"border-t": [f]
				}],
				"border-w-r": [{
					"border-r": [f]
				}],
				"border-w-b": [{
					"border-b": [f]
				}],
				"border-w-l": [{
					"border-l": [f]
				}],
				"border-opacity": [{
					"border-opacity": [C]
				}],
				"border-style": [{
					border: [...oe(), "hidden"]
				}],
				"divide-x": [{
					"divide-x": [f]
				}],
				"divide-x-reverse": ["divide-x-reverse"],
				"divide-y": [{
					"divide-y": [f]
				}],
				"divide-y-reverse": ["divide-y-reverse"],
				"divide-opacity": [{
					"divide-opacity": [C]
				}],
				"divide-style": [{
					divide: oe()
				}],
				"border-color": [{
					border: [a]
				}],
				"border-color-x": [{
					"border-x": [a]
				}],
				"border-color-y": [{
					"border-y": [a]
				}],
				"border-color-s": [{
					"border-s": [a]
				}],
				"border-color-e": [{
					"border-e": [a]
				}],
				"border-color-t": [{
					"border-t": [a]
				}],
				"border-color-r": [{
					"border-r": [a]
				}],
				"border-color-b": [{
					"border-b": [a]
				}],
				"border-color-l": [{
					"border-l": [a]
				}],
				"divide-color": [{
					divide: [a]
				}],
				"outline-style": [{
					outline: ["", ...oe()]
				}],
				"outline-offset": [{
					"outline-offset": [mn, ye]
				}],
				"outline-w": [{
					outline: [mn, zn]
				}],
				"outline-color": [{
					outline: [e]
				}],
				"ring-w": [{
					ring: X()
				}],
				"ring-w-inset": ["ring-inset"],
				"ring-color": [{
					ring: [e]
				}],
				"ring-opacity": [{
					"ring-opacity": [C]
				}],
				"ring-offset-w": [{
					"ring-offset": [mn, zn]
				}],
				"ring-offset-color": [{
					"ring-offset": [e]
				}],
				shadow: [{
					shadow: ["", "inner", "none", Bn, nP]
				}],
				"shadow-color": [{
					shadow: [Gi]
				}],
				opacity: [{
					opacity: [C]
				}],
				"mix-blend": [{
					"mix-blend": [...te(), "plus-lighter", "plus-darker"]
				}],
				"bg-blend": [{
					"bg-blend": te()
				}],
				filter: [{
					filter: ["", "none"]
				}],
				blur: [{
					blur: [i]
				}],
				brightness: [{
					brightness: [o]
				}],
				contrast: [{
					contrast: [p]
				}],
				"drop-shadow": [{
					"drop-shadow": ["", "none", Bn, ye]
				}],
				grayscale: [{
					grayscale: [h]
				}],
				"hue-rotate": [{
					"hue-rotate": [g]
				}],
				invert: [{
					invert: [y]
				}],
				saturate: [{
					saturate: [_]
				}],
				sepia: [{
					sepia: [M]
				}],
				"backdrop-filter": [{
					"backdrop-filter": ["", "none"]
				}],
				"backdrop-blur": [{
					"backdrop-blur": [i]
				}],
				"backdrop-brightness": [{
					"backdrop-brightness": [o]
				}],
				"backdrop-contrast": [{
					"backdrop-contrast": [p]
				}],
				"backdrop-grayscale": [{
					"backdrop-grayscale": [h]
				}],
				"backdrop-hue-rotate": [{
					"backdrop-hue-rotate": [g]
				}],
				"backdrop-invert": [{
					"backdrop-invert": [y]
				}],
				"backdrop-opacity": [{
					"backdrop-opacity": [C]
				}],
				"backdrop-saturate": [{
					"backdrop-saturate": [_]
				}],
				"backdrop-sepia": [{
					"backdrop-sepia": [M]
				}],
				"border-collapse": [{
					border: ["collapse", "separate"]
				}],
				"border-spacing": [{
					"border-spacing": [c]
				}],
				"border-spacing-x": [{
					"border-spacing-x": [c]
				}],
				"border-spacing-y": [{
					"border-spacing-y": [c]
				}],
				"table-layout": [{
					table: ["auto", "fixed"]
				}],
				caption: [{
					caption: ["top", "bottom"]
				}],
				transition: [{
					transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ye]
				}],
				duration: [{
					duration: j()
				}],
				ease: [{
					ease: ["linear", "in", "out", "in-out", ye]
				}],
				delay: [{
					delay: j()
				}],
				animate: [{
					animate: ["none", "spin", "ping", "pulse", "bounce", ye]
				}],
				transform: [{
					transform: ["", "gpu", "none"]
				}],
				scale: [{
					scale: [A]
				}],
				"scale-x": [{
					"scale-x": [A]
				}],
				"scale-y": [{
					"scale-y": [A]
				}],
				rotate: [{
					rotate: [qi, ye]
				}],
				"translate-x": [{
					"translate-x": [B]
				}],
				"translate-y": [{
					"translate-y": [B]
				}],
				"skew-x": [{
					"skew-x": [L]
				}],
				"skew-y": [{
					"skew-y": [L]
				}],
				"transform-origin": [{
					origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ye]
				}],
				accent: [{
					accent: ["auto", e]
				}],
				appearance: [{
					appearance: ["none", "auto"]
				}],
				cursor: [{
					cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ye]
				}],
				"caret-color": [{
					caret: [e]
				}],
				"pointer-events": [{
					"pointer-events": ["none", "auto"]
				}],
				resize: [{
					resize: ["none", "y", "x", ""]
				}],
				"scroll-behavior": [{
					scroll: ["auto", "smooth"]
				}],
				"scroll-m": [{
					"scroll-m": D()
				}],
				"scroll-mx": [{
					"scroll-mx": D()
				}],
				"scroll-my": [{
					"scroll-my": D()
				}],
				"scroll-ms": [{
					"scroll-ms": D()
				}],
				"scroll-me": [{
					"scroll-me": D()
				}],
				"scroll-mt": [{
					"scroll-mt": D()
				}],
				"scroll-mr": [{
					"scroll-mr": D()
				}],
				"scroll-mb": [{
					"scroll-mb": D()
				}],
				"scroll-ml": [{
					"scroll-ml": D()
				}],
				"scroll-p": [{
					"scroll-p": D()
				}],
				"scroll-px": [{
					"scroll-px": D()
				}],
				"scroll-py": [{
					"scroll-py": D()
				}],
				"scroll-ps": [{
					"scroll-ps": D()
				}],
				"scroll-pe": [{
					"scroll-pe": D()
				}],
				"scroll-pt": [{
					"scroll-pt": D()
				}],
				"scroll-pr": [{
					"scroll-pr": D()
				}],
				"scroll-pb": [{
					"scroll-pb": D()
				}],
				"scroll-pl": [{
					"scroll-pl": D()
				}],
				"snap-align": [{
					snap: ["start", "end", "center", "align-none"]
				}],
				"snap-stop": [{
					snap: ["normal", "always"]
				}],
				"snap-type": [{
					snap: ["none", "x", "y", "both"]
				}],
				"snap-strictness": [{
					snap: ["mandatory", "proximity"]
				}],
				touch: [{
					touch: ["auto", "none", "manipulation"]
				}],
				"touch-x": [{
					"touch-pan": ["x", "left", "right"]
				}],
				"touch-y": [{
					"touch-pan": ["y", "up", "down"]
				}],
				"touch-pz": ["touch-pinch-zoom"],
				select: [{
					select: ["none", "text", "all", "auto"]
				}],
				"will-change": [{
					"will-change": ["auto", "scroll", "contents", "transform", ye]
				}],
				fill: [{
					fill: [e, "none"]
				}],
				"stroke-w": [{
					stroke: [mn, zn, Qu]
				}],
				stroke: [{
					stroke: [e, "none"]
				}],
				sr: ["sr-only", "not-sr-only"],
				"forced-color-adjust": [{
					"forced-color-adjust": ["auto", "none"]
				}]
			},
			conflictingClassGroups: {
				overflow: ["overflow-x", "overflow-y"],
				overscroll: ["overscroll-x", "overscroll-y"],
				inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
				"inset-x": ["right", "left"],
				"inset-y": ["top", "bottom"],
				flex: ["basis", "grow", "shrink"],
				gap: ["gap-x", "gap-y"],
				p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
				px: ["pr", "pl"],
				py: ["pt", "pb"],
				m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
				mx: ["mr", "ml"],
				my: ["mt", "mb"],
				size: ["w", "h"],
				"font-size": ["leading"],
				"fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
				"fvn-ordinal": ["fvn-normal"],
				"fvn-slashed-zero": ["fvn-normal"],
				"fvn-figure": ["fvn-normal"],
				"fvn-spacing": ["fvn-normal"],
				"fvn-fraction": ["fvn-normal"],
				"line-clamp": ["display", "overflow"],
				rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
				"rounded-s": ["rounded-ss", "rounded-es"],
				"rounded-e": ["rounded-se", "rounded-ee"],
				"rounded-t": ["rounded-tl", "rounded-tr"],
				"rounded-r": ["rounded-tr", "rounded-br"],
				"rounded-b": ["rounded-br", "rounded-bl"],
				"rounded-l": ["rounded-tl", "rounded-bl"],
				"border-spacing": ["border-spacing-x", "border-spacing-y"],
				"border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
				"border-w-x": ["border-w-r", "border-w-l"],
				"border-w-y": ["border-w-t", "border-w-b"],
				"border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
				"border-color-x": ["border-color-r", "border-color-l"],
				"border-color-y": ["border-color-t", "border-color-b"],
				"scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
				"scroll-mx": ["scroll-mr", "scroll-ml"],
				"scroll-my": ["scroll-mt", "scroll-mb"],
				"scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
				"scroll-px": ["scroll-pr", "scroll-pl"],
				"scroll-py": ["scroll-pt", "scroll-pb"],
				touch: ["touch-x", "touch-y", "touch-pz"],
				"touch-x": ["touch"],
				"touch-y": ["touch"],
				"touch-pz": ["touch"]
			},
			conflictingClassGroupModifiers: {
				"font-size": ["leading"]
			}
		}
	},
	aP = UE(sP);

function Pt(...e) {
	return aP(Rv(e))
}
const lP = mE,
	Dv = T.forwardRef(({
		className: e,
		...n
	}, i) => S.jsx(Sv, {
		ref: i,
		className: Pt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
		...n
	}));
Dv.displayName = Sv.displayName;
const uP = gE("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
		variants: {
			variant: {
				default: "border bg-background text-foreground",
				destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
			}
		},
		defaultVariants: {
			variant: "default"
		}
	}),
	Lv = T.forwardRef(({
		className: e,
		variant: n,
		...i
	}, o) => S.jsx(bv, {
		ref: o,
		className: Pt(uP({
			variant: n
		}), e),
		...i
	}));
Lv.displayName = bv.displayName;
const cP = T.forwardRef(({
	className: e,
	...n
}, i) => S.jsx(Tv, {
	ref: i,
	className: Pt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
	...n
}));
cP.displayName = Tv.displayName;
const Iv = T.forwardRef(({
	className: e,
	...n
}, i) => S.jsx(Cv, {
	ref: i,
	className: Pt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
	"toast-close": "",
	...n,
	children: S.jsx(lf, {
		className: "h-4 w-4"
	})
}));
Iv.displayName = Cv.displayName;
const Fv = T.forwardRef(({
	className: e,
	...n
}, i) => S.jsx(Ev, {
	ref: i,
	className: Pt("text-sm font-semibold", e),
	...n
}));
Fv.displayName = Ev.displayName;
const Vv = T.forwardRef(({
	className: e,
	...n
}, i) => S.jsx(Pv, {
	ref: i,
	className: Pt("text-sm opacity-90", e),
	...n
}));
Vv.displayName = Pv.displayName;

function fP() {
	const {
		toasts: e
	} = gb();
	return S.jsxs(lP, {
		children: [e.map(function({
			id: n,
			title: i,
			description: o,
			action: a,
			...u
		}) {
			return S.jsxs(Lv, {
				...u,
				children: [S.jsxs("div", {
					className: "grid gap-1",
					children: [i && S.jsx(Fv, {
						children: i
					}), o && S.jsx(Vv, {
						children: o
					})]
				}), a, S.jsx(Iv, {})]
			}, n)
		}), S.jsx(Dv, {})]
	})
}
const dP = ["top", "right", "bottom", "left"],
	Kn = Math.min,
	xt = Math.max,
	la = Math.round,
	Ds = Math.floor,
	Jt = e => ({
		x: e,
		y: e
	}),
	hP = {
		left: "right",
		right: "left",
		bottom: "top",
		top: "bottom"
	},
	pP = {
		start: "end",
		end: "start"
	};

function kc(e, n, i) {
	return xt(e, Kn(n, i))
}

function vn(e, n) {
	return typeof e == "function" ? e(n) : e
}

function xn(e) {
	return e.split("-")[0]
}

function ii(e) {
	return e.split("-")[1]
}

function cf(e) {
	return e === "x" ? "y" : "x"
}

function ff(e) {
	return e === "y" ? "height" : "width"
}
const mP = new Set(["top", "bottom"]);

function Zt(e) {
	return mP.has(xn(e)) ? "y" : "x"
}

function df(e) {
	return cf(Zt(e))
}

function gP(e, n, i) {
	i === void 0 && (i = !1);
	const o = ii(e),
		a = df(e),
		u = ff(a);
	let c = a === "x" ? o === (i ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
	return n.reference[u] > n.floating[u] && (c = ua(c)), [c, ua(c)]
}

function yP(e) {
	const n = ua(e);
	return [Rc(e), n, Rc(n)]
}

function Rc(e) {
	return e.replace(/start|end/g, n => pP[n])
}
const Im = ["left", "right"],
	Fm = ["right", "left"],
	vP = ["top", "bottom"],
	xP = ["bottom", "top"];

function wP(e, n, i) {
	switch (e) {
		case "top":
		case "bottom":
			return i ? n ? Fm : Im : n ? Im : Fm;
		case "left":
		case "right":
			return n ? vP : xP;
		default:
			return []
	}
}

function SP(e, n, i, o) {
	const a = ii(e);
	let u = wP(xn(e), i === "start", o);
	return a && (u = u.map(c => c + "-" + a), n && (u = u.concat(u.map(Rc)))), u
}

function ua(e) {
	return e.replace(/left|right|bottom|top/g, n => hP[n])
}

function bP(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	}
}

function zv(e) {
	return typeof e != "number" ? bP(e) : {
		top: e,
		right: e,
		bottom: e,
		left: e
	}
}

function ca(e) {
	const {
		x: n,
		y: i,
		width: o,
		height: a
	} = e;
	return {
		width: o,
		height: a,
		top: i,
		left: n,
		right: n + o,
		bottom: i + a,
		x: n,
		y: i
	}
}

function Vm(e, n, i) {
	let {
		reference: o,
		floating: a
	} = e;
	const u = Zt(n),
		c = df(n),
		f = ff(c),
		p = xn(n),
		h = u === "y",
		g = o.x + o.width / 2 - a.width / 2,
		y = o.y + o.height / 2 - a.height / 2,
		v = o[f] / 2 - a[f] / 2;
	let x;
	switch (p) {
		case "top":
			x = {
				x: g,
				y: o.y - a.height
			};
			break;
		case "bottom":
			x = {
				x: g,
				y: o.y + o.height
			};
			break;
		case "right":
			x = {
				x: o.x + o.width,
				y
			};
			break;
		case "left":
			x = {
				x: o.x - a.width,
				y
			};
			break;
		default:
			x = {
				x: o.x,
				y: o.y
			}
	}
	switch (ii(n)) {
		case "start":
			x[c] -= v * (i && h ? -1 : 1);
			break;
		case "end":
			x[c] += v * (i && h ? -1 : 1);
			break
	}
	return x
}
async function EP(e, n) {
	var i;
	n === void 0 && (n = {});
	const {
		x: o,
		y: a,
		platform: u,
		rects: c,
		elements: f,
		strategy: p
	} = e, {
		boundary: h = "clippingAncestors",
		rootBoundary: g = "viewport",
		elementContext: y = "floating",
		altBoundary: v = !1,
		padding: x = 0
	} = vn(n, e), b = zv(x), P = f[v ? y === "floating" ? "reference" : "floating" : y], C = ca(await u.getClippingRect({
		element: (i = await (u.isElement == null ? void 0 : u.isElement(P))) == null || i ? P : P.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(f.floating)),
		boundary: h,
		rootBoundary: g,
		strategy: p
	})), R = y === "floating" ? {
		x: o,
		y: a,
		width: c.floating.width,
		height: c.floating.height
	} : c.reference, _ = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(f.floating)), A = await (u.isElement == null ? void 0 : u.isElement(_)) ? await (u.getScale == null ? void 0 : u.getScale(_)) || {
		x: 1,
		y: 1
	} : {
		x: 1,
		y: 1
	}, M = ca(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: f,
		rect: R,
		offsetParent: _,
		strategy: p
	}) : R);
	return {
		top: (C.top - M.top + b.top) / A.y,
		bottom: (M.bottom - C.bottom + b.bottom) / A.y,
		left: (C.left - M.left + b.left) / A.x,
		right: (M.right - C.right + b.right) / A.x
	}
}
const PP = async (e, n, i) => {
	const {
		placement: o = "bottom",
		strategy: a = "absolute",
		middleware: u = [],
		platform: c
	} = i, f = u.filter(Boolean), p = await (c.isRTL == null ? void 0 : c.isRTL(n));
	let h = await c.getElementRects({
			reference: e,
			floating: n,
			strategy: a
		}),
		{
			x: g,
			y
		} = Vm(h, o, p),
		v = o,
		x = {},
		b = 0;
	for (let P = 0; P < f.length; P++) {
		var E;
		const {
			name: C,
			fn: R
		} = f[P], {
			x: _,
			y: A,
			data: M,
			reset: L
		} = await R({
			x: g,
			y,
			initialPlacement: o,
			placement: v,
			strategy: a,
			middlewareData: x,
			rects: h,
			platform: {
				...c,
				detectOverflow: (E = c.detectOverflow) != null ? E : EP
			},
			elements: {
				reference: e,
				floating: n
			}
		});
		g = _ ?? g, y = A ?? y, x = {
			...x,
			[C]: {
				...x[C],
				...M
			}
		}, L && b <= 50 && (b++, typeof L == "object" && (L.placement && (v = L.placement), L.rects && (h = L.rects === !0 ? await c.getElementRects({
			reference: e,
			floating: n,
			strategy: a
		}) : L.rects), {
			x: g,
			y
		} = Vm(h, v, p)), P = -1)
	}
	return {
		x: g,
		y,
		placement: v,
		strategy: a,
		middlewareData: x
	}
}, TP = e => ({
	name: "arrow",
	options: e,
	async fn(n) {
		const {
			x: i,
			y: o,
			placement: a,
			rects: u,
			platform: c,
			elements: f,
			middlewareData: p
		} = n, {
			element: h,
			padding: g = 0
		} = vn(e, n) || {};
		if (h == null) return {};
		const y = zv(g),
			v = {
				x: i,
				y: o
			},
			x = df(a),
			b = ff(x),
			E = await c.getDimensions(h),
			P = x === "y",
			C = P ? "top" : "left",
			R = P ? "bottom" : "right",
			_ = P ? "clientHeight" : "clientWidth",
			A = u.reference[b] + u.reference[x] - v[x] - u.floating[b],
			M = v[x] - u.reference[x],
			L = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(h));
		let I = L ? L[_] : 0;
		(!I || !await (c.isElement == null ? void 0 : c.isElement(L))) && (I = f.floating[_] || u.floating[b]);
		const B = A / 2 - M / 2,
			q = I / 2 - E[b] / 2 - 1,
			W = Kn(y[C], q),
			$ = Kn(y[R], q),
			D = W,
			X = I - E[b] - $,
			U = I / 2 - E[b] / 2 + B,
			ce = kc(D, U, X),
			oe = !p.arrow && ii(a) != null && U !== ce && u.reference[b] / 2 - (U < D ? W : $) - E[b] / 2 < 0,
			te = oe ? U < D ? U - D : U - X : 0;
		return {
			[x]: v[x] + te,
			data: {
				[x]: ce,
				centerOffset: U - ce - te,
				...oe && {
					alignmentOffset: te
				}
			},
			reset: oe
		}
	}
}), CP = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(n) {
			var i, o;
			const {
				placement: a,
				middlewareData: u,
				rects: c,
				initialPlacement: f,
				platform: p,
				elements: h
			} = n, {
				mainAxis: g = !0,
				crossAxis: y = !0,
				fallbackPlacements: v,
				fallbackStrategy: x = "bestFit",
				fallbackAxisSideDirection: b = "none",
				flipAlignment: E = !0,
				...P
			} = vn(e, n);
			if ((i = u.arrow) != null && i.alignmentOffset) return {};
			const C = xn(a),
				R = Zt(f),
				_ = xn(f) === f,
				A = await (p.isRTL == null ? void 0 : p.isRTL(h.floating)),
				M = v || (_ || !E ? [ua(f)] : yP(f)),
				L = b !== "none";
			!v && L && M.push(...SP(f, E, b, A));
			const I = [f, ...M],
				B = await p.detectOverflow(n, P),
				q = [];
			let W = ((o = u.flip) == null ? void 0 : o.overflows) || [];
			if (g && q.push(B[C]), y) {
				const U = gP(a, c, A);
				q.push(B[U[0]], B[U[1]])
			}
			if (W = [...W, {
					placement: a,
					overflows: q
				}], !q.every(U => U <= 0)) {
				var $, D;
				const U = ((($ = u.flip) == null ? void 0 : $.index) || 0) + 1,
					ce = I[U];
				if (ce && (!(y === "alignment" ? R !== Zt(ce) : !1) || W.every(H => Zt(H.placement) === R ? H.overflows[0] > 0 : !0))) return {
					data: {
						index: U,
						overflows: W
					},
					reset: {
						placement: ce
					}
				};
				let oe = (D = W.filter(te => te.overflows[0] <= 0).sort((te, H) => te.overflows[1] - H.overflows[1])[0]) == null ? void 0 : D.placement;
				if (!oe) switch (x) {
					case "bestFit": {
						var X;
						const te = (X = W.filter(H => {
							if (L) {
								const ee = Zt(H.placement);
								return ee === R || ee === "y"
							}
							return !0
						}).map(H => [H.placement, H.overflows.filter(ee => ee > 0).reduce((ee, Z) => ee + Z, 0)]).sort((H, ee) => H[1] - ee[1])[0]) == null ? void 0 : X[0];
						te && (oe = te);
						break
					}
					case "initialPlacement":
						oe = f;
						break
				}
				if (a !== oe) return {
					reset: {
						placement: oe
					}
				}
			}
			return {}
		}
	}
};

function zm(e, n) {
	return {
		top: e.top - n.height,
		right: e.right - n.width,
		bottom: e.bottom - n.height,
		left: e.left - n.width
	}
}

function Bm(e) {
	return dP.some(n => e[n] >= 0)
}
const kP = function(e) {
		return e === void 0 && (e = {}), {
			name: "hide",
			options: e,
			async fn(n) {
				const {
					rects: i,
					platform: o
				} = n, {
					strategy: a = "referenceHidden",
					...u
				} = vn(e, n);
				switch (a) {
					case "referenceHidden": {
						const c = await o.detectOverflow(n, {
								...u,
								elementContext: "reference"
							}),
							f = zm(c, i.reference);
						return {
							data: {
								referenceHiddenOffsets: f,
								referenceHidden: Bm(f)
							}
						}
					}
					case "escaped": {
						const c = await o.detectOverflow(n, {
								...u,
								altBoundary: !0
							}),
							f = zm(c, i.floating);
						return {
							data: {
								escapedOffsets: f,
								escaped: Bm(f)
							}
						}
					}
					default:
						return {}
				}
			}
		}
	},
	Bv = new Set(["left", "top"]);
async function RP(e, n) {
	const {
		placement: i,
		platform: o,
		elements: a
	} = e, u = await (o.isRTL == null ? void 0 : o.isRTL(a.floating)), c = xn(i), f = ii(i), p = Zt(i) === "y", h = Bv.has(c) ? -1 : 1, g = u && p ? -1 : 1, y = vn(n, e);
	let {
		mainAxis: v,
		crossAxis: x,
		alignmentAxis: b
	} = typeof y == "number" ? {
		mainAxis: y,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: y.mainAxis || 0,
		crossAxis: y.crossAxis || 0,
		alignmentAxis: y.alignmentAxis
	};
	return f && typeof b == "number" && (x = f === "end" ? b * -1 : b), p ? {
		x: x * g,
		y: v * h
	} : {
		x: v * h,
		y: x * g
	}
}
const _P = function(e) {
		return e === void 0 && (e = 0), {
			name: "offset",
			options: e,
			async fn(n) {
				var i, o;
				const {
					x: a,
					y: u,
					placement: c,
					middlewareData: f
				} = n, p = await RP(n, e);
				return c === ((i = f.offset) == null ? void 0 : i.placement) && (o = f.arrow) != null && o.alignmentOffset ? {} : {
					x: a + p.x,
					y: u + p.y,
					data: {
						...p,
						placement: c
					}
				}
			}
		}
	},
	OP = function(e) {
		return e === void 0 && (e = {}), {
			name: "shift",
			options: e,
			async fn(n) {
				const {
					x: i,
					y: o,
					placement: a,
					platform: u
				} = n, {
					mainAxis: c = !0,
					crossAxis: f = !1,
					limiter: p = {
						fn: C => {
							let {
								x: R,
								y: _
							} = C;
							return {
								x: R,
								y: _
							}
						}
					},
					...h
				} = vn(e, n), g = {
					x: i,
					y: o
				}, y = await u.detectOverflow(n, h), v = Zt(xn(a)), x = cf(v);
				let b = g[x],
					E = g[v];
				if (c) {
					const C = x === "y" ? "top" : "left",
						R = x === "y" ? "bottom" : "right",
						_ = b + y[C],
						A = b - y[R];
					b = kc(_, b, A)
				}
				if (f) {
					const C = v === "y" ? "top" : "left",
						R = v === "y" ? "bottom" : "right",
						_ = E + y[C],
						A = E - y[R];
					E = kc(_, E, A)
				}
				const P = p.fn({
					...n,
					[x]: b,
					[v]: E
				});
				return {
					...P,
					data: {
						x: P.x - i,
						y: P.y - o,
						enabled: {
							[x]: c,
							[v]: f
						}
					}
				}
			}
		}
	},
	AP = function(e) {
		return e === void 0 && (e = {}), {
			options: e,
			fn(n) {
				const {
					x: i,
					y: o,
					placement: a,
					rects: u,
					middlewareData: c
				} = n, {
					offset: f = 0,
					mainAxis: p = !0,
					crossAxis: h = !0
				} = vn(e, n), g = {
					x: i,
					y: o
				}, y = Zt(a), v = cf(y);
				let x = g[v],
					b = g[y];
				const E = vn(f, n),
					P = typeof E == "number" ? {
						mainAxis: E,
						crossAxis: 0
					} : {
						mainAxis: 0,
						crossAxis: 0,
						...E
					};
				if (p) {
					const _ = v === "y" ? "height" : "width",
						A = u.reference[v] - u.floating[_] + P.mainAxis,
						M = u.reference[v] + u.reference[_] - P.mainAxis;
					x < A ? x = A : x > M && (x = M)
				}
				if (h) {
					var C, R;
					const _ = v === "y" ? "width" : "height",
						A = Bv.has(xn(a)),
						M = u.reference[y] - u.floating[_] + (A && ((C = c.offset) == null ? void 0 : C[y]) || 0) + (A ? 0 : P.crossAxis),
						L = u.reference[y] + u.reference[_] + (A ? 0 : ((R = c.offset) == null ? void 0 : R[y]) || 0) - (A ? P.crossAxis : 0);
					b < M ? b = M : b > L && (b = L)
				}
				return {
					[v]: x,
					[y]: b
				}
			}
		}
	},
	NP = function(e) {
		return e === void 0 && (e = {}), {
			name: "size",
			options: e,
			async fn(n) {
				var i, o;
				const {
					placement: a,
					rects: u,
					platform: c,
					elements: f
				} = n, {
					apply: p = () => {},
					...h
				} = vn(e, n), g = await c.detectOverflow(n, h), y = xn(a), v = ii(a), x = Zt(a) === "y", {
					width: b,
					height: E
				} = u.floating;
				let P, C;
				y === "top" || y === "bottom" ? (P = y, C = v === (await (c.isRTL == null ? void 0 : c.isRTL(f.floating)) ? "start" : "end") ? "left" : "right") : (C = y, P = v === "end" ? "top" : "bottom");
				const R = E - g.top - g.bottom,
					_ = b - g.left - g.right,
					A = Kn(E - g[P], R),
					M = Kn(b - g[C], _),
					L = !n.middlewareData.shift;
				let I = A,
					B = M;
				if ((i = n.middlewareData.shift) != null && i.enabled.x && (B = _), (o = n.middlewareData.shift) != null && o.enabled.y && (I = R), L && !v) {
					const W = xt(g.left, 0),
						$ = xt(g.right, 0),
						D = xt(g.top, 0),
						X = xt(g.bottom, 0);
					x ? B = b - 2 * (W !== 0 || $ !== 0 ? W + $ : xt(g.left, g.right)) : I = E - 2 * (D !== 0 || X !== 0 ? D + X : xt(g.top, g.bottom))
				}
				await p({
					...n,
					availableWidth: B,
					availableHeight: I
				});
				const q = await c.getDimensions(f.floating);
				return b !== q.width || E !== q.height ? {
					reset: {
						rects: !0
					}
				} : {}
			}
		}
	};

function Ra() {
	return typeof window < "u"
}

function oi(e) {
	return Uv(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function wt(e) {
	var n;
	return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window
}

function on(e) {
	var n;
	return (n = (Uv(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement
}

function Uv(e) {
	return Ra() ? e instanceof Node || e instanceof wt(e).Node : !1
}

function $t(e) {
	return Ra() ? e instanceof Element || e instanceof wt(e).Element : !1
}

function nn(e) {
	return Ra() ? e instanceof HTMLElement || e instanceof wt(e).HTMLElement : !1
}

function Um(e) {
	return !Ra() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof wt(e).ShadowRoot
}
const jP = new Set(["inline", "contents"]);

function yo(e) {
	const {
		overflow: n,
		overflowX: i,
		overflowY: o,
		display: a
	} = Kt(e);
	return /auto|scroll|overlay|hidden|clip/.test(n + o + i) && !jP.has(a)
}
const MP = new Set(["table", "td", "th"]);

function DP(e) {
	return MP.has(oi(e))
}
const LP = [":popover-open", ":modal"];

function _a(e) {
	return LP.some(n => {
		try {
			return e.matches(n)
		} catch {
			return !1
		}
	})
}
const IP = ["transform", "translate", "scale", "rotate", "perspective"],
	FP = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
	VP = ["paint", "layout", "strict", "content"];

function hf(e) {
	const n = pf(),
		i = $t(e) ? Kt(e) : e;
	return IP.some(o => i[o] ? i[o] !== "none" : !1) || (i.containerType ? i.containerType !== "normal" : !1) || !n && (i.backdropFilter ? i.backdropFilter !== "none" : !1) || !n && (i.filter ? i.filter !== "none" : !1) || FP.some(o => (i.willChange || "").includes(o)) || VP.some(o => (i.contain || "").includes(o))
}

function zP(e) {
	let n = Qn(e);
	for (; nn(n) && !Zr(n);) {
		if (hf(n)) return n;
		if (_a(n)) return null;
		n = Qn(n)
	}
	return null
}

function pf() {
	return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const BP = new Set(["html", "body", "#document"]);

function Zr(e) {
	return BP.has(oi(e))
}

function Kt(e) {
	return wt(e).getComputedStyle(e)
}

function Oa(e) {
	return $t(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	}
}

function Qn(e) {
	if (oi(e) === "html") return e;
	const n = e.assignedSlot || e.parentNode || Um(e) && e.host || on(e);
	return Um(n) ? n.host : n
}

function Hv(e) {
	const n = Qn(e);
	return Zr(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : nn(n) && yo(n) ? n : Hv(n)
}

function lo(e, n, i) {
	var o;
	n === void 0 && (n = []), i === void 0 && (i = !0);
	const a = Hv(e),
		u = a === ((o = e.ownerDocument) == null ? void 0 : o.body),
		c = wt(a);
	if (u) {
		const f = _c(c);
		return n.concat(c, c.visualViewport || [], yo(a) ? a : [], f && i ? lo(f) : [])
	}
	return n.concat(a, lo(a, [], i))
}

function _c(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function Wv(e) {
	const n = Kt(e);
	let i = parseFloat(n.width) || 0,
		o = parseFloat(n.height) || 0;
	const a = nn(e),
		u = a ? e.offsetWidth : i,
		c = a ? e.offsetHeight : o,
		f = la(i) !== u || la(o) !== c;
	return f && (i = u, o = c), {
		width: i,
		height: o,
		$: f
	}
}

function mf(e) {
	return $t(e) ? e : e.contextElement
}

function Xr(e) {
	const n = mf(e);
	if (!nn(n)) return Jt(1);
	const i = n.getBoundingClientRect(),
		{
			width: o,
			height: a,
			$: u
		} = Wv(n);
	let c = (u ? la(i.width) : i.width) / o,
		f = (u ? la(i.height) : i.height) / a;
	return (!c || !Number.isFinite(c)) && (c = 1), (!f || !Number.isFinite(f)) && (f = 1), {
		x: c,
		y: f
	}
}
const UP = Jt(0);

function $v(e) {
	const n = wt(e);
	return !pf() || !n.visualViewport ? UP : {
		x: n.visualViewport.offsetLeft,
		y: n.visualViewport.offsetTop
	}
}

function HP(e, n, i) {
	return n === void 0 && (n = !1), !i || n && i !== wt(e) ? !1 : n
}

function yr(e, n, i, o) {
	n === void 0 && (n = !1), i === void 0 && (i = !1);
	const a = e.getBoundingClientRect(),
		u = mf(e);
	let c = Jt(1);
	n && (o ? $t(o) && (c = Xr(o)) : c = Xr(e));
	const f = HP(u, i, o) ? $v(u) : Jt(0);
	let p = (a.left + f.x) / c.x,
		h = (a.top + f.y) / c.y,
		g = a.width / c.x,
		y = a.height / c.y;
	if (u) {
		const v = wt(u),
			x = o && $t(o) ? wt(o) : o;
		let b = v,
			E = _c(b);
		for (; E && o && x !== b;) {
			const P = Xr(E),
				C = E.getBoundingClientRect(),
				R = Kt(E),
				_ = C.left + (E.clientLeft + parseFloat(R.paddingLeft)) * P.x,
				A = C.top + (E.clientTop + parseFloat(R.paddingTop)) * P.y;
			p *= P.x, h *= P.y, g *= P.x, y *= P.y, p += _, h += A, b = wt(E), E = _c(b)
		}
	}
	return ca({
		width: g,
		height: y,
		x: p,
		y: h
	})
}

function Aa(e, n) {
	const i = Oa(e).scrollLeft;
	return n ? n.left + i : yr(on(e)).left + i
}

function Kv(e, n) {
	const i = e.getBoundingClientRect(),
		o = i.left + n.scrollLeft - Aa(e, i),
		a = i.top + n.scrollTop;
	return {
		x: o,
		y: a
	}
}

function WP(e) {
	let {
		elements: n,
		rect: i,
		offsetParent: o,
		strategy: a
	} = e;
	const u = a === "fixed",
		c = on(o),
		f = n ? _a(n.floating) : !1;
	if (o === c || f && u) return i;
	let p = {
			scrollLeft: 0,
			scrollTop: 0
		},
		h = Jt(1);
	const g = Jt(0),
		y = nn(o);
	if ((y || !y && !u) && ((oi(o) !== "body" || yo(c)) && (p = Oa(o)), nn(o))) {
		const x = yr(o);
		h = Xr(o), g.x = x.x + o.clientLeft, g.y = x.y + o.clientTop
	}
	const v = c && !y && !u ? Kv(c, p) : Jt(0);
	return {
		width: i.width * h.x,
		height: i.height * h.y,
		x: i.x * h.x - p.scrollLeft * h.x + g.x + v.x,
		y: i.y * h.y - p.scrollTop * h.y + g.y + v.y
	}
}

function $P(e) {
	return Array.from(e.getClientRects())
}

function KP(e) {
	const n = on(e),
		i = Oa(e),
		o = e.ownerDocument.body,
		a = xt(n.scrollWidth, n.clientWidth, o.scrollWidth, o.clientWidth),
		u = xt(n.scrollHeight, n.clientHeight, o.scrollHeight, o.clientHeight);
	let c = -i.scrollLeft + Aa(e);
	const f = -i.scrollTop;
	return Kt(o).direction === "rtl" && (c += xt(n.clientWidth, o.clientWidth) - a), {
		width: a,
		height: u,
		x: c,
		y: f
	}
}
const Hm = 25;

function QP(e, n) {
	const i = wt(e),
		o = on(e),
		a = i.visualViewport;
	let u = o.clientWidth,
		c = o.clientHeight,
		f = 0,
		p = 0;
	if (a) {
		u = a.width, c = a.height;
		const g = pf();
		(!g || g && n === "fixed") && (f = a.offsetLeft, p = a.offsetTop)
	}
	const h = Aa(o);
	if (h <= 0) {
		const g = o.ownerDocument,
			y = g.body,
			v = getComputedStyle(y),
			x = g.compatMode === "CSS1Compat" && parseFloat(v.marginLeft) + parseFloat(v.marginRight) || 0,
			b = Math.abs(o.clientWidth - y.clientWidth - x);
		b <= Hm && (u -= b)
	} else h <= Hm && (u += h);
	return {
		width: u,
		height: c,
		x: f,
		y: p
	}
}
const qP = new Set(["absolute", "fixed"]);

function GP(e, n) {
	const i = yr(e, !0, n === "fixed"),
		o = i.top + e.clientTop,
		a = i.left + e.clientLeft,
		u = nn(e) ? Xr(e) : Jt(1),
		c = e.clientWidth * u.x,
		f = e.clientHeight * u.y,
		p = a * u.x,
		h = o * u.y;
	return {
		width: c,
		height: f,
		x: p,
		y: h
	}
}

function Wm(e, n, i) {
	let o;
	if (n === "viewport") o = QP(e, i);
	else if (n === "document") o = KP(on(e));
	else if ($t(n)) o = GP(n, i);
	else {
		const a = $v(e);
		o = {
			x: n.x - a.x,
			y: n.y - a.y,
			width: n.width,
			height: n.height
		}
	}
	return ca(o)
}

function Qv(e, n) {
	const i = Qn(e);
	return i === n || !$t(i) || Zr(i) ? !1 : Kt(i).position === "fixed" || Qv(i, n)
}

function YP(e, n) {
	const i = n.get(e);
	if (i) return i;
	let o = lo(e, [], !1).filter(f => $t(f) && oi(f) !== "body"),
		a = null;
	const u = Kt(e).position === "fixed";
	let c = u ? Qn(e) : e;
	for (; $t(c) && !Zr(c);) {
		const f = Kt(c),
			p = hf(c);
		!p && f.position === "fixed" && (a = null), (u ? !p && !a : !p && f.position === "static" && !!a && qP.has(a.position) || yo(c) && !p && Qv(e, c)) ? o = o.filter(g => g !== c) : a = f, c = Qn(c)
	}
	return n.set(e, o), o
}

function XP(e) {
	let {
		element: n,
		boundary: i,
		rootBoundary: o,
		strategy: a
	} = e;
	const c = [...i === "clippingAncestors" ? _a(n) ? [] : YP(n, this._c) : [].concat(i), o],
		f = c[0],
		p = c.reduce((h, g) => {
			const y = Wm(n, g, a);
			return h.top = xt(y.top, h.top), h.right = Kn(y.right, h.right), h.bottom = Kn(y.bottom, h.bottom), h.left = xt(y.left, h.left), h
		}, Wm(n, f, a));
	return {
		width: p.right - p.left,
		height: p.bottom - p.top,
		x: p.left,
		y: p.top
	}
}

function ZP(e) {
	const {
		width: n,
		height: i
	} = Wv(e);
	return {
		width: n,
		height: i
	}
}

function JP(e, n, i) {
	const o = nn(n),
		a = on(n),
		u = i === "fixed",
		c = yr(e, !0, u, n);
	let f = {
		scrollLeft: 0,
		scrollTop: 0
	};
	const p = Jt(0);

	function h() {
		p.x = Aa(a)
	}
	if (o || !o && !u)
		if ((oi(n) !== "body" || yo(a)) && (f = Oa(n)), o) {
			const x = yr(n, !0, u, n);
			p.x = x.x + n.clientLeft, p.y = x.y + n.clientTop
		} else a && h();
	u && !o && a && h();
	const g = a && !o && !u ? Kv(a, f) : Jt(0),
		y = c.left + f.scrollLeft - p.x - g.x,
		v = c.top + f.scrollTop - p.y - g.y;
	return {
		x: y,
		y: v,
		width: c.width,
		height: c.height
	}
}

function qu(e) {
	return Kt(e).position === "static"
}

function $m(e, n) {
	if (!nn(e) || Kt(e).position === "fixed") return null;
	if (n) return n(e);
	let i = e.offsetParent;
	return on(e) === i && (i = i.ownerDocument.body), i
}

function qv(e, n) {
	const i = wt(e);
	if (_a(e)) return i;
	if (!nn(e)) {
		let a = Qn(e);
		for (; a && !Zr(a);) {
			if ($t(a) && !qu(a)) return a;
			a = Qn(a)
		}
		return i
	}
	let o = $m(e, n);
	for (; o && DP(o) && qu(o);) o = $m(o, n);
	return o && Zr(o) && qu(o) && !hf(o) ? i : o || zP(e) || i
}
const eT = async function(e) {
	const n = this.getOffsetParent || qv,
		i = this.getDimensions,
		o = await i(e.floating);
	return {
		reference: JP(e.reference, await n(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: o.width,
			height: o.height
		}
	}
};

function tT(e) {
	return Kt(e).direction === "rtl"
}
const nT = {
	convertOffsetParentRelativeRectToViewportRelativeRect: WP,
	getDocumentElement: on,
	getClippingRect: XP,
	getOffsetParent: qv,
	getElementRects: eT,
	getClientRects: $P,
	getDimensions: ZP,
	getScale: Xr,
	isElement: $t,
	isRTL: tT
};

function Gv(e, n) {
	return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height
}

function rT(e, n) {
	let i = null,
		o;
	const a = on(e);

	function u() {
		var f;
		clearTimeout(o), (f = i) == null || f.disconnect(), i = null
	}

	function c(f, p) {
		f === void 0 && (f = !1), p === void 0 && (p = 1), u();
		const h = e.getBoundingClientRect(),
			{
				left: g,
				top: y,
				width: v,
				height: x
			} = h;
		if (f || n(), !v || !x) return;
		const b = Ds(y),
			E = Ds(a.clientWidth - (g + v)),
			P = Ds(a.clientHeight - (y + x)),
			C = Ds(g),
			_ = {
				rootMargin: -b + "px " + -E + "px " + -P + "px " + -C + "px",
				threshold: xt(0, Kn(1, p)) || 1
			};
		let A = !0;

		function M(L) {
			const I = L[0].intersectionRatio;
			if (I !== p) {
				if (!A) return c();
				I ? c(!1, I) : o = setTimeout(() => {
					c(!1, 1e-7)
				}, 1e3)
			}
			I === 1 && !Gv(h, e.getBoundingClientRect()) && c(), A = !1
		}
		try {
			i = new IntersectionObserver(M, {
				..._,
				root: a.ownerDocument
			})
		} catch {
			i = new IntersectionObserver(M, _)
		}
		i.observe(e)
	}
	return c(!0), u
}

function iT(e, n, i, o) {
	o === void 0 && (o = {});
	const {
		ancestorScroll: a = !0,
		ancestorResize: u = !0,
		elementResize: c = typeof ResizeObserver == "function",
		layoutShift: f = typeof IntersectionObserver == "function",
		animationFrame: p = !1
	} = o, h = mf(e), g = a || u ? [...h ? lo(h) : [], ...lo(n)] : [];
	g.forEach(C => {
		a && C.addEventListener("scroll", i, {
			passive: !0
		}), u && C.addEventListener("resize", i)
	});
	const y = h && f ? rT(h, i) : null;
	let v = -1,
		x = null;
	c && (x = new ResizeObserver(C => {
		let [R] = C;
		R && R.target === h && x && (x.unobserve(n), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
			var _;
			(_ = x) == null || _.observe(n)
		})), i()
	}), h && !p && x.observe(h), x.observe(n));
	let b, E = p ? yr(e) : null;
	p && P();

	function P() {
		const C = yr(e);
		E && !Gv(E, C) && i(), E = C, b = requestAnimationFrame(P)
	}
	return i(), () => {
		var C;
		g.forEach(R => {
			a && R.removeEventListener("scroll", i), u && R.removeEventListener("resize", i)
		}), y?.(), (C = x) == null || C.disconnect(), x = null, p && cancelAnimationFrame(b)
	}
}
const oT = _P,
	sT = OP,
	aT = CP,
	lT = NP,
	uT = kP,
	Km = TP,
	cT = AP,
	fT = (e, n, i) => {
		const o = new Map,
			a = {
				platform: nT,
				...i
			},
			u = {
				...a.platform,
				_c: o
			};
		return PP(e, n, {
			...a,
			platform: u
		})
	};
var dT = typeof document < "u",
	hT = function() {},
	ra = dT ? T.useLayoutEffect : hT;

function fa(e, n) {
	if (e === n) return !0;
	if (typeof e != typeof n) return !1;
	if (typeof e == "function" && e.toString() === n.toString()) return !0;
	let i, o, a;
	if (e && n && typeof e == "object") {
		if (Array.isArray(e)) {
			if (i = e.length, i !== n.length) return !1;
			for (o = i; o-- !== 0;)
				if (!fa(e[o], n[o])) return !1;
			return !0
		}
		if (a = Object.keys(e), i = a.length, i !== Object.keys(n).length) return !1;
		for (o = i; o-- !== 0;)
			if (!{}.hasOwnProperty.call(n, a[o])) return !1;
		for (o = i; o-- !== 0;) {
			const u = a[o];
			if (!(u === "_owner" && e.$$typeof) && !fa(e[u], n[u])) return !1
		}
		return !0
	}
	return e !== e && n !== n
}

function Yv(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Qm(e, n) {
	const i = Yv(e);
	return Math.round(n * i) / i
}

function Gu(e) {
	const n = T.useRef(e);
	return ra(() => {
		n.current = e
	}), n
}

function pT(e) {
	e === void 0 && (e = {});
	const {
		placement: n = "bottom",
		strategy: i = "absolute",
		middleware: o = [],
		platform: a,
		elements: {
			reference: u,
			floating: c
		} = {},
		transform: f = !0,
		whileElementsMounted: p,
		open: h
	} = e, [g, y] = T.useState({
		x: 0,
		y: 0,
		strategy: i,
		placement: n,
		middlewareData: {},
		isPositioned: !1
	}), [v, x] = T.useState(o);
	fa(v, o) || x(o);
	const [b, E] = T.useState(null), [P, C] = T.useState(null), R = T.useCallback(H => {
		H !== L.current && (L.current = H, E(H))
	}, []), _ = T.useCallback(H => {
		H !== I.current && (I.current = H, C(H))
	}, []), A = u || b, M = c || P, L = T.useRef(null), I = T.useRef(null), B = T.useRef(g), q = p != null, W = Gu(p), $ = Gu(a), D = Gu(h), X = T.useCallback(() => {
		if (!L.current || !I.current) return;
		const H = {
			placement: n,
			strategy: i,
			middleware: v
		};
		$.current && (H.platform = $.current), fT(L.current, I.current, H).then(ee => {
			const Z = {
				...ee,
				isPositioned: D.current !== !1
			};
			U.current && !fa(B.current, Z) && (B.current = Z, Pa.flushSync(() => {
				y(Z)
			}))
		})
	}, [v, n, i, $, D]);
	ra(() => {
		h === !1 && B.current.isPositioned && (B.current.isPositioned = !1, y(H => ({
			...H,
			isPositioned: !1
		})))
	}, [h]);
	const U = T.useRef(!1);
	ra(() => (U.current = !0, () => {
		U.current = !1
	}), []), ra(() => {
		if (A && (L.current = A), M && (I.current = M), A && M) {
			if (W.current) return W.current(A, M, X);
			X()
		}
	}, [A, M, X, W, q]);
	const ce = T.useMemo(() => ({
			reference: L,
			floating: I,
			setReference: R,
			setFloating: _
		}), [R, _]),
		oe = T.useMemo(() => ({
			reference: A,
			floating: M
		}), [A, M]),
		te = T.useMemo(() => {
			const H = {
				position: i,
				left: 0,
				top: 0
			};
			if (!oe.floating) return H;
			const ee = Qm(oe.floating, g.x),
				Z = Qm(oe.floating, g.y);
			return f ? {
				...H,
				transform: "translate(" + ee + "px, " + Z + "px)",
				...Yv(oe.floating) >= 1.5 && {
					willChange: "transform"
				}
			} : {
				position: i,
				left: ee,
				top: Z
			}
		}, [i, f, oe.floating, g.x, g.y]);
	return T.useMemo(() => ({
		...g,
		update: X,
		refs: ce,
		elements: oe,
		floatingStyles: te
	}), [g, X, ce, oe, te])
}
const mT = e => {
		function n(i) {
			return {}.hasOwnProperty.call(i, "current")
		}
		return {
			name: "arrow",
			options: e,
			fn(i) {
				const {
					element: o,
					padding: a
				} = typeof e == "function" ? e(i) : e;
				return o && n(o) ? o.current != null ? Km({
					element: o.current,
					padding: a
				}).fn(i) : {} : o ? Km({
					element: o,
					padding: a
				}).fn(i) : {}
			}
		}
	},
	gT = (e, n) => ({
		...oT(e),
		options: [e, n]
	}),
	yT = (e, n) => ({
		...sT(e),
		options: [e, n]
	}),
	vT = (e, n) => ({
		...cT(e),
		options: [e, n]
	}),
	xT = (e, n) => ({
		...aT(e),
		options: [e, n]
	}),
	wT = (e, n) => ({
		...lT(e),
		options: [e, n]
	}),
	ST = (e, n) => ({
		...uT(e),
		options: [e, n]
	}),
	bT = (e, n) => ({
		...mT(e),
		options: [e, n]
	});
var ET = "Arrow",
	Xv = T.forwardRef((e, n) => {
		const {
			children: i,
			width: o = 10,
			height: a = 5,
			...u
		} = e;
		return S.jsx(pt.svg, {
			...u,
			ref: n,
			width: o,
			height: a,
			viewBox: "0 0 30 10",
			preserveAspectRatio: "none",
			children: e.asChild ? i : S.jsx("polygon", {
				points: "0,0 30,0 15,10"
			})
		})
	});
Xv.displayName = ET;
var PT = Xv;

function TT(e) {
	const [n, i] = T.useState(void 0);
	return $n(() => {
		if (e) {
			i({
				width: e.offsetWidth,
				height: e.offsetHeight
			});
			const o = new ResizeObserver(a => {
				if (!Array.isArray(a) || !a.length) return;
				const u = a[0];
				let c, f;
				if ("borderBoxSize" in u) {
					const p = u.borderBoxSize,
						h = Array.isArray(p) ? p[0] : p;
					c = h.inlineSize, f = h.blockSize
				} else c = e.offsetWidth, f = e.offsetHeight;
				i({
					width: c,
					height: f
				})
			});
			return o.observe(e, {
				box: "border-box"
			}), () => o.unobserve(e)
		} else i(void 0)
	}, [e]), n
}
var Zv = "Popper",
	[Jv, e0] = Ta(Zv),
	[iO, t0] = Jv(Zv),
	n0 = "PopperAnchor",
	r0 = T.forwardRef((e, n) => {
		const {
			__scopePopper: i,
			virtualRef: o,
			...a
		} = e, u = t0(n0, i), c = T.useRef(null), f = Wt(n, c), p = T.useRef(null);
		return T.useEffect(() => {
			const h = p.current;
			p.current = o?.current || c.current, h !== p.current && u.onAnchorChange(p.current)
		}), o ? null : S.jsx(pt.div, {
			...a,
			ref: f
		})
	});
r0.displayName = n0;
var gf = "PopperContent",
	[CT, kT] = Jv(gf),
	i0 = T.forwardRef((e, n) => {
		const {
			__scopePopper: i,
			side: o = "bottom",
			sideOffset: a = 0,
			align: u = "center",
			alignOffset: c = 0,
			arrowPadding: f = 0,
			avoidCollisions: p = !0,
			collisionBoundary: h = [],
			collisionPadding: g = 0,
			sticky: y = "partial",
			hideWhenDetached: v = !1,
			updatePositionStrategy: x = "optimized",
			onPlaced: b,
			...E
		} = e, P = t0(gf, i), [C, R] = T.useState(null), _ = Wt(n, ge => R(ge)), [A, M] = T.useState(null), L = TT(A), I = L?.width ?? 0, B = L?.height ?? 0, q = o + (u !== "center" ? "-" + u : ""), W = typeof g == "number" ? g : {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			...g
		}, $ = Array.isArray(h) ? h : [h], D = $.length > 0, X = {
			padding: W,
			boundary: $.filter(_T),
			altBoundary: D
		}, {
			refs: U,
			floatingStyles: ce,
			placement: oe,
			isPositioned: te,
			middlewareData: H
		} = pT({
			strategy: "fixed",
			placement: q,
			whileElementsMounted: (...ge) => iT(...ge, {
				animationFrame: x === "always"
			}),
			elements: {
				reference: P.anchor
			},
			middleware: [gT({
				mainAxis: a + B,
				alignmentAxis: c
			}), p && yT({
				mainAxis: !0,
				crossAxis: !1,
				limiter: y === "partial" ? vT() : void 0,
				...X
			}), p && xT({
				...X
			}), wT({
				...X,
				apply: ({
					elements: ge,
					rects: ue,
					availableWidth: we,
					availableHeight: Ne
				}) => {
					const {
						width: Tt,
						height: xr
					} = ue.reference, sn = ge.floating.style;
					sn.setProperty("--radix-popper-available-width", `${we}px`), sn.setProperty("--radix-popper-available-height", `${Ne}px`), sn.setProperty("--radix-popper-anchor-width", `${Tt}px`), sn.setProperty("--radix-popper-anchor-height", `${xr}px`)
				}
			}), A && bT({
				element: A,
				padding: f
			}), OT({
				arrowWidth: I,
				arrowHeight: B
			}), v && ST({
				strategy: "referenceHidden",
				...X
			})]
		}), [ee, Z] = a0(oe), j = Wn(b);
		$n(() => {
			te && j?.()
		}, [te, j]);
		const K = H.arrow?.x,
			le = H.arrow?.y,
			pe = H.arrow?.centerOffset !== 0,
			[xe, ve] = T.useState();
		return $n(() => {
			C && ve(window.getComputedStyle(C).zIndex)
		}, [C]), S.jsx("div", {
			ref: U.setFloating,
			"data-radix-popper-content-wrapper": "",
			style: {
				...ce,
				transform: te ? ce.transform : "translate(0, -200%)",
				minWidth: "max-content",
				zIndex: xe,
				"--radix-popper-transform-origin": [H.transformOrigin?.x, H.transformOrigin?.y].join(" "),
				...H.hide?.referenceHidden && {
					visibility: "hidden",
					pointerEvents: "none"
				}
			},
			dir: e.dir,
			children: S.jsx(CT, {
				scope: i,
				placedSide: ee,
				onArrowChange: M,
				arrowX: K,
				arrowY: le,
				shouldHideArrow: pe,
				children: S.jsx(pt.div, {
					"data-side": ee,
					"data-align": Z,
					...E,
					ref: _,
					style: {
						...E.style,
						animation: te ? void 0 : "none"
					}
				})
			})
		})
	});
i0.displayName = gf;
var o0 = "PopperArrow",
	RT = {
		top: "bottom",
		right: "left",
		bottom: "top",
		left: "right"
	},
	s0 = T.forwardRef(function(n, i) {
		const {
			__scopePopper: o,
			...a
		} = n, u = kT(o0, o), c = RT[u.placedSide];
		return S.jsx("span", {
			ref: u.onArrowChange,
			style: {
				position: "absolute",
				left: u.arrowX,
				top: u.arrowY,
				[c]: 0,
				transformOrigin: {
					top: "",
					right: "0 0",
					bottom: "center 0",
					left: "100% 0"
				} [u.placedSide],
				transform: {
					top: "translateY(100%)",
					right: "translateY(50%) rotate(90deg) translateX(-50%)",
					bottom: "rotate(180deg)",
					left: "translateY(50%) rotate(-90deg) translateX(50%)"
				} [u.placedSide],
				visibility: u.shouldHideArrow ? "hidden" : void 0
			},
			children: S.jsx(PT, {
				...a,
				ref: i,
				style: {
					...a.style,
					display: "block"
				}
			})
		})
	});
s0.displayName = o0;

function _T(e) {
	return e !== null
}
var OT = e => ({
	name: "transformOrigin",
	options: e,
	fn(n) {
		const {
			placement: i,
			rects: o,
			middlewareData: a
		} = n, c = a.arrow?.centerOffset !== 0, f = c ? 0 : e.arrowWidth, p = c ? 0 : e.arrowHeight, [h, g] = a0(i), y = {
			start: "0%",
			center: "50%",
			end: "100%"
		} [g], v = (a.arrow?.x ?? 0) + f / 2, x = (a.arrow?.y ?? 0) + p / 2;
		let b = "",
			E = "";
		return h === "bottom" ? (b = c ? y : `${v}px`, E = `${-p}px`) : h === "top" ? (b = c ? y : `${v}px`, E = `${o.floating.height+p}px`) : h === "right" ? (b = `${-p}px`, E = c ? y : `${x}px`) : h === "left" && (b = `${o.floating.width+p}px`, E = c ? y : `${x}px`), {
			data: {
				x: b,
				y: E
			}
		}
	}
});

function a0(e) {
	const [n, i = "center"] = e.split("-");
	return [n, i]
}
var AT = r0,
	NT = i0,
	jT = s0,
	MT = Symbol("radix.slottable");

function DT(e) {
	const n = ({
		children: i
	}) => S.jsx(S.Fragment, {
		children: i
	});
	return n.displayName = `${e}.Slottable`, n.__radixId = MT, n
}
var [Na] = Ta("Tooltip", [e0]), yf = e0(), l0 = "TooltipProvider", LT = 700, qm = "tooltip.open", [IT, u0] = Na(l0), c0 = e => {
	const {
		__scopeTooltip: n,
		delayDuration: i = LT,
		skipDelayDuration: o = 300,
		disableHoverableContent: a = !1,
		children: u
	} = e, c = T.useRef(!0), f = T.useRef(!1), p = T.useRef(0);
	return T.useEffect(() => {
		const h = p.current;
		return () => window.clearTimeout(h)
	}, []), S.jsx(IT, {
		scope: n,
		isOpenDelayedRef: c,
		delayDuration: i,
		onOpen: T.useCallback(() => {
			window.clearTimeout(p.current), c.current = !1
		}, []),
		onClose: T.useCallback(() => {
			window.clearTimeout(p.current), p.current = window.setTimeout(() => c.current = !0, o)
		}, [o]),
		isPointerInTransitRef: f,
		onPointerInTransitChange: T.useCallback(h => {
			f.current = h
		}, []),
		disableHoverableContent: a,
		children: u
	})
};
c0.displayName = l0;
var f0 = "Tooltip",
	[oO, ja] = Na(f0),
	Oc = "TooltipTrigger",
	FT = T.forwardRef((e, n) => {
		const {
			__scopeTooltip: i,
			...o
		} = e, a = ja(Oc, i), u = u0(Oc, i), c = yf(i), f = T.useRef(null), p = Wt(n, f, a.onTriggerChange), h = T.useRef(!1), g = T.useRef(!1), y = T.useCallback(() => h.current = !1, []);
		return T.useEffect(() => () => document.removeEventListener("pointerup", y), [y]), S.jsx(AT, {
			asChild: !0,
			...c,
			children: S.jsx(pt.button, {
				"aria-describedby": a.open ? a.contentId : void 0,
				"data-state": a.stateAttribute,
				...o,
				ref: p,
				onPointerMove: We(e.onPointerMove, v => {
					v.pointerType !== "touch" && !g.current && !u.isPointerInTransitRef.current && (a.onTriggerEnter(), g.current = !0)
				}),
				onPointerLeave: We(e.onPointerLeave, () => {
					a.onTriggerLeave(), g.current = !1
				}),
				onPointerDown: We(e.onPointerDown, () => {
					a.open && a.onClose(), h.current = !0, document.addEventListener("pointerup", y, {
						once: !0
					})
				}),
				onFocus: We(e.onFocus, () => {
					h.current || a.onOpen()
				}),
				onBlur: We(e.onBlur, a.onClose),
				onClick: We(e.onClick, a.onClose)
			})
		})
	});
FT.displayName = Oc;
var VT = "TooltipPortal",
	[sO, zT] = Na(VT, {
		forceMount: void 0
	}),
	Jr = "TooltipContent",
	d0 = T.forwardRef((e, n) => {
		const i = zT(Jr, e.__scopeTooltip),
			{
				forceMount: o = i.forceMount,
				side: a = "top",
				...u
			} = e,
			c = ja(Jr, e.__scopeTooltip);
		return S.jsx(rf, {
			present: o || c.open,
			children: c.disableHoverableContent ? S.jsx(h0, {
				side: a,
				...u,
				ref: n
			}) : S.jsx(BT, {
				side: a,
				...u,
				ref: n
			})
		})
	}),
	BT = T.forwardRef((e, n) => {
		const i = ja(Jr, e.__scopeTooltip),
			o = u0(Jr, e.__scopeTooltip),
			a = T.useRef(null),
			u = Wt(n, a),
			[c, f] = T.useState(null),
			{
				trigger: p,
				onClose: h
			} = i,
			g = a.current,
			{
				onPointerInTransitChange: y
			} = o,
			v = T.useCallback(() => {
				f(null), y(!1)
			}, [y]),
			x = T.useCallback((b, E) => {
				const P = b.currentTarget,
					C = {
						x: b.clientX,
						y: b.clientY
					},
					R = KT(C, P.getBoundingClientRect()),
					_ = QT(C, R),
					A = qT(E.getBoundingClientRect()),
					M = YT([..._, ...A]);
				f(M), y(!0)
			}, [y]);
		return T.useEffect(() => () => v(), [v]), T.useEffect(() => {
			if (p && g) {
				const b = P => x(P, g),
					E = P => x(P, p);
				return p.addEventListener("pointerleave", b), g.addEventListener("pointerleave", E), () => {
					p.removeEventListener("pointerleave", b), g.removeEventListener("pointerleave", E)
				}
			}
		}, [p, g, x, v]), T.useEffect(() => {
			if (c) {
				const b = E => {
					const P = E.target,
						C = {
							x: E.clientX,
							y: E.clientY
						},
						R = p?.contains(P) || g?.contains(P),
						_ = !GT(C, c);
					R ? v() : _ && (v(), h())
				};
				return document.addEventListener("pointermove", b), () => document.removeEventListener("pointermove", b)
			}
		}, [p, g, c, h, v]), S.jsx(h0, {
			...e,
			ref: u
		})
	}),
	[UT, HT] = Na(f0, {
		isInside: !1
	}),
	WT = DT("TooltipContent"),
	h0 = T.forwardRef((e, n) => {
		const {
			__scopeTooltip: i,
			children: o,
			"aria-label": a,
			onEscapeKeyDown: u,
			onPointerDownOutside: c,
			...f
		} = e, p = ja(Jr, i), h = yf(i), {
			onClose: g
		} = p;
		return T.useEffect(() => (document.addEventListener(qm, g), () => document.removeEventListener(qm, g)), [g]), T.useEffect(() => {
			if (p.trigger) {
				const y = v => {
					v.target?.contains(p.trigger) && g()
				};
				return window.addEventListener("scroll", y, {
					capture: !0
				}), () => window.removeEventListener("scroll", y, {
					capture: !0
				})
			}
		}, [p.trigger, g]), S.jsx(nf, {
			asChild: !0,
			disableOutsidePointerEvents: !1,
			onEscapeKeyDown: u,
			onPointerDownOutside: c,
			onFocusOutside: y => y.preventDefault(),
			onDismiss: g,
			children: S.jsxs(NT, {
				"data-state": p.stateAttribute,
				...h,
				...f,
				ref: n,
				style: {
					...f.style,
					"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
					"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
					"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
				},
				children: [S.jsx(WT, {
					children: o
				}), S.jsx(UT, {
					scope: i,
					isInside: !0,
					children: S.jsx(Xb, {
						id: p.contentId,
						role: "tooltip",
						children: a || o
					})
				})]
			})
		})
	});
d0.displayName = Jr;
var p0 = "TooltipArrow",
	$T = T.forwardRef((e, n) => {
		const {
			__scopeTooltip: i,
			...o
		} = e, a = yf(i);
		return HT(p0, i).isInside ? null : S.jsx(jT, {
			...a,
			...o,
			ref: n
		})
	});
$T.displayName = p0;

function KT(e, n) {
	const i = Math.abs(n.top - e.y),
		o = Math.abs(n.bottom - e.y),
		a = Math.abs(n.right - e.x),
		u = Math.abs(n.left - e.x);
	switch (Math.min(i, o, a, u)) {
		case u:
			return "left";
		case a:
			return "right";
		case i:
			return "top";
		case o:
			return "bottom";
		default:
			throw new Error("unreachable")
	}
}

function QT(e, n, i = 5) {
	const o = [];
	switch (n) {
		case "top":
			o.push({
				x: e.x - i,
				y: e.y + i
			}, {
				x: e.x + i,
				y: e.y + i
			});
			break;
		case "bottom":
			o.push({
				x: e.x - i,
				y: e.y - i
			}, {
				x: e.x + i,
				y: e.y - i
			});
			break;
		case "left":
			o.push({
				x: e.x + i,
				y: e.y - i
			}, {
				x: e.x + i,
				y: e.y + i
			});
			break;
		case "right":
			o.push({
				x: e.x - i,
				y: e.y - i
			}, {
				x: e.x - i,
				y: e.y + i
			});
			break
	}
	return o
}

function qT(e) {
	const {
		top: n,
		right: i,
		bottom: o,
		left: a
	} = e;
	return [{
		x: a,
		y: n
	}, {
		x: i,
		y: n
	}, {
		x: i,
		y: o
	}, {
		x: a,
		y: o
	}]
}

function GT(e, n) {
	const {
		x: i,
		y: o
	} = e;
	let a = !1;
	for (let u = 0, c = n.length - 1; u < n.length; c = u++) {
		const f = n[u],
			p = n[c],
			h = f.x,
			g = f.y,
			y = p.x,
			v = p.y;
		g > o != v > o && i < (y - h) * (o - g) / (v - g) + h && (a = !a)
	}
	return a
}

function YT(e) {
	const n = e.slice();
	return n.sort((i, o) => i.x < o.x ? -1 : i.x > o.x ? 1 : i.y < o.y ? -1 : i.y > o.y ? 1 : 0), XT(n)
}

function XT(e) {
	if (e.length <= 1) return e.slice();
	const n = [];
	for (let o = 0; o < e.length; o++) {
		const a = e[o];
		for (; n.length >= 2;) {
			const u = n[n.length - 1],
				c = n[n.length - 2];
			if ((u.x - c.x) * (a.y - c.y) >= (u.y - c.y) * (a.x - c.x)) n.pop();
			else break
		}
		n.push(a)
	}
	n.pop();
	const i = [];
	for (let o = e.length - 1; o >= 0; o--) {
		const a = e[o];
		for (; i.length >= 2;) {
			const u = i[i.length - 1],
				c = i[i.length - 2];
			if ((u.x - c.x) * (a.y - c.y) >= (u.y - c.y) * (a.x - c.x)) i.pop();
			else break
		}
		i.push(a)
	}
	return i.pop(), n.length === 1 && i.length === 1 && n[0].x === i[0].x && n[0].y === i[0].y ? n : n.concat(i)
}
var ZT = c0,
	m0 = d0;
const JT = ZT,
	eC = T.forwardRef(({
		className: e,
		sideOffset: n = 4,
		...i
	}, o) => S.jsx(m0, {
		ref: o,
		sideOffset: n,
		className: Pt("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", e),
		...i
	}));
eC.displayName = m0.displayName;
const g0 = T.forwardRef(({
	className: e,
	...n
}, i) => S.jsx("div", {
	ref: i,
	className: Pt("shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm", e),
	...n
}));
g0.displayName = "Card";
const tC = T.forwardRef(({
	className: e,
	...n
}, i) => S.jsx("div", {
	ref: i,
	className: Pt("flex flex-col space-y-1.5 p-6", e),
	...n
}));
tC.displayName = "CardHeader";
const nC = T.forwardRef(({
	className: e,
	...n
}, i) => S.jsx("div", {
	ref: i,
	className: Pt("text-2xl font-semibold leading-none tracking-tight", e),
	...n
}));
nC.displayName = "CardTitle";
const rC = T.forwardRef(({
	className: e,
	...n
}, i) => S.jsx("div", {
	ref: i,
	className: Pt("text-sm text-muted-foreground", e),
	...n
}));
rC.displayName = "CardDescription";
const y0 = T.forwardRef(({
	className: e,
	...n
}, i) => S.jsx("div", {
	ref: i,
	className: Pt("p-6 pt-0", e),
	...n
}));
y0.displayName = "CardContent";
const iC = T.forwardRef(({
	className: e,
	...n
}, i) => S.jsx("div", {
	ref: i,
	className: Pt("flex items-center p-6 pt-0", e),
	...n
}));
iC.displayName = "CardFooter";

function oC() {
	return S.jsx("div", {
		className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
		children: S.jsx(g0, {
			className: "w-full max-w-md mx-4",
			children: S.jsxs(y0, {
				className: "pt-6",
				children: [S.jsxs("div", {
					className: "flex mb-4 gap-2",
					children: [S.jsx(bE, {
						className: "h-8 w-8 text-red-500"
					}), S.jsx("h1", {
						className: "text-2xl font-bold text-gray-900",
						children: "404 Page Not Found"
					})]
				}), S.jsx("p", {
					className: "mt-4 text-sm text-gray-600",
					children: "Did you forget to add the page to the router?"
				})]
			})
		})
	})
}
const vf = T.createContext({});

function xf(e) {
	const n = T.useRef(null);
	return n.current === null && (n.current = e()), n.current
}
const Ma = T.createContext(null),
	wf = T.createContext({
		transformPagePoint: e => e,
		isStatic: !1,
		reducedMotion: "never"
	});
class sC extends T.Component {
	getSnapshotBeforeUpdate(n) {
		const i = this.props.childRef.current;
		if (i && n.isPresent && !this.props.isPresent) {
			const o = this.props.sizeRef.current;
			o.height = i.offsetHeight || 0, o.width = i.offsetWidth || 0, o.top = i.offsetTop, o.left = i.offsetLeft
		}
		return null
	}
	componentDidUpdate() {}
	render() {
		return this.props.children
	}
}

function aC({
	children: e,
	isPresent: n
}) {
	const i = T.useId(),
		o = T.useRef(null),
		a = T.useRef({
			width: 0,
			height: 0,
			top: 0,
			left: 0
		}),
		{
			nonce: u
		} = T.useContext(wf);
	return T.useInsertionEffect(() => {
		const {
			width: c,
			height: f,
			top: p,
			left: h
		} = a.current;
		if (n || !o.current || !c || !f) return;
		o.current.dataset.motionPopId = i;
		const g = document.createElement("style");
		return u && (g.nonce = u), document.head.appendChild(g), g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${f}px !important;
            top: ${p}px !important;
            left: ${h}px !important;
          }
        `), () => {
			document.head.removeChild(g)
		}
	}, [n]), S.jsx(sC, {
		isPresent: n,
		childRef: o,
		sizeRef: a,
		children: T.cloneElement(e, {
			ref: o
		})
	})
}
const lC = ({
	children: e,
	initial: n,
	isPresent: i,
	onExitComplete: o,
	custom: a,
	presenceAffectsLayout: u,
	mode: c
}) => {
	const f = xf(uC),
		p = T.useId(),
		h = T.useCallback(y => {
			f.set(y, !0);
			for (const v of f.values())
				if (!v) return;
			o && o()
		}, [f, o]),
		g = T.useMemo(() => ({
			id: p,
			initial: n,
			isPresent: i,
			custom: a,
			onExitComplete: h,
			register: y => (f.set(y, !1), () => f.delete(y))
		}), u ? [Math.random(), h] : [i, h]);
	return T.useMemo(() => {
		f.forEach((y, v) => f.set(v, !1))
	}, [i]), T.useEffect(() => {
		!i && !f.size && o && o()
	}, [i]), c === "popLayout" && (e = S.jsx(aC, {
		isPresent: i,
		children: e
	})), S.jsx(Ma.Provider, {
		value: g,
		children: e
	})
};

function uC() {
	return new Map
}

function v0(e = !0) {
	const n = T.useContext(Ma);
	if (n === null) return [!0, null];
	const {
		isPresent: i,
		onExitComplete: o,
		register: a
	} = n, u = T.useId();
	T.useEffect(() => {
		e && a(u)
	}, [e]);
	const c = T.useCallback(() => e && o && o(u), [u, o, e]);
	return !i && o ? [!1, c] : [!0]
}
const Ls = e => e.key || "";

function Gm(e) {
	const n = [];
	return T.Children.forEach(e, i => {
		T.isValidElement(i) && n.push(i)
	}), n
}
const Sf = typeof window < "u",
	x0 = Sf ? T.useLayoutEffect : T.useEffect,
	Ac = ({
		children: e,
		custom: n,
		initial: i = !0,
		onExitComplete: o,
		presenceAffectsLayout: a = !0,
		mode: u = "sync",
		propagate: c = !1
	}) => {
		const [f, p] = v0(c), h = T.useMemo(() => Gm(e), [e]), g = c && !f ? [] : h.map(Ls), y = T.useRef(!0), v = T.useRef(h), x = xf(() => new Map), [b, E] = T.useState(h), [P, C] = T.useState(h);
		x0(() => {
			y.current = !1, v.current = h;
			for (let A = 0; A < P.length; A++) {
				const M = Ls(P[A]);
				g.includes(M) ? x.delete(M) : x.get(M) !== !0 && x.set(M, !1)
			}
		}, [P, g.length, g.join("-")]);
		const R = [];
		if (h !== b) {
			let A = [...h];
			for (let M = 0; M < P.length; M++) {
				const L = P[M],
					I = Ls(L);
				g.includes(I) || (A.splice(M, 0, L), R.push(L))
			}
			u === "wait" && R.length && (A = R), C(Gm(A)), E(h);
			return
		}
		const {
			forceRender: _
		} = T.useContext(vf);
		return S.jsx(S.Fragment, {
			children: P.map(A => {
				const M = Ls(A),
					L = c && !f ? !1 : h === P || g.includes(M),
					I = () => {
						if (x.has(M)) x.set(M, !0);
						else return;
						let B = !0;
						x.forEach(q => {
							q || (B = !1)
						}), B && (_?.(), C(v.current), c && p?.(), o && o())
					};
				return S.jsx(lC, {
					isPresent: L,
					initial: !y.current || i ? void 0 : !1,
					custom: L ? void 0 : n,
					presenceAffectsLayout: a,
					mode: u,
					onExitComplete: L ? void 0 : I,
					children: A
				}, M)
			})
		})
	},
	St = e => e;
let w0 = St;

function bf(e) {
	let n;
	return () => (n === void 0 && (n = e()), n)
}
const ei = (e, n, i) => {
		const o = n - e;
		return o === 0 ? 1 : (i - e) / o
	},
	gn = e => e * 1e3,
	yn = e => e / 1e3,
	cC = {
		useManualTiming: !1
	};

function fC(e) {
	let n = new Set,
		i = new Set,
		o = !1,
		a = !1;
	const u = new WeakSet;
	let c = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	};

	function f(h) {
		u.has(h) && (p.schedule(h), e()), h(c)
	}
	const p = {
		schedule: (h, g = !1, y = !1) => {
			const x = y && o ? n : i;
			return g && u.add(h), x.has(h) || x.add(h), h
		},
		cancel: h => {
			i.delete(h), u.delete(h)
		},
		process: h => {
			if (c = h, o) {
				a = !0;
				return
			}
			o = !0, [n, i] = [i, n], n.forEach(f), n.clear(), o = !1, a && (a = !1, p.process(h))
		}
	};
	return p
}
const Is = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
	dC = 40;

function S0(e, n) {
	let i = !1,
		o = !0;
	const a = {
			delta: 0,
			timestamp: 0,
			isProcessing: !1
		},
		u = () => i = !0,
		c = Is.reduce((C, R) => (C[R] = fC(u), C), {}),
		{
			read: f,
			resolveKeyframes: p,
			update: h,
			preRender: g,
			render: y,
			postRender: v
		} = c,
		x = () => {
			const C = performance.now();
			i = !1, a.delta = o ? 1e3 / 60 : Math.max(Math.min(C - a.timestamp, dC), 1), a.timestamp = C, a.isProcessing = !0, f.process(a), p.process(a), h.process(a), g.process(a), y.process(a), v.process(a), a.isProcessing = !1, i && n && (o = !1, e(x))
		},
		b = () => {
			i = !0, o = !0, a.isProcessing || e(x)
		};
	return {
		schedule: Is.reduce((C, R) => {
			const _ = c[R];
			return C[R] = (A, M = !1, L = !1) => (i || b(), _.schedule(A, M, L)), C
		}, {}),
		cancel: C => {
			for (let R = 0; R < Is.length; R++) c[Is[R]].cancel(C)
		},
		state: a,
		steps: c
	}
}
const {
	schedule: _e,
	cancel: qn,
	state: Ye,
	steps: Yu
} = S0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : St, !0), b0 = T.createContext({
	strict: !1
}), Ym = {
	animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: ["whileHover", "onHoverStart", "onHoverEnd"],
	tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
	pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
	inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
	layout: ["layout", "layoutId"]
}, ti = {};
for (const e in Ym) ti[e] = {
	isEnabled: n => Ym[e].some(i => !!n[i])
};

function hC(e) {
	for (const n in e) ti[n] = {
		...ti[n],
		...e[n]
	}
}
const pC = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function da(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || pC.has(e)
}
let E0 = e => !da(e);

function mC(e) {
	e && (E0 = n => n.startsWith("on") ? !da(n) : e(n))
}
try {
	mC(require("@emotion/is-prop-valid").default)
} catch {}

function gC(e, n, i) {
	const o = {};
	for (const a in e) a === "values" && typeof e.values == "object" || (E0(a) || i === !0 && da(a) || !n && !da(a) || e.draggable && a.startsWith("onDrag")) && (o[a] = e[a]);
	return o
}

function yC(e) {
	if (typeof Proxy > "u") return e;
	const n = new Map,
		i = (...o) => e(...o);
	return new Proxy(i, {
		get: (o, a) => a === "create" ? e : (n.has(a) || n.set(a, e(a)), n.get(a))
	})
}
const Da = T.createContext({});

function uo(e) {
	return typeof e == "string" || Array.isArray(e)
}

function La(e) {
	return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Ef = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
	Pf = ["initial", ...Ef];

function Ia(e) {
	return La(e.animate) || Pf.some(n => uo(e[n]))
}

function P0(e) {
	return !!(Ia(e) || e.variants)
}

function vC(e, n) {
	if (Ia(e)) {
		const {
			initial: i,
			animate: o
		} = e;
		return {
			initial: i === !1 || uo(i) ? i : void 0,
			animate: uo(o) ? o : void 0
		}
	}
	return e.inherit !== !1 ? n : {}
}

function xC(e) {
	const {
		initial: n,
		animate: i
	} = vC(e, T.useContext(Da));
	return T.useMemo(() => ({
		initial: n,
		animate: i
	}), [Xm(n), Xm(i)])
}

function Xm(e) {
	return Array.isArray(e) ? e.join(" ") : e
}
const wC = Symbol.for("motionComponentSymbol");

function $r(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function SC(e, n, i) {
	return T.useCallback(o => {
		o && e.onMount && e.onMount(o), n && (o ? n.mount(o) : n.unmount()), i && (typeof i == "function" ? i(o) : $r(i) && (i.current = o))
	}, [n])
}
const Tf = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
	bC = "framerAppearId",
	T0 = "data-" + Tf(bC),
	{
		schedule: Cf
	} = S0(queueMicrotask, !1),
	C0 = T.createContext({});

function EC(e, n, i, o, a) {
	var u, c;
	const {
		visualElement: f
	} = T.useContext(Da), p = T.useContext(b0), h = T.useContext(Ma), g = T.useContext(wf).reducedMotion, y = T.useRef(null);
	o = o || p.renderer, !y.current && o && (y.current = o(e, {
		visualState: n,
		parent: f,
		props: i,
		presenceContext: h,
		blockInitialAnimation: h ? h.initial === !1 : !1,
		reducedMotionConfig: g
	}));
	const v = y.current,
		x = T.useContext(C0);
	v && !v.projection && a && (v.type === "html" || v.type === "svg") && PC(y.current, i, a, x);
	const b = T.useRef(!1);
	T.useInsertionEffect(() => {
		v && b.current && v.update(i, h)
	});
	const E = i[T0],
		P = T.useRef(!!E && !(!((u = window.MotionHandoffIsComplete) === null || u === void 0) && u.call(window, E)) && ((c = window.MotionHasOptimisedAnimation) === null || c === void 0 ? void 0 : c.call(window, E)));
	return x0(() => {
		v && (b.current = !0, window.MotionIsMounted = !0, v.updateFeatures(), Cf.render(v.render), P.current && v.animationState && v.animationState.animateChanges())
	}), T.useEffect(() => {
		v && (!P.current && v.animationState && v.animationState.animateChanges(), P.current && (queueMicrotask(() => {
			var C;
			(C = window.MotionHandoffMarkAsComplete) === null || C === void 0 || C.call(window, E)
		}), P.current = !1))
	}), v
}

function PC(e, n, i, o) {
	const {
		layoutId: a,
		layout: u,
		drag: c,
		dragConstraints: f,
		layoutScroll: p,
		layoutRoot: h
	} = n;
	e.projection = new i(e.latestValues, n["data-framer-portal-id"] ? void 0 : k0(e.parent)), e.projection.setOptions({
		layoutId: a,
		layout: u,
		alwaysMeasureLayout: !!c || f && $r(f),
		visualElement: e,
		animationType: typeof u == "string" ? u : "both",
		initialPromotionConfig: o,
		layoutScroll: p,
		layoutRoot: h
	})
}

function k0(e) {
	if (e) return e.options.allowProjection !== !1 ? e.projection : k0(e.parent)
}

function TC({
	preloadedFeatures: e,
	createVisualElement: n,
	useRender: i,
	useVisualState: o,
	Component: a
}) {
	var u, c;
	e && hC(e);

	function f(h, g) {
		let y;
		const v = {
				...T.useContext(wf),
				...h,
				layoutId: CC(h)
			},
			{
				isStatic: x
			} = v,
			b = xC(h),
			E = o(h, x);
		if (!x && Sf) {
			kC();
			const P = RC(v);
			y = P.MeasureLayout, b.visualElement = EC(a, E, v, n, P.ProjectionNode)
		}
		return S.jsxs(Da.Provider, {
			value: b,
			children: [y && b.visualElement ? S.jsx(y, {
				visualElement: b.visualElement,
				...v
			}) : null, i(a, h, SC(E, b.visualElement, g), E, x, b.visualElement)]
		})
	}
	f.displayName = `motion.${typeof a=="string"?a:`create(${(c=(u=a.displayName)!==null&&u!==void 0?u:a.name)!==null&&c!==void 0?c:""})`}`;
	const p = T.forwardRef(f);
	return p[wC] = a, p
}

function CC({
	layoutId: e
}) {
	const n = T.useContext(vf).id;
	return n && e !== void 0 ? n + "-" + e : e
}

function kC(e, n) {
	T.useContext(b0).strict
}

function RC(e) {
	const {
		drag: n,
		layout: i
	} = ti;
	if (!n && !i) return {};
	const o = {
		...n,
		...i
	};
	return {
		MeasureLayout: n?.isEnabled(e) || i?.isEnabled(e) ? o.MeasureLayout : void 0,
		ProjectionNode: o.ProjectionNode
	}
}
const _C = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function kf(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(_C.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function Zm(e) {
	const n = [{}, {}];
	return e?.values.forEach((i, o) => {
		n[0][o] = i.get(), n[1][o] = i.getVelocity()
	}), n
}

function Rf(e, n, i, o) {
	if (typeof n == "function") {
		const [a, u] = Zm(o);
		n = n(i !== void 0 ? i : e.custom, a, u)
	}
	if (typeof n == "string" && (n = e.variants && e.variants[n]), typeof n == "function") {
		const [a, u] = Zm(o);
		n = n(i !== void 0 ? i : e.custom, a, u)
	}
	return n
}
const Nc = e => Array.isArray(e),
	OC = e => !!(e && typeof e == "object" && e.mix && e.toValue),
	AC = e => Nc(e) ? e[e.length - 1] || 0 : e,
	rt = e => !!(e && e.getVelocity);

function ia(e) {
	const n = rt(e) ? e.get() : e;
	return OC(n) ? n.toValue() : n
}

function NC({
	scrapeMotionValuesFromProps: e,
	createRenderState: n,
	onUpdate: i
}, o, a, u) {
	const c = {
		latestValues: jC(o, a, u, e),
		renderState: n()
	};
	return i && (c.onMount = f => i({
		props: o,
		current: f,
		...c
	}), c.onUpdate = f => i(f)), c
}
const R0 = e => (n, i) => {
	const o = T.useContext(Da),
		a = T.useContext(Ma),
		u = () => NC(e, n, o, a);
	return i ? u() : xf(u)
};

function jC(e, n, i, o) {
	const a = {},
		u = o(e, {});
	for (const v in u) a[v] = ia(u[v]);
	let {
		initial: c,
		animate: f
	} = e;
	const p = Ia(e),
		h = P0(e);
	n && h && !p && e.inherit !== !1 && (c === void 0 && (c = n.initial), f === void 0 && (f = n.animate));
	let g = i ? i.initial === !1 : !1;
	g = g || c === !1;
	const y = g ? f : c;
	if (y && typeof y != "boolean" && !La(y)) {
		const v = Array.isArray(y) ? y : [y];
		for (let x = 0; x < v.length; x++) {
			const b = Rf(e, v[x]);
			if (b) {
				const {
					transitionEnd: E,
					transition: P,
					...C
				} = b;
				for (const R in C) {
					let _ = C[R];
					if (Array.isArray(_)) {
						const A = g ? _.length - 1 : 0;
						_ = _[A]
					}
					_ !== null && (a[R] = _)
				}
				for (const R in E) a[R] = E[R]
			}
		}
	}
	return a
}
const si = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
	vr = new Set(si),
	_0 = e => n => typeof n == "string" && n.startsWith(e),
	O0 = _0("--"),
	MC = _0("var(--"),
	_f = e => MC(e) ? DC.test(e.split("/*")[0].trim()) : !1,
	DC = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
	A0 = (e, n) => n && typeof e == "number" ? n.transform(e) : e,
	wn = (e, n, i) => i > n ? n : i < e ? e : i,
	ai = {
		test: e => typeof e == "number",
		parse: parseFloat,
		transform: e => e
	},
	co = {
		...ai,
		transform: e => wn(0, 1, e)
	},
	Fs = {
		...ai,
		default: 1
	},
	vo = e => ({
		test: n => typeof n == "string" && n.endsWith(e) && n.split(" ").length === 1,
		parse: parseFloat,
		transform: n => `${n}${e}`
	}),
	Un = vo("deg"),
	en = vo("%"),
	he = vo("px"),
	LC = vo("vh"),
	IC = vo("vw"),
	Jm = {
		...en,
		parse: e => en.parse(e) / 100,
		transform: e => en.transform(e * 100)
	},
	FC = {
		borderWidth: he,
		borderTopWidth: he,
		borderRightWidth: he,
		borderBottomWidth: he,
		borderLeftWidth: he,
		borderRadius: he,
		radius: he,
		borderTopLeftRadius: he,
		borderTopRightRadius: he,
		borderBottomRightRadius: he,
		borderBottomLeftRadius: he,
		width: he,
		maxWidth: he,
		height: he,
		maxHeight: he,
		top: he,
		right: he,
		bottom: he,
		left: he,
		padding: he,
		paddingTop: he,
		paddingRight: he,
		paddingBottom: he,
		paddingLeft: he,
		margin: he,
		marginTop: he,
		marginRight: he,
		marginBottom: he,
		marginLeft: he,
		backgroundPositionX: he,
		backgroundPositionY: he
	},
	VC = {
		rotate: Un,
		rotateX: Un,
		rotateY: Un,
		rotateZ: Un,
		scale: Fs,
		scaleX: Fs,
		scaleY: Fs,
		scaleZ: Fs,
		skew: Un,
		skewX: Un,
		skewY: Un,
		distance: he,
		translateX: he,
		translateY: he,
		translateZ: he,
		x: he,
		y: he,
		z: he,
		perspective: he,
		transformPerspective: he,
		opacity: co,
		originX: Jm,
		originY: Jm,
		originZ: he
	},
	eg = {
		...ai,
		transform: Math.round
	},
	Of = {
		...FC,
		...VC,
		zIndex: eg,
		size: he,
		fillOpacity: co,
		strokeOpacity: co,
		numOctaves: eg
	},
	zC = {
		x: "translateX",
		y: "translateY",
		z: "translateZ",
		transformPerspective: "perspective"
	},
	BC = si.length;

function UC(e, n, i) {
	let o = "",
		a = !0;
	for (let u = 0; u < BC; u++) {
		const c = si[u],
			f = e[c];
		if (f === void 0) continue;
		let p = !0;
		if (typeof f == "number" ? p = f === (c.startsWith("scale") ? 1 : 0) : p = parseFloat(f) === 0, !p || i) {
			const h = A0(f, Of[c]);
			if (!p) {
				a = !1;
				const g = zC[c] || c;
				o += `${g}(${h}) `
			}
			i && (n[c] = h)
		}
	}
	return o = o.trim(), i ? o = i(n, a ? "" : o) : a && (o = "none"), o
}

function Af(e, n, i) {
	const {
		style: o,
		vars: a,
		transformOrigin: u
	} = e;
	let c = !1,
		f = !1;
	for (const p in n) {
		const h = n[p];
		if (vr.has(p)) {
			c = !0;
			continue
		} else if (O0(p)) {
			a[p] = h;
			continue
		} else {
			const g = A0(h, Of[p]);
			p.startsWith("origin") ? (f = !0, u[p] = g) : o[p] = g
		}
	}
	if (n.transform || (c || i ? o.transform = UC(n, e.transform, i) : o.transform && (o.transform = "none")), f) {
		const {
			originX: p = "50%",
			originY: h = "50%",
			originZ: g = 0
		} = u;
		o.transformOrigin = `${p} ${h} ${g}`
	}
}
const HC = {
		offset: "stroke-dashoffset",
		array: "stroke-dasharray"
	},
	WC = {
		offset: "strokeDashoffset",
		array: "strokeDasharray"
	};

function $C(e, n, i = 1, o = 0, a = !0) {
	e.pathLength = 1;
	const u = a ? HC : WC;
	e[u.offset] = he.transform(-o);
	const c = he.transform(n),
		f = he.transform(i);
	e[u.array] = `${c} ${f}`
}

function tg(e, n, i) {
	return typeof e == "string" ? e : he.transform(n + i * e)
}

function KC(e, n, i) {
	const o = tg(n, e.x, e.width),
		a = tg(i, e.y, e.height);
	return `${o} ${a}`
}

function Nf(e, {
	attrX: n,
	attrY: i,
	attrScale: o,
	originX: a,
	originY: u,
	pathLength: c,
	pathSpacing: f = 1,
	pathOffset: p = 0,
	...h
}, g, y) {
	if (Af(e, h, y), g) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return
	}
	e.attrs = e.style, e.style = {};
	const {
		attrs: v,
		style: x,
		dimensions: b
	} = e;
	v.transform && (b && (x.transform = v.transform), delete v.transform), b && (a !== void 0 || u !== void 0 || x.transform) && (x.transformOrigin = KC(b, a !== void 0 ? a : .5, u !== void 0 ? u : .5)), n !== void 0 && (v.x = n), i !== void 0 && (v.y = i), o !== void 0 && (v.scale = o), c !== void 0 && $C(v, c, f, p, !1)
}
const jf = () => ({
		style: {},
		transform: {},
		transformOrigin: {},
		vars: {}
	}),
	N0 = () => ({
		...jf(),
		attrs: {}
	}),
	Mf = e => typeof e == "string" && e.toLowerCase() === "svg";

function j0(e, {
	style: n,
	vars: i
}, o, a) {
	Object.assign(e.style, n, a && a.getProjectionStyles(o));
	for (const u in i) e.style.setProperty(u, i[u])
}
const M0 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function D0(e, n, i, o) {
	j0(e, n, void 0, o);
	for (const a in n.attrs) e.setAttribute(M0.has(a) ? a : Tf(a), n.attrs[a])
}
const ha = {};

function QC(e) {
	Object.assign(ha, e)
}

function L0(e, {
	layout: n,
	layoutId: i
}) {
	return vr.has(e) || e.startsWith("origin") || (n || i !== void 0) && (!!ha[e] || e === "opacity")
}

function Df(e, n, i) {
	var o;
	const {
		style: a
	} = e, u = {};
	for (const c in a)(rt(a[c]) || n.style && rt(n.style[c]) || L0(c, e) || ((o = i?.getValue(c)) === null || o === void 0 ? void 0 : o.liveStyle) !== void 0) && (u[c] = a[c]);
	return u
}

function I0(e, n, i) {
	const o = Df(e, n, i);
	for (const a in e)
		if (rt(e[a]) || rt(n[a])) {
			const u = si.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
			o[u] = e[a]
		} return o
}

function qC(e, n) {
	try {
		n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
	} catch {
		n.dimensions = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		}
	}
}
const ng = ["x", "y", "width", "height", "cx", "cy", "r"],
	GC = {
		useVisualState: R0({
			scrapeMotionValuesFromProps: I0,
			createRenderState: N0,
			onUpdate: ({
				props: e,
				prevProps: n,
				current: i,
				renderState: o,
				latestValues: a
			}) => {
				if (!i) return;
				let u = !!e.drag;
				if (!u) {
					for (const f in a)
						if (vr.has(f)) {
							u = !0;
							break
						}
				}
				if (!u) return;
				let c = !n;
				if (n)
					for (let f = 0; f < ng.length; f++) {
						const p = ng[f];
						e[p] !== n[p] && (c = !0)
					}
				c && _e.read(() => {
					qC(i, o), _e.render(() => {
						Nf(o, a, Mf(i.tagName), e.transformTemplate), D0(i, o)
					})
				})
			}
		})
	},
	YC = {
		useVisualState: R0({
			scrapeMotionValuesFromProps: Df,
			createRenderState: jf
		})
	};

function F0(e, n, i) {
	for (const o in n) !rt(n[o]) && !L0(o, i) && (e[o] = n[o])
}

function XC({
	transformTemplate: e
}, n) {
	return T.useMemo(() => {
		const i = jf();
		return Af(i, n, e), Object.assign({}, i.vars, i.style)
	}, [n])
}

function ZC(e, n) {
	const i = e.style || {},
		o = {};
	return F0(o, i, e), Object.assign(o, XC(e, n)), o
}

function JC(e, n) {
	const i = {},
		o = ZC(e, n);
	return e.drag && e.dragListener !== !1 && (i.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0), i.style = o, i
}

function ek(e, n, i, o) {
	const a = T.useMemo(() => {
		const u = N0();
		return Nf(u, n, Mf(o), e.transformTemplate), {
			...u.attrs,
			style: {
				...u.style
			}
		}
	}, [n]);
	if (e.style) {
		const u = {};
		F0(u, e.style, e), a.style = {
			...u,
			...a.style
		}
	}
	return a
}

function tk(e = !1) {
	return (i, o, a, {
		latestValues: u
	}, c) => {
		const p = (kf(i) ? ek : JC)(o, u, c, i),
			h = gC(o, typeof i == "string", e),
			g = i !== T.Fragment ? {
				...h,
				...p,
				ref: a
			} : {},
			{
				children: y
			} = o,
			v = T.useMemo(() => rt(y) ? y.get() : y, [y]);
		return T.createElement(i, {
			...g,
			children: v
		})
	}
}

function nk(e, n) {
	return function(o, {
		forwardMotionProps: a
	} = {
		forwardMotionProps: !1
	}) {
		const c = {
			...kf(o) ? GC : YC,
			preloadedFeatures: e,
			useRender: tk(a),
			createVisualElement: n,
			Component: o
		};
		return TC(c)
	}
}

function V0(e, n) {
	if (!Array.isArray(n)) return !1;
	const i = n.length;
	if (i !== e.length) return !1;
	for (let o = 0; o < i; o++)
		if (n[o] !== e[o]) return !1;
	return !0
}

function Fa(e, n, i) {
	const o = e.getProps();
	return Rf(o, n, i !== void 0 ? i : o.custom, e)
}
const rk = bf(() => window.ScrollTimeline !== void 0);
class ik {
	constructor(n) {
		this.stop = () => this.runAll("stop"), this.animations = n.filter(Boolean)
	}
	get finished() {
		return Promise.all(this.animations.map(n => "finished" in n ? n.finished : n))
	}
	getAll(n) {
		return this.animations[0][n]
	}
	setAll(n, i) {
		for (let o = 0; o < this.animations.length; o++) this.animations[o][n] = i
	}
	attachTimeline(n, i) {
		const o = this.animations.map(a => {
			if (rk() && a.attachTimeline) return a.attachTimeline(n);
			if (typeof i == "function") return i(a)
		});
		return () => {
			o.forEach((a, u) => {
				a && a(), this.animations[u].stop()
			})
		}
	}
	get time() {
		return this.getAll("time")
	}
	set time(n) {
		this.setAll("time", n)
	}
	get speed() {
		return this.getAll("speed")
	}
	set speed(n) {
		this.setAll("speed", n)
	}
	get startTime() {
		return this.getAll("startTime")
	}
	get duration() {
		let n = 0;
		for (let i = 0; i < this.animations.length; i++) n = Math.max(n, this.animations[i].duration);
		return n
	}
	runAll(n) {
		this.animations.forEach(i => i[n]())
	}
	flatten() {
		this.runAll("flatten")
	}
	play() {
		this.runAll("play")
	}
	pause() {
		this.runAll("pause")
	}
	cancel() {
		this.runAll("cancel")
	}
	complete() {
		this.runAll("complete")
	}
}
class ok extends ik {
	then(n, i) {
		return Promise.all(this.animations).then(n).catch(i)
	}
}

function Lf(e, n) {
	return e ? e[n] || e.default || e : void 0
}
const jc = 2e4;

function z0(e) {
	let n = 0;
	const i = 50;
	let o = e.next(n);
	for (; !o.done && n < jc;) n += i, o = e.next(n);
	return n >= jc ? 1 / 0 : n
}

function If(e) {
	return typeof e == "function"
}

function rg(e, n) {
	e.timeline = n, e.onfinish = null
}
const Ff = e => Array.isArray(e) && typeof e[0] == "number",
	sk = {
		linearEasing: void 0
	};

function ak(e, n) {
	const i = bf(e);
	return () => {
		var o;
		return (o = sk[n]) !== null && o !== void 0 ? o : i()
	}
}
const pa = ak(() => {
		try {
			document.createElement("div").animate({
				opacity: 0
			}, {
				easing: "linear(0, 1)"
			})
		} catch {
			return !1
		}
		return !0
	}, "linearEasing"),
	B0 = (e, n, i = 10) => {
		let o = "";
		const a = Math.max(Math.round(n / i), 2);
		for (let u = 0; u < a; u++) o += e(ei(0, a - 1, u)) + ", ";
		return `linear(${o.substring(0,o.length-2)})`
	};

function U0(e) {
	return !!(typeof e == "function" && pa() || !e || typeof e == "string" && (e in Mc || pa()) || Ff(e) || Array.isArray(e) && e.every(U0))
}
const Zi = ([e, n, i, o]) => `cubic-bezier(${e}, ${n}, ${i}, ${o})`,
	Mc = {
		linear: "linear",
		ease: "ease",
		easeIn: "ease-in",
		easeOut: "ease-out",
		easeInOut: "ease-in-out",
		circIn: Zi([0, .65, .55, 1]),
		circOut: Zi([.55, 0, 1, .45]),
		backIn: Zi([.31, .01, .66, -.59]),
		backOut: Zi([.33, 1.53, .69, .99])
	};

function H0(e, n) {
	if (e) return typeof e == "function" && pa() ? B0(e, n) : Ff(e) ? Zi(e) : Array.isArray(e) ? e.map(i => H0(i, n) || Mc.easeOut) : Mc[e]
}
const Ht = {
	x: !1,
	y: !1
};

function W0() {
	return Ht.x || Ht.y
}

function lk(e, n, i) {
	var o;
	if (e instanceof Element) return [e];
	if (typeof e == "string") {
		let a = document;
		const u = (o = void 0) !== null && o !== void 0 ? o : a.querySelectorAll(e);
		return u ? Array.from(u) : []
	}
	return Array.from(e)
}

function $0(e, n) {
	const i = lk(e),
		o = new AbortController,
		a = {
			passive: !0,
			...n,
			signal: o.signal
		};
	return [i, a, () => o.abort()]
}

function ig(e) {
	return n => {
		n.pointerType === "touch" || W0() || e(n)
	}
}

function uk(e, n, i = {}) {
	const [o, a, u] = $0(e, i), c = ig(f => {
		const {
			target: p
		} = f, h = n(f);
		if (typeof h != "function" || !p) return;
		const g = ig(y => {
			h(y), p.removeEventListener("pointerleave", g)
		});
		p.addEventListener("pointerleave", g, a)
	});
	return o.forEach(f => {
		f.addEventListener("pointerenter", c, a)
	}), u
}
const K0 = (e, n) => n ? e === n ? !0 : K0(e, n.parentElement) : !1,
	Vf = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1,
	ck = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function fk(e) {
	return ck.has(e.tagName) || e.tabIndex !== -1
}
const Ji = new WeakSet;

function og(e) {
	return n => {
		n.key === "Enter" && e(n)
	}
}

function Xu(e, n) {
	e.dispatchEvent(new PointerEvent("pointer" + n, {
		isPrimary: !0,
		bubbles: !0
	}))
}
const dk = (e, n) => {
	const i = e.currentTarget;
	if (!i) return;
	const o = og(() => {
		if (Ji.has(i)) return;
		Xu(i, "down");
		const a = og(() => {
				Xu(i, "up")
			}),
			u = () => Xu(i, "cancel");
		i.addEventListener("keyup", a, n), i.addEventListener("blur", u, n)
	});
	i.addEventListener("keydown", o, n), i.addEventListener("blur", () => i.removeEventListener("keydown", o), n)
};

function sg(e) {
	return Vf(e) && !W0()
}

function hk(e, n, i = {}) {
	const [o, a, u] = $0(e, i), c = f => {
		const p = f.currentTarget;
		if (!sg(f) || Ji.has(p)) return;
		Ji.add(p);
		const h = n(f),
			g = (x, b) => {
				window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", v), !(!sg(x) || !Ji.has(p)) && (Ji.delete(p), typeof h == "function" && h(x, {
					success: b
				}))
			},
			y = x => {
				g(x, i.useGlobalTarget || K0(p, x.target))
			},
			v = x => {
				g(x, !1)
			};
		window.addEventListener("pointerup", y, a), window.addEventListener("pointercancel", v, a)
	};
	return o.forEach(f => {
		!fk(f) && f.getAttribute("tabindex") === null && (f.tabIndex = 0), (i.useGlobalTarget ? window : f).addEventListener("pointerdown", c, a), f.addEventListener("focus", h => dk(h, a), a)
	}), u
}

function pk(e) {
	return e === "x" || e === "y" ? Ht[e] ? null : (Ht[e] = !0, () => {
		Ht[e] = !1
	}) : Ht.x || Ht.y ? null : (Ht.x = Ht.y = !0, () => {
		Ht.x = Ht.y = !1
	})
}
const Q0 = new Set(["width", "height", "top", "left", "right", "bottom", ...si]);
let oa;

function mk() {
	oa = void 0
}
const tn = {
	now: () => (oa === void 0 && tn.set(Ye.isProcessing || cC.useManualTiming ? Ye.timestamp : performance.now()), oa),
	set: e => {
		oa = e, queueMicrotask(mk)
	}
};

function zf(e, n) {
	e.indexOf(n) === -1 && e.push(n)
}

function Bf(e, n) {
	const i = e.indexOf(n);
	i > -1 && e.splice(i, 1)
}
class Uf {
	constructor() {
		this.subscriptions = []
	}
	add(n) {
		return zf(this.subscriptions, n), () => Bf(this.subscriptions, n)
	}
	notify(n, i, o) {
		const a = this.subscriptions.length;
		if (a)
			if (a === 1) this.subscriptions[0](n, i, o);
			else
				for (let u = 0; u < a; u++) {
					const c = this.subscriptions[u];
					c && c(n, i, o)
				}
	}
	getSize() {
		return this.subscriptions.length
	}
	clear() {
		this.subscriptions.length = 0
	}
}

function q0(e, n) {
	return n ? e * (1e3 / n) : 0
}
const ag = 30,
	gk = e => !isNaN(parseFloat(e));
class yk {
	constructor(n, i = {}) {
		this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (o, a = !0) => {
			const u = tn.now();
			this.updatedAt !== u && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), a && this.events.renderRequest && this.events.renderRequest.notify(this.current)
		}, this.hasAnimated = !1, this.setCurrent(n), this.owner = i.owner
	}
	setCurrent(n) {
		this.current = n, this.updatedAt = tn.now(), this.canTrackVelocity === null && n !== void 0 && (this.canTrackVelocity = gk(this.current))
	}
	setPrevFrameValue(n = this.current) {
		this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt
	}
	onChange(n) {
		return this.on("change", n)
	}
	on(n, i) {
		this.events[n] || (this.events[n] = new Uf);
		const o = this.events[n].add(i);
		return n === "change" ? () => {
			o(), _e.read(() => {
				this.events.change.getSize() || this.stop()
			})
		} : o
	}
	clearListeners() {
		for (const n in this.events) this.events[n].clear()
	}
	attach(n, i) {
		this.passiveEffect = n, this.stopPassiveEffect = i
	}
	set(n, i = !0) {
		!i || !this.passiveEffect ? this.updateAndNotify(n, i) : this.passiveEffect(n, this.updateAndNotify)
	}
	setWithVelocity(n, i, o) {
		this.set(i), this.prev = void 0, this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt - o
	}
	jump(n, i = !0) {
		this.updateAndNotify(n), this.prev = n, this.prevUpdatedAt = this.prevFrameValue = void 0, i && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
	}
	get() {
		return this.current
	}
	getPrevious() {
		return this.prev
	}
	getVelocity() {
		const n = tn.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || n - this.updatedAt > ag) return 0;
		const i = Math.min(this.updatedAt - this.prevUpdatedAt, ag);
		return q0(parseFloat(this.current) - parseFloat(this.prevFrameValue), i)
	}
	start(n) {
		return this.stop(), new Promise(i => {
			this.hasAnimated = !0, this.animation = n(i), this.events.animationStart && this.events.animationStart.notify()
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
		})
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
	}
	isAnimating() {
		return !!this.animation
	}
	clearAnimation() {
		delete this.animation
	}
	destroy() {
		this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
	}
}

function fo(e, n) {
	return new yk(e, n)
}

function vk(e, n, i) {
	e.hasValue(n) ? e.getValue(n).set(i) : e.addValue(n, fo(i))
}

function xk(e, n) {
	const i = Fa(e, n);
	let {
		transitionEnd: o = {},
		transition: a = {},
		...u
	} = i || {};
	u = {
		...u,
		...o
	};
	for (const c in u) {
		const f = AC(u[c]);
		vk(e, c, f)
	}
}

function wk(e) {
	return !!(rt(e) && e.add)
}

function Dc(e, n) {
	const i = e.getValue("willChange");
	if (wk(i)) return i.add(n)
}

function G0(e) {
	return e.props[T0]
}
const Y0 = (e, n, i) => (((1 - 3 * i + 3 * n) * e + (3 * i - 6 * n)) * e + 3 * n) * e,
	Sk = 1e-7,
	bk = 12;

function Ek(e, n, i, o, a) {
	let u, c, f = 0;
	do c = n + (i - n) / 2, u = Y0(c, o, a) - e, u > 0 ? i = c : n = c; while (Math.abs(u) > Sk && ++f < bk);
	return c
}

function xo(e, n, i, o) {
	if (e === n && i === o) return St;
	const a = u => Ek(u, 0, 1, e, i);
	return u => u === 0 || u === 1 ? u : Y0(a(u), n, o)
}
const X0 = e => n => n <= .5 ? e(2 * n) / 2 : (2 - e(2 * (1 - n))) / 2,
	Z0 = e => n => 1 - e(1 - n),
	J0 = xo(.33, 1.53, .69, .99),
	Hf = Z0(J0),
	ex = X0(Hf),
	tx = e => (e *= 2) < 1 ? .5 * Hf(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
	Wf = e => 1 - Math.sin(Math.acos(e)),
	nx = Z0(Wf),
	rx = X0(Wf),
	ix = e => /^0[^.\s]+$/u.test(e);

function Pk(e) {
	return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || ix(e) : !0
}
const no = e => Math.round(e * 1e5) / 1e5,
	$f = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Tk(e) {
	return e == null
}
const Ck = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
	Kf = (e, n) => i => !!(typeof i == "string" && Ck.test(i) && i.startsWith(e) || n && !Tk(i) && Object.prototype.hasOwnProperty.call(i, n)),
	ox = (e, n, i) => o => {
		if (typeof o != "string") return o;
		const [a, u, c, f] = o.match($f);
		return {
			[e]: parseFloat(a),
			[n]: parseFloat(u),
			[i]: parseFloat(c),
			alpha: f !== void 0 ? parseFloat(f) : 1
		}
	},
	kk = e => wn(0, 255, e),
	Zu = {
		...ai,
		transform: e => Math.round(kk(e))
	},
	pr = {
		test: Kf("rgb", "red"),
		parse: ox("red", "green", "blue"),
		transform: ({
			red: e,
			green: n,
			blue: i,
			alpha: o = 1
		}) => "rgba(" + Zu.transform(e) + ", " + Zu.transform(n) + ", " + Zu.transform(i) + ", " + no(co.transform(o)) + ")"
	};

function Rk(e) {
	let n = "",
		i = "",
		o = "",
		a = "";
	return e.length > 5 ? (n = e.substring(1, 3), i = e.substring(3, 5), o = e.substring(5, 7), a = e.substring(7, 9)) : (n = e.substring(1, 2), i = e.substring(2, 3), o = e.substring(3, 4), a = e.substring(4, 5), n += n, i += i, o += o, a += a), {
		red: parseInt(n, 16),
		green: parseInt(i, 16),
		blue: parseInt(o, 16),
		alpha: a ? parseInt(a, 16) / 255 : 1
	}
}
const Lc = {
		test: Kf("#"),
		parse: Rk,
		transform: pr.transform
	},
	Kr = {
		test: Kf("hsl", "hue"),
		parse: ox("hue", "saturation", "lightness"),
		transform: ({
			hue: e,
			saturation: n,
			lightness: i,
			alpha: o = 1
		}) => "hsla(" + Math.round(e) + ", " + en.transform(no(n)) + ", " + en.transform(no(i)) + ", " + no(co.transform(o)) + ")"
	},
	nt = {
		test: e => pr.test(e) || Lc.test(e) || Kr.test(e),
		parse: e => pr.test(e) ? pr.parse(e) : Kr.test(e) ? Kr.parse(e) : Lc.parse(e),
		transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? pr.transform(e) : Kr.transform(e)
	},
	_k = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function Ok(e) {
	var n, i;
	return isNaN(e) && typeof e == "string" && (((n = e.match($f)) === null || n === void 0 ? void 0 : n.length) || 0) + (((i = e.match(_k)) === null || i === void 0 ? void 0 : i.length) || 0) > 0
}
const sx = "number",
	ax = "color",
	Ak = "var",
	Nk = "var(",
	lg = "${}",
	jk = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function ho(e) {
	const n = e.toString(),
		i = [],
		o = {
			color: [],
			number: [],
			var: []
		},
		a = [];
	let u = 0;
	const f = n.replace(jk, p => (nt.test(p) ? (o.color.push(u), a.push(ax), i.push(nt.parse(p))) : p.startsWith(Nk) ? (o.var.push(u), a.push(Ak), i.push(p)) : (o.number.push(u), a.push(sx), i.push(parseFloat(p))), ++u, lg)).split(lg);
	return {
		values: i,
		split: f,
		indexes: o,
		types: a
	}
}

function lx(e) {
	return ho(e).values
}

function ux(e) {
	const {
		split: n,
		types: i
	} = ho(e), o = n.length;
	return a => {
		let u = "";
		for (let c = 0; c < o; c++)
			if (u += n[c], a[c] !== void 0) {
				const f = i[c];
				f === sx ? u += no(a[c]) : f === ax ? u += nt.transform(a[c]) : u += a[c]
			} return u
	}
}
const Mk = e => typeof e == "number" ? 0 : e;

function Dk(e) {
	const n = lx(e);
	return ux(e)(n.map(Mk))
}
const Gn = {
		test: Ok,
		parse: lx,
		createTransformer: ux,
		getAnimatableNone: Dk
	},
	Lk = new Set(["brightness", "contrast", "saturate", "opacity"]);

function Ik(e) {
	const [n, i] = e.slice(0, -1).split("(");
	if (n === "drop-shadow") return e;
	const [o] = i.match($f) || [];
	if (!o) return e;
	const a = i.replace(o, "");
	let u = Lk.has(n) ? 1 : 0;
	return o !== i && (u *= 100), n + "(" + u + a + ")"
}
const Fk = /\b([a-z-]*)\(.*?\)/gu,
	Ic = {
		...Gn,
		getAnimatableNone: e => {
			const n = e.match(Fk);
			return n ? n.map(Ik).join(" ") : e
		}
	},
	Vk = {
		...Of,
		color: nt,
		backgroundColor: nt,
		outlineColor: nt,
		fill: nt,
		stroke: nt,
		borderColor: nt,
		borderTopColor: nt,
		borderRightColor: nt,
		borderBottomColor: nt,
		borderLeftColor: nt,
		filter: Ic,
		WebkitFilter: Ic
	},
	Qf = e => Vk[e];

function cx(e, n) {
	let i = Qf(e);
	return i !== Ic && (i = Gn), i.getAnimatableNone ? i.getAnimatableNone(n) : void 0
}
const zk = new Set(["auto", "none", "0"]);

function Bk(e, n, i) {
	let o = 0,
		a;
	for (; o < e.length && !a;) {
		const u = e[o];
		typeof u == "string" && !zk.has(u) && ho(u).values.length && (a = e[o]), o++
	}
	if (a && i)
		for (const u of n) e[u] = cx(i, a)
}
const ug = e => e === ai || e === he,
	cg = (e, n) => parseFloat(e.split(", ")[n]),
	fg = (e, n) => (i, {
		transform: o
	}) => {
		if (o === "none" || !o) return 0;
		const a = o.match(/^matrix3d\((.+)\)$/u);
		if (a) return cg(a[1], n);
		{
			const u = o.match(/^matrix\((.+)\)$/u);
			return u ? cg(u[1], e) : 0
		}
	},
	Uk = new Set(["x", "y", "z"]),
	Hk = si.filter(e => !Uk.has(e));

function Wk(e) {
	const n = [];
	return Hk.forEach(i => {
		const o = e.getValue(i);
		o !== void 0 && (n.push([i, o.get()]), o.set(i.startsWith("scale") ? 1 : 0))
	}), n
}
const ni = {
	width: ({
		x: e
	}, {
		paddingLeft: n = "0",
		paddingRight: i = "0"
	}) => e.max - e.min - parseFloat(n) - parseFloat(i),
	height: ({
		y: e
	}, {
		paddingTop: n = "0",
		paddingBottom: i = "0"
	}) => e.max - e.min - parseFloat(n) - parseFloat(i),
	top: (e, {
		top: n
	}) => parseFloat(n),
	left: (e, {
		left: n
	}) => parseFloat(n),
	bottom: ({
		y: e
	}, {
		top: n
	}) => parseFloat(n) + (e.max - e.min),
	right: ({
		x: e
	}, {
		left: n
	}) => parseFloat(n) + (e.max - e.min),
	x: fg(4, 13),
	y: fg(5, 14)
};
ni.translateX = ni.x;
ni.translateY = ni.y;
const mr = new Set;
let Fc = !1,
	Vc = !1;

function fx() {
	if (Vc) {
		const e = Array.from(mr).filter(o => o.needsMeasurement),
			n = new Set(e.map(o => o.element)),
			i = new Map;
		n.forEach(o => {
			const a = Wk(o);
			a.length && (i.set(o, a), o.render())
		}), e.forEach(o => o.measureInitialState()), n.forEach(o => {
			o.render();
			const a = i.get(o);
			a && a.forEach(([u, c]) => {
				var f;
				(f = o.getValue(u)) === null || f === void 0 || f.set(c)
			})
		}), e.forEach(o => o.measureEndState()), e.forEach(o => {
			o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY)
		})
	}
	Vc = !1, Fc = !1, mr.forEach(e => e.complete()), mr.clear()
}

function dx() {
	mr.forEach(e => {
		e.readKeyframes(), e.needsMeasurement && (Vc = !0)
	})
}

function $k() {
	dx(), fx()
}
class qf {
	constructor(n, i, o, a, u, c = !1) {
		this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...n], this.onComplete = i, this.name = o, this.motionValue = a, this.element = u, this.isAsync = c
	}
	scheduleResolve() {
		this.isScheduled = !0, this.isAsync ? (mr.add(this), Fc || (Fc = !0, _e.read(dx), _e.resolveKeyframes(fx))) : (this.readKeyframes(), this.complete())
	}
	readKeyframes() {
		const {
			unresolvedKeyframes: n,
			name: i,
			element: o,
			motionValue: a
		} = this;
		for (let u = 0; u < n.length; u++)
			if (n[u] === null)
				if (u === 0) {
					const c = a?.get(),
						f = n[n.length - 1];
					if (c !== void 0) n[0] = c;
					else if (o && i) {
						const p = o.readValue(i, f);
						p != null && (n[0] = p)
					}
					n[0] === void 0 && (n[0] = f), a && c === void 0 && a.set(n[0])
				} else n[u] = n[u - 1]
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete() {
		this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), mr.delete(this)
	}
	cancel() {
		this.isComplete || (this.isScheduled = !1, mr.delete(this))
	}
	resume() {
		this.isComplete || this.scheduleResolve()
	}
}
const hx = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
	Kk = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function Qk(e) {
	const n = Kk.exec(e);
	if (!n) return [, ];
	const [, i, o, a] = n;
	return [`--${i??o}`, a]
}

function px(e, n, i = 1) {
	const [o, a] = Qk(e);
	if (!o) return;
	const u = window.getComputedStyle(n).getPropertyValue(o);
	if (u) {
		const c = u.trim();
		return hx(c) ? parseFloat(c) : c
	}
	return _f(a) ? px(a, n, i + 1) : a
}
const mx = e => n => n.test(e),
	qk = {
		test: e => e === "auto",
		parse: e => e
	},
	gx = [ai, he, en, Un, IC, LC, qk],
	dg = e => gx.find(mx(e));
class yx extends qf {
	constructor(n, i, o, a, u) {
		super(n, i, o, a, u, !0)
	}
	readKeyframes() {
		const {
			unresolvedKeyframes: n,
			element: i,
			name: o
		} = this;
		if (!i || !i.current) return;
		super.readKeyframes();
		for (let p = 0; p < n.length; p++) {
			let h = n[p];
			if (typeof h == "string" && (h = h.trim(), _f(h))) {
				const g = px(h, i.current);
				g !== void 0 && (n[p] = g), p === n.length - 1 && (this.finalKeyframe = h)
			}
		}
		if (this.resolveNoneKeyframes(), !Q0.has(o) || n.length !== 2) return;
		const [a, u] = n, c = dg(a), f = dg(u);
		if (c !== f)
			if (ug(c) && ug(f))
				for (let p = 0; p < n.length; p++) {
					const h = n[p];
					typeof h == "string" && (n[p] = parseFloat(h))
				} else this.needsMeasurement = !0
	}
	resolveNoneKeyframes() {
		const {
			unresolvedKeyframes: n,
			name: i
		} = this, o = [];
		for (let a = 0; a < n.length; a++) Pk(n[a]) && o.push(a);
		o.length && Bk(n, o, i)
	}
	measureInitialState() {
		const {
			element: n,
			unresolvedKeyframes: i,
			name: o
		} = this;
		if (!n || !n.current) return;
		o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ni[o](n.measureViewportBox(), window.getComputedStyle(n.current)), i[0] = this.measuredOrigin;
		const a = i[i.length - 1];
		a !== void 0 && n.getValue(o, a).jump(a, !1)
	}
	measureEndState() {
		var n;
		const {
			element: i,
			name: o,
			unresolvedKeyframes: a
		} = this;
		if (!i || !i.current) return;
		const u = i.getValue(o);
		u && u.jump(this.measuredOrigin, !1);
		const c = a.length - 1,
			f = a[c];
		a[c] = ni[o](i.measureViewportBox(), window.getComputedStyle(i.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), !((n = this.removedTransforms) === null || n === void 0) && n.length && this.removedTransforms.forEach(([p, h]) => {
			i.getValue(p).set(h)
		}), this.resolveNoneKeyframes()
	}
}
const hg = (e, n) => n === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Gn.test(e) || e === "0") && !e.startsWith("url("));

function Gk(e) {
	const n = e[0];
	if (e.length === 1) return !0;
	for (let i = 0; i < e.length; i++)
		if (e[i] !== n) return !0
}

function Yk(e, n, i, o) {
	const a = e[0];
	if (a === null) return !1;
	if (n === "display" || n === "visibility") return !0;
	const u = e[e.length - 1],
		c = hg(a, n),
		f = hg(u, n);
	return !c || !f ? !1 : Gk(e) || (i === "spring" || If(i)) && o
}
const Xk = e => e !== null;

function Va(e, {
	repeat: n,
	repeatType: i = "loop"
}, o) {
	const a = e.filter(Xk),
		u = n && i !== "loop" && n % 2 === 1 ? 0 : a.length - 1;
	return !u || o === void 0 ? a[u] : o
}
const Zk = 40;
class vx {
	constructor({
		autoplay: n = !0,
		delay: i = 0,
		type: o = "keyframes",
		repeat: a = 0,
		repeatDelay: u = 0,
		repeatType: c = "loop",
		...f
	}) {
		this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = tn.now(), this.options = {
			autoplay: n,
			delay: i,
			type: o,
			repeat: a,
			repeatDelay: u,
			repeatType: c,
			...f
		}, this.updateFinishedPromise()
	}
	calcStartTime() {
		return this.resolvedAt ? this.resolvedAt - this.createdAt > Zk ? this.resolvedAt : this.createdAt : this.createdAt
	}
	get resolved() {
		return !this._resolved && !this.hasAttemptedResolve && $k(), this._resolved
	}
	onKeyframesResolved(n, i) {
		this.resolvedAt = tn.now(), this.hasAttemptedResolve = !0;
		const {
			name: o,
			type: a,
			velocity: u,
			delay: c,
			onComplete: f,
			onUpdate: p,
			isGenerator: h
		} = this.options;
		if (!h && !Yk(n, o, a, u))
			if (c) this.options.duration = 0;
			else {
				p && p(Va(n, this.options, i)), f && f(), this.resolveFinishedPromise();
				return
			} const g = this.initPlayback(n, i);
		g !== !1 && (this._resolved = {
			keyframes: n,
			finalKeyframe: i,
			...g
		}, this.onPostResolved())
	}
	onPostResolved() {}
	then(n, i) {
		return this.currentFinishedPromise.then(n, i)
	}
	flatten() {
		this.options.type = "keyframes", this.options.ease = "linear"
	}
	updateFinishedPromise() {
		this.currentFinishedPromise = new Promise(n => {
			this.resolveFinishedPromise = n
		})
	}
}
const De = (e, n, i) => e + (n - e) * i;

function Ju(e, n, i) {
	return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + (n - e) * 6 * i : i < 1 / 2 ? n : i < 2 / 3 ? e + (n - e) * (2 / 3 - i) * 6 : e
}

function Jk({
	hue: e,
	saturation: n,
	lightness: i,
	alpha: o
}) {
	e /= 360, n /= 100, i /= 100;
	let a = 0,
		u = 0,
		c = 0;
	if (!n) a = u = c = i;
	else {
		const f = i < .5 ? i * (1 + n) : i + n - i * n,
			p = 2 * i - f;
		a = Ju(p, f, e + 1 / 3), u = Ju(p, f, e), c = Ju(p, f, e - 1 / 3)
	}
	return {
		red: Math.round(a * 255),
		green: Math.round(u * 255),
		blue: Math.round(c * 255),
		alpha: o
	}
}

function ma(e, n) {
	return i => i > 0 ? n : e
}
const ec = (e, n, i) => {
		const o = e * e,
			a = i * (n * n - o) + o;
		return a < 0 ? 0 : Math.sqrt(a)
	},
	e2 = [Lc, pr, Kr],
	t2 = e => e2.find(n => n.test(e));

function pg(e) {
	const n = t2(e);
	if (!n) return !1;
	let i = n.parse(e);
	return n === Kr && (i = Jk(i)), i
}
const mg = (e, n) => {
		const i = pg(e),
			o = pg(n);
		if (!i || !o) return ma(e, n);
		const a = {
			...i
		};
		return u => (a.red = ec(i.red, o.red, u), a.green = ec(i.green, o.green, u), a.blue = ec(i.blue, o.blue, u), a.alpha = De(i.alpha, o.alpha, u), pr.transform(a))
	},
	n2 = (e, n) => i => n(e(i)),
	wo = (...e) => e.reduce(n2),
	zc = new Set(["none", "hidden"]);

function r2(e, n) {
	return zc.has(e) ? i => i <= 0 ? e : n : i => i >= 1 ? n : e
}

function i2(e, n) {
	return i => De(e, n, i)
}

function Gf(e) {
	return typeof e == "number" ? i2 : typeof e == "string" ? _f(e) ? ma : nt.test(e) ? mg : a2 : Array.isArray(e) ? xx : typeof e == "object" ? nt.test(e) ? mg : o2 : ma
}

function xx(e, n) {
	const i = [...e],
		o = i.length,
		a = e.map((u, c) => Gf(u)(u, n[c]));
	return u => {
		for (let c = 0; c < o; c++) i[c] = a[c](u);
		return i
	}
}

function o2(e, n) {
	const i = {
			...e,
			...n
		},
		o = {};
	for (const a in i) e[a] !== void 0 && n[a] !== void 0 && (o[a] = Gf(e[a])(e[a], n[a]));
	return a => {
		for (const u in o) i[u] = o[u](a);
		return i
	}
}

function s2(e, n) {
	var i;
	const o = [],
		a = {
			color: 0,
			var: 0,
			number: 0
		};
	for (let u = 0; u < n.values.length; u++) {
		const c = n.types[u],
			f = e.indexes[c][a[c]],
			p = (i = e.values[f]) !== null && i !== void 0 ? i : 0;
		o[u] = p, a[c]++
	}
	return o
}
const a2 = (e, n) => {
	const i = Gn.createTransformer(n),
		o = ho(e),
		a = ho(n);
	return o.indexes.var.length === a.indexes.var.length && o.indexes.color.length === a.indexes.color.length && o.indexes.number.length >= a.indexes.number.length ? zc.has(e) && !a.values.length || zc.has(n) && !o.values.length ? r2(e, n) : wo(xx(s2(o, a), a.values), i) : ma(e, n)
};

function wx(e, n, i) {
	return typeof e == "number" && typeof n == "number" && typeof i == "number" ? De(e, n, i) : Gf(e)(e, n)
}
const l2 = 5;

function Sx(e, n, i) {
	const o = Math.max(n - l2, 0);
	return q0(i - e(o), n - o)
}
const Ie = {
		stiffness: 100,
		damping: 10,
		mass: 1,
		velocity: 0,
		duration: 800,
		bounce: .3,
		visualDuration: .3,
		restSpeed: {
			granular: .01,
			default: 2
		},
		restDelta: {
			granular: .005,
			default: .5
		},
		minDuration: .01,
		maxDuration: 10,
		minDamping: .05,
		maxDamping: 1
	},
	tc = .001;

function u2({
	duration: e = Ie.duration,
	bounce: n = Ie.bounce,
	velocity: i = Ie.velocity,
	mass: o = Ie.mass
}) {
	let a, u, c = 1 - n;
	c = wn(Ie.minDamping, Ie.maxDamping, c), e = wn(Ie.minDuration, Ie.maxDuration, yn(e)), c < 1 ? (a = h => {
		const g = h * c,
			y = g * e,
			v = g - i,
			x = Bc(h, c),
			b = Math.exp(-y);
		return tc - v / x * b
	}, u = h => {
		const y = h * c * e,
			v = y * i + i,
			x = Math.pow(c, 2) * Math.pow(h, 2) * e,
			b = Math.exp(-y),
			E = Bc(Math.pow(h, 2), c);
		return (-a(h) + tc > 0 ? -1 : 1) * ((v - x) * b) / E
	}) : (a = h => {
		const g = Math.exp(-h * e),
			y = (h - i) * e + 1;
		return -tc + g * y
	}, u = h => {
		const g = Math.exp(-h * e),
			y = (i - h) * (e * e);
		return g * y
	});
	const f = 5 / e,
		p = f2(a, u, f);
	if (e = gn(e), isNaN(p)) return {
		stiffness: Ie.stiffness,
		damping: Ie.damping,
		duration: e
	};
	{
		const h = Math.pow(p, 2) * o;
		return {
			stiffness: h,
			damping: c * 2 * Math.sqrt(o * h),
			duration: e
		}
	}
}
const c2 = 12;

function f2(e, n, i) {
	let o = i;
	for (let a = 1; a < c2; a++) o = o - e(o) / n(o);
	return o
}

function Bc(e, n) {
	return e * Math.sqrt(1 - n * n)
}
const d2 = ["duration", "bounce"],
	h2 = ["stiffness", "damping", "mass"];

function gg(e, n) {
	return n.some(i => e[i] !== void 0)
}

function p2(e) {
	let n = {
		velocity: Ie.velocity,
		stiffness: Ie.stiffness,
		damping: Ie.damping,
		mass: Ie.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!gg(e, h2) && gg(e, d2))
		if (e.visualDuration) {
			const i = e.visualDuration,
				o = 2 * Math.PI / (i * 1.2),
				a = o * o,
				u = 2 * wn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(a);
			n = {
				...n,
				mass: Ie.mass,
				stiffness: a,
				damping: u
			}
		} else {
			const i = u2(e);
			n = {
				...n,
				...i,
				mass: Ie.mass
			}, n.isResolvedFromDuration = !0
		} return n
}

function bx(e = Ie.visualDuration, n = Ie.bounce) {
	const i = typeof e != "object" ? {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: n
	} : e;
	let {
		restSpeed: o,
		restDelta: a
	} = i;
	const u = i.keyframes[0],
		c = i.keyframes[i.keyframes.length - 1],
		f = {
			done: !1,
			value: u
		},
		{
			stiffness: p,
			damping: h,
			mass: g,
			duration: y,
			velocity: v,
			isResolvedFromDuration: x
		} = p2({
			...i,
			velocity: -yn(i.velocity || 0)
		}),
		b = v || 0,
		E = h / (2 * Math.sqrt(p * g)),
		P = c - u,
		C = yn(Math.sqrt(p / g)),
		R = Math.abs(P) < 5;
	o || (o = R ? Ie.restSpeed.granular : Ie.restSpeed.default), a || (a = R ? Ie.restDelta.granular : Ie.restDelta.default);
	let _;
	if (E < 1) {
		const M = Bc(C, E);
		_ = L => {
			const I = Math.exp(-E * C * L);
			return c - I * ((b + E * C * P) / M * Math.sin(M * L) + P * Math.cos(M * L))
		}
	} else if (E === 1) _ = M => c - Math.exp(-C * M) * (P + (b + C * P) * M);
	else {
		const M = C * Math.sqrt(E * E - 1);
		_ = L => {
			const I = Math.exp(-E * C * L),
				B = Math.min(M * L, 300);
			return c - I * ((b + E * C * P) * Math.sinh(B) + M * P * Math.cosh(B)) / M
		}
	}
	const A = {
		calculatedDuration: x && y || null,
		next: M => {
			const L = _(M);
			if (x) f.done = M >= y;
			else {
				let I = 0;
				E < 1 && (I = M === 0 ? gn(b) : Sx(_, M, L));
				const B = Math.abs(I) <= o,
					q = Math.abs(c - L) <= a;
				f.done = B && q
			}
			return f.value = f.done ? c : L, f
		},
		toString: () => {
			const M = Math.min(z0(A), jc),
				L = B0(I => A.next(M * I).value, M, 30);
			return M + "ms " + L
		}
	};
	return A
}

function yg({
	keyframes: e,
	velocity: n = 0,
	power: i = .8,
	timeConstant: o = 325,
	bounceDamping: a = 10,
	bounceStiffness: u = 500,
	modifyTarget: c,
	min: f,
	max: p,
	restDelta: h = .5,
	restSpeed: g
}) {
	const y = e[0],
		v = {
			done: !1,
			value: y
		},
		x = B => f !== void 0 && B < f || p !== void 0 && B > p,
		b = B => f === void 0 ? p : p === void 0 || Math.abs(f - B) < Math.abs(p - B) ? f : p;
	let E = i * n;
	const P = y + E,
		C = c === void 0 ? P : c(P);
	C !== P && (E = C - y);
	const R = B => -E * Math.exp(-B / o),
		_ = B => C + R(B),
		A = B => {
			const q = R(B),
				W = _(B);
			v.done = Math.abs(q) <= h, v.value = v.done ? C : W
		};
	let M, L;
	const I = B => {
		x(v.value) && (M = B, L = bx({
			keyframes: [v.value, b(v.value)],
			velocity: Sx(_, B, v.value),
			damping: a,
			stiffness: u,
			restDelta: h,
			restSpeed: g
		}))
	};
	return I(0), {
		calculatedDuration: null,
		next: B => {
			let q = !1;
			return !L && M === void 0 && (q = !0, A(B), I(B)), M !== void 0 && B >= M ? L.next(B - M) : (!q && A(B), v)
		}
	}
}
const m2 = xo(.42, 0, 1, 1),
	g2 = xo(0, 0, .58, 1),
	Ex = xo(.42, 0, .58, 1),
	y2 = e => Array.isArray(e) && typeof e[0] != "number",
	v2 = {
		linear: St,
		easeIn: m2,
		easeInOut: Ex,
		easeOut: g2,
		circIn: Wf,
		circInOut: rx,
		circOut: nx,
		backIn: Hf,
		backInOut: ex,
		backOut: J0,
		anticipate: tx
	},
	vg = e => {
		if (Ff(e)) {
			w0(e.length === 4);
			const [n, i, o, a] = e;
			return xo(n, i, o, a)
		} else if (typeof e == "string") return v2[e];
		return e
	};

function x2(e, n, i) {
	const o = [],
		a = i || wx,
		u = e.length - 1;
	for (let c = 0; c < u; c++) {
		let f = a(e[c], e[c + 1]);
		if (n) {
			const p = Array.isArray(n) ? n[c] || St : n;
			f = wo(p, f)
		}
		o.push(f)
	}
	return o
}

function w2(e, n, {
	clamp: i = !0,
	ease: o,
	mixer: a
} = {}) {
	const u = e.length;
	if (w0(u === n.length), u === 1) return () => n[0];
	if (u === 2 && n[0] === n[1]) return () => n[1];
	const c = e[0] === e[1];
	e[0] > e[u - 1] && (e = [...e].reverse(), n = [...n].reverse());
	const f = x2(n, o, a),
		p = f.length,
		h = g => {
			if (c && g < e[0]) return n[0];
			let y = 0;
			if (p > 1)
				for (; y < e.length - 2 && !(g < e[y + 1]); y++);
			const v = ei(e[y], e[y + 1], g);
			return f[y](v)
		};
	return i ? g => h(wn(e[0], e[u - 1], g)) : h
}

function S2(e, n) {
	const i = e[e.length - 1];
	for (let o = 1; o <= n; o++) {
		const a = ei(0, n, o);
		e.push(De(i, 1, a))
	}
}

function b2(e) {
	const n = [0];
	return S2(n, e.length - 1), n
}

function E2(e, n) {
	return e.map(i => i * n)
}

function P2(e, n) {
	return e.map(() => n || Ex).splice(0, e.length - 1)
}

function ga({
	duration: e = 300,
	keyframes: n,
	times: i,
	ease: o = "easeInOut"
}) {
	const a = y2(o) ? o.map(vg) : vg(o),
		u = {
			done: !1,
			value: n[0]
		},
		c = E2(i && i.length === n.length ? i : b2(n), e),
		f = w2(c, n, {
			ease: Array.isArray(a) ? a : P2(n, a)
		});
	return {
		calculatedDuration: e,
		next: p => (u.value = f(p), u.done = p >= e, u)
	}
}
const T2 = e => {
		const n = ({
			timestamp: i
		}) => e(i);
		return {
			start: () => _e.update(n, !0),
			stop: () => qn(n),
			now: () => Ye.isProcessing ? Ye.timestamp : tn.now()
		}
	},
	C2 = {
		decay: yg,
		inertia: yg,
		tween: ga,
		keyframes: ga,
		spring: bx
	},
	k2 = e => e / 100;
class Yf extends vx {
	constructor(n) {
		super(n), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
			if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
			this.teardown();
			const {
				onStop: p
			} = this.options;
			p && p()
		};
		const {
			name: i,
			motionValue: o,
			element: a,
			keyframes: u
		} = this.options, c = a?.KeyframeResolver || qf, f = (p, h) => this.onKeyframesResolved(p, h);
		this.resolver = new c(u, f, i, o, a), this.resolver.scheduleResolve()
	}
	flatten() {
		super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
	}
	initPlayback(n) {
		const {
			type: i = "keyframes",
			repeat: o = 0,
			repeatDelay: a = 0,
			repeatType: u,
			velocity: c = 0
		} = this.options, f = If(i) ? i : C2[i] || ga;
		let p, h;
		f !== ga && typeof n[0] != "number" && (p = wo(k2, wx(n[0], n[1])), n = [0, 100]);
		const g = f({
			...this.options,
			keyframes: n
		});
		u === "mirror" && (h = f({
			...this.options,
			keyframes: [...n].reverse(),
			velocity: -c
		})), g.calculatedDuration === null && (g.calculatedDuration = z0(g));
		const {
			calculatedDuration: y
		} = g, v = y + a, x = v * (o + 1) - a;
		return {
			generator: g,
			mirroredGenerator: h,
			mapPercentToKeyframes: p,
			calculatedDuration: y,
			resolvedDuration: v,
			totalDuration: x
		}
	}
	onPostResolved() {
		const {
			autoplay: n = !0
		} = this.options;
		this.play(), this.pendingPlayState === "paused" || !n ? this.pause() : this.state = this.pendingPlayState
	}
	tick(n, i = !1) {
		const {
			resolved: o
		} = this;
		if (!o) {
			const {
				keyframes: B
			} = this.options;
			return {
				done: !0,
				value: B[B.length - 1]
			}
		}
		const {
			finalKeyframe: a,
			generator: u,
			mirroredGenerator: c,
			mapPercentToKeyframes: f,
			keyframes: p,
			calculatedDuration: h,
			totalDuration: g,
			resolvedDuration: y
		} = o;
		if (this.startTime === null) return u.next(0);
		const {
			delay: v,
			repeat: x,
			repeatType: b,
			repeatDelay: E,
			onUpdate: P
		} = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, n) : this.speed < 0 && (this.startTime = Math.min(n - g / this.speed, this.startTime)), i ? this.currentTime = n : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(n - this.startTime) * this.speed;
		const C = this.currentTime - v * (this.speed >= 0 ? 1 : -1),
			R = this.speed >= 0 ? C < 0 : C > g;
		this.currentTime = Math.max(C, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = g);
		let _ = this.currentTime,
			A = u;
		if (x) {
			const B = Math.min(this.currentTime, g) / y;
			let q = Math.floor(B),
				W = B % 1;
			!W && B >= 1 && (W = 1), W === 1 && q--, q = Math.min(q, x + 1), q % 2 && (b === "reverse" ? (W = 1 - W, E && (W -= E / y)) : b === "mirror" && (A = c)), _ = wn(0, 1, W) * y
		}
		const M = R ? {
			done: !1,
			value: p[0]
		} : A.next(_);
		f && (M.value = f(M.value));
		let {
			done: L
		} = M;
		!R && h !== null && (L = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
		const I = this.holdTime === null && (this.state === "finished" || this.state === "running" && L);
		return I && a !== void 0 && (M.value = Va(p, this.options, a)), P && P(M.value), I && this.finish(), M
	}
	get duration() {
		const {
			resolved: n
		} = this;
		return n ? yn(n.calculatedDuration) : 0
	}
	get time() {
		return yn(this.currentTime)
	}
	set time(n) {
		n = gn(n), this.currentTime = n, this.holdTime !== null || this.speed === 0 ? this.holdTime = n : this.driver && (this.startTime = this.driver.now() - n / this.speed)
	}
	get speed() {
		return this.playbackSpeed
	}
	set speed(n) {
		const i = this.playbackSpeed !== n;
		this.playbackSpeed = n, i && (this.time = yn(this.currentTime))
	}
	play() {
		if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
			this.pendingPlayState = "running";
			return
		}
		if (this.isStopped) return;
		const {
			driver: n = T2,
			onPlay: i,
			startTime: o
		} = this.options;
		this.driver || (this.driver = n(u => this.tick(u))), i && i();
		const a = this.driver.now();
		this.holdTime !== null ? this.startTime = a - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = a) : this.startTime = o ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
	}
	pause() {
		var n;
		if (!this._resolved) {
			this.pendingPlayState = "paused";
			return
		}
		this.state = "paused", this.holdTime = (n = this.currentTime) !== null && n !== void 0 ? n : 0
	}
	complete() {
		this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
	}
	finish() {
		this.teardown(), this.state = "finished";
		const {
			onComplete: n
		} = this.options;
		n && n()
	}
	cancel() {
		this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
	}
	stopDriver() {
		this.driver && (this.driver.stop(), this.driver = void 0)
	}
	sample(n) {
		return this.startTime = 0, this.tick(n, !0)
	}
}
const R2 = new Set(["opacity", "clipPath", "filter", "transform"]);

function _2(e, n, i, {
	delay: o = 0,
	duration: a = 300,
	repeat: u = 0,
	repeatType: c = "loop",
	ease: f = "easeInOut",
	times: p
} = {}) {
	const h = {
		[n]: i
	};
	p && (h.offset = p);
	const g = H0(f, a);
	return Array.isArray(g) && (h.easing = g), e.animate(h, {
		delay: o,
		duration: a,
		easing: Array.isArray(g) ? "linear" : g,
		fill: "both",
		iterations: u + 1,
		direction: c === "reverse" ? "alternate" : "normal"
	})
}
const O2 = bf(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
	ya = 10,
	A2 = 2e4;

function N2(e) {
	return If(e.type) || e.type === "spring" || !U0(e.ease)
}

function j2(e, n) {
	const i = new Yf({
		...n,
		keyframes: e,
		repeat: 0,
		delay: 0,
		isGenerator: !0
	});
	let o = {
		done: !1,
		value: e[0]
	};
	const a = [];
	let u = 0;
	for (; !o.done && u < A2;) o = i.sample(u), a.push(o.value), u += ya;
	return {
		times: void 0,
		keyframes: a,
		duration: u - ya,
		ease: "linear"
	}
}
const Px = {
	anticipate: tx,
	backInOut: ex,
	circInOut: rx
};

function M2(e) {
	return e in Px
}
class xg extends vx {
	constructor(n) {
		super(n);
		const {
			name: i,
			motionValue: o,
			element: a,
			keyframes: u
		} = this.options;
		this.resolver = new yx(u, (c, f) => this.onKeyframesResolved(c, f), i, o, a), this.resolver.scheduleResolve()
	}
	initPlayback(n, i) {
		let {
			duration: o = 300,
			times: a,
			ease: u,
			type: c,
			motionValue: f,
			name: p,
			startTime: h
		} = this.options;
		if (!f.owner || !f.owner.current) return !1;
		if (typeof u == "string" && pa() && M2(u) && (u = Px[u]), N2(this.options)) {
			const {
				onComplete: y,
				onUpdate: v,
				motionValue: x,
				element: b,
				...E
			} = this.options, P = j2(n, E);
			n = P.keyframes, n.length === 1 && (n[1] = n[0]), o = P.duration, a = P.times, u = P.ease, c = "keyframes"
		}
		const g = _2(f.owner.current, p, n, {
			...this.options,
			duration: o,
			times: a,
			ease: u
		});
		return g.startTime = h ?? this.calcStartTime(), this.pendingTimeline ? (rg(g, this.pendingTimeline), this.pendingTimeline = void 0) : g.onfinish = () => {
			const {
				onComplete: y
			} = this.options;
			f.set(Va(n, this.options, i)), y && y(), this.cancel(), this.resolveFinishedPromise()
		}, {
			animation: g,
			duration: o,
			times: a,
			type: c,
			ease: u,
			keyframes: n
		}
	}
	get duration() {
		const {
			resolved: n
		} = this;
		if (!n) return 0;
		const {
			duration: i
		} = n;
		return yn(i)
	}
	get time() {
		const {
			resolved: n
		} = this;
		if (!n) return 0;
		const {
			animation: i
		} = n;
		return yn(i.currentTime || 0)
	}
	set time(n) {
		const {
			resolved: i
		} = this;
		if (!i) return;
		const {
			animation: o
		} = i;
		o.currentTime = gn(n)
	}
	get speed() {
		const {
			resolved: n
		} = this;
		if (!n) return 1;
		const {
			animation: i
		} = n;
		return i.playbackRate
	}
	set speed(n) {
		const {
			resolved: i
		} = this;
		if (!i) return;
		const {
			animation: o
		} = i;
		o.playbackRate = n
	}
	get state() {
		const {
			resolved: n
		} = this;
		if (!n) return "idle";
		const {
			animation: i
		} = n;
		return i.playState
	}
	get startTime() {
		const {
			resolved: n
		} = this;
		if (!n) return null;
		const {
			animation: i
		} = n;
		return i.startTime
	}
	attachTimeline(n) {
		if (!this._resolved) this.pendingTimeline = n;
		else {
			const {
				resolved: i
			} = this;
			if (!i) return St;
			const {
				animation: o
			} = i;
			rg(o, n)
		}
		return St
	}
	play() {
		if (this.isStopped) return;
		const {
			resolved: n
		} = this;
		if (!n) return;
		const {
			animation: i
		} = n;
		i.playState === "finished" && this.updateFinishedPromise(), i.play()
	}
	pause() {
		const {
			resolved: n
		} = this;
		if (!n) return;
		const {
			animation: i
		} = n;
		i.pause()
	}
	stop() {
		if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
		this.resolveFinishedPromise(), this.updateFinishedPromise();
		const {
			resolved: n
		} = this;
		if (!n) return;
		const {
			animation: i,
			keyframes: o,
			duration: a,
			type: u,
			ease: c,
			times: f
		} = n;
		if (i.playState === "idle" || i.playState === "finished") return;
		if (this.time) {
			const {
				motionValue: h,
				onUpdate: g,
				onComplete: y,
				element: v,
				...x
			} = this.options, b = new Yf({
				...x,
				keyframes: o,
				duration: a,
				type: u,
				ease: c,
				times: f,
				isGenerator: !0
			}), E = gn(this.time);
			h.setWithVelocity(b.sample(E - ya).value, b.sample(E).value, ya)
		}
		const {
			onStop: p
		} = this.options;
		p && p(), this.cancel()
	}
	complete() {
		const {
			resolved: n
		} = this;
		n && n.animation.finish()
	}
	cancel() {
		const {
			resolved: n
		} = this;
		n && n.animation.cancel()
	}
	static supports(n) {
		const {
			motionValue: i,
			name: o,
			repeatDelay: a,
			repeatType: u,
			damping: c,
			type: f
		} = n;
		if (!i || !i.owner || !(i.owner.current instanceof HTMLElement)) return !1;
		const {
			onUpdate: p,
			transformTemplate: h
		} = i.owner.getProps();
		return O2() && o && R2.has(o) && !p && !h && !a && u !== "mirror" && c !== 0 && f !== "inertia"
	}
}
const D2 = {
		type: "spring",
		stiffness: 500,
		damping: 25,
		restSpeed: 10
	},
	L2 = e => ({
		type: "spring",
		stiffness: 550,
		damping: e === 0 ? 2 * Math.sqrt(550) : 30,
		restSpeed: 10
	}),
	I2 = {
		type: "keyframes",
		duration: .8
	},
	F2 = {
		type: "keyframes",
		ease: [.25, .1, .35, 1],
		duration: .3
	},
	V2 = (e, {
		keyframes: n
	}) => n.length > 2 ? I2 : vr.has(e) ? e.startsWith("scale") ? L2(n[1]) : D2 : F2;

function z2({
	when: e,
	delay: n,
	delayChildren: i,
	staggerChildren: o,
	staggerDirection: a,
	repeat: u,
	repeatType: c,
	repeatDelay: f,
	from: p,
	elapsed: h,
	...g
}) {
	return !!Object.keys(g).length
}
const Xf = (e, n, i, o = {}, a, u) => c => {
	const f = Lf(o, e) || {},
		p = f.delay || o.delay || 0;
	let {
		elapsed: h = 0
	} = o;
	h = h - gn(p);
	let g = {
		keyframes: Array.isArray(i) ? i : [null, i],
		ease: "easeOut",
		velocity: n.getVelocity(),
		...f,
		delay: -h,
		onUpdate: v => {
			n.set(v), f.onUpdate && f.onUpdate(v)
		},
		onComplete: () => {
			c(), f.onComplete && f.onComplete()
		},
		name: e,
		motionValue: n,
		element: u ? void 0 : a
	};
	z2(f) || (g = {
		...g,
		...V2(e, g)
	}), g.duration && (g.duration = gn(g.duration)), g.repeatDelay && (g.repeatDelay = gn(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
	let y = !1;
	if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0, g.delay === 0 && (y = !0)), y && !u && n.get() !== void 0) {
		const v = Va(g.keyframes, f);
		if (v !== void 0) return _e.update(() => {
			g.onUpdate(v), g.onComplete()
		}), new ok([])
	}
	return !u && xg.supports(g) ? new xg(g) : new Yf(g)
};

function B2({
	protectedKeys: e,
	needsAnimating: n
}, i) {
	const o = e.hasOwnProperty(i) && n[i] !== !0;
	return n[i] = !1, o
}

function Tx(e, n, {
	delay: i = 0,
	transitionOverride: o,
	type: a
} = {}) {
	var u;
	let {
		transition: c = e.getDefaultTransition(),
		transitionEnd: f,
		...p
	} = n;
	o && (c = o);
	const h = [],
		g = a && e.animationState && e.animationState.getState()[a];
	for (const y in p) {
		const v = e.getValue(y, (u = e.latestValues[y]) !== null && u !== void 0 ? u : null),
			x = p[y];
		if (x === void 0 || g && B2(g, y)) continue;
		const b = {
			delay: i,
			...Lf(c || {}, y)
		};
		let E = !1;
		if (window.MotionHandoffAnimation) {
			const C = G0(e);
			if (C) {
				const R = window.MotionHandoffAnimation(C, y, _e);
				R !== null && (b.startTime = R, E = !0)
			}
		}
		Dc(e, y), v.start(Xf(y, v, x, e.shouldReduceMotion && Q0.has(y) ? {
			type: !1
		} : b, e, E));
		const P = v.animation;
		P && h.push(P)
	}
	return f && Promise.all(h).then(() => {
		_e.update(() => {
			f && xk(e, f)
		})
	}), h
}

function Uc(e, n, i = {}) {
	var o;
	const a = Fa(e, n, i.type === "exit" ? (o = e.presenceContext) === null || o === void 0 ? void 0 : o.custom : void 0);
	let {
		transition: u = e.getDefaultTransition() || {}
	} = a || {};
	i.transitionOverride && (u = i.transitionOverride);
	const c = a ? () => Promise.all(Tx(e, a, i)) : () => Promise.resolve(),
		f = e.variantChildren && e.variantChildren.size ? (h = 0) => {
			const {
				delayChildren: g = 0,
				staggerChildren: y,
				staggerDirection: v
			} = u;
			return U2(e, n, g + h, y, v, i)
		} : () => Promise.resolve(),
		{
			when: p
		} = u;
	if (p) {
		const [h, g] = p === "beforeChildren" ? [c, f] : [f, c];
		return h().then(() => g())
	} else return Promise.all([c(), f(i.delay)])
}

function U2(e, n, i = 0, o = 0, a = 1, u) {
	const c = [],
		f = (e.variantChildren.size - 1) * o,
		p = a === 1 ? (h = 0) => h * o : (h = 0) => f - h * o;
	return Array.from(e.variantChildren).sort(H2).forEach((h, g) => {
		h.notify("AnimationStart", n), c.push(Uc(h, n, {
			...u,
			delay: i + p(g)
		}).then(() => h.notify("AnimationComplete", n)))
	}), Promise.all(c)
}

function H2(e, n) {
	return e.sortNodePosition(n)
}

function W2(e, n, i = {}) {
	e.notify("AnimationStart", n);
	let o;
	if (Array.isArray(n)) {
		const a = n.map(u => Uc(e, u, i));
		o = Promise.all(a)
	} else if (typeof n == "string") o = Uc(e, n, i);
	else {
		const a = typeof n == "function" ? Fa(e, n, i.custom) : n;
		o = Promise.all(Tx(e, a, i))
	}
	return o.then(() => {
		e.notify("AnimationComplete", n)
	})
}
const $2 = Pf.length;

function Cx(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		const i = e.parent ? Cx(e.parent) || {} : {};
		return e.props.initial !== void 0 && (i.initial = e.props.initial), i
	}
	const n = {};
	for (let i = 0; i < $2; i++) {
		const o = Pf[i],
			a = e.props[o];
		(uo(a) || a === !1) && (n[o] = a)
	}
	return n
}
const K2 = [...Ef].reverse(),
	Q2 = Ef.length;

function q2(e) {
	return n => Promise.all(n.map(({
		animation: i,
		options: o
	}) => W2(e, i, o)))
}

function G2(e) {
	let n = q2(e),
		i = wg(),
		o = !0;
	const a = p => (h, g) => {
		var y;
		const v = Fa(e, g, p === "exit" ? (y = e.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
		if (v) {
			const {
				transition: x,
				transitionEnd: b,
				...E
			} = v;
			h = {
				...h,
				...E,
				...b
			}
		}
		return h
	};

	function u(p) {
		n = p(e)
	}

	function c(p) {
		const {
			props: h
		} = e, g = Cx(e.parent) || {}, y = [], v = new Set;
		let x = {},
			b = 1 / 0;
		for (let P = 0; P < Q2; P++) {
			const C = K2[P],
				R = i[C],
				_ = h[C] !== void 0 ? h[C] : g[C],
				A = uo(_),
				M = C === p ? R.isActive : null;
			M === !1 && (b = P);
			let L = _ === g[C] && _ !== h[C] && A;
			if (L && o && e.manuallyAnimateOnMount && (L = !1), R.protectedKeys = {
					...x
				}, !R.isActive && M === null || !_ && !R.prevProp || La(_) || typeof _ == "boolean") continue;
			const I = Y2(R.prevProp, _);
			let B = I || C === p && R.isActive && !L && A || P > b && A,
				q = !1;
			const W = Array.isArray(_) ? _ : [_];
			let $ = W.reduce(a(C), {});
			M === !1 && ($ = {});
			const {
				prevResolvedValues: D = {}
			} = R, X = {
				...D,
				...$
			}, U = te => {
				B = !0, v.has(te) && (q = !0, v.delete(te)), R.needsAnimating[te] = !0;
				const H = e.getValue(te);
				H && (H.liveStyle = !1)
			};
			for (const te in X) {
				const H = $[te],
					ee = D[te];
				if (x.hasOwnProperty(te)) continue;
				let Z = !1;
				Nc(H) && Nc(ee) ? Z = !V0(H, ee) : Z = H !== ee, Z ? H != null ? U(te) : v.add(te) : H !== void 0 && v.has(te) ? U(te) : R.protectedKeys[te] = !0
			}
			R.prevProp = _, R.prevResolvedValues = $, R.isActive && (x = {
				...x,
				...$
			}), o && e.blockInitialAnimation && (B = !1), B && (!(L && I) || q) && y.push(...W.map(te => ({
				animation: te,
				options: {
					type: C
				}
			})))
		}
		if (v.size) {
			const P = {};
			v.forEach(C => {
				const R = e.getBaseTarget(C),
					_ = e.getValue(C);
				_ && (_.liveStyle = !0), P[C] = R ?? null
			}), y.push({
				animation: P
			})
		}
		let E = !!y.length;
		return o && (h.initial === !1 || h.initial === h.animate) && !e.manuallyAnimateOnMount && (E = !1), o = !1, E ? n(y) : Promise.resolve()
	}

	function f(p, h) {
		var g;
		if (i[p].isActive === h) return Promise.resolve();
		(g = e.variantChildren) === null || g === void 0 || g.forEach(v => {
			var x;
			return (x = v.animationState) === null || x === void 0 ? void 0 : x.setActive(p, h)
		}), i[p].isActive = h;
		const y = c(p);
		for (const v in i) i[v].protectedKeys = {};
		return y
	}
	return {
		animateChanges: c,
		setActive: f,
		setAnimateFunction: u,
		getState: () => i,
		reset: () => {
			i = wg(), o = !0
		}
	}
}

function Y2(e, n) {
	return typeof n == "string" ? n !== e : Array.isArray(n) ? !V0(n, e) : !1
}

function cr(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	}
}

function wg() {
	return {
		animate: cr(!0),
		whileInView: cr(),
		whileHover: cr(),
		whileTap: cr(),
		whileDrag: cr(),
		whileFocus: cr(),
		exit: cr()
	}
}
class Yn {
	constructor(n) {
		this.isMounted = !1, this.node = n
	}
	update() {}
}
class X2 extends Yn {
	constructor(n) {
		super(n), n.animationState || (n.animationState = G2(n))
	}
	updateAnimationControlsSubscription() {
		const {
			animate: n
		} = this.node.getProps();
		La(n) && (this.unmountControls = n.subscribe(this.node))
	}
	mount() {
		this.updateAnimationControlsSubscription()
	}
	update() {
		const {
			animate: n
		} = this.node.getProps(), {
			animate: i
		} = this.node.prevProps || {};
		n !== i && this.updateAnimationControlsSubscription()
	}
	unmount() {
		var n;
		this.node.animationState.reset(), (n = this.unmountControls) === null || n === void 0 || n.call(this)
	}
}
let Z2 = 0;
class J2 extends Yn {
	constructor() {
		super(...arguments), this.id = Z2++
	}
	update() {
		if (!this.node.presenceContext) return;
		const {
			isPresent: n,
			onExitComplete: i
		} = this.node.presenceContext, {
			isPresent: o
		} = this.node.prevPresenceContext || {};
		if (!this.node.animationState || n === o) return;
		const a = this.node.animationState.setActive("exit", !n);
		i && !n && a.then(() => i(this.id))
	}
	mount() {
		const {
			register: n
		} = this.node.presenceContext || {};
		n && (this.unmount = n(this.id))
	}
	unmount() {}
}
const eR = {
	animation: {
		Feature: X2
	},
	exit: {
		Feature: J2
	}
};

function po(e, n, i, o = {
	passive: !0
}) {
	return e.addEventListener(n, i, o), () => e.removeEventListener(n, i)
}

function So(e) {
	return {
		point: {
			x: e.pageX,
			y: e.pageY
		}
	}
}
const tR = e => n => Vf(n) && e(n, So(n));

function ro(e, n, i, o) {
	return po(e, n, tR(i), o)
}
const Sg = (e, n) => Math.abs(e - n);

function nR(e, n) {
	const i = Sg(e.x, n.x),
		o = Sg(e.y, n.y);
	return Math.sqrt(i ** 2 + o ** 2)
}
class kx {
	constructor(n, i, {
		transformPagePoint: o,
		contextWindow: a,
		dragSnapToOrigin: u = !1
	} = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
				if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
				const y = rc(this.lastMoveEventInfo, this.history),
					v = this.startEvent !== null,
					x = nR(y.offset, {
						x: 0,
						y: 0
					}) >= 3;
				if (!v && !x) return;
				const {
					point: b
				} = y, {
					timestamp: E
				} = Ye;
				this.history.push({
					...b,
					timestamp: E
				});
				const {
					onStart: P,
					onMove: C
				} = this.handlers;
				v || (P && P(this.lastMoveEvent, y), this.startEvent = this.lastMoveEvent), C && C(this.lastMoveEvent, y)
			}, this.handlePointerMove = (y, v) => {
				this.lastMoveEvent = y, this.lastMoveEventInfo = nc(v, this.transformPagePoint), _e.update(this.updatePoint, !0)
			}, this.handlePointerUp = (y, v) => {
				this.end();
				const {
					onEnd: x,
					onSessionEnd: b,
					resumeAnimation: E
				} = this.handlers;
				if (this.dragSnapToOrigin && E && E(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
				const P = rc(y.type === "pointercancel" ? this.lastMoveEventInfo : nc(v, this.transformPagePoint), this.history);
				this.startEvent && x && x(y, P), b && b(y, P)
			}, !Vf(n)) return;
		this.dragSnapToOrigin = u, this.handlers = i, this.transformPagePoint = o, this.contextWindow = a || window;
		const c = So(n),
			f = nc(c, this.transformPagePoint),
			{
				point: p
			} = f,
			{
				timestamp: h
			} = Ye;
		this.history = [{
			...p,
			timestamp: h
		}];
		const {
			onSessionStart: g
		} = i;
		g && g(n, rc(f, this.history)), this.removeListeners = wo(ro(this.contextWindow, "pointermove", this.handlePointerMove), ro(this.contextWindow, "pointerup", this.handlePointerUp), ro(this.contextWindow, "pointercancel", this.handlePointerUp))
	}
	updateHandlers(n) {
		this.handlers = n
	}
	end() {
		this.removeListeners && this.removeListeners(), qn(this.updatePoint)
	}
}

function nc(e, n) {
	return n ? {
		point: n(e.point)
	} : e
}

function bg(e, n) {
	return {
		x: e.x - n.x,
		y: e.y - n.y
	}
}

function rc({
	point: e
}, n) {
	return {
		point: e,
		delta: bg(e, Rx(n)),
		offset: bg(e, rR(n)),
		velocity: iR(n, .1)
	}
}

function rR(e) {
	return e[0]
}

function Rx(e) {
	return e[e.length - 1]
}

function iR(e, n) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let i = e.length - 1,
		o = null;
	const a = Rx(e);
	for (; i >= 0 && (o = e[i], !(a.timestamp - o.timestamp > gn(n)));) i--;
	if (!o) return {
		x: 0,
		y: 0
	};
	const u = yn(a.timestamp - o.timestamp);
	if (u === 0) return {
		x: 0,
		y: 0
	};
	const c = {
		x: (a.x - o.x) / u,
		y: (a.y - o.y) / u
	};
	return c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c
}
const _x = 1e-4,
	oR = 1 - _x,
	sR = 1 + _x,
	Ox = .01,
	aR = 0 - Ox,
	lR = 0 + Ox;

function bt(e) {
	return e.max - e.min
}

function uR(e, n, i) {
	return Math.abs(e - n) <= i
}

function Eg(e, n, i, o = .5) {
	e.origin = o, e.originPoint = De(n.min, n.max, e.origin), e.scale = bt(i) / bt(n), e.translate = De(i.min, i.max, e.origin) - e.originPoint, (e.scale >= oR && e.scale <= sR || isNaN(e.scale)) && (e.scale = 1), (e.translate >= aR && e.translate <= lR || isNaN(e.translate)) && (e.translate = 0)
}

function io(e, n, i, o) {
	Eg(e.x, n.x, i.x, o ? o.originX : void 0), Eg(e.y, n.y, i.y, o ? o.originY : void 0)
}

function Pg(e, n, i) {
	e.min = i.min + n.min, e.max = e.min + bt(n)
}

function cR(e, n, i) {
	Pg(e.x, n.x, i.x), Pg(e.y, n.y, i.y)
}

function Tg(e, n, i) {
	e.min = n.min - i.min, e.max = e.min + bt(n)
}

function oo(e, n, i) {
	Tg(e.x, n.x, i.x), Tg(e.y, n.y, i.y)
}

function fR(e, {
	min: n,
	max: i
}, o) {
	return n !== void 0 && e < n ? e = o ? De(n, e, o.min) : Math.max(e, n) : i !== void 0 && e > i && (e = o ? De(i, e, o.max) : Math.min(e, i)), e
}

function Cg(e, n, i) {
	return {
		min: n !== void 0 ? e.min + n : void 0,
		max: i !== void 0 ? e.max + i - (e.max - e.min) : void 0
	}
}

function dR(e, {
	top: n,
	left: i,
	bottom: o,
	right: a
}) {
	return {
		x: Cg(e.x, i, a),
		y: Cg(e.y, n, o)
	}
}

function kg(e, n) {
	let i = n.min - e.min,
		o = n.max - e.max;
	return n.max - n.min < e.max - e.min && ([i, o] = [o, i]), {
		min: i,
		max: o
	}
}

function hR(e, n) {
	return {
		x: kg(e.x, n.x),
		y: kg(e.y, n.y)
	}
}

function pR(e, n) {
	let i = .5;
	const o = bt(e),
		a = bt(n);
	return a > o ? i = ei(n.min, n.max - o, e.min) : o > a && (i = ei(e.min, e.max - a, n.min)), wn(0, 1, i)
}

function mR(e, n) {
	const i = {};
	return n.min !== void 0 && (i.min = n.min - e.min), n.max !== void 0 && (i.max = n.max - e.min), i
}
const Hc = .35;

function gR(e = Hc) {
	return e === !1 ? e = 0 : e === !0 && (e = Hc), {
		x: Rg(e, "left", "right"),
		y: Rg(e, "top", "bottom")
	}
}

function Rg(e, n, i) {
	return {
		min: _g(e, n),
		max: _g(e, i)
	}
}

function _g(e, n) {
	return typeof e == "number" ? e : e[n] || 0
}
const Og = () => ({
		translate: 0,
		scale: 1,
		origin: 0,
		originPoint: 0
	}),
	Qr = () => ({
		x: Og(),
		y: Og()
	}),
	Ag = () => ({
		min: 0,
		max: 0
	}),
	ze = () => ({
		x: Ag(),
		y: Ag()
	});

function jt(e) {
	return [e("x"), e("y")]
}

function Ax({
	top: e,
	left: n,
	right: i,
	bottom: o
}) {
	return {
		x: {
			min: n,
			max: i
		},
		y: {
			min: e,
			max: o
		}
	}
}

function yR({
	x: e,
	y: n
}) {
	return {
		top: n.min,
		right: e.max,
		bottom: n.max,
		left: e.min
	}
}

function vR(e, n) {
	if (!n) return e;
	const i = n({
			x: e.left,
			y: e.top
		}),
		o = n({
			x: e.right,
			y: e.bottom
		});
	return {
		top: i.y,
		left: i.x,
		bottom: o.y,
		right: o.x
	}
}

function ic(e) {
	return e === void 0 || e === 1
}

function Wc({
	scale: e,
	scaleX: n,
	scaleY: i
}) {
	return !ic(e) || !ic(n) || !ic(i)
}

function fr(e) {
	return Wc(e) || Nx(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function Nx(e) {
	return Ng(e.x) || Ng(e.y)
}

function Ng(e) {
	return e && e !== "0%"
}

function va(e, n, i) {
	const o = e - i,
		a = n * o;
	return i + a
}

function jg(e, n, i, o, a) {
	return a !== void 0 && (e = va(e, a, o)), va(e, i, o) + n
}

function $c(e, n = 0, i = 1, o, a) {
	e.min = jg(e.min, n, i, o, a), e.max = jg(e.max, n, i, o, a)
}

function jx(e, {
	x: n,
	y: i
}) {
	$c(e.x, n.translate, n.scale, n.originPoint), $c(e.y, i.translate, i.scale, i.originPoint)
}
const Mg = .999999999999,
	Dg = 1.0000000000001;

function xR(e, n, i, o = !1) {
	const a = i.length;
	if (!a) return;
	n.x = n.y = 1;
	let u, c;
	for (let f = 0; f < a; f++) {
		u = i[f], c = u.projectionDelta;
		const {
			visualElement: p
		} = u.options;
		p && p.props.style && p.props.style.display === "contents" || (o && u.options.layoutScroll && u.scroll && u !== u.root && Gr(e, {
			x: -u.scroll.offset.x,
			y: -u.scroll.offset.y
		}), c && (n.x *= c.x.scale, n.y *= c.y.scale, jx(e, c)), o && fr(u.latestValues) && Gr(e, u.latestValues))
	}
	n.x < Dg && n.x > Mg && (n.x = 1), n.y < Dg && n.y > Mg && (n.y = 1)
}

function qr(e, n) {
	e.min = e.min + n, e.max = e.max + n
}

function Lg(e, n, i, o, a = .5) {
	const u = De(e.min, e.max, a);
	$c(e, n, i, u, o)
}

function Gr(e, n) {
	Lg(e.x, n.x, n.scaleX, n.scale, n.originX), Lg(e.y, n.y, n.scaleY, n.scale, n.originY)
}

function Mx(e, n) {
	return Ax(vR(e.getBoundingClientRect(), n))
}

function wR(e, n, i) {
	const o = Mx(e, i),
		{
			scroll: a
		} = n;
	return a && (qr(o.x, a.offset.x), qr(o.y, a.offset.y)), o
}
const Dx = ({
		current: e
	}) => e ? e.ownerDocument.defaultView : null,
	SR = new WeakMap;
class bR {
	constructor(n) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ze(), this.visualElement = n
	}
	start(n, {
		snapToCursor: i = !1
	} = {}) {
		const {
			presenceContext: o
		} = this.visualElement;
		if (o && o.isPresent === !1) return;
		const a = g => {
				const {
					dragSnapToOrigin: y
				} = this.getProps();
				y ? this.pauseAnimation() : this.stopAnimation(), i && this.snapToCursor(So(g).point)
			},
			u = (g, y) => {
				const {
					drag: v,
					dragPropagation: x,
					onDragStart: b
				} = this.getProps();
				if (v && !x && (this.openDragLock && this.openDragLock(), this.openDragLock = pk(v), !this.openDragLock)) return;
				this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), jt(P => {
					let C = this.getAxisMotionValue(P).get() || 0;
					if (en.test(C)) {
						const {
							projection: R
						} = this.visualElement;
						if (R && R.layout) {
							const _ = R.layout.layoutBox[P];
							_ && (C = bt(_) * (parseFloat(C) / 100))
						}
					}
					this.originPoint[P] = C
				}), b && _e.postRender(() => b(g, y)), Dc(this.visualElement, "transform");
				const {
					animationState: E
				} = this.visualElement;
				E && E.setActive("whileDrag", !0)
			},
			c = (g, y) => {
				const {
					dragPropagation: v,
					dragDirectionLock: x,
					onDirectionLock: b,
					onDrag: E
				} = this.getProps();
				if (!v && !this.openDragLock) return;
				const {
					offset: P
				} = y;
				if (x && this.currentDirection === null) {
					this.currentDirection = ER(P), this.currentDirection !== null && b && b(this.currentDirection);
					return
				}
				this.updateAxis("x", y.point, P), this.updateAxis("y", y.point, P), this.visualElement.render(), E && E(g, y)
			},
			f = (g, y) => this.stop(g, y),
			p = () => jt(g => {
				var y;
				return this.getAnimationState(g) === "paused" && ((y = this.getAxisMotionValue(g).animation) === null || y === void 0 ? void 0 : y.play())
			}),
			{
				dragSnapToOrigin: h
			} = this.getProps();
		this.panSession = new kx(n, {
			onSessionStart: a,
			onStart: u,
			onMove: c,
			onSessionEnd: f,
			resumeAnimation: p
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: h,
			contextWindow: Dx(this.visualElement)
		})
	}
	stop(n, i) {
		const o = this.isDragging;
		if (this.cancel(), !o) return;
		const {
			velocity: a
		} = i;
		this.startAnimation(a);
		const {
			onDragEnd: u
		} = this.getProps();
		u && _e.postRender(() => u(n, i))
	}
	cancel() {
		this.isDragging = !1;
		const {
			projection: n,
			animationState: i
		} = this.visualElement;
		n && (n.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
		const {
			dragPropagation: o
		} = this.getProps();
		!o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), i && i.setActive("whileDrag", !1)
	}
	updateAxis(n, i, o) {
		const {
			drag: a
		} = this.getProps();
		if (!o || !Vs(n, a, this.currentDirection)) return;
		const u = this.getAxisMotionValue(n);
		let c = this.originPoint[n] + o[n];
		this.constraints && this.constraints[n] && (c = fR(c, this.constraints[n], this.elastic[n])), u.set(c)
	}
	resolveConstraints() {
		var n;
		const {
			dragConstraints: i,
			dragElastic: o
		} = this.getProps(), a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (n = this.visualElement.projection) === null || n === void 0 ? void 0 : n.layout, u = this.constraints;
		i && $r(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && a ? this.constraints = dR(a.layoutBox, i) : this.constraints = !1, this.elastic = gR(o), u !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && jt(c => {
			this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = mR(a.layoutBox[c], this.constraints[c]))
		})
	}
	resolveRefConstraints() {
		const {
			dragConstraints: n,
			onMeasureDragConstraints: i
		} = this.getProps();
		if (!n || !$r(n)) return !1;
		const o = n.current,
			{
				projection: a
			} = this.visualElement;
		if (!a || !a.layout) return !1;
		const u = wR(o, a.root, this.visualElement.getTransformPagePoint());
		let c = hR(a.layout.layoutBox, u);
		if (i) {
			const f = i(yR(c));
			this.hasMutatedConstraints = !!f, f && (c = Ax(f))
		}
		return c
	}
	startAnimation(n) {
		const {
			drag: i,
			dragMomentum: o,
			dragElastic: a,
			dragTransition: u,
			dragSnapToOrigin: c,
			onDragTransitionEnd: f
		} = this.getProps(), p = this.constraints || {}, h = jt(g => {
			if (!Vs(g, i, this.currentDirection)) return;
			let y = p && p[g] || {};
			c && (y = {
				min: 0,
				max: 0
			});
			const v = a ? 200 : 1e6,
				x = a ? 40 : 1e7,
				b = {
					type: "inertia",
					velocity: o ? n[g] : 0,
					bounceStiffness: v,
					bounceDamping: x,
					timeConstant: 750,
					restDelta: 1,
					restSpeed: 10,
					...u,
					...y
				};
			return this.startAxisValueAnimation(g, b)
		});
		return Promise.all(h).then(f)
	}
	startAxisValueAnimation(n, i) {
		const o = this.getAxisMotionValue(n);
		return Dc(this.visualElement, n), o.start(Xf(n, o, 0, i, this.visualElement, !1))
	}
	stopAnimation() {
		jt(n => this.getAxisMotionValue(n).stop())
	}
	pauseAnimation() {
		jt(n => {
			var i;
			return (i = this.getAxisMotionValue(n).animation) === null || i === void 0 ? void 0 : i.pause()
		})
	}
	getAnimationState(n) {
		var i;
		return (i = this.getAxisMotionValue(n).animation) === null || i === void 0 ? void 0 : i.state
	}
	getAxisMotionValue(n) {
		const i = `_drag${n.toUpperCase()}`,
			o = this.visualElement.getProps(),
			a = o[i];
		return a || this.visualElement.getValue(n, (o.initial ? o.initial[n] : void 0) || 0)
	}
	snapToCursor(n) {
		jt(i => {
			const {
				drag: o
			} = this.getProps();
			if (!Vs(i, o, this.currentDirection)) return;
			const {
				projection: a
			} = this.visualElement, u = this.getAxisMotionValue(i);
			if (a && a.layout) {
				const {
					min: c,
					max: f
				} = a.layout.layoutBox[i];
				u.set(n[i] - De(c, f, .5))
			}
		})
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const {
			drag: n,
			dragConstraints: i
		} = this.getProps(), {
			projection: o
		} = this.visualElement;
		if (!$r(i) || !o || !this.constraints) return;
		this.stopAnimation();
		const a = {
			x: 0,
			y: 0
		};
		jt(c => {
			const f = this.getAxisMotionValue(c);
			if (f && this.constraints !== !1) {
				const p = f.get();
				a[c] = pR({
					min: p,
					max: p
				}, this.constraints[c])
			}
		});
		const {
			transformTemplate: u
		} = this.visualElement.getProps();
		this.visualElement.current.style.transform = u ? u({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), jt(c => {
			if (!Vs(c, n, null)) return;
			const f = this.getAxisMotionValue(c),
				{
					min: p,
					max: h
				} = this.constraints[c];
			f.set(De(p, h, a[c]))
		})
	}
	addListeners() {
		if (!this.visualElement.current) return;
		SR.set(this.visualElement, this);
		const n = this.visualElement.current,
			i = ro(n, "pointerdown", p => {
				const {
					drag: h,
					dragListener: g = !0
				} = this.getProps();
				h && g && this.start(p)
			}),
			o = () => {
				const {
					dragConstraints: p
				} = this.getProps();
				$r(p) && p.current && (this.constraints = this.resolveRefConstraints())
			},
			{
				projection: a
			} = this.visualElement,
			u = a.addEventListener("measure", o);
		a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()), _e.read(o);
		const c = po(window, "resize", () => this.scalePositionWithinConstraints()),
			f = a.addEventListener("didUpdate", (({
				delta: p,
				hasLayoutChanged: h
			}) => {
				this.isDragging && h && (jt(g => {
					const y = this.getAxisMotionValue(g);
					y && (this.originPoint[g] += p[g].translate, y.set(y.get() + p[g].translate))
				}), this.visualElement.render())
			}));
		return () => {
			c(), i(), u(), f && f()
		}
	}
	getProps() {
		const n = this.visualElement.getProps(),
			{
				drag: i = !1,
				dragDirectionLock: o = !1,
				dragPropagation: a = !1,
				dragConstraints: u = !1,
				dragElastic: c = Hc,
				dragMomentum: f = !0
			} = n;
		return {
			...n,
			drag: i,
			dragDirectionLock: o,
			dragPropagation: a,
			dragConstraints: u,
			dragElastic: c,
			dragMomentum: f
		}
	}
}

function Vs(e, n, i) {
	return (n === !0 || n === e) && (i === null || i === e)
}

function ER(e, n = 10) {
	let i = null;
	return Math.abs(e.y) > n ? i = "y" : Math.abs(e.x) > n && (i = "x"), i
}
class PR extends Yn {
	constructor(n) {
		super(n), this.removeGroupControls = St, this.removeListeners = St, this.controls = new bR(n)
	}
	mount() {
		const {
			dragControls: n
		} = this.node.getProps();
		n && (this.removeGroupControls = n.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || St
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners()
	}
}
const Ig = e => (n, i) => {
	e && _e.postRender(() => e(n, i))
};
class TR extends Yn {
	constructor() {
		super(...arguments), this.removePointerDownListener = St
	}
	onPointerDown(n) {
		this.session = new kx(n, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: Dx(this.node)
		})
	}
	createPanHandlers() {
		const {
			onPanSessionStart: n,
			onPanStart: i,
			onPan: o,
			onPanEnd: a
		} = this.node.getProps();
		return {
			onSessionStart: Ig(n),
			onStart: Ig(i),
			onMove: o,
			onEnd: (u, c) => {
				delete this.session, a && _e.postRender(() => a(u, c))
			}
		}
	}
	mount() {
		this.removePointerDownListener = ro(this.node.current, "pointerdown", n => this.onPointerDown(n))
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers())
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end()
	}
}
const sa = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
};

function Fg(e, n) {
	return n.max === n.min ? 0 : e / (n.max - n.min) * 100
}
const Yi = {
		correct: (e, n) => {
			if (!n.target) return e;
			if (typeof e == "string")
				if (he.test(e)) e = parseFloat(e);
				else return e;
			const i = Fg(e, n.target.x),
				o = Fg(e, n.target.y);
			return `${i}% ${o}%`
		}
	},
	CR = {
		correct: (e, {
			treeScale: n,
			projectionDelta: i
		}) => {
			const o = e,
				a = Gn.parse(e);
			if (a.length > 5) return o;
			const u = Gn.createTransformer(e),
				c = typeof a[0] != "number" ? 1 : 0,
				f = i.x.scale * n.x,
				p = i.y.scale * n.y;
			a[0 + c] /= f, a[1 + c] /= p;
			const h = De(f, p, .5);
			return typeof a[2 + c] == "number" && (a[2 + c] /= h), typeof a[3 + c] == "number" && (a[3 + c] /= h), u(a)
		}
	};
class kR extends T.Component {
	componentDidMount() {
		const {
			visualElement: n,
			layoutGroup: i,
			switchLayoutGroup: o,
			layoutId: a
		} = this.props, {
			projection: u
		} = n;
		QC(RR), u && (i.group && i.group.add(u), o && o.register && a && o.register(u), u.root.didUpdate(), u.addEventListener("animationComplete", () => {
			this.safeToRemove()
		}), u.setOptions({
			...u.options,
			onExitComplete: () => this.safeToRemove()
		})), sa.hasEverUpdated = !0
	}
	getSnapshotBeforeUpdate(n) {
		const {
			layoutDependency: i,
			visualElement: o,
			drag: a,
			isPresent: u
		} = this.props, c = o.projection;
		return c && (c.isPresent = u, a || n.layoutDependency !== i || i === void 0 ? c.willUpdate() : this.safeToRemove(), n.isPresent !== u && (u ? c.promote() : c.relegate() || _e.postRender(() => {
			const f = c.getStack();
			(!f || !f.members.length) && this.safeToRemove()
		}))), null
	}
	componentDidUpdate() {
		const {
			projection: n
		} = this.props.visualElement;
		n && (n.root.didUpdate(), Cf.postRender(() => {
			!n.currentAnimation && n.isLead() && this.safeToRemove()
		}))
	}
	componentWillUnmount() {
		const {
			visualElement: n,
			layoutGroup: i,
			switchLayoutGroup: o
		} = this.props, {
			projection: a
		} = n;
		a && (a.scheduleCheckAfterUnmount(), i && i.group && i.group.remove(a), o && o.deregister && o.deregister(a))
	}
	safeToRemove() {
		const {
			safeToRemove: n
		} = this.props;
		n && n()
	}
	render() {
		return null
	}
}

function Lx(e) {
	const [n, i] = v0(), o = T.useContext(vf);
	return S.jsx(kR, {
		...e,
		layoutGroup: o,
		switchLayoutGroup: T.useContext(C0),
		isPresent: n,
		safeToRemove: i
	})
}
const RR = {
	borderRadius: {
		...Yi,
		applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
	},
	borderTopLeftRadius: Yi,
	borderTopRightRadius: Yi,
	borderBottomLeftRadius: Yi,
	borderBottomRightRadius: Yi,
	boxShadow: CR
};

function _R(e, n, i) {
	const o = rt(e) ? e : fo(e);
	return o.start(Xf("", o, n, i)), o.animation
}

function OR(e) {
	return e instanceof SVGElement && e.tagName !== "svg"
}
const AR = (e, n) => e.depth - n.depth;
class NR {
	constructor() {
		this.children = [], this.isDirty = !1
	}
	add(n) {
		zf(this.children, n), this.isDirty = !0
	}
	remove(n) {
		Bf(this.children, n), this.isDirty = !0
	}
	forEach(n) {
		this.isDirty && this.children.sort(AR), this.isDirty = !1, this.children.forEach(n)
	}
}

function jR(e, n) {
	const i = tn.now(),
		o = ({
			timestamp: a
		}) => {
			const u = a - i;
			u >= n && (qn(o), e(u - n))
		};
	return _e.read(o, !0), () => qn(o)
}
const Ix = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
	MR = Ix.length,
	Vg = e => typeof e == "string" ? parseFloat(e) : e,
	zg = e => typeof e == "number" || he.test(e);

function DR(e, n, i, o, a, u) {
	a ? (e.opacity = De(0, i.opacity !== void 0 ? i.opacity : 1, LR(o)), e.opacityExit = De(n.opacity !== void 0 ? n.opacity : 1, 0, IR(o))) : u && (e.opacity = De(n.opacity !== void 0 ? n.opacity : 1, i.opacity !== void 0 ? i.opacity : 1, o));
	for (let c = 0; c < MR; c++) {
		const f = `border${Ix[c]}Radius`;
		let p = Bg(n, f),
			h = Bg(i, f);
		if (p === void 0 && h === void 0) continue;
		p || (p = 0), h || (h = 0), p === 0 || h === 0 || zg(p) === zg(h) ? (e[f] = Math.max(De(Vg(p), Vg(h), o), 0), (en.test(h) || en.test(p)) && (e[f] += "%")) : e[f] = h
	}(n.rotate || i.rotate) && (e.rotate = De(n.rotate || 0, i.rotate || 0, o))
}

function Bg(e, n) {
	return e[n] !== void 0 ? e[n] : e.borderRadius
}
const LR = Fx(0, .5, nx),
	IR = Fx(.5, .95, St);

function Fx(e, n, i) {
	return o => o < e ? 0 : o > n ? 1 : i(ei(e, n, o))
}

function Ug(e, n) {
	e.min = n.min, e.max = n.max
}

function Nt(e, n) {
	Ug(e.x, n.x), Ug(e.y, n.y)
}

function Hg(e, n) {
	e.translate = n.translate, e.scale = n.scale, e.originPoint = n.originPoint, e.origin = n.origin
}

function Wg(e, n, i, o, a) {
	return e -= n, e = va(e, 1 / i, o), a !== void 0 && (e = va(e, 1 / a, o)), e
}

function FR(e, n = 0, i = 1, o = .5, a, u = e, c = e) {
	if (en.test(n) && (n = parseFloat(n), n = De(c.min, c.max, n / 100) - c.min), typeof n != "number") return;
	let f = De(u.min, u.max, o);
	e === u && (f -= n), e.min = Wg(e.min, n, i, f, a), e.max = Wg(e.max, n, i, f, a)
}

function $g(e, n, [i, o, a], u, c) {
	FR(e, n[i], n[o], n[a], n.scale, u, c)
}
const VR = ["x", "scaleX", "originX"],
	zR = ["y", "scaleY", "originY"];

function Kg(e, n, i, o) {
	$g(e.x, n, VR, i ? i.x : void 0, o ? o.x : void 0), $g(e.y, n, zR, i ? i.y : void 0, o ? o.y : void 0)
}

function Qg(e) {
	return e.translate === 0 && e.scale === 1
}

function Vx(e) {
	return Qg(e.x) && Qg(e.y)
}

function qg(e, n) {
	return e.min === n.min && e.max === n.max
}

function BR(e, n) {
	return qg(e.x, n.x) && qg(e.y, n.y)
}

function Gg(e, n) {
	return Math.round(e.min) === Math.round(n.min) && Math.round(e.max) === Math.round(n.max)
}

function zx(e, n) {
	return Gg(e.x, n.x) && Gg(e.y, n.y)
}

function Yg(e) {
	return bt(e.x) / bt(e.y)
}

function Xg(e, n) {
	return e.translate === n.translate && e.scale === n.scale && e.originPoint === n.originPoint
}
class UR {
	constructor() {
		this.members = []
	}
	add(n) {
		zf(this.members, n), n.scheduleRender()
	}
	remove(n) {
		if (Bf(this.members, n), n === this.prevLead && (this.prevLead = void 0), n === this.lead) {
			const i = this.members[this.members.length - 1];
			i && this.promote(i)
		}
	}
	relegate(n) {
		const i = this.members.findIndex(a => n === a);
		if (i === 0) return !1;
		let o;
		for (let a = i; a >= 0; a--) {
			const u = this.members[a];
			if (u.isPresent !== !1) {
				o = u;
				break
			}
		}
		return o ? (this.promote(o), !0) : !1
	}
	promote(n, i) {
		const o = this.lead;
		if (n !== o && (this.prevLead = o, this.lead = n, n.show(), o)) {
			o.instance && o.scheduleRender(), n.scheduleRender(), n.resumeFrom = o, i && (n.resumeFrom.preserveOpacity = !0), o.snapshot && (n.snapshot = o.snapshot, n.snapshot.latestValues = o.animationValues || o.latestValues), n.root && n.root.isUpdating && (n.isLayoutDirty = !0);
			const {
				crossfade: a
			} = n.options;
			a === !1 && o.hide()
		}
	}
	exitAnimationComplete() {
		this.members.forEach(n => {
			const {
				options: i,
				resumingFrom: o
			} = n;
			i.onExitComplete && i.onExitComplete(), o && o.options.onExitComplete && o.options.onExitComplete()
		})
	}
	scheduleRender() {
		this.members.forEach(n => {
			n.instance && n.scheduleRender(!1)
		})
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
	}
}

function HR(e, n, i) {
	let o = "";
	const a = e.x.translate / n.x,
		u = e.y.translate / n.y,
		c = i?.z || 0;
	if ((a || u || c) && (o = `translate3d(${a}px, ${u}px, ${c}px) `), (n.x !== 1 || n.y !== 1) && (o += `scale(${1/n.x}, ${1/n.y}) `), i) {
		const {
			transformPerspective: h,
			rotate: g,
			rotateX: y,
			rotateY: v,
			skewX: x,
			skewY: b
		} = i;
		h && (o = `perspective(${h}px) ${o}`), g && (o += `rotate(${g}deg) `), y && (o += `rotateX(${y}deg) `), v && (o += `rotateY(${v}deg) `), x && (o += `skewX(${x}deg) `), b && (o += `skewY(${b}deg) `)
	}
	const f = e.x.scale * n.x,
		p = e.y.scale * n.y;
	return (f !== 1 || p !== 1) && (o += `scale(${f}, ${p})`), o || "none"
}
const dr = {
		type: "projectionFrame",
		totalNodes: 0,
		resolvedTargetDeltas: 0,
		recalculatedProjection: 0
	},
	eo = typeof window < "u" && window.MotionDebug !== void 0,
	oc = ["", "X", "Y", "Z"],
	WR = {
		visibility: "hidden"
	},
	Zg = 1e3;
let $R = 0;

function sc(e, n, i, o) {
	const {
		latestValues: a
	} = n;
	a[e] && (i[e] = a[e], n.setStaticValue(e, 0), o && (o[e] = 0))
}

function Bx(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	const {
		visualElement: n
	} = e.options;
	if (!n) return;
	const i = G0(n);
	if (window.MotionHasOptimisedAnimation(i, "transform")) {
		const {
			layout: a,
			layoutId: u
		} = e.options;
		window.MotionCancelOptimisedAnimation(i, "transform", _e, !(a || u))
	}
	const {
		parent: o
	} = e;
	o && !o.hasCheckedOptimisedAppear && Bx(o)
}

function Ux({
	attachResizeListener: e,
	defaultParent: n,
	measureScroll: i,
	checkIsScrollRoot: o,
	resetTransform: a
}) {
	return class {
		constructor(c = {}, f = n?.()) {
			this.id = $R++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, eo && (dr.totalNodes = dr.resolvedTargetDeltas = dr.recalculatedProjection = 0), this.nodes.forEach(qR), this.nodes.forEach(JR), this.nodes.forEach(e_), this.nodes.forEach(GR), eo && window.MotionDebug.record(dr)
			}, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = c, this.root = f ? f.root || f : this, this.path = f ? [...f.path, f] : [], this.parent = f, this.depth = f ? f.depth + 1 : 0;
			for (let p = 0; p < this.path.length; p++) this.path[p].shouldResetTransform = !0;
			this.root === this && (this.nodes = new NR)
		}
		addEventListener(c, f) {
			return this.eventHandlers.has(c) || this.eventHandlers.set(c, new Uf), this.eventHandlers.get(c).add(f)
		}
		notifyListeners(c, ...f) {
			const p = this.eventHandlers.get(c);
			p && p.notify(...f)
		}
		hasListeners(c) {
			return this.eventHandlers.has(c)
		}
		mount(c, f = this.root.hasTreeAnimated) {
			if (this.instance) return;
			this.isSVG = OR(c), this.instance = c;
			const {
				layoutId: p,
				layout: h,
				visualElement: g
			} = this.options;
			if (g && !g.current && g.mount(c), this.root.nodes.add(this), this.parent && this.parent.children.add(this), f && (h || p) && (this.isLayoutDirty = !0), e) {
				let y;
				const v = () => this.root.updateBlockedByResize = !1;
				e(c, () => {
					this.root.updateBlockedByResize = !0, y && y(), y = jR(v, 250), sa.hasAnimatedSinceResize && (sa.hasAnimatedSinceResize = !1, this.nodes.forEach(ey))
				})
			}
			p && this.root.registerSharedNode(p, this), this.options.animate !== !1 && g && (p || h) && this.addEventListener("didUpdate", ({
				delta: y,
				hasLayoutChanged: v,
				hasRelativeTargetChanged: x,
				layout: b
			}) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return
				}
				const E = this.options.transition || g.getDefaultTransition() || o_,
					{
						onLayoutAnimationStart: P,
						onLayoutAnimationComplete: C
					} = g.getProps(),
					R = !this.targetLayout || !zx(this.targetLayout, b) || x,
					_ = !v && x;
				if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || _ || v && (R || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(y, _);
					const A = {
						...Lf(E, "layout"),
						onPlay: P,
						onComplete: C
					};
					(g.shouldReduceMotion || this.options.layoutRoot) && (A.delay = 0, A.type = !1), this.startAnimation(A)
				} else v || ey(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = b
			})
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			const c = this.getStack();
			c && c.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, qn(this.updateProjection)
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(t_), this.animationId++)
		}
		getTransformTemplate() {
			const {
				visualElement: c
			} = this.options;
			return c && c.getProps().transformTemplate
		}
		willUpdate(c = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Bx(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let g = 0; g < this.path.length; g++) {
				const y = this.path[g];
				y.shouldResetTransform = !0, y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1)
			}
			const {
				layoutId: f,
				layout: p
			} = this.options;
			if (f === void 0 && !p) return;
			const h = this.getTransformTemplate();
			this.prevTransformTemplateValue = h ? h(this.latestValues, "") : void 0, this.updateSnapshot(), c && this.notifyListeners("willUpdate")
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Jg);
				return
			}
			this.isUpdating || this.nodes.forEach(XR), this.isUpdating = !1, this.nodes.forEach(ZR), this.nodes.forEach(KR), this.nodes.forEach(QR), this.clearAllSnapshots();
			const f = tn.now();
			Ye.delta = wn(0, 1e3 / 60, f - Ye.timestamp), Ye.timestamp = f, Ye.isProcessing = !0, Yu.update.process(Ye), Yu.preRender.process(Ye), Yu.render.process(Ye), Ye.isProcessing = !1
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, Cf.read(this.scheduleUpdate))
		}
		clearAllSnapshots() {
			this.nodes.forEach(YR), this.sharedNodes.forEach(n_)
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, _e.preRender(this.updateProjection, !1, !0))
		}
		scheduleCheckAfterUnmount() {
			_e.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
			})
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure())
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance)
				for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
			const c = this.layout;
			this.layout = this.measure(!1), this.layoutCorrected = ze(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			const {
				visualElement: f
			} = this.options;
			f && f.notify("LayoutMeasure", this.layout.layoutBox, c ? c.layoutBox : void 0)
		}
		updateScroll(c = "measure") {
			let f = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === c && (f = !1), f) {
				const p = o(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: c,
					isRoot: p,
					offset: i(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : p
				}
			}
		}
		resetTransform() {
			if (!a) return;
			const c = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
				f = this.projectionDelta && !Vx(this.projectionDelta),
				p = this.getTransformTemplate(),
				h = p ? p(this.latestValues, "") : void 0,
				g = h !== this.prevTransformTemplateValue;
			c && (f || fr(this.latestValues) || g) && (a(this.instance, h), this.shouldResetTransform = !1, this.scheduleRender())
		}
		measure(c = !0) {
			const f = this.measurePageBox();
			let p = this.removeElementScroll(f);
			return c && (p = this.removeTransform(p)), s_(p), {
				animationId: this.root.animationId,
				measuredBox: f,
				layoutBox: p,
				latestValues: {},
				source: this.id
			}
		}
		measurePageBox() {
			var c;
			const {
				visualElement: f
			} = this.options;
			if (!f) return ze();
			const p = f.measureViewportBox();
			if (!(((c = this.scroll) === null || c === void 0 ? void 0 : c.wasRoot) || this.path.some(a_))) {
				const {
					scroll: g
				} = this.root;
				g && (qr(p.x, g.offset.x), qr(p.y, g.offset.y))
			}
			return p
		}
		removeElementScroll(c) {
			var f;
			const p = ze();
			if (Nt(p, c), !((f = this.scroll) === null || f === void 0) && f.wasRoot) return p;
			for (let h = 0; h < this.path.length; h++) {
				const g = this.path[h],
					{
						scroll: y,
						options: v
					} = g;
				g !== this.root && y && v.layoutScroll && (y.wasRoot && Nt(p, c), qr(p.x, y.offset.x), qr(p.y, y.offset.y))
			}
			return p
		}
		applyTransform(c, f = !1) {
			const p = ze();
			Nt(p, c);
			for (let h = 0; h < this.path.length; h++) {
				const g = this.path[h];
				!f && g.options.layoutScroll && g.scroll && g !== g.root && Gr(p, {
					x: -g.scroll.offset.x,
					y: -g.scroll.offset.y
				}), fr(g.latestValues) && Gr(p, g.latestValues)
			}
			return fr(this.latestValues) && Gr(p, this.latestValues), p
		}
		removeTransform(c) {
			const f = ze();
			Nt(f, c);
			for (let p = 0; p < this.path.length; p++) {
				const h = this.path[p];
				if (!h.instance || !fr(h.latestValues)) continue;
				Wc(h.latestValues) && h.updateSnapshot();
				const g = ze(),
					y = h.measurePageBox();
				Nt(g, y), Kg(f, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, g)
			}
			return fr(this.latestValues) && Kg(f, this.latestValues), f
		}
		setTargetDelta(c) {
			this.targetDelta = c, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
		}
		setOptions(c) {
			this.options = {
				...this.options,
				...c,
				crossfade: c.crossfade !== void 0 ? c.crossfade : !0
			}
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ye.timestamp && this.relativeParent.resolveTargetDelta(!0)
		}
		resolveTargetDelta(c = !1) {
			var f;
			const p = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
			const h = !!this.resumingFrom || this !== p;
			if (!(c || h && this.isSharedProjectionDirty || this.isProjectionDirty || !((f = this.parent) === null || f === void 0) && f.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			const {
				layout: y,
				layoutId: v
			} = this.options;
			if (!(!this.layout || !(y || v))) {
				if (this.resolvedRelativeTargetAt = Ye.timestamp, !this.targetDelta && !this.relativeTarget) {
					const x = this.getClosestProjectingParent();
					x && x.layout && this.animationProgress !== 1 ? (this.relativeParent = x, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ze(), this.relativeTargetOrigin = ze(), oo(this.relativeTargetOrigin, this.layout.layoutBox, x.layout.layoutBox), Nt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
				}
				if (!(!this.relativeTarget && !this.targetDelta)) {
					if (this.target || (this.target = ze(), this.targetWithTransforms = ze()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), cR(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Nt(this.target, this.layout.layoutBox), jx(this.target, this.targetDelta)) : Nt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
						this.attemptToResolveRelativeTarget = !1;
						const x = this.getClosestProjectingParent();
						x && !!x.resumingFrom == !!this.resumingFrom && !x.options.layoutScroll && x.target && this.animationProgress !== 1 ? (this.relativeParent = x, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ze(), this.relativeTargetOrigin = ze(), oo(this.relativeTargetOrigin, this.target, x.target), Nt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
					}
					eo && dr.resolvedTargetDeltas++
				}
			}
		}
		getClosestProjectingParent() {
			if (!(!this.parent || Wc(this.parent.latestValues) || Nx(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
		}
		calcProjection() {
			var c;
			const f = this.getLead(),
				p = !!this.resumingFrom || this !== f;
			let h = !0;
			if ((this.isProjectionDirty || !((c = this.parent) === null || c === void 0) && c.isProjectionDirty) && (h = !1), p && (this.isSharedProjectionDirty || this.isTransformDirty) && (h = !1), this.resolvedRelativeTargetAt === Ye.timestamp && (h = !1), h) return;
			const {
				layout: g,
				layoutId: y
			} = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(g || y)) return;
			Nt(this.layoutCorrected, this.layout.layoutBox);
			const v = this.treeScale.x,
				x = this.treeScale.y;
			xR(this.layoutCorrected, this.treeScale, this.path, p), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = ze());
			const {
				target: b
			} = f;
			if (!b) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return
			}!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Hg(this.prevProjectionDelta.x, this.projectionDelta.x), Hg(this.prevProjectionDelta.y, this.projectionDelta.y)), io(this.projectionDelta, this.layoutCorrected, b, this.latestValues), (this.treeScale.x !== v || this.treeScale.y !== x || !Xg(this.projectionDelta.x, this.prevProjectionDelta.x) || !Xg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", b)), eo && dr.recalculatedProjection++
		}
		hide() {
			this.isVisible = !1
		}
		show() {
			this.isVisible = !0
		}
		scheduleRender(c = !0) {
			var f;
			if ((f = this.options.visualElement) === null || f === void 0 || f.scheduleRender(), c) {
				const p = this.getStack();
				p && p.scheduleRender()
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = Qr(), this.projectionDelta = Qr(), this.projectionDeltaWithTransform = Qr()
		}
		setAnimationOrigin(c, f = !1) {
			const p = this.snapshot,
				h = p ? p.latestValues : {},
				g = {
					...this.latestValues
				},
				y = Qr();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !f;
			const v = ze(),
				x = p ? p.source : void 0,
				b = this.layout ? this.layout.source : void 0,
				E = x !== b,
				P = this.getStack(),
				C = !P || P.members.length <= 1,
				R = !!(E && !C && this.options.crossfade === !0 && !this.path.some(i_));
			this.animationProgress = 0;
			let _;
			this.mixTargetDelta = A => {
				const M = A / 1e3;
				ty(y.x, c.x, M), ty(y.y, c.y, M), this.setTargetDelta(y), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (oo(v, this.layout.layoutBox, this.relativeParent.layout.layoutBox), r_(this.relativeTarget, this.relativeTargetOrigin, v, M), _ && BR(this.relativeTarget, _) && (this.isProjectionDirty = !1), _ || (_ = ze()), Nt(_, this.relativeTarget)), E && (this.animationValues = g, DR(g, h, this.latestValues, M, R, C)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = M
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
		}
		startAnimation(c) {
			this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (qn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = _e.update(() => {
				sa.hasAnimatedSinceResize = !0, this.currentAnimation = _R(0, Zg, {
					...c,
					onUpdate: f => {
						this.mixTargetDelta(f), c.onUpdate && c.onUpdate(f)
					},
					onComplete: () => {
						c.onComplete && c.onComplete(), this.completeAnimation()
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
			})
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			const c = this.getStack();
			c && c.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Zg), this.currentAnimation.stop()), this.completeAnimation()
		}
		applyTransformsToTarget() {
			const c = this.getLead();
			let {
				targetWithTransforms: f,
				target: p,
				layout: h,
				latestValues: g
			} = c;
			if (!(!f || !p || !h)) {
				if (this !== c && this.layout && h && Hx(this.options.animationType, this.layout.layoutBox, h.layoutBox)) {
					p = this.target || ze();
					const y = bt(this.layout.layoutBox.x);
					p.x.min = c.target.x.min, p.x.max = p.x.min + y;
					const v = bt(this.layout.layoutBox.y);
					p.y.min = c.target.y.min, p.y.max = p.y.min + v
				}
				Nt(f, p), Gr(f, g), io(this.projectionDeltaWithTransform, this.layoutCorrected, f, g)
			}
		}
		registerSharedNode(c, f) {
			this.sharedNodes.has(c) || this.sharedNodes.set(c, new UR), this.sharedNodes.get(c).add(f);
			const h = f.options.initialPromotionConfig;
			f.promote({
				transition: h ? h.transition : void 0,
				preserveFollowOpacity: h && h.shouldPreserveFollowOpacity ? h.shouldPreserveFollowOpacity(f) : void 0
			})
		}
		isLead() {
			const c = this.getStack();
			return c ? c.lead === this : !0
		}
		getLead() {
			var c;
			const {
				layoutId: f
			} = this.options;
			return f ? ((c = this.getStack()) === null || c === void 0 ? void 0 : c.lead) || this : this
		}
		getPrevLead() {
			var c;
			const {
				layoutId: f
			} = this.options;
			return f ? (c = this.getStack()) === null || c === void 0 ? void 0 : c.prevLead : void 0
		}
		getStack() {
			const {
				layoutId: c
			} = this.options;
			if (c) return this.root.sharedNodes.get(c)
		}
		promote({
			needsReset: c,
			transition: f,
			preserveFollowOpacity: p
		} = {}) {
			const h = this.getStack();
			h && h.promote(this, p), c && (this.projectionDelta = void 0, this.needsReset = !0), f && this.setOptions({
				transition: f
			})
		}
		relegate() {
			const c = this.getStack();
			return c ? c.relegate(this) : !1
		}
		resetSkewAndRotation() {
			const {
				visualElement: c
			} = this.options;
			if (!c) return;
			let f = !1;
			const {
				latestValues: p
			} = c;
			if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (f = !0), !f) return;
			const h = {};
			p.z && sc("z", c, h, this.animationValues);
			for (let g = 0; g < oc.length; g++) sc(`rotate${oc[g]}`, c, h, this.animationValues), sc(`skew${oc[g]}`, c, h, this.animationValues);
			c.render();
			for (const g in h) c.setStaticValue(g, h[g]), this.animationValues && (this.animationValues[g] = h[g]);
			c.scheduleRender()
		}
		getProjectionStyles(c) {
			var f, p;
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) return WR;
			const h = {
					visibility: ""
				},
				g = this.getTransformTemplate();
			if (this.needsReset) return this.needsReset = !1, h.opacity = "", h.pointerEvents = ia(c?.pointerEvents) || "", h.transform = g ? g(this.latestValues, "") : "none", h;
			const y = this.getLead();
			if (!this.projectionDelta || !this.layout || !y.target) {
				const E = {};
				return this.options.layoutId && (E.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, E.pointerEvents = ia(c?.pointerEvents) || ""), this.hasProjected && !fr(this.latestValues) && (E.transform = g ? g({}, "") : "none", this.hasProjected = !1), E
			}
			const v = y.animationValues || y.latestValues;
			this.applyTransformsToTarget(), h.transform = HR(this.projectionDeltaWithTransform, this.treeScale, v), g && (h.transform = g(v, h.transform));
			const {
				x,
				y: b
			} = this.projectionDelta;
			h.transformOrigin = `${x.origin*100}% ${b.origin*100}% 0`, y.animationValues ? h.opacity = y === this ? (p = (f = v.opacity) !== null && f !== void 0 ? f : this.latestValues.opacity) !== null && p !== void 0 ? p : 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : h.opacity = y === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
			for (const E in ha) {
				if (v[E] === void 0) continue;
				const {
					correct: P,
					applyTo: C
				} = ha[E], R = h.transform === "none" ? v[E] : P(v[E], y);
				if (C) {
					const _ = C.length;
					for (let A = 0; A < _; A++) h[C[A]] = R
				} else h[E] = R
			}
			return this.options.layoutId && (h.pointerEvents = y === this ? ia(c?.pointerEvents) || "" : "none"), h
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0
		}
		resetTree() {
			this.root.nodes.forEach(c => {
				var f;
				return (f = c.currentAnimation) === null || f === void 0 ? void 0 : f.stop()
			}), this.root.nodes.forEach(Jg), this.root.sharedNodes.clear()
		}
	}
}

function KR(e) {
	e.updateLayout()
}

function QR(e) {
	var n;
	const i = ((n = e.resumeFrom) === null || n === void 0 ? void 0 : n.snapshot) || e.snapshot;
	if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
		const {
			layoutBox: o,
			measuredBox: a
		} = e.layout, {
			animationType: u
		} = e.options, c = i.source !== e.layout.source;
		u === "size" ? jt(y => {
			const v = c ? i.measuredBox[y] : i.layoutBox[y],
				x = bt(v);
			v.min = o[y].min, v.max = v.min + x
		}) : Hx(u, i.layoutBox, o) && jt(y => {
			const v = c ? i.measuredBox[y] : i.layoutBox[y],
				x = bt(o[y]);
			v.max = v.min + x, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[y].max = e.relativeTarget[y].min + x)
		});
		const f = Qr();
		io(f, o, i.layoutBox);
		const p = Qr();
		c ? io(p, e.applyTransform(a, !0), i.measuredBox) : io(p, o, i.layoutBox);
		const h = !Vx(f);
		let g = !1;
		if (!e.resumeFrom) {
			const y = e.getClosestProjectingParent();
			if (y && !y.resumeFrom) {
				const {
					snapshot: v,
					layout: x
				} = y;
				if (v && x) {
					const b = ze();
					oo(b, i.layoutBox, v.layoutBox);
					const E = ze();
					oo(E, o, x.layoutBox), zx(b, E) || (g = !0), y.options.layoutRoot && (e.relativeTarget = E, e.relativeTargetOrigin = b, e.relativeParent = y)
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: o,
			snapshot: i,
			delta: p,
			layoutDelta: f,
			hasLayoutChanged: h,
			hasRelativeTargetChanged: g
		})
	} else if (e.isLead()) {
		const {
			onExitComplete: o
		} = e.options;
		o && o()
	}
	e.options.transition = void 0
}

function qR(e) {
	eo && dr.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function GR(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function YR(e) {
	e.clearSnapshot()
}

function Jg(e) {
	e.clearMeasurements()
}

function XR(e) {
	e.isLayoutDirty = !1
}

function ZR(e) {
	const {
		visualElement: n
	} = e.options;
	n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function ey(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function JR(e) {
	e.resolveTargetDelta()
}

function e_(e) {
	e.calcProjection()
}

function t_(e) {
	e.resetSkewAndRotation()
}

function n_(e) {
	e.removeLeadSnapshot()
}

function ty(e, n, i) {
	e.translate = De(n.translate, 0, i), e.scale = De(n.scale, 1, i), e.origin = n.origin, e.originPoint = n.originPoint
}

function ny(e, n, i, o) {
	e.min = De(n.min, i.min, o), e.max = De(n.max, i.max, o)
}

function r_(e, n, i, o) {
	ny(e.x, n.x, i.x, o), ny(e.y, n.y, i.y, o)
}

function i_(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0
}
const o_ = {
		duration: .45,
		ease: [.4, 0, .1, 1]
	},
	ry = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
	iy = ry("applewebkit/") && !ry("chrome/") ? Math.round : St;

function oy(e) {
	e.min = iy(e.min), e.max = iy(e.max)
}

function s_(e) {
	oy(e.x), oy(e.y)
}

function Hx(e, n, i) {
	return e === "position" || e === "preserve-aspect" && !uR(Yg(n), Yg(i), .2)
}

function a_(e) {
	var n;
	return e !== e.root && ((n = e.scroll) === null || n === void 0 ? void 0 : n.wasRoot)
}
const l_ = Ux({
		attachResizeListener: (e, n) => po(e, "resize", n),
		measureScroll: () => ({
			x: document.documentElement.scrollLeft || document.body.scrollLeft,
			y: document.documentElement.scrollTop || document.body.scrollTop
		}),
		checkIsScrollRoot: () => !0
	}),
	ac = {
		current: void 0
	},
	Wx = Ux({
		measureScroll: e => ({
			x: e.scrollLeft,
			y: e.scrollTop
		}),
		defaultParent: () => {
			if (!ac.current) {
				const e = new l_({});
				e.mount(window), e.setOptions({
					layoutScroll: !0
				}), ac.current = e
			}
			return ac.current
		},
		resetTransform: (e, n) => {
			e.style.transform = n !== void 0 ? n : "none"
		},
		checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
	}),
	u_ = {
		pan: {
			Feature: TR
		},
		drag: {
			Feature: PR,
			ProjectionNode: Wx,
			MeasureLayout: Lx
		}
	};

function sy(e, n, i) {
	const {
		props: o
	} = e;
	e.animationState && o.whileHover && e.animationState.setActive("whileHover", i === "Start");
	const a = "onHover" + i,
		u = o[a];
	u && _e.postRender(() => u(n, So(n)))
}
class c_ extends Yn {
	mount() {
		const {
			current: n
		} = this.node;
		n && (this.unmount = uk(n, i => (sy(this.node, i, "Start"), o => sy(this.node, o, "End"))))
	}
	unmount() {}
}
class f_ extends Yn {
	constructor() {
		super(...arguments), this.isActive = !1
	}
	onFocus() {
		let n = !1;
		try {
			n = this.node.current.matches(":focus-visible")
		} catch {
			n = !0
		}!n || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
	}
	mount() {
		this.unmount = wo(po(this.node.current, "focus", () => this.onFocus()), po(this.node.current, "blur", () => this.onBlur()))
	}
	unmount() {}
}

function ay(e, n, i) {
	const {
		props: o
	} = e;
	e.animationState && o.whileTap && e.animationState.setActive("whileTap", i === "Start");
	const a = "onTap" + (i === "End" ? "" : i),
		u = o[a];
	u && _e.postRender(() => u(n, So(n)))
}
class d_ extends Yn {
	mount() {
		const {
			current: n
		} = this.node;
		n && (this.unmount = hk(n, i => (ay(this.node, i, "Start"), (o, {
			success: a
		}) => ay(this.node, o, a ? "End" : "Cancel")), {
			useGlobalTarget: this.node.props.globalTapTarget
		}))
	}
	unmount() {}
}
const Kc = new WeakMap,
	lc = new WeakMap,
	h_ = e => {
		const n = Kc.get(e.target);
		n && n(e)
	},
	p_ = e => {
		e.forEach(h_)
	};

function m_({
	root: e,
	...n
}) {
	const i = e || document;
	lc.has(i) || lc.set(i, {});
	const o = lc.get(i),
		a = JSON.stringify(n);
	return o[a] || (o[a] = new IntersectionObserver(p_, {
		root: e,
		...n
	})), o[a]
}

function g_(e, n, i) {
	const o = m_(n);
	return Kc.set(e, i), o.observe(e), () => {
		Kc.delete(e), o.unobserve(e)
	}
}
const y_ = {
	some: 0,
	all: 1
};
class v_ extends Yn {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1
	}
	startObserver() {
		this.unmount();
		const {
			viewport: n = {}
		} = this.node.getProps(), {
			root: i,
			margin: o,
			amount: a = "some",
			once: u
		} = n, c = {
			root: i ? i.current : void 0,
			rootMargin: o,
			threshold: typeof a == "number" ? a : y_[a]
		}, f = p => {
			const {
				isIntersecting: h
			} = p;
			if (this.isInView === h || (this.isInView = h, u && !h && this.hasEnteredView)) return;
			h && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", h);
			const {
				onViewportEnter: g,
				onViewportLeave: y
			} = this.node.getProps(), v = h ? g : y;
			v && v(p)
		};
		return g_(this.node.current, c, f)
	}
	mount() {
		this.startObserver()
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		const {
			props: n,
			prevProps: i
		} = this.node;
		["amount", "margin", "root"].some(x_(n, i)) && this.startObserver()
	}
	unmount() {}
}

function x_({
	viewport: e = {}
}, {
	viewport: n = {}
} = {}) {
	return i => e[i] !== n[i]
}
const w_ = {
		inView: {
			Feature: v_
		},
		tap: {
			Feature: d_
		},
		focus: {
			Feature: f_
		},
		hover: {
			Feature: c_
		}
	},
	S_ = {
		layout: {
			ProjectionNode: Wx,
			MeasureLayout: Lx
		}
	},
	Qc = {
		current: null
	},
	$x = {
		current: !1
	};

function b_() {
	if ($x.current = !0, !!Sf)
		if (window.matchMedia) {
			const e = window.matchMedia("(prefers-reduced-motion)"),
				n = () => Qc.current = e.matches;
			e.addListener(n), n()
		} else Qc.current = !1
}
const E_ = [...gx, nt, Gn],
	P_ = e => E_.find(mx(e)),
	ly = new WeakMap;

function T_(e, n, i) {
	for (const o in n) {
		const a = n[o],
			u = i[o];
		if (rt(a)) e.addValue(o, a);
		else if (rt(u)) e.addValue(o, fo(a, {
			owner: e
		}));
		else if (u !== a)
			if (e.hasValue(o)) {
				const c = e.getValue(o);
				c.liveStyle === !0 ? c.jump(a) : c.hasAnimated || c.set(a)
			} else {
				const c = e.getStaticValue(o);
				e.addValue(o, fo(c !== void 0 ? c : a, {
					owner: e
				}))
			}
	}
	for (const o in i) n[o] === void 0 && e.removeValue(o);
	return n
}
const uy = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class C_ {
	scrapeMotionValuesFromProps(n, i, o) {
		return {}
	}
	constructor({
		parent: n,
		props: i,
		presenceContext: o,
		reducedMotionConfig: a,
		blockInitialAnimation: u,
		visualState: c
	}, f = {}) {
		this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = qf, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			const x = tn.now();
			this.renderScheduledAt < x && (this.renderScheduledAt = x, _e.render(this.render, !1, !0))
		};
		const {
			latestValues: p,
			renderState: h,
			onUpdate: g
		} = c;
		this.onUpdate = g, this.latestValues = p, this.baseTarget = {
			...p
		}, this.initialValues = i.initial ? {
			...p
		} : {}, this.renderState = h, this.parent = n, this.props = i, this.presenceContext = o, this.depth = n ? n.depth + 1 : 0, this.reducedMotionConfig = a, this.options = f, this.blockInitialAnimation = !!u, this.isControllingVariants = Ia(i), this.isVariantNode = P0(i), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(n && n.current);
		const {
			willChange: y,
			...v
		} = this.scrapeMotionValuesFromProps(i, {}, this);
		for (const x in v) {
			const b = v[x];
			p[x] !== void 0 && rt(b) && b.set(p[x], !1)
		}
	}
	mount(n) {
		this.current = n, ly.set(n, this), this.projection && !this.projection.instance && this.projection.mount(n), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((i, o) => this.bindToMotionValue(o, i)), $x.current || b_(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Qc.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
	}
	unmount() {
		ly.delete(this.current), this.projection && this.projection.unmount(), qn(this.notifyUpdate), qn(this.render), this.valueSubscriptions.forEach(n => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
		for (const n in this.events) this.events[n].clear();
		for (const n in this.features) {
			const i = this.features[n];
			i && (i.unmount(), i.isMounted = !1)
		}
		this.current = null
	}
	bindToMotionValue(n, i) {
		this.valueSubscriptions.has(n) && this.valueSubscriptions.get(n)();
		const o = vr.has(n),
			a = i.on("change", f => {
				this.latestValues[n] = f, this.props.onUpdate && _e.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0)
			}),
			u = i.on("renderRequest", this.scheduleRender);
		let c;
		window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, n, i)), this.valueSubscriptions.set(n, () => {
			a(), u(), c && c(), i.owner && i.stop()
		})
	}
	sortNodePosition(n) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== n.type ? 0 : this.sortInstanceNodePosition(this.current, n.current)
	}
	updateFeatures() {
		let n = "animation";
		for (n in ti) {
			const i = ti[n];
			if (!i) continue;
			const {
				isEnabled: o,
				Feature: a
			} = i;
			if (!this.features[n] && a && o(this.props) && (this.features[n] = new a(this)), this.features[n]) {
				const u = this.features[n];
				u.isMounted ? u.update() : (u.mount(), u.isMounted = !0)
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props)
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ze()
	}
	getStaticValue(n) {
		return this.latestValues[n]
	}
	setStaticValue(n, i) {
		this.latestValues[n] = i
	}
	update(n, i) {
		(n.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = n, this.prevPresenceContext = this.presenceContext, this.presenceContext = i;
		for (let o = 0; o < uy.length; o++) {
			const a = uy[o];
			this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
			const u = "on" + a,
				c = n[u];
			c && (this.propEventSubscriptions[a] = this.on(a, c))
		}
		this.prevMotionValues = T_(this, this.scrapeMotionValuesFromProps(n, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
	}
	getProps() {
		return this.props
	}
	getVariant(n) {
		return this.props.variants ? this.props.variants[n] : void 0
	}
	getDefaultTransition() {
		return this.props.transition
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
	}
	addVariantChild(n) {
		const i = this.getClosestVariantNode();
		if (i) return i.variantChildren && i.variantChildren.add(n), () => i.variantChildren.delete(n)
	}
	addValue(n, i) {
		const o = this.values.get(n);
		i !== o && (o && this.removeValue(n), this.bindToMotionValue(n, i), this.values.set(n, i), this.latestValues[n] = i.get())
	}
	removeValue(n) {
		this.values.delete(n);
		const i = this.valueSubscriptions.get(n);
		i && (i(), this.valueSubscriptions.delete(n)), delete this.latestValues[n], this.removeValueFromRenderState(n, this.renderState)
	}
	hasValue(n) {
		return this.values.has(n)
	}
	getValue(n, i) {
		if (this.props.values && this.props.values[n]) return this.props.values[n];
		let o = this.values.get(n);
		return o === void 0 && i !== void 0 && (o = fo(i === null ? void 0 : i, {
			owner: this
		}), this.addValue(n, o)), o
	}
	readValue(n, i) {
		var o;
		let a = this.latestValues[n] !== void 0 || !this.current ? this.latestValues[n] : (o = this.getBaseTargetFromProps(this.props, n)) !== null && o !== void 0 ? o : this.readValueFromInstance(this.current, n, this.options);
		return a != null && (typeof a == "string" && (hx(a) || ix(a)) ? a = parseFloat(a) : !P_(a) && Gn.test(i) && (a = cx(n, i)), this.setBaseTarget(n, rt(a) ? a.get() : a)), rt(a) ? a.get() : a
	}
	setBaseTarget(n, i) {
		this.baseTarget[n] = i
	}
	getBaseTarget(n) {
		var i;
		const {
			initial: o
		} = this.props;
		let a;
		if (typeof o == "string" || typeof o == "object") {
			const c = Rf(this.props, o, (i = this.presenceContext) === null || i === void 0 ? void 0 : i.custom);
			c && (a = c[n])
		}
		if (o && a !== void 0) return a;
		const u = this.getBaseTargetFromProps(this.props, n);
		return u !== void 0 && !rt(u) ? u : this.initialValues[n] !== void 0 && a === void 0 ? void 0 : this.baseTarget[n]
	}
	on(n, i) {
		return this.events[n] || (this.events[n] = new Uf), this.events[n].add(i)
	}
	notify(n, ...i) {
		this.events[n] && this.events[n].notify(...i)
	}
}
class Kx extends C_ {
	constructor() {
		super(...arguments), this.KeyframeResolver = yx
	}
	sortInstanceNodePosition(n, i) {
		return n.compareDocumentPosition(i) & 2 ? 1 : -1
	}
	getBaseTargetFromProps(n, i) {
		return n.style ? n.style[i] : void 0
	}
	removeValueFromRenderState(n, {
		vars: i,
		style: o
	}) {
		delete i[n], delete o[n]
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		const {
			children: n
		} = this.props;
		rt(n) && (this.childSubscription = n.on("change", i => {
			this.current && (this.current.textContent = `${i}`)
		}))
	}
}

function k_(e) {
	return window.getComputedStyle(e)
}
class R_ extends Kx {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = j0
	}
	readValueFromInstance(n, i) {
		if (vr.has(i)) {
			const o = Qf(i);
			return o && o.default || 0
		} else {
			const o = k_(n),
				a = (O0(i) ? o.getPropertyValue(i) : o[i]) || 0;
			return typeof a == "string" ? a.trim() : a
		}
	}
	measureInstanceViewportBox(n, {
		transformPagePoint: i
	}) {
		return Mx(n, i)
	}
	build(n, i, o) {
		Af(n, i, o.transformTemplate)
	}
	scrapeMotionValuesFromProps(n, i, o) {
		return Df(n, i, o)
	}
}
class __ extends Kx {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ze
	}
	getBaseTargetFromProps(n, i) {
		return n[i]
	}
	readValueFromInstance(n, i) {
		if (vr.has(i)) {
			const o = Qf(i);
			return o && o.default || 0
		}
		return i = M0.has(i) ? i : Tf(i), n.getAttribute(i)
	}
	scrapeMotionValuesFromProps(n, i, o) {
		return I0(n, i, o)
	}
	build(n, i, o) {
		Nf(n, i, this.isSVGTag, o.transformTemplate)
	}
	renderInstance(n, i, o, a) {
		D0(n, i, o, a)
	}
	mount(n) {
		this.isSVGTag = Mf(n.tagName), super.mount(n)
	}
}
const O_ = (e, n) => kf(e) ? new __(n) : new R_(n, {
		allowProjection: e !== T.Fragment
	}),
	A_ = nk({
		...eR,
		...w_,
		...u_,
		...S_
	}, O_),
	Ut = yC(A_);
var Ae = {},
	zs = {},
	Bs = {},
	Us = {},
	uc, cy;

function N_() {
	if (cy) return uc;
	cy = 1;
	var e = "Expected a function",
		n = NaN,
		i = "[object Symbol]",
		o = /^\s+|\s+$/g,
		a = /^[-+]0x[0-9a-f]+$/i,
		u = /^0b[01]+$/i,
		c = /^0o[0-7]+$/i,
		f = parseInt,
		p = typeof Os == "object" && Os && Os.Object === Object && Os,
		h = typeof self == "object" && self && self.Object === Object && self,
		g = p || h || Function("return this")(),
		y = Object.prototype,
		v = y.toString,
		x = Math.max,
		b = Math.min,
		E = function() {
			return g.Date.now()
		};

	function P(L, I, B) {
		var q, W, $, D, X, U, ce = 0,
			oe = !1,
			te = !1,
			H = !0;
		if (typeof L != "function") throw new TypeError(e);
		I = M(I) || 0, R(B) && (oe = !!B.leading, te = "maxWait" in B, $ = te ? x(M(B.maxWait) || 0, I) : $, H = "trailing" in B ? !!B.trailing : H);

		function ee(ue) {
			var we = q,
				Ne = W;
			return q = W = void 0, ce = ue, D = L.apply(Ne, we), D
		}

		function Z(ue) {
			return ce = ue, X = setTimeout(le, I), oe ? ee(ue) : D
		}

		function j(ue) {
			var we = ue - U,
				Ne = ue - ce,
				Tt = I - we;
			return te ? b(Tt, $ - Ne) : Tt
		}

		function K(ue) {
			var we = ue - U,
				Ne = ue - ce;
			return U === void 0 || we >= I || we < 0 || te && Ne >= $
		}

		function le() {
			var ue = E();
			if (K(ue)) return pe(ue);
			X = setTimeout(le, j(ue))
		}

		function pe(ue) {
			return X = void 0, H && q ? ee(ue) : (q = W = void 0, D)
		}

		function xe() {
			X !== void 0 && clearTimeout(X), ce = 0, q = U = W = X = void 0
		}

		function ve() {
			return X === void 0 ? D : pe(E())
		}

		function ge() {
			var ue = E(),
				we = K(ue);
			if (q = arguments, W = this, U = ue, we) {
				if (X === void 0) return Z(U);
				if (te) return X = setTimeout(le, I), ee(U)
			}
			return X === void 0 && (X = setTimeout(le, I)), D
		}
		return ge.cancel = xe, ge.flush = ve, ge
	}

	function C(L, I, B) {
		var q = !0,
			W = !0;
		if (typeof L != "function") throw new TypeError(e);
		return R(B) && (q = "leading" in B ? !!B.leading : q, W = "trailing" in B ? !!B.trailing : W), P(L, I, {
			leading: q,
			maxWait: I,
			trailing: W
		})
	}

	function R(L) {
		var I = typeof L;
		return !!L && (I == "object" || I == "function")
	}

	function _(L) {
		return !!L && typeof L == "object"
	}

	function A(L) {
		return typeof L == "symbol" || _(L) && v.call(L) == i
	}

	function M(L) {
		if (typeof L == "number") return L;
		if (A(L)) return n;
		if (R(L)) {
			var I = typeof L.valueOf == "function" ? L.valueOf() : L;
			L = R(I) ? I + "" : I
		}
		if (typeof L != "string") return L === 0 ? L : +L;
		L = L.replace(o, "");
		var B = u.test(L);
		return B || c.test(L) ? f(L.slice(2), B ? 2 : 8) : a.test(L) ? n : +L
	}
	return uc = C, uc
}
var Xi = {},
	fy;

function Zf() {
	if (fy) return Xi;
	fy = 1, Object.defineProperty(Xi, "__esModule", {
		value: !0
	}), Xi.addPassiveEventListener = function(i, o, a) {
		var u = a.name;
		u || (u = o, console.warn("Listener must be a named function.")), e.has(o) || e.set(o, new Set);
		var c = e.get(o);
		if (!c.has(u)) {
			var f = (function() {
				var p = !1;
				try {
					var h = Object.defineProperty({}, "passive", {
						get: function() {
							p = !0
						}
					});
					window.addEventListener("test", null, h)
				} catch {}
				return p
			})();
			i.addEventListener(o, a, f ? {
				passive: !0
			} : !1), c.add(u)
		}
	}, Xi.removePassiveEventListener = function(i, o, a) {
		i.removeEventListener(o, a), e.get(o).delete(a.name || o)
	};
	var e = new Map;
	return Xi
}
var dy;

function Jf() {
	if (dy) return Us;
	dy = 1, Object.defineProperty(Us, "__esModule", {
		value: !0
	});
	var e = N_(),
		n = o(e),
		i = Zf();

	function o(c) {
		return c && c.__esModule ? c : {
			default: c
		}
	}
	var a = function(f) {
			var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
			return (0, n.default)(f, p)
		},
		u = {
			spyCallbacks: [],
			spySetState: [],
			scrollSpyContainers: [],
			mount: function(f, p) {
				if (f) {
					var h = a(function(g) {
						u.scrollHandler(f)
					}, p);
					return u.scrollSpyContainers.push(f), (0, i.addPassiveEventListener)(f, "scroll", h),
						function() {
							(0, i.removePassiveEventListener)(f, "scroll", h), u.scrollSpyContainers.splice(u.scrollSpyContainers.indexOf(f), 1)
						}
				}
				return function() {}
			},
			isMounted: function(f) {
				return u.scrollSpyContainers.indexOf(f) !== -1
			},
			currentPositionX: function(f) {
				if (f === document) {
					var p = window.scrollY !== void 0,
						h = (document.compatMode || "") === "CSS1Compat";
					return p ? window.scrollX : h ? document.documentElement.scrollLeft : document.body.scrollLeft
				} else return f.scrollLeft
			},
			currentPositionY: function(f) {
				if (f === document) {
					var p = window.scrollX !== void 0,
						h = (document.compatMode || "") === "CSS1Compat";
					return p ? window.scrollY : h ? document.documentElement.scrollTop : document.body.scrollTop
				} else return f.scrollTop
			},
			scrollHandler: function(f) {
				var p = u.scrollSpyContainers[u.scrollSpyContainers.indexOf(f)].spyCallbacks || [];
				p.forEach(function(h) {
					return h(u.currentPositionX(f), u.currentPositionY(f))
				})
			},
			addStateHandler: function(f) {
				u.spySetState.push(f)
			},
			addSpyHandler: function(f, p) {
				var h = u.scrollSpyContainers[u.scrollSpyContainers.indexOf(p)];
				h.spyCallbacks || (h.spyCallbacks = []), h.spyCallbacks.push(f)
			},
			updateStates: function() {
				u.spySetState.forEach(function(f) {
					return f()
				})
			},
			unmount: function(f, p) {
				u.scrollSpyContainers.forEach(function(h) {
					return h.spyCallbacks && h.spyCallbacks.length && h.spyCallbacks.indexOf(p) > -1 && h.spyCallbacks.splice(h.spyCallbacks.indexOf(p), 1)
				}), u.spySetState && u.spySetState.length && u.spySetState.indexOf(f) > -1 && u.spySetState.splice(u.spySetState.indexOf(f), 1), document.removeEventListener("scroll", u.scrollHandler)
			},
			update: function() {
				return u.scrollSpyContainers.forEach(function(f) {
					return u.scrollHandler(f)
				})
			}
		};
	return Us.default = u, Us
}
var Hs = {},
	Ws = {},
	hy;

function za() {
	if (hy) return Ws;
	hy = 1, Object.defineProperty(Ws, "__esModule", {
		value: !0
	});
	var e = function(f, p) {
			var h = f.indexOf("#") === 0 ? f.substring(1) : f,
				g = h ? "#" + h : "",
				y = window && window.location,
				v = g ? y.pathname + y.search + g : y.pathname + y.search;
			p ? history.pushState(history.state, "", v) : history.replaceState(history.state, "", v)
		},
		n = function() {
			return window.location.hash.replace(/^#/, "")
		},
		i = function(f) {
			return function(p) {
				return f.contains ? f != p && f.contains(p) : !!(f.compareDocumentPosition(p) & 16)
			}
		},
		o = function(f) {
			return getComputedStyle(f).position !== "static"
		},
		a = function(f, p) {
			for (var h = f.offsetTop, g = f.offsetParent; g && !p(g);) h += g.offsetTop, g = g.offsetParent;
			return {
				offsetTop: h,
				offsetParent: g
			}
		},
		u = function(f, p, h) {
			if (h) return f === document ? p.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(f).position !== "static" ? p.offsetLeft : p.offsetLeft - f.offsetLeft;
			if (f === document) return p.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
			if (o(f)) {
				if (p.offsetParent !== f) {
					var g = function(P) {
							return P === f || P === document
						},
						y = a(p, g),
						v = y.offsetTop,
						x = y.offsetParent;
					if (x !== f) throw new Error("Seems containerElement is not an ancestor of the Element");
					return v
				}
				return p.offsetTop
			}
			if (p.offsetParent === f.offsetParent) return p.offsetTop - f.offsetTop;
			var b = function(P) {
				return P === document
			};
			return a(p, b).offsetTop - a(f, b).offsetTop
		};
	return Ws.default = {
		updateHash: e,
		getHash: n,
		filterElementInContainer: i,
		scrollOffset: u
	}, Ws
}
var $s = {},
	Ks = {},
	py;

function j_() {
	return py || (py = 1, Object.defineProperty(Ks, "__esModule", {
		value: !0
	}), Ks.default = {
		defaultEasing: function(n) {
			return n < .5 ? Math.pow(n * 2, 2) / 2 : 1 - Math.pow((1 - n) * 2, 2) / 2
		},
		linear: function(n) {
			return n
		},
		easeInQuad: function(n) {
			return n * n
		},
		easeOutQuad: function(n) {
			return n * (2 - n)
		},
		easeInOutQuad: function(n) {
			return n < .5 ? 2 * n * n : -1 + (4 - 2 * n) * n
		},
		easeInCubic: function(n) {
			return n * n * n
		},
		easeOutCubic: function(n) {
			return --n * n * n + 1
		},
		easeInOutCubic: function(n) {
			return n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1
		},
		easeInQuart: function(n) {
			return n * n * n * n
		},
		easeOutQuart: function(n) {
			return 1 - --n * n * n * n
		},
		easeInOutQuart: function(n) {
			return n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n
		},
		easeInQuint: function(n) {
			return n * n * n * n * n
		},
		easeOutQuint: function(n) {
			return 1 + --n * n * n * n * n
		},
		easeInOutQuint: function(n) {
			return n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n
		}
	}), Ks
}
var Qs = {},
	my;

function M_() {
	if (my) return Qs;
	my = 1, Object.defineProperty(Qs, "__esModule", {
		value: !0
	});
	var e = Zf(),
		n = ["mousedown", "wheel", "touchmove", "keydown"];
	return Qs.default = {
		subscribe: function(o) {
			return typeof document < "u" && n.forEach(function(a) {
				return (0, e.addPassiveEventListener)(document, a, o)
			})
		}
	}, Qs
}
var qs = {},
	gy;

function ed() {
	if (gy) return qs;
	gy = 1, Object.defineProperty(qs, "__esModule", {
		value: !0
	});
	var e = {
		registered: {},
		scrollEvent: {
			register: function(i, o) {
				e.registered[i] = o
			},
			remove: function(i) {
				e.registered[i] = null
			}
		}
	};
	return qs.default = e, qs
}
var yy;

function Qx() {
	if (yy) return $s;
	yy = 1, Object.defineProperty($s, "__esModule", {
		value: !0
	});
	var e = Object.assign || function(W) {
			for (var $ = 1; $ < arguments.length; $++) {
				var D = arguments[$];
				for (var X in D) Object.prototype.hasOwnProperty.call(D, X) && (W[X] = D[X])
			}
			return W
		},
		n = za();
	p(n);
	var i = j_(),
		o = p(i),
		a = M_(),
		u = p(a),
		c = ed(),
		f = p(c);

	function p(W) {
		return W && W.__esModule ? W : {
			default: W
		}
	}
	var h = function($) {
			return o.default[$.smooth] || o.default.defaultEasing
		},
		g = function($) {
			return typeof $ == "function" ? $ : function() {
				return $
			}
		},
		y = function() {
			if (typeof window < "u") return window.requestAnimationFrame || window.webkitRequestAnimationFrame
		},
		v = (function() {
			return y() || function(W, $, D) {
				window.setTimeout(W, D || 1e3 / 60, new Date().getTime())
			}
		})(),
		x = function() {
			return {
				currentPosition: 0,
				startPosition: 0,
				targetPosition: 0,
				progress: 0,
				duration: 0,
				cancel: !1,
				target: null,
				containerElement: null,
				to: null,
				start: null,
				delta: null,
				percent: null,
				delayTimeout: null
			}
		},
		b = function($) {
			var D = $.data.containerElement;
			if (D && D !== document && D !== document.body) return D.scrollLeft;
			var X = window.pageXOffset !== void 0,
				U = (document.compatMode || "") === "CSS1Compat";
			return X ? window.pageXOffset : U ? document.documentElement.scrollLeft : document.body.scrollLeft
		},
		E = function($) {
			var D = $.data.containerElement;
			if (D && D !== document && D !== document.body) return D.scrollTop;
			var X = window.pageXOffset !== void 0,
				U = (document.compatMode || "") === "CSS1Compat";
			return X ? window.pageYOffset : U ? document.documentElement.scrollTop : document.body.scrollTop
		},
		P = function($) {
			var D = $.data.containerElement;
			if (D && D !== document && D !== document.body) return D.scrollWidth - D.offsetWidth;
			var X = document.body,
				U = document.documentElement;
			return Math.max(X.scrollWidth, X.offsetWidth, U.clientWidth, U.scrollWidth, U.offsetWidth)
		},
		C = function($) {
			var D = $.data.containerElement;
			if (D && D !== document && D !== document.body) return D.scrollHeight - D.offsetHeight;
			var X = document.body,
				U = document.documentElement;
			return Math.max(X.scrollHeight, X.offsetHeight, U.clientHeight, U.scrollHeight, U.offsetHeight)
		},
		R = function W($, D, X) {
			var U = D.data;
			if (!D.ignoreCancelEvents && U.cancel) {
				f.default.registered.end && f.default.registered.end(U.to, U.target, U.currentPositionY);
				return
			}
			if (U.delta = Math.round(U.targetPosition - U.startPosition), U.start === null && (U.start = X), U.progress = X - U.start, U.percent = U.progress >= U.duration ? 1 : $(U.progress / U.duration), U.currentPosition = U.startPosition + Math.ceil(U.delta * U.percent), U.containerElement && U.containerElement !== document && U.containerElement !== document.body ? D.horizontal ? U.containerElement.scrollLeft = U.currentPosition : U.containerElement.scrollTop = U.currentPosition : D.horizontal ? window.scrollTo(U.currentPosition, 0) : window.scrollTo(0, U.currentPosition), U.percent < 1) {
				var ce = W.bind(null, $, D);
				v.call(window, ce);
				return
			}
			f.default.registered.end && f.default.registered.end(U.to, U.target, U.currentPosition)
		},
		_ = function($) {
			$.data.containerElement = $ ? $.containerId ? document.getElementById($.containerId) : $.container && $.container.nodeType ? $.container : document : null
		},
		A = function($, D, X, U) {
			D.data = D.data || x(), window.clearTimeout(D.data.delayTimeout);
			var ce = function() {
				D.data.cancel = !0
			};
			if (u.default.subscribe(ce), _(D), D.data.start = null, D.data.cancel = !1, D.data.startPosition = D.horizontal ? b(D) : E(D), D.data.targetPosition = D.absolute ? $ : $ + D.data.startPosition, D.data.startPosition === D.data.targetPosition) {
				f.default.registered.end && f.default.registered.end(D.data.to, D.data.target, D.data.currentPosition);
				return
			}
			D.data.delta = Math.round(D.data.targetPosition - D.data.startPosition), D.data.duration = g(D.duration)(D.data.delta), D.data.duration = isNaN(parseFloat(D.data.duration)) ? 1e3 : parseFloat(D.data.duration), D.data.to = X, D.data.target = U;
			var oe = h(D),
				te = R.bind(null, oe, D);
			if (D && D.delay > 0) {
				D.data.delayTimeout = window.setTimeout(function() {
					f.default.registered.begin && f.default.registered.begin(D.data.to, D.data.target), v.call(window, te)
				}, D.delay);
				return
			}
			f.default.registered.begin && f.default.registered.begin(D.data.to, D.data.target), v.call(window, te)
		},
		M = function($) {
			return $ = e({}, $), $.data = $.data || x(), $.absolute = !0, $
		},
		L = function($) {
			A(0, M($))
		},
		I = function($, D) {
			A($, M(D))
		},
		B = function($) {
			$ = M($), _($), A($.horizontal ? P($) : C($), $)
		},
		q = function($, D) {
			D = M(D), _(D);
			var X = D.horizontal ? b(D) : E(D);
			A($ + X, D)
		};
	return $s.default = {
		animateTopScroll: A,
		getAnimationType: h,
		scrollToTop: L,
		scrollToBottom: B,
		scrollTo: I,
		scrollMore: q
	}, $s
}
var vy;

function Ba() {
	if (vy) return Hs;
	vy = 1, Object.defineProperty(Hs, "__esModule", {
		value: !0
	});
	var e = Object.assign || function(g) {
			for (var y = 1; y < arguments.length; y++) {
				var v = arguments[y];
				for (var x in v) Object.prototype.hasOwnProperty.call(v, x) && (g[x] = v[x])
			}
			return g
		},
		n = za(),
		i = f(n),
		o = Qx(),
		a = f(o),
		u = ed(),
		c = f(u);

	function f(g) {
		return g && g.__esModule ? g : {
			default: g
		}
	}
	var p = {},
		h = void 0;
	return Hs.default = {
		unmount: function() {
			p = {}
		},
		register: function(y, v) {
			p[y] = v
		},
		unregister: function(y) {
			delete p[y]
		},
		get: function(y) {
			return p[y] || document.getElementById(y) || document.getElementsByName(y)[0] || document.getElementsByClassName(y)[0]
		},
		setActiveLink: function(y) {
			return h = y
		},
		getActiveLink: function() {
			return h
		},
		scrollTo: function(y, v) {
			var x = this.get(y);
			if (!x) {
				console.warn("target Element not found");
				return
			}
			v = e({}, v, {
				absolute: !1
			});
			var b = v.containerId,
				E = v.container,
				P = void 0;
			b ? P = document.getElementById(b) : E && E.nodeType ? P = E : P = document, v.absolute = !0;
			var C = v.horizontal,
				R = i.default.scrollOffset(P, x, C) + (v.offset || 0);
			if (!v.smooth) {
				c.default.registered.begin && c.default.registered.begin(y, x), P === document ? v.horizontal ? window.scrollTo(R, 0) : window.scrollTo(0, R) : P.scrollTop = R, c.default.registered.end && c.default.registered.end(y, x);
				return
			}
			a.default.animateTopScroll(R, v, y, x)
		}
	}, Hs
}
var cc = {
		exports: {}
	},
	fc, xy;

function D_() {
	if (xy) return fc;
	xy = 1;
	var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
	return fc = e, fc
}
var dc, wy;

function L_() {
	if (wy) return dc;
	wy = 1;
	var e = D_();

	function n() {}

	function i() {}
	return i.resetWarningCache = n, dc = function() {
		function o(c, f, p, h, g, y) {
			if (y !== e) {
				var v = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw v.name = "Invariant Violation", v
			}
		}
		o.isRequired = o;

		function a() {
			return o
		}
		var u = {
			array: o,
			bigint: o,
			bool: o,
			func: o,
			number: o,
			object: o,
			string: o,
			symbol: o,
			any: o,
			arrayOf: a,
			element: o,
			elementType: o,
			instanceOf: a,
			node: o,
			objectOf: a,
			oneOf: a,
			oneOfType: a,
			shape: a,
			exact: a,
			checkPropTypes: i,
			resetWarningCache: n
		};
		return u.PropTypes = u, u
	}, dc
}
var Sy;

function Ua() {
	return Sy || (Sy = 1, cc.exports = L_()()), cc.exports
}
var Gs = {},
	by;

function qx() {
	if (by) return Gs;
	by = 1, Object.defineProperty(Gs, "__esModule", {
		value: !0
	}), Zf();
	var e = za(),
		n = i(e);

	function i(a) {
		return a && a.__esModule ? a : {
			default: a
		}
	}
	var o = {
		mountFlag: !1,
		initialized: !1,
		scroller: null,
		containers: {},
		mount: function(u) {
			this.scroller = u, this.handleHashChange = this.handleHashChange.bind(this), window.addEventListener("hashchange", this.handleHashChange), this.initStateFromHash(), this.mountFlag = !0
		},
		mapContainer: function(u, c) {
			this.containers[u] = c
		},
		isMounted: function() {
			return this.mountFlag
		},
		isInitialized: function() {
			return this.initialized
		},
		initStateFromHash: function() {
			var u = this,
				c = this.getHash();
			c ? window.setTimeout(function() {
				u.scrollTo(c, !0), u.initialized = !0
			}, 10) : this.initialized = !0
		},
		scrollTo: function(u, c) {
			var f = this.scroller,
				p = f.get(u);
			if (p && (c || u !== f.getActiveLink())) {
				var h = this.containers[u] || document;
				f.scrollTo(u, {
					container: h
				})
			}
		},
		getHash: function() {
			return n.default.getHash()
		},
		changeHash: function(u, c) {
			this.isInitialized() && n.default.getHash() !== u && n.default.updateHash(u, c)
		},
		handleHashChange: function() {
			this.scrollTo(this.getHash())
		},
		unmount: function() {
			this.scroller = null, this.containers = null, window.removeEventListener("hashchange", this.handleHashChange)
		}
	};
	return Gs.default = o, Gs
}
var Ey;

function td() {
	if (Ey) return Bs;
	Ey = 1, Object.defineProperty(Bs, "__esModule", {
		value: !0
	});
	var e = Object.assign || function(C) {
			for (var R = 1; R < arguments.length; R++) {
				var _ = arguments[R];
				for (var A in _) Object.prototype.hasOwnProperty.call(_, A) && (C[A] = _[A])
			}
			return C
		},
		n = (function() {
			function C(R, _) {
				for (var A = 0; A < _.length; A++) {
					var M = _[A];
					M.enumerable = M.enumerable || !1, M.configurable = !0, "value" in M && (M.writable = !0), Object.defineProperty(R, M.key, M)
				}
			}
			return function(R, _, A) {
				return _ && C(R.prototype, _), A && C(R, A), R
			}
		})(),
		i = rn(),
		o = v(i),
		a = Jf(),
		u = v(a),
		c = Ba(),
		f = v(c),
		p = Ua(),
		h = v(p),
		g = qx(),
		y = v(g);

	function v(C) {
		return C && C.__esModule ? C : {
			default: C
		}
	}

	function x(C, R) {
		if (!(C instanceof R)) throw new TypeError("Cannot call a class as a function")
	}

	function b(C, R) {
		if (!C) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return R && (typeof R == "object" || typeof R == "function") ? R : C
	}

	function E(C, R) {
		if (typeof R != "function" && R !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof R);
		C.prototype = Object.create(R && R.prototype, {
			constructor: {
				value: C,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), R && (Object.setPrototypeOf ? Object.setPrototypeOf(C, R) : C.__proto__ = R)
	}
	var P = {
		to: h.default.string.isRequired,
		containerId: h.default.string,
		container: h.default.object,
		activeClass: h.default.string,
		activeStyle: h.default.object,
		spy: h.default.bool,
		horizontal: h.default.bool,
		smooth: h.default.oneOfType([h.default.bool, h.default.string]),
		offset: h.default.number,
		delay: h.default.number,
		isDynamic: h.default.bool,
		onClick: h.default.func,
		duration: h.default.oneOfType([h.default.number, h.default.func]),
		absolute: h.default.bool,
		onSetActive: h.default.func,
		onSetInactive: h.default.func,
		ignoreCancelEvents: h.default.bool,
		hashSpy: h.default.bool,
		saveHashHistory: h.default.bool,
		spyThrottle: h.default.number
	};
	return Bs.default = function(C, R) {
		var _ = R || f.default,
			A = (function(L) {
				E(I, L);

				function I(B) {
					x(this, I);
					var q = b(this, (I.__proto__ || Object.getPrototypeOf(I)).call(this, B));
					return M.call(q), q.state = {
						active: !1
					}, q.beforeUnmountCallbacks = [], q
				}
				return n(I, [{
					key: "getScrollSpyContainer",
					value: function() {
						var q = this.props.containerId,
							W = this.props.container;
						return q && !W ? document.getElementById(q) : W && W.nodeType ? W : document
					}
				}, {
					key: "componentDidMount",
					value: function() {
						if (this.props.spy || this.props.hashSpy) {
							var q = this.getScrollSpyContainer();
							if (!u.default.isMounted(q)) {
								var W = u.default.mount(q, this.props.spyThrottle);
								this.beforeUnmountCallbacks.push(W)
							}
							this.props.hashSpy && (y.default.isMounted() || y.default.mount(_), y.default.mapContainer(this.props.to, q)), u.default.addSpyHandler(this.spyHandler, q), this.setState({
								container: q
							})
						}
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						u.default.unmount(this.stateHandler, this.spyHandler), this.beforeUnmountCallbacks.forEach(function(q) {
							return q()
						})
					}
				}, {
					key: "render",
					value: function() {
						var q = "";
						this.state && this.state.active ? q = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : q = this.props.className;
						var W = {};
						this.state && this.state.active ? W = e({}, this.props.style, this.props.activeStyle) : W = e({}, this.props.style);
						var $ = e({}, this.props);
						for (var D in P) $.hasOwnProperty(D) && delete $[D];
						return $.className = q, $.style = W, $.onClick = this.handleClick, o.default.createElement(C, $)
					}
				}]), I
			})(o.default.PureComponent),
			M = function() {
				var I = this;
				this.scrollTo = function(B, q) {
					_.scrollTo(B, e({}, I.state, q))
				}, this.handleClick = function(B) {
					I.props.onClick && I.props.onClick(B), B.stopPropagation && B.stopPropagation(), B.preventDefault && B.preventDefault(), I.scrollTo(I.props.to, I.props)
				}, this.spyHandler = function(B, q) {
					var W = I.getScrollSpyContainer();
					if (!(y.default.isMounted() && !y.default.isInitialized())) {
						var $ = I.props.horizontal,
							D = I.props.to,
							X = null,
							U = void 0,
							ce = void 0;
						if ($) {
							var oe = 0,
								te = 0,
								H = 0;
							if (W.getBoundingClientRect) {
								var ee = W.getBoundingClientRect();
								H = ee.left
							}
							if (!X || I.props.isDynamic) {
								if (X = _.get(D), !X) return;
								var Z = X.getBoundingClientRect();
								oe = Z.left - H + B, te = oe + Z.width
							}
							var j = B - I.props.offset;
							U = j >= Math.floor(oe) && j < Math.floor(te), ce = j < Math.floor(oe) || j >= Math.floor(te)
						} else {
							var K = 0,
								le = 0,
								pe = 0;
							if (W.getBoundingClientRect) {
								var xe = W.getBoundingClientRect();
								pe = xe.top
							}
							if (!X || I.props.isDynamic) {
								if (X = _.get(D), !X) return;
								var ve = X.getBoundingClientRect();
								K = ve.top - pe + q, le = K + ve.height
							}
							var ge = q - I.props.offset;
							U = ge >= Math.floor(K) && ge < Math.floor(le), ce = ge < Math.floor(K) || ge >= Math.floor(le)
						}
						var ue = _.getActiveLink();
						if (ce) {
							if (D === ue && _.setActiveLink(void 0), I.props.hashSpy && y.default.getHash() === D) {
								var we = I.props.saveHashHistory,
									Ne = we === void 0 ? !1 : we;
								y.default.changeHash("", Ne)
							}
							I.props.spy && I.state.active && (I.setState({
								active: !1
							}), I.props.onSetInactive && I.props.onSetInactive(D, X))
						}
						if (U && (ue !== D || I.state.active === !1)) {
							_.setActiveLink(D);
							var Tt = I.props.saveHashHistory,
								xr = Tt === void 0 ? !1 : Tt;
							I.props.hashSpy && y.default.changeHash(D, xr), I.props.spy && (I.setState({
								active: !0
							}), I.props.onSetActive && I.props.onSetActive(D, X))
						}
					}
				}
			};
		return A.propTypes = P, A.defaultProps = {
			offset: 0
		}, A
	}, Bs
}
var Py;

function I_() {
	if (Py) return zs;
	Py = 1, Object.defineProperty(zs, "__esModule", {
		value: !0
	});
	var e = rn(),
		n = a(e),
		i = td(),
		o = a(i);

	function a(h) {
		return h && h.__esModule ? h : {
			default: h
		}
	}

	function u(h, g) {
		if (!(h instanceof g)) throw new TypeError("Cannot call a class as a function")
	}

	function c(h, g) {
		if (!h) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return g && (typeof g == "object" || typeof g == "function") ? g : h
	}

	function f(h, g) {
		if (typeof g != "function" && g !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof g);
		h.prototype = Object.create(g && g.prototype, {
			constructor: {
				value: h,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), g && (Object.setPrototypeOf ? Object.setPrototypeOf(h, g) : h.__proto__ = g)
	}
	var p = (function(h) {
		f(g, h);

		function g() {
			var y, v, x, b;
			u(this, g);
			for (var E = arguments.length, P = Array(E), C = 0; C < E; C++) P[C] = arguments[C];
			return b = (v = (x = c(this, (y = g.__proto__ || Object.getPrototypeOf(g)).call.apply(y, [this].concat(P))), x), x.render = function() {
				return n.default.createElement("a", x.props, x.props.children)
			}, v), c(x, b)
		}
		return g
	})(n.default.Component);
	return zs.default = (0, o.default)(p), zs
}
var Ys = {},
	Ty;

function F_() {
	if (Ty) return Ys;
	Ty = 1, Object.defineProperty(Ys, "__esModule", {
		value: !0
	});
	var e = (function() {
			function g(y, v) {
				for (var x = 0; x < v.length; x++) {
					var b = v[x];
					b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(y, b.key, b)
				}
			}
			return function(y, v, x) {
				return v && g(y.prototype, v), x && g(y, x), y
			}
		})(),
		n = rn(),
		i = u(n),
		o = td(),
		a = u(o);

	function u(g) {
		return g && g.__esModule ? g : {
			default: g
		}
	}

	function c(g, y) {
		if (!(g instanceof y)) throw new TypeError("Cannot call a class as a function")
	}

	function f(g, y) {
		if (!g) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return y && (typeof y == "object" || typeof y == "function") ? y : g
	}

	function p(g, y) {
		if (typeof y != "function" && y !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof y);
		g.prototype = Object.create(y && y.prototype, {
			constructor: {
				value: g,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), y && (Object.setPrototypeOf ? Object.setPrototypeOf(g, y) : g.__proto__ = y)
	}
	var h = (function(g) {
		p(y, g);

		function y() {
			return c(this, y), f(this, (y.__proto__ || Object.getPrototypeOf(y)).apply(this, arguments))
		}
		return e(y, [{
			key: "render",
			value: function() {
				return i.default.createElement("button", this.props, this.props.children)
			}
		}]), y
	})(i.default.Component);
	return Ys.default = (0, a.default)(h), Ys
}
var Xs = {},
	Zs = {},
	Cy;

function Gx() {
	if (Cy) return Zs;
	Cy = 1, Object.defineProperty(Zs, "__esModule", {
		value: !0
	});
	var e = Object.assign || function(x) {
			for (var b = 1; b < arguments.length; b++) {
				var E = arguments[b];
				for (var P in E) Object.prototype.hasOwnProperty.call(E, P) && (x[P] = E[P])
			}
			return x
		},
		n = (function() {
			function x(b, E) {
				for (var P = 0; P < E.length; P++) {
					var C = E[P];
					C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(b, C.key, C)
				}
			}
			return function(b, E, P) {
				return E && x(b.prototype, E), P && x(b, P), b
			}
		})(),
		i = rn(),
		o = h(i),
		a = Sa();
	h(a);
	var u = Ba(),
		c = h(u),
		f = Ua(),
		p = h(f);

	function h(x) {
		return x && x.__esModule ? x : {
			default: x
		}
	}

	function g(x, b) {
		if (!(x instanceof b)) throw new TypeError("Cannot call a class as a function")
	}

	function y(x, b) {
		if (!x) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return b && (typeof b == "object" || typeof b == "function") ? b : x
	}

	function v(x, b) {
		if (typeof b != "function" && b !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
		x.prototype = Object.create(b && b.prototype, {
			constructor: {
				value: x,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), b && (Object.setPrototypeOf ? Object.setPrototypeOf(x, b) : x.__proto__ = b)
	}
	return Zs.default = function(x) {
		var b = (function(E) {
			v(P, E);

			function P(C) {
				g(this, P);
				var R = y(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, C));
				return R.childBindings = {
					domNode: null
				}, R
			}
			return n(P, [{
				key: "componentDidMount",
				value: function() {
					if (typeof window > "u") return !1;
					this.registerElems(this.props.name)
				}
			}, {
				key: "componentDidUpdate",
				value: function(R) {
					this.props.name !== R.name && this.registerElems(this.props.name)
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					if (typeof window > "u") return !1;
					c.default.unregister(this.props.name)
				}
			}, {
				key: "registerElems",
				value: function(R) {
					c.default.register(R, this.childBindings.domNode)
				}
			}, {
				key: "render",
				value: function() {
					return o.default.createElement(x, e({}, this.props, {
						parentBindings: this.childBindings
					}))
				}
			}]), P
		})(o.default.Component);
		return b.propTypes = {
			name: p.default.string,
			id: p.default.string
		}, b
	}, Zs
}
var ky;

function V_() {
	if (ky) return Xs;
	ky = 1, Object.defineProperty(Xs, "__esModule", {
		value: !0
	});
	var e = Object.assign || function(x) {
			for (var b = 1; b < arguments.length; b++) {
				var E = arguments[b];
				for (var P in E) Object.prototype.hasOwnProperty.call(E, P) && (x[P] = E[P])
			}
			return x
		},
		n = (function() {
			function x(b, E) {
				for (var P = 0; P < E.length; P++) {
					var C = E[P];
					C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(b, C.key, C)
				}
			}
			return function(b, E, P) {
				return E && x(b.prototype, E), P && x(b, P), b
			}
		})(),
		i = rn(),
		o = p(i),
		a = Gx(),
		u = p(a),
		c = Ua(),
		f = p(c);

	function p(x) {
		return x && x.__esModule ? x : {
			default: x
		}
	}

	function h(x, b) {
		if (!(x instanceof b)) throw new TypeError("Cannot call a class as a function")
	}

	function g(x, b) {
		if (!x) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return b && (typeof b == "object" || typeof b == "function") ? b : x
	}

	function y(x, b) {
		if (typeof b != "function" && b !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
		x.prototype = Object.create(b && b.prototype, {
			constructor: {
				value: x,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), b && (Object.setPrototypeOf ? Object.setPrototypeOf(x, b) : x.__proto__ = b)
	}
	var v = (function(x) {
		y(b, x);

		function b() {
			return h(this, b), g(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments))
		}
		return n(b, [{
			key: "render",
			value: function() {
				var P = this,
					C = e({}, this.props);
				return delete C.name, C.parentBindings && delete C.parentBindings, o.default.createElement("div", e({}, C, {
					ref: function(_) {
						P.props.parentBindings.domNode = _
					}
				}), this.props.children)
			}
		}]), b
	})(o.default.Component);
	return v.propTypes = {
		name: f.default.string,
		id: f.default.string
	}, Xs.default = (0, u.default)(v), Xs
}
var hc, Ry;

function z_() {
	if (Ry) return hc;
	Ry = 1;
	var e = Object.assign || function(v) {
			for (var x = 1; x < arguments.length; x++) {
				var b = arguments[x];
				for (var E in b) Object.prototype.hasOwnProperty.call(b, E) && (v[E] = b[E])
			}
			return v
		},
		n = (function() {
			function v(x, b) {
				for (var E = 0; E < b.length; E++) {
					var P = b[E];
					P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(x, P.key, P)
				}
			}
			return function(x, b, E) {
				return b && v(x.prototype, b), E && v(x, E), x
			}
		})();

	function i(v, x) {
		if (!(v instanceof x)) throw new TypeError("Cannot call a class as a function")
	}

	function o(v, x) {
		if (!v) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return x && (typeof x == "object" || typeof x == "function") ? x : v
	}

	function a(v, x) {
		if (typeof x != "function" && x !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof x);
		v.prototype = Object.create(x && x.prototype, {
			constructor: {
				value: v,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), x && (Object.setPrototypeOf ? Object.setPrototypeOf(v, x) : v.__proto__ = x)
	}
	var u = rn();
	Sa(), za();
	var c = Jf(),
		f = Ba(),
		p = Ua(),
		h = qx(),
		g = {
			to: p.string.isRequired,
			containerId: p.string,
			container: p.object,
			activeClass: p.string,
			spy: p.bool,
			smooth: p.oneOfType([p.bool, p.string]),
			offset: p.number,
			delay: p.number,
			isDynamic: p.bool,
			onClick: p.func,
			duration: p.oneOfType([p.number, p.func]),
			absolute: p.bool,
			onSetActive: p.func,
			onSetInactive: p.func,
			ignoreCancelEvents: p.bool,
			hashSpy: p.bool,
			spyThrottle: p.number
		},
		y = {
			Scroll: function(x, b) {
				console.warn("Helpers.Scroll is deprecated since v1.7.0");
				var E = b || f,
					P = (function(R) {
						a(_, R);

						function _(A) {
							i(this, _);
							var M = o(this, (_.__proto__ || Object.getPrototypeOf(_)).call(this, A));
							return C.call(M), M.state = {
								active: !1
							}, M
						}
						return n(_, [{
							key: "getScrollSpyContainer",
							value: function() {
								var M = this.props.containerId,
									L = this.props.container;
								return M ? document.getElementById(M) : L && L.nodeType ? L : document
							}
						}, {
							key: "componentDidMount",
							value: function() {
								if (this.props.spy || this.props.hashSpy) {
									var M = this.getScrollSpyContainer();
									c.isMounted(M) || c.mount(M, this.props.spyThrottle), this.props.hashSpy && (h.isMounted() || h.mount(E), h.mapContainer(this.props.to, M)), this.props.spy && c.addStateHandler(this.stateHandler), c.addSpyHandler(this.spyHandler, M), this.setState({
										container: M
									})
								}
							}
						}, {
							key: "componentWillUnmount",
							value: function() {
								c.unmount(this.stateHandler, this.spyHandler)
							}
						}, {
							key: "render",
							value: function() {
								var M = "";
								this.state && this.state.active ? M = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : M = this.props.className;
								var L = e({}, this.props);
								for (var I in g) L.hasOwnProperty(I) && delete L[I];
								return L.className = M, L.onClick = this.handleClick, u.createElement(x, L)
							}
						}]), _
					})(u.Component),
					C = function() {
						var _ = this;
						this.scrollTo = function(A, M) {
							E.scrollTo(A, e({}, _.state, M))
						}, this.handleClick = function(A) {
							_.props.onClick && _.props.onClick(A), A.stopPropagation && A.stopPropagation(), A.preventDefault && A.preventDefault(), _.scrollTo(_.props.to, _.props)
						}, this.stateHandler = function() {
							E.getActiveLink() !== _.props.to && (_.state !== null && _.state.active && _.props.onSetInactive && _.props.onSetInactive(), _.setState({
								active: !1
							}))
						}, this.spyHandler = function(A) {
							var M = _.getScrollSpyContainer();
							if (!(h.isMounted() && !h.isInitialized())) {
								var L = _.props.to,
									I = null,
									B = 0,
									q = 0,
									W = 0;
								if (M.getBoundingClientRect) {
									var $ = M.getBoundingClientRect();
									W = $.top
								}
								if (!I || _.props.isDynamic) {
									if (I = E.get(L), !I) return;
									var D = I.getBoundingClientRect();
									B = D.top - W + A, q = B + D.height
								}
								var X = A - _.props.offset,
									U = X >= Math.floor(B) && X < Math.floor(q),
									ce = X < Math.floor(B) || X >= Math.floor(q),
									oe = E.getActiveLink();
								if (ce) return L === oe && E.setActiveLink(void 0), _.props.hashSpy && h.getHash() === L && h.changeHash(), _.props.spy && _.state.active && (_.setState({
									active: !1
								}), _.props.onSetInactive && _.props.onSetInactive()), c.updateStates();
								if (U && oe !== L) return E.setActiveLink(L), _.props.hashSpy && h.changeHash(L), _.props.spy && (_.setState({
									active: !0
								}), _.props.onSetActive && _.props.onSetActive(L)), c.updateStates()
							}
						}
					};
				return P.propTypes = g, P.defaultProps = {
					offset: 0
				}, P
			},
			Element: function(x) {
				console.warn("Helpers.Element is deprecated since v1.7.0");
				var b = (function(E) {
					a(P, E);

					function P(C) {
						i(this, P);
						var R = o(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, C));
						return R.childBindings = {
							domNode: null
						}, R
					}
					return n(P, [{
						key: "componentDidMount",
						value: function() {
							if (typeof window > "u") return !1;
							this.registerElems(this.props.name)
						}
					}, {
						key: "componentDidUpdate",
						value: function(R) {
							this.props.name !== R.name && this.registerElems(this.props.name)
						}
					}, {
						key: "componentWillUnmount",
						value: function() {
							if (typeof window > "u") return !1;
							f.unregister(this.props.name)
						}
					}, {
						key: "registerElems",
						value: function(R) {
							f.register(R, this.childBindings.domNode)
						}
					}, {
						key: "render",
						value: function() {
							return u.createElement(x, e({}, this.props, {
								parentBindings: this.childBindings
							}))
						}
					}]), P
				})(u.Component);
				return b.propTypes = {
					name: p.string,
					id: p.string
				}, b
			}
		};
	return hc = y, hc
}
var _y;

function B_() {
	if (_y) return Ae;
	_y = 1, Object.defineProperty(Ae, "__esModule", {
		value: !0
	}), Ae.Helpers = Ae.ScrollElement = Ae.ScrollLink = Ae.animateScroll = Ae.scrollSpy = Ae.Events = Ae.scroller = Ae.Element = Ae.Button = Ae.Link = void 0;
	var e = I_(),
		n = A(e),
		i = F_(),
		o = A(i),
		a = V_(),
		u = A(a),
		c = Ba(),
		f = A(c),
		p = ed(),
		h = A(p),
		g = Jf(),
		y = A(g),
		v = Qx(),
		x = A(v),
		b = td(),
		E = A(b),
		P = Gx(),
		C = A(P),
		R = z_(),
		_ = A(R);

	function A(M) {
		return M && M.__esModule ? M : {
			default: M
		}
	}
	return Ae.Link = n.default, Ae.Button = o.default, Ae.Element = u.default, Ae.scroller = f.default, Ae.Events = h.default, Ae.scrollSpy = y.default, Ae.animateScroll = x.default, Ae.ScrollLink = E.default, Ae.ScrollElement = C.default, Ae.Helpers = _.default, Ae.default = {
		Link: n.default,
		Button: o.default,
		Element: u.default,
		scroller: f.default,
		Events: h.default,
		scrollSpy: y.default,
		animateScroll: x.default,
		ScrollLink: E.default,
		ScrollElement: C.default,
		Helpers: _.default
	}, Ae
}
var pc = B_();
const Oy = [{
	name: "Education",
	to: "education"
}, {
	name: "Experience",
	to: "experience"
}, {
	name: "Projects",
	to: "projects"
}, {
	name: "Leadership",
	to: "leadership"
}, {
	name: "Skills",
	to: "skills"
}];

function U_() {
	const [e, n] = T.useState(!1), [i, o] = T.useState(!1);
	return T.useEffect(() => {
		const a = () => {
			o(window.scrollY > 50)
		};
		return window.addEventListener("scroll", a), () => window.removeEventListener("scroll", a)
	}, []), S.jsxs("nav", {
		className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e?"bg-black border-b-4 border-red-800 py-4":i?"bg-white border-b-4 border-black py-2":"bg-transparent py-4"}`,
		children: [S.jsx("div", {
			className: "w-full px-4 sm:px-6 lg:px-8",
			children: S.jsxs("div", {
				className: "flex justify-between items-center",
				children: [S.jsx(pc.Link, {
					to: "hero",
					smooth: !0,
					duration: 500,
					className: "cursor-pointer group",
					children: S.jsx("img", {
						src: "./images/JKH_logo.PNG",
						alt: "JKH Logo",
						className: `h-9 md:h-10 w-auto transition-all duration-300 border-black border-2
                ${e?"invert-0 hover:invert":"invert hover:invert-0"} 
              `
					})
				}), S.jsx("div", {
					className: "hidden md:flex space-x-4",
					children: Oy.map(a => S.jsx(pc.Link, {
						to: a.to,
						smooth: !0,
						duration: 500,
						offset: -100,
						className: "cursor-pointer px-4 py-2 border-2 border-black bg-white text-black hover:bg-[#1a51b8] hover:text-white hover:border-[#1a51b8] font-[family-name:var(--font-display)] text-sm transition-all",
						children: a.name
					}, a.name))
				}), S.jsx("button", {
					className: `md:hidden p-1 border-2 transition-all duration-300
              ${e?"bg-black text-white border-black hover:bg-red-800 hover:text-white":"bg-white border-white hover:invert"}`,
					onClick: () => n(!e),
					children: e ? S.jsx(lf, {
						className: "w-6 h-6"
					}) : S.jsx(kE, {
						className: "w-6 h-6"
					})
				})]
			})
		}), S.jsx(Ac, {
			children: e && S.jsx(Ut.div, {
				initial: {
					opacity: 0,
					y: -20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -20
				},
				transition: {
					duration: .3
				},
				className: "md:hidden absolute top-[calc(100%+3px)] left-0 right-0 bg-white p-4 shadow-xl z-40",
				children: S.jsx("div", {
					className: "flex flex-col space-y-2",
					children: Oy.map(a => S.jsx(pc.Link, {
						to: a.to,
						smooth: !0,
						duration: 500,
						offset: -100,
						onClick: () => n(!1),
						className: "cursor-pointer px-4 py-3 border-2 border-black bg-white text-black hover:bg-[#1a51b8] hover:text-white hover:border-[#1a51b8] font-[family-name:var(--font-display)] text-center transition-all",
						children: a.name
					}, a.name))
				})
			})
		})]
	})
}

function Js({
	title: e,
	subtitle: n,
	color: i = "bg-primary",
	whiteOutline: o = !1
}) {
	return S.jsxs("div", {
		className: "mb-12 text-center",
		children: [S.jsxs("div", {
			className: "inline-block relative",
			children: [S.jsx("h2", {
				className: `text-3xl md:text-5xl font-black relative z-10 pixel-text-shadow ${o?"text-white":"text-black"}`,
				children: e
			}), S.jsx("div", {
				className: `absolute -bottom-2 -right-2 w-full h-full ${i} -z-0 border-2 border-black`
			})]
		}), n && S.jsx("p", {
			className: `mt-4 text-xl md:text-2xl font-[family-name:var(--font-body)] max-w-2xl mx-auto ${o?"text-gray-400":"text-muted-foreground"}`,
			children: n
		})]
	})
}

function Ay({
	children: e,
	className: n = "",
	borderColor: i = "border-black"
}) {
	return S.jsx("div", {
		className: `bg-white p-6 md:p-8 border-4 ${i} shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200 ${n}`,
		children: e
	})
}
async function Ha() {
	const e = await fetch("./data.json");
	if (!e.ok) throw new Error("Failed to fetch data");
	return e.json()
}

function H_() {
	return Ea({
		queryKey: ["education"],
		queryFn: async () => (await Ha()).education
	})
}

function W_() {
	return Ea({
		queryKey: ["projects"],
		queryFn: async () => (await Ha()).projects
	})
}

function $_() {
	return Ea({
		queryKey: ["leadership"],
		queryFn: async () => (await Ha()).leadership
	})
}

function K_() {
	return Ea({
		queryKey: ["skills"],
		queryFn: async () => (await Ha()).skills
	})
}

function Jx9() {
	return Ea({
		queryKey: ["experience"],
		queryFn: async () => (await Ha()).experience
	})
}
var Yx = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0
	},
	Ny = st.createContext && st.createContext(Yx),
	Q_ = ["attr", "size", "title"];

function q_(e, n) {
	if (e == null) return {};
	var i = G_(e, n),
		o, a;
	if (Object.getOwnPropertySymbols) {
		var u = Object.getOwnPropertySymbols(e);
		for (a = 0; a < u.length; a++) o = u[a], !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (i[o] = e[o])
	}
	return i
}

function G_(e, n) {
	if (e == null) return {};
	var i = {};
	for (var o in e)
		if (Object.prototype.hasOwnProperty.call(e, o)) {
			if (n.indexOf(o) >= 0) continue;
			i[o] = e[o]
		} return i
}

function xa() {
	return xa = Object.assign ? Object.assign.bind() : function(e) {
		for (var n = 1; n < arguments.length; n++) {
			var i = arguments[n];
			for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o])
		}
		return e
	}, xa.apply(this, arguments)
}

function jy(e, n) {
	var i = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		n && (o = o.filter(function(a) {
			return Object.getOwnPropertyDescriptor(e, a).enumerable
		})), i.push.apply(i, o)
	}
	return i
}

function wa(e) {
	for (var n = 1; n < arguments.length; n++) {
		var i = arguments[n] != null ? arguments[n] : {};
		n % 2 ? jy(Object(i), !0).forEach(function(o) {
			Y_(e, o, i[o])
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : jy(Object(i)).forEach(function(o) {
			Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(i, o))
		})
	}
	return e
}

function Y_(e, n, i) {
	return n = X_(n), n in e ? Object.defineProperty(e, n, {
		value: i,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[n] = i, e
}

function X_(e) {
	var n = Z_(e, "string");
	return typeof n == "symbol" ? n : n + ""
}

function Z_(e, n) {
	if (typeof e != "object" || !e) return e;
	var i = e[Symbol.toPrimitive];
	if (i !== void 0) {
		var o = i.call(e, n);
		if (typeof o != "object") return o;
		throw new TypeError("@@toPrimitive must return a primitive value.")
	}
	return (n === "string" ? String : Number)(e)
}

function Xx(e) {
	return e && e.map((n, i) => st.createElement(n.tag, wa({
		key: i
	}, n.attr), Xx(n.child)))
}

function nd(e) {
	return n => st.createElement(J_, xa({
		attr: wa({}, e.attr)
	}, n), Xx(e.child))
}

function J_(e) {
	var n = i => {
		var {
			attr: o,
			size: a,
			title: u
		} = e, c = q_(e, Q_), f = a || i.size || "1em", p;
		return i.className && (p = i.className), e.className && (p = (p ? p + " " : "") + e.className), st.createElement("svg", xa({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, i.attr, o, c, {
			className: p,
			style: wa(wa({
				color: e.color || i.color
			}, i.style), e.style),
			height: f,
			width: f,
			xmlns: "http://www.w3.org/2000/svg"
		}), u && st.createElement("title", null, u), e.children)
	};
	return Ny !== void 0 ? st.createElement(Ny.Consumer, null, i => n(i)) : n(Yx)
}

function eO(e) {
	return nd({
		attr: {
			role: "img",
			viewBox: "0 0 24 24"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
			},
			child: []
		}]
	})(e)
}

function My(e) {
	return nd({
		attr: {
			role: "img",
			viewBox: "0 0 24 24"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
			},
			child: []
		}]
	})(e)
}

function Dy(e) {
	return nd({
		attr: {
			role: "img",
			viewBox: "0 0 24 24"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M22.0113 3.269h-5.8219a4.2894 4.2894 0 0 0-4.1854 3.3452A4.2894 4.2894 0 0 0 7.8186 3.269h-5.818A2.0007 2.0007 0 0 0 0 5.2697v10.2434a2.0007 2.0007 0 0 0 2.0007 2.0007h3.7372c4.2574 0 5.5299 1.0244 6.138 3.133a.112.112 0 0 0 .1121.084h.024a.112.112 0 0 0 .112-.084c.6122-2.1086 1.8847-3.133 6.138-3.133h3.7373A2.0007 2.0007 0 0 0 24 15.5131V5.2697a2.0007 2.0007 0 0 0-1.9887-2.0006Zm-11.928 11.0557a.144.144 0 0 1-.144.144H3.2571a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144H3.2571a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144H3.2571a.144.144 0 0 1-.144-.144v-.9524a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm10.8037 5.0696a.144.144 0 0 1-.144.144h-6.6823a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144h-6.6823a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144h-6.6823a.144.144 0 0 1-.144-.144v-.9484a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144v.9524z"
			},
			child: []
		}]
	})(e)
}
const ea = ["./images/profile-pixel-jad.png", "./images/jad_w_pro.jpg", "./images/jad_w_spain.jpg"];

function tO() {
	const [e, n] = T.useState(0), [i, o] = T.useState(null), {
		data: a
	} = H_(), {
		data: u
	} = W_(), c = () => {
		n(h => (h + 1) % ea.length)
	};
	T.useEffect(() => {
		const h = setInterval(() => {
			n(g => (g + 1) % ea.length)
		}, 1e4);
		return () => clearInterval(h)
	}, []);
	const {
		data: f
	} = $_(), {
		data: p
	} = K_(), {
		data: expData
	} = Jx9();
	return S.jsxs("div", {
		className: "min-h-screen relative overflow-hidden",
		children: [S.jsx(U_, {}), S.jsxs("section", {
			id: "hero",
			className: "min-h-screen flex items-center justify-center pt-16 relative",
			children: [S.jsxs("div", {
				className: "absolute inset-0 z-0 pointer-events-none",
				children: [S.jsx("div", {
					className: "absolute inset-0 bg-[url('/images/hero-game.png')] bg-cover bg-center opacity-20"
				}), S.jsx("div", {
					className: "absolute inset-0 bg-[url('/images/bg-cabin-lake.png')] bg-cover bg-center opacity-0 animate-fade"
				}), S.jsx("div", {
					className: "absolute inset-0 bg-[url('/images/bg-cherry-blossom.png')] bg-cover bg-center opacity-0 animate-fade [animation-delay:4s]"
				}), S.jsx("div", {
					className: "absolute inset-0 bg-[url('/images/bg-retro-city.png')] bg-cover bg-center opacity-0 animate-fade [animation-delay:8s]"
				}), S.jsx("div", {
					className: "absolute inset-0 bg-[url('/images/bg-tropical-pixel.png')] bg-cover bg-center opacity-0 animate-fade [animation-delay:12s]"
				}), S.jsx("div", {
					className: "absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-10"
				})]
			}), S.jsx("div", {
				className: "max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12",
				children: S.jsxs("div", {
					className: "flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-16",
					children: [S.jsx(Ut.div, {
						initial: {
							opacity: 0,
							scale: .9
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							duration: .8
						},
						className: "w-full md:w-1/2 flex justify-center",
						children: S.jsxs(Ut.div, {
							whileHover: {
								rotate: 2,
								scale: 1.02
							},
							className: "w-full aspect-square border-8 border-black bg-[#800020] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group cursor-pointer",
							onClick: c,
							"data-testid": "profile-image-carousel",
							children: [S.jsx(Ac, {
								mode: "wait",
								children: S.jsx(Ut.img, {
									src: ea[e],
									alt: "Jad K. Haddad",
									className: "w-full h-full object-cover",
									style: {
										objectPosition: "center 25%"
									},
									initial: {
										opacity: 0,
										x: 50
									},
									animate: {
										opacity: 1,
										x: 0
									},
									exit: {
										opacity: 0,
										x: -50
									},
									transition: {
										duration: .3
									}
								}, e)
							}), S.jsx("div", {
								className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center",
								children: S.jsx("span", {
									className: "text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 px-4 py-2 border-2 border-white",
									children: "TAP FOR MORE"
								})
							}), S.jsx("div", {
								className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2",
								children: ea.map((h, g) => S.jsx(Ut.div, {
									className: `w-3 h-3 border-2 border-white ${g===e?"bg-white":"bg-transparent"}`,
									animate: g === e ? {
										scale: [1, 1.2, 1]
									} : {},
									transition: {
										duration: .5
									}
								}, g))
							})]
						})
					}), S.jsxs(Ut.div, {
						initial: {
							opacity: 0,
							x: -50
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: {
							duration: .8
						},
						className: "w-full md:w-1/2 text-center md:text-left",
						children: [S.jsx("h1", {
							className: `
                  font-black
                  mb-4
                  text-gray-500
                  md:text-gray-500
                  tracking-tighter

                
                  text-[25px]
                  sm:text-[43px]
                  md:text-[50px]
                  lg:text-[77px]
  

                
                `,
							style: {
								WebkitTextStroke: "4px black",
								paintOrder: "stroke fill"
							},
							children: "Jad K. Haddad"
						}), S.jsxs("div", {
							className: "flex flex-col gap-3 mb-8 items-center md:items-start",
							children: [S.jsx("div", {
								className: "inline-block border-4 border-black px-6 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#8a0a28]",
								children: S.jsx("span", {
									className: "font-[family-name:var(--font-display)] text-lg md:text-2xl font-bold uppercase tracking-tight",
									children: "B.S. in Electronic Systems Engineering at Texas A&M"
								})
							}), S.jsx("div", {
								className: "inline-block border-4 border-black px-5 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-yellow-400 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all w-full max-w-[calc(100%)]",
								children: S.jsx("span", {
									className: "font-[family-name:var(--font-display)] text-sm md:text-lg font-bold text-black uppercase tracking-wide",
									children: "Embedded Systems & Hardware Design"
								})
							})]
						}), S.jsxs("div", {
							className: "flex flex-wrap gap-4 justify-center md:justify-start",
							children: [S.jsxs("a", {
								href: "./images/RES_PUB.pdf",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 px-6 py-3 bg-black text-white border-4 border-black font-bold uppercase tracking-wide shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:bg-primary hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all",
								"data-testid": "button-resume",
								children: [S.jsx(Dy, {
									className: "w-5 h-5"
								}), "Resume"]
							}), S.jsxs("a", {
								href: "https://www.linkedin.com/in/jadksrahaddad",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white border-4 border-black font-bold uppercase tracking-wide shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:bg-[#005885] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all",
								"data-testid": "button-linkedin",
								children: [S.jsx(My, {
									className: "w-5 h-5"
								}), "LinkedIn"]
							}),
							S.jsx("style", {
								children: ".zkk-cta{background-color:#e3e3e3}.zkk-cta:hover{background-color:#b5b5b5}"
							}),
							S.jsxs("a", {
								href: "https://www.zkkconsulting.com",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 px-6 py-3 zkk-cta text-white border-4 border-black font-bold uppercase tracking-wide shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all",
								"data-testid": "./images/ZKK_logo.png",
								children: [S.jsx("img", {
									src: "./images/ZKK_logo.png",
									alt: "ZKK Consulting",
									className: "h-10 w-auto object-contain"
								})]})
						]
						})]
					})]
				})
			})]
		}), S.jsx("section", {
			id: "education",
			className: "py-24 bg-white border-y-4 border-black relative",
			children: S.jsxs("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: [S.jsx(Js, {
					title: "EDUCATION",
					subtitle: "academics & certifications",
					color: "bg-yellow-400"
				}), S.jsxs("div", {
					className: "grid grid-cols-1 md:grid-cols-1 gap-8",
					children: [a?.map((h, g) => S.jsx(Ut.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: !0
						},
						transition: {
							delay: g * .1
						},
						children: S.jsxs(Ay, {
							className: "h-full border-black bg-blue-50",
							children: [S.jsxs("div", {
								className: "flex items-start justify-between mb-4",
								children: [S.jsx("div", {
									className: "p-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#500001]",
									children: S.jsx("img", {
										src: "./images/tamu-logo.jpg",
										alt: "Texas A&M",
										className: "w-12 h-12 object-contain"
									})
								}), S.jsxs("span", {
									className: "font-[family-name:var(--font-display)] text-xs bg-black text-white px-2 py-1 text-center leading-tight",
									children: [S.jsx("span", {
										className: "block md:inline",
										children: h.year.split(" - ")[0]
									}), S.jsx("span", {
										className: "hidden md:inline",
										children: " - "
									}), S.jsx("span", {
										className: "block md:inline",
										children: h.year.split(" - ")[1]
									})]
								})]
							}), S.jsx("h3", {
								className: "font-bold mb-1 text-[30px]",
								children: h.school
							}), S.jsx("h4", {
								className: "text-xl font-bold mb-4 font-[family-name:var(--font-body)] text-[#facc14]",
								children: h.degree
							}), S.jsx("p", {
								className: "text-lg leading-relaxed mb-6",
								children: h.description
							}), S.jsxs("div", {
								className: "flex flex-wrap gap-3",
								children: [S.jsxs("a", {
									href: "images/unofficialTranscript.pdf",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-2 px-4 py-2 bg-[#500000] text-white border-2 border-black font-bold text-sm uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:bg-[#700000] hover:-translate-y-1 transition-all",
									"data-testid": "button-unofficial-resume",
									children: [S.jsx(SE, {
										className: "w-4 h-4"
									}), "Transcript"]
								}), S.jsxs("a", {
									href: "#certifications",
									className: "inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black border-2 border-black font-bold text-sm uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:bg-yellow-300 hover:-translate-y-1 transition-all",
									"data-testid": "button-certifications",
									children: [S.jsx(jm, {
										className: "w-4 h-4"
									}), "Certifications"]
								})]
							})]
						})
					}, h.id)), (!a || a.length === 0) && S.jsx("div", {
						className: "col-span-2 text-center py-12 border-4 border-dashed border-gray-300",
						children: S.jsx("p", {
							className: "text-xl text-gray-400",
							children: "Loading educational data..."
						})
					})]
				})]
			})
		}), S.jsx("section", {
			id: "experience",
			className: "py-24 bg-gray-100 border-y-4 border-black relative",
			children: S.jsxs("div", {
				className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
				children: [S.jsx(Js, {
					title: "EXPERIENCE",
					subtitle: "professional roles & industry work",
					color: "bg-[#8a0a28]"
				}), S.jsx("div", {
					className: "space-y-8",
					children: expData?.map((h, g) => S.jsxs(Ut.div, {
						initial: {
							opacity: 0,
							x: -50
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: {
							once: !0
						},
						transition: {
							delay: g * .1
						},
						className: "relative pl-8 md:pl-0",
						children: [S.jsx("div", {
							className: "absolute left-0 top-0 bottom-0 w-1 bg-black md:hidden"
						}), S.jsxs("div", {
							className: "bg-white text-black p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative",
							children: [S.jsx("div", {
								className: "absolute top-0 right-0 w-8 h-8 bg-[#8a0a28] border-l-4 border-b-4 border-black"
							}), S.jsxs("div", {
								className: "flex flex-col md:flex-row md:items-start justify-between mb-4",
								children: [S.jsxs("div", {
									className: "flex items-start gap-4 flex-1 min-w-0",
									children: [h.logo && S.jsx("img", {
										src: h.logo,
										alt: h.company,
										className: "h-12 w-auto object-contain shrink-0 mt-1"
									}), S.jsxs("div", {
										className: "flex-1 min-w-0",
										children: [S.jsx("h3", {
											className: "font-bold text-lg md:text-2xl leading-tight break-words",
											children: h.company
										}), S.jsx("p", {
											className: "font-bold text-gray-600 font-[family-name:var(--font-body)] text-base md:text-lg break-words",
											children: h.role
										}), h.location && S.jsx("p", {
											className: "text-gray-500 font-[family-name:var(--font-body)] text-sm mt-1",
											children: h.location
										})]
									})]
								}), S.jsx("span", {
									className: "mt-2 md:hidden inline-block px-3 py-1 bg-black text-white font-[family-name:var(--font-display)] text-xs",
									children: h.year
								}), S.jsx("div", {
									className: "hidden md:flex flex-col items-center px-3 py-2 bg-black text-white font-[family-name:var(--font-display)] text-xs text-center shrink-0",
									style: {
										gap: "2px",
										marginLeft: "1rem"
									},
									children: h.year.includes(" - ") ? S.jsxs(S.Fragment, {
										children: [S.jsx("div", {
											className: "whitespace-nowrap",
											children: h.year.split(" - ")[0]
										}), S.jsx("div", {
											className: "whitespace-nowrap",
											children: h.year.split(" - ")[1]
										})]
									}) : S.jsx("div", {
										className: "whitespace-nowrap",
										children: h.year
									})
								})]
							}), S.jsx("div", {
								className: "text-base md:text-lg whitespace-pre-line",
								children: h.description
							})]
						})]
					}, h.id))
				})]
			})
		}), S.jsxs("section", {
			id: "projects",
			className: "py-24 relative overflow-hidden bg-gray-800",
			children: [S.jsx("div", {
				className: "absolute inset-0 z-0 pointer-events-none",
				children: S.jsx("div", {
					className: "absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] opacity-5"
				})
			}), 
            //END EDUCATION AREA




                 
               //PROJECT AREA

                             S.jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                    children: [S.jsx(Js, {
                      title: "PROJECTS",
                      subtitle: "experiences & personal passion projects",
                      color: "bg-purple-600",
                      whiteOutline: !0
                    }), S.jsx("div", {
                      className: "flex flex-wrap justify-center",
                      children: u?.map((h, g) => {
                        const v = {
                            "Smart Table Solutions": "./images/project-smart-table.png",
                            SoilSense: "./images/project-soilsense.png",
                            "Wi-Fi Desk Buddy": "./images/project-wifi-clock.png",
                            Vyrex: "./images/project-vyrex.png"
                          } [h.title],
                          x = h.title === "Smart Table Solutions";
                        return S.jsx(Ut.div, {
                          className: "w-full md:w-1/2 p-4",
                          initial: {
                            opacity: 0,
                            scale: .9
                          },
                          whileInView: {
                            opacity: 1,
                            scale: 1
                          },
                          viewport: {
                            once: !0
                          },
                          transition: {
                            delay: g * .1
                          },
                          children: S.jsxs(Ay, {
                            className: "h-full flex flex-col group",
                            children: [S.jsxs("div", {
                              className: `${h.title==="Vyrex"?"bg-white p-4":"bg-black"} h-48 mb-6 relative overflow-hidden border-2 border-black group-hover:border-primary transition-colors`,
                              children: [S.jsx("div", {
                                className: "absolute inset-0 flex items-center justify-center text-white/20",
                                children: S.jsx(RE, {
                                  className: "w-16 h-16"
                                })
                              }), v ? S.jsx("img", {
                                src: v,
                                alt: h.title,
                                className: `w-full h-full ${h.title==="Vyrex"?"object-contain":"object-cover"}`
                              }) : S.jsx("img", {
                                src: `https://images.unsplash.com/photo-${155e10+g}?w=800&h=600&fit=crop`,
                                alt: h.title,
                                className: "w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                              }), 
                                         
                                         x && S.jsxs("div", {
                                           className: "group/jkh absolute top-2 right-2",
                                           children: [S.jsx("div", {
                                             className: "w-10 h-10 bg-white border-2 border-black shadow-md flex items-center justify-center cursor-pointer",
                                             children: S.jsx("img", {
                                               src: "./images/JKH_white.PNG",
                                               alt: "JKH Experience",
                                               className: "w-10 h-10 object-contain"
                                             })
                                           }), S.jsx("div", {
                                             className: "absolute right-0 top-12 bg-white text-black text-xs font-bold px-2 py-1 border-2 border-black whitespace-nowrap opacity-0 group-hover/jkh:opacity-100 transition-opacity pointer-events-none z-10",
                                             children: "Sold Under JKH Name"
                                           })]
                                         }), x && S.jsxs("div", {
                                           className: "absolute top-2 left-2 flex flex-col",
                                           style: {
                                             gap: "6px"
                                           },
                                           children: [S.jsxs("div", {
                                             className: "group/flag relative",
                                             children: [S.jsx("div", {
                                               className: "w-8 h-8 bg-red-500 border-2 border-black shadow-md flex items-center justify-center cursor-pointer hover:bg-red-400 transition-colors",
                                               children: S.jsx(Mm, {
                                                 className: "w-5 h-5 text-white"
                                               })
                                             }), S.jsx("div", {
                                               className: "absolute left-10 top-0 bg-red-500 text-white text-xs font-bold px-2 py-1 border-2 border-black whitespace-nowrap opacity-0 group-hover/flag:opacity-100 transition-opacity pointer-events-none z-10",
                                               children: "STM32"
                                             })]
                                           }), S.jsxs("div", {
                                             className: "group/flag relative",
                                             children: [S.jsx("div", {
                                               className: "w-8 h-8 bg-green-500 border-2 border-black shadow-md flex items-center justify-center cursor-pointer hover:bg-green-400 transition-colors",
                                               children: S.jsx(PE, {
                                                 className: "w-5 h-5 text-white"
                                               })
                                             }), S.jsx("div", {
                                               className: "absolute left-10 top-0 bg-green-500 text-white text-xs font-bold px-2 py-1 border-2 border-black whitespace-nowrap opacity-0 group-hover/flag:opacity-100 transition-opacity pointer-events-none z-10",
                                               children: "$2,400 Revenue Generated"
                                             })]
                                           }), S.jsxs("div", {
                                             className: "group/flag relative",
                                             children: [S.jsx("div", {
                                               className: "w-8 h-8 bg-purple-500 border-2 border-black shadow-md flex items-center justify-center cursor-pointer hover:bg-purple-400 transition-colors",
                                               children: S.jsx(EE, {
                                                 className: "w-5 h-5 text-white"
                                               })
                                             }), S.jsx("div", {
                                               className: "absolute left-10 top-0 bg-purple-500 text-white text-xs font-bold px-2 py-1 border-2 border-black whitespace-nowrap opacity-0 group-hover/flag:opacity-100 transition-opacity pointer-events-none z-10",
                                               children: "Custom PCB Design"
                                             })]
                                           })]
                                         })

                                         
                                         , h.title === "SoilSense" && S.jsxs("div", {
                                className: "absolute top-2 left-2 flex flex-col",
                                style: {
                                  gap: "6px"
                                },
                                children: [S.jsxs("div", {
                                  className: "group/flag relative",
                                  children: [S.jsx("div", {
                                    className: "w-8 h-8 bg-blue-500 border-2 border-black shadow-md flex items-center justify-center cursor-pointer hover:bg-blue-400 transition-colors",
                                    children: S.jsx(Mm, {
                                      className: "w-5 h-5 text-white"
                                    })
                                  }), S.jsx("div", {
                                    className: "absolute left-10 top-0 bg-blue-500 text-white text-xs font-bold px-2 py-1 border-2 border-black whitespace-nowrap opacity-0 group-hover/flag:opacity-100 transition-opacity pointer-events-none z-10",
                                    children: "Arduino Uno R3"
                                  })]
                                }), S.jsxs("div", {
                                  className: "group/flag relative",
                                  children: [S.jsx("div", {
                                    className: "w-8 h-8 bg-yellow-500 border-2 border-black shadow-md flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition-colors",
                                    children: S.jsx(_E, {
                                      className: "w-5 h-5 text-white"
                                    })
                                  }), S.jsx("div", {
                                    className: "absolute left-10 top-0 bg-yellow-500 text-white text-xs font-bold px-2 py-1 border-2 border-black whitespace-nowrap opacity-0 group-hover/flag:opacity-100 transition-opacity pointer-events-none z-10",
                                    children: "N-MOSFET Motor Control"
                                  })]
                                }), S.jsxs("div", {
                                  className: "group/flag relative",
                                  children: [S.jsx("div", {
                                    className: "w-8 h-8 bg-green-700 border-2 border-black shadow-md flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors",
                                    children: S.jsx(CE, {
                                      className: "w-5 h-5 text-white"
                                    })
                                  }), S.jsx("div", {
                                    className: "absolute left-10 top-0 bg-green-700 text-white text-xs font-bold px-2 py-1 border-2 border-black whitespace-nowrap opacity-0 group-hover/flag:opacity-100 transition-opacity pointer-events-none z-10",
                                    children: "Plant Still Alive 9+ Months Later"
                                  })]
                                })]
                              }),

                                         h.title === "Wi-Fi Desk Buddy" && S.jsxs("div", {
                                className: "absolute top-2 left-2 flex flex-col",
                                style: {
                                  gap: "6px"
                                },
                                children: [S.jsxs("div", {
                                  className: "group/flag relative",
                                  children: [S.jsx("div", {
                                    className: "w-8 h-8 border-2 border-black shadow-md flex items-center justify-center cursor-pointer transition-colors",
                                    style: {
                                      backgroundColor: '#BD3657'
                                    },
                                    onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#D14066',
                                    onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#BD3657',
                                    children: S.jsx(Mm, {
                                      className: "w-5 h-5 text-white"
                                    })
                                  }), S.jsx("div", {
                                    className: "absolute left-10 top-0 text-white text-xs font-bold px-2 py-1 border-2 border-black whitespace-nowrap opacity-0 group-hover/flag:opacity-100 hover:brightness-110 transition-opacity pointer-events-none z-10",
                                    style: {
                                      backgroundColor: '#BD3657'
                                    },
                                    children: "Raspberry Pi Pico 2 W"
                                  })]
                                }), S.jsxs("div", {
                                  className: "group/flag relative",
                                  children: [S.jsx("div", {
                                    className: "w-8 h-8 border-2 border-black shadow-md flex items-center justify-center cursor-pointer transition-colors",
                                    style: {
                                      backgroundColor: '#F97316'
                                    },
                                    onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#FB923C',
                                    onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#F97316',
                                    children: S.jsx(WifiSync, {
                                      className: "w-5 h-5 text-white"
                                    })
                                  }), S.jsx("div", {
                                    className: "absolute left-10 top-0 text-white text-xs font-bold px-2 py-1 border-2 border-black whitespace-nowrap opacity-0 group-hover/flag:opacity-100 transition-opacity pointer-events-none z-10",
                                    style: {
                                      backgroundColor: '#F97316'
                                    },
                                    children: "Wi-Fi & NTP Sync"
                                  })]
                                }), S.jsxs("div", {
                                  className: "group/flag relative",
                                  children: [S.jsx("div", {
                                    className: "w-8 h-8 border-2 border-black shadow-md flex items-center justify-center cursor-pointer transition-colors",
                                    style: {
                                      backgroundColor: '#14B8A6'
                                    },
                                    onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2DD4BF',
                                    onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#14B8A6',
                                    children: S.jsx(Lightbulb, {
                                      className: "w-5 h-5 text-white"
                                    })
                                  }), S.jsx("div", {
                                    className: "absolute left-10 top-0 text-white text-xs font-bold px-2 py-1 border-2 border-black whitespace-nowrap opacity-0 group-hover/flag:opacity-100 transition-opacity pointer-events-none z-10",
                                    style: {
                                      backgroundColor: '#14B8A6'
                                    },
                                    children: "OLED Display"
                                  })]
                                })]
                              })]
                            }),
                                       
               S.jsx("h3", {
                 className: "text-xl font-bold mb-3",
                 children: h.title
               }), S.jsx("p", {
                 className: "text-lg text-gray-600 mb-6 flex-grow",
                 children: h.description
               }), S.jsx("div", {
                 className: "mb-6 flex flex-wrap gap-2",
                 children: h.techStack.map(b => S.jsx("span", {
                   className: "px-2 py-1 bg-gray-100 border border-black text-xs font-bold uppercase tracking-wide",
                   children: b
                 }, b))
               }), 
                  S.jsx("div", {
                 className: "mt-auto",
                 children: S.jsxs("div", {
                   className: h.title==="Vyrex"?"grid grid-cols-1 gap-2":"grid grid-cols-2 gap-2",
                   children: [

                     S.jsxs("button", {
                        onClick: () => o({
                          ...h,
                          image: v
                        }),
                        className: "flex items-center justify-center py-3 bg-black text-white border-2 border-black hover:text-yellow-400 hover:bg-gray-700 hover:border-black font-bold text-sm uppercase transition-colors cursor-pointer",
                        "data-testid": `button-view-project-${h.id}`,
                        children: [S.jsx(TE, {
                          className: "w-4 h-4 mr-2"
                        }), " View Project"]
                      }),
                     
                     h.title!=="Vyrex" && S.jsxs("button", {
                     onClick: () => window.open('https://github.com/jad-jkh?tab=repositories', '_blank'),
                     className: "flex items-center justify-center py-3 bg-purple-700 text-white border-2 border-black hover:text-purple-700 hover:bg-yellow-400  font-bold text-sm uppercase transition-colors cursor-pointer",
                     "data-testid": `button-github-${h.id}`,
                     children: [S.jsx(Github, {
                       className: "w-4 h-4 mr-2"
                     }), " GitHub"]
                   })
                             ]
                 })
               })]
               })
               },

               h.id)
               })
               })]
               })]
               })
                         //END PROJECT AREA







               
              //LEADERSHIP AREA
               , S.jsx("section", {
			id: "leadership",
			className: "py-24 bg-[#500000] text-white border-y-4 border-black",
			children: S.jsxs("div", {
				className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
				children: [S.jsx(Js, {
					title: "LEADERSHIP",
					subtitle: "organizational involvements & responsibilities undertaken",
					color: "bg-[#D4AF37]",
					whiteOutline: !0
				}), S.jsx("div", {
					className: "space-y-8",
					children: f?.map((h, g) => S.jsxs(Ut.div, {
						initial: {
							opacity: 0,
							x: -50
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: {
							once: !0
						},
						transition: {
							delay: g * .1
						},
						className: "relative pl-8 md:pl-0",
						children: [S.jsx("div", {
							className: "absolute left-0 top-0 bottom-0 w-1 bg-black md:hidden"
						}), S.jsxs("div", {
							className: "bg-white text-black p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative",
							children: [S.jsx("div", {
								className: "absolute top-0 right-0 w-8 h-8 bg-yellow-400 border-l-4 border-b-4 border-black"
							}), S.jsxs("div", {
								className: "flex flex-col md:flex-row md:items-center justify-between mb-4",
								children: [S.jsxs("div", {
									className: "flex items-center gap-4",
									children: [S.jsxs("div", {
										className: "w-14 h-14 border-2 border-black bg-white flex items-center justify-center overflow-hidden",
										children: [S.jsx("img", {
											src: `./images/org-${h.id}.png`,
											alt: h.organization,
											className: "w-12 h-12 object-contain",
											onError: y => {
												y.currentTarget.style.display = "none", y.currentTarget.nextElementSibling?.classList.remove("hidden")
											}
										}), S.jsx(wE, {
											className: "w-8 h-8 text-gray-400 hidden"
										})]
									}), S.jsxs("div", {
										className: "flex-1",
										children: [S.jsx("h3", {
											className: "font-bold text-lg md:text-xl leading-tight",
											children: h.organization
										}), S.jsx("p", {
											className: "font-bold text-gray-500 font-[family-name:var(--font-body)] text-base",
											children: h.role
										})]
									})]
								}), S.jsx("span", {
									className: "mt-2 md:hidden inline-block px-3 py-1 bg-black text-white font-[family-name:var(--font-display)] text-xs",
									children: h.year
								}), S.jsx("div", {
									className: "hidden md:flex flex-col items-center px-3 py-2 bg-black text-white font-[family-name:var(--font-display)] text-xs text-center",
									style: {
										gap: "2px"
									},
									children: h.year.includes(" - ") ? S.jsxs(S.Fragment, {
										children: [S.jsx("div", {
											className: "whitespace-nowrap",
											children: h.year.split(" - ")[0]
										}), S.jsx("div", {
											className: "whitespace-nowrap",
											children: h.year.split(" - ")[1]
										})]
									}) : S.jsx("div", {
										className: "whitespace-nowrap",
										children: h.year
									})
								})]
							}), S.jsx("div", {
								className: "text-lg whitespace-pre-line",
								children: h.description
							})]
						})]
					}, h.id))
				})]
			})
		}), S.jsx("section", {
			id: "skills",
			className: "py-24 pb-32",
			children: S.jsxs("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: [S.jsx(Js, {
					title: "SKILLS",
					subtitle: "technical, programming, & software skills",
					color: "bg-accent"
				}), S.jsxs("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
					children: [S.jsxs("div", {
						className: "bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] relative",
						children: [S.jsx("div", {
							className: "absolute top-3 right-3",
							children: S.jsx("span", {
								className: "text-3xl",
								children: "🔌"
							})
						}), S.jsx("h3", {
							className: "text-xl font-black uppercase mb-4 border-b-4 border-gray-200 pb-2",
							children: "Technical"
						}), S.jsx("div", {
							className: "flex flex-col",
							style: {
								gap: "0.5rem"
							},
							children: p && p.filter(h => h.category === "Technical").map(h => S.jsx("span", {
								className: "px-3 py-2 bg-gray-100 border-2 border-black text-sm font-bold block",
								children: h.name
							}, h.id))
						})]
					}), S.jsxs("div", {
						className: "bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] relative",
						children: [S.jsx("div", {
							className: "absolute top-3 right-3",
							children: S.jsx("span", {
								className: "text-3xl",
								children: "💻"
							})
						}), S.jsx("h3", {
							className: "text-xl font-black uppercase mb-4 border-b-4 border-gray-200 pb-2",
							children: "Programming"
						}), S.jsx("div", {
							className: "flex flex-col",
							style: {
								gap: "0.5rem"
							},
							children: p && p.filter(h => h.category === "Programming").map(h => S.jsx("span", {
								className: "px-3 py-2 bg-gray-100 border-2 border-black text-sm font-bold block",
								children: h.name
							}, h.id))
						})]
					}), S.jsxs("div", {
						className: "bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] relative",
						children: [S.jsx("div", {
							className: "absolute top-3 right-3",
							children: S.jsx("span", {
								className: "text-3xl",
								children: "📱"
							})
						}), S.jsx("h3", {
							className: "text-xl font-black uppercase mb-4 border-b-4 border-gray-200 pb-2",
							children: "Software"
						}), S.jsx("div", {
							className: "flex flex-col",
							style: {
								gap: "0.5rem"
							},
							children: p && p.filter(h => h.category === "Software").map(h => S.jsx("span", {
								className: "px-3 py-2 bg-gray-100 border-2 border-black text-sm font-bold block",
								children: h.name
							}, h.id))
						})]
					})]
				}), S.jsxs("div", {
					id: "certifications",
					className: "relative mt-12 pt-12 pb-8",
					children: [S.jsx("div", {
						className: "absolute top-0 h-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-yellow-100/50 to-yellow-200/80 rounded-t-3xl pointer-events-none",
						style: {
							left: "calc(-50vw + 50%)",
							right: "calc(-50vw + 50%)",
							width: "100vw"
						}
					}), S.jsxs("div", {
						className: "relative",
						style: {
							display: "flex",
							flexDirection: "column",
							gap: "1rem"
						},
						children: [S.jsxs("h3", {
							className: "text-2xl font-black uppercase flex items-center",
							style: {
								gap: "0.75rem"
							},
							children: [S.jsx(jm, {
								className: "w-7 h-7 text-yellow-500"
							}), "Certifications"]
						}), p && p.filter(h => h.category === "Certifications").map(h => S.jsx("div", {
							className: "bg-yellow-50 p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]",
							children: S.jsxs("div", {
								className: "flex items-center",
								style: {
									gap: "0.75rem"
								},
								children: [S.jsx("span", {
									className: "text-2xl",
									children: "🎖️"
								}), S.jsx("span", {
									className: "text-lg font-bold",
									children: h.name
								})]
							})
						}, h.id))]
					})]
				})]
			})
		}), 
               
               S.jsx("footer", {
			className: "bg-black text-white py-12 text-center border-t-4 border-accent",
			children: S.jsxs("div", {
				className: "max-w-7xl mx-auto px-4",
				children: [S.jsxs("div", {
					className: "flex items-center justify-center gap-4 mb-8",
					children: [S.jsx("div", {
						className: "w-3 h-3 bg-red-500 animate-pulse rounded-full"
					}), S.jsx("p", {
						className: "font-[family-name:var(--font-display)] text-sm",
						children: "CONNECT WITH ME"
					}), S.jsx("div", {
						className: "w-3 h-3 bg-red-500 animate-pulse rounded-full"
					})]
				}), S.jsx("h2", {
					className: "text-3xl font-bold mb-6",
					children: "LET'S BUILD SOMETHING"
				}), 
                   
                   
                   S.jsxs("div", {
                     className: "flex flex-wrap justify-center gap-4 mb-8",
                     children: [S.jsx("a", {
                       href: "./images/RES_PUB.pdf",
                       target: "_blank",
                       rel: "noopener noreferrer",
                       className: "inline-flex items-center gap-2 px-3 py-3 bg-white text-black border-4 border-white font-bold uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:bg-[gray] hover:border-[gray] transition-all",
                       "data-testid": "footer-button-resume",
                       children: S.jsx(Dy, {
                         className: "w-5 h-5"
                       })
                       
                     }), S.jsx("a", {
                       href: "https://www.linkedin.com/in/jadksrahaddad",
                       target: "_blank",
                       rel: "noopener noreferrer",
                       className: "inline-flex items-center gap-2 px-3 py-3 bg-[#0077B5] text-white border-4 border-[#0077B5] font-bold uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:bg-[#005885] hover:border-[#005885] transition-all",
                       "data-testid": "footer-button-linkedin",
                       children: S.jsx(My, {
                         className: "w-5 h-5"
                       })
                     }), S.jsx("a", {
                       href: "mailto:jadkh6@gmail.com",
                       className: "inline-flex items-center gap-2 px-3 py-3 bg-[#D14836] text-white border-4 border-[#D14836] font-bold uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:bg-[#B0281A] hover:border-[#B0281A] transition-all",
                       "data-testid": "footer-button-email",
                       children: S.jsx(eO, {
                         className: "w-5 h-5"
                       })
                     }), S.jsx("a", {
                       href: "https://github.com/jad-jkh",
                       target: "_blank",
                       rel: "noopener noreferrer",
                       className: "inline-flex items-center gap-2 px-3 py-3 bg-purple-700 text-white border-4 border-purple-700 font-bold uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:bg-purple-900 hover:border-purple-900 transition-all",
                       "data-testid": "footer-button-github",
                       children: S.jsx(Github, {
                         className: "w-5 h-5"
                       })
                     }),
																S.jsx("a", {
                       href: "https://www.instagram.com/jad.jkh",
                       target: "_blank",
                       rel: "noopener noreferrer",
                       className: "inline-flex items-center gap-2 px-3 py-3 bg-pink-600 border-4 border-pink-600 text-white font-bold uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:bg-pink-800 hover:border-pink-800 transition-all",

                       children: S.jsx(Instagram, {
                         className: "w-5 h-5"
                       })
                     })]
                   }),
                   
                   
                   S.jsxs("p", {
					className: "font-[family-name:var(--font-body)] text-gray-500 text-lg",
					children: ["© ", new Date().getFullYear(), " JKH, Jad K. Haddad"]
				})]
			})
		}), S.jsx(Ac, {
			children: i && S.jsxs(Ut.div, {
				initial: {
					opacity: 0
				},
				animate: {
					opacity: 1
				},
				exit: {
					opacity: 0
				},
				className: "fixed inset-0 z-50 flex items-center justify-center p-4",
				onClick: () => o(null),
				children: [S.jsx("div", {
					className: "absolute inset-0 bg-black/80"
				}), S.jsxs(Ut.div, {
					initial: {
						scale: .9,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					exit: {
						scale: .9,
						opacity: 0
					},
					onClick: h => h.stopPropagation(),
					className: "relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full max-h-[90vh] overflow-y-auto",
					children: [S.jsx("button", {
						onClick: () => o(null),
						className: "absolute top-4 right-4 w-10 h-10 bg-black text-white border-2 border-black hover:bg-red-500 flex items-center justify-center z-10",
						"data-testid": "button-close-modal",
						children: S.jsx(lf, {
							className: "w-6 h-6"
						})
					}), i.image && S.jsx("div", {
						className: `w-full h-64 overflow-hidden ${i.title==="Vyrex"?"bg-white p-6":"bg-gray-900"}`,
						children: S.jsx("img", {
							src: i.image,
							alt: i.title,
							className: `w-full h-full ${i.title==="Vyrex"?"object-contain":"object-cover"}`
						})
					}), S.jsxs("div", {
						className: "p-6",
						children: [S.jsx("h2", {
							className: "text-2xl md:text-3xl font-black mb-4",
							children: i.title
						}), S.jsx("p", {
							className: "text-lg text-gray-700 mb-6",
							children: i.description
						}), S.jsxs("div", {
							className: "mb-6",
							children: [S.jsx("h3", {
								className: "font-bold text-sm uppercase tracking-wide mb-3 text-gray-500",
								children: "Technologies Used"
							}), S.jsx("div", {
								className: "flex flex-wrap gap-2",
								children: i.techStack?.map(h => S.jsx("span", {
									className: "px-3 py-2 bg-gray-100 border-2 border-black text-sm font-bold uppercase",
									children: h
								}, h))
							})]
						}), S.jsxs("div", {
							className: "border-t-4 border-gray-200 pt-6",
							children: [S.jsx("h3", {
								className: "font-bold text-sm uppercase tracking-wide mb-3 text-gray-500",
								children: "Project Highlights"
							}), S.jsx("ul", {
								className: "space-y-2 text-lg",
								children: i.highlights?.map((h, idx) => S.jsxs("li", {
									className: "flex items-start gap-2",
									children: [S.jsx("span", {
										className: "text-primary font-bold",
										children: "→"
									}), S.jsx("span", {
										children: h
									})]
								}, idx))
							})]
						}), S.jsx("button", {
							onClick: () => o(null),
							className: "mt-6 w-full py-3 bg-black text-white border-2 border-black hover:bg-primary hover:border-primary font-bold uppercase transition-colors",
							"data-testid": "button-close-modal-bottom",
							children: "Close"
						})]
					})]
				})]
			})
		})]
	})
}

function nO() {
	return S.jsxs(PS, {
		children: [S.jsx(hm, {
			path: "/",
			component: tO
		}), S.jsx(hm, {
			component: oC
		})]
	})
}

function rO() {
	return S.jsx(YS, {
		client: cb,
		children: S.jsxs(JT, {
			children: [S.jsx(fP, {}), S.jsx(nO, {})]
		})
	})
}
nS.createRoot(document.getElementById("root")).render(S.jsx(rO, {}));
