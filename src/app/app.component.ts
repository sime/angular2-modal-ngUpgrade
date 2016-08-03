import { Component, ViewContainerRef } from "@angular/core";
import { Modal, BS_MODAL_PROVIDERS } from "angular2-modal/plugins/bootstrap";
import "../../public/css/styles.css";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  viewProviders: [BS_MODAL_PROVIDERS],
})
export class AppComponent {
  constructor(public modal: Modal, viewContainer: ViewContainerRef) {
    modal.defaultViewContainer = viewContainer;
  }
  open () {
    console.log("Open Me!");
    this.modal.confirm().open();
  }
}
