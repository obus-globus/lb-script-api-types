import type { Protocol1_14To1_13_2 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_14to1_13_2/Protocol1_14To1_13_2.d.ts'
import type { ClientboundPackets1_14 } from '../../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ClientboundPackets1_14.d.ts'
import type { CommandRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/CommandRewriter.d.ts'
export class CommandRewriter1_14 extends CommandRewriter<ClientboundPackets1_14> {
    constructor(arg0: Protocol1_14To1_13_2)
    handleArgumentType(arg0: string): string;
}