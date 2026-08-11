import type { InputConstants$Key } from '../../../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { NavigationBaseValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Navigation configuration for the FreeCam module
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b7cc679e71b1bc95d19a1e1535f79a1c2164149e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt#L129 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt:129}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b7cc679e71b1bc95d19a1e1535f79a1c2164149e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt#L148 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt:148}
     */
    protected calculateGoalPosition(context: void): Vec3 | null;
    /**
     * Creates context for navigation
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b7cc679e71b1bc95d19a1e1535f79a1c2164149e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt#L139 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt:139}
     */
    protected createNavigationContext(): void;
}