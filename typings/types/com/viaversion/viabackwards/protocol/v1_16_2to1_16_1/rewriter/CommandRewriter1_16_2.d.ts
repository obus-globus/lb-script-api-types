import type { Protocol1_16_2To1_16_1 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_16_2to1_16_1/Protocol1_16_2To1_16_1.d.ts'
import type { ClientboundPackets1_16_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/packet/ClientboundPackets1_16_2.d.ts'
import type { CommandRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/CommandRewriter.d.ts'
export class CommandRewriter1_16_2 extends CommandRewriter<ClientboundPackets1_16_2> {
    constructor(arg0: Protocol1_16_2To1_16_1)
    handleArgumentType(arg0: string): string;
}