import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl$AbstractExecutionListenerDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractExecutionListenerDispatch.d.ts'
export class PolyglotExecutionListenerDispatch extends AbstractPolyglotImpl$AbstractExecutionListenerDispatch {
    constructor(engineImpl: PolyglotImpl)
    closeExecutionListener(impl: Object): void;
}