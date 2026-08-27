import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ProtocolStorablesBase } from '../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
import type { ServerboundPackets1_17 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ServerboundPackets1_17.d.ts'
import type { ClientboundPackets1_18 } from '../../../../../com/viaversion/viaversion/protocols/v1_17_1to1_18/packet/ClientboundPackets1_18.d.ts'
import type { ComponentRewriter1_18 } from '../../../../../com/viaversion/viaversion/protocols/v1_17_1to1_18/rewriter/ComponentRewriter1_18.d.ts'
import type { EntityPacketRewriter1_18 } from '../../../../../com/viaversion/viaversion/protocols/v1_17_1to1_18/rewriter/EntityPacketRewriter1_18.d.ts'
import type { ItemPacketRewriter1_18 } from '../../../../../com/viaversion/viaversion/protocols/v1_17_1to1_18/rewriter/ItemPacketRewriter1_18.d.ts'
import type { ClientboundPackets1_17_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_17to1_17_1/packet/ClientboundPackets1_17_1.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
import type { ProtocolLogger } from '../../../../../com/viaversion/viaversion/util/ProtocolLogger.d.ts'
export class Protocol1_17_1To1_18 extends AbstractProtocol<ClientboundPackets1_17_1, ClientboundPackets1_18, ServerboundPackets1_17, ServerboundPackets1_17> {
    static LOGGER: ProtocolLogger;
    static MAPPINGS: MappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_17_1>;
    readonly componentRewriter: ComponentRewriter1_18;
    readonly entityRewriter: EntityPacketRewriter1_18;
    readonly itemRewriter: ItemPacketRewriter1_18;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_17_1>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_17_1>;
    createStorables(): ProtocolStorablesBase;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_17_1>;
    getComponentRewriter(): ComponentRewriter1_18;
    getEntityRewriter(): EntityPacketRewriter1_18;
    getItemRewriter(): ItemPacketRewriter1_18;
    getLogger(): ProtocolLogger;
    getMappingData(): MappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_17_1>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_17_1>;
    init(arg0: UserConnection): void;
    onMappingDataLoaded(): void;
    registerPackets(): void;
}