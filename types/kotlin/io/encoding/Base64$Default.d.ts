import type { Base64 } from '../../../kotlin/io/encoding/Base64.d.ts'
export class Base64$Default extends Base64 {
    static Default: Base64$Default;
    static bytesPerGroup: number;
    static padSymbol: number;
    static symbolsPerGroup: number;
    // private Mime: Base64;
    /*not mapped: */ getMime(): Base64;
    // private Pem: Base64;
    /*not mapped: */ getPem(): Base64;
    // private UrlSafe: Base64;
    /*not mapped: */ getUrlSafe(): Base64;
    // private bitsPerByte: number;
    // private bitsPerSymbol: number;
    bytesPerGroup: number;
    // private lineLengthMime: number;
    // private lineLengthPem: number;
    // private mimeLineSeparatorSymbols: number[];
    /*not mapped: */ getMimeLineSeparatorSymbols$kotlin_stdlib(): number[];
    padSymbol: number;
    symbolsPerGroup: number;
}