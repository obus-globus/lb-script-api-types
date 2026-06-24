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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTeams.kt#L117 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTeams.kt:117}
     */
    static NAME_COLOR: ModuleTeams$Matches;
    /**
     * Prefix check - this works on Hypixel BedWars, GommeHD Skywars and many other servers.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTeams.kt#L129 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTeams.kt:129}
     */
    static PREFIX: ModuleTeams$Matches;
    /**
     * Check if {@link LivingEntity} is in your own team using scoreboard,
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTeams.kt#L110 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTeams.kt:110}
     */
    static SCOREBOARD_TEAM: ModuleTeams$Matches;
    static getEntries(): ModuleTeams$Matches[];
    static isEqual(paramarg0: Object): (param0: Object | null) => boolean;
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static not(paramarg0: (param0: Object) => boolean): (param0: Object | null) => boolean;
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleTeams$Matches;
    static values(): (Object | null)[];
    private constructor(tag: string, testMatches: (param0: LivingEntity) => boolean)
    readonly tag: string;
    // private testMatches: (param0: LivingEntity) => boolean;
    and(arg0: (param0: LivingEntity) => boolean): (param0: LivingEntity) => boolean;
    negate(): (param0: LivingEntity) => boolean;
    or(arg0: (param0: LivingEntity) => boolean): (param0: LivingEntity) => boolean;
    test(p0: LivingEntity): boolean;
    name(): "SCOREBOARD_TEAM" | "NAME_COLOR" | "PREFIX";
}