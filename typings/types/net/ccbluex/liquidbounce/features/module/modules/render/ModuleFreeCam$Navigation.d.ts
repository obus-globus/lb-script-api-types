import type { InputConstants$Key } from '../../../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { NavigationBaseValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Navigation configuration for the FreeCam module
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt#L128 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt:128}
 */
export class ModuleFreeCam$Navigation extends NavigationBaseValueGroup<void> {
    static INSTANCE: ModuleFreeCam$Navigation;
    // private controlKey: InputConstants$Key;
    // private /*not mapped: */ getControlKey(): InputConstants$Key;
    readonly shouldBeGoing: boolean;
    /**
     * Calculates the desired position to move towards
     *
     * @returns Target position as {@link Vec3}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt#L147 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt:147}
     */
    protected calculateGoalPosition(context: void): Vec3 | null;
    /**
     * Creates context for navigation
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt#L138 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt:138}
     */
    protected createNavigationContext(): void;
}