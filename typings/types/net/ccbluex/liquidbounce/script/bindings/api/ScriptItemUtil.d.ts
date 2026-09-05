import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * Object used by the script API to provide an easier way of creating items.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptItemUtil.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptItemUtil.kt:27}
 */
export class ScriptItemUtil extends Object {
    static INSTANCE: ScriptItemUtil;
    /**
     * Create {@link ItemStack} from {@link arguments}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptItemUtil.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptItemUtil.kt:33}
     */
    create(arguments: string): ItemStack;
    create(arguments: string, amount: number): ItemStack;
}