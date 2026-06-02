import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { LSPLibrary } from '../../../../../org/graalvm/tools/api/lsp/LSPLibrary.d.ts'
import type { LSPLibraryGen$CachedDispatch } from '../../../../../org/graalvm/tools/api/lsp/LSPLibraryGen$CachedDispatch.d.ts'
export class LSPLibraryGen$CachedDispatchNext extends LSPLibraryGen$CachedDispatch {
    static getFactory(): LibraryFactory<LSPLibrary>;
    constructor(library: LSPLibrary, next: LSPLibraryGen$CachedDispatch)
    getLimit(): number;
}