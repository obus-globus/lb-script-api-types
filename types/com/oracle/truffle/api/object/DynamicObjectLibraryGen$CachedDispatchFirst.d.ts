import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { DynamicObjectLibrary } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { DynamicObjectLibraryGen$CachedDispatch } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryGen$CachedDispatch.d.ts'
export class DynamicObjectLibraryGen$CachedDispatchFirst extends DynamicObjectLibraryGen$CachedDispatch {
    static getFactory(): LibraryFactory<DynamicObjectLibrary>;
    static getUncached(): DynamicObjectLibrary;
    constructor(library: DynamicObjectLibrary, next: DynamicObjectLibraryGen$CachedDispatch, limit_: number)
    // private limit_: number;
    getLimit(): number;
}