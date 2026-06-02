import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { ServerboundPackets1_17 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ServerboundPackets1_17.d.ts'
import type { ClientboundPackets1_18 } from '../../../../../com/viaversion/viaversion/protocols/v1_17_1to1_18/packet/ClientboundPackets1_18.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Protocol1_18_2To1_18 extends BackwardsProtocol<ClientboundPackets1_18, ClientboundPackets1_18, ServerboundPackets1_17, ServerboundPackets1_17> {
    constructor()
    registerPackets(): void;
    // private removeTagPrefix(arg0: Map$Entry<string, Tag>[]): void;
}