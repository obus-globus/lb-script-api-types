import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractExecutionListenerDispatch } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractExecutionListenerDispatch.d.ts'
export abstract class ForeignExecutionListenerDispatch extends AbstractPolyglotImpl$AbstractExecutionListenerDispatch {
    constructor(polyglot: AbstractPolyglotImpl)
    closeExecutionListener(impl: Object): void;
    closeExecutionListenerImpl(impl: Object): void;
}