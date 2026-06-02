import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { JarFile } from '../../../../../../java/util/jar/JarFile.d.ts'
import type { JarInputStream } from '../../../../../../java/util/jar/JarInputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pack200Adapter } from '../../../../../../org/apache/commons/compress/harmony/pack200/Pack200Adapter.d.ts'
import type { PackingOptions } from '../../../../../../org/apache/commons/compress/harmony/pack200/PackingOptions.d.ts'
import type { Pack200$Packer } from '../../../../../../org/apache/commons/compress/java/util/jar/Pack200$Packer.d.ts'
export class Pack200PackerAdapter extends Pack200Adapter implements Pack200$Packer {
    static CLASS_ATTRIBUTE_PFX: string;
    static CODE_ATTRIBUTE_PFX: string;
    static DEFLATE_HINT: string;
    static EFFORT: string;
    static ERROR: string;
    static FALSE: string;
    static FIELD_ATTRIBUTE_PFX: string;
    static KEEP: string;
    static KEEP_FILE_ORDER: string;
    static LATEST: string;
    static METHOD_ATTRIBUTE_PFX: string;
    static MODIFICATION_TIME: string;
    static PASS: string;
    static PASS_FILE_PFX: string;
    static PROGRESS: string;
    static SEGMENT_LIMIT: string;
    static STRIP: string;
    static TRUE: string;
    static UNKNOWN_ATTRIBUTE: string;
    constructor()
    // private options: PackingOptions;
    firePropertyChange(arg0: string, arg1: Object, arg2: Object): void;
    pack(arg0: JarFile, arg1: OutputStream): void;
    pack(arg0: JarInputStream, arg1: OutputStream): void;
}