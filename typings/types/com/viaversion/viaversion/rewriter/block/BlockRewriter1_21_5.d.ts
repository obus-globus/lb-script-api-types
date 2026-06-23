import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockEntity } from '../../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { Chunk } from '../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { BlockRewriter$ChunkTypeSupplier } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter$ChunkTypeSupplier.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class BlockRewriter1_21_5<C extends ClientboundPacketType> extends BlockRewriter<C> {
    static for1_14(paramarg0: Protocol<ClientboundPacketType, any, any, any>): BlockRewriter<ClientboundPacketType>;
    static for1_18(paramarg0: Protocol<ClientboundPacketType, any, any, any>, paramarg1: (param0: number, param1: number, param2: number) => Type<Chunk>): BlockRewriter<ClientboundPacketType>;
    static for1_18(paramarg0: Protocol<ClientboundPacketType, any, any, any>, paramarg1: (param0: number, param1: number, param2: number) => Type<Chunk>, paramarg2: (param0: number, param1: number, param2: number) => Type<Chunk>): BlockRewriter<ClientboundPacketType>;
    static for1_20_2(paramarg0: Protocol<ClientboundPacketType, any, any, any>, paramarg1: (param0: number, param1: number, param2: number) => Type<Chunk>): BlockRewriter<ClientboundPacketType>;
    static for1_20_2(paramarg0: Protocol<ClientboundPacketType, any, any, any>, paramarg1: (param0: number, param1: number, param2: number) => Type<Chunk>, paramarg2: (param0: number, param1: number, param2: number) => Type<Chunk>): BlockRewriter<ClientboundPacketType>;
    static legacy(paramarg0: Protocol<ClientboundPacketType, any, any, any>): BlockRewriter<ClientboundPacketType>;
    constructor(arg0: Protocol<C, any, any, any>, arg1: (param0: number, param1: number, param2: number) => Type<Chunk>)
    constructor(arg0: Protocol<C, any, any, any>, arg1: (param0: number, param1: number, param2: number) => Type<Chunk>, arg2: (param0: number, param1: number, param2: number) => Type<Chunk>)
    handleBlockEntity(arg0: UserConnection, arg1: BlockEntity): void;
    updateSignMessages(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
}