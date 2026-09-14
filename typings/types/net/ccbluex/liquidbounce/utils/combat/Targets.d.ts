import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * Configurable to configure which entities and their state (like being dead) should be considered as a target
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatExtensions.kt#L92 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatExtensions.kt:92}
 */
export class Targets extends Enum<Targets> implements Tagged {
    static ANGERABLE: Targets;
    static Companion: Tagged$Companion;
    static DEAD: Targets;
    static FRIENDS: Targets;
    static HOSTILE: Targets;
    static INVISIBLE: Targets;
    static PASSIVE: Targets;
    static PLAYERS: Targets;
    static SELF: Targets;
    static SLEEPING: Targets;
    static WATER_CREATURE: Targets;
    static getEntries(): Targets[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): Targets;
    static values(): Targets[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "SELF" | "PLAYERS" | "HOSTILE" | "ANGERABLE" | "WATER_CREATURE" | "PASSIVE" | "INVISIBLE" | "DEAD" | "SLEEPING" | "FRIENDS";
}