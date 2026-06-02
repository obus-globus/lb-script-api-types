import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPackets1_16_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/packet/ClientboundPackets1_16_2.d.ts'
import type { ServerboundPackets1_16_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/packet/ServerboundPackets1_16_2.d.ts'
import type { ClientboundPackets1_17 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ClientboundPackets1_17.d.ts'
import type { ServerboundPackets1_17 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ServerboundPackets1_17.d.ts'
import type { ComponentRewriter1_17 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/rewriter/ComponentRewriter1_17.d.ts'
import type { EntityPacketRewriter1_17 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/rewriter/EntityPacketRewriter1_17.d.ts'
import type { ItemPacketRewriter1_17 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/rewriter/ItemPacketRewriter1_17.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_16_4To1_17 extends AbstractProtocol<ClientboundPackets1_16_2, ClientboundPackets1_17, ServerboundPackets1_16_2, ServerboundPackets1_17> {
    static MAPPINGS: MappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_16_2>;
    readonly componentRewriter: ComponentRewriter1_17;
    readonly entityRewriter: EntityPacketRewriter1_17;
    readonly itemRewriter: ItemPacketRewriter1_17;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_16_2>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_16_2>;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_16_2>;
    getComponentRewriter(): ComponentRewriter1_17;
    getEntityRewriter(): EntityPacketRewriter1_17;
    getItemRewriter(): ItemPacketRewriter1_17;
    getMappingData(): MappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_16_2>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_16_2>;
    init(arg0: UserConnection): void;
    onMappingDataLoaded(): void;
    registerPackets(): void;
}