import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsProtocol } from '../../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPacket1_20_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ClientboundPacket1_20_5.d.ts'
import type { ComponentRewriter1_20_5 as ComponentRewriter1_20_5_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/rewriter/ComponentRewriter1_20_5.d.ts'
import type { SerializerVersion } from '../../../../../../com/viaversion/viaversion/util/SerializerVersion.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ComponentRewriter1_20_5 extends JsonNBTComponentRewriter<ClientboundPacket1_20_5> {
    constructor(arg0: BackwardsProtocol<ClientboundPacket1_20_5, Object, Object, Object>)
    // private vvRewriter: ComponentRewriter1_20_5_2<ClientboundPacket1_20_5>;
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[]): void;
    inputSerializerVersion(): SerializerVersion;
    outputSerializerVersion(): SerializerVersion;
}