import type { LiteralByteString$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ByteString$ByteIterator } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ByteString$ByteIterator.d.ts'
export class LiteralByteString$LiteralByteIterator extends Object implements ByteString$ByteIterator {
    private constructor(null_: (Object | null)[])
    constructor(null_: (Object | null)[], arg1: LiteralByteString$1)
    // private limit: number;
    // private position: number;
    hasNext(): boolean;
    next(): number;
    nextByte(): number;
    remove(): void;
}