import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
/**
 * @anticheat Verus
 * @anticheatVersion b3896
 * @testedOn eu.loyisa.cn
 * @note it gives you ~2 flags for damage
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/ee595b88333a1dc2ff3055eb6be0860bbedcbdb3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/verus/FlyVerusB3896Damage.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/verus/FlyVerusB3896Damage.kt:41}
 */
export class FlyVerusB3896Damage extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyVerusB3896Damage;
    readonly failRepeatable: EventHook<GameTickEvent>;
    // private flyTicks: number;
    // private gotDamage: boolean;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    readonly repeatable: EventHook<GameTickEvent>;
    // private shouldStop: boolean;
    disable(): void;
    enable(): void;
}