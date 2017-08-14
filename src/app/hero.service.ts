import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero } from './hero';
import 'rxjs/add/operator/toPromise';
//import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
	private heroesUrl = 'api/heroes';  // URL to web api

	constructor(private http: Http) { }
	getHeroes(): Promise<Hero[]> {
	  return this.http.get(this.heroesUrl)
	             .toPromise()
	             .then(response => response.json().data as Hero[])
	             .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
	// getHeroes(): Promise<Hero[]>{
	// 	return Promise.resolve(HEROES);
	// 	//return new Promise(resolve =>{
	// 	//	setTimeout(())
	// 	//});
	// }

	// getHeroesSlowly(): Promise<Hero[]> {
	// 	return new Promise(resolve =>{
	// 		setTimeout(() => resolve(this.getHeroes()),3000);
	// 	});
	// }

	// getHero(id: number): Promise<Hero> {
	// 	return this.getHeroes()
	// 				.then(heroes => heroes.find(hero => hero.id === id));
	// }
}