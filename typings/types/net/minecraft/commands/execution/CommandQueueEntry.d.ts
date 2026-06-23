import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntryAction } from '../../../../net/minecraft/commands/execution/EntryAction.d.ts'
import type { ExecutionContext } from '../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { Frame } from '../../../../net/minecraft/commands/execution/Frame.d.ts'
export class CommandQueueEntry<T extends unknown> extends Record {
    constructor(frame: Frame, action: (param0: ExecutionContext<T>, param1: Frame) => void)
    // private action: (param0: ExecutionContext<T>, param1: Frame) => void;
    // private frame: Frame;
    action(): (param0: ExecutionContext<T>, param1: Frame) => void;
    equals(o: Object | null): boolean;
    execute(context: ExecutionContext<T>): void;
    // private execute$mixinextras$wrapped$8(arg0: ExecutionContext<Object>): void;
    frame(): Frame;
    hashCode(): number;
    toString(): string;
}