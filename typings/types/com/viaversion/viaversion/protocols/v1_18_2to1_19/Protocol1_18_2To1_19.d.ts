import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ViaProviders } from '../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { ServerboundPackets1_17 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ServerboundPackets1_17.d.ts'
import type { ClientboundPackets1_18 } from '../../../../../com/viaversion/viaversion/protocols/v1_17_1to1_18/packet/ClientboundPackets1_18.d.ts'
import type { MappingData1_19 } from '../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/data/MappingData1_19.d.ts'
import type { ClientboundPackets1_19 } from '../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/packet/ClientboundPackets1_19.d.ts'
import type { ServerboundPackets1_19 } from '../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/packet/ServerboundPackets1_19.d.ts'
import type { ComponentRewriter1_19 } from '../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/rewriter/ComponentRewriter1_19.d.ts'
import type { EntityPacketRewriter1_19 } from '../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/rewriter/EntityPacketRewriter1_19.d.ts'
import type { ItemPacketRewriter1_19 } from '../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/rewriter/ItemPacketRewriter1_19.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_18_2To1_19 extends AbstractProtocol<ClientboundPackets1_18, ClientboundPackets1_19, ServerboundPackets1_17, ServerboundPackets1_19> {
    static MAPPINGS: MappingData1_19;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_18>;
    readonly componentRewriter: ComponentRewriter1_19;
    readonly entityRewriter: EntityPacketRewriter1_19;
    readonly itemRewriter: ItemPacketRewriter1_19;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_18>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_18>;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_18>;
    getEntityRewriter(): EntityPacketRewriter1_19;
    getItemRewriter(): ItemPacketRewriter1_19;
    getMappingData(): MappingData1_19;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_18>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_18>;
    init(arg0: UserConnection): void;
    isJsonNotNull(arg0: JsonElement): boolean;
    mapTextComponentIfNull(arg0: UserConnection, arg1: JsonElement): JsonElement;
    onMappingDataLoaded(): void;
    // private randomLong(): number;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
}