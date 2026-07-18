import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class UtilsKt extends Object {
    static flagAt(self: boolean, at: number): number;
    static getOUTGOING_CHANNEL_CAPACITY(): number;
    static xor(self: number, other: number): number;
    static xor(self: ByteBuffer, other: ByteBuffer): void;
}