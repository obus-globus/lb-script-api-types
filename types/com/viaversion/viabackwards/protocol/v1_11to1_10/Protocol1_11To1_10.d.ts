import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { BlockItemPacketRewriter1_11 } from '../../../../../com/viaversion/viabackwards/protocol/v1_11to1_10/rewriter/BlockItemPacketRewriter1_11.d.ts'
import type { EntityPacketRewriter1_11 } from '../../../../../com/viaversion/viabackwards/protocol/v1_11to1_10/rewriter/EntityPacketRewriter1_11.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
import type { ServerboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ServerboundPackets1_9_3.d.ts'
export class Protocol1_11To1_10 extends BackwardsProtocol<ClientboundPackets1_9_3, ClientboundPackets1_9_3, ServerboundPackets1_9_3, ServerboundPackets1_9_3> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    readonly componentRewriter: JsonNBTComponentRewriter<ClientboundPackets1_9_3>;
    readonly entityRewriter: EntityPacketRewriter1_11;
    readonly itemRewriter: BlockItemPacketRewriter1_11;
    getComponentRewriter(): JsonNBTComponentRewriter<ClientboundPackets1_9_3>;
    getEntityRewriter(): EntityPacketRewriter1_11;
    getItemRewriter(): BlockItemPacketRewriter1_11;
    getMappingData(): BackwardsMappingData;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}