import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl$AbstractExecutionEventDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractExecutionEventDispatch.d.ts'
export class PolyglotExecutionEventDispatch extends AbstractPolyglotImpl$AbstractExecutionEventDispatch {
    constructor(polyglot: PolyglotImpl)
    getExecutionEventException(impl: Object): RuntimeException;
    getExecutionEventInputValues(impl: Object): Object[];
    getExecutionEventLocation(impl: Object): Object;
    getExecutionEventReturnValue(impl: Object): Object;
    getExecutionEventRootName(impl: Object): string;
    isExecutionEventExpression(impl: Object): boolean;
    isExecutionEventRoot(impl: Object): boolean;
    isExecutionEventStatement(impl: Object): boolean;
}