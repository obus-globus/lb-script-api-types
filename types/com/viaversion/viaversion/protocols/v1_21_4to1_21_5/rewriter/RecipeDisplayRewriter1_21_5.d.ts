import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { RecipeDisplayRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/RecipeDisplayRewriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RecipeDisplayRewriter1_21_5<C extends ClientboundPacketType> extends RecipeDisplayRewriter<C> {
    constructor(arg0: Protocol<C, Object, Object, Object>)
    handleSmithingTrimSlotDisplay(arg0: PacketWrapper): void;
}