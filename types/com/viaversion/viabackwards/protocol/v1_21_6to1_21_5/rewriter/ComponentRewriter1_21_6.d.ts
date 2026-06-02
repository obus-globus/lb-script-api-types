import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsProtocol } from '../../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { NBTComponentRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/text/NBTComponentRewriter.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPacket1_21_6 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ClientboundPacket1_21_6.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ComponentRewriter1_21_6 extends NBTComponentRewriter<ClientboundPacket1_21_6> {
    constructor(arg0: BackwardsProtocol<ClientboundPacket1_21_6, Object, Object, Object>)
    handleClickEvent(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
}