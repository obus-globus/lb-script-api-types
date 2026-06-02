import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { ReflectionLibrary } from '../../../../../com/oracle/truffle/api/library/ReflectionLibrary.d.ts'
import type { ReflectionLibraryGen$CachedDispatch } from '../../../../../com/oracle/truffle/api/library/ReflectionLibraryGen$CachedDispatch.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReflectionLibraryGen$CachedDispatchNext extends ReflectionLibraryGen$CachedDispatch {
    static getFactory(): LibraryFactory<ReflectionLibrary>;
    static getUncached(): ReflectionLibrary;
    static getUncached(paramv: Object): ReflectionLibrary;
    constructor(library: ReflectionLibrary, next: ReflectionLibraryGen$CachedDispatch)
    getLimit(): number;
}