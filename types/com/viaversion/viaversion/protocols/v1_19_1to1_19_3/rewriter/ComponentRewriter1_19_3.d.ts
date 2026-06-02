import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { ClientboundPackets1_19_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19to1_19_1/packet/ClientboundPackets1_19_1.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/text/JsonNBTComponentRewriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ComponentRewriter1_19_3 extends JsonNBTComponentRewriter<ClientboundPackets1_19_1> {
    constructor(arg0: Protocol<ClientboundPackets1_19_1, Object, Object, Object>)
    handleTranslate(arg0: JsonObject, arg1: string): void;
}