import type { PolyglotExceptionImpl$PrintStreamOrWriter } from '../../../../com/oracle/truffle/polyglot/PolyglotExceptionImpl$PrintStreamOrWriter.d.ts'
import type { PrintStream } from '../../../../java/io/PrintStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PolyglotExceptionImpl$WrappedPrintStream extends PolyglotExceptionImpl$PrintStreamOrWriter {
    constructor(printStream: PrintStream)
    // private printStream: PrintStream;
    lock(): Object;
    print(o: Object): void;
    printStackTrace(t: Throwable): void;
    println(o: Object): void;
}