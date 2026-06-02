import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandQueueEntry } from '../../../../../net/minecraft/commands/execution/CommandQueueEntry.d.ts'
import type { Frame } from '../../../../../net/minecraft/commands/execution/Frame.d.ts'
export interface ContinuationTask$TaskProvider<T extends Object | number | string | boolean, P extends Object | number | string | boolean> extends Object{
    create(frame: Frame, argument: P): CommandQueueEntry<T>;
}