"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printMultiplicationTable = printMultiplicationTable;
function printMultiplicationTable(base, limit) {
    if (limit === void 0) { limit = 10; }
    for (var index = 1; index <= limit; index++) {
        console.log("".concat(base, " x ").concat(index, " = ").concat(base * index));
    }
}
