import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatConversationComponent } from './chat-conversation/chat-conversation.component';
import { ChatFooterComponent } from './chat-footer/chat-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatConversationComponent,
    ChatFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
