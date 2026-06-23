import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { RecipeRewriter1_19_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_1to1_19_3/rewriter/RecipeRewriter1_19_3.d.ts'
export class RecipeRewriter1_19_4<C extends ClientboundPacketType> extends RecipeRewriter1_19_3<C> {
    constructor(arg0: Protocol<C, any, any, any>)
    handleCraftingShaped(arg0: PacketWrapper): void;
}