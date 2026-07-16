import type { Object } from '../../../java/lang/Object.d.ts'
import type { UByte } from '../../../kotlin/UByte.d.ts'
import type { ByteString } from '../../../kotlinx/io/bytestring/ByteString.d.ts'
import type { ByteStringBuilder } from '../../../kotlinx/io/bytestring/ByteStringBuilder.d.ts'
export class ByteStringBuilderKt extends Object {
    static append(self: ByteStringBuilder, ...bytes: number[]): void;
    static append(self: ByteStringBuilder, byteString: ByteString): void;
// (invalid TS: name contains '-')     static append-EK-6454(self: ByteStringBuilder, byte: UByte): void;
    static buildByteString(capacity: number, builderAction: (param0: ByteStringBuilder) => void): ByteString;
}