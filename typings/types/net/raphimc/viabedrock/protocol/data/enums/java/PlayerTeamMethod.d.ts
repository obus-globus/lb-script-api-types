import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class PlayerTeamMethod extends Enum<PlayerTeamMethod> {
    static ADD: PlayerTeamMethod;
    static CHANGE: PlayerTeamMethod;
    static JOIN: PlayerTeamMethod;
    static LEAVE: PlayerTeamMethod;
    static REMOVE: PlayerTeamMethod;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PlayerTeamMethod;
    static values(): PlayerTeamMethod[];
    private constructor()
    name(): "ADD" | "REMOVE" | "CHANGE" | "JOIN" | "LEAVE";
}