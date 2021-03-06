import { Component } from '@angular/core';

@Component({
    selector:'aboutUs',
    templateUrl:"./about-us.component.html",
    styleUrls:['about-us.component.css']
})
export class AboutUsComponent{
    whoWeAre:string="";
    whatWeDo:string ="";

    bloodDonation:string="";
    summerCamp:string="";

    execMembers:any[];

    constructor() {
        this.execMembers = [
            {"name":"Dr. Alak Sarkar", "designation":"President"},
            {"name":"Mr. Ranajit Sanyal","designation":"Working President"},
            {"name":"Mr. Radha Madhab Majumder","designation":"Secretary"},
            {"name":"Mr. Dipankar Debnath","designation":"Assistant Secretary"},
            {"name":"Mr. Nilav Nayan Bordoloi","designation":"Workshop Co-ordinator"},
            {"name":"Miss Punam Paul","designations":"Cultural Secretary"},
            {"name":"Mrs. Mohana Banik","designation":"Publicity Secretary"},
            {"name":"Mr Mrinal Chanda","designation":"Treasurer"},
            {"name":"Miss. Arpita Bose","designation":"Assistant Treasurer"},
            {"name":"Dr. Bhupesh Bhagawati","designation":"Executive Member"},
            {"name":"Miss. Rina Adak","designation":"Executive Member"}
        ]

        this.execMembers = this.execMembers.map((value)=>{
            let nameArr:string[] = value.name.split(" ");
            value.initials = nameArr[1].substr(0,1)+nameArr[(nameArr.length-1)].substr(0,1);
            return value;
        })
    }

}