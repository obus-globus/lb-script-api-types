import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandResultCallback } from '../../../../../net/minecraft/commands/CommandResultCallback.d.ts'
import type { ExecutionCommandSource } from '../../../../../net/minecraft/commands/ExecutionCommandSource.d.ts'
import type { EntryAction } from '../../../../../net/minecraft/commands/execution/EntryAction.d.ts'
import type { ExecutionContext } from '../../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { Frame } from '../../../../../net/minecraft/commands/execution/Frame.d.ts'
import type { UnboundEntryAction } from '../../../../../net/minecraft/commands/execution/UnboundEntryAction.d.ts'
import type { InstantiatedFunction } from '../../../../../net/minecraft/commands/functions/InstantiatedFunction.d.ts'
export class CallFunction<T extends ExecutionCommandSource<T>> extends Object implements UnboundEntryAction<T> {
    constructor(function_: InstantiatedFunction<T>, resultCallback: (param0: boolean, param1: number) => void, returnParentFrame: boolean)
    // private function: InstantiatedFunction<T>;
    // private resultCallback: (param0: boolean, param1: number) => void;
    // private returnParentFrame: boolean;
    bind(sender: T): (param0: T, param1: ExecutionContext<Object>) => void;
    execute(sender: T, context: ExecutionContext<T>, frame: Frame): void;
}