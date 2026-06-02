import type { Protocol1_14To1_13_2 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_14to1_13_2/Protocol1_14To1_13_2.d.ts'
import type { RewriterBase } from '../../../../../../com/viaversion/viaversion/api/rewriter/RewriterBase.d.ts'
export class PlayerPacketRewriter1_14 extends RewriterBase<Protocol1_14To1_13_2> {
    constructor(arg0: Protocol1_14To1_13_2)
    registerPackets(): void;
}