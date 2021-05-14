(function() {
var exports = {};
exports.id = "pages/api/delete/[id]";
exports.ids = ["pages/api/delete/[id]"];
exports.modules = {

/***/ "./pages/api/delete/[id].ts":
/*!**********************************!*\
  !*** ./pages/api/delete/[id].ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const idT = Number(req.query.id);
  const deleteTarefa = await prisma.tarefa.delete({
    where: {
      id: idT
    }
  });
  return res.send('Ok');
});

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/delete/[id].ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0TmV4dC8uL3BhZ2VzL2FwaS9kZWxldGUvW2lkXS50cyIsIndlYnBhY2s6Ly90ZXN0TmV4dC9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50IiwicmVxIiwicmVzIiwiaWRUIiwiTnVtYmVyIiwicXVlcnkiLCJpZCIsImRlbGV0ZVRhcmVmYSIsInRhcmVmYSIsImRlbGV0ZSIsIndoZXJlIiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUEsTUFBTUEsTUFBTSxHQUFHLElBQUlDLHdEQUFKLEVBQWY7QUFFQSwrREFBZSxPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFvRDtBQUMvRCxRQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0gsR0FBRyxDQUFDSSxLQUFKLENBQVVDLEVBQVgsQ0FBbEI7QUFFQSxRQUFNQyxZQUFZLEdBQUcsTUFBTVIsTUFBTSxDQUFDUyxNQUFQLENBQWNDLE1BQWQsQ0FBcUI7QUFDNUNDLFNBQUssRUFBRTtBQUNISixRQUFFLEVBQUVIO0FBREQ7QUFEcUMsR0FBckIsQ0FBM0I7QUFNQSxTQUFPRCxHQUFHLENBQUNTLElBQUosQ0FBUyxJQUFULENBQVA7QUFFSCxDQVhELEU7Ozs7Ozs7Ozs7O0FDTEEsNEMiLCJmaWxlIjoicGFnZXMvYXBpL2RlbGV0ZS9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+e1xyXG4gICAgY29uc3QgaWRUID0gTnVtYmVyKHJlcS5xdWVyeS5pZClcclxuXHJcbiAgICBjb25zdCBkZWxldGVUYXJlZmEgPSBhd2FpdCBwcmlzbWEudGFyZWZhLmRlbGV0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgaWQ6IGlkVFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZXMuc2VuZCgnT2snKVxyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9