import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { ClientboundPackets1_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/packet/ClientboundPackets1_9.d.ts'
import type { ServerboundPackets1_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/packet/ServerboundPackets1_9.d.ts'
export class Protocol1_9_1To1_9 extends BackwardsProtocol<ClientboundPackets1_9, ClientboundPackets1_9, ServerboundPackets1_9, ServerboundPackets1_9> {
    constructor()
    registerPackets(): void;
}