import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class ModuleFastExp$NoWaste extends ToggleableValueGroup {
    static INSTANCE: ModuleFastExp$NoWaste;
    /**
     * If some experience orbs have been destroyed by lava/fire,
     * or the player has switched to items with greater total damage,
     * or some experience orbs haven't reached the player due to movement, etc.,
     *
     * then the module can start throwing experience bottles again to complete the repair process,
     * but only if there is still at least one item
     * whose durability is lower than or equal to {@link maxDurabilityToContinueRepair}%.
     *
     * This should prevent the module from repairing armor after every 2 or 3 received hits.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleFastExp.kt#L97 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleFastExp.kt:97}
     */
    readonly maxDurabilityToContinueRepair: number;
    /**
     * If at least one of the items to repair has durability lower than or equal to {@link minDurabilityToStartRepair},
     * the module will start throwing experience bottles.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleFastExp.kt#L84 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleFastExp.kt:84}
     */
    readonly minDurabilityToStartRepair: number;
}