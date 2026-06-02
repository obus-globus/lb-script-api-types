import type { Protocol1_13To1_12_2 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_13to1_12_2/Protocol1_13To1_12_2.d.ts'
import type { RewriterBase } from '../../../../../../com/viaversion/viaversion/api/rewriter/RewriterBase.d.ts'
import type { ClientboundPackets1_13 } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ClientboundPackets1_13.d.ts'
import type { CommandRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/CommandRewriter.d.ts'
export class PlayerPacketRewriter1_13 extends RewriterBase<Protocol1_13To1_12_2> {
    constructor(arg0: Protocol1_13To1_12_2)
    // private commandRewriter: CommandRewriter<ClientboundPackets1_13>;
    registerPackets(): void;
}