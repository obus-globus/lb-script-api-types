import type { SourceSection } from '../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotContextImpl$State } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl$State.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotExceptionImpl$PrintStreamOrWriter } from '../../../../com/oracle/truffle/polyglot/PolyglotExceptionImpl$PrintStreamOrWriter.d.ts'
import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PrintStream } from '../../../../java/io/PrintStream.d.ts'
import type { PrintWriter } from '../../../../java/io/PrintWriter.d.ts'
import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Language } from '../../../../org/graalvm/polyglot/Language.d.ts'
export class PolyglotExceptionImpl extends Object {
    constructor(engine: PolyglotEngineImpl, polyglotContextState: PolyglotContextImpl$State, polyglotContextResourceExhausted: boolean, exitCode: number, original: Throwable)
    constructor(polyglot: PolyglotImpl, engine: PolyglotEngineImpl, polyglotContextState: PolyglotContextImpl$State, polyglotContextResourceExhausted: boolean, exitCode: number, languageContext: PolyglotLanguageContext, original: Throwable, allowInterop: boolean, entered: boolean)
    constructor(polyglot: PolyglotImpl, original: Throwable)
    // private api: RuntimeException;
    readonly cancelled: boolean;
    // private causeImpl: PolyglotExceptionImpl;
    // private context: PolyglotContextImpl;
    // private creationStackTrace: Exception;
    // private engine: PolyglotEngineImpl;
    // private exception: Throwable;
    readonly exit: boolean;
    readonly exitStatus: number;
    readonly guestObject: Object;
    readonly hostException: boolean;
    readonly incompleteSource: boolean;
    // private internal: boolean;
    readonly interrupted: boolean;
    readonly javaStackTrace: StackTraceElement[];
    // private materializedFrames: Object[];
    readonly message: string;
    // private polyglot: PolyglotImpl;
    // private printInternalStrackTrace: boolean;
    // private qualifiedName: string;
    readonly resourceExhausted: boolean;
    // private showInternalStackFrames: boolean;
    readonly sourceLocation: Object;
    readonly syntaxError: boolean;
    asHostException(): Throwable;
    equals(obj: Object | null): boolean;
    getCause(): PolyglotExceptionImpl;
    getExitStatus(): number;
    getFileSystemContext(languageApi: Language): Object;
    getGuestObject(): Object;
    getJavaStackTrace(): StackTraceElement[];
    getMessage(): string;
    getPolyglotStackTrace(): Object[];
    getSourceLocation(): Object;
    getStackTrace(): StackTraceElement[];
    // private hasGuestFrames(): boolean;
    hashCode(): number;
    isCancelled(): boolean;
    isExit(): boolean;
    isHostException(): boolean;
    isIncompleteSource(): boolean;
    isInternalError(): boolean;
    isInterrupted(): boolean;
    isResourceExhausted(): boolean;
    isSyntaxError(): boolean;
    materialize(): void;
    // private newSourceSection(section: SourceSection): Object;
    onCreate(instance: RuntimeException): void;
    // private printStackTrace(s: PolyglotExceptionImpl$PrintStreamOrWriter): void;
    printStackTrace(s: PrintStream): void;
    printStackTrace(s: PrintWriter): void;
    toStringImpl(): string;
}