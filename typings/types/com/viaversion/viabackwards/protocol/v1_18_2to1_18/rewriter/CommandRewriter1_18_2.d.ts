import type { Protocol1_18_2To1_18 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_18_2to1_18/Protocol1_18_2To1_18.d.ts'
import type { ClientboundPackets1_18 } from '../../../../../../com/viaversion/viaversion/protocols/v1_17_1to1_18/packet/ClientboundPackets1_18.d.ts'
import type { CommandRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/CommandRewriter.d.ts'
export class CommandRewriter1_18_2 extends CommandRewriter<ClientboundPackets1_18> {
    constructor(arg0: Protocol1_18_2To1_18)
    handleArgumentType(arg0: string): string;
}