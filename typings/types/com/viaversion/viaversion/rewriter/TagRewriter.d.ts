import type { RegistryType } from '../../../../com/viaversion/viaversion/api/minecraft/RegistryType.d.ts'
import type { TagData } from '../../../../com/viaversion/viaversion/api/minecraft/TagData.d.ts'
import type { EntityType } from '../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { TagRewriter as TagRewriter_2 } from '../../../../com/viaversion/viaversion/api/rewriter/TagRewriter.d.ts'
import type { IdRewriteFunction } from '../../../../com/viaversion/viaversion/rewriter/IdRewriteFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TagRewriter<C extends ClientboundPacketType> extends Object implements TagRewriter_2 {
    constructor(arg0: Protocol<C, any, any, any>)
    // private protocol: Protocol<C, any, any, any>;
    // private toAdd: Map<RegistryType, TagData[]>;
    // private toRemove: Map<RegistryType, string[]>;
    // private toRemoveRegistries: string[];
    // private toRename: Map<RegistryType, { [key: string]: string }>;
    addEmptyTag(arg0: RegistryType, arg1: string): void;
    addEmptyTags(arg0: RegistryType, ...arg1: string[]): void;
    addEntityTag(arg0: string, ...arg1: EntityType[]): void;
    addTag(arg0: RegistryType, arg1: string, ...arg2: number[]): void;
    addTagRaw(arg0: RegistryType, arg1: string, ...arg2: number[]): void;
    appendNewTags(arg0: PacketWrapper, arg1: RegistryType): void;
    getHandler(arg0: RegistryType): (param0: PacketWrapper) => void;
    getNewTags(arg0: RegistryType): TagData[];
    getOrComputeNewTags(arg0: RegistryType): TagData[];
    getRewriter(arg0: RegistryType): (param0: number) => number;
    handle(arg0: PacketWrapper, arg1: RegistryType): void;
    handle(arg0: PacketWrapper, arg1: (param0: number) => number, arg2: TagData[], arg3: { [key: string]: string }, arg4: string[]): void;
    handle(arg0: PacketWrapper, arg1: string): void;
    handleGeneric(arg0: PacketWrapper): void;
    onMappingDataLoaded(): void;
    register(arg0: C, arg1: RegistryType): void;
    registerGeneric(arg0: C): void;
    removeTag(arg0: RegistryType, arg1: string): void;
    removeTags(arg0: string): void;
    renameTag(arg0: RegistryType, arg1: string, arg2: string): void;
    shouldRemoveRegistry(arg0: string): boolean;
}