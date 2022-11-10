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
    RewardBoxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
