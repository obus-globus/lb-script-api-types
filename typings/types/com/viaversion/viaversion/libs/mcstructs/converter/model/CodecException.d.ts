import type { PrintStream } from '../../../../../../../java/io/PrintStream.d.ts'
import type { PrintWriter } from '../../../../../../../java/io/PrintWriter.d.ts'
import type { RuntimeException } from '../../../../../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export class CodecException extends RuntimeException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
    fillInStackTrace(): Throwable;
    printStackTrace(): void;
    printStackTrace(arg0: PrintStream): void;
    printStackTrace(arg0: PrintWriter): void;
}