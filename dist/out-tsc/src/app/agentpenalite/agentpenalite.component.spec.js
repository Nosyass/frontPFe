import { async, TestBed } from '@angular/core/testing';
import { AgentpenaliteComponent } from './agentpenalite.component';
describe('AgentpenaliteComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AgentpenaliteComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AgentpenaliteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=agentpenalite.component.spec.js.map