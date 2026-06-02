import type { DispatchOutputStream } from '../../../../../com/oracle/truffle/api/impl/DispatchOutputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
export class DelegatingOutputStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor(out: OutputStream, delegate: DispatchOutputStream)
    // private delegate: DispatchOutputStream;
    // private out: OutputStream;
    close(): void;
    flush(): void;
    write(b: number[]): void;
    write(b: number[], off: number, len: number): void;
    write(b: number): void;
}