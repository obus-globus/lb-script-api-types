import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ByteBufferDestination } from '../../../../../../org/apache/logging/log4j/core/layout/ByteBufferDestination.d.ts'
export interface Encoder<T extends Object | number | string | boolean> extends Object{
    encode(source: T, destination: ByteBufferDestination): void;
}