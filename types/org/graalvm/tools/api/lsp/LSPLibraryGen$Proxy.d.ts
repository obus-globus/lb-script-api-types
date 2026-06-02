import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { ReflectionLibrary } from '../../../../../com/oracle/truffle/api/library/ReflectionLibrary.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LSPLibrary } from '../../../../../org/graalvm/tools/api/lsp/LSPLibrary.d.ts'
export class LSPLibraryGen$Proxy extends LSPLibrary {
    static getFactory(): LibraryFactory<LSPLibrary>;
    constructor(lib: ReflectionLibrary)
    // private lib: ReflectionLibrary;
    accepts(receiver_: Object): boolean;
    getDocumentation(receiver_: Object): Object;
    getSignature(receiver_: Object): Object;
}