import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PartyPrivacy extends Enum<PartyPrivacy> {
    static Private: PartyPrivacy;
    static Public: PartyPrivacy;
    static from(paramarg0: number): PartyPrivacy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PartyPrivacy;
    static values(): (Object | null)[];
    private constructor()
    name(): "Private" | "Public";
}