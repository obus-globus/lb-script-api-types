import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
export class HoverEvent$EntityTooltipInfo extends Object {
    static CODEC: MapCodec<HoverEvent$EntityTooltipInfo>;
    constructor(type: EntityType<any>, uuid: UUID, name: Optional<Component>)
    constructor(type: EntityType<any>, uuid: UUID, name: Component)
    // private linesCache: Component[];
    name: Optional<Component>;
    type: EntityType<any>;
    uuid: UUID;
    equals(o: Object | null): boolean;
    getTooltipLines(): Component[];
    hashCode(): number;
}