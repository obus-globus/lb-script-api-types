import type { EventBinding } from '../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl$AbstractExecutionEventDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractExecutionEventDispatch.d.ts'
import type { AbstractPolyglotImpl$ManagementAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$ManagementAccess.d.ts'
export class PolyglotExecutionListenerDispatch$ListenerImpl extends Object {
    constructor(executionEventDispatch: AbstractPolyglotImpl$AbstractExecutionEventDispatch, engine: PolyglotEngineImpl, onEnter: (param0: Object) => void, onReturn: (param0: Object) => void, collectInputValues: boolean, collectReturnValues: boolean, collectExceptions: boolean)
    // private binding: EventBinding<Object>;
    // private closing: boolean;
    // private collectExceptions: boolean;
    // private collectInputValues: boolean;
    // private collectReturnValues: boolean;
    // private engine: PolyglotEngineImpl;
    // private executionEventDispatch: AbstractPolyglotImpl$AbstractExecutionEventDispatch;
    // private management: AbstractPolyglotImpl$ManagementAccess;
    // private onEnter: (param0: Object) => void;
    // private onReturn: (param0: Object) => void;
}