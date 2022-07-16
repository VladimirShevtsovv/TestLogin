"use strict";

new Vivus("my-svg", {
  type: "delayed",
  duration: 200
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var e = document.getElementById("dateError"),
      t = document.getElementById("nationalityError"),
      s = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      i = ["American", "Armenian", "Belgian", "Canadian", "Danish"],
      n = document.getElementById("dateChoicesDayList"),
      o = document.getElementById("dateChoicesDay"),
      l = document.getElementById("dateDaysArrow");

  var _loop = function _loop(_t) {
    var s = document.createElement("li");
    s.classList.add("dateDaysList-item"), s.innerHTML = "".concat(_t), s.addEventListener("click", function (t) {
      o.innerHTML = s.textContent, n.classList.remove("visibleSelect"), l.classList.remove("rotateImg"), o.style.borderBottom = "1px solid #42bd25", o.textContent && c.textContent && m.textContent && (e.style.color = "white");
    }), n.append(s);
  };

  for (var _t = 1; _t < 32; _t++) {
    _loop(_t);
  }

  o.addEventListener("click", function (e) {
    n.classList.toggle("visibleSelect"), l.classList.toggle("rotateImg");
  });
  var a = document.getElementById("dateChoicesMonthList"),
      c = document.getElementById("dateChoicesDateMonth"),
      r = document.getElementById("dateMonthArrow");
  c.addEventListener("click", function (e) {
    a.classList.toggle("visibleSelect"), r.classList.toggle("rotateImg");
  });

  var _loop2 = function _loop2(_t2) {
    var i = document.createElement("li");
    i.classList.add("dateDaysList-item"), i.innerHTML = "".concat(s[_t2]), i.addEventListener("click", function (t) {
      c.innerHTML = i.textContent, a.classList.remove("visibleSelect"), r.classList.remove("rotateImg"), c.style.borderBottom = "1px solid #42bd25", o.textContent && c.textContent && m.textContent && (e.style.color = "white", e.classList.remove("errors-visible"));
    }), a.append(i);
  };

  for (var _t2 = 0; _t2 < s.length; _t2++) {
    _loop2(_t2);
  }

  var d = document.getElementById("dateChoicesYearsList"),
      m = document.getElementById("dateChoicesDateYears"),
      L = document.getElementById("dateYearsArrow");
  m.addEventListener("click", function (e) {
    d.classList.toggle("visibleSelect"), L.classList.toggle("rotateImg");
  });

  var _loop3 = function _loop3(_t3) {
    var s = document.createElement("li");
    s.classList.add("dateDaysList-item"), s.innerHTML = 1995 + _t3, s.addEventListener("click", function (t) {
      m.innerHTML = s.textContent, d.classList.remove("visibleSelect"), L.classList.remove("rotateImg"), m.style.borderBottom = "1px solid #42bd25", o.textContent && c.textContent && m.textContent && (e.style.color = "white", e.classList.remove("errors-visible"));
    }), d.append(s);
  };

  for (var _t3 = 0; _t3 < 31; _t3++) {
    _loop3(_t3);
  }

  var g = document.getElementById("dateChoicesNationalityList"),
      v = document.getElementById("dateChoicesDateNationality"),
      u = document.getElementById("dateNationalityArrow");
  v.addEventListener("click", function (e) {
    g.classList.toggle("visibleSelect"), u.classList.toggle("rotateImg");
  });

  var _loop4 = function _loop4(_e) {
    var s = document.createElement("li");
    s.classList.add("dateDaysList-item"), s.innerHTML = "".concat(i[_e]), s.addEventListener("click", function (e) {
      v.innerHTML = s.textContent, g.classList.remove("visibleSelect"), u.classList.remove("rotateImg"), v.style.borderBottom = "1px solid #42bd25", t.style.color = "white";
    }), g.append(s);
  };

  for (var _e = 0; _e < i.length; _e++) {
    _loop4(_e);
  }

  document.addEventListener("click", function (e) {
    e.target.id.includes("dateChoicesDateNationality") || (g.classList.remove("visibleSelect"), u.classList.remove("rotateImg")), e.target.id.includes("List") || e.target.id.includes("date") || (g.classList.remove("visibleSelect"), u.classList.remove("rotateImg"), d.classList.remove("visibleSelect"), L.classList.remove("rotateImg"), a.classList.remove("visibleSelect"), r.classList.remove("rotateImg"), n.classList.remove("visibleSelect"), l.classList.remove("rotateImg")), e.target.id.includes("dateChoicesDateNationality") && (d.classList.remove("visibleSelect"), L.classList.remove("rotateImg"), a.classList.remove("visibleSelect"), r.classList.remove("rotateImg"), n.classList.remove("visibleSelect"), l.classList.remove("rotateImg"));
  }), document.getElementById("button");
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

document.addEventListener("DOMContentLoaded", function () {
  var e = document.getElementById("button"),
      t = document.querySelector(".lds-dual-ring"),
      o = document.querySelector(".successful-register"),
      i = document.querySelector(".isLogin"),
      s = document.querySelectorAll(".form__input"),
      r = document.querySelectorAll(".containerWithChoicesValue"),
      l = document.getElementById("dateError"),
      n = document.getElementById("nationalityError"),
      d = document.querySelectorAll(".checkBox"),
      a = document.querySelector("#genderError"),
      u = document.querySelector("#input__password"),
      c = document.querySelector("#input__passwordConfirm");
  var m = 0;
  d.forEach(function (e) {
    e.addEventListener("click", function () {
      m += 1, a.classList.remove("errors-visible");
    });
  }), e.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _e, _t, _t2, _o, _i, _e2, _e3, p, _l, _o2, _l2;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            for (_e = 0; _e < s.length; _e++) {
              if (s[_e].value) {
                if (s[_e].id.includes("email")) {
                  _t = s[_e].value;
                  (_t.endsWith(".by") || _t.endsWith(".uk") || _t.endsWith(".ru") || _t.endsWith(".com")) && _t.includes("@") && 0 !== _t.indexOf() || (s[_e].previousElementSibling.classList.add("errors-visible"), s[_e].previousElementSibling.textContent = "incorrect email", s[_e].style.borderBottom = "1px solid #FF2222");
                }

                if ("input__password" === s[_e].id) {
                  _t2 = s[_e].value, _o = {
                    lowerCase: 0,
                    upperCase: 0,
                    num: 0
                  };
                  _i = _t2.split("");

                  for (_e2 = 0; _e2 < _i.length; _e2++) {
                    isNaN(Number(_i[_e2])) ? _i[_e2] === _i[_e2].toUpperCase() ? _o.upperCase += 1 : _o.lowerCase += 1 : _o.num += 1;
                  }

                  _t2.length < 8 ? (s[_e].previousElementSibling.textContent = "very short", s[_e].previousElementSibling.classList.add("errors-visible"), s[_e].style.borderBottom = "1px solid #FF2222") : 0 !== _o.lowerCase && 0 !== _o.upperCase && 0 !== _o.num || (s[_e].previousElementSibling.textContent = "incorrect password", s[_e].previousElementSibling.classList.add("errors-visible"), s[_e].style.borderBottom = "1px solid #FF2222");
                }

                "input__passwordConfirm" === s[_e].id && u.value !== c.value && (s[_e].previousElementSibling.textContent = "not confirmed", s[_e].previousElementSibling.classList.add("errors-visible"), s[_e].style.borderBottom = "1px solid #FF2222");
              } else s[_e].id.includes("email") ? s[_e].previousElementSibling.textContent = "incorrect email" : (s[_e].previousElementSibling.textContent = "required field", "input__password" === s[_e].id && (s[_e].previousElementSibling.textContent = "incorrect password"), "input__passwordConfirm" === s[_e].id && (s[_e].previousElementSibling.textContent = "not confirmed")), s[_e].style.borderBottom = "1px solid #FF2222", s[_e].previousElementSibling.classList.add("errors-visible");
            }

            for (_e3 = 0; _e3 < r.length; _e3++) {
              r[_e3].textContent || (r[_e3].style.borderBottom = "1px solid #FF2222", r[_e3].id.includes("date") && !r[_e3].id.includes("Nationality") && l.classList.add("errors-visible"), r[_e3].id.includes("Nationality") && n.classList.add("errors-visible"));
            }

            0 === m && (a.textContent = "choose something", a.classList.add("errors-visible"));
            p = document.querySelectorAll(".errors-visible");

            if (!(console.log(p), 0 === p.length)) {
              _context.next = 39;
              break;
            }

            _l = Math.round(Math.random());

            if (!(t.style.display = "inline-block", e.style.color = "#5A61ED", e.setAttribute("disabled", "disabled"), 1 === _l)) {
              _context.next = 22;
              break;
            }

            _context.next = 9;
            return fetch("http://localhost:3000/error", {
              method: "GET"
            });

          case 9:
            _o2 = _context.sent;
            _context.t0 = console;
            _context.next = 13;
            return _o2.json();

          case 13:
            _context.t1 = _context.sent;

            _context.t0.log.call(_context.t0, _context.t1);

            e.classList.add("button__error");
            setTimeout(function () {
              e.classList.remove("button__error");
            }, 2200);
            t.style.display = "none";
            e.style.color = "white";
            e.removeAttribute("disabled");
            _context.next = 39;
            break;

          case 22:
            _context.next = 24;
            return fetch("http://localhost:3004/ok", {
              method: "GET"
            });

          case 24:
            _l2 = _context.sent;
            _context.t2 = console;
            _context.next = 28;
            return _l2.json();

          case 28:
            _context.t3 = _context.sent;

            _context.t2.log.call(_context.t2, _context.t3);

            s.forEach(function (e) {
              e.value = "", e.style.borderBottom = "1px solid #F2F2F2";
            });
            r.forEach(function (e) {
              e.innerHTML = "", e.style.borderBottom = "1px solid #F2F2F2";
            });
            d.forEach(function (e) {});
            t.style.display = "none";
            e.style.color = "white";
            e.removeAttribute("disabled");
            o.style.transform = "translateY(0)";
            o.style.opacity = "1";
            i.style.zIndex = "350";

          case 39:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))), s.forEach(function (e) {
    e.addEventListener("input", function () {
      if ("" !== e.value) {
        if (e.id.includes("email")) {
          var _t3 = e.value;
          (_t3.endsWith(".by") || _t3.endsWith(".uk") || _t3.endsWith(".ru") || _t3.endsWith(".com") && _t3.includes("@") && 0 !== _t3.indexOf()) && (e.previousElementSibling.classList.remove("errors-visible"), e.style.borderBottom = "1px solid #42bd25");
        } else {
          if (e.previousElementSibling.classList.remove("errors-visible"), e.style.borderBottom = "1px solid #42bd25", "input__password" === e.id) {
            var _t4 = e.value,
                _o3 = {
              lowerCase: 0,
              upperCase: 0,
              num: 0
            };

            var _i2 = _t4.split("");

            for (var _e4 = 0; _e4 < _i2.length; _e4++) {
              isNaN(Number(_i2[_e4])) ? _i2[_e4] === _i2[_e4].toUpperCase() ? _o3.upperCase += 1 : _o3.lowerCase += 1 : _o3.num += 1;
            }

            _t4.length < 8 || 0 === _o3.lowerCase || 0 === _o3.upperCase || 0 === _o3.num ? (e.previousElementSibling.textContent = "incorrect password", e.previousElementSibling.classList.add("errors-visible"), e.style.borderBottom = "1px solid #FF2222") : (e.previousElementSibling.classList.remove("errors-visible"), e.style.borderBottom = "1px solid #42bd25");
          }

          "input__passwordConfirm" === e.id && (u.value === c.value && "" !== c.value ? (e.style.borderBottom = "1px solid #42bd25", e.previousElementSibling.classList.remove("errors-visible")) : (e.previousElementSibling.textContent = "not confirmed", e.style.borderBottom = "1px solid #FF2222", e.previousElementSibling.classList.add("errors-visible")));
        }
      } else e.id.includes("email") ? e.previousElementSibling.textContent = "incorrect email" : (e.previousElementSibling.textContent = "required field", "input__password" === e.id && (e.previousElementSibling.textContent = "incorrect password"), "input__passwordConfirm" === e.id && (e.previousElementSibling.textContent = "not confirmed")), e.previousElementSibling.classList.add("errors-visible"), e.style.borderBottom = "1px solid #FF2222";
    });
  });
  var p = document.querySelectorAll(".form__row");

  var _loop = function _loop(_e5) {
    setTimeout(function () {
      p[_e5].style.transform = "translateY(0px)", p[_e5].style.opacity = "1";
    }, 300 * _e5);
  };

  for (var _e5 = 0; _e5 < p.length - 1; _e5++) {
    _loop(_e5);
  }
});