import type { Charset } from '../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Charsets extends Object {
    static INSTANCE: Charsets;
    static ISO_8859_1: Charset;
    static US_ASCII: Charset;
    static UTF_16: Charset;
    static UTF_16BE: Charset;
    static UTF_16LE: Charset;
    static UTF_8: Charset;
    ISO_8859_1: Charset;
    US_ASCII: Charset;
    UTF_16: Charset;
    UTF_16BE: Charset;
    UTF_16LE: Charset;
    /*not mapped: */ UTF32(): Charset;
    /*not mapped: */ UTF32_BE(): Charset;
    /*not mapped: */ UTF32_LE(): Charset;
    UTF_8: Charset;
    // private utf_32: Charset | null;
    // private utf_32be: Charset | null;
    // private utf_32le: Charset | null;
}