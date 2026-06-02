import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { PromiseLibrary } from '../../../../../com/oracle/truffle/js/api/PromiseLibrary.d.ts'
import type { PromiseLibraryGen$CachedDispatch } from '../../../../../com/oracle/truffle/js/api/PromiseLibraryGen$CachedDispatch.d.ts'
export class PromiseLibraryGen$CachedDispatchNext extends PromiseLibraryGen$CachedDispatch {
    static getFactory(): LibraryFactory<PromiseLibrary>;
    static getUncached(): PromiseLibrary;
    constructor(library: PromiseLibrary, next: PromiseLibraryGen$CachedDispatch)
    getLimit(): number;
}