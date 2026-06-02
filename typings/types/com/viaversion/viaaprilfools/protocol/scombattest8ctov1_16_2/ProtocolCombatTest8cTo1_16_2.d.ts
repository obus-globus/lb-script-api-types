import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPackets1_16_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/packet/ClientboundPackets1_16_2.d.ts'
import type { ServerboundPackets1_16_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/packet/ServerboundPackets1_16_2.d.ts'
export class ProtocolCombatTest8cTo1_16_2 extends AbstractProtocol<ClientboundPackets1_16_2, ClientboundPackets1_16_2, ServerboundPackets1_16_2, ServerboundPackets1_16_2> {
    constructor()
    registerPackets(): void;
}