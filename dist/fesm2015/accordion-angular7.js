import { __decorate, __metadata } from 'tslib';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

let AccordionComponent = class AccordionComponent {
    constructor() {
        this.panelOneOpen = false;
        this.panelTwoOpen = false;
        this.panelThreeOpen = false;
    }
};
AccordionComponent = __decorate([
    Component({
        selector: 'accordion',
        template: "<h2>Accordion Assessment</h2>\n<div class=\"content\">\n  <section class=\"noborder_bottom\">\n    <div class=\"accordion\" (click)=\"panelOneOpen = !panelOneOpen\">Section 1</div>\n    <div class=\"panel\" *ngIf=\"panelOneOpen\">\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </div>\n  </section>\n    \n  <section class=\"noborder_bottom\">\n    <div class=\"accordion\" (click)=\"panelTwoOpen = !panelTwoOpen\">Section 2</div>\n    <div class=\"panel\" *ngIf=\"panelTwoOpen\">\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </div>\n  </section>\n\n  <section>\n    <div class=\"accordion\" (click)=\"panelThreeOpen = !panelThreeOpen\">Section 3</div>\n    <div class=\"panel\" *ngIf=\"panelThreeOpen\">\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </div>\n  </section>\n</div>\n\n\n\n",
        styles: [".content{width:50%}section{border:1px solid rgba(0,0,0,.125)}.accordion{background-color:#eee;color:#444;cursor:pointer;padding:15px;transition:.4s}.accordion:hover{background-color:#ccc}.panel{padding:15px;background-color:#fff}.noborder_bottom{border-bottom:0}"]
    }),
    __metadata("design:paramtypes", [])
], AccordionComponent);

let AccordionModule = class AccordionModule {
};
AccordionModule = __decorate([
    NgModule({
        declarations: [
            AccordionComponent
        ],
        imports: [
            BrowserModule
        ],
        providers: [],
        bootstrap: [AccordionComponent]
    })
], AccordionModule);

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AccordionModule };
//# sourceMappingURL=accordion-angular7.js.map
