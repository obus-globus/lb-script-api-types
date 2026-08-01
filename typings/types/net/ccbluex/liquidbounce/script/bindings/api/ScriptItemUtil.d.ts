import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * Object used by the script API to provide an easier way of creating items.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptItemUtil.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptItemUtil.kt:27}
 */
export class ScriptItemUtil extends Object {
    static INSTANCE: ScriptItemUtil;
    /**
     * Create {@link ItemStack} from {@link arguments}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptItemUtil.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptItemUtil.kt:33}
     */
    create(arguments: string): ItemStack;
    create(arguments: string, amount: number): ItemStack;
}