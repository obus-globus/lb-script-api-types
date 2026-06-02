import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
/**
 * @remarks
 * - **Anticheat:** Verus (b3896)
 * - **Tested on:** eu.loyisa.cn
 * - it gives you ~2 flags for damage
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/verus/FlyVerusB3896Damage.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/verus/FlyVerusB3896Damage.kt:35}
 */
export class FlyVerusB3896Damage extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyVerusB3896Damage;
    readonly failRepeatable: EventHook<GameTickEvent>;
    // private flyTicks: number;
    // private gotDamage: boolean;
    readonly parent: ModeValueGroup<Object>;
    readonly repeatable: EventHook<GameTickEvent>;
    // private shouldStop: boolean;
    disable(): void;
    enable(): void;
}