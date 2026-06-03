import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventContext } from '../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { PolyglotExecutionListenerDispatch$AbstractNode } from '../../../../com/oracle/truffle/polyglot/PolyglotExecutionListenerDispatch$AbstractNode.d.ts'
import type { PolyglotExecutionListenerDispatch$Event } from '../../../../com/oracle/truffle/polyglot/PolyglotExecutionListenerDispatch$Event.d.ts'
import type { PolyglotExecutionListenerDispatch$ListenerImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotExecutionListenerDispatch$ListenerImpl.d.ts'
import type { PolyglotLanguage } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguage.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PolyglotExecutionListenerDispatch$ProfilingNode extends PolyglotExecutionListenerDispatch$AbstractNode implements PolyglotExecutionListenerDispatch$Event {
    constructor(config: PolyglotExecutionListenerDispatch$ListenerImpl, context: EventContext)
    // private language: PolyglotLanguage;
    // private seenInputValues: boolean;
    // private seenReturnValue: boolean;
    // private invokeExceptionAllocate(inputValues: Object[], result: Throwable): void;
    invokeExceptionAllocate(inputValues: Object[], e: Throwable): void;
    // private invokeReturnAllocate(inputValues: Object[], result: Object): void;
    invokeReturnAllocate(inputValues: Object[], returnValue: Object): void;
    onInputValue(frame: VirtualFrame, inputContext: EventContext, inputIndex: number, inputValue: Object): void;
    onReturnExceptional(frame: VirtualFrame, exception: Throwable): void;
    onReturnValue(frame: VirtualFrame, result: Object): void;
}