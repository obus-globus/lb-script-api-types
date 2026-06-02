import type { PolyglotExceptionImpl$PrintStreamOrWriter } from '../../../../com/oracle/truffle/polyglot/PolyglotExceptionImpl$PrintStreamOrWriter.d.ts'
import type { PrintWriter } from '../../../../java/io/PrintWriter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PolyglotExceptionImpl$WrappedPrintWriter extends PolyglotExceptionImpl$PrintStreamOrWriter {
    constructor(printWriter: PrintWriter)
    // private printWriter: PrintWriter;
    lock(): Object;
    print(o: Object): void;
    printStackTrace(t: Throwable): void;
    println(o: Object): void;
}