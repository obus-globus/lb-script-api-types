import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { PositionSource } from '../../../../../net/minecraft/world/level/gameevent/PositionSource.d.ts'
import type { PositionSourceType } from '../../../../../net/minecraft/world/level/gameevent/PositionSourceType.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntityPositionSource extends Object implements PositionSource {
    static CODEC: Codec<PositionSource>;
    static CODEC: MapCodec<EntityPositionSource>;
    static STREAM_CODEC: StreamCodec<ByteBuf, EntityPositionSource>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, PositionSource>;
    constructor(entity: Entity, yOffset: number)
    // private entityOrUuidOrId: Either<Entity, Either<UUID, number>>;
    // private yOffset: number;
    // private getId(): number;
    getPosition(level: Level): Optional<Vec3>;
    getType(): PositionSourceType<EntityPositionSource>;
    getUuid(): UUID;
    // private resolveEntity(level: Level): void;
}