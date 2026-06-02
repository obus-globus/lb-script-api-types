import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPackets1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ClientboundPackets1_14.d.ts'
import type { ServerboundPackets1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ServerboundPackets1_14.d.ts'
import type { EntityPacketRewriter1_14_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_14to1_14_1/rewriter/EntityPacketRewriter1_14_1.d.ts'
export class Protocol1_14To1_14_1 extends AbstractProtocol<ClientboundPackets1_14, ClientboundPackets1_14, ServerboundPackets1_14, ServerboundPackets1_14> {
    constructor()
    readonly entityRewriter: EntityPacketRewriter1_14_1;
    getEntityRewriter(): EntityPacketRewriter1_14_1;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}