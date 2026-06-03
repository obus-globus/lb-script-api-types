import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { CRC32 } from '../../../java/util/zip/CRC32.d.ts'
import type { DeflaterOutputStream } from '../../../java/util/zip/DeflaterOutputStream.d.ts'
import type { ZipCoder } from '../../../java/util/zip/ZipCoder.d.ts'
import type { ZipConstants } from '../../../java/util/zip/ZipConstants.d.ts'
import type { ZipEntry } from '../../../java/util/zip/ZipEntry.d.ts'
import type { ZipOutputStream$XEntry } from '../../../java/util/zip/ZipOutputStream$XEntry.d.ts'
export class ZipOutputStream extends DeflaterOutputStream implements ZipConstants {
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
    static STORED: number;
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: Charset)
    // private closed: boolean;
    readonly comment: number[];
    // private crc: CRC32;
    // private current: ZipOutputStream$XEntry;
    // private finished: boolean;
    // private locoff: number;
    readonly method: number;
    // private names: string[];
    // private written: number;
    // private xentries: ZipOutputStream$XEntry[];
    // private zc: ZipCoder;
    close(): void;
    closeEntry(): void;
    // private ensureOpen(): void;
    finish(): void;
    // private getExtraLen(arg0: number[]): number;
    putNextEntry(arg0: ZipEntry): void;
    setComment(arg0: string): void;
    setLevel(arg0: number): void;
    setMethod(arg0: number): void;
    // private versionMadeBy(arg0: ZipEntry, arg1: number): number;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    // private writeByte(arg0: number): void;
    // private writeBytes(arg0: number[], arg1: number, arg2: number): void;
    // private writeCEN(arg0: ZipOutputStream$XEntry): void;
    // private writeEND(arg0: number, arg1: number): void;
    // private writeEXT(arg0: ZipEntry): void;
    // private writeExtra(arg0: number[]): void;
    // private writeInt(arg0: number): void;
    // private writeLOC(arg0: ZipOutputStream$XEntry): void;
    // private writeLong(arg0: number): void;
    // private writeShort(arg0: number): void;
}