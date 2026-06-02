import type { LegacyBlockItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/LegacyBlockItemRewriter.d.ts'
import type { Protocol1_10To1_9_3 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_10to1_9_3/Protocol1_10To1_9_3.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
import type { ServerboundPackets1_9_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ServerboundPackets1_9_3.d.ts'
export class BlockItemPacketRewriter1_10 extends LegacyBlockItemRewriter<ClientboundPackets1_9_3, ServerboundPackets1_9_3, Protocol1_10To1_9_3> {
    constructor(arg0: Protocol1_10To1_9_3)
    registerPackets(): void;
}