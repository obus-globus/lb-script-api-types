import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { ProxyWriter } from '../../../../../org/apache/commons/io/output/ProxyWriter.d.ts'
export class CloseShieldWriter extends ProxyWriter {
    static nullWriter(): Writer;
    static wrap(paramarg0: Writer): CloseShieldWriter;
    constructor(arg0: Writer)
    close(): void;
}