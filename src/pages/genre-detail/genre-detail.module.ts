import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenreDetailPage } from './genre-detail';

@NgModule({
  declarations: [
    GenreDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GenreDetailPage),
  ],
})
export class GenreDetailPageModule {}
