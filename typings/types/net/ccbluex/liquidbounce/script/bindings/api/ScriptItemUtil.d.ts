import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * Object used by the script API to provide an easier way of creating items.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptItemUtil.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptItemUtil.kt:27}
 */
export class ScriptItemUtil extends Object {
    static INSTANCE: ScriptItemUtil;
    /**
     * Create {@link ItemStack} from {@link arguments}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptItemUtil.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptItemUtil.kt:33}
     */
    create(arguments: string): ItemStack;
    create(arguments: string, amount: number): ItemStack;
}