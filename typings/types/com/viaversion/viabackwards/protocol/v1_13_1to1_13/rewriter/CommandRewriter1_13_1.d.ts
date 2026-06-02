import type { Protocol1_13_1To1_13 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_13_1to1_13/Protocol1_13_1To1_13.d.ts'
import type { ClientboundPackets1_13 } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ClientboundPackets1_13.d.ts'
import type { CommandRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/CommandRewriter.d.ts'
export class CommandRewriter1_13_1 extends CommandRewriter<ClientboundPackets1_13> {
    constructor(arg0: Protocol1_13_1To1_13)
    handleArgumentType(arg0: string): string;
}