import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { BedrockItem } from '../../../../../net/raphimc/viabedrock/protocol/model/BedrockItem.d.ts'
export class ExperimentalItemRewriter extends Object {
    static handleItem(paramarg0: UserConnection, paramarg1: BedrockItem, paramarg2: Map$Entry<string, Tag>[], paramarg3: Item): void;
    constructor()
}