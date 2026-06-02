import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cbor } from '../../../../kotlinx/serialization/cbor/Cbor.d.ts'
import type { CborParser } from '../../../../kotlinx/serialization/cbor/internal/CborParser.d.ts'
import type { CborReader } from '../../../../kotlinx/serialization/cbor/internal/CborReader.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder$Companion } from '../../../../kotlinx/serialization/encoding/CompositeDecoder$Companion.d.ts'
export class CborListReader extends CborReader {
    static Companion: CompositeDecoder$Companion;
    static DECODE_DONE: number;
    static UNKNOWN_NAME: number;
    constructor(cbor: Cbor, decoder: CborParser)
    // private ind: number;
    decodeElementIndex(descriptor: SerialDescriptor): number;
    protected skipBeginToken(objectTags: (Object | null)[] | null): void;
}