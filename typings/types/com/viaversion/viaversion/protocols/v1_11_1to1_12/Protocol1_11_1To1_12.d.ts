import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ViaProviders } from '../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPackets1_12 } from '../../../../../com/viaversion/viaversion/protocols/v1_11_1to1_12/packet/ClientboundPackets1_12.d.ts'
import type { ServerboundPackets1_12 } from '../../../../../com/viaversion/viaversion/protocols/v1_11_1to1_12/packet/ServerboundPackets1_12.d.ts'
import type { EntityPacketRewriter1_12 } from '../../../../../com/viaversion/viaversion/protocols/v1_11_1to1_12/rewriter/EntityPacketRewriter1_12.d.ts'
import type { ItemPacketRewriter1_12 } from '../../../../../com/viaversion/viaversion/protocols/v1_11_1to1_12/rewriter/ItemPacketRewriter1_12.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
import type { ServerboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ServerboundPackets1_9_3.d.ts'
export class Protocol1_11_1To1_12 extends AbstractProtocol<ClientboundPackets1_9_3, ClientboundPackets1_12, ServerboundPackets1_9_3, ServerboundPackets1_12> {
    constructor()
    readonly entityRewriter: EntityPacketRewriter1_12;
    readonly itemRewriter: ItemPacketRewriter1_12;
    getEntityRewriter(): EntityPacketRewriter1_12;
    getItemRewriter(): ItemPacketRewriter1_12;
    // private getNewSoundId(arg0: number): number;
    init(arg0: UserConnection): void;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
}