import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPackets1_19_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_1to1_19_3/packet/ClientboundPackets1_19_3.d.ts'
import type { ServerboundPackets1_19_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_1to1_19_3/packet/ServerboundPackets1_19_3.d.ts'
import type { ComponentRewriter1_19_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_1to1_19_3/rewriter/ComponentRewriter1_19_3.d.ts'
import type { EntityPacketRewriter1_19_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_1to1_19_3/rewriter/EntityPacketRewriter1_19_3.d.ts'
import type { ItemPacketRewriter1_19_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_1to1_19_3/rewriter/ItemPacketRewriter1_19_3.d.ts'
import type { ClientboundPackets1_19_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_19to1_19_1/packet/ClientboundPackets1_19_1.d.ts'
import type { ServerboundPackets1_19_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_19to1_19_1/packet/ServerboundPackets1_19_1.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_19_1To1_19_3 extends AbstractProtocol<ClientboundPackets1_19_1, ClientboundPackets1_19_3, ServerboundPackets1_19_1, ServerboundPackets1_19_3> {
    static MAPPINGS: MappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_19_1>;
    readonly componentRewriter: ComponentRewriter1_19_3;
    readonly entityRewriter: EntityPacketRewriter1_19_3;
    readonly itemRewriter: ItemPacketRewriter1_19_3;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_19_1>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_19_1>;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_19_1>;
    getComponentRewriter(): ComponentRewriter1_19_3;
    getEntityRewriter(): EntityPacketRewriter1_19_3;
    getItemRewriter(): ItemPacketRewriter1_19_3;
    getMappingData(): MappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_19_1>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_19_1>;
    init(arg0: UserConnection): void;
    onMappingDataLoaded(): void;
    registerPackets(): void;
}