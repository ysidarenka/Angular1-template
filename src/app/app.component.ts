import { Component, OnInit, Inject } from 'ng-metadata/core';

@Component({
  selector: 'np-app',
  styles: [ require( './app.less' ) ],
  templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {

  public planet = 'New Application by Yury';
  public inputValue = "try something";
  
  constructor( @Inject( '$log' ) private _$log: ng.ILogService ) {}

  ngOnInit() {
    this._$log.log( 'hello from new app - OnInit' );
  }

}
