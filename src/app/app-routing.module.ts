import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule)

  },
  {
    path: 'posts',
    loadChildren: () => import('./components/posts/posts.module').then(m => m.PostsModule)

  },
  {
    path: 'details/:id',
    loadChildren: () => import('./components/details/details.module').then(m => m.DetailsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
