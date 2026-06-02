import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cbor } from '../../../../kotlinx/serialization/cbor/Cbor.d.ts'
import type { CborListReader } from '../../../../kotlinx/serialization/cbor/internal/CborListReader.d.ts'
import type { CborParser } from '../../../../kotlinx/serialization/cbor/internal/CborParser.d.ts'
import type { CompositeDecoder$Companion } from '../../../../kotlinx/serialization/encoding/CompositeDecoder$Companion.d.ts'
export class CborMapReader extends CborListReader {
    static Companion: CompositeDecoder$Companion;
    static DECODE_DONE: number;
    static UNKNOWN_NAME: number;
    constructor(cbor: Cbor, decoder: CborParser)
    protected skipBeginToken(objectTags: (Object | null)[] | null): void;
}