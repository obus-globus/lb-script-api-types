import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ServerboundPackets1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ServerboundPackets1_14.d.ts'
import type { ClientboundPackets1_14_4 } from '../../../../../com/viaversion/viaversion/protocols/v1_14_3to1_14_4/packet/ClientboundPackets1_14_4.d.ts'
import type { ClientboundPackets1_15 } from '../../../../../com/viaversion/viaversion/protocols/v1_14_4to1_15/packet/ClientboundPackets1_15.d.ts'
import type { EntityPacketRewriter1_15 } from '../../../../../com/viaversion/viaversion/protocols/v1_14_4to1_15/rewriter/EntityPacketRewriter1_15.d.ts'
import type { ItemPacketRewriter1_15 } from '../../../../../com/viaversion/viaversion/protocols/v1_14_4to1_15/rewriter/ItemPacketRewriter1_15.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_14_4To1_15 extends AbstractProtocol<ClientboundPackets1_14_4, ClientboundPackets1_15, ServerboundPackets1_14, ServerboundPackets1_14> {
    static MAPPINGS: MappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_14_4>;
    readonly entityRewriter: EntityPacketRewriter1_15;
    readonly itemRewriter: ItemPacketRewriter1_15;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_14_4>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_14_4>;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_14_4>;
    getEntityRewriter(): EntityPacketRewriter1_15;
    getItemRewriter(): ItemPacketRewriter1_15;
    getMappingData(): MappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_14_4>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_14_4>;
    init(arg0: UserConnection): void;
    onMappingDataLoaded(): void;
    registerPackets(): void;
}