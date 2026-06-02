import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractHostLanguageService } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractHostLanguageService.d.ts'
import type { AbstractPolyglotImpl$AbstractPolyglotHostService } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractPolyglotHostService.d.ts'
export class DefaultPolyglotHostService extends AbstractPolyglotImpl$AbstractPolyglotHostService {
    constructor(polyglot: AbstractPolyglotImpl)
    hostToGuestException(host: AbstractPolyglotImpl$AbstractHostLanguageService, throwable: Throwable): RuntimeException;
    notifyClearExplicitContextStack(contextReceiver: Object): void;
    notifyContextCancellingOrExiting(contextReceiver: Object, exit: boolean, exitCode: number, resourceLimit: boolean, message: string): void;
    notifyContextClosed(contextReceiver: Object, cancelIfExecuting: boolean, resourceLimit: boolean, message: string): void;
    notifyEngineClosed(engineReceiver: Object, cancelIfExecuting: boolean): void;
    notifyPolyglotThreadStart(contextReceiver: Object, threadToStart: Thread): void;
}