import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { RecipeRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/RecipeRewriter.d.ts'
export class RecipeRewriter1_19_3<C extends ClientboundPacketType> extends RecipeRewriter<C> {
    constructor(arg0: Protocol<C, any, any, any>)
    handleCraftingShaped(arg0: PacketWrapper): void;
    handleCraftingShapeless(arg0: PacketWrapper): void;
    handleSmelting(arg0: PacketWrapper): void;
}