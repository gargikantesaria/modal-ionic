import { NgModule } from '@angular/core';
import { UserDetailComponent } from './user-detail/user-detail';
import { IonicPageModule } from 'ionic-angular';
@NgModule({
	declarations: [UserDetailComponent],
	imports: [
		IonicPageModule.forChild(UserDetailComponent)
	],
	exports: [UserDetailComponent]
})
export class ComponentsModule {}
