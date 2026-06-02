import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPackets1_12 } from '../../../../../com/viaversion/viaversion/protocols/v1_11_1to1_12/packet/ClientboundPackets1_12.d.ts'
import type { ServerboundPackets1_12 } from '../../../../../com/viaversion/viaversion/protocols/v1_11_1to1_12/packet/ServerboundPackets1_12.d.ts'
import type { ClientboundPackets1_12_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_12to1_12_1/packet/ClientboundPackets1_12_1.d.ts'
import type { ServerboundPackets1_12_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_12to1_12_1/packet/ServerboundPackets1_12_1.d.ts'
export class Protocol1_12To1_12_1 extends AbstractProtocol<ClientboundPackets1_12, ClientboundPackets1_12_1, ServerboundPackets1_12, ServerboundPackets1_12_1> {
    constructor()
    registerPackets(): void;
}