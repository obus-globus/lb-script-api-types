import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClickEvent } from '../../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { ClickEvent$Action } from '../../../../../net/minecraft/network/chat/ClickEvent$Action.d.ts'
export class RunnableClickEvent extends Record implements Runnable, ClickEvent {
    static CODEC: Codec<ClickEvent>;
    constructor(runnable: () => void)
    // private runnable: () => void;
    action(): ClickEvent$Action;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    run(): void;
    runnable(): () => void;
    toString(): string;
}