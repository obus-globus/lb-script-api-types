import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol98_1To99_1 } from '../../../../../com/viaversion/viaversion/protocols/template/Protocol98_1To99_1.d.ts'
import type { ClientboundPacket26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ClientboundPacket26_1.d.ts'
import type { NBTComponentRewriter } from '../../../../../com/viaversion/viaversion/rewriter/text/NBTComponentRewriter.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class ComponentRewriter99_1 extends NBTComponentRewriter<ClientboundPacket26_1> {
    constructor(arg0: Protocol98_1To99_1)
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[]): void;
}