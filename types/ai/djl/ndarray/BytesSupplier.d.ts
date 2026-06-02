import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface BytesSupplier extends Object{
    getAsBytes(): number[];
    getAsObject(): Object;
    getAsString(): string;
    toByteBuffer(): ByteBuffer;
}