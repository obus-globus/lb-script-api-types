import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { JarFile } from '../../../../../../java/util/jar/JarFile.d.ts'
import type { JarInputStream } from '../../../../../../java/util/jar/JarInputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Archive$PackingFile } from '../../../../../../org/apache/commons/compress/harmony/pack200/Archive$PackingFile.d.ts'
import type { Archive$SegmentUnit } from '../../../../../../org/apache/commons/compress/harmony/pack200/Archive$SegmentUnit.d.ts'
import type { Pack200ClassReader } from '../../../../../../org/apache/commons/compress/harmony/pack200/Pack200ClassReader.d.ts'
import type { PackingOptions } from '../../../../../../org/apache/commons/compress/harmony/pack200/PackingOptions.d.ts'
export class Archive extends Object {
    constructor(arg0: JarFile, arg1: OutputStream, arg2: PackingOptions)
    constructor(arg0: JarInputStream, arg1: OutputStream, arg2: PackingOptions)
    // private currentSegmentSize: number;
    // private jarFile: JarFile;
    // private jarInputStream: JarInputStream;
    // private options: PackingOptions;
    // private outputStream: OutputStream;
    // private addJarEntry(arg0: Archive$PackingFile, arg1: Pack200ClassReader[], arg2: Archive$PackingFile[]): boolean;
    // private doNormalPack(): void;
    // private doZeroEffortPack(): void;
    // private estimateSize(arg0: Archive$PackingFile): number;
    pack(): void;
    // private splitIntoSegments(arg0: Archive$PackingFile[]): Archive$SegmentUnit[];
}