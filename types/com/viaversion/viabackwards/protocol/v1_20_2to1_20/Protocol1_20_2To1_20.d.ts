import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { BlockItemPacketRewriter1_20_2 } from '../../../../../com/viaversion/viabackwards/protocol/v1_20_2to1_20/rewriter/BlockItemPacketRewriter1_20_2.d.ts'
import type { EntityPacketRewriter1_20_2 } from '../../../../../com/viaversion/viabackwards/protocol/v1_20_2to1_20/rewriter/EntityPacketRewriter1_20_2.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ViaProviders } from '../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { Direction } from '../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { State } from '../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { ClientboundPackets1_19_4 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ClientboundPackets1_19_4.d.ts'
import type { ServerboundPackets1_19_4 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ServerboundPackets1_19_4.d.ts'
import type { ClientboundPackets1_20_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/packet/ClientboundPackets1_20_2.d.ts'
import type { ServerboundPackets1_20_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/packet/ServerboundPackets1_20_2.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_20_2To1_20 extends BackwardsProtocol<ClientboundPackets1_20_2, ClientboundPackets1_19_4, ServerboundPackets1_20_2, ServerboundPackets1_19_4> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_20_2>;
    // private entityPacketRewriter: EntityPacketRewriter1_20_2;
    // private itemPacketRewriter: BlockItemPacketRewriter1_20_2;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_20_2>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_20_2>;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_20_2>;
    getEntityRewriter(): EntityPacketRewriter1_20_2;
    getItemRewriter(): BlockItemPacketRewriter1_20_2;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_20_2>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_20_2>;
    init(arg0: UserConnection): void;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
    transform(arg0: Direction, arg1: State, arg2: PacketWrapper): void;
}