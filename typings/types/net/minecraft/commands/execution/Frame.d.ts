import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandResultCallback } from '../../../../net/minecraft/commands/CommandResultCallback.d.ts'
import type { Frame$FrameControl } from '../../../../net/minecraft/commands/execution/Frame$FrameControl.d.ts'
export class Frame extends Record {
    constructor(depth: number, returnValueConsumer: (param0: boolean, param1: number) => void, frameControl: () => void)
    // private depth: number;
    // private frameControl: () => void;
    // private returnValueConsumer: (param0: boolean, param1: number) => void;
    depth(): number;
    discard(): void;
    equals(o: Object | null): boolean;
    frameControl(): () => void;
    hashCode(): number;
    returnFailure(): void;
    returnSuccess(value: number): void;
    returnValueConsumer(): (param0: boolean, param1: number) => void;
    toString(): string;
}