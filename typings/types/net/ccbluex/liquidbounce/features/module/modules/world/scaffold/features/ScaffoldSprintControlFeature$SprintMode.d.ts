import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ScaffoldSprintControlFeature$SprintMode extends Enum<ScaffoldSprintControlFeature$SprintMode> implements Tagged {
    static Companion: Tagged$Companion;
    static DO_NOT_CHANGE: ScaffoldSprintControlFeature$SprintMode;
    static FORCE_NO_SPRINT: ScaffoldSprintControlFeature$SprintMode;
    static FORCE_SPRINT: ScaffoldSprintControlFeature$SprintMode;
    static NO_SPRINT_ON_GROUND: ScaffoldSprintControlFeature$SprintMode;
    static NO_SPRINT_ON_PLACE: ScaffoldSprintControlFeature$SprintMode;
    static getEntries(): ScaffoldSprintControlFeature$SprintMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ScaffoldSprintControlFeature$SprintMode;
    static values(): ScaffoldSprintControlFeature$SprintMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "DO_NOT_CHANGE" | "FORCE_SPRINT" | "FORCE_NO_SPRINT" | "NO_SPRINT_ON_PLACE" | "NO_SPRINT_ON_GROUND";
}