	(function() {
		var d = Date.now || function() {
			return +new Date
		};
		var e = document,
		g = window;
		var h = function(a, b, f) {
			a.addEventListener ? a.addEventListener(b, f, void 0) : a.attachEvent && a.attachEvent("on" + b, f)
		};
		var u = function(a, b, f, c, p, q, r, t) {
			k(e.hidden) ? (this.g = "hidden", this.j = "visibilitychange") : k(e.mozHidden) ? (this.g = "mozHidden", this.j = "mozvisibilitychange") : k(e.msHidden) ? (this.g = "msHidden", this.j = "msvisibilitychange") : k(e.webkitHidden) && (this.g = "webkitHidden", this.j = "webkitvisibilitychange");
			this.h = !1;
			this.i = -1;
			this.A = a;
			this.B = b;
			this.o = f;
			this.v = p;
			this.s = q ? "mousedown" : "click";
			c && e[this.g] && l(this, 2);
			this.w = r;
			this.u = t || 0;
			this.m = null;
			m(this);
			n(this)
		},
		m = function(a) {
			h(e, a.j, function() {
				if (e[a.g]) a.h && (a.h = !1, a.i = d(), l(a, 0));
				else {
					if (-1 != a.i) {
						var b = d() - a.i;
						b > a.u && (a.i = -1, l(a, 1, b))
					}
					a.v && l(a, 3)
				}
			})
		},
		n = function(a) {
			h(g, a.s, function(b) {
				return a.l(b)
			})
		};
		u.prototype.l = function(a) {
			var b = this;
			this.m = a.button;
			this.h = !0;
			g.setTimeout(function() {
				b.h = !1
			}, 5E3)
		};
		u.prototype.handleClick = u.prototype.l;
		var l = function(a, b, f) {
			var c = ["//", a.o ? "googleads.g.doubleclick.net" : "pagead2.googlesyndication.com", "/pagead/gen_204?id=wfocus", "&gqid=" + a.A, "&qqid=" + a.B].join("");
			0 == b && (c += "&return=0");
			1 == b && (c += "&return=1&timeDelta=" + f, a.w && (c += "&cbtn=" + a.m));
			2 == b && (c += "&bgload=1");
			3 == b && (c += "&fg=1");
			g.google_image_requests || (g.google_image_requests = []);
			a = g.document.createElement("img");
			a.src = c;
			g.google_image_requests.push(a)
		},
		k = function(a) {
			return "undefined" !== typeof a
		};
		var v = function(a, b, f, c, p, q, r, t) {
			return new u(a, b, f, c, p, q, r, t)
		},
		w = ["wfocusnhinit"],
		x = this;
		w[0] in x || !x.execScript || x.execScript("var " + w[0]);
		for (var y; w.length && (y = w.shift());) {
			var z;
			if (z = !w.length) z = void 0 !== v;
			z ? x[y] = v : x[y] && x[y] !== Object.prototype[y] ? x = x[y] : x = x[y] = {}
		}
		var A = g.google_wf_async,
		B;
		if (B = A && A.call) B = "function" === typeof A;
		B && g.google_wf_async();
	}).call(this);