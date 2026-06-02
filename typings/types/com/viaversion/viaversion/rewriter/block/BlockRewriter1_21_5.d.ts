import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockEntity } from '../../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { BlockRewriter$ChunkTypeSupplier } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter$ChunkTypeSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class BlockRewriter1_21_5<C extends ClientboundPacketType> extends BlockRewriter<C> {
    static for1_14(paramarg0: Protocol<Object, Object, Object, Object>): BlockRewriter<Object>;
    static for1_18(paramarg0: Protocol<Object, Object, Object, Object>, paramarg1: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>): BlockRewriter<Object>;
    static for1_18(paramarg0: Protocol<Object, Object, Object, Object>, paramarg1: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>, paramarg2: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>): BlockRewriter<Object>;
    static for1_20_2(paramarg0: Protocol<Object, Object, Object, Object>, paramarg1: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>): BlockRewriter<Object>;
    static for1_20_2(paramarg0: Protocol<Object, Object, Object, Object>, paramarg1: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>, paramarg2: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>): BlockRewriter<Object>;
    static legacy(paramarg0: Protocol<Object, Object, Object, Object>): BlockRewriter<Object>;
    constructor(arg0: Protocol<C, Object, Object, Object>, arg1: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>)
    constructor(arg0: Protocol<C, Object, Object, Object>, arg1: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>, arg2: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>)
    handleBlockEntity(arg0: UserConnection, arg1: BlockEntity): void;
    updateSignMessages(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
}