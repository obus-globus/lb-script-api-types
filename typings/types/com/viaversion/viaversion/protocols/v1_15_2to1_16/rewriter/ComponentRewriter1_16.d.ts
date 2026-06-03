import type { StringTag } from '../../../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { JsonElement } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { ClientboundPackets1_15 } from '../../../../../../com/viaversion/viaversion/protocols/v1_14_4to1_15/packet/ClientboundPackets1_15.d.ts'
import type { Protocol1_15_2To1_16 } from '../../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/Protocol1_15_2To1_16.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/text/JsonNBTComponentRewriter.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ComponentRewriter1_16 extends JsonNBTComponentRewriter<ClientboundPackets1_15> {
    constructor(arg0: Protocol1_15_2To1_16)
    // private mappings: { [key: string]: string };
    handleTranslate(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: StringTag): void;
    handleTranslate(arg0: JsonObject, arg1: string): void;
    processText(arg0: UserConnection, arg1: JsonElement): void;
    processText(arg0: UserConnection, arg1: string): JsonElement;
}