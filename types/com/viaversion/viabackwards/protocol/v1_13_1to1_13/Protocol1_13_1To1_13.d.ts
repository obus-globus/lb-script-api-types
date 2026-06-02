import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { EntityPacketRewriter1_13_1 } from '../../../../../com/viaversion/viabackwards/protocol/v1_13_1to1_13/rewriter/EntityPacketRewriter1_13_1.d.ts'
import type { ItemPacketRewriter1_13_1 } from '../../../../../com/viaversion/viabackwards/protocol/v1_13_1to1_13/rewriter/ItemPacketRewriter1_13_1.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPackets1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ClientboundPackets1_13.d.ts'
import type { ServerboundPackets1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ServerboundPackets1_13.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_13_1To1_13 extends BackwardsProtocol<ClientboundPackets1_13, ClientboundPackets1_13, ServerboundPackets1_13, ServerboundPackets1_13> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    readonly entityRewriter: EntityPacketRewriter1_13_1;
    readonly itemRewriter: ItemPacketRewriter1_13_1;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_13>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_13>;
    // private translatableRewriter: JsonNBTComponentRewriter<ClientboundPackets1_13>;
    getComponentRewriter(): JsonNBTComponentRewriter<ClientboundPackets1_13>;
    getEntityRewriter(): EntityPacketRewriter1_13_1;
    getItemRewriter(): ItemPacketRewriter1_13_1;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_13>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_13>;
    init(arg0: UserConnection): void;
    registerPackets(): void;
    translatableRewriter(): JsonNBTComponentRewriter<ClientboundPackets1_13>;
}