import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClickEvent } from '../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { ClickEvent$Action } from '../../../../net/minecraft/network/chat/ClickEvent$Action.d.ts'
export class ClickEvent$ChangePage extends Record implements ClickEvent {
    static CODEC: MapCodec<ClickEvent$ChangePage>;
    constructor(page: number)
    // private page: number;
    action(): ClickEvent$Action;
    equals(o: Object | null): boolean;
    hashCode(): number;
    page(): number;
    toString(): string;
}