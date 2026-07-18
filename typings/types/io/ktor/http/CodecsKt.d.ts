import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CodecsKt extends Object {
    static decodeURLPart(self: string, start: number, end: number, charset: Charset): string;
    static decodeURLQueryComponent(self: string, start: number, end: number, plusIsSpace: boolean, charset: Charset): string;
    static encodeOAuth(self: string): string;
    static encodeURLParameter(self: string, spaceToPlus: boolean): string;
    static encodeURLParameterValue(self: string): string;
    static encodeURLPath(self: string, encodeSlash: boolean, encodeEncoded: boolean): string;
    static encodeURLPathPart(self: string): string;
    static encodeURLQueryComponent(self: string, encodeFull: boolean, spaceToPlus: boolean, charset: Charset): string;
    static getATTRIBUTE_CHARACTERS(): string[];
    static percentEncode(self: string, allowedSet: string[]): string;
}