import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LSPLibrary } from '../../../../../org/graalvm/tools/api/lsp/LSPLibrary.d.ts'
export class LSPLibraryGen$Delegate extends LSPLibrary {
    static getFactory(): LibraryFactory<LSPLibrary>;
    constructor(delegateLibrary: LSPLibrary)
    // private delegateLibrary: LSPLibrary;
    accepts(receiver_: Object): boolean;
    getDocumentation(receiver_: Object): Object;
    getSignature(receiver_: Object): Object;
    isAdoptable(): boolean;
}