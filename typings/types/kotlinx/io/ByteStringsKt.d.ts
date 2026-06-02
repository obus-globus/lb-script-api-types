import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
import type { Sink } from '../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../kotlinx/io/Source.d.ts'
import type { ByteString } from '../../kotlinx/io/bytestring/ByteString.d.ts'
export class ByteStringsKt extends Object {
    static indexOf(paramarg0: Buffer, paramarg1: ByteString, paramarg2: number): number;
    static indexOf(paramarg0: Source, paramarg1: ByteString, paramarg2: number): number;
    static readByteString(paramarg0: Source): ByteString;
    static readByteString(paramarg0: Source, paramarg1: number): ByteString;
    static write(paramarg0: Sink, paramarg1: ByteString, paramarg2: number, paramarg3: number): void;
}