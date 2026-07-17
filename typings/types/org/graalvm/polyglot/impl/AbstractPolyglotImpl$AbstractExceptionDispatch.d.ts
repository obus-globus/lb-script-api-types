import type { PrintStream } from '../../../../java/io/PrintStream.d.ts'
import type { PrintWriter } from '../../../../java/io/PrintWriter.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractDispatchClass } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractDispatchClass.d.ts'
export abstract class AbstractPolyglotImpl$AbstractExceptionDispatch extends AbstractPolyglotImpl$AbstractDispatchClass {
    constructor()
    constructor(engineImpl: AbstractPolyglotImpl)
    asHostException(receiver: Object): Throwable;
    getCauseImpl(receiver: Object): Object;
    getExitStatus(receiver: Object): number;
    getGuestObject(receiver: Object): Object;
    getMessage(receiver: Object): string;
    getPolyglotStackTrace(receiver: Object): Object[];
    getSourceLocation(receiver: Object): Object;
    getStackTrace(receiver: Object): StackTraceElement[];
    isCancelled(receiver: Object): boolean;
    isExit(receiver: Object): boolean;
    isHostException(receiver: Object): boolean;
    isIncompleteSource(receiver: Object): boolean;
    isInternalError(receiver: Object): boolean;
    isInterrupted(receiver: Object): boolean;
    isResourceExhausted(receiver: Object): boolean;
    isSyntaxError(receiver: Object): boolean;
    onCreate(receiver: Object, polyglotException: RuntimeException): void;
    printStackTrace(receiver: Object, s: PrintStream): void;
    printStackTrace(receiver: Object, s: PrintWriter): void;
    toString(): string;
    toString(receiver: Object): string;
}