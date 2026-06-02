import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { Protocol1_21To1_20_5 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21to1_20_5/Protocol1_21To1_20_5.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPacket1_21 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/packet/ClientboundPacket1_21.d.ts'
import type { SerializerVersion } from '../../../../../../com/viaversion/viaversion/util/SerializerVersion.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ComponentRewriter1_21 extends JsonNBTComponentRewriter<ClientboundPacket1_21> {
    constructor(arg0: Protocol1_21To1_20_5)
    // private convertAttributeModifiersComponent(arg0: Map$Entry<string, Tag>[]): void;
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[]): void;
    inputSerializerVersion(): SerializerVersion;
    outputSerializerVersion(): SerializerVersion;
}