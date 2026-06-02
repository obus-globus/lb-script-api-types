import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { BitSet } from '../../../java/util/BitSet.d.ts'
import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { JarEntry } from '../../../java/util/jar/JarEntry.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { ZipCoder } from '../../../java/util/zip/ZipCoder.d.ts'
import type { ZipConstants } from '../../../java/util/zip/ZipConstants.d.ts'
import type { ZipEntry } from '../../../java/util/zip/ZipEntry.d.ts'
import type { ZipFile$CleanableResource } from '../../../java/util/zip/ZipFile$CleanableResource.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ZipFile extends Object implements Closeable, ZipConstants {
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
    static OPEN_DELETE: number;
    static OPEN_READ: number;
    constructor(arg0: File)
    constructor(arg0: File, arg1: Charset)
    constructor(arg0: File, arg1: number)
    constructor(arg0: File, arg1: number, arg2: Charset)
    constructor(arg0: string)
    constructor(arg0: string, arg1: Charset)
    // private closeRequested: boolean;
    // private fileName: string;
    // private filePath: string;
    // private lastEntryName: string;
    // private lastEntryPos: number;
    // private res: ZipFile$CleanableResource;
    // private zipCoder: ZipCoder;
    close(): void;
    // private ensureOpen(): void;
    // private ensureOpenOrZipException(): void;
    entries(): Enumeration<ZipEntry>;
    // private entryNameStream(): Stream<string>;
    getComment(): string;
    getEntry(arg0: string): ZipEntry;
    // private getEntryName(arg0: number): string;
    getInputStream(arg0: ZipEntry): InputStream;
    // private getManifestAndSignatureRelatedFiles(): string[];
    // private getManifestName(arg0: boolean): string;
    // private getManifestNum(): number;
    // private getMetaInfVersions(arg0: string): BitSet;
    getName(): string;
    // private getZipEntry(arg0: string, arg1: number): ZipEntry;
    // private jarEntries(): Enumeration<JarEntry>;
    // private jarStream(): Stream<JarEntry>;
    size(): number;
    stream(): Stream<ZipEntry>;
    toString(): string;
}