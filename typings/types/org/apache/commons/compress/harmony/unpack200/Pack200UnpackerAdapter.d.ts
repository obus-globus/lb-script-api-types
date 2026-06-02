import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { JarOutputStream } from '../../../../../../java/util/jar/JarOutputStream.d.ts'
import type { Pack200Adapter } from '../../../../../../org/apache/commons/compress/harmony/pack200/Pack200Adapter.d.ts'
import type { Pack200$Unpacker } from '../../../../../../org/apache/commons/compress/java/util/jar/Pack200$Unpacker.d.ts'
export class Pack200UnpackerAdapter extends Pack200Adapter implements Pack200$Unpacker {
    static DEFLATE_HINT: string;
    static FALSE: string;
    static KEEP: string;
    static PROGRESS: string;
    static TRUE: string;
    constructor()
    unpack(arg0: File, arg1: JarOutputStream): void;
    unpack(arg0: InputStream, arg1: JarOutputStream): void;
}