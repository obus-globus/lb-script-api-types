import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { BlockItemPacketRewriter1_16_2 } from '../../../../../com/viaversion/viabackwards/protocol/v1_16_2to1_16_1/rewriter/BlockItemPacketRewriter1_16_2.d.ts'
import type { EntityPacketRewriter1_16_2 } from '../../../../../com/viaversion/viabackwards/protocol/v1_16_2to1_16_1/rewriter/EntityPacketRewriter1_16_2.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ProtocolStorablesBase } from '../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
import type { ClientboundPackets1_16 } from '../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/packet/ClientboundPackets1_16.d.ts'
import type { ServerboundPackets1_16 } from '../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/packet/ServerboundPackets1_16.d.ts'
import type { ClientboundPackets1_16_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/packet/ClientboundPackets1_16_2.d.ts'
import type { ServerboundPackets1_16_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/packet/ServerboundPackets1_16_2.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
import type { ProtocolLogger } from '../../../../../com/viaversion/viaversion/util/ProtocolLogger.d.ts'
export class Protocol1_16_2To1_16_1 extends BackwardsProtocol<ClientboundPackets1_16_2, ClientboundPackets1_16, ServerboundPackets1_16_2, ServerboundPackets1_16> {
    static LOGGER: ProtocolLogger;
    static MAPPINGS: BackwardsMappingData;
    constructor()
    // private blockItemPackets: BlockItemPacketRewriter1_16_2;
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_16_2>;
    readonly entityRewriter: EntityPacketRewriter1_16_2;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_16_2>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_16_2>;
    // private translatableRewriter: JsonNBTComponentRewriter<ClientboundPackets1_16_2>;
    createStorables(): ProtocolStorablesBase;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_16_2>;
    getComponentRewriter(): JsonNBTComponentRewriter<ClientboundPackets1_16_2>;
    getEntityRewriter(): EntityPacketRewriter1_16_2;
    getItemRewriter(): BlockItemPacketRewriter1_16_2;
    getLogger(): ProtocolLogger;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_16_2>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_16_2>;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}