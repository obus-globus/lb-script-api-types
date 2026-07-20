import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Should the module use the hotbar to equip armor pieces?
 * If disabled, it will only use inventory moves.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/autoarmor/ModuleAutoArmor.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/autoarmor/ModuleAutoArmor.kt:52}
 */
export class ModuleAutoArmor$UseHotbar extends ToggleableValueGroup {
    static INSTANCE: ModuleAutoArmor$UseHotbar;
    /**
     * Defines whether the {@link UseHotbar} option supports the armor swap from MC 1.19.4+.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/autoarmor/ModuleAutoArmor.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/autoarmor/ModuleAutoArmor.kt:56}
     */
    readonly canSwapArmor: boolean;
}