import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { InheritableThreadLocal } from '../../../../../java/lang/InheritableThreadLocal.d.ts'
export class DemuxOutputStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor()
    // private outputStreamThreadLocal: InheritableThreadLocal<OutputStream>;
    bindStream(arg0: OutputStream): OutputStream;
    close(): void;
    flush(): void;
    write(arg0: number): void;
}