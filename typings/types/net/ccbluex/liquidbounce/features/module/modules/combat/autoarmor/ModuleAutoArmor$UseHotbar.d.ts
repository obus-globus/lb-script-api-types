import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Should the module use the hotbar to equip armor pieces?
 * If disabled, it will only use inventory moves.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/autoarmor/ModuleAutoArmor.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/autoarmor/ModuleAutoArmor.kt:48}
 */
export class ModuleAutoArmor$UseHotbar extends ToggleableValueGroup {
    static INSTANCE: ModuleAutoArmor$UseHotbar;
    /**
     * Defines whether the {@link UseHotbar} option supports the armor swap from MC 1.19.4+.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/autoarmor/ModuleAutoArmor.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/autoarmor/ModuleAutoArmor.kt:53}
     */
    readonly canSwapArmor: boolean;
}