import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Protocol1_21_5To1_21_4 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_5to1_21_4/Protocol1_21_5To1_21_4.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockEntity } from '../../../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacket1_21_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ClientboundPacket1_21_5.d.ts'
import type { BlockRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { BlockRewriter$ChunkTypeSupplier } from '../../../../../../com/viaversion/viaversion/rewriter/BlockRewriter$ChunkTypeSupplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BlockPacketRewriter1_21_5 extends BlockRewriter<ClientboundPacket1_21_5> {
    static for1_14(paramarg0: Protocol<Object, Object, Object, Object>): BlockRewriter<Object>;
    static for1_18(paramarg0: Protocol<Object, Object, Object, Object>, paramarg1: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>): BlockRewriter<Object>;
    static for1_18(paramarg0: Protocol<Object, Object, Object, Object>, paramarg1: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>, paramarg2: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>): BlockRewriter<Object>;
    static for1_20_2(paramarg0: Protocol<Object, Object, Object, Object>, paramarg1: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>): BlockRewriter<Object>;
    static for1_20_2(paramarg0: Protocol<Object, Object, Object, Object>, paramarg1: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>, paramarg2: (param0: number, param1: number, param2: number) => com.viaversion.viaversion.api.type.Type<com.viaversion.viaversion.api.minecraft.chunks.Chunk>): BlockRewriter<Object>;
    static legacy(paramarg0: Protocol<Object, Object, Object, Object>): BlockRewriter<Object>;
    constructor(arg0: Protocol1_21_5To1_21_4)
    // private protocol: Protocol1_21_5To1_21_4;
    handleBlockEntity(arg0: UserConnection, arg1: BlockEntity): void;
    // private updateSignMessages(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
}