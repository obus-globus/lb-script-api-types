import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { PrintStream } from '../../../java/io/PrintStream.d.ts'
import type { PrintWriter } from '../../../java/io/PrintWriter.d.ts'
import type { RuntimeException } from '../../../java/lang/RuntimeException.d.ts'
import type { StackTraceElement } from '../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { PolyglotException$StackFrame } from '../../../org/graalvm/polyglot/PolyglotException$StackFrame.d.ts'
import type { SourceSection } from '../../../org/graalvm/polyglot/SourceSection.d.ts'
import type { Value } from '../../../org/graalvm/polyglot/Value.d.ts'
import type { AbstractPolyglotImpl$AbstractExceptionDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractExceptionDispatch.d.ts'
export class PolyglotException extends RuntimeException {
    constructor(message: string, dispatch: AbstractPolyglotImpl$AbstractExceptionDispatch, receiver: Object, anchor: Object)
    // private anchor: Object;
    // private dispatch: AbstractPolyglotImpl$AbstractExceptionDispatch;
    // private impl: Object;
    readonly message: string | null;
    asHostException(): Throwable;
    equals(obj: Object | null): boolean;
    fillInStackTrace(): Throwable;
    getExitStatus(): number;
    getGuestObject(): Value;
    getPolyglotStackTrace(): PolyglotException$StackFrame[];
    getSourceLocation(): SourceSection;
    getStackTrace(): StackTraceElement[];
    hashCode(): number;
    isCancelled(): boolean;
    isExit(): boolean;
    isGuestException(): boolean;
    isHostException(): boolean;
    isIncompleteSource(): boolean;
    isInternalError(): boolean;
    isInterrupted(): boolean;
    isResourceExhausted(): boolean;
    isSyntaxError(): boolean;
    printStackTrace(): void;
    printStackTrace(s: PrintStream): void;
    printStackTrace(s: PrintWriter): void;
    setStackTrace(stackTrace: StackTraceElement[]): void;
    toString(): string;
    // private writeObject(outputStream: ObjectOutputStream): void;
}