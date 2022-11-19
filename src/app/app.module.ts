import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RewardsComponent } from './rewards/rewards.component';
import { HomeComponent } from './home/home.component';
import { PollComponent } from './poll/poll.component';
import { MatchesComponent } from './matches/matches.component';
import { PointsComponent } from './points/points.component';
import { AccountComponent } from './account/account.component';
import { NetworkComponent } from './network/network.component';
import { BoxComponent } from './box/box.component';
import { ListComponent } from './list/list.component';
import { RewardBoxComponent } from './reward-box/reward-box.component';
import { FilterBoxComponent } from './filter-box/filter-box.component';
import { SelectCategoriesComponent } from './select-categories/select-categories.component';
import { SelectPointsComponent } from './select-points/select-points.component';
import { RewardsListService } from './services/rewards-list.service';
import { CategoryService } from './services/category.service';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'rewards', component: RewardsComponent, children:[
    {path: 'list', component: ListComponent }
  ]},
  {path: 'poll', component: PollComponent},
  {path: 'matches', component: MatchesComponent},
  {path: 'points', component: PointsComponent},
  {path: 'account', component: AccountComponent},
  {path: 'network', component: NetworkComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    RewardsComponent,
    HomeComponent,
    PollComponent,
    MatchesComponent,
    PointsComponent,
    AccountComponent,
    NetworkComponent,
    BoxComponent,
    ListComponent,
    RewardBoxComponent,
    FilterBoxComponent,
    SelectCategoriesComponent,
    SelectPointsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ RewardsListService,
               CategoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
