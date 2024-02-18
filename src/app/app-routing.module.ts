import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrayscaleComponent } from 'src/components/grayscale/grayscale.component';
import { StartpageComponent } from 'src/components/startpage/startpage.component';

const routes: Routes = [
  { path: '', component: StartpageComponent },
  { path: 'grayscale', component: GrayscaleComponent },
  { path: '#projects' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
