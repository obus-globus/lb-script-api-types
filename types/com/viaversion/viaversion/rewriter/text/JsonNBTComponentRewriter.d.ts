import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { JsonObject } from '../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { ComponentRewriterBase } from '../../../../../com/viaversion/viaversion/rewriter/text/ComponentRewriterBase.d.ts'
import type { ComponentRewriterBase$ReadType } from '../../../../../com/viaversion/viaversion/rewriter/text/ComponentRewriterBase$ReadType.d.ts'
import type { SerializerVersion } from '../../../../../com/viaversion/viaversion/util/SerializerVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class JsonNBTComponentRewriter<C extends ClientboundPacketType> extends ComponentRewriterBase<C> {
    constructor(arg0: Protocol<C, Object, Object, Object>, arg1: ComponentRewriterBase$ReadType)
    convertLegacyEntityContents(arg0: Map$Entry<string, Tag>[]): void;
    convertLegacyItemContents(arg0: Map$Entry<string, Tag>[]): void;
    handleHoverEvent(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    handleHoverEvent(arg0: UserConnection, arg1: JsonObject): void;
    handleNestedComponent(arg0: UserConnection, arg1: Tag): void;
    handleWrittenBookContents(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    hoverEventKey(): string;
    inputSerializerVersion(): SerializerVersion;
    outputSerializerVersion(): SerializerVersion;
    registerLegacyOpenWindow(arg0: C): void;
    registerPlayerChat(arg0: C, arg1: Type<Object>): void;
    registerPlayerCombat(arg0: C): void;
    registerPlayerCombatKill(arg0: C): void;
    registerPlayerInfoUpdate1_20_3(arg0: C): void;
    registerTitle(arg0: C): void;
}