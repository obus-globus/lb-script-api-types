import type { IOException } from '../../../../../../java/io/IOException.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { FinishableOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FinishableOutputStream.d.ts'
import type { SimpleFilter } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/simple/SimpleFilter.d.ts'
export class SimpleOutputStream extends FinishableOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(out: FinishableOutputStream, simpleFilter: SimpleFilter)
    // private exception: IOException;
    // private filterBuf: number[];
    // private finished: boolean;
    // private out: FinishableOutputStream;
    // private pos: number;
    // private simpleFilter: SimpleFilter;
    // private tempBuf: number[];
    // private unfiltered: number;
    close(): void;
    finish(): void;
    flush(): void;
    write(buf: number[], off: number, len: number): void;
    write(b: number): void;
    // private writePending(): void;
}