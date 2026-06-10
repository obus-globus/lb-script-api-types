import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { LanguageInfo } from '../../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextDocumentSurrogate } from '../../../../../../org/graalvm/tools/lsp/server/utils/TextDocumentSurrogate.d.ts'
export class TextDocumentSurrogateMap extends Object {
    constructor(env: TruffleInstrument$Env)
    // private env: TruffleInstrument$Env;
    // private uri2TextDocumentSurrogate: Map<URI, TextDocumentSurrogate>;
    containsSurrogate(uri: URI): boolean;
    get(uri: URI): TextDocumentSurrogate;
    getOrCreateSurrogate(uri: URI, languageInfo: LanguageInfo): TextDocumentSurrogate;
    getOrCreateSurrogate(uri: URI, languageInfoSupplier: () => LanguageInfo): TextDocumentSurrogate;
    getSurrogates(): TextDocumentSurrogate[];
    isSourceNewestInSurrogate(source: Source): boolean;
    put(uri: URI, surrogate: TextDocumentSurrogate): void;
    remove(uri: URI): void;
}