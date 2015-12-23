import { Component } from "angular2/core";
import { AuthHelper } from "../authHelper/authHelper";

@Component({
    selector: "my-groups",
    templateUrl: "./groups/view-groups.html",
})
export class Groups {
    private groups = [];

    constructor(authHelper: AuthHelper) {
        authHelper.getRequestPromise("/v1.0/me/memberOf/$/microsoft.graph.group?$filter=groupTypes/any(a:a%20eq%20'unified')")
        .then((data: any) => {
            if (data) {
                this.groups = data.value;
            } else {
                alert("An error occurred calling the Microsoft Graph: " + data);
            }
        });
    }
}