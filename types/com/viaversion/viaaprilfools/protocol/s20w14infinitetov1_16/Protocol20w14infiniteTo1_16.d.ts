import type { ClientboundPackets20w14infinite } from '../../../../../com/viaversion/viaaprilfools/protocol/s20w14infinitetov1_16/packet/ClientboundPackets20w14infinite.d.ts'
import type { ServerboundPackets20w14infinite } from '../../../../../com/viaversion/viaaprilfools/protocol/s20w14infinitetov1_16/packet/ServerboundPackets20w14infinite.d.ts'
import type { BlockItemPacketRewriter20w14infinite } from '../../../../../com/viaversion/viaaprilfools/protocol/s20w14infinitetov1_16/rewriter/BlockItemPacketRewriter20w14infinite.d.ts'
import type { EntityPacketRewriter20w14infinite } from '../../../../../com/viaversion/viaaprilfools/protocol/s20w14infinitetov1_16/rewriter/EntityPacketRewriter20w14infinite.d.ts'
import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPackets1_16 } from '../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/packet/ClientboundPackets1_16.d.ts'
import type { ServerboundPackets1_16 } from '../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/packet/ServerboundPackets1_16.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol20w14infiniteTo1_16 extends BackwardsProtocol<ClientboundPackets20w14infinite, ClientboundPackets1_16, ServerboundPackets20w14infinite, ServerboundPackets1_16> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    readonly entityRewriter: EntityPacketRewriter20w14infinite;
    readonly itemRewriter: BlockItemPacketRewriter20w14infinite;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets20w14infinite>;
    readonly tagRewriter: TagRewriter<ClientboundPackets20w14infinite>;
    getEntityRewriter(): EntityPacketRewriter20w14infinite;
    getItemRewriter(): BlockItemPacketRewriter20w14infinite;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets20w14infinite>;
    init(arg0: UserConnection): void;
    onMappingDataLoaded(): void;
    registerPackets(): void;
}