import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class LSPLibrary extends Library {
    static getFactory(): LibraryFactory<LSPLibrary>;
    constructor()
    getDocumentation(object: Object): Object;
    getSignature(object: Object): Object;
}