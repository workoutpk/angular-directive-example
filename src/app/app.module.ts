import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyDirective } from './directive/my.directive';
import { FormatCurrencyDirective } from './directive/format-currency.directive';
import { CurrencyPipe } from '@angular/common';
import { DragAndDropFileDirective } from './directive/drag-and-drop-file.directive';

@NgModule({
    declarations: [AppComponent, MyDirective, FormatCurrencyDirective, DragAndDropFileDirective],
    imports: [BrowserModule, AppRoutingModule],
    providers: [CurrencyPipe],
    bootstrap: [AppComponent],
})
export class AppModule { }
