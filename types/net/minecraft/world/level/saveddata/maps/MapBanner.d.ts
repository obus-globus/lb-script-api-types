import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { DyeColor } from '../../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { MapDecorationType } from '../../../../../../net/minecraft/world/level/saveddata/maps/MapDecorationType.d.ts'
export class MapBanner extends Record {
    static CODEC: Codec<MapBanner>;
    static fromWorld(paramlevel: BlockGetter, parampos: BlockPos): MapBanner;
    constructor(pos: BlockPos, color: DyeColor, name: Optional<Component>)
    // private color: DyeColor;
    // private name: Optional<Component>;
    // private pos: BlockPos;
    color(): DyeColor;
    equals(o: Object | null): boolean;
    getDecoration(): Holder<MapDecorationType>;
    getId(): string;
    hashCode(): number;
    name(): Optional<Component>;
    pos(): BlockPos;
    toString(): string;
}