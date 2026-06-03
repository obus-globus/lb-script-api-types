import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Protocol1_21_5To_25w14craftmine } from '../../../../../../com/viaversion/viaaprilfools/protocol/v1_21_5to25w14craftmine/Protocol1_21_5To_25w14craftmine.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPacket1_21_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ClientboundPacket1_21_5.d.ts'
import type { NBTComponentRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/text/NBTComponentRewriter.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ComponentRewriter25w14craftmine extends NBTComponentRewriter<ClientboundPacket1_21_5> {
    constructor(arg0: Protocol1_21_5To_25w14craftmine)
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[]): void;
}