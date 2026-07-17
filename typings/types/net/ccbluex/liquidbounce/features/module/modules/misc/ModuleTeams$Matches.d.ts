import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class ModuleTeams$Matches extends Enum<ModuleTeams$Matches> implements Predicate<LivingEntity>, Tagged {
    static Companion: Tagged$Companion;
    static NAME_COLOR: ModuleTeams$Matches;
    static PREFIX: ModuleTeams$Matches;
    static SCOREBOARD_TEAM: ModuleTeams$Matches;
    static getEntries(): ModuleTeams$Matches[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleTeams$Matches;
    static values(): ModuleTeams$Matches[];
    private constructor(tag: string, testMatches: (param0: LivingEntity) => boolean)
    readonly tag: string;
    // private testMatches: (param0: LivingEntity) => boolean;
    and(arg0: (param0: LivingEntity) => boolean): (param0: LivingEntity) => boolean;
    negate(): (param0: LivingEntity) => boolean;
    or(arg0: (param0: LivingEntity) => boolean): (param0: LivingEntity) => boolean;
    test(p0: LivingEntity): boolean;
    name(): "SCOREBOARD_TEAM" | "NAME_COLOR" | "PREFIX";
}