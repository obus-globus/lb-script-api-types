import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BlockChangeRecord } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockChangeRecord.d.ts'
import type { BlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Environment } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Environment.d.ts'
import type { Chunk } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { EntityData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class Types1_7_6 extends Object {
    static BLOCK_CHANGE_RECORD_ARRAY: Type<BlockChangeRecord[]>;
    static BLOCK_POSITION_BYTE: Type<BlockPosition>;
    static BLOCK_POSITION_INT: Type<BlockPosition>;
    static BLOCK_POSITION_SHORT: Type<BlockPosition>;
    static BLOCK_POSITION_UBYTE: Type<BlockPosition>;
    static CHUNK_BULK: Type<Chunk[]>;
    static CHUNK_WITHOUT_SKYLIGHT: Type<Chunk>;
    static CHUNK_WITH_SKYLIGHT: Type<Chunk>;
    static ENTITY_DATA: Type<EntityData>;
    static ENTITY_DATA_LIST: Type<EntityData[]>;
    static INT_ARRAY: Type<number[]>;
    static ITEM: Type<Item>;
    static ITEM_ARRAY: Type<Item[]>;
    static NBT: Type<Map$Entry<string, Tag>[]>;
    static getChunk(paramarg0: Environment): Type<Chunk>;
    private constructor()
}