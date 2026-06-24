import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MapDecorationType } from '../../../../../../net/minecraft/world/level/saveddata/maps/MapDecorationType.d.ts'
export class MapDecoration extends Record {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, MapDecoration>;
    constructor(type: Holder<MapDecorationType>, x: number, y: number, rot: number, name: Optional<Component>)
    // private name: Optional<Component>;
    // private rot: number;
    // private type: Holder<MapDecorationType>;
    // private x: number;
    // private y: number;
    equals(o: Object | null): boolean;
    getSpriteLocation(): Identifier;
    hashCode(): number;
    name(): Optional<Component>;
    renderOnFrame(): boolean;
    rot(): number;
    toString(): string;
    type(): Holder<MapDecorationType>;
    x(): number;
    y(): number;
}