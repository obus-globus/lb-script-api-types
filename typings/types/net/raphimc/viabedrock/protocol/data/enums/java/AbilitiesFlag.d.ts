import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class AbilitiesFlag extends Enum<AbilitiesFlag> {
    static CAN_FLY: AbilitiesFlag;
    static FLYING: AbilitiesFlag;
    static INSTABUILD: AbilitiesFlag;
    static INVULNERABLE: AbilitiesFlag;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AbilitiesFlag;
    static values(): AbilitiesFlag[];
    private constructor()
    getBit(): number;
    name(): "INVULNERABLE" | "FLYING" | "CAN_FLY" | "INSTABUILD";
}