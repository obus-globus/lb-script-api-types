import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class TeamCollisionRule extends Enum<TeamCollisionRule> {
    static ALWAYS: TeamCollisionRule;
    static NEVER: TeamCollisionRule;
    static PUSH_OTHER_TEAMS: TeamCollisionRule;
    static PUSH_OWN_TEAM: TeamCollisionRule;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TeamCollisionRule;
    static values(): TeamCollisionRule[];
    private constructor()
    name(): "ALWAYS" | "NEVER" | "PUSH_OTHER_TEAMS" | "PUSH_OWN_TEAM";
}