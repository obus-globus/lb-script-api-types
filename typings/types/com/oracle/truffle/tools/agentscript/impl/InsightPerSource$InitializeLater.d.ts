import type { TruffleContext } from '../../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventContext } from '../../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ExecutionEventListener } from '../../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventListener.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class InsightPerSource$InitializeLater extends Object implements ExecutionEventListener {
    constructor(null_: InsightPerSource$InitializeLater, context: TruffleContext)
    // private context: TruffleContext;
    onEnter(ctx: EventContext, frame: VirtualFrame): void;
    onInputValue(context: EventContext, frame: VirtualFrame, inputContext: EventContext, inputIndex: number, inputValue: Object): void;
    onResume(context: EventContext, frame: VirtualFrame): void;
    onReturnExceptional(ctx: EventContext, frame: VirtualFrame, exception: Throwable): void;
    onReturnValue(ctx: EventContext, frame: VirtualFrame, result: Object): void;
    onUnwind(context: EventContext, frame: VirtualFrame, info: Object): Object;
    onYield(context: EventContext, frame: VirtualFrame, value: Object): void;
}