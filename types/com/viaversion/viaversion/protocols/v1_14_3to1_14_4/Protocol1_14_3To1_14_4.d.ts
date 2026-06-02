import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPackets1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ClientboundPackets1_14.d.ts'
import type { ServerboundPackets1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ServerboundPackets1_14.d.ts'
import type { ClientboundPackets1_14_4 } from '../../../../../com/viaversion/viaversion/protocols/v1_14_3to1_14_4/packet/ClientboundPackets1_14_4.d.ts'
export class Protocol1_14_3To1_14_4 extends AbstractProtocol<ClientboundPackets1_14, ClientboundPackets1_14_4, ServerboundPackets1_14, ServerboundPackets1_14> {
    constructor()
    registerPackets(): void;
}