import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var RecapComponent = /** @class */ (function () {
    function RecapComponent() {
        this.trimestre = ["1", "2", "3", "4"];
        this.annee = ["2019"];
        this.assures = [{ "cleAssure": 13, "avantageAssure": null, "employeur": null, "numAssure": 4, "nom": "zed", "prenom": "rg", "statut": "rgtfr", "avantageAssures": [], "employeurs": [] }];
    }
    RecapComponent.prototype.ngOnInit = function () {
        this.remplirAnnee();
        console.log(this.annee);
    };
    RecapComponent.prototype.remplirAnnee = function () {
        for (var i = 1; i <= 10; i++) {
            var y = 2019 + i;
            this.annee.push(y.toString());
        }
    };
    RecapComponent = tslib_1.__decorate([
        Component({
            selector: 'app-recap',
            templateUrl: './recap.component.html',
            styleUrls: ['./recap.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RecapComponent);
    return RecapComponent;
}());
export { RecapComponent };
//# sourceMappingURL=recap.component.js.map