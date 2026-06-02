import type { FilterOutputStream } from '../../../../../../java/io/FilterOutputStream.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractStreamBridge extends FilterOutputStream {
    static nullOutputStream(): OutputStream;
    constructor()
    constructor(arg0: OutputStream)
    // private inputStream: InputStream;
    // private inputStreamLock: Object;
    createInputStream(): InputStream;
    getInputStream(): InputStream;
    stop(): void;
}