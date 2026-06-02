import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ValueTransformer } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/ValueTransformer.d.ts'
import type { ClientboundPackets1_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/packet/ClientboundPackets1_9.d.ts'
import type { ServerboundPackets1_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/packet/ServerboundPackets1_9.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
import type { ServerboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ServerboundPackets1_9_3.d.ts'
export class Protocol1_9_1To1_9_3 extends AbstractProtocol<ClientboundPackets1_9, ClientboundPackets1_9_3, ServerboundPackets1_9, ServerboundPackets1_9_3> {
    static ADJUST_PITCH: ValueTransformer<number, number>;
    constructor()
    init(arg0: UserConnection): void;
    registerPackets(): void;
}