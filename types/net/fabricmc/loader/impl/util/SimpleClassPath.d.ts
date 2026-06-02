import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ZipFile } from '../../../../../java/util/zip/ZipFile.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SimpleClassPath$CpEntry } from '../../../../../net/fabricmc/loader/impl/util/SimpleClassPath$CpEntry.d.ts'
export class SimpleClassPath extends Object implements Closeable {
    constructor(arg0: Path[][])
    // private jarMarkers: (Object | null)[];
    // private openJars: ZipFile[];
    readonly paths: Path[][];
    close(): void;
    getEntry(arg0: string): SimpleClassPath$CpEntry;
    getInputStream(arg0: string): InputStream;
    getPaths(): Path[][];
}