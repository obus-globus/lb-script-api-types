import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InflaterInputStreamWithStatistics } from '../../../../../../org/apache/commons/compress/archivers/zip/InflaterInputStreamWithStatistics.d.ts'
import type { ZipArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveEntry.d.ts'
export class ZipFile$Entry extends ZipArchiveEntry {
    static CENATT: number;
    static CENATX: number;
    static CENCOM: number;
    static CENCRC: number;
    static CENDSK: number;
    static CENEXT: number;
    static CENFLG: number;
    static CENHDR: number;
    static CENHOW: number;
    static CENLEN: number;
    static CENNAM: number;
    static CENOFF: number;
    static CENSIG: number;
    static CENSIZ: number;
    static CENTIM: number;
    static CENVEM: number;
    static CENVER: number;
    static CRC_UNKNOWN: number;
    static DEFLATED: number;
    static ENDCOM: number;
    static ENDHDR: number;
    static ENDOFF: number;
    static ENDSIG: number;
    static ENDSIZ: number;
    static ENDSUB: number;
    static ENDTOT: number;
    static EXTCRC: number;
    static EXTHDR: number;
    static EXTLEN: number;
    static EXTSIG: number;
    static EXTSIZ: number;
    static LOCCRC: number;
    static LOCEXT: number;
    static LOCFLG: number;
    static LOCHDR: number;
    static LOCHOW: number;
    static LOCLEN: number;
    static LOCNAM: number;
    static LOCSIG: number;
    static LOCSIZ: number;
    static LOCTIM: number;
    static LOCVER: number;
    static OFFSET_UNKNOWN: number;
    static PLATFORM_FAT: number;
    static PLATFORM_UNIX: number;
    static SIZE_UNKNOWN: number;
    static STORED: number;
    constructor(arg0: InflaterInputStreamWithStatistics)
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}