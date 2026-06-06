import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class ModuleTeams$Matches extends Enum<ModuleTeams$Matches> implements Predicate<LivingEntity>, Tagged {
    static Companion: Tagged$Companion;
    /**
     * Checks if both names have the same color.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTeams.kt#L117 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTeams.kt:117}
     */
    static NAME_COLOR: ModuleTeams$Matches;
    /**
     * Prefix check - this works on Hypixel BedWars, GommeHD Skywars and many other servers.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTeams.kt#L129 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTeams.kt:129}
     */
    static PREFIX: ModuleTeams$Matches;
    /**
     * Check if {@link LivingEntity} is in your own team using scoreboard,
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTeams.kt#L110 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTeams.kt:110}
     */
    static SCOREBOARD_TEAM: ModuleTeams$Matches;
    static getEntries(): ModuleTeams$Matches[];
    static isEqual(paramarg0: Object): (param0: Object | null) => kotlin.Boolean;
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static not(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleTeams$Matches;
    static values(): (Object | null)[];
    private constructor(tag: string, testMatches: (param0: LivingEntity) => kotlin.Boolean)
    readonly tag: string;
    // private testMatches: (param0: LivingEntity) => kotlin.Boolean;
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    test(p0: LivingEntity): boolean;
    name(): "SCOREBOARD_TEAM" | "NAME_COLOR" | "PREFIX";
}