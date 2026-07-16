import type { Object } from '../../../java/lang/Object.d.ts'
import type { HexFormat } from '../../../kotlin/text/HexFormat.d.ts'
import type { ByteString } from '../../../kotlinx/io/bytestring/ByteString.d.ts'
export class HexKt extends Object {
    static hexToByteString(self: string, format: HexFormat): ByteString;
    static toHexString(self: ByteString, startIndex: number, endIndex: number, format: HexFormat): string;
    static toHexString(self: ByteString, format: HexFormat): string;
}