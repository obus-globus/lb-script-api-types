import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { BlockItemPacketRewriter1_19_3 } from '../../../../../com/viaversion/viabackwards/protocol/v1_19_3to1_19_1/rewriter/BlockItemPacketRewriter1_19_3.d.ts'
import type { EntityPacketRewriter1_19_3 } from '../../../../../com/viaversion/viabackwards/protocol/v1_19_3to1_19_1/rewriter/EntityPacketRewriter1_19_3.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ClientboundPackets1_19_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_1to1_19_3/packet/ClientboundPackets1_19_3.d.ts'
import type { ServerboundPackets1_19_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_1to1_19_3/packet/ServerboundPackets1_19_3.d.ts'
import type { ClientboundPackets1_19_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_19to1_19_1/packet/ClientboundPackets1_19_1.d.ts'
import type { ServerboundPackets1_19_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_19to1_19_1/packet/ServerboundPackets1_19_1.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_19_3To1_19_1 extends BackwardsProtocol<ClientboundPackets1_19_3, ClientboundPackets1_19_1, ServerboundPackets1_19_3, ServerboundPackets1_19_1> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_19_3>;
    readonly entityRewriter: EntityPacketRewriter1_19_3;
    readonly itemRewriter: BlockItemPacketRewriter1_19_3;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_19_3>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_19_3>;
    // private translatableRewriter: JsonNBTComponentRewriter<ClientboundPackets1_19_3>;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_19_3>;
    getComponentRewriter(): JsonNBTComponentRewriter<ClientboundPackets1_19_3>;
    getEntityRewriter(): EntityPacketRewriter1_19_3;
    getItemRewriter(): BlockItemPacketRewriter1_19_3;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_19_3>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_19_3>;
    init(arg0: UserConnection): void;
    registerPackets(): void;
    // private rewriteSound(arg0: PacketWrapper): string;
}