import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { BackwardsMappingData1_18 } from '../../../../../com/viaversion/viabackwards/protocol/v1_18to1_17_1/data/BackwardsMappingData1_18.d.ts'
import type { BlockItemPacketRewriter1_18 } from '../../../../../com/viaversion/viabackwards/protocol/v1_18to1_17_1/rewriter/BlockItemPacketRewriter1_18.d.ts'
import type { EntityPacketRewriter1_18 } from '../../../../../com/viaversion/viabackwards/protocol/v1_18to1_17_1/rewriter/EntityPacketRewriter1_18.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { ServerboundPackets1_17 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ServerboundPackets1_17.d.ts'
import type { ClientboundPackets1_18 } from '../../../../../com/viaversion/viaversion/protocols/v1_17_1to1_18/packet/ClientboundPackets1_18.d.ts'
import type { ClientboundPackets1_17_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_17to1_17_1/packet/ClientboundPackets1_17_1.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_18To1_17_1 extends BackwardsProtocol<ClientboundPackets1_18, ClientboundPackets1_17_1, ServerboundPackets1_17, ServerboundPackets1_17> {
    constructor()
    readonly entityRewriter: EntityPacketRewriter1_18;
    readonly itemRewriter: BlockItemPacketRewriter1_18;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_18>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_18>;
    // private translatableRewriter: JsonNBTComponentRewriter<ClientboundPackets1_18>;
    // private cutName(arg0: number, arg1: number): (param0: PacketWrapper) => void;
    getComponentRewriter(): JsonNBTComponentRewriter<ClientboundPackets1_18>;
    getEntityRewriter(): EntityPacketRewriter1_18;
    getItemRewriter(): BlockItemPacketRewriter1_18;
    getMappingData(): BackwardsMappingData1_18;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_18>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_18>;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}