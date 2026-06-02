import type { FilterOutputStream } from '../../../../../java/io/FilterOutputStream.d.ts'
import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { ProxyOutputStream$Builder } from '../../../../../org/apache/commons/io/output/ProxyOutputStream$Builder.d.ts'
export class ProxyOutputStream extends FilterOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: ProxyOutputStream$Builder)
    afterWrite(arg0: number): void;
    beforeWrite(arg0: number): void;
    close(): void;
    flush(): void;
    handleIOException(arg0: IOException): void;
    setReference(arg0: OutputStream): ProxyOutputStream;
    unwrap(): OutputStream;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}