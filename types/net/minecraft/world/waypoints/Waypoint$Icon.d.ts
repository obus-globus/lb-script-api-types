import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { WaypointStyleAsset } from '../../../../net/minecraft/world/waypoints/WaypointStyleAsset.d.ts'
export class Waypoint$Icon extends Object {
    static CODEC: Codec<Waypoint$Icon>;
    static NULL: Waypoint$Icon;
    static STREAM_CODEC: StreamCodec<ByteBuf, Waypoint$Icon>;
    constructor()
    private constructor(style: ResourceKey<WaypointStyleAsset>, color: Optional<number>)
    color: Optional<number>;
    style: ResourceKey<WaypointStyleAsset>;
    cloneAndAssignStyle(livingEntity: LivingEntity): Waypoint$Icon;
    copyFrom(other: Waypoint$Icon): void;
    // private getOverrideStyle(): ResourceKey<WaypointStyleAsset>;
    hasData(): boolean;
}