import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CreativeModeTab } from '../../../../../net/minecraft/world/item/CreativeModeTab.d.ts'
import type { CreativeModeTab$Output } from '../../../../../net/minecraft/world/item/CreativeModeTab$Output.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * An item group from the client
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/creativetab/CustomCreativeModeTab.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/creativetab/CustomCreativeModeTab.kt:32}
 */
export class CustomCreativeModeTab extends Object {
    constructor(plainName: string, icon: () => ItemStack, items: (param0: CreativeModeTab$Output) => void)
    readonly icon: () => ItemStack;
    readonly items: (param0: CreativeModeTab$Output) => void;
    readonly plainName: string;
    init(): CreativeModeTab;
}