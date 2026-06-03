import type { StringTag } from '../../../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { ClientboundPackets1_18 } from '../../../../../../com/viaversion/viaversion/protocols/v1_17_1to1_18/packet/ClientboundPackets1_18.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/text/JsonNBTComponentRewriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ComponentRewriter1_19 extends JsonNBTComponentRewriter<ClientboundPackets1_18> {
    constructor(arg0: Protocol<ClientboundPackets1_18, Object, Object, Object>)
    // private mappings: { [key: string]: string };
    handleTranslate(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: StringTag): void;
    handleTranslate(arg0: JsonObject, arg1: string): void;
}