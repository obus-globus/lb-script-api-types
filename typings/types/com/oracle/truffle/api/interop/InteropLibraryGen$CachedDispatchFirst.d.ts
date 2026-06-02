import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { InteropLibraryGen$CachedDispatch } from '../../../../../com/oracle/truffle/api/interop/InteropLibraryGen$CachedDispatch.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InteropLibraryGen$CachedDispatchFirst extends InteropLibraryGen$CachedDispatch {
    static getFactory(): LibraryFactory<InteropLibrary>;
    static getUncached(): InteropLibrary;
    static getUncached(paramv: Object): InteropLibrary;
    static isValidProtocolValue(paramvalue: Object): boolean;
    static isValidValue(paramreceiver: Object): boolean;
    constructor(library: InteropLibrary, next: InteropLibraryGen$CachedDispatch, limit_: number)
    // private limit_: number;
    getLimit(): number;
}