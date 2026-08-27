import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { BackwardsMappingData1_14 } from '../../../../../com/viaversion/viabackwards/protocol/v1_14to1_13_2/data/BackwardsMappingData1_14.d.ts'
import type { BlockItemPacketRewriter1_14 } from '../../../../../com/viaversion/viabackwards/protocol/v1_14to1_13_2/rewriter/BlockItemPacketRewriter1_14.d.ts'
import type { EntityPacketRewriter1_14 } from '../../../../../com/viaversion/viabackwards/protocol/v1_14to1_13_2/rewriter/EntityPacketRewriter1_14.d.ts'
import type { ProtocolStorables1_14 } from '../../../../../com/viaversion/viabackwards/protocol/v1_14to1_13_2/storage/ProtocolStorables1_14.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPackets1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ClientboundPackets1_13.d.ts'
import type { ServerboundPackets1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ServerboundPackets1_13.d.ts'
import type { ClientboundPackets1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ClientboundPackets1_14.d.ts'
import type { ServerboundPackets1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ServerboundPackets1_14.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_14To1_13_2 extends BackwardsProtocol<ClientboundPackets1_14, ClientboundPackets1_13, ServerboundPackets1_14, ServerboundPackets1_13> {
    static MAPPINGS: BackwardsMappingData1_14;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_14>;
    readonly entityRewriter: EntityPacketRewriter1_14;
    readonly itemRewriter: BlockItemPacketRewriter1_14;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_14>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_14>;
    // private translatableRewriter: JsonNBTComponentRewriter<ClientboundPackets1_14>;
    createStorables(): ProtocolStorables1_14;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_14>;
    getComponentRewriter(): JsonNBTComponentRewriter<ClientboundPackets1_14>;
    getEntityRewriter(): EntityPacketRewriter1_14;
    getItemRewriter(): BlockItemPacketRewriter1_14;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_14>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_14>;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}