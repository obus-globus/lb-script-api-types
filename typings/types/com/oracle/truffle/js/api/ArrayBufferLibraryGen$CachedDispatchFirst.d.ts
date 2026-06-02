import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { ArrayBufferLibrary } from '../../../../../com/oracle/truffle/js/api/ArrayBufferLibrary.d.ts'
import type { ArrayBufferLibraryGen$CachedDispatch } from '../../../../../com/oracle/truffle/js/api/ArrayBufferLibraryGen$CachedDispatch.d.ts'
export class ArrayBufferLibraryGen$CachedDispatchFirst extends ArrayBufferLibraryGen$CachedDispatch {
    static getFactory(): LibraryFactory<ArrayBufferLibrary>;
    static getUncached(): ArrayBufferLibrary;
    constructor(library: ArrayBufferLibrary, next: ArrayBufferLibraryGen$CachedDispatch, limit_: number)
    // private limit_: number;
    getLimit(): number;
}