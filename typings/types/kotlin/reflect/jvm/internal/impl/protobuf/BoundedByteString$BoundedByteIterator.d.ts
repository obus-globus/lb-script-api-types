import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ByteString$ByteIterator } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ByteString$ByteIterator.d.ts'
export class BoundedByteString$BoundedByteIterator extends Object implements ByteString$ByteIterator {
    private constructor(null_: (Object | null)[])
    // private limit: number;
    // private position: number;
    hasNext(): boolean;
    next(): number;
    nextByte(): number;
    remove(): void;
}