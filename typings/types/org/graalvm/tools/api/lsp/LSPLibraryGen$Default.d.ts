import type { LibraryExport } from '../../../../../com/oracle/truffle/api/library/LibraryExport.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LSPLibrary } from '../../../../../org/graalvm/tools/api/lsp/LSPLibrary.d.ts'
export class LSPLibraryGen$Default extends LibraryExport<LSPLibrary> {
    static register(paramreceiverClass: Class<Object>, ...paramlibs: Object | null): void;
    private constructor()
    createCached(receiver: Object): LSPLibrary;
    createUncached(receiver: Object): LSPLibrary;
}