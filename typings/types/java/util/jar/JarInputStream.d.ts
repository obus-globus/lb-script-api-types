import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { JarEntry } from '../../../java/util/jar/JarEntry.d.ts'
import type { JarVerifier } from '../../../java/util/jar/JarVerifier.d.ts'
import type { Manifest } from '../../../java/util/jar/Manifest.d.ts'
import type { ZipEntry } from '../../../java/util/zip/ZipEntry.d.ts'
import type { ZipInputStream } from '../../../java/util/zip/ZipInputStream.d.ts'
import type { ManifestEntryVerifier } from '../../../sun/security/util/ManifestEntryVerifier.d.ts'
export class JarInputStream extends ZipInputStream {
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
    constructor(arg0: InputStream, arg1: boolean)
    // private doVerify: boolean;
    // private first: JarEntry;
    // private jv: JarVerifier;
    // private man: Manifest;
    // private mev: ManifestEntryVerifier;
    // private tryManifest: boolean;
    // private checkManifest(arg0: JarEntry): JarEntry;
    createZipEntry(arg0: string): ZipEntry;
    getManifest(): Manifest;
    getNextEntry(): ZipEntry;
    getNextJarEntry(): JarEntry;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
}