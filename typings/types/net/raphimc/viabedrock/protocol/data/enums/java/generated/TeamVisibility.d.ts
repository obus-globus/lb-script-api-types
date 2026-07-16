import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class TeamVisibility extends Enum<TeamVisibility> {
    static ALWAYS: TeamVisibility;
    static HIDE_FOR_OTHER_TEAMS: TeamVisibility;
    static HIDE_FOR_OWN_TEAM: TeamVisibility;
    static NEVER: TeamVisibility;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TeamVisibility;
    static values(): TeamVisibility[];
    private constructor()
    name(): "ALWAYS" | "NEVER" | "HIDE_FOR_OTHER_TEAMS" | "HIDE_FOR_OWN_TEAM";
}