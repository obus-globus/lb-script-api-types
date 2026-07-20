import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Event } from '../../../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { ModuleFreeCam$CancelTrigger } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam$CancelTrigger.d.ts'
/**
 * This is useful for cancelling FreeCam on certain events.
 * For example, when the player takes damage.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt#L91 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt:91}
 */
export class ModuleFreeCam$CancelOn extends Enum<ModuleFreeCam$CancelOn> implements Tagged {
    static Companion: Tagged$Companion;
    static DAMAGE: ModuleFreeCam$CancelOn;
    static LIQUID: ModuleFreeCam$CancelOn;
    static MOVE: ModuleFreeCam$CancelOn;
    static TELEPORT: ModuleFreeCam$CancelOn;
    static getEntries(): ModuleFreeCam$CancelOn[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleFreeCam$CancelOn;
    static values(): ModuleFreeCam$CancelOn[];
    private constructor(tag: string, trigger: ModuleFreeCam$CancelTrigger<Event>)
    readonly tag: string;
    // private trigger: ModuleFreeCam$CancelTrigger<Event>;
    name(): "DAMAGE" | "TELEPORT" | "MOVE" | "LIQUID";
}