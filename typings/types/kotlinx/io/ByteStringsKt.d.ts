import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
import type { Sink } from '../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../kotlinx/io/Source.d.ts'
import type { ByteString } from '../../kotlinx/io/bytestring/ByteString.d.ts'
export class ByteStringsKt extends Object {
    static indexOf(self: Buffer, byteString: ByteString, startIndex: number): number;
    static indexOf(self: Source, byteString: ByteString, startIndex: number): number;
    static readByteString(self: Source): ByteString;
    static readByteString(self: Source, byteCount: number): ByteString;
    static write(self: Sink, byteString: ByteString, startIndex: number, endIndex: number): void;
}