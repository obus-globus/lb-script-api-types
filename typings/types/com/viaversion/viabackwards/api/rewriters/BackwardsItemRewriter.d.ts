import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsItemRewriterBase } from '../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsItemRewriterBase.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
export class BackwardsItemRewriter<C extends ClientboundPacketType, S extends ServerboundPacketType, T extends BackwardsProtocol<C, any, any, S>> extends BackwardsItemRewriterBase<C, S, T> {
    constructor(arg0: T, arg1: Type<Item>, arg2: Type<Item[]>)
    constructor(arg0: T, arg1: Type<Item>, arg2: Type<Item[]>, arg3: Type<Item>, arg4: Type<Item[]>)
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
}