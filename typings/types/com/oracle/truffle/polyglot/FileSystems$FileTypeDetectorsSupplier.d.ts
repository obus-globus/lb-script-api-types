import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { TruffleFile$FileTypeDetector } from '../../../../com/oracle/truffle/api/TruffleFile$FileTypeDetector.d.ts'
import type { LanguageCache } from '../../../../com/oracle/truffle/polyglot/LanguageCache.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FileSystems$FileTypeDetectorsSupplier extends Object implements Supplier<JavaMap<string, TruffleFile$FileTypeDetector[]>> {
    constructor(languageCaches: LanguageCache[])
    // private languageCaches: LanguageCache[];
    get(): JavaMap<string, TruffleFile$FileTypeDetector[]>;
}