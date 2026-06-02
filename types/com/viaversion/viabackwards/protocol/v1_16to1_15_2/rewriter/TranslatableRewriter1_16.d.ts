import type { JsonNBTComponentRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { Protocol1_16To1_15_2 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_16to1_15_2/Protocol1_16To1_15_2.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { JsonElement } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { ClientboundPackets1_16 } from '../../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/packet/ClientboundPackets1_16.d.ts'
export class TranslatableRewriter1_16 extends JsonNBTComponentRewriter<ClientboundPackets1_16> {
    constructor(arg0: Protocol1_16To1_15_2)
    // private getClosestChatColor(arg0: number): string;
    processText(arg0: UserConnection, arg1: JsonElement): void;
}