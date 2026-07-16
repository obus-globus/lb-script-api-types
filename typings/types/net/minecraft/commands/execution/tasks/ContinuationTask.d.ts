import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandQueueEntry } from '../../../../../net/minecraft/commands/execution/CommandQueueEntry.d.ts'
import type { EntryAction } from '../../../../../net/minecraft/commands/execution/EntryAction.d.ts'
import type { ExecutionContext } from '../../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { Frame } from '../../../../../net/minecraft/commands/execution/Frame.d.ts'
import type { ContinuationTask$TaskProvider } from '../../../../../net/minecraft/commands/execution/tasks/ContinuationTask$TaskProvider.d.ts'
export class ContinuationTask<T extends unknown, P extends unknown> extends Object implements EntryAction<T> {
    static schedule<T extends unknown, P extends unknown>(paramcontext: ExecutionContext<T>, paramframe: Frame, paramarguments: P[], paramtaskFactory: (param0: Frame, param1: P) => CommandQueueEntry<T>): void;
    private constructor(taskFactory: (param0: Frame, param1: P) => CommandQueueEntry<T>, arguments: P[], frame: Frame)
    // private arguments: P[];
    // private index: number;
    // private selfEntry: CommandQueueEntry<T>;
    // private taskFactory: (param0: Frame, param1: P) => CommandQueueEntry<T>;
    execute(context: ExecutionContext<T>, frame: Frame): void;
}