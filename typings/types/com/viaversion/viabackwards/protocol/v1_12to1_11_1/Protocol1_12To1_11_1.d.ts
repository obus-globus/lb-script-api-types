import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { BlockItemPacketRewriter1_12 } from '../../../../../com/viaversion/viabackwards/protocol/v1_12to1_11_1/rewriter/BlockItemPacketRewriter1_12.d.ts'
import type { ComponentRewriter1_12 } from '../../../../../com/viaversion/viabackwards/protocol/v1_12to1_11_1/rewriter/ComponentRewriter1_12.d.ts'
import type { EntityPacketRewriter1_12 } from '../../../../../com/viaversion/viabackwards/protocol/v1_12to1_11_1/rewriter/EntityPacketRewriter1_12.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPackets1_12 } from '../../../../../com/viaversion/viaversion/protocols/v1_11_1to1_12/packet/ClientboundPackets1_12.d.ts'
import type { ServerboundPackets1_12 } from '../../../../../com/viaversion/viaversion/protocols/v1_11_1to1_12/packet/ServerboundPackets1_12.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
import type { ServerboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ServerboundPackets1_9_3.d.ts'
export class Protocol1_12To1_11_1 extends BackwardsProtocol<ClientboundPackets1_12, ClientboundPackets1_9_3, ServerboundPackets1_12, ServerboundPackets1_9_3> {
    constructor()
    readonly componentRewriter: ComponentRewriter1_12;
    readonly entityRewriter: EntityPacketRewriter1_12;
    readonly itemRewriter: BlockItemPacketRewriter1_12;
    getComponentRewriter(): ComponentRewriter1_12;
    getEntityRewriter(): EntityPacketRewriter1_12;
    getItemRewriter(): BlockItemPacketRewriter1_12;
    getMappingData(): BackwardsMappingData;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}