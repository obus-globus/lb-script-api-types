import type { FilterOutputStream } from '../../../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class CountingOutputStream extends FilterOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(out: OutputStream)
    readonly count: number;
    close(): void;
    getCount(): number;
    write(b: number[], off: number, len: number): void;
    write(b: number): void;
}