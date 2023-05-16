import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from './auth.guard';
import { CategoriesComponent } from './categories/categories.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

// import { authGuard } from './auth.guard';
const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'offers',canActivate:[AuthGuard],component:OffersComponent},
  {path:'search',canActivate:[AuthGuard],component:SearchComponent},
  {path:'category/:cat',canActivate:[AuthGuard],component:CategoriesComponent},
  {path:'profile',canActivate:[AuthGuard],component:ProfileComponent},
  {path:'details/:id',canActivate:[AuthGuard],component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
