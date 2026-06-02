import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { FetchEmitTuple$ON_PARSE_EXCEPTION } from '../../../../org/apache/tika/pipes/FetchEmitTuple$ON_PARSE_EXCEPTION.d.ts'
import type { EmitKey } from '../../../../org/apache/tika/pipes/emitter/EmitKey.d.ts'
import type { EmbeddedDocumentBytesConfig } from '../../../../org/apache/tika/pipes/extractor/EmbeddedDocumentBytesConfig.d.ts'
import type { FetchKey } from '../../../../org/apache/tika/pipes/fetcher/FetchKey.d.ts'
export class FetchEmitTuple extends Object implements Serializable {
    static DEFAULT_ON_PARSE_EXCEPTION: FetchEmitTuple$ON_PARSE_EXCEPTION;
    constructor(arg0: string, arg1: FetchKey, arg2: EmitKey)
    constructor(arg0: string, arg1: FetchKey, arg2: EmitKey, arg3: Metadata)
    constructor(arg0: string, arg1: FetchKey, arg2: EmitKey, arg3: Metadata, arg4: ParseContext)
    constructor(arg0: string, arg1: FetchKey, arg2: EmitKey, arg3: Metadata, arg4: ParseContext, arg5: FetchEmitTuple$ON_PARSE_EXCEPTION)
    // private embeddedDocumentBytesConfig: EmbeddedDocumentBytesConfig;
    readonly emitKey: EmitKey;
    readonly fetchKey: FetchKey;
    readonly id: string;
    readonly metadata: Metadata;
    readonly onParseException: FetchEmitTuple$ON_PARSE_EXCEPTION;
    readonly parseContext: ParseContext;
    equals(arg0: Object | null): boolean;
    getEmitKey(): EmitKey;
    getFetchKey(): FetchKey;
    getId(): string;
    getMetadata(): Metadata;
    getOnParseException(): FetchEmitTuple$ON_PARSE_EXCEPTION;
    getParseContext(): ParseContext;
    hashCode(): number;
    setEmitKey(arg0: EmitKey): void;
    toString(): string;
}