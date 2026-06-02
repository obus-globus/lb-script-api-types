import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Charsets extends Object {
    static ISO_8859_1: Charset;
    static US_ASCII: Charset;
    static UTF_16: Charset;
    static UTF_16BE: Charset;
    static UTF_16LE: Charset;
    static UTF_8: Charset;
    static isAlias(paramarg0: Charset, paramarg1: string): boolean;
    static isUTF8(paramarg0: Charset): boolean;
    static requiredCharsets(): { [key: string]: Charset };
    static toCharset(paramarg0: string): Charset;
    static toCharset(paramarg0: string, paramarg1: Charset): Charset;
    static toCharset(paramarg0: Charset): Charset;
    static toCharset(paramarg0: Charset, paramarg1: Charset): Charset;
    static toCharsetDefault(paramarg0: string, paramarg1: Charset): Charset;
    constructor()
}