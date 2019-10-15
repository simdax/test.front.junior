import { TestBed, inject } from '@angular/core/testing';

import { paris, marseille } from './destination.mock.spec';
import { ActivityService } from './activity.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DestinationService', () => {
	let service: ActivityService;
	let httpCtrl: HttpTestingController;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			],
			providers: [
				ActivityService,
			]
		});
		httpCtrl = TestBed.get(HttpTestingController);
	});
	beforeEach(inject([ActivityService], (_service: ActivityService) => {
		service = _service;
	}));
	it('should be created', () => {
		expect(service).toBeTruthy();
	});


	describe('getActivityByDestination', () => {
		it('should call http.get', () => {
			const id = '1';

			service.getActivitiesByDestination({id}).subscribe(d => d);

			const req = httpCtrl.expectOne(`/api/destination/${id}`);
			expect(req.request.method).toEqual('GET');
			req.flush(paris);
		});
	});
});
