import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { BackwardsMappingData1_20 } from '../../../../../com/viaversion/viabackwards/protocol/v1_20to1_19_4/data/BackwardsMappingData1_20.d.ts'
import type { BlockItemPacketRewriter1_20 } from '../../../../../com/viaversion/viabackwards/protocol/v1_20to1_19_4/rewriter/BlockItemPacketRewriter1_20.d.ts'
import type { EntityPacketRewriter1_20 } from '../../../../../com/viaversion/viabackwards/protocol/v1_20to1_19_4/rewriter/EntityPacketRewriter1_20.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPackets1_19_4 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ClientboundPackets1_19_4.d.ts'
import type { ServerboundPackets1_19_4 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ServerboundPackets1_19_4.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_20To1_19_4 extends BackwardsProtocol<ClientboundPackets1_19_4, ClientboundPackets1_19_4, ServerboundPackets1_19_4, ServerboundPackets1_19_4> {
    static MAPPINGS: BackwardsMappingData1_20;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_19_4>;
    readonly entityRewriter: EntityPacketRewriter1_20;
    readonly itemRewriter: BlockItemPacketRewriter1_20;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_19_4>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_19_4>;
    // private translatableRewriter: JsonNBTComponentRewriter<ClientboundPackets1_19_4>;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_19_4>;
    getComponentRewriter(): JsonNBTComponentRewriter<ClientboundPackets1_19_4>;
    getEntityRewriter(): EntityPacketRewriter1_20;
    getItemRewriter(): BlockItemPacketRewriter1_20;
    getMappingData(): BackwardsMappingData1_20;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_19_4>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_19_4>;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}