import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HoverEvent } from '../../../../net/minecraft/network/chat/HoverEvent.d.ts'
import type { HoverEvent$Action } from '../../../../net/minecraft/network/chat/HoverEvent$Action.d.ts'
import type { HoverEvent$EntityTooltipInfo } from '../../../../net/minecraft/network/chat/HoverEvent$EntityTooltipInfo.d.ts'
export class HoverEvent$ShowEntity extends Record implements HoverEvent {
    static CODEC: Codec<HoverEvent>;
    static CODEC: MapCodec<HoverEvent$ShowEntity>;
    constructor(entity: HoverEvent$EntityTooltipInfo)
    // private entity: HoverEvent$EntityTooltipInfo;
    action(): HoverEvent$Action;
    entity(): HoverEvent$EntityTooltipInfo;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}