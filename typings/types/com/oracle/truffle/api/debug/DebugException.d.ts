import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { DebugException$CatchLocation } from '../../../../../com/oracle/truffle/api/debug/DebugException$CatchLocation.d.ts'
import type { DebugStackTraceElement } from '../../../../../com/oracle/truffle/api/debug/DebugStackTraceElement.d.ts'
import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { SuspendedEvent } from '../../../../../com/oracle/truffle/api/debug/SuspendedEvent.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { PrintStream } from '../../../../../java/io/PrintStream.d.ts'
import type { PrintWriter } from '../../../../../java/io/PrintWriter.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class DebugException extends RuntimeException {
    private constructor(session: DebuggerSession, message: string, exception: Throwable, preferredLanguage: LanguageInfo, throwLocation: Node, isCatchNodeComputed: boolean, catchLocation: DebugException$CatchLocation)
    readonly catchLocation: DebugException$CatchLocation;
    // private debugAsyncStacks: DebugStackTraceElement[][];
    readonly debugStackTrace: DebugStackTraceElement[];
    // private exception: Throwable;
    // private isCatchNodeComputed: boolean;
    // private javaLikeStackTrace: StackTraceElement[];
    // private preferredLanguage: LanguageInfo;
    // private rawStackTrace: StackTraceElement[];
    // private session: DebuggerSession;
    // private suspendedEvent: SuspendedEvent;
    readonly throwLocation: Node;
    fillInStackTrace(): Throwable;
    getCatchLocation(): DebugException$CatchLocation;
    getDebugAsynchronousStacks(): DebugStackTraceElement[][];
    getDebugStackTrace(): DebugStackTraceElement[];
    getExceptionObject(): DebugValue;
    getRawException(): Throwable;
    getRawException(languageClass: Class<TruffleLanguage<Object>>): Throwable;
    // private getRawStackTrace(): StackTraceElement[];
    getStackTrace(): StackTraceElement[];
    getThrowLocation(): SourceSection;
    getThrowLocationNode(): Node;
    isInternalError(): boolean;
    printStackTrace(): void;
    printStackTrace(s: PrintStream): void;
    printStackTrace(s: PrintWriter): void;
    setStackTrace(stackTrace: StackTraceElement[]): void;
    setSuspendedEvent(suspendedEvent: SuspendedEvent): void;
}