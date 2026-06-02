import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPacket1_21_9 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ClientboundPacket1_21_9.d.ts'
import type { Protocol1_21_9To1_21_11 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_9to1_21_11/Protocol1_21_9To1_21_11.d.ts'
import type { NBTComponentRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/text/NBTComponentRewriter.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ComponentRewriter1_21_11 extends NBTComponentRewriter<ClientboundPacket1_21_9> {
    constructor(arg0: Protocol1_21_9To1_21_11)
    processCompoundTag(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
}