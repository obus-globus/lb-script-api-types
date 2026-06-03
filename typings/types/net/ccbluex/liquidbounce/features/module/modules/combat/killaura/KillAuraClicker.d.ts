import type { ModuleKillAura } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/killaura/ModuleKillAura.d.ts'
import type { Rotation } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { Clicker } from '../../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { Clicker$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker$Companion.d.ts'
export class KillAuraClicker extends Clicker<ModuleKillAura> {
    static Companion: Clicker$Companion;
    static INSTANCE: KillAuraClicker;
    /*not mapped: */ isClickTick(): boolean;
    /**
     * Will prepare us for attacking using the {@link attack} function.
     *
     * This includes:
     * - Closing the inventory if we are simulating inventory closing
     * - Unblocking if we are blocking and the tick on is 0
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/KillAuraClicker.kt#L108 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/KillAuraClicker.kt:108}
     */
    prepareForAttack(rotation: Rotation | null, attack: () => boolean): void;
}