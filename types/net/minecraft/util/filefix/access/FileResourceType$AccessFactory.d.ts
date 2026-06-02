import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FileResourceType$AccessFactory<T extends Object | number | string | boolean> extends Object{
    create(path: Path[], dataVersion: number): T;
}