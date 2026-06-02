import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { BackwardsRegistryRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsRegistryRewriter.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { BlockItemPacketRewriter1_21 } from '../../../../../com/viaversion/viabackwards/protocol/v1_21to1_20_5/rewriter/BlockItemPacketRewriter1_21.d.ts'
import type { EntityPacketRewriter1_21 } from '../../../../../com/viaversion/viabackwards/protocol/v1_21to1_20_5/rewriter/EntityPacketRewriter1_21.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredDataKeys1_20_5 } from '../../../../../com/viaversion/viaversion/api/minecraft/data/version/StructuredDataKeys1_20_5.d.ts'
import type { EntityDataTypes1_20_5 } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes1_20_5.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { Types1_20_5 } from '../../../../../com/viaversion/viaversion/api/type/types/version/Types1_20_5.d.ts'
import type { Types1_21 } from '../../../../../com/viaversion/viaversion/api/type/types/version/Types1_21.d.ts'
import type { ClientboundPacket1_20_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ClientboundPacket1_20_5.d.ts'
import type { ServerboundPacket1_20_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ServerboundPacket1_20_5.d.ts'
import type { ClientboundPacket1_21 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/packet/ClientboundPacket1_21.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_21To1_20_5 extends BackwardsProtocol<ClientboundPacket1_21, ClientboundPacket1_20_5, ServerboundPacket1_20_5, ServerboundPacket1_20_5> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPacket1_21>;
    readonly entityRewriter: EntityPacketRewriter1_21;
    readonly itemRewriter: BlockItemPacketRewriter1_21;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket1_21>;
    readonly registryDataRewriter: BackwardsRegistryRewriter;
    readonly tagRewriter: TagRewriter<ClientboundPacket1_21>;
    // private translatableRewriter: JsonNBTComponentRewriter<ClientboundPacket1_21>;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket1_21, ClientboundPacket1_20_5, ServerboundPacket1_20_5, ServerboundPacket1_20_5>;
    getBlockRewriter(): BlockRewriter<ClientboundPacket1_21>;
    getComponentRewriter(): JsonNBTComponentRewriter<ClientboundPacket1_21>;
    getEntityRewriter(): EntityPacketRewriter1_21;
    getItemRewriter(): BlockItemPacketRewriter1_21;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket1_21>;
    getRegistryDataRewriter(): BackwardsRegistryRewriter;
    getTagRewriter(): TagRewriter<ClientboundPacket1_21>;
    init(arg0: UserConnection): void;
    mappedTypes(): Types1_20_5<StructuredDataKeys1_20_5, EntityDataTypes1_20_5>;
    registerPackets(): void;
    types(): Types1_21;
}