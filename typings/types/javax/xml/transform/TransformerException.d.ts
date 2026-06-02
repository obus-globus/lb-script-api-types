import type { PrintStream } from '../../../java/io/PrintStream.d.ts'
import type { PrintWriter } from '../../../java/io/PrintWriter.d.ts'
import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { ProtectionDomain } from '../../../java/security/ProtectionDomain.d.ts'
import type { SourceLocator } from '../../../javax/xml/transform/SourceLocator.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class TransformerException extends Exception {
    constructor(arg0: string)
    constructor(arg0: string, arg1: SourceLocator)
    constructor(arg0: string, arg1: SourceLocator, arg2: Throwable)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
    readonly cause: Throwable | null;
    // private containedException: Throwable;
    locator: SourceLocator;
    getException(): Throwable;
    getLocationAsString(): string;
    // private getLocationString(): string;
    getLocator(): SourceLocator;
    getMessageAndLocation(): string;
    // private getNonPrivDomain(): ProtectionDomain;
    initCause(arg0: Throwable): Throwable;
    printStackTrace(): void;
    printStackTrace(arg0: PrintStream): void;
    printStackTrace(arg0: PrintWriter): void;
    setLocator(arg0: SourceLocator): void;
}