import type { PrintStream } from '../../java/io/PrintStream.d.ts'
import type { PrintWriter } from '../../java/io/PrintWriter.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { StackTraceElement } from '../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Throwable extends Object implements Serializable {
    constructor()
    constructor(arg0: string, arg1: Throwable, arg2: boolean, arg3: boolean)
    constructor(message: string | null)
    constructor(message: string | null, cause: Throwable | null)
    constructor(cause: Throwable | null)
    readonly cause: Throwable | null;
    readonly message: string | null;
    addSuppressed(arg0: Throwable): void;
    fillInStackTrace(): Throwable;
    getLocalizedMessage(): string;
    getStackTrace(): StackTraceElement[];
    getSuppressed(): Throwable[];
    initCause(arg0: Throwable): Throwable;
    printStackTrace(): void;
    printStackTrace(arg0: PrintStream): void;
    printStackTrace(arg0: PrintWriter): void;
    setStackTrace(arg0: StackTraceElement[]): void;
}