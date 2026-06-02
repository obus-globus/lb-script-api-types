import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPackets1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ClientboundPackets1_13.d.ts'
import type { ServerboundPackets1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ServerboundPackets1_13.d.ts'
export class Protocol1_13_1To1_13_2 extends AbstractProtocol<ClientboundPackets1_13, ClientboundPackets1_13, ServerboundPackets1_13, ServerboundPackets1_13> {
    constructor()
    registerPackets(): void;
}