import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HoverEvent } from '../../../../net/minecraft/network/chat/HoverEvent.d.ts'
import type { HoverEvent$Action } from '../../../../net/minecraft/network/chat/HoverEvent$Action.d.ts'
import type { ItemStackTemplate } from '../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
export class HoverEvent$ShowItem extends Record implements HoverEvent {
    static CODEC: MapCodec<HoverEvent$ShowItem>;
    constructor(item: ItemStackTemplate)
    // private item: ItemStackTemplate;
    action(): HoverEvent$Action;
    equals(o: Object | null): boolean;
    hashCode(): number;
    item(): ItemStackTemplate;
    toString(): string;
}