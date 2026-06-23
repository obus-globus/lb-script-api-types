import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandQueueEntry } from '../../../../../net/minecraft/commands/execution/CommandQueueEntry.d.ts'
import type { Frame } from '../../../../../net/minecraft/commands/execution/Frame.d.ts'
export interface ContinuationTask$TaskProvider<T extends unknown, P extends unknown> extends Object{
    create(frame: Frame, argument: P): CommandQueueEntry<T>;
}