import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { HoverEvent } from '../../../../net/minecraft/network/chat/HoverEvent.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class HoverEvent$Action extends Enum<HoverEvent$Action> implements StringRepresentable {
    static CODEC: Codec<HoverEvent$Action>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SHOW_ENTITY: HoverEvent$Action;
    static SHOW_ITEM: HoverEvent$Action;
    static SHOW_TEXT: HoverEvent$Action;
    static UNSAFE_CODEC: Codec<HoverEvent$Action>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): HoverEvent$Action;
    static values(): HoverEvent$Action[];
    private constructor(name: string, allowFromServer: boolean, codec: MapCodec<HoverEvent>)
    // private allowFromServer: boolean;
    // private codec: MapCodec<HoverEvent>;
    // private name: string;
    getSerializedName(): string;
    isAllowedFromServer(): boolean;
    toString(): string;
    name(): "SHOW_TEXT" | "SHOW_ITEM" | "SHOW_ENTITY";
}