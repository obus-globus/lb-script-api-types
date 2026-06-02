import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class FilterOutputStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    // private closeLock: Object;
    // private closed: boolean;
    // private out: OutputStream;
    close(): void;
    flush(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}