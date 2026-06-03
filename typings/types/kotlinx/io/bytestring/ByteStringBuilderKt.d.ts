import type { Object } from '../../../java/lang/Object.d.ts'
import type { ByteString } from '../../../kotlinx/io/bytestring/ByteString.d.ts'
import type { ByteStringBuilder } from '../../../kotlinx/io/bytestring/ByteStringBuilder.d.ts'
export class ByteStringBuilderKt extends Object {
    static append(paramarg0: ByteStringBuilder, paramarg1: number[]): void;
    static append(paramarg0: ByteStringBuilder, paramarg1: ByteString): void;
// (invalid TS: name contains '-')     static append-EK-6454(paramarg0: ByteStringBuilder, paramarg1: number): void;
    static buildByteString(paramarg0: number, paramarg1: (param0: Object | null) => void): ByteString;
}