import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { BlockItemPacketRewriter1_17 } from '../../../../../com/viaversion/viabackwards/protocol/v1_17to1_16_4/rewriter/BlockItemPacketRewriter1_17.d.ts'
import type { EntityPacketRewriter1_17 } from '../../../../../com/viaversion/viabackwards/protocol/v1_17to1_16_4/rewriter/EntityPacketRewriter1_17.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ProtocolStorablesBase } from '../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
import type { ClientboundPackets1_16_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/packet/ClientboundPackets1_16_2.d.ts'
import type { ServerboundPackets1_16_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/packet/ServerboundPackets1_16_2.d.ts'
import type { ClientboundPackets1_17 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ClientboundPackets1_17.d.ts'
import type { ServerboundPackets1_17 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ServerboundPackets1_17.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_17To1_16_4 extends BackwardsProtocol<ClientboundPackets1_17, ClientboundPackets1_16_2, ServerboundPackets1_17, ServerboundPackets1_16_2> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    // private blockItemPackets: BlockItemPacketRewriter1_17;
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_17>;
    readonly entityRewriter: EntityPacketRewriter1_17;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_17>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_17>;
    // private translatableRewriter: JsonNBTComponentRewriter<ClientboundPackets1_17>;
    createStorables(): ProtocolStorablesBase;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_17>;
    getComponentRewriter(): JsonNBTComponentRewriter<ClientboundPackets1_17>;
    getEntityRewriter(): EntityPacketRewriter1_17;
    getItemRewriter(): BlockItemPacketRewriter1_17;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_17>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_17>;
    init(arg0: UserConnection): void;
    mergePacket(arg0: ClientboundPackets1_17, arg1: ClientboundPackets1_16_2, arg2: number): void;
    registerPackets(): void;
    // private rewriteTitlePacket(arg0: ClientboundPackets1_17, arg1: number): void;
}