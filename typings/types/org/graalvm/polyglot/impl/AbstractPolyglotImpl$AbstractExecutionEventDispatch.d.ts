import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractDispatchClass } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractDispatchClass.d.ts'
export abstract class AbstractPolyglotImpl$AbstractExecutionEventDispatch extends AbstractPolyglotImpl$AbstractDispatchClass {
    constructor()
    constructor(polyglotImpl: AbstractPolyglotImpl)
    getExecutionEventException(impl: Object): RuntimeException;
    getExecutionEventInputValues(impl: Object): Object[];
    getExecutionEventLocation(impl: Object): Object;
    getExecutionEventReturnValue(impl: Object): Object;
    getExecutionEventRootName(impl: Object): string;
    isExecutionEventExpression(impl: Object): boolean;
    isExecutionEventRoot(impl: Object): boolean;
    isExecutionEventStatement(impl: Object): boolean;
}