import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * Object used by the script API to provide an easier way of creating items.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptItemUtil.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptItemUtil.kt:24}
 */
export class ScriptItemUtil extends Object {
    static INSTANCE: ScriptItemUtil;
    /**
     * Create {@link ItemStack} from {@link arguments}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptItemUtil.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptItemUtil.kt:30}
     */
    create(arguments: string): ItemStack;
    create(arguments: string, amount: number): ItemStack;
}