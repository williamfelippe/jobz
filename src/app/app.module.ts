/**
 * Modules
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

/**
 * Pages
 */
import { HomeComponent } from './containers/home/home.component';
import { UserDetailComponent } from './containers/user-detail/user-detail.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';

/**
 * Components
 */
import { UserSearchBarComponent } from './components/user-search-bar/user-search-bar.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: ':term', component: HomeComponent },
	{ path: 'user/:id', component: UserDetailComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	declarations: [
		AppComponent,

		/**
		 * Containers
		 */
		HomeComponent,
		UserDetailComponent,
		PageNotFoundComponent,

		/**
		 * Components
		 */
		UserSearchBarComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot(
			appRoutes,
			{
				enableTracing: true
			}
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }