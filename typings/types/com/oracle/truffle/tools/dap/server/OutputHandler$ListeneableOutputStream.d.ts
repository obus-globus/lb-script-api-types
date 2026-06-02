import type { OutputHandler$ListeneableOutputStream$RBCH } from '../../../../../../com/oracle/truffle/tools/dap/server/OutputHandler$ListeneableOutputStream$RBCH.d.ts'
import type { OutputHandler$Listener } from '../../../../../../com/oracle/truffle/tools/dap/server/OutputHandler$Listener.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../../../../java/io/Reader.d.ts'
import type { CharBuffer } from '../../../../../../java/nio/CharBuffer.d.ts'
export class OutputHandler$ListeneableOutputStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    private constructor()
    // private cb: CharBuffer;
    // private l: OutputHandler$Listener;
    // private r: Reader;
    // private rbch: OutputHandler$ListeneableOutputStream$RBCH;
    // private wl(): void;
    write(b: number[]): void;
    write(b: number[], off: number, len: number): void;
    write(b: number): void;
}