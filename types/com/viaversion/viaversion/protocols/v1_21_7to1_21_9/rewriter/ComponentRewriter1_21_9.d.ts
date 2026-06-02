import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPacket1_21_6 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ClientboundPacket1_21_6.d.ts'
import type { Protocol1_21_7To1_21_9 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/Protocol1_21_7To1_21_9.d.ts'
import type { NBTComponentRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/text/NBTComponentRewriter.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ComponentRewriter1_21_9 extends NBTComponentRewriter<ClientboundPacket1_21_6> {
    constructor(arg0: Protocol1_21_7To1_21_9)
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[]): void;
}