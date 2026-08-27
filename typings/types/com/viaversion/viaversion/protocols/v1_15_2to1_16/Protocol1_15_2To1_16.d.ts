import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { ViaProviders } from '../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ServerboundPackets1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ServerboundPackets1_14.d.ts'
import type { ClientboundPackets1_15 } from '../../../../../com/viaversion/viaversion/protocols/v1_14_4to1_15/packet/ClientboundPackets1_15.d.ts'
import type { ClientboundPackets1_16 } from '../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/packet/ClientboundPackets1_16.d.ts'
import type { ServerboundPackets1_16 } from '../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/packet/ServerboundPackets1_16.d.ts'
import type { ComponentRewriter1_16 } from '../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/rewriter/ComponentRewriter1_16.d.ts'
import type { EntityPacketRewriter1_16 } from '../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/rewriter/EntityPacketRewriter1_16.d.ts'
import type { ItemPacketRewriter1_16 } from '../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/rewriter/ItemPacketRewriter1_16.d.ts'
import type { ProtocolStorables1_16 } from '../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/storage/ProtocolStorables1_16.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_15_2To1_16 extends AbstractProtocol<ClientboundPackets1_15, ClientboundPackets1_16, ServerboundPackets1_14, ServerboundPackets1_16> {
    static MAPPINGS: MappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_15>;
    readonly componentRewriter: ComponentRewriter1_16;
    readonly entityRewriter: EntityPacketRewriter1_16;
    readonly itemRewriter: ItemPacketRewriter1_16;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_15>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_15>;
    createStorables(): ProtocolStorables1_16;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_15>;
    getComponentRewriter(): ComponentRewriter1_16;
    getEntityRewriter(): EntityPacketRewriter1_16;
    getItemRewriter(): ItemPacketRewriter1_16;
    getMappingData(): MappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_15>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_15>;
    init(arg0: UserConnection): void;
    onMappingDataLoaded(): void;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
}