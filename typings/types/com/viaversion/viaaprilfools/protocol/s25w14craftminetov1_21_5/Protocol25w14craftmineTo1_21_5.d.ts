import type { StructuredDataKeys25w14craftmine } from '../../../../../com/viaversion/viaaprilfools/api/minecraft/item/StructuredDataKeys25w14craftmine.d.ts'
import type { MappingData25w14craftmine } from '../../../../../com/viaversion/viaaprilfools/protocol/s25w14craftminetov1_21_5/data/MappingData25w14craftmine.d.ts'
import type { BlockItemPacketRewriter25w14craftmine } from '../../../../../com/viaversion/viaaprilfools/protocol/s25w14craftminetov1_21_5/rewriter/BlockItemPacketRewriter25w14craftmine.d.ts'
import type { ComponentRewriter25w14craftmine } from '../../../../../com/viaversion/viaaprilfools/protocol/s25w14craftminetov1_21_5/rewriter/ComponentRewriter25w14craftmine.d.ts'
import type { EntityPacketRewriter25w14craftmine } from '../../../../../com/viaversion/viaaprilfools/protocol/s25w14craftminetov1_21_5/rewriter/EntityPacketRewriter25w14craftmine.d.ts'
import type { ClientboundPacket25w14craftmine } from '../../../../../com/viaversion/viaaprilfools/protocol/v1_21_5to25w14craftmine/packet/ClientboundPacket25w14craftmine.d.ts'
import type { ServerboundPacket25w14craftmine } from '../../../../../com/viaversion/viaaprilfools/protocol/v1_21_5to25w14craftmine/packet/ServerboundPacket25w14craftmine.d.ts'
import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsRegistryRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsRegistryRewriter.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredDataKeys1_21_5 } from '../../../../../com/viaversion/viaversion/api/minecraft/data/version/StructuredDataKeys1_21_5.d.ts'
import type { EntityDataTypes1_21_5 } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes1_21_5.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { Types1_20_5 } from '../../../../../com/viaversion/viaversion/api/type/types/version/Types1_20_5.d.ts'
import type { ClientboundPacket1_21_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ClientboundPacket1_21_5.d.ts'
import type { ServerboundPacket1_21_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ServerboundPacket1_21_5.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol25w14craftmineTo1_21_5 extends BackwardsProtocol<ClientboundPacket25w14craftmine, ClientboundPacket1_21_5, ServerboundPacket25w14craftmine, ServerboundPacket1_21_5> {
    static MAPPINGS: MappingData25w14craftmine;
    constructor()
    readonly entityRewriter: EntityPacketRewriter25w14craftmine;
    readonly itemRewriter: BlockItemPacketRewriter25w14craftmine;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket25w14craftmine>;
    readonly registryDataRewriter: BackwardsRegistryRewriter;
    readonly tagRewriter: TagRewriter<ClientboundPacket25w14craftmine>;
    // private translatableRewriter: ComponentRewriter25w14craftmine;
    applySharedRegistrations(): void;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket25w14craftmine, ClientboundPacket1_21_5, ServerboundPacket25w14craftmine, ServerboundPacket1_21_5>;
    getComponentRewriter(): ComponentRewriter25w14craftmine;
    getEntityRewriter(): EntityPacketRewriter25w14craftmine;
    getItemRewriter(): BlockItemPacketRewriter25w14craftmine;
    getMappingData(): MappingData25w14craftmine;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket25w14craftmine>;
    getRegistryDataRewriter(): BackwardsRegistryRewriter;
    getTagRewriter(): TagRewriter<ClientboundPacket25w14craftmine>;
    init(arg0: UserConnection): void;
    mappedTypes(): Types1_20_5<StructuredDataKeys1_21_5, EntityDataTypes1_21_5>;
    registerPackets(): void;
    types(): Types1_20_5<StructuredDataKeys25w14craftmine, EntityDataTypes1_21_5>;
}