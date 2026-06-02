import type { ClientboundPacket1_21_6 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ClientboundPacket1_21_6.d.ts'
import type { ServerboundPacket1_21_6 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ServerboundPacket1_21_6.d.ts'
import type { Protocol1_21_6To1_21_7 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_6to1_21_7/Protocol1_21_6To1_21_7.d.ts'
import type { StructuredItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/StructuredItemRewriter.d.ts'
export class BlockItemPacketRewriter1_21_7 extends StructuredItemRewriter<ClientboundPacket1_21_6, ServerboundPacket1_21_6, Protocol1_21_6To1_21_7> {
    static MARKER_KEY: string;
    constructor(arg0: Protocol1_21_6To1_21_7)
}