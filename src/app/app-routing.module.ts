import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { EditProductComponent } from './shared/components/products/edit-product/edit-product.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { UsersComponent } from './shared/components/users/users.component';
import { authGard } from './shared/services/auth-gard.service';
import { ProductResolverService } from './shared/services/product-resolver.service';
import { ProductService } from './shared/services/product.service';

const routes: Routes = [
  {path : '',redirectTo:'login', pathMatch : 'full'},/* if the url is localhost:4200 it will redirect to the login component, pathMatch: full is for that when the path is only localhost:4200  */
  {path : 'login', component : LoginComponent},
  {path : 'home',canActivate :[authGard], component : HomeComponent},
  {path : 'users',canActivate :[authGard], component : UsersComponent,
    children : [
    {path : ':id', component : UserComponent}
  ]
  },
  /* {path : 'users/:id', component : UserComponent}, */
  {/* path : 'products',canActivate :[authGard], component : ProductsComponent, */ /* canActivate protect the parent and child also */
  path : 'products',canActivateChild :[authGard], component : ProductsComponent, /* canActivateChild protect the child */
    children :[
    /* {path : ':id', component :ProductComponent}, */
    {path : ':id', component :ProductComponent, resolve : {product : ProductResolverService}
    },
    {path : ':id/edit', component :EditProductComponent}
  ]
  },
  
  /* {path : 'products/:id', component :ProductComponent}, */
  /* {path : 'products/:id/edit', component :EditProductComponent} */

  {path : 'page-not-found', component : PageNotFoundComponent, data:{  /* data:{msg:---} called as static >> passing static data using routing*/
    /* msg : "This page is not available" */
    msg:"https://klizos.com/wp-content/uploads/funny-404-error-page-GIF-klizo-solutions.gif"
  }},
  {path : '**', redirectTo : 'page-not-found'} /* wild card routing */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
