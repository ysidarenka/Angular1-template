import { Component, OnInit, Inject, Output, OnChanges } from 'ng-metadata/core';
import {ContactService, Contact} from './app.service';


@Component({
  
  selector: 'np-app',
  styles: [ require( './app.less' ) ],
  templateUrl: './app/app.component.html'
})
export class AppComponent {

  public planet = 'New Application by Yury';
  public inputValue = "try something";
  public contacts:Contact[]=[];

  constructor( 
    @Inject( '$scope' ) private $scope: ng.IScope,
    @Inject( '$log' ) private _$log: ng.ILogService,
    @Inject( ContactService ) private contactService: ContactService 
   ) {

     

   }

   private updateValues(input:string){
      this.inputValue = input;
   }

   

   ngOnInit() {
    this._$log.log( 'hello from new app - OnInit' );

          this.contactService.getContacts().then(result=>{
            
            console.log(result);

            this.contacts = result;

            this.updateValues("updated");

            this.$scope.$apply();
      });

    
    
  }

}
