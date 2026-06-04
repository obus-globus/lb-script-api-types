import type { BytesSupplier } from '../../../ai/djl/ndarray/BytesSupplier.d.ts'
import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface JsonSerializable extends BytesSupplier, Serializable, Object{
    getAsBytes(): number[];
    getAsObject(): Object;
    getAsString(): string;
    serialize(): JsonElement;
    toByteBuffer(): ByteBuffer;
    toJson(): string;
}