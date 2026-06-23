import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntryAction } from '../../../../net/minecraft/commands/execution/EntryAction.d.ts'
import type { ExecutionContext } from '../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { Frame } from '../../../../net/minecraft/commands/execution/Frame.d.ts'
export interface UnboundEntryAction<T extends unknown> extends Object {
    bind(sender: T): (param0: ExecutionContext<T>, param1: Frame) => void;
    execute(sender: T, context: ExecutionContext<T>, frame: Frame): void;
}