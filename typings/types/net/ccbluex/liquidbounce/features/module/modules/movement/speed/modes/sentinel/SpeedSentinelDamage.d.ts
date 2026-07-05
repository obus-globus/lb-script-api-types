import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
/**
 * @anticheat Sentinel
 * @anticheatVersion 30.06.2024
 * @testedOn cubecraft.net
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/sentinel/SpeedSentinelDamage.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/sentinel/SpeedSentinelDamage.kt:44}
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