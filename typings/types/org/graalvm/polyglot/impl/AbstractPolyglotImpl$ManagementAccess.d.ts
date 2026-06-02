import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Engine } from '../../../../org/graalvm/polyglot/Engine.d.ts'
import type { AbstractPolyglotImpl$AbstractExecutionEventDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractExecutionEventDispatch.d.ts'
import type { AbstractPolyglotImpl$AbstractExecutionListenerDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractExecutionListenerDispatch.d.ts'
export abstract class AbstractPolyglotImpl$ManagementAccess extends Object {
    constructor()
    getExecutionEventDispatch(executionEvent: Object): AbstractPolyglotImpl$AbstractExecutionEventDispatch;
    getExecutionEventReceiver(executionEvent: Object): Object;
    getExecutionListenerDispatch(executionListener: Object): AbstractPolyglotImpl$AbstractExecutionListenerDispatch;
    getExecutionListenerReceiver(executionListener: Object): Object;
    newExecutionEvent(dispatch: AbstractPolyglotImpl$AbstractExecutionEventDispatch, event: Object): Object;
    newExecutionListener(dispatch: AbstractPolyglotImpl$AbstractExecutionListenerDispatch, receiver: Object, engine: Engine): Object;
}