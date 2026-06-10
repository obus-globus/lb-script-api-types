import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ExecutionCommandSource } from '../../../../../net/minecraft/commands/ExecutionCommandSource.d.ts'
import type { EntryAction } from '../../../../../net/minecraft/commands/execution/EntryAction.d.ts'
import type { ExecutionContext } from '../../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { Frame } from '../../../../../net/minecraft/commands/execution/Frame.d.ts'
export class FallthroughTask<T extends ExecutionCommandSource<T>> extends Object implements EntryAction<T> {
    static instance(): (param0: ExecutionContext<Object>, param1: Frame) => void;
    constructor()
    execute(context: ExecutionContext<T>, frame: Frame): void;
}