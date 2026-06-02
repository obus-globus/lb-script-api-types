import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { JarFile } from '../../../../../../java/util/jar/JarFile.d.ts'
import type { JarInputStream } from '../../../../../../java/util/jar/JarInputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Archive$PackingFile } from '../../../../../../org/apache/commons/compress/harmony/pack200/Archive$PackingFile.d.ts'
import type { PackingOptions } from '../../../../../../org/apache/commons/compress/harmony/pack200/PackingOptions.d.ts'
export class PackingUtils extends Object {
    static config(paramarg0: PackingOptions): void;
    static copyThroughJar(paramarg0: JarFile, paramarg1: OutputStream): void;
    static copyThroughJar(paramarg0: JarInputStream, paramarg1: OutputStream): void;
    static getPackingFileListFromJar(paramarg0: JarFile, paramarg1: boolean): Archive$PackingFile[];
    static getPackingFileListFromJar(paramarg0: JarInputStream, paramarg1: boolean): Archive$PackingFile[];
    static log(paramarg0: string): void;
    constructor()
}