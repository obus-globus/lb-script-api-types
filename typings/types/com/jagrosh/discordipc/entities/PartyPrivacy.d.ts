import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PartyPrivacy extends Enum<PartyPrivacy> {
    static Private: PartyPrivacy;
    static Public: PartyPrivacy;
    static from(paramarg0: number): PartyPrivacy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PartyPrivacy;
    static values(): PartyPrivacy[];
    private constructor()
    name(): "Private" | "Public";
}