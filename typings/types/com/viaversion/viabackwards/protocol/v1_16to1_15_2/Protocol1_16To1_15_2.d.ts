import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData1_16 } from '../../../../../com/viaversion/viabackwards/protocol/v1_16to1_15_2/data/BackwardsMappingData1_16.d.ts'
import type { BlockItemPacketRewriter1_16 } from '../../../../../com/viaversion/viabackwards/protocol/v1_16to1_15_2/rewriter/BlockItemPacketRewriter1_16.d.ts'
import type { EntityPacketRewriter1_16 } from '../../../../../com/viaversion/viabackwards/protocol/v1_16to1_15_2/rewriter/EntityPacketRewriter1_16.d.ts'
import type { TranslatableRewriter1_16 } from '../../../../../com/viaversion/viabackwards/protocol/v1_16to1_15_2/rewriter/TranslatableRewriter1_16.d.ts'
import type { ProtocolStorables1_16 } from '../../../../../com/viaversion/viabackwards/protocol/v1_16to1_15_2/storage/ProtocolStorables1_16.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ServerboundPackets1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ServerboundPackets1_14.d.ts'
import type { ClientboundPackets1_15 } from '../../../../../com/viaversion/viaversion/protocols/v1_14_4to1_15/packet/ClientboundPackets1_15.d.ts'
import type { ClientboundPackets1_16 } from '../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/packet/ClientboundPackets1_16.d.ts'
import type { ServerboundPackets1_16 } from '../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/packet/ServerboundPackets1_16.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_16To1_15_2 extends BackwardsProtocol<ClientboundPackets1_16, ClientboundPackets1_15, ServerboundPackets1_16, ServerboundPackets1_14> {
    static MAPPINGS: BackwardsMappingData1_16;
    constructor()
    // private blockItemPackets: BlockItemPacketRewriter1_16;
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_16>;
    readonly entityRewriter: EntityPacketRewriter1_16;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_16>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_16>;
    // private translatableRewriter: TranslatableRewriter1_16;
    createStorables(): ProtocolStorables1_16;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_16>;
    getComponentRewriter(): TranslatableRewriter1_16;
    getEntityRewriter(): EntityPacketRewriter1_16;
    getItemRewriter(): BlockItemPacketRewriter1_16;
    getMappingData(): BackwardsMappingData1_16;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_16>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_16>;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}