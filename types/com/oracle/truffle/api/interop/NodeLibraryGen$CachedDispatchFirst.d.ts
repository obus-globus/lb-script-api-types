import type { NodeLibrary } from '../../../../../com/oracle/truffle/api/interop/NodeLibrary.d.ts'
import type { NodeLibraryGen$CachedDispatch } from '../../../../../com/oracle/truffle/api/interop/NodeLibraryGen$CachedDispatch.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NodeLibraryGen$CachedDispatchFirst extends NodeLibraryGen$CachedDispatch {
    static getFactory(): LibraryFactory<NodeLibrary>;
    static getUncached(): NodeLibrary;
    static getUncached(paramnode: Object): NodeLibrary;
    constructor(library: NodeLibrary, next: NodeLibraryGen$CachedDispatch, limit_: number)
    // private limit_: number;
    getLimit(): number;
}