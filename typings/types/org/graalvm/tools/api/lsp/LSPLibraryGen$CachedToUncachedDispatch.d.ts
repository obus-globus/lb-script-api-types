import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LSPLibrary } from '../../../../../org/graalvm/tools/api/lsp/LSPLibrary.d.ts'
export class LSPLibraryGen$CachedToUncachedDispatch extends LSPLibrary {
    static getFactory(): LibraryFactory<LSPLibrary>;
    private constructor()
    accepts(receiver_: Object): boolean;
    getDocumentation(receiver_: Object): Object;
    getSignature(receiver_: Object): Object;
}