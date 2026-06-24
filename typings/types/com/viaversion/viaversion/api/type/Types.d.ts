import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BlockChangeRecord } from '../../../../../com/viaversion/viaversion/api/minecraft/BlockChangeRecord.d.ts'
import type { BlockPosition } from '../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { ChunkPosition } from '../../../../../com/viaversion/viaversion/api/minecraft/ChunkPosition.d.ts'
import type { EulerAngle } from '../../../../../com/viaversion/viaversion/api/minecraft/EulerAngle.d.ts'
import type { GameProfile } from '../../../../../com/viaversion/viaversion/api/minecraft/GameProfile.d.ts'
import type { GameProfile$Property } from '../../../../../com/viaversion/viaversion/api/minecraft/GameProfile$Property.d.ts'
import type { GlobalBlockPosition } from '../../../../../com/viaversion/viaversion/api/minecraft/GlobalBlockPosition.d.ts'
import type { HolderSet } from '../../../../../com/viaversion/viaversion/api/minecraft/HolderSet.d.ts'
import type { PlayerMessageSignature } from '../../../../../com/viaversion/viaversion/api/minecraft/PlayerMessageSignature.d.ts'
import type { ProfileKey } from '../../../../../com/viaversion/viaversion/api/minecraft/ProfileKey.d.ts'
import type { Quaternion } from '../../../../../com/viaversion/viaversion/api/minecraft/Quaternion.d.ts'
import type { RegistryEntry } from '../../../../../com/viaversion/viaversion/api/minecraft/RegistryEntry.d.ts'
import type { ResolvableProfile } from '../../../../../com/viaversion/viaversion/api/minecraft/ResolvableProfile.d.ts'
import type { SoundEvent } from '../../../../../com/viaversion/viaversion/api/minecraft/SoundEvent.d.ts'
import type { Vector } from '../../../../../com/viaversion/viaversion/api/minecraft/Vector.d.ts'
import type { Vector3d } from '../../../../../com/viaversion/viaversion/api/minecraft/Vector3d.d.ts'
import type { Vector3f } from '../../../../../com/viaversion/viaversion/api/minecraft/Vector3f.d.ts'
import type { VillagerData } from '../../../../../com/viaversion/viaversion/api/minecraft/VillagerData.d.ts'
import type { BlockEntity } from '../../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { ChunkSection } from '../../../../../com/viaversion/viaversion/api/minecraft/chunks/ChunkSection.d.ts'
import type { Heightmap } from '../../../../../com/viaversion/viaversion/api/minecraft/chunks/Heightmap.d.ts'
import type { EntityData } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { HashedItem } from '../../../../../com/viaversion/viaversion/api/minecraft/item/HashedItem.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { OptionalType } from '../../../../../com/viaversion/viaversion/api/type/OptionalType.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { BitSetType } from '../../../../../com/viaversion/viaversion/api/type/types/BitSetType.d.ts'
import type { BooleanType } from '../../../../../com/viaversion/viaversion/api/type/types/BooleanType.d.ts'
import type { BooleanType$OptionalBooleanType } from '../../../../../com/viaversion/viaversion/api/type/types/BooleanType$OptionalBooleanType.d.ts'
import type { ByteArrayType } from '../../../../../com/viaversion/viaversion/api/type/types/ByteArrayType.d.ts'
import type { ByteArrayType$OptionalByteArrayType } from '../../../../../com/viaversion/viaversion/api/type/types/ByteArrayType$OptionalByteArrayType.d.ts'
import type { ByteType } from '../../../../../com/viaversion/viaversion/api/type/types/ByteType.d.ts'
import type { DoubleType } from '../../../../../com/viaversion/viaversion/api/type/types/DoubleType.d.ts'
import type { FloatType } from '../../../../../com/viaversion/viaversion/api/type/types/FloatType.d.ts'
import type { FloatType$OptionalFloatType } from '../../../../../com/viaversion/viaversion/api/type/types/FloatType$OptionalFloatType.d.ts'
import type { IntType } from '../../../../../com/viaversion/viaversion/api/type/types/IntType.d.ts'
import type { LongType } from '../../../../../com/viaversion/viaversion/api/type/types/LongType.d.ts'
import type { OptionalVarIntType } from '../../../../../com/viaversion/viaversion/api/type/types/OptionalVarIntType.d.ts'
import type { ShortType } from '../../../../../com/viaversion/viaversion/api/type/types/ShortType.d.ts'
import type { UnsignedByteType } from '../../../../../com/viaversion/viaversion/api/type/types/UnsignedByteType.d.ts'
import type { UnsignedIntType } from '../../../../../com/viaversion/viaversion/api/type/types/UnsignedIntType.d.ts'
import type { UnsignedShortType } from '../../../../../com/viaversion/viaversion/api/type/types/UnsignedShortType.d.ts'
import type { VarIntType } from '../../../../../com/viaversion/viaversion/api/type/types/VarIntType.d.ts'
import type { VarLongType } from '../../../../../com/viaversion/viaversion/api/type/types/VarLongType.d.ts'
import type { HolderType } from '../../../../../com/viaversion/viaversion/api/type/types/misc/HolderType.d.ts'
import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Key } from '../../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { Unit } from '../../../../../com/viaversion/viaversion/util/Unit.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Types extends Object {
    static ACKNOWLEDGED_BIT_SET: BitSetType;
    static BLOCK_CHANGE: Type<BlockChangeRecord>;
    static BLOCK_CHANGE_ARRAY: Type<(Object | null)[]>;
    static BLOCK_ENTITY1_18: Type<BlockEntity>;
    static BLOCK_ENTITY1_20_2: Type<BlockEntity>;
    static BLOCK_POSITION1_14: Type<BlockPosition>;
    static BLOCK_POSITION1_8: Type<BlockPosition>;
    static BOOLEAN: BooleanType;
    static BOOLEAN_ARRAY_PRIMITIVE: Type<(Object | null)[]>;
    static BOOL_OPTIONAL_VAR_INT: OptionalType<number>;
    static BYTE: ByteType;
    static BYTE_ARRAY_PRIMITIVE: Type<number[]>;
    static CHUNK_POSITION: Type<ChunkPosition>;
    static CHUNK_SECTION1_13: Type<ChunkSection>;
    static CHUNK_SECTION1_16: Type<ChunkSection>;
    static CHUNK_SECTION1_8: Type<ChunkSection>;
    static CHUNK_SECTION1_9: Type<ChunkSection>;
    static COMPONENT: Type<JsonElement>;
    static COMPOUND_TAG: Type<Map$Entry<string, Tag>[]>;
    static CUSTOM_CLICK_ACTION_TAG: Type<Tag>;
    static DOUBLE: DoubleType;
    static EMPTY: Type<Unit>;
    static ENTITY_DATA1_12: Type<EntityData>;
    static ENTITY_DATA1_8: Type<EntityData>;
    static ENTITY_DATA1_9: Type<EntityData>;
    static ENTITY_DATA_LIST1_12: Type<EntityData[]>;
    static ENTITY_DATA_LIST1_8: Type<EntityData[]>;
    static ENTITY_DATA_LIST1_9: Type<EntityData[]>;
    static FLOAT: FloatType;
    static FLOAT_ARRAY_PRIMITIVE: Type<number[]>;
    static GAME_PROFILE: Type<GameProfile>;
    static GLOBAL_POSITION: Type<GlobalBlockPosition>;
    static HASHED_ITEM: Type<HashedItem>;
    static HEIGHTMAP: Type<Heightmap>;
    static HEIGHTMAP_ARRAY: Type<(Object | null)[]>;
    static HOLDER_SET: Type<HolderSet>;
    static IDENTIFIER: Type<Key>;
    static IDENTIFIER_ARRAY: Type<(Object | null)[]>;
    static INT: IntType;
    static INT_ARRAY_PRIMITIVE: Type<number[]>;
    static ITEM1_13: Type<Item>;
    static ITEM1_13_2: Type<Item>;
    static ITEM1_13_2_ARRAY: Type<(Object | null)[]>;
    static ITEM1_13_2_SHORT_ARRAY: Type<(Object | null)[]>;
    static ITEM1_13_ARRAY: Type<(Object | null)[]>;
    static ITEM1_13_SHORT_ARRAY: Type<(Object | null)[]>;
    static ITEM1_20_2: Type<Item>;
    static ITEM1_20_2_ARRAY: Type<(Object | null)[]>;
    static ITEM1_8: Type<Item>;
    static ITEM1_8_SHORT_ARRAY: Type<(Object | null)[]>;
    static LONG: LongType;
    static LONG_ARRAY_PRIMITIVE: Type<number[]>;
    static LOW_PRECISION_VECTOR: Type<Vector3d>;
    static MOVEMENT_VECTOR: Type<Vector3d>;
    static NAMED_COMPOUND_TAG: Type<Map$Entry<string, Tag>[]>;
    static NAMED_COMPOUND_TAG_ARRAY: Type<(Object | null)[]>;
    static OPTIONAL_BOOLEAN: BooleanType$OptionalBooleanType;
    static OPTIONAL_BYTE_ARRAY_PRIMITIVE: Type<number[]>;
    static OPTIONAL_COMPONENT: Type<JsonElement>;
    static OPTIONAL_COMPOUND_TAG: Type<Map$Entry<string, Tag>[]>;
    static OPTIONAL_FLOAT: FloatType$OptionalFloatType;
    static OPTIONAL_GLOBAL_POSITION: Type<GlobalBlockPosition>;
    static OPTIONAL_HOLDER_SET: Type<HolderSet>;
    static OPTIONAL_IDENTIFIER: Type<Key>;
    static OPTIONAL_LONG: Type<number>;
    static OPTIONAL_NAMED_COMPOUND_TAG: Type<Map$Entry<string, Tag>[]>;
    static OPTIONAL_PLAYER_MESSAGE_SIGNATURE: Type<PlayerMessageSignature>;
    static OPTIONAL_POSITION1_8: Type<BlockPosition>;
    static OPTIONAL_POSITION_1_14: Type<BlockPosition>;
    static OPTIONAL_PROFILE_KEY: Type<ProfileKey>;
    static OPTIONAL_SIGNATURE_BYTES: ByteArrayType$OptionalByteArrayType;
    static OPTIONAL_SOUND_EVENT: HolderType<SoundEvent>;
    static OPTIONAL_STRING: Type<string>;
    static OPTIONAL_TAG: Type<Tag>;
    static OPTIONAL_UUID: Type<UUID>;
    static OPTIONAL_VAR_INT: OptionalVarIntType;
    static PLAYER_MESSAGE_SIGNATURE: Type<PlayerMessageSignature>;
    static PLAYER_MESSAGE_SIGNATURE_ARRAY: Type<(Object | null)[]>;
    static PROFILE_ACTIONS_ENUM1_19_3: BitSetType;
    static PROFILE_ACTIONS_ENUM1_21_2: BitSetType;
    static PROFILE_ACTIONS_ENUM1_21_4: BitSetType;
    static PROFILE_KEY: Type<ProfileKey>;
    static PROFILE_PROPERTY: Type<GameProfile$Property>;
    static PROFILE_PROPERTY_ARRAY: Type<(Object | null)[]>;
    static QUATERNION: Type<Quaternion>;
    static REGISTRY_ENTRY: Type<RegistryEntry>;
    static REGISTRY_ENTRY_ARRAY: Type<(Object | null)[]>;
    static REMAINING_BYTES: Type<number[]>;
    static RESOLVABLE_PROFILE: Type<ResolvableProfile>;
    static ROTATIONS: Type<EulerAngle>;
    static SERVERBOUND_CUSTOM_PAYLOAD_DATA: Type<number[]>;
    static SHORT: ShortType;
    static SHORT_BYTE_ARRAY: Type<number[]>;
    static SIGNATURE_BYTES: ByteArrayType;
    static SOUND_EVENT: HolderType<SoundEvent>;
    static STRING: Type<string>;
    static STRING_ARRAY: Type<(Object | null)[]>;
    static TAG: Type<Tag>;
    static TAG_ARRAY: Type<(Object | null)[]>;
    static TAG_KEY: Type<Key>;
    static TEXT_COMPONENT_TAG: Type<Tag>;
    static TRUSTED_COMPOUND_TAG: Type<Map$Entry<string, Tag>[]>;
    static TRUSTED_COMPOUND_TAG_HOLDER: HolderType<Map$Entry<string, Tag>[]>;
    static TRUSTED_OPTIONAL_COMPOUND_TAG: Type<Map$Entry<string, Tag>[]>;
    static TRUSTED_OPTIONAL_TAG: Type<Tag>;
    static TRUSTED_TAG: Type<Tag>;
    static UNSIGNED_BYTE: UnsignedByteType;
    static UNSIGNED_INT: UnsignedIntType;
    static UNSIGNED_SHORT: UnsignedShortType;
    static UUID: Type<UUID>;
    static UUID_ARRAY: Type<(Object | null)[]>;
    static VAR_INT: VarIntType;
    static VAR_INT_ARRAY_PRIMITIVE: Type<number[]>;
    static VAR_LONG: VarLongType;
    static VAR_LONG_BLOCK_CHANGE: Type<BlockChangeRecord>;
    static VAR_LONG_BLOCK_CHANGE_ARRAY: Type<(Object | null)[]>;
    static VECTOR: Type<Vector>;
    static VECTOR3F: Type<Vector3f>;
    static VILLAGER_DATA: Type<VillagerData>;
    constructor()
}