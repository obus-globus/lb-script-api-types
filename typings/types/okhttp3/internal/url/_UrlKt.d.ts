import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
export class _UrlKt extends Object {
    static FORM_ENCODE_SET: string;
    static FRAGMENT_ENCODE_SET: string;
    static FRAGMENT_ENCODE_SET_URI: string;
    static PASSWORD_ENCODE_SET: string;
    static PATH_SEGMENT_ENCODE_SET: string;
    static PATH_SEGMENT_ENCODE_SET_URI: string;
    static QUERY_COMPONENT_ENCODE_SET: string;
    static QUERY_COMPONENT_ENCODE_SET_URI: string;
    static QUERY_COMPONENT_REENCODE_SET: string;
    static QUERY_ENCODE_SET: string;
    static USERNAME_ENCODE_SET: string;
    static canonicalize(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: string, paramarg4: boolean, paramarg5: boolean, paramarg6: boolean, paramarg7: boolean): string;
    static canonicalizeWithCharset(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: string, paramarg4: boolean, paramarg5: boolean, paramarg6: boolean, paramarg7: boolean, paramarg8: Charset): string;
    static getHEX_DIGITS(): string[];
    static isPercentEncoded(paramarg0: string, paramarg1: number, paramarg2: number): boolean;
    static percentDecode(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: boolean): string;
    static writeCanonicalized(paramarg0: Buffer, paramarg1: string, paramarg2: number, paramarg3: number, paramarg4: string, paramarg5: boolean, paramarg6: boolean, paramarg7: boolean, paramarg8: boolean, paramarg9: Charset): void;
    static writePercentDecoded(paramarg0: Buffer, paramarg1: string, paramarg2: number, paramarg3: number, paramarg4: boolean): void;
}