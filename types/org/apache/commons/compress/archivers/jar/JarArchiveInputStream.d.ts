import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { JarArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/jar/JarArchiveEntry.d.ts'
import type { ZipArchiveInputStream } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveInputStream.d.ts'
export class JarArchiveInputStream extends ZipArchiveInputStream {
    static PREAMBLE_GARBAGE_MAX_SIZE: number;
    static matches(paramarg0: number[], paramarg1: number): boolean;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: string)
    getNextEntry(): JarArchiveEntry;
    getNextJarEntry(): JarArchiveEntry;
}