import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { ProxyCollectionWriter } from '../../../../../org/apache/commons/io/output/ProxyCollectionWriter.d.ts'
export class TeeWriter extends ProxyCollectionWriter {
    static nullWriter(): Writer;
    constructor(arg0: Writer[])
    constructor(arg0: Writer[])
}