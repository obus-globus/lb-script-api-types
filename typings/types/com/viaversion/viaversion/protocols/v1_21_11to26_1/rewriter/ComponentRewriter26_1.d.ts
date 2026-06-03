import type { StringTag } from '../../../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Protocol1_21_11To26_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/Protocol1_21_11To26_1.d.ts'
import type { ClientboundPacket1_21_11 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_9to1_21_11/packet/ClientboundPacket1_21_11.d.ts'
import type { NBTComponentRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/text/NBTComponentRewriter.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ComponentRewriter26_1 extends NBTComponentRewriter<ClientboundPacket1_21_11> {
    constructor(arg0: Protocol1_21_11To26_1)
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[]): void;
    handleTranslate(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: StringTag): void;
    handleTranslate(arg0: JsonObject, arg1: string): void;
}