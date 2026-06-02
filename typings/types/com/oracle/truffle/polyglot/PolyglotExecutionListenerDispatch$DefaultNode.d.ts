import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventContext } from '../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { PolyglotExecutionListenerDispatch$AbstractNode } from '../../../../com/oracle/truffle/polyglot/PolyglotExecutionListenerDispatch$AbstractNode.d.ts'
import type { PolyglotExecutionListenerDispatch$Event } from '../../../../com/oracle/truffle/polyglot/PolyglotExecutionListenerDispatch$Event.d.ts'
import type { PolyglotExecutionListenerDispatch$ListenerImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotExecutionListenerDispatch$ListenerImpl.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PolyglotExecutionListenerDispatch$DefaultNode extends PolyglotExecutionListenerDispatch$AbstractNode implements PolyglotExecutionListenerDispatch$Event {
    constructor(config: PolyglotExecutionListenerDispatch$ListenerImpl, context: EventContext)
    onReturnExceptional(frame: VirtualFrame, exception: Throwable): void;
    onReturnValue(frame: VirtualFrame, result: Object): void;
}