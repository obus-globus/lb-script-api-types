import type { Protocol1_16To1_15_2 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_16to1_15_2/Protocol1_16To1_15_2.d.ts'
import type { ClientboundPackets1_16 } from '../../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/packet/ClientboundPackets1_16.d.ts'
import type { CommandRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/CommandRewriter.d.ts'
export class CommandRewriter1_16 extends CommandRewriter<ClientboundPackets1_16> {
    constructor(arg0: Protocol1_16To1_15_2)
    handleArgumentType(arg0: string): string;
}