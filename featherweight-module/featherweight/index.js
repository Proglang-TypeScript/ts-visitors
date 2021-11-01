'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null');
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
exports.__esModule = true;
exports.ObjectFJ = void 0;
var ObjectFJ = /** @class */ (function () {
  function ObjectFJ() {}
  return ObjectFJ;
})();
exports.ObjectFJ = ObjectFJ;
var Pair = /** @class */ (function (_super) {
  __extends(Pair, _super);
  function Pair(fst, snd) {
    var _this = _super.call(this) || this;
    _this.fst = fst;
    _this.snd = snd;
    return _this;
  }
  Pair.prototype.setFst = function (newFst) {
    return new Pair(newFst, this.snd);
  };
  return Pair;
})(ObjectFJ);
exports['default'] = Pair;
