import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { BlockItemPacketRewriter1_10 } from '../../../../../com/viaversion/viabackwards/protocol/v1_10to1_9_3/rewriter/BlockItemPacketRewriter1_10.d.ts'
import type { EntityPacketRewriter1_10 } from '../../../../../com/viaversion/viabackwards/protocol/v1_10to1_9_3/rewriter/EntityPacketRewriter1_10.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
import type { ServerboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ServerboundPackets1_9_3.d.ts'
export class Protocol1_10To1_9_3 extends BackwardsProtocol<ClientboundPackets1_9_3, ClientboundPackets1_9_3, ServerboundPackets1_9_3, ServerboundPackets1_9_3> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    readonly entityRewriter: EntityPacketRewriter1_10;
    readonly itemRewriter: BlockItemPacketRewriter1_10;
    getEntityRewriter(): EntityPacketRewriter1_10;
    getItemRewriter(): BlockItemPacketRewriter1_10;
    getMappingData(): BackwardsMappingData;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}