import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { ValueLibrary } from '../../../../../com/oracle/truffle/js/api/ValueLibrary.d.ts'
import type { ValueLibraryGen$CachedDispatch } from '../../../../../com/oracle/truffle/js/api/ValueLibraryGen$CachedDispatch.d.ts'
export class ValueLibraryGen$CachedDispatchNext extends ValueLibraryGen$CachedDispatch {
    static getFactory(): LibraryFactory<ValueLibrary>;
    static getUncached(): ValueLibrary;
    constructor(library: ValueLibrary, next: ValueLibraryGen$CachedDispatch)
    getLimit(): number;
}