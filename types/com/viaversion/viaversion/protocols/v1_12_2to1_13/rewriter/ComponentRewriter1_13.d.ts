import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/text/JsonNBTComponentRewriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ComponentRewriter1_13<C extends ClientboundPacketType> extends JsonNBTComponentRewriter<C> {
    constructor(arg0: Protocol<C, Object, Object, Object>)
    handleHoverEvent(arg0: UserConnection, arg1: JsonObject): void;
    handleTranslate(arg0: JsonObject, arg1: string): void;
}