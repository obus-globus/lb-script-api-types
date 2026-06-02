import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { NoSlowSharedGrim2371$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/shared/NoSlowSharedGrim2371$Companion.d.ts'
/**
 * Bypassing Grim 2.3.71
 * @from https://github.com/GrimAnticheat/Grim/issues/2216
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/shared/NoSlowSharedGrim2371.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/shared/NoSlowSharedGrim2371.kt:28}
 */
export class NoSlowSharedGrim2371 extends Mode {
    static Companion: Tagged$Companion;
    static Companion: NoSlowSharedGrim2371$Companion;
    static getShouldPreventNoSlow(): boolean;
    constructor(parent: ModeValueGroup<Object>)
    readonly parent: ModeValueGroup<Object>;
    // private tickHandler: EventHook<GameTickEvent>;
    disable(): void;
}