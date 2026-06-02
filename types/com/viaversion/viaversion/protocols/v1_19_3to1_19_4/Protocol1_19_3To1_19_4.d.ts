import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPackets1_19_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_1to1_19_3/packet/ClientboundPackets1_19_3.d.ts'
import type { ServerboundPackets1_19_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_1to1_19_3/packet/ServerboundPackets1_19_3.d.ts'
import type { MappingData1_19_4 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/data/MappingData1_19_4.d.ts'
import type { ClientboundPackets1_19_4 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ClientboundPackets1_19_4.d.ts'
import type { ServerboundPackets1_19_4 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ServerboundPackets1_19_4.d.ts'
import type { EntityPacketRewriter1_19_4 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/rewriter/EntityPacketRewriter1_19_4.d.ts'
import type { ItemPacketRewriter1_19_4 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/rewriter/ItemPacketRewriter1_19_4.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_19_3To1_19_4 extends AbstractProtocol<ClientboundPackets1_19_3, ClientboundPackets1_19_4, ServerboundPackets1_19_3, ServerboundPackets1_19_4> {
    static MAPPINGS: MappingData1_19_4;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_19_3>;
    readonly entityRewriter: EntityPacketRewriter1_19_4;
    readonly itemRewriter: ItemPacketRewriter1_19_4;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_19_3>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_19_3>;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_19_3>;
    getEntityRewriter(): EntityPacketRewriter1_19_4;
    getItemRewriter(): ItemPacketRewriter1_19_4;
    getMappingData(): MappingData1_19_4;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_19_3>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_19_3>;
    init(arg0: UserConnection): void;
    onMappingDataLoaded(): void;
    registerPackets(): void;
}