import type { EventContext } from '../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotExecutionListenerDispatch$AbstractNode } from '../../../../com/oracle/truffle/polyglot/PolyglotExecutionListenerDispatch$AbstractNode.d.ts'
import type { PolyglotExecutionListenerDispatch$Event } from '../../../../com/oracle/truffle/polyglot/PolyglotExecutionListenerDispatch$Event.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotExecutionListenerDispatch$DynamicEvent extends Object implements PolyglotExecutionListenerDispatch$Event {
    constructor(node: PolyglotExecutionListenerDispatch$AbstractNode, inputValues: Object[], returnValue: Object, ex: RuntimeException)
    readonly exception: RuntimeException;
    readonly inputValues: Object[];
    // private node: PolyglotExecutionListenerDispatch$AbstractNode;
    readonly returnValue: Object;
    getContext(): EventContext;
    getEngine(): PolyglotEngineImpl;
    getException(): RuntimeException;
    getInputValues(): Object[];
    getLocation(): Object;
    getReturnValue(): Object;
    getRootName(): string;
}