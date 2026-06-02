import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { GameProfile } from '../../../../../../com/viaversion/viaversion/api/minecraft/GameProfile.d.ts'
import type { AbstractProtocol } from '../../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { ClientboundPackets1_7_2 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_2_5tor1_7_6_10/packet/ClientboundPackets1_7_2.d.ts'
import type { ServerboundPackets1_7_2 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_2_5tor1_7_6_10/packet/ServerboundPackets1_7_2.d.ts'
export class Protocolr1_7_2_5Tor1_7_6_10 extends AbstractProtocol<ClientboundPackets1_7_2, ClientboundPackets1_7_2, ServerboundPackets1_7_2, ServerboundPackets1_7_2> {
    static writeGameProfileToTag(paramarg0: GameProfile): Map$Entry<string, Tag>[];
    constructor()
    registerPackets(): void;
}