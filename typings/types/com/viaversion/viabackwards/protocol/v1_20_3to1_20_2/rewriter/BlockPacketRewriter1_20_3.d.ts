import type { Protocol1_20_3To1_20_2 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_20_3to1_20_2/Protocol1_20_3To1_20_2.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockEntity } from '../../../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { Chunk } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ClientboundPacket1_20_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/packet/ClientboundPacket1_20_3.d.ts'
import type { BlockRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { BlockRewriter$ChunkTypeSupplier } from '../../../../../../com/viaversion/viaversion/rewriter/BlockRewriter$ChunkTypeSupplier.d.ts'
export class BlockPacketRewriter1_20_3 extends BlockRewriter<ClientboundPacket1_20_3> {
    static for1_14(paramarg0: Protocol<ClientboundPacketType, any, any, any>): BlockRewriter<ClientboundPacketType>;
    static for1_18(paramarg0: Protocol<ClientboundPacketType, any, any, any>, paramarg1: (param0: number, param1: number, param2: number) => Type<Chunk>): BlockRewriter<ClientboundPacketType>;
    static for1_18(paramarg0: Protocol<ClientboundPacketType, any, any, any>, paramarg1: (param0: number, param1: number, param2: number) => Type<Chunk>, paramarg2: (param0: number, param1: number, param2: number) => Type<Chunk>): BlockRewriter<ClientboundPacketType>;
    static for1_20_2(paramarg0: Protocol<ClientboundPacketType, any, any, any>, paramarg1: (param0: number, param1: number, param2: number) => Type<Chunk>): BlockRewriter<ClientboundPacketType>;
    static for1_20_2(paramarg0: Protocol<ClientboundPacketType, any, any, any>, paramarg1: (param0: number, param1: number, param2: number) => Type<Chunk>, paramarg2: (param0: number, param1: number, param2: number) => Type<Chunk>): BlockRewriter<ClientboundPacketType>;
    static legacy(paramarg0: Protocol<ClientboundPacketType, any, any, any>): BlockRewriter<ClientboundPacketType>;
    constructor(arg0: Protocol1_20_3To1_20_2)
    handleBlockEntity(arg0: UserConnection, arg1: BlockEntity): void;
}