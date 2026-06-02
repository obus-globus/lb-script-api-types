import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { EntityPacketRewriter1_11_1 } from '../../../../../com/viaversion/viabackwards/protocol/v1_11_1to1_11/rewriter/EntityPacketRewriter1_11_1.d.ts'
import type { ItemPacketRewriter1_11_1 } from '../../../../../com/viaversion/viabackwards/protocol/v1_11_1to1_11/rewriter/ItemPacketRewriter1_11_1.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
import type { ServerboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ServerboundPackets1_9_3.d.ts'
export class Protocol1_11_1To1_11 extends BackwardsProtocol<ClientboundPackets1_9_3, ClientboundPackets1_9_3, ServerboundPackets1_9_3, ServerboundPackets1_9_3> {
    constructor()
    readonly entityRewriter: EntityPacketRewriter1_11_1;
    readonly itemRewriter: ItemPacketRewriter1_11_1;
    getEntityRewriter(): EntityPacketRewriter1_11_1;
    getItemRewriter(): ItemPacketRewriter1_11_1;
    init(arg0: UserConnection): void;
}