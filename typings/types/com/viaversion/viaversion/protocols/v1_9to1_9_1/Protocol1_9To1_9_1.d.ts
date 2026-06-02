import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPackets1_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/packet/ClientboundPackets1_9.d.ts'
import type { ServerboundPackets1_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/packet/ServerboundPackets1_9.d.ts'
export class Protocol1_9To1_9_1 extends AbstractProtocol<ClientboundPackets1_9, ClientboundPackets1_9, ServerboundPackets1_9, ServerboundPackets1_9> {
    constructor()
    registerPackets(): void;
}