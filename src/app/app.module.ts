import { NgModule } from 'ng-metadata/core';
import { AppComponent } from './app.component';
import {ContactService} from './app.service';

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [],
  exports: [],
  providers:[ContactService]
} )
export class AppModule {
}
