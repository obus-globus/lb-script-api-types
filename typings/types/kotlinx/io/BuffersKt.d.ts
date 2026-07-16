import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
import type { ByteString } from '../../kotlinx/io/bytestring/ByteString.d.ts'
export class BuffersKt extends Object {
    static indexOf(self: Buffer, byte: number, startIndex: number, endIndex: number): number;
    static snapshot(self: Buffer): ByteString;
}