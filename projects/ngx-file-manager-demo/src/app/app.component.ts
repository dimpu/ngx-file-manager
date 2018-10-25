import { Component } from '@angular/core';
import { FileElement } from '@dimpu/ngx-file-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // public fileElements: any  = [
  //   { name: 'Folder B', isFolder: true, parent: 'root' },
  //   { name: 'Folder B', isFolder: false, parent: 'root' },
  // ];

  public fileElements: FileElement[] = [
    {
      isFolder: true,
      dirname: '',
      parent: '',
      name: 'folder1',
      path: 'folder1',
      extension: '',
    },

    {
    isFolder: false,
    parent: '',
    path: 'images/Chrysanthemum.jpg',
    dirname: 'images',
    extension: 'jpg',
    name: 'Chrysanthemum',
    thumb : 'https://www.iutbayonne.univ-pau.fr/~klevron/mm/thumbs/images/Chrysanthemum_150x150.jpg'
  },

  {
    isFolder: false,
    parent: '',
    path: 'images/Chrysanthemum.jpg',
    dirname: 'images',
    extension: 'jpg',
    name: 'Chrysanthemum',
    thumb : 'https://www.iutbayonne.univ-pau.fr/~klevron/mm/thumbs/images/Chrysanthemum_150x150.jpg'
  },

  // {
  //   isFolder: false,
  //   parent: '',
  //   path: 'videos/test.avi',
  //   dirname: 'videos',
  //   extension: 'avi',
  //   name: 'Test',
  // },

  // {
  //   isFolder: false,
  //   parent: '',
  //   path: 'images/Chrysanthemum.jpg',
  //   dirname: 'images',
  //   extension: 'text',
  //   name: 'Chrysanthemum',
  //   thumb : 'https://www.iutbayonne.univ-pau.fr/~klevron/mm/thumbs/images/Chrysanthemum_150x150.jpg'
  // },


];
  // {
  //   'type':'file',
  //   'path':'images/Desert.jpg',
  //   'timestamp':1493725513,
  //   'size':845941,
  //   'dirname':'images',
  //   'basename':'Desert.jpg',
  //   'extension':'jpg',
  //   'filename':'Desert',
  //   'thumb':'https://www.iutbayonne.univ-pau.fr/~klevron/mm/thumbs/images/Desert_150x150.jpg'
  // },
  // {
  //   'type':'file',
  //   'path':'images/Hydrangeas.jpg',
  //   'timestamp':1493725513,
  //   'size':595284,
  //   'dirname':'images',
  //   'basename':'Hydrangeas.jpg',
  //   'extension':'jpg',
  //   'filename':'Hydrangeas',
  //   'thumb':'https://www.iutbayonne.univ-pau.fr/~klevron/mm/thumbs/images/Hydrangeas_150x150.jpg'
  // },
  // {
  //   'type':'file',
  //   'path':'images/Jellyfish.jpg',
  //   'timestamp':1493725513,
  //   'size':775702,
  //   'dirname':'images',
  //   'basename':'Jellyfish.jpg',
  //   'extension':'jpg',
  //   'filename':'Jellyfish',
  //   'thumb':'https://www.iutbayonne.univ-pau.fr/~klevron/mm/thumbs/images/Jellyfish_150x150.jpg'
  // },
  // {
  //   'type':'file',
  //   'path':'images/Koala.jpg',
  //   'timestamp':1493725513,
  //   'size':780831,
  //   'dirname':'images',
  //   'basename':'Koala.jpg',
  //   'extension':'jpg',
  //   'filename':'Koala',
  //   'thumb':'https://www.iutbayonne.univ-pau.fr/~klevron/mm/thumbs/images/Koala_150x150.jpg'
  // },
  // {
  //   'type':'file',
  //   'path':'images/Lighthouse.jpg',
  //   'timestamp':1493725513,
  //   'size':561276,
  //   'dirname':'images',
  //   'basename':'Lighthouse.jpg',
  //   'extension':'jpg',
  //   'filename':'Lighthouse',
  //   'thumb':'https://www.iutbayonne.univ-pau.fr/~klevron/mm/thumbs/images/Lighthouse_150x150.jpg'
  // },
  // {
  //   'type':'file',
  //   'path':'images/Penguins.jpg',
  //   'timestamp':1493725513,
  //   'size':777835,
  //   'dirname':'images',
  //   'basename':'Penguins.jpg',
  //   'extension':'jpg',
  //   'filename':'Penguins',
  //   'thumb':'https://www.iutbayonne.univ-pau.fr/~klevron/mm/thumbs/images/Penguins_150x150.jpg'
  // },
  // {
  //   'type':'file',
  //   'path':'images/Tulips.jpg',
  //   'timestamp':1493725513,
  //   'size':620888,
  //   'dirname':'images',
  //   'basename':'Tulips.jpg',
  //   'extension':'jpg',
  //   'filename':'Tulips',
  //   'thumb':'https://www.iutbayonne.univ-pau.fr/~klevron/mm/thumbs/images/Tulips_150x150.jpg'
  // }]
  // constructor(public fileService: FileService) {}

  // currentRoot: FileElement;
  // currentPath: string;
  // canNavigateUp = false;

  // tslint:disable-next-line:use-life-cycle-interface
  // ngOnInit() {
    // const folderA = this.fileElements.set('somd-id', { name: 'Folder A', isFolder: true, parent: 'root' });
    // this.fileElements.set({ name: 'Folder B', isFolder: true, parent: 'root' });
    // this.fileElements.set({ name: 'Folder C', isFolder: true, parent: folderA.id });
    // this.fileElements.set({ name: 'File A', isFolder: false, parent: 'root' });
    // this.fileElements.set({ name: 'File B', isFolder: false, parent: 'root' });

    // this.updateFileElementQuery();
  // }

  // addFolder(folder: { name: string }) {
  //   this.fileService.add({ isFolder: true, name: folder.name, parent: this.currentRoot ? this.currentRoot.id : 'root' });
  //   this.updateFileElementQuery();
  // }

  // removeElement(element: FileElement) {
  //   this.fileService.delete(element.id);
  //   this.updateFileElementQuery();
  // }

  // navigateToFolder(element: FileElement) {
  //   this.currentRoot = element;
  //   this.updateFileElementQuery();
  //   this.currentPath = this.pushToPath(this.currentPath, element.name);
  //   this.canNavigateUp = true;
  // }

  // navigateUp() {
  //   if (this.currentRoot && this.currentRoot.parent === 'root') {
  //     this.currentRoot = null;
  //     this.canNavigateUp = false;
  //     this.updateFileElementQuery();
  //   } else {
  //     this.currentRoot = this.fileService.get(this.currentRoot.parent);
  //     this.updateFileElementQuery();
  //   }
  //   this.currentPath = this.popFromPath(this.currentPath);
  // }

  // moveElement(event: { element: FileElement; moveTo: FileElement }) {
  //   this.fileService.update(event.element.id, { parent: event.moveTo.id });
  //   this.updateFileElementQuery();
  // }

  // renameElement(element: FileElement) {
  //   console.log(element);
  //   this.fileService.update(element.id, { name: element.name });
  //   this.updateFileElementQuery();
  // }

  // updateFileElementQuery() {
  //   this.fileElements = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root');
  // }

  // pushToPath(path: string, folderName: string) {
  //   let p = path ? path : '';
  //   p += `${folderName}/`;
  //   return p;
  // }

  // popFromPath(path: string) {
  //   let p = path ? path : '';
  //   let split = p.split('/');
  //   split.splice(split.length - 2, 1);
  //   p = split.join('/');
  //   return p;
  // }
}
