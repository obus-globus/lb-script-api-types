import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { BlockChangeInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/traps/BlockChangeInfo.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
import type { Vec3i } from '../../../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { Item } from '../../../../../../../../net/minecraft/world/item/Item.d.ts'
export class BlockChangeInfo$InteractWithBlock extends Object implements BlockChangeInfo {
    constructor(itemPredicate: Function1<Item, boolean>, side: Direction, alternativeOffsets: Vec3i[])
    readonly alternativeOffsets: Vec3i[];
    readonly itemPredicate: (param0: Item) => boolean;
    readonly side: Direction;
}