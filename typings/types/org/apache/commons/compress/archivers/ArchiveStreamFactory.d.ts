import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { ArchiveInputStream } from '../../../../../org/apache/commons/compress/archivers/ArchiveInputStream.d.ts'
import type { ArchiveOutputStream } from '../../../../../org/apache/commons/compress/archivers/ArchiveOutputStream.d.ts'
import type { ArchiveStreamProvider } from '../../../../../org/apache/commons/compress/archivers/ArchiveStreamProvider.d.ts'
export class ArchiveStreamFactory extends Object implements ArchiveStreamProvider {
    static APK: string;
    static APKM: string;
    static APKS: string;
    static AR: string;
    static ARJ: string;
    static CPIO: string;
    static DEFAULT: ArchiveStreamFactory;
    static DUMP: string;
    static JAR: string;
    static SEVEN_Z: string;
    static TAR: string;
    static XAPK: string;
    static ZIP: string;
    static detect(paramarg0: InputStream): string;
    static findAvailableArchiveInputStreamProviders(): { [key: string]: ArchiveStreamProvider };
    static findAvailableArchiveOutputStreamProviders(): { [key: string]: ArchiveStreamProvider };
    constructor()
    constructor(arg0: string)
    readonly archiveInputStreamProviders: { [key: string]: ArchiveStreamProvider };
    readonly archiveOutputStreamProviders: { [key: string]: ArchiveStreamProvider };
    readonly entryEncoding: string;
    createArchiveInputStream<I extends ArchiveInputStream<ArchiveEntry>>(arg0: InputStream): I;
    createArchiveInputStream<I extends ArchiveInputStream<ArchiveEntry>>(arg0: string, arg1: InputStream): I;
    createArchiveInputStream<I extends ArchiveInputStream<ArchiveEntry>>(arg0: string, arg1: InputStream, arg2: string): I;
    createArchiveOutputStream<O extends ArchiveOutputStream<ArchiveEntry>>(arg0: string, arg1: OutputStream): O;
    createArchiveOutputStream<O extends ArchiveOutputStream<ArchiveEntry>>(arg0: string, arg1: OutputStream, arg2: string): O;
    getArchiveInputStreamProviders(): { [key: string]: ArchiveStreamProvider };
    getArchiveOutputStreamProviders(): { [key: string]: ArchiveStreamProvider };
    getEntryEncoding(): string;
    getInputStreamArchiveNames(): string[];
    getOutputStreamArchiveNames(): string[];
    setEntryEncoding(arg0: string): void;
}