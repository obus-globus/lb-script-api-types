import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { UUIDLookup } from '../../../../net/minecraft/world/level/entity/UUIDLookup.d.ts'
import type { UniquelyIdentifyable } from '../../../../net/minecraft/world/level/entity/UniquelyIdentifyable.d.ts'
import type { ValueInput } from '../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class EntityReference<StoredEntityType extends UniquelyIdentifyable> extends Object {
    static codec<Type extends UniquelyIdentifyable>(): Codec<EntityReference<Type>>;
    static get<StoredEntityType extends UniquelyIdentifyable>(paramreference: EntityReference<StoredEntityType>, paramlevel: Level, paramclazz: Class<StoredEntityType>): StoredEntityType;
    static getEntity(paramreference: EntityReference<Entity>, paramlevel: Level): Entity;
    static getLivingEntity(paramreference: EntityReference<LivingEntity>, paramlevel: Level): LivingEntity;
    static getPlayer(paramreference: EntityReference<Player>, paramlevel: Level): Player;
    static of<T extends UniquelyIdentifyable>(paramentity: T): EntityReference<T>;
    static of<T extends UniquelyIdentifyable>(paramuuid: UUID): EntityReference<T>;
    static read<StoredEntityType extends UniquelyIdentifyable>(paraminput: ValueInput, paramkey: string): EntityReference<StoredEntityType>;
    static readWithOldOwnerConversion<StoredEntityType extends UniquelyIdentifyable>(paraminput: ValueInput, paramkey: string, paramlevel: Level): EntityReference<StoredEntityType>;
    static store(paramreference: EntityReference<any>, paramoutput: ValueOutput, paramkey: string): void;
    static streamCodec<Type extends UniquelyIdentifyable>(): StreamCodec<ByteBuf, EntityReference<Type>>;
    private constructor(entity: StoredEntityType)
    private constructor(uuid: UUID)
    // private entity: Either<UUID, StoredEntityType>;
    equals(obj: Object | null): boolean;
    getEntity(level: Level, clazz: Class<StoredEntityType>): StoredEntityType;
    getEntity(lookup: UUIDLookup<UniquelyIdentifyable>, clazz: Class<StoredEntityType>): StoredEntityType;
    getUUID(): UUID;
    hashCode(): number;
    matches(entity: StoredEntityType): boolean;
    // private resolve(entity: UniquelyIdentifyable, clazz: Class<StoredEntityType>): StoredEntityType;
    store(output: ValueOutput, key: string): void;
}