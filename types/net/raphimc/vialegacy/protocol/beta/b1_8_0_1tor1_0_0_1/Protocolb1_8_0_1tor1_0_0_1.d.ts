import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ViaProviders } from '../../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPacketsb1_8 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_8_0_1tor1_0_0_1/packet/ClientboundPacketsb1_8.d.ts'
import type { ServerboundPacketsb1_8 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_8_0_1tor1_0_0_1/packet/ServerboundPacketsb1_8.d.ts'
import type { ItemRewriter } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_8_0_1tor1_0_0_1/rewriter/ItemRewriter.d.ts'
import type { ClientboundPackets1_0_0 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_0_0_1tor1_1/packet/ClientboundPackets1_0_0.d.ts'
import type { ServerboundPackets1_0_0 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_0_0_1tor1_1/packet/ServerboundPackets1_0_0.d.ts'
export class Protocolb1_8_0_1tor1_0_0_1 extends StatelessProtocol<ClientboundPacketsb1_8, ClientboundPackets1_0_0, ServerboundPacketsb1_8, ServerboundPackets1_0_0> {
    constructor()
    readonly itemRewriter: ItemRewriter;
    getItemRewriter(): ItemRewriter;
    init(arg0: UserConnection): void;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
}