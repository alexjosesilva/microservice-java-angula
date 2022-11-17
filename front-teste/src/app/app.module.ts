import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(maskConfig)
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
