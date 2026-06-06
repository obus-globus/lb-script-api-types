import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleTickBase$TickBaseCall extends Enum<ModuleTickBase$TickBaseCall> implements Tagged {
    static Companion: Tagged$Companion;
    /**
     * Runs a full game tick.
     *
     * TODO: Cancel full game ticks after this,
     *   not just the player ticks.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleTickBase.kt#L267 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleTickBase.kt:267}
     */
    static GAME: ModuleTickBase$TickBaseCall;
    /**
     * This will NOT update the game tick,
     * but only the player tick - that means
     * e.g. Rotation Manager will not update either.
     *
     * This was the previous default behavior of the TickBase,
     * so it is kept for compatibility reasons.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleTickBase.kt#L275 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleTickBase.kt:275}
     */
    static PLAYER: ModuleTickBase$TickBaseCall;
    static getEntries(): ModuleTickBase$TickBaseCall[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleTickBase$TickBaseCall;
    static values(): (Object | null)[];
    private constructor(tag: string, tick: () => void)
    readonly tag: string;
    // private tick: () => void;
    tick(): void;
    name(): "GAME" | "PLAYER";
}