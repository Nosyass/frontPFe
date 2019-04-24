import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var EmpComponent = /** @class */ (function () {
    function EmpComponent() {
        this.trimestre = ["1", "2", "3", "4"];
        this.annee = ["2019"];
        this.ds = [{
                "cle_emp": 6341,
                "cle_exp": 5721,
                "nom": "Tobi",
                "adresse": "7 Mandrake Drive",
                "matricule_ass": 2261,
                "identite_salarie": "Speech Pathologist",
                "num_chez_emp": 77,
                "categ": "010",
                "total_general": 9391.961,
                "total_reporter": 24574
            }, {
                "cle_emp": 5421,
                "cle_exp": 8937,
                "nom": "Noellyn",
                "adresse": "63560 John Wall Park",
                "matricule_ass": 6641,
                "identite_salarie": "Statistician IV",
                "num_chez_emp": 56,
                "categ": "08",
                "total_general": 4776.719,
                "total_reporter": 28421
            }, {
                "cle_emp": 8380,
                "cle_exp": 9244,
                "nom": "Torin",
                "adresse": "021 Pine View Drive",
                "matricule_ass": 1757,
                "identite_salarie": "Engineer I",
                "num_chez_emp": 13,
                "categ": "010",
                "total_general": 9692.239,
                "total_reporter": 28930
            }, {
                "cle_emp": 2962,
                "cle_exp": 7486,
                "nom": "Katrina",
                "adresse": "610 Anzinger Street",
                "matricule_ass": 7028,
                "identite_salarie": "Mechanical Systems Engineer",
                "num_chez_emp": 70,
                "categ": "010",
                "total_general": 9078.327,
                "total_reporter": 25712
            }, {
                "cle_emp": 9501,
                "cle_exp": 2154,
                "nom": "Joellen",
                "adresse": "51731 Service Place",
                "matricule_ass": 4144,
                "identite_salarie": "Sales Representative",
                "num_chez_emp": 10,
                "categ": "02",
                "total_general": 9091.454,
                "total_reporter": 23355
            }];
    }
    EmpComponent.prototype.ngOnInit = function () {
        this.remplirAnnee();
        console.log(this.annee);
    };
    EmpComponent.prototype.remplirAnnee = function () {
        for (var i = 1; i <= 10; i++) {
            var y = 2019 + i;
            this.annee.push(y.toString());
        }
    };
    EmpComponent = tslib_1.__decorate([
        Component({
            selector: 'app-emp',
            templateUrl: './emp.component.html',
            styleUrls: ['./emp.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], EmpComponent);
    return EmpComponent;
}());
export { EmpComponent };
//# sourceMappingURL=emp.component.js.map