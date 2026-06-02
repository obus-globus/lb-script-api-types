import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { JsonObject } from '../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { ComponentRewriterBase } from '../../../../../com/viaversion/viaversion/rewriter/text/ComponentRewriterBase.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class NBTComponentRewriter<C extends ClientboundPacketType> extends ComponentRewriterBase<C> {
    constructor(arg0: Protocol<C, Object, Object, Object>)
    handleClickEvent(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    handleHoverEvent(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    handleHoverEvent(arg0: UserConnection, arg1: JsonObject): void;
    handleNestedComponent(arg0: UserConnection, arg1: Tag): void;
    hoverEventKey(): string;
    processCompoundTag(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    registerPlayerChat1_21_5(arg0: C): void;
}