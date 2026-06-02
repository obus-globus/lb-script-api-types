import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicObjectLibraryImpl$CacheData<T extends DynamicObjectLibraryImpl$CacheData<T>> extends Object {
    constructor(next: T)
    // private next: T;
    isValid(): boolean;
    withNext(newNext: T): T;
}