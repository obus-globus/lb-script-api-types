import type { File } from '../../../java/io/File.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Runtime$Version } from '../../../java/lang/Runtime$Version.d.ts'
import type { SoftReference } from '../../../java/lang/ref/SoftReference.d.ts'
import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { JarEntry } from '../../../java/util/jar/JarEntry.d.ts'
import type { JarVerifier } from '../../../java/util/jar/JarVerifier.d.ts'
import type { Manifest } from '../../../java/util/jar/Manifest.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { ZipEntry } from '../../../java/util/zip/ZipEntry.d.ts'
import type { ZipFile } from '../../../java/util/zip/ZipFile.d.ts'
export class JarFile extends ZipFile {
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
    static MANIFEST_NAME: string;
    static OPEN_DELETE: number;
    static OPEN_READ: number;
    static baseVersion(): Runtime$Version;
    static runtimeVersion(): Runtime$Version;
    constructor(arg0: File)
    constructor(arg0: File, arg1: boolean)
    constructor(arg0: File, arg1: boolean, arg2: number)
    constructor(arg0: File, arg1: boolean, arg2: number, arg3: Runtime$Version)
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    // private hasCheckedSpecialAttributes: boolean;
    // private hasClassPathAttribute: boolean;
    // private isMultiRelease: boolean;
    // private jv: JarVerifier;
    // private jvInitialized: boolean;
    // private manEntry: JarEntry;
    // private manRef: SoftReference<Manifest>;
    // private verify: boolean;
    readonly version: Runtime$Version;
    // private versionFeature: number;
    // private checkForSpecialAttributes(): void;
    ensureInitialization(): void;
    entries(): Enumeration<JarEntry>;
    entryFor(arg0: string): JarEntry;
    // private getBasename(arg0: string): string;
    // private getBytes(arg0: ZipEntry): number[];
    getEntry(arg0: string): ZipEntry;
    getInputStream(arg0: ZipEntry): InputStream;
    getJarEntry(arg0: string): JarEntry;
    // private getManEntry(): JarEntry;
    getManifest(): Manifest;
    // private getManifestFromReference(): Manifest;
    getRealName(arg0: JarEntry): string;
    getVersion(): Runtime$Version;
    // private getVersionedEntry(arg0: string, arg1: JarEntry): JarEntry;
    hasClassPathAttribute(): boolean;
    // private initializeVerifier(): void;
    isMultiRelease(): boolean;
    // private match(arg0: number[], arg1: number[], arg2: number[], arg3: number[]): number;
    // private maybeInstantiateVerifier(): void;
    stream(): Stream<JarEntry>;
    // private verifiableEntry(arg0: ZipEntry): JarEntry;
    versionedStream(): Stream<JarEntry>;
}