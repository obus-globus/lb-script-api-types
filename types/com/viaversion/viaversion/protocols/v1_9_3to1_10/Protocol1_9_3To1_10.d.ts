import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ValueTransformer } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/ValueTransformer.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
import type { ServerboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ServerboundPackets1_9_3.d.ts'
import type { EntityPacketRewriter1_10 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_3to1_10/rewriter/EntityPacketRewriter1_10.d.ts'
import type { ItemPacketRewriter1_10 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_3to1_10/rewriter/ItemPacketRewriter1_10.d.ts'
export class Protocol1_9_3To1_10 extends AbstractProtocol<ClientboundPackets1_9_3, ClientboundPackets1_9_3, ServerboundPackets1_9_3, ServerboundPackets1_9_3> {
    static TO_NEW_PITCH: ValueTransformer<number, number>;
    constructor()
    readonly entityRewriter: EntityPacketRewriter1_10;
    readonly itemRewriter: ItemPacketRewriter1_10;
    getEntityRewriter(): EntityPacketRewriter1_10;
    getItemRewriter(): ItemPacketRewriter1_10;
    getNewSoundId(arg0: number): number;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}