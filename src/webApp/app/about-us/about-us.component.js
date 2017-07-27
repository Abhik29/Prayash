var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var AboutUsComponent = (function () {
    function AboutUsComponent() {
        this.whoWeAre = "";
        this.whatWeDo = "";
        this.bloodDonation = "";
        this.summerCamp = "";
        this.execMembers = [
            { "name": "Dr. Alak Sarkar", "designation": "President" },
            { "name": "Mr. Ranajit Sanyal", "designation": "Working President" },
            { "name": "Mr. Radha Madhab Majumder", "designation": "Secretary" },
            { "name": "Mr. Dipankar Debnath", "designation": "Assistant Secretary" },
            { "name": "Mr. Nilav Nayan Bordoloi", "designation": "Workshop Co-ordinator" },
            { "name": "Miss Punam Paul", "designations": "Cultural Secretary" },
            { "name": "Mrs. Mohana Banik", "designation": "Publicity Secretary" },
            { "name": "Mr Mrinal Chanda", "designation": "Treasurer" },
            { "name": "Miss. Arpita Bose", "designation": "Assistant Treasurer" },
            { "name": "Dr. Bhupesh Bhagawati", "designation": "Executive Member" },
            { "name": "Smt. Rina Adak", "designation": "Executive Member" }
        ];
        this.execMembers = this.execMembers.map(function (value) {
            var nameArr = value.name.split(" ");
            value.initials = nameArr[1].substr(0, 1) + nameArr[(nameArr.length - 1)].substr(0, 1);
            return value;
        });
    }
    AboutUsComponent = __decorate([
        Component({
            selector: 'aboutUs',
            templateUrl: "./about-us.component.html",
            styleUrls: ['about-us.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());
export { AboutUsComponent };
//# sourceMappingURL=about-us.component.js.map