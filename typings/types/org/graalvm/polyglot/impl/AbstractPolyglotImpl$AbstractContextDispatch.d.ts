import type { Reference } from '../../../../java/lang/ref/Reference.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Context } from '../../../../org/graalvm/polyglot/Context.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractDispatchClass } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractDispatchClass.d.ts'
export abstract class AbstractPolyglotImpl$AbstractContextDispatch extends AbstractPolyglotImpl$AbstractDispatchClass {
    constructor()
    constructor(engineImpl: AbstractPolyglotImpl)
    asValue(receiver: Object, hostValue: Object): Object;
    close(receiver: Object, cancelIfExecuting: boolean): void;
    eval(receiver: Object, language: string, source: Object): Object;
    explicitEnter(receiver: Object): void;
    explicitLeave(receiver: Object): void;
    getBindings(receiver: Object, language: string): Object;
    getPolyglotBindings(receiver: Object): Object;
    initializeLanguage(receiver: Object, languageId: string): boolean;
    interrupt(receiver: Object, timeout: Duration): boolean;
    onContextCollected(receiver: Object): void;
    parse(receiver: Object, language: string, source: Object): Object;
    resetLimits(receiver: Object): void;
    safepoint(receiver: Object): void;
    setContextAPIReference(receiver: Object, contextReference: Reference<Context>): void;
}