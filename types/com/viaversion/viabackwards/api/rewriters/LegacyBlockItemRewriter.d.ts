import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { MappedLegacyBlockItem } from '../../../../../com/viaversion/viabackwards/api/data/MappedLegacyBlockItem.d.ts'
import type { MappedLegacyBlockItem$Type } from '../../../../../com/viaversion/viabackwards/api/data/MappedLegacyBlockItem$Type.d.ts'
import type { BackwardsItemRewriterBase } from '../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsItemRewriterBase.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Chunk } from '../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { JsonObject } from '../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { IdAndData } from '../../../../../com/viaversion/viaversion/util/IdAndData.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export abstract class LegacyBlockItemRewriter<C extends ClientboundPacketType, S extends ServerboundPacketType, T extends BackwardsProtocol<C, Object, Object, S>> extends BackwardsItemRewriterBase<C, S, T> {
    constructor(arg0: T, arg1: string)
    constructor(arg0: T, arg1: string, arg2: Type<Item>, arg3: Type<Item[]>)
    constructor(arg0: T, arg1: string, arg2: Type<Item>, arg3: Type<Item[]>, arg4: Type<Item>, arg5: Type<Item[]>)
    // private blockReplacements: Int2ObjectMap<MappedLegacyBlockItem>;
    // private itemReplacements: Int2ObjectMap<MappedLegacyBlockItem>;
    // private addMapping(arg0: string, arg1: JsonObject, arg2: MappedLegacyBlockItem$Type, arg3: Int2ObjectMap<MappedLegacyBlockItem>): void;
    // private addMappings(arg0: MappedLegacyBlockItem$Type, arg1: JsonObject, arg2: Int2ObjectMap<MappedLegacyBlockItem>): void;
    compress(arg0: number, arg1: number): number;
    getFallingBlockHandler(): (param0: PacketWrapper) => void;
    // private getMappedBlock(arg0: number): MappedLegacyBlockItem;
    // private getMappedBlock(arg0: number, arg1: number): MappedLegacyBlockItem;
    // private getMappedItem(arg0: number, arg1: number): MappedLegacyBlockItem;
    getNamedTag(arg0: string): Map$Entry<string, Tag>[];
    handleBlock(arg0: number, arg1: number): IdAndData;
    handleBlockId(arg0: number): number;
    handleChunk(arg0: Chunk): void;
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    readMappingsFile(arg0: string): JsonObject;
    registerBlockChange(arg0: C): void;
    registerMultiBlockChange(arg0: C): void;
}