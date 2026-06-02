import type { JsonNBTComponentRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { Protocol1_12To1_11_1 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_12to1_11_1/Protocol1_12To1_11_1.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { JsonElement } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { ClientboundPackets1_12 } from '../../../../../../com/viaversion/viaversion/protocols/v1_11_1to1_12/packet/ClientboundPackets1_12.d.ts'
export class ComponentRewriter1_12 extends JsonNBTComponentRewriter<ClientboundPackets1_12> {
    constructor(arg0: Protocol1_12To1_11_1)
    processText(arg0: UserConnection, arg1: JsonElement): void;
}