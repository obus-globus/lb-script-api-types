import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ByteString$ByteIterator } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ByteString$ByteIterator.d.ts'
import type { RopeByteString$PieceIterator } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/RopeByteString$PieceIterator.d.ts'
export class RopeByteString$RopeByteIterator extends Object implements ByteString$ByteIterator {
    constructor(null_: (Object | null)[], arg1: any)
    // private bytes: ByteString$ByteIterator;
    // private bytesRemaining: number;
    // private pieces: RopeByteString$PieceIterator;
    hasNext(): boolean;
    next(): number;
    nextByte(): number;
    remove(): void;
}