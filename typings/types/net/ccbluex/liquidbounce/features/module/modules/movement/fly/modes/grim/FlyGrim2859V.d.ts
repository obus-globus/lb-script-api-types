import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerNetworkMovementTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerNetworkMovementTickEvent.d.ts'
import type { PlayerTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerTickEvent.d.ts'
import type { Vec3 } from '../../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * @remarks
 * - **Anticheat:** Grim (2.3.59)
 * - **Tested on:** eu.loyisa.cn
 * - Slow on high ping
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/grim/FlyGrim2859V.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/grim/FlyGrim2859V.kt:34}
 */
export class FlyGrim2859V extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyGrim2859V;
    readonly movementPacketsPre: EventHook<PlayerNetworkMovementTickEvent>;
    readonly parent: ModeValueGroup<any>;
    pos: Vec3 | null;
    readonly tickHandler: EventHook<PlayerTickEvent>;
    ticks: number;
    // private timer: number;
    // private /*not mapped: */ getTimer(): number;
    // private toggle: number;
    // private /*not mapped: */ getToggle(): number;
    enable(): void;
}