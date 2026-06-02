import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { ClientboundPackets1_16_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/packet/ClientboundPackets1_16_2.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/text/JsonNBTComponentRewriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ComponentRewriter1_17 extends JsonNBTComponentRewriter<ClientboundPackets1_16_2> {
    constructor(arg0: Protocol<ClientboundPackets1_16_2, Object, Object, Object>)
    // private mappings: { [key: string]: string };
    handleTranslate(arg0: JsonObject, arg1: string): void;
}