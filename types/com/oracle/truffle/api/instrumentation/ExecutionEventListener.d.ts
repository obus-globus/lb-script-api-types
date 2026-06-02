import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface ExecutionEventListener extends Object{
    onEnter(context: EventContext, frame: VirtualFrame): void;
    onInputValue(context: EventContext, frame: VirtualFrame, inputContext: EventContext, inputIndex: number, inputValue: Object): void;
    onResume(context: EventContext, frame: VirtualFrame): void;
    onReturnExceptional(context: EventContext, frame: VirtualFrame, exception: Throwable): void;
    onReturnValue(context: EventContext, frame: VirtualFrame, result: Object): void;
    onUnwind(context: EventContext, frame: VirtualFrame, info: Object): Object;
    onYield(context: EventContext, frame: VirtualFrame, value: Object): void;
}