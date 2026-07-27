import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { NoSlowSharedGrim2371$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/shared/NoSlowSharedGrim2371$Companion.d.ts'
/**
 * Bypassing Grim 2.3.71
 * @from https://github.com/GrimAnticheat/Grim/issues/2216
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/shared/NoSlowSharedGrim2371.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/shared/NoSlowSharedGrim2371.kt:32}
 */
export class NoSlowSharedGrim2371 extends Mode {
    static Companion: NoSlowSharedGrim2371$Companion;
    static getShouldPreventNoSlow(): boolean;
    constructor(parent: ModeValueGroup<any>)
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    // private tickHandler: EventHook<GameTickEvent>;
    disable(): void;
}