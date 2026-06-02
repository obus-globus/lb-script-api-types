import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { ClientboundPackets1_18 } from '../../../../../../com/viaversion/viaversion/protocols/v1_17_1to1_18/packet/ClientboundPackets1_18.d.ts'
import type { Protocol1_18_2To1_19 } from '../../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/Protocol1_18_2To1_19.d.ts'
import type { ServerboundPackets1_19 } from '../../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/packet/ServerboundPackets1_19.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
export class ItemPacketRewriter1_19 extends ItemRewriter<ClientboundPackets1_18, ServerboundPackets1_19, Protocol1_18_2To1_19> {
    constructor(arg0: Protocol1_18_2To1_19)
    registerPackets(): void;
    // private sequenceHandler(): (param0: PacketWrapper) => void;
}