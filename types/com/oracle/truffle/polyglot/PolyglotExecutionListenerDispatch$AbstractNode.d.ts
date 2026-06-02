import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventContext } from '../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ExecutionEventNode } from '../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNode.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotExecutionListenerDispatch$Event } from '../../../../com/oracle/truffle/polyglot/PolyglotExecutionListenerDispatch$Event.d.ts'
import type { PolyglotExecutionListenerDispatch$ListenerImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotExecutionListenerDispatch$ListenerImpl.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class PolyglotExecutionListenerDispatch$AbstractNode extends ExecutionEventNode implements PolyglotExecutionListenerDispatch$Event {
    constructor(config: PolyglotExecutionListenerDispatch$ListenerImpl, context: EventContext)
    // private cachedEvent: Object;
    // private config: PolyglotExecutionListenerDispatch$ListenerImpl;
    readonly context: EventContext;
    getContext(): EventContext;
    getEngine(): PolyglotEngineImpl;
    getException(): RuntimeException;
    getInputValues(): Object[];
    getLocation(): Object;
    getReturnValue(): Object;
    getRootName(): string;
    invokeException(): void;
    invokeOnEnter(): void;
    invokeReturn(): void;
    invokeReturnAllocate(inputValues: Object[], returnValue: Object): void;
    onEnter(frame: VirtualFrame): void;
}