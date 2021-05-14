(function() {
var exports = {};
exports.id = "pages/api/dados";
exports.ids = ["pages/api/dados"];
exports.modules = {

/***/ "./pages/api/dados.ts":
/*!****************************!*\
  !*** ./pages/api/dados.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const dataTarefas = await prisma.tarefa.findMany();
  return res.json(dataTarefas);
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/dados.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0TmV4dC8uL3BhZ2VzL2FwaS9kYWRvcy50cyIsIndlYnBhY2s6Ly90ZXN0TmV4dC9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50IiwicmVxIiwicmVzIiwiZGF0YVRhcmVmYXMiLCJ0YXJlZmEiLCJmaW5kTWFueSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyx3REFBSixFQUFmO0FBRUEsK0RBQWUsT0FBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBb0Q7QUFDL0QsUUFBTUMsV0FBVyxHQUFHLE1BQU1KLE1BQU0sQ0FBQ0ssTUFBUCxDQUFjQyxRQUFkLEVBQTFCO0FBRUEsU0FBT0gsR0FBRyxDQUFDSSxJQUFKLENBQVNILFdBQVQsQ0FBUDtBQUVILENBTEQsRTs7Ozs7Ozs7Ozs7QUNMQSw0QyIsImZpbGUiOiJwYWdlcy9hcGkvZGFkb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT57XHJcbiAgICBjb25zdCBkYXRhVGFyZWZhcyA9IGF3YWl0IHByaXNtYS50YXJlZmEuZmluZE1hbnkoKVxyXG5cclxuICAgIHJldHVybiByZXMuanNvbihkYXRhVGFyZWZhcylcclxuXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==