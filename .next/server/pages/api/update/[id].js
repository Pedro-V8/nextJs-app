(function() {
var exports = {};
exports.id = "pages/api/update/[id]";
exports.ids = ["pages/api/update/[id]"];
exports.modules = {

/***/ "./pages/api/update/[id].ts":
/*!**********************************!*\
  !*** ./pages/api/update/[id].ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const idT = Number(req.query.id);
  const {
    titulo,
    descicao
  } = req.body;
  const updatedTarefa = await prisma.tarefa.update({
    where: {
      id: idT
    },
    data: {
      titulo: titulo,
      descicao: descicao
    }
  });
  return res.json(updatedTarefa);
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/update/[id].ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0TmV4dC8uL3BhZ2VzL2FwaS91cGRhdGUvW2lkXS50cyIsIndlYnBhY2s6Ly90ZXN0TmV4dC9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50IiwicmVxIiwicmVzIiwiaWRUIiwiTnVtYmVyIiwicXVlcnkiLCJpZCIsInRpdHVsbyIsImRlc2NpY2FvIiwiYm9keSIsInVwZGF0ZWRUYXJlZmEiLCJ0YXJlZmEiLCJ1cGRhdGUiLCJ3aGVyZSIsImRhdGEiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsd0RBQUosRUFBZjtBQUVBLCtEQUFlLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQW9EO0FBQy9ELFFBQU1DLEdBQUcsR0FBR0MsTUFBTSxDQUFDSCxHQUFHLENBQUNJLEtBQUosQ0FBVUMsRUFBWCxDQUFsQjtBQUNBLFFBQU07QUFBRUMsVUFBRjtBQUFXQztBQUFYLE1BQXdCUCxHQUFHLENBQUNRLElBQWxDO0FBRUEsUUFBTUMsYUFBYSxHQUFHLE1BQU1YLE1BQU0sQ0FBQ1ksTUFBUCxDQUFjQyxNQUFkLENBQXFCO0FBQzdDQyxTQUFLLEVBQUU7QUFDSFAsUUFBRSxFQUFFSDtBQURELEtBRHNDO0FBSTdDVyxRQUFJLEVBQUU7QUFDRlAsWUFBTSxFQUFFQSxNQUROO0FBRUZDLGNBQVEsRUFBRUE7QUFGUjtBQUp1QyxHQUFyQixDQUE1QjtBQVVBLFNBQU9OLEdBQUcsQ0FBQ2EsSUFBSixDQUFTTCxhQUFULENBQVA7QUFFSCxDQWhCRCxFOzs7Ozs7Ozs7OztBQ0xBLDRDIiwiZmlsZSI6InBhZ2VzL2FwaS91cGRhdGUvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PntcclxuICAgIGNvbnN0IGlkVCA9IE51bWJlcihyZXEucXVlcnkuaWQpXHJcbiAgICBjb25zdCB7IHRpdHVsbyAsIGRlc2NpY2FvIH0gPSByZXEuYm9keVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWRUYXJlZmEgPSBhd2FpdCBwcmlzbWEudGFyZWZhLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgaWQ6IGlkVFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0aXR1bG86IHRpdHVsbyxcclxuICAgICAgICAgICAgZGVzY2ljYW86IGRlc2NpY2FvLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZXMuanNvbih1cGRhdGVkVGFyZWZhKVxyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9