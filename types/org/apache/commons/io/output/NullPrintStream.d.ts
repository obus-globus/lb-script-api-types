import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { PrintStream } from '../../../../../java/io/PrintStream.d.ts'
export class NullPrintStream extends PrintStream {
    static INSTANCE: NullPrintStream;
    static NULL_PRINT_STREAM: NullPrintStream;
    static nullOutputStream(): OutputStream;
    constructor()
}