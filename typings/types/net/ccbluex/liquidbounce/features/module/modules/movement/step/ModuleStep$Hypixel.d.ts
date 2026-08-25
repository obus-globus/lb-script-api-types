import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PlayerNetworkMovementTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerNetworkMovementTickEvent.d.ts'
/**
 * does not seem to work above a certain y level for some reason
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/step/ModuleStep.kt#L278 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/step/ModuleStep.kt:278}
 */
export class ModuleStep$Hypixel extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleStep$Hypixel;
    // private alternateBypass: boolean;
    // private /*not mapped: */ getAlternateBypass(): boolean;
    // private movementInputHandler: EventHook<MovementInputEvent>;
    // private networkTickHandler: EventHook<PlayerNetworkMovementTickEvent>;
    readonly parent: ModeValueGroup<Mode>;
    getParent(): ModeValueGroup<Mode>;
    // private spoof: boolean;
    // private /*not mapped: */ getSpoof(): boolean;
    // private /*not mapped: */ getStepHeight(): number;
    // private stepping: boolean;
    disable(): void;
}