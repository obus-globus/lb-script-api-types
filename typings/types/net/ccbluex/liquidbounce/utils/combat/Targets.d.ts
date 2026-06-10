import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * Configurable to configure which entities and their state (like being dead) should be considered as a target
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatExtensions.kt#L88 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatExtensions.kt:88}
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
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Targets;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "SELF" | "PLAYERS" | "HOSTILE" | "ANGERABLE" | "WATER_CREATURE" | "PASSIVE" | "INVISIBLE" | "DEAD" | "SLEEPING" | "FRIENDS";
}