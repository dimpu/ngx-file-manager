
export interface FileElement {
  isFolder: boolean;
  path: string;
  parent: string;
  dirname: string;
  extension: string;
  name: string;
  thumb?: string;
  hidden?: boolean;
}
