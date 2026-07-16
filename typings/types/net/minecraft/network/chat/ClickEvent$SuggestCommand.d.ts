import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClickEvent } from '../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { ClickEvent$Action } from '../../../../net/minecraft/network/chat/ClickEvent$Action.d.ts'
export class ClickEvent$SuggestCommand extends Record implements ClickEvent {
    static CODEC: MapCodec<ClickEvent$SuggestCommand>;
    constructor(command: string)
    // private command: string;
    action(): ClickEvent$Action;
    command(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}