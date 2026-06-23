import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
/**
 * @remarks
 * - **Anticheat:** Sentinel (30.06.2024)
 * - **Tested on:** cubecraft.net
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/sentinel/SpeedSentinelDamage.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/sentinel/SpeedSentinelDamage.kt:39}
 */
export class SpeedSentinelDamage extends Mode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private adjusted: boolean;
    // private damageDelay: number;
    // private enabledTime: number;
    // private externalDamageAdjust: number;
    // private hasBeenHurt: boolean;
    // private lastDamage: number;
    // private moveHandler: EventHook<PlayerMoveEvent>;
    // private movementInputHandler: EventHook<MovementInputEvent>;
    readonly parent: ModeValueGroup<any>;
    // private reboostTicks: number;
    // private /*not mapped: */ getReboostTicks(): number;
    readonly repeatable: EventHook<GameTickEvent>;
    // private speed: number;
    // private /*not mapped: */ getSpeed(): number;
    // private boost(): void;
    disable(): void;
    enable(): void;
}