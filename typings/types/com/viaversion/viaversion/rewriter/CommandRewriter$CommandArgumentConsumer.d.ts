import type { PacketWrapper } from '../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CommandRewriter$CommandArgumentConsumer extends Object{
    accept(arg0: PacketWrapper): void;
}