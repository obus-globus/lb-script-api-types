import type { AcceptEncoding } from '../../../../io/ktor/http/header/AcceptEncoding.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AcceptEncoding$Companion extends Object {
    // private All: AcceptEncoding;
    /*not mapped: */ getAll(): AcceptEncoding;
    // private Br: AcceptEncoding;
    /*not mapped: */ getBr(): AcceptEncoding;
    // private Compress: AcceptEncoding;
    /*not mapped: */ getCompress(): AcceptEncoding;
    // private Deflate: AcceptEncoding;
    /*not mapped: */ getDeflate(): AcceptEncoding;
    // private Gzip: AcceptEncoding;
    /*not mapped: */ getGzip(): AcceptEncoding;
    // private Identity: AcceptEncoding;
    /*not mapped: */ getIdentity(): AcceptEncoding;
    // private Zstd: AcceptEncoding;
    /*not mapped: */ getZstd(): AcceptEncoding;
    mergeAcceptEncodings(...encodings: AcceptEncoding[]): string;
}