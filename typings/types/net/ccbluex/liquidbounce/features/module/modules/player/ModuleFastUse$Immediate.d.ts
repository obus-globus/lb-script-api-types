import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class ModuleFastUse$Immediate extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleFastUse$Immediate;
    readonly delay: number;
    readonly parent: ModeValueGroup<Mode>;
    getParent(): ModeValueGroup<Mode>;
    readonly repeatable: EventHook<GameTickEvent>;
    /**
     * This is the amount of times the packet is sent per tick.
     *
     * Having {@link speed} as 20 means that the server will simulate eating process 20 times each tick.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleFastUse.kt#L106 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleFastUse.kt:106}
     */
    readonly speed: number;
    readonly timer: number;
}