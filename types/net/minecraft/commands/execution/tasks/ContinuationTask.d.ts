import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandQueueEntry } from '../../../../../net/minecraft/commands/execution/CommandQueueEntry.d.ts'
import type { EntryAction } from '../../../../../net/minecraft/commands/execution/EntryAction.d.ts'
import type { ExecutionContext } from '../../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { Frame } from '../../../../../net/minecraft/commands/execution/Frame.d.ts'
import type { ContinuationTask$TaskProvider } from '../../../../../net/minecraft/commands/execution/tasks/ContinuationTask$TaskProvider.d.ts'
export class ContinuationTask<T extends Object | number | string | boolean, P extends Object | number | string | boolean> extends Object implements EntryAction<T> {
    static schedule(paramcontext: ExecutionContext<Object>, paramframe: Frame, paramarguments: (Object | null)[], paramtaskFactory: (param0: Object | null, param1: Object | null) => net.minecraft.commands.execution.CommandQueueEntry<unknown>): void;
    private constructor(taskFactory: (param0: T, param1: P) => net.minecraft.commands.execution.CommandQueueEntry<unknown>, arguments: P[], frame: Frame)
    // private arguments: P[];
    // private index: number;
    // private selfEntry: CommandQueueEntry<T>;
    // private taskFactory: (param0: T, param1: P) => net.minecraft.commands.execution.CommandQueueEntry<unknown>;
    execute(context: ExecutionContext<T>, frame: Frame): void;
}