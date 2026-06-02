import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { Direction } from '../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { State } from '../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { ClientboundPackets1_19_4 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ClientboundPackets1_19_4.d.ts'
import type { ServerboundPackets1_19_4 } from '../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ServerboundPackets1_19_4.d.ts'
import type { ClientboundPackets1_20_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/packet/ClientboundPackets1_20_2.d.ts'
import type { ServerboundPackets1_20_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/packet/ServerboundPackets1_20_2.d.ts'
import type { BlockItemPacketRewriter1_20_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/rewriter/BlockItemPacketRewriter1_20_2.d.ts'
import type { EntityPacketRewriter1_20_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/rewriter/EntityPacketRewriter1_20_2.d.ts'
import type { LastResourcePack } from '../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/storage/LastResourcePack.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Protocol1_20To1_20_2 extends AbstractProtocol<ClientboundPackets1_19_4, ClientboundPackets1_20_2, ServerboundPackets1_19_4, ServerboundPackets1_20_2> {
    static MAPPINGS: MappingData;
    static sendConfigurationPackets(paramarg0: UserConnection, paramarg1: Map$Entry<string, Tag>[], paramarg2: LastResourcePack): void;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPackets1_19_4>;
    // private entityPacketRewriter: EntityPacketRewriter1_20_2;
    // private itemPacketRewriter: BlockItemPacketRewriter1_20_2;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets1_19_4>;
    readonly tagRewriter: TagRewriter<ClientboundPackets1_19_4>;
    getBlockRewriter(): BlockRewriter<ClientboundPackets1_19_4>;
    getEntityRewriter(): EntityPacketRewriter1_20_2;
    getItemRewriter(): BlockItemPacketRewriter1_20_2;
    getMappingData(): MappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets1_19_4>;
    getTagRewriter(): TagRewriter<ClientboundPackets1_19_4>;
    // private handleConfigTags(arg0: PacketWrapper): void;
    init(arg0: UserConnection): void;
    // private queueServerboundPacket(arg0: ServerboundPackets1_20_2): (param0: PacketWrapper) => void;
    registerPackets(): void;
    transform(arg0: Direction, arg1: State, arg2: PacketWrapper): void;
}