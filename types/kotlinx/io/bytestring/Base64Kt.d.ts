import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Base64 } from '../../../kotlin/io/encoding/Base64.d.ts'
import type { ByteString } from '../../../kotlinx/io/bytestring/ByteString.d.ts'
export class Base64Kt extends Object {
    static decode(paramarg0: Base64, paramarg1: ByteString, paramarg2: number, paramarg3: number): number[];
    static decodeIntoByteArray(paramarg0: Base64, paramarg1: ByteString, paramarg2: number[], paramarg3: number, paramarg4: number, paramarg5: number): number;
    static decodeToByteString(paramarg0: Base64, paramarg1: number[], paramarg2: number, paramarg3: number): ByteString;
    static decodeToByteString(paramarg0: Base64, paramarg1: CharSequence, paramarg2: number, paramarg3: number): ByteString;
    static decodeToByteString(paramarg0: Base64, paramarg1: ByteString, paramarg2: number, paramarg3: number): ByteString;
    static encode(paramarg0: Base64, paramarg1: ByteString, paramarg2: number, paramarg3: number): string;
    static encodeIntoByteArray(paramarg0: Base64, paramarg1: ByteString, paramarg2: number[], paramarg3: number, paramarg4: number, paramarg5: number): number;
    static encodeToAppendable(paramarg0: Base64, paramarg1: ByteString, paramarg2: Object | null, paramarg3: number, paramarg4: number): Object | null;
    static encodeToByteArray(paramarg0: Base64, paramarg1: ByteString, paramarg2: number, paramarg3: number): number[];
}