"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/hello.js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const DATABASE = "mongodb://admin:admin123@mongo/?authMechanism=SCRAM-SHA-1";
async function handler(req, res) {
    const client = await external_mongodb_namespaceObject.MongoClient.connect(DATABASE);
    const books = await client.db("bookstore").collection("books").find({}).toArray();
    res.status(200).json({
        message: "success",
        books
    });
    client.close();
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(173));
module.exports = __webpack_exports__;

})();