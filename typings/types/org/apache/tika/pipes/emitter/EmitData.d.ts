import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { ParseContext } from '../../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { EmitKey } from '../../../../../org/apache/tika/pipes/emitter/EmitKey.d.ts'
export class EmitData extends Object implements Serializable {
    constructor(arg0: EmitKey, arg1: Metadata[])
    constructor(arg0: EmitKey, arg1: Metadata[], arg2: string)
    constructor(arg0: EmitKey, arg1: Metadata[], arg2: string, arg3: ParseContext)
    readonly containerStackTrace: string;
    readonly emitKey: EmitKey;
    readonly metadataList: Metadata[];
    readonly parseContext: ParseContext;
    getContainerStackTrace(): string;
    getEmitKey(): EmitKey;
    getEstimatedSizeBytes(): number;
    getMetadataList(): Metadata[];
    getParseContext(): ParseContext;
    setParseContext(arg0: ParseContext): void;
    toString(): string;
}