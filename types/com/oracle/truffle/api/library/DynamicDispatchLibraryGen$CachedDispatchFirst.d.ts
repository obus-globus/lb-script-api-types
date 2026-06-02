import type { DynamicDispatchLibrary } from '../../../../../com/oracle/truffle/api/library/DynamicDispatchLibrary.d.ts'
import type { DynamicDispatchLibraryGen$CachedDispatch } from '../../../../../com/oracle/truffle/api/library/DynamicDispatchLibraryGen$CachedDispatch.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
export class DynamicDispatchLibraryGen$CachedDispatchFirst extends DynamicDispatchLibraryGen$CachedDispatch {
    static getFactory(): LibraryFactory<DynamicDispatchLibrary>;
    constructor(library: DynamicDispatchLibrary, next: DynamicDispatchLibraryGen$CachedDispatch, limit_: number)
    // private limit_: number;
    getLimit(): number;
}