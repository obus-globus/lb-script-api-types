import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../okio/Buffer.d.ts'
import type { ByteString } from '../../okio/ByteString.d.ts'
export class -ByteString extends Object {
    static commonBase64(paramarg0: ByteString): string;
    static commonBase64Url(paramarg0: ByteString): string;
    static commonCompareTo(paramarg0: ByteString, paramarg1: ByteString): number;
    static commonCopyInto(paramarg0: ByteString, paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): void;
    static commonDecodeBase64(paramarg0: string): ByteString;
    static commonEncodeUtf8(paramarg0: string): ByteString;
    static commonEndsWith(paramarg0: ByteString, paramarg1: number[]): boolean;
    static commonEndsWith(paramarg0: ByteString, paramarg1: ByteString): boolean;
    static commonEquals(paramarg0: ByteString, paramarg1: Object): boolean;
    static commonGetByte(paramarg0: ByteString, paramarg1: number): number;
    static commonGetSize(paramarg0: ByteString): number;
    static commonHashCode(paramarg0: ByteString): number;
    static commonHex(paramarg0: ByteString): string;
    static commonIndexOf(paramarg0: ByteString, paramarg1: number[], paramarg2: number): number;
    static commonInternalArray(paramarg0: ByteString): number[];
    static commonLastIndexOf(paramarg0: ByteString, paramarg1: number[], paramarg2: number): number;
    static commonLastIndexOf(paramarg0: ByteString, paramarg1: ByteString, paramarg2: number): number;
    static commonOf(paramarg0: number[]): ByteString;
    static commonRangeEquals(paramarg0: ByteString, paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): boolean;
    static commonRangeEquals(paramarg0: ByteString, paramarg1: number, paramarg2: ByteString, paramarg3: number, paramarg4: number): boolean;
    static commonStartsWith(paramarg0: ByteString, paramarg1: number[]): boolean;
    static commonStartsWith(paramarg0: ByteString, paramarg1: ByteString): boolean;
    static commonSubstring(paramarg0: ByteString, paramarg1: number, paramarg2: number): ByteString;
    static commonToAsciiLowercase(paramarg0: ByteString): ByteString;
    static commonToAsciiUppercase(paramarg0: ByteString): ByteString;
    static commonToByteArray(paramarg0: ByteString): number[];
    static commonToByteString(paramarg0: number[], paramarg1: number, paramarg2: number): ByteString;
    static commonToString(paramarg0: ByteString): string;
    static commonUtf8(paramarg0: ByteString): string;
    static commonWrite(paramarg0: ByteString, paramarg1: Buffer, paramarg2: number, paramarg3: number): void;
    static getHEX_DIGIT_CHARS(): string[];
}