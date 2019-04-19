import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AccordionComponent = class AccordionComponent {
    constructor() {
        this.panelOneOpen = false;
        this.panelTwoOpen = false;
        this.panelThreeOpen = false;
    }
};
AccordionComponent = tslib_1.__decorate([
    Component({
        selector: 'accordion',
        template: "<h2>Accordion Assessment</h2>\n<div class=\"content\">\n  <section class=\"noborder_bottom\">\n    <div class=\"accordion\" (click)=\"panelOneOpen = !panelOneOpen\">Section 1</div>\n    <div class=\"panel\" *ngIf=\"panelOneOpen\">\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </div>\n  </section>\n    \n  <section class=\"noborder_bottom\">\n    <div class=\"accordion\" (click)=\"panelTwoOpen = !panelTwoOpen\">Section 2</div>\n    <div class=\"panel\" *ngIf=\"panelTwoOpen\">\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </div>\n  </section>\n\n  <section>\n    <div class=\"accordion\" (click)=\"panelThreeOpen = !panelThreeOpen\">Section 3</div>\n    <div class=\"panel\" *ngIf=\"panelThreeOpen\">\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </div>\n  </section>\n</div>\n\n\n\n",
        styles: [".content{width:50%}section{border:1px solid rgba(0,0,0,.125)}.accordion{background-color:#eee;color:#444;cursor:pointer;padding:15px;transition:.4s}.accordion:hover{background-color:#ccc}.panel{padding:15px;background-color:#fff}.noborder_bottom{border-bottom:0}"]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AccordionComponent);
export { AccordionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjY29yZGlvbi1hbmd1bGFyNy8iLCJzb3VyY2VzIjpbImFjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzFDLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBSzdCO1FBSk8saUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFFaEIsQ0FBQztDQUNoQixDQUFBO0FBTlksa0JBQWtCO0lBTDlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLDA4RUFBeUM7O0tBRTFDLENBQUM7O0dBQ1csa0JBQWtCLENBTTlCO1NBTlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FjY29yZGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY2NvcmRpb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudCB7XG4gIHB1YmxpYyBwYW5lbE9uZU9wZW4gPSBmYWxzZTtcbiAgcHVibGljIHBhbmVsVHdvT3BlbiA9IGZhbHNlO1xuICBwdWJsaWMgcGFuZWxUaHJlZU9wZW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcigpe31cbn1cbiJdfQ==