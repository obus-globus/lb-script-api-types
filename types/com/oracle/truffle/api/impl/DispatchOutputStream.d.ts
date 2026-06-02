import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DispatchOutputStream$OutputStreamList } from '../../../../../com/oracle/truffle/api/impl/DispatchOutputStream$OutputStreamList.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
export class DispatchOutputStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor(out: OutputStream)
    // private out: OutputStream;
    // private outList: DispatchOutputStream$OutputStreamList;
    // private outListUnchanged: Assumption;
    attach(outConsumer: OutputStream): void;
    close(): void;
    detach(outConsumer: OutputStream): void;
    flush(): void;
    getOut(): OutputStream;
    getOutList(): DispatchOutputStream$OutputStreamList;
    // private outListChanged(): void;
    write(b: number[]): void;
    write(b: number[], off: number, len: number): void;
    write(b: number): void;
}