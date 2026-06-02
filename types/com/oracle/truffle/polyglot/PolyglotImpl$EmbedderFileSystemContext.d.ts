import type { LanguageCache } from '../../../../com/oracle/truffle/polyglot/LanguageCache.d.ts'
import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileSystem } from '../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
export class PolyglotImpl$EmbedderFileSystemContext extends Object {
    constructor(impl: PolyglotImpl)
    // private cachedLanguages: { [key: string]: LanguageCache };
    // private fileSystem: FileSystem;
    // private fileTypeDetectors: () => { [key: string]: E[] };
    // private impl: PolyglotImpl;
    getImpl(): PolyglotImpl;
}