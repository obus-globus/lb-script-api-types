import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LSPLibrary } from '../../../../../org/graalvm/tools/api/lsp/LSPLibrary.d.ts'
export abstract class LSPLibraryGen$CachedDispatch extends LSPLibrary {
    static getFactory(): LibraryFactory<LSPLibrary>;
    constructor(library: LSPLibrary, next: LSPLibraryGen$CachedDispatch)
    // private library: LSPLibrary;
    // private next: LSPLibraryGen$CachedDispatch;
    accepts(receiver_: Object): boolean;
    getDocumentation(receiver_: Object): Object;
    getLimit(): number;
    getSignature(receiver_: Object): Object;
    // private specialize(receiver_: Object): void;
}