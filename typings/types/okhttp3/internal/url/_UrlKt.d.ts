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
    static canonicalize(self: string, pos: number, limit: number, encodeSet: string, alreadyEncoded: boolean, strict: boolean, plusIsSpace: boolean, unicodeAllowed: boolean): string;
    static canonicalizeWithCharset(self: string, pos: number, limit: number, encodeSet: string, alreadyEncoded: boolean, strict: boolean, plusIsSpace: boolean, unicodeAllowed: boolean, charset: Charset | null): string;
    static getHEX_DIGITS(): string[];
    static isPercentEncoded(self: string, pos: number, limit: number): boolean;
    static percentDecode(self: string, pos: number, limit: number, plusIsSpace: boolean): string;
    static writeCanonicalized(self: Buffer, input: string, pos: number, limit: number, encodeSet: string, alreadyEncoded: boolean, strict: boolean, plusIsSpace: boolean, unicodeAllowed: boolean, charset: Charset | null): void;
    static writePercentDecoded(self: Buffer, encoded: string, pos: number, limit: number, plusIsSpace: boolean): void;
}