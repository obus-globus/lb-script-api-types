import type { RopeByteString$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ByteString$ByteIterator } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ByteString$ByteIterator.d.ts'
import type { RopeByteString$PieceIterator } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/RopeByteString$PieceIterator.d.ts'
export class RopeByteString$RopeByteIterator extends Object implements ByteString$ByteIterator {
    private constructor(null_: (Object | null)[])
    constructor(null_: (Object | null)[], arg1: RopeByteString$1)
    // private bytes: ByteString$ByteIterator;
    // private bytesRemaining: number;
    // private pieces: RopeByteString$PieceIterator;
    hasNext(): boolean;
    next(): number;
    nextByte(): number;
    remove(): void;
}