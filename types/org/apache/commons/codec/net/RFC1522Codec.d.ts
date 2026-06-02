import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class RFC1522Codec extends Object {
    constructor(arg0: Charset)
    readonly charset: Charset;
    decodeText(arg0: string): string;
    doDecoding(arg0: number[]): number[];
    doEncoding(arg0: number[]): number[];
    encodeText(arg0: string, arg1: Charset): string;
    encodeText(arg0: string, arg1: string): string;
    getCharset(): Charset;
    getDefaultCharset(): string;
    getEncoding(): string;
}