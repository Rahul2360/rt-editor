# ng-rt-editor

Angular Rich Text Editor is an Angualr(>=2) module which can be integrated in your existing applications

## Demo
## Installation

Using [NPM](https://www.npmjs.com/)
```
$ npm install ng-rt-editor@<version>
```
1. Run `npm install ng-rt-editor`

## Getting Started

To get up and running Rich text editor on your system follow below steps:

1. Add `RtEditorModule` to `imports` in
`src/app/app.module.ts`:

    ```typescript
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    
    import { AppComponent } from './app.component';
    import { RtEditorModule } from 'ng-rt-edtitor';
    
    @NgModule({
      imports: [
        BrowserModule,
        RtEditorModule
      ],
      declarations: [AppComponent],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

2. Use the component in the html
`src/app/app.component.html`:

    ```html
    <rt-editor></rt-editor>
    ```

## Contributing

## Keywords