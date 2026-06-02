import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ByteBufferDestination } from '../../../../../../org/apache/logging/log4j/core/layout/ByteBufferDestination.d.ts'
export class ByteBufferDestinationHelper extends Object {
    static writeToUnsynchronized(paramdata: number[], paramoffset: number, paramlength: number, paramdestination: ByteBufferDestination): void;
    static writeToUnsynchronized(paramsource: ByteBuffer, paramdestination: ByteBufferDestination): void;
    private constructor()
}