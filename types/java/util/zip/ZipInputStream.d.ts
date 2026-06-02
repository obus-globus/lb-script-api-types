import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { CRC32 } from '../../../java/util/zip/CRC32.d.ts'
import type { InflaterInputStream } from '../../../java/util/zip/InflaterInputStream.d.ts'
import type { ZipCoder } from '../../../java/util/zip/ZipCoder.d.ts'
import type { ZipConstants } from '../../../java/util/zip/ZipConstants.d.ts'
import type { ZipEntry } from '../../../java/util/zip/ZipEntry.d.ts'
export class ZipInputStream extends InflaterInputStream implements ZipConstants {
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
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: Charset)
    // private b: number[];
    // private closed: boolean;
    // private crc: CRC32;
    // private entry: ZipEntry;
    // private entryEOF: boolean;
    // private expect64BitDataDescriptor: boolean;
    // private flag: number;
    // private remaining: number;
    // private tmpbuf: number[];
    // private zc: ZipCoder;
    available(): number;
    close(): void;
    closeEntry(): void;
    createZipEntry(arg0: string): ZipEntry;
    // private ensureOpen(): void;
    // private expect64BitDataDescriptor(arg0: number[], arg1: number, arg2: number, arg3: number): boolean;
    getNextEntry(): ZipEntry;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    readAllBytes(): number[];
    // private readEnd(arg0: ZipEntry): void;
    // private readFully(arg0: number[], arg1: number, arg2: number): void;
    // private readLOC(): ZipEntry;
    readNBytes(arg0: number[], arg1: number, arg2: number): number;
    readNBytes(arg0: number): number[];
    skip(arg0: number): number;
    skipNBytes(arg0: number): void;
    transferTo(arg0: OutputStream): number;
}