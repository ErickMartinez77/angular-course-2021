import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MessageSenderComponent } from './components/message-sender/message-sender.component';
import { PostComponent } from './components/post/post.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StoryComponent } from './components/story/story.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";

const routes:Routes=[
  {path:'',component:HomeComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    MessageSenderComponent,
    PostComponent,
    SidebarComponent,
    StoryComponent
  ],
  providers:[
  ]
})
export class HomeModule { }
