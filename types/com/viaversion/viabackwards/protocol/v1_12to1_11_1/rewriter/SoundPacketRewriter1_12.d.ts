import type { LegacySoundRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/LegacySoundRewriter.d.ts'
import type { Protocol1_12To1_11_1 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_12to1_11_1/Protocol1_12To1_11_1.d.ts'
export class SoundPacketRewriter1_12 extends LegacySoundRewriter<Protocol1_12To1_11_1> {
    constructor(arg0: Protocol1_12To1_11_1)
    registerPackets(): void;
    registerRewrites(): void;
}