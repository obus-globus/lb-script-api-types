import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { TruffleFile$FileTypeDetector } from '../../../../com/oracle/truffle/api/TruffleFile$FileTypeDetector.d.ts'
import type { LanguageCache } from '../../../../com/oracle/truffle/polyglot/LanguageCache.d.ts'
import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileSystem } from '../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
export class PolyglotImpl$EmbedderFileSystemContext extends Object {
    constructor(impl: PolyglotImpl)
    // private cachedLanguages: JavaMap<string, LanguageCache>;
    // private fileSystem: FileSystem;
    // private fileTypeDetectors: () => JavaMap<string, TruffleFile$FileTypeDetector[]>;
    // private impl: PolyglotImpl;
    getImpl(): PolyglotImpl;
}