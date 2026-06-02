import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityTracker } from '../../../../com/viaversion/viaversion/api/data/entity/EntityTracker.d.ts'
import type { BlockPosition } from '../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { BlockEntity } from '../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { Chunk } from '../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Type } from '../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { BlockRewriter$ChunkTypeSupplier } from '../../../../com/viaversion/viaversion/rewriter/BlockRewriter$ChunkTypeSupplier.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class BlockRewriter<C extends ClientboundPacketType> extends Object {
    static for1_14(paramarg0: Protocol<Object, Object, Object, Object>): BlockRewriter<Object>;
    static for1_18(paramarg0: Protocol<Object, Object, Object, Object>, paramarg1: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>): BlockRewriter<Object>;
    static for1_18(paramarg0: Protocol<Object, Object, Object, Object>, paramarg1: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>, paramarg2: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>): BlockRewriter<Object>;
    static for1_20_2(paramarg0: Protocol<Object, Object, Object, Object>, paramarg1: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>): BlockRewriter<Object>;
    static for1_20_2(paramarg0: Protocol<Object, Object, Object, Object>, paramarg1: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>, paramarg2: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>): BlockRewriter<Object>;
    static legacy(paramarg0: Protocol<Object, Object, Object, Object>): BlockRewriter<Object>;
    constructor(arg0: Protocol<C, Object, Object, Object>, arg1: Type<BlockPosition>, arg2: Type<Map$Entry<string, Tag>[]>, arg3: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>, arg4: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>)
    // private chunkTypeSupplier: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>;
    // private compoundTagType: Type<Map$Entry<string, Tag>[]>;
    // private mappedChunkTypeSupplier: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>;
    // private positionType: Type<BlockPosition>;
    // private protocol: Protocol<C, Object, Object, Object>;
    createChunkType(arg0: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>, arg1: EntityTracker, arg2: boolean): Type<Chunk>;
    handleBlockEntities(arg0: Chunk, arg1: UserConnection): void;
    handleBlockEntity(arg0: UserConnection, arg1: BlockEntity): void;
    handleChunk(arg0: Chunk): void;
    handleChunk1_18(arg0: PacketWrapper): Chunk;
    registerBlockBreakAck(arg0: C): void;
    registerBlockEntityData1_18(arg0: C): void;
    registerBlockEvent(arg0: C): void;
    registerBlockUpdate(arg0: C): void;
    registerChunkBlocksUpdate(arg0: C): void;
    registerLevelChunk(arg0: C, arg1: Type<Chunk>, arg2: Type<Chunk>): void;
    registerLevelChunk(arg0: C, arg1: Type<Chunk>, arg2: Type<Chunk>, arg3: (param0: UserConnection, param1: Chunk) => void): void;
    registerLevelChunk1_18(arg0: C): void;
    // private registerLevelEvent(arg0: C, arg1: number, arg2: number): void;
    registerLevelEvent1_13(arg0: C): void;
    registerLevelEvent1_21(arg0: C): void;
    registerSectionBlocksUpdate(arg0: C): void;
    registerSectionBlocksUpdate1_20(arg0: C): void;
}