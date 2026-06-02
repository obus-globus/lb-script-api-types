import type { StringTag } from '../../../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { FullMappings } from '../../../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { ClientboundPacket1_21 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/packet/ClientboundPacket1_21.d.ts'
import type { Protocol1_21To1_21_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/Protocol1_21To1_21_2.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/text/JsonNBTComponentRewriter.d.ts'
import type { SerializerVersion } from '../../../../../../com/viaversion/viaversion/util/SerializerVersion.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ComponentRewriter1_21_2 extends JsonNBTComponentRewriter<ClientboundPacket1_21> {
    static convertAttributes(paramarg0: Map$Entry<string, Tag>[], paramarg1: FullMappings): void;
    constructor(arg0: Protocol1_21To1_21_2)
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[]): void;
    handleTranslate(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: StringTag): void;
    inputSerializerVersion(): SerializerVersion;
}