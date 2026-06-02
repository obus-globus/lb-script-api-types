import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { ClientboundPacket1_20_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/packet/ClientboundPacket1_20_3.d.ts'
import type { ServerboundPacket1_20_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/packet/ServerboundPacket1_20_3.d.ts'
import type { BlockItemPacketRewriter1_20_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/rewriter/BlockItemPacketRewriter1_20_3.d.ts'
import type { EntityPacketRewriter1_20_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/rewriter/EntityPacketRewriter1_20_3.d.ts'
import type { ClientboundPacket1_20_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/packet/ClientboundPacket1_20_2.d.ts'
import type { ServerboundPacket1_20_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/packet/ServerboundPacket1_20_2.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_20_2To1_20_3 extends AbstractProtocol<ClientboundPacket1_20_2, ClientboundPacket1_20_3, ServerboundPacket1_20_2, ServerboundPacket1_20_3> {
    static MAPPINGS: MappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPacket1_20_2>;
    readonly entityRewriter: EntityPacketRewriter1_20_3;
    readonly itemRewriter: BlockItemPacketRewriter1_20_3;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket1_20_2>;
    readonly tagRewriter: TagRewriter<ClientboundPacket1_20_2>;
    // private convertComponent(arg0: PacketWrapper): void;
    // private convertOptionalComponent(arg0: PacketWrapper): void;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket1_20_2, ClientboundPacket1_20_3, ServerboundPacket1_20_2, ServerboundPacket1_20_3>;
    getBlockRewriter(): BlockRewriter<ClientboundPacket1_20_2>;
    getEntityRewriter(): EntityPacketRewriter1_20_3;
    getItemRewriter(): BlockItemPacketRewriter1_20_3;
    getMappingData(): MappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket1_20_2>;
    getTagRewriter(): TagRewriter<ClientboundPacket1_20_2>;
    init(arg0: UserConnection): void;
    onMappingDataLoaded(): void;
    registerPackets(): void;
    // private resourcePackHandler(arg0: ClientboundPacketType): (param0: PacketWrapper) => void;
    // private resourcePackStatusHandler(): (param0: PacketWrapper) => void;
}