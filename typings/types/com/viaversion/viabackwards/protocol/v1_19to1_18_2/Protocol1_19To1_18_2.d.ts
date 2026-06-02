import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { BackwardsMappingData1_19 } from '../../../../../com/viaversion/viabackwards/protocol/v1_19to1_18_2/data/BackwardsMappingData1_19.d.ts'
import type { BlockItemPacketRewriter1_19 } from '../../../../../com/viaversion/viabackwards/protocol/v1_19to1_18_2/rewriter/BlockItemPacketRewriter1_19.d.ts'
import type { EntityPacketRewriter1_19 } from '../../../../../com/viaversion/viabackwards/protocol/v1_19to1_18_2/rewriter/EntityPacketRewriter1_19.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ServerboundPackets1_17 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ServerboundPackets1_17.d.ts'
import type { ClientboundPackets1_18 } from '../../../../../com/viaversion/viaversion/protocols/v1_17_1to1_18/packet/ClientboundPackets1_18.d.ts'
import type { ClientboundPackets1_19 } from '../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/packet/ClientboundPackets1_19.d.ts'
import type { ServerboundPackets1_19 } from '../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/packet/ServerboundPackets1_19.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_19To1_18_2 extends BackwardsProtocol<ClientboundPackets1_19, ClientboundPackets1_18, ServerboundPackets1_19, ServerboundPackets1_17> {
    static MAPPINGS: BackwardsMappingData1_19;
    constructor()
    // private blockItemPackets: BlockItemPacketRewriter1_19;
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_19>;
    readonly entityRewriter: EntityPacketRewriter1_19;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_19>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_19>;
    // private translatableRewriter: JsonNBTComponentRewriter<ClientboundPackets1_19>;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_19>;
    getComponentRewriter(): JsonNBTComponentRewriter<ClientboundPackets1_19>;
    getEntityRewriter(): EntityPacketRewriter1_19;
    getItemRewriter(): BlockItemPacketRewriter1_19;
    getMappingData(): BackwardsMappingData1_19;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_19>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_19>;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}