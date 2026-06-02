import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { BlockItemPacketRewriter1_20_5 } from '../../../../../com/viaversion/viabackwards/protocol/v1_20_5to1_20_3/rewriter/BlockItemPacketRewriter1_20_5.d.ts'
import type { BlockPacketRewriter1_20_5 } from '../../../../../com/viaversion/viabackwards/protocol/v1_20_5to1_20_3/rewriter/BlockPacketRewriter1_20_5.d.ts'
import type { EntityPacketRewriter1_20_5 } from '../../../../../com/viaversion/viabackwards/protocol/v1_20_5to1_20_3/rewriter/EntityPacketRewriter1_20_5.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ViaProviders } from '../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { VersionedTypesHolder } from '../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { ClientboundPacket1_20_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/packet/ClientboundPacket1_20_3.d.ts'
import type { ServerboundPacket1_20_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/packet/ServerboundPacket1_20_3.d.ts'
import type { ClientboundPacket1_20_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ClientboundPacket1_20_5.d.ts'
import type { ServerboundPacket1_20_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ServerboundPacket1_20_5.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_20_5To1_20_3 extends BackwardsProtocol<ClientboundPacket1_20_5, ClientboundPacket1_20_3, ServerboundPacket1_20_5, ServerboundPacket1_20_3> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    readonly blockRewriter: BlockPacketRewriter1_20_5;
    readonly entityRewriter: EntityPacketRewriter1_20_5;
    readonly itemRewriter: BlockItemPacketRewriter1_20_5;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket1_20_5>;
    readonly tagRewriter: TagRewriter<ClientboundPacket1_20_5>;
    // private translatableRewriter: JsonNBTComponentRewriter<ClientboundPacket1_20_5>;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket1_20_5, ClientboundPacket1_20_3, ServerboundPacket1_20_5, ServerboundPacket1_20_3>;
    getBlockRewriter(): BlockPacketRewriter1_20_5;
    getComponentRewriter(): JsonNBTComponentRewriter<ClientboundPacket1_20_5>;
    getEntityRewriter(): EntityPacketRewriter1_20_5;
    getItemRewriter(): BlockItemPacketRewriter1_20_5;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket1_20_5>;
    getTagRewriter(): TagRewriter<ClientboundPacket1_20_5>;
    // private handleCookieRequest(arg0: PacketWrapper, arg1: ServerboundPacketType): void;
    // private handleStoreCookie(arg0: PacketWrapper): void;
    // private handleTransfer(arg0: PacketWrapper): void;
    init(arg0: UserConnection): void;
    mappedTypes(): VersionedTypesHolder;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
    // private sendRegistryData(arg0: UserConnection): void;
    types(): VersionedTypesHolder;
}