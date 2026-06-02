import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractDispatchClass } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractDispatchClass.d.ts'
export abstract class AbstractPolyglotImpl$AbstractExecutionListenerDispatch extends AbstractPolyglotImpl$AbstractDispatchClass {
    constructor()
    constructor(polyglotImpl: AbstractPolyglotImpl)
    closeExecutionListener(impl: Object): void;
}