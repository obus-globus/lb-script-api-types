import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
import type { ByteString } from '../../kotlinx/io/bytestring/ByteString.d.ts'
export class BuffersKt extends Object {
    static indexOf(paramarg0: Buffer, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static snapshot(paramarg0: Buffer): ByteString;
}