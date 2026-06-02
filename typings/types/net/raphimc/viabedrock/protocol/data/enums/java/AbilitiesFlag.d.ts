import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class AbilitiesFlag extends Enum<AbilitiesFlag> {
    static CAN_FLY: AbilitiesFlag;
    static FLYING: AbilitiesFlag;
    static INSTABUILD: AbilitiesFlag;
    static INVULNERABLE: AbilitiesFlag;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AbilitiesFlag;
    static values(): (Object | null)[];
    private constructor()
    getBit(): number;
    name(): "INVULNERABLE" | "FLYING" | "CAN_FLY" | "INSTABUILD";
}