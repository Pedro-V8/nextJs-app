(function() {
var exports = {};
exports.id = "pages/api/cadastro";
exports.ids = ["pages/api/cadastro"];
exports.modules = {

/***/ "./pages/api/cadastro.ts":
/*!*******************************!*\
  !*** ./pages/api/cadastro.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const tarefaData = req.body;
  const savedTarefa = await prisma.tarefa.create({
    data: tarefaData
  });
  return res.json(savedTarefa);
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/cadastro.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0TmV4dC8uL3BhZ2VzL2FwaS9jYWRhc3Ryby50cyIsIndlYnBhY2s6Ly90ZXN0TmV4dC9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50IiwicmVxIiwicmVzIiwidGFyZWZhRGF0YSIsImJvZHkiLCJzYXZlZFRhcmVmYSIsInRhcmVmYSIsImNyZWF0ZSIsImRhdGEiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsd0RBQUosRUFBZjtBQUVBLCtEQUFlLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQW9EO0FBQy9ELFFBQU1DLFVBQVUsR0FBR0YsR0FBRyxDQUFDRyxJQUF2QjtBQUVBLFFBQU1DLFdBQVcsR0FBRyxNQUFNTixNQUFNLENBQUNPLE1BQVAsQ0FBY0MsTUFBZCxDQUFxQjtBQUMzQ0MsUUFBSSxFQUFFTDtBQURxQyxHQUFyQixDQUExQjtBQUlBLFNBQU9ELEdBQUcsQ0FBQ08sSUFBSixDQUFTSixXQUFULENBQVA7QUFFSCxDQVRELEU7Ozs7Ozs7Ozs7O0FDTEEsNEMiLCJmaWxlIjoicGFnZXMvYXBpL2NhZGFzdHJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+e1xyXG4gICAgY29uc3QgdGFyZWZhRGF0YSA9IHJlcS5ib2R5XHJcblxyXG4gICAgY29uc3Qgc2F2ZWRUYXJlZmEgPSBhd2FpdCBwcmlzbWEudGFyZWZhLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YTogdGFyZWZhRGF0YVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcmVzLmpzb24oc2F2ZWRUYXJlZmEpXHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=