import * as angular from 'angular';
import { IRender, renderFactory } from 'ng-metadata/testing';
import { NgModule, Component } from 'ng-metadata/core';

import { queryByDirective, createAngular1Module } from './shared/test-helpers';
import { AppComponent } from './app.component';

describe( `AppComponent`, () => {

  @Component( {
    selector: 'np-test-component',
    template: `<np-app></np-app>`
  } )
  class TestComponent {
  }

  @NgModule( {
    declarations: [ AppComponent, TestComponent ]
  } )
  class TestModule {
  }

  const TestModuleName = createAngular1Module( TestModule );


  let render: IRender<TestComponent>;

  beforeEach( angular.mock.module( TestModuleName ) );

  beforeEach( angular.mock.inject( ( $injector: ng.auto.IInjectorService ) => {

    const $compile = $injector.get<ng.ICompileService>( '$compile' );
    const $rootScope = $injector.get<ng.IRootScopeService>( '$rootScope' );
    const $scope = $rootScope.$new();

    render = renderFactory( $compile, $scope );

  } ) );

  it( `should render New Application by Yury`, () => {

    const {compiledElement} = render(TestComponent);
    console.log(compiledElement);
    // now we need to get our tested component
    const { debugElement, componentInstance } = queryByDirective( compiledElement, AppComponent );

    console.log(componentInstance);
    expect( componentInstance instanceof AppComponent ).toBe( false );
    //expect( debugElement.text() ).toContain( 'Test : New Application by Yury !' );

  } );


} );
