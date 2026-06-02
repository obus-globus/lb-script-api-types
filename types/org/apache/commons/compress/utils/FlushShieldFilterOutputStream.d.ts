import type { FilterOutputStream } from '../../../../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
export class FlushShieldFilterOutputStream extends FilterOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    flush(): void;
}