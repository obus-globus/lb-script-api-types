import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsProtocol } from '../../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { NBTComponentRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/text/NBTComponentRewriter.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPacket26_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ClientboundPacket26_1.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ComponentRewriter26_1 extends NBTComponentRewriter<ClientboundPacket26_1> {
    constructor(arg0: BackwardsProtocol<ClientboundPacket26_1, Object, Object, Object>)
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[]): void;
}