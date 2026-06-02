import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { BlockItemPacketRewriter1_20_3 } from '../../../../../com/viaversion/viabackwards/protocol/v1_20_3to1_20_2/rewriter/BlockItemPacketRewriter1_20_3.d.ts'
import type { EntityPacketRewriter1_20_3 } from '../../../../../com/viaversion/viabackwards/protocol/v1_20_3to1_20_2/rewriter/EntityPacketRewriter1_20_3.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { ClientboundPacket1_20_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/packet/ClientboundPacket1_20_3.d.ts'
import type { ServerboundPacket1_20_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/packet/ServerboundPacket1_20_3.d.ts'
import type { ClientboundPacket1_20_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/packet/ClientboundPacket1_20_2.d.ts'
import type { ServerboundPacket1_20_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/packet/ServerboundPacket1_20_2.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_20_3To1_20_2 extends BackwardsProtocol<ClientboundPacket1_20_3, ClientboundPacket1_20_2, ServerboundPacket1_20_3, ServerboundPacket1_20_2> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPacket1_20_3>;
    readonly entityRewriter: EntityPacketRewriter1_20_3;
    readonly itemRewriter: BlockItemPacketRewriter1_20_3;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket1_20_3>;
    readonly tagRewriter: TagRewriter<ClientboundPacket1_20_3>;
    // private translatableRewriter: JsonNBTComponentRewriter<ClientboundPacket1_20_3>;
    // private convertComponent(arg0: PacketWrapper): void;
    // private convertOptionalComponent(arg0: PacketWrapper): void;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket1_20_3, ClientboundPacket1_20_2, ServerboundPacket1_20_3, ServerboundPacket1_20_2>;
    getBlockRewriter(): BlockRewriter<ClientboundPacket1_20_3>;
    getComponentRewriter(): JsonNBTComponentRewriter<ClientboundPacket1_20_3>;
    getEntityRewriter(): EntityPacketRewriter1_20_3;
    getItemRewriter(): BlockItemPacketRewriter1_20_3;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket1_20_3>;
    getTagRewriter(): TagRewriter<ClientboundPacket1_20_3>;
    init(arg0: UserConnection): void;
    registerPackets(): void;
    // private resourcePackHandler(): (param0: PacketWrapper) => void;
    // private resourcePackStatusHandler(): (param0: PacketWrapper) => void;
}