import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ByteString$ByteIterator } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ByteString$ByteIterator.d.ts'
import type { RopeByteString$PieceIterator } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/RopeByteString$PieceIterator.d.ts'
export class RopeByteString$RopeByteIterator extends Object implements ByteString$ByteIterator {
    private constructor(null_: (Object | null)[])
    // private bytes: ByteString$ByteIterator;
    // private bytesRemaining: number;
    // private pieces: RopeByteString$PieceIterator;
    hasNext(): boolean;
    next(): number;
    nextByte(): number;
    remove(): void;
}