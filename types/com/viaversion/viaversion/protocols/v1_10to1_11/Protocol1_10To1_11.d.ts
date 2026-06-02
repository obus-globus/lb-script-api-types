import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { EntityPacketRewriter1_11 } from '../../../../../com/viaversion/viaversion/protocols/v1_10to1_11/rewriter/EntityPacketRewriter1_11.d.ts'
import type { ItemPacketRewriter1_11 } from '../../../../../com/viaversion/viaversion/protocols/v1_10to1_11/rewriter/ItemPacketRewriter1_11.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
import type { ServerboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ServerboundPackets1_9_3.d.ts'
export class Protocol1_10To1_11 extends AbstractProtocol<ClientboundPackets1_9_3, ClientboundPackets1_9_3, ServerboundPackets1_9_3, ServerboundPackets1_9_3> {
    constructor()
    readonly entityRewriter: EntityPacketRewriter1_11;
    readonly itemRewriter: ItemPacketRewriter1_11;
    getEntityRewriter(): EntityPacketRewriter1_11;
    getItemRewriter(): ItemPacketRewriter1_11;
    // private getNewSoundId(arg0: number): number;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}