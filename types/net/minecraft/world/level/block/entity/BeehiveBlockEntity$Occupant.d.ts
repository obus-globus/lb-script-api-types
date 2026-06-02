import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { TypedEntityData } from '../../../../../../net/minecraft/world/item/component/TypedEntityData.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export class BeehiveBlockEntity$Occupant extends Record {
    static CODEC: Codec<BeehiveBlockEntity$Occupant>;
    static LIST_CODEC: Codec<Object>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, BeehiveBlockEntity$Occupant>;
    static create(paramticksInHive: number): BeehiveBlockEntity$Occupant;
    static of(paramentity: Entity): BeehiveBlockEntity$Occupant;
    // private entityData: TypedEntityData<EntityType<Object>>;
    // private minTicksInHive: number;
    // private ticksInHive: number;
    createEntity(level: Level, hivePos: BlockPos): Entity;
    entityData(): TypedEntityData<EntityType<Object>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    minTicksInHive(): number;
    ticksInHive(): number;
    toString(): string;
}