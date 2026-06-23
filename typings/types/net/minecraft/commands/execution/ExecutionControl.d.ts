import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntryAction } from '../../../../net/minecraft/commands/execution/EntryAction.d.ts'
import type { ExecutionContext } from '../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { Frame } from '../../../../net/minecraft/commands/execution/Frame.d.ts'
import type { TraceCallbacks } from '../../../../net/minecraft/commands/execution/TraceCallbacks.d.ts'
export interface ExecutionControl<T extends unknown> extends Object {
    currentFrame(): Frame;
    queueNext(action: (param0: ExecutionContext<T>, param1: Frame) => void): void;
    tracer(): TraceCallbacks;
    tracer(tracer: TraceCallbacks): void;
}