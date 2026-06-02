import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { BlockItemPacketRewriter1_15 } from '../../../../../com/viaversion/viabackwards/protocol/v1_15to1_14_4/rewriter/BlockItemPacketRewriter1_15.d.ts'
import type { EntityPacketRewriter1_15 } from '../../../../../com/viaversion/viabackwards/protocol/v1_15to1_14_4/rewriter/EntityPacketRewriter1_15.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ServerboundPackets1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ServerboundPackets1_14.d.ts'
import type { ClientboundPackets1_14_4 } from '../../../../../com/viaversion/viaversion/protocols/v1_14_3to1_14_4/packet/ClientboundPackets1_14_4.d.ts'
import type { ClientboundPackets1_15 } from '../../../../../com/viaversion/viaversion/protocols/v1_14_4to1_15/packet/ClientboundPackets1_15.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_15To1_14_4 extends BackwardsProtocol<ClientboundPackets1_15, ClientboundPackets1_14_4, ServerboundPackets1_14, ServerboundPackets1_14> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    // private blockItemPackets: BlockItemPacketRewriter1_15;
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_15>;
    readonly entityRewriter: EntityPacketRewriter1_15;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_15>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_15>;
    // private translatableRewriter: JsonNBTComponentRewriter<ClientboundPackets1_15>;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_15>;
    getComponentRewriter(): JsonNBTComponentRewriter<ClientboundPackets1_15>;
    getEntityRewriter(): EntityPacketRewriter1_15;
    getItemRewriter(): BlockItemPacketRewriter1_15;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_15>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_15>;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}