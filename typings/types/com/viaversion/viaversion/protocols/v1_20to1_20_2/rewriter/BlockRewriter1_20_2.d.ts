import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockEntity } from '../../../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { Chunk } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ClientboundPackets1_19_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ClientboundPackets1_19_4.d.ts'
import type { BlockRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { BlockRewriter$ChunkTypeSupplier } from '../../../../../../com/viaversion/viaversion/rewriter/BlockRewriter$ChunkTypeSupplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BlockRewriter1_20_2 extends BlockRewriter<ClientboundPackets1_19_4> {
    static for1_14(paramarg0: Protocol<ClientboundPacketType, Object, Object, Object>): BlockRewriter<ClientboundPacketType>;
    static for1_18(paramarg0: Protocol<ClientboundPacketType, Object, Object, Object>, paramarg1: (param0: number, param1: number, param2: number) => Type<Chunk>): BlockRewriter<ClientboundPacketType>;
    static for1_18(paramarg0: Protocol<ClientboundPacketType, Object, Object, Object>, paramarg1: (param0: number, param1: number, param2: number) => Type<Chunk>, paramarg2: (param0: number, param1: number, param2: number) => Type<Chunk>): BlockRewriter<ClientboundPacketType>;
    static for1_20_2(paramarg0: Protocol<ClientboundPacketType, Object, Object, Object>, paramarg1: (param0: number, param1: number, param2: number) => Type<Chunk>): BlockRewriter<ClientboundPacketType>;
    static for1_20_2(paramarg0: Protocol<ClientboundPacketType, Object, Object, Object>, paramarg1: (param0: number, param1: number, param2: number) => Type<Chunk>, paramarg2: (param0: number, param1: number, param2: number) => Type<Chunk>): BlockRewriter<ClientboundPacketType>;
    static legacy(paramarg0: Protocol<ClientboundPacketType, Object, Object, Object>): BlockRewriter<ClientboundPacketType>;
    constructor(arg0: Protocol<ClientboundPackets1_19_4, Object, Object, Object>)
    handleBlockEntity(arg0: UserConnection, arg1: BlockEntity): void;
}