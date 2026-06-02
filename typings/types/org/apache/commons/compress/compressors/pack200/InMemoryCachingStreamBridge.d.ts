import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { AbstractStreamBridge } from '../../../../../../org/apache/commons/compress/compressors/pack200/AbstractStreamBridge.d.ts'
export class InMemoryCachingStreamBridge extends AbstractStreamBridge {
    static nullOutputStream(): OutputStream;
    constructor()
    createInputStream(): InputStream;
}