import type { BackwardsStructuredItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsStructuredItemRewriter.d.ts'
import type { Protocol1_21_7To1_21_6 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_7to1_21_6/Protocol1_21_7To1_21_6.d.ts'
import type { ClientboundPacket1_21_6 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ClientboundPacket1_21_6.d.ts'
import type { ServerboundPacket1_21_6 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ServerboundPacket1_21_6.d.ts'
export class BlockItemPacketRewriter1_21_7 extends BackwardsStructuredItemRewriter<ClientboundPacket1_21_6, ServerboundPacket1_21_6, Protocol1_21_7To1_21_6> {
    static MARKER_KEY: string;
    constructor(arg0: Protocol1_21_7To1_21_6)
}