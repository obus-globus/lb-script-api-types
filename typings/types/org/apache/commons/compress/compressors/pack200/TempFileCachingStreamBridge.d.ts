import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { AbstractStreamBridge } from '../../../../../../org/apache/commons/compress/compressors/pack200/AbstractStreamBridge.d.ts'
export class TempFileCachingStreamBridge extends AbstractStreamBridge {
    static nullOutputStream(): OutputStream;
    constructor()
    // private path: Path[];
    createInputStream(): InputStream;
}