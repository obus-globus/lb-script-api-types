import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BlockPosition } from '../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { EntityData } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { BufferedImage } from '../../../../../java/awt/image/BufferedImage.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockDataPalette } from '../../../../../net/raphimc/viabedrock/api/chunk/datapalette/BedrockDataPalette.d.ts'
import type { BedrockChunkSection } from '../../../../../net/raphimc/viabedrock/api/chunk/section/BedrockChunkSection.d.ts'
import type { BlockChangeEntry } from '../../../../../net/raphimc/viabedrock/protocol/model/BlockChangeEntry.d.ts'
import type { BlockProperties } from '../../../../../net/raphimc/viabedrock/protocol/model/BlockProperties.d.ts'
import type { CommandOriginData } from '../../../../../net/raphimc/viabedrock/protocol/model/CommandOriginData.d.ts'
import type { EducationUriResource } from '../../../../../net/raphimc/viabedrock/protocol/model/EducationUriResource.d.ts'
import type { EntityLink } from '../../../../../net/raphimc/viabedrock/protocol/model/EntityLink.d.ts'
import type { EntityProperties } from '../../../../../net/raphimc/viabedrock/protocol/model/EntityProperties.d.ts'
import type { Experiment } from '../../../../../net/raphimc/viabedrock/protocol/model/Experiment.d.ts'
import type { FullContainerName } from '../../../../../net/raphimc/viabedrock/protocol/model/FullContainerName.d.ts'
import type { GameRule } from '../../../../../net/raphimc/viabedrock/protocol/model/GameRule.d.ts'
import type { ItemEntry } from '../../../../../net/raphimc/viabedrock/protocol/model/ItemEntry.d.ts'
import type { PlayerAbilities } from '../../../../../net/raphimc/viabedrock/protocol/model/PlayerAbilities.d.ts'
import type { Position2f } from '../../../../../net/raphimc/viabedrock/protocol/model/Position2f.d.ts'
import type { Position3f } from '../../../../../net/raphimc/viabedrock/protocol/model/Position3f.d.ts'
import type { SkinData } from '../../../../../net/raphimc/viabedrock/protocol/model/SkinData.d.ts'
import type { FloatLEType } from '../../../../../net/raphimc/viabedrock/protocol/types/primitive/FloatLEType.d.ts'
import type { IntLEType } from '../../../../../net/raphimc/viabedrock/protocol/types/primitive/IntLEType.d.ts'
import type { LongLEType } from '../../../../../net/raphimc/viabedrock/protocol/types/primitive/LongLEType.d.ts'
import type { ShortLEType } from '../../../../../net/raphimc/viabedrock/protocol/types/primitive/ShortLEType.d.ts'
import type { UnsignedIntLEType } from '../../../../../net/raphimc/viabedrock/protocol/types/primitive/UnsignedIntLEType.d.ts'
import type { UnsignedShortLEType } from '../../../../../net/raphimc/viabedrock/protocol/types/primitive/UnsignedShortLEType.d.ts'
import type { UnsignedVarIntType } from '../../../../../net/raphimc/viabedrock/protocol/types/primitive/UnsignedVarIntType.d.ts'
import type { UnsignedVarLongType } from '../../../../../net/raphimc/viabedrock/protocol/types/primitive/UnsignedVarLongType.d.ts'
import type { VarIntType } from '../../../../../net/raphimc/viabedrock/protocol/types/primitive/VarIntType.d.ts'
import type { VarLongType } from '../../../../../net/raphimc/viabedrock/protocol/types/primitive/VarLongType.d.ts'
export class BedrockTypes extends Object {
    static ASCII_STRING: Type<string>;
    static BLOCK_CHANGE_ENTRY: Type<BlockChangeEntry>;
    static BLOCK_CHANGE_ENTRY_ARRAY: Type<(Object | null)[]>;
    static BLOCK_POSITION: Type<BlockPosition>;
    static BLOCK_PROPERTIES: Type<BlockProperties>;
    static BLOCK_PROPERTIES_ARRAY: Type<(Object | null)[]>;
    static BYTE_ARRAY: Type<number[]>;
    static CHUNK_SECTION: Type<BedrockChunkSection>;
    static COMMAND_DATA_ARRAY: Type<(Object | null)[]>;
    static COMMAND_ORIGIN_DATA: Type<CommandOriginData>;
    static COMPOUND_TAG_VALUE: Type<Tag>;
    static DATA_PALETTE: Type<BedrockDataPalette>;
    static EDUCATION_URI_RESOURCE: Type<EducationUriResource>;
    static ENTITY_DATA: Type<EntityData>;
    static ENTITY_DATA_ARRAY: Type<(Object | null)[]>;
    static ENTITY_LINK: Type<EntityLink>;
    static ENTITY_LINK_ARRAY: Type<(Object | null)[]>;
    static ENTITY_PROPERTIES: Type<EntityProperties>;
    static EXPERIMENT: Type<Experiment>;
    static EXPERIMENT_ARRAY: Type<(Object | null)[]>;
    static FLOAT_LE: FloatLEType;
    static FULL_CONTAINER_NAME: Type<FullContainerName>;
    static FULL_CONTAINER_NAME_ARRAY: Type<(Object | null)[]>;
    static GAME_RULE: Type<GameRule>;
    static GAME_RULE_ARRAY: Type<(Object | null)[]>;
    static IMAGE: Type<BufferedImage>;
    static INT_LE: IntLEType;
    static ITEM_ENTRY: Type<ItemEntry>;
    static ITEM_ENTRY_ARRAY: Type<(Object | null)[]>;
    static LONG_ARRAY: Type<(Object | null)[]>;
    static LONG_LE: LongLEType;
    static NETWORK_TAG: Type<Tag>;
    static OPTIONAL_POSITION_3F: Type<Position3f>;
    static OPTIONAL_STRING: Type<string>;
    static PLAYER_ABILITIES: Type<PlayerAbilities>;
    static POSITION_2F: Type<Position2f>;
    static POSITION_3F: Type<Position3f>;
    static RUNTIME_DATA_PALETTE: Type<BedrockDataPalette>;
    static SHORT_LE: ShortLEType;
    static SHORT_LE_STRING_ARRAY: Type<(Object | null)[]>;
    static SKIN: Type<SkinData>;
    static STRING: Type<string>;
    static STRING_ARRAY: Type<(Object | null)[]>;
    static SUB_CHUNK_OFFSET: Type<BlockPosition>;
    static TAG_LE: Type<Tag>;
    static UNSIGNED_INT_LE: UnsignedIntLEType;
    static UNSIGNED_LONG_LE: LongLEType;
    static UNSIGNED_SHORT_LE: UnsignedShortLEType;
    static UNSIGNED_VAR_BIG_INTEGER: Type<BigInteger>;
    static UNSIGNED_VAR_INT: UnsignedVarIntType;
    static UNSIGNED_VAR_LONG: UnsignedVarLongType;
    static UTF8_STRING: Type<string>;
    static UTF8_STRING_ARRAY: Type<(Object | null)[]>;
    static UUID: Type<UUID>;
    static UUID_ARRAY: Type<(Object | null)[]>;
    static VAR_INT: VarIntType;
    static VAR_INT_GAME_RULE: Type<GameRule>;
    static VAR_INT_GAME_RULE_ARRAY: Type<(Object | null)[]>;
    static VAR_LONG: VarLongType;
    constructor()
}