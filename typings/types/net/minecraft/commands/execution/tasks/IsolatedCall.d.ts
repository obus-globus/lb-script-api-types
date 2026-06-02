import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandResultCallback } from '../../../../../net/minecraft/commands/CommandResultCallback.d.ts'
import type { ExecutionCommandSource } from '../../../../../net/minecraft/commands/ExecutionCommandSource.d.ts'
import type { EntryAction } from '../../../../../net/minecraft/commands/execution/EntryAction.d.ts'
import type { ExecutionContext } from '../../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { ExecutionControl } from '../../../../../net/minecraft/commands/execution/ExecutionControl.d.ts'
import type { Frame } from '../../../../../net/minecraft/commands/execution/Frame.d.ts'
export class IsolatedCall<T extends ExecutionCommandSource<T>> extends Object implements EntryAction<T> {
    constructor(taskOutput: (param0: ExecutionControl<T>) => void, output: (param0: boolean, param1: number) => void)
    // private output: (param0: boolean, param1: number) => void;
    // private taskProducer: (param0: ExecutionControl<T>) => void;
    execute(context: ExecutionContext<T>, frame: Frame): void;
}