import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../kotlin/jvm/functions/Function1.d.ts'
import type { ByteString } from '../../../../kotlinx/io/bytestring/ByteString.d.ts'
export class UnsafeByteStringOperations extends Object {
    static INSTANCE: UnsafeByteStringOperations;
    withByteArrayUnsafe(byteString: ByteString, block: Function1<number[], void>): void;
    wrapUnsafe(array: number[]): ByteString;
}