import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LSPLibrary } from '../../../../../org/graalvm/tools/api/lsp/LSPLibrary.d.ts'
export class LSPLibrary$Asserts extends LSPLibrary {
    static getFactory(): LibraryFactory<LSPLibrary>;
    constructor(delegate: LSPLibrary)
    // private delegate: LSPLibrary;
    accepts(receiver: Object): boolean;
    getDocumentation(object: Object): Object;
    getSignature(object: Object): Object;
}