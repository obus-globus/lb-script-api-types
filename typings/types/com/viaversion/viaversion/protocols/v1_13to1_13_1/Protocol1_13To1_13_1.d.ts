import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPackets1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ClientboundPackets1_13.d.ts'
import type { ServerboundPackets1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ServerboundPackets1_13.d.ts'
import type { EntityPacketRewriter1_13_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_13to1_13_1/rewriter/EntityPacketRewriter1_13_1.d.ts'
import type { ItemPacketRewriter1_13_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_13to1_13_1/rewriter/ItemPacketRewriter1_13_1.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_13To1_13_1 extends AbstractProtocol<ClientboundPackets1_13, ClientboundPackets1_13, ServerboundPackets1_13, ServerboundPackets1_13> {
    static MAPPINGS: MappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_13>;
    readonly entityRewriter: EntityPacketRewriter1_13_1;
    readonly itemRewriter: ItemPacketRewriter1_13_1;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_13>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_13>;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_13>;
    getEntityRewriter(): EntityPacketRewriter1_13_1;
    getItemRewriter(): ItemPacketRewriter1_13_1;
    getMappingData(): MappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_13>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_13>;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}