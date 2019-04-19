(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('accordion-angular7', ['exports', '@angular/platform-browser', '@angular/core'], factory) :
    (global = global || self, factory(global['accordion-angular7'] = {}, global.ng.platformBrowser, global.ng.core));
}(this, function (exports, platformBrowser, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var AccordionComponent = /** @class */ (function () {
        function AccordionComponent() {
            this.panelOneOpen = false;
            this.panelTwoOpen = false;
            this.panelThreeOpen = false;
        }
        AccordionComponent = __decorate([
            core.Component({
                selector: 'accordion',
                template: "<h2>Accordion Assessment</h2>\n<div class=\"content\">\n  <section class=\"noborder_bottom\">\n    <div class=\"accordion\" (click)=\"panelOneOpen = !panelOneOpen\">Section 1</div>\n    <div class=\"panel\" *ngIf=\"panelOneOpen\">\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </div>\n  </section>\n    \n  <section class=\"noborder_bottom\">\n    <div class=\"accordion\" (click)=\"panelTwoOpen = !panelTwoOpen\">Section 2</div>\n    <div class=\"panel\" *ngIf=\"panelTwoOpen\">\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </div>\n  </section>\n\n  <section>\n    <div class=\"accordion\" (click)=\"panelThreeOpen = !panelThreeOpen\">Section 3</div>\n    <div class=\"panel\" *ngIf=\"panelThreeOpen\">\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </div>\n  </section>\n</div>\n\n\n\n",
                styles: [".content{width:50%}section{border:1px solid rgba(0,0,0,.125)}.accordion{background-color:#eee;color:#444;cursor:pointer;padding:15px;transition:.4s}.accordion:hover{background-color:#ccc}.panel{padding:15px;background-color:#fff}.noborder_bottom{border-bottom:0}"]
            }),
            __metadata("design:paramtypes", [])
        ], AccordionComponent);
        return AccordionComponent;
    }());

    var AccordionModule = /** @class */ (function () {
        function AccordionModule() {
        }
        AccordionModule = __decorate([
            core.NgModule({
                declarations: [
                    AccordionComponent
                ],
                imports: [
                    platformBrowser.BrowserModule
                ],
                providers: [],
                bootstrap: [AccordionComponent]
            })
        ], AccordionModule);
        return AccordionModule;
    }());

    exports.AccordionComponent = AccordionComponent;
    exports.AccordionModule = AccordionModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=accordion-angular7.umd.js.map
