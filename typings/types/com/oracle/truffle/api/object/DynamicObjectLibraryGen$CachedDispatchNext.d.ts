import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { DynamicObjectLibrary } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { DynamicObjectLibraryGen$CachedDispatch } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryGen$CachedDispatch.d.ts'
export class DynamicObjectLibraryGen$CachedDispatchNext extends DynamicObjectLibraryGen$CachedDispatch {
    static getFactory(): LibraryFactory<DynamicObjectLibrary>;
    static getUncached(): DynamicObjectLibrary;
    constructor(library: DynamicObjectLibrary, next: DynamicObjectLibraryGen$CachedDispatch)
    getLimit(): number;
}