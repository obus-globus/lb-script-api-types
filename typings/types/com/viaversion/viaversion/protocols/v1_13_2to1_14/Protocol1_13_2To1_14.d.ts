import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPackets1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ClientboundPackets1_13.d.ts'
import type { ServerboundPackets1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ServerboundPackets1_13.d.ts'
import type { MappingData1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/data/MappingData1_14.d.ts'
import type { ClientboundPackets1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ClientboundPackets1_14.d.ts'
import type { ServerboundPackets1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ServerboundPackets1_14.d.ts'
import type { EntityPacketRewriter1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/rewriter/EntityPacketRewriter1_14.d.ts'
import type { ItemPacketRewriter1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/rewriter/ItemPacketRewriter1_14.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
import type { ProtocolLogger } from '../../../../../com/viaversion/viaversion/util/ProtocolLogger.d.ts'
export class Protocol1_13_2To1_14 extends AbstractProtocol<ClientboundPackets1_13, ClientboundPackets1_14, ServerboundPackets1_13, ServerboundPackets1_14> {
    static LOGGER: ProtocolLogger;
    static MAPPINGS: MappingData1_14;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_13>;
    readonly entityRewriter: EntityPacketRewriter1_14;
    readonly itemRewriter: ItemPacketRewriter1_14;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_13>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_13>;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_13>;
    getEntityRewriter(): EntityPacketRewriter1_14;
    getItemRewriter(): ItemPacketRewriter1_14;
    getLogger(): ProtocolLogger;
    getMappingData(): MappingData1_14;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_13>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_13>;
    init(arg0: UserConnection): void;
    onMappingDataLoaded(): void;
    registerPackets(): void;
}