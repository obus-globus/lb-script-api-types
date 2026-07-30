import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
/**
 * BlocksMC Step
 * for 1.9+
 *
 * @author @liquidsquid1
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/step/ModuleStep.kt#L228 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/step/ModuleStep.kt:228}
 */
export class ModuleStep$BlocksMC extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleStep$BlocksMC;
    // private baseTimer: number;
    // private /*not mapped: */ getBaseTimer(): number;
    // private fakeLagHandler: EventHook<BlinkPacketEvent>;
    // private movementInputHandler: EventHook<MovementInputEvent>;
    readonly parent: ModeValueGroup<Mode>;
    getParent(): ModeValueGroup<Mode>;
    // private recoveryTimer: number;
    // private /*not mapped: */ getRecoveryTimer(): number;
    readonly running: boolean;
    // private stepping: boolean;
    disable(): void;
}