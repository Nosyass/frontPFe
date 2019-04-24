import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DeclarationService } from '../services/declaration.service';
var DeclarationComponent = /** @class */ (function () {
    function DeclarationComponent(declarationService) {
        this.declarationService = declarationService;
        this.trimestre = ["1", "2", "3", "4"];
        this.annee = ["2019"];
        this.total_reporter = 0;
    }
    DeclarationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.declarationService.findAll().subscribe(function (data) { _this.ds = data; });
        this.remplirAnnee();
        console.log(this.annee);
        if (this.ds != undefined)
            console.log(this.ds.length);
        if (this.ds != undefined)
            for (var index = 0; index < this.ds.length; index++) {
                if (this.renumeration != undefined) {
                    console.log("===" + this.renumeration);
                    this.renumeration.push({ "assure": index, "m1": 1, "m2": 2, "m3": 3 });
                }
            }
        console.log(this.ds);
        if (this.ds != undefined)
            for (var index1 = 0; index1 < this.ds.length; index1++) {
                this.total_reporter = this.total_reporter + this.ds[index1].total_general;
            }
    };
    DeclarationComponent.prototype.changerenum = function (index) {
        this.total_reporter = 0;
        this.ds[index].total_general = parseFloat(this.renumeration[index].m1) + parseFloat(this.renumeration[index].m2) + parseFloat(this.renumeration[index].m3);
        for (var index1 = 0; index1 < this.ds.length; index1++) {
            if (this.total_reporter + this.ds[index1].total_general) {
                this.total_reporter = this.total_reporter + this.ds[index1].total_general;
            }
            else {
                this.total_reporter = 0;
            }
        }
    };
    DeclarationComponent.prototype.remplirAnnee = function () {
        for (var i = 1; i <= 10; i++) {
            var y = 2019 + i;
            this.annee.push(y.toString());
        }
    };
    DeclarationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-declaration',
            templateUrl: './declaration.component.html',
            styleUrls: ['./declaration.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DeclarationService])
    ], DeclarationComponent);
    return DeclarationComponent;
}());
export { DeclarationComponent };
//# sourceMappingURL=declaration.component.js.map