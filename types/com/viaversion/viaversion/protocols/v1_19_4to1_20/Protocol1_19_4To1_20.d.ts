import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPackets1_19_4 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ClientboundPackets1_19_4.d.ts'
import type { ServerboundPackets1_19_4 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ServerboundPackets1_19_4.d.ts'
import type { EntityPacketRewriter1_20 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_4to1_20/rewriter/EntityPacketRewriter1_20.d.ts'
import type { ItemPacketRewriter1_20 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_4to1_20/rewriter/ItemPacketRewriter1_20.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_19_4To1_20 extends AbstractProtocol<ClientboundPackets1_19_4, ClientboundPackets1_19_4, ServerboundPackets1_19_4, ServerboundPackets1_19_4> {
    static MAPPINGS: MappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_19_4>;
    readonly entityRewriter: EntityPacketRewriter1_20;
    readonly itemRewriter: ItemPacketRewriter1_20;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_19_4>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_19_4>;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_19_4>;
    getEntityRewriter(): EntityPacketRewriter1_20;
    getItemRewriter(): ItemPacketRewriter1_20;
    getMappingData(): MappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_19_4>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_19_4>;
    init(arg0: UserConnection): void;
    onMappingDataLoaded(): void;
    registerPackets(): void;
}