import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { RecipeRewriter1_19_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/rewriter/RecipeRewriter1_19_4.d.ts'
export class RecipeRewriter1_20_2<C extends ClientboundPacketType> extends RecipeRewriter1_19_4<C> {
    constructor(arg0: Protocol<C, any, any, any>)
    itemArrayType(): Type<Item[]>;
    itemType(): Type<Item>;
}