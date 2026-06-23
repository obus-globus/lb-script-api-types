import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ExecutionContext } from '../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { Frame } from '../../../../net/minecraft/commands/execution/Frame.d.ts'
export interface EntryAction<T extends unknown> extends Object{
    execute(context: ExecutionContext<T>, frame: Frame): void;
}