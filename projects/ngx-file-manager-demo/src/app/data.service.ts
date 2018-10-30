// import { Injectable } from '@angular/core';
// import { InMemoryDbService } from 'angular-in-memory-web-api';

// @Injectable({
//   providedIn: 'root'
// })
// export class InMemDataService implements InMemoryDbService  {
//   createDb() {
//     const heroes = [
//       { id: 1, name: 'Windstorm' },
//       { id: 2, name: 'Bombasto' },
//       { id: 3, name: 'Magneta' },
//       { id: 4, name: 'Tornado' }
//     ];
//     return { heroes };
//   }

// }



import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' }
    ];
    return {heroes};
  }
}
