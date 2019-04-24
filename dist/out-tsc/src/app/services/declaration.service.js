import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var DeclarationService = /** @class */ (function () {
    function DeclarationService(http) {
        this.http = http;
    }
    DeclarationService.prototype.findAll = function () {
        return this.http.get("http://localhost:8888/ds/liste");
    };
    DeclarationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DeclarationService);
    return DeclarationService;
}());
export { DeclarationService };
//# sourceMappingURL=declaration.service.js.map