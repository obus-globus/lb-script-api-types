import type { Object } from '../../../java/lang/Object.d.ts'
import type { HexFormat } from '../../../kotlin/text/HexFormat.d.ts'
import type { ByteString } from '../../../kotlinx/io/bytestring/ByteString.d.ts'
export class HexKt extends Object {
    static hexToByteString(paramarg0: string, paramarg1: HexFormat): ByteString;
    static toHexString(paramarg0: ByteString, paramarg1: number, paramarg2: number, paramarg3: HexFormat): string;
    static toHexString(paramarg0: ByteString, paramarg1: HexFormat): string;
}