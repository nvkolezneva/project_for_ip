import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { AuthFormComponent } from './forms/auth-form/auth-form.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './services/logout/logout.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ServiceComponent } from './pages/service/service.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RuleListComponent } from './pages/rule-list/rule-list.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { UserByTypePipe } from './pipes/user-by-type/user-by-type.pipe';
import { CreateUserFormComponent } from './forms/create-user-form/create-user-form.component';
import { OrderFormComponent } from './forms/order-form/order-form.component';
import { OrderCardComponent } from './cards/order-card/order-card.component';
import { UserCardComponent } from './cards/user-card/user-card.component';
import { UserTypeForRulePipe } from './pipes/user-type-for-rule/user-type-for-rule.pipe';
import { OrderManagementComponent } from './pages/order-management/order-management.component';
import { CartComponent } from './pages/cart/cart.component';
import { CreateProductComponent } from './forms/create-product/create-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    AuthFormComponent,
    HeaderComponent,
    MainComponent,
    LogoutComponent,
    FooterComponent,
    ProfileComponent,
    ServiceComponent,
    AuthComponent,
    RuleListComponent,
    UserListComponent,
    OrderListComponent,
    UserByTypePipe,
    CreateUserFormComponent,
    OrderFormComponent,
    OrderCardComponent,
    UserCardComponent,
    UserTypeForRulePipe,
    OrderManagementComponent,
    CartComponent,
    CreateProductComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
