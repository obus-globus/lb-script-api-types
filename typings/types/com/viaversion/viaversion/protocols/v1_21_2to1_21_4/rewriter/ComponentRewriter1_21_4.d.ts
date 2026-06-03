import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol1_21_2To1_21_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_2to1_21_4/Protocol1_21_2To1_21_4.d.ts'
import type { ClientboundPacket1_21_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ClientboundPacket1_21_2.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/text/JsonNBTComponentRewriter.d.ts'
import type { SerializerVersion } from '../../../../../../com/viaversion/viaversion/util/SerializerVersion.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ComponentRewriter1_21_4 extends JsonNBTComponentRewriter<ClientboundPacket1_21_2> {
    constructor(arg0: Protocol1_21_2To1_21_4)
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[]): void;
    inputSerializerVersion(): SerializerVersion;
}