//import { Injectable } from '@angular/core';
//import { DestinationService } from './activity.service';
//import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
//import { IDestination } from './activity.model';
//
//@Injectable()
//export class DestinationResolver implements Resolve<IDestination> {
//	constructor(
//		protected destinationService: DestinationService,
//	) {}
//	resolve(route: ActivatedRouteSnapshot) {
//		const id = route.paramMap.get('id');
//		return this.destinationService.getDestinationById(id);
//	}
//}
//