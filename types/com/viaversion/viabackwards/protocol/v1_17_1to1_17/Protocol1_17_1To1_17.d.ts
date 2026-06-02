import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPackets1_17 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ClientboundPackets1_17.d.ts'
import type { ServerboundPackets1_17 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ServerboundPackets1_17.d.ts'
import type { ClientboundPackets1_17_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_17to1_17_1/packet/ClientboundPackets1_17_1.d.ts'
export class Protocol1_17_1To1_17 extends BackwardsProtocol<ClientboundPackets1_17_1, ClientboundPackets1_17, ServerboundPackets1_17, ServerboundPackets1_17> {
    constructor()
    init(arg0: UserConnection): void;
    registerPackets(): void;
}