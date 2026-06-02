import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPackets1_16 } from '../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/packet/ClientboundPackets1_16.d.ts'
import type { ServerboundPackets1_16 } from '../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/packet/ServerboundPackets1_16.d.ts'
import type { MappingData1_16_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/data/MappingData1_16_2.d.ts'
import type { ClientboundPackets1_16_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/packet/ClientboundPackets1_16_2.d.ts'
import type { ServerboundPackets1_16_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/packet/ServerboundPackets1_16_2.d.ts'
import type { EntityPacketRewriter1_16_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/rewriter/EntityPacketRewriter1_16_2.d.ts'
import type { ItemPacketRewriter1_16_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/rewriter/ItemPacketRewriter1_16_2.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_16_1To1_16_2 extends AbstractProtocol<ClientboundPackets1_16, ClientboundPackets1_16_2, ServerboundPackets1_16, ServerboundPackets1_16_2> {
    static MAPPINGS: MappingData1_16_2;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_16>;
    readonly entityRewriter: EntityPacketRewriter1_16_2;
    readonly itemRewriter: ItemPacketRewriter1_16_2;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_16>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_16>;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_16>;
    getEntityRewriter(): EntityPacketRewriter1_16_2;
    getItemRewriter(): ItemPacketRewriter1_16_2;
    getMappingData(): MappingData1_16_2;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_16>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_16>;
    init(arg0: UserConnection): void;
    onMappingDataLoaded(): void;
    registerPackets(): void;
}